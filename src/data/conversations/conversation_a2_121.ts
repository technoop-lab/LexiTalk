import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_121: ConversationDefinition = {
  id: 'conv_a2_121',
  title: 'Life Milestones, Growing Up & Personal Background (grew up, used to, graduated)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_121'],
  estimatedMinutes: 5,
  scenario:
    'You are meeting a new colleague, Maya Lin, during a lunch break at your tech company in Manchester. Maya asks about your personal background and where you grew up. Share memories from your childhood, where you went to school and university, how your lifestyle changed using "used to", and what brought you to Manchester.',
  communicativeGoals: [
    'Describe personal origins and childhood hometowns using "was born in" and "grew up in"',
    'Narrate major life milestones including graduation, starting a career, and relocating',
    'Describe past habits and routines that are no longer true using "used to + base verb"',
    'Ask natural follow-up questions to discover a conversation partner’s background',
  ],
  canDoStatements: [
    'Can talk about where I was born and grew up in detail (CEFR A2)',
    'Can describe major educational and career milestones chronologically',
    'Can use "used to" to contrast childhood life with present adult routines',
  ],
  characters: [
    {
      id: 'char_maya_lin',
      name: 'Maya Lin',
      role: 'Colleague & Senior UX Designer',
      avatar: '👩🏻‍💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'grow up',
        ipa: '/ɡrəʊ ʌp/',
        partOfSpeech: 'phrasal verb',
        meaning: 'To spend one’s childhood and develop into an adult (past: grew up)',
        exampleSentence: 'I grew up in a quiet coastal town before moving to London.',
        translations: { hi: 'बड़ा होना / पलना-बढ़ना' },
      },
      {
        word: 'used to',
        ipa: '/ˈjuːst tuː/',
        partOfSpeech: 'modal phrase',
        meaning: 'Did something regularly in the past that is no longer done in the present',
        exampleSentence: 'I used to play cricket every afternoon when I was a teenager.',
        translations: { hi: 'अतीत में किया करता था (अब नहीं)' },
      },
      {
        word: 'graduate',
        ipa: '/ˈɡrædʒueɪt/',
        partOfSpeech: 'verb',
        meaning: 'To complete a university degree or course of study',
        exampleSentence: 'She graduated from Leeds University in computer science in 2021.',
        translations: { hi: 'स्नातक होना / डिग्री पूरी करना' },
      },
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development of something or someone',
        exampleSentence: 'Graduating and moving to Manchester was a huge milestone for me.',
        translations: { hi: 'जीवन का महत्वपूर्ण पड़ाव / मील का पत्थर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I was born in Delhi, but I grew up in Bristol.',
        functionCategory: 'Stating Origin and Childhood',
        exampleSentence: 'I was born in France, but grew up in Wales.',
      },
      {
        phrase: 'I used to ride my bike to school every day.',
        functionCategory: 'Describing Past Childhood Habits (used to)',
        exampleSentence: 'We used to swim in the river during summer.',
      },
      {
        phrase: 'After graduating from university, I moved here for work.',
        functionCategory: 'Sequencing Life Milestones',
        exampleSentence: 'After finishing my degree, I started my first job.',
      },
      {
        phrase: 'What about you? Where did you grow up?',
        functionCategory: 'Asking Reciprocal Follow-Up Question',
        exampleSentence: 'What about you? Did you grow up around here?',
      },
    ],
    grammar: {
      title: 'Past Habits with "Used to" & Narrative Sequencing (when, after that)',
      conceptExplanation:
        '1. Past Habits: "Subject + used to + Base Verb" (for past habits/states that have ended). Example: "I used to play tennis, but now I swim".\n2. Negative: "didn\'t use to + Base Verb" (note spelling: "use" without -d).\n3. Question: "Did you use to + Base Verb?".\n4. Origins: "was/were born in + Place" and "grew up in + Place".\n5. Milestone sequencing: "When I was 18...", "After graduating...", "Then I decided to...".',
      patternFormula: 'Subject + was/were born in [Place] + but grew up in [Place] | Subject + used to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'I was grown up in Bristol.',
          correct: 'I grew up in Bristol.',
          explanation: '"Grow up" is an active intransitive verb: say "I grew up", not "I was grown up".',
        },
        {
          incorrect: 'I am used to play cricket when I was young.',
          correct: 'I used to play cricket when I was young.',
          explanation: 'For past discontinued habits, use "used to + base verb", not "am used to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Lin',
        text: 'Hi Alex! We have been working on the same sprint, but I realized I don’t know where you’re from. Where did you grow up?',
        translation: 'नमस्ते एलेक्स! हम एक ही स्प्रिंट पर काम कर रहे हैं, लेकिन मुझे एहसास हुआ कि मैं नहीं जानती कि आप कहाँ से हैं। आप कहाँ पले-बढ़े?',
      },
      {
        speaker: 'You',
        text: 'Hi Maya! I was born in Jaipur, but my family moved to Newcastle when I was six, so I grew up in northern England. I used to spend weekends exploring the seaside!',
        translation: 'नमस्ते माया! मेरा जन्म जयपुर में हुआ था, लेकिन जब मैं छह साल का था तब मेरा परिवार न्यूकैसल चला गया, इसलिए मैं उत्तरी इंग्लैंड में पला-बढ़ा। मैं सप्ताहांत में समुद्र तट पर घूमा करता था!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_121_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "When I was a teenager, I ___ (used to / was used to) play football every weekend."',
      options: [
        { id: 'opt_1', text: 'used to', isCorrect: true },
        { id: 'opt_2', text: 'was used to', isCorrect: false },
        { id: 'opt_3', text: 'use to', isCorrect: false },
      ],
      correctAnswer: 'used to',
      explanation: 'Use "used to + base verb" for past discontinued habits.',
    },
    {
      id: 'cp_a2_121_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes personal origins and upbringing?',
      options: [
        { id: 'opt_1', text: 'I was born in Mumbai, but I grew up in Birmingham.', isCorrect: true },
        { id: 'opt_2', text: 'I was borned in Mumbai, but I was grown up in Birmingham.', isCorrect: false },
        { id: 'opt_3', text: 'I born in Mumbai and grow up Birmingham.', isCorrect: false },
      ],
      correctAnswer: 'I was born in Mumbai, but I grew up in Birmingham.',
      explanation: '"Was born" (passive) and "grew up" (past simple) is the standard formula.',
    },
    {
      id: 'cp_a2_121_3',
      type: 'multiple_choice',
      prompt: 'Which question asks a partner about their childhood hometown politely?',
      options: [
        { id: 'opt_1', text: 'Where did you grow up, and did you like living there?', isCorrect: true },
        { id: 'opt_2', text: 'Where you was growing up?', isCorrect: false },
        { id: 'opt_3', text: 'How born was you?', isCorrect: false },
      ],
      correctAnswer: 'Where did you grow up, and did you like living there?',
      explanation: 'Grammatically correct question using "did you grow up".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_121_1',
      scenarioContext: 'Describe your hometown and childhood.',
      prompt: 'Build: "I was born in India but grew up in Bristol."',
      targetStructure: 'Subject + was born in + place + but + grew up in + place',
      wordBank: ['I', 'was', 'born', 'in', 'India', 'but', 'grew', 'up', 'in', 'Bristol', 'is', 'grow'],
      acceptableSolutions: [
        'I was born in India but grew up in Bristol',
        'I was born in India but grew up in Bristol.',
        'I was born in India, but grew up in Bristol.',
      ],
      explanation: 'Classic personal background sentence structure.',
    },
    {
      id: 'sc_a2_121_2',
      scenarioContext: 'Describe a childhood routine that has ended.',
      prompt: 'Build: "I used to ride my bike to school every day."',
      targetStructure: 'Subject + used to + verb + object + time phrase',
      wordBank: ['I', 'used', 'to', 'ride', 'my', 'bike', 'to', 'school', 'every', 'day', 'riding', 'use'],
      acceptableSolutions: [
        'I used to ride my bike to school every day',
        'I used to ride my bike to school every day.',
      ],
      explanation: 'Expresses past discontinued habit with "used to".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_121_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey Alex! It is nice to take a break from the sprint. You mentioned earlier that you recently relocated here to Manchester. Where were you born and where did you grow up?',
      partnerAudioText:
        'Hey Alex! It is nice to take a break from the sprint. You mentioned earlier that you recently relocated here to Manchester. Where were you born and where did you grow up?',
      partnerQuestionHindi:
        'अरे एलेक्स! स्प्रिंट से थोड़ा ब्रेक लेना अच्छा है। आपने पहले उल्लेख किया था कि आप हाल ही में यहाँ मैनचेस्टर में स्थानांतरित हुए हैं। आपका जन्म कहाँ हुआ था और आप कहाँ पले-बढ़े?',
      expectedFunction: 'Share Personal Origins & Childhood Background (was born in / grew up in / moved)',
      contextGoal:
        'Explain that you were born in Delhi, but your family moved to Bristol when you were seven, so you grew up near the coast; ask Maya where she grew up.',
      targetVocabulary: ['was born in Delhi', 'grew up in Bristol', 'moved when I was seven', 'what about you, Maya?'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Hi Maya! I was born in Delhi, but my family moved to Bristol when I was seven years old, so I grew up in the south-west of England near the coast. What about you? Where did you grow up?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Birth & Upbringing (born in / grew up / Bristol / Delhi / India)',
          patterns: ['born in', 'grew up', 'bristol', 'delhi', 'india', 'moved', 'seven', 'childhood', 'coast'],
          required: true,
        },
        {
          name: 'Reciprocal Question (what about you / where did you grow up / where are you from)',
          patterns: ['what about you', 'where did you grow up', 'how about you', 'and you', 'where are you from'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'grow_up_passive_mistake',
          pattern: /\bi was grown up\b/i,
          errorType: 'grammar',
          message: 'Say "I grew up in Bristol", not "I was grown up".',
          correctionPattern: 'I grew up in Bristol',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_121_1',
        type: 'multiple_choice',
        prompt: 'Which form correctly states childhood upbringing?',
        options: [
          { id: 'opt_1', text: 'I grew up in Bristol.', isCorrect: true },
          { id: 'opt_2', text: 'I was grown up in Bristol.', isCorrect: false },
          { id: 'opt_3', text: 'I am grown in Bristol.', isCorrect: false },
        ],
        correctAnswer: 'I grew up in Bristol.',
        explanation: '"Grow up" is an active verb in the Past Simple ("grew up").',
      },
    },
    {
      id: 'turn_a2_121_2',
      turnIndex: 2,
      partnerPrompt:
        'Bristol is a vibrant city! I was born and raised in Singapore, but I moved to the UK six years ago for my master’s degree. What was your childhood like in Bristol? Did you have any favorite hobbies that you don’t do anymore?',
      partnerAudioText:
        'Bristol is a vibrant city! I was born and raised in Singapore, but I moved to the UK six years ago for my master’s degree. What was your childhood like in Bristol? Did you have any favorite hobbies that you don’t do anymore?',
      partnerQuestionHindi:
        'ब्रिस्टल एक जीवंत शहर है! मैं सिंगापुर में पैदा हुई और पली-बढ़ी, लेकिन छह साल पहले अपने मास्टर की डिग्री के लिए यूके आ गई थी। ब्रिस्टल में आपका बचपन कैसा था? क्या आपका कोई पसंदीदा शौक था जो आप अब नहीं करते?',
      expectedFunction: 'Describe Childhood Habits with "Used to" (used to ride bike / swim / draw)',
      contextGoal:
        'Describe childhood routines using "used to": you used to ride your bicycle along the harbor every weekend and play football after school, but nowadays you spend more time in front of screens.',
      targetVocabulary: ['used to ride my bicycle along the harbor', 'used to play football after school every afternoon', 'life was much simpler', 'nowadays spend more time at a desk'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'My childhood was very outdoorsy! I used to ride my bicycle along Bristol harbor every Saturday and play football with school friends every afternoon. Nowadays, I work at a computer all day, so I rarely have time for cycling.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Used To Habit (used to ride / play / bike / outdoor / swim / friends)',
          patterns: ['used to', 'bicycle', 'bike', 'football', 'harbor', 'friends', 'play', 'ride', 'outdoorsy'],
          required: true,
        },
        {
          name: 'Contrast with Present (nowadays / now / computer / desk / rarely / change)',
          patterns: ['nowadays', 'now', 'desk', 'computer', 'rarely', 'today', 'screen', 'time'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'use_to_spelling_mistake',
          pattern: /\bi use to ride\b|\bi was use to\b/i,
          errorType: 'grammar',
          message: 'In affirmative past sentences, write "used to" (with a "d"): "I used to ride my bike".',
          correctionPattern: 'I used to ride my bicycle',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_121_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (used / use) to play football every weekend."',
        options: [
          { id: 'opt_1', text: 'used', isCorrect: true },
          { id: 'opt_2', text: 'use', isCorrect: false },
          { id: 'opt_3', text: 'using', isCorrect: false },
        ],
        correctAnswer: 'used',
        explanation: 'The past habit form is "used to".',
      },
    },
    {
      id: 'turn_a2_121_3',
      turnIndex: 3,
      partnerPrompt:
        'I know that feeling—I used to paint watercolors every weekend when I was younger! Tell me about your educational journey. When did you decide to study software engineering, and when did you graduate?',
      partnerAudioText:
        'I know that feeling—I used to paint watercolors every weekend when I was younger! Tell me about your educational journey. When did you decide to study software engineering, and when did you graduate?',
      partnerQuestionHindi:
        'मैं उस भावना को समझती हूँ—जब मैं छोटी थी तो हर सप्ताहांत वॉटरकलर पेंटिंग किया करती थी! मुझे अपनी शैक्षिक यात्रा के बारे में बताएं। आपने सॉफ्टवेयर इंजीनियरिंग का अध्ययन करने का निर्णय कब लिया, और आप कब स्नातक हुए?',
      expectedFunction: 'Narrate Educational Milestones & Graduation (studied / graduated in 2022 / moved)',
      contextGoal:
        'Explain that you studied Computer Science at the University of Leeds; you graduated in July 2022, worked at a startup for two years, and then moved to Manchester last autumn.',
      targetVocabulary: ['studied Computer Science at the University of Leeds', 'graduated in July 2022', 'worked at a fintech startup for two years', 'decided to relocate to Manchester'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I studied Computer Science at the University of Leeds and graduated in July 2022. After graduating, I worked for two years at a small tech startup in Leeds before accepting this role and moving to Manchester last autumn.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Study & Graduation (computer science / leeds / graduated / 2022 / degree)',
          patterns: ['studied', 'computer science', 'leeds', 'university', 'graduated', '2022', 'degree', 'college'],
          required: true,
        },
        {
          name: 'Milestone Progression (startup / worked / two years / moved to Manchester / autumn)',
          patterns: ['worked', 'startup', 'two years', 'moved', 'manchester', 'autumn', 'role', 'accepted'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_121_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly sequences graduation and relocation?',
        options: [
          { id: 'opt_1', text: 'After graduating from university, I moved to Manchester for work.', isCorrect: true },
          { id: 'opt_2', text: 'After graduate university, I am move Manchester.', isCorrect: false },
          { id: 'opt_3', text: 'When I graduate, I was move.', isCorrect: false },
        ],
        correctAnswer: 'After graduating from university, I moved to Manchester for work.',
        explanation: 'Preposition "after" is followed by a gerund ("graduating") + past simple main clause.',
      },
    },
    {
      id: 'turn_a2_121_4',
      turnIndex: 4,
      partnerPrompt:
        'That is a wonderful career progression! It sounds like moving to Manchester was a great milestone for you. How are you liking living in the Northern Quarter so far?',
      partnerAudioText:
        'That is a wonderful career progression! It sounds like moving to Manchester was a great milestone for you. How are you liking living in the Northern Quarter so far?',
      partnerQuestionHindi:
        'यह एक शानदार करियर प्रगति है! ऐसा लगता है कि मैनचेस्टर आना आपके लिए एक बड़ा मील का पत्थर था। अब तक आपको नॉर्दर्न क्वार्टर में रहना कैसा लग रहा है?',
      expectedFunction: 'Evaluate Current Milestone, Express Satisfaction & Close Conversation',
      contextGoal:
        'Express that you love Manchester’s energy, cafes, and live music scene; thank Maya for the friendly chat and suggest grabbing coffee again next week.',
      targetVocabulary: ['Northern Quarter has great cafes and live music', 'really enjoying the vibrant city energy', 'thank you for the chat Maya', 'let’s grab coffee again soon'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I really love it! The Northern Quarter has amazing independent cafes and live music venues. It feels like a big positive milestone in my life. Thank you so much for the lovely chat, Maya—let’s grab coffee again next week!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'City Impression (love it / cafes / music / energy / northern quarter / milestone)',
          patterns: ['love it', 'enjoying', 'cafes', 'music', 'energy', 'northern quarter', 'milestone', 'vibrant', 'city'],
          required: true,
        },
        {
          name: 'Polite Closing (thank you / maya / coffee / next week / soon)',
          patterns: ['thank you', 'thanks', 'maya', 'chat', 'coffee', 'next week', 'soon', 'great'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_121_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Moving here was a major ___ (milestone / stone) in my career."',
        options: [
          { id: 'opt_1', text: 'milestone', isCorrect: true },
          { id: 'opt_2', text: 'stone', isCorrect: false },
          { id: 'opt_3', text: 'miling', isCorrect: false },
        ],
        correctAnswer: 'milestone',
        explanation: '"Milestone" refers to a significant life or career event.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 70,
  },
};
