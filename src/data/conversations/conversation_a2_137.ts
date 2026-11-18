import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_137: ConversationDefinition = {
  id: 'conv_a2_137',
  title: 'Workplace Problem-Solving & Dealing with Delays',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_137'],
  estimatedMinutes: 5,
  scenario:
    'You are in a meeting room at Apex Digital Solutions in Manchester. Your client relationship manager, Chloe Bennett, needs an urgent update on the client portal rollout. Explain an unexpected technical bottleneck using cause and effect connectors ("due to", "because of", "as a result"), describe the problem clearly, and negotiate a realistic 48-hour deadline extension.',
  communicativeGoals: [
    'Explain project delays and technical bottlenecks using cause and effect connectors ("due to", "because of", "as a result")',
    'Describe the root cause of a problem clearly and professionally',
    'Propose an adjusted timeline and negotiate a deadline extension diplomatically',
    'Ask clarifying questions and confirm follow-up milestones',
  ],
  canDoStatements: [
    'Can explain the cause of a project delay using clear connectors',
    'Can politely request a deadline extension and propose alternative solutions',
    'Can interact constructively during problem-solving discussions',
  ],
  characters: [
    {
      id: 'char_chloe_bennett',
      name: 'Chloe Bennett',
      role: 'Client Relationship Manager',
      avatar: '🛠️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'delay',
        ipa: '/dɪˈleɪ/',
        partOfSpeech: 'noun',
        meaning: 'A period of time by which something is late or postponed',
        exampleSentence: 'The launch experienced a minor delay due to server maintenance.',
        translations: { hi: 'देरी / विलंब' },
      },
      {
        word: 'obstacle',
        ipa: '/ˈɒbstəkl/',
        partOfSpeech: 'noun',
        meaning: 'A problem or situation that prevents or slows down progress',
        exampleSentence: 'We encountered a technical obstacle during the database migration.',
        translations: { hi: 'बाधा / रुकावट' },
      },
      {
        word: 'extension',
        ipa: '/ɪkˈstenʃn/',
        partOfSpeech: 'noun',
        meaning: 'An addition to the length of time allowed for completing a project',
        exampleSentence: 'We requested a 48-hour extension to finish security testing.',
        translations: { hi: 'समय-सीमा बढ़ाना / विस्तार' },
      },
      {
        word: 'bottleneck',
        ipa: '/ˈbɒtlnek/',
        partOfSpeech: 'noun',
        meaning: 'A stage in a process that causes delays because it is slow',
        exampleSentence: 'Data verification became a major bottleneck for our developers.',
        translations: { hi: 'रुकावट का बिंदु / बाधा' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The project is delayed due to an unexpected server outage.',
        functionCategory: 'Stating Cause with "due to" + noun phrase',
        exampleSentence: 'We paused testing due to a power failure.',
      },
      {
        phrase: 'Because of the data migration error, we need an extra two days.',
        functionCategory: 'Explaining Reason with "because of"',
        exampleSentence: 'Because of heavy traffic, the delivery arrived late.',
      },
      {
        phrase: 'Would it be possible to extend the deadline until Friday afternoon?',
        functionCategory: 'Negotiating a Polite Deadline Extension',
        exampleSentence: 'Could we adjust the delivery date to Monday?',
      },
      {
        phrase: 'As a result, we have assigned two additional engineers to assist.',
        functionCategory: 'Stating Result / Corrective Action',
        exampleSentence: 'As a result, the issue has now been resolved.',
      },
    ],
    grammar: {
      title: 'Cause and Effect Connectors: due to / because of / as a result / because',
      conceptExplanation:
        '1. "due to / because of + [Noun Phrase]": Used before nouns or noun clauses (e.g., "The delay was due to server issues").\n2. "because + [Subject + Verb]": Used before full clauses (e.g., "We are late because the database crashed").\n3. "As a result, [Sentence]": Used at the start of a sentence to state the outcome or solution (e.g., "As a result, we need extra time").',
      patternFormula: '[Problem] + is due to / because of + [Noun Phrase] -> As a result, [Action/Request]',
      contrastExamples: [
        {
          incorrect: 'The delay happened because of the server crashed.',
          correct: 'The delay happened because the server crashed. / The delay was due to a server crash.',
          explanation: 'Use "because" with a subject+verb clause, and "because of / due to" with a noun phrase.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe Bennett',
        text: 'Hi there. The client just asked about the portal launch scheduled for tomorrow. Are we still on track?',
        translation: 'नमस्ते। क्लाइंट ने अभी कल के लिए निर्धारित पोर्टल लॉन्च के बारे में पूछा। क्या हम अभी भी सही समय पर हैं?',
      },
      {
        speaker: 'You',
        text: 'I’m afraid we have encountered a slight delay due to unexpected database errors. As a result, we need a 48-hour extension to complete quality assurance.',
        translation: 'मुझे डर है कि अप्रत्याशित डेटाबेस त्रुटियों के कारण हमें थोड़ी देरी का सामना करना पड़ा है। परिणामस्वरूप, गुणवत्ता आश्वासन पूरा करने के लिए हमें 48 घंटे के विस्तार की आवश्यकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_137_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The launch was postponed ___ (due to / because) technical difficulties."',
      options: [
        { id: 'opt_1', text: 'due to', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'result of', isCorrect: false },
      ],
      correctAnswer: 'due to',
      explanation: 'Use "due to" before the noun phrase "technical difficulties".',
    },
    {
      id: 'cp_a2_137_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks for a polite deadline extension?',
      options: [
        { id: 'opt_1', text: 'Would it be possible to extend the deadline by two days?', isCorrect: true },
        { id: 'opt_2', text: 'You must give us two days more right now.', isCorrect: false },
        { id: 'opt_3', text: 'We are extending deadline because we want.', isCorrect: false },
      ],
      correctAnswer: 'Would it be possible to extend the deadline by two days?',
      explanation: '"Would it be possible to..." is a professional, polite negotiation phrase.',
    },
    {
      id: 'cp_a2_137_3',
      type: 'multiple_choice',
      prompt: 'Which connector introduces the direct outcome of a previous event?',
      options: [
        { id: 'opt_1', text: 'As a result, we have deployed two extra technicians.', isCorrect: true },
        { id: 'opt_2', text: 'Because of, we deployed technicians.', isCorrect: false },
        { id: 'opt_3', text: 'Due to, we deployed technicians.', isCorrect: false },
      ],
      correctAnswer: 'As a result, we have deployed two extra technicians.',
      explanation: '"As a result" connects a cause to its resulting consequence or action.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_137_1',
      scenarioContext: 'Explain the reason for a software delay.',
      prompt: 'Build: "The delay is due to unexpected server maintenance."',
      targetStructure: 'Subject + is due to + adjective + noun phrase',
      wordBank: ['The', 'delay', 'is', 'due', 'to', 'unexpected', 'server', 'maintenance', 'because', 'resulting'],
      acceptableSolutions: [
        'The delay is due to unexpected server maintenance',
        'The delay is due to unexpected server maintenance.',
      ],
      explanation: 'Uses "due to" followed by a noun phrase.',
    },
    {
      id: 'sc_a2_137_2',
      scenarioContext: 'Request a deadline extension politely.',
      prompt: 'Build: "Would it be possible to extend the deadline until Friday?"',
      targetStructure: 'Would it be possible to + base verb + noun phrase + prepositional phrase',
      wordBank: ['Would', 'it', 'be', 'possible', 'to', 'extend', 'the', 'deadline', 'until', 'Friday', 'extending', 'can'],
      acceptableSolutions: [
        'Would it be possible to extend the deadline until Friday',
        'Would it be possible to extend the deadline until Friday?',
      ],
      explanation: 'Polite professional request formula.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_137_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Thanks for meeting on short notice. The client, GreenWave Logistics, expects their portal to go live tomorrow at 9:00 AM. Are all systems ready, or do we have any blockers?',
      partnerAudioText:
        'Hi! Thanks for meeting on short notice. The client, GreenWave Logistics, expects their portal to go live tomorrow at 9:00 AM. Are all systems ready, or do we have any blockers?',
      partnerQuestionHindi:
        'नमस्ते! कम समय के नोटिस पर मिलने के लिए धन्यवाद। ग्राहक, ग्रीनवेव लॉजिस्टिक्स, उम्मीद करता है कि उनका पोर्टल कल सुबह 9:00 बजे लाइव हो जाएगा। क्या सभी सिस्टम तैयार हैं, या हमारे पास कोई बाधाएं हैं?',
      expectedFunction: 'Explain Problem & State Cause (due to / because of / bottleneck / delay)',
      contextGoal:
        'Politely break the news that we are facing a delay due to an unexpected server error and database bottleneck during system testing.',
      targetVocabulary: ['I’m afraid we have a slight delay', 'due to a database migration issue', 'because of server downtime', 'encountered an unexpected bottleneck'],
      suggestedResponses: [
        {
          label: 'Structured Explanation',
          text: 'I’m afraid we are facing a slight delay due to unexpected database migration errors during our final testing. Because of this issue, the portal is not fully stable yet.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Problem Statement',
          text: 'We have encountered a delay due to server maintenance and database bottlenecks. It is not ready for tomorrow morning.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Delay & Cause (delay / blocker / problem / due to / because of / server / database / error / maintenance)',
          patterns: ['delay', 'blocker', 'problem', 'due to', 'because of', 'server', 'database', 'error', 'maintenance', 'testing', 'bottleneck'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'due_to_verb_rule',
          pattern: /\bdue to the server crashed\b/i,
          errorType: 'grammar',
          message: 'Use "due to" with a noun phrase ("due to a server crash") or "because" with a clause ("because the server crashed").',
          correctionPattern: 'due to a server crash',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_137_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The delay occurred ___ (due to / because) a hardware failure."',
        options: [
          { id: 'opt_1', text: 'due to', isCorrect: true },
          { id: 'opt_2', text: 'because', isCorrect: false },
          { id: 'opt_3', text: 'as', isCorrect: false },
        ],
        correctAnswer: 'due to',
        explanation: 'Use "due to" before noun phrases.',
      },
    },
    {
      id: 'turn_a2_137_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh dear, that is a concern. The client has already prepared their press release for Wednesday. How much extra time do your engineers need to resolve this, and what is your proposed timeline?',
      partnerAudioText:
        'Oh dear, that is a concern. The client has already prepared their press release for Wednesday. How much extra time do your engineers need to resolve this, and what is your proposed timeline?',
      partnerQuestionHindi:
        'अरे, यह चिंता की बात है। ग्राहक ने बुधवार के लिए अपनी प्रेस विज्ञप्ति पहले ही तैयार कर ली है। आपके इंजीनियरों को इसे हल करने के लिए कितने अतिरिक्त समय की आवश्यकता है, और आपकी प्रस्तावित समय-सीमा क्या है?',
      expectedFunction: 'Propose Adjusted Timeline & Request Extension (Would it be possible to... / 48 hours / extension / Friday)',
      contextGoal:
        'Propose an adjusted timeline: politely ask for a 48-hour extension so testing can finish by Thursday afternoon or Friday morning.',
      targetVocabulary: ['would it be possible to extend the deadline', 'request a 48-hour extension', 'complete security testing by Thursday', 'go live on Friday morning'],
      suggestedResponses: [
        {
          label: 'Diplomatic Proposal',
          text: 'Would it be possible to request a 48-hour extension? As a result of having two extra engineers on the case, we will finish testing by Thursday afternoon and launch safely on Friday morning.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Request',
          text: 'We need 48 hours. Could we move the release date to Friday morning to ensure full security?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Extension & Timeline (extension / 48 hours / two days / friday / thursday / extend / timeline / would it be possible)',
          patterns: ['extension', '48 hours', 'two days', 'friday', 'thursday', 'extend', 'timeline', 'would it be possible', 'could we'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_137_2',
        type: 'multiple_choice',
        prompt: 'Which option is most polite for requesting more time?',
        options: [
          { id: 'opt_1', text: 'Would it be possible to extend the deadline by two days?', isCorrect: true },
          { id: 'opt_2', text: 'Give us two days extension now.', isCorrect: false },
          { id: 'opt_3', text: 'We must have more days.', isCorrect: false },
        ],
        correctAnswer: 'Would it be possible to extend the deadline by two days?',
        explanation: 'Polite conditional structure for client negotiation.',
      },
    },
    {
      id: 'turn_a2_137_3',
      turnIndex: 3,
      partnerPrompt:
        'I understand. It’s better to launch a stable platform than risk a broken rollout. What concrete steps have you taken to ensure no further issues occur before Thursday?',
      partnerAudioText:
        'I understand. It’s better to launch a stable platform than risk a broken rollout. What concrete steps have you taken to ensure no further issues occur before Thursday?',
      partnerQuestionHindi:
        'मैं समझती हूँ। टूटे हुए रोलआउट के जोखिम की तुलना में एक स्थिर मंच लॉन्च करना बेहतर है। गुरुवार से पहले कोई अन्य समस्या न हो, यह सुनिश्चित करने के लिए आपने क्या ठोस कदम उठाए हैं?',
      expectedFunction: 'Detail Corrective Actions & Ask Follow-up Question (As a result / assigned / testing / Could you inform the client...?)',
      contextGoal:
        'Explain corrective steps: backup servers have been deployed and manual validation is running; ask Chloe if she can update the client account team.',
      targetVocabulary: ['as a result, we assigned senior developers', 'deployed backup servers', 'running automated tests continuously', 'Could you explain this to the client?'],
      suggestedResponses: [
        {
          label: 'Action Plan with Follow-up Question',
          text: 'As a result of the outage, we have assigned two senior developers to monitor the database and run automated checks. Could you explain the updated timeline to the client this afternoon?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Action Summary',
          text: 'We have deployed backup servers and are running extra tests. Could you update GreenWave Logistics on our new schedule?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Corrective Action (assigned / backup / developers / tests / fixed / monitoring / as a result)',
          patterns: ['assigned', 'backup', 'developers', 'tests', 'fixed', 'monitoring', 'as a result', 'steps', 'deployed'],
          required: true,
        },
        {
          name: 'Follow-up Question (could you / would you / can you / client / update / inform / ?)',
          patterns: ['could you', 'would you', 'can you', 'client', 'update', 'inform', 'tell', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_137_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "___ (As a result / Because of), we assigned extra staff."',
        options: [
          { id: 'opt_1', text: 'As a result', isCorrect: true },
          { id: 'opt_2', text: 'Because of', isCorrect: false },
          { id: 'opt_3', text: 'Due to', isCorrect: false },
        ],
        correctAnswer: 'As a result',
        explanation: '"As a result" is followed by a complete sentence expressing outcome.',
      },
    },
    {
      id: 'turn_a2_137_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, I will call GreenWave right now and explain that Friday’s release guarantees complete data security. Please send me a brief bullet-point summary by 2:00 PM.',
      partnerAudioText:
        'Yes, I will call GreenWave right now and explain that Friday’s release guarantees complete data security. Please send me a brief bullet-point summary by 2:00 PM.',
      partnerQuestionHindi:
        'हाँ, मैं अभी ग्रीनवेव को फोन करूंगी और समझाऊंगी कि शुक्रवार का रिलीज पूर्ण डेटा सुरक्षा की गारंटी देता है। कृपया मुझे दोपहर 2:00 बजे तक एक संक्षिप्त बुलेट-पॉइंट सारांश भेजें।',
      expectedFunction: 'Confirm Agreement & Final Action (That sounds great / I will email the summary / thanks Chloe)',
      contextGoal:
        'Confirm that you will send the bullet-point summary before 2:00 PM and thank Chloe for managing the client communication.',
      targetVocabulary: ['That sounds great', 'I will email the summary before 2:00 PM', 'appreciate your support', 'keep you posted'],
      suggestedResponses: [
        {
          label: 'Professional Confirmation',
          text: 'That sounds great, Chloe. I will email you the bullet-point summary and test metrics before 2:00 PM. Thank you for your support with the client!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Direct Confirmation',
          text: 'I understand. I will send the summary by 2:00 PM. Thanks for handling the call.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation (sounds great / understood / email / summary / 2:00 / thanks / thank you)',
          patterns: ['sounds great', 'understood', 'email', 'summary', '2:00', '2 pm', 'thanks', 'thank you', 'send'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_137_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most appropriate?',
        options: [
          { id: 'opt_1', text: 'I will email the summary before 2:00 PM. Thank you for your support!', isCorrect: true },
          { id: 'opt_2', text: 'I email summary on 2:00 PM now.', isCorrect: false },
          { id: 'opt_3', text: 'Summary will send by me fast.', isCorrect: false },
        ],
        correctAnswer: 'I will email the summary before 2:00 PM. Thank you for your support!',
        explanation: 'Clear future commitment with professional courtesy.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 75,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 60,
  },
};
