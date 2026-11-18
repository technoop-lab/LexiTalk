import type { CapacitorConfig } from '@capacitor/cli';

const isDev = process.env.NODE_ENV === 'development';

const config: CapacitorConfig = {
  appId: 'com.curiosity.english',
  appName: 'Curiosity English Academy',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
    cleartext: isDev,
  },
  android: {
    allowMixedContent: isDev,
    captureInput: true,
    webContentsDebuggingEnabled: isDev,
  },
};

export default config;
