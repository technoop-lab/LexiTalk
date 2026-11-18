import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_102: ConversationDefinition = {
  id: 'conv_a2_102',
  title: 'Rules, Obligations & Permissions (must, have to, don\'t have to, allowed to)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_102'],
  estimatedMinutes: 5,
  scenario:
    'You are completing an onboarding walk-through at "The Innovation Hub" co-working tech campus in Cambridge with facility manager Liam Fletcher. Inquire about facility guidelines, clarify building security obligations (have to, must), understand permissions (can, allowed to), and clarify lack of obligation (don\'t have to) regarding hot-desking, visitor access, and quiet zones.',
  communicativeGoals: [
    'Differentiate between obligation (must, have to), lack of obligation (don\'t have to), and prohibition (mustn\'t, can\'t)',
    'Inquire about building permissions and visitor protocols using "Are we allowed to...?" and "Can I...?"',
    'Explain security regulations and access card compliance clearly',
    'Clarify meeting room reservation rules and kitchen recycling policies',
  ],
  canDoStatements: [
    'Can understand and discuss rules, regulations, and obligations in workplace and public settings (CEFR A2)',
    'Can accurately use modal verbs: must, have to, don\'t have to, can, and be allowed to',
    'Can ask for permission and clarification on institutional policies',
  ],
  characters: [
    {
      id: 'char_liam_fletcher',
      name: 'Liam Fletcher',
      role: 'Innovation Hub Facility & Safety Officer',
      avatar: '🛡️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'obligation',
        ipa: '/ˌɒblɪˈɡeɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'An act or course of action to which a person is morally or legally bound; a duty',
        exampleSentence: 'Wearing your security badge is a mandatory obligation.',
        translations: { hi: 'अनिवार्यता / कर्तव्य' },
      },
      {
        word: 'prohibited',
        ipa: '/prəˈhɪbɪtɪd/',
        partOfSpeech: 'adjective',
        meaning: 'That has been forbidden; banned',
        exampleSentence: 'Tailgating through security gates is strictly prohibited.',
        translations: { hi: 'निषिद्ध / प्रतिबंधित' },
      },
      {
        word: 'permitted',
        ipa: '/pəˈmɪtɪd/',
        partOfSpeech: 'adjective',
        meaning: 'Officially allowed',
        exampleSentence: 'Guests are permitted in the café area during business hours.',
        translations: { hi: 'अनुमति प्राप्त' },
      },
      {
        word: 'credential',
        ipa: '/krɪˈdɛnʃəl/',
        partOfSpeech: 'noun',
        meaning: 'A qualification, achievement, or badge of identity',
        exampleSentence: 'You must scan your digital credential at every turnstile.',
        translations: { hi: 'पहचान पत्र / क्रेडेंशियल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Do we have to book... in advance?',
        functionCategory: 'Inquiring About Obligation',
        exampleSentence: 'Do we have to book the quiet focus pods in advance?',
      },
      {
        phrase: 'You don’t have to pay for...',
        functionCategory: 'Expressing Lack of Obligation',
        exampleSentence: 'You don’t have to pay for specialty coffee; it is complimentary.',
      },
      {
        phrase: 'You mustn’t leave... unattended.',
        functionCategory: 'Expressing Strict Prohibition',
        exampleSentence: 'You mustn’t leave laptops or bags unattended in public areas.',
      },
      {
        phrase: 'Are members allowed to bring guests?',
        functionCategory: 'Asking for Permission (allowed to)',
        exampleSentence: 'Are members allowed to bring external guests for meetings?',
      },
    ],
    grammar: {
      title: 'Modals of Obligation, Permission & Prohibition',
      conceptExplanation:
        '1. Obligation: "Have to / Must + [base verb]" (e.g., "You have to wear your badge at all times").\n2. Lack of obligation: "Don\'t have to + [base verb]" (e.g., "You don\'t have to reserve hot desks on Fridays - it is optional").\n3. Prohibition: "Mustn\'t / Can\'t + [base verb]" (e.g., "You mustn\'t hold the emergency exit door open").\n4. Permission: "Can / Be allowed to + [base verb]" (e.g., "You are allowed to bring guests to the ground floor lounge").',
      patternFormula: 'Obligation: have to + [verb] | No Obligation: don\'t have to + [verb] | Prohibition: mustn\'t + [verb]',
      contrastExamples: [
        {
          incorrect: 'You mustn\'t come on Friday if you are tired (meaning: optional).',
          correct: 'You don\'t have to come on Friday if you are tired.',
          explanation: '"Mustn\'t" means forbidden! Use "don\'t have to" for actions that are not required/optional.',
        },
        {
          incorrect: 'Do I must register my guest?',
          correct: 'Do I have to register my guest? / Must I register my guest?',
          explanation: 'In modern questions, use "Do I have to + [verb]".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Fletcher',
        text: 'Welcome to the Innovation Hub! Let us review the security and access protocols. Do you have any questions about building entry?',
        translation: 'इनोवेशन हब में आपका स्वागत है! आइए सुरक्षा और पहुंच प्रोटोकॉल की समीक्षा करें। क्या आपके पास भवन में प्रवेश के बारे में कोई प्रश्न हैं?',
      },
      {
        speaker: 'You',
        text: 'Hello Liam! Do we have to wear our physical badge at all times, or can we use the smartphone NFC app?',
        translation: 'नमस्ते लियाम! क्या हमें हर समय अपना भौतिक बैज पहनना होगा, या हम स्मार्टफोन एनएफसी ऐप का उपयोग कर सकते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_102_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence to show something is optional: "You ___ (not / have to) book phone booths in advance."',
      options: [
        { id: 'opt_1', text: 'don\'t have to', isCorrect: true },
        { id: 'opt_2', text: 'mustn\'t', isCorrect: false },
        { id: 'opt_3', text: 'cannot to', isCorrect: false },
      ],
      correctAnswer: 'don\'t have to',
      explanation: '"Don\'t have to" indicates no obligation / optional action.',
    },
    {
      id: 'cp_a2_102_2',
      type: 'multiple_choice',
      prompt: 'Which sentence indicates a strict safety prohibition (forbidden)?',
      options: [
        { id: 'opt_1', text: 'You mustn\'t prop open the fire exit doors.', isCorrect: true },
        { id: 'opt_2', text: 'You don\'t have to prop open the fire doors.', isCorrect: false },
        { id: 'opt_3', text: 'You are allowed to prop open the doors.', isCorrect: false },
      ],
      correctAnswer: 'You mustn\'t prop open the fire exit doors.',
      explanation: '"Mustn\'t" expresses strict prohibition for safety.',
    },
    {
      id: 'cp_a2_102_3',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks about visitor permission?',
      options: [
        { id: 'opt_1', text: 'Are we allowed to invite clients into the meeting suites?', isCorrect: true },
        { id: 'opt_2', text: 'Are we must to invite clients?', isCorrect: false },
        { id: 'opt_3', text: 'Do we allowed to invite clients?', isCorrect: false },
      ],
      correctAnswer: 'Are we allowed to invite clients into the meeting suites?',
      explanation: '"Are you allowed to + [base verb]" is the correct structure for permission.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_102_1',
      scenarioContext: 'State a building entry rule.',
      prompt: 'Build: "You have to scan your security badge at the entrance."',
      targetStructure: 'Subject + have to + base verb + object + prepositional phrase',
      wordBank: ['You', 'have', 'to', 'scan', 'your', 'security', 'badge', 'at', 'the', 'entrance', 'mustn\'t', 'scanning'],
      acceptableSolutions: [
        'You have to scan your security badge at the entrance',
        'You have to scan your security badge at the entrance.',
      ],
      explanation: 'Expresses mandatory workplace obligation.',
    },
    {
      id: 'sc_a2_102_2',
      scenarioContext: 'Explain a facility permission regarding guests.',
      prompt: 'Build: "Members are allowed to bring two guests per day."',
      targetStructure: 'Subject + are allowed to + base verb + object + frequency',
      wordBank: ['Members', 'are', 'allowed', 'to', 'bring', 'two', 'guests', 'per', 'day', 'mustn\'t', 'bringing'],
      acceptableSolutions: [
        'Members are allowed to bring two guests per day',
        'Members are allowed to bring two guests per day.',
      ],
      explanation: 'Expresses permission with "are allowed to".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_102_1',
      turnIndex: 1,
      partnerPrompt:
        'Welcome to The Innovation Hub! I am Liam, your facility manager. First, regarding building security: Everyone has to scan their NFC digital pass or physical badge at the ground floor turnstiles. Do you have any questions about daily access hours or parking?',
      partnerAudioText:
        'Welcome to The Innovation Hub! I am Liam, your facility manager. First, regarding building security: Everyone has to scan their NFC digital pass or physical badge at the ground floor turnstiles. Do you have any questions about daily access hours or parking?',
      partnerQuestionHindi:
        'द इनोवेशन हब में आपका स्वागत है! मैं आपका सुविधा प्रबंधक लियाम हूँ। सबसे पहले, भवन सुरक्षा के संबंध में: सभी को ग्राउंड फ्लोर टर्नस्टाइल पर अपने एनएफसी डिजिटल पास या भौतिक बैज को स्कैन करना होगा। क्या आपके पास दैनिक पहुंच के घंटों या पार्किंग के बारे में कोई प्रश्न हैं?',
      expectedFunction: 'Ask About Access Hours & Parking Regulations using "Do we have to" / "Can we"',
      contextGoal:
        'Ask if members have 24/7 building access or if they have to leave by a specific time, and inquire whether bicycle parking is free and secured.',
      targetVocabulary: ['do we have 24/7 access to the building', 'do we have to leave by 8:00 PM', 'are we allowed to park bicycles in the basement', 'is parking free'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Hello Liam! Thank you for the tour. Do members have 24/7 access with their digital pass, or do we have to leave the premises by 8:00 PM? Also, are we allowed to park bicycles in the secure basement garage?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Access Hours / Obligation (24/7 / leave / have to)',
          patterns: ['24/7', 'access', 'hours', 'leave', 'have to', 'evening', 'time', 'digital pass'],
          required: true,
        },
        {
          name: 'Bicycle / Parking Permission (allowed to / can)',
          patterns: ['bicycle', 'bike', 'parking', 'garage', 'basement', 'allowed to', 'free'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mustn\'t_vs_dont_have_to_rule',
          pattern: /\bwe mustn't leave\b/i,
          errorType: 'grammar',
          message: 'If an action is not required, use "we don\'t have to leave", not "we mustn\'t leave".',
          correctionPattern: 'we don\'t have to',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_102_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly inquires about schedule obligations?',
        options: [
          { id: 'opt_1', text: 'Do we have to sign out when we leave the building?', isCorrect: true },
          { id: 'opt_2', text: 'Do we must sign out when we leave?', isCorrect: false },
          { id: 'opt_3', text: 'Are we have to sign out?', isCorrect: false },
        ],
        correctAnswer: 'Do we have to sign out when we leave the building?',
        explanation: 'Standard question formula: "Do we have to + [base verb]?".',
      },
    },
    {
      id: 'turn_a2_102_2',
      turnIndex: 2,
      partnerPrompt:
        'Members have full 24/7 keycard access, and bicycle parking in the basement is 100% free and secured! Now for our Quiet Focus Zones on the 3rd floor: You mustn’t take voice calls or play audio without headphones there. What about meeting rooms—do you know how booking works?',
      partnerAudioText:
        'Members have full 24/7 keycard access, and bicycle parking in the basement is 100% free and secured! Now for our Quiet Focus Zones on the 3rd floor: You mustn’t take voice calls or play audio without headphones there. What about meeting rooms—do you know how booking works?',
      partnerQuestionHindi:
        'सदस्यों के पास पूर्ण 24/7 कीकार्ड पहुंच है, और बेसमेंट में साइकिल पार्किंग 100% मुफ़्त और सुरक्षित है! अब तीसरी मंजिल पर हमारे शांत फोकस क्षेत्रों के लिए: आपको वहाँ बिना हेडफ़ोन के वॉयस कॉल नहीं लेनी चाहिए या ऑडियो नहीं बजाना चाहिए। मीटिंग रूम के बारे में क्या—क्या आप जानते हैं कि बुकिंग कैसे काम करती है?',
      expectedFunction: 'Inquire About Meeting Room & Phone Booth Obligations',
      contextGoal:
        'Acknowledge quiet zone rules (headphones required); ask if you have to book meeting rooms days in advance or if phone booths can be used spontaneously without booking.',
      targetVocabulary: ['I understand the quiet zone policy', 'do we have to book meeting rooms in advance', 'can we use phone booths without reservation', 'don’t have to book phone booths'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Understood—I will always use headphones in the Quiet Zone. Regarding meeting spaces: Do we have to book large conference rooms through the mobile portal in advance, or can we use single phone booths without any prior booking?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acknowledge Quiet Zone Prohibition (headphones / quiet)',
          patterns: ['understood', 'headphones', 'quiet zone', 'understand', 'calls', 'silent'],
          required: true,
        },
        {
          name: 'Meeting Room / Phone Booth Rule (have to / book)',
          patterns: ['book', 'meeting room', 'phone booth', 'in advance', 'portal', 'reservation', 'don\'t have to'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_102_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "You ___ take loudspeaker calls in the quiet room."',
        options: [
          { id: 'opt_1', text: 'mustn\'t', isCorrect: true },
          { id: 'opt_2', text: 'don\'t have to', isCorrect: false },
          { id: 'opt_3', text: 'are allowed to', isCorrect: false },
        ],
        correctAnswer: 'mustn\'t',
        explanation: '"Mustn\'t" expresses strict prohibition.',
      },
    },
    {
      id: 'turn_a2_102_3',
      turnIndex: 3,
      partnerPrompt:
        'Conference rooms must be booked via our app, but phone booths are first-come, first-served—you don’t have to book them at all! One final rule regarding visitors: Members are allowed to host up to two guests per day in the ground floor atrium, but guests must be registered at reception. Does that policy seem clear?',
      partnerAudioText:
        'Conference rooms must be booked via our app, but phone booths are first-come, first-served—you don’t have to book them at all! One final rule regarding visitors: Members are allowed to host up to two guests per day in the ground floor atrium, but guests must be registered at reception. Does that policy seem clear?',
      partnerQuestionHindi:
        'कॉन्फ्रेंस रूम हमारे ऐप के माध्यम से बुक किए जाने चाहिए, लेकिन फोन बूथ पहले आओ, पहले पाओ के आधार पर हैं—आपको उन्हें बिल्कुल भी बुक करने की आवश्यकता नहीं है! आगंतुकों के संबंध में एक अंतिम नियम: सदस्यों को भूतल के आलिंद में प्रति दिन दो मेहमानों की मेजबानी करने की अनुमति है, लेकिन मेहमानों को रिसेप्शन पर पंजीकृत होना चाहिए। क्या वह नीति स्पष्ट लगती है?',
      expectedFunction: 'Demonstrate Understanding of Guest Policies & Confirm Compliance',
      contextGoal:
        'Confirm that you understand: you don’t have to book phone booths, you can host up to two guests in the atrium, and you must register them at reception.',
      targetVocabulary: ['everything is completely clear', 'don’t have to book phone booths', 'must register guests at front desk', 'allowed up to two visitors'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'That is crystal clear Liam! It’s great that we don’t have to book phone booths, and I will always make sure any visiting clients are registered at reception before heading to the atrium.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comprehension of Rules (Phone Booths & Guests)',
          patterns: ['clear', 'understand', 'don\'t have to', 'phone booths', 'register', 'reception', 'guests', 'visitors', 'atrium'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_102_3',
        type: 'multiple_choice',
        prompt: 'Which statement accurately describes a lack of obligation?',
        options: [
          { id: 'opt_1', text: 'You don\'t have to reserve the single phone booths.', isCorrect: true },
          { id: 'opt_2', text: 'You mustn\'t reserve the single phone booths.', isCorrect: false },
          { id: 'opt_3', text: 'You are prohibited to reserve phone booths.', isCorrect: false },
        ],
        correctAnswer: 'You don\'t have to reserve the single phone booths.',
        explanation: '"Don\'t have to" indicates optional / no obligation.',
      },
    },
    {
      id: 'turn_a2_102_4',
      turnIndex: 4,
      partnerPrompt:
        'You have complete grasp of all our community standards, Alex! Here is your activated NFC lanyard. The barista bar on Level 1 serves complimentary flat whites until 4:00 PM. Welcome aboard to The Innovation Hub!',
      partnerAudioText:
        'You have complete grasp of all our community standards, Alex! Here is your activated NFC lanyard. The barista bar on Level 1 serves complimentary flat whites until 4:00 PM. Welcome aboard to The Innovation Hub!',
      partnerQuestionHindi:
        'आपको हमारे सभी सामुदायिक मानकों की पूरी समझ है, एलेक्स! यह आपका सक्रिय एनएफसी लैनयार्ड है। लेवल 1 पर बरिस्ता बार शाम 4:00 बजे तक मुफ्त फ्लैट व्हाइट परोसता है। द इनोवेशन हब में आपका स्वागत है!',
      expectedFunction: 'Accept Pass & Conclude Onboarding Tour Warmly',
      contextGoal:
        'Accept the NFC pass, thank Liam for the thorough walk-through, and express enthusiasm for working in the campus.',
      targetVocabulary: ['thank you Liam for the thorough onboarding tour', 'appreciate the clear guidelines', 'excited to work here', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Thank you so much Liam for the thorough tour and clear guidelines! I will take my lanyard and head up to Level 1 for a flat white. Excited to be part of the community, have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Wrap-up',
          patterns: ['thank you', 'thanks', 'liam', 'tour', 'lanyard', 'coffee', 'excited', 'community', 'have a great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_102_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for the ___ tour!"',
        options: [
          { id: 'opt_1', text: 'thorough', isCorrect: true },
          { id: 'opt_2', text: 'through', isCorrect: false },
          { id: 'opt_3', text: 'thought', isCorrect: false },
        ],
        correctAnswer: 'thorough',
        explanation: 'Adjective "thorough" means detailed and complete.',
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
