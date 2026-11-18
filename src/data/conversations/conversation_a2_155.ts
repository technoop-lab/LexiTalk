import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_155: ConversationDefinition = {
  id: 'conv_a2_155',
  title: 'Planning Social Events, Celebrations & Organizing Activities',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_155'],
  estimatedMinutes: 5,
  scenario:
    'You are in the private dining suite at The Starlight Lounge in Bristol meeting with event coordinator Chloe Dupont. You are organizing a surprise retirement celebration for a colleague, Martin. You will discuss fixed arrangements using the Present Continuous ("We are hosting the celebration on Friday"), express intentions with "going to", and make collaborative group suggestions using "Shall we...?".',
  communicativeGoals: [
    'Coordinate social event logistics including venue, catering, and decorations',
    'Use the Present Continuous to state confirmed future arrangements ("We are gathering at 6:30 PM")',
    'Express planning intentions using "be going to" ("We are going to order a custom cake")',
    'Make collaborative suggestions using "Shall we...?" ("Shall we book the acoustic band?")',
  ],
  canDoStatements: [
    'Can coordinate an event, including date, guest list, and catering arrangements',
    'Can use the Present Continuous for confirmed future social plans',
    'Can make collaborative group suggestions using "Shall we...?"',
  ],
  characters: [
    {
      id: 'char_chloe_dupont',
      name: 'Chloe Dupont',
      role: 'Event & Venue Coordinator',
      avatar: '🎉',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'celebration',
        ipa: '/ˌselɪˈbreɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of marking one’s pleasure at an important event or occasion',
        exampleSentence: 'We are organizing a surprise retirement celebration for Martin.',
        translations: { hi: 'उत्सव / समारोह' },
      },
      {
        word: 'catering',
        ipa: '/ˈkeɪtərɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The provision of food and drink at a social event or gathering',
        exampleSentence: 'We selected vegetarian and gluten-free options for the catering.',
        translations: { hi: 'खानपान व्यवस्था / कैटरिंग' },
      },
      {
        word: 'headcount',
        ipa: '/ˈhedkaʊnt/',
        partOfSpeech: 'noun',
        meaning: 'A count of all the people present in a particular group',
        exampleSentence: 'Our final headcount is thirty-five colleagues and family members.',
        translations: { hi: 'उपस्थित लोगों की कुल संख्या' },
      },
      {
        word: 'arrange',
        ipa: '/əˈreɪndʒ/',
        partOfSpeech: 'verb',
        meaning: 'To plan, organize, or make preparations for an event',
        exampleSentence: 'I will arrange the live music and table decorations.',
        translations: { hi: 'व्यवस्था करना / प्रबंध करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'We are hosting Martin’s retirement party on Friday evening at 7:00 PM.',
        functionCategory: 'Fixed Arrangements with Present Continuous',
        exampleSentence: 'We are meeting the guests at the entrance.',
      },
      {
        phrase: 'We are going to order a two-tier cake and prepare a slide show.',
        functionCategory: 'Future Intentions with "Going to"',
        exampleSentence: 'I am going to send the invitations tonight.',
      },
      {
        phrase: 'Shall we arrange a buffet dinner or a three-course plated meal?',
        functionCategory: 'Collaborative Suggestions with "Shall we...?"',
        exampleSentence: 'Shall we book the private garden terrace?',
      },
      {
        phrase: 'What is the deadline for confirming the final guest headcount?',
        functionCategory: 'Inquiring About Booking Deadlines',
        exampleSentence: 'When do you need the final headcount?',
      },
    ],
    grammar: {
      title: 'Present Continuous for Fixed Plans & Suggestions with "Shall we...?"',
      conceptExplanation:
        '1. Present Continuous for Fixed Arrangements: Use [be + verb-ing] for events with fixed times/venues (e.g., "We are holding the party on Friday").\n2. "Be going to": Use for intentions and plans already decided (e.g., "We are going to set up photo displays").\n3. "Shall we + [Base Verb]?": Use to make polite, collaborative offers or group suggestions (e.g., "Shall we reserve the terrace?").',
      patternFormula: 'Subject + is/are [Verb-ing] + Time/Place | Shall we + [Base Verb] + Object?',
      contrastExamples: [
        {
          incorrect: 'We will host the party Friday and shall we to book the band?',
          correct: 'We are hosting the party on Friday, and shall we book the live band?',
          explanation: 'Use Present Continuous for confirmed dates and "Shall we + base verb" without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe Dupont',
        text: 'Bonjour! Welcome to The Starlight Lounge. When are you hosting the celebration, and how many guests are you expecting?',
        translation: 'नमस्ते! द स्टारलाइट लाउंज में आपका स्वागत है। आप समारोह की मेजबानी कब कर रहे हैं, और आप कितने मेहमानों की उम्मीद कर रहे हैं?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon, Chloe. We are hosting Martin’s surprise retirement party on Friday the 20th, and we are expecting thirty-five guests.',
        translation: 'शुभ दोपहर, क्लोई। हम 20 तारीख शुक्रवार को मार्टिन की सरप्राइज रिटायरमेंट पार्टी आयोजित कर रहे हैं, और हम पैंतीस मेहमानों की उम्मीद कर रहे हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_155_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "We ___ (are hosting / will host / hosted) the party this Friday at 7:00 PM; all tickets are booked."',
      options: [
        { id: 'opt_1', text: 'are hosting', isCorrect: true },
        { id: 'opt_2', text: 'will host', isCorrect: false },
        { id: 'opt_3', text: 'hosted', isCorrect: false },
      ],
      correctAnswer: 'are hosting',
      explanation: 'Use the Present Continuous for fixed, confirmed future arrangements.',
    },
    {
      id: 'cp_a2_155_2',
      type: 'multiple_choice',
      prompt: 'Which suggestion formula with "Shall we" is grammatically correct?',
      options: [
        { id: 'opt_1', text: 'Shall we arrange a hot buffet for thirty-five guests?', isCorrect: true },
        { id: 'opt_2', text: 'Shall we to arrange a hot buffet for guests?', isCorrect: false },
        { id: 'opt_3', text: 'Shall we arranging a hot buffet?', isCorrect: false },
      ],
      correctAnswer: 'Shall we arrange a hot buffet for thirty-five guests?',
      explanation: '"Shall we" is followed directly by the base verb ("arrange").',
    },
    {
      id: 'cp_a2_155_3',
      type: 'multiple_choice',
      prompt: 'How do you ask about confirming the final guest headcount?',
      options: [
        { id: 'opt_1', text: 'What is the deadline for submitting the final headcount?', isCorrect: true },
        { id: 'opt_2', text: 'How many humans coming tell me now?', isCorrect: false },
        { id: 'opt_3', text: 'Headcount deadline when you want?', isCorrect: false },
      ],
      correctAnswer: 'What is the deadline for submitting the final headcount?',
      explanation: 'Clear and polite question about logistical deadlines.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_155_1',
      scenarioContext: 'State a confirmed party date and time.',
      prompt: 'Build: "We are holding the party on Friday at seven."',
      targetStructure: 'We are holding + the party + on Friday at seven',
      wordBank: ['We', 'are', 'holding', 'the', 'party', 'on', 'Friday', 'at', 'seven', 'will'],
      acceptableSolutions: [
        'We are holding the party on Friday at seven',
        'We are holding the party on Friday at seven.',
      ],
      explanation: 'Present Continuous for confirmed future events.',
    },
    {
      id: 'sc_a2_155_2',
      scenarioContext: 'Suggest a venue choice collaboratively.',
      prompt: 'Build: "Shall we book the private garden terrace?"',
      targetStructure: 'Shall we book + the private garden terrace',
      wordBank: ['Shall', 'we', 'book', 'the', 'private', 'garden', 'terrace', 'booking', 'to'],
      acceptableSolutions: [
        'Shall we book the private garden terrace',
        'Shall we book the private garden terrace?',
      ],
      explanation: '"Shall we + base verb".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_155_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Welcome to The Starlight Lounge. I’m Chloe. To start planning your event, what celebration are you organizing, when are you holding it, and how many guests are you expecting?',
      partnerAudioText:
        'Hello! Welcome to The Starlight Lounge. I’m Chloe. To start planning your event, what celebration are you organizing, when are you holding it, and how many guests are you expecting?',
      partnerQuestionHindi:
        'नमस्ते! द स्टारलाइट लाउंज में आपका स्वागत है। मैं क्लोई हूँ। अपने कार्यक्रम की योजना बनाना शुरू करने के लिए, आप किस उत्सव का आयोजन कर रहे हैं, आप इसे कब आयोजित कर रहे हैं, और आप कितने मेहमानों की उम्मीद कर रहे हैं?',
      expectedFunction: 'State Event, Fixed Date & Headcount with Present Continuous (We are hosting a surprise retirement party for Martin on Friday the 20th with 35 guests)',
      contextGoal:
        'Explain that you are hosting Martin\'s retirement party on Friday the 20th at 7:00 PM for 35 guests.',
      targetVocabulary: ['hosting Martin\'s surprise retirement party', 'on Friday the 20th at 7:00 PM', 'expecting 35 guests', 'headcount'],
      suggestedResponses: [
        {
          label: 'Fixed Plans with Present Continuous',
          text: 'Hello Chloe! We are hosting a surprise retirement party for our colleague Martin on Friday the 20th at 7:00 PM, and we are expecting approximately thirty-five guests.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Event Details',
          text: 'We are holding a retirement celebration on Friday evening for thirty-five people.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Event Type & Name (retirement / surprise / party / celebration / martin / event)',
          patterns: ['retirement', 'surprise', 'party', 'celebration', 'martin', 'event', 'farewell'],
          required: true,
        },
        {
          name: 'Fixed Timing & Headcount (friday / 20th / 7 / 35 / thirty-five / guests / people / are hosting / are holding)',
          patterns: ['friday', '20th', '7', '35', 'thirty-five', 'guests', 'people', 'are hosting', 'are holding'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_future_will',
          pattern: 'we will party Friday|we will having party',
          errorType: 'grammar',
          message: 'Use the Present Continuous ("we are hosting", "we are holding") for confirmed social arrangements.',
          correctionPattern: 'We are hosting the celebration on Friday',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_155_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (are celebrating / will celebrating) Martin’s retirement on Friday."',
        options: [
          { id: 'opt_1', text: 'are celebrating', isCorrect: true },
          { id: 'opt_2', text: 'will celebrating', isCorrect: false },
          { id: 'opt_3', text: 'celebrate', isCorrect: false },
        ],
        correctAnswer: 'are celebrating',
        explanation: 'Use Present Continuous for fixed calendar events.',
      },
    },
    {
      id: 'turn_a2_155_2',
      turnIndex: 2,
      partnerPrompt:
        'Thirty-five guests on Friday the 20th fits our Garden Terrace and Lounge perfectly! Now, what are you planning for food and refreshments? Do you prefer a sit-down dinner or a buffet?',
      partnerAudioText:
        'Thirty-five guests on Friday the 20th fits our Garden Terrace and Lounge perfectly! Now, what are you planning for food and refreshments? Do you prefer a sit-down dinner or a buffet?',
      partnerQuestionHindi:
        '20 तारीख शुक्रवार को पैंतीस मेहमान हमारे गार्डन टैरेस और लाउंज में पूरी तरह से फिट होते हैं! अब, आप भोजन और जलपान के लिए क्या योजना बना रहे हैं? क्या आप सिट-डाउन डिनर या बुफे पसंद करते हैं?',
      expectedFunction: 'Suggest Catering Format with "Shall we" & State Intentions with "Going to" (Shall we arrange a hot buffet? / We are going to provide vegetarian options)',
      contextGoal:
        'Suggest a hot finger-food buffet using "Shall we...?" and state that you are going to include vegetarian and gluten-free choices.',
      targetVocabulary: ['Shall we arrange a gourmet buffet?', 'We are going to include vegetarian options', 'finger food and appetizers', 'custom cake'],
      suggestedResponses: [
        {
          label: 'Suggestion with "Shall we" and "going to"',
          text: 'Shall we arrange a hot gourmet buffet? We are also going to provide vegetarian and gluten-free options so everyone can enjoy the meal.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Catering Choice',
          text: 'Shall we do a buffet with finger foods? We are going to bring our own retirement cake as well.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Suggestion Formula (shall we / why don\'t we / let\'s / how about / prefer / choose)',
          patterns: ['shall we', 'why don\'t we', 'let\'s', 'how about', 'prefer', 'choose', 'would like'],
          required: true,
        },
        {
          name: 'Catering Choices (buffet / finger food / vegetarian / gluten-free / refreshments / appetizers / cake / food)',
          patterns: ['buffet', 'finger food', 'vegetarian', 'gluten-free', 'refreshments', 'appetizers', 'cake', 'food', 'dishes'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_155_2',
        type: 'multiple_choice',
        prompt: 'Which suggestion sentence uses "Shall we" correctly?',
        options: [
          { id: 'opt_1', text: 'Shall we arrange a buffet dinner for thirty-five guests?', isCorrect: true },
          { id: 'opt_2', text: 'Shall we to arrange a buffet dinner for thirty-five guests?', isCorrect: false },
          { id: 'opt_3', text: 'Shall we arranging a buffet dinner?', isCorrect: false },
        ],
        correctAnswer: 'Shall we arrange a buffet dinner for thirty-five guests?',
        explanation: '"Shall we" takes a base verb ("arrange").',
      },
    },
    {
      id: 'turn_a2_155_3',
      turnIndex: 3,
      partnerPrompt:
        'A hot buffet with vegetarian options and an outside cake is no problem at all! For entertainment, we have a sound system and microphone for speeches. What activities are you going to organize, and do you have any questions about deadlines?',
      partnerAudioText:
        'A hot buffet with vegetarian options and an outside cake is no problem at all! For entertainment, we have a sound system and microphone for speeches. What activities are you going to organize, and do you have any questions about deadlines?',
      partnerQuestionHindi:
        'शाकाहारी विकल्पों और बाहर से केक के साथ एक हॉट बुफे में कोई समस्या नहीं है! मनोरंजन के लिए, हमारे पास भाषणों के लिए एक साउंड सिस्टम और माइक्रोफ़ोन है। आप किन गतिविधियों का आयोजन करने जा रहे हैं, और क्या आपके पास समय सीमा के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'State Activities with "Going to" & Inquire Headcount Deadline (We are going to play a tribute video and give speeches / When do you need the final headcount?)',
      contextGoal:
        'State that you are going to show a slideshow and make speeches, and ask Chloe when she needs the final headcount confirmed.',
      targetVocabulary: ['We are going to show a photo slideshow', 'deliver tribute speeches', 'What is the deadline for the final headcount?', 'confirm numbers'],
      suggestedResponses: [
        {
          label: 'Activities & Deadline Inquiry',
          text: 'We are going to show a short tribute slideshow and deliver farewell speeches. Could you tell me what the deadline is for confirming our final headcount?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Activities & Question',
          text: 'We are going to give speeches and play music. What is the deadline to confirm final numbers and catering?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Activities (going to / speeches / slideshow / video / music / tribute / photos / presentation)',
          patterns: ['going to', 'speeches', 'slideshow', 'video', 'music', 'tribute', 'photos', 'presentation', 'games'],
          required: true,
        },
        {
          name: 'Deadline Question (deadline / when / headcount / numbers / confirm / finalize / ?)',
          patterns: ['deadline', 'when', 'headcount', 'numbers', 'confirm', 'finalize', 'time', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_155_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me when the deadline ___ (is / does)?"',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'does', isCorrect: false },
          { id: 'opt_3', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Indirect question word order: "when the deadline is".',
      },
    },
    {
      id: 'turn_a2_155_4',
      turnIndex: 4,
      partnerPrompt:
        'We need the final headcount and diet requirements by Tuesday the 17th. The Garden Terrace is reserved for you from 6:30 PM until 11:00 PM. Could you summarize our event plan?',
      partnerAudioText:
        'We need the final headcount and diet requirements by Tuesday the 17th. The Garden Terrace is reserved for you from 6:30 PM until 11:00 PM. Could you summarize our event plan?',
      partnerQuestionHindi:
        'हमें 17 तारीख मंगलवार तक अंतिम संख्या और आहार संबंधी आवश्यकताओं की आवश्यकता है। गार्डन टैरेस आपके लिए शाम 6:30 बजे से रात 11:00 बजे तक आरक्षित है। क्या आप हमारे कार्यक्रम योजना का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Event Plan & Deadlines (To summarize, Martin\'s surprise retirement party is on Friday 20th at 7:00 PM, buffet catering, speeches, headcount by Tuesday 17th)',
      contextGoal:
        'Summarize the key arrangements: retirement party on Friday 20th, Garden Terrace, hot buffet, speeches/slideshow, final headcount submitted by Tuesday 17th, and thank Chloe.',
      targetVocabulary: ['To summarize our event plan', 'Friday the 20th from 6:30 PM in the Garden Terrace', 'hot buffet and tribute speeches', 'confirm headcount by Tuesday 17th', 'thank you Chloe'],
      suggestedResponses: [
        {
          label: 'Comprehensive Event Summary',
          text: 'To summarize our plan: we are hosting Martin’s retirement celebration in the Garden Terrace on Friday the 20th at 7:00 PM with a hot buffet and speeches, and I will confirm our final headcount by Tuesday the 17th. Thank you, Chloe!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Event Summary',
          text: 'In summary: Friday 20th at 7 PM, Garden Terrace, buffet catering, and I will submit final numbers by Tuesday the 17th. Thanks for your help!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / agreed / so / all set)',
          patterns: ['to summarize', 'in summary', 'summary', 'agreed', 'so', 'all set'],
          required: true,
        },
        {
          name: 'Key Details (friday 20th / garden terrace / buffet / tuesday 17th / headcount / thank you)',
          patterns: ['friday', '20th', 'garden terrace', 'buffet', 'tuesday', '17th', 'headcount', 'thank you', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_155_4',
        type: 'multiple_choice',
        prompt: 'Which sentence provides a complete, polite summary of the event booking?',
        options: [
          { id: 'opt_1', text: 'To summarize, the party is on Friday the 20th, and I will send the final headcount by Tuesday.', isCorrect: true },
          { id: 'opt_2', text: 'I leave now see you Friday maybe.', isCorrect: false },
          { id: 'opt_3', text: 'Party is done do the food.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, the party is on Friday the 20th, and I will send the final headcount by Tuesday.',
        explanation: 'Polite and clear summary of event commitments.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
