import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_256: ConversationDefinition = {
  id: 'conv_a2_256',
  title: 'Explaining Everyday Problems Clearly',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_256'],
  estimatedMinutes: 5,
  scenario:
    'You are speaking with building supervisor David at your residential apartment building. You need to explain an urgent maintenance problem in your apartment (a leaking bathroom faucet and an air conditioning unit making loud rattling noises), describe when it started, explain what you have already tried, and agree on a repair schedule.',
  communicativeGoals: [
    'Explain practical everyday household problems clearly in A2 English',
    'Use past simple and present continuous to describe problem timelines: "It started leaking yesterday...", "The air conditioner is making a loud noise..."',
    'Explain simple attempted solutions: "I tried turning off the valve, but...", "I checked the power switch..."',
    'Arrange a convenient repair appointment with polite requests: "Could someone come by tomorrow morning?"',
  ],
  canDoStatements: [
    'Can describe a concrete household or appliance problem and its symptoms clearly',
    'Can state when the problem started and what simple actions were taken',
    'Can agree on a day and time for a technician or maintenance visit',
  ],
  characters: [
    {
      id: 'char_david_supervisor',
      name: 'David',
      role: 'Apartment Building Supervisor',
      avatar: '🔧',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'faucet',
        ipa: '/ˈfɔːsɪt/',
        partOfSpeech: 'noun',
        meaning: 'A fixture for controlling the flow of water from a pipe; a tap',
        exampleSentence: 'The bathroom faucet is leaking constantly.',
        translations: { hi: 'नल / टोंटी (फॉसेट)' },
      },
      {
        word: 'leak',
        ipa: '/liːk/',
        partOfSpeech: 'verb / noun',
        meaning: 'To allow liquid or gas to escape through a hole or crack',
        exampleSentence: 'Water started leaking under the kitchen sink yesterday afternoon.',
        translations: { hi: 'रिसना / टपकना (लीक)' },
      },
      {
        word: 'rattling',
        ipa: '/ˈrætlɪŋ/',
        partOfSpeech: 'adjective / noun',
        meaning: 'Making a rapid series of short, sharp knocking sounds',
        exampleSentence: 'The air conditioner is making an unusual rattling sound.',
        translations: { hi: 'खड़खड़ाने की आवाज़ (रैटलिंग)' },
      },
      {
        word: 'technician',
        ipa: '/tekˈnɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A skilled worker trained to repair machines, appliances, or systems',
        exampleSentence: 'Our maintenance technician is available tomorrow morning.',
        translations: { hi: 'तकनीशियन / मरम्मत कर्मी (टेक्नीशियन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am calling to report a problem with...',
        functionCategory: 'Stating the main purpose of a service call',
        exampleSentence: 'I am calling to report a problem with my bathroom faucet.',
      },
      {
        phrase: 'It started happening yesterday around...',
        functionCategory: 'Providing a clear past timeline',
        exampleSentence: 'It started happening yesterday around five in the evening.',
      },
      {
        phrase: 'I tried turning off the valve, but...',
        functionCategory: 'Explaining simple attempted steps',
        exampleSentence: 'I tried turning off the main valve, but water is still dripping.',
      },
      {
        phrase: 'Could someone come by to take a look?',
        functionCategory: 'Requesting a maintenance visit politely',
        exampleSentence: 'Could someone come by tomorrow morning to take a look?',
      },
    ],
    grammar: {
      title: 'Describing Problems: Present Continuous Symptoms & Past Simple Triggers',
      conceptExplanation:
        '1. Ongoing symptoms: Use Present Continuous ("The faucet is dripping", "The AC is making a noise").\n2. Time of origin: Use Past Simple with time markers ("It started yesterday at 3 PM").\n3. Completed attempts: Use Past Simple ("I tried turning it off, but nothing changed").\n4. Polite scheduling: "Could a technician inspect it tomorrow between 9 AM and noon?"',
      patternFormula: 'There is a problem with [Item]. It is [Present Continuous Symptom] since [Time / Past Simple]. Could you send someone to [Action]?',
      contrastExamples: [
        {
          incorrect: 'The faucet is leak since two days.',
          correct: 'The faucet has been leaking for two days. / The faucet started leaking two days ago.',
          explanation: 'Use "started leaking [time ago]" or Present Perfect Continuous.',
        },
        {
          incorrect: 'I am try to fix, but cannot.',
          correct: 'I tried to fix it, but water kept dripping.',
          explanation: 'Use Past Simple "tried" for past actions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'David',
        text: 'Good morning! This is David from the front desk. How can I help you today?',
        translation: 'शुभ प्रभात! यह फ्रंट डेस्क से डेविड है। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'Learner',
        text: 'Good morning, David. I am calling from apartment 4B. The bathroom faucet is leaking constantly, and it is dripping onto the floor.',
        translation: 'शुभ प्रभात, डेविड। मैं अपार्टमेंट 4B से कॉल कर रहा हूँ। बाथरूम का नल लगातार टपक रहा है, और पानी फर्श पर गिर रहा है।',
      },
      {
        speaker: 'David',
        text: 'I understand. When did the leak begin, and have you checked the shut-off valve underneath?',
        translation: 'मैं समझ गया। रिसाव कब शुरू हुआ, और क्या आपने नीचे दिए गए शट-ऑफ वाल्व की जांच की है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_256_1',
      type: 'fill_blank',
      prompt: 'Complete: "The bathroom faucet started ______ (leaking / leak / leaked) yesterday evening."',
      options: [
        { id: 'opt_1', text: 'leaking', isCorrect: true },
        { id: 'opt_2', text: 'leak', isCorrect: false },
        { id: 'opt_3', text: 'leaked', isCorrect: false },
      ],
      correctAnswer: 'leaking',
      explanation: 'Verb "start" is followed by the gerund form "leaking".',
    },
    {
      id: 'cp_256_2',
      type: 'multiple_choice',
      prompt: 'Which sentence explains a household problem and an attempted action most clearly?',
      options: [
        { id: 'opt_1', text: 'The AC is making a rattling noise, and I tried turning it off and on, but it did not help.', isCorrect: true },
        { id: 'opt_2', text: 'AC is noise very bad I do nothing.', isCorrect: false },
        { id: 'opt_3', text: 'Yesterday AC noise is breaking because I am try.', isCorrect: false },
      ],
      correctAnswer: 'The AC is making a rattling noise, and I tried turning it off and on, but it did not help.',
      explanation: 'Clear coordination of ongoing symptom (Present Continuous) and past action (Past Simple).',
    },
    {
      id: 'cp_256_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Could a technician come by / tomorrow morning / to inspect the leak?]',
      correctAnswer: 'Could a technician come by tomorrow morning to inspect the leak?',
      explanation: 'Polite modal request + time phrase + purpose infinitive.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_256_1',
      prompt: 'Construct a sentence reporting that the bathroom faucet is leaking and making a puddle on the floor.',
      scenarioContext: 'Calling building maintenance.',
      targetStructure: 'The bathroom faucet is leaking and making a puddle on the floor.',
      wordBank: ['The bathroom faucet', 'is leaking and', 'making a puddle', 'on the floor.', 'faucet has leak', 'puddle on'],
      acceptableSolutions: [
        'The bathroom faucet is leaking and making a puddle on the floor.',
        'The faucet in the bathroom is leaking and making a puddle on the floor.',
      ],
      explanation: 'Subject + compound Present Continuous verb phrase.',
    },
    {
      id: 'sc_256_2',
      prompt: 'Construct a sentence stating that I tried turning off the valve, but water is still dripping.',
      scenarioContext: 'Explaining your troubleshooting steps to David.',
      targetStructure: 'I tried turning off the valve, but water is still dripping.',
      wordBank: ['I tried turning off', 'the valve, but', 'water is still', 'dripping.', 'tried turn', 'water was dripping'],
      acceptableSolutions: [
        'I tried turning off the valve, but water is still dripping.',
        'I tried to turn off the valve, but water is still dripping.',
      ],
      explanation: 'Past attempt clause + coordinating conjunction "but" + present ongoing symptom.',
    },
  ],
  turns: [
    {
      id: 'turn_256_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Building management office, David speaking. How can I help you today?',
      partnerAudioText:
        'Hello! Building management office, David speaking. How can I help you today?',
      partnerQuestionHindi:
        'नमस्ते! भवन प्रबंधन कार्यालय, डेविड बोल रहा हूँ। आज मैं आपकी क्या मदद कर सकता हूँ?',
      expectedFunction: 'Greeting David, stating your apartment number, and describing the maintenance problem clearly',
      contextGoal: 'Greet David, identify your apartment (e.g. 4B or 3A), and explain the main problem (leaking faucet / rattling AC)',
      targetVocabulary: ['Hello David', 'apartment', 'calling to report a problem', 'faucet is leaking', 'air conditioner is making a rattling noise', 'dripping'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Hello David! This is my apartment, 4B. I am calling to report a problem in my bathroom. The faucet is leaking water constantly, and the air conditioner is making a loud rattling noise.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'Good morning David. I live in apartment 4B. There is an urgent issue: our bathroom faucet is dripping continuously, and water is pooling on the tile floor.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_identification',
          patterns: ['hello', 'hi', 'david', 'good morning', 'apartment', 'flat', 'calling'],
          required: true,
        },
        {
          name: 'problem_description',
          patterns: ['faucet', 'leak', 'leaking', 'dripping', 'tap', 'air conditioner', 'ac', 'rattling', 'noise', 'water', 'floor'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_256_1_tap_is_leak',
          pattern: /faucet is leak\b|tap is leak\b/i,
          errorType: 'grammar',
          message: 'Use continuous: "The faucet is leaking" or "The tap is dripping".',
          correctionPattern: 'The faucet is leaking water constantly.',
        },
      ],
      remediationPractice: {
        id: 'rem_256_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The kitchen pipe is ______ (leaking / leak)."',
        options: [
          { id: 'r1', text: 'leaking', isCorrect: true },
          { id: 'r2', text: 'leak', isCorrect: false },
        ],
        correctAnswer: 'leaking',
        explanation: 'Continuous form "is leaking" describes an active state.',
      },
    },
    {
      id: 'turn_256_2',
      turnIndex: 2,
      partnerPrompt:
        'Thank you for letting me know. When did this issue start, and have you tried turning the valve underneath or switching the AC unit off?',
      partnerAudioText:
        'Thank you for letting me know. When did this issue start, and have you tried turning the valve underneath or switching the AC unit off?',
      partnerQuestionHindi:
        'मुझे बताने के लिए धन्यवाद। यह समस्या कब शुरू हुई, और क्या आपने नीचे के वाल्व को बंद करने या एसी यूनिट को बंद करने का प्रयास किया है?',
      expectedFunction: 'Explaining the timeline and detailing what troubleshooting actions you took',
      contextGoal: 'Explain that the leak started yesterday afternoon/evening, you tried turning off the valve/switch, but the problem persists',
      targetVocabulary: ['started yesterday', 'around 5 PM', 'I tried turning off the valve', 'it did not work', 'water is still dripping', 'switched off the AC'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'It started yesterday evening around six o’clock. I tried turning the water valve under the sink tightly, but water is still dripping. I also turned off the AC because the rattling sound got worse.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'The problem began yesterday afternoon. I tried closing the main valve and restarting the AC, but neither helped. We need a technician to inspect the pipes.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'timeline_statement',
          patterns: ['yesterday', 'evening', 'afternoon', 'started', 'began', 'hours ago', 'last night'],
          required: true,
        },
        {
          name: 'attempted_action',
          patterns: ['tried', 'turning', 'valve', 'switch', 'turned off', 'shut off', 'still dripping', 'not work', 'persists'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_256_2_past_try',
          pattern: /i try to turn off/i,
          errorType: 'grammar',
          message: 'Use past tense: "I tried to turn off the valve" or "I tried turning off the valve".',
          correctionPattern: 'I tried turning off the valve, but water is still dripping.',
        },
      ],
      remediationPractice: {
        id: 'rem_256_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a past action that did not solve the issue?',
        options: [
          { id: 'r1', text: 'I tried turning off the valve, but the faucet is still dripping.', isCorrect: true },
          { id: 'r2', text: 'I try turn valve but still is leak.', isCorrect: false },
        ],
        correctAnswer: 'I tried turning off the valve, but the faucet is still dripping.',
        explanation: 'Past simple "tried" + gerund "turning" + contrasting clause.',
      },
    },
    {
      id: 'turn_256_3',
      turnIndex: 3,
      partnerPrompt:
        'Alright, we have a plumber and an AC technician scheduled for tomorrow. What time window works best for you: morning between 9:00 and 11:00 AM, or afternoon after 2:00 PM?',
      partnerAudioText:
        'Alright, we have a plumber and an AC technician scheduled for tomorrow. What time window works best for you: morning between 9:00 and 11:00 AM, or afternoon after 2:00 PM?',
      partnerQuestionHindi:
        'ठीक है, हमारे पास कल के लिए एक प्लंबर और एक एसी तकनीशियन निर्धारित हैं। आपके लिए कौन सा समय सबसे अच्छा रहेगा: सुबह 9:00 से 11:00 बजे के बीच, या दोपहर 2:00 बजे के बाद?',
      expectedFunction: 'Choosing a preferred time slot, confirming attendance, and asking a polite follow-up question',
      contextGoal: 'Select the morning (9-11 AM) or afternoon (after 2 PM) slot, confirm you will be home, and ask if the technician brings replacement parts',
      targetVocabulary: ['morning between 9:00 and 11:00 AM', 'I will be at home', 'could you confirm', 'replacement parts', 'thank you for your help', 'David'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffolding',
          text: 'Tomorrow morning between 9:00 and 11:00 AM is perfect for me. I will be at home to let them in. Will the technician bring spare parts for the faucet? Thank you for your quick help, David!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Open Production',
          text: 'The morning slot between 9:00 and 11:00 AM works best. I will be inside apartment 4B. Could you please send me a text before they arrive? Thank you!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'time_slot_selection',
          patterns: ['morning', '9', '11', 'afternoon', '2', 'tomorrow', 'works', 'prefer', 'time'],
          required: true,
        },
        {
          name: 'confirmation_and_followup',
          patterns: ['home', 'open the door', 'let them in', 'text', 'parts', 'thank you', 'thanks', 'appreciate', 'david'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_256_3_in_morning_time',
          pattern: /at tomorrow morning/i,
          errorType: 'grammar',
          message: 'Say "tomorrow morning" without "at".',
          correctionPattern: 'Tomorrow morning between 9:00 and 11:00 AM works best.',
        },
      ],
      remediationPractice: {
        id: 'rem_256_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Tomorrow morning between 9:00 and 11:00 AM / works best for me / so I will be at home]',
        correctAnswer: 'Tomorrow morning between 9:00 and 11:00 AM works best for me so I will be at home',
        explanation: 'Time subject phrase + verb phrase + coordinating consequence.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
