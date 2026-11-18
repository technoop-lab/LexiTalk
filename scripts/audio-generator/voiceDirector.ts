export const GEMINI_TTS_MODEL =
  process.env.GEMINI_TTS_MODEL && process.env.GEMINI_TTS_MODEL.includes('gemini')
    ? process.env.GEMINI_TTS_MODEL
    : 'gemini-3.1-flash-tts-preview';

export interface VoiceProfileConfig {
  voiceId: string;
  language: string;
  role: 'teacher' | 'dialogue' | 'secondary_teacher';
  gender: 'female' | 'male';
  displayName: string;
  geminiVoiceName: string;
  status: 'approved' | 'candidate' | 'deprecated';
  version: number;
  description: string;
  accent?: string;
  region?: string;
  speechStyle?: string;
}

export const VOICE_MAP: Record<string, VoiceProfileConfig> = {
  EN_TEACHER_F_01: {
    voiceId: 'EN_TEACHER_F_01',
    language: 'en',
    role: 'teacher',
    gender: 'female',
    displayName: 'Sulafat (Primary English Female Teacher)',
    geminiVoiceName: 'Sulafat',
    status: 'approved',
    version: 1,
    description: 'Primary English female teacher for Curiosity English Academy',
    accent: 'International',
  },
  EN_TEACHER_M_01: {
    voiceId: 'EN_TEACHER_M_01',
    language: 'en',
    role: 'teacher',
    gender: 'male',
    displayName: 'Charon (Primary English Male Teacher)',
    geminiVoiceName: 'Charon',
    status: 'approved',
    version: 1,
    description: 'Primary English male teacher for Curiosity English Academy',
    accent: 'International',
  },
  EN_TEACHER_01: {
    voiceId: 'EN_TEACHER_01',
    language: 'en',
    role: 'teacher',
    gender: 'female',
    displayName: 'Sulafat (Primary English Female Teacher Alias)',
    geminiVoiceName: 'Sulafat',
    status: 'approved',
    version: 1,
    description: 'Legacy alias for primary female teacher',
    accent: 'International',
  },
  EN_FEMALE_01: {
    voiceId: 'EN_FEMALE_01',
    language: 'en',
    role: 'teacher',
    gender: 'female',
    displayName: 'Sulafat (Primary English Female Teacher Alias)',
    geminiVoiceName: 'Sulafat',
    status: 'approved',
    version: 1,
    description: 'Legacy alias for primary female teacher',
    accent: 'International',
  },
  EN_MALE_01: {
    voiceId: 'EN_MALE_01',
    language: 'en',
    role: 'teacher',
    gender: 'male',
    displayName: 'Charon (Primary English Male Teacher Alias)',
    geminiVoiceName: 'Charon',
    status: 'approved',
    version: 1,
    description: 'Legacy alias for primary male teacher',
    accent: 'International',
  },
  EN_DIALOGUE_F_01: {
    voiceId: 'EN_DIALOGUE_F_01',
    language: 'en',
    role: 'dialogue',
    gender: 'female',
    displayName: 'Dialogue Female 1 (Candidate)',
    geminiVoiceName: process.env.GEMINI_VOICE_EN_DIALOGUE_F_01 || 'CONFIGURABLE',
    status: 'candidate',
    version: 1,
    description: 'Recurring female dialogue voice for university students & travelers (e.g. Sarah, Priya)',
    accent: 'International',
  },
  EN_DIALOGUE_M_01: {
    voiceId: 'EN_DIALOGUE_M_01',
    language: 'en',
    role: 'dialogue',
    gender: 'male',
    displayName: 'Dialogue Male 1 (Candidate)',
    geminiVoiceName: process.env.GEMINI_VOICE_EN_DIALOGUE_M_01 || 'CONFIGURABLE',
    status: 'candidate',
    version: 1,
    description: 'Recurring male dialogue voice for university students & casual park walks (e.g. Anil, Rahul)',
    accent: 'International',
  },
  EN_DIALOGUE_F_02: {
    voiceId: 'EN_DIALOGUE_F_02',
    language: 'en',
    role: 'dialogue',
    gender: 'female',
    displayName: 'Dialogue Female 2 (Candidate)',
    geminiVoiceName: process.env.GEMINI_VOICE_EN_DIALOGUE_F_02 || 'CONFIGURABLE',
    status: 'candidate',
    version: 1,
    description: 'Recurring female dialogue voice for workplace colleagues & casual park walks (e.g. Maria, Emma)',
    accent: 'International',
  },
  EN_DIALOGUE_M_02: {
    voiceId: 'EN_DIALOGUE_M_02',
    language: 'en',
    role: 'dialogue',
    gender: 'male',
    displayName: 'Dialogue Male 2 (Candidate)',
    geminiVoiceName: process.env.GEMINI_VOICE_EN_DIALOGUE_M_02 || 'CONFIGURABLE',
    status: 'candidate',
    version: 1,
    description: 'Recurring male dialogue voice for workplace colleagues & airport travelers (e.g. David, Carlos)',
    accent: 'International',
  },
  ES_TEACHER_01: {
    voiceId: 'ES_TEACHER_01',
    language: 'es',
    role: 'secondary_teacher',
    gender: 'female',
    displayName: 'Elena (Spanish Secondary Teacher)',
    geminiVoiceName: 'Kore',
    status: 'approved',
    version: 1,
    description: 'Secondary Spanish guidance teacher',
    accent: 'Spanish',
  },
};

export function getGeminiVoiceName(voiceId: string): string {
  const profile = VOICE_MAP[voiceId];
  if (profile && profile.geminiVoiceName && profile.geminiVoiceName !== 'CONFIGURABLE') {
    return profile.geminiVoiceName;
  }
  // Default fallback if unknown or candidate without assigned voice
  return 'Sulafat';
}

export function buildTTSPrompt(text: string, isSlowVersion: boolean, voiceId = 'EN_TEACHER_F_01'): string {
  const profile = VOICE_MAP[voiceId];
  const isDialogue = profile?.role === 'dialogue' || voiceId.includes('DIALOGUE');

  if (isDialogue) {
    const dialogueContext = [
      'You are speaking as a character in an English conversation dialogue for Curiosity English Academy learners.',
      'Target learner: CEFR A1 adult English learner.',
      'Delivery: Natural, expressive, realistic, clear conversational tone, well-articulated.',
      'Pronunciation: Very clear, clear word boundaries, natural intonation.',
      'No background music, no noise, no sound effects.',
      'Do not add any extra commentary or unrequested words.',
    ];
    if (isSlowVersion) {
      dialogueContext.push('Pacing: Slower, enunciated conversational pace for beginner practice.');
    } else {
      dialogueContext.push('Pacing: Natural conversational speed.');
    }
    return `Instruction: ${dialogueContext.join(' ')}\n\nSpeak the following dialogue line:\n"${text}"`;
  }

  const teacherContext = [
    'You are a professional English teacher for Curiosity English Academy.',
    'Target learner: CEFR A1 adult English learner.',
    'Delivery: Natural, warm, professional, intelligent, calm, encouraging, extremely clear, and internationally understandable.',
    'Pronunciation: Very clear pronunciation without swallowing word endings or rushing.',
    'Maintain natural connected speech and natural conversational intonation.',
    'Contractions (e.g. I\'m, You\'re, What\'s) must sound natural.',
    'No music, no background ambience, no sound effects.',
    'Do not add any unrequested spoken words before or after the text.',
  ];

  if (isSlowVersion) {
    teacherContext.push(
      'Pacing: Slower educational pace for beginner pronunciation practice, enunciating every syllable clearly while preserving natural intonation.'
    );
    return `Instruction: ${teacherContext.join(' ')}\n\nRead the following exact text slowly and clearly:\n"${text}"`;
  } else {
    teacherContext.push(
      'Pacing: Moderate educational pace with natural pauses.'
    );
    return `Instruction: ${teacherContext.join(' ')}\n\nRead the following exact text clearly:\n"${text}"`;
  }
}
