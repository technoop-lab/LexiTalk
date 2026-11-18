import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_168: ConversationDefinition = {
  id: 'conv_a2_168',
  title: 'Team Brainstorming, Problem Solving & Innovative Workarounds',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_168'],
  estimatedMinutes: 5,
  scenario:
    'You are in the creative strategy room at Brightline Media in Bristol participating in a dynamic problem-solving brainstorming session with Senior Creative Lead Priya Nair. Your team faces a sudden 30% reduction in production budget and a two-week shorter timeline for an upcoming community video campaign. You need to brainstorm creative workarounds, evaluate ideas using "What if we...", "Why don\'t we...", and conditionals ("If we do X, we will save Y"), build constructively on Priya\'s proposals, and agree on a concrete action plan.',
  communicativeGoals: [
    'Propose creative solutions and workarounds using brainstorming formulas ("What if we...", "Why don\'t we...")',
    'Evaluate alternatives and trade-offs using First Conditional structures ("If we simplify the visuals, we will meet the deadline")',
    'Build collaboratively on teammates\' suggestions with additive phrases ("That\'s a great idea, and we could also...")',
    'Reach consensus on an actionable, budget-conscious project workaround',
  ],
  canDoStatements: [
    'Can suggest creative ideas and alternative options in a collaborative team meeting',
    'Can use First Conditional sentences to weigh costs and benefits of different ideas',
    'Can build upon others\' suggestions and summarize agreed action items',
  ],
  characters: [
    {
      id: 'char_priya_nair',
      name: 'Priya Nair',
      role: 'Senior Creative Lead',
      avatar: '💡',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'workaround',
        ipa: '/ˈwɜːkəraʊnd/',
        partOfSpeech: 'noun',
        meaning: 'A method for overcoming a problem or limitation, especially temporarily',
        exampleSentence: 'Using stock footage and animation is a great workaround for our budget cut.',
        translations: { hi: 'वैकल्पिक उपाय / कामचलाऊ समाधान' },
      },
      {
        word: 'brainstorm',
        ipa: '/ˈbreɪnstɔːm/',
        partOfSpeech: 'verb',
        meaning: 'To produce ideas or solve problems in a group discussion',
        exampleSentence: 'Let\'s brainstorm three practical solutions before making a final decision.',
        translations: { hi: 'विचार मंथन करना' },
      },
      {
        word: 'trade-off',
        ipa: '/ˈtreɪd ɒf/',
        partOfSpeech: 'noun',
        meaning: 'A balance achieved between two desirable but incompatible features; a compromise',
        exampleSentence: 'There is always a trade-off between visual complexity and fast turnaround.',
        translations: { hi: 'सौदा / अदल-बदल का संतुलन' },
      },
      {
        word: 'feasible',
        ipa: '/ˈfiːzəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Possible to do easily or conveniently',
        exampleSentence: 'Hiring a full film crew is no longer feasible within this reduced budget.',
        translations: { hi: 'संभव / व्यावहारिक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What if we shoot the interviews remotely instead of renting an expensive studio?',
        functionCategory: 'Brainstorming Proposals with "What if we..."',
        exampleSentence: 'What if we use existing user stories?',
      },
      {
        phrase: 'If we use high-quality motion graphics, we will save thirty percent on production costs.',
        functionCategory: 'Conditional Evaluation with First Conditional',
        exampleSentence: 'If we shorten the video, we will finish on time.',
      },
      {
        phrase: 'That is a great suggestion, and we could also partner with local creators.',
        functionCategory: 'Building Constructively on Colleague Ideas',
        exampleSentence: 'Building on your point, we can share the assets.',
      },
      {
        phrase: 'Let\'s weigh the pros and cons of both options before finalizing.',
        functionCategory: 'Evaluating Trade-offs & Feasibility',
        exampleSentence: 'Let\'s look at the pros and cons.',
      },
    ],
    grammar: {
      title: 'Brainstorming Proposals & First Conditional Evaluation',
      conceptExplanation:
        '1. Proposing Ideas: Use "What if we + Past / Present Verb?" (e.g., "What if we use animation?") or "Why don\'t we + Base Verb?" (e.g., "Why don\'t we interview local students?").\n2. First Conditional for Predicting Outcomes: "If + Present Simple, will + Base Verb" (e.g., "If we hire freelance animators, we will deliver the project two weeks early").\n3. Additive Agreement: Use "Building on that idea, we could..." or "That makes sense, and we can also...".',
      patternFormula: 'What if we + [Verb] | Why don\'t we + [Base Verb] | If + [Present Simple], Subject + will + [Base Verb]',
      contrastExamples: [
        {
          incorrect: 'What if we will use animation and if we do that we save money.',
          correct: 'What if we use animation? If we do that, we will save thirty percent of our budget.',
          explanation: 'Do not use "will" inside the "what if" or "if" clause; use "will" in the result clause.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Priya Nair',
        text: 'Welcome, everyone! Our budget was cut by thirty percent, but we still need to deliver the community campaign. What creative workarounds can we explore?',
        translation: 'सभी का स्वागत है! हमारा बजट तीस प्रतिशत कम कर दिया गया है, लेकिन हमें अभी भी सामुदायिक अभियान को वितरित करने की आवश्यकता है। हम किन रचनात्मक समाधानों की तलाश कर सकते हैं?',
      },
      {
        speaker: 'You',
        text: 'What if we replace the on-location studio shoot with animated storytelling? If we use motion graphics, we will reduce expenses significantly.',
        translation: 'क्या होगा यदि हम ऑन-लोकेशन स्टूडियो शूट को एनिमेटेड स्टोरीटेलिंग से बदल दें? यदि हम मोशन ग्राफिक्स का उपयोग करते हैं, तो हम खर्चों में काफी कमी लाएंगे।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_168_1',
      type: 'fill_blank',
      prompt: 'Complete the proposal: "___ (What if we / Why we not) record the voiceovers remotely to save studio costs?"',
      options: [
        { id: 'opt_1', text: 'What if we', isCorrect: true },
        { id: 'opt_2', text: 'Why we not', isCorrect: false },
        { id: 'opt_3', text: 'What if will we', isCorrect: false },
      ],
      correctAnswer: 'What if we',
      explanation: '"What if we + base verb" is the correct brainstorming formula.',
    },
    {
      id: 'cp_a2_168_2',
      type: 'multiple_choice',
      prompt: 'Which First Conditional sentence correctly evaluates a proposal?',
      options: [
        { id: 'opt_1', text: 'If we use existing customer testimonials, we will finish the video two weeks early.', isCorrect: true },
        { id: 'opt_2', text: 'If we will use existing testimonials, we finish early.', isCorrect: false },
        { id: 'opt_3', text: 'If we used testimonials, we will finished early.', isCorrect: false },
      ],
      correctAnswer: 'If we use existing customer testimonials, we will finish the video two weeks early.',
      explanation: 'First Conditional: "If + Present Simple, will + Base Verb".',
    },
    {
      id: 'cp_a2_168_3',
      type: 'multiple_choice',
      prompt: 'Which phrase builds constructively on a colleague\'s suggestion?',
      options: [
        { id: 'opt_1', text: 'That is a great idea, and we could also invite local volunteers to share their stories.', isCorrect: true },
        { id: 'opt_2', text: 'No that idea is totally useless.', isCorrect: false },
        { id: 'opt_3', text: 'I don\'t care what we do.', isCorrect: false },
      ],
      correctAnswer: 'That is a great idea, and we could also invite local volunteers to share their stories.',
      explanation: 'Collaborative and additive phrasing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_168_1',
      scenarioContext: 'Propose using user-generated video clips.',
      prompt: 'Build: "What if we use user-generated content from our community?"',
      targetStructure: 'What if we use user-generated content from our community',
      wordBank: ['What', 'if', 'we', 'use', 'user-generated', 'content', 'from', 'our', 'community', 'will', 'using'],
      acceptableSolutions: [
        'What if we use user-generated content from our community?',
      ],
      explanation: 'Brainstorming question structure with "What if we...".',
    },
    {
      id: 'sc_a2_168_2',
      scenarioContext: 'Evaluate the timeline using First Conditional.',
      prompt: 'Build: "If we simplify the animation, we will launch on time."',
      targetStructure: 'If we simplify the animation we will launch on time',
      wordBank: ['If', 'we', 'simplify', 'the', 'animation', 'we', 'will', 'launch', 'on', 'time', 'simplified', 'would'],
      acceptableSolutions: [
        'If we simplify the animation, we will launch on time.',
        'If we simplify the animation we will launch on time.',
      ],
      explanation: 'First Conditional sentence structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_168_1',
      turnIndex: 1,
      partnerPrompt:
        'Thanks for joining the creative huddle! With our budget reduced by thirty percent, a multi-day studio shoot is out of the question. What creative workarounds can we brainstorm to deliver an engaging campaign on a shoestring budget?',
      partnerAudioText:
        'Thanks for joining the creative huddle! With our budget reduced by thirty percent, a multi-day studio shoot is out of the question. What creative workarounds can we brainstorm to deliver an engaging campaign on a shoestring budget?',
      partnerQuestionHindi:
        'क्रिएटिव हडल में शामिल होने के लिए धन्यवाद! हमारे बजट में तीस प्रतिशत की कटौती के साथ, कई दिनों का स्टूडियो शूट संभव नहीं है। कम बजट में एक आकर्षक अभियान देने के लिए हम किन रचनात्मक समाधानों पर विचार कर सकते हैं?',
      expectedFunction: 'Propose Creative Workarounds using "What if we..." and First Conditional',
      contextGoal:
        'Suggest replacing the studio shoot with animated motion graphics or user-generated community footage to save budget.',
      targetVocabulary: ['What if we use motion graphics', 'If we use animation, we will save', 'creative workaround'],
      suggestedResponses: [
        {
          label: 'Propose Animation Workaround (What if + First Conditional)',
          text: 'What if we replace the live studio shoot with stylized motion graphics? If we focus on 2D animation, we will cut production expenses by forty percent.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Propose Community Video Clips',
          text: 'Why don\'t we crowdsource authentic smartphone video clips from our community? If we curate real stories, we will create a more genuine connection.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Brainstorm Proposal Formula (what if we / why don\'t we / could we / propose / workaround)',
          patterns: ['what if we', 'why don\'t we', 'could we', 'what if', 'why not', 'propose', 'workaround'],
          required: true,
        },
        {
          name: 'Creative Content Idea (animation / motion graphics / clips / community / user-generated / stories / cut)',
          patterns: ['animation', 'motion graphics', 'clips', 'community', 'user-generated', 'stories', 'graphics', 'cut'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_what_if_will',
          pattern: 'what if we will replace|what if we will use',
          errorType: 'grammar',
          message: 'Use the base verb after "What if we" without "will": "What if we replace the studio shoot...?"',
          correctionPattern: 'What if we replace the studio shoot with animation?',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_168_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "What if we ___ (combine / will combine) user stories with short graphics?"',
        options: [
          { id: 'opt_1', text: 'combine', isCorrect: true },
          { id: 'opt_2', text: 'will combine', isCorrect: false },
          { id: 'opt_3', text: 'combined', isCorrect: false },
        ],
        correctAnswer: 'combine',
        explanation: 'Use base verb in "What if we..." proposals.',
      },
    },
    {
      id: 'turn_a2_168_2',
      turnIndex: 2,
      partnerPrompt:
        'I really like the idea of community-driven stories! If we collect short mobile clips, we will save on filming fees, but we still need professional narration. How can we handle the voiceover and audio mastering cheaply?',
      partnerAudioText:
        'I really like the idea of community-driven stories! If we collect short mobile clips, we will save on filming fees, but we still need professional narration. How can we handle the voiceover and audio mastering cheaply?',
      partnerQuestionHindi:
        'मुझे समुदाय-संचालित कहानियों का विचार वास्तव में पसंद है! यदि हम छोटे मोबाइल क्लिप एकत्र करते हैं, तो हम फिल्मांकन शुल्क पर बचत करेंगे, लेकिन हमें अभी भी पेशेवर वर्णन की आवश्यकता है। हम वॉयसओवर और ऑडियो मास्टरिंग को सस्ते में कैसे संभाल सकते हैं?',
      expectedFunction: 'Build Constructively on Idea and Propose Freelance / Remote Audio Solution',
      contextGoal:
        'Build on Priya\'s point by suggesting remote voiceover artists and using royalty-free music platforms.',
      targetVocabulary: ['building on that idea', 'remote voiceover talent', 'If we hire freelance narrators, we will stay within budget'],
      suggestedResponses: [
        {
          label: 'Build on Idea & Audio Solution',
          text: 'Building on that idea, we could hire freelance voice artists online who record from their home studios. If we do that, we will get professional audio without studio rental fees.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Royalty-Free Audio & In-House Talent',
          text: 'That makes total sense, and we could also use our in-house podcast equipment. If our team does the sound design, we will keep total audio costs under five hundred pounds.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Additive Agreement (building on / that makes sense / great idea / and we could / also)',
          patterns: ['building on', 'that makes sense', 'great idea', 'and we could', 'also', 'furthermore'],
          required: true,
        },
        {
          name: 'Audio / Voiceover Idea (freelance / voiceover / voice / audio / narration / podcast / home studio / sound)',
          patterns: ['freelance', 'voiceover', 'voice', 'audio', 'narration', 'podcast', 'studio', 'sound', 'online'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_first_cond_result',
          pattern: 'if we do that we get professional audio|if we hire we stay within budget',
          errorType: 'grammar',
          message: 'Remember the First Conditional result clause requires "will": "If we do that, we will get professional audio."',
          correctionPattern: 'If we hire freelance narrators, we will save money',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_168_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly structures the First Conditional result clause?',
        options: [
          { id: 'opt_1', text: 'If we use freelance voice talent, we will reduce studio costs.', isCorrect: true },
          { id: 'opt_2', text: 'If we use freelance voice talent, we reduce studio costs.', isCorrect: false },
          { id: 'opt_3', text: 'If we will use freelance talent, we will reduce costs.', isCorrect: false },
        ],
        correctAnswer: 'If we use freelance voice talent, we will reduce studio costs.',
        explanation: 'First Conditional: "If + present simple, will + base verb".',
      },
    },
    {
      id: 'turn_a2_168_3',
      turnIndex: 3,
      partnerPrompt:
        'These workarounds are brilliant. Combining community video with remote voiceover cuts our costs by forty percent while keeping the message heartfelt! What are our concrete next steps before tomorrow\'s client pitch?',
      partnerAudioText:
        'These workarounds are brilliant. Combining community video with remote voiceover cuts our costs by forty percent while keeping the message heartfelt! What are our concrete next steps before tomorrow\'s client pitch?',
      partnerQuestionHindi:
        'ये समाधान शानदार हैं। रिमोट वॉयसओवर के साथ सामुदायिक वीडियो का संयोजन हमारे खर्चों को चालीस प्रतिशत कम करता है जबकि संदेश को प्रभावशाली बनाए रखता है! कल के क्लाइंट पिच से पहले हमारे ठोस अगले कदम क्या हैं?',
      expectedFunction: 'Summarize Action Plan and Assign Clear Responsibilities',
      contextGoal:
        'State that you will draft the storyboard and budget breakdown, while Priya reviews the community video guidelines.',
      targetVocabulary: ['draft the storyboard', 'prepare the revised budget breakdown', 'review by five PM'],
      suggestedResponses: [
        {
          label: 'Summarize Action Plan & Responsibilities',
          text: 'I will draft the revised storyboard and budget breakdown by three PM, and you can review the community submission guidelines. Then we can assemble the pitch deck together.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Action Items & Timeline',
          text: 'Let\'s divide the tasks: I will calculate the audio expenses and write the concept brief, while you prepare the sample video mockups before five PM.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Action Items (draft / prepare / write / storyboard / budget / pitch / calculate / mockup)',
          patterns: ['draft', 'prepare', 'write', 'storyboard', 'budget', 'pitch', 'calculate', 'mockup', 'brief'],
          required: true,
        },
        {
          name: 'Time & Collaboration (by three / by five / pm / together / divide / review / tomorrow)',
          patterns: ['by three', 'by five', 'pm', 'together', 'divide', 'review', 'tomorrow', 'today'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_168_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ (will draft / am draft) the storyboard this afternoon."',
        options: [
          { id: 'opt_1', text: 'will draft', isCorrect: true },
          { id: 'opt_2', text: 'am draft', isCorrect: false },
          { id: 'opt_3', text: 'drafting', isCorrect: false },
        ],
        correctAnswer: 'will draft',
        explanation: 'Use "will draft" for stating a planned commitment.',
      },
    },
    {
      id: 'turn_a2_168_4',
      turnIndex: 4,
      partnerPrompt:
        'Perfect plan! We took a difficult constraint and turned it into an authentic, creative campaign. I will see you in the pitch prep room at four o\'clock!',
      partnerAudioText:
        'Perfect plan! We took a difficult constraint and turned it into an authentic, creative campaign. I will see you in the pitch prep room at four o\'clock!',
      partnerQuestionHindi:
        'उत्तम योजना! हमने एक कठिन बाधा को एक प्रामाणिक, रचनात्मक अभियान में बदल दिया। मैं आपको चार बजे पिच तैयारी कक्ष में मिलूंगी!',
      expectedFunction: 'Confirm Appointment and Conclude Brainstorming Session Enthusiastically',
      contextGoal:
        'Thank Priya, confirm the 4 PM meeting, and close on a positive note.',
      targetVocabulary: ['see you at four', 'looking forward to the pitch', 'great brainstorming session'],
      suggestedResponses: [
        {
          label: 'Confirm & Close with Enthusiasm',
          text: 'Sounds wonderful, Priya! Thank you for a very productive brainstorming session. I will see you in the prep room at four o\'clock!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Positive Sign-off',
          text: 'Great team effort! I will have the storyboard ready for our four PM review. See you then!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation (four / four o\'clock / see you / sounds wonderful / great)',
          patterns: ['four', 'four o\'clock', 'see you', 'sounds wonderful', 'great', 'ready'],
          required: true,
        },
        {
          name: 'Gratitude & Close (thank you / thanks / priya / productive / session / team)',
          patterns: ['thank you', 'thanks', 'priya', 'productive', 'session', 'team', 'brainstorming'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_168_4',
        type: 'multiple_choice',
        prompt: 'Which closing phrase is best for agreeing to a meeting time?',
        options: [
          { id: 'opt_1', text: 'I will see you in the prep room at four o’clock!', isCorrect: true },
          { id: 'opt_2', text: 'I see you at four hour.', isCorrect: false },
          { id: 'opt_3', text: 'Meeting is for four see.', isCorrect: false },
        ],
        correctAnswer: 'I will see you in the prep room at four o’clock!',
        explanation: 'Natural future commitment with specific time.',
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
