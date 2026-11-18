import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_163: ConversationDefinition = {
  id: 'conv_a2_163',
  title: 'Digital Communication, Remote Collaboration & Virtual Etiquette',
  cefr: 'A2',
  unitId: 'unit_a2_11',
  lessonLinks: ['lesson_a2_11_163'],
  estimatedMinutes: 5,
  scenario:
    'You are in a virtual sprint planning conference on Zoom with remote tech lead Kevin Zhao. You are onboarding remote team members and establishing digital communication standards. You will manage video/audio settings, use "be supposed to" for workplace expectations ("We are supposed to keep our cameras on during standups"), make polite modal requests ("Could you possibly mute your mic?", "Would you mind sharing your screen?"), troubleshoot audio lag, and establish asynchronous communication rules.',
  communicativeGoals: [
    'Navigate virtual video conference etiquette, microphone management, and screen sharing politely',
    'Use "be supposed to" to explain schedules, workplace expectations, and team rules',
    'Make polite remote requests with "Could you possibly...?" and "Would you mind + -ing...?"',
    'Report technical difficulties (lag, audio echo, background noise) professionally and suggest fixes',
  ],
  canDoStatements: [
    'Can manage audio, video, and screen sharing politely during virtual video conferences at A2 level',
    'Can explain team rules and schedules using "be supposed to"',
    'Can politely troubleshoot technical connection issues and background noise',
  ],
  characters: [
    {
      id: 'char_kevin_zhao',
      name: 'Kevin Zhao',
      role: 'Remote Engineering Lead',
      avatar: '👨‍💻',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'mute',
        ipa: '/mjuːt/',
        partOfSpeech: 'verb',
        meaning: 'To turn off the microphone or sound on a digital call or device',
        exampleSentence: 'Please mute your microphone when you are not speaking to reduce background noise.',
        translations: { hi: 'म्यूट करना / आवाज बंद करना' },
      },
      {
        word: 'be supposed to',
        ipa: '/biː səˈpəʊzd tuː/',
        partOfSpeech: 'phrase',
        meaning: 'To be expected or required to do something according to a rule, schedule, or agreement',
        exampleSentence: 'We are supposed to submit our weekly pull requests by Friday afternoon.',
        translations: { hi: 'अपेक्षित होना / नियम के अनुसार होना' },
      },
      {
        word: 'lag',
        ipa: '/læɡ/',
        partOfSpeech: 'noun',
        meaning: 'A delay or slowness in audio or video streaming over an internet connection',
        exampleSentence: 'There is a slight audio lag due to low Wi-Fi bandwidth.',
        translations: { hi: 'लैग / देरी / रुकावट' },
      },
      {
        word: 'asynchronous',
        ipa: '/eɪˈsɪŋkrənəs/',
        partOfSpeech: 'adjective',
        meaning: 'Not occurring at the same time; communication where participants respond at their own convenience',
        exampleSentence: 'We use Slack channels for asynchronous updates across time zones.',
        translations: { hi: 'असमकालिक / अलग-अलग समय पर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you possibly mute your microphone when you aren’t presenting?',
        functionCategory: 'Polite Virtual Meeting Requests',
        exampleSentence: 'Could you possibly repeat that last sentence?',
      },
      {
        phrase: 'Would you mind sharing your screen so we can see the demo slides?',
        functionCategory: 'Screen Sharing Requests with "Would you mind + -ing"',
        exampleSentence: 'Would you mind turning on your camera?',
      },
      {
        phrase: 'We are supposed to post our daily updates on the team board before 10 AM.',
        functionCategory: 'Stating Workplace Rules with "Be supposed to"',
        exampleSentence: 'You are supposed to log your hours daily.',
      },
      {
        phrase: 'I think there is a slight echo on the line; let me reconnect my headset.',
        functionCategory: 'Troubleshooting Audio & Video Difficulties',
        exampleSentence: 'Your video is freezing slightly.',
      },
    ],
    grammar: {
      title: 'Expectation Modals ("Be supposed to") & Polite Remote Requests',
      conceptExplanation:
        '1. "Be supposed to + [Base Verb]": Used to describe expectations, duties, and team protocols (e.g., "We are supposed to record this meeting", "He is supposed to lead today’s standup").\n2. Polite Remote Requests:\n   - "Could you possibly + [Base Verb]?" (e.g., "Could you possibly mute your mic?")\n   - "Would you mind + [Verb-ing]?" (e.g., "Would you mind sharing your screen?").\n3. Troubleshooting Phrasing: "There is some lag / echo", "You\'re cutting out".',
      patternFormula: 'Subject + is/are supposed to + [Base Verb] | Could you possibly + [Base Verb]? | Would you mind + [Verb-ing]?',
      contrastExamples: [
        {
          incorrect: 'You must to mute your mic and we suppose to start now.',
          correct: 'Could you possibly mute your microphone? We are supposed to begin the sprint review now.',
          explanation: 'Use polite modal framing and "are supposed to + base verb".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Kevin Zhao',
        text: 'Hi team! Can everyone hear me clearly, or is there any background static on my audio feed?',
        translation: 'नमस्ते टीम! क्या हर कोई मुझे स्पष्ट रूप से सुन सकता है, या मेरे ऑडियो फीड पर कोई पृष्ठभूमि शोर है?',
      },
      {
        speaker: 'You',
        text: 'Your voice is very clear, Kevin! Could you possibly share your screen so we can review the sprint backlog?',
        translation: 'आपकी आवाज बहुत स्पष्ट है, केविन! क्या आप संभवतः अपनी स्क्रीन साझा कर सकते हैं ताकि हम स्प्रिंट बैकलॉग की समीक्षा कर सकें?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_163_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with an expectation modal: "All team members ___ (are supposed to / suppose to / are supposing to) mute their microphones during the presentation."',
      options: [
        { id: 'opt_1', text: 'are supposed to', isCorrect: true },
        { id: 'opt_2', text: 'suppose to', isCorrect: false },
        { id: 'opt_3', text: 'are supposing to', isCorrect: false },
      ],
      correctAnswer: 'are supposed to',
      explanation: 'Use "be supposed to + base verb" to express team rules and expectations.',
    },
    {
      id: 'cp_a2_163_2',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most polite formula for requesting screen sharing?',
      options: [
        { id: 'opt_1', text: 'Would you mind sharing your screen so we can see the roadmap?', isCorrect: true },
        { id: 'opt_2', text: 'Would you mind to share screen right now?', isCorrect: false },
        { id: 'opt_3', text: 'Share your screen immediately.', isCorrect: false },
      ],
      correctAnswer: 'Would you mind sharing your screen so we can see the roadmap?',
      explanation: '"Would you mind" must be followed by a gerund ("sharing").',
    },
    {
      id: 'cp_a2_163_3',
      type: 'multiple_choice',
      prompt: 'How do you politely report an audio echo during a remote conference call?',
      options: [
        { id: 'opt_1', text: 'I think there is a slight audio echo on the line; could you possibly check your headset?', isCorrect: true },
        { id: 'opt_2', text: 'Your microphone is broken fix it now.', isCorrect: false },
        { id: 'opt_3', text: 'Why is sound terrible?', isCorrect: false },
      ],
      correctAnswer: 'I think there is a slight audio echo on the line; could you possibly check your headset?',
      explanation: 'Diplomatic troubleshooting phrasing with polite request.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_163_1',
      scenarioContext: 'State a remote work rule.',
      prompt: 'Build: "We are supposed to join on time."',
      targetStructure: 'We are supposed to join + on time',
      wordBank: ['We', 'are', 'supposed', 'to', 'join', 'on', 'time', 'suppose', 'joining'],
      acceptableSolutions: [
        'We are supposed to join on time',
        'We are supposed to join on time.',
      ],
      explanation: '"Be supposed to + base verb".',
    },
    {
      id: 'sc_a2_163_2',
      scenarioContext: 'Ask for screen sharing politely.',
      prompt: 'Build: "Would you mind sharing your screen now?"',
      targetStructure: 'Would you mind sharing + your screen now',
      wordBank: ['Would', 'you', 'mind', 'sharing', 'your', 'screen', 'now', 'share', 'to'],
      acceptableSolutions: [
        'Would you mind sharing your screen now',
        'Would you mind sharing your screen now?',
      ],
      explanation: '"Would you mind + -ing".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_163_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi everyone! Welcome to our remote sprint kickoff call. Before we dive into the agenda, could you verify if my audio and video are working properly, and what are our protocol rules for camera and microphone usage?',
      partnerAudioText:
        'Hi everyone! Welcome to our remote sprint kickoff call. Before we dive into the agenda, could you verify if my audio and video are working properly, and what are our protocol rules for camera and microphone usage?',
      partnerQuestionHindi:
        'नमस्ते सभी को! हमारे दूरस्थ स्प्रिंट किकऑफ कॉल में आपका स्वागत है। इससे पहले कि हम एजेंडे पर चर्चा करें, क्या आप सत्यापित कर सकते हैं कि मेरा ऑडियो और वीडियो ठीक से काम कर रहे हैं, और कैमरा और माइक्रोफ़ोन के उपयोग के लिए हमारे प्रोटोकॉल नियम क्या हैं?',
      expectedFunction: 'Verify AV Quality & State Protocols with "Be supposed to" (Your audio is clear / We are supposed to keep our mics muted when not speaking and turn on video)',
      contextGoal:
        'Confirm Kevin\'s audio is clear, and state remote rules using "be supposed to" (e.g. we are supposed to mute mics when listening, turn cameras on for introductions).',
      targetVocabulary: ['Your audio and video are very clear', 'We are supposed to keep our microphones muted when not speaking', 'turn on cameras for introductions', 'minimize background noise'],
      suggestedResponses: [
        {
          label: 'Audio Check & Protocol with "Be supposed to"',
          text: 'Hi Kevin! Your audio and video are crystal clear. As for our protocol, we are supposed to keep our microphones muted when not presenting and keep cameras on during the sprint kickoff.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Check & Protocol',
          text: 'Everything looks and sounds great! We are supposed to stay muted during presentations to prevent background noise.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'AV Confirmation (clear / hear / see / working / sounds great / good / crystal clear)',
          patterns: ['clear', 'hear', 'see', 'working', 'sounds great', 'good', 'crystal clear', 'fine'],
          required: true,
        },
        {
          name: 'Expectation Modal & Protocol (are supposed to / supposed to / mute / mic / microphone / camera / video / protocol / rules)',
          patterns: ['are supposed to', 'supposed to', 'mute', 'mic', 'microphone', 'camera', 'video', 'protocol', 'rules', 'quiet'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_suppose_to',
          pattern: 'we suppose to mute|we are suppose to',
          errorType: 'grammar',
          message: 'Use "are supposed to" with a "d" (past participle form) for expectations.',
          correctionPattern: 'we are supposed to keep our microphones muted',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_163_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (are supposed to / are suppose to) mute our microphones when listening."',
        options: [
          { id: 'opt_1', text: 'are supposed to', isCorrect: true },
          { id: 'opt_2', text: 'are suppose to', isCorrect: false },
          { id: 'opt_3', text: 'suppose to', isCorrect: false },
        ],
        correctAnswer: 'are supposed to',
        explanation: 'The fixed expression is "be supposed to".',
      },
    },
    {
      id: 'turn_a2_163_2',
      turnIndex: 2,
      partnerPrompt:
        'Great! Now, let’s look at the new architecture diagram. Someone mentioned they couldn’t see the shared screen. Could you check if my screen share is visible, or would you mind opening the slide deck on your side?',
      partnerAudioText:
        'Great! Now, let’s look at the new architecture diagram. Someone mentioned they couldn’t see the shared screen. Could you check if my screen share is visible, or would you mind opening the slide deck on your side?',
      partnerQuestionHindi:
        'बहुत बढ़िया! अब, आइए नए आर्किटेक्चर आरेख पर नज़र डालें। किसी ने उल्लेख किया कि वे साझा की गई स्क्रीन नहीं देख सकते थे। क्या आप जांच सकते हैं कि मेरी स्क्रीन शेयर दिखाई दे रही है या नहीं, या क्या आप अपनी ओर से स्लाइड डेक खोलने में संकोच नहीं करेंगे?',
      expectedFunction: 'Troubleshoot Screen Share with Polite Modal Request (There is slight lag on your screen / Would you mind re-sharing or I can present the slides from my end)',
      contextGoal:
        'Explain that there is slight lag/freezing on the stream, use "Would you mind re-sharing..." or offer to share your screen from your local app.',
      targetVocabulary: ['There is a slight video lag', 'Would you mind re-sharing your screen?', 'Could you possibly paste the link in the chat?', 'I can present the slides from my side'],
      suggestedResponses: [
        {
          label: 'Polite Screen Request with "Would you mind"',
          text: 'There is a slight lag and your screen seems frozen. Would you mind stopping and re-sharing your screen, or could you possibly paste the slide link in the chat?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Troubleshooting & Screen Offer',
          text: 'Your screen is lagging slightly. Would you mind if I share the slides from my side to save bandwidth?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lag / Technical Issue (lag / frozen / freezing / blur / delay / can\'t see / bandwidth)',
          patterns: ['lag', 'frozen', 'freezing', 'blur', 'delay', 'cant see', 'can\'t see', 'bandwidth', 'stuck'],
          required: true,
        },
        {
          name: 'Polite Request / Action (would you mind / could you possibly / share / re-share / link / chat / present / slides)',
          patterns: ['would you mind', 'could you possibly', 'share', 're-share', 'reshare', 'link', 'chat', 'present', 'slides'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_163_2',
        type: 'multiple_choice',
        prompt: 'Which sentence asks someone to re-share their screen correctly and politely?',
        options: [
          { id: 'opt_1', text: 'Would you mind re-sharing your screen so the diagram refreshes?', isCorrect: true },
          { id: 'opt_2', text: 'Would you mind to re-share screen?', isCorrect: false },
          { id: 'opt_3', text: 'Re-share screen now because it broke.', isCorrect: false },
        ],
        correctAnswer: 'Would you mind re-sharing your screen so the diagram refreshes?',
        explanation: '"Would you mind + gerund (-ing)" is courteous and accurate.',
      },
    },
    {
      id: 'turn_a2_163_3',
      turnIndex: 3,
      partnerPrompt:
        'Re-sharing fixed it immediately! Thank you. Now, since our team is distributed across four time zones, how should we handle asynchronous questions and urgent bugs during the sprint?',
      partnerAudioText:
        'Re-sharing fixed it immediately! Thank you. Now, since our team is distributed across four time zones, how should we handle asynchronous questions and urgent bugs during the sprint?',
      partnerQuestionHindi:
        'पुनः साझा करने से यह तुरंत ठीक हो गया! धन्यवाद। अब, चूंकि हमारी टीम चार समय क्षेत्रों में फैली हुई है, इसलिए हमें स्प्रिंट के दौरान असमकालिक प्रश्नों और जरूरी बगों को कैसे संभालना चाहिए?',
      expectedFunction: 'Propose Asynchronous Communication Channels & Inquire on Response Times (We are supposed to post non-urgent questions on Slack / What is our expected response time for urgent bugs?)',
      contextGoal:
        'Suggest posting non-urgent queries on Slack/Jira asynchronously and ask Kevin what the expected response time is for high-priority blocker bugs.',
      targetVocabulary: ['asynchronous communication on Slack', 'post updates in the sprint channel', 'What is the expected response time for urgent blockers?', 'avoid unnecessary meetings'],
      suggestedResponses: [
        {
          label: 'Asynchronous Protocol & Question',
          text: 'We are supposed to post routine updates on Slack and log tasks in Jira. What is our expected response time for critical blocker bugs across time zones?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Channel Proposal & Question',
          text: 'We should use Slack for asynchronous questions. How quickly are we supposed to respond to urgent production alerts?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Asynchronous Tools (slack / jira / channel / async / asynchronous / board / message / post)',
          patterns: ['slack', 'jira', 'channel', 'async', 'asynchronous', 'board', 'message', 'post', 'updates'],
          required: true,
        },
        {
          name: 'Question on Response Time (response time / urgent / bugs / blockers / how quickly / when / ?)',
          patterns: ['response time', 'urgent', 'bugs', 'blockers', 'how quickly', 'when', 'expected', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_163_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (are supposed to / supposed to) log all bugs in Jira."',
        options: [
          { id: 'opt_1', text: 'are supposed to', isCorrect: true },
          { id: 'opt_2', text: 'supposed to', isCorrect: false },
          { id: 'opt_3', text: 'are suppose to', isCorrect: false },
        ],
        correctAnswer: 'are supposed to',
        explanation: 'Complete phrase: "are supposed to + base verb".',
      },
    },
    {
      id: 'turn_a2_163_4',
      turnIndex: 4,
      partnerPrompt:
        'Urgent blockers must receive a response within thirty minutes on the dedicated alert channel, while standard inquiries should be answered within four hours. Could you summarize our remote collaboration and meeting etiquette agreement?',
      partnerAudioText:
        'Urgent blockers must receive a response within thirty minutes on the dedicated alert channel, while standard inquiries should be answered within four hours. Could you summarize our remote collaboration and meeting etiquette agreement?',
      partnerQuestionHindi:
        'जरूरी अवरोधकों को समर्पित अलर्ट चैनल पर तीस मिनट के भीतर जवाब मिलना चाहिए, जबकि मानक पूछताछ का उत्तर चार घंटे के भीतर दिया जाना चाहिए। क्या आप हमारे दूरस्थ सहयोग और बैठक शिष्टाचार समझौते का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Remote Collaboration Guidelines & Close (To summarize, we mute mics, re-share screens when lagging, use Slack for async updates, and respond to blockers within 30 minutes)',
      contextGoal:
        'Summarize the key remote protocols: muted mics during presentations, camera on for kickoff, Slack for async queries, 30-min urgent blocker response, and thank Kevin.',
      targetVocabulary: ['To summarize our remote meeting etiquette', 'keep microphones muted when listening', 'share screens politely and resolve lag', 'asynchronous Slack communication', '30-minute response time for critical blockers', 'thank you Kevin'],
      suggestedResponses: [
        {
          label: 'Comprehensive Remote Etiquette Summary',
          text: 'To summarize our protocols: we are supposed to keep mics muted during presentations, manage screen sharing politely, use Slack for asynchronous updates, and respond to urgent blockers within thirty minutes. Thank you, Kevin!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Remote Summary',
          text: 'In summary: muted microphones, cameras on for kickoff, async communication on Slack, and thirty-minute response for urgent bugs. Great meeting, Kevin!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Signpost (to summarize / in summary / summary / protocols / agreed / so)',
          patterns: ['to summarize', 'in summary', 'summary', 'protocols', 'agreed', 'so'],
          required: true,
        },
        {
          name: 'Key Protocol Points (mute / mic / slack / 30 minutes / async / blocker / thank you / kevin)',
          patterns: ['mute', 'mic', 'slack', '30', 'thirty', 'async', 'blocker', 'urgent', 'thank you', 'kevin', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_163_4',
        type: 'multiple_choice',
        prompt: 'Which summary captures the remote collaboration protocols accurately?',
        options: [
          { id: 'opt_1', text: 'To summarize, we will mute mics during calls, use Slack for async updates, and respond to blockers in 30 minutes.', isCorrect: true },
          { id: 'opt_2', text: 'Remote work is cancelled goodbye.', isCorrect: false },
          { id: 'opt_3', text: 'I never check Slack again.', isCorrect: false },
        ],
        correctAnswer: 'To summarize, we will mute mics during calls, use Slack for async updates, and respond to blockers in 30 minutes.',
        explanation: 'Clear and structured remote etiquette summary.',
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
