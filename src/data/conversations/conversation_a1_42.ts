import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_42: ConversationDefinition = {
  id: 'conv_a1_42',
  title: 'Expressing Obligations, Needs & Rules (Must, Have to, Need to)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_42'],
  estimatedMinutes: 5,
  scenario:
    'You are starting your first shift as a volunteer at the international tech summit. Volunteer coordinator Ryan explains the venue rules, safety obligations, and dress codes using "must", "have to", and "need to".',
  communicativeGoals: [
    'Express strong rules and requirements using "must" and "must not" (You must wear your badge at all times)',
    'Express daily obligations and responsibilities using "have to / has to" (I have to register guests at desk A)',
    'Express personal or situational needs using "need to" (We need to set up the audio equipment before 8 AM)',
    'Ask about requirements and guidelines ("Do I have to wear a suit?", "What time do we need to arrive?")',
  ],
  canDoStatements: [
    'Can understand and express rules, obligations, and necessities (CEFR A1.2)',
    'Can differentiate between "must", "have to", and "need to" in practical work/event contexts',
    'Can ask questions about requirements, schedules, and dress codes',
  ],
  characters: [
    {
      id: 'char_ryan',
      name: 'Ryan',
      role: 'Event Coordinator',
      avatar: '📋',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'badge',
        ipa: '/bædʒ/',
        partOfSpeech: 'noun',
        meaning: 'A small piece of plastic or metal worn to show a person’s identity or role',
        exampleSentence: 'You must wear your security badge at all times in the building.',
        translations: { hi: 'बैज / पहचान पत्र' },
      },
      {
        word: 'obligation',
        ipa: '/ˌɒblɪˈɡeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An act or course of action to which a person is morally or legally bound; a duty',
        exampleSentence: 'Volunteers have an obligation to arrive on time.',
        translations: { hi: 'कर्तव्य / अनिवार्यता' },
      },
      {
        word: 'register',
        ipa: '/ˈrɛdʒɪstər/',
        partOfSpeech: 'verb',
        meaning: 'Enter or record on an official list or directory',
        exampleSentence: 'We have to register all participants before 9:00 AM.',
        translations: { hi: 'पंजीकरण करना' },
      },
      {
        word: 'guideline',
        ipa: '/ˈɡaɪdˌlaɪn/',
        partOfSpeech: 'noun',
        meaning: 'A general rule, principle, or piece of advice',
        exampleSentence: 'Please follow the event safety guidelines carefully.',
        translations: { hi: 'दिशा-निर्देश / नियम' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'You must wear your badge at all times.',
        functionCategory: 'Strict Rule',
        exampleSentence: 'You must wear your name badge in all summit halls.',
      },
      {
        phrase: 'Do we have to...?',
        functionCategory: 'Inquiring About Obligations',
        exampleSentence: 'Do we have to arrive 30 minutes before the keynote?',
      },
      {
        phrase: 'I have to finish...',
        functionCategory: 'Personal Duty',
        exampleSentence: 'I have to check the attendee badges at door B.',
      },
      {
        phrase: 'We need to set up...',
        functionCategory: 'Practical Necessity',
        exampleSentence: 'We need to set up the microphone on stage.',
      },
    ],
    grammar: {
      title: 'Modal Verbs of Obligation & Necessity: Must + Verb, Have to + Verb, Need to + Verb',
      conceptExplanation:
        'Use "must + base verb" for official rules and strong commands (You must wear a badge). Use "have to + base verb" for general obligations from external circumstances (I have to work at 8 AM). Use "need to + base verb" for practical requirements (We need to charge the radios). In questions, use "Do I have to...?" or "Do we need to...?".',
      patternFormula: 'Subject + must / have to / need to + [Base Verb] | Do + Subject + have to + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'You must to wear your badge.',
          correct: 'You must wear your badge.',
          explanation: 'Never put "to" after the modal verb "must": "must wear", not "must to wear".',
        },
        {
          incorrect: 'He have to check the bags.',
          correct: 'He has to check the bags.',
          explanation: 'Use "has to" with third-person singular subjects (he, she, it).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Ryan',
        text: 'Welcome to the Global Tech Summit volunteer team! First, safety rule number one: you must wear your badge around your neck at all times.',
        translation: 'ग्लोबल टेक समिट स्वयंसेवक टीम में आपका स्वागत है! सबसे पहले, सुरक्षा नियम नंबर एक: आपको हर समय अपने गले में अपना बैज पहनना होगा।',
      },
      {
        speaker: 'You',
        text: 'Understood! Do we have to check tickets at the main entrance, or do we have to guide speakers to the auditorium?',
        translation: 'समझ गया! क्या हमें मुख्य प्रवेश द्वार पर टिकट चेक करने हैं, या हमें वक्ताओं को सभागार तक ले जाना है?',
      },
      {
        speaker: 'Ryan',
        text: 'Your team has to welcome speakers in the VIP lounge. We also need to distribute schedule booklets before nine.',
        translation: 'आपकी टीम को वीआईपी लाउंज में वक्ताओं का स्वागत करना है। हमें नौ बजे से पहले कार्यक्रम पुस्तिकाएं भी वितरित करनी होंगी।',
      },
      {
        speaker: 'You',
        text: 'Got it. I will head to the VIP lounge now. What time do we have to report back for lunch?',
        translation: 'समझ गया। मैं अभी वीआईपी लाउंज की ओर जा रहा हूँ। दोपहर के भोजन के लिए हमें किस समय वापस रिपोर्ट करनी होगी?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_42_1',
      type: 'fill_blank',
      prompt: 'Complete the rule: "All attendees ___ wear a name tag inside the conference hall."',
      options: [
        { id: 'opt_1', text: 'must', isCorrect: true },
        { id: 'opt_2', text: 'must to', isCorrect: false },
        { id: 'opt_3', text: 'are must', isCorrect: false },
      ],
      correctAnswer: 'must',
      explanation: 'Modal "must" is followed directly by the base verb "wear" without "to".',
    },
    {
      id: 'cp_a1_42_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about a work obligation?',
      options: [
        { id: 'opt_1', text: 'Do I have to wear a formal uniform today?', isCorrect: true },
        { id: 'opt_2', text: 'Must I to wear a formal uniform today?', isCorrect: false },
        { id: 'opt_3', text: 'Have I wear a formal uniform today?', isCorrect: false },
      ],
      correctAnswer: 'Do I have to wear a formal uniform today?',
      explanation: '"Do I have to + base verb" is standard for obligation questions.',
    },
    {
      id: 'cp_a1_42_3',
      type: 'multiple_choice',
      prompt: 'Choose the correct form for third-person singular obligation:',
      options: [
        { id: 'opt_1', text: 'Sarah has to submit the attendee report by 5 PM.', isCorrect: true },
        { id: 'opt_2', text: 'Sarah have to submit the attendee report by 5 PM.', isCorrect: false },
        { id: 'opt_3', text: 'Sarah is have to submit the attendee report.', isCorrect: false },
      ],
      correctAnswer: 'Sarah has to submit the attendee report by 5 PM.',
      explanation: 'Use "has to" with third-person singular subject "Sarah".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_42_1',
      scenarioContext: 'State security requirement regarding identification.',
      prompt: 'Build: "You must wear your security badge at all times."',
      targetStructure: 'Subject + must + base verb + noun phrase + prepositional phrase',
      wordBank: ['You', 'must', 'wear', 'your', 'security', 'badge', 'at', 'all', 'times', 'to', 'have'],
      acceptableSolutions: [
        'You must wear your security badge at all times',
        'You must wear your security badge at all times.',
      ],
      explanation: 'Modal "must" followed by base verb "wear".',
    },
    {
      id: 'sc_a1_42_2',
      scenarioContext: 'Inquire about morning arrival duty.',
      prompt: 'Build: "Do we have to arrive before eight o\'clock?"',
      targetStructure: 'Do + subject + have to + base verb + prepositional phrase?',
      wordBank: ['Do', 'we', 'have', 'to', 'arrive', 'before', 'eight', 'o\'clock', 'must', 'are'],
      acceptableSolutions: [
        'Do we have to arrive before eight o\'clock',
        'Do we have to arrive before eight o\'clock?',
      ],
      explanation: 'Standard question with "have to" for scheduled duties.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_42_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to the Tech Summit volunteer team! First, an essential security rule: you must wear this lanyard and badge visibly around your neck at all times. Do you have any questions about the badge policy?',
      partnerAudioText:
        'Welcome to the Tech Summit volunteer team! First, an essential security rule: you must wear this lanyard and badge visibly around your neck at all times. Do you have any questions about the badge policy?',
      partnerQuestionHindi:
        'टेक समिट स्वयंसेवक टीम में आपका स्वागत है! सबसे पहले, एक आवश्यक सुरक्षा नियम: आपको यह लैनयार्ड और बैज हर समय अपने गले में स्पष्ट रूप से पहनना होगा। क्या बैज नीति के बारे में आपका कोई प्रश्न है?',
      expectedFunction: 'Acknowledge Rule & Ask About Dress Code (Do we have to wear...?)',
      contextGoal:
        'Confirm you understand the badge rule ("Understood, I will wear my badge at all times") and ask if you have to wear a specific uniform or formal clothes.',
      targetVocabulary: ['must wear', 'badge', 'do we have to wear', 'uniform', 'dress code', 'understood'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Understood! I will keep my badge on at all times. Do we have to wear a specific volunteer t-shirt or formal clothes today?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Got it, badge on at all times! Do we have to wear the summit t-shirt?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Understood! What about dress code—do we have to wear the official t-shirt?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Rule Acknowledgment & Dress Code Inquiry',
          patterns: [
            'understood',
            'badge',
            'wear my badge',
            'do we have to wear',
            't-shirt',
            'uniform',
            'dress code',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'must_to_wear_error',
          pattern: /\bmust to wear\b/i,
          errorType: 'grammar',
          message: 'Say "must wear", not "must to wear".',
          correctionPattern: 'must wear',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_42_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "You must ___ your badge at all times."',
        options: [
          { id: 'opt_1', text: 'wear', isCorrect: true },
          { id: 'opt_2', text: 'to wear', isCorrect: false },
          { id: 'opt_3', text: 'wearing', isCorrect: false },
        ],
        correctAnswer: 'wear',
        explanation: '"Must" is followed directly by the base verb.',
      },
    },
    {
      id: 'turn_a1_42_2',
      turnIndex: 2,
      partnerPrompt:
        'Yes, you must wear the blue volunteer t-shirt with dark trousers or jeans. Now, for your morning duties: your station is at Registration Desk B. You have to check attendee QR codes and hand out welcome packs. What time does your shift start?',
      partnerAudioText:
        'Yes, you must wear the blue volunteer t-shirt with dark trousers or jeans. Now, for your morning duties: your station is at Registration Desk B. You have to check attendee QR codes and hand out welcome packs. What time does your shift start?',
      partnerQuestionHindi:
        'हाँ, आपको गहरे रंग की पतलून या जींस के साथ नीली स्वयंसेवक टी-शर्ट पहननी होगी। अब, आपके सुबह के कर्तव्यों के लिए: आपका स्टेशन पंजीकरण डेस्क बी पर है। आपको उपस्थित लोगों के क्यूआर कोड की जांच करनी होगी और स्वागत किट सौंपनी होगी। आपकी शिफ्ट किस समय शुरू होती है?',
      expectedFunction: 'State Duty Schedule with "have to" / "need to"',
      contextGoal:
        'State what time you have to start (e.g. 8:00 AM) and mention that you need to prepare the welcome packs before doors open.',
      targetVocabulary: ['have to start', 'at eight', 'need to prepare', 'welcome packs', 'qr codes', 'registration'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'My shift starts at eight o\'clock. I have to be at Desk B by seven forty-five because we need to set up the welcome packs before doors open at eight.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have to start at eight o’clock, so I need to go to Desk B right now.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Shift starts at eight! I have to set up the packs at Desk B by seven forty-five.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Duty Schedule & Setup Need',
          patterns: ['have to', 'need to', 'eight', 'seven forty-five', 'desk b', 'welcome packs', 'start'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_42_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly expresses a morning obligation?',
        options: [
          { id: 'opt_1', text: 'I have to be at Desk B before eight o\'clock.', isCorrect: true },
          { id: 'opt_2', text: 'I am have to be at Desk B before eight o\'clock.', isCorrect: false },
          { id: 'opt_3', text: 'I must to be at Desk B before eight o\'clock.', isCorrect: false },
        ],
        correctAnswer: 'I have to be at Desk B before eight o\'clock.',
        explanation: '"I have to be..." correctly expresses the scheduled duty.',
      },
    },
    {
      id: 'turn_a1_42_3',
      turnIndex: 3,
      partnerPrompt:
        'Perfect timing! Remember that attendees cannot enter the keynote hall with hot coffee or large backpacks—they must leave them at the cloakroom. What should you do if an attendee needs translation headsets?',
      partnerAudioText:
        'Remember that attendees cannot enter the keynote hall with hot coffee or large backpacks—they must leave them at the cloakroom. What should you do if an attendee needs translation headsets?',
      partnerQuestionHindi:
        'बिल्कुल सही समय! याद रखें कि उपस्थित लोग गर्म कॉफी या बड़े बैकपैक के साथ मुख्य सभागार में प्रवेश नहीं कर सकते हैं—उन्हें उन्हें क्लॉकरूम में छोड़ना होगा। यदि किसी उपस्थित व्यक्ति को अनुवाद हेडसेट की आवश्यकता हो तो आपको क्या करना चाहिए?',
      expectedFunction: 'Explain Protocol with "have to guide" / "need to direct"',
      contextGoal:
        'State that you need to direct or guide the attendee to the information booth / headset station at Hall C.',
      targetVocabulary: ['direct them', 'have to guide', 'need to send', 'information desk', 'hall c', 'headset station'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'If someone needs a translation headset, I have to direct them to the Information Desk in Hall C. They must show their ID to borrow one.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I have to send them to the headset station in Hall C with their ID.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I need to direct them to Hall C for headsets.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Protocol Direction',
          patterns: ['direct them', 'guide them', 'have to send', 'need to direct', 'information desk', 'hall c', 'headset'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_42_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ to help all guests find their seats quickly."',
        options: [
          { id: 'opt_1', text: 'need', isCorrect: true },
          { id: 'opt_2', text: 'must', isCorrect: false },
          { id: 'opt_3', text: 'should to', isCorrect: false },
        ],
        correctAnswer: 'need',
        explanation: 'We need to + base verb "help".',
      },
    },
    {
      id: 'turn_a1_42_4',
      turnIndex: 4,
      partnerPrompt:
        'You have all the guidelines down perfectly! Take your volunteer packet and radio. Thank you for your energy today, and let’s make this an outstanding summit!',
      partnerAudioText:
        'You have all the guidelines down perfectly! Take your volunteer packet and radio. Thank you for your energy today, and let’s make this an outstanding summit!',
      partnerQuestionHindi:
        'आपको सभी दिशा-निर्देश पूरी तरह से याद हैं! अपना स्वयंसेवक पैकेट और रेडियो लें। आज आपकी ऊर्जा के लिए धन्यवाद, और आइए इसे एक उत्कृष्ट शिखर सम्मेलन बनाएं!',
      expectedFunction: 'Accept Materials & Conclude Briefing',
      contextGoal:
        'Thank Ryan for the briefing, confirm you are ready to report to Desk B, and head to work.',
      targetVocabulary: ['thank you', 'ready to start', 'desk b', 'appreciate it', 'let’s do this', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you very much, Ryan! I have my packet, radio, and badge ready. I am heading to Registration Desk B right now!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thanks Ryan! I am ready to start at Desk B. Have a great day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot Ryan! Heading over to Desk B now, let’s do this!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Closing & Ready Confirmation',
          patterns: ['thank you', 'thanks', 'desk b', 'ready', 'heading to', 'great day', 'let’s do this'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_42_4',
        type: 'multiple_choice',
        prompt: 'Which response finishes the volunteer briefing enthusiastically?',
        options: [
          { id: 'opt_1', text: 'Thank you Ryan! I have everything and I am ready to head to Desk B.', isCorrect: true },
          { id: 'opt_2', text: 'I am must go now work.', isCorrect: false },
          { id: 'opt_3', text: 'You give radio me go.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Ryan! I have everything and I am ready to head to Desk B.',
        explanation: 'Enthusiastic, polite, and professional.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
