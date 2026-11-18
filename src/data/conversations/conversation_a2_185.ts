import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_185: ConversationDefinition = {
  id: 'conv_a2_185',
  title: 'Arts, Museums, Exhibitions & Cultural Heritage',
  cefr: 'A2',
  unitId: 'unit_a2_13',
  lessonLinks: ['lesson_a2_13_185'],
  estimatedMinutes: 5,
  scenario:
    'You are taking a guided tour of the City Art and Heritage Museum. You are talking with museum docent Clara about famous historical paintings, ancient sculptures, and where key exhibitions are displayed.',
  communicativeGoals: [
    'Use Present and Past Passive Voice (is located, was painted, was built, are exhibited) to describe cultural artifacts',
    'Ask about museum opening hours, ticket discounts, and photography rules',
    'Understand historical explanations about art masterpieces',
    'Express admiration and personal opinions about exhibitions',
  ],
  canDoStatements: [
    'Can describe historic monuments and museum artifacts using simple passive voice',
    'Can ask for practical museum visitor information in English',
    'Can express simple opinions about art exhibitions and cultural heritage',
  ],
  characters: [
    {
      id: 'char_clara_docent',
      name: 'Clara',
      role: 'Museum Docent & Art Historian',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'exhibition',
        ipa: '/ˌeksɪˈbɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A public display of works of art or items of interest, held in an art gallery or museum',
        exampleSentence: 'The modern sculpture exhibition is displayed on the second floor.',
        translations: { hi: 'प्रदर्शनी' },
      },
      {
        word: 'sculpture',
        ipa: '/ˈskʌlptʃə(r)/',
        partOfSpeech: 'noun',
        meaning: 'The art of making two- or three-dimensional representative or abstract forms',
        exampleSentence: 'This marble sculpture was carved in the eighteenth century.',
        translations: { hi: 'मूर्तिकला / मूर्ति' },
      },
      {
        word: 'masterpiece',
        ipa: '/ˈmɑːstəpiːs/',
        partOfSpeech: 'noun',
        meaning: 'A work of outstanding artistry, skill, or workmanship',
        exampleSentence: 'This landscape painting is considered a Renaissance masterpiece.',
        translations: { hi: 'उत्कृष्ट कृति / शाहकार' },
      },
      {
        word: 'heritage',
        ipa: '/ˈherɪtɪdʒ/',
        partOfSpeech: 'noun',
        meaning: 'Valued objects and qualities such as historic buildings that have been passed down from previous generations',
        exampleSentence: 'The museum protects the country’s cultural heritage.',
        translations: { hi: 'विरासत / धरोहर' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This historical gallery was founded in 1895.',
        functionCategory: 'Past passive historical fact',
        exampleSentence: 'The cathedral was built over five centuries ago.',
      },
      {
        phrase: 'These ancient sculptures are preserved in glass cases.',
        functionCategory: 'Present passive description',
        exampleSentence: 'Photographs are not permitted in this hall.',
      },
      {
        phrase: 'Where is the impressionist painting exhibition located?',
        functionCategory: 'Asking location of galleries',
        exampleSentence: 'When was this monument created?',
      },
      {
        phrase: 'Is photography allowed inside the temporary gallery?',
        functionCategory: 'Asking museum rules with passive',
        exampleSentence: 'Are audio guides provided with admission?',
      },
    ],
    grammar: {
      title: 'Present & Past Passive Voice: is / are + past participle, was / were + past participle',
      conceptExplanation:
        '1. Use Passive Voice when the action or object is more important than who performed it:\n   - Present Passive: [Subject] + is / are + [Past Participle]\n     Example: "Ancient coins are displayed in this room."\n   - Past Passive: [Subject] + was / were + [Past Participle]\n     Example: "The museum was built in 1910."\n2. Mention the artist or creator using "by":\n   Example: "This portrait was painted by a Dutch master."',
      patternFormula: '[Subject] + [is / are / was / were] + [Past Participle Verb] (+ by [Agent])',
      contrastExamples: [
        {
          incorrect: 'The gallery was build in 1890.',
          correct: 'The gallery was built in 1890.',
          explanation: 'Use the past participle form "built", not the base form "build".',
        },
        {
          incorrect: 'These paintings is displayed here.',
          correct: 'These paintings are displayed here.',
          explanation: 'Use plural "are" with plural subjects (paintings).',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara',
        text: 'Welcome to Hall 3! This famous oil painting was created in 1845 by a local artist.',
        translation: 'हॉल 3 में आपका स्वागत है! यह प्रसिद्ध तैलचित्र 1845 में एक स्थानीय कलाकार द्वारा बनाया गया था।',
      },
      {
        speaker: 'Learner',
        text: 'It is magnificent! Where are the classical marble sculptures exhibited?',
        translation: 'यह शानदार है! शास्त्रीय संगमरमर की मूर्तियाँ कहाँ प्रदर्शित हैं?',
      },
      {
        speaker: 'Clara',
        text: 'They are located in the East Wing, which was renovated last year.',
        translation: 'वे ईस्ट विंग में स्थित हैं, जिसका पिछले वर्ष नवीनीकरण किया गया था।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_185_1',
      type: 'fill_blank',
      prompt: 'Complete the passive sentence: "The grand museum ______ (found) in 1920 by a group of artists."',
      options: [
        { id: 'opt_1', text: 'was founded', isCorrect: true },
        { id: 'opt_2', text: 'is found', isCorrect: false },
        { id: 'opt_3', text: 'founded', isCorrect: false },
      ],
      correctAnswer: 'was founded',
      explanation: 'Past passive singular takes "was founded".',
    },
    {
      id: 'cp_185_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses the present passive voice?',
      options: [
        { id: 'opt_1', text: 'Precious ancient artifacts are protected in temperature-controlled rooms.', isCorrect: true },
        { id: 'opt_2', text: 'Precious ancient artifacts is protect in temperature-controlled rooms.', isCorrect: false },
        { id: 'opt_3', text: 'Precious ancient artifacts protected by rooms.', isCorrect: false },
      ],
      correctAnswer: 'Precious ancient artifacts are protected in temperature-controlled rooms.',
      explanation: 'Plural subject (artifacts) + are + past participle (protected).',
    },
    {
      id: 'cp_185_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [was painted / this masterpiece / by a Spanish artist / in 1780]',
      correctAnswer: 'this masterpiece was painted by a Spanish artist in 1780',
      explanation: 'Subject + was + past participle + by agent + time.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_185_1',
      prompt: 'Construct a past passive sentence stating that this marble sculpture was carved in Italy.',
      scenarioContext: 'Discussing a sculpture with Clara.',
      targetStructure: 'This marble sculpture was carved in Italy.',
      wordBank: ['This', 'marble sculpture', 'was carved', 'in Italy', 'two hundred years ago'],
      acceptableSolutions: [
        'This marble sculpture was carved in Italy.',
        'This marble sculpture was carved in Italy two hundred years ago.',
      ],
      explanation: 'Use past passive "was carved" followed by place prepositional phrase.',
    },
    {
      id: 'sc_185_2',
      prompt: 'Construct a sentence asking if photographs are allowed inside the main exhibition hall.',
      scenarioContext: 'Inquiring about museum rules.',
      targetStructure: 'Is photography allowed inside the main exhibition hall?',
      wordBank: ['Is', 'photography', 'allowed', 'inside', 'the main exhibition hall?'],
      acceptableSolutions: [
        'Is photography allowed inside the main exhibition hall?',
        'Are photos allowed inside the main exhibition hall?',
      ],
      explanation: 'Present passive question: [Is / Are] + [Subject] + [allowed]...?',
    },
  ],
  turns: [
    {
      id: 'turn_185_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon and welcome to the City Heritage Museum! My name is Clara. Which historical period or art exhibition are you interested in exploring today?',
      partnerAudioText:
        'Good afternoon and welcome to the City Heritage Museum! My name is Clara. Which historical period or art exhibition are you interested in exploring today?',
      partnerQuestionHindi:
        'शुभ दोपहर और सिटी हेरिटेज संग्रहालय में आपका स्वागत है! मेरा नाम क्लारा है। आज आप किस ऐतिहासिक काल या कला प्रदर्शनी को देखने में रुचि रखते हैं?',
      expectedFunction: 'Greeting the docent and inquiring about a specific exhibition using passive phrases',
      contextGoal: 'Greet Clara and state interest in paintings or sculptures (e.g. where the exhibition is located)',
      targetVocabulary: ['exhibition', 'paintings', 'sculptures', 'located', 'interested'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Good afternoon Clara! We are interested in the oil paintings exhibition. Where is it located?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello! I would love to see the ancient sculptures that are displayed here.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Clara! We are fascinated by Renaissance art. Could you show us where the master paintings are exhibited?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting',
          patterns: ['good afternoon', 'hello', 'hi', 'clara', 'interested'],
          required: true,
        },
        {
          name: 'art_interest',
          patterns: ['paintings', 'sculptures', 'exhibition', 'art', 'heritage', 'located', 'displayed', 'exhibited'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_185_1_locate',
          pattern: /where is it locate\b/i,
          errorType: 'grammar',
          message: 'Use the past participle: "Where is it located?".',
          correctionPattern: 'Where is it located?',
        },
      ],
      remediationPractice: {
        id: 'rem_185_1',
        type: 'fill_blank',
        prompt: 'Fill in: "Where is the new gallery ______ (locate)?"',
        options: [
          { id: 'r1', text: 'located', isCorrect: true },
          { id: 'r2', text: 'locating', isCorrect: false },
        ],
        correctAnswer: 'located',
        explanation: 'Use the past participle "located".',
      },
    },
    {
      id: 'turn_185_2',
      turnIndex: 2,
      partnerPrompt:
        'The main painting gallery is in the West Wing. Right here in front of us is our centerpiece: a royal portrait that was painted in 1820. What do you notice about how the light and colors were used by the artist?',
      partnerAudioText:
        'The main painting gallery is in the West Wing. Right here in front of us is our centerpiece: a royal portrait that was painted in 1820. What do you notice about how the light and colors were used by the artist?',
      partnerQuestionHindi:
        'मुख्य पेंटिंग गैलरी वेस्ट विंग में है। हमारे सामने हमारा मुख्य आकर्षण है: एक शाही चित्र जो 1820 में बनाया गया था। आप क्या देखते हैं कि कलाकार द्वारा प्रकाश और रंगों का उपयोग कैसे किया गया था?',
      expectedFunction: 'Describing the artwork using passive and descriptive adjectives',
      contextGoal: 'Describe how the colors or lighting were painted or blended in the portrait',
      targetVocabulary: ['painted', 'colors', 'light', 'beautiful', 'masterpiece'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'The warm colors were painted with great detail, and the natural light is wonderful.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'It is amazing how the dark background was blended to highlight the golden clothes.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'The textures were painted so realistically! It is truly a remarkable masterpiece.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'observation',
          patterns: ['painted', 'colors', 'light', 'detail', 'background', 'used', 'shades', 'textures'],
          required: true,
        },
        {
          name: 'appreciation',
          patterns: ['beautiful', 'wonderful', 'amazing', 'masterpiece', 'great', 'realistic', 'remarkable'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_185_2_passive_verb',
          pattern: /was paint\b/i,
          errorType: 'grammar',
          message: 'The past participle of "paint" is "painted".',
          correctionPattern: 'was painted',
        },
      ],
      remediationPractice: {
        id: 'rem_185_2',
        type: 'fill_blank',
        prompt: 'Fill in: "The portrait was ______ (paint) by a master."',
        options: [
          { id: 'r1', text: 'painted', isCorrect: true },
          { id: 'r2', text: 'painting', isCorrect: false },
        ],
        correctAnswer: 'painted',
        explanation: 'Past passive takes was + painted.',
      },
    },
    {
      id: 'turn_185_3',
      turnIndex: 3,
      partnerPrompt:
        'You have a great eye for detail! Next, we have the ancient sculpture hall where artifacts from Roman times are exhibited. Before we enter, is there anything you would like to know about photography or museum guidelines?',
      partnerAudioText:
        'You have a great eye for detail! Next, we have the ancient sculpture hall where artifacts from Roman times are exhibited. Before we enter, is there anything you would like to know about photography or museum guidelines?',
      partnerQuestionHindi:
        'बारीकियों पर आपकी नज़र बहुत अच्छी है! इसके बाद, हमारे पास प्राचीन मूर्तिकला हॉल है जहाँ रोमन काल की कलाकृतियाँ प्रदर्शित हैं। प्रवेश करने से पहले, क्या आप फ़ोटोग्राफ़ी या संग्रहालय के नियमों के बारे में कुछ जानना चाहते हैं?',
      expectedFunction: 'Asking about photography and visitor rules using passive question forms',
      contextGoal: 'Ask if flash photography is allowed or if audio guides are provided',
      targetVocabulary: ['photography', 'allowed', 'flash', 'permitted', 'audio guide'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Is photography allowed inside the sculpture hall, or is flash prohibited?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Are photos permitted here? Also, are audio guides provided in different languages?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Is non-flash photography permitted near the sculptures? And what time are the halls closed?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'rule_question',
          patterns: ['photography', 'photos', 'pictures', 'flash', 'audio guide', 'allowed', 'permitted'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_185_3_allow_form',
          pattern: /is photos allow\b/i,
          errorType: 'grammar',
          message: 'Photos is plural: "Are photos allowed...?" or singular: "Is photography allowed...?".',
          correctionPattern: 'Is photography allowed...?',
        },
      ],
      remediationPractice: {
        id: 'rem_185_3',
        type: 'multiple_choice',
        prompt: 'Choose the correct passive question:',
        options: [
          { id: 'r1', text: 'Is flash photography allowed in this room?', isCorrect: true },
          { id: 'r2', text: 'Does flash photography allowed in this room?', isCorrect: false },
        ],
        correctAnswer: 'Is flash photography allowed in this room?',
        explanation: 'Passive question: [Be verb] + [Subject] + [Past Participle].',
      },
    },
    {
      id: 'turn_185_4',
      turnIndex: 4,
      partnerPrompt:
        'Non-flash photography is completely fine! Flash is prohibited to protect sensitive pigments. We also offer free audio guides in seven languages at the counter. Enjoy the rest of your tour!',
      partnerAudioText:
        'Non-flash photography is completely fine! Flash is prohibited to protect sensitive pigments. We also offer free audio guides in seven languages at the counter. Enjoy the rest of your tour!',
      partnerQuestionHindi:
        'बिना फ्लैश के फोटोग्राफी की पूरी अनुमति है! संवेदनशील रंगों की सुरक्षा के लिए फ्लैश प्रतिबंधित है। हम काउंटर पर सात भाषाओं में मुफ्त ऑडियो गाइड भी प्रदान करते हैं। अपने दौरे का आनंद लें!',
      expectedFunction: 'Expressing appreciation and concluding the guided interaction',
      contextGoal: 'Thank Clara for the insightful explanations and wish her a pleasant day',
      targetVocabulary: ['thank you', 'helpful', 'wonderful', 'enjoy', 'tour'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much Clara! Your explanations were very helpful and interesting.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Thanks for the helpful information! We will get an audio guide now. Have a nice day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you for your guidance Clara! We are really going to enjoy exploring these sculptures. Goodbye!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'gratitude',
          patterns: ['thank you', 'thanks', 'appreciate', 'grateful'],
          required: true,
        },
        {
          name: 'closing_friendly',
          patterns: ['helpful', 'interesting', 'enjoy', 'nice day', 'goodbye', 'tour'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_185_4_closing',
          pattern: /^(ok|bye)$/i,
          errorType: 'interaction',
          message: 'Politely thank your museum guide for the tour.',
          correctionPattern: 'Thank you Clara for the helpful tour!',
        },
      ],
      remediationPractice: {
        id: 'rem_185_4',
        type: 'fill_blank',
        prompt: 'Fill in: "Thank you for the ______ (help) information."',
        options: [
          { id: 'r1', text: 'helpful', isCorrect: true },
          { id: 'r2', text: 'helpless', isCorrect: false },
        ],
        correctAnswer: 'helpful',
        explanation: 'We use "helpful" to describe useful advice.',
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
