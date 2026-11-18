import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_265: ConversationDefinition = {
  id: 'conv_a2_265',
  title: 'Reading Real-World Information & Explaining Key Points',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_265'],
  estimatedMinutes: 5,
  scenario:
    'You and your traveling companion Lucas are standing in front of the City Science & History Museum info board. The board lists exhibition zones, opening hours, ticket discounts, audio guide rules, and a special planetarium screening. You scan the written text and explain the essential highlights, pricing options, and visitor guidelines to Lucas so you can plan your visit.',
  communicativeGoals: [
    'Synthesize and explain real-world written information accurately in A2 English',
    'Extract and report key details: opening hours, admission prices, guided tour times, and photography rules',
    'Recommend an efficient visiting order: "According to the brochure, we should visit the dinosaur hall first...", "Admission includes..."',
    'Discuss options and decide on ticket choices collaboratively with your companion',
  ],
  canDoStatements: [
    'Can identify and relay the most important practical points from an informational brochure or notice',
    'Can explain admission options, discounts, and facility rules to a companion',
    'Can propose a coordinated schedule based on written times and exhibits',
  ],
  characters: [
    {
      id: 'char_lucas_companion',
      name: 'Lucas',
      role: 'Travel Companion',
      avatar: '🏛️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'admission',
        ipa: '/ədˈmɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The fee charged for entry to a place or event',
        exampleSentence: 'Standard adult admission is fifteen dollars, but students get a discount.',
        translations: { hi: 'प्रवेश शुल्क / प्रवेश (एडमिशन)' },
      },
      {
        word: 'exhibition',
        ipa: '/ˌeksɪˈbɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A public display of works of art or items of interest, held in an art gallery or museum',
        exampleSentence: 'The temporary astronomy exhibition closes at five in the afternoon.',
        translations: { hi: 'प्रदर्शनी (एग्ज़िबिशन)' },
      },
      {
        word: 'brochure',
        ipa: '/ˈbrəʊʃə/',
        partOfSpeech: 'noun',
        meaning: 'A small book or magazine containing pictures and information about a product or service',
        exampleSentence: 'Let’s check the museum brochure for the planetarium schedule.',
        translations: { hi: 'विवरणिका / ब्रोशर (ब्रोशर)' },
      },
      {
        word: 'guidelines',
        ipa: '/ˈɡaɪdlaɪnz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'General rules, principles, or pieces of advice',
        exampleSentence: 'Visitor guidelines state that flash photography is prohibited inside the gallery.',
        translations: { hi: 'दिशानिर्देश / नियम (गाइडलाइन्स)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'According to the information board, ...',
        functionCategory: 'Citing a written source directly',
        exampleSentence: 'According to the information board, the museum is open until 6:00 PM today.',
      },
      {
        phrase: 'Admission includes access to all permanent halls, but...',
        functionCategory: 'Explaining ticket inclusions and limitations',
        exampleSentence: 'Admission includes access to all permanent halls, but the planetarium costs $4 extra.',
      },
      {
        phrase: 'It also clearly mentions that...',
        functionCategory: 'Highlighting important rules or conditions',
        exampleSentence: 'It also clearly mentions that large backpacks must be left in the lockers.',
      },
      {
        phrase: 'Shall we buy the combo ticket and start with...?',
        functionCategory: 'Proposing a collaborative plan based on the text',
        exampleSentence: 'Shall we buy the combo ticket and start with the robotics gallery on the second floor?',
      },
    ],
    grammar: {
      title: 'Reporting Written Real-World Information: "According to..." & Modal Permissions',
      conceptExplanation:
        '1. Sourcing information: "According to the board / brochure, [Subject + Verb]"\n2. Explaining rules: "Visitors are not allowed to use flash" / "Flash photography is strictly prohibited"\n3. Expressing inclusions: "The ticket includes..." / "There is a 20% discount for students"\n4. Cooperative suggestions: "Shall we start at...?" / "Let’s see the 2:00 PM show first."',
      patternFormula: 'According to [Source], [Key Fact 1]. It also states that [Key Fact 2 / Rule]. Therefore, we should [Recommendation].',
      contrastExamples: [
        {
          incorrect: 'Brochure say we cannot flash photo.',
          correct: 'According to the brochure, flash photography is not permitted.',
          explanation: 'Use standard phrasing "According to the brochure..." and passive permission verbs.',
        },
        {
          incorrect: 'Ticket is have planetarium free.',
          correct: 'The standard ticket does not include the planetarium show.',
          explanation: 'Use clear negative Present Simple syntax.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Lucas',
        text: 'There is so much text on this museum board! Can you check what the ticket includes and when the next planetarium show starts?',
        translation: 'इस संग्रहालय बोर्ड पर बहुत सारा पाठ है! क्या आप देख सकते हैं कि टिकट में क्या शामिल है और अगला तारामंडल शो कब शुरू होता है?',
      },
      {
        speaker: 'Learner',
        text: 'According to the board, standard admission is $12, but for $16 we get a combo ticket that includes the 2:30 PM planetarium show.',
        translation: 'बोर्ड के अनुसार, मानक प्रवेश $12 है, लेकिन $16 में हमें एक कॉम्बो टिकट मिलता है जिसमें दोपहर 2:30 बजे का तारामंडल शो शामिल है।',
      },
      {
        speaker: 'Lucas',
        text: 'That sounds like a great deal. Are there any specific rules we should be aware of before entering?',
        translation: 'यह बहुत अच्छा सौदा लगता है। क्या प्रवेश करने से पहले कोई विशिष्ट नियम हैं जिनके बारे में हमें पता होना चाहिए?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_265_1',
      type: 'fill_blank',
      prompt: 'Complete: "______ (According to / Accord with) the notice board, student tickets are fifty percent off."',
      options: [
        { id: 'opt_1', text: 'According to', isCorrect: true },
        { id: 'opt_2', text: 'Accord with', isCorrect: false },
      ],
      correctAnswer: 'According to',
      explanation: 'Use the prepositional phrase "According to" when citing written sources.',
    },
    {
      id: 'cp_265_2',
      type: 'multiple_choice',
      prompt: 'Which sentence best synthesizes pricing and visitor rules from a museum brochure?',
      options: [
        { id: 'opt_1', text: 'The combo ticket costs $16 and includes the planetarium, but backpacks must be kept in lockers.', isCorrect: true },
        { id: 'opt_2', text: 'Ticket 16 dollar bag in locker brochure is saying.', isCorrect: false },
        { id: 'opt_3', text: 'According to brochure we buy 16 dollar and no bag allowed now.', isCorrect: false },
      ],
      correctAnswer: 'The combo ticket costs $16 and includes the planetarium, but backpacks must be kept in lockers.',
      explanation: 'Clear compound sentence combining price, inclusion, and locker guideline.',
    },
    {
      id: 'cp_265_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [Flash photography is strictly prohibited / inside the historical exhibition halls / at all times]',
      correctAnswer: 'Flash photography is strictly prohibited inside the historical exhibition halls at all times',
      explanation: 'Passive subject phrase + prepositional location + adverbial time phrase.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_265_1',
      prompt: 'Construct a sentence stating that according to the board, the planetarium show starts at 2:30 PM.',
      scenarioContext: 'Relaying schedule information to Lucas.',
      targetStructure: 'According to the board, the planetarium show starts at 2:30 PM.',
      wordBank: ['According to the board,', 'the planetarium show', 'starts at 2:30 PM.', 'board according to', 'show is start at'],
      acceptableSolutions: [
        'According to the board, the planetarium show starts at 2:30 PM.',
        'According to the notice, the planetarium show starts at 2:30 PM.',
      ],
      explanation: 'Introductory prepositional phrase + present simple schedule clause.',
    },
    {
      id: 'sc_265_2',
      prompt: 'Construct a sentence suggesting that we should buy the combo ticket and store our backpacks in the lockers.',
      scenarioContext: 'Planning your visit with Lucas.',
      targetStructure: 'We should buy the combo ticket and store our backpacks in the lockers.',
      wordBank: ['We should buy the', 'combo ticket and', 'store our backpacks', 'in the lockers.', 'must buy combo', 'backpacks of lockers'],
      acceptableSolutions: [
        'We should buy the combo ticket and store our backpacks in the lockers.',
        'We ought to buy the combo ticket and store our backpacks in the lockers.',
      ],
      explanation: 'Modal "should" + compound predicate ("buy... and store...").',
    },
  ],
  turns: [
    {
      id: 'turn_265_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Look at this massive museum information board. There are so many columns and bullet points. What does it say about standard admission prices, student discounts, and what is included in the basic ticket?',
      partnerAudioText:
        'Hey! Look at this massive museum information board. There are so many columns and bullet points. What does it say about standard admission prices, student discounts, and what is included in the basic ticket?',
      partnerQuestionHindi:
        'अरे! इस बड़े संग्रहालय सूचना बोर्ड को देखो। इसमें बहुत सारे कॉलम और बिंदु हैं। यह मानक प्रवेश कीमतों, छात्र छूट और मूल टिकट में क्या शामिल है के बारे में क्या कहता है?',
      expectedFunction: 'Scanning written information and summarizing ticket prices, student discounts, and basic access for Lucas',
      contextGoal: 'Explain that standard ticket is $12, students with ID pay $8 (discount), which includes all 4 permanent galleries, but special shows require an add-on',
      targetVocabulary: ['According to the information board', 'standard adult admission is $12', 'student discount with valid ID is $8', 'includes all four permanent galleries', 'special exhibits require an extra ticket'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'According to the board, standard adult admission is $12, but because we have our student IDs, we only pay $8 each! The basic ticket includes access to all four permanent history and science galleries on floors one and two.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Looking at the price list, regular tickets are $12 and student tickets are discounted to $8. It covers all permanent exhibits, but the planetarium show is an optional $4 add-on.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'source_and_prices',
          patterns: ['according to', 'board', 'shows', 'says', '$12', '12', '$8', '8', 'dollars', 'student', 'discount', 'id'],
          required: true,
        },
        {
          name: 'inclusions',
          patterns: ['includes', 'galleries', 'permanent', 'exhibits', 'floors', 'science', 'history', 'planetarium', 'add-on', 'extra'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_265_1_according_to_me_misuse',
          pattern: /according to my eyes/i,
          errorType: 'vocabulary',
          message: 'Say "According to the board" or "Looking at the board".',
          correctionPattern: 'According to the board, student admission is $8.',
        },
      ],
      remediationPractice: {
        id: 'rem_265_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (According to / In accord to) the board, tickets are $12."',
        options: [
          { id: 'r1', text: 'According to', isCorrect: true },
          { id: 'r2', text: 'In accord to', isCorrect: false },
        ],
        correctAnswer: 'According to',
        explanation: 'The standard expression is "According to [source]".',
      },
    },
    {
      id: 'turn_265_2',
      turnIndex: 2,
      partnerPrompt:
        'Great! I definitely want to see the 2:30 PM Planetarium show. What does the notice say about visitor rules, bags, food, and cameras inside the exhibition halls?',
      partnerAudioText:
        'Great! I definitely want to see the 2:30 PM Planetarium show. What does the notice say about visitor rules, bags, food, and cameras inside the exhibition halls?',
      partnerQuestionHindi:
        'बहुत बढ़िया! मैं निश्चित रूप से दोपहर 2:30 बजे का तारामंडल शो देखना चाहता हूँ। प्रदर्शनी हॉल के अंदर आगंतुक नियमों, बैग, भोजन और कैमरों के बारे में नोटिस क्या कहता है?',
      expectedFunction: 'Explaining visitor rules: lockers for large bags, no outside food/drinks, and no flash photography',
      contextGoal: 'Explain that backpacks must be stored in lockers, outside food/drinks are prohibited, but non-flash photography is allowed',
      targetVocabulary: ['The visitor guidelines state that', 'backpacks must be left in the lockers', 'outside food and drinks are not permitted', 'no flash photography', 'photos without flash are allowed'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'The visitor guidelines clearly mention three main rules: first, large backpacks must be stored in the coin lockers downstairs. Second, outside food and drinks are not permitted. Third, photography is allowed, but flash photography is strictly prohibited inside the historical halls.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'It says we cannot bring food or drinks inside, and our backpacks must go into the free lockers. We can take photos, but we have to turn off the camera flash.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'visitor_rules_bags_food',
          patterns: ['rules', 'guidelines', 'backpacks', 'bags', 'lockers', 'food', 'drinks', 'not permitted', 'prohibited', 'allowed'],
          required: true,
        },
        {
          name: 'camera_rules',
          patterns: ['camera', 'photos', 'photography', 'flash', 'prohibited', 'turn off', 'without flash'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_265_2_flash_is_prohibit',
          pattern: /flash is prohibit\b/i,
          errorType: 'grammar',
          message: 'Passive participle: "Flash is prohibited" (or "Flash is not permitted").',
          correctionPattern: 'Flash photography is strictly prohibited.',
        },
      ],
      remediationPractice: {
        id: 'rem_265_2',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly explains museum guidelines?',
        options: [
          { id: 'r1', text: 'Backpacks must be stored in lockers, and flash photography is prohibited.', isCorrect: true },
          { id: 'r2', text: 'Backpack must store in locker and flash photo is prohibit.', isCorrect: false },
        ],
        correctAnswer: 'Backpacks must be stored in lockers, and flash photography is prohibited.',
        explanation: 'Correct passive modal and participle construction.',
      },
    },
    {
      id: 'turn_265_3',
      turnIndex: 3,
      partnerPrompt:
        'Awesome. We have about three hours before the museum closes at 5:30 PM. How do you suggest we organize our visit so we see the best exhibits and make it to the planetarium on time?',
      partnerAudioText:
        'Awesome. We have about three hours before the museum closes at 5:30 PM. How do you suggest we organize our visit so we see the best exhibits and make it to the planetarium on time?',
      partnerQuestionHindi:
        'शानदार। शाम 5:30 बजे संग्रहालय बंद होने से पहले हमारे पास लगभग तीन घंटे हैं। आप हमारी यात्रा को कैसे व्यवस्थित करने का सुझाव देते हैं ताकि हम सबसे अच्छी प्रदर्शनियाँ देख सकें और समय पर तारामंडल पहुँच सकें?',
      expectedFunction: 'Proposing a sequential itinerary (store bags, visit dinosaur/science halls, see 2:30 PM planetarium, finish at gift shop)',
      contextGoal: 'Propose a clear time plan: buy $16 combo tickets, store bags, tour dinosaurs and robotics first, attend 2:30 PM planetarium show, and finish at the museum cafe',
      targetVocabulary: ['I suggest we buy the combo ticket', 'store our bags first', 'explore the dinosaur and robotics halls', 'head to the planetarium at 2:15 PM', 'visit the cafe afterwards', 'does that sound good Lucas'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Here is my suggested plan: let’s buy our $16 combo tickets and put our bags in the lockers right now. Then, we can explore the dinosaur and robotics galleries until 2:15 PM, attend the 2:30 PM planetarium show, and finish with a coffee at the museum cafe before closing. Does that sound good to you, Lucas?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Let’s buy the student combo ticket now. First, we visit the dinosaur hall, then we head upstairs to the planetarium by 2:20 PM. After the show, we will have thirty minutes left for the gift shop. What do you think, Lucas?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'step_by_step_plan',
          patterns: ['combo', 'ticket', 'lockers', 'bags', 'first', 'dinosaur', 'robotics', 'galleries', 'planetarium', '2:15', '2:30', 'cafe', 'shop'],
          required: true,
        },
        {
          name: 'collaborative_closure',
          patterns: ['lucas', 'sound good', 'what do you think', 'plan', 'ready', 'let us go', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_265_3_let_us_to_go',
          pattern: /let's to buy|let's to go/i,
          errorType: 'grammar',
          message: 'After "let’s", use the bare infinitive: "let’s buy" and "let’s go" (no "to").',
          correctionPattern: 'Let’s buy our tickets and head inside.',
        },
      ],
      remediationPractice: {
        id: 'rem_265_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Let’s buy the combo tickets now / and explore the science gallery / before the planetarium show]',
        correctAnswer: 'Let’s buy the combo tickets now and explore the science gallery before the planetarium show',
        explanation: 'Imperative proposal + compound predicate + prepositional time clause.',
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
