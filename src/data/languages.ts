import {
  NativeLanguageInfo,
  NativeLanguageCode,
  SecondaryLanguageInfo,
  SecondaryLanguageCode,
  LanguageRegistryEntry,
  TargetLanguageCode,
  InstructionLanguageCode
} from '../types';

export const CENTRAL_LANGUAGE_REGISTRY: LanguageRegistryEntry[] = [
  {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    script: 'Latin',
    direction: 'ltr',
    flag: '🇬🇧',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'PRODUCTION_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'Hello! Learn English with Curiosity Academy',
    description: 'Full 270-lesson communicative CEFR A1 & A2 master curriculum with dialogue audio, vocabulary stages, and exit assessments.',
    coverageNotes: '100% Production Ready: 270 lessons, 18 units (A1 Lessons 1–90 + A2 Lessons 91–270), exit mastery assessments, and comprehensive reviews.'
  },
  {
    code: 'sa',
    name: 'Sanskrit',
    nativeName: 'संस्कृतम्',
    script: 'Devanagari',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: false,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'LEVEL_STAGES',
    greeting: 'नमो नमः! संस्कृतम् शिक्षेमहि',
    description: 'Classical Sanskrit foundation with structured verb forms, vibhakti, and conversational dialogs.',
    coverageNotes: 'Architecture Ready: Schema and curriculum scaffolding in place. Lesson authoring in progress.'
  },
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    script: 'Devanagari',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'PRODUCTION_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'नमस्ते! अंग्रेजी सीखें (Learn English from Hindi)',
    description: 'Complete Hindi support for English instruction across all 270 lessons, dialogues, vocabulary, and grammar rules.',
    coverageNotes: '100% Production Ready: Full Hindi translations and grammatical explanations across all 270 lessons (Units 1–18).'
  },
  {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    script: 'Bengali',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'নমস্কার! বাংলা থেকে ইংরেজি শিখুন',
    description: 'Bengali instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'ta',
    name: 'Tamil',
    nativeName: 'தமிழ்',
    script: 'Tamil',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'வணக்கம்! தமிழ் மூலம் ஆங்கிலம் கற்றுக்கொள்ளுங்கள்',
    description: 'Tamil instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'te',
    name: 'Telugu',
    nativeName: 'తెలుగు',
    script: 'Telugu',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'నమస్కారం! తెలుగు ద్వారా ఇంగ్లీష్ నేర్చుకోండి',
    description: 'Telugu instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'mr',
    name: 'Marathi',
    nativeName: 'मराठी',
    script: 'Devanagari',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'नमस्कार! मराठीतून इंग्रजी शिका',
    description: 'Marathi instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'gu',
    name: 'Gujarati',
    nativeName: 'ગુજરાતી',
    script: 'Gujarati',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'નમસ્તે! ગુજરાતીમાંથી અંગ્રેજી શીખો',
    description: 'Gujarati instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'pa',
    name: 'Punjabi',
    nativeName: 'ਪੰਜਾਬੀ',
    script: 'Gurmukhi',
    direction: 'ltr',
    flag: '🇮🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ! ਪੰਜਾਬੀ ਤੋਂ ਅੰਗਰੇਜ਼ੀ ਸਿੱਖੋ',
    description: 'Punjabi instruction support with core vocabulary mappings.',
    coverageNotes: 'Architecture Ready: Core vocabulary & schema ready. Comprehensive lesson translations in development.'
  },
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    script: 'Latin',
    direction: 'ltr',
    flag: '🇪🇸',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: '¡Aprende inglés desde el español!',
    description: 'Spanish instruction support and secondary language enrichment layer.',
    coverageNotes: 'Architecture Ready: Secondary language layer active. Full Spanish instruction in progress.'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    script: 'Latin',
    direction: 'ltr',
    flag: '🇫🇷',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'Apprenez l\'anglais depuis le français !',
    description: 'French instruction support and secondary language enrichment layer.',
    coverageNotes: 'Architecture Ready: Secondary language layer active. Full French instruction in progress.'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    script: 'Latin',
    direction: 'ltr',
    flag: '🇩🇪',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'Lerne Englisch aus dem Deutschen!',
    description: 'German instruction support and secondary language enrichment layer.',
    coverageNotes: 'Architecture Ready: Secondary language layer active. Full German instruction in progress.'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    script: 'Latin',
    direction: 'ltr',
    flag: '🇧🇷',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'Aprenda inglês a partir do português!',
    description: 'Portuguese instruction support and secondary language layer.',
    coverageNotes: 'Architecture Ready: Secondary language layer active. Full Portuguese instruction in progress.'
  },
  {
    code: 'zh',
    name: 'Chinese (Mandarin)',
    nativeName: '中文',
    script: 'Simplified Chinese',
    direction: 'ltr',
    flag: '🇨🇳',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: '从中文零基础学英语！',
    description: 'Mandarin Chinese instruction support.',
    coverageNotes: 'Architecture Ready: Schema and phonetics ready. Full Mandarin instruction in progress.'
  },
  {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    script: 'Arabic',
    direction: 'rtl',
    flag: '🇸🇦',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'تعلم اللغة الإنجليزية من العربية!',
    description: 'Arabic instruction support with RTL directional formatting.',
    coverageNotes: 'Architecture Ready: RTL framework enabled. Full Arabic instruction in progress.'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    script: 'Japanese',
    direction: 'ltr',
    flag: '🇯🇵',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: '日本語から英語を楽しく学ぼう！',
    description: 'Japanese instruction support and secondary language layer.',
    coverageNotes: 'Architecture Ready: Secondary language layer active. Full Japanese instruction in progress.'
  },
  {
    code: 'ru',
    name: 'Russian',
    nativeName: 'Русский',
    script: 'Cyrillic',
    direction: 'ltr',
    flag: '🇷🇺',
    isTargetLanguageSupported: true,
    isInstructionLanguageSupported: true,
    status: 'ARCHITECTURE_READY',
    defaultProficiencyFramework: 'CEFR',
    greeting: 'Изучайте английский язык с русского!',
    description: 'Russian instruction support with Cyrillic script handling.',
    coverageNotes: 'Architecture Ready: Cyrillic script framework enabled. Full Russian instruction in progress.'
  }
];

export const SUPPORTED_NATIVE_LANGUAGES: NativeLanguageInfo[] = [
  {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    flag: '🇮🇳',
    greeting: 'नमस्ते! अंग्रेजी सीखें (Learn English from Hindi)',
    status: 'PRODUCTION_READY',
    coverageNotes: '100% Full Content: All 90 lessons, dialogues, vocabulary & grammar explanations in Hindi'
  },
];

export const SUPPORTED_SECONDARY_LANGUAGES: SecondaryLanguageInfo[] = [
  {
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: '🇪🇸',
    description: 'Learn useful Spanish phrases alongside your core English curriculum.'
  },
  {
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: '🇫🇷',
    description: 'Acquire French vocabulary as a secondary language layer.'
  },
  {
    code: 'de',
    name: 'German',
    nativeName: 'Deutsch',
    flag: '🇩🇪',
    description: 'Build basic German expressions alongside your English studies.'
  },
  {
    code: 'ja',
    name: 'Japanese',
    nativeName: '日本語',
    flag: '🇯🇵',
    description: 'Discover essential Japanese phrases together with English.'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    nativeName: 'Português',
    flag: '🇧🇷',
    description: 'Learn conversational Portuguese alongside English.'
  }
];

export function getLanguageRegistryEntry(code: string): LanguageRegistryEntry {
  return CENTRAL_LANGUAGE_REGISTRY.find((l) => l.code === code) || CENTRAL_LANGUAGE_REGISTRY[0];
}

export function getSupportedTargetLanguages(): LanguageRegistryEntry[] {
  return CENTRAL_LANGUAGE_REGISTRY.filter((l) => l.isTargetLanguageSupported);
}

export function getSupportedInstructionLanguages(): LanguageRegistryEntry[] {
  return CENTRAL_LANGUAGE_REGISTRY.filter((l) => l.isInstructionLanguageSupported);
}

export function getLanguageInfo(code: NativeLanguageCode): NativeLanguageInfo {
  return SUPPORTED_NATIVE_LANGUAGES.find((l) => l.code === code) || SUPPORTED_NATIVE_LANGUAGES[0];
}

export function getSecondaryLanguageInfo(code: SecondaryLanguageCode): SecondaryLanguageInfo {
  return SUPPORTED_SECONDARY_LANGUAGES.find((l) => l.code === code) || SUPPORTED_SECONDARY_LANGUAGES[0];
}
