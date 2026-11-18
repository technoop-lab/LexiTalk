import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_215: ConversationDefinition = {
  id: 'conv_a2_215',
  title: 'Learning Strategies & How to Learn Effectively',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_215'],
  estimatedMinutes: 5,
  scenario:
    'You are in the campus study skills workshop with academic learning coach Arthur. You discuss effective memorization and study techniques, including active recall, spaced repetition, flashcard apps, and using mnemonics to boost vocabulary retention before tests.',
  communicativeGoals: [
    'Explain learning methods using gerunds as subjects ("Testing yourself regularly improves long-term memory", "Using flashcards is very efficient")',
    'Talk about active recall, spaced repetition, and memory retention in simple A2 English',
    'Compare passive re-reading with active testing and give personal study examples',
    'Ask for coach recommendations on practical digital flashcard tools',
  ],
  canDoStatements: [
    'Can describe how you study and learn new information using gerund subjects',
    'Can discuss the benefits of active recall and spaced practice',
    'Can exchange learning strategies and study tips with a teacher or peer',
  ],
  characters: [
    {
      id: 'char_arthur_coach',
      name: 'Arthur',
      role: 'Academic Skills & Learning Coach',
      avatar: '🧠',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'retention',
        ipa: '/rɪˈtenʃn/',
        partOfSpeech: 'noun',
        meaning: 'The ability to retain or remember information and facts over time',
        exampleSentence: 'Spaced repetition dramatically improves vocabulary retention.',
        translations: { hi: 'याद रखने की क्षमता / स्मृति धारणा (रिटेंशन)' },
      },
      {
        word: 'mnemonic',
        ipa: '/nɪˈmɒnɪk/',
        partOfSpeech: 'noun',
        meaning: 'A system or pattern such as rhymes or acronyms used to help remember things',
        exampleSentence: 'I created a fun mnemonic to remember the spelling of difficult words.',
        translations: { hi: 'स्मरण-सहायक युक्ति (निमोनिक)' },
      },
      {
        word: 'recall',
        ipa: '/rɪˈkɔːl/',
        partOfSpeech: 'noun',
        meaning: 'The act of retrieving information from memory without looking at notes',
        exampleSentence: 'Active recall is much more powerful than simply re-reading highlighted textbooks.',
        translations: { hi: 'पुनः स्मरण / याद करना (रिकॉल)' },
      },
      {
        word: 'repetition',
        ipa: '/ˌrepəˈtɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of repeating something that has already been learned or done',
        exampleSentence: 'Spaced repetition helps move new vocabulary into long-term memory.',
        translations: { hi: 'पुनरावृत्ति / दोहराव (रेपेटिशन)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Testing yourself actively is much more effective than re-reading notes.',
        functionCategory: 'Comparing study strategies using gerunds',
        exampleSentence: 'Practicing old exam questions helps test your knowledge.',
      },
      {
        phrase: 'How can I improve my long-term memory retention for vocabulary?',
        functionCategory: 'Asking for learning advice',
        exampleSentence: 'What is the best way to review before a test?',
      },
      {
        phrase: 'I use digital flashcards on my phone during my daily bus commute.',
        functionCategory: 'Explaining personal learning habit',
        exampleSentence: 'Reviewing ten words every morning builds consistency.',
      },
      {
        phrase: 'That makes total sense; I will start applying that today.',
        functionCategory: 'Action-oriented agreement',
        exampleSentence: 'That is a really helpful tip, thank you.',
      },
    ],
    grammar: {
      title: 'Gerunds (-ing) as Sentence Subjects in Learning Advice',
      conceptExplanation:
        '1. Using Gerund (-ing) as a singular Subject:\n   - "Testing yourself builds stronger memory."\n   - "Using flashcards is very efficient."\n   - "Summarizing paragraphs helps with comprehension."\n2. Note: Gerund subjects always take singular verbs:\n   - "Reviewing notes IS helpful" (NOT "are helpful").',
      patternFormula: '[Verb-ing + Object] + [Singular Verb: is/helps/improves] + [Complement]',
      contrastExamples: [
        {
          incorrect: 'Use flashcards are good for memory.',
          correct: 'Using flashcards is good for memory.',
          explanation: 'Use the gerund "Using" as the subject with a singular verb "is".',
        },
        {
          incorrect: 'Test myself help me learn.',
          correct: 'Testing myself helps me learn.',
          explanation: 'Gerund subject "Testing" requires third-person singular verb "helps".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Arthur',
        text: 'Welcome to the workshop! Many students just re-read their textbooks ten times. What study strategy works best for you?',
        translation: 'कार्यशाला में आपका स्वागत है! कई छात्र सिर्फ अपनी पाठ्यपुस्तकों को दस बार दोबारा पढ़ते हैं। आपके लिए कौन सी अध्ययन रणनीति सबसे अच्छा काम करती है?',
      },
      {
        speaker: 'Learner',
        text: 'Testing myself with flashcards works best because active recall forces my brain to remember the answers.',
        translation: 'फ्लैशकार्ड के साथ खुद का परीक्षण करना सबसे अच्छा काम करता है क्योंकि एक्टिव रिकॉल मेरे मस्तिष्क को उत्तर याद रखने के लिए मजबूर करता है।',
      },
      {
        speaker: 'Arthur',
        text: 'Spot on! Active recall is scientifically proven to boost long-term retention.',
        translation: 'बिल्कुल सही! सक्रिय स्मरण वैज्ञानिक रूप से दीर्घकालिक याददाश्त को बढ़ावा देने के लिए सिद्ध हुआ है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_215_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct gerund: "______ (Reviewing / Review / Reviewed) new words every two days boosts retention."',
      options: [
        { id: 'opt_1', text: 'Reviewing', isCorrect: true },
        { id: 'opt_2', text: 'Review', isCorrect: false },
        { id: 'opt_3', text: 'Reviewed', isCorrect: false },
      ],
      correctAnswer: 'Reviewing',
      explanation: 'Use the gerund "Reviewing" as the subject of the sentence.',
    },
    {
      id: 'cp_215_2',
      type: 'multiple_choice',
      prompt: 'Which sentence has correct subject-verb agreement with a gerund?',
      options: [
        { id: 'opt_1', text: 'Practicing past papers is very helpful before exams.', isCorrect: true },
        { id: 'opt_2', text: 'Practicing past papers are very helpful before exams.', isCorrect: false },
        { id: 'opt_3', text: 'Practice past papers is very helpful before exams.', isCorrect: false },
      ],
      correctAnswer: 'Practicing past papers is very helpful before exams.',
      explanation: 'Gerund subjects ("Practicing...") take singular verb "is".',
    },
    {
      id: 'cp_215_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [using spaced repetition / improves / long-term memory / retention]',
      correctAnswer: 'using spaced repetition improves long-term memory retention',
      explanation: 'Gerund subject + singular verb + object phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_215_1',
      prompt: 'Construct a sentence stating that creating flashcards helps you remember difficult vocabulary words.',
      scenarioContext: 'Explaining your study strategy to Coach Arthur.',
      targetStructure: 'Creating digital flashcards helps me remember difficult vocabulary words easily.',
      wordBank: ['Creating digital flashcards', 'helps me remember', 'difficult vocabulary words', 'easily', 'every day.'],
      acceptableSolutions: [
        'Creating digital flashcards helps me remember difficult vocabulary words easily.',
        'Creating flashcards helps me remember difficult vocabulary words.',
      ],
      explanation: 'Gerund subject formula: Creating flashcards helps...',
    },
    {
      id: 'sc_215_2',
      prompt: 'Construct a sentence asking Arthur what mnemonic techniques he recommends for science terms.',
      scenarioContext: 'Asking for learning advice in the workshop.',
      targetStructure: 'What mnemonic techniques do you recommend for memorizing complex terms, Arthur?',
      wordBank: ['What mnemonic techniques', 'do you recommend', 'for memorizing complex terms,', 'Arthur?', 'in science'],
      acceptableSolutions: [
        'What mnemonic techniques do you recommend for memorizing complex terms, Arthur?',
        'What mnemonic techniques do you recommend for complex terms, Arthur?',
      ],
      explanation: 'Inquiry structure with "What mnemonic techniques do you recommend...?".',
    },
  ],
  turns: [
    {
      id: 'turn_215_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello and welcome to the study skills clinic! I am Arthur. Today we are looking at how to learn smarter rather than just studying longer hours. When you prepare for a vocabulary or concept test, what learning method do you currently use?',
      partnerAudioText:
        'Hello and welcome to the study skills clinic! I am Arthur. Today we are looking at how to learn smarter rather than just studying longer hours. When you prepare for a vocabulary or concept test, what learning method do you currently use?',
      partnerQuestionHindi:
        'नमस्ते और अध्ययन कौशल क्लिनिक में आपका स्वागत है! मैं आर्थर हूँ। आज हम देख रहे हैं कि केवल लंबे समय तक अध्ययन करने के बजाय अधिक होशियारी से कैसे सीखें। जब आप शब्दावली या अवधारणा परीक्षण की तैयारी करते हैं, तो आप वर्तमान में किस सीखने की विधि का उपयोग करते हैं?',
      expectedFunction: 'Describing a learning strategy using a gerund subject and explaining its benefit',
      contextGoal: 'Explain your study method (e.g. creating flashcards, testing yourself with active recall, or writing summaries) using a gerund subject',
      targetVocabulary: ['flashcards', 'testing myself', 'active recall', 'retention', 'helps', 'Arthur', 'hello'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Arthur! Creating digital flashcards and testing myself with active recall helps me remember new words much faster.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Arthur. Using flashcard apps is my main strategy because it forces me to recall definitions from memory.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Arthur! Writing short summaries and quizzing myself with past questions is the most effective method for my memory retention.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_coach',
          patterns: ['hello', 'hi', 'arthur', 'good morning'],
          required: true,
        },
        {
          name: 'gerund_strategy',
          patterns: ['creating', 'using', 'testing', 'quizzing', 'writing', 'flashcards', 'active recall', 'summaries'],
          required: true,
        },
        {
          name: 'learning_benefit',
          patterns: ['helps', 'remember', 'words', 'retention', 'memory', 'recall', 'faster', 'effective'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_215_1_no_gerund',
          pattern: /^i use flashcard and read\.$/i,
          errorType: 'structure',
          message: 'Try using a gerund subject: "Using flashcards helps me remember words quickly."',
          correctionPattern: 'Using flashcards helps me remember vocabulary quickly.',
        },
      ],
      remediationPractice: {
        id: 'rem_215_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Using) flashcards is very effective."',
        options: [
          { id: 'r1', text: 'Using', isCorrect: true },
          { id: 'r2', text: 'Use to', isCorrect: false },
        ],
        correctAnswer: 'Using',
        explanation: 'Gerund as sentence subject.',
      },
    },
    {
      id: 'turn_215_2',
      turnIndex: 2,
      partnerPrompt:
        'Active recall is fantastic! Scientifically, self-testing creates much stronger neural pathways than passive re-reading. Have you ever tried spaced repetition schedules—like reviewing on day 1, day 3, day 7, and day 14?',
      partnerAudioText:
        'Active recall is fantastic! Scientifically, self-testing creates much stronger neural pathways than passive re-reading. Have you ever tried spaced repetition schedules—like reviewing on day 1, day 3, day 7, and day 14?',
      partnerQuestionHindi:
        'एक्टिव रिकॉल शानदार है! वैज्ञानिक रूप से, खुद का परीक्षण करना केवल निष्क्रिय रूप से दोबारा पढ़ने की तुलना में अधिक मजबूत याददाश्त बनाता है। क्या आपने कभी स्पेस्ड रिपीटिशन शेड्यूल आज़माया है—जैसे दिन 1, दिन 3, दिन 7 और दिन 14 पर समीक्षा करना?',
      expectedFunction: 'Responding about experience with spaced repetition and explaining its effect on retention',
      contextGoal: 'Explain your experience with spaced repetition (e.g. you have used it and it prevents forgetting, or you want to start using it with an app)',
      targetVocabulary: ['spaced repetition', 'retention', 'forgetting', 'schedule', 'memory', 'app', 'tried'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, I have! Using spaced repetition stops me from forgetting vocabulary right before big exams.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’ve used an app that calculates the review intervals automatically. It really improves my long-term retention!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I haven’t tried a strict 14-day schedule yet, but spacing my review sessions across the week makes study time much less stressful.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'spaced_repetition_response',
          patterns: ['yes', 'have', 'used', 'tried', 'spaced repetition', 'schedule', 'intervals', 'app', 'haven’t'],
          required: true,
        },
        {
          name: 'retention_outcome',
          patterns: ['retention', 'forgetting', 'memory', 'exams', 'improves', 'long-term', 'stressful', 'review'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_215_2_vague',
          pattern: /^yes i try it$/i,
          errorType: 'grammar',
          message: 'Use present perfect or past: "Yes, I have tried it and it improves my retention."',
          correctionPattern: 'Yes, I have tried spaced repetition and it really helps my memory.',
        },
      ],
      remediationPractice: {
        id: 'rem_215_2',
        type: 'multiple_choice',
        prompt: 'Which response describes the advantage of spaced repetition clearly?',
        options: [
          { id: 'r1', text: 'Using spaced repetition prevents forgetting and improves long-term retention.', isCorrect: true },
          { id: 'r2', text: 'Spaced repeat is okay maybe.', isCorrect: false },
        ],
        correctAnswer: 'Using spaced repetition prevents forgetting and improves long-term retention.',
        explanation: 'Accurate vocabulary and clear cause-effect explanation.',
      },
    },
    {
      id: 'turn_215_3',
      turnIndex: 3,
      partnerPrompt:
        'Another powerful tool is using mnemonics and visualization for abstract rules. What kind of memory tricks or apps do you like to use, or what would you like to ask me about choosing the right study app?',
      partnerAudioText:
        'Another powerful tool is using mnemonics and visualization for abstract rules. What kind of memory tricks or apps do you like to use, or what would you like to ask me about choosing the right study app?',
      partnerQuestionHindi:
        'एक अन्य शक्तिशाली उपकरण अमूर्त नियमों के लिए निमोनिक्स (mnemonics) और दृश्यीकरण (visualization) का उपयोग करना है। आप किस प्रकार के मेमोरी ट्रिक्स या ऐप्स का उपयोग करना पसंद करते हैं, या आप सही अध्ययन ऐप चुनने के बारे में मुझसे क्या पूछना चाहेंगे?',
      expectedFunction: 'Sharing a memory trick and asking Coach Arthur for app recommendations',
      contextGoal: 'Mention a mnemonic trick or ask Arthur what flashcard app he recommends for language learners',
      targetVocabulary: ['mnemonic', 'app', 'recommend', 'What app', 'flashcards', 'Arthur'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I often make silly rhymes to remember spelling rules. What digital flashcard app would you recommend for language learning, Arthur?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I create mental pictures for difficult terms. Which app do you think is best for automated spaced repetition, Arthur?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I love using acronyms for lists. Would you recommend Anki or Quizlet for building custom vocabulary decks?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'trick_or_feature',
          patterns: ['rhymes', 'pictures', 'acronyms', 'mnemonic', 'tricks', 'memory', 'spelling', 'mental'],
          required: true,
        },
        {
          name: 'recommendation_question',
          patterns: ['what app', 'which app', 'recommend', 'what do you think', 'anki', 'quizlet', 'arthur'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_215_3_no_question',
          pattern: /^i use pictures\.$/i,
          errorType: 'interaction',
          message: 'Remember to ask Coach Arthur: "What flashcard app would you recommend for language learners?"',
          correctionPattern: 'I use mental pictures. What study app would you recommend, Arthur?',
        },
      ],
      remediationPractice: {
        id: 'rem_215_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Which app do you ______ (recommend), Arthur?"',
        options: [
          { id: 'r1', text: 'recommend', isCorrect: true },
          { id: 'r2', text: 'recommending', isCorrect: false },
        ],
        correctAnswer: 'recommend',
        explanation: 'Base verb after "do you".',
      },
    },
    {
      id: 'turn_215_4',
      turnIndex: 4,
      partnerPrompt:
        'Anki is superb for spaced repetition algorithms, while Quizlet is wonderful for quick shared decks! If you combine 20 minutes of daily active recall with spaced repetition, you will see a huge boost in your grades. Shall we create your first deck together now?',
      partnerAudioText:
        'Anki is superb for spaced repetition algorithms, while Quizlet is wonderful for quick shared decks! If you combine 20 minutes of daily active recall with spaced repetition, you will see a huge boost in your grades. Shall we create your first deck together now?',
      partnerQuestionHindi:
        'अंकी (Anki) स्पेस्ड रिपीटिशन एल्गोरिदम के लिए शानदार है, जबकि क्विजलेट त्वरित साझा डेक के लिए बहुत अच्छा है! यदि आप स्पेस्ड रिपीटिशन के साथ 20 मिनट के दैनिक सक्रिय स्मरण को मिलाते हैं, तो आप अपने अंकों में भारी सुधार देखेंगे। क्या हम अब मिलकर अपना पहला डेक बनाएं?',
      expectedFunction: 'Agreeing enthusiastically to build the first study deck and thanking the coach',
      contextGoal: 'Agree to build the first deck with Arthur, say you will download the app, and thank him for his guidance',
      targetVocabulary: ['Yes please', 'create', 'deck', 'Anki', 'thank you', 'Arthur', 'boost'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes please! Let’s build my first vocabulary deck right now. Thank you so much for the expert tips, Arthur!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds amazing! I’m ready to set up my Anki cards. Thanks for explaining active recall so clearly, Arthur.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’d love that! Building a solid deck today will really set me up for exam success. Thanks a lot for your help, Arthur!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'enthusiastic_agreement',
          patterns: ['yes please', 'sounds amazing', 'love that', 'let’s build', 'ready', 'set up'],
          required: true,
        },
        {
          name: 'closing_gratitude',
          patterns: ['thank you', 'thanks', 'arthur', 'tips', 'help', 'deck', 'anki'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_215_4_short',
          pattern: /^(yes|ok)$/i,
          errorType: 'interaction',
          message: 'Accept with enthusiasm: "Yes please! Let’s create my first flashcard deck. Thank you, Arthur!"',
          correctionPattern: 'Yes please! Let’s create the deck now. Thank you for your help, Arthur.',
        },
      ],
      remediationPractice: {
        id: 'rem_215_4',
        type: 'multiple_choice',
        prompt: 'Which response is the most polite and motivating?',
        options: [
          { id: 'r1', text: 'Yes please! Let’s build my first deck right now. Thank you, Arthur!', isCorrect: true },
          { id: 'r2', text: 'Yeah make deck.', isCorrect: false },
        ],
        correctAnswer: 'Yes please! Let’s build my first deck right now. Thank you, Arthur!',
        explanation: 'Enthusiastic and polite closing.',
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
