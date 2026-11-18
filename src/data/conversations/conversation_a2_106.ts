import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_106: ConversationDefinition = {
  id: 'conv_a2_106',
  title: 'Describing People: Appearance, Personality & Personal Qualities',
  cefr: 'A2',
  unitId: 'unit_a2_8',
  lessonLinks: ['lesson_a2_8_106'],
  estimatedMinutes: 5,
  scenario:
    'You are meeting conference coordinator Maya Lin in the busy reception hall of a Manchester design expo. You need to help Maya locate your guest keynote speaker, Dr. Daniel Reed. Describe his physical appearance, hair, clothing style, and personality traits so Maya can greet him at the VIP desk.',
  communicativeGoals: [
    'Describe physical appearance in detail (height, build, facial features, hair color and style)',
    'Describe personal character traits and work temperament using adjectives (outgoing, reliable, easygoing, thoughtful)',
    'Accurately distinguish between "look like" (+ noun) and "look" (+ adjective)',
    'Use natural adjective order when describing physical appearance and clothing',
  ],
  canDoStatements: [
    'Can describe someone’s appearance, height, build, and clothing in detail (CEFR A2)',
    'Can describe character traits and personality using common descriptive adjectives',
    'Can ask and answer questions about physical similarity and visual impression',
  ],
  characters: [
    {
      id: 'char_maya_lin',
      name: 'Maya Lin',
      role: 'Conference Event Coordinator',
      avatar: '📋',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'outgoing',
        ipa: '/ˈaʊtɡəʊɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Friendly and socially confident; enjoying being with people',
        exampleSentence: 'Dr. Reed is very outgoing and loves meeting students.',
        translations: { hi: 'मिलनसार / बहिर्मुखी' },
      },
      {
        word: 'reliable',
        ipa: '/rɪˈlaɪəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Consistently good in quality or performance; trustworthy',
        exampleSentence: 'He is a reliable speaker who always arrives on time.',
        translations: { hi: 'भरोसेमंद / विश्वसनीय' },
      },
      {
        word: 'beard',
        ipa: '/bɪəd/',
        partOfSpeech: 'noun',
        meaning: 'A growth of hair on the chin and lower cheeks of a person\'s face',
        exampleSentence: 'He is tall with a neat gray beard and glasses.',
        translations: { hi: 'दाढ़ी' },
      },
      {
        word: 'easygoing',
        ipa: '/ˌiːziˈɡəʊɪŋ/',
        partOfSpeech: 'adjective',
        meaning: 'Relaxed and tolerant in attitude or manner',
        exampleSentence: 'He has an easygoing personality and never gets stressed.',
        translations: { hi: 'शांत स्वभाव का / मिलनसार' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'What does he look like?',
        functionCategory: 'Inquiring About Physical Appearance',
        exampleSentence: 'What does Dr. Reed look like?',
      },
      {
        phrase: 'He is tall with short gray hair and glasses.',
        functionCategory: 'Describing Physical Features',
        exampleSentence: 'He is tall with short curly hair and a gray beard.',
      },
      {
        phrase: 'He looks very professional in a dark navy jacket.',
        functionCategory: 'Visual Impression (look + adjective)',
        exampleSentence: 'He looks very stylish in a dark navy blazer.',
      },
      {
        phrase: 'What is he like as a person?',
        functionCategory: 'Inquiring About Personality',
        exampleSentence: 'What is he like to work with?',
      },
    ],
    grammar: {
      title: 'Describing Appearance & Personality: Look Like vs. Look + Adjective',
      conceptExplanation:
        '1. Physical Appearance Question: "What does he look like?" -> "He is tall and slim with short brown hair."\n2. Personality Question: "What is he like?" -> "He is generous, outgoing, and very reliable."\n3. Look + Adjective (impression): "He looks tired / He looks elegant."\n4. Look like + Noun (similarity): "He looks like a college professor."\n5. Adjective order: Opinion -> Size -> Age -> Color (e.g. "a handsome tall middle-aged man").',
      patternFormula: 'Appearance: Subject + be + [adj] with [features] | Personality: Subject + be + [trait adjectives]',
      contrastExamples: [
        {
          incorrect: 'What does he like? (When asking about appearance)',
          correct: 'What does he look like?',
          explanation: '"What does he look like?" asks about appearance. "What is he like?" asks about personality.',
        },
        {
          incorrect: 'He looks like very friendly.',
          correct: 'He looks very friendly. / He looks like a friendly person.',
          explanation: '"Look like" requires a noun phrase. "Look" is followed directly by an adjective.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Maya Lin',
        text: 'Hi Alex! We are expecting Dr. Reed any minute. What does he look like so I can spot him?',
        translation: 'नमस्ते एलेक्स! हम किसी भी क्षण डॉ. रीड की उम्मीद कर रहे हैं। वे कैसे दिखते हैं ताकि मैं उन्हें पहचान सकूँ?',
      },
      {
        speaker: 'You',
        text: 'Hi Maya! He is quite tall with short gray hair, wire-framed glasses, and a neat beard. He is wearing a dark navy blazer.',
        translation: 'नमस्ते माया! वे काफी लंबे हैं, उनके छोटे भूरे बाल हैं, तार के फ्रेम वाला चश्मा और साफ-सुथरी दाढ़ी है। उन्होंने गहरा नेवी ब्लेज़र पहना है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_106_1',
      type: 'multiple_choice',
      prompt: 'Which question correctly asks about a person\'s physical appearance?',
      options: [
        { id: 'opt_1', text: 'What does he look like?', isCorrect: true },
        { id: 'opt_2', text: 'What is he like?', isCorrect: false },
        { id: 'opt_3', text: 'How does he like?', isCorrect: false },
      ],
      correctAnswer: 'What does he look like?',
      explanation: '"What does [person] look like?" asks for physical description.',
    },
    {
      id: 'cp_a2_106_2',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "Dr. Reed is tall ___ short curly hair and glasses."',
      options: [
        { id: 'opt_1', text: 'with', isCorrect: true },
        { id: 'opt_2', text: 'has', isCorrect: false },
        { id: 'opt_3', text: 'by', isCorrect: false },
      ],
      correctAnswer: 'with',
      explanation: 'Use the preposition "with" to attach physical features: "tall with short curly hair".',
    },
    {
      id: 'cp_a2_106_3',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly describes personality rather than appearance?',
      options: [
        { id: 'opt_1', text: 'He is very outgoing, reliable, and patient with questions.', isCorrect: true },
        { id: 'opt_2', text: 'He has short gray hair and a blue jacket.', isCorrect: false },
        { id: 'opt_3', text: 'He is about 180 centimeters tall.', isCorrect: false },
      ],
      correctAnswer: 'He is very outgoing, reliable, and patient with questions.',
      explanation: '"Outgoing", "reliable", and "patient" describe character traits.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_106_1',
      scenarioContext: 'Describe a keynote speaker\'s physical build and facial features.',
      prompt: 'Build: "He is tall with short gray hair and glasses."',
      targetStructure: 'Subject + be + adjective + with + noun phrase',
      wordBank: ['He', 'is', 'tall', 'with', 'short', 'gray', 'hair', 'and', 'glasses', 'looks', 'are'],
      acceptableSolutions: [
        'He is tall with short gray hair and glasses',
        'He is tall with short gray hair and glasses.',
      ],
      explanation: 'Accurate physical description structure.',
    },
    {
      id: 'sc_a2_106_2',
      scenarioContext: 'Describe someone\'s personality qualities.',
      prompt: 'Build: "She is extremely outgoing and very reliable."',
      targetStructure: 'Subject + be + adverb + adjective + and + adverb + adjective',
      wordBank: ['She', 'is', 'extremely', 'outgoing', 'and', 'very', 'reliable', 'are', 'looks'],
      acceptableSolutions: [
        'She is extremely outgoing and very reliable',
        'She is extremely outgoing and very reliable.',
      ],
      explanation: 'Pairs degree adverbs with personality traits.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_106_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! The registration area is getting crowded, and I need to welcome our guest speaker, Dr. Daniel Reed, at the VIP entrance. Could you tell me what he looks like so I can spot him in the hall?',
      partnerAudioText:
        'Hi Alex! The registration area is getting crowded, and I need to welcome our guest speaker, Dr. Daniel Reed, at the VIP entrance. Could you tell me what he looks like so I can spot him in the hall?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! पंजीकरण क्षेत्र में भीड़ हो रही है, और मुझे वीआईपी प्रवेश द्वार पर हमारे अतिथि वक्ता, डॉ. डैनियल रीड का स्वागत करना है। क्या आप मुझे बता सकते हैं कि वे कैसे दिखते हैं ताकि मैं उन्हें हॉल में पहचान सकूँ?',
      expectedFunction: 'Describe Physical Features (Height, Hair, Glasses, Beard)',
      contextGoal:
        'Describe Dr. Reed: tall, slim build, short gray hair, wire-framed glasses, and a neat beard; mention that he is wearing a dark navy blazer.',
      targetVocabulary: ['tall and slim', 'short gray hair', 'wire-framed glasses', 'neat beard', 'dark navy blazer'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Hi Maya! Dr. Reed is fairly tall and slim. He has short gray hair, wears round glasses, and has a neat beard. He is wearing a dark navy blazer and a light blue shirt today.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Height & Build (tall / slim / medium height)',
          patterns: ['tall', 'slim', 'build', 'height', 'glasses', 'hair', 'gray', 'grey', 'beard'],
          required: true,
        },
        {
          name: 'Clothing / Distinguishing Feature',
          patterns: ['navy', 'blazer', 'jacket', 'shirt', 'blue', 'suit', 'wearing'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'what_is_he_like_confusion',
          pattern: /\bhe is like tall\b|\bhe likes tall\b/i,
          errorType: 'grammar',
          message: 'Say "He is tall" or "He looks tall", not "He is like tall".',
          correctionPattern: 'He is tall with...',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_106_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes physical traits?',
        options: [
          { id: 'opt_1', text: 'He is tall with short gray hair and a beard.', isCorrect: true },
          { id: 'opt_2', text: 'He is having tall and hair gray.', isCorrect: false },
          { id: 'opt_3', text: 'He looks like tall.', isCorrect: false },
        ],
        correctAnswer: 'He is tall with short gray hair and a beard.',
        explanation: '"Subject + be + adjective with [features]" is standard.',
      },
    },
    {
      id: 'turn_a2_106_2',
      turnIndex: 2,
      partnerPrompt:
        'That is very clear! I see two gentlemen near the entrance matching that description. What is Dr. Reed like as a person? Is he formal and quiet, or more energetic and outgoing?',
      partnerAudioText:
        'That is very clear! I see two gentlemen near the entrance matching that description. What is Dr. Reed like as a person? Is he formal and quiet, or more energetic and outgoing?',
      partnerQuestionHindi:
        'वह बहुत स्पष्ट है! मुझे उस विवरण से मेल खाने वाले दो सज्जन प्रवेश द्वार के पास दिखाई दे रहे हैं। डॉ. रीड एक व्यक्ति के रूप में कैसे हैं? क्या वे औपचारिक और शांत हैं, या अधिक ऊर्जावान और मिलनसार हैं?',
      expectedFunction: 'Describe Personality & Work Temperament (outgoing, reliable, easygoing)',
      contextGoal:
        'Explain his personality: he is very outgoing, friendly, and easygoing; he will likely be smiling and greeting students warmly.',
      targetVocabulary: ['very outgoing and friendly', 'easygoing and approachable', 'reliable professional', 'smiling and chatting'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'He is definitely very outgoing and energetic! Dr. Reed is warm, approachable, and easygoing. You will probably see him smiling and chatting enthusiastically with people around him.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Personality Traits (outgoing / easygoing / friendly)',
          patterns: ['outgoing', 'friendly', 'energetic', 'easygoing', 'approachable', 'warm', 'smiling', 'chatting', 'reliable'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_106_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Dr. Reed is very ___ (friendly and confident in social groups)."',
        options: [
          { id: 'opt_1', text: 'outgoing', isCorrect: true },
          { id: 'opt_2', text: 'outgo', isCorrect: false },
          { id: 'opt_3', text: 'outgoingly', isCorrect: false },
        ],
        correctAnswer: 'outgoing',
        explanation: '"Outgoing" is the adjective for friendly, sociable people.',
      },
    },
    {
      id: 'turn_a2_106_3',
      turnIndex: 3,
      partnerPrompt:
        'Ah, I see him now! He is waving to the students near the badge counter and carrying a brown leather shoulder bag. Should I escort him directly to the speaker lounge on the 2nd floor, or would he prefer a cup of coffee at the lobby café first?',
      partnerAudioText:
        'Ah, I see him now! He is waving to the students near the badge counter and carrying a brown leather shoulder bag. Should I escort him directly to the speaker lounge on the 2nd floor, or would he prefer a cup of coffee at the lobby café first?',
      partnerQuestionHindi:
        'आह, मुझे अब वे दिखाई दे रहे हैं! वे बैज काउंटर के पास छात्रों की ओर हाथ हिला रहे हैं और उनके पास भूरे रंग का चमड़े का शोल्डर बैग है। क्या मुझे उन्हें सीधे दूसरी मंजिल पर स्पीकर लाउंज में ले जाना चाहिए, या वे पहले लॉबी कैफे में एक कप कॉफी पसंद करेंगे?',
      expectedFunction: 'Recommend Preference & Propose Next Step',
      contextGoal:
        'Suggest taking him to the speaker lounge because he needs to test his presentation slides, but mention that he will appreciate a green tea or water there.',
      targetVocabulary: ['take him to the speaker lounge first', 'test his slide deck', 'bring him green tea or water', 'review presentation'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I think you should escort him to the 2nd floor speaker lounge first so he can test his presentation slides on the podium laptop. Could you also offer him a hot green tea or water? That would be wonderful!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Lounge / Test Slides Recommendation',
          patterns: ['speaker lounge', 'lounge', 'slides', 'laptop', 'presentation', '2nd floor', 'test'],
          required: true,
        },
        {
          name: 'Drink / Hospitality Offer',
          patterns: ['tea', 'coffee', 'water', 'drink', 'offer'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_106_3',
        type: 'multiple_choice',
        prompt: 'Which suggestion uses polite modal advice?',
        options: [
          { id: 'opt_1', text: 'You should escort him to the lounge so he can check his slides.', isCorrect: true },
          { id: 'opt_2', text: 'You are must escort him immediately.', isCorrect: false },
          { id: 'opt_3', text: 'Lounge go now.', isCorrect: false },
        ],
        correctAnswer: 'You should escort him to the lounge so he can check his slides.',
        explanation: '"You should [verb]" expresses friendly advice.',
      },
    },
    {
      id: 'turn_a2_106_4',
      turnIndex: 4,
      partnerPrompt:
        'Perfect! I will guide him to Room 204, set him up with the technician, and bring him a cup of hot green tea. Thank you so much Alex for your detailed description!',
      partnerAudioText:
        'Perfect! I will guide him to Room 204, set him up with the technician, and bring him a cup of hot green tea. Thank you so much Alex for your detailed description!',
      partnerQuestionHindi:
        'बिल्कुल सही! मैं उन्हें कमरा 204 में ले जाऊँगी, तकनीशियन के साथ व्यवस्थित करूँगी, और उनके लिए एक कप गर्म ग्रीन टी लाऊँगी। आपके विस्तृत विवरण के लिए बहुत-बहुत धन्यवाद एलेक्स!',
      expectedFunction: 'Conclude Conversation Warmly & Offer Further Support',
      contextGoal:
        'Thank Maya for her coordination, wish her a great start to the keynote, and say you will join them upstairs in a few minutes.',
      targetVocabulary: ['thank you Maya for your help', 'looking forward to the keynote', 'see you upstairs in a few minutes', 'have a great session'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Thank you Maya for the great coordination! I will grab my conference badge and join you both in the lounge in five minutes. See you upstairs!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Appreciation & Wrap-up',
          patterns: ['thank you', 'thanks', 'maya', 'badge', 'join you', 'five minutes', 'see you upstairs', 'lounge'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_106_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I will join you in the lounge ___ five minutes."',
        options: [
          { id: 'opt_1', text: 'in', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'on', isCorrect: false },
        ],
        correctAnswer: 'in',
        explanation: 'Use "in" for future time spans: "in five minutes".',
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
