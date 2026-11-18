import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_104: ConversationDefinition = {
  id: 'conv_a2_104',
  title: 'Digital Life & Communication (screen sharing, audio check, email attachments)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_104'],
  estimatedMinutes: 5,
  scenario:
    'You are joining a virtual video sprint retrospective with Senior Product Designer Nadia Al-Mansoor in Dubai. Check audio/video clarity, handle a brief microphone mute issue, share your screen to present user flow wireframes, explain that you sent an attachment via email, and navigate digital communication smoothly.',
  communicativeGoals: [
    'Perform virtual meeting checks and resolve minor tech issues (You are on mute, your voice is breaking up, let me turn on my camera)',
    'Initiate and confirm screen sharing (Can everyone see my screen?, Let me share the tab)',
    'Discuss digital artifacts, email attachments, and cloud document links (I sent the attachment by email, please check the link)',
    'Manage smooth digital handoffs and online meeting etiquette',
  ],
  canDoStatements: [
    'Can handle basic technical and communication issues in online calls and virtual meetings (CEFR A2)',
    'Can discuss emails, attachments, screen sharing, and online collaboration tools',
    'Can clarify and repair simple digital communication breakdowns',
  ],
  characters: [
    {
      id: 'char_nadia_al_mansoor',
      name: 'Nadia Al-Mansoor',
      role: 'Senior Product Designer',
      avatar: '💻',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'attachment',
        ipa: '/əˈtætʃmənt/',
        partOfSpeech: 'noun',
        meaning: 'A computer file sent with an email message',
        exampleSentence: 'I attached the design specifications in a PDF file.',
        translations: { hi: 'अटैचमेंट / संलग्न फ़ाइल' },
      },
      {
        word: 'mute',
        ipa: '/mjuːt/',
        partOfSpeech: 'adjective',
        meaning: 'Not emitting or producing sound; microphone turned off',
        exampleSentence: 'Sorry, I was on mute! Can you hear me now?',
        translations: { hi: 'म्यूट / आवाज़ बंद' },
      },
      {
        word: 'screen sharing',
        ipa: '/skriːn ˈʃeərɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'The process of sharing the contents of your computer screen with other participants in a video call',
        exampleSentence: 'Let me start screen sharing so we can review the wireframe.',
        translations: { hi: 'स्क्रीन शेयरिंग' },
      },
      {
        word: 'glitch',
        ipa: '/ɡlɪtʃ/',
        partOfSpeech: 'noun',
        meaning: 'A sudden, usually temporary malfunction or fault in equipment',
        exampleSentence: 'There was a small audio glitch, but the connection is clear now.',
        translations: { hi: 'तकनीकी खराबी / गड़बड़ी' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'You’re on mute, we can’t hear you.',
        functionCategory: 'Virtual Meeting Audio Repair',
        exampleSentence: 'Alex, you’re on mute; could you unmute your microphone?',
      },
      {
        phrase: 'Can everyone see my shared screen?',
        functionCategory: 'Screen Share Confirmation',
        exampleSentence: 'Can everyone see my shared screen clearly?',
      },
      {
        phrase: 'I sent the updated file as an attachment.',
        functionCategory: 'Digital File Transmission',
        exampleSentence: 'I sent the updated file as an attachment five minutes ago.',
      },
      {
        phrase: 'Your voice was breaking up slightly, could you repeat that?',
        functionCategory: 'Clarification & Repair',
        exampleSentence: 'Your audio broke up for a second, could you repeat that last point?',
      },
    ],
    grammar: {
      title: 'Digital Communication Phrases & Modal Politeness',
      conceptExplanation:
        'When collaborating online, use clear present structures for status ("You are on mute", "I am sharing my screen"), past simple for completed actions ("I sent the email", "I downloaded the file"), and polite modal requests for collaboration ("Could you please confirm receipt?", "Would you mind refreshing your browser?").',
      patternFormula: 'Status: Subject + be + [on mute / sharing screen] | File action: Subject + [sent / attached / uploaded] + Object',
      contrastExamples: [
        {
          incorrect: 'You are mute on audio.',
          correct: 'You\'re on mute. / You are muted.',
          explanation: 'Standard idiom in virtual meetings: "You\'re on mute".',
        },
        {
          incorrect: 'I am attach the document yesterday.',
          correct: 'I attached the document yesterday. / I have attached the document.',
          explanation: 'Use past tense for finished email attachments.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nadia Al-Mansoor',
        text: 'Hi Alex! Thanks for joining. We can see your video, but I think you might be on mute. Can you say a quick test?',
        translation: 'नमस्ते एलेक्स! शामिल होने के लिए धन्यवाद। हम आपका वीडियो देख सकते हैं, लेकिन मुझे लगता है कि आप म्यूट पर हो सकते हैं। क्या आप एक त्वरित परीक्षण कह सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Nadia! Apologies, my headset was muted. Can you hear me loud and clear now?',
        translation: 'नमस्ते नादिया! क्षमा करें, मेरा हेडसेट म्यूट था। क्या अब आप मुझे ज़ोर से और स्पष्ट सुन सकती हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_104_1',
      type: 'fill_blank',
      prompt: 'Complete the common virtual meeting phrase: "Sorry about that, I was ___ mute!"',
      options: [
        { id: 'opt_1', text: 'on', isCorrect: true },
        { id: 'opt_2', text: 'in', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'on',
      explanation: 'Idiomatic preposition: "on mute".',
    },
    {
      id: 'cp_a2_104_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks meeting participants to verify screen visibility?',
      options: [
        { id: 'opt_1', text: 'Can everyone see my shared screen now?', isCorrect: true },
        { id: 'opt_2', text: 'Are everyone watch my computer?', isCorrect: false },
        { id: 'opt_3', text: 'Did you seen screen?', isCorrect: false },
      ],
      correctAnswer: 'Can everyone see my shared screen now?',
      explanation: 'Standard professional phrase: "Can everyone see my screen?".',
    },
    {
      id: 'cp_a2_104_3',
      type: 'multiple_choice',
      prompt: 'How do you tell someone their internet audio was distorted?',
      options: [
        { id: 'opt_1', text: 'Your voice was breaking up for a moment, could you repeat that?', isCorrect: true },
        { id: 'opt_2', text: 'Your voice was broken down on internet.', isCorrect: false },
        { id: 'opt_3', text: 'You are bad sound speak again.', isCorrect: false },
      ],
      correctAnswer: 'Your voice was breaking up for a moment, could you repeat that?',
      explanation: '"Breaking up" is the natural phrasal verb for choppy audio.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_104_1',
      scenarioContext: 'Unmute and confirm audio in a video call.',
      prompt: 'Build: "Sorry I was on mute can you hear me now?"',
      targetStructure: 'Apology + past clause + question modal clause',
      wordBank: ['Sorry', 'I', 'was', 'on', 'mute', 'can', 'you', 'hear', 'me', 'now', 'am', 'hearing'],
      acceptableSolutions: [
        'Sorry I was on mute can you hear me now',
        'Sorry, I was on mute. Can you hear me now?',
      ],
      explanation: 'Standard virtual meeting recovery statement.',
    },
    {
      id: 'sc_a2_104_2',
      scenarioContext: 'Confirm that you sent the design file attachment.',
      prompt: 'Build: "I attached the design file to the email."',
      targetStructure: 'Subject + past verb + object + prepositional phrase',
      wordBank: ['I', 'attached', 'the', 'design', 'file', 'to', 'the', 'email', 'attaching', 'am'],
      acceptableSolutions: [
        'I attached the design file to the email',
        'I attached the design file to the email.',
      ],
      explanation: 'Past simple action describing file transfer.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_104_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! Great to see you in the call. I can see your webcam video clearly, but your microphone seems to be muted. Could you unmute yourself and let me know if you can hear me properly from Dubai?',
      partnerAudioText:
        'Hi Alex! Great to see you in the call. I can see your webcam video clearly, but your microphone seems to be muted. Could you unmute yourself and let me know if you can hear me properly from Dubai?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! कॉल में आपको देखकर अच्छा लगा। मैं आपका वेबकैम वीडियो स्पष्ट रूप से देख सकती हूँ, लेकिन आपका माइक्रोफ़ोन म्यूट लगता है। क्या आप खुद को अनम्यूट कर सकते हैं और मुझे बता सकते हैं कि क्या आप मुझे दुबई से ठीक से सुन पा रहे हैं?',
      expectedFunction: 'Unmute Microphone, Apologize & Confirm Audio Quality',
      contextGoal:
        'Apologize for being on mute; explain that your headset button was toggled off; confirm that you hear Nadia loud and clear.',
      targetVocabulary: ['apologies I was on mute', 'headset switch was toggled off', 'can hear you loud and clear', 'audio and video are crystal clear'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Hi Nadia! Apologies about that—my headset switch was on mute. I can hear and see you loud and clear now! How is everything in Dubai today?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Unmute & Audio Confirmation',
          patterns: ['on mute', 'unmute', 'hear you', 'loud and clear', 'clear', 'headset', 'apologies', 'sorry'],
          required: true,
        },
        {
          name: 'Greeting / Follow-up',
          patterns: ['nadia', 'how is everything', 'dubai', 'good to see you', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mute_preposition_error',
          pattern: /\bi was in mute\b|\bi was at mute\b/i,
          errorType: 'grammar',
          message: 'Say "I was on mute", not "in mute" or "at mute".',
          correctionPattern: 'on mute',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_104_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Sorry, my microphone was ___ mute."',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'in', isCorrect: false },
          { id: 'opt_3', text: 'under', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Collocation: "on mute".',
      },
    },
    {
      id: 'turn_a2_104_2',
      turnIndex: 2,
      partnerPrompt:
        'Dubai is sunny and warm! Now, are you ready to share your screen so we can review the new mobile navigation flow you built this sprint?',
      partnerAudioText:
        'Dubai is sunny and warm! Now, are you ready to share your screen so we can review the new mobile navigation flow you built this sprint?',
      partnerQuestionHindi:
        'दुबई धूपदार और गर्म है! अब, क्या आप अपनी स्क्रीन साझा करने के लिए तैयार हैं ताकि हम इस स्प्रिंट में आपके द्वारा बनाए गए नए मोबाइल नेविगेशन प्रवाह की समीक्षा कर सकें?',
      expectedFunction: 'Initiate Screen Share & Verify Participant Visibility',
      contextGoal:
        'Start sharing your application window; ask if Nadia can see your browser tab and the interactive prototype clearly.',
      targetVocabulary: ['let me share my screen now', 'can you see the browser tab', 'showing the mobile prototype', 'is the text sharp on your end'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Yes, absolutely! Let me start screen sharing right now. Can you see my browser tab with the Figma mobile prototype? Let me know if the font and layouts are sharp on your screen.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Screen Share Action & Check',
          patterns: ['share my screen', 'sharing', 'can you see', 'screen', 'browser tab', 'figma', 'prototype', 'window'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_104_2',
        type: 'multiple_choice',
        prompt: 'Which question correctly checks if participants see your presentation?',
        options: [
          { id: 'opt_1', text: 'Can everyone see my shared screen clearly?', isCorrect: true },
          { id: 'opt_2', text: 'Are everyone see my screen now?', isCorrect: false },
          { id: 'opt_3', text: 'Is screen watchable for you?', isCorrect: false },
        ],
        correctAnswer: 'Can everyone see my shared screen clearly?',
        explanation: 'Clear, polite, and standard phrase.',
      },
    },
    {
      id: 'turn_a2_104_3',
      turnIndex: 3,
      partnerPrompt:
        'Yes, the screen share is perfectly visible and the navigation looks sleek! I noticed you sent a revised design token spec. Did you send that as an email attachment, or is it in our shared cloud folder?',
      partnerAudioText:
        'Yes, the screen share is perfectly visible and the navigation looks sleek! I noticed you sent a revised design token spec. Did you send that as an email attachment, or is it in our shared cloud folder?',
      partnerQuestionHindi:
        'हाँ, स्क्रीन शेयर पूरी तरह से दिखाई दे रहा है और नेविगेशन आकर्षक लग रहा है! मैंने देखा कि आपने एक संशोधित डिज़ाइन टोकन विनिर्देश भेजा है। क्या आपने इसे एक ईमेल अटैचमेंट के रूप में भेजा था, या यह हमारे साझा क्लाउड फ़ोल्डर में है?',
      expectedFunction: 'Explain File Transmission (Attachment & Cloud Link)',
      contextGoal:
        'Explain that you attached the PDF to the recap email and also dropped the vector files in the shared cloud drive for safety.',
      targetVocabulary: ['attached the PDF specification to the email', 'uploaded raw assets to shared cloud drive', 'included direct link in the chat', 'easy access'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'I attached the summary PDF directly to the recap email I sent ten minutes ago. In addition, I uploaded all the raw vector assets into our shared cloud drive and pasted the link in our Slack channel for easy access!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Attachment & Cloud Drive Explanation',
          patterns: ['attached', 'attachment', 'email', 'pdf', 'shared drive', 'cloud', 'link', 'slack', 'uploaded'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_104_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (attach) the specification sheet to the email."',
        options: [
          { id: 'opt_1', text: 'attached', isCorrect: true },
          { id: 'opt_2', text: 'attaching', isCorrect: false },
          { id: 'opt_3', text: 'attach was', isCorrect: false },
        ],
        correctAnswer: 'attached',
        explanation: 'Past simple action "attached".',
      },
    },
    {
      id: 'turn_a2_104_4',
      turnIndex: 4,
      partnerPrompt:
        'I see the attachment in my inbox and the drive link worked on first click! The prototype is approved without changes. Let us sign off the call so you can proceed to the engineering handoff. Thank you Alex for such an organized and efficient presentation!',
      partnerAudioText:
        'I see the attachment in my inbox and the drive link worked on first click! The prototype is approved without changes. Let us sign off the call so you can proceed to the engineering handoff. Thank you Alex for such an organized and efficient presentation!',
      partnerQuestionHindi:
        'मुझे अपने इनबॉक्स में अटैचमेंट दिखाई दे रहा है और ड्राइव लिंक पहली बार में ही काम कर गया! प्रोटोटाइप बिना किसी बदलाव के स्वीकृत है। आइए कॉल समाप्त करें ताकि आप इंजीनियरिंग हैंडऑफ़ के लिए आगे बढ़ सकें। इतनी व्यवस्थित और कुशल प्रस्तुति के लिए धन्यवाद एलेक्स!',
      expectedFunction: 'Acknowledge Approval & Close Virtual Meeting Professionally',
      contextGoal:
        'Thank Nadia for the fast feedback and approval, say you will proceed with the engineering handoff, and sign off warmly.',
      targetVocabulary: ['thank you Nadia for the swift approval', 'proceeding with engineering handoff', 'have a wonderful afternoon in Dubai', 'talk soon'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Thank you so much Nadia for the swift feedback and approval! I will notify the engineers and proceed with the sprint handoff. Have a wonderful rest of your day in Dubai, talk soon!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Sign-off & Gratitude',
          patterns: ['thank you', 'thanks', 'nadia', 'approval', 'handoff', 'engineers', 'have a wonderful', 'dubai', 'talk soon', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_104_4',
        type: 'multiple_choice',
        prompt: 'Which closing line is ideal for ending a productive video conference?',
        options: [
          { id: 'opt_1', text: 'Thank you for the productive call Nadia, have a great afternoon!', isCorrect: true },
          { id: 'opt_2', text: 'Call stop click red button.', isCorrect: false },
          { id: 'opt_3', text: 'I am hang up now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the productive call Nadia, have a great afternoon!',
        explanation: 'Warm, professional, and standard.',
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
