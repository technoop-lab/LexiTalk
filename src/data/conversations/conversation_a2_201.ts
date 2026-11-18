import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_201: ConversationDefinition = {
  id: 'conv_a2_201',
  title: 'Question Tags in Natural Conversation',
  cefr: 'A2',
  unitId: 'unit_a2_14',
  lessonLinks: ['lesson_a2_14_201'],
  estimatedMinutes: 5,
  scenario:
    'You and your classmate Liam are walking across campus after a lecture discussing professor feedback, the upcoming project deadline, and weekend study plans. You use natural question tags (isn’t it?, didn’t we?, can’t you?, haven’t they?) to verify information, maintain smooth conversational flow, and check mutual agreement.',
  communicativeGoals: [
    'Form affirmative-negative and negative-affirmative question tags accurately',
    'Use auxiliary verbs ("be", "do/does", "did", "have", "can", "will") in conversational tags',
    'Apply falling intonation for confirmation and rising intonation for genuine inquiries',
    'Keep social conversation lively, collaborative, and engaging',
  ],
  canDoStatements: [
    'Can use question tags in social conversation to check agreement and confirm facts',
    'Can match auxiliary verbs and pronouns correctly to preceding statements',
    'Can respond naturally with short answers ("Yes, it is", "No, we haven’t")',
  ],
  characters: [
    {
      id: 'char_liam_classmate',
      name: 'Liam',
      role: 'Classmate & Project Teammate',
      avatar: '❓',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'tag',
        ipa: '/tæɡ/',
        partOfSpeech: 'noun',
        meaning: 'A mini-question added to the end of a statement to check agreement or ask for confirmation',
        exampleSentence: 'You enjoy psychology lectures, don’t you?',
        translations: { hi: 'टैग (वाक्य के अंत में जुड़ा छोटा प्रश्न)' },
      },
      {
        word: 'confirmation',
        ipa: '/ˌkɒnfəˈmeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The action of confirming something or the state of being confirmed',
        exampleSentence: 'We received confirmation that the deadline was extended.',
        translations: { hi: 'पुष्टि / सत्यापन' },
      },
      {
        word: 'auxiliary',
        ipa: '/ɔːɡˈzɪliəri/',
        partOfSpeech: 'noun',
        meaning: 'A helping verb (such as do, be, have, can, will) used in forming tenses and question tags',
        exampleSentence: 'In the question tag, match the auxiliary verb to the main clause.',
        translations: { hi: 'सहायक क्रिया (ऑक्सिलरी)' },
      },
      {
        word: 'intonation',
        ipa: '/ˌɪntəˈneɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The rise and fall of the voice in speaking',
        exampleSentence: 'Use a falling intonation on the tag when you are sure of the answer.',
        translations: { hi: 'स्वर-शैली / आवाज़ का उतार-चढ़ाव' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It was a really interesting lecture today, wasn’t it?',
        functionCategory: 'Past tag with "be"',
        exampleSentence: 'The professor explained everything clearly, didn’t she?',
      },
      {
        phrase: 'We haven’t submitted our team proposal yet, have we?',
        functionCategory: 'Present perfect tag',
        exampleSentence: 'You have read chapter four, haven’t you?',
      },
      {
        phrase: 'You can meet me at the library at four, can’t you?',
        functionCategory: 'Modal tag with "can"',
        exampleSentence: 'We will finish the slides today, won’t we?',
      },
      {
        phrase: 'Yes, absolutely / No, not yet.',
        functionCategory: 'Natural tag response',
        exampleSentence: 'Yes, we did / No, we haven’t.',
      },
    ],
    grammar: {
      title: 'Question Tag Rules & Polarity Reversal',
      conceptExplanation:
        '1. Polarity Rule:\n   - Positive Statement (+) ➔ Negative Tag (-): "You are ready, aren’t you?"\n   - Negative Statement (-) ➔ Positive Tag (+): "You don’t like coffee, do you?"\n2. Matching Auxiliaries:\n   - Present Simple (do/does): "She lives in halls, doesn’t she?"\n   - Past Simple (did): "We met yesterday, didn’t we?"\n   - Present Perfect (have/has): "They have finished, haven’t they?"\n   - Modals (can/will): "You can come, can’t you?" / "We won’t be late, will we?"\n3. Short Answer Responses:\n   - "Yes, I am." / "No, I haven’t." / "Yes, we did."',
      patternFormula: '[Positive Statement], [Negative Aux + Pronoun]? | [Negative Statement], [Positive Aux + Pronoun]?',
      contrastExamples: [
        {
          incorrect: 'You are coming tomorrow, isn’t it?',
          correct: 'You are coming tomorrow, aren’t you?',
          explanation: 'Match the subject pronoun "you" and auxiliary "are" -> "aren’t you?". Avoid invariant "isn’t it?".',
        },
        {
          incorrect: 'He didn’t finish the report, didn’t he?',
          correct: 'He didn’t finish the report, did he?',
          explanation: 'A negative statement takes a positive tag: "didn’t" -> "did he?".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'That lecture on software testing was quite intense, wasn’t it?',
        translation: 'सॉफ्टवेयर टेस्टिंग पर वह व्याख्यान काफी गहन था, है न?',
      },
      {
        speaker: 'Learner',
        text: 'Yes, it was! But Professor Evans explained the debugging tools well, didn’t he?',
        translation: 'हाँ, बिल्कुल था! लेकिन प्रोफेसर इवांस ने डिबगिंग टूल्स को अच्छी तरह से समझाया, है न?',
      },
      {
        speaker: 'Liam',
        text: 'He definitely did. And we have to submit the lab exercise by Friday, don’t we?',
        translation: 'उन्होंने निश्चित रूप से समझाया। और हमें शुक्रवार तक लैब अभ्यास जमा करना है, है न?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_201_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct question tag: "You haven’t seen my notebook, ______ (have you / haven’t you)?"',
      options: [
        { id: 'opt_1', text: 'have you', isCorrect: true },
        { id: 'opt_2', text: 'haven’t you', isCorrect: false },
        { id: 'opt_3', text: 'did you', isCorrect: false },
      ],
      correctAnswer: 'have you',
      explanation: 'Negative statement "haven’t seen" requires positive tag "have you?".',
    },
    {
      id: 'cp_201_2',
      type: 'multiple_choice',
      prompt: 'Which sentence has the correct question tag?',
      options: [
        { id: 'opt_1', text: 'We finished the group slides on time, didn’t we?', isCorrect: true },
        { id: 'opt_2', text: 'We finished the group slides on time, isn’t it?', isCorrect: false },
        { id: 'opt_3', text: 'We finished the group slides on time, haven’t we?', isCorrect: false },
      ],
      correctAnswer: 'We finished the group slides on time, didn’t we?',
      explanation: 'Past simple "finished" uses auxiliary "didn’t we?".',
    },
    {
      id: 'cp_201_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [can’t you / you can help me / with this code / ?]',
      correctAnswer: 'you can help me with this code can’t you ?',
      explanation: 'Statement + modal tag: You can help me... can’t you?',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_201_1',
      prompt: 'Construct a sentence checking agreement that the campus library is open late tonight.',
      scenarioContext: 'Checking library hours with Liam.',
      targetStructure: 'The campus library is open until midnight tonight, isn’t it?',
      wordBank: ['The campus library', 'is open until midnight', 'tonight,', 'isn’t it?', 'for studying'],
      acceptableSolutions: [
        'The campus library is open until midnight tonight, isn’t it?',
        'The library is open late tonight, isn’t it?',
      ],
      explanation: 'Positive "is" -> tag "isn’t it?".',
    },
    {
      id: 'sc_201_2',
      prompt: 'Construct a sentence checking that Liam hasn’t forgotten about the team meeting at three.',
      scenarioContext: 'Reminding Liam about the meeting.',
      targetStructure: 'You haven’t forgotten about our project meeting at three o\'clock, have you?',
      wordBank: ['You haven’t forgotten', 'about our project meeting', 'at three o\'clock,', 'have you?', 'in the room'],
      acceptableSolutions: [
        'You haven’t forgotten about our project meeting at three o\'clock, have you?',
        'You haven’t forgotten our meeting at three, have you?',
      ],
      explanation: 'Negative "haven’t forgotten" -> tag "have you?".',
    },
  ],
  turns: [
    {
      id: 'turn_201_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! That database management lecture was packed today, wasn’t it? Did you find the SQL indexing examples easy to follow?',
      partnerAudioText:
        'Hey! That database management lecture was packed today, wasn’t it? Did you find the SQL indexing examples easy to follow?',
      partnerQuestionHindi:
        'अरे! डेटाबेस प्रबंधन का वह व्याख्यान आज खचाखच भरा हुआ था, है न? क्या आपको SQL इंडेक्सिंग उदाहरणों को समझना आसान लगा?',
      expectedFunction: 'Responding to partner’s tag and forming a matching question tag in reply',
      contextGoal: 'Agree with partner ("Yes, it was") and add a statement with a question tag (e.g. "Professor Evans explained it well, didn’t he?")',
      targetVocabulary: ['Yes, it was', 'didn’t he', 'lecture', 'examples', 'explained', 'Liam'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, it was! Professor Evans explained the indexing queries really clearly, didn’t he?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It certainly was! But the practical database examples made a lot of sense, didn’t they?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, absolutely. The lecture hall was completely full! We have another practical lab tomorrow, don’t we?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'tag_response',
          patterns: ['yes, it was', 'it was', 'certainly', 'absolutely', 'yes it was', 'indeed'],
          required: true,
        },
        {
          name: 'own_tag',
          patterns: ['didn’t he', 'didn’t they', 'don’t we', 'wasn’t it', 'isn’t it', 'haven’t we'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_201_1_isnt_it_generic',
          pattern: /explained.*, isn't it\?/i,
          errorType: 'grammar',
          message: 'Use "didn’t he?" for past actions with a person, not generic "isn’t it?".',
          correctionPattern: 'Professor Evans explained it well, didn’t he?',
        },
      ],
      remediationPractice: {
        id: 'rem_201_1',
        type: 'fill_blank',
        prompt: 'Fill in: "The teacher explained it well, ______ (didn’t he)?"',
        options: [
          { id: 'r1', text: 'didn’t he', isCorrect: true },
          { id: 'r2', text: 'isn’t it', isCorrect: false },
        ],
        correctAnswer: 'didn’t he',
        explanation: 'Past tense "explained" takes "didn’t he?".',
      },
    },
    {
      id: 'turn_201_2',
      turnIndex: 2,
      partnerPrompt:
        'He definitely did! By the way, we haven’t received the final assignment rubric yet, have we? Have you checked your university inbox today?',
      partnerAudioText:
        'He definitely did! By the way, we haven’t received the final assignment rubric yet, have we? Have you checked your university inbox today?',
      partnerQuestionHindi:
        'उन्होंने निश्चित रूप से समझाया! वैसे, हमें अभी तक अंतिम असाइनमेंट रूब्रिक नहीं मिला है, है न? क्या आपने आज अपना विश्वविद्यालय इनबॉक्स देखा है?',
      expectedFunction: 'Responding to negative tag and using a tag about checking email/portal',
      contextGoal: 'Answer ("No, we haven’t") and mention that you checked earlier or that he will email today',
      targetVocabulary: ['No, we haven’t', 'checked', 'inbox', 'portal', 'haven’t we', 'will he'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'No, we haven’t. I checked my student portal an hour ago. He will upload it tonight, won’t he?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'No, we haven’t received it yet. But we can start drafting our outline anyway, can’t we?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'No, nothing in the inbox yet. The teaching assistant mentioned she would post the rubric by 5 PM, didn’t she?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'tag_short_answer',
          patterns: ['no, we haven’t', 'no we haven’t', 'haven’t received', 'not yet', 'checked'],
          required: true,
        },
        {
          name: 'second_tag',
          patterns: ['won’t he', 'can’t we', 'didn’t she', 'doesn’t he', 'will he', 'isn’t she'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_201_2_yes_negative',
          pattern: /^yes, we haven't/i,
          errorType: 'grammar',
          message: 'In English, agree with negative statements using "No, we haven’t."',
          correctionPattern: 'No, we haven’t.',
        },
      ],
      remediationPractice: {
        id: 'rem_201_2',
        type: 'multiple_choice',
        prompt: 'How should you answer "We haven’t received it yet, have we?" if nothing has arrived?',
        options: [
          { id: 'r1', text: 'No, we haven’t.', isCorrect: true },
          { id: 'r2', text: 'Yes, we haven’t.', isCorrect: false },
        ],
        correctAnswer: 'No, we haven’t.',
        explanation: 'Say "No, we haven’t" to confirm a negative fact.',
      },
    },
    {
      id: 'turn_201_3',
      turnIndex: 3,
      partnerPrompt:
        'You are right, she did mention 5 PM! We really need to book a study room in the Alan Turing building for our group project. You can join me at 4 PM, can’t you?',
      partnerAudioText:
        'You are right, she did mention 5 PM! We really need to book a study room in the Alan Turing building for our group project. You can join me at 4 PM, can’t you?',
      partnerQuestionHindi:
        'आप सही कह रहे हैं, उन्होंने शाम 5 बजे का उल्लेख किया था! हमें अपने समूह प्रोजेक्ट के लिए एलन ट्यूरिंग बिल्डिंग में एक अध्ययन कक्ष बुक करने की वास्तव में आवश्यकता है। आप शाम 4 बजे मेरे साथ शामिल हो सकते हैं, है न?',
      expectedFunction: 'Responding to modal tag "can’t you?" and checking room booking with another tag',
      contextGoal: 'Confirm availability ("Yes, I can") and check details (e.g. "We booked room 204, didn’t we?" or "You have the keycard, don’t you?")',
      targetVocabulary: ['Yes, I can', 'can’t I', 'didn’t we', 'don’t you', 'room', '4 PM', 'Alan Turing'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, I can! We already booked Study Room 3 on the second floor, didn’t we?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Yes, I can make it at four. You have the access code for the project rooms, don’t you?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, I certainly can! Four o’clock suits me perfectly. We will finish the system design diagram today, won’t we?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'can_response',
          patterns: ['yes, i can', 'yes i can', 'i can', 'make it', 'certainly', 'suits me'],
          required: true,
        },
        {
          name: 'room_tag',
          patterns: ['didn’t we', 'don’t you', 'won’t we', 'haven’t we', 'isn’t it'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_201_3_yes_i_can_tag',
          pattern: /yes i do\b/i,
          errorType: 'grammar',
          message: 'Match the modal verb: To "You can..., can\'t you?", reply "Yes, I can."',
          correctionPattern: 'Yes, I can.',
        },
      ],
      remediationPractice: {
        id: 'rem_201_3',
        type: 'fill_blank',
        prompt: 'Fill in: "You can come at four, can’t you? — Yes, I ______ (can)."',
        options: [
          { id: 'r1', text: 'can', isCorrect: true },
          { id: 'r2', text: 'do', isCorrect: false },
        ],
        correctAnswer: 'can',
        explanation: 'Match auxiliary "can" in short answer.',
      },
    },
    {
      id: 'turn_201_4',
      turnIndex: 4,
      partnerPrompt:
        'Yes, I have the keycard and the diagram files ready on my laptop! It feels great to make steady progress as a team. We make a pretty solid study team, don’t we?',
      partnerAudioText:
        'Yes, I have the keycard and the diagram files ready on my laptop! It feels great to make steady progress as a team. We make a pretty solid study team, don’t we?',
      partnerQuestionHindi:
        'हाँ, मेरे लैपटॉप पर कीकार्ड और डायग्राम फाइलें तैयार हैं! एक टीम के रूप में लगातार प्रगति करना बहुत अच्छा लगता है। हम एक बहुत मजबूत अध्ययन दल बनाते हैं, है न?',
      expectedFunction: 'Closing the conversational exchange with a warm affirmative tag response',
      contextGoal: 'Agree warmly ("Yes, we do!") and look forward to meeting at 4 PM',
      targetVocabulary: ['Yes, we do', 'study team', 'see you at four', 'Liam', 'looking forward', 'great'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Yes, we do! Working together makes learning much more fun. See you at four o’clock, Liam!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'We certainly do! Thanks for keeping us organized. I’ll meet you outside the Turing building at 4.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, we definitely do! I’ll grab two coffees on my way over. See you upstairs in room three!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'do_affirmation',
          patterns: ['yes, we do', 'we do', 'certainly do', 'definitely do', 'we sure do'],
          required: true,
        },
        {
          name: 'closing_salutation',
          patterns: ['see you', 'four', 'liam', 'turing', 'together', 'room', 'coffee'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_201_4_short',
          pattern: /^(yes|yeah)$/i,
          errorType: 'interaction',
          message: 'Provide a complete tag answer ("Yes, we do!") and a friendly farewell.',
          correctionPattern: 'Yes, we do! See you at four o’clock, Liam.',
        },
      ],
      remediationPractice: {
        id: 'rem_201_4',
        type: 'multiple_choice',
        prompt: 'Which response matches "We make a solid team, don’t we?"',
        options: [
          { id: 'r1', text: 'Yes, we do! See you at four o’clock.', isCorrect: true },
          { id: 'r2', text: 'Yes, we are team.', isCorrect: false },
        ],
        correctAnswer: 'Yes, we do! See you at four o’clock.',
        explanation: 'Matches "do" auxiliary and closes warmly.',
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
