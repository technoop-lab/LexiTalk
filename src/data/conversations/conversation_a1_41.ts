import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_41: ConversationDefinition = {
  id: 'conv_a1_41',
  title: 'Past Simple Negatives & Questions (did not / didn\'t, Did you...?)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_41'],
  estimatedMinutes: 5,
  scenario:
    'You run into your classmate Maya in the hallway on Tuesday. She asks why she didn\'t see you at the weekend study group party, and you ask her about who attended, what they did, and clarify why you didn\'t go.',
  communicativeGoals: [
    'Construct past negative statements using "did not" / "didn\'t + base verb" (I didn\'t go, I didn\'t see)',
    'Form and answer Yes/No past questions using "Did you + base verb?" and short answers ("Yes, I did / No, I didn\'t")',
    'Form WH-questions in the past ("Where did you go?", "Who did you meet?", "Why didn\'t you call?")',
    'Clarify misunderstandings and explain past reasons clearly',
  ],
  canDoStatements: [
    'Can ask and answer questions about past events and absences using "did" and "didn\'t" (CEFR A1.2)',
    'Can express past negatives with the auxiliary "didn\'t" without duplicating past tense on main verbs',
    'Can participate in a multi-turn clarification conversation about past actions',
  ],
  characters: [
    {
      id: 'char_maya_class',
      name: 'Maya',
      role: 'Classmate',
      avatar: '🎓',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'attend',
        ipa: '/əˈtɛnd/',
        partOfSpeech: 'verb',
        meaning: 'Be present at an event, meeting, or function',
        exampleSentence: 'Did you attend the study group session on Saturday?',
        translations: { hi: 'उपस्थित होना / भाग लेना' },
      },
      {
        word: 'notice',
        ipa: '/ˈnoʊtɪs/',
        partOfSpeech: 'verb',
        meaning: 'Become aware of; see or observe',
        exampleSentence: 'I didn\'t notice your message until Sunday morning.',
        translations: { hi: 'ध्यान देना / देखना' },
      },
      {
        word: 'miss',
        ipa: '/mɪs/',
        partOfSpeech: 'verb',
        meaning: 'Fail to attend, participate in, or see something',
        exampleSentence: 'I missed the party because I was unwell.',
        translations: { hi: 'छूट जाना / चूकना' },
      },
      {
        word: 'explain',
        ipa: '/ɪkˈspleɪn/',
        partOfSpeech: 'verb',
        meaning: 'Make an idea or situation clear to someone by describing it in more detail',
        exampleSentence: 'Let me explain why I didn\'t come.',
        translations: { hi: 'समझाना / स्पष्ट करना' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I didn’t go because...',
        functionCategory: 'Past Negative with Reason',
        exampleSentence: 'I didn’t go to the party because I had a headache.',
      },
      {
        phrase: 'Did you see... there?',
        functionCategory: 'Past Interrogative',
        exampleSentence: 'Did you see Sarah and Lucas there?',
      },
      {
        phrase: 'No, I didn’t.',
        functionCategory: 'Short Negative Answer',
        exampleSentence: 'Did you finish the assignment? No, I didn’t.',
      },
      {
        phrase: 'What did you do instead?',
        functionCategory: 'Alternative Past Inquiry',
        exampleSentence: 'What did you do at home instead?',
      },
    ],
    grammar: {
      title: 'Past Negatives & Questions: didn\'t + [Base Verb] & Did you + [Base Verb]?',
      conceptExplanation:
        'In the simple past, use auxiliary "didn\'t" for negatives: "I didn\'t go" (NOT "I didn\'t went"). For questions, use "Did + subject + base verb?": "Did you see Maya?" (NOT "Did you saw Maya?"). In short answers, use "Yes, I did" or "No, I didn\'t".',
      patternFormula: 'Subject + didn\'t + [Base Verb] | Did + Subject + [Base Verb]? | WH-word + did + Subject + [Base Verb]?',
      contrastExamples: [
        {
          incorrect: 'I didn\'t went to the party.',
          correct: 'I didn\'t go to the party.',
          explanation: 'After "didn\'t", the main verb MUST be in base form: "didn\'t go".',
        },
        {
          incorrect: 'Did you saw the teacher yesterday?',
          correct: 'Did you see the teacher yesterday?',
          explanation: 'After "Did you", use the base form "see", not past "saw".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya',
        text: 'Hey! I looked for you at the study group meetup on Saturday afternoon, but I didn\'t see you. Did you go?',
        translation: 'अरे! मैंने शनिवार दोपहर को स्टडी ग्रुप मीटअप में आपको ढूंढा, लेकिन आप मुझे नहीं दिखे। क्या आप गए थे?',
      },
      {
        speaker: 'You',
        text: 'No, I didn\'t. I didn\'t go because I caught a cold on Friday night and stayed in bed.',
        translation: 'नहीं, मैं नहीं गया। मैं इसलिए नहीं गया क्योंकि मुझे शुक्रवार की रात जुकाम हो गया था और मैं बिस्तर पर ही रहा।',
      },
      {
        speaker: 'Maya',
        text: 'Oh no, I\'m sorry to hear that! Did you call the doctor or take any medicine?',
        translation: 'अरे नहीं, यह सुनकर दुख हुआ! क्या आपने डॉक्टर को फोन किया या कोई दवा ली?',
      },
      {
        speaker: 'You',
        text: 'I took some vitamin C and slept all Saturday. Who did you see at the library?',
        translation: 'मैंने कुछ विटामिन सी लिया और पूरे शनिवार सोया। आपने लाइब्रेरी में किसे देखा?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_41_1',
      type: 'fill_blank',
      prompt: 'Complete the negative sentence: "I didn\'t ___ to the party last night."',
      options: [
        { id: 'opt_1', text: 'go', isCorrect: true },
        { id: 'opt_2', text: 'went', isCorrect: false },
        { id: 'opt_3', text: 'gone', isCorrect: false },
      ],
      correctAnswer: 'go',
      explanation: 'Use the base form of the verb after "didn\'t": "didn\'t go".',
    },
    {
      id: 'cp_a1_41_2',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks about a past phone call?',
      options: [
        { id: 'opt_1', text: 'Did you call your brother yesterday?', isCorrect: true },
        { id: 'opt_2', text: 'Did you called your brother yesterday?', isCorrect: false },
        { id: 'opt_3', text: 'Were you call your brother yesterday?', isCorrect: false },
      ],
      correctAnswer: 'Did you call your brother yesterday?',
      explanation: '"Did you call..." uses the auxiliary "Did" with base verb "call".',
    },
    {
      id: 'cp_a1_41_3',
      type: 'multiple_choice',
      prompt: 'What is the correct short answer to: "Did you finish the reading assignment?"',
      options: [
        { id: 'opt_1', text: 'No, I didn\'t. I was too tired.', isCorrect: true },
        { id: 'opt_2', text: 'No, I wasn\'t finish.', isCorrect: false },
        { id: 'opt_3', text: 'No, I not did.', isCorrect: false },
      ],
      correctAnswer: 'No, I didn\'t. I was too tired.',
      explanation: '"No, I didn\'t" is the accurate short response to "Did you...?"',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_41_1',
      scenarioContext: 'Explain non-attendance due to illness.',
      prompt: 'Build: "I did not go because I felt sick."',
      targetStructure: 'Subject + did not + base verb + because + subject + irregular past + adjective',
      wordBank: ['I', 'did', 'not', 'go', 'because', 'I', 'felt', 'sick', 'went', 'was', 'feel'],
      acceptableSolutions: [
        'I did not go because I felt sick',
        'I did not go because I felt sick.',
        'I didn\'t go because I felt sick.',
      ],
      explanation: 'Negative auxiliary "did not" with base verb "go".',
    },
    {
      id: 'sc_a1_41_2',
      scenarioContext: 'Ask who attended the meetup.',
      prompt: 'Build: "Who did you meet at the library yesterday?"',
      targetStructure: 'WH-word + did + subject + base verb + prepositional phrase + adverb?',
      wordBank: ['Who', 'did', 'you', 'meet', 'at', 'the', 'library', 'yesterday', 'met', 'were', 'saw'],
      acceptableSolutions: [
        'Who did you meet at the library yesterday',
        'Who did you meet at the library yesterday?',
      ],
      explanation: 'WH past question with base verb "meet".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_41_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! I looked all over for you at the study session on Saturday afternoon, but you weren’t there. Did you go to the campus library?',
      partnerAudioText:
        'Hey! I looked all over for you at the study session on Saturday afternoon, but you weren’t there. Did you go to the campus library?',
      partnerQuestionHindi:
        'अरे! मैंने शनिवार दोपहर को अध्ययन सत्र में आपको हर जगह ढूंढा, लेकिन आप वहां नहीं थे। क्या आप कैंपस लाइब्रेरी गए थे?',
      expectedFunction: 'Answer with Past Negative (didn\'t go) & Give Reason',
      contextGoal:
        'Respond with "No, I didn\'t" and explain that you didn\'t go because you felt sick or had a family event.',
      targetVocabulary: ["didn't go", "didn't", 'felt sick', 'because', 'stayed home', 'no i didn\'t'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'No, I didn’t. I didn’t go to the library because I felt unwell and stayed home in bed all day.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'No, I didn’t go. I was sick on Saturday, so I stayed at home.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'No, I didn’t make it! Caught a cold on Friday night.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Negative & Reason',
          patterns: [
            "didn't go",
            "didn't",
            'no i didn',
            'felt sick',
            'stayed home',
            'was sick',
            'unwell',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'didnt_went_error',
          pattern: /\bdidn't went\b/i,
          errorType: 'grammar',
          message: 'Say "didn\'t go", not "didn\'t went".',
          correctionPattern: "didn't go",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_41_1',
        type: 'fill_blank',
        prompt: 'Choose the correct form: "No, I didn\'t ___ to campus on Saturday."',
        options: [
          { id: 'opt_1', text: 'go', isCorrect: true },
          { id: 'opt_2', text: 'went', isCorrect: false },
          { id: 'opt_3', text: 'going', isCorrect: false },
        ],
        correctAnswer: 'go',
        explanation: '"Didn\'t" takes the base form "go".',
      },
    },
    {
      id: 'turn_a1_41_2',
      turnIndex: 2,
      partnerPrompt:
        'Oh no! I am so sorry you were sick! Did you take any medicine, and are you feeling better now?',
      partnerAudioText:
        'Oh no! I am so sorry you were sick! Did you take any medicine, and are you feeling better now?',
      partnerQuestionHindi:
        'अरे नहीं! मुझे बहुत दुख है कि आप बीमार थे! क्या आपने कोई दवा ली, और क्या आप अब बेहतर महसूस कर रहे हैं?',
      expectedFunction: 'Answer Health Question & State Current Status',
      contextGoal:
        'Answer the past question ("Yes, I did / I took some medicine") and confirm you feel much better today.',
      targetVocabulary: ['yes i did', 'took medicine', 'slept', 'feeling better', 'thank you', 'much better'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes, I did! I took some hot tea and cold medicine, and I slept for ten hours. I feel much better today, thank you!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I took some medicine and rested. I am completely fine now!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes, took medicine and slept all weekend. Back to 100% now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Medicine & Recovery Confirmation',
          patterns: ['yes i did', 'took medicine', 'slept', 'rested', 'feeling better', 'feel better', 'fine now'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_41_2',
        type: 'multiple_choice',
        prompt: 'Which response correctly answers: "Did you take any medicine?"',
        options: [
          { id: 'opt_1', text: 'Yes, I did. I took some aspirin.', isCorrect: true },
          { id: 'opt_2', text: 'Yes, I was taking aspirin yesterday.', isCorrect: false },
          { id: 'opt_3', text: 'Yes, I am did.', isCorrect: false },
        ],
        correctAnswer: 'Yes, I did. I took some aspirin.',
        explanation: '"Yes, I did" matches the auxiliary "Did".',
      },
    },
    {
      id: 'turn_a1_41_3',
      turnIndex: 3,
      partnerPrompt:
        'I am so glad you have recovered! We actually covered chapter four together during the study session. Did you do the practice quiz at the end of the chapter yet?',
      partnerAudioText:
        'I am so glad you have recovered! We actually covered chapter four together during the study session. Did you do the practice quiz at the end of the chapter yet?',
      partnerQuestionHindi:
        'मुझे बहुत खुशी है कि आप ठीक हो गए हैं! हमने वास्तव में अध्ययन सत्र के दौरान अध्याय चार को एक साथ कवर किया। क्या आपने अभी तक अध्याय के अंत में अभ्यास प्रश्नोत्तरी की है?',
      expectedFunction: 'Answer Quiz Question & Ask About Attendees (Who did you see?)',
      contextGoal:
        'Explain that you didn\'t do the quiz yet, and ask who attended the study group (e.g. "Who did you see there? Did Lucas come?").',
      targetVocabulary: ["didn't do", "haven't done", 'who did you see', 'did lucas come', 'chapter four', 'quiz'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'No, I didn’t do the quiz yet because I was resting. Who did you see at the study group? Did Lucas and Carlos come?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'I didn’t do it yet. Who was there on Saturday? Did everyone attend?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Didn’t do the quiz yet. Who did you study with on Saturday?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Negative Quiz & Past Question',
          patterns: [
            "didn't do",
            'not yet',
            'who did you see',
            'who was there',
            'did lucas',
            'did everyone',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'who_did_you_saw_error',
          pattern: /\bwho did you saw\b/i,
          errorType: 'grammar',
          message: 'Say "Who did you see", not "Who did you saw".',
          correctionPattern: 'Who did you see?',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_41_3',
        type: 'fill_blank',
        prompt: 'Fill in the question: "Who did you ___ at the library on Saturday?"',
        options: [
          { id: 'opt_1', text: 'see', isCorrect: true },
          { id: 'opt_2', text: 'saw', isCorrect: false },
          { id: 'opt_3', text: 'seen', isCorrect: false },
        ],
        correctAnswer: 'see',
        explanation: 'Auxiliary "did" requires the base form "see".',
      },
    },
    {
      id: 'turn_a1_41_4',
      turnIndex: 4,
      partnerPrompt:
        'Lucas and Priya were there, but Carlos didn’t come either. I can share my summary notes with you so you can catch up on chapter four quickly!',
      partnerAudioText:
        'Lucas and Priya were there, but Carlos didn’t come either. I can share my summary notes with you so you can catch up on chapter four quickly!',
      partnerQuestionHindi:
        'लुकास और प्रिया वहाँ थे, लेकिन कार्लोस भी नहीं आया। मैं आपके साथ अपने सारांश नोट्स साझा कर सकती हूँ ताकि आप अध्याय चार को जल्दी से समझ सकें!',
      expectedFunction: 'Thank Classmate & Accept Shared Notes',
      contextGoal:
        'Thank Maya enthusiastically for sharing notes, and arrange to review them before class.',
      targetVocabulary: ['thank you', 'appreciate it', 'notes', 'summary', 'see you in class', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'That would be so helpful, Maya! Thank you very much for sharing your notes. See you in lecture at two!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Thank you so much Maya, that is very kind of you! See you in class.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Awesome, thanks Maya! See you in class at two.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Class Meeting',
          patterns: ['thank you', 'thanks', 'notes', 'appreciate', 'see you in class', 'see you at', 'helpful'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_41_4',
        type: 'multiple_choice',
        prompt: 'Which phrase warmly accepts study notes from a classmate?',
        options: [
          { id: 'opt_1', text: 'Thank you so much Maya, I really appreciate you sharing your notes!', isCorrect: true },
          { id: 'opt_2', text: 'Give notes to me fast.', isCorrect: false },
          { id: 'opt_3', text: 'I am taking your paper now.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much Maya, I really appreciate you sharing your notes!',
        explanation: 'Polite and friendly.',
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
