import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_269: ConversationDefinition = {
  id: 'conv_a2_269',
  title: 'Integrated A2 Communication Simulation',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_269'],
  estimatedMinutes: 6,
  scenario:
    'You participate in an integrated, real-time travel simulation with concierge Arthur upon arriving in a foreign city for an international student symposium. You must navigate a sudden road closure, inquire about the fastest alternative subway or rideshare route, specify dietary preferences for the opening banquet, and confirm tomorrow’s workshop schedule.',
  communicativeGoals: [
    'Execute a multi-stage real-world communication simulation in fluent A2 English',
    'Explain unexpected transit disruptions and request alternative route recommendations',
    'Specify dietary requirements and preferences politely: "Could you please note that I am vegetarian...?"',
    'Confirm schedules, meeting points, and emergency contact details for the next day',
  ],
  canDoStatements: [
    'Can handle a multi-part real-world travel situation with overlapping problems and questions',
    'Can request and compare alternative transport options based on price and transit time',
    'Can state dietary needs clearly and verify next-day schedules with a concierge',
  ],
  characters: [
    {
      id: 'char_arthur_concierge',
      name: 'Arthur',
      role: 'International Symposium Concierge & City Host',
      avatar: '🧭',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'symposium',
        ipa: '/sɪmˈpəʊziəm/',
        partOfSpeech: 'noun',
        meaning: 'A formal conference or meeting in which specialists discuss a particular topic',
        exampleSentence: 'I am attending the annual International Student Symposium.',
        translations: { hi: 'विचारगोष्ठी / सम्मेलन (सिम्पोज़ियम)' },
      },
      {
        word: 'detour',
        ipa: '/ˈdiːtʊə/',
        partOfSpeech: 'noun',
        meaning: 'A roundabout way or alternate route taken when a road or transit line is closed',
        exampleSentence: 'Because Main Street is closed, the bus has to take a long detour.',
        translations: { hi: 'वैकल्पिक मार्ग / चक्कर (डीटूर)' },
      },
      {
        word: 'dietary',
        ipa: '/ˈdaɪətəri/',
        partOfSpeech: 'adjective',
        meaning: 'Relating to a person’s diet or nutritional requirements and restrictions',
        exampleSentence: 'Do you have any specific dietary requirements or food allergies?',
        translations: { hi: 'आहार संबंधी / खानपान संबंधी (डाइट्री)' },
      },
      {
        word: 'itinerary',
        ipa: '/aɪˈtɪnərəri/',
        partOfSpeech: 'noun',
        meaning: 'A planned route, journey, or detailed schedule of events',
        exampleSentence: 'Here is your official conference itinerary for tomorrow.',
        translations: { hi: 'यात्रा कार्यक्रम / दैनिक कार्यक्रम (इटिनररी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I noticed that the main bus line is suspended due to...',
        functionCategory: 'Reporting an unexpected travel obstacle',
        exampleSentence: 'I noticed that the main bus line is suspended due to road construction.',
      },
      {
        phrase: 'Which alternative route would you recommend: the subway or a taxi?',
        functionCategory: 'Comparing transport options with a local expert',
        exampleSentence: 'Which alternative route would you recommend: the express subway or a shared taxi?',
      },
      {
        phrase: 'Could you also please note my dietary preference for tonight’s dinner?',
        functionCategory: 'Requesting dietary accommodations politely',
        exampleSentence: 'Could you also please note my dietary preference for tonight’s welcome dinner?',
      },
      {
        phrase: 'What time should we assemble in the lobby tomorrow morning?',
        functionCategory: 'Verifying schedule and assembly details',
        exampleSentence: 'What time should all participants assemble in the lobby tomorrow morning?',
      },
    ],
    grammar: {
      title: 'Integrated Problem Solving: Indirect Inquiries, Conditional Advice & Polite Requests',
      conceptExplanation:
        '1. Inquiring about transit alternatives: "If I take the Blue Line subway, how long does it take?"\n2. Stating dietary conditions: "I am vegetarian, so I do not eat meat or seafood"\n3. Asking schedule logistics: "Could you tell me where the morning bus departs from?"\n4. Confirming details: "Just to confirm, tomorrow we start at 8:30 AM in Conference Hall B, correct?"',
      patternFormula: 'I encountered [Transit Problem]. What alternative do you suggest? Also, regarding [Diet / Event], could you [Polite Request]? What time does [Next Event] begin?',
      contrastExamples: [
        {
          incorrect: 'Bus is stop. Tell me other way fast.',
          correct: 'Excuse me Arthur, the main bus line is suspended. Could you suggest the quickest subway route to the center?',
          explanation: 'Use polite, natural communicative phrasing in simulation scenarios.',
        },
        {
          incorrect: 'I am vegetarian person who don’t eat meat food.',
          correct: 'I have a dietary requirement: I am vegetarian and do not eat meat or fish.',
          explanation: 'Clear, concise statement of dietary restrictions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Welcome to the International City Center! I am Arthur, your symposium concierge. Did you make it through the city without any transit trouble?',
        translation: 'अंतर्राष्ट्रीय शहर केंद्र में आपका स्वागत है! मैं आर्थर हूँ, आपका संगोष्ठी द्वारपाल। क्या आप बिना किसी पारगमन परेशानी के शहर के माध्यम से पहुँचे?',
      },
      {
        speaker: 'Learner',
        text: 'Hello Arthur! Thank you for the warm welcome. Actually, I noticed that the central bus line is closed due to road work. What is the fastest subway route to reach the campus?',
        translation: 'नमस्ते आर्थर! गर्मजोशी से स्वागत के लिए धन्यवाद। दरअसल, मैंने देखा कि सड़क के काम के कारण सेंट्रल बस लाइन बंद है। परिसर तक पहुँचने के लिए सबसे तेज़ सबवे मार्ग कौन सा है?',
      },
      {
        speaker: 'Arthur',
        text: 'Take the Blue Metro Line directly from Central Station to University Square; it only takes 12 minutes! Let me check you in for the symposium now.',
        translation: 'सेंट्रल स्टेशन से सीधे ब्लू मेट्रो लाइन लें और यूनिवर्सिटी स्क्वायर तक जाएँ; इसमें केवल 12 मिनट लगते हैं! मैं आपको अभी संगोष्ठी के लिए चेक इन करता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_269_1',
      type: 'fill_blank',
      prompt: 'Complete: "Could you please recommend the fastest ______ (alternative / alternatively / alter) to the bus?"',
      options: [
        { id: 'opt_1', text: 'alternative', isCorrect: true },
        { id: 'opt_2', text: 'alternatively', isCorrect: false },
        { id: 'opt_3', text: 'alter', isCorrect: false },
      ],
      correctAnswer: 'alternative',
      explanation: 'Noun "alternative" is modified by the adjective "fastest".',
    },
    {
      id: 'cp_269_2',
      type: 'multiple_choice',
      prompt: 'Which sentence states dietary requirements and requests schedule confirmation accurately?',
      options: [
        { id: 'opt_1', text: 'Please note that I am vegetarian, and could you confirm what time the morning session begins?', isCorrect: true },
        { id: 'opt_2', text: 'I am vegetarian food and what time morning start?', isCorrect: false },
        { id: 'opt_3', text: 'Please noting vegetarian for me and tell schedule fast.', isCorrect: false },
      ],
      correctAnswer: 'Please note that I am vegetarian, and could you confirm what time the morning session begins?',
      explanation: 'Polite compound request with standard indirect syntax.',
    },
    {
      id: 'cp_269_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Take the Blue Metro Line / to University Square / for the fastest connection]',
      correctAnswer: 'Take the Blue Metro Line to University Square for the fastest connection',
      explanation: 'Imperative direction + prepositional destination + purpose phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_269_1',
      prompt: 'Construct a sentence explaining that the bus line is suspended and asking if the subway is faster.',
      scenarioContext: 'Inquiring about transit options with Arthur.',
      targetStructure: 'The main bus line is suspended; is taking the subway faster?',
      wordBank: ['The main bus line', 'is suspended; is taking', 'the subway faster?', 'bus suspended is', 'faster taking subway'],
      acceptableSolutions: [
        'The main bus line is suspended; is taking the subway faster?',
        'The main bus is suspended; is the subway faster?',
      ],
      explanation: 'Compound inquiry sentence with semi-colon and gerund subject.',
    },
    {
      id: 'sc_269_2',
      prompt: 'Construct a sentence stating that I am vegetarian and asking what time the welcome banquet starts.',
      scenarioContext: 'Handling event logistics.',
      targetStructure: 'Please note that I am vegetarian, and what time does the welcome dinner start?',
      wordBank: ['Please note that I', 'am vegetarian, and what', 'time does the welcome', 'dinner start?', 'vegetarian food is', 'start does dinner'],
      acceptableSolutions: [
        'Please note that I am vegetarian, and what time does the welcome dinner start?',
        'Please note that I am a vegetarian, and what time does the dinner start?',
      ],
      explanation: 'Polite imperative clause + coordinate direct question.',
    },
  ],
  turns: [
    {
      id: 'turn_269_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the International Symposium! My name is Arthur. You have arrived right on time, but I heard that city traffic was difficult today. Did you encounter any transit problems on your way here?',
      partnerAudioText:
        'Hello and welcome to the International Symposium! My name is Arthur. You have arrived right on time, but I heard that city traffic was difficult today. Did you encounter any transit problems on your way here?',
      partnerQuestionHindi:
        'नमस्ते और अंतर्राष्ट्रीय संगोष्ठी में आपका स्वागत है! मेरा नाम आर्थर है। आप बिल्कुल समय पर पहुंचे हैं, लेकिन मैंने सुना है कि आज शहर का ट्रैफिक मुश्किल था। क्या आपको यहाँ आते समय किसी पारगमन समस्या का सामना करना पड़ा?',
      expectedFunction: 'Explaining a transit disruption (bus route suspended due to road work) and asking Arthur for the best local travel alternative',
      contextGoal: 'Greet Arthur, mention that the main express bus was suspended due to construction, and ask whether the subway or shared taxi is better for traveling around the city',
      targetVocabulary: ['Hello Arthur', 'thank you for the welcome', 'the express bus route was suspended', 'due to emergency road construction', 'Which transit option is faster', 'the Blue Line subway or a taxi'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Hello Arthur, thank you for the warm welcome! Yes, I noticed that the express bus route was suspended due to unexpected road construction near Main Avenue. For getting around the university district this week, which alternative would you recommend: taking the Blue Line subway or using a local rideshare taxi?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Response',
          text: 'Hi Arthur! The main bus line was closed today because of road repairs. Is the subway system easy and fast to use from this hotel, or should I take a taxi?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_arthur',
          patterns: ['hello', 'hi', 'arthur', 'welcome', 'good morning', 'good afternoon'],
          required: true,
        },
        {
          name: 'transit_disruption_and_question',
          patterns: ['bus', 'suspended', 'closed', 'construction', 'traffic', 'subway', 'metro', 'taxi', 'rideshare', 'recommend', 'faster'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_269_1_bus_is_close_adjective',
          pattern: /bus is close\b/i,
          errorType: 'grammar',
          message: 'Say "The bus line is suspended" or "The road is closed" (past participle).',
          correctionPattern: 'The express bus route was suspended due to road work.',
        },
      ],
      remediationPractice: {
        id: 'rem_269_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The bus route was ______ (suspended / suspend) due to traffic."',
        options: [
          { id: 'r1', text: 'suspended', isCorrect: true },
          { id: 'r2', text: 'suspend', isCorrect: false },
        ],
        correctAnswer: 'suspended',
        explanation: 'Passive verb form "was suspended".',
      },
    },
    {
      id: 'turn_269_2',
      turnIndex: 2,
      partnerPrompt:
        'The Blue Line subway is definitely your best choice—it runs every 5 minutes and takes only 10 minutes to the symposium hall! Now, regarding our opening welcome banquet tonight at 7:00 PM, do you have any dietary restrictions or preferences we should register?',
      partnerAudioText:
        'The Blue Line subway is definitely your best choice—it runs every 5 minutes and takes only 10 minutes to the symposium hall! Now, regarding our opening welcome banquet tonight at 7:00 PM, do you have any dietary restrictions or preferences we should register?',
      partnerQuestionHindi:
        'ब्लू लाइन सबवे निश्चित रूप से आपकी सबसे अच्छी पसंद है - यह हर 5 मिनट में चलती है और संगोष्ठी हॉल तक केवल 10 मिनट का समय लेती है! अब, आज रात 7:00 बजे हमारे उद्घाटन स्वागत भोज के बारे में, क्या आपके पास कोई आहार प्रतिबंध या प्राथमिकताएं हैं जिन्हें हमें पंजीकृत करना चाहिए?',
      expectedFunction: 'Specifying dietary requirements clearly (vegetarian / vegan / allergy / no seafood) and asking about the banquet dress code',
      contextGoal: 'Explain your dietary requirements (vegetarian: no meat, poultry, or fish), request a vegetarian meal badge, and ask about the dress code for tonight',
      targetVocabulary: ['Thank you for the subway advice', 'Please note that I am vegetarian', 'I do not eat any meat or seafood', 'vegetarian meal option', 'Is there a specific dress code for tonight', 'formal or business casual'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'That subway tip is extremely helpful, thank you! Regarding dinner, please note that I am strictly vegetarian and do not eat any meat, poultry, or seafood. Could you please ensure a vegetarian meal badge is registered for my seat? Also, is tonight’s banquet formal attire or business casual?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Response',
          text: 'Thanks Arthur! Yes, please note that I am vegetarian. I do not eat meat or fish. What is the dress code for the dinner tonight: formal or casual?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'dietary_specification',
          patterns: ['vegetarian', 'vegan', 'meat', 'fish', 'seafood', 'poultry', 'dietary', 'allergies', 'meal'],
          required: true,
        },
        {
          name: 'dress_code_question',
          patterns: ['dress code', 'attire', 'formal', 'business casual', 'casual', 'wear', 'tonight', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_269_2_i_am_not_eat',
          pattern: /i am not eat meat/i,
          errorType: 'grammar',
          message: 'Present simple negative: "I do not eat meat" (auxiliary "do not").',
          correctionPattern: 'I am vegetarian and do not eat meat.',
        },
      ],
      remediationPractice: {
        id: 'rem_269_2',
        type: 'multiple_choice',
        prompt: 'Which sentence states dietary requirements correctly?',
        options: [
          { id: 'r1', text: 'Please note that I am vegetarian and do not eat meat.', isCorrect: true },
          { id: 'r2', text: 'Please note I am vegetarian and am not eat meat.', isCorrect: false },
        ],
        correctAnswer: 'Please note that I am vegetarian and do not eat meat.',
        explanation: 'Standard present simple negative "do not eat".',
      },
    },
    {
      id: 'turn_269_3',
      turnIndex: 3,
      partnerPrompt:
        'I have registered your vegetarian meal card, and tonight’s dress code is business casual. Here is your room keycard and conference binder. To make sure you are fully prepared for tomorrow, what final questions do you have about the morning schedule and symposium assembly?',
      partnerAudioText:
        'I have registered your vegetarian meal card, and tonight’s dress code is business casual. Here is your room keycard and conference binder. To make sure you are fully prepared for tomorrow, what final questions do you have about the morning schedule and symposium assembly?',
      partnerQuestionHindi:
        'मैंने आपका शाकाहारी भोजन कार्ड पंजीकृत कर लिया है, और आज रात का ड्रेस कोड बिजनेस कैजुअल है। यह आपके कमरे का की-कार्ड और सम्मेलन फ़ोल्डर है। यह सुनिश्चित करने के लिए कि आप कल के लिए पूरी तरह तैयार हैं, सुबह के कार्यक्रम और संगोष्ठी सभा के बारे में आपके क्या अंतिम प्रश्न हैं?',
      expectedFunction: 'Confirming tomorrow morning’s start time (8:30 AM), assembly location (hotel lobby), Wi-Fi password, and closing with gratitude',
      contextGoal: 'Confirm that morning assembly is in the lobby at 8:15 AM, ask where to get the campus Wi-Fi login, and thank Arthur for his comprehensive support',
      targetVocabulary: ['Just to confirm the schedule', 'Does the morning shuttle leave the lobby at 8:15 AM', 'Where can I find the campus Wi-Fi credentials', 'Thank you so much Arthur for your outstanding assistance', 'See you at the banquet tonight'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Just to confirm the schedule: we assemble in the main lobby tomorrow morning at 8:15 AM, correct? Also, where can I find the symposium Wi-Fi login password in this binder? Thank you so much for all your outstanding help, Arthur. I look forward to the banquet tonight!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Core Response',
          text: 'Thank you Arthur! Just to double-check: what time do we meet in the lobby tomorrow morning, and is the Wi-Fi password written in the binder? Thanks again for your help!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'schedule_confirmation',
          patterns: ['confirm', 'tomorrow', 'morning', '8:15', '8:30', 'assemble', 'meet', 'lobby', 'schedule'],
          required: true,
        },
        {
          name: 'wifi_and_gratitude',
          patterns: ['wi-fi', 'wifi', 'password', 'login', 'binder', 'thank you', 'thanks', 'arthur', 'tonight', 'banquet'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_269_3_see_you_in_tonight',
          pattern: /see you in tonight\b/i,
          errorType: 'grammar',
          message: 'Say "See you tonight" without "in".',
          correctionPattern: 'See you at the banquet tonight, Arthur!',
        },
      ],
      remediationPractice: {
        id: 'rem_269_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Thank you for your help, / and see you at the banquet / tonight at seven]',
        correctAnswer: 'Thank you for your help, and see you at the banquet tonight at seven',
        explanation: 'Gratitude clause + coordinated closing farewell.',
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
