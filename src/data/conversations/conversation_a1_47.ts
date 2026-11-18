import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_47: ConversationDefinition = {
  id: 'conv_a1_47',
  title: 'Making Requests, Inquiries & Asking for Clarification',
  cefr: 'A1',
  unitId: 'unit_a1_4',
  lessonLinks: ['lesson_a1_4_47'],
  estimatedMinutes: 5,
  scenario:
    'You are attending a professional development seminar. During a fast-paced presentation on data analysis, you ask the workshop instructor Chloe to clarify key concepts, repeat definitions, and explain specific terminology politely using "Could you...", "Would you mind...", and "What does ... mean?".',
  communicativeGoals: [
    'Make polite requests using "Could you please + base verb" and "May I ask...?"',
    'Ask for repetition when speech is too fast ("Could you speak a little slower?", "Could you repeat that?")',
    'Ask for definitions and clarifications ("What does this word mean?", "Could you give an example?")',
    'Acknowledge understanding and take notes politely in English',
  ],
  canDoStatements: [
    'Can ask for repetition or clarification politely when not understanding (CEFR A1.2)',
    'Can use "Could you please..." and "May I ask..." to make polite inquiries',
    'Can ask what a word or expression means in educational or workplace settings',
  ],
  characters: [
    {
      id: 'char_chloe_trainer',
      name: 'Chloe',
      role: 'Workshop Instructor',
      avatar: '👩‍🏫',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'clarify',
        ipa: '/ˈklærɪfaɪ/',
        partOfSpeech: 'verb',
        meaning: 'Make a statement or situation less confused and more comprehensible',
        exampleSentence: 'Could you please clarify the second step of the analysis?',
        translations: { hi: 'स्पष्ट करना' },
      },
      {
        word: 'repeat',
        ipa: '/rɪˈpiːt/',
        partOfSpeech: 'verb',
        meaning: 'Say again something one has already said',
        exampleSentence: 'Could you repeat that sentence please?',
        translations: { hi: 'दोहराना' },
      },
      {
        word: 'meaning',
        ipa: '/ˈmiːnɪŋ/',
        partOfSpeech: 'noun',
        meaning: 'What is meant by a word, text, concept, or action',
        exampleSentence: 'What is the exact meaning of this technical term?',
        translations: { hi: 'अर्थ / मतलब' },
      },
      {
        word: 'pardon',
        ipa: '/ˈpɑːrdən/',
        partOfSpeech: 'noun / exclamation',
        meaning: 'Used to ask someone to repeat what they have just said',
        exampleSentence: 'Pardon me, could you explain that one more time?',
        translations: { hi: 'माफ़ कीजिये (दोहराने के लिए)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Could you please repeat that?',
        functionCategory: 'Repetition Request',
        exampleSentence: 'Could you please repeat the last sentence?',
      },
      {
        phrase: 'What does this word mean?',
        functionCategory: 'Definition Inquiry',
        exampleSentence: 'What does "benchmarking" mean in this context?',
      },
      {
        phrase: 'Could you speak a little more slowly?',
        functionCategory: 'Pace Adjustment',
        exampleSentence: 'Could you speak a little more slowly, please?',
      },
      {
        phrase: 'May I ask a question?',
        functionCategory: 'Polite Interruption',
        exampleSentence: 'Pardon me, may I ask a quick question about slide four?',
      },
    ],
    grammar: {
      title: 'Polite Requests & Inquiries: Could you + [Base Verb] / May I + [Base Verb]',
      conceptExplanation:
        'Use modal "Could you please + base verb" to make polite requests. Use "May I + base verb" to politely ask for permission or ask a question. Use "What does [word] mean?" to inquire about definitions. Never put "to" after "could" or "may".',
      patternFormula: 'Could you please + [Base Verb] + object? | May I + [Base Verb]? | What does [word] mean?',
      contrastExamples: [
        {
          incorrect: 'Could you to repeat that please?',
          correct: 'Could you please repeat that?',
          explanation: 'Never use "to" after modal "could": "Could you repeat", not "Could you to repeat".',
        },
        {
          incorrect: 'What means this word?',
          correct: 'What does this word mean?',
          explanation: 'In English, use auxiliary "does": "What does [word] mean?".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Chloe',
        text: 'In our quarterly review, we must prioritize actionable feedback metrics to optimize stakeholder alignment.',
        translation: 'हमारी त्रैमासिक समीक्षा में, हमें हितधारकों के तालमेल को अनुकूलित करने के लिए कार्रवाई योग्य फीडबैक मेट्रिक्स को प्राथमिकता देनी चाहिए।',
      },
      {
        speaker: 'You',
        text: 'Pardon me, Chloe. Could you speak a little slower, please? What does "stakeholder alignment" mean?',
        translation: 'माफ़ कीजिये, क्लोई। क्या आप थोड़ा धीरे बोल सकती हैं, कृपया? "हितधारक तालमेल" का क्या अर्थ है?',
      },
      {
        speaker: 'Chloe',
        text: 'Of course! It simply means making sure that everyone in the company agrees on the project goals.',
        translation: 'बिल्कुल! इसका सीधा सा मतलब यह सुनिश्चित करना है कि कंपनी में हर कोई प्रोजेक्ट के लक्ष्यों पर सहमत हो।',
      },
      {
        speaker: 'You',
        text: 'Thank you, that makes total sense now! Could you give a short real-life example?',
        translation: 'धन्यवाद, अब यह पूरी तरह समझ आ गया! क्या आप एक छोटा वास्तविक जीवन का उदाहरण दे सकती हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_47_1',
      type: 'fill_blank',
      prompt: 'Complete the polite request: "Could you please ___ that last point?"',
      options: [
        { id: 'opt_1', text: 'repeat', isCorrect: true },
        { id: 'opt_2', text: 'repeating', isCorrect: false },
        { id: 'opt_3', text: 'to repeat', isCorrect: false },
      ],
      correctAnswer: 'repeat',
      explanation: 'Use base verb "repeat" after "Could you please".',
    },
    {
      id: 'cp_a1_47_2',
      type: 'multiple_choice',
      prompt: 'How do you ask for the meaning of an unfamiliar word?',
      options: [
        { id: 'opt_1', text: 'What does this word mean?', isCorrect: true },
        { id: 'opt_2', text: 'What meaning this word?', isCorrect: false },
        { id: 'opt_3', text: 'What means this word to me?', isCorrect: false },
      ],
      correctAnswer: 'What does this word mean?',
      explanation: '"What does [Subject] mean?" is the grammatically correct question pattern.',
    },
    {
      id: 'cp_a1_47_3',
      type: 'multiple_choice',
      prompt: 'Which request politely asks a speaker to slow down?',
      options: [
        { id: 'opt_1', text: 'Could you speak a little slower, please?', isCorrect: true },
        { id: 'opt_2', text: 'You must slow speak now.', isCorrect: false },
        { id: 'opt_3', text: 'Speak slow to me.', isCorrect: false },
      ],
      correctAnswer: 'Could you speak a little slower, please?',
      explanation: '"Could you speak... please?" is polite and professional.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_47_1',
      scenarioContext: 'Politely ask the speaker to repeat their last sentence.',
      prompt: 'Build: "Could you please repeat that sentence for me?"',
      targetStructure: 'Could you please + base verb + object + prepositional phrase?',
      wordBank: ['Could', 'you', 'please', 'repeat', 'that', 'sentence', 'for', 'me', 'to', 'repeating', 'can'],
      acceptableSolutions: [
        'Could you please repeat that sentence for me',
        'Could you please repeat that sentence for me?',
      ],
      explanation: 'Polite request formula using modal "Could".',
    },
    {
      id: 'sc_a1_47_2',
      scenarioContext: 'Ask what a specific technical term means.',
      prompt: 'Build: "What does this technical term mean in English?"',
      targetStructure: 'What + does + noun phrase + base verb + prepositional phrase?',
      wordBank: ['What', 'does', 'this', 'technical', 'term', 'mean', 'in', 'English', 'is', 'meaning'],
      acceptableSolutions: [
        'What does this technical term mean in English',
        'What does this technical term mean in English?',
      ],
      explanation: 'Standard question with auxiliary "does" and base verb "mean".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_47_1',
      turnIndex: 1,
      partnerPrompt:
        'In today’s module, we are analyzing asynchronous omnichannel customer touchpoints to streamline cross-functional KPI benchmarks. Does everyone follow this concept, or are there any initial questions?',
      partnerAudioText:
        'In today’s module, we are analyzing asynchronous omnichannel customer touchpoints to streamline cross-functional KPI benchmarks. Does everyone follow this concept, or are there any initial questions?',
      partnerQuestionHindi:
        'आज के मॉड्यूल में, हम क्रॉस-फंक्शनल केपीआई बेंचमार्क को सुव्यवस्थित करने के लिए एसिंक्रोनस ओमनीचैनल ग्राहक टचपॉइंट्स का विश्लेषण कर रहे हैं। क्या हर कोई इस अवधारणा को समझ रहा है, या कोई शुरुआती प्रश्न हैं?',
      expectedFunction: 'Polite Interruption & Request Slower Speech (Could you please speak slower...?)',
      contextGoal:
        'Politely ask Chloe to speak a little slower and ask if she could repeat the main idea in simpler words.',
      targetVocabulary: ['could you please', 'speak slower', 'pardon me', 'repeat that', 'simpler words'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Pardon me Chloe! Could you please speak a little slower? That was very fast. Could you repeat the main idea in simpler terms?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Could you speak a little slower, please? Could you repeat the last sentence?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Pardon me! Could you speak slower and repeat that please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Pace Request & Repetition',
          patterns: [
            'could you please',
            'speak slower',
            'speak slowly',
            'repeat that',
            'pardon me',
            'excuse me',
            'too fast',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'could_to_speak_error',
          pattern: /\bcould you to speak\b/i,
          errorType: 'grammar',
          message: 'Say "Could you speak", without "to".',
          correctionPattern: 'Could you please speak slower?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_47_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "Could you please ___ a little slower?"',
        options: [
          { id: 'opt_1', text: 'speak', isCorrect: true },
          { id: 'opt_2', text: 'to speak', isCorrect: false },
          { id: 'opt_3', text: 'speaking', isCorrect: false },
        ],
        correctAnswer: 'speak',
        explanation: 'Modal "Could you" takes the base verb "speak".',
      },
    },
    {
      id: 'turn_a1_47_2',
      turnIndex: 2,
      partnerPrompt:
        'I apologize for speaking so quickly! Let me slow down. We are simply talking about how customers communicate with our company using different channels like email, phone, and chat apps. What word in that sentence was unclear to you?',
      partnerAudioText:
        'I apologize for speaking so quickly! Let me slow down. We are simply talking about how customers communicate with our company using different channels like email, phone, and chat apps. What word in that sentence was unclear to you?',
      partnerQuestionHindi:
        'इतनी तेज़ी से बोलने के लिए मैं माफ़ी चाहती हूँ! मुझे गति धीमी करने दीजिए। हम केवल इस बारे में बात कर रहे हैं कि ग्राहक ईमेल, फोन और चैट ऐप जैसे विभिन्न चैनलों का उपयोग करके हमारी कंपनी से कैसे संवाद करते हैं। उस वाक्य में कौन सा शब्द आपके लिए अस्पष्ट था?',
      expectedFunction: 'Ask for Word Meaning (What does ... mean?)',
      contextGoal:
        'Ask Chloe what the word "touchpoint" or "KPI" means in this context.',
      targetVocabulary: ['what does', 'mean', 'touchpoint', 'kpi', 'could you explain', 'meaning'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you, that explanation is much clearer! What does the word "touchpoint" mean in business English?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'What does "touchpoint" mean? Could you explain it simply?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'What does "touchpoint" mean in this context?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Definition Question',
          patterns: ['what does', 'mean', 'meaning of', 'touchpoint', 'kpi', 'explain'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'what_means_error',
          pattern: /\bwhat means touchpoint\b/i,
          errorType: 'grammar',
          message: 'Say "What does touchpoint mean?", not "What means touchpoint?".',
          correctionPattern: 'What does touchpoint mean?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_47_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly asks for the definition of "touchpoint"?',
        options: [
          { id: 'opt_1', text: 'What does "touchpoint" mean?', isCorrect: true },
          { id: 'opt_2', text: 'What means "touchpoint"?', isCorrect: false },
          { id: 'opt_3', text: 'What is meaning "touchpoint"?', isCorrect: false },
        ],
        correctAnswer: 'What does "touchpoint" mean?',
        explanation: '"What does [word] mean?" is the standard question structure.',
      },
    },
    {
      id: 'turn_a1_47_3',
      turnIndex: 3,
      partnerPrompt:
        'A "touchpoint" is any moment a customer interacts with our brand—like viewing our website, reading an email, or talking to customer service. Would you like an everyday example to make it even easier to remember?',
      partnerAudioText:
        'A "touchpoint" is any moment a customer interacts with our brand—like viewing our website, reading an email, or talking to customer service. Would you like an everyday example to make it even easier to remember?',
      partnerQuestionHindi:
        'एक "टचपॉइंट" वह कोई भी क्षण होता है जब कोई ग्राहक हमारे ब्रांड के साथ बातचीत करता है—जैसे हमारी वेबसाइट देखना, एक ईमेल पढ़ना, या ग्राहक सेवा से बात करना। क्या आप इसे याद रखना और आसान बनाने के लिए एक रोज़मर्रा का उदाहरण चाहेंगे?',
      expectedFunction: 'Politely Request Example (Could you please give an example...?)',
      contextGoal:
        'Politely say yes and ask if she could give an example from an online shopping store.',
      targetVocabulary: ['yes please', 'could you give an example', 'online shopping', 'store', 'helpful'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes please! Could you give a practical example from an online shopping store? That would be very helpful.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes please! Could you give an example of an online shop touchpoint?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes please! Could you give an everyday example?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Example Request',
          patterns: ['yes please', 'could you give', 'an example', 'online shop', 'shopping', 'helpful'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_47_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you please give ___ an example?"',
        options: [
          { id: 'opt_1', text: 'us', isCorrect: true },
          { id: 'opt_2', text: 'we', isCorrect: false },
          { id: 'opt_3', text: 'our', isCorrect: false },
        ],
        correctAnswer: 'us',
        explanation: 'Object pronoun "us" is used after verb "give".',
      },
    },
    {
      id: 'turn_a1_47_4',
      turnIndex: 4,
      partnerPrompt:
        'For example, when you order shoes online, tracking your delivery by SMS is a touchpoint! You are asking outstanding clarifying questions today. Do you feel comfortable with these terms now?',
      partnerAudioText:
        'For example, when you order shoes online, tracking your delivery by SMS is a touchpoint! You are asking outstanding clarifying questions today. Do you feel comfortable with these terms now?',
      partnerQuestionHindi:
        'उदाहरण के लिए, जब आप ऑनलाइन जूते ऑर्डर करते हैं, तो एसएमएस द्वारा अपनी डिलीवरी को ट्रैक करना एक टचपॉइंट है! आप आज बेहतरीन स्पष्टीकरण प्रश्न पूछ रहे हैं। क्या अब आप इन शब्दों के साथ सहज महसूस कर रहे हैं?',
      expectedFunction: 'Express Gratitude & Confirm Understanding',
      contextGoal:
        'Thank Chloe warmly, confirm that you understand clearly now, and say you are ready to continue.',
      targetVocabulary: ['thank you', 'very clear', 'understand now', 'ready to continue', 'great example'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Thank you so much Chloe, that shoe example made everything completely clear! I understand now and I am ready for the next topic.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you Chloe! It is very clear now. I am ready to continue.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Thanks a lot! Everything is clear now, let’s keep going.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Understanding Confirmation & Thanks',
          patterns: [
            'thank you',
            'thanks',
            'clear',
            'understand',
            'ready',
            'continue',
            'great example',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_47_4',
        type: 'multiple_choice',
        prompt: 'Which response confirms understanding politely?',
        options: [
          { id: 'opt_1', text: 'Thank you so much! Everything is very clear now.', isCorrect: true },
          { id: 'opt_2', text: 'I am finished know this word.', isCorrect: false },
          { id: 'opt_3', text: 'You stop talk now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much! Everything is very clear now.',
        explanation: 'Courteous and clear.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
