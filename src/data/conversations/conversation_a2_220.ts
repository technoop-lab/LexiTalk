import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_220: ConversationDefinition = {
  id: 'conv_a2_220',
  title: 'Learning a New Skill: Explaining Steps & Processes',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_220'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus computer lab with classmate Nina. She is struggling to record and edit a short audio presentation for her language assessment. You explain the step-by-step methodology using sequencing connectors (First, Next, Then, After that, Finally) and teach her how to complete the process smoothly.',
  communicativeGoals: [
    'Explain a multi-step procedural process using sequential discourse connectors (First, Next, Then, After that, Finally)',
    'Give clear instructions using imperative verb forms ("Open the software", "Select your microphone", "Export as MP3")',
    'Describe learning methodologies and incremental progress in simple, clear A2 English',
    'Check whether the listener understands each step before moving forward',
  ],
  canDoStatements: [
    'Can explain a simple process step-by-step using sequence words',
    'Can give clear instructions using imperatives to help a classmate',
    'Can check that instructions are understood and answer basic questions about a technical process',
  ],
  characters: [
    {
      id: 'char_nina_peer',
      name: 'Nina',
      role: 'Classmate & Peer Learner',
      avatar: '🎧',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'methodology',
        ipa: '/ˌmeθəˈdɒlədʒi/',
        partOfSpeech: 'noun',
        meaning: 'A system of methods or steps used in a particular activity',
        exampleSentence: 'Following a clear methodology makes audio editing simple.',
        translations: { hi: 'कार्यप्रणाली / पद्धति (मेथडोलॉजी)' },
      },
      {
        word: 'incremental',
        ipa: '/ˌɪŋkrəˈmentl/',
        partOfSpeech: 'adjective',
        meaning: 'Increasing or improving gradually in regular series or small steps',
        exampleSentence: 'Learning technical skills is an incremental process.',
        translations: { hi: 'क्रमिक / धीरे-धीरे बढ़ने वाला (इन्क्रीमेंटल)' },
      },
      {
        word: 'procedure',
        ipa: '/prəˈsiːdʒə/',
        partOfSpeech: 'noun',
        meaning: 'An established or official way of doing something step-by-step',
        exampleSentence: 'Let me show you the standard recording procedure.',
        translations: { hi: 'प्रक्रिया / कार्यविधि (प्रोसीजर)' },
      },
      {
        word: 'export',
        ipa: '/ɪkˈspɔːt/',
        partOfSpeech: 'verb',
        meaning: 'To save or transfer digital files into a format suitable for sharing',
        exampleSentence: 'Finally, export the audio file as an MP3 attachment.',
        translations: { hi: 'फ़ाइल निर्यात / सेव करना (एक्सपोर्ट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'First, open the recording application and check your microphone.',
        functionCategory: 'First step in a procedure',
        exampleSentence: 'First, plug in your headset.',
      },
      {
        phrase: 'Next, press the red record button and speak clearly into the mic.',
        functionCategory: 'Intermediate sequential instruction',
        exampleSentence: 'Then, trim out any background pauses.',
      },
      {
        phrase: 'After that, listen back to check the audio volume.',
        functionCategory: 'Next step with after that',
        exampleSentence: 'After that, click the save button.',
      },
      {
        phrase: 'Finally, export the finished recording as an MP3 file.',
        functionCategory: 'Final concluding step',
        exampleSentence: 'Finally, submit your file to the portal.',
      },
    ],
    grammar: {
      title: 'Sequential Discourse Connectors & Imperative Instructions',
      conceptExplanation:
        '1. Sequence Connectors:\n   - "First, ..."\n   - "Next, ..."\n   - "Then, ..."\n   - "After that, ..."\n   - "Finally, ..."\n2. Imperative Verb Forms for Instructions (No subject "you"):\n   - "Click the button." (NOT "You click")\n   - "Save your file."\n   - "Do not close the window."',
      patternFormula: '[Sequence word: First/Next/Then/After that/Finally], [Imperative Base Verb] + [Object]',
      contrastExamples: [
        {
          incorrect: 'First you must to open software.',
          correct: 'First, open the software.',
          explanation: 'Use the base imperative verb directly after sequence markers.',
        },
        {
          incorrect: 'After finish, finally export file.',
          correct: 'After that, review the sound, and finally export the file.',
          explanation: 'Use "After that," followed by an imperative clause.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Nina',
        text: 'I have never edited audio on the computer before! Could you show me the steps?',
        translation: 'मैंने पहले कभी कंप्यूटर पर ऑडियो संपादित नहीं किया है! क्या आप मुझे चरण दिखा सकते हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Sure! First, open the audio software and select your microphone. Next, press the record button.',
        translation: 'ज़रूर! पहले, ऑडियो सॉफ़्टवेयर खोलें और अपना माइक्रोफ़ोन चुनें। इसके बाद, रिकॉर्ड बटन दबाएं।',
      },
      {
        speaker: 'Nina',
        text: 'Got it! What do I do after finishing the speech?',
        translation: 'समझ गई! भाषण समाप्त करने के बाद मुझे क्या करना होगा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_220_1',
      type: 'fill_blank',
      prompt: 'Complete with the sequence word: "______, (First / Finally / After) open the application and create a new project."',
      options: [
        { id: 'opt_1', text: 'First', isCorrect: true },
        { id: 'opt_2', text: 'Finally', isCorrect: false },
        { id: 'opt_3', text: 'After', isCorrect: false },
      ],
      correctAnswer: 'First',
      explanation: '"First" introduces the initial step of a procedure.',
    },
    {
      id: 'cp_220_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly gives a step-by-step instruction?',
      options: [
        { id: 'opt_1', text: 'After that, trim the silence and export your audio as an MP3.', isCorrect: true },
        { id: 'opt_2', text: 'After that you must to trimming silence.', isCorrect: false },
        { id: 'opt_3', text: 'Then trimming the silence.', isCorrect: false },
      ],
      correctAnswer: 'After that, trim the silence and export your audio as an MP3.',
      explanation: '"After that" + base imperative verbs "trim" and "export".',
    },
    {
      id: 'cp_220_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [finally, / export the finished audio / and / upload it to the student portal]',
      correctAnswer: 'finally, export the finished audio and upload it to the student portal',
      explanation: 'Sequence marker + imperative clause 1 + and + imperative clause 2.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_220_1',
      prompt: 'Construct a sentence instructing Nina to click the red button and speak clearly into the microphone.',
      scenarioContext: 'Explaining the second recording step.',
      targetStructure: 'Next, click the red record button and speak clearly into the microphone.',
      wordBank: ['Next, click the red', 'record button and', 'speak clearly into', 'the microphone,', 'Nina.'],
      acceptableSolutions: [
        'Next, click the red record button and speak clearly into the microphone.',
        'Next, click the record button and speak clearly into the microphone.',
      ],
      explanation: 'Sequential instruction formula: Next, click... and speak...',
    },
    {
      id: 'sc_220_2',
      prompt: 'Construct a sentence asking Nina if she understands the first two steps before continuing.',
      scenarioContext: 'Checking comprehension during an explanation.',
      targetStructure: 'Does that make sense so far, or would you like me to repeat the first step?',
      wordBank: ['Does that make sense', 'so far, or would you', 'like me to repeat', 'the first step,', 'Nina?'],
      acceptableSolutions: [
        'Does that make sense so far, or would you like me to repeat the first step?',
        'Does that make sense so far, Nina?',
      ],
      explanation: 'Comprehension check formula.',
    },
  ],
  turns: [
    {
      id: 'turn_220_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! I am feeling a bit stressed. We have to submit an edited audio recording for our English speaking task, and I have never used this software before. Can you explain the steps to record and save my file?',
      partnerAudioText:
        'Hi! I am feeling a bit stressed. We have to submit an edited audio recording for our English speaking task, and I have never used this software before. Can you explain the steps to record and save my file?',
      partnerQuestionHindi:
        'नमस्ते! मुझे थोड़ा तनाव महसूस हो रहा है। हमें अपने अंग्रेजी बोलने के कार्य के लिए एक संपादित ऑडियो रिकॉर्डिंग जमा करनी है, और मैंने इस सॉफ़्टवेयर का पहले कभी उपयोग नहीं किया है। क्या आप मेरी फ़ाइल को रिकॉर्ड करने और सहेजने के चरणों की व्याख्या कर सकते हैं?',
      expectedFunction: 'Reassuring Nina and explaining the initial steps using "First" and "Next"',
      contextGoal: 'Reassure Nina, and explain steps 1 and 2 (First open the app and test mic; Next click red record button)',
      targetVocabulary: ['Don’t worry', 'step-by-step', 'First', 'open', 'microphone', 'Next', 'record', 'Nina'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Don’t worry, Nina! It is a simple step-by-step process. First, open the software and test your microphone. Next, click the red record button and speak clearly.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I can help you, Nina! First, launch the application and plug in your headset. Next, press record and read your presentation notes.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'No problem at all! First, verify your microphone input on the top menu. Next, hit the red record icon and deliver your speech at a steady pace.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'reassurance_and_nina',
          patterns: ['don’t worry', 'no problem', 'help you', 'nina', 'simple'],
          required: true,
        },
        {
          name: 'first_step',
          patterns: ['first', 'open', 'launch', 'software', 'microphone', 'headset', 'test'],
          required: true,
        },
        {
          name: 'next_step',
          patterns: ['next', 'record', 'press', 'click', 'speak', 'button'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_220_1_no_connectors',
          pattern: /^open app and record\.$/i,
          errorType: 'structure',
          message: 'Use sequence words: "First, open the app. Next, click the record button, Nina."',
          correctionPattern: 'First, open the app. Next, click the red record button.',
        },
      ],
      remediationPractice: {
        id: 'rem_220_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______, (First) open the software."',
        options: [
          { id: 'r1', text: 'First', isCorrect: true },
          { id: 'r2', text: 'At first to', isCorrect: false },
        ],
        correctAnswer: 'First',
        explanation: 'Sequence discourse connector: "First,".',
      },
    },
    {
      id: 'turn_220_2',
      turnIndex: 2,
      partnerPrompt:
        'Okay, that makes sense! I just pressed record, gave my three-minute speech, and clicked stop. But what if I made a mistake or have a long pause in the middle?',
      partnerAudioText:
        'Okay, that makes sense! I just pressed record, gave my three-minute speech, and clicked stop. But what if I made a mistake or have a long pause in the middle?',
      partnerQuestionHindi:
        'ठीक है, यह समझ आता है! मैंने अभी रिकॉर्ड दबाया, अपना तीन मिनट का भाषण दिया और स्टॉप पर क्लिक किया। लेकिन क्या होगा यदि मैंने कोई गलती की है या बीच में एक लंबा अंतराल है?',
      expectedFunction: 'Explaining editing using "Then" and "After that" with imperative verbs',
      contextGoal: 'Explain how to edit pauses (Then highlight unwanted audio; After that press delete and play back to test)',
      targetVocabulary: ['Then', 'highlight', 'delete', 'After that', 'play back', 'listen', 'volume'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Then, highlight the silence with your mouse cursor and press delete. After that, play back the audio to check the sound quality.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Then, select the section with the mistake and cut it. After that, listen back from the beginning to make sure the transition sounds smooth.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Then, simply drag across the waveform to highlight the awkward pause and hit delete. After that, preview the track to confirm the audio flow.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'then_step',
          patterns: ['then', 'highlight', 'select', 'drag', 'cut', 'delete', 'pause', 'mistake'],
          required: true,
        },
        {
          name: 'after_that_step',
          patterns: ['after that', 'play back', 'listen', 'preview', 'check', 'smooth', 'sound'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_220_2_vague',
          pattern: /^just cut it\.$/i,
          errorType: 'structure',
          message: 'Use sequence words: "Then highlight the pause and press delete. After that, listen back to the track."',
          correctionPattern: 'Then highlight the pause. After that, play it back.',
        },
      ],
      remediationPractice: {
        id: 'rem_220_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly uses "Then" and "After that" for instructions?',
        options: [
          { id: 'r1', text: 'Then, select the pause and press delete. After that, play back the track.', isCorrect: true },
          { id: 'r2', text: 'After that then select pause.', isCorrect: false },
        ],
        correctAnswer: 'Then, select the pause and press delete. After that, play back the track.',
        explanation: 'Accurate chronological sequencing.',
      },
    },
    {
      id: 'turn_220_3',
      turnIndex: 3,
      partnerPrompt:
        'Wow, I just cut out the background noise and it sounds so clean! Now, how do I actually save it so the professor can open it on the submission portal?',
      partnerAudioText:
        'Wow, I just cut out the background noise and it sounds so clean! Now, how do I actually save it so the professor can open it on the submission portal?',
      partnerQuestionHindi:
        'वाह, मैंने अभी पृष्ठभूमि का शोर हटा दिया है और यह बहुत साफ लगता है! अब, मैं इसे वास्तव में कैसे सहेजूं ताकि प्रोफेसर इसे सबमिशन पोर्टल पर खोल सकें?',
      expectedFunction: 'Explaining the final export step using "Finally" and checking if Nina has any other questions',
      contextGoal: 'Explain step 5 (Finally click File > Export, choose MP3 format, and upload to portal) and check if she feels confident',
      targetVocabulary: ['Finally', 'export', 'MP3 format', 'save', 'upload', 'portal', 'questions', 'Nina'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Finally, click File, choose Export as MP3, and upload the file to the student portal. Do you have any other questions, Nina?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Finally, select Export, name your file with your student ID, and save it as an MP3. Does everything make sense now, Nina?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Finally, go to File > Export Audio, select MP3 format, and submit it directly to the course portal. How does that feel, Nina?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'finally_step',
          patterns: ['finally', 'export', 'file', 'mp3', 'upload', 'save', 'submit', 'portal'],
          required: true,
        },
        {
          name: 'confidence_check',
          patterns: ['questions', 'make sense', 'how does that feel', 'nina', 'ready'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_220_3_no_finally',
          pattern: /^click export mp3\.$/i,
          errorType: 'structure',
          message: 'Conclude with "Finally": "Finally, export the file as an MP3 and upload it to the portal, Nina."',
          correctionPattern: 'Finally, click Export as MP3 and upload the file.',
        },
      ],
      remediationPractice: {
        id: 'rem_220_3',
        type: 'fill_blank',
        prompt: 'Fill in: "______, (Finally) export the file as an MP3."',
        options: [
          { id: 'r1', text: 'Finally', isCorrect: true },
          { id: 'r2', text: 'At final', isCorrect: false },
        ],
        correctAnswer: 'Finally',
        explanation: 'Conclude sequences with "Finally,".',
      },
    },
    {
      id: 'turn_220_4',
      turnIndex: 4,
      partnerPrompt:
        'I just exported the MP3 and uploaded it to the portal with zero errors! Your explanation was so clear and logical. Thank you so much for teaching me this new skill!',
      partnerAudioText:
        'I just exported the MP3 and uploaded it to the portal with zero errors! Your explanation was so clear and logical. Thank you so much for teaching me this new skill!',
      partnerQuestionHindi:
        'मैंने अभी MP3 निर्यात किया और बिना किसी त्रुटि के इसे पोर्टल पर अपलोड किया! आपकी व्याख्या बहुत स्पष्ट और तार्किक थी। मुझे यह नया कौशल सिखाने के लिए बहुत-बहुत धन्यवाद!',
      expectedFunction: 'Responding warmly to praise and wrapping up peer collaboration',
      contextGoal: 'Say you are happy to help, congratulate Nina on learning the software, and wish her good luck on the assignment',
      targetVocabulary: ['You’re very welcome', 'happy to help', 'great job', 'congratulations', 'good luck', 'Nina'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'You’re very welcome, Nina! You did a fantastic job learning the software so quickly. Good luck with your assignment marks!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’m happy I could help, Nina! It’s an easy process once you know the steps. Well done on finishing your recording!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Anytime, Nina! You picked up the methodology in no time. Congratulations on submitting your recording ahead of the deadline!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'welcome_response',
          patterns: ['you’re very welcome', 'welcome', 'happy to help', 'anytime', 'glad to help'],
          required: true,
        },
        {
          name: 'peer_encouragement',
          patterns: ['fantastic job', 'well done', 'congratulations', 'good luck', 'nina', 'recording'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_220_4_short',
          pattern: /^(welcome|ok)$/i,
          errorType: 'interaction',
          message: 'Give a friendly closing: "You’re very welcome, Nina! You did a fantastic job."',
          correctionPattern: 'You’re very welcome, Nina! Good luck with your assignment.',
        },
      ],
      remediationPractice: {
        id: 'rem_220_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is the most natural peer response to gratitude?',
        options: [
          { id: 'r1', text: 'You’re very welcome, Nina! You did a fantastic job learning the steps.', isCorrect: true },
          { id: 'r2', text: 'No problem go now.', isCorrect: false },
        ],
        correctAnswer: 'You’re very welcome, Nina! You did a fantastic job learning the steps.',
        explanation: 'Warm, encouraging, and friendly.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
