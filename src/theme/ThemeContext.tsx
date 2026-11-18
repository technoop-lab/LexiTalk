import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { ThemeMode, ResolvedTheme, LIGHT_PALETTE, DARK_PALETTE } from './designTokens';

const THEME_STORAGE_KEY = 'curiosity_theme';

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  tokens: typeof DARK_PALETTE;
  isDark: boolean;
  isLight: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
      if (stored && (stored === 'dark' || stored === 'light' || stored === 'system')) {
        return stored;
      }
    } catch {
      // Fallback if localStorage is inaccessible
    }
    return 'dark'; // Dark mode is default
  });

  const [systemPreference, setSystemPreference] = useState<ResolvedTheme>(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  // Listen for system theme updates live
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemPreference(e.matches ? 'dark' : 'light');
    };

    setSystemPreference(mediaQuery.matches ? 'dark' : 'light');

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Compatibility fallback
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  const resolvedTheme: ResolvedTheme = useMemo(() => {
    if (theme === 'system') {
      return systemPreference;
    }
    return theme;
  }, [theme, systemPreference]);

  // Step 1: Sync with root document and body without leaving stale classes
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const root = document.documentElement;
    const body = document.body;

    // Apply dataset attribute
    root.dataset.theme = resolvedTheme;
    if (body) {
      body.dataset.theme = resolvedTheme;
    }

    // Clean and set classes
    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);

    if (body) {
      body.classList.remove('light', 'dark');
      body.classList.add(resolvedTheme);
    }

    root.style.colorScheme = resolvedTheme;
  }, [resolvedTheme]);

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    } catch (e) {
      console.warn('Failed to save theme in localStorage', e);
    }
  };

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    }
  };

  const tokens = resolvedTheme === 'dark' ? (DARK_PALETTE as typeof DARK_PALETTE) : (LIGHT_PALETTE as unknown as typeof DARK_PALETTE);

  const value: ThemeContextType = {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
    tokens,
    isDark: resolvedTheme === 'dark',
    isLight: resolvedTheme === 'light',
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
