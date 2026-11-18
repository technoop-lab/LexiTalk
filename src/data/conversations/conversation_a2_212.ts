import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_212: ConversationDefinition = {
  id: 'conv_a2_212',
  title: 'School, University & Campus Life',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_212'],
  estimatedMinutes: 5,
  scenario:
    'You are taking a campus orientation tour with student ambassador Elena. You ask about essential student facilities including the main library, student dormitory, campus cafeteria, and auditorium, while discussing daily student routines and joining campus societies.',
  communicativeGoals: [
    'Describe campus buildings and facilities using prepositions of place (opposite, next to, on the ground floor, across from)',
    'Ask for and give directions around campus in simple A2 English',
    'Talk about daily campus routines (e.g. studying in the library, eating at the cafeteria, joining student clubs)',
    'Use natural active listening rejoinders and follow-up questions',
  ],
  canDoStatements: [
    'Can ask for and understand directions to different buildings on a campus',
    'Can describe student facilities and where key services are located',
    'Can talk about everyday campus life and student activities',
  ],
  characters: [
    {
      id: 'char_elena_campus_guide',
      name: 'Elena',
      role: 'Campus Tour Ambassador',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'dormitory',
        ipa: '/ˈdɔːmətri/',
        partOfSpeech: 'noun',
        meaning: 'A large building providing living quarters for university students; student residence / hall',
        exampleSentence: 'My dormitory is only a five-minute walk from the main lecture hall.',
        translations: { hi: 'छात्रावास / हॉस्टल (डॉर्मिटरी)' },
      },
      {
        word: 'auditorium',
        ipa: '/ˌɔːdɪˈtɔːriəm/',
        partOfSpeech: 'noun',
        meaning: 'A large hall used for lectures, concerts, and university ceremonies',
        exampleSentence: 'The welcome presentation will take place in the main auditorium.',
        translations: { hi: 'सभागार (ऑडिटोरियम)' },
      },
      {
        word: 'cafeteria',
        ipa: '/ˌkæfəˈtɪəriə/',
        partOfSpeech: 'noun',
        meaning: 'A restaurant in a university or school where students select food from a counter',
        exampleSentence: 'Students often meet in the campus cafeteria for lunch between classes.',
        translations: { hi: 'कैफेटेरिया / छात्र भोजन कक्ष' },
      },
      {
        word: 'facility',
        ipa: '/fəˈsɪləti/',
        partOfSpeech: 'noun',
        meaning: 'A place, amenity, or piece of equipment provided for a particular purpose',
        exampleSentence: 'The sports facility includes a gym, swimming pool, and tennis courts.',
        translations: { hi: 'सुविधा / साधन (फैसिलिटी)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'It is located on the ground floor next to the cafeteria.',
        functionCategory: 'Describing facility location',
        exampleSentence: 'The library helpdesk is on the second floor.',
      },
      {
        phrase: 'How do I get to the science building from here?',
        functionCategory: 'Asking for campus directions',
        exampleSentence: 'Where is the nearest computer lab located?',
      },
      {
        phrase: 'Are there any student societies or sports clubs on campus?',
        functionCategory: 'Inquiring about student life and activities',
        exampleSentence: 'Can first-year students join the drama club?',
      },
      {
        phrase: 'That sounds really convenient for daily study.',
        functionCategory: 'Active listening reaction',
        exampleSentence: 'That’s great to know!',
      },
    ],
    grammar: {
      title: 'Prepositions of Place & Campus Spatial Navigation',
      conceptExplanation:
        '1. Prepositions for locations:\n   - "on the ground / first / second floor"\n   - "next to / beside"\n   - "opposite / across from"\n   - "between [A] and [B]"\n2. Giving Directions on Campus:\n   - "Go straight ahead, turn left at the fountain, and it is on your right."',
      patternFormula: '[Facility] is located [Preposition] [Landmark] | To get to [Place], go [Direction]',
      contrastExamples: [
        {
          incorrect: 'The library is in the ground floor.',
          correct: 'The library is on the ground floor.',
          explanation: 'Use the preposition "on" with building floor levels.',
        },
        {
          incorrect: 'The cafeteria is opposite to the gym.',
          correct: 'The cafeteria is opposite the gym (or across from the gym).',
          explanation: 'In standard British/American English, "opposite" takes no "to".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Elena',
        text: 'Welcome to Central Quad! On your left is the North Dormitory, and on your right is the Main Auditorium.',
        translation: 'सेंट्रल क्वाड में आपका स्वागत है! आपकी बाईं ओर नॉर्थ डॉर्मिटरी है, और आपकी दाईं ओर मुख्य सभागार है।',
      },
      {
        speaker: 'Learner',
        text: 'That’s great! Where is the university library located from here?',
        translation: 'यह बहुत बढ़िया है! यहाँ से विश्वविद्यालय का पुस्तकालय कहाँ स्थित है?',
      },
      {
        speaker: 'Elena',
        text: 'It is right across the garden, next to the student union building.',
        translation: 'यह बगीचे के ठीक सामने, छात्र संघ भवन के बगल में है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_212_1',
      type: 'fill_blank',
      prompt: 'Complete with the correct preposition: "The IT support desk is located ______ (on / in / at) the first floor."',
      options: [
        { id: 'opt_1', text: 'on', isCorrect: true },
        { id: 'opt_2', text: 'in', isCorrect: false },
        { id: 'opt_3', text: 'at', isCorrect: false },
      ],
      correctAnswer: 'on',
      explanation: 'Use "on" for floor levels.',
    },
    {
      id: 'cp_212_2',
      type: 'multiple_choice',
      prompt: 'How do you describe a building positioned on the other side of the courtyard?',
      options: [
        { id: 'opt_1', text: 'The cafeteria is across from the auditorium.', isCorrect: true },
        { id: 'opt_2', text: 'The cafeteria is across of the auditorium.', isCorrect: false },
        { id: 'opt_3', text: 'The cafeteria is on across the auditorium.', isCorrect: false },
      ],
      correctAnswer: 'The cafeteria is across from the auditorium.',
      explanation: '"Across from" or "opposite" indicates the opposite side of an open space.',
    },
    {
      id: 'cp_212_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [the student dormitory / is / between the library / and the sports hall]',
      correctAnswer: 'the student dormitory is between the library and the sports hall',
      explanation: 'Subject + is + between [A] + and [B].',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_212_1',
      prompt: 'Construct a sentence asking Elena where the student cafeteria is located.',
      scenarioContext: 'Asking your campus guide for facility directions.',
      targetStructure: 'Could you tell me where the main cafeteria is located?',
      wordBank: ['Could you tell me', 'where the main cafeteria', 'is located,', 'Elena?', 'on the campus'],
      acceptableSolutions: [
        'Could you tell me where the main cafeteria is located?',
        'Where is the main campus cafeteria located?',
      ],
      explanation: 'Polite inquiry formula: Could you tell me where [Place] is located?',
    },
    {
      id: 'sc_212_2',
      prompt: 'Construct a sentence describing your daily routine of studying in the library after lunch.',
      scenarioContext: 'Describing student habits to Elena.',
      targetStructure: 'I usually study in the library every afternoon after having lunch.',
      wordBank: ['I usually study', 'in the library', 'every afternoon', 'after having lunch', 'with my friends.'],
      acceptableSolutions: [
        'I usually study in the library every afternoon after having lunch.',
        'I usually go to the library after having lunch.',
      ],
      explanation: 'Routine sentence: Frequency adverb + verb + location + time clause.',
    },
  ],
  turns: [
    {
      id: 'turn_212_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi! Welcome to our university campus tour. I am Elena, your student ambassador. We are standing in front of the Main Auditorium. What campus building would you like to visit first?',
      partnerAudioText:
        'Hi! Welcome to our university campus tour. I am Elena, your student ambassador. We are standing in front of the Main Auditorium. What campus building would you like to visit first?',
      partnerQuestionHindi:
        'नमस्ते! हमारे विश्वविद्यालय परिसर के दौरे में आपका स्वागत है। मैं आपकी छात्र राजदूत ऐलेना हूँ। हम मुख्य सभागार के सामने खड़े हैं। आप सबसे पहले किस परिसर भवन का दौरा करना चाहेंगे?',
      expectedFunction: 'Greeting the guide and asking to see the library or student dormitory',
      contextGoal: 'Greet Elena, mention you want to see the main library or student dormitory, and ask where it is located',
      targetVocabulary: ['library', 'dormitory', 'located', 'visit', 'Elena', 'hello'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Elena! I would really like to see the main library. Where is it located from here?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Elena! Could we visit the student dormitory first? I want to see where new students live.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Elena. I’d love to check out the university library and computer labs. Is it close to the auditorium?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_guide',
          patterns: ['hi', 'hello', 'elena', 'good morning'],
          required: true,
        },
        {
          name: 'target_facility',
          patterns: ['library', 'dormitory', 'dorm', 'residence', 'computer lab', 'cafeteria'],
          required: true,
        },
        {
          name: 'location_question',
          patterns: ['where', 'located', 'visit', 'see', 'from here', 'close'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_212_1_where_is_it',
          pattern: /^library where\?$/i,
          errorType: 'structure',
          message: 'Use a full polite question: "Where is the library located?" or "Could we visit the library first?"',
          correctionPattern: 'Where is the main library located?',
        },
      ],
      remediationPractice: {
        id: 'rem_212_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Where ______ (is) the main library located?"',
        options: [
          { id: 'r1', text: 'is', isCorrect: true },
          { id: 'r2', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Singular subject "the main library" uses "is".',
      },
    },
    {
      id: 'turn_212_2',
      turnIndex: 2,
      partnerPrompt:
        'The library is right across the courtyard, next to the science block! It has silent study rooms on the top floor and collaborative group desks on the ground floor. Which study space do you think you will use more often?',
      partnerAudioText:
        'The library is right across the courtyard, next to the science block! It has silent study rooms on the top floor and collaborative group desks on the ground floor. Which study space do you think you will use more often?',
      partnerQuestionHindi:
        'पुस्तकालय आँगन के ठीक सामने, विज्ञान ब्लॉक के बगल में है! इसमें शीर्ष मंजिल पर शांत अध्ययन कक्ष और भूतल पर सहयोगी समूह डेस्क हैं। आपको क्या लगता है कि आप किस अध्ययन स्थान का अधिक उपयोग करेंगे?',
      expectedFunction: 'Stating study space preference using prepositions and giving a reason',
      contextGoal: 'Explain your preference (e.g. silent study rooms on the top floor because you need quiet, or ground floor group desks) and react to the location',
      targetVocabulary: ['silent study', 'ground floor', 'top floor', 'prefer', 'because', 'quiet', 'concentrate'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I will definitely use the silent study rooms on the top floor because I need total quiet to concentrate.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'That sounds fantastic! I prefer the ground floor group desks because I like doing coursework with my classmates.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’ll probably use the top floor during exam revision for quiet study, and the ground floor for group assignments.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'chosen_space',
          patterns: ['silent study', 'top floor', 'ground floor', 'group desks', 'rooms'],
          required: true,
        },
        {
          name: 'reason_and_reaction',
          patterns: ['because', 'quiet', 'concentrate', 'classmates', 'group', 'study', 'work'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_212_2_in_the_floor',
          pattern: /in the (top|ground) floor/i,
          errorType: 'grammar',
          message: 'Say "on the top floor" or "on the ground floor", not "in".',
          correctionPattern: 'I prefer the study rooms on the top floor.',
        },
      ],
      remediationPractice: {
        id: 'rem_212_2',
        type: 'multiple_choice',
        prompt: 'Which preposition is correct for floors?',
        options: [
          { id: 'r1', text: 'on the third floor', isCorrect: true },
          { id: 'r2', text: 'in the third floor', isCorrect: false },
        ],
        correctAnswer: 'on the third floor',
        explanation: 'We say "on the floor".',
      },
    },
    {
      id: 'turn_212_3',
      turnIndex: 3,
      partnerPrompt:
        'Great choice! Now, right behind us is the Student Union. That is where all student clubs and societies meet. Are you planning to join any sports teams or social clubs this term?',
      partnerAudioText:
        'Great choice! Now, right behind us is the Student Union. That is where all student clubs and societies meet. Are you planning to join any sports teams or social clubs this term?',
      partnerQuestionHindi:
        'बहुत बढ़िया विकल्प! अब, हमारे ठीक पीछे छात्र संघ है। यहीं पर सभी छात्र क्लब और सोसायटियां मिलती हैं। क्या आप इस सत्र में किसी खेल टीम या सामाजिक क्लब में शामिल होने की योजना बना रहे हैं?',
      expectedFunction: 'Expressing future intentions for extracurricular activities and asking a follow-up question',
      contextGoal: 'Say what club you want to join (e.g. photography club, football, badminton) and ask Elena what clubs she recommends or is part of',
      targetVocabulary: ['join', 'club', 'society', 'sports', 'What about you', 'recommend', 'Elena'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'I plan to join the badminton club and the photography society. What clubs are you in, Elena?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I’d love to join a football team and the international students society! Which club do you recommend for making friends?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Yes, I’m definitely joining the cycling club and maybe a language exchange group. How often do societies meet each week?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'club_intention',
          patterns: ['join', 'plan to', 'want to', 'sports', 'badminton', 'football', 'photography', 'cycling', 'society', 'club'],
          required: true,
        },
        {
          name: 'follow_up_question',
          patterns: ['what about you', 'which club', 'what clubs', 'do you recommend', 'how often', 'elena'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_212_3_no_question',
          pattern: /^i will join football\.$/i,
          errorType: 'interaction',
          message: 'Make sure to ask Elena a follow-up question, such as: "What clubs do you recommend?"',
          correctionPattern: 'I want to join the football club. What about you, Elena?',
        },
      ],
      remediationPractice: {
        id: 'rem_212_3',
        type: 'fill_blank',
        prompt: 'Fill in: "What ______ (about) you, Elena?"',
        options: [
          { id: 'r1', text: 'about', isCorrect: true },
          { id: 'r2', text: 'for', isCorrect: false },
        ],
        correctAnswer: 'about',
        explanation: 'Follow-up formula: "What about you?".',
      },
    },
    {
      id: 'turn_212_4',
      turnIndex: 4,
      partnerPrompt:
        'I am in the hiking society and the student magazine! We have a welcome fair on Friday where you can sign up for all of them. Do you have any last questions about the campus before we head to the cafeteria for a free coffee?',
      partnerAudioText:
        'I am in the hiking society and the student magazine! We have a welcome fair on Friday where you can sign up for all of them. Do you have any last questions about the campus before we head to the cafeteria for a free coffee?',
      partnerQuestionHindi:
        'मैं हाइकिंग सोसायटी और छात्र पत्रिका में हूँ! हमारे पास शुक्रवार को एक स्वागत मेला है जहाँ आप उन सभी के लिए साइन अप कर सकते हैं। कैफेटेरिया में मुफ्त कॉफी के लिए जाने से पहले क्या आपके पास परिसर के बारे में कोई अंतिम प्रश्न है?',
      expectedFunction: 'Closing the orientation warmly, thanking the guide, and agreeing to get coffee',
      contextGoal: 'Thank Elena warmly for the great tour and say coffee in the cafeteria sounds wonderful',
      targetVocabulary: ['Thank you', 'Elena', 'great tour', 'cafeteria', 'coffee', 'sounds great', 'Friday'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Everything was super clear. Thank you so much for the tour, Elena! A coffee at the cafeteria sounds wonderful.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'No more questions for now! Thank you for showing me around the campus. Let’s head to the cafeteria!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thanks a lot, Elena, this tour was really helpful. I’ll definitely visit the welcome fair on Friday. Coffee sounds perfect!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'elena', 'helpful', 'tour', 'showing me around'],
          required: true,
        },
        {
          name: 'closing_action',
          patterns: ['coffee', 'cafeteria', 'sounds wonderful', 'sounds great', 'sounds perfect', 'let’s go', 'fair'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_212_4_short',
          pattern: /^(thanks|no)$/i,
          errorType: 'interaction',
          message: 'Close warmly: "Thank you for the tour, Elena! Coffee in the cafeteria sounds great."',
          correctionPattern: 'Thank you for the wonderful tour, Elena! Coffee sounds great.',
        },
      ],
      remediationPractice: {
        id: 'rem_212_4',
        type: 'multiple_choice',
        prompt: 'Which response closes the conversation warmly?',
        options: [
          { id: 'r1', text: 'Thank you for the tour, Elena! A coffee sounds wonderful.', isCorrect: true },
          { id: 'r2', text: 'Okay bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you for the tour, Elena! A coffee sounds wonderful.',
        explanation: 'Friendly, courteous, and accepts the invitation.',
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
