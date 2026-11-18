import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_110: ConversationDefinition = {
  id: 'conv_a2_110',
  title: 'Making Recommendations, Suggestions & Giving Friendly Advice (should, why don’t you, how about)',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_110'],
  estimatedMinutes: 5,
  scenario:
    'You are meeting Kenji Takahashi, a visiting university exchange student in Edinburgh. Kenji has three days to explore the city and wants your local recommendations on the best cultural sights, outdoor walks, traditional food spots, and practical tips for dealing with unpredictable Scottish weather.',
  communicativeGoals: [
    'Recommend local attractions, museums, scenic walks, and dining spots to a visitor',
    'Give friendly advice and cautions using "You should / shouldn’t" and "You ought to"',
    'Make interactive suggestions with "Why don’t you...", "How about + -ing", and "Let’s..."',
    'Respond politely to preferences and offer tailored alternative ideas',
  ],
  canDoStatements: [
    'Can make and respond to recommendations and suggestions about leisure activities (CEFR A2)',
    'Can give practical advice and warnings about weather and walking conditions using modal verbs',
    'Can suggest alternatives when a visitor has limited time or budget',
  ],
  characters: [
    {
      id: 'char_kenji_takahashi',
      name: 'Kenji Takahashi',
      role: 'Exchange Student & Tourist',
      avatar: '🎒',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'recommend',
        ipa: '/ˌrɛkəˈmɛnd/',
        partOfSpeech: 'verb',
        meaning: 'To suggest something as being good or suitable for a particular purpose',
        exampleSentence: 'I highly recommend visiting the National Museum on Chambers Street.',
        translations: { hi: 'सिफारिश करना / सुझाव देना' },
      },
      {
        word: 'waterproof',
        ipa: '/ˈwɔːtəpruːf/',
        partOfSpeech: 'adjective',
        meaning: 'Impervious to water; not allowing water to enter',
        exampleSentence: 'You should always carry a lightweight waterproof jacket in Scotland.',
        translations: { hi: 'जलरोधक / वॉटरप्रूफ' },
      },
      {
        word: 'breathtaking',
        ipa: '/ˈbrɛθˌteɪkɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Astonishing or awe-inspiring in beauty',
        exampleSentence: 'The view from Arthur\'s Seat over the city is breathtaking.',
        translations: { hi: 'मनोरम / लुभावना' },
      },
      {
        word: 'worth visiting',
        ipa: '/wɜːθ ˈvɪzɪtɪŋ/',
        partOfSpeech: 'phrase',
        meaning: 'Deserving the time and effort to go and see',
        exampleSentence: 'The historic castle is definitely worth visiting early in the morning.',
        translations: { hi: 'देखने लायक / जाने योग्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Why don’t you visit the castle early?',
        functionCategory: 'Suggesting Action (Why don’t you + verb)',
        exampleSentence: 'Why don’t you buy tickets online to skip the queue?',
      },
      {
        phrase: 'How about having afternoon tea in the Old Town?',
        functionCategory: 'Suggesting (How about + -ing)',
        exampleSentence: 'How about trying a traditional Scottish bakery?',
      },
      {
        phrase: 'You definitely shouldn’t miss the view from Calton Hill.',
        functionCategory: 'Giving Strong Recommendation',
        exampleSentence: 'You shouldn’t miss the sunset over the Firth of Forth.',
      },
      {
        phrase: 'If it rains, you ought to visit the free art galleries.',
        functionCategory: 'Conditional Advice',
        exampleSentence: 'If the weather turns wet, you ought to explore the museum.',
      },
    ],
    grammar: {
      title: 'Suggestions & Recommendations: Should, Why don’t you, How about + -ing',
      conceptExplanation:
        '1. Modals for advice: "You should + base verb" / "You shouldn\'t + base verb" / "You ought to + base verb".\n2. Open suggestions: "Why don\'t you + base verb?" (e.g., "Why don\'t you hike up Arthur\'s Seat?").\n3. Participial suggestions: "How about + Verb-ing?" (e.g., "How about taking the tram?").\n4. Collective plan: "Let\'s + base verb" (e.g., "Let\'s check the weather forecast").',
      patternFormula: 'Why don\'t you + [Verb] | How about + [Verb-ing] | You should / shouldn\'t + [Verb]',
      contrastExamples: [
        {
          incorrect: 'How about visit the castle tomorrow?',
          correct: 'How about visiting the castle tomorrow? / Why don\'t you visit the castle tomorrow?',
          explanation: '"How about" takes a gerund (-ing), whereas "Why don\'t you" takes a base verb.',
        },
        {
          incorrect: 'You should to wear a jacket.',
          correct: 'You should wear a jacket. / You ought to wear a jacket.',
          explanation: 'The modal "should" is followed directly by the bare infinitive without "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Kenji Takahashi',
        text: 'Hi Alex! I just arrived in Edinburgh and have only three days here. What do you suggest I see first?',
        translation: 'नमस्ते एलेक्स! मैं अभी-अभी एडिनबर्ग पहुंचा हूँ और मेरे पास यहाँ केवल तीन दिन हैं। आप पहले क्या देखने का सुझाव देते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Kenji! You should definitely start by walking down the historic Royal Mile towards the castle. Why don’t you book a morning ticket online to avoid the crowds?',
        translation: 'नमस्ते केंजी! आपको निश्चित रूप से महल की ओर ऐतिहासिक रॉयल माइल पर चलकर शुरुआत करनी चाहिए। भीड़ से बचने के लिए आप ऑनलाइन सुबह का टिकट क्यों नहीं बुक कर लेते?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_110_1',
      type: 'fill_blank',
      prompt: 'Complete the suggestion: "How about ___ (hike) up Arthur\'s Seat before sunset?"',
      options: [
        { id: 'opt_1', text: 'hiking', isCorrect: true },
        { id: 'opt_2', text: 'hike', isCorrect: false },
        { id: 'opt_3', text: 'to hike', isCorrect: false },
      ],
      correctAnswer: 'hiking',
      explanation: '"How about" must be followed by a verb in the -ing form (gerund).',
    },
    {
      id: 'cp_a2_110_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly gives advice using "should"?',
      options: [
        { id: 'opt_1', text: 'You should wear comfortable walking shoes on the cobbled streets.', isCorrect: true },
        { id: 'opt_2', text: 'You should to wear comfortable shoes.', isCorrect: false },
        { id: 'opt_3', text: 'You should wearing comfortable shoes.', isCorrect: false },
      ],
      correctAnswer: 'You should wear comfortable walking shoes on the cobbled streets.',
      explanation: '"Should" is followed by a base verb without "to".',
    },
    {
      id: 'cp_a2_110_3',
      type: 'multiple_choice',
      prompt: 'Which phrase is the most natural suggestion for an alternative activity?',
      options: [
        { id: 'opt_1', text: 'Why don’t we visit the National Portrait Gallery instead?', isCorrect: true },
        { id: 'opt_2', text: 'Why you not visit gallery?', isCorrect: false },
        { id: 'opt_3', text: 'How about we to go gallery?', isCorrect: false },
      ],
      correctAnswer: 'Why don’t we visit the National Portrait Gallery instead?',
      explanation: '"Why don’t we + verb" is a natural collaborative suggestion.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_110_1',
      scenarioContext: 'Recommend a popular tourist walk.',
      prompt: 'Build: "You should hike up Arthur\'s Seat for great views."',
      targetStructure: 'Subject + should + verb + place + for + noun phrase',
      wordBank: ['You', 'should', 'hike', 'up', 'Arthur\'s', 'Seat', 'for', 'great', 'views', 'hiking', 'to'],
      acceptableSolutions: [
        'You should hike up Arthur\'s Seat for great views',
        'You should hike up Arthur\'s Seat for great views.',
      ],
      explanation: 'Accurate modal recommendation sentence.',
    },
    {
      id: 'sc_a2_110_2',
      scenarioContext: 'Suggest a bad weather alternative.',
      prompt: 'Build: "Why don\'t you explore the National Museum if it rains?"',
      targetStructure: 'Why don\'t you + verb + object + if + condition',
      wordBank: ['Why', 'don\'t', 'you', 'explore', 'the', 'National', 'Museum', 'if', 'it', 'rains', 'how', 'about'],
      acceptableSolutions: [
        'Why don\'t you explore the National Museum if it rains',
        'Why don\'t you explore the National Museum if it rains?',
        'Why don\'t you explore the National Museum if it rains.',
      ],
      explanation: 'Conditional suggestion structure using "Why don\'t you".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_110_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! I just checked into my hostel near Waverley Station. I have three full days in Edinburgh. What sights should I definitely visit on my first day?',
      partnerAudioText:
        'Hi Alex! I just checked into my hostel near Waverley Station. I have three full days in Edinburgh. What sights should I definitely visit on my first day?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! मैंने वेवरली स्टेशन के पास अपने हॉस्टल में चेक इन किया है। मेरे पास एडिनबर्ग में पूरे तीन दिन हैं। मुझे अपने पहले दिन निश्चित रूप से कौन से दर्शनीय स्थल देखने चाहिए?',
      expectedFunction: 'Recommend First-Day Itinerary (Royal Mile, Edinburgh Castle, should / why don’t you)',
      contextGoal:
        'Recommend walking up the Royal Mile and visiting Edinburgh Castle; suggest booking a castle ticket in advance to avoid queues.',
      targetVocabulary: ['walk up the Royal Mile', 'visit Edinburgh Castle', 'why don’t you book tickets online', 'explore the historic Old Town'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'Hi Kenji! Welcome to Edinburgh! On your first day, you should walk up the Royal Mile through the Old Town and visit Edinburgh Castle. Why don’t you book your ticket online this morning so you can skip the ticket queues?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'First-Day Sights (Royal Mile / Castle / Old Town)',
          patterns: ['royal mile', 'edinburgh castle', 'castle', 'old town', 'walk', 'visit'],
          required: true,
        },
        {
          name: 'Recommendation / Suggestion (should / why don’t you / book)',
          patterns: ['should', 'why don’t you', 'book', 'online', 'tickets', 'first day', 'recommend'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'should_to_error',
          pattern: /\byou should to visit\b|\byou should to walk\b/i,
          errorType: 'grammar',
          message: 'Do not use "to" after the modal "should": say "you should visit".',
          correctionPattern: 'you should visit',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_110_1',
        type: 'multiple_choice',
        prompt: 'Which recommendation is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'You should visit the historic castle early.', isCorrect: true },
          { id: 'opt_2', text: 'You should to visit castle.', isCorrect: false },
          { id: 'opt_3', text: 'You are should visit castle.', isCorrect: false },
        ],
        correctAnswer: 'You should visit the historic castle early.',
        explanation: '"Should" takes a bare verb without "to".',
      },
    },
    {
      id: 'turn_a2_110_2',
      turnIndex: 2,
      partnerPrompt:
        'Great tip, I will book the 11 AM entry slot right now! What about outdoors? I love nature walks, but the weather forecast looks cloudy with possible showers this afternoon.',
      partnerAudioText:
        'Great tip, I will book the 11 AM entry slot right now! What about outdoors? I love nature walks, but the weather forecast looks cloudy with possible showers this afternoon.',
      partnerQuestionHindi:
        'बहुत बढ़िया सुझाव, मैं अभी सुबह 11 बजे का स्लॉट बुक करूँगा! बाहर घूमने के बारे में क्या विचार है? मुझे प्रकृति में घूमना पसंद है, लेकिन मौसम के पूर्वानुमान में आज दोपहर बादलों के साथ बारिश की संभावना है।',
      expectedFunction: 'Suggest Outdoor Walk & Give Weather Advice (Arthur’s Seat / Calton Hill / waterproof jacket)',
      contextGoal:
        'Suggest hiking Arthur’s Seat or Calton Hill; advise him to wear sturdy boots and carry a waterproof jacket because the hilltop gets very windy and wet.',
      targetVocabulary: ['how about hiking up Arthur’s Seat or Calton Hill', 'wear a windproof and waterproof jacket', 'sturdy walking shoes', 'stunning 360-degree views'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'How about hiking up Calton Hill or Arthur’s Seat? You will get breathtaking panoramic views of the city. Just make sure you wear sturdy trainers and bring a waterproof jacket because it gets very windy on top!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Walk Sights (Arthur’s Seat / Calton Hill)',
          patterns: ['arthur’s seat', 'arthurs seat', 'calton hill', 'hill', 'walk', 'hike', 'views'],
          required: true,
        },
        {
          name: 'Weather Caution (waterproof / jacket / shoes / windy)',
          patterns: ['waterproof', 'jacket', 'shoes', 'boots', 'rain', 'windy', 'how about', 'should'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_110_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "How about ___ (climb) Calton Hill for sunset?"',
        options: [
          { id: 'opt_1', text: 'climbing', isCorrect: true },
          { id: 'opt_2', text: 'climb', isCorrect: false },
          { id: 'opt_3', text: 'climbed', isCorrect: false },
        ],
        correctAnswer: 'climbing',
        explanation: 'Use the -ing gerund form after "How about".',
      },
    },
    {
      id: 'turn_a2_110_3',
      turnIndex: 3,
      partnerPrompt:
        'I packed my rain jacket, so that is perfect! After walking around all afternoon, I will be starving. Is there any traditional food spot or cozy café you would recommend that isn’t too touristy?',
      partnerAudioText:
        'I packed my rain jacket, so that is perfect! After walking around all afternoon, I will be starving. Is there any traditional food spot or cozy café you would recommend that isn’t too touristy?',
      partnerQuestionHindi:
        'मैंने अपनी रेन जैकेट पैक की है, तो यह बिल्कुल सही है! दोपहर भर घूमने के बाद मुझे बहुत भूख लगेगी। क्या आप कोई ऐसा पारंपरिक भोजनालय या आरामदायक कैफे सुझा सकते हैं जो बहुत अधिक पर्यटकों वाला न हो?',
      expectedFunction: 'Recommend Dining Spot (bistro / tearoom / pub / budget-friendly)',
      contextGoal:
        'Recommend trying a cozy local pub or traditional tearoom near Grassmarket; suggest trying fresh Scottish salmon, Cullen Skink soup, or warm scones with tea.',
      targetVocabulary: ['cozy pub or tearoom in Grassmarket', 'try Cullen Skink fish soup or warm scones', 'authentic and reasonably priced', 'relaxed atmosphere'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'You ought to visit a traditional pub in the Grassmarket area or a cozy tearoom on Victoria Street. Why don’t you try Cullen Skink, which is a creamy smoked fish soup, followed by warm scones with clotted cream and jam?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Food / Area (Grassmarket / Victoria Street / pub / tearoom)',
          patterns: ['grassmarket', 'victoria street', 'pub', 'tearoom', 'bistro', 'café', 'restaurant'],
          required: true,
        },
        {
          name: 'Dishes / Recommendation (Cullen Skink / scones / soup / salmon / tea)',
          patterns: ['cullen skink', 'scones', 'soup', 'salmon', 'tea', 'recommend', 'try', 'ought to', 'why don’t you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_110_3',
        type: 'multiple_choice',
        prompt: 'Which recommendation is most polite and appetizing?',
        options: [
          { id: 'opt_1', text: 'You should try the warm scones at a local tearoom in Grassmarket.', isCorrect: true },
          { id: 'opt_2', text: 'You eat scones now.', isCorrect: false },
          { id: 'opt_3', text: 'Food is in street.', isCorrect: false },
        ],
        correctAnswer: 'You should try the warm scones at a local tearoom in Grassmarket.',
        explanation: 'Polite suggestion with specific venue context.',
      },
    },
    {
      id: 'turn_a2_110_4',
      turnIndex: 4,
      partnerPrompt:
        'That smoked fish soup sounds delicious! Thank you so much for the fantastic advice, Alex. If you are free on Sunday afternoon, would you like to join me for a coffee near Princes Street Gardens?',
      partnerAudioText:
        'That smoked fish soup sounds delicious! Thank you so much for the fantastic advice, Alex. If you are free on Sunday afternoon, would you like to join me for a coffee near Princes Street Gardens?',
      partnerQuestionHindi:
        'वह स्मोक्ड फिश सूप बहुत स्वादिष्ट लगता है! शानदार सलाह के लिए बहुत-बहुत धन्यवाद, एलेक्स। यदि आप रविवार दोपहर को खाली हैं, तो क्या आप प्रिंसेस स्ट्रीट गार्डन के पास एक कप कॉफी के लिए मेरे साथ आना चाहेंगे?',
      expectedFunction: 'Accept Invitation Enthusiastically & Finalize Sunday Plan',
      contextGoal:
        'Accept the invitation gladly; agree to meet Sunday at 3 PM near the Scottish National Gallery gardens and wish him a wonderful day of sightseeing.',
      targetVocabulary: ['I would love to join you on Sunday', 'meet at 3 PM by the gallery gardens', 'enjoy exploring Edinburgh today', 'message me if you need anything'],
      suggestedResponses: [
        {
          label: 'Reduced Scaffold',
          text: 'I would love to join you! Let’s meet at 3:00 PM on Sunday outside the Scottish National Gallery by Princes Street Gardens. Have a fantastic day exploring Edinburgh and text me if you need any directions!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Meeting Agreement (Sunday / 3 PM / gallery / coffee)',
          patterns: ['love to', 'sounds great', 'sunday', '3:00', 'princes street', 'gallery', 'coffee', 'meet', 'let’s'],
          required: true,
        },
        {
          name: 'Friendly Farewell (enjoy / text me / have fun)',
          patterns: ['enjoy', 'have a fantastic day', 'text me', 'see you', 'edinburgh'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_110_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I ___ love to join you for coffee on Sunday!"',
        options: [
          { id: 'opt_1', text: 'would', isCorrect: true },
          { id: 'opt_2', text: 'will be', isCorrect: false },
          { id: 'opt_3', text: 'am', isCorrect: false },
        ],
        correctAnswer: 'would',
        explanation: '"I would love to..." is the standard polite acceptance formula.',
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
