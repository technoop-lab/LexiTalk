import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_249: ConversationDefinition = {
  id: 'conv_a2_249',
  title: 'Weather, Natural Events & Public Information',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_249'],
  estimatedMinutes: 5,
  scenario:
    'You are in the municipal civil protection office talking with weather safety officer Nora. You review the weekend meteorological forecast, discuss severe weather advisories and seasonal patterns, explain safety measures for high winds and heavy rainfall, and mediate a public safety notice for neighbors.',
  communicativeGoals: [
    'Interpret meteorological bulletins, weather forecasts, and advisory notices in A2 English',
    'Use weather prediction chunks: "it is expected to...", "heavy rainfall warning", "temperatures will drop to..."',
    'Explain public safety precautions (stay indoors, carry an umbrella, secure outdoor furniture)',
    'Mediate a municipal weather advisory clearly to family and community members',
  ],
  canDoStatements: [
    'Can understand and talk about weather forecasts and seasonal temperature changes',
    'Can understand official weather warnings and explain what precautions to take',
    'Can relay emergency weather safety instructions to neighbors in simple English',
  ],
  characters: [
    {
      id: 'char_nora_safety_officer',
      name: 'Nora',
      role: 'Municipal Weather Safety Officer',
      avatar: '🌦️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'forecast',
        ipa: '/ˈfɔːkɑːst/',
        partOfSpeech: 'noun / verb',
        meaning: 'A statement of what the weather is likely to be for the next day or few days',
        exampleSentence: 'The meteorological forecast predicts scattered thunderstorms this evening.',
        translations: { hi: 'मौसम का पूर्वानुमान (फोरकास्ट)' },
      },
      {
        word: 'expected to',
        ipa: '/ɪkˈspektɪd tuː/',
        partOfSpeech: 'verb phrase',
        meaning: 'Regarded as likely or probable to happen according to official reports',
        exampleSentence: 'Temperatures are expected to drop below ten degrees tonight.',
        translations: { hi: 'होने की संभावना है (एक्सपेक्टेड टू)' },
      },
      {
        word: 'warning',
        ipa: '/ˈwɔːnɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'A statement or notice telling people of a possible danger, severe storm, or problem',
        exampleSentence: 'The city issued a severe weather warning for heavy rainfall.',
        translations: { hi: 'चेतावनी (वॉर्निंग)' },
      },
      {
        word: 'precaution',
        ipa: '/prɪˈkɔːʃn/',
        partOfSpeech: 'noun',
        meaning: 'A measure taken in advance to prevent something dangerous, unpleasant, or inconvenient',
        exampleSentence: 'As a safety precaution, please stay indoors during the windstorm.',
        translations: { hi: 'एहतियात / सावधानी (प्रिकॉशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the weather forecast...',
        functionCategory: 'Attributing weather information',
        exampleSentence: 'According to the weather forecast, sunshine is expected all weekend.',
      },
      {
        phrase: 'Heavy rain is expected to start around...',
        functionCategory: 'Predicting storm timing',
        exampleSentence: 'Heavy rain is expected to start around four in the afternoon.',
      },
      {
        phrase: 'Residents are advised to stay indoors.',
        functionCategory: 'Stating official public safety guidelines',
        exampleSentence: 'During the hail storm, residents are advised to stay indoors.',
      },
      {
        phrase: 'Make sure you secure all outdoor items.',
        functionCategory: 'Giving practical safety instructions',
        exampleSentence: 'Before the gale winds arrive, make sure you secure all outdoor patio items.',
      },
    ],
    grammar: {
      title: 'Weather Predictions: "Be expected to + Verb" & Passive Advisories',
      conceptExplanation:
        '1. Predicting with evidence: "Subject + is/are expected to + [base verb]" (e.g. "Temperatures are expected to rise.")\n2. Passive public advisories: "Residents are advised to + [base verb]"\n3. First conditional for weather safety: "If the wind increases, we will close the bridge."',
      patternFormula: '[Weather condition] + is expected to + [Verb] / Residents are advised to + [Verb]',
      contrastExamples: [
        {
          incorrect: 'Rain is expect to fall tomorrow.',
          correct: 'Rain is expected to fall tomorrow.',
          explanation: 'Use the past participle form: "is expected to".',
        },
        {
          incorrect: 'Residents are advise stay home.',
          correct: 'Residents are advised to stay home.',
          explanation: 'Passive structure: "are advised to + base verb".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nora',
        text: 'Hello! I am reviewing the civil protection bulletin. Did you check the latest meteorological forecast for tomorrow?',
        translation: 'नमस्ते! मैं नागरिक सुरक्षा बुलेटिन की समीक्षा कर रही हूँ। क्या आपने कल के लिए नवीनतम मौसम पूर्वानुमान देखा?',
      },
      {
        speaker: 'Learner',
        text: 'Yes, Nora. Heavy rainfall and strong winds are expected to arrive by early afternoon.',
        translation: 'हाँ, नोरा। दोपहर तक भारी बारिश और तेज़ हवाएँ आने की संभावना है।',
      },
      {
        speaker: 'Nora',
        text: 'That is correct. What safety precautions should residents take before the storm hits?',
        translation: 'यह सही है। तूफान आने से पहले निवासियों को क्या सुरक्षा सावधानियां बरतनी चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_249_1',
      type: 'fill_blank',
      prompt: 'Complete: "Temperatures are ______ (expected / expecting / expect) to rise significantly over the weekend."',
      options: [
        { id: 'opt_1', text: 'expected', isCorrect: true },
        { id: 'opt_2', text: 'expecting', isCorrect: false },
        { id: 'opt_3', text: 'expect', isCorrect: false },
      ],
      correctAnswer: 'expected',
      explanation: '"Are expected to" expresses likelihood in forecasts.',
    },
    {
      id: 'cp_249_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly relays an official weather advisory?',
      options: [
        { id: 'opt_1', text: 'Due to severe winds, residents are advised to stay indoors.', isCorrect: true },
        { id: 'opt_2', text: 'Due severe winds residents are advise to staying indoors.', isCorrect: false },
        { id: 'opt_3', text: 'Weather warning say to stay indoor for wind.', isCorrect: false },
      ],
      correctAnswer: 'Due to severe winds, residents are advised to stay indoors.',
      explanation: '"Residents are advised to stay indoors" is the standard public safety construction.',
    },
    {
      id: 'cp_249_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The meteorological service issued / a severe rainfall warning / for the coastal district]',
      correctAnswer: 'The meteorological service issued a severe rainfall warning for the coastal district',
      explanation: 'Subject + issued + warning phrase + location phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_249_1',
      prompt: 'Construct a sentence stating that according to the forecast, heavy rain is expected to start this evening.',
      scenarioContext: 'Relaying weather forecast to Nora.',
      targetStructure: 'According to the forecast, heavy rain is expected to start this evening.',
      wordBank: ['According to the forecast,', 'heavy rain is expected', 'to start this evening.', 'advising to', 'precaution'],
      acceptableSolutions: [
        'According to the forecast, heavy rain is expected to start this evening.',
        'According to the weather forecast, heavy rain is expected to start this evening.',
      ],
      explanation: '"According to the forecast, [subject] is expected to start...".',
    },
    {
      id: 'sc_249_2',
      prompt: 'Construct a sentence stating that as a safety precaution, residents are advised to secure outdoor furniture.',
      scenarioContext: 'Explaining storm precautions.',
      targetStructure: 'As a safety precaution, residents are advised to secure outdoor furniture.',
      wordBank: ['As a safety precaution,', 'residents are advised', 'to secure outdoor furniture.', 'is expect to', 'forecasts'],
      acceptableSolutions: [
        'As a safety precaution, residents are advised to secure outdoor furniture.',
        'Residents are advised to secure outdoor furniture as a safety precaution.',
      ],
      explanation: 'Prepositional phrase + passive advisory "are advised to secure".',
    },
  ],
  turns: [
    {
      id: 'turn_249_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! I am Officer Nora from the Civil Weather Monitoring Center. We are updating the public safety bulletin. What is the current weather like today, and what did you hear in the morning forecast?',
      partnerAudioText:
        'Good morning! I am Officer Nora from the Civil Weather Monitoring Center. We are updating the public safety bulletin. What is the current weather like today, and what did you hear in the morning forecast?',
      partnerQuestionHindi:
        'शुभ प्रभात! मैं नागरिक मौसम निगरानी केंद्र से अधिकारी नोरा हूँ। हम सार्वजनिक सुरक्षा बुलेटिन को अपडेट कर रहे हैं। आज वर्तमान मौसम कैसा है, और आपने सुबह के पूर्वानुमान में क्या सुना?',
      expectedFunction: 'Greeting Nora and reporting current weather conditions and the upcoming forecast',
      contextGoal: 'Greet Nora, describe current weather (chilly, cloudy, humid), and state what the forecast predicts (rain, wind, drop in temperature)',
      targetVocabulary: ['Good morning Nora', 'forecast', 'expected to', 'cloudy and breezy', 'heavy rain', 'temperatures will drop'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good morning, Officer Nora! Right now it is cloudy and breezy. According to the morning forecast, heavy rain is expected to start by two in the afternoon and temperatures will drop.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Nora! The sky is overcast today. The weather report says we should expect gusty winds and thunderstorms later this evening.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good morning! It is quite chilly today. The forecast predicts steady rainfall for the next twenty-four hours.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_nora',
          patterns: ['good morning', 'hello', 'hi', 'nora', 'officer'],
          required: true,
        },
        {
          name: 'weather_report',
          patterns: ['cloudy', 'breezy', 'forecast', 'expected to', 'rain', 'winds', 'temperatures', 'drop', 'thunderstorm', 'chilly'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_249_1_rain_is_expect',
          pattern: /rain is expect/i,
          errorType: 'grammar',
          message: 'Say "rain is expected to start" (use past participle "expected").',
          correctionPattern: 'Rain is expected to start this afternoon.',
        },
      ],
      remediationPractice: {
        id: 'rem_249_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Strong winds are ______ (expected / expecting) tonight."',
        options: [
          { id: 'r1', text: 'expected', isCorrect: true },
          { id: 'r2', text: 'expect', isCorrect: false },
        ],
        correctAnswer: 'expected',
        explanation: 'Passive structure: "are expected".',
      },
    },
    {
      id: 'turn_249_2',
      turnIndex: 2,
      partnerPrompt:
        'The meteorological office has just issued an official Yellow Alert warning for localized flooding and gale-force wind gusts. What specific safety precautions should local residents take to stay safe?',
      partnerAudioText:
        'The meteorological office has just issued an official Yellow Alert warning for localized flooding and gale-force wind gusts. What specific safety precautions should local residents take to stay safe?',
      partnerQuestionHindi:
        'मौसम विज्ञान कार्यालय ने अभी-अभी स्थानीय बाढ़ और तेज़ हवाओं के झोंकों के लिए आधिकारिक येलो अलर्ट चेतावनी जारी की है। सुरक्षित रहने के लिए स्थानीय निवासियों को क्या विशिष्ट सुरक्षा सावधानियां बरतनी चाहिए?',
      expectedFunction: 'Listing practical safety precautions using "residents are advised to" and imperative chunks',
      contextGoal: 'Explain precautions: stay indoors, charge phones, secure outdoor objects, avoid low-lying roads',
      targetVocabulary: ['warning', 'safety precautions', 'residents are advised to', 'stay indoors', 'secure outdoor furniture', 'avoid flooded roads'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'As a safety precaution, residents are advised to stay indoors and avoid driving through flooded roads. Everyone should also secure loose balcony furniture and keep emergency torches ready.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'People should close all windows securely and avoid walking under tall trees during the windstorm. It is best to stay inside until the warning clears.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Residents should stay at home, bring pets inside, and avoid unnecessary travel until the weather improves.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'precaution_structures',
          patterns: ['precaution', 'advised to', 'should', 'secure', 'stay indoors', 'inside', 'windows', 'doors', 'furniture', 'avoid'],
          required: true,
        },
        {
          name: 'hazard_awareness',
          patterns: ['flooding', 'roads', 'wind', 'storm', 'trees', 'warning', 'safe', 'travel'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_249_2_stay_indoor',
          pattern: /advised to staying/i,
          errorType: 'grammar',
          message: 'Use base verb "advised to stay" (not "-ing").',
          correctionPattern: 'Residents are advised to stay indoors.',
        },
      ],
      remediationPractice: {
        id: 'rem_249_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly advises residents on storm safety?',
        options: [
          { id: 'r1', text: 'Residents are advised to stay indoors and secure outdoor items.', isCorrect: true },
          { id: 'r2', text: 'Residents are advise stay indoors for the windstorm.', isCorrect: false },
        ],
        correctAnswer: 'Residents are advised to stay indoors and secure outdoor items.',
        explanation: '"Are advised to stay" is the correct passive infinitive pattern.',
      },
    },
    {
      id: 'turn_249_3',
      turnIndex: 3,
      partnerPrompt:
        'An elderly neighbor in our building is worried about walking to the grocery market this afternoon. Could you mediate the weather advisory for them in clear, caring English and offer helpful advice?',
      partnerAudioText:
        'An elderly neighbor in our building is worried about walking to the grocery market this afternoon. Could you mediate the weather advisory for them in clear, caring English and offer helpful advice?',
      partnerQuestionHindi:
        'हमारी इमारत में एक बुजुर्ग पड़ोसी आज दोपहर किराना बाजार जाने को लेकर चिंतित हैं। क्या आप उनके लिए स्पष्ट, देखभाल भरी अंग्रेजी में मौसम परामर्श की मध्यस्थता (mediate) कर सकते हैं और उपयोगी सलाह दे सकते हैं?',
      expectedFunction: 'Mediating the weather alert with kindness, reassurance, and practical neighborly assistance',
      contextGoal: 'Explain the weather warning gently: heavy rain and strong wind start soon, advise staying home, and offer to pick up groceries for them',
      targetVocabulary: ['Hello', 'weather warning', 'expected to start soon', 'safer to stay home', 'let me help you', 'pick up groceries'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello! Please do not worry, but the weather service issued a heavy storm warning for this afternoon with strong winds. It is much safer to stay indoors today, and I would be glad to pick up your groceries for you!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi there! The forecast predicts gale winds and rain starting around two. You should stay home where it is warm and safe. Let me know what you need from the shop!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hello! The storm will arrive soon, so it is best to avoid going out. Please stay inside and I can bring your groceries.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'caring_greeting_warning',
          patterns: ['hello', 'hi', 'please', 'worry', 'weather', 'warning', 'storm', 'rain', 'wind', 'forecast'],
          required: true,
        },
        {
          name: 'practical_help_offer',
          patterns: ['stay indoors', 'stay home', 'safer', 'safe', 'groceries', 'shop', 'bring', 'pick up', 'help'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_249_3_blunt_warning',
          pattern: /^no go outside bad rain\.$/i,
          errorType: 'interaction',
          message: 'Express polite, caring mediation: "Hello! There is a storm warning today; it is safer to stay home, and I can help with groceries."',
          correctionPattern: 'It is safer to stay indoors today; let me pick up your groceries.',
        },
      ],
      remediationPractice: {
        id: 'rem_249_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [It is much safer to stay indoors / because strong winds / are expected this afternoon]',
        correctAnswer: 'It is much safer to stay indoors because strong winds are expected this afternoon',
        explanation: 'Comparative evaluation + causal prediction clause.',
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
