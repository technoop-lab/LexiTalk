import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_177: ConversationDefinition = {
  id: 'conv_a2_177',
  title: 'Crisis Management, System Outage & Public Relations Transparency',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_177'],
  estimatedMinutes: 5,
  scenario:
    'You are in the emergency incident command room at CloudScale Enterprise in London with Chief Communications Officer Claire Sterling during a high-severity global cloud outage impacting 50,000 enterprise users. You need to manage customer communication, structure official transparency bulletins using passive reporting ("The root cause has been isolated", "A hotfix is currently being deployed"), take proactive accountability with formal apologies ("We sincerely apologize for the disruption"), and communicate rolling hourly recovery timelines.',
  communicativeGoals: [
    'Draft and deliver clear, reassuring crisis communications during a major service outage',
    'Use passive reporting verbs in the Present Perfect and Present Continuous ("has been identified", "is currently being deployed")',
    'Express sincere, professional corporate apologies without accepting premature legal liabilities',
    'Provide structured status updates, mitigation milestones, and hourly timeline projections',
  ],
  canDoStatements: [
    'Can communicate transparently and calmly during an unexpected business crisis in English',
    'Can use passive voice constructions to report ongoing incident investigations and fixes',
    'Can formulate formal apologies and commit to clear recovery timelines',
  ],
  characters: [
    {
      id: 'char_claire_sterling',
      name: 'Claire Sterling',
      role: 'Chief Communications Officer',
      avatar: '🛡️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'outage',
        ipa: '/ˈaʊtɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'A period when a power supply, server, or other service is not available',
        exampleSentence: 'The unexpected cloud outage affected payment processing for forty-five minutes.',
        translations: { hi: 'सेवा में रुकावट / आउटेज' },
      },
      {
        word: 'transparency',
        ipa: '/trænsˈpærənsi/',
        partOfSpeech: 'noun',
        meaning: 'The quality of being open, honest, and easy to perceive or understand',
        exampleSentence: 'Maintaining transparency during an incident preserves client trust.',
        translations: { hi: 'पारदर्शिता' },
      },
      {
        word: 'mitigation',
        ipa: '/ˌmɪtɪˈɡeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of reducing the severity, seriousness, or painfulness of something',
        exampleSentence: 'Our immediate mitigation plan restored read-only access within ten minutes.',
        translations: { hi: 'शमन / प्रभाव को कम करने का उपाय' },
      },
      {
        word: 'accountability',
        ipa: '/əˌkaʊntəˈbɪləti/',
        partOfSpeech: 'noun',
        meaning: 'The fact or condition of being accountable; responsibility',
        exampleSentence: 'Taking prompt accountability strengthens our enterprise partnerships.',
        translations: { hi: 'जवाबदेही / उत्तरदायित्व' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The root cause of the outage has been identified, and a hotfix is currently being deployed.',
        functionCategory: 'Reporting Incident Status with Passive Voice',
        exampleSentence: 'The database cluster has been restored.',
      },
      {
        phrase: 'We sincerely apologize for the disruption caused to your business operations.',
        functionCategory: 'Formal Corporate Apology Formulation',
        exampleSentence: 'We deeply regret any inconvenience caused.',
      },
      {
        phrase: 'We will be publishing hourly progress bulletins on our live status dashboard.',
        functionCategory: 'Commitment to Scheduled Cadence Updates',
        exampleSentence: 'We will provide regular updates every thirty minutes.',
      },
      {
        phrase: 'Full service restoration is projected within forty-five minutes.',
        functionCategory: 'Stating Projected Recovery Timeframe',
        exampleSentence: 'Normal operations are expected by two PM.',
      },
    ],
    grammar: {
      title: 'Passive Reporting Structures in Crisis Communications & Formal Apologies',
      conceptExplanation:
        '1. Present Perfect Passive: "Subject + has/have been + Past Participle" (e.g., "The bug has been isolated", "All failover systems have been activated"). Emphasizes completed diagnostic steps.\n2. Present Continuous Passive: "Subject + is/are being + Past Participle" (e.g., "The patch is currently being tested", "Traffic is being rerouted"). Emphasizes active recovery efforts in progress.\n3. Formal Apology Framing: "We sincerely apologize for [Noun Phrase / -ing]" (e.g., "We sincerely apologize for the delay").',
      patternFormula: 'Subject + has been [Past Participle] | Subject + is currently being [Past Participle] | We sincerely apologize for + [Noun Phrase]',
      contrastExamples: [
        {
          incorrect: 'Our engineers are break the database so we say sorry and fixing it right now.',
          correct: 'The database disruption has been isolated, and an emergency patch is currently being deployed. We sincerely apologize for the inconvenience.',
          explanation: 'Use professional passive reporting ("has been isolated", "is currently being deployed") and formal apologies.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Claire Sterling',
        text: 'Incident Command, Claire speaking. Fifty thousand enterprise users cannot access the portal. What is our technical status and how should we communicate this to the public?',
        translation: 'इंसिडेंट कमांड, क्लेयर बोल रही हूँ। पचास हजार एंटरप्राइज उपयोगकर्ता पोर्टल तक नहीं पहुंच पा रहे हैं। हमारी तकनीकी स्थिति क्या है और हमें इसे जनता तक कैसे पहुंचाना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'The database bottleneck has been identified, and an emergency hotfix is currently being deployed. We should issue an immediate status bulletin apologizing sincerely for the disruption.',
        translation: 'डेटाबेस अड़चन की पहचान कर ली गई है, और एक आपातकालीन हॉटफिक्स वर्तमान में तैनात किया जा रहा है। हमें व्यवधान के लिए ईमानदारी से माफी मांगते हुए एक तत्काल स्थिति बुलेटिन जारी करना चाहिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_177_1',
      type: 'fill_blank',
      prompt: 'Complete the status report: "The network bug ___ (has been isolated / isolated) and a fix ___ (is currently being tested / is currently test)."',
      options: [
        { id: 'opt_1', text: 'has been isolated / is currently being tested', isCorrect: true },
        { id: 'opt_2', text: 'has isolated / is currently testing', isCorrect: false },
        { id: 'opt_3', text: 'was isolate / is being test', isCorrect: false },
      ],
      correctAnswer: 'has been isolated / is currently being tested',
      explanation: 'Use Present Perfect Passive ("has been isolated") and Present Continuous Passive ("is being tested").',
    },
    {
      id: 'cp_a2_177_2',
      type: 'multiple_choice',
      prompt: 'Which sentence formulates a formal corporate apology correctly?',
      options: [
        { id: 'opt_1', text: 'We sincerely apologize for the disruption caused to your business operations.', isCorrect: true },
        { id: 'opt_2', text: 'We say very sorry that computer broke down.', isCorrect: false },
        { id: 'opt_3', text: 'Apologizing for everyone because server died.', isCorrect: false },
      ],
      correctAnswer: 'We sincerely apologize for the disruption caused to your business operations.',
      explanation: 'Formal, empathetic, and professional language.',
    },
    {
      id: 'cp_a2_177_3',
      type: 'multiple_choice',
      prompt: 'Which phrase states an active recovery process in the passive voice?',
      options: [
        { id: 'opt_1', text: 'Customer traffic is currently being rerouted through our Dublin data center.', isCorrect: true },
        { id: 'opt_2', text: 'Customer traffic is currently reroute by Dublin.', isCorrect: false },
        { id: 'opt_3', text: 'Customer traffic is being reroute Dublin.', isCorrect: false },
      ],
      correctAnswer: 'Customer traffic is currently being rerouted through our Dublin data center.',
      explanation: 'Present Continuous Passive: "is currently being rerouted".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_177_1',
      scenarioContext: 'Report a completed diagnostic step in the passive voice.',
      prompt: 'Build: "The root cause has been isolated by our engineering team."',
      targetStructure: 'The root cause has been isolated by our engineering team',
      wordBank: ['The', 'root', 'cause', 'has', 'been', 'isolated', 'by', 'our', 'engineering', 'team', 'isolating', 'was'],
      acceptableSolutions: [
        'The root cause has been isolated by our engineering team.',
      ],
      explanation: 'Present Perfect Passive structure.',
    },
    {
      id: 'sc_a2_177_2',
      scenarioContext: 'Express a formal apology for disruption.',
      prompt: 'Build: "We sincerely apologize for the disruption to your service."',
      targetStructure: 'We sincerely apologize for the disruption to your service',
      wordBank: ['We', 'sincerely', 'apologize', 'for', 'the', 'disruption', 'to', 'your', 'service', 'apologizing', 'are'],
      acceptableSolutions: [
        'We sincerely apologize for the disruption to your service.',
      ],
      explanation: 'Standard formal corporate apology structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_177_1',
      turnIndex: 1,
      partnerPrompt:
        'Incident Command, Claire speaking. Our European cloud servers experienced a sudden failover failure twenty minutes ago, locking out over fifty thousand users. What is the current diagnostic status, and what message should we release immediately on our public status page?',
      partnerAudioText:
        'Incident Command, Claire speaking. Our European cloud servers experienced a sudden failover failure twenty minutes ago, locking out over fifty thousand users. What is the current diagnostic status, and what message should we release immediately on our public status page?',
      partnerQuestionHindi:
        'इंसिडेंट कमांड, क्लेयर बोल रही हूँ। हमारे यूरोपीय क्लाउड सर्वरों में बीस मिनट पहले अचानक फेलओवर विफलता का अनुभव हुआ, जिससे पचास हजार से अधिक उपयोगकर्ता लॉक हो गए। वर्तमान नैदानिक स्थिति क्या है, और हमें अपने सार्वजनिक स्थिति पृष्ठ पर तुरंत क्या संदेश जारी करना चाहिए?',
      expectedFunction: 'Report Diagnostic Status using Passive Voice & Propose Immediate Public Bulletin',
      contextGoal:
        'State that the database bottleneck has been isolated and a patch is currently being deployed, while apologizing sincerely for the downtime.',
      targetVocabulary: ['The root cause has been isolated', 'a hotfix is currently being deployed', 'We sincerely apologize for the disruption'],
      suggestedResponses: [
        {
          label: 'Passive Diagnostic Status & Sincere Apology',
          text: 'The root cause has been isolated to a faulty caching layer, and an emergency hotfix is currently being deployed. We should publish a bulletin stating that we sincerely apologize for the disruption and are actively restoring services.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Transparent Incident Statement',
          text: 'Traffic is currently being rerouted through our Frankfurt secondary cluster. We have identified the failure point and should reassure customers that data integrity remains one hundred percent intact.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Passive Diagnostic / Fix (has been isolated / has been identified / is currently being deployed / is being rerouted / hotfix)',
          patterns: ['has been isolated', 'has been identified', 'is currently being deployed', 'is being rerouted', 'hotfix', 'patch', 'restoring'],
          required: true,
        },
        {
          name: 'Public Apology & Reassurance (sincerely apologize / disruption / bulletin / data integrity / reassure / transparency)',
          patterns: ['sincerely apologize', 'disruption', 'bulletin', 'data integrity', 'reassure', 'transparency', 'apologize'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_passive_continuous_form',
          pattern: 'is currently deploy|is currently being deploy',
          errorType: 'grammar',
          message: 'Present continuous passive requires the past participle: "is currently being deployed".',
          correctionPattern: 'An emergency hotfix is currently being deployed',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_177_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The software patch ___ (is currently being applied / is currently apply) to all nodes."',
        options: [
          { id: 'opt_1', text: 'is currently being applied', isCorrect: true },
          { id: 'opt_2', text: 'is currently apply', isCorrect: false },
          { id: 'opt_3', text: 'has currently apply', isCorrect: false },
        ],
        correctAnswer: 'is currently being applied',
        explanation: 'Present continuous passive requires "is being + past participle (applied)".',
      },
    },
    {
      id: 'turn_a2_177_2',
      turnIndex: 2,
      partnerPrompt:
        'Key enterprise clients and industry journalists are demanding an exact timeline for full restoration. How should we communicate our recovery milestones without making promises we might not meet?',
      partnerAudioText:
        'Key enterprise clients and industry journalists are demanding an exact timeline for full restoration. How should we communicate our recovery milestones without making promises we might not meet?',
      partnerQuestionHindi:
        'प्रमुख एंटरप्राइज ग्राहक और उद्योग पत्रकार पूर्ण बहाली के लिए एक सटीक समय-सीमा की मांग कर रहे हैं। हमें ऐसे वादे किए बिना अपने पुनर्प्राप्ति मील के पत्थरों को कैसे संप्रेषित करना चाहिए जिन्हें हम पूरा नहीं कर सकें?',
      expectedFunction: 'Provide Measured Timeline Projection & Commit to Rolling Hourly Cadence',
      contextGoal:
        'State that core services are projected to recover within 45 minutes, and commit to hourly live updates until full resolution.',
      targetVocabulary: ['Full recovery is projected within forty-five minutes', 'commit to hourly progress updates', 'transparent status tracking'],
      suggestedResponses: [
        {
          label: 'Measured Timeline & Hourly Cadence Commitment',
          text: 'We should project core database restoration within forty-five minutes, while committing to hourly progress updates on our status portal so stakeholders receive continuous transparency.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Staged Recovery Communication',
          text: 'Let us inform clients that read-only access has already been restored, with full read-write capabilities expected by two PM. We will provide our next formal briefing in exactly thirty minutes.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Projected Recovery (projected within / expected by / forty-five minutes / two pm / restoration / read-only)',
          patterns: ['projected within', 'expected by', 'forty-five minutes', 'two pm', 'restoration', 'read-only', 'recovered'],
          required: true,
        },
        {
          name: 'Cadence / Transparency (hourly / thirty minutes / status portal / briefing / continuous / updates / transparency)',
          patterns: ['hourly', 'thirty minutes', 'status portal', 'briefing', 'continuous', 'updates', 'transparency', 'stakeholders'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_177_2',
        type: 'multiple_choice',
        prompt: 'Which statement communicates crisis recovery timelines with balanced caution?',
        options: [
          { id: 'opt_1', text: 'Full service restoration is projected within forty-five minutes, with updates every thirty minutes.', isCorrect: true },
          { id: 'opt_2', text: 'I guarantee 100% everything fixed in one second.', isCorrect: false },
          { id: 'opt_3', text: 'We do not know when it works maybe tomorrow.', isCorrect: false },
        ],
        correctAnswer: 'Full service restoration is projected within forty-five minutes, with updates every thirty minutes.',
        explanation: 'Balanced, credible, and sets a clear communication cadence.',
      },
    },
    {
      id: 'turn_a2_177_3',
      turnIndex: 3,
      partnerPrompt:
        'The hotfix was just deployed and all latency indicators have returned to green! What post-incident actions should we outline to restore full client confidence?',
      partnerAudioText:
        'The hotfix was just deployed and all latency indicators have returned to green! What post-incident actions should we outline to restore full client confidence?',
      partnerQuestionHindi:
        'हॉटफिक्स अभी तैनात किया गया था और सभी विलंबता संकेतक हरे रंग में लौट आए हैं! पूर्ण ग्राहक विश्वास बहाल करने के लिए हमें किन पोस्ट-इंसिडेंट कार्रवाइयों की रूपरेखा तैयार करनी चाहिए?',
      expectedFunction: 'Announce Full Recovery & Commit to Transparent Post-Mortem RCA Report',
      contextGoal:
        'Confirm 100% service recovery and promise a comprehensive Root Cause Analysis (RCA) report within 24 hours.',
      targetVocabulary: ['all systems are fully operational', 'publish a detailed Root Cause Analysis within twenty-four hours', 'implement preventative safeguards'],
      suggestedResponses: [
        {
          label: 'Announce Recovery & Promise Transparent RCA',
          text: 'We can now officially announce that all systems are fully operational. To ensure lasting confidence, we will publish a comprehensive Root Cause Analysis report within twenty-four hours detailing our preventative safeguards.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Post-Mortem & Preventative Measures',
          text: 'We should confirm complete resolution on our status page and invite affected enterprise partners to a technical debrief. Demonstrating our structural improvements will turn this crisis into proof of our reliability.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Resolution Confirmation (fully operational / complete resolution / systems are normal / green / restored)',
          patterns: ['fully operational', 'complete resolution', 'systems are normal', 'green', 'restored', 'operating'],
          required: true,
        },
        {
          name: 'Post-Mortem / Safeguards (root cause analysis / rca / twenty-four hours / preventative safeguards / debrief / report)',
          patterns: ['root cause analysis', 'rca', 'twenty-four hours', 'preventative safeguards', 'debrief', 'report', 'safeguards'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_177_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We will publish the RCA report ___ (within twenty-four hours / in twenty-four hours of time)."',
        options: [
          { id: 'opt_1', text: 'within twenty-four hours', isCorrect: true },
          { id: 'opt_2', text: 'in twenty-four hours of time', isCorrect: false },
          { id: 'opt_3', text: 'inside twenty-four hours', isCorrect: false },
        ],
        correctAnswer: 'within twenty-four hours',
        explanation: '"within twenty-four hours" is the standard professional timeframe idiom.',
      },
    },
    {
      id: 'turn_a2_177_4',
      turnIndex: 4,
      partnerPrompt:
        'Outstanding crisis leadership! You kept our communication transparent, factual, and reassuring throughout the outage. I will publish the recovery statement and schedule the RCA debrief. Thank you!',
      partnerAudioText:
        'Outstanding crisis leadership! You kept our communication transparent, factual, and reassuring throughout the outage. I will publish the recovery statement and schedule the RCA debrief. Thank you!',
      partnerQuestionHindi:
        'उत्कृष्ट संकट नेतृत्व! आपने पूरे आउटेज के दौरान हमारे संचार को पारदर्शी, तथ्यात्मक और आश्वस्त करने वाला बनाए रखा। मैं बहाली का बयान प्रकाशित करूँगी और आरसीए डीब्रीफ निर्धारित करूँगी। धन्यवाद!',
      expectedFunction: 'Express Mutual Appreciation & Close Incident Command Operations',
      contextGoal:
        'Thank Claire, confirm you will draft the technical RCA draft, and stand down incident command.',
      targetVocabulary: ['thank you Claire', 'draft the technical post-mortem', 'team handled the incident with great discipline'],
      suggestedResponses: [
        {
          label: 'Professional Incident Stand-Down',
          text: 'Thank you, Claire. Our engineering and communications teams coordinated seamlessly today. I will have the technical post-mortem draft ready for your review by morning.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Closing Incident Review',
          text: 'Thank you for your steady guidance during this incident. I will monitor server telemetry for the next two hours to guarantee stability. Have a restful evening!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / claire / appreciate / steady guidance / coordinated)',
          patterns: ['thank you', 'thanks', 'claire', 'appreciate', 'steady guidance', 'coordinated', 'great'],
          required: true,
        },
        {
          name: 'Follow-up & Monitoring (post-mortem / telemetry / stability / morning / monitoring / evening)',
          patterns: ['post-mortem', 'telemetry', 'stability', 'morning', 'monitoring', 'evening', 'rca'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_177_4',
        type: 'multiple_choice',
        prompt: 'Which closing remark is best for standing down after an incident command session?',
        options: [
          { id: 'opt_1', text: 'Thank you, Claire. I will prepare the technical post-mortem draft for tomorrow morning.', isCorrect: true },
          { id: 'opt_2', text: 'Crisis done goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'Servers fixed I sleep now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Claire. I will prepare the technical post-mortem draft for tomorrow morning.',
        explanation: 'Professional, calm, and reinforces long-term engineering rigor.',
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
