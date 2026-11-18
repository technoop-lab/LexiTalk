import React, { useState } from 'react';
import {
  BookOpen,
  Check,
  AlertTriangle,
  Sparkles,
  X,
  ChevronRight,
  ChevronDown,
  Volume2,
  Zap,
  Layers,
  Clock,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  Flame,
  Lightbulb,
  MessageSquare,
  Printer,
  Bookmark,
  Compass,
  Library,
  Play
} from 'lucide-react';
import { UserAcademyProfile } from '../../types';
import { LESSON_A1_1_1_DATA } from '../../data/lessons/lesson_a1_1_1';
import { AudioService } from '../../services/AudioService';
import { getActiveEnglishAccent, playSoundEffectEffect } from '../../utils/audioUtils';
import {
  getAllGrammarTopics,
  getGrammarTopicCounts,
  searchGrammarTopics,
  getGrammarSourceLabel,
} from '../../services/GrammarLibraryService';

interface GrammarExperienceModalProps {
  user: UserAcademyProfile;
  onClose: () => void;
  initialTab?: 'library' | 'formulas' | 'timeline' | 'traps' | 'playground' | 'patterns' | 'examples' | 'practice' | 'analytics' | 'cheatsheet';
}

type GrammarTab =
  | 'library'
  | 'formulas'
  | 'timeline'
  | 'traps'
  | 'playground'
  | 'patterns'
  | 'examples'
  | 'practice'
  | 'analytics'
  | 'cheatsheet';

// --- DATA STRUCTURES ---

interface FormulaRule {
  id: string;
  tense: string;
  cefr: string;
  formula: {
    subject: string;
    auxiliary?: string;
    verb: string;
    object: string;
  };
  hindiFormula: string;
  ruleTitle: string;
  explanationEn: string;
  explanationHi: string;
  examples: {
    en: string;
    hi: string;
    highlight: string;
  }[];
  whyItWorksEn: string;
  whyItWorksHi: string;
  timeKeywords: string[];
}

const FORMULA_RULES_DATA: FormulaRule[] = [
  {
    id: 'present_simple',
    tense: 'Present Simple',
    cefr: 'A1',
    formula: {
      subject: 'Subject (I / You / We / They / He / She / It)',
      auxiliary: 'do / does (neg/int)',
      verb: 'Base Verb (V1) / Verb + s/es',
      object: 'Object / Daily Routine'
    },
    hindiFormula: 'कर्ता + क्रिया (ता है / ती है / ते हैं) + कर्म',
    ruleTitle: 'Habits, Daily Routines & Universal Facts',
    explanationEn: 'Use Present Simple for actions that happen repeatedly, daily habits, or permanent truths.',
    explanationHi: 'जो काम रोज़ाना या नियमित रूप से होते हैं, या जो सार्वभौमिक सत्य हैं, उनके लिए Present Simple का प्रयोग करें।',
    examples: [
      { en: 'I wake up at 6:00 AM every morning.', hi: 'मैं रोज़ सुबह 6:00 बजे उठता हूँ।', highlight: 'wake up' },
      { en: 'She works at a software company in Bengaluru.', hi: 'वह बेंगलुरु में एक सॉफ्टवेयर कंपनी में काम करती है।', highlight: 'works' },
      { en: 'The sun rises in the east.', hi: 'सूर्य पूर्व में उगता है।', highlight: 'rises' }
    ],
    whyItWorksEn: 'Third-person singular subjects (He, She, It, Rahul) require adding -s or -es to the main verb (e.g. He speaks, She watches). Plural subjects (I, You, We, They) keep the base verb.',
    whyItWorksHi: 'जब कर्ता He, She, It या कोई एकवचन नाम हो, तो क्रिया में s या es जोड़ा जाता है। I, You, We, They के साथ क्रिया का मूल रूप (V1) रहता है।',
    timeKeywords: ['Every day', 'Always', 'Usually', 'Often', 'Never', 'On Mondays']
  },
  {
    id: 'present_continuous',
    tense: 'Present Continuous',
    cefr: 'A1-A2',
    formula: {
      subject: 'Subject',
      auxiliary: 'am / is / are',
      verb: 'Verb + ing (Present Participle)',
      object: 'Object / Location'
    },
    hindiFormula: 'कर्ता + am/is/are + क्रिया(ing) [रहा है / रही है / रहे हैं]',
    ruleTitle: 'Actions Happening Right Now at This Moment',
    explanationEn: 'Use Present Continuous for activities occurring right at this instant or temporary situations around now.',
    explanationHi: 'जो काम बोलते समय ठीक अभी चल रहा है (रहा है, रही है, रहे हैं), उसके लिए am/is/are + V-ing का प्रयोग होता है।',
    examples: [
      { en: 'I am learning spoken English right now.', hi: 'मैं अभी अंग्रेजी बोलना सीख रहा हूँ।', highlight: 'am learning' },
      { en: 'They are preparing dinner in the kitchen.', hi: 'वे रसोई में रात का खाना बना रहे हैं।', highlight: 'are preparing' },
      { en: 'Rohit is waiting for the metro at the station.', hi: 'रोहित स्टेशन पर मेट्रो का इंतज़ार कर रहा है।', highlight: 'is waiting' }
    ],
    whyItWorksEn: 'Always pair the correct form of "be" (I am, He/She/It is, We/You/They are) with the V-ing continuous form. Never omit the helping verb.',
    whyItWorksHi: 'कभी भी Helping verb (am/is/are) को न छोड़ें। "I going" गलत है; "I am going" सही है।',
    timeKeywords: ['Right now', 'At the moment', 'Currently', 'These days', 'Look!']
  },
  {
    id: 'past_simple',
    tense: 'Past Simple',
    cefr: 'A2',
    formula: {
      subject: 'Subject',
      auxiliary: 'did (neg/int only)',
      verb: 'Past Verb (V2 in +) / V1 (in -/?)',
      object: 'Object / Time in Past'
    },
    hindiFormula: 'कर्ता + क्रिया का 2nd रूप (V2) [गया / आया / किया / देखा]',
    ruleTitle: 'Finished Past Actions at a Specific Time',
    explanationEn: 'Use Past Simple for completed events that happened in the past and are completely finished.',
    explanationHi: 'जो काम भूतकाल में समाप्त हो चुका है और जिसका वर्तमान से सीधा सम्बंध नहीं है (गया, आया, खाया, देखा)।',
    examples: [
      { en: 'We visited Mumbai last December.', hi: 'हम पिछले दिसंबर मुंबई गए थे।', highlight: 'visited' },
      { en: 'She didn’t receive the courier yesterday.', hi: 'उसे कल कूरियर नहीं मिला था।', highlight: 'didn’t receive' },
      { en: 'Did you complete the presentation?', hi: 'क्या तुमने प्रेजेंटेशन पूरा कर लिया?', highlight: 'Did you complete' }
    ],
    whyItWorksEn: 'In positive sentences, use the 2nd form of the verb (went, played, watched). In negative/questions, "did" already carries the past tense, so revert to base V1 (e.g. did not go, NOT did not went).',
    whyItWorksHi: 'सकारात्मक वाक्य में V2 लगता है। लेकिन "did" आने पर हमेशा क्रिया का पहला रूप (V1) ही आता है (जैसे: She didn’t come, NOT didn’t came)।',
    timeKeywords: ['Yesterday', 'Last night', '2 days ago', 'In 2024', 'When I was young']
  },
  {
    id: 'future_simple',
    tense: 'Future Simple',
    cefr: 'A2',
    formula: {
      subject: 'Subject',
      auxiliary: 'will',
      verb: 'Base Verb (V1)',
      object: 'Object / Future Plan'
    },
    hindiFormula: 'कर्ता + will + क्रिया (गा / गी / गे) + कर्म',
    ruleTitle: 'Instant Decisions, Promises & Future Events',
    explanationEn: 'Use "will + V1" for spontaneous decisions made at the moment of speaking, promises, or future predictions.',
    explanationHi: 'भविष्य में होने वाले कामों, वादों, या तुरंत लिए गए निर्णयों के लिए (गा, गी, गे)।',
    examples: [
      { en: 'I will call you as soon as I reach home.', hi: 'मैं घर पहुँचते ही तुम्हें कॉल करूँगा।', highlight: 'will call' },
      { en: 'They will attend the annual team meeting tomorrow.', hi: 'वे कल वार्षिक टीम मीटिंग में शामिल होंगे।', highlight: 'will attend' },
      { en: 'Don’t worry, I will help you with this project.', hi: 'चिंता मत करो, मैं इस प्रोजेक्ट में तुम्हारी मदद करूँगा।', highlight: 'will help' }
    ],
    whyItWorksEn: 'Will is a modal auxiliary verb. It NEVER changes form (no wills, no willing) and is ALWAYS followed by the pure base verb (V1) without "to".',
    whyItWorksHi: 'Will के साथ हमेशा क्रिया का पहला रूप (V1) आता है। इसके साथ कभी s/es या V2/V3 नहीं लगता।',
    timeKeywords: ['Tomorrow', 'Next week', 'Soon', 'In the future', 'Later today']
  }
];

// --- HINDI TRAP CARDS DATA ---
interface HindiTrap {
  id: string;
  trapTitle: string;
  incorrect: string;
  correct: string;
  hindiThought: string;
  explanation: string;
  proTip: string;
  category: string;
}

const HINDI_SPEAKER_TRAPS: HindiTrap[] = [
  {
    id: 'trap_stative_having',
    trapTitle: 'Stative Verbs in Continuous Aspect ("I am having...")',
    incorrect: 'I am having two brothers and one car.',
    correct: 'I have two brothers and a car.',
    hindiThought: 'हिन्दी में "मेरे पास दो भाई हैं" को सीधे "having" में अनुवाद करना।',
    explanation: 'Verbs of possession (have, own, belong) and perception (know, understand, remember) are "stative verbs". They express a state, not an action, so do not use them in continuous -ing form for possession.',
    proTip: 'Use "having" only for dynamic activities: "I am having lunch" (eating) or "I am having a good time" (experiencing).',
    category: 'Verb Tenses'
  },
  {
    id: 'trap_double_past',
    trapTitle: 'Double Past Tense Trap ("did + V2")',
    incorrect: 'She didn’t came to office yesterday.',
    correct: 'She didn’t come to office yesterday.',
    hindiThought: 'हिन्दी में "वह कल नहीं आई" सोचकर didn’t के साथ came (V2) लगा देना।',
    explanation: 'The auxiliary verb "did" already carries the past tense signal for the sentence. The main verb that follows MUST strictly return to its base infinitive form (V1).',
    proTip: 'Remember: "Did" absorbs the past tense like a sponge! Did + V1 always.',
    category: 'Past Tense'
  },
  {
    id: 'trap_doing_job',
    trapTitle: 'Job Description Trap ("doing job")',
    incorrect: 'My friend is doing job in Bengaluru.',
    correct: 'My friend works in Bengaluru. / My friend has a job in Bengaluru.',
    hindiThought: 'हिन्दी अभिव्यक्ति "नौकरी कर रहा है" का शब्द-दर-शब्द अनुवाद "doing job"।',
    explanation: 'Native English speakers use the verb "work" (e.g. He works at Google) rather than combining "do" with "job". Permanent professions are expressed in Present Simple.',
    proTip: 'Say: "I work as a software engineer" instead of "I am doing software engineer job".',
    category: 'Workplace English'
  },
  {
    id: 'trap_discuss_about',
    trapTitle: 'Preposition Redundancy ("discuss about")',
    incorrect: 'Let’s discuss about the salary increment today.',
    correct: 'Let’s discuss the salary increment today.',
    hindiThought: 'हिन्दी में "के बारे में चर्चा करना" सोचकर "about" जोड़ना।',
    explanation: '"Discuss" is a transitive verb that directly takes an object. The meaning "about" is already inherently built into the word "discuss".',
    proTip: 'Discuss = talk about. So saying "discuss about" is like saying "talk about about".',
    category: 'Prepositions'
  },
  {
    id: 'trap_since_for',
    trapTitle: 'Since vs For Time Trap',
    incorrect: 'I am living in Pune since 4 years.',
    correct: 'I have been living in Pune for 4 years.',
    hindiThought: 'हिन्दी में "4 साल से" सोचकर "since 4 years" और "am living" का प्रयोग।',
    explanation: 'Use "FOR" with a duration/period of time (4 years, 2 hours, 10 days). Use "SINCE" only with a specific starting point (since 2020, since Monday, since 9:00 AM). Also, ongoing actions starting in the past require Present Perfect Continuous ("have been living").',
    proTip: 'Formula: For + Duration (गिनती) | Since + Starting Point (तारीख / समय का बिंदु)',
    category: 'Time & Prepositions'
  },
  {
    id: 'trap_revert_back',
    trapTitle: 'Redundant Revert ("revert back")',
    incorrect: 'Please revert back to my email as soon as possible.',
    correct: 'Please reply to my email / Please revert to my query soon.',
    hindiThought: 'Email में आम भारतीय आदत "revert back" लिखना।',
    explanation: '"Revert" already contains the prefix "re-" meaning back. Adding "back" makes it redundant. In international business English, "reply to" or "respond to" is preferred.',
    proTip: 'Use "Please reply at your earliest convenience" for a natural, global executive tone.',
    category: 'Business English'
  },
  {
    id: 'trap_discuss_about',
    trapTitle: 'Transitive Verb Trap ("discuss about")',
    incorrect: 'We discussed about the project yesterday.',
    correct: 'We discussed the project yesterday.',
    hindiThought: 'हिन्दी में "हमने प्रोजेक्ट के बारे में चर्चा की" — "के बारे में" को सीधे "about" बना देना।',
    explanation: '"Discuss" is a transitive verb — it already means "talk about". Adding "about" after it is redundant and non-standard in English.',
    proTip: 'Say "discuss something", "talk about something", "explain something". Never "discuss about".',
    category: 'Prepositions'
  },
  {
    id: 'trap_agree_adjective',
    trapTitle: 'Verb-as-Adjective Trap ("I am agree")',
    incorrect: 'I am agree with your plan.',
    correct: 'I agree with your plan.',
    hindiThought: 'हिन्दी में "मैं सहमत हूँ" — "हूँ" देखकर "am agree" लिख देना।',
    explanation: '"Agree" is a verb, not an adjective. English uses it directly with the subject: I agree / He agrees. Never pair it with am / is / are.',
    proTip: 'Fix pattern: "I am agree" → "I agree". Same trap: "I am understand" → "I understand".',
    category: 'Verb Tenses'
  },
  {
    id: 'trap_since_present_perfect',
    trapTitle: 'Duration Trap ("since" needs Perfect Continuous)',
    incorrect: 'I am living in Bengaluru since 2019.',
    correct: 'I have been living in Bengaluru since 2019.',
    hindiThought: 'हिन्दी में "2019 से रह रहा हूँ" — वर्तमान में जारी भाव दिखता है, इसलिए Present Continuous सूझता है।',
    explanation: '"Since" + a starting point describes an action that began in the past and is STILL true now. English marks this with Present Perfect Continuous (have/has been + V-ing), not Present Continuous.',
    proTip: 'since 2019 / since Monday → have been + V-ing. for 3 years → have been + V-ing too.',
    category: 'Verb Tenses'
  },
  {
    id: 'trap_double_comparative',
    trapTitle: 'Double Comparative Trap ("more better")',
    incorrect: 'This option is more better than that one.',
    correct: 'This option is better than that one.',
    hindiThought: 'हिन्दी में "और बेहतर" — "और" को सीधे "more" में बदल देना।',
    explanation: 'Irregular comparatives like better, worse and farther already contain the comparison. Adding "more" compares twice — use one, never both.',
    proTip: 'better (not more better), cheaper (not more cheaper). Use "more" only with longer adjectives: more difficult.',
    category: 'Sentence Structure'
  }
];

// --- REAL LIFE EXAMPLE GALLERY ---
interface RealLifeExample {
  id: string;
  context: string;
  speaker: string;
  avatar: string;
  en: string;
  hi: string;
  targetRule: string;
  ruleTag: string;
}

const REAL_LIFE_EXAMPLES: RealLifeExample[] = [
  {
    id: 'ex_1',
    context: '💼 Tech Office Standup',
    speaker: 'Aarav (Lead Dev)',
    avatar: '👨‍💻',
    en: 'I am currently optimizing the checkout API to improve server speed.',
    hi: 'मैं सर्वर की गति सुधारने के लिए अभी चेकआउट एपीआई को ऑप्टिमाइज़ कर रहा हूँ।',
    targetRule: 'am currently optimizing (Present Continuous)',
    ruleTag: 'Present Continuous'
  },
  {
    id: 'ex_2',
    context: '☕ Coffee Chat with Colleague',
    speaker: 'Priya (Manager)',
    avatar: '👩‍💼',
    en: 'We usually hold our sprint retrospective every alternate Friday afternoon.',
    hi: 'हम आमतौर पर हर दूसरे शुक्रवार दोपहर अपनी स्प्रिंट रेट्रोस्पेक्टिव मीटिंग आयोजित करते हैं।',
    targetRule: 'usually hold (Present Simple Habit)',
    ruleTag: 'Present Simple'
  },
  {
    id: 'ex_3',
    context: '✈️ Airport Boarding Gate',
    speaker: 'Flight Attendant',
    avatar: '✈️',
    en: 'Flight AI-302 departed on schedule from Gate 14 twenty minutes ago.',
    hi: 'उड़ान AI-302 बीस मिनट पहले गेट 14 से निर्धारित समय पर रवाना हुई थी।',
    targetRule: 'departed ... twenty minutes ago (Past Simple Finished)',
    ruleTag: 'Past Simple'
  },
  {
    id: 'ex_4',
    context: '🩺 Doctor Appointment',
    speaker: 'Doctor Mehta',
    avatar: '🩺',
    en: 'You must take this antibiotic twice daily after your meals.',
    hi: 'आपको यह एंटीबायोटिक भोजन के बाद दिन में दो बार अवश्य लेना चाहिए।',
    targetRule: 'must take (Modal of Obligation)',
    ruleTag: 'Modal Verbs'
  },
  {
    id: 'ex_5',
    context: '🛍️ Retail Store Assistance',
    speaker: 'Store Associate',
    avatar: '🛍️',
    en: 'Will you pay by credit card or UPI at the billing counter?',
    hi: 'क्या आप बिलिंग काउंटर पर क्रेडिट कार्ड या UPI से भुगतान करेंगे?',
    targetRule: 'Will you pay (Future Simple Question)',
    ruleTag: 'Future Simple'
  }
];

// --- PLAYGROUND CHALLENGES ---
interface PlaygroundChallenge {
  id: string;
  promptHi: string;
  expectedSentence: string;
  slots: {
    subject: string;
    auxiliary: string;
    verb: string;
    object: string;
  };
  wordBank: string[];
}

const PLAYGROUND_CHALLENGES: PlaygroundChallenge[] = [
  {
    id: 'pg_1',
    promptHi: 'वाक्य बनाएं: "वह (लड़की) रोज़ सुबह पार्क में दौड़ती है।"',
    expectedSentence: 'She runs in the park every morning.',
    slots: {
      subject: 'She',
      auxiliary: '—',
      verb: 'runs',
      object: 'in the park every morning'
    },
    wordBank: ['She', 'runs', 'in the park every morning', 'is', 'run', 'yesterday']
  },
  {
    id: 'pg_2',
    promptHi: 'वाक्य बनाएं: "वे अभी नए प्रोजेक्ट पर काम कर रहे हैं।"',
    expectedSentence: 'They are working on the new project right now.',
    slots: {
      subject: 'They',
      auxiliary: 'are',
      verb: 'working',
      object: 'on the new project right now'
    },
    wordBank: ['They', 'are', 'working', 'on the new project right now', 'is', 'worked']
  },
  {
    id: 'pg_3',
    promptHi: 'वाक्य बनाएं: "हमने कल शाम को स्वादिष्ट पिज्जा खाया।"',
    expectedSentence: 'We ate delicious pizza yesterday evening.',
    slots: {
      subject: 'We',
      auxiliary: '—',
      verb: 'ate',
      object: 'delicious pizza yesterday evening'
    },
    wordBank: ['We', 'ate', 'delicious pizza yesterday evening', 'eat', 'are', 'did']
  }
];

// --- QUICK PRACTICE QUESTIONS ---
interface PracticeQuestion {
  id: string;
  type: 'fill_blank' | 'choose_correct' | 'spot_error';
  promptEn: string;
  promptHi: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const PRACTICE_QUESTIONS: PracticeQuestion[] = [
  {
    id: 'pq_1',
    type: 'fill_blank',
    promptEn: 'Rohan _______ to the gym five days a week.',
    promptHi: 'रोहन सप्ताह में पाँच दिन जिम जाता है।',
    options: ['go', 'goes', 'going', 'is go'],
    correctIndex: 1,
    explanation: 'Third-person singular subject "Rohan" requires the singular verb "goes" in Present Simple.'
  },
  {
    id: 'pq_2',
    type: 'choose_correct',
    promptEn: 'Which sentence is grammatically standard and natural?',
    promptHi: 'कौन सा वाक्य व्याकरण की दृष्टि से शुद्ध और स्वाभाविक है?',
    options: [
      'She didn’t knew the answer yesterday.',
      'She didn’t know the answer yesterday.',
      'She doesn’t knew the answer yesterday.',
      'She not know the answer yesterday.'
    ],
    correctIndex: 1,
    explanation: '"Didn’t" already carries past tense, so use the base verb "know" (V1).'
  },
  {
    id: 'pq_3',
    type: 'fill_blank',
    promptEn: 'Be quiet please! The baby _______ right now.',
    promptHi: 'कृपया शांत रहें! बच्चा अभी सो रहा है।',
    options: ['sleeps', 'is sleeping', 'slept', 'are sleeping'],
    correctIndex: 1,
    explanation: 'Keyword "right now" indicates an ongoing action, requiring "is sleeping" (Present Continuous).'
  },
  {
    id: 'pq_4',
    type: 'spot_error',
    promptEn: 'Identify the error: "I am living in Mumbai since 10 years."',
    promptHi: 'ग़लती पहचानें: 10 साल की अवधि (duration) के लिए क्या लगेगा?',
    options: [
      'Change "since" to "for"',
      'Change "living" to "lived"',
      'Change "Mumbai" to "in Mumbai"',
      'Change "10 years" to "10 year"'
    ],
    correctIndex: 0,
    explanation: 'Use "FOR" for a duration of time (for 10 years). Use "SINCE" only for starting points.'
  },
  {
    id: 'pq_5',
    type: 'fill_blank',
    promptEn: 'She _______ to office by metro every day.',
    promptHi: 'वह हर दिन मेट्रो से ऑफिस जाती है।',
    options: ['go', 'goes', 'going', 'is go'],
    correctIndex: 1,
    explanation: '"She" is third-person singular, so Present Simple needs the -s form: "goes".'
  },
  {
    id: 'pq_6',
    type: 'choose_correct',
    promptEn: 'Which sentence uses the correct article?',
    promptHi: 'कौन सा वाक्य सही article (a/an/the) का प्रयोग करता है?',
    options: [
      'She is an honest officer.',
      'She is a honest officer.',
      'She is the honest officer.',
      'She is honest officer.'
    ],
    correctIndex: 0,
    explanation: '"Honest" begins with a vowel SOUND, so it takes "an": an honest officer. Articles follow sound, not spelling.'
  },
  {
    id: 'pq_7',
    type: 'fill_blank',
    promptEn: 'You _______ wear a seatbelt while driving. It\u2019s the law.',
    promptHi: 'गाड़ी चलाते समय सीटबेल्ट पहनना चाहिए — यह कानून है।',
    options: ['can', 'should', 'must', 'may'],
    correctIndex: 2,
    explanation: '"Must" expresses a strong obligation imposed by law; "should" is only advice, not a legal requirement.'
  },
  {
    id: 'pq_8',
    type: 'fill_blank',
    promptEn: 'If it _______ tomorrow, we will cancel the picnic.',
    promptHi: 'अगर कल बारिश हुई तो हम पिकनिक रद्द कर देंगे।',
    options: ['rains', 'will rain', 'rained', 'is rain'],
    correctIndex: 0,
    explanation: 'First conditional: If + Present Simple, ... will + V1. The if-clause never takes "will".'
  },
  {
    id: 'pq_9',
    type: 'choose_correct',
    promptEn: 'Which sentence is in the Present Perfect tense?',
    promptHi: 'कौन सा वाक्य Present Perfect काल में है?',
    options: [
      'I have finished my homework.',
      'I finished my homework yesterday.',
      'I am finishing my homework.',
      'I will finish my homework.'
    ],
    correctIndex: 0,
    explanation: 'Present Perfect = have/has + V3, for finished actions with present relevance — never with "yesterday".'
  },
  {
    id: 'pq_10',
    type: 'spot_error',
    promptEn: 'Identify the error: "He didn\u2019t went to school yesterday."',
    promptHi: 'ग़लती पहचानें: didn\u2019t के बाद क्रिया का कौन सा रूप सही है?',
    options: [
      'Change "didn\u2019t" to "doesn\u2019t"',
      'Change "went" to "go"',
      'Change "yesterday" to "today"',
      'Change "He" to "They"'
    ],
    correctIndex: 1,
    explanation: '"Did/didn\u2019t" already carries the past tense, so the main verb returns to its base form: didn\u2019t go.'
  }
];

// --- CHEAT SHEETS DATA ---
const CHEAT_SHEETS = [
  {
    title: 'Present Simple Tense',
    formula: 'Subject + V1 (s/es) + Object',
    usage: 'Habits, routines, permanent truths',
    hindiSummary: 'ता है, ती है, ते हैं (रोज़मर्रा के कार्य)',
    tip: 'He/She/It = add -s/-es. I/You/We/They = base verb.',
    color: 'border-indigo-500'
  },
  {
    title: 'Present Continuous Tense',
    formula: 'Subject + am/is/are + V-ing + Object',
    usage: 'Actions in progress right now',
    hindiSummary: 'रहा है, रही है, रहे हैं (वर्तमान में जारी)',
    tip: 'Never drop helping verb (am/is/are).',
    color: 'border-cyan-500'
  },
  {
    title: 'Past Simple Tense',
    formula: 'Subject + V2 (+) / didn’t + V1 (-/?)',
    usage: 'Finished past actions at specific time',
    hindiSummary: 'गया, आया, देखा, किया (भूतकाल में समाप्त)',
    tip: 'Did + V1 always. Never say "didn’t came".',
    color: 'border-emerald-500'
  },
  {
    title: 'Future Simple Tense',
    formula: 'Subject + will + V1 + Object',
    usage: 'Instant decisions, promises, predictions',
    hindiSummary: 'गा, गी, गे (भविष्य का निर्णय/योजना)',
    tip: 'Will is always followed by pure base verb without "to".',
    color: 'border-amber-500'
  },
  {
    title: 'Modal Verbs (Can, Should, Must)',
    formula: 'Subject + Modal + V1 + Object',
    usage: 'Ability (Can), Advice (Should), Necessity (Must)',
    hindiSummary: 'सकता है (Can), चाहिए (Should), ज़रूर (Must)',
    tip: 'No "to" after modal: "I can swim", not "I can to swim".',
    color: 'border-purple-500'
  },
  {
    title: 'Prepositions: IN vs ON vs AT',
    formula: 'AT (specific point/time) • ON (surface/day) • IN (enclosed space/month/year)',
    usage: 'Spatial and temporal location rules',
    hindiSummary: 'at 5 PM, on Monday, in July, at the door, in India',
    tip: 'Pyramid rule: AT is narrowest, ON is medium, IN is broadest.',
    color: 'border-teal-500'
  },
  {
    title: 'Present Perfect Tense',
    formula: 'Subject + have/has + V3 + Object',
    usage: 'Past actions with present results; experience; unfinished time',
    hindiSummary: 'कर चुका है / कर लिया है (अनुभव व वर्तमान परिणाम)',
    tip: 'have with I/You/We/They, has with He/She/It. Never with "yesterday".',
    color: 'border-rose-500'
  },
  {
    title: 'Conditional Sentences (If-Clauses)',
    formula: 'If + Present Simple, ... will + V1  (First Conditional)',
    usage: 'Real future possibilities; conditions and results',
    hindiSummary: 'अगर...तो (भविष्य की संभावित शर्त)',
    tip: 'The if-clause NEVER takes "will": "If it rains, we will stay home."',
    color: 'border-sky-500'
  },
  {
    title: 'Passive Voice',
    formula: 'Object + is/are/was/were + V3 (+ by Subject)',
    usage: 'When the action matters more than the doer',
    hindiSummary: 'किया गया / की गई (कर्ता कम, क्रिया ज़्यादा ज़रूरी)',
    tip: 'Active "Ravi wrote it" → Passive "It was written by Ravi". The tense lives in the be-verb.',
    color: 'border-orange-500'
  }
];

export const GrammarExperienceModal: React.FC<GrammarExperienceModalProps> = ({
  user,
  onClose,
  initialTab = 'formulas'
}) => {
  const [activeTab, setActiveTab] = useState<GrammarTab>(initialTab);
  const [selectedRuleId, setSelectedRuleId] = useState<string>('present_simple');
  const [selectedTimelineTense, setSelectedTimelineTense] = useState<'past' | 'present' | 'future'>('present');
  const [isSlowSpeech, setIsSlowSpeech] = useState(false);

  // Grammar Library state
  const [libraryQuery, setLibraryQuery] = useState('');
  const [libraryLevel, setLibraryLevel] = useState<'all' | 'A1' | 'A2'>('all');
  const [expandedLibraryId, setExpandedLibraryId] = useState<string | null>(null);
  const [expandedPatternIndex, setExpandedPatternIndex] = useState<number | null>(0);

  // Playground state
  const [currentPlaygroundIndex, setCurrentPlaygroundIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [playgroundFeedback, setPlaygroundFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Practice Arena state
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isPracticeSubmitted, setIsPracticeSubmitted] = useState(false);
  const [practiceScore, setPracticeScore] = useState(0);

  const activeRule = FORMULA_RULES_DATA.find((r) => r.id === selectedRuleId) || FORMULA_RULES_DATA[0];
  const activePlayground = PLAYGROUND_CHALLENGES[currentPlaygroundIndex];
  const currentPracticeQ = PRACTICE_QUESTIONS[practiceIndex];

  // Grammar Library derived data (service list is built once and cached)
  const grammarTopics = getAllGrammarTopics();
  const grammarCounts = getGrammarTopicCounts();
  const levelFilter = libraryLevel === 'all' ? null : libraryLevel;
  const levelFilteredTopics = grammarTopics.filter(
    (t) => !levelFilter || (t.cefr || '').toUpperCase().startsWith(levelFilter),
  );
  const searchedLibraryTopics = libraryQuery.trim()
    ? searchGrammarTopics(libraryQuery, levelFilteredTopics)
    : levelFilteredTopics;
  const shownLibraryTopics = searchedLibraryTopics.slice(0, 60);

  const handlePlayAudio = (text: string) => {
    playSoundEffectEffect('tap');
    AudioService.speak(text, getActiveEnglishAccent(), isSlowSpeech ? 0.75 : 1.0);
  };

  // Playground Handlers
  const handleTapWord = (word: string) => {
    playSoundEffectEffect('tap');
    if (!selectedWords.includes(word)) {
      setSelectedWords([...selectedWords, word]);
    }
  };

  const handleRemoveWord = (word: string) => {
    playSoundEffectEffect('tap');
    setSelectedWords(selectedWords.filter((w) => w !== word));
    setPlaygroundFeedback(null);
  };

  const handleCheckPlayground = () => {
    const constructed = selectedWords.join(' ').trim();
    // Normalize spaces and punctuation for comparison
    const normalizedConstructed = constructed.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();
    const normalizedExpected = activePlayground.expectedSentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '').toLowerCase();

    if (normalizedConstructed === normalizedExpected) {
      playSoundEffectEffect('correct');
      setPlaygroundFeedback('correct');
    } else {
      playSoundEffectEffect('wrong');
      setPlaygroundFeedback('wrong');
    }
  };

  const handleNextPlayground = () => {
    playSoundEffectEffect('tap');
    setSelectedWords([]);
    setPlaygroundFeedback(null);
    setCurrentPlaygroundIndex((prev) => (prev + 1) % PLAYGROUND_CHALLENGES.length);
  };

  // Practice Handlers
  const handleSelectPracticeOption = (idx: number) => {
    if (isPracticeSubmitted) return;
    playSoundEffectEffect('tap');
    setSelectedOption(idx);
  };

  const handleSubmitPracticeAnswer = () => {
    if (selectedOption === null) return;
    setIsPracticeSubmitted(true);
    if (selectedOption === currentPracticeQ.correctIndex) {
      playSoundEffectEffect('correct');
      setPracticeScore((prev) => prev + 25);
    } else {
      playSoundEffectEffect('wrong');
    }
  };

  const handleNextPracticeQ = () => {
    playSoundEffectEffect('tap');
    setSelectedOption(null);
    setIsPracticeSubmitted(false);
    if (practiceIndex < PRACTICE_QUESTIONS.length - 1) {
      setPracticeIndex((prev) => prev + 1);
    } else {
      setPracticeIndex(0); // Loop or finish
    }
  };

  return (
    <div
      id="grammar-studio-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-lg flex items-center justify-center p-2 sm:p-4 overflow-y-auto animate-fade-in"
    >
      <div
        id="grammar-studio-container"
        className="bg-white dark:bg-[#080E1E] border border-[#D9E4FF] dark:border-slate-800/90 rounded-[28px] sm:rounded-[36px] w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] transition-all"
      >
        {/* Top Header Bar */}
        <div className="p-3.5 sm:p-4.5 border-b border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between bg-white/95 dark:bg-[#0A1226]/95 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#335CFF] to-[#6D5DF6] flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-display">
                  Grammar Studio (व्याकरण स्टूडियो)
                </h2>
                <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-lg border border-indigo-200 dark:border-indigo-500/30">
                  V1.0 Flagship
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                Intuitive Formula Syntax • Contrastive Indian English Fixes
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Slow Speech Toggle */}
            <button
              onClick={() => {
                playSoundEffectEffect('tap');
                setIsSlowSpeech(!isSlowSpeech);
              }}
              className={`px-2.5 py-1 rounded-xl text-[11px] font-black transition border cursor-pointer ${
                isSlowSpeech
                  ? 'bg-amber-50 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-500/40 shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-transparent hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Toggle Speech Rate"
            >
              {isSlowSpeech ? '🐢 0.75x' : '⚡ 1.0x'}
            </button>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition cursor-pointer btn-press"
              aria-label="Close Grammar Studio"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Studio Tabs Navigation (9 Modes) */}
        <div className="px-3 py-2 bg-slate-50/90 dark:bg-slate-900/90 border-b border-[#D9E4FF] dark:border-slate-800 flex space-x-1.5 overflow-x-auto no-scrollbar scrollbar-none">
          {[
            { id: 'library', label: 'Grammar Library', icon: Library },
            { id: 'formulas', label: 'Formulas', icon: Layers },
            { id: 'timeline', label: 'Tense Timeline', icon: Clock },
            { id: 'traps', label: `Hindi Traps (${HINDI_SPEAKER_TRAPS.length})`, icon: AlertTriangle },
            { id: 'playground', label: 'Playground', icon: Sparkles },
            { id: 'patterns', label: 'Patterns', icon: Compass },
            { id: 'examples', label: 'Live Gallery', icon: MessageSquare },
            { id: 'practice', label: 'Quick Quiz', icon: Award },
            { id: 'analytics', label: 'Apple Rings', icon: Flame },
            { id: 'cheatsheet', label: 'Cheat Sheets', icon: BookOpen }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSoundEffectEffect('tap');
                  setActiveTab(tab.id as GrammarTab);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap flex items-center space-x-1.5 cursor-pointer btn-press ${
                  isActive
                    ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25 font-black'
                    : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-[#D9E4FF] dark:border-transparent'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Main Studio Content */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-5 flex-1 max-h-[calc(94vh-120px)] custom-scrollbar">
          {/* ========================================================================= */}
          {/* PART 1: ROYAL INDIGO APPLE FITNESS HERO STUDIO */}
          {/* ========================================================================= */}
          <div className="bg-gradient-to-br from-[#294BFF] via-[#335CFF] to-[#5C45FD] text-white rounded-3xl p-4.5 sm:p-5 shadow-xl shadow-indigo-500/20 relative overflow-hidden border border-indigo-400/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-widest text-indigo-100">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  <span>Interactive Grammar Core</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black font-display tracking-tight text-white">
                  Intuitive English Structure Mastery
                </h3>
                <p className="text-xs text-indigo-100/90 max-w-sm leading-relaxed">
                  Learn how English sentences are built mathematically without rote memorization.
                </p>

                <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-[11px] font-bold">
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center space-x-1">
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>{grammarCounts.total} Topics Indexed</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-xl flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>{grammarCounts.bySource.lesson} Lessons · {grammarCounts.bySource.hindi_day} Hindi Rules</span>
                  </span>
                </div>
              </div>

              {/* Apple Fitness Dynamic Circular Gauge */}
              <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-white/15"
                    strokeWidth="9"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="text-amber-400 transition-all duration-1000 ease-out"
                    strokeWidth="9"
                    strokeDasharray={251.2}
                    strokeDashoffset={251.2 * (1 - 0.75)}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-lg font-black font-display text-white">{grammarCounts.total}</span>
                  <span className="text-[9px] uppercase font-bold tracking-wider text-indigo-100">Grammar Topics</span>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* PART 1B: GRAMMAR LIBRARY — in-depth, aggregated from all app corpora    */}
          {/* ========================================================================= */}
          {activeTab === 'library' && (
            <div className="space-y-4 animate-fade-in">
              {/* Live corpus stat cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { label: 'Total Topics', value: grammarCounts.total, badge: '📚' },
                  { label: 'Lesson Grammar', value: grammarCounts.bySource.lesson, badge: '📖' },
                  { label: 'Hindi Rules', value: grammarCounts.bySource.hindi_day, badge: '🇮🇳' },
                  {
                    label: 'Guidebook + Blueprint',
                    value: grammarCounts.bySource.guidebook + grammarCounts.bySource.blueprint,
                    badge: '🧭',
                  },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3 space-y-0.5 shadow-xs"
                  >
                    <div className="flex items-center space-x-1.5">
                      <span className="text-sm">{stat.badge}</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        {stat.label}
                      </span>
                    </div>
                    <p className="text-xl font-black text-slate-900 dark:text-white font-display">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Search + CEFR level chips */}
              <div className="space-y-2.5">
                <input
                  type="text"
                  value={libraryQuery}
                  onChange={(e) => {
                    setLibraryQuery(e.target.value);
                    setExpandedLibraryId(null);
                  }}
                  placeholder="Search grammar… e.g. present perfect, conditionals, articles, question tag, व्याकरण"
                  className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-[#D9E4FF] dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 transition"
                />
                <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
                  {(['all', 'A1', 'A2'] as const).map((level) => {
                    const isActive = libraryLevel === level;
                    return (
                      <button
                        key={level}
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setLibraryLevel(level);
                          setExpandedLibraryId(null);
                        }}
                        className={`px-3.5 py-2 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer btn-press border ${
                          isActive
                            ? 'bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] text-white shadow-md shadow-indigo-500/25'
                            : 'bg-white dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-[#D9E4FF] dark:border-slate-700'
                        }`}
                      >
                        {level === 'all' ? 'All Levels' : level}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Results */}
              <div className="space-y-2.5">
                <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                  Showing {shownLibraryTopics.length} of {searchedLibraryTopics.length} topics
                  {libraryQuery.trim() ? ` matching “${libraryQuery.trim()}”` : ''} · tap a topic for the full explanation
                </p>

                {shownLibraryTopics.length === 0 && (
                  <div className="bg-white dark:bg-slate-900 border border-dashed border-[#D9E4FF] dark:border-slate-700 rounded-3xl p-6 text-center space-y-1.5">
                    <p className="text-sm font-black text-slate-700 dark:text-slate-200">No topics match that search</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Try “tense”, “modal”, “conditionals”, “preposition”, or clear the search box.
                    </p>
                  </div>
                )}

                {shownLibraryTopics.map((topic) => {
                  const isExpanded = expandedLibraryId === topic.id;
                  return (
                    <div
                      key={topic.id}
                      className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl shadow-xs overflow-hidden transition hover:border-indigo-300 dark:hover:border-indigo-500/40"
                    >
                      <button
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setExpandedLibraryId(isExpanded ? null : topic.id);
                        }}
                        className="w-full flex items-center justify-between gap-3 p-3.5 text-left cursor-pointer"
                      >
                        <div className="flex items-center space-x-2.5 min-w-0">
                          <span className="shrink-0 px-2 py-0.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 text-[10px] font-black border border-indigo-200 dark:border-indigo-500/30">
                            {topic.cefr}
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                            {topic.title}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 shrink-0">
                          <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 hidden sm:block">
                            {getGrammarSourceLabel(topic.source)}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-3.5 pb-3.5 pt-3 border-t border-[#D9E4FF] dark:border-slate-800 space-y-3">
                          {(topic.lessonTitle || topic.dayNumber) && (
                            <p className="text-[10px] font-black uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                              {topic.lessonTitle
                                ? `Unit ${topic.unitNumber} · ${topic.lessonTitle}`
                                : `Hindi Course · Day ${topic.dayNumber}`}
                            </p>
                          )}
                          {topic.register && (
                            <span className="inline-block px-2 py-0.5 rounded-lg bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-black border border-amber-200 dark:border-amber-500/30">
                              Register: {topic.register}
                            </span>
                          )}

                          {topic.concept && (
                            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                              {topic.concept}
                            </p>
                          )}
                          {topic.conceptHi && (
                            <p className="text-xs text-emerald-700 dark:text-emerald-400 leading-relaxed font-hindi">
                              {topic.conceptHi}
                            </p>
                          )}

                          {topic.structure && (
                            <div className="bg-slate-950 border border-slate-800 rounded-2xl px-3 py-2.5 font-mono text-[11px] text-emerald-400 font-bold">
                              {topic.structure}
                            </div>
                          )}

                          {topic.patterns && topic.patterns.length > 0 && (
                            <div className="space-y-1.5">
                              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Sentence Patterns
                              </p>
                              <div className="flex flex-wrap gap-1.5">
                                {topic.patterns.map((pat, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-bold border border-[#D9E4FF] dark:border-slate-700"
                                  >
                                    {pat}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {topic.commonErrors && topic.commonErrors.length > 0 && (
                            <div className="space-y-1.5">
                              <p className="text-[10px] font-black uppercase tracking-wider text-rose-500">
                                Common Errors (आम ग़लतियाँ)
                              </p>
                              <ul className="space-y-1">
                                {topic.commonErrors.map((err, idx) => (
                                  <li
                                    key={idx}
                                    className="text-[11px] text-rose-600 dark:text-rose-400 font-medium flex items-start space-x-1.5"
                                  >
                                    <XCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span>{err}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {topic.contractions && topic.contractions.length > 0 && (
                            <div className="space-y-1.5">
                              <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                                Contractions (संक्षिप्त रूप)
                              </p>
                              <div className="space-y-1.5">
                                {topic.contractions.slice(0, 5).map((row, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-between gap-2 bg-slate-50 dark:bg-slate-950/80 border border-[#D9E4FF] dark:border-slate-800 rounded-xl px-3 py-2"
                                  >
                                    <div className="min-w-0">
                                      <p className="text-[11px] font-bold text-slate-600 dark:text-slate-400 line-through">
                                        {row.full}
                                      </p>
                                      <p className="text-xs font-black text-emerald-600 dark:text-emerald-400">
                                        {row.contracted}
                                      </p>
                                      {row.meaningHi && (
                                        <p className="text-[10px] text-slate-500 dark:text-slate-400 font-hindi">
                                          {row.meaningHi}
                                        </p>
                                      )}
                                    </div>
                                    <button
                                      onClick={() => handlePlayAudio(row.contracted)}
                                      className="p-2 bg-indigo-100 dark:bg-indigo-500/20 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-xl transition cursor-pointer shrink-0"
                                      title="Listen"
                                    >
                                      <Volume2 className="w-3.5 h-3.5" />
                                    </button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 2: INTERACTIVE FORMULA CARDS */}
          {/* ========================================================================= */}
          {activeTab === 'formulas' && (
            <div className="space-y-4 animate-fade-in">
              {/* Formula Rule Selector Chips */}
              <div className="flex space-x-2 overflow-x-auto pb-1 no-scrollbar">
                {FORMULA_RULES_DATA.map((rule) => {
                  const isSelected = rule.id === selectedRuleId;
                  return (
                    <button
                      key={rule.id}
                      onClick={() => {
                        playSoundEffectEffect('tap');
                        setSelectedRuleId(rule.id);
                      }}
                      className={`px-3.5 py-2 rounded-2xl text-xs font-black transition whitespace-nowrap cursor-pointer btn-press border ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-500/25 scale-102'
                          : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-800 hover:border-indigo-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <span>{rule.tense}</span>
                      <span className="ml-1.5 text-[9px] px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                        {rule.cefr}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Formula Card */}
              <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-[#D9E4FF] dark:border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      Master Formula & Usage ({activeRule.tense})
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                      {activeRule.ruleTitle}
                    </h4>
                  </div>
                  <span className="text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300 px-2.5 py-1 rounded-xl border border-indigo-200 dark:border-indigo-500/30">
                    {activeRule.cefr} Standard
                  </span>
                </div>

                {/* Color-Coded Syntax Chips Blueprint */}
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-2.5">
                  <span className="text-[10px] uppercase font-black tracking-wider text-slate-500 dark:text-slate-400 block">
                    Mathematical Sentence Architecture:
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/40 text-cyan-900 dark:text-cyan-200 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                      [ {activeRule.formula.subject} ]
                    </div>
                    <span className="text-slate-400 font-bold">+</span>
                    {activeRule.formula.auxiliary && (
                      <>
                        <div className="bg-amber-100 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-500/40 text-amber-900 dark:text-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                          [ {activeRule.formula.auxiliary} ]
                        </div>
                        <span className="text-slate-400 font-bold">+</span>
                      </>
                    )}
                    <div className="bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-900 dark:text-emerald-200 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                      [ {activeRule.formula.verb} ]
                    </div>
                    <span className="text-slate-400 font-bold">+</span>
                    <div className="bg-indigo-100 dark:bg-indigo-950/60 border border-indigo-300 dark:border-indigo-500/40 text-indigo-900 dark:text-indigo-200 px-3 py-1.5 rounded-xl text-xs font-bold shadow-xs">
                      [ {activeRule.formula.object} ]
                    </div>
                  </div>

                  {/* Hindi Formula Equivalent */}
                  <div className="pt-2 border-t border-[#D9E4FF] dark:border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="text-amber-700 dark:text-amber-400 font-bold font-hindi">
                      💡 हिन्दी सूत्र: {activeRule.hindiFormula}
                    </span>
                  </div>
                </div>

                {/* Explanations (English & Hindi) */}
                <div className="space-y-2">
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeRule.explanationEn}
                  </p>
                  <p className="text-xs text-indigo-700 dark:text-indigo-300 font-hindi font-medium bg-indigo-50/50 dark:bg-indigo-950/30 p-2.5 rounded-xl border border-indigo-100 dark:border-indigo-900/50">
                    {activeRule.explanationHi}
                  </p>
                </div>

                {/* Example Sentences with Audio */}
                <div className="space-y-2 pt-1">
                  <span className="text-[10px] uppercase font-black tracking-wider text-slate-500 dark:text-slate-400 block">
                    Exemplar Sentences (उदाहरणात्मक वाक्य):
                  </span>
                  {activeRule.examples.map((ex, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-950 p-3 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between gap-3 shadow-xs hover:border-indigo-300 transition"
                    >
                      <div className="space-y-0.5 flex-1">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          "{ex.en}"
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi italic">
                          "{ex.hi}"
                        </p>
                      </div>
                      <button
                        onClick={() => handlePlayAudio(ex.en)}
                        className="p-2.5 bg-indigo-100 dark:bg-indigo-500/20 hover:bg-indigo-200 dark:hover:bg-indigo-500/30 text-indigo-600 dark:text-indigo-300 rounded-xl transition cursor-pointer shrink-0"
                        title="Listen to pronunciation"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* "Why This Works" Section */}
                <div className="bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/30 p-3.5 rounded-2xl space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-amber-800 dark:text-amber-300">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span className="text-xs font-black uppercase tracking-wider">
                      Why This Works (यह नियम क्यों काम करता है)
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeRule.whyItWorksEn}
                  </p>
                  <p className="text-[11px] text-amber-700 dark:text-amber-400 font-hindi font-medium">
                    {activeRule.whyItWorksHi}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 3: TENSE TIMELINE */}
          {/* ========================================================================= */}
          {activeTab === 'timeline' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                    Interactive Chronological Navigator
                  </span>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    English Tense Timeline (समय रेखा)
                  </h4>
                </div>

                {/* Horizontal Interactive Timeline Axis */}
                <div className="relative py-4">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-indigo-500 to-amber-500 rounded-full transform -translate-y-1/2" />

                  <div className="relative flex items-center justify-between">
                    {[
                      { id: 'past', label: 'PAST', icon: '⏪', color: 'emerald' },
                      { id: 'present', label: 'PRESENT', icon: '⏱️', color: 'indigo' },
                      { id: 'future', label: 'FUTURE', icon: '⏩', color: 'amber' }
                    ].map((tense) => {
                      const isActive = selectedTimelineTense === tense.id;
                      return (
                        <button
                          key={tense.id}
                          onClick={() => {
                            playSoundEffectEffect('tap');
                            setSelectedTimelineTense(tense.id as any);
                          }}
                          className={`flex flex-col items-center space-y-1.5 transition transform cursor-pointer ${
                            isActive ? 'scale-110 z-10' : 'opacity-70 hover:opacity-100 scale-95'
                          }`}
                        >
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-black shadow-lg border-2 ${
                              isActive
                                ? 'bg-indigo-600 text-white border-white dark:border-slate-900 shadow-indigo-500/40 ring-4 ring-indigo-500/20'
                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-[#D9E4FF] dark:border-slate-700'
                            }`}
                          >
                            <span>{tense.icon}</span>
                          </div>
                          <span className={`text-[11px] font-black uppercase tracking-wider ${isActive ? 'text-indigo-600 dark:text-indigo-400 font-extrabold' : 'text-slate-500'}`}>
                            {tense.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Timeline Tense Deep Dive */}
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-3">
                  {selectedTimelineTense === 'past' && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2 py-0.5 rounded-md">
                        Past Simple & Completed Actions
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Subject + Verb(V2) + Object
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Use for actions that occurred and completed before the present moment (e.g. "I finished my degree in 2023").
                      </p>
                      <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-[#D9E4FF] dark:border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Trigger Signals:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Yesterday', 'Last night', 'In 2022', '3 hours ago', 'When I was in school'].map((kw) => (
                            <span key={kw} className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-700 dark:text-slate-300">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTimelineTense === 'present' && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md">
                        Present Simple & Present Continuous
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Routines (V1/s/es) vs Ongoing (am/is/are + V-ing)
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Differentiate between daily routines ("I drink coffee every morning") and actions happening right now ("I am drinking coffee right now").
                      </p>
                      <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-[#D9E4FF] dark:border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Trigger Signals:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Every day', 'Right now', 'Always', 'At the moment', 'These days'].map((kw) => (
                            <span key={kw} className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-700 dark:text-slate-300">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedTimelineTense === 'future' && (
                    <div className="space-y-2">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-md">
                        Future Simple & Intentions
                      </span>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        Subject + will + V1 / is going to + V1
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        Use "will" for spontaneous decisions and promises, and "going to" for pre-arranged future plans.
                      </p>
                      <div className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-[#D9E4FF] dark:border-slate-800 space-y-1">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">Trigger Signals:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {['Tomorrow', 'Next month', 'Soon', 'In 2026', 'Later tonight'].map((kw) => (
                            <span key={kw} className="text-[11px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded font-mono text-slate-700 dark:text-slate-300">
                              {kw}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 4: HINDI SPEAKER TRAPS */}
          {/* ========================================================================= */}
          {activeTab === 'traps' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    Hindi Speaker Traps (हिन्दी भाषियों की {HINDI_SPEAKER_TRAPS.length} सामान्य ग़लतियाँ)
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Fix translation interference and speak naturally like a global native.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3.5">
                {HINDI_SPEAKER_TRAPS.map((trap) => (
                  <div
                    key={trap.id}
                    className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-5 space-y-3 shadow-sm hover:border-amber-300 dark:hover:border-amber-500/40 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 px-2.5 py-0.5 rounded-lg border border-amber-300 dark:border-amber-500/30">
                        {trap.category}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">⚠️ Trap Alert</span>
                    </div>

                    <h5 className="text-sm font-black text-slate-900 dark:text-white font-display">
                      {trap.trapTitle}
                    </h5>

                    {/* Comparison Box */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/30 space-y-1">
                        <span className="text-[10px] font-black text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center space-x-1">
                          <XCircle className="w-3.5 h-3.5" />
                          <span>Don’t Say (गलत):</span>
                        </span>
                        <p className="text-xs font-bold text-rose-900 dark:text-rose-200 font-mono line-through">
                          "{trap.incorrect}"
                        </p>
                      </div>

                      <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-500/30 space-y-1">
                        <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Say Instead (सही):</span>
                        </span>
                        <p className="text-xs font-bold text-emerald-900 dark:text-emerald-200 font-mono">
                          "{trap.correct}"
                        </p>
                      </div>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-[#D9E4FF] dark:border-slate-800 space-y-1">
                      <p className="text-xs text-slate-700 dark:text-slate-300">
                        {trap.explanation}
                      </p>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400 font-hindi font-medium">
                        {trap.hindiThought}
                      </p>
                      <div className="pt-1.5 border-t border-[#D9E4FF] dark:border-slate-800/80 text-[11px] text-indigo-600 dark:text-indigo-300 font-bold flex items-center space-x-1">
                        <span>💡 Pro-Tip:</span>
                        <span>{trap.proTip}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 5: GRAMMAR PLAYGROUND (Sentence Builder) */}
          {/* ========================================================================= */}
          {activeTab === 'playground' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      Sentence Slot Builder • Challenge {currentPlaygroundIndex + 1} of {PLAYGROUND_CHALLENGES.length}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                      Assemble the Sentence in Grammar Order
                    </h4>
                  </div>
                  <button
                    onClick={handleNextPlayground}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 transition cursor-pointer"
                  >
                    Skip ⏩
                  </button>
                </div>

                {/* Prompt in Hindi */}
                <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 p-3.5 rounded-2xl">
                  <p className="text-sm font-bold text-indigo-950 dark:text-white font-hindi">
                    {activePlayground.promptHi}
                  </p>
                </div>

                {/* Construction Zone */}
                <div className="bg-slate-50 dark:bg-slate-950 min-h-[90px] p-4 rounded-2xl border-2 border-dashed border-[#D9E4FF] dark:border-slate-800 flex flex-wrap items-center gap-2">
                  {selectedWords.length === 0 ? (
                    <span className="text-xs text-slate-400 dark:text-slate-500 italic">
                      Tap words from the bank below to place them in sentence order...
                    </span>
                  ) : (
                    selectedWords.map((word, idx) => (
                      <button
                        key={`${word}_${idx}`}
                        onClick={() => handleRemoveWord(word)}
                        className="bg-indigo-600 hover:bg-rose-600 text-white px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm transition transform active:scale-95 cursor-pointer flex items-center space-x-1"
                        title="Tap to remove"
                      >
                        <span>{word}</span>
                        <X className="w-3 h-3 ml-1" />
                      </button>
                    ))
                  )}
                </div>

                {/* Word Bank */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Available Word Bank:</span>
                  <div className="flex flex-wrap gap-2">
                    {activePlayground.wordBank.map((word, idx) => {
                      const isUsed = selectedWords.includes(word);
                      return (
                        <button
                          key={`bank_${idx}`}
                          onClick={() => handleTapWord(word)}
                          disabled={isUsed}
                          className={`px-3 py-2 rounded-xl text-xs font-bold transition border cursor-pointer ${
                            isUsed
                              ? 'opacity-30 bg-slate-200 dark:bg-slate-800 border-transparent text-slate-400 cursor-not-allowed'
                              : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-[#D9E4FF] dark:border-slate-700 hover:border-indigo-400 shadow-xs'
                          }`}
                        >
                          {word}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Feedback Drawer */}
                {playgroundFeedback === 'correct' && (
                  <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span>Brilliant! Sentence structure is 100% grammatically correct.</span>
                    </div>
                    <button
                      onClick={handleNextPlayground}
                      className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black rounded-xl shadow-md transition cursor-pointer"
                    >
                      Next Challenge ➡️
                    </button>
                  </div>
                )}

                {playgroundFeedback === 'wrong' && (
                  <div className="p-3.5 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-500/40 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-300 text-xs font-bold">
                      <XCircle className="w-5 h-5 text-rose-500" />
                      <span>Not quite right. Expected: "{activePlayground.expectedSentence}"</span>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedWords([]);
                        setPlaygroundFeedback(null);
                      }}
                      className="px-3 py-1.5 bg-slate-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
                    >
                      Reset 🔄
                    </button>
                  </div>
                )}

                {/* Check Button */}
                {!playgroundFeedback && (
                  <button
                    onClick={handleCheckPlayground}
                    disabled={selectedWords.length === 0}
                    className="w-full py-3 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] disabled:opacity-40 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer transition active:scale-[0.98]"
                  >
                    Validate Sentence Structure (जांचें)
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 6: REAL-LIFE EXAMPLE GALLERY */}
          {/* ========================================================================= */}
          {activeTab === 'examples' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-indigo-500" />
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    Real-Life Conversation Gallery (व्यावहारिक संवाद)
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    See grammar applied inside authentic workplace, travel, and social contexts.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {REAL_LIFE_EXAMPLES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-4 sm:p-5 space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">{item.avatar}</span>
                        <div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white block">
                            {item.speaker}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {item.context}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-black bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-500/30">
                        {item.ruleTag}
                      </span>
                    </div>

                    {/* Chat Bubble Presentation */}
                    <div className="bg-slate-50 dark:bg-slate-950 p-3.5 rounded-2xl border border-[#D9E4FF] dark:border-slate-800/80 space-y-1.5 relative">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                          "{item.en}"
                        </p>
                        <button
                          onClick={() => handlePlayAudio(item.en)}
                          className="p-2 bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-xl hover:scale-105 transition cursor-pointer shrink-0"
                          title="Listen"
                        >
                          <Volume2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi italic">
                        "{item.hi}"
                      </p>
                      <div className="pt-1.5 border-t border-[#D9E4FF] dark:border-slate-800 text-[10px] text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                        🔍 Applied Rule: {item.targetRule}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 7: GRAMMAR PATTERN EXPLORER */}
          {/* ========================================================================= */}
          {activeTab === 'patterns' && (
            <div className="space-y-3.5 animate-fade-in">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  Syntactic Patterns Accordion
                </span>
                <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                  8 Core Sentence Forms & Structures
                </h4>
              </div>

              <div className="space-y-2.5">
                {[
                  {
                    title: '1. Affirmative Declarative (+)',
                    formula: 'Subject + Verb + Object',
                    exampleEn: 'I learn new English words every day.',
                    exampleHi: 'मैं रोज़ाना नए अंग्रेजी शब्द सीखता हूँ।',
                    explanation: 'Used for stating facts, positive habits, and true statements.'
                  },
                  {
                    title: '2. Negative Statements (-)',
                    formula: 'Subject + do/does not + V1 + Object',
                    exampleEn: 'He does not watch television on weekdays.',
                    exampleHi: 'वह सप्ताह के दिनों में टीवी नहीं देखता है।',
                    explanation: 'Use "does not" for singular subjects (He, She, It) and "do not" for plural (I, You, We, They).'
                  },
                  {
                    title: '3. Yes/No Questions (?)',
                    formula: 'Do / Does / Is / Are + Subject + Verb + Object?',
                    exampleEn: 'Do you speak fluent English at work?',
                    exampleHi: 'क्या आप काम पर धाराप्रवाह अंग्रेजी बोलते हैं?',
                    explanation: 'Place the helping verb in the initial sentence position.'
                  },
                  {
                    title: '4. WH- Informational Questions',
                    formula: 'WH-Word + Helping Verb + Subject + Main Verb?',
                    exampleEn: 'Where do you live in Delhi NCR?',
                    exampleHi: 'आप दिल्ली एनसीआर में कहाँ रहते हैं?',
                    explanation: 'WH words: What (क्या), Where (कहाँ), When (कब), Why (क्यों), How (कैसे).'
                  },
                  {
                    title: '5. Modal Verbs of Ability & Obligation',
                    formula: 'Subject + can / should / must + V1',
                    exampleEn: 'You should practice speaking 15 minutes daily.',
                    exampleHi: 'आपको रोज़ाना 15 मिनट बोलने का अभ्यास करना चाहिए।',
                    explanation: 'Modals never take "to" or "s/es" on the following verb.'
                  }
                ].map((pat, idx) => {
                  const isExpanded = expandedPatternIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs"
                    >
                      <button
                        onClick={() => {
                          playSoundEffectEffect('tap');
                          setExpandedPatternIndex(isExpanded ? null : idx);
                        }}
                        className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-850 transition cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                          {pat.title}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isExpanded ? 'transform rotate-180 text-indigo-500' : ''
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="p-4 pt-0 space-y-2.5 border-t border-[#D9E4FF] dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40">
                          <div className="bg-indigo-50 dark:bg-indigo-950/40 p-2.5 rounded-xl border border-indigo-200 dark:border-indigo-500/30">
                            <span className="text-[10px] uppercase font-bold text-indigo-600 dark:text-indigo-400 block">Formula Structure:</span>
                            <p className="text-xs font-mono font-bold text-indigo-950 dark:text-white">
                              {pat.formula}
                            </p>
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-300">
                            {pat.explanation}
                          </p>
                          <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800 space-y-0.5">
                            <p className="text-xs font-bold text-slate-900 dark:text-white">"{pat.exampleEn}"</p>
                            <p className="text-[11px] text-slate-500 font-hindi italic">"{pat.exampleHi}"</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 8: QUICK PRACTICE ARENA */}
          {/* ========================================================================= */}
          {activeTab === 'practice' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      Adaptive Grammar Arena • Question {practiceIndex + 1} of {PRACTICE_QUESTIONS.length}
                    </span>
                    <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                      Quick Retrieval & Mastery Check
                    </h4>
                  </div>
                  <div className="flex items-center space-x-1 bg-amber-50 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-500/30 px-2.5 py-1 rounded-xl text-amber-700 dark:text-amber-300 text-xs font-black">
                    <Flame className="w-3.5 h-3.5" />
                    <span>Score: {practiceScore} XP</span>
                  </div>
                </div>

                {/* Question Box */}
                <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-[#D9E4FF] dark:border-slate-800 space-y-1.5">
                  <span className="text-[10px] uppercase font-black tracking-wider text-slate-400 block">
                    Target Question:
                  </span>
                  <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white font-display">
                    {currentPracticeQ.promptEn}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-hindi">
                    {currentPracticeQ.promptHi}
                  </p>
                </div>

                {/* Option Selector */}
                <div className="grid grid-cols-1 gap-2.5">
                  {currentPracticeQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === idx;
                    let optionStyle = 'bg-white dark:bg-slate-900 border-[#D9E4FF] dark:border-slate-800 text-slate-800 dark:text-slate-200';

                    if (isPracticeSubmitted) {
                      if (idx === currentPracticeQ.correctIndex) {
                        optionStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 font-bold';
                      } else if (isSelected) {
                        optionStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-800 dark:text-rose-200 font-bold';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-500 text-indigo-700 dark:text-indigo-200 font-bold';
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectPracticeOption(idx)}
                        disabled={isPracticeSubmitted}
                        className={`p-3.5 rounded-2xl border text-xs sm:text-sm text-left transition flex items-center justify-between cursor-pointer btn-press ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {isPracticeSubmitted && idx === currentPracticeQ.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        )}
                        {isPracticeSubmitted && isSelected && idx !== currentPracticeQ.correctIndex && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Card upon submission */}
                {isPracticeSubmitted && (
                  <div className="p-3.5 bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-500/30 rounded-2xl space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                      Grammar Insight:
                    </span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      {currentPracticeQ.explanation}
                    </p>
                  </div>
                )}

                {/* Action CTA */}
                {!isPracticeSubmitted ? (
                  <button
                    onClick={handleSubmitPracticeAnswer}
                    disabled={selectedOption === null}
                    className="w-full py-3.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] disabled:opacity-40 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer transition active:scale-[0.98]"
                  >
                    Check Answer (जांचें)
                  </button>
                ) : (
                  <button
                    onClick={handleNextPracticeQ}
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs uppercase tracking-wider rounded-2xl shadow-md cursor-pointer transition active:scale-[0.98]"
                  >
                    Next Question ➡️
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 9: APPLE FITNESS GRAMMAR ANALYTICS */}
          {/* ========================================================================= */}
          {activeTab === 'analytics' && (
            <div className="space-y-4 animate-fade-in">
              <div className="bg-white dark:bg-slate-900 border border-[#D9E4FF] dark:border-slate-800 rounded-3xl p-5 space-y-4 shadow-sm">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                    Concentric Health & Fluency Rings
                  </span>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    Grammar Mastery Rings (व्याकरण विश्लेषिकी)
                  </h4>
                </div>

                {/* 3 Concentric Rings */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-4">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    <svg className="w-44 h-44 transform -rotate-90" viewBox="0 0 160 160">
                      {/* Outer Ring: Lessons Completed (Emerald) */}
                      <circle cx="80" cy="80" r="68" strokeWidth="12" stroke="currentColor" fill="transparent" className="text-emerald-500/15" />
                      <circle
                        cx="80"
                        cy="80"
                        r="68"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="transparent"
                        strokeDasharray={427}
                        strokeDashoffset={427 * (1 - 0.85)}
                        strokeLinecap="round"
                        className="text-emerald-500 transition-all duration-1000"
                      />

                      {/* Middle Ring: Rules Mastered (Royal Indigo) */}
                      <circle cx="80" cy="80" r="50" strokeWidth="12" stroke="currentColor" fill="transparent" className="text-indigo-500/15" />
                      <circle
                        cx="80"
                        cy="80"
                        r="50"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="transparent"
                        strokeDasharray={314}
                        strokeDashoffset={314 * (1 - 0.72)}
                        strokeLinecap="round"
                        className="text-indigo-600 transition-all duration-1000"
                      />

                      {/* Inner Ring: Hindi Traps Fixed (Amber) */}
                      <circle cx="80" cy="80" r="32" strokeWidth="12" stroke="currentColor" fill="transparent" className="text-amber-500/15" />
                      <circle
                        cx="80"
                        cy="80"
                        r="32"
                        strokeWidth="12"
                        stroke="currentColor"
                        fill="transparent"
                        strokeDasharray={201}
                        strokeDashoffset={201 * (1 - 0.90)}
                        strokeLinecap="round"
                        className="text-amber-500 transition-all duration-1000"
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <Award className="w-6 h-6 text-indigo-500 mb-0.5" />
                      <span className="text-xs font-black text-slate-900 dark:text-white">82%</span>
                    </div>
                  </div>

                  {/* Legend breakdown */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                      <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">Lessons Completed (85%)</span>
                        <span className="text-[10px] text-slate-500">22 of 26 Core Stage Lessons</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                      <div className="w-3.5 h-3.5 rounded-full bg-indigo-600 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">Rules Mastered (72%)</span>
                        <span className="text-[10px] text-slate-500">18 of 24 Core Formula Rules</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-[#D9E4FF] dark:border-slate-800">
                      <div className="w-3.5 h-3.5 rounded-full bg-amber-500 shrink-0" />
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">Traps Overcome (90%)</span>
                        <span className="text-[10px] text-slate-500">5 of 6 Indian English Traps</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* PART 10: PREMIUM CHEAT SHEETS */}
          {/* ========================================================================= */}
          {activeTab === 'cheatsheet' && (
            <div className="space-y-3.5 animate-fade-in">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-white font-display">
                    Printable Grammar Cheat Sheets (त्वरित संदर्भ पत्रक)
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Concise formula cards ready for quick revision anytime.
                  </p>
                </div>
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/20 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-300 rounded-xl text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print All</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CHEAT_SHEETS.map((cs, idx) => (
                  <div
                    key={idx}
                    className={`bg-white dark:bg-slate-900 border-l-4 ${cs.color} border-y border-r border-[#D9E4FF] dark:border-slate-800 rounded-2xl p-3.5 space-y-2 shadow-xs`}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="text-xs font-black text-slate-900 dark:text-white font-display">
                        {cs.title}
                      </h5>
                      <Bookmark className="w-3.5 h-3.5 text-slate-400 hover:text-indigo-500 cursor-pointer" />
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-2 rounded-xl border border-[#D9E4FF] dark:border-slate-800 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-300">
                      {cs.formula}
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-slate-300">
                      📌 <span className="font-bold">Usage:</span> {cs.usage}
                    </p>
                    <p className="text-[11px] text-amber-700 dark:text-amber-400 font-hindi font-medium">
                      💡 {cs.hindiSummary}
                    </p>
                    <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium pt-1 border-t border-[#D9E4FF] dark:border-slate-800">
                      ⚡ Tip: {cs.tip}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[#D9E4FF] dark:border-slate-800 flex items-center justify-between bg-white dark:bg-[#0A1226] sticky bottom-0 z-30">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            Curiosity English Academy • CEFR Grammar System
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-gradient-to-r from-[#335CFF] to-[#6D5DF6] hover:brightness-110 text-white font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition cursor-pointer active:scale-95"
          >
            Done Learning (पूरा हुआ)
          </button>
        </div>
      </div>
    </div>
  );
};
