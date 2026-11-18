import { VocabItem } from '../types';

export interface SyllableInfo {
  syllable: string;
  isStressed: boolean;
  ipa: string;
}

export interface WordFamilyNode {
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'phrase';
  word: string;
  phonetic: string;
  meaning: string;
  hindiMeaning: string;
  example: string;
}

export interface MemoryBoostInfo {
  mnemonic: string;
  hindiSpeakerTrap: string;
  naturalUsage: string;
  dontSay: string;
  sayInstead: string;
  collocations: string[];
  synonyms: string[];
  antonyms: string[];
}

export interface MouthPositionGuide {
  lips: string;
  tongue: string;
  airflow: string;
  voiceVibration: boolean;
  proTip: string;
}

export interface EnrichedVocabData {
  partOfSpeech: string;
  cefrLevel: string;
  frequencyRank: string;
  syllables: SyllableInfo[];
  stressPattern: string;
  mouthGuide: MouthPositionGuide;
  wordFamily: {
    root: string;
    members: WordFamilyNode[];
  };
  memoryBoost: MemoryBoostInfo;
  collection: string;
  collectionIcon: string;
}

export interface VocabCollectionCategory {
  id: string;
  title: string;
  hindiTitle: string;
  icon: string;
  colorGradient: string;
  bgGlow: string;
  wordsCount: number;
  sampleWords: string[];
  description: string;
}

// 10 Curated Vocabulary Collections
export const VOCAB_COLLECTIONS: VocabCollectionCategory[] = [
  {
    id: 'travel',
    title: 'Travel & Exploration',
    hindiTitle: 'यात्रा एवं पर्यटन',
    icon: '✈️',
    colorGradient: 'from-blue-500 to-cyan-400',
    bgGlow: 'rgba(59, 130, 246, 0.2)',
    wordsCount: 48,
    sampleWords: ['Ticket', 'Passport', 'Journey', 'Luggage', 'Hotel', 'Explore'],
    description: 'Essential phrases for booking hotels, buying tickets, asking directions, and travelling abroad.'
  },
  {
    id: 'food',
    title: 'Food & Dining',
    hindiTitle: 'भोजन एवं रेस्टोरेंट',
    icon: '🍲',
    colorGradient: 'from-amber-500 to-orange-400',
    bgGlow: 'rgba(245, 158, 11, 0.2)',
    wordsCount: 52,
    sampleWords: ['Delicious', 'Order', 'Menu', 'Spicy', 'Bill', 'Reserve'],
    description: 'Ordering food in restaurants, dietary preferences, cooking verbs, and describing flavors.'
  },
  {
    id: 'office',
    title: 'Office & Professional',
    hindiTitle: 'कार्यालय एवं पेशेवर संवाद',
    icon: '💼',
    colorGradient: 'from-indigo-600 to-[#335CFF]',
    bgGlow: 'rgba(51, 92, 255, 0.2)',
    wordsCount: 65,
    sampleWords: ['Meeting', 'Deadline', 'Colleague', 'Report', 'Schedule', 'Presentation'],
    description: 'Workplace communication, emails, meetings, client discussions, and corporate etiquette.'
  },
  {
    id: 'doctor',
    title: 'Doctor & Health',
    hindiTitle: 'चिकित्सा एवं स्वास्थ्य',
    icon: '🩺',
    colorGradient: 'from-emerald-500 to-teal-400',
    bgGlow: 'rgba(16, 185, 129, 0.2)',
    wordsCount: 42,
    sampleWords: ['Fever', 'Prescription', 'Appointment', 'Headache', 'Medicine', 'Recovery'],
    description: 'Describing symptoms to a doctor, visiting pharmacy, emergency phrases, and wellness.'
  },
  {
    id: 'airport',
    title: 'Airport & Flying',
    hindiTitle: 'हवाई अड्डा एवं उड़ान',
    icon: '🛫',
    colorGradient: 'from-sky-500 to-indigo-500',
    bgGlow: 'rgba(14, 165, 233, 0.2)',
    wordsCount: 38,
    sampleWords: ['Boarding Pass', 'Gate', 'Security', 'Customs', 'Departure', 'Arrival'],
    description: 'Navigating check-in counters, boarding gates, baggage claim, and immigration.'
  },
  {
    id: 'shopping',
    title: 'Shopping & Retail',
    hindiTitle: 'खरीदारी एवं बाजार',
    icon: '🛍️',
    colorGradient: 'from-pink-500 to-rose-400',
    bgGlow: 'rgba(236, 72, 153, 0.2)',
    wordsCount: 46,
    sampleWords: ['Discount', 'Receipt', 'Fitting Room', 'Price', 'Refund', 'Cashier'],
    description: 'Asking for sizes, bargaining politely, asking for discounts, and paying for goods.'
  },
  {
    id: 'friends',
    title: 'Friends & Social Life',
    hindiTitle: 'मित्रता एवं सामाजिक जीवन',
    icon: '🤝',
    colorGradient: 'from-purple-500 to-indigo-500',
    bgGlow: 'rgba(168, 85, 247, 0.2)',
    wordsCount: 50,
    sampleWords: ['Hang out', 'Catch up', 'Invitation', 'Celebrate', 'Introduce', 'Friendly'],
    description: 'Making plans, casual slang, complimenting friends, and hosting gatherings.'
  },
  {
    id: 'family',
    title: 'Family & Home',
    hindiTitle: 'परिवार एवं गृहस्थी',
    icon: '👨‍👩‍👧',
    colorGradient: 'from-violet-500 to-purple-400',
    bgGlow: 'rgba(139, 92, 246, 0.2)',
    wordsCount: 44,
    sampleWords: ['Relative', 'Sibling', 'Household', 'Parents', 'Heritage', 'Together'],
    description: 'Talking about relatives, daily household chores, family traditions, and living spaces.'
  },
  {
    id: 'nature',
    title: 'Nature & Outdoors',
    hindiTitle: 'प्रकृति एवं वातावरण',
    icon: '🌿',
    colorGradient: 'from-teal-500 to-emerald-400',
    bgGlow: 'rgba(20, 184, 166, 0.2)',
    wordsCount: 36,
    sampleWords: ['Weather', 'Climate', 'Landscape', 'Sunshine', 'Breeze', 'Mountain'],
    description: 'Weather forecasts, seasons, outdoor activities, animals, and geography.'
  },
  {
    id: 'jobs',
    title: 'Jobs & Careers',
    hindiTitle: 'व्यवसाय एवं आजीविका',
    icon: '🧑‍💼',
    colorGradient: 'from-cyan-500 to-blue-600',
    bgGlow: 'rgba(6, 182, 212, 0.2)',
    wordsCount: 55,
    sampleWords: ['Engineer', 'Manager', 'Interview', 'Salary', 'Skills', 'Promotion'],
    description: 'Job interviews, resume keywords, professional skills, and career advancement.'
  }
];

// Rich curated dictionary enrichment database
const KNOWN_ENRICHMENTS: Record<string, Partial<EnrichedVocabData>> = {
  name: {
    partOfSpeech: 'Noun',
    cefrLevel: 'A1',
    frequencyRank: 'Top 100 Word',
    syllables: [{ syllable: 'name', isStressed: true, ipa: 'neɪm' }],
    stressPattern: '[NAME]',
    mouthGuide: {
      lips: 'Start with lips lightly touching for /n/, then glide into open diphthong /eɪ/ and close softly on /m/.',
      tongue: 'Tongue touches alveolar ridge for /n/, then lowers slightly and glides up toward the palate.',
      airflow: 'Continuous gentle nasal airflow for /n/ and /m/.',
      voiceVibration: true,
      proTip: 'Make sure not to drop the final "m" sound — hum gently at the end.'
    },
    wordFamily: {
      root: 'NAME',
      members: [
        { partOfSpeech: 'noun', word: 'name', phonetic: '/neɪm/', meaning: 'A word by which someone is known', hindiMeaning: 'नाम', example: 'What is your name?' },
        { partOfSpeech: 'verb', word: 'name', phonetic: '/neɪm/', meaning: 'To give a name to someone', hindiMeaning: 'नाम रखना', example: 'They named the baby Aarav.' },
        { partOfSpeech: 'adjective', word: 'nameless', phonetic: '/ˈneɪmləs/', meaning: 'Having no name', hindiMeaning: 'अनाम / बेनाम', example: 'A nameless stranger helped me.' },
        { partOfSpeech: 'adverb', word: 'namely', phonetic: '/ˈneɪmli/', meaning: 'Specifically / that is to say', hindiMeaning: 'अर्थात् / विशेष रूप से', example: 'Two people came, namely Raj and Maya.' }
      ]
    },
    memoryBoost: {
      mnemonic: 'Think of "FAME" & "GAME" — your NAME is your game in every conversation!',
      hindiSpeakerTrap: 'Literal Hindi phrasing "आपका शुभ नाम क्या है?" often becomes "What is your good name?" in Indian English. Native English speakers simply say "What is your name?"',
      naturalUsage: 'Nice to meet you! May I know your name?',
      dontSay: 'What is your good name, sir?',
      sayInstead: 'May I have your name, please?',
      collocations: ['first name', 'last name', 'full name', 'nick name', 'call by name'],
      synonyms: ['title', 'designation', 'appellation'],
      antonyms: ['anonymity', 'namelessness']
    },
    collection: 'friends',
    collectionIcon: '🤝'
  },
  surname: {
    partOfSpeech: 'Noun',
    cefrLevel: 'A1',
    frequencyRank: 'Top 500 Word',
    syllables: [
      { syllable: 'sur', isStressed: true, ipa: 'sɜːr' },
      { syllable: 'name', isStressed: false, ipa: 'neɪm' }
    ],
    stressPattern: '[SUR]-name',
    mouthGuide: {
      lips: 'Unrounded lips on /s/, slight round on /ɜːr/, clear /neɪm/ ending.',
      tongue: 'Tip near upper front teeth for /s/, pull back slightly for /r/.',
      airflow: 'Crisp hiss on /s/.',
      voiceVibration: true,
      proTip: 'Primary stress is firmly on the first syllable: SUR-name, not sur-NAME.'
    },
    wordFamily: {
      root: 'NAME',
      members: [
        { partOfSpeech: 'noun', word: 'surname', phonetic: '/ˈsɜːrneɪm/', meaning: 'Last name / family name', hindiMeaning: 'उपनाम / कुलनाम', example: 'My surname is Patel.' },
        { partOfSpeech: 'noun', word: 'forename', phonetic: '/ˈfɔːrneɪm/', meaning: 'First name', hindiMeaning: 'पहला नाम', example: 'Write your forename first.' },
        { partOfSpeech: 'noun', word: 'nickname', phonetic: '/ˈnɪkneɪm/', meaning: 'Informal familiar name', hindiMeaning: 'उपनाम / प्यार का नाम', example: 'His nickname is Sunny.' }
      ]
    },
    memoryBoost: {
      mnemonic: '"SUR" comes from Old French "sur" (over/above) + NAME — the name inherited above from family!',
      hindiSpeakerTrap: 'Do not confuse "Surname" with "Title" (Mr., Dr., Ms.). A surname is strictly your family last name.',
      naturalUsage: 'Please write your surname on line 2 of the form.',
      dontSay: 'My title is Sharma.',
      sayInstead: 'My surname / last name is Sharma.',
      collocations: ['maiden surname', 'family surname', 'hyphenated surname', 'common surname'],
      synonyms: ['last name', 'family name'],
      antonyms: ['first name', 'given name']
    },
    collection: 'family',
    collectionIcon: '👨‍👩‍👧'
  },
  live: {
    partOfSpeech: 'Verb',
    cefrLevel: 'A1',
    frequencyRank: 'Top 100 Word',
    syllables: [{ syllable: 'live', isStressed: true, ipa: 'lɪv' }],
    stressPattern: '[LIVE]',
    mouthGuide: {
      lips: 'Top teeth touch bottom lip lightly for /v/, quick relaxed short /ɪ/.',
      tongue: 'Tip on upper gums for /l/, relaxed mid-high position for /ɪ/.',
      airflow: 'Vocal vibration on both /l/ and /v/.',
      voiceVibration: true,
      proTip: 'Do NOT pronounce like "leave" (/liːv/). Keep the /ɪ/ short and crisp: /lɪv/.'
    },
    wordFamily: {
      root: 'LIVE',
      members: [
        { partOfSpeech: 'verb', word: 'live', phonetic: '/lɪv/', meaning: 'To reside or be alive', hindiMeaning: 'रहना / जीवित रहना', example: 'I live in Bengaluru.' },
        { partOfSpeech: 'noun', word: 'life', phonetic: '/laɪf/', meaning: 'The existence of an individual', hindiMeaning: 'जीवन / जिंदगी', example: 'Life is wonderful.' },
        { partOfSpeech: 'adjective', word: 'lively', phonetic: '/ˈlaɪvli/', meaning: 'Full of energy and enthusiasm', hindiMeaning: 'जीवंत / फुर्तीला', example: 'The festival was very lively.' },
        { partOfSpeech: 'noun', word: 'living', phonetic: '/ˈlɪvɪŋ/', meaning: 'Manner of life or livelihood', hindiMeaning: 'रोजी-रोटी / रहन-सहन', example: 'He earns an honest living.' }
      ]
    },
    memoryBoost: {
      mnemonic: 'Short "i" like "GIVE" — you LIVE where you GIVE your heart!',
      hindiSpeakerTrap: 'Many Hindi speakers say "I am living in Mumbai" for permanent residence. In native English, permanent home uses simple present: "I live in Mumbai".',
      naturalUsage: 'Where do you live? — I live in Jaipur.',
      dontSay: 'I am living in Pune since five years.',
      sayInstead: 'I have been living in Pune for five years (or: I live in Pune).',
      collocations: ['live alone', 'live together', 'live in a city', 'live with family', 'standard of living'],
      synonyms: ['reside', 'dwell', 'inhabit', 'stay'],
      antonyms: ['die', 'perish', 'depart']
    },
    collection: 'family',
    collectionIcon: '👨‍👩‍👧'
  },
  country: {
    partOfSpeech: 'Noun',
    cefrLevel: 'A1',
    frequencyRank: 'Top 200 Word',
    syllables: [
      { syllable: 'coun', isStressed: true, ipa: 'kʌn' },
      { syllable: 'try', isStressed: false, ipa: 'tri' }
    ],
    stressPattern: '[COUN]-try',
    mouthGuide: {
      lips: 'Neutral open mouth for /ʌ/, brief stop /k/, smooth blend into /tri/.',
      tongue: 'Back of tongue contacts soft palate for /k/, front tip on alveolar ridge for /t-r/.',
      airflow: 'Burst of air on /k/.',
      voiceVibration: true,
      proTip: 'The "ou" is pronounced like "cup" (/ʌ/), not like "cow" or "count".'
    },
    wordFamily: {
      root: 'COUNTRY',
      members: [
        { partOfSpeech: 'noun', word: 'country', phonetic: '/ˈkʌntri/', meaning: 'A nation or rural area', hindiMeaning: 'देश / देहात', example: 'India is a vast country.' },
        { partOfSpeech: 'noun', word: 'countryside', phonetic: '/ˈkʌntrisaɪd/', meaning: 'Rural land outside cities', hindiMeaning: 'ग्रामीण इलाका', example: 'We love walking in the countryside.' },
        { partOfSpeech: 'noun', word: 'compatriot', phonetic: '/kəmˈpeɪtriət/', meaning: 'A fellow citizen of the same country', hindiMeaning: 'स्वदेशी / हमवतन', example: 'He met a compatriot in London.' }
      ]
    },
    memoryBoost: {
      mnemonic: 'Count + Try = Every COUNTRY counts and tries its best!',
      hindiSpeakerTrap: 'Remember that "country" can also mean the peaceful rural area outside cities ("in the country").',
      naturalUsage: 'Which country are you travelling to next month?',
      dontSay: 'I am going to my village country.',
      sayInstead: 'I am going to the countryside / to my native village.',
      collocations: ['home country', 'foreign country', 'across the country', 'develop a country'],
      synonyms: ['nation', 'state', 'homeland', 'land'],
      antonyms: ['city', 'metropolis']
    },
    collection: 'travel',
    collectionIcon: '✈️'
  },
  city: {
    partOfSpeech: 'Noun',
    cefrLevel: 'A1',
    frequencyRank: 'Top 150 Word',
    syllables: [
      { syllable: 'ci', isStressed: true, ipa: 'sɪ' },
      { syllable: 'ty', isStressed: false, ipa: 'ti' }
    ],
    stressPattern: '[CI]-ty',
    mouthGuide: {
      lips: 'Unrounded smiling lips on /sɪ/, soft release on /ti/.',
      tongue: 'Tip near upper front teeth for /s/, quick tap on alveolar ridge for /t/.',
      airflow: 'Continuous soft hiss followed by light tap.',
      voiceVibration: true,
      proTip: 'Soft "C" sounds like "S" (/s/), never like "K".'
    },
    wordFamily: {
      root: 'CITY',
      members: [
        { partOfSpeech: 'noun', word: 'city', phonetic: '/ˈsɪti/', meaning: 'A large human settlement', hindiMeaning: 'शहर / महानगर', example: 'Delhi is a historic city.' },
        { partOfSpeech: 'noun', word: 'citizen', phonetic: '/ˈsɪtɪzn/', meaning: 'A legally recognized subject of a nation', hindiMeaning: 'नागरिक', example: 'She is a responsible citizen.' },
        { partOfSpeech: 'noun', word: 'citizenship', phonetic: '/ˈsɪtɪzənʃɪp/', meaning: 'The status of being a citizen', hindiMeaning: 'नागरिकता', example: 'He applied for dual citizenship.' }
      ]
    },
    memoryBoost: {
      mnemonic: 'C-I-T-Y = Center of Incredible Talent & Youth!',
      hindiSpeakerTrap: 'Preposition rule: We say "IN the city" (not "on the city" or "at the city" when talking about living somewhere).',
      naturalUsage: 'Mumbai is one of the most vibrant cities in Asia.',
      dontSay: 'I am at city right now.',
      sayInstead: 'I am in the city right now.',
      collocations: ['big city', 'capital city', 'city center', 'city lights', 'smart city'],
      synonyms: ['metropolis', 'urban area', 'municipality', 'town'],
      antonyms: ['village', 'countryside', 'hamlet']
    },
    collection: 'travel',
    collectionIcon: '✈️'
  }
};

/**
 * Intelligent helper that extracts or dynamically derives comprehensive pedagogical metadata
 * for any vocab item without modifying underlying curriculum packs.
 */
export function getEnrichedVocabData(vocab: VocabItem): EnrichedVocabData {
  const wordKey = vocab.word.trim().toLowerCase();
  
  if (KNOWN_ENRICHMENTS[wordKey]) {
    const base = KNOWN_ENRICHMENTS[wordKey];
    return {
      partOfSpeech: base.partOfSpeech || 'Word / Term',
      cefrLevel: base.cefrLevel || 'A1',
      frequencyRank: base.frequencyRank || 'Core Essential',
      syllables: base.syllables || deriveSyllables(vocab.word, vocab.phonetic),
      stressPattern: base.stressPattern || deriveStressPattern(vocab.word),
      mouthGuide: base.mouthGuide || deriveMouthGuide(vocab.word),
      wordFamily: base.wordFamily || deriveWordFamily(vocab.word, vocab.meaning),
      memoryBoost: base.memoryBoost || deriveMemoryBoost(vocab),
      collection: base.collection || mapWordToCollection(vocab.word),
      collectionIcon: base.collectionIcon || mapCollectionToIcon(mapWordToCollection(vocab.word))
    };
  }

  // Fallback intelligent derivation for all 3,700+ vocabulary items
  const syllables = deriveSyllables(vocab.word, vocab.phonetic);
  const stressPattern = deriveStressPattern(vocab.word);
  const collection = mapWordToCollection(vocab.word);

  return {
    partOfSpeech: derivePartOfSpeech(vocab.word, vocab.meaning),
    cefrLevel: (vocab.difficulty && vocab.difficulty.includes('A2')) ? 'A2' : (vocab.difficulty && vocab.difficulty.includes('B1')) ? 'B1' : 'A1',
    frequencyRank: 'High-Frequency Core',
    syllables,
    stressPattern,
    mouthGuide: deriveMouthGuide(vocab.word),
    wordFamily: deriveWordFamily(vocab.word, vocab.meaning),
    memoryBoost: deriveMemoryBoost(vocab),
    collection,
    collectionIcon: mapCollectionToIcon(collection)
  };
}

function deriveSyllables(word: string, phonetic?: string): SyllableInfo[] {
  // Simple heuristic syllable splitter
  const cleanWord = word.replace(/[^a-zA-Z]/g, '');
  if (cleanWord.length <= 4) {
    return [{ syllable: cleanWord, isStressed: true, ipa: phonetic || `/${cleanWord}/` }];
  }

  const parts = cleanWord.match(/.{1,3}/g) || [cleanWord];
  return parts.map((p, idx) => ({
    syllable: p,
    isStressed: idx === 0,
    ipa: idx === 0 ? `'${p}` : p
  }));
}

function deriveStressPattern(word: string): string {
  const parts = word.split(/\s+/);
  if (parts.length > 1) {
    return parts.map((p, i) => (i === 0 ? `[${p.toUpperCase()}]` : p.toLowerCase())).join(' ');
  }
  if (word.length <= 4) return `[${word.toUpperCase()}]`;
  const mid = Math.ceil(word.length / 2);
  return `[${word.slice(0, mid).toUpperCase()}]-${word.slice(mid).toLowerCase()}`;
}

function derivePartOfSpeech(word: string, meaning: string): string {
  const m = meaning.toLowerCase();
  if (m.startsWith('to ') || m.includes('action') || m.includes('verb')) return 'Verb';
  if (m.includes('describing') || m.includes('quality') || word.endsWith('ful') || word.endsWith('ive')) return 'Adjective';
  if (m.includes('person') || m.includes('place') || m.includes('thing') || m.includes('name')) return 'Noun';
  if (word.endsWith('ly')) return 'Adverb';
  if (word.length <= 3 && (word === 'in' || word === 'on' || word === 'at' || word === 'to' || word === 'for')) return 'Preposition';
  return 'Vocabulary Core';
}

function deriveMouthGuide(word: string): MouthPositionGuide {
  const firstLetter = word.trim()[0]?.toLowerCase() || 'a';
  
  if (['p', 'b', 'm'].includes(firstLetter)) {
    return {
      lips: 'Bring upper and lower lips together firmly, then release with a smooth pop or gentle hum.',
      tongue: 'Keep tongue relaxed in the center of the mouth floor.',
      airflow: firstLetter === 'm' ? 'Smooth nasal airflow through the nose.' : 'Brief burst of explosive air pressure.',
      voiceVibration: firstLetter !== 'p',
      proTip: 'Maintain clean lip contact without tensing facial muscles.'
    };
  }

  if (['t', 'd', 'n', 'l'].includes(firstLetter)) {
    return {
      lips: 'Neutral and slightly relaxed, parted 1-2 cm.',
      tongue: 'Touch tongue tip firmly to the bumpy ridge behind upper front teeth (alveolar ridge).',
      airflow: 'Quick burst release of stopped airflow.',
      voiceVibration: firstLetter !== 't',
      proTip: 'Do not curl the tongue back too far; tap right behind the front teeth for crisp native rhythm.'
    };
  }

  if (['f', 'v'].includes(firstLetter)) {
    return {
      lips: 'Lightly place upper front teeth against the inside of lower lip.',
      tongue: 'Relaxed in the center of the oral cavity.',
      airflow: 'Continuous smooth friction stream through teeth and lip gap.',
      voiceVibration: firstLetter === 'v',
      proTip: 'Do not bite down hard; allow air to pass gently through the teeth-lip contact.'
    };
  }

  return {
    lips: 'Part lips comfortably in a natural, neutral curve.',
    tongue: 'Elevate tongue toward mid-palate according to the vowel sound.',
    airflow: 'Continuous sustained vocal airflow.',
    voiceVibration: true,
    proTip: 'Focus on clear syllable separation and native sentence stress.'
  };
}

function deriveWordFamily(word: string, meaning: string): { root: string; members: WordFamilyNode[] } {
  const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const root = clean.toUpperCase();

  return {
    root,
    members: [
      {
        partOfSpeech: 'noun',
        word: clean,
        phonetic: `/${clean}/`,
        meaning: meaning || 'Primary dictionary concept',
        hindiMeaning: 'मूल अवधारणा',
        example: `We use "${clean}" frequently in daily English conversations.`
      },
      {
        partOfSpeech: 'verb',
        word: `${clean}ing`,
        phonetic: `/${clean}ɪŋ/`,
        meaning: `The continuous action or process of ${clean}`,
        hindiMeaning: 'प्रक्रिया या निरंतर रूप',
        example: `He is actively ${clean}ing every morning.`
      },
      {
        partOfSpeech: 'adjective',
        word: `${clean}ful`,
        phonetic: `/${clean}fəl/`,
        meaning: `Characterized by or full of ${clean}`,
        hindiMeaning: 'विशेषता युक्त / गुणवान',
        example: `It was a very ${clean}ful experience.`
      }
    ]
  };
}

function deriveMemoryBoost(vocab: VocabItem): MemoryBoostInfo {
  const word = vocab.word;
  const hiTrans = vocab.translationsByLang?.hi || 'अर्थ';
  
  return {
    mnemonic: `Connect "${word}" to the Hindi meaning "${hiTrans}". Say it aloud 3 times with an enthusiastic gesture!`,
    hindiSpeakerTrap: `Avoid word-for-word Hindi literal translation. Always use complete English phrasing in context.`,
    naturalUsage: vocab.exampleSentence || `I use the word "${word}" every day.`,
    dontSay: `Incorrect literal sentence structure with "${word}".`,
    sayInstead: vocab.exampleSentence || `"${word}" used in a clean native sentence.`,
    collocations: [`everyday ${word}`, `simple ${word}`, `learn ${word}`, `use ${word}`],
    synonyms: ['related term', 'similar expression'],
    antonyms: ['opposite meaning']
  };
}

function mapWordToCollection(word: string): string {
  const w = word.toLowerCase();
  if (['ticket', 'passport', 'travel', 'hotel', 'flight', 'journey', 'country', 'city', 'visit', 'luggage', 'station'].some(k => w.includes(k))) return 'travel';
  if (['food', 'eat', 'drink', 'water', 'tea', 'coffee', 'breakfast', 'lunch', 'dinner', 'restaurant', 'meal', 'delicious'].some(k => w.includes(k))) return 'food';
  if (['work', 'office', 'meeting', 'boss', 'manager', 'email', 'project', 'client', 'report', 'salary', 'company'].some(k => w.includes(k))) return 'office';
  if (['doctor', 'health', 'fever', 'medicine', 'hospital', 'pain', 'sick', 'cure', 'nurse', 'pill'].some(k => w.includes(k))) return 'doctor';
  if (['airport', 'plane', 'gate', 'boarding', 'security', 'customs', 'fly', 'pilot'].some(k => w.includes(k))) return 'airport';
  if (['shop', 'buy', 'price', 'cost', 'money', 'discount', 'store', 'market', 'cash', 'pay'].some(k => w.includes(k))) return 'shopping';
  if (['friend', 'meet', 'party', 'talk', 'fun', 'happy', 'laugh', 'together', 'call', 'chat'].some(k => w.includes(k))) return 'friends';
  if (['family', 'mother', 'father', 'brother', 'sister', 'home', 'house', 'parent', 'child', 'name', 'surname', 'live'].some(k => w.includes(k))) return 'family';
  if (['tree', 'nature', 'sun', 'rain', 'weather', 'sky', 'animal', 'bird', 'flower', 'mountain', 'river'].some(k => w.includes(k))) return 'nature';
  return 'jobs';
}

function mapCollectionToIcon(collectionId: string): string {
  const col = VOCAB_COLLECTIONS.find(c => c.id === collectionId);
  return col?.icon || '📚';
}
