import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_109: ConversationDefinition = {
  id: 'conv_a2_109',
  title: 'Travel Experiences & Unforeseen Journey Problems (when / while, baggage desk)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_109'],
  estimatedMinutes: 5,
  scenario:
    'You have just arrived at Manchester Airport following a connecting flight from Frankfurt. Your flight was delayed due to heavy weather, and your checked suitcase has not appeared on baggage carousel 4. You are at the Baggage Services assistance desk speaking with agent Bradley Cooper to file a missing baggage claim and arrange hotel delivery.',
  communicativeGoals: [
    'Narrate travel incidents chronologically using Past Continuous (background) and Past Simple (interruption) with "when" and "while"',
    'Report missing luggage at an airline help desk with specific flight details and baggage tags',
    'Describe a suitcase in detail (size, color, material, distinctive tags or stickers)',
    'Provide hotel contact details and agree on baggage delivery procedures',
  ],
  canDoStatements: [
    'Can describe a sequence of travel events and unexpected delays (CEFR A2)',
    'Can combine Past Simple and Past Continuous with "when" and "while"',
    'Can report lost property or missing luggage at an airport customer service desk',
  ],
  characters: [
    {
      id: 'char_bradley_cooper',
      name: 'Bradley Cooper',
      role: 'Airport Baggage Services Representative',
      avatar: '🧳',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'delayed',
        ipa: '/dɪˈleɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Happening later than planned or expected',
        exampleSentence: 'Our flight from Frankfurt was delayed by two hours because of severe storms.',
        translations: { hi: 'देरी से / विलंबित' },
      },
      {
        word: 'carousel',
        ipa: '/ˌkærəˈsɛl/',
        partOfSpeech: 'noun',
        meaning: 'A revolving conveyor belt from which arriving passengers collect their luggage',
        exampleSentence: 'I waited by carousel 4 until all the bags stopped coming.',
        translations: { hi: 'कन्वेयर बेल्ट / कैरोसेल' },
      },
      {
        word: 'baggage tag',
        ipa: '/ˈbæɡɪdʒ tæɡ/',
        partOfSpeech: 'noun',
        meaning: 'A small printed receipt showing the flight and tracking code for checked luggage',
        exampleSentence: 'Here is my boarding pass with the baggage tag receipt attached.',
        translations: { hi: 'सामान का टैग / रसीद' },
      },
      {
        word: 'suitcase',
        ipa: '/ˈsjuːtkeɪs/',
        partOfSpeech: 'noun',
        meaning: 'A rectangular case with a handle for carrying clothes and belongings when traveling',
        exampleSentence: 'It is a large hard-shell gray suitcase with four spinner wheels.',
        translations: { hi: 'सूटकेस / यात्रा पेटी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'While we were waiting to board, the gate changed.',
        functionCategory: 'Narrating Travel (while + continuous)',
        exampleSentence: 'While we were waiting in Frankfurt, the airline announced a delay.',
      },
      {
        phrase: 'My suitcase didn’t arrive on the carousel.',
        functionCategory: 'Reporting Missing Luggage',
        exampleSentence: 'My checked bag didn’t show up on belt 4.',
      },
      {
        phrase: 'It is a medium black hard-shell suitcase with a red ribbon.',
        functionCategory: 'Describing Luggage Features',
        exampleSentence: 'It is a dark gray case with a bright yellow luggage tag.',
      },
      {
        phrase: 'Could you deliver it to my hotel when it arrives?',
        functionCategory: 'Requesting Delivery',
        exampleSentence: 'Could you please deliver it to the Grand Central Hotel in Manchester?',
      },
    ],
    grammar: {
      title: 'Past Continuous & Past Simple with When and While',
      conceptExplanation:
        '1. Background action in progress (Past Continuous): "While we were flying over the channel..."\n2. Interrupting event (Past Simple): "...the pilot announced a diversion."\n3. Rule of thumb: Use "while" with past continuous (while + was/were + -ing), and "when" before past simple.\n4. Airport reporting: "My bag didn\'t arrive on carousel 4."',
      patternFormula: 'While + [Past Continuous], [Past Simple] | [Past Continuous] + when + [Past Simple]',
      contrastExamples: [
        {
          incorrect: 'While I waited, the flight was departing.',
          correct: 'While I was waiting, the flight departed. / When I arrived, the carousel stopped.',
          explanation: 'Use continuous for longer background action and simple for the finished single event.',
        },
        {
          incorrect: 'My luggage is lose.',
          correct: 'My luggage is missing. / My suitcase didn\'t arrive.',
          explanation: '"Missing" or "lost" functions as an adjective: "My suitcase is missing".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Bradley Cooper',
        text: 'Good afternoon, British Airways baggage services. How can I help you today?',
        translation: 'शुभ दोपहर, ब्रिटिश एयरवेज बैगेज सर्विसेज। आज मैं आपकी क्या मदद कर सकता हूँ?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon. I was on flight BA 824 from Frankfurt. While we were making our connection, our flight was delayed, and my checked suitcase has not arrived on carousel 4.',
        translation: 'शुभ दोपहर। मैं फ्रैंकफर्ट से फ्लाइट BA 824 में था। जब हम कनेक्शन बना रहे थे, हमारी फ्लाइट में देरी हुई, और मेरा सूटकेस कैरोसेल 4 पर नहीं आया है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_109_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "While we ___ (wait) at Frankfurt airport, the airline changed our gate."',
      options: [
        { id: 'opt_1', text: 'were waiting', isCorrect: true },
        { id: 'opt_2', text: 'was wait', isCorrect: false },
        { id: 'opt_3', text: 'waited', isCorrect: false },
      ],
      correctAnswer: 'were waiting',
      explanation: 'Use past continuous with "while we were waiting" for an ongoing background state.',
    },
    {
      id: 'cp_a2_109_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly combines past continuous and past simple?',
      options: [
        { id: 'opt_1', text: 'I was standing by carousel 4 when the belt stopped moving.', isCorrect: true },
        { id: 'opt_2', text: 'I stood when belt was stop.', isCorrect: false },
        { id: 'opt_3', text: 'I was stand when belt stopped.', isCorrect: false },
      ],
      correctAnswer: 'I was standing by carousel 4 when the belt stopped moving.',
      explanation: 'Background action: "was standing", interrupting event: "belt stopped".',
    },
    {
      id: 'cp_a2_109_3',
      type: 'multiple_choice',
      prompt: 'What document contains the baggage barcode receipt needed to trace missing luggage?',
      options: [
        { id: 'opt_1', text: 'The baggage claim tag receipt attached to the boarding pass.', isCorrect: true },
        { id: 'opt_2', text: 'A restaurant menu receipt.', isCorrect: false },
        { id: 'opt_3', text: 'A credit card invoice.', isCorrect: false },
      ],
      correctAnswer: 'The baggage claim tag receipt attached to the boarding pass.',
      explanation: 'The baggage tag receipt has the bag identifier number.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_109_1',
      scenarioContext: 'Explain a travel disruption.',
      prompt: 'Build: "While we were transferring flights our luggage was delayed."',
      targetStructure: 'While + subject + were + verb-ing + subject + was delayed',
      wordBank: ['While', 'we', 'were', 'transferring', 'flights', 'our', 'luggage', 'was', 'delayed', 'is', 'when'],
      acceptableSolutions: [
        'While we were transferring flights our luggage was delayed',
        'While we were transferring flights our luggage was delayed.',
      ],
      explanation: 'Past continuous background with past simple passive result.',
    },
    {
      id: 'sc_a2_109_2',
      scenarioContext: 'Describe your missing luggage appearance.',
      prompt: 'Build: "It is a large dark gray suitcase with four wheels."',
      targetStructure: 'It is a + size + color + noun + with + features',
      wordBank: ['It', 'is', 'a', 'large', 'dark', 'gray', 'suitcase', 'with', 'four', 'wheels', 'has'],
      acceptableSolutions: [
        'It is a large dark gray suitcase with four wheels',
        'It is a large dark gray suitcase with four wheels.',
      ],
      explanation: 'Clear descriptive noun phrase for baggage identification.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_109_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there. Welcome to the Baggage Services desk. Are you having trouble finding your luggage on the carousels?',
      partnerAudioText:
        'Hello there. Welcome to the Baggage Services desk. Are you having trouble finding your luggage on the carousels?',
      partnerQuestionHindi:
        'नमस्ते। बैगेज सर्विसेज डेस्क पर आपका स्वागत है। क्या आपको कैरोसेल पर अपना सामान ढूंढने में परेशानी हो रही है?',
      expectedFunction: 'Report Missing Baggage & State Flight Details (when/while)',
      contextGoal:
        'State that you flew in on flight BA 824 from Frankfurt; explain that while you were transferring, there was a tight 30-minute connection and your suitcase did not arrive on carousel 4.',
      targetVocabulary: ['flight BA 824 from Frankfurt', 'tight connection while transferring', 'suitcase did not arrive on carousel 4', 'baggage tag receipt'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hello. Yes, I just arrived on flight BA 824 from Frankfurt. While we were transferring in Frankfurt, the gate changed quickly, and now my checked suitcase has not appeared on carousel 4.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Flight / Frankfurt / Carousel 4',
          patterns: ['ba 824', 'frankfurt', 'flight', 'carousel', 'belt', 'arrived', 'connection'],
          required: true,
        },
        {
          name: 'Problem Statement (suitcase / bag missing / delayed)',
          patterns: ['suitcase', 'bag', 'luggage', 'missing', 'not arrive', 'appear', 'delayed', 'while'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'while_past_simple_error',
          pattern: /\bwhile we transferred\b/i,
          errorType: 'grammar',
          message: 'Use past continuous with "while": "while we were transferring".',
          correctionPattern: 'while we were transferring',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_109_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "while"?',
        options: [
          { id: 'opt_1', text: 'While we were transferring planes, our luggage was left behind.', isCorrect: true },
          { id: 'opt_2', text: 'While we transferred planes, our luggage left.', isCorrect: false },
          { id: 'opt_3', text: 'When we are transferring, luggage lost.', isCorrect: false },
        ],
        correctAnswer: 'While we were transferring planes, our luggage was left behind.',
        explanation: '"While" introduces an ongoing continuous background clause.',
      },
    },
    {
      id: 'turn_a2_109_2',
      turnIndex: 2,
      partnerPrompt:
        'I see. Because of the stormy weather in Germany, several tight transfer bags missed the flight. Could you show me your baggage claim sticker and describe what your suitcase looks like in detail?',
      partnerAudioText:
        'I see. Because of the stormy weather in Germany, several tight transfer bags missed the flight. Could you show me your baggage claim sticker and describe what your suitcase looks like in detail?',
      partnerQuestionHindi:
        'मैं समझ गया। जर्मनी में तूफानी मौसम के कारण, कई कनेक्टिंग बैग फ्लाइट में नहीं आ सके। क्या आप मुझे अपना बैगेज क्लेम स्टिकर दिखा सकते हैं और बता सकते हैं कि आपका सूटकेस विस्तार से कैसा दिखता है?',
      expectedFunction: 'Hand Over Baggage Tag & Describe Suitcase Appearance',
      contextGoal:
        'Hand over tag (LH 984210); describe suitcase: large hard-shell dark gray case with four spinner wheels, a black handle, and a bright red ribbon tied to the top.',
      targetVocabulary: ['baggage tag sticker LH 984210', 'large hard-shell dark gray suitcase', 'four spinner wheels', 'bright red ribbon tied to the top handle'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Here is my baggage tag sticker, number LH 984210. The suitcase is a large, dark gray hard-shell case with four spinner wheels and a bright red ribbon tied to the top handle.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Tag / Number Receipt',
          patterns: ['tag', 'sticker', 'number', 'lh', 'receipt', 'here is'],
          required: true,
        },
        {
          name: 'Description (gray / hard-shell / red ribbon / wheels)',
          patterns: ['gray', 'grey', 'hard-shell', 'wheels', 'red ribbon', 'ribbon', 'handle', 'large', 'dark'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_109_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "It is a large dark gray suitcase ___ a red ribbon on the handle."',
        options: [
          { id: 'opt_1', text: 'with', isCorrect: true },
          { id: 'opt_2', text: 'has', isCorrect: false },
          { id: 'opt_3', text: 'by', isCorrect: false },
        ],
        correctAnswer: 'with',
        explanation: 'Use "with + noun phrase" to describe distinguishing features.',
      },
    },
    {
      id: 'turn_a2_109_3',
      turnIndex: 3,
      partnerPrompt:
        'Thank you. I have scanned the tag in our system: your bag was located at Frankfurt gate B22 and is booked on the next flight, arriving at Manchester tonight at 9:15 PM. Where are you staying so our courier can deliver it directly to your door?',
      partnerAudioText:
        'Thank you. I have scanned the tag in our system: your bag was located at Frankfurt gate B22 and is booked on the next flight, arriving at Manchester tonight at 9:15 PM. Where are you staying so our courier can deliver it directly to your door?',
      partnerQuestionHindi:
        'धन्यवाद। मैंने हमारे सिस्टम में टैग को स्कैन किया है: आपका बैग फ्रैंकफर्ट गेट B22 पर पाया गया और अगली फ्लाइट में बुक है, जो आज रात 9:15 बजे मैनचेस्टर पहुंचेगी। आप कहाँ ठहर रहे हैं ताकि हमारा कूरियर इसे सीधे आपके पते पर पहुंचा सके?',
      expectedFunction: 'Provide Hotel Address & Mobile Number for Courier Delivery',
      contextGoal:
        'Provide hotel name and location: Room 314, Grand Central Hotel on Portland Street in Manchester; give your mobile number for courier SMS updates.',
      targetVocabulary: ['Grand Central Hotel on Portland Street', 'Room 314', 'mobile contact number', 'courier delivery tonight'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'That is great news! I am staying at the Grand Central Hotel on Portland Street in central Manchester, Room 314. My mobile number is 07700 900543 so the driver can call me upon arrival.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Hotel & Address',
          patterns: ['grand central hotel', 'hotel', 'portland street', 'manchester', 'room 314', 'staying'],
          required: true,
        },
        {
          name: 'Contact Number / Delivery Agreement',
          patterns: ['mobile', 'number', 'phone', 'call', 'courier', 'driver', 'tonight'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_109_3',
        type: 'multiple_choice',
        prompt: 'Which phrase is best for giving a delivery address and contact detail?',
        options: [
          { id: 'opt_1', text: 'I am staying at the Grand Central Hotel, Room 314. You can reach me at 07700 900543.', isCorrect: true },
          { id: 'opt_2', text: 'Hotel room 314 give me bag.', isCorrect: false },
          { id: 'opt_3', text: 'I am in Manchester somewhere.', isCorrect: false },
        ],
        correctAnswer: 'I am staying at the Grand Central Hotel, Room 314. You can reach me at 07700 900543.',
        explanation: 'Accurate and specific delivery detail.',
      },
    },
    {
      id: 'turn_a2_109_4',
      turnIndex: 4,
      partnerPrompt:
        'All set! Here is your Property Irregularity Report copy with tracking code MANBA4491. The courier will deliver your suitcase to the hotel reception between 10:30 PM and 11:30 PM tonight. Is there anything else you need before heading to the taxi rank?',
      partnerAudioText:
        'All set! Here is your Property Irregularity Report copy with tracking code MANBA4491. The courier will deliver your suitcase to the hotel reception between 10:30 PM and 11:30 PM tonight. Is there anything else you need before heading to the taxi rank?',
      partnerQuestionHindi:
        'सब व्यवस्थित हो गया! यहाँ ट्रैकिंग कोड MANBA4491 के साथ आपकी प्रॉपर्टी इर्रेग्युलैरिटी रिपोर्ट की प्रति है। कूरियर आज रात 10:30 से 11:30 के बीच होटल रिसेप्शन पर आपका सूटकेस पहुंचा देगा। टैक्सी स्टैंड पर जाने से पहले क्या आपको किसी और चीज़ की ज़रूरत है?',
      expectedFunction: 'Acknowledge Tracking Report, Thank Agent & Conclude Transaction',
      contextGoal:
        'Take the report copy, thank Bradley for finding the bag so quickly, and say you will inform hotel reception to expect the parcel.',
      targetVocabulary: ['thank you Bradley for your efficient help', 'keep the tracking report safe', 'inform hotel reception', 'have a good evening'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Thank you very much Bradley for tracing it so quickly! I will keep this tracking code and let the hotel reception desk know to receive the suitcase tonight. Have a good evening!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Confirmation',
          patterns: ['thank you', 'thanks', 'bradley', 'tracking code', 'report', 'reception', 'tonight', 'good evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_109_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I will let the hotel reception ___ to expect the suitcase."',
        options: [
          { id: 'opt_1', text: 'know', isCorrect: true },
          { id: 'opt_2', text: 'known', isCorrect: false },
          { id: 'opt_3', text: 'knew', isCorrect: false },
        ],
        correctAnswer: 'know',
        explanation: '"Let someone know" takes a bare infinitive.',
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
