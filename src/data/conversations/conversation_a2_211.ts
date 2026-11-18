import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_211: ConversationDefinition = {
  id: 'conv_a2_211',
  title: 'Courses, Subjects & Learning Preferences',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_211'],
  estimatedMinutes: 5,
  scenario:
    'You are in the academic advising center with your student mentor, Liam. You are choosing your elective modules for the new semester and discussing which subjects you enjoy most, comparing lecture styles, and explaining whether you prefer practical workshops or theoretical seminars.',
  communicativeGoals: [
    'Express subject and course preferences using "prefer... to...", "would rather", and "like... best"',
    'Talk about core modules, electives, and course syllabuses in simple English',
    'Ask a peer or advisor about their course recommendations and learning experiences',
    'Provide simple reasons for your subject choices (e.g. "It is more practical", "I enjoy group projects")',
  ],
  canDoStatements: [
    'Can express academic preferences and compare subjects using simple phrases',
    'Can talk about electives and course schedules with an advisor or peer',
    'Can ask for and give simple opinions on course options',
  ],
  characters: [
    {
      id: 'char_liam_mentor',
      name: 'Liam',
      role: 'Student Academic Mentor',
      avatar: '🎓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'syllabus',
        ipa: '/ˈsɪləbəs/',
        partOfSpeech: 'noun',
        meaning: 'An outline of the subjects in a course of study',
        exampleSentence: 'I read the course syllabus before choosing my electives.',
        translations: { hi: 'पाठ्यक्रम रूपरेखा (सिलेबस)' },
      },
      {
        word: 'elective',
        ipa: '/ɪˈlektɪv/',
        partOfSpeech: 'noun',
        meaning: 'An optional course or subject chosen by the student',
        exampleSentence: 'I chose digital photography as my elective module this term.',
        translations: { hi: 'ऐच्छिक विषय (इलेक्टिव)' },
      },
      {
        word: 'preference',
        ipa: '/ˈprefrəns/',
        partOfSpeech: 'noun',
        meaning: 'A greater liking for one alternative over another',
        exampleSentence: 'Do you have a preference for morning or afternoon classes?',
        translations: { hi: 'पसंद / प्राथमिकता' },
      },
      {
        word: 'workshop',
        ipa: '/ˈwɜːkʃɒp/',
        partOfSpeech: 'noun',
        meaning: 'A practical class in which students discuss and work on hands-on tasks',
        exampleSentence: 'I prefer practical workshops because we learn by doing.',
        translations: { hi: 'व्यावहारिक कार्यशाला (वर्कशॉप)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I prefer practical workshops to long lectures.',
        functionCategory: 'Expressing preference with prefer... to...',
        exampleSentence: 'I prefer studying in the library to studying at home.',
      },
      {
        phrase: 'I would rather take computer science than economics.',
        functionCategory: 'Expressing choice with would rather',
        exampleSentence: 'I would rather study in the morning than in the evening.',
      },
      {
        phrase: 'Which elective do you think is best for beginners?',
        functionCategory: 'Asking for course advice',
        exampleSentence: 'What do you recommend for this semester?',
      },
      {
        phrase: 'That makes sense because I really enjoy hands-on projects.',
        functionCategory: 'Agreeing and giving a simple reason',
        exampleSentence: 'That’s interesting because I like working in teams.',
      },
    ],
    grammar: {
      title: 'Expressing Preferences: Prefer, Like Better & Would Rather',
      conceptExplanation:
        '1. "Prefer + noun/-ing + TO + noun/-ing":\n   - "I prefer workshops to lectures."\n   - "I prefer studying in groups to studying alone."\n2. "Would rather + base verb + THAN + base verb":\n   - "I would rather take art than history."\n3. Giving Simple Reasons:\n   - "...because it is more practical."\n   - "...because I find it fascinating."',
      patternFormula: 'I prefer [Option A] to [Option B] | I would rather [Verb A] than [Verb B] because [Reason]',
      contrastExamples: [
        {
          incorrect: 'I prefer workshops than lectures.',
          correct: 'I prefer workshops to lectures.',
          explanation: 'Use "to" (not "than") with the verb "prefer".',
        },
        {
          incorrect: 'I would rather to study art.',
          correct: 'I would rather study art.',
          explanation: '"Would rather" is followed by the bare infinitive (study, not to study).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Hi there! We need to pick your elective modules today. Do you prefer creative arts or data analysis?',
        translation: 'नमस्ते! हमें आज आपके ऐच्छिक विषय चुनने हैं। क्या आप रचनात्मक कला पसंद करते हैं या डेटा विश्लेषण?',
      },
      {
        speaker: 'Learner',
        text: 'Hi Liam! I prefer data analysis to creative arts because I like working with numbers and computers.',
        translation: 'नमस्ते लियाम! मैं रचनात्मक कला की तुलना में डेटा विश्लेषण पसंद करता हूँ क्योंकि मुझे संख्याओं और कंप्यूटर के साथ काम करना पसंद है।',
      },
      {
        speaker: 'Liam',
        text: 'That sounds great. Would you rather attend morning workshops or afternoon lectures?',
        translation: 'यह बहुत अच्छा लगता है। क्या आप सुबह की कार्यशालाओं में भाग लेना पसंद करेंगे या दोपहर के व्याख्यानों में?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_211_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct preposition: "I prefer practical sessions ______ (to / than / from) theory classes."',
      options: [
        { id: 'opt_1', text: 'to', isCorrect: true },
        { id: 'opt_2', text: 'than', isCorrect: false },
        { id: 'opt_3', text: 'from', isCorrect: false },
      ],
      correctAnswer: 'to',
      explanation: 'We say "prefer X to Y".',
    },
    {
      id: 'cp_211_2',
      type: 'multiple_choice',
      prompt: 'Which sentence uses "would rather" correctly?',
      options: [
        { id: 'opt_1', text: 'I would rather study languages than economics.', isCorrect: true },
        { id: 'opt_2', text: 'I would rather to study languages to economics.', isCorrect: false },
        { id: 'opt_3', text: 'I would rather studying languages than economics.', isCorrect: false },
      ],
      correctAnswer: 'I would rather study languages than economics.',
      explanation: '"Would rather" takes a bare infinitive + than + bare infinitive.',
    },
    {
      id: 'cp_211_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I prefer / to / working in groups / working alone]',
      correctAnswer: 'I prefer working in groups to working alone',
      explanation: 'Subject + prefer + gerund + to + gerund.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_211_1',
      prompt: 'Construct a sentence stating that you prefer morning classes to evening classes because you feel more alert.',
      scenarioContext: 'Explaining your class schedule preference to Liam.',
      targetStructure: 'I prefer morning classes to evening classes because I concentrate better early in the day.',
      wordBank: ['I prefer', 'morning classes', 'to evening classes', 'because I concentrate', 'better early in the day.'],
      acceptableSolutions: [
        'I prefer morning classes to evening classes because I concentrate better early in the day.',
        'I prefer morning classes to evening classes because I study better in the morning.',
      ],
      explanation: 'Formula: I prefer X to Y because [Reason].',
    },
    {
      id: 'sc_211_2',
      prompt: 'Construct a sentence asking Liam which elective subject he would recommend.',
      scenarioContext: 'Asking your mentor for advice.',
      targetStructure: 'Which elective subject would you recommend for this semester?',
      wordBank: ['Which elective subject', 'would you recommend', 'for this semester,', 'Liam?', 'in the course'],
      acceptableSolutions: [
        'Which elective subject would you recommend for this semester?',
        'Which elective do you recommend for this semester?',
      ],
      explanation: 'Question formula: Which elective would you recommend...?',
    },
  ],
  turns: [
    {
      id: 'turn_211_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the academic advising lounge. I am Liam. Today we are selecting your elective subjects for this semester. Looking at the syllabus, do you prefer technology subjects or human sciences?',
      partnerAudioText:
        'Hi there! Welcome to the academic advising lounge. I am Liam. Today we are selecting your elective subjects for this semester. Looking at the syllabus, do you prefer technology subjects or human sciences?',
      partnerQuestionHindi:
        'नमस्ते! अकादमिक सलाह लाउंज में आपका स्वागत है। मैं लियाम हूँ। आज हम इस सेमेस्टर के लिए आपके ऐच्छिक विषय चुन रहे हैं। पाठ्यक्रम को देखते हुए, क्या आप प्रौद्योगिकी विषयों को प्राथमिकता देते हैं या मानव विज्ञान को?',
      expectedFunction: 'Expressing subject preference with "prefer... to..." or "like... better" and giving a simple reason',
      contextGoal: 'State your subject preference (e.g. technology to human sciences) and give a simple reason (e.g. because I like computing and practical tasks)',
      targetVocabulary: ['prefer', 'technology', 'human sciences', 'because', 'practical', 'Liam'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Liam! I prefer technology subjects to human sciences because I really enjoy practical computing skills.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Liam! I like technology courses better because I find coding and data very interesting.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Liam. I definitely prefer technology modules to social sciences because they offer more hands-on lab work.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'preference_statement',
          patterns: ['prefer', 'like', 'would rather', 'technology', 'human sciences', 'computing', 'science'],
          required: true,
        },
        {
          name: 'simple_reason',
          patterns: ['because', 'practical', 'coding', 'interesting', 'skills', 'computers', 'hands-on'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_211_1_prefer_than',
          pattern: /prefer.*than/i,
          errorType: 'grammar',
          message: 'Use "to" with prefer: "I prefer technology subjects to human sciences."',
          correctionPattern: 'I prefer technology subjects to human sciences.',
        },
      ],
      remediationPractice: {
        id: 'rem_211_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I prefer science ______ (to) history."',
        options: [
          { id: 'r1', text: 'to', isCorrect: true },
          { id: 'r2', text: 'than', isCorrect: false },
        ],
        correctAnswer: 'to',
        explanation: 'We use "to" with "prefer".',
      },
    },
    {
      id: 'turn_211_2',
      turnIndex: 2,
      partnerPrompt:
        'Technology is a fantastic choice! We have two options: "Web Development Workshops" or "Computer Science Theory". Would you rather take the hands-on workshop or the lecture course?',
      partnerAudioText:
        'Technology is a fantastic choice! We have two options: "Web Development Workshops" or "Computer Science Theory". Would you rather take the hands-on workshop or the lecture course?',
      partnerQuestionHindi:
        'प्रौद्योगिकी एक शानदार विकल्प है! हमारे पास दो विकल्प हैं: "वेब डेवलपमेंट वर्कशॉप" या "कंप्यूटर साइंस थ्योरी"। क्या आप व्यावहारिक कार्यशाला लेना पसंद करेंगे या व्याख्यान पाठ्यक्रम?',
      expectedFunction: 'Expressing choice using "would rather" and stating why',
      contextGoal: 'Say you would rather take Web Development workshops than theory lectures because you learn best by building things',
      targetVocabulary: ['would rather', 'workshop', 'theory', 'than', 'web development', 'learn'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I would rather take the web development workshop than the theory lectures because I learn best by doing.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’d rather do practical workshops than sit in long lectures. Building websites sounds much more exciting!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I would rather choose the hands-on workshop because practical projects help me understand concepts faster.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'would_rather_choice',
          patterns: ['would rather', 'i’d rather', 'workshop', 'web development', 'practical', 'hands-on'],
          required: true,
        },
        {
          name: 'contrast_reason',
          patterns: ['than', 'theory', 'lectures', 'learn', 'doing', 'building', 'concepts'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_211_2_would_rather_to',
          pattern: /would rather to/i,
          errorType: 'grammar',
          message: 'Do not use "to" after "would rather": say "I would rather take the workshop."',
          correctionPattern: 'I would rather take the workshop than the theory lectures.',
        },
      ],
      remediationPractice: {
        id: 'rem_211_2',
        type: 'multiple_choice',
        prompt: 'Which sentence is correct?',
        options: [
          { id: 'r1', text: 'I would rather take the workshop than lectures.', isCorrect: true },
          { id: 'r2', text: 'I would rather to take the workshop to lectures.', isCorrect: false },
        ],
        correctAnswer: 'I would rather take the workshop than lectures.',
        explanation: '"Would rather" uses bare verb and "than".',
      },
    },
    {
      id: 'turn_211_3',
      turnIndex: 3,
      partnerPrompt:
        'That makes total sense. Learning by doing is very effective. We also need to choose one general elective. Which one do you think sounds most interesting to you, or what would you like to ask me about the options?',
      partnerAudioText:
        'That makes total sense. Learning by doing is very effective. We also need to choose one general elective. Which one do you think sounds most interesting to you, or what would you like to ask me about the options?',
      partnerQuestionHindi:
        'यह पूरी तरह से समझ में आता है। करके सीखना बहुत प्रभावी है। हमें एक सामान्य ऐच्छिक विषय भी चुनना होगा। आपको कौन सा सबसे दिलचस्प लगता है, या आप विकल्पों के बारे में मुझसे क्या पूछना चाहेंगे?',
      expectedFunction: 'Asking the mentor for recommendations on general electives with a follow-up question',
      contextGoal: 'Ask Liam what general elective he recommends for beginners (e.g. "Which elective would you recommend?") and express interest in languages or photography',
      targetVocabulary: ['recommend', 'Which elective', 'What do you think', 'languages', 'photography', 'Liam'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Which general elective would you recommend, Liam? I am interested in foreign languages and photography.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'What do you think about Spanish for Beginners? Would you recommend it for a first-year student?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'What would you recommend between Conversational Spanish and Digital Photography? Which one has lighter coursework?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'asking_recommendation',
          patterns: ['recommend', 'which elective', 'what do you think', 'what would you recommend', 'suggest'],
          required: true,
        },
        {
          name: 'subject_mention',
          patterns: ['spanish', 'languages', 'photography', 'elective', 'coursework', 'options', 'liam'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_211_3_no_question',
          pattern: /^i like photography\.$/i,
          errorType: 'interaction',
          message: 'Remember to ask your mentor for a recommendation: "Which elective would you recommend?"',
          correctionPattern: 'Which elective would you recommend for me?',
        },
      ],
      remediationPractice: {
        id: 'rem_211_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Which course ______ (would) you recommend?"',
        options: [
          { id: 'r1', text: 'would', isCorrect: true },
          { id: 'r2', text: 'do to', isCorrect: false },
        ],
        correctAnswer: 'would',
        explanation: 'Formula: "Which course would you recommend?".',
      },
    },
    {
      id: 'turn_211_4',
      turnIndex: 4,
      partnerPrompt:
        'I highly recommend Conversational Spanish! The teacher is fantastic and it really boosts your communication skills. Shall I register you for Web Development and Spanish right now?',
      partnerAudioText:
        'I highly recommend Conversational Spanish! The teacher is fantastic and it really boosts your communication skills. Shall I register you for Web Development and Spanish right now?',
      partnerQuestionHindi:
        'मैं संवादात्मक स्पैनिश की अत्यधिक अनुशंसा करता हूँ! शिक्षक शानदार हैं और यह वास्तव में आपके संचार कौशल को बढ़ाता है। क्या मैं अभी आपको वेब डेवलपमेंट और स्पैनिश के लिए पंजीकृत कर दूँ?',
      expectedFunction: 'Agreeing enthusiastically, confirming the course choices, and thanking the mentor',
      contextGoal: 'Confirm your choices (Web Development and Spanish), agree to registration, and thank Liam warmly',
      targetVocabulary: ['Yes please', 'register', 'Web Development', 'Spanish', 'thank you', 'Liam', 'sounds great'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please! That sounds great. Please register me for Web Development and Conversational Spanish. Thank you, Liam!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Yes, definitely! Those two subjects fit my learning goals perfectly. Thanks so much for your advice, Liam.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'That’s a perfect plan! I’m really excited about both classes. Thank you for guiding me through the syllabus today!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'confirmation_agreement',
          patterns: ['yes please', 'yes', 'register', 'perfect plan', 'sounds great', 'definitely', 'sounds perfect'],
          required: true,
        },
        {
          name: 'gratitude_closing',
          patterns: ['thank you', 'thanks', 'liam', 'advice', 'goals', 'syllabus', 'classes'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_211_4_short',
          pattern: /^(yes|ok)$/i,
          errorType: 'interaction',
          message: 'Give a friendly confirmation: "Yes please! Thank you for your help, Liam."',
          correctionPattern: 'Yes please! Thank you very much for your help, Liam.',
        },
      ],
      remediationPractice: {
        id: 'rem_211_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms your choices politely?',
        options: [
          { id: 'r1', text: 'Yes please! Please register me for both subjects. Thank you, Liam!', isCorrect: true },
          { id: 'r2', text: 'Yes register bye.', isCorrect: false },
        ],
        correctAnswer: 'Yes please! Please register me for both subjects. Thank you, Liam!',
        explanation: 'Polite, enthusiastic, and confirms the request.',
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
