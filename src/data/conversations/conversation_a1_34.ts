import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_34: ConversationDefinition = {
  id: 'conv_a1_34',
  title: 'Possessive Pronouns & Belongings (Whose / mine, yours, ours, theirs)',
  cefr: 'A1',
  unitId: 'unit_a1_3',
  lessonLinks: ['lesson_a1_3_34'],
  estimatedMinutes: 5,
  scenario:
    'After a workshop at the community center, you and your classmate Ethan help clear the conference table and identify several misplaced items (notebooks, chargers, umbrellas, and jackets) using possessive pronouns.',
  communicativeGoals: [
    'Ask about ownership using "Whose + noun + is this / are these?"',
    'State ownership using possessive pronouns (mine, yours, his, hers, ours, theirs)',
    'Distinguish between possessive adjectives (my, your) and possessive pronouns (mine, yours)',
    'Return lost items to their rightful owners politely',
  ],
  canDoStatements: [
    'Can ask and answer questions about possession using "Whose" and possessive pronouns (CEFR A1.2)',
    'Can identify and return lost personal items in a group setting',
    'Can clarify what belongs to self and others without repeating nouns',
  ],
  characters: [
    {
      id: 'char_ethan',
      name: 'Ethan',
      role: 'Classmate',
      avatar: '🎒',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'belongings',
        ipa: '/bɪˈlɔːŋɪŋz/',
        partOfSpeech: 'noun',
        meaning: 'Things that one owns; personal property',
        exampleSentence: 'Please do not leave your belongings behind.',
        translations: { hi: 'सामान / निजी वस्तुएं' },
      },
      {
        word: 'whose',
        ipa: '/huːz/',
        partOfSpeech: 'pronoun',
        meaning: 'Belonging to or associated with which person',
        exampleSentence: 'Whose jacket is on the chair?',
        translations: { hi: 'किसका / किसकी' },
      },
      {
        word: 'charger',
        ipa: '/ˈtʃɑːrdʒər/',
        partOfSpeech: 'noun',
        meaning: 'A device for charging storage batteries',
        exampleSentence: 'I forgot my phone charger on the table.',
        translations: { hi: 'चार्जर' },
      },
      {
        word: 'umbrella',
        ipa: '/ʌmˈbrɛlə/',
        partOfSpeech: 'noun',
        meaning: 'A folding canopy supported by ribs for protection against rain',
        exampleSentence: 'This black umbrella is not mine; is it yours?',
        translations: { hi: 'छाता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Whose is this?',
        functionCategory: 'Ownership Inquiry',
        exampleSentence: 'Whose is this blue notebook?',
      },
      {
        phrase: 'It is mine / It isn’t mine.',
        functionCategory: 'Stating Ownership',
        exampleSentence: 'That pen is mine, thank you!',
      },
      {
        phrase: 'I think it is hers / his.',
        functionCategory: 'Attributing Ownership',
        exampleSentence: 'I think the red water bottle is hers.',
      },
      {
        phrase: 'Is this yours or theirs?',
        functionCategory: 'Clarifying Possession',
        exampleSentence: 'Is this umbrella yours or theirs?',
      },
    ],
    grammar: {
      title: 'Possessive Pronouns: mine, yours, his, hers, ours, theirs vs. Whose',
      conceptExplanation:
        'Possessive adjectives (my, your, his, her, our, their) require a noun after them: "my bag". Possessive pronouns (mine, yours, his, hers, ours, theirs) stand alone and replace the noun: "It is mine". Use "Whose" to ask about ownership: "Whose is this notebook?" → "It\'s hers."',
      patternFormula: 'Whose + [Noun] + is this / are these? | It is + [mine/yours/his/hers/ours/theirs]',
      contrastExamples: [
        {
          incorrect: 'This is mine notebook.',
          correct: 'This is my notebook. / This notebook is mine.',
          explanation: '"Mine" stands alone and does not come before a noun.',
        },
        {
          incorrect: 'Who is umbrella is that?',
          correct: 'Whose umbrella is that?',
          explanation: 'Use "Whose" for possession, not "Who is" (Who\'s).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Ethan',
        text: 'Hey! Someone left a black leather jacket on this chair. Whose is this? Is it yours?',
        translation: 'अरे! कोई इस कुर्सी पर ब्लैक लेदर जैकेट छोड़ गया है। यह किसकी है? क्या यह आपकी है?',
      },
      {
        speaker: 'You',
        text: "No, it isn't mine. My jacket is brown. I think that black one is Lucas's—it's his.",
        translation: 'नहीं, यह मेरी नहीं है। मेरी जैकेट भूरी है। मुझे लगता है कि वह काली वाली लुकास की है—यह उसकी है।',
      },
      {
        speaker: 'Ethan',
        text: 'And what about this silver phone charger and these blue notebooks? Are they ours?',
        translation: 'और इस सिल्वर फोन चार्जर और इन नीली नोटबुक्स के बारे में क्या? क्या वे हमारी हैं?',
      },
      {
        speaker: 'You',
        text: 'The charger is mine, thank you! But those notebooks belong to the study group—they are theirs.',
        translation: 'चार्जर मेरा है, धन्यवाद! लेकिन वे नोटबुक स्टडी ग्रुप की हैं—वे उनकी हैं।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_34_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence with the correct possessive pronoun: "I have my pen, so this blue one must be ___."',
      options: [
        { id: 'opt_1', text: 'yours', isCorrect: true },
        { id: 'opt_2', text: 'your', isCorrect: false },
        { id: 'opt_3', text: 'you', isCorrect: false },
      ],
      correctAnswer: 'yours',
      explanation: 'Use possessive pronoun "yours" when no noun follows.',
    },
    {
      id: 'cp_a1_34_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly asks about possession of keys?',
      options: [
        { id: 'opt_1', text: 'Whose keys are these on the desk?', isCorrect: true },
        { id: 'opt_2', text: "Who's keys are these on the desk?", isCorrect: false },
        { id: 'opt_3', text: 'Whom keys are these on desk?', isCorrect: false },
      ],
      correctAnswer: 'Whose keys are these on the desk?',
      explanation: '"Whose" is the interrogative possessive pronoun.',
    },
    {
      id: 'cp_a1_34_3',
      type: 'multiple_choice',
      prompt: 'Which answer correctly attributes an umbrella to Maria?',
      options: [
        { id: 'opt_1', text: 'The red umbrella is hers.', isCorrect: true },
        { id: 'opt_2', text: 'The red umbrella is her.', isCorrect: false },
        { id: 'opt_3', text: 'The red umbrella is she.', isCorrect: false },
      ],
      correctAnswer: 'The red umbrella is hers.',
      explanation: '"Hers" is the stand-alone possessive pronoun for female singular.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_34_1',
      scenarioContext: 'Clarify ownership of a laptop charger.',
      prompt: 'Build: "This laptop charger is mine, not yours."',
      targetStructure: 'Demonstrative + noun phrase + is + possessive pronoun + coordinator + not + possessive pronoun',
      wordBank: ['This', 'laptop', 'charger', 'is', 'mine', 'not', 'yours', 'my', 'your', 'her'],
      acceptableSolutions: [
        'This laptop charger is mine not yours',
        'This laptop charger is mine, not yours.',
      ],
      explanation: 'Contrasts "mine" and "yours" as stand-alone possessive pronouns.',
    },
    {
      id: 'sc_a1_34_2',
      scenarioContext: 'Identify ownership of multiple bags.',
      prompt: 'Build: "Whose bags are these? Are they ours?"',
      targetStructure: 'Whose + plural noun + are these? + Verb + subject + possessive pronoun?',
      wordBank: ['Whose', 'bags', 'are', 'these', 'Are', 'they', 'ours', 'our', 'them', 'is'],
      acceptableSolutions: [
        'Whose bags are these Are they ours',
        'Whose bags are these? Are they ours?',
      ],
      explanation: 'Inquiry with "Whose" and confirmation with "ours".',
    },
  ],
  turns: [
    {
      id: 'turn_a1_34_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey! Everyone just left the workshop, and look at the desk. There is a sleek black jacket hanging here. Whose is this? Is it yours?',
      partnerAudioText:
        'Hey! Everyone just left the workshop, and look at the desk. There is a sleek black jacket hanging here. Whose is this? Is it yours?',
      partnerQuestionHindi:
        'अरे! हर कोई अभी कार्यशाला से निकला है, और मेज पर देखो। यहाँ एक शानदार काली जैकेट लटकी हुई है। यह किसकी है? क्या यह आपकी है?',
      expectedFunction: 'Deny Ownership & Attribute to Another Person',
      contextGoal:
        'State that the black jacket is not yours ("No, it isn\'t mine") and attribute it to another classmate (e.g. "I think it is Lucas\'s / it is his").',
      targetVocabulary: ["isn't mine", 'mine', 'his', 'hers', 'jacket', 'lucas', 'black'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: "No, it isn't mine. My jacket is blue. I think that black one belongs to Lucas, so it's his.",
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: "That isn't mine. Mine is blue. I think it is his!",
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: "Not mine! That's definitely his. Mine is already in my backpack.",
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Ownership Denial and Attribution',
          patterns: [
            'not mine',
            "isn't mine",
            'his',
            'hers',
            'belongs to',
            'mine is',
            'lucas',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'is_not_my_error',
          pattern: /\bis not my\b(?!\s+\w+)/i,
          errorType: 'grammar',
          message: 'Say "It is not mine" when no noun follows.',
          correctionPattern: "It isn't mine.",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_34_1',
        type: 'fill_blank',
        prompt: 'Select the right word: "No, that jacket is not ___."',
        options: [
          { id: 'opt_1', text: 'mine', isCorrect: true },
          { id: 'opt_2', text: 'my', isCorrect: false },
          { id: 'opt_3', text: 'me', isCorrect: false },
        ],
        correctAnswer: 'mine',
        explanation: 'Use "mine" as a stand-alone possessive pronoun.',
      },
    },
    {
      id: 'turn_a1_34_2',
      turnIndex: 2,
      partnerPrompt:
        'Good call, I will put it on Lucas’s chair. And what about this silver phone charger plugged into the wall? Is this yours, or does it belong to Sarah?',
      partnerAudioText:
        'Good call, I will put it on Lucas’s chair. And what about this silver phone charger plugged into the wall? Is this yours, or does it belong to Sarah?',
      partnerQuestionHindi:
        'अच्छा सुझाव, मैं इसे लुकास की कुर्सी पर रख दूँगा। और दीवार में लगे इस सिल्वर फोन चार्जर के बारे में क्या? क्या यह आपका है, या सारा का?',
      expectedFunction: 'Claim or Clarify Ownership using Possessive Pronouns',
      contextGoal:
        'Claim the charger as yours ("Yes, that is mine, thank you!") or attribute it to Sarah ("I think it is hers").',
      targetVocabulary: ['mine', 'hers', 'charger', 'thank you', 'forgot', 'silver'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Oh, that charger is mine! Thank you so much for noticing it, I almost forgot it.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, it is mine! Thank you for finding it.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'That silver one is mine! Thanks for grabbing it.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Possessive Claim',
          patterns: ['is mine', "that's mine", 'it is mine', 'hers', 'thank you', 'thanks'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_34_2',
        type: 'multiple_choice',
        prompt: 'Which response correctly claims the charger?',
        options: [
          { id: 'opt_1', text: 'Yes, that silver charger is mine! Thank you.', isCorrect: true },
          { id: 'opt_2', text: 'Yes, that charger is me! Thank you.', isCorrect: false },
          { id: 'opt_3', text: 'Yes, that charger is my! Thank you.', isCorrect: false },
        ],
        correctAnswer: 'Yes, that silver charger is mine! Thank you.',
        explanation: '"Mine" is the correct possessive pronoun.',
      },
    },
    {
      id: 'turn_a1_34_3',
      turnIndex: 3,
      partnerPrompt:
        'Here you go! And look under the front row: two umbrellas, a red one and a green one. We left our umbrellas by the entrance earlier, right? Are these ours?',
      partnerAudioText:
        'Here you go! And look under the front row: two umbrellas, a red one and a green one. We left our umbrellas by the entrance earlier, right? Are these ours?',
      partnerQuestionHindi:
        'यह लीजिए! और सामने वाली पंक्ति के नीचे देखिए: दो छाते, एक लाल और एक हरा। हमने अपने छाते पहले प्रवेश द्वार पर छोड़े थे, है ना? क्या ये हमारे हैं?',
      expectedFunction: 'Clarify Group Possession (ours / theirs)',
      contextGoal:
        'Explain whether the umbrellas are ours or belong to other students ("No, ours are near the door; these must be theirs").',
      targetVocabulary: ['ours', 'theirs', 'umbrellas', 'entrance', 'door', 'belongs to them'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'No, these aren\'t ours. Ours are near the front entrance, so these umbrellas must be theirs.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'No, ours are by the door. I think these are theirs.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Not ours! Ours are at the door, so those are theirs.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Group Possession Comparison',
          patterns: ['ours', 'theirs', 'entrance', 'door', 'not ours', "aren't ours"],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'our_theirs_confusion',
          pattern: /\bare not our\b(?!\s+\w+)/i,
          errorType: 'grammar',
          message: 'Use "ours" when no noun follows ("They are not ours").',
          correctionPattern: "They aren't ours.",
        },
      ],
      remediationPractice: {
        id: 'rem_a1_34_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Those umbrellas are not ___; our umbrellas are by the door."',
        options: [
          { id: 'opt_1', text: 'ours', isCorrect: true },
          { id: 'opt_2', text: 'our', isCorrect: false },
          { id: 'opt_3', text: 'us', isCorrect: false },
        ],
        correctAnswer: 'ours',
        explanation: '"Ours" is the stand-alone possessive pronoun for first-person plural.',
      },
    },
    {
      id: 'turn_a1_34_4',
      turnIndex: 4,
      partnerPrompt:
        'You are totally right! I see our umbrellas right by the entrance. We have cleared everything now. Ready to head home?',
      partnerAudioText:
        'You are totally right! I see our umbrellas right by the entrance. We have cleared everything now. Ready to head home?',
      partnerQuestionHindi:
        'आप बिल्कुल सही कह रहे हैं! मुझे हमारे छाते प्रवेश द्वार के ठीक पास दिखाई दे रहे हैं। हमने अब सब कुछ साफ कर दिया है। घर जाने के लिए तैयार हैं?',
      expectedFunction: 'Conclude Cleanup & Say Goodbye',
      contextGoal:
        'Confirm you have all your personal belongings, thank Ethan for cleaning up together, and say goodbye.',
      targetVocabulary: ['belongings', 'ready', 'thank you', 'have a good evening', 'see you', 'bye'],
      suggestedResponses: [
        {
          label: 'High Scaffold',
          text: 'Yes! I have all my belongings now. Thanks for your help cleaning up, Ethan. Have a wonderful evening!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffold',
          text: 'Yes, I am all set. Great job today! See you next class.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'All packed and ready to go. See you tomorrow, Ethan!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Farewell & Completion',
          patterns: ['ready', 'belongings', 'thanks', 'see you', 'good evening', 'good job', 'bye'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_34_4',
        type: 'multiple_choice',
        prompt: 'Which phrase is natural when finishing a task together?',
        options: [
          { id: 'opt_1', text: 'I have all my belongings now. Thanks for your help, see you soon!', isCorrect: true },
          { id: 'opt_2', text: 'I take all my mine now.', isCorrect: false },
          { id: 'opt_3', text: 'Everything is yours me go.', isCorrect: false },
        ],
        correctAnswer: 'I have all my belongings now. Thanks for your help, see you soon!',
        explanation: 'Natural and grammatically accurate.',
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
