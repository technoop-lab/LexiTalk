import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_167: ConversationDefinition = {
  id: 'conv_a2_167',
  title: 'Troubleshooting Office Equipment & Technical Glitches',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_167'],
  estimatedMinutes: 5,
  scenario:
    'You are in the IT Helpdesk support office at Meridian Logistics in Leeds speaking with senior IT technician Liam Foster. The wireless network has been dropping connections intermittently and the shared network printer is offline with a paper jam error code. You need to report these technical glitches accurately, describe malfunctions using passive voice structures ("The printer was disconnected", "The driver was updated yesterday"), suggest troubleshooting steps using modals ("Could we try rebooting?", "We might need to replace the cartridge"), and request immediate help before an executive client presentation.',
  communicativeGoals: [
    'Report hardware and network malfunctions clearly using technical problem vocabulary',
    'Use passive voice structures to describe equipment states and past troubleshooting steps ("The firmware was updated", "The cable was unplugged")',
    'Suggest diagnostic steps politely using modal verbs ("Could we try...", "We might need to...")',
    'Negotiate priority support due to imminent workplace deadlines',
  ],
  canDoStatements: [
    'Can describe a technical equipment failure or network glitch clearly in English',
    'Can use passive voice constructions to explain what was done to fix an issue',
    'Can propose troubleshooting solutions using polite modals ("could", "might")',
  ],
  characters: [
    {
      id: 'char_liam_foster',
      name: 'Liam Foster',
      role: 'Senior IT Support Specialist',
      avatar: '🔧',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'malfunction',
        ipa: '/ˌmælˈfʌŋkʃn/',
        partOfSpeech: 'noun',
        meaning: 'A failure to function normally or satisfactorily',
        exampleSentence: 'The printer malfunction caused a major delay during morning dispatch.',
        translations: { hi: 'खराबी / तकनीकी गड़बड़ी' },
      },
      {
        word: 'reboot',
        ipa: '/ˌriːˈbuːt/',
        partOfSpeech: 'verb',
        meaning: 'To restart a computer or operating system',
        exampleSentence: 'Could we try rebooting the router to reset the network connection?',
        translations: { hi: 'पुनः चालू करना (रीबूट)' },
      },
      {
        word: 'firmware',
        ipa: '/ˈfɜːmweə(r)/',
        partOfSpeech: 'noun',
        meaning: 'Permanent software programmed into a read-only memory',
        exampleSentence: 'The printer firmware was updated yesterday afternoon.',
        translations: { hi: 'फर्मवेयर / आंतरिक सॉफ्टवेयर' },
      },
      {
        word: 'unresponsive',
        ipa: '/ˌʌnrɪˈspɒnsɪv/',
        partOfSpeech: 'adjective',
        meaning: 'Not reacting or responding to input or commands',
        exampleSentence: 'The touch display is completely unresponsive.',
        translations: { hi: 'अनुत्तरदायी / प्रतिक्रिया न देने वाला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The network printer was disconnected, and the touch screen is completely unresponsive.',
        functionCategory: 'Describing Equipment Status with Passive Voice',
        exampleSentence: 'The server was shut down due to maintenance.',
      },
      {
        phrase: 'Could we try rebooting the router, or might we need to replace the network cable?',
        functionCategory: 'Proposing Troubleshooting Solutions with Modals',
        exampleSentence: 'Could we try clearing the paper tray?',
      },
      {
        phrase: 'We have an executive presentation in thirty minutes, so we urgently need this fixed.',
        functionCategory: 'Stating Urgency & Deadline Context',
        exampleSentence: 'I have a client meeting in an hour.',
      },
      {
        phrase: 'The diagnostic test was completed this morning, but the error persists.',
        functionCategory: 'Reporting Past Diagnostic Action with Passive Voice',
        exampleSentence: 'The driver was installed, but the sound is still distorted.',
      },
    ],
    grammar: {
      title: 'Passive Voice for Describing System States & Modals for Suggestions',
      conceptExplanation:
        '1. Past Simple Passive: "Subject + was/were + Past Participle" (e.g., "The cable was unplugged", "The updates were installed"). Use when the action/state is more important than who did it.\n2. Present Passive: "Subject + is/are + Past Participle" (e.g., "The printer is connected to Wi-Fi").\n3. Modals for Troubleshooting Suggestions: Use "Could we try + Gerund (-ing)?" or "We might need to + Base Verb" to suggest polite fixes without sounding demanding.',
      patternFormula: 'Subject + was/were + Past Participle | Could we try + [Verb-ing] | We might need to + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'Someone was reboot the printer and you must fix now immediately.',
          correct: 'The printer was rebooted ten minutes ago, but we might need to reinstall the network driver.',
          explanation: 'Use correct passive forms ("was rebooted") and polite modal suggestions ("might need to").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam Foster',
        text: 'IT Helpdesk, Liam speaking. What seems to be the problem with your office setup today?',
        translation: 'आईटी हेल्पडेस्क, लियम बोल रहा हूँ। आज आपके कार्यालय सेटअप में क्या समस्या आ रही है?',
      },
      {
        speaker: 'You',
        text: 'Hi Liam. The main conference printer is displaying an error code, and the Wi-Fi connection was dropped twice this morning.',
        translation: 'नमस्ते लियम। मुख्य सम्मेलन प्रिंटर एक त्रुटि कोड प्रदर्शित कर रहा है, और आज सुबह वाई-फाई कनेक्शन दो बार कट गया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_167_1',
      type: 'fill_blank',
      prompt: 'Complete the passive voice report: "The network cable ___ (was replaced / replaced) yesterday, but the connection is still unstable."',
      options: [
        { id: 'opt_1', text: 'was replaced', isCorrect: true },
        { id: 'opt_2', text: 'replaced', isCorrect: false },
        { id: 'opt_3', text: 'is replace', isCorrect: false },
      ],
      correctAnswer: 'was replaced',
      explanation: 'Passive voice in the Past Simple: "was replaced".',
    },
    {
      id: 'cp_a2_167_2',
      type: 'multiple_choice',
      prompt: 'Which sentence offers a polite troubleshooting suggestion using a modal verb?',
      options: [
        { id: 'opt_1', text: 'Could we try restarting the central router?', isCorrect: true },
        { id: 'opt_2', text: 'You restart router immediately now.', isCorrect: false },
        { id: 'opt_3', text: 'Router must to restart by you.', isCorrect: false },
      ],
      correctAnswer: 'Could we try restarting the central router?',
      explanation: '"Could we try + -ing" is polite and grammatically sound.',
    },
    {
      id: 'cp_a2_167_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes a malfunction using the passive voice?',
      options: [
        { id: 'opt_1', text: 'The firmware was updated yesterday, but the scanner was disabled automatically.', isCorrect: true },
        { id: 'opt_2', text: 'The firmware updated yesterday but scanner disabled itself.', isCorrect: false },
        { id: 'opt_3', text: 'The firmware was update and scanner was disable.', isCorrect: false },
      ],
      correctAnswer: 'The firmware was updated yesterday, but the scanner was disabled automatically.',
      explanation: 'Use "was/were + past participle" for passive descriptions.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_167_1',
      scenarioContext: 'Report that the printer was restarted and the cable was checked.',
      prompt: 'Build: "The printer was restarted and the cable was checked."',
      targetStructure: 'The printer was restarted and the cable was checked',
      wordBank: ['The', 'printer', 'was', 'restarted', 'and', 'the', 'cable', 'was', 'checked', 'did', 'restarting'],
      acceptableSolutions: [
        'The printer was restarted and the cable was checked.',
        'The printer was restarted, and the cable was checked.',
      ],
      explanation: 'Coordinated passive voice clauses.',
    },
    {
      id: 'sc_a2_167_2',
      scenarioContext: 'Suggest rebooting the access point politely.',
      prompt: 'Build: "Could we try rebooting the access point?"',
      targetStructure: 'Could we try rebooting the access point',
      wordBank: ['Could', 'we', 'try', 'rebooting', 'the', 'access', 'point', 'reboot', 'to', 'can'],
      acceptableSolutions: [
        'Could we try rebooting the access point?',
      ],
      explanation: '"Could we try + gerund" for troubleshooting suggestions.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_167_1',
      turnIndex: 1,
      partnerPrompt:
        'IT Helpdesk, Liam speaking. How can I assist you with your equipment today?',
      partnerAudioText:
        'IT Helpdesk, Liam speaking. How can I assist you with your equipment today?',
      partnerQuestionHindi:
        'आईटी हेल्पडेस्क, लियम बोल रहा हूँ। आज मैं आपके उपकरणों के साथ आपकी किस प्रकार सहायता कर सकता हूँ?',
      expectedFunction: 'Report Hardware/Network Malfunction using Passive Voice and Specific Details',
      contextGoal:
        'Explain that the conference room printer is offline, the paper jam sensor was triggered, and the Wi-Fi was disconnected.',
      targetVocabulary: ['printer is offline', 'Wi-Fi connection was dropped', 'error code on the screen'],
      suggestedResponses: [
        {
          label: 'Report Malfunctions (Passive + Active)',
          text: 'Hi Liam. The printer in Conference Room B is completely offline, and the network connection was dropped twice during our team call.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Direct Equipment Issue',
          text: 'Hello Liam. The shared office printer is showing a paper jam error, and the wireless network was disconnected suddenly.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Equipment / Printer Problem (printer / screen / offline / paper jam / error code / unresponsive)',
          patterns: ['printer', 'screen', 'offline', 'paper jam', 'error code', 'unresponsive', 'jam'],
          required: true,
        },
        {
          name: 'Network / Wi-Fi Issue (wifi / network / connection / dropped / disconnected / internet)',
          patterns: ['wifi', 'network', 'connection', 'dropped', 'disconnected', 'internet'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_passive_verb_form',
          pattern: 'was drop twice|was disconnect suddenly',
          errorType: 'grammar',
          message: 'Passive voice requires the past participle: "was dropped", "was disconnected".',
          correctionPattern: 'The connection was dropped twice this morning',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_167_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The router ___ (was disconnected / disconnected) during the power surge."',
        options: [
          { id: 'opt_1', text: 'was disconnected', isCorrect: true },
          { id: 'opt_2', text: 'disconnected', isCorrect: false },
          { id: 'opt_3', text: 'is disconnect', isCorrect: false },
        ],
        correctAnswer: 'was disconnected',
        explanation: 'Passive voice in Past Simple: "was disconnected".',
      },
    },
    {
      id: 'turn_a2_167_2',
      turnIndex: 2,
      partnerPrompt:
        'Got it. Have any troubleshooting steps been attempted yet, like clearing the feeder tray or restarting the power strip?',
      partnerAudioText:
        'Got it. Have any troubleshooting steps been attempted yet, like clearing the feeder tray or restarting the power strip?',
      partnerQuestionHindi:
        'समझ गया। क्या अभी तक कोई समस्या निवारण कदम उठाए गए हैं, जैसे फीडर ट्रे को साफ करना या पावर स्ट्रिप को पुनः आरंभ करना?',
      expectedFunction: 'Describe Past Troubleshooting Steps with Passive Voice and Suggest Next Action with Modal',
      contextGoal:
        'State that the paper tray was cleared and the power was cycled, and suggest rebooting the main switch.',
      targetVocabulary: ['tray was cleared', 'printer was rebooted', 'Could we try resetting the network switch?'],
      suggestedResponses: [
        {
          label: 'Detail Past Actions & Suggest Modal Fix',
          text: 'Yes, the paper tray was cleared and the printer was rebooted ten minutes ago. Could we try resetting the network access switch remotely?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Report Actions Taken',
          text: 'The power cable was checked and the device was restarted, but the screen is still unresponsive. We might need to reinstall the network driver.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Actions in Passive (was cleared / was rebooted / was restarted / was checked / tray)',
          patterns: ['was cleared', 'was rebooted', 'was restarted', 'was checked', 'cleared', 'rebooted', 'restarted', 'checked'],
          required: true,
        },
        {
          name: 'Modal Troubleshooting Suggestion (could we try / might need to / could you / try / reset / reinstall)',
          patterns: ['could we try', 'might need to', 'could you', 'try', 'reset', 'reinstall', 'reboot'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_modal_suggestion_form',
          pattern: 'could we try to reboot|could we to try rebooting',
          errorType: 'grammar',
          message: 'Say "Could we try rebooting...?" (try + gerund) without extra infinitives.',
          correctionPattern: 'Could we try rebooting the router?',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_167_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly suggests a diagnostic step?',
        options: [
          { id: 'opt_1', text: 'Could we try resetting the IP address?', isCorrect: true },
          { id: 'opt_2', text: 'Could we to reset IP address?', isCorrect: false },
          { id: 'opt_3', text: 'We must trying to reset.', isCorrect: false },
        ],
        correctAnswer: 'Could we try resetting the IP address?',
        explanation: '"Could we try + -ing" is the standard diagnostic pattern.',
      },
    },
    {
      id: 'turn_a2_167_3',
      turnIndex: 3,
      partnerPrompt:
        'I am seeing an IP conflict on that subnet. I will send a remote reset command right now, but it will take about ten minutes to complete. Is that acceptable?',
      partnerAudioText:
        'I am seeing an IP conflict on that subnet. I will send a remote reset command right now, but it will take about ten minutes to complete. Is that acceptable?',
      partnerQuestionHindi:
        'मुझे उस सबनेट पर एक आईपी विरोध दिखाई दे रहा है। मैं अभी एक रिमोट रीसेट कमांड भेजूंगा, लेकिन इसे पूरा होने में लगभग दस मिनट लगेंगे। क्या यह स्वीकार्य है?',
      expectedFunction: 'State Deadline Urgency Politely and Request Priority Assistance',
      contextGoal:
        'Explain that your client presentation begins in twenty minutes, so ten minutes is acceptable as long as it works.',
      targetVocabulary: ['client presentation starts in twenty minutes', 'ten minutes is acceptable', 'appreciate your fast response'],
      suggestedResponses: [
        {
          label: 'Confirm Deadline & Accept Timeline',
          text: 'Ten minutes is fine, thank you. We have an executive presentation in twenty minutes, so we really appreciate your prompt help.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'State Urgency Courteously',
          text: 'That works perfectly. As long as the printer is online before our client arrives at eleven, we will be in good shape.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Timeline (ten minutes / fine / acceptable / works / perfect)',
          patterns: ['ten minutes', 'fine', 'acceptable', 'works', 'perfect', 'sounds good'],
          required: true,
        },
        {
          name: 'Urgency Context (presentation / meeting / client / twenty minutes / eleven / prompt)',
          patterns: ['presentation', 'meeting', 'client', 'twenty minutes', 'minutes', 'prompt', 'executive'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_167_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "As long as the printer ___ (is / will be) ready, we will start on time."',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'will be', isCorrect: false },
          { id: 'opt_3', text: 'being', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Use Present Simple after "as long as" in conditional time clauses.',
      },
    },
    {
      id: 'turn_a2_167_4',
      turnIndex: 4,
      partnerPrompt:
        'The remote reset is complete and the printer test page just printed successfully! The Wi-Fi signal is back at full strength. Let me know if you need anything else.',
      partnerAudioText:
        'The remote reset is complete and the printer test page just printed successfully! The Wi-Fi signal is back at full strength. Let me know if you need anything else.',
      partnerQuestionHindi:
        'रिमोट रीसेट पूरा हो गया है और प्रिंटर परीक्षण पृष्ठ अभी सफलतापूर्वक मुद्रित हुआ है! वाई-फाई सिग्नल पूरी क्षमता पर वापस आ गया है। यदि आपको किसी अन्य चीज़ की आवश्यकता हो तो मुझे बताएं।',
      expectedFunction: 'Express Gratitude, Verify Equipment Status & Conclude Ticket',
      contextGoal:
        'Thank Liam for the fast resolution, confirm the test page looks great, and sign off.',
      targetVocabulary: ['test page printed clearly', 'thank you for your quick support', 'everything is working now'],
      suggestedResponses: [
        {
          label: 'Verify Resolution & Thank Support',
          text: 'The test page just printed clearly, and the Wi-Fi connection is solid now. Thank you so much for your rapid support, Liam!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Close Support Call',
          text: 'Everything is working smoothly now. Thank you for resolving this so quickly before our meeting. Have a great day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Verification (printed / working / clear / test page / solid / smoothly)',
          patterns: ['printed', 'working', 'clear', 'test page', 'solid', 'smoothly', 'good'],
          required: true,
        },
        {
          name: 'Gratitude & Close (thank you / thanks / rapid / quick / liam / great day)',
          patterns: ['thank you', 'thanks', 'rapid', 'quick', 'liam', 'great day', 'appreciate'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_167_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate for concluding an IT support call?',
        options: [
          { id: 'opt_1', text: 'Thank you for resolving the issue so quickly, Liam!', isCorrect: true },
          { id: 'opt_2', text: 'It is done bye bye.', isCorrect: false },
          { id: 'opt_3', text: 'You did good job thank.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for resolving the issue so quickly, Liam!',
        explanation: 'Professional and courteous expression of gratitude.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
