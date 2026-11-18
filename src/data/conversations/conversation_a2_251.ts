import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_251: ConversationDefinition = {
  id: 'conv_a2_251',
  title: 'Giving Opinions About Media & Cultural Topics',
  cefr: 'A2',
  unitId: 'unit_a2_17',
  lessonLinks: ['lesson_a2_17_251'],
  estimatedMinutes: 5,
  scenario:
    'You are in a media and society discussion group with moderator Chloe. You share your perspectives on modern streaming platforms versus traditional cinemas, evaluate the impact of digital media on daily reading habits, justify your viewpoints with clear examples, and mediate diverse opinions within the group.',
  communicativeGoals: [
    'Express, justify, and qualify personal opinions on media, movies, and digital habits in A2 English',
    'Use opinion-giving chunks: "in my view...", "I tend to think that...", "from my perspective...", "the main advantage is..."',
    'Contrast digital media consumption with traditional reading and cinema experiences',
    'Summarize and mediate differing opinions diplomatically',
  ],
  canDoStatements: [
    'Can express personal opinions on familiar cultural and media topics with simple justifications',
    'Can give reasons why they agree or disagree with common views on modern technology and media',
    'Can summarize points of view shared in a group discussion',
  ],
  characters: [
    {
      id: 'char_chloe_moderator',
      name: 'Chloe',
      role: 'Media Discussion Group Moderator',
      avatar: '🎙️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'in my view',
        ipa: '/ɪn maɪ vjuː/',
        partOfSpeech: 'phrase',
        meaning: 'Used to introduce one’s personal opinion or assessment of a situation',
        exampleSentence: 'In my view, watching movies in a cinema is far more memorable than watching on a phone.',
        translations: { hi: 'मेरी दृष्टि में / मेरी राय में (इन माई व्यू)' },
      },
      {
        word: 'perspective',
        ipa: '/pəˈspektɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'From my perspective, streaming services offer great convenience and flexibility.',
        translations: { hi: 'दृष्टिकोण / नज़रिया (पर्सपेक्टिव)' },
      },
      {
        word: 'advantage',
        ipa: '/ədˈvɑːntɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'A condition or circumstance that puts someone in a favorable or superior position',
        exampleSentence: 'The main advantage of audiobooks is that you can listen while cooking.',
        translations: { hi: 'लाभ / फ़ायदा (एडवांटेज)' },
      },
      {
        word: 'convenient',
        ipa: '/kənˈviːniənt/',
        partOfSpeech: 'adjective',
        meaning: 'Fitting in well with a person’s needs, activities, and plans; easy and comfortable',
        exampleSentence: 'Streaming apps are very convenient because you can pause whenever you want.',
        translations: { hi: 'सुविधाजनक (कन्वीनियंट)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In my opinion, the main advantage is...',
        functionCategory: 'Stating primary benefits and arguments',
        exampleSentence: 'In my opinion, the main advantage is the huge variety of educational documentaries.',
      },
      {
        phrase: 'From my perspective, it depends on...',
        functionCategory: 'Qualifying opinions with nuance',
        exampleSentence: 'From my perspective, it depends on how much screen time people spend each day.',
      },
      {
        phrase: 'I personally prefer... because...',
        functionCategory: 'Expressing justified personal preference',
        exampleSentence: 'I personally prefer physical books because they do not strain your eyes.',
      },
      {
        phrase: 'While some people think... I believe...',
        functionCategory: 'Contrasting popular views with personal stance',
        exampleSentence: 'While some people think print newspapers are outdated, I believe they are still valuable.',
      },
    ],
    grammar: {
      title: 'Structuring Opinions: Introductory Stance Markers & Contrast Conjunctions (While / Whereas)',
      conceptExplanation:
        '1. Stance markers: "In my view / From my perspective / I tend to think that..." followed by a full clause.\n2. Contrast conjunctions: "While streaming is convenient, the cinema provides a better sensory experience."\n3. Giving reasons: "because / since / as a result."',
      patternFormula: 'In my view, [Option A] is [more convenient / more engaging] because [Reason], while [Option B] is [Benefit]',
      contrastExamples: [
        {
          incorrect: 'In my opinion, I am agree that cinema is better.',
          correct: 'In my opinion, cinema is more engaging because of the big screen.',
          explanation: 'Never say "I am agree". Use "I agree" or state the stance directly after "In my opinion".',
        },
        {
          incorrect: 'From my perspective is very easy to watch.',
          correct: 'From my perspective, it is very easy to watch movies online.',
          explanation: 'Requires a dummy subject "it is" after the comma.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'Welcome everyone! Today we are discussing digital media versus traditional cinema. What is your perspective on this shift?',
        translation: 'सभी का स्वागत है! आज हम डिजिटल मीडिया बनाम पारंपरिक सिनेमा पर चर्चा कर रहे हैं। इस बदलाव पर आपका क्या दृष्टिकोण है?',
      },
      {
        speaker: 'Learner',
        text: 'In my view, streaming platforms are extremely convenient, but going to the cinema creates a special shared experience.',
        translation: 'मेरी राय में, स्ट्रीमिंग प्लेटफॉर्म बेहद सुविधाजनक हैं, लेकिन सिनेमा जाना एक विशेष साझा अनुभव बनाता है।',
      },
      {
        speaker: 'Chloe',
        text: 'Well put! How do you think this affects our reading habits?',
        translation: 'बहुत अच्छे से कहा! आपको क्या लगता है कि यह हमारी पढ़ने की आदतों को कैसे प्रभावित करता है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_251_1',
      type: 'fill_blank',
      prompt: 'Complete: "In my ______ (view / eyes / look), digital audiobooks make learning more accessible."',
      options: [
        { id: 'opt_1', text: 'view', isCorrect: true },
        { id: 'opt_2', text: 'eyes', isCorrect: false },
        { id: 'opt_3', text: 'look', isCorrect: false },
      ],
      correctAnswer: 'view',
      explanation: '"In my view" is the idiomatic phrase for expressing an opinion.',
    },
    {
      id: 'cp_251_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly justifies a personal opinion about media?',
      options: [
        { id: 'opt_1', text: 'From my perspective, printed books are better because they don’t cause eye fatigue.', isCorrect: true },
        { id: 'opt_2', text: 'In my view I am agree printed books are good reason.', isCorrect: false },
        { id: 'opt_3', text: 'From my perspective is good to read printed books.', isCorrect: false },
      ],
      correctAnswer: 'From my perspective, printed books are better because they don’t cause eye fatigue.',
      explanation: 'Clear introductory phrase + subject + reason clause.',
    },
    {
      id: 'cp_251_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [The main advantage of streaming / is that you can watch / documentaries anytime]',
      correctAnswer: 'The main advantage of streaming is that you can watch documentaries anytime',
      explanation: 'Subject phrase + "is that" + content clause.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_251_1',
      prompt: 'Construct a sentence stating that in my view, the main advantage of online news is instant updates.',
      scenarioContext: 'Sharing an opinion with Chloe.',
      targetStructure: 'In my view, the main advantage of online news is instant updates.',
      wordBank: ['In my view,', 'the main advantage of', 'online news is', 'instant updates.', 'perspective to'],
      acceptableSolutions: [
        'In my view, the main advantage of online news is instant updates.',
        'In my opinion, the main advantage of online news is instant updates.',
      ],
      explanation: '"In my view, the main advantage of [X] is [Y]".',
    },
    {
      id: 'sc_251_2',
      prompt: 'Construct a sentence stating that while streaming is convenient, going to the cinema is more exciting.',
      scenarioContext: 'Contrasting two media experiences.',
      targetStructure: 'While streaming is convenient, going to the cinema is more exciting.',
      wordBank: ['While streaming is convenient,', 'going to the cinema', 'is more exciting.', 'advantage is', 'agreeing to'],
      acceptableSolutions: [
        'While streaming is convenient, going to the cinema is more exciting.',
        'Although streaming is convenient, going to the cinema is more exciting.',
      ],
      explanation: 'Contrast clause using "While...".',
    },
  ],
  turns: [
    {
      id: 'turn_251_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello everyone! Welcome to our weekly Media & Society circle. Today we are exploring modern media consumption. Between watching films on home streaming apps and going to a traditional movie theater, which do you prefer and why?',
      partnerAudioText:
        'Hello everyone! Welcome to our weekly Media & Society circle. Today we are exploring modern media consumption. Between watching films on home streaming apps and going to a traditional movie theater, which do you prefer and why?',
      partnerQuestionHindi:
        'नमस्ते सभी को! हमारे साप्ताहिक मीडिया और समाज सर्कल में आपका स्वागत है। आज हम आधुनिक मीडिया खपत की खोज कर रहे हैं। होम स्ट्रीमिंग ऐप्स पर फिल्में देखने और पारंपरिक मूवी थियेटर जाने के बीच, आप किसे पसंद करते हैं और क्यों?',
      expectedFunction: 'Greeting Chloe and stating a justified opinion on streaming versus movie theaters using opinion phrases',
      contextGoal: 'Greet Chloe, use phrases like "In my view" or "From my perspective", and explain why you prefer streaming or theaters',
      targetVocabulary: ['Hello Chloe', 'In my view', 'From my perspective', 'streaming platforms', 'cinema', 'main advantage', 'convenient'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hello Chloe! In my view, streaming at home is much more convenient because you can watch on your own schedule. However, I still love going to the cinema for big visual effects and the immersive sound.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hi Chloe! From my perspective, going to the movie theater is a wonderful social experience with friends, while streaming is great for relaxing after work.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Good evening! I prefer cinema because of the big screen and energetic atmosphere, though streaming offers a huge selection of movies.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_chloe',
          patterns: ['hello', 'hi', 'chloe', 'good evening', 'good afternoon'],
          required: true,
        },
        {
          name: 'opinion_and_comparison',
          patterns: ['in my view', 'from my perspective', 'in my opinion', 'prefer', 'streaming', 'cinema', 'theater', 'convenient', 'advantage', 'screen', 'sound'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_251_1_i_am_agree',
          pattern: /i am agree/i,
          errorType: 'grammar',
          message: 'Say "I agree" or "In my view" instead of "I am agree".',
          correctionPattern: 'In my view, streaming offers great flexibility.',
        },
      ],
      remediationPractice: {
        id: 'rem_251_1',
        type: 'fill_blank',
        prompt: 'Fill in: "In my ______ (view / seeing), cinema sound is unbeatable."',
        options: [
          { id: 'r1', text: 'view', isCorrect: true },
          { id: 'r2', text: 'seeing', isCorrect: false },
        ],
        correctAnswer: 'view',
        explanation: '"In my view" is the correct fixed idiom.',
      },
    },
    {
      id: 'turn_251_2',
      turnIndex: 2,
      partnerPrompt:
        'A very balanced perspective! Some critics argue that short social media videos are reducing people’s attention spans and causing people to read fewer books. What is your opinion on this topic?',
      partnerAudioText:
        'A very balanced perspective! Some critics argue that short social media videos are reducing people’s attention spans and causing people to read fewer books. What is your opinion on this topic?',
      partnerQuestionHindi:
        'एक बहुत ही संतुलित दृष्टिकोण! कुछ आलोचकों का तर्क है कि छोटे सोशल मीडिया वीडियो लोगों के ध्यान की अवधि को कम कर रहे हैं और लोगों को कम किताबें पढ़ने के लिए मजबूर कर रहे हैं। इस विषय पर आपकी क्या राय है?',
      expectedFunction: 'Expressing a nuanced opinion on social media and reading habits with reasons and examples',
      contextGoal: 'Explain your view: short videos can be entertaining, but deep reading requires focus, so balancing screen time is essential',
      targetVocabulary: ['From my perspective', 'attention span', 'reading books', 'short videos', 'balance screen time', 'it depends on'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'From my perspective, I think that is partly true. Short video clips are entertaining, but they make it harder to concentrate on long texts. It is important to set healthy limits on screen time and make time for reading.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'In my opinion, it depends on personal habits. While quick videos are popular, many young people also discover great books through online book clubs and digital readers.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I agree that fast videos can be distracting, but technology also gives us easy access to e-books and educational articles.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'opinion_marker',
          patterns: ['from my perspective', 'in my opinion', 'i think', 'i believe', 'partly true', 'it depends on'],
          required: true,
        },
        {
          name: 'media_habit_arguments',
          patterns: ['attention span', 'short videos', 'reading', 'books', 'screen time', 'focus', 'concentrate', 'habits', 'technology', 'distracting'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_251_2_depends_of',
          pattern: /depends of/i,
          errorType: 'grammar',
          message: 'Say "it depends on" (preposition "on").',
          correctionPattern: 'It depends on personal screen habits.',
        },
      ],
      remediationPractice: {
        id: 'rem_251_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly introduces a qualified viewpoint?',
        options: [
          { id: 'r1', text: 'From my perspective, it depends on how we balance our daily screen time.', isCorrect: true },
          { id: 'r2', text: 'From my perspective it is depend of daily screen time balance.', isCorrect: false },
        ],
        correctAnswer: 'From my perspective, it depends on how we balance our daily screen time.',
        explanation: 'Correct preposition and phrasing: "it depends on".',
      },
    },
    {
      id: 'turn_251_3',
      turnIndex: 3,
      partnerPrompt:
        'Two members in our circle have opposing views: one says all printed media will disappear within ten years, while the other believes printed books will always remain popular. Could you mediate a balanced summary bridging both viewpoints?',
      partnerAudioText:
        'Two members in our circle have opposing views: one says all printed media will disappear within ten years, while the other believes printed books will always remain popular. Could you mediate a balanced summary bridging both viewpoints?',
      partnerQuestionHindi:
        'हमारे सर्कल के दो सदस्यों के विपरीत विचार हैं: एक का कहना है कि दस साल के भीतर सभी मुद्रित मीडिया गायब हो जाएंगे, जबकि दूसरे का मानना है कि मुद्रित किताबें हमेशा लोकप्रिय रहेंगी। क्या आप दोनों दृष्टिकोणों को जोड़ने वाला एक संतुलित सारांश मध्यस्थता (mediate) कर सकते हैं?',
      expectedFunction: 'Mediating opposing opinions by finding common ground and summarizing both sides objectively in A2 English',
      contextGoal: 'Acknowledge both sides: digital is growing fast for quick news, but physical books offer tactile comfort and will co-exist peacefully',
      targetVocabulary: ['Both viewpoints have valid points', 'While digital media offers convenience', 'printed books offer', 'co-exist', 'balanced conclusion'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Both viewpoints have valid points! While digital media offers unmatched speed and convenience for daily news, printed books provide a unique tactile experience and reduce screen fatigue. I believe both formats will co-exist successfully.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'To summarize both sides: digital tools are great for fast information, but physical books have lasting emotional and artistic value. There is definitely room for both in our lives.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Both sides make good arguments. Digital reading is practical for travel, while printed books are wonderful at home. Both can thrive together.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'balanced_mediation_marker',
          patterns: ['both viewpoints', 'both sides', 'valid points', 'summarize', 'good arguments', 'room for both'],
          required: true,
        },
        {
          name: 'coexistence_concepts',
          patterns: ['digital', 'printed', 'books', 'convenience', 'co-exist', 'together', 'tactile', 'experience', 'both formats'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_251_3_one_is_wrong',
          pattern: /^one side is completely wrong\.$/i,
          errorType: 'interaction',
          message: 'Mediate constructively: "Both viewpoints have valid points; digital media is convenient, while physical books have lasting value."',
          correctionPattern: 'Both viewpoints have valid points; they can co-exist.',
        },
      ],
      remediationPractice: {
        id: 'rem_251_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Both viewpoints have valid points / because digital and printed formats / can co-exist peacefully]',
        correctAnswer: 'Both viewpoints have valid points because digital and printed formats can co-exist peacefully',
        explanation: 'Mediation opening + causal synthesis.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
