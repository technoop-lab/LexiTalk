import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_97: ConversationDefinition = {
  id: 'conv_a2_97',
  title: 'Clothes, Styles & Comparisons (Comparatives & Superlatives)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_97'],
  estimatedMinutes: 5,
  scenario:
    'You are shopping for winter outerwear in a clothing boutique in Covent Garden, London, assisted by stylist Oliver Hughes. Compare two winter coats in terms of warmth, weight, waterproofing, price, and fit using comparatives (-er than, more ... than) and superlatives (the warmest, the most durable). Try on sizes and choose the best option.',
  communicativeGoals: [
    'Compare clothing items using comparative adjectives (lighter than, warmer than, more waterproof than, cheaper than)',
    'Use superlative adjectives to describe peak attributes (the warmest coat, the most stylish cut, the best value)',
    'Inquire about clothing fit, materials (wool vs. recycled nylon), and size availability',
    'Ask for the stylist’s professional opinion on versatile urban styles',
  ],
  canDoStatements: [
    'Can compare clothes, styles, colors, and prices using regular and irregular comparative/superlative forms (CEFR A2)',
    'Can express preferences and justify choices based on material quality and fit',
    'Can ask a sales assistant for recommendations and alternative sizes in a retail store',
  ],
  characters: [
    {
      id: 'char_oliver_hughes',
      name: 'Oliver Hughes',
      role: 'Boutique Stylist & Consultant',
      avatar: '🧥',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'waterproof',
        ipa: '/ˈwɔːtərpruːf/',
        partOfSpeech: 'adjective',
        meaning: 'Impervious to water; not allowing water to pass through',
        exampleSentence: 'This navy parka is completely waterproof for rainy winters.',
        translations: { hi: 'जलरोधी / वॉटरप्रूफ' },
      },
      {
        word: 'durable',
        ipa: '/ˈdjʊərəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to withstand wear, pressure, or damage over a long time',
        exampleSentence: 'Wool coats are very durable if properly cared for.',
        translations: { hi: 'टिकाऊ / मजबूत' },
      },
      {
        word: 'fitting room',
        ipa: '/ˈfɪtɪŋ ruːm/',
        partOfSpeech: 'noun',
        meaning: 'A room in a shop where you can try on clothes to see if they fit',
        exampleSentence: 'Where is the fitting room so I can try this on?',
        translations: { hi: 'ट्रायल रूम / फिटिंग रूम' },
      },
      {
        word: 'comfortable',
        ipa: '/ˈkʌmftəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Providing physical ease and relaxation',
        exampleSentence: 'The green trench coat is more comfortable than the stiff jacket.',
        translations: { hi: 'आरामदायक' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'This one is warmer than...',
        functionCategory: 'Short Comparative Adjective',
        exampleSentence: 'This down parka is warmer than the wool coat.',
      },
      {
        phrase: 'It is more stylish and versatile than...',
        functionCategory: 'Long Comparative Adjective',
        exampleSentence: 'The navy coat is more stylish than the casual puffer jacket.',
      },
      {
        phrase: 'Which one is the most durable?',
        functionCategory: 'Superlative Inquiry',
        exampleSentence: 'Which jacket is the most durable in heavy rain?',
      },
      {
        phrase: 'Could I try this in a medium, please?',
        functionCategory: 'Requesting Size / Fit',
        exampleSentence: 'Could I try this coat in a medium, please?',
      },
    ],
    grammar: {
      title: 'Comparatives (-er than / more ... than) & Superlatives (the -est / the most ...)',
      conceptExplanation:
        'For 1-syllable adjectives, add -er / -est (warm → warmer than → the warmest; light → lighter than → the lightest). For adjectives with 2+ syllables, use "more ... than" and "the most ..." (comfortable → more comfortable than → the most comfortable). Irregular forms: good → better than → the best; bad → worse than → the worst.',
      patternFormula: 'Comparative: A is [adj-er / more adj] than B | Superlative: A is the [adj-est / most adj]',
      contrastExamples: [
        {
          incorrect: 'This jacket is more warmer than that one.',
          correct: 'This jacket is warmer than that one.',
          explanation: 'Do not double-mark comparatives (*more warmer is an error; use "warmer").',
        },
        {
          incorrect: 'This is the most cheapest shirt.',
          correct: 'This is the cheapest shirt.',
          explanation: '"Cheap" is a one-syllable word; use "cheapest", not *"most cheapest".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver Hughes',
        text: 'Hello! Are you looking for a casual rain jacket or a formal winter overcoat today?',
        translation: 'नमस्ते! क्या आप आज एक कैजुअल रेन जैकेट ढूंढ रहे हैं या एक औपचारिक विंटर ओवरकोट?',
      },
      {
        speaker: 'You',
        text: 'Hello! I need something warm and waterproof for London weather. Is this wool coat warmer than that nylon parka?',
        translation: 'नमस्ते! मुझे लंदन के मौसम के लिए कुछ गर्म और वाटरप्रूफ चाहिए। क्या यह ऊनी कोट उस नायलॉन पारका से अधिक गर्म है?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_97_1',
      type: 'fill_blank',
      prompt: 'Complete the comparison: "The blue parka is ___ (warm) than the grey windbreaker."',
      options: [
        { id: 'opt_1', text: 'warmer', isCorrect: true },
        { id: 'opt_2', text: 'more warmer', isCorrect: false },
        { id: 'opt_3', text: 'most warm', isCorrect: false },
      ],
      correctAnswer: 'warmer',
      explanation: 'One-syllable adjective "warm" becomes "warmer" in comparative form.',
    },
    {
      id: 'cp_a2_97_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly compares comfort using a multi-syllable adjective?',
      options: [
        { id: 'opt_1', text: 'The cashmere sweater is more comfortable than the heavy wool jumper.', isCorrect: true },
        { id: 'opt_2', text: 'The cashmere sweater is comfortabler than the heavy wool jumper.', isCorrect: false },
        { id: 'opt_3', text: 'The cashmere sweater is most comfortable than the jumper.', isCorrect: false },
      ],
      correctAnswer: 'The cashmere sweater is more comfortable than the heavy wool jumper.',
      explanation: '"Comfortable" has three syllables; use "more comfortable than".',
    },
    {
      id: 'cp_a2_97_3',
      type: 'multiple_choice',
      prompt: 'Which sentence uses the irregular superlative form correctly?',
      options: [
        { id: 'opt_1', text: 'This boots provide the best grip on wet pavements.', isCorrect: true },
        { id: 'opt_2', text: 'This boots provide the goodest grip on wet pavements.', isCorrect: false },
        { id: 'opt_3', text: 'This boots provide the most better grip on pavements.', isCorrect: false },
      ],
      correctAnswer: 'This boots provide the best grip on wet pavements.',
      explanation: 'Irregular superlative of "good" is "the best".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_97_1',
      scenarioContext: 'Compare two coats in terms of weight and practicality.',
      prompt: 'Build: "The green jacket is lighter and more practical than the heavy coat."',
      targetStructure: 'Subject + be + short-comp + and + long-comp + than + object',
      wordBank: ['The', 'green', 'jacket', 'is', 'lighter', 'and', 'more', 'practical', 'than', 'the', 'heavy', 'coat', 'lightest'],
      acceptableSolutions: [
        'The green jacket is lighter and more practical than the heavy coat',
        'The green jacket is lighter and more practical than the heavy coat.',
      ],
      explanation: 'Combines short comparative "lighter" with multi-syllable comparative "more practical".',
    },
    {
      id: 'sc_a2_97_2',
      scenarioContext: 'Ask if you can try on a specific size in the fitting room.',
      prompt: 'Build: "Can I try this medium jacket in the fitting room?"',
      targetStructure: 'Modal + subject + verb + demonstrative + size noun + in + prepositional phrase',
      wordBank: ['Can', 'I', 'try', 'this', 'medium', 'jacket', 'in', 'the', 'fitting', 'room', 'am', 'trying'],
      acceptableSolutions: [
        'Can I try this medium jacket in the fitting room',
        'Can I try this medium jacket in the fitting room?',
      ],
      explanation: 'Polite store interaction request for trying on garments.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_97_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello there! Welcome to Covent Garden Outwear. Are you looking for a coat for British winter weather? I have this classic charcoal wool overcoat and this insulated waterproof parka. How do you want to compare them?',
      partnerAudioText:
        'Hello there! Welcome to Covent Garden Outwear. Are you looking for a coat for British winter weather? I have this classic charcoal wool overcoat and this insulated waterproof parka. How do you want to compare them?',
      partnerQuestionHindi:
        'नमस्ते! कोवेंट गार्डन आउटवियर में आपका स्वागत है। क्या आप ब्रिटिश सर्दियों के मौसम के लिए एक कोट ढूंढ रहे हैं? मेरे पास यह क्लासिक चारकोल ऊनी ओवरकोट और यह इंसुलेटेड वाटरप्रूफ पारका है। आप उनकी तुलना कैसे करना चाहते हैं?',
      expectedFunction: 'Compare Warmth, Weight & Weatherproofing using Comparatives',
      contextGoal:
        'Compare the two coats: ask if the parka is warmer and lighter than the wool overcoat, and whether it is completely waterproof in heavy rain.',
      targetVocabulary: ['is the parka warmer than the wool coat', 'lighter and more waterproof', 'protect against heavy London rain', 'which one is better for commuting'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Hello! I need a versatile coat for rainy commutes. Is the insulated parka warmer and lighter than the charcoal wool overcoat? Also, is the parka more waterproof in heavy rain?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Hello Oliver! Is the parka warmer and more waterproof than the wool coat? Which one is lighter for daily walking?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Comparative Forms (warmer / lighter / more waterproof)',
          patterns: ['warmer', 'lighter', 'more waterproof', 'more practical', 'better', 'than'],
          required: true,
        },
        {
          name: 'Features & Conditions (rain / commute / wool / parka)',
          patterns: ['parka', 'wool', 'coat', 'rain', 'waterproof', 'commute', 'winter'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'more_warmer_double_error',
          pattern: /\bmore warmer\b|\bmore lighter\b/i,
          errorType: 'grammar',
          message: 'Say "warmer than" or "lighter than". Do not say "more warmer".',
          correctionPattern: 'warmer / lighter',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_97_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly compares two jackets?',
        options: [
          { id: 'opt_1', text: 'The insulated parka is lighter than the wool coat.', isCorrect: true },
          { id: 'opt_2', text: 'The insulated parka is more lighter than the wool coat.', isCorrect: false },
          { id: 'opt_3', text: 'The insulated parka is light than the wool coat.', isCorrect: false },
        ],
        correctAnswer: 'The insulated parka is lighter than the wool coat.',
        explanation: '1-syllable adjective: light → lighter than.',
      },
    },
    {
      id: 'turn_a2_97_2',
      turnIndex: 2,
      partnerPrompt:
        'The parka is definitely lighter and much more waterproof than the wool coat. However, the wool coat is more formal and elegant for office meetings. The parka is £140, while the wool coat is £195. Which style suits your daily routine better?',
      partnerAudioText:
        'The parka is definitely lighter and much more waterproof than the wool coat. However, the wool coat is more formal and elegant for office meetings. The parka is £140, while the wool coat is £195. Which style suits your daily routine better?',
      partnerQuestionHindi:
        'पारका निश्चित रूप से ऊनी कोट की तुलना में हल्का और बहुत अधिक वाटरप्रूफ है। हालाँकि, ऊनी कोट कार्यालय की बैठकों के लिए अधिक औपचारिक और सुरुचिपूर्ण है। पारका £140 है, जबकि ऊनी कोट £195 है। कौन सी शैली आपकी दैनिक दिनचर्या के लिए बेहतर है?',
      expectedFunction: 'Evaluate Price & Style Preferences & Request Size / Fitting Room',
      contextGoal:
        'Explain that the parka is better value and more practical for walking; ask to try a size Medium in the fitting room.',
      targetVocabulary: ['the parka is cheaper and more practical', 'better value for money', 'could I try a medium in the fitting room', 'where are the fitting rooms'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'The parka is cheaper and much more practical for my daily walking routine. I think it is the best value for money! Could I please try the navy parka in a size Medium in the fitting room?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'I prefer the parka because it is cheaper and more waterproof. Can I try on a size medium in the fitting room, please?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Preference & Comparison (cheaper / best value / practical)',
          patterns: ['cheaper', 'best value', 'practical', 'prefer', 'parka', 'better'],
          required: true,
        },
        {
          name: 'Size & Fitting Room Request',
          patterns: ['size medium', 'medium', 'try', 'fitting room', 'try on', 'fitting'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_97_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could I try this ___ in the fitting room?"',
        options: [
          { id: 'opt_1', text: 'on', isCorrect: true },
          { id: 'opt_2', text: 'at', isCorrect: false },
          { id: 'opt_3', text: 'with', isCorrect: false },
        ],
        correctAnswer: 'on',
        explanation: 'Phrasal verb: "try on [clothes]".',
      },
    },
    {
      id: 'turn_a2_97_3',
      turnIndex: 3,
      partnerPrompt:
        'The fitting rooms are right behind that mirrored partition on your left. Take this Medium navy parka and let me know how the sleeves and shoulders fit once you step out!',
      partnerAudioText:
        'The fitting rooms are right behind that mirrored partition on your left. Take this Medium navy parka and let me know how the sleeves and shoulders fit once you step out!',
      partnerQuestionHindi:
        'फिटिंग रूम आपकी बाईं ओर उस शीशे वाले विभाजन के ठीक पीछे हैं। यह मीडियम नेवी पारका लें और बाहर आने के बाद मुझे बताएं कि आस्तीन और कंधे कैसे फिट बैठते हैं!',
      expectedFunction: 'Report Garment Fit & Confirm Purchase (Superlative Praise)',
      contextGoal:
        'Step out of the fitting room; report that the shoulders fit perfectly and the fleece lining is the most comfortable you have tried; confirm you will buy it.',
      targetVocabulary: ['the shoulders fit perfectly', 'the most comfortable lining', 'the sleeves are the right length', 'I will take this one'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'I tried it on and it feels fantastic! The shoulders fit perfectly, the sleeves are just the right length, and this fleece lining is the most comfortable lining I have ever felt. I will definitely take this one!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'The medium fits great! It is the most comfortable coat I have tried today. I will buy it.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Fit Feedback (fit / shoulders / sleeves / length)',
          patterns: ['fits', 'shoulders', 'sleeves', 'length', 'size', 'perfect', 'great', 'comfortable'],
          required: true,
        },
        {
          name: 'Superlative or Purchase Decision',
          patterns: ['most comfortable', 'take this', 'buy this', 'take it', 'buy it', 'best'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_97_3',
        type: 'multiple_choice',
        prompt: 'Which sentence uses a superlative adjective correctly?',
        options: [
          { id: 'opt_1', text: 'This is the most comfortable jacket in the entire store.', isCorrect: true },
          { id: 'opt_2', text: 'This is the comfortablest jacket in the store.', isCorrect: false },
          { id: 'opt_3', text: 'This is the more comfortable jacket of all.', isCorrect: false },
        ],
        correctAnswer: 'This is the most comfortable jacket in the entire store.',
        explanation: '"The most comfortable" is the correct superlative for 3-syllable adjectives.',
      },
    },
    {
      id: 'turn_a2_97_4',
      turnIndex: 4,
      partnerPrompt:
        'It looks tailor-made on you! That navy shade is very sharp. I will ring this up at the front counter for £140. We also include a 2-year waterproof zipper warranty. Would you like to keep the hanger and garment bag?',
      partnerAudioText:
        'It looks tailor-made on you! That navy shade is very sharp. I will ring this up at the front counter for £140. We also include a 2-year waterproof zipper warranty. Would you like to keep the hanger and garment bag?',
      partnerQuestionHindi:
        'यह आप पर बिल्कुल सही लग रहा है! वह नेवी शेड बहुत आकर्षक है। मैं इसे सामने के काउंटर पर £140 में बिल कर दूँगा। हम 2 साल की वाटरप्रूफ ज़िपर वारंटी भी शामिल करते हैं। क्या आप हैंगर और गारमेंट बैग रखना चाहेंगे?',
      expectedFunction: 'Accept Garment Bag, Complete Payment & Express Appreciation',
      contextGoal:
        'Say yes to the garment bag, thank Oliver for his styling guidance, and express satisfaction with the shopping experience.',
      targetVocabulary: ['yes please, I would like the garment bag', 'thank you Oliver for your great advice', 'appreciate the styling help', 'have a great day'],
      suggestedResponses: [
        {
          label: 'Medium Scaffold',
          text: 'Yes please, I would love the garment bag and hanger! Thank you so much Oliver for comparing the coats and finding the best fit for me. Your advice was invaluable. Have a wonderful day!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffold',
          text: 'Yes please to the garment bag! Thank you Oliver for all your help finding the right jacket. Have a great day!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Bag / Hanger Acceptance',
          patterns: ['yes', 'garment bag', 'hanger', 'keep', 'would like', 'please'],
          required: true,
        },
        {
          name: 'Gratitude to Stylist',
          patterns: ['thank you', 'thanks', 'oliver', 'advice', 'help', 'have a wonderful day', 'great day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_97_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for the styling ___!"',
        options: [
          { id: 'opt_1', text: 'advice', isCorrect: true },
          { id: 'opt_2', text: 'advise', isCorrect: false },
          { id: 'opt_3', text: 'advises', isCorrect: false },
        ],
        correctAnswer: 'advice',
        explanation: '"Advice" is the uncountable noun form (while "advise" is a verb).',
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
