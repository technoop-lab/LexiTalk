import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_127: ConversationDefinition = {
  id: 'conv_a2_127',
  title: 'Travel Disruptions, Flight Delays & Lost Luggage Solutions (Airport Baggage Desk)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_127'],
  estimatedMinutes: 5,
  scenario:
    'You have arrived at Dublin Airport after a chaotic disrupted journey from Manchester. Your connecting flight was delayed by severe storms, and your checked suitcase has not arrived on Baggage Carousel 3. Approach airline customer service agent Fiona O’Reilly at the lost luggage desk to report the missing baggage, describe what happened using Past Continuous and Past Simple ("While we were waiting on the tarmac, the departure was postponed"), fill out a Property Irregularity Report (PIR), and arrange delivery to your city hotel.',
  communicativeGoals: [
    'Report missing or delayed luggage at an airline customer service desk with confidence',
    'Describe travel disruption narratives combining Past Continuous and Past Simple ("While I was waiting at the gate, the airline announced a cancellation")',
    'Provide precise descriptions of lost property (color, brand, hard-shell suitcase, luggage tag number)',
    'Request compensation policies, emergency toiletries kits, and direct hotel delivery',
  ],
  canDoStatements: [
    'Can report lost baggage and fill out a lost property report (CEFR A2)',
    'Can combine Past Continuous and Past Simple to explain travel delays',
    'Can provide clear physical descriptions of personal belongings and request delivery updates',
  ],
  characters: [
    {
      id: 'char_fiona_oreilly',
      name: 'Fiona O’Reilly',
      role: 'Baggage Services & Customer Care Lead',
      avatar: '🧳',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'carousel',
        ipa: '/ˌkærəˈsɛl/',
        partOfSpeech: 'noun',
        meaning: 'A revolving conveyor belt from which arriving airport passengers collect luggage',
        exampleSentence: 'I waited by carousel number three for forty minutes, but my suitcase didn’t appear.',
        translations: { hi: 'सामान की बेल्ट / कन्वेयर कैरोसेल' },
      },
      {
        word: 'luggage tag',
        ipa: '/ˈlʌɡɪdʒ tæɡ/',
        partOfSpeech: 'noun',
        meaning: 'A small printed receipt with a barcode given when checking in a suitcase',
        exampleSentence: 'Here is my baggage receipt tag: EI-784029.',
        translations: { hi: 'सामान की रसीद / बैगेज टैग' },
      },
      {
        word: 'disruption',
        ipa: '/dɪsˈrʌpʃən/',
        partOfSpeech: 'noun',
        meaning: 'A disturbance or problem that interrupts an event, activity, or journey',
        exampleSentence: 'Severe thunderstorms caused major flight disruptions across northern Europe.',
        translations: { hi: 'व्यवधान / रुकावट' },
      },
      {
        word: 'reimburse',
        ipa: '/ˌriːɪmˈbɜːs/',
        partOfSpeech: 'verb',
        meaning: 'To repay money to someone who has spent it for emergency necessities',
        exampleSentence: 'The airline will reimburse you for essential clothing and toiletries.',
        translations: { hi: 'खर्च का भुगतान / भरपाई करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I’m afraid my checked suitcase hasn’t appeared on carousel 3.',
        functionCategory: 'Reporting Missing Luggage',
        exampleSentence: 'My bag didn’t arrive on the carousel.',
      },
      {
        phrase: 'While we were waiting on the plane, the pilot announced a technical delay.',
        functionCategory: 'Combining Past Continuous & Past Simple',
        exampleSentence: 'While I was boarding, my gate changed.',
      },
      {
        phrase: 'It is a medium navy-blue hard-shell suitcase with four wheels.',
        functionCategory: 'Describing Luggage Features',
        exampleSentence: 'It is a large black fabric bag with red ribbons.',
      },
      {
        phrase: 'Could you arrange delivery to my hotel in Dublin city center?',
        functionCategory: 'Requesting Delivery to Hotel',
        exampleSentence: 'Please deliver it to my guesthouse.',
      },
    ],
    grammar: {
      title: 'Past Continuous + Past Simple in Crisis Narratives (While / When)',
      conceptExplanation:
        '1. Past Continuous ("was/were + verb-ing"): Describes the longer background action that was in progress.\n2. Past Simple ("V2"): Describes the sudden interrupting event.\n3. Linking words: "While + Past Continuous" (e.g. "While I was waiting at Gate 12, the screen flashed CANCELLED") or "When + Past Simple" (e.g. "I was queuing for boarding when the flight attendant made an announcement").\n4. Politeness with service agents: "Excuse me, I am afraid my bag has not arrived yet".',
      patternFormula: 'While + Subject + was/were + [Verb-ing], Subject + [Past Simple V2] | Excuse me, I\'m afraid my suitcase has not arrived on carousel [Number]',
      contrastExamples: [
        {
          incorrect: 'While I waited at the gate, the pilot was announcing the delay.',
          correct: 'While I was waiting at the gate, the pilot announced the delay.',
          explanation: 'Background action in progress = Past Continuous ("was waiting"); sudden short event = Past Simple ("announced").',
        },
        {
          incorrect: 'My bag is lost since two hours.',
          correct: 'My bag hasn’t arrived yet. / My bag went missing during the connection.',
          explanation: 'Use Present Perfect ("hasn\'t arrived yet") or Past Simple ("went missing").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Fiona O’Reilly',
        text: 'Hello, welcome to Aer Lingus Baggage Services. How can I help you this evening?',
        translation: 'नमस्ते, एयर लिंगस बैगेज सर्विसेज में आपका स्वागत है। आज शाम मैं आपकी क्या मदद कर सकती हूँ?',
      },
      {
        speaker: 'You',
        text: 'Hello, I’m afraid my checked suitcase hasn’t appeared on Carousel 3 from flight EI-332. While we were boarding in Manchester, our flight was delayed by two hours, so I think my bag missed the connection.',
        translation: 'नमस्ते, मुझे डर है कि फ्लाइट EI-332 से मेरा चेक किया हुआ सूटकेस कैरोसेल 3 पर नहीं आया है। जब हम मैनचेस्टर में बोर्डिंग कर रहे थे, हमारी उड़ान में दो घंटे की देरी हो गई थी, इसलिए मुझे लगता है कि मेरा बैग कनेक्शन से छूट गया।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_127_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "While I ___ (waited / was waiting) at the gate, the airline announced the cancellation."',
      options: [
        { id: 'opt_1', text: 'was waiting', isCorrect: true },
        { id: 'opt_2', text: 'waited', isCorrect: false },
        { id: 'opt_3', text: 'am waiting', isCorrect: false },
      ],
      correctAnswer: 'was waiting',
      explanation: 'Use Past Continuous ("was waiting") for the background action in progress after "While".',
    },
    {
      id: 'cp_a2_127_2',
      type: 'multiple_choice',
      prompt: 'What is the standard document called when filing a lost luggage claim at an airport?',
      options: [
        { id: 'opt_1', text: 'Property Irregularity Report (PIR)', isCorrect: true },
        { id: 'opt_2', text: 'Boarding Pass Claim Form', isCorrect: false },
        { id: 'opt_3', text: 'Airport Ticket Receipt', isCorrect: false },
      ],
      correctAnswer: 'Property Irregularity Report (PIR)',
      explanation: 'PIR (Property Irregularity Report) is the standard international aviation baggage claim form.',
    },
    {
      id: 'cp_a2_127_3',
      type: 'multiple_choice',
      prompt: 'Which sentence best describes a suitcase for the claim report?',
      options: [
        { id: 'opt_1', text: 'It is a medium navy-blue Samsonite hard-shell suitcase with four wheels and a blue ribbon on the handle.', isCorrect: true },
        { id: 'opt_2', text: 'It is just a normal big box bag.', isCorrect: false },
        { id: 'opt_3', text: 'Suitcase is very nice and good.', isCorrect: false },
      ],
      correctAnswer: 'It is a medium navy-blue Samsonite hard-shell suitcase with four wheels and a blue ribbon on the handle.',
      explanation: 'Specific details (size, color, brand, material, distinctive markers) are essential for tracking lost luggage.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_127_1',
      scenarioContext: 'Report missing luggage politely.',
      prompt: 'Build: "I am afraid my checked suitcase has not arrived on carousel three."',
      targetStructure: 'Subject + am afraid + subject + has not arrived + prepositional phrase',
      wordBank: ['I', 'am', 'afraid', 'my', 'checked', 'suitcase', 'has', 'not', 'arrived', 'on', 'carousel', 'three', 'did', 'is'],
      acceptableSolutions: [
        'I am afraid my checked suitcase has not arrived on carousel three',
        'I am afraid my checked suitcase has not arrived on carousel three.',
        'I\'m afraid my checked suitcase has not arrived on carousel three.',
      ],
      explanation: 'Polite missing baggage report formula.',
    },
    {
      id: 'sc_a2_127_2',
      scenarioContext: 'Describe the delay narrative with while.',
      prompt: 'Build: "While we were waiting the flight was delayed by two hours."',
      targetStructure: 'While + subject + were waiting + subject + was delayed + prepositional phrase',
      wordBank: ['While', 'we', 'were', 'waiting', 'the', 'flight', 'was', 'delayed', 'by', 'two', 'hours', 'waited', 'is'],
      acceptableSolutions: [
        'While we were waiting the flight was delayed by two hours',
        'While we were waiting the flight was delayed by two hours.',
        'While we were waiting, the flight was delayed by two hours.',
      ],
      explanation: 'Combines Past Continuous background action with Past Simple event.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_127_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello, good evening. Welcome to Dublin Airport Baggage Customer Care. How can I assist you today?',
      partnerAudioText:
        'Hello, good evening. Welcome to Dublin Airport Baggage Customer Care. How can I assist you today?',
      partnerQuestionHindi:
        'नमस्ते, शुभ संध्या। डब्लिन एयरपोर्ट बैगेज कस्टमर केयर में आपका स्वागत है। आज मैं आपकी क्या मदद कर सकती हूँ?',
      expectedFunction: 'Report Missing Suitcase & Explain Disruption (Past Continuous + Past Simple)',
      contextGoal:
        'State politely that your suitcase hasn’t appeared on Carousel 3 from flight EI-332; explain that while you were waiting on the tarmac in Manchester, the flight was delayed by two hours, so your bag probably missed the plane.',
      targetVocabulary: ['I’m afraid my checked suitcase hasn’t arrived on carousel 3', 'flight EI-332 from Manchester', 'while we were waiting on the runway, our departure was delayed', 'think it missed the flight transfer'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Good evening. I’m afraid my checked suitcase hasn’t arrived on Carousel 3 from flight EI-332. While we were waiting on the tarmac in Manchester, our flight was delayed by two hours due to thunderstorms, so I believe my bag missed the flight.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Missing Report (suitcase / carousel 3 / EI-332 / hasn’t arrived / missing / luggage)',
          patterns: ['suitcase', 'carousel 3', 'ei-332', 'hasn’t arrived', 'has not arrived', 'missing', 'luggage', 'bag', 'carousel'],
          required: true,
        },
        {
          name: 'Disruption Narrative (while waiting / delayed / two hours / manchester / transfer)',
          patterns: ['while', 'waiting', 'delayed', 'two hours', 'manchester', 'tarmac', 'storm', 'missed', 'transfer'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'past_cont_while_missing',
          pattern: /\bwhile we waited on the runway the flight was delayed\b/i,
          errorType: 'grammar',
          message: 'Use Past Continuous after while: "While we were waiting on the tarmac...".',
          correctionPattern: 'While we were waiting on the tarmac',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_127_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly combines while and the delay?',
        options: [
          { id: 'opt_1', text: 'While we were waiting in Manchester, the flight was delayed.', isCorrect: true },
          { id: 'opt_2', text: 'While we waited in Manchester, the flight was delaying.', isCorrect: false },
          { id: 'opt_3', text: 'When we were waited, flight delayed.', isCorrect: false },
        ],
        correctAnswer: 'While we were waiting in Manchester, the flight was delayed.',
        explanation: 'Past Continuous for continuous waiting + Past Simple passive for the delay.',
      },
    },
    {
      id: 'turn_a2_127_2',
      turnIndex: 2,
      partnerPrompt:
        'I am so sorry for the inconvenience caused by the weather delay in Manchester. Let me look up your baggage tag in our global WorldTracer system. May I see your boarding pass and luggage claim receipt tag, please?',
      partnerAudioText:
        'I am so sorry for the inconvenience caused by the weather delay in Manchester. Let me look up your baggage tag in our global WorldTracer system. May I see your boarding pass and luggage claim receipt tag, please?',
      partnerQuestionHindi:
        'मैनचेस्टर में मौसम की देरी के कारण हुई असुविधा के लिए मुझे बहुत खेद है। मुझे अपने वैश्विक वर्ल्डट्रेसर सिस्टम में आपका बैगेज टैग देखने दें। क्या मैं आपका बोर्डिंग पास और सामान का दावा रसीद टैग देख सकती हूँ, कृपया?',
      expectedFunction: 'Present Boarding Pass & Luggage Tag Details',
      contextGoal:
        'Hand over your boarding pass and luggage tag sticker (tag number: EI-784029); ask Fiona if the system shows whether the suitcase is still in Manchester.',
      targetVocabulary: ['here is my boarding pass and baggage claim sticker', 'tag number is EI-784029', 'does the WorldTracer system show if it is still at Manchester Airport?', 'hope it is on the next flight'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Here is my boarding pass and my baggage claim sticker—the tag number is EI-784029. Does your system show whether the bag is still at Manchester Airport or on the next flight to Dublin?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Documentation Details (boarding pass / tag / EI-784029 / sticker / receipt)',
          patterns: ['boarding pass', 'tag', 'ei-784029', 'sticker', 'receipt', 'here is', 'claim'],
          required: true,
        },
        {
          name: 'System Inquiry (system / manchester / next flight / located / track)',
          patterns: ['system', 'worldtracer', 'manchester', 'next flight', 'track', 'locate', 'show'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_127_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Here is my luggage claim ___ (tag / mark) for flight EI-332."',
        options: [
          { id: 'opt_1', text: 'tag', isCorrect: true },
          { id: 'opt_2', text: 'mark', isCorrect: false },
          { id: 'opt_3', text: 'sign', isCorrect: false },
        ],
        correctAnswer: 'tag',
        explanation: 'The standard term for baggage receipts is luggage tag / claim tag.',
      },
    },
    {
      id: 'turn_a2_127_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes! The system confirms your bag was scanned at Manchester terminal and is scheduled on flight EI-336, landing in Dublin at 10:45 PM tonight. Could you describe the size, color, brand, and any distinctive markings on your suitcase for the PIR report?',
      partnerAudioText:
        'Yes! The system confirms your bag was scanned at Manchester terminal and is scheduled on flight EI-336, landing in Dublin at 10:45 PM tonight. Could you describe the size, color, brand, and any distinctive markings on your suitcase for the PIR report?',
      partnerQuestionHindi:
        'हाँ! सिस्टम पुष्टि करता है कि आपके बैग को मैनचेस्टर टर्मिनल पर स्कैन किया गया था और यह फ्लाइट EI-336 में निर्धारित है, जो आज रात 10:45 बजे डब्लिन में उतरेगी। क्या आप पीआईआर रिपोर्ट के लिए अपने सूटकेस के आकार, रंग, ब्रांड और किसी भी विशिष्ट निशान का वर्णन कर सकते हैं?',
      expectedFunction: 'Describe Suitcase Features in Detail & Provide Hotel Address',
      contextGoal:
        'Describe your suitcase: medium navy-blue hard-shell Samsonite case with four spinner wheels and a bright yellow ribbon tied to the top handle; provide your Dublin hotel address (The Grafton Hotel, Stephen’s Green).',
      targetVocabulary: ['medium navy-blue hard-shell Samsonite suitcase', 'four spinner wheels', 'bright yellow ribbon tied to top handle', 'delivering to The Grafton Hotel on Stephen’s Green'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'It is a medium navy-blue hard-shell Samsonite suitcase with four spinner wheels. It has a bright yellow ribbon tied to the top handle. Could you please deliver it directly to The Grafton Hotel on Stephen’s Green in Dublin city center?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Luggage Description (navy-blue / hard-shell / samsonite / four wheels / yellow ribbon / medium)',
          patterns: ['navy', 'blue', 'hard-shell', 'samsonite', 'wheels', 'yellow ribbon', 'medium', 'suitcase', 'handle'],
          required: true,
        },
        {
          name: 'Delivery Destination (hotel / grafton / stephen’s green / city center / address)',
          patterns: ['grafton hotel', 'hotel', 'stephen’s green', 'city center', 'deliver', 'address', 'dublin'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_127_3',
        type: 'multiple_choice',
        prompt: 'Which adjective order is most natural when describing a bag?',
        options: [
          { id: 'opt_1', text: 'a medium navy-blue hard-shell suitcase', isCorrect: true },
          { id: 'opt_2', text: 'a hard-shell navy-blue medium suitcase', isCorrect: false },
          { id: 'opt_3', text: 'a suitcase navy-blue medium hard-shell', isCorrect: false },
        ],
        correctAnswer: 'a medium navy-blue hard-shell suitcase',
        explanation: 'Natural adjective order: Size (medium) -> Color (navy-blue) -> Material/Type (hard-shell).',
      },
    },
    {
      id: 'turn_a2_127_4',
      turnIndex: 4,
      partnerPrompt:
        'All entered! Here is your Property Irregularity Report with reference DUB-EI-99120. Our courier will deliver your suitcase to the Grafton Hotel reception tomorrow morning by 9:00 AM. Here is an emergency overnight toiletries kit with our compliments. Is there anything else I can do for you?',
      partnerAudioText:
        'All entered! Here is your Property Irregularity Report with reference DUB-EI-99120. Our courier will deliver your suitcase to the Grafton Hotel reception tomorrow morning by 9:00 AM. Here is an emergency overnight toiletries kit with our compliments. Is there anything else I can do for you?',
      partnerQuestionHindi:
        'सब दर्ज हो गया! संदर्भ DUB-EI-99120 के साथ आपकी प्रॉपर्टी अनियमितता रिपोर्ट यहाँ है। हमारा कूरियर कल सुबह 9:00 बजे तक ग्राफ्टन होटल के रिसेप्शन पर आपका सूटकेस पहुंचा देगा। यहाँ हमारी ओर से एक आपातकालीन रात का प्रसाधन किट है। क्या मैं आपके लिए कुछ और कर सकती हूँ?',
      expectedFunction: 'Express Gratitude, Accept PIR & Kit, and Close Conversation',
      contextGoal:
        'Thank Fiona for her helpful and efficient support; take the PIR reference and overnight kit; confirm you will check with hotel reception tomorrow morning at 9:00 AM.',
      targetVocabulary: ['thank you so much Fiona for your efficient help', 'will keep reference DUB-EI-99120 safe', 'appreciate the overnight toiletries kit', 'have a wonderful evening'],
      suggestedResponses: [
        {
          label: 'Semi-Independent Scaffold',
          text: 'Thank you so much Fiona for your efficient and kind help! I will keep this PIR reference safe and check with the Grafton Hotel reception tomorrow at 9:00 AM. I really appreciate the overnight kit. Have a good evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Closure (thank you / fiona / reference / grafton hotel / 9:00 AM / toiletries / good evening)',
          patterns: ['thank you', 'thanks', 'fiona', 'reference', 'grafton', 'hotel', '9:00', '9 am', 'toiletries', 'overnight kit', 'good evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_127_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I really appreciate the ___ (overnight / nights) toiletries kit."',
        options: [
          { id: 'opt_1', text: 'overnight', isCorrect: true },
          { id: 'opt_2', text: 'nights', isCorrect: false },
          { id: 'opt_3', text: 'overnighted', isCorrect: false },
        ],
        correctAnswer: 'overnight',
        explanation: '"Overnight kit" is the standard compound noun phrase.',
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
