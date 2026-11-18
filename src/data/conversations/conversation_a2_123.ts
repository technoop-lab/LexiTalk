import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_123: ConversationDefinition = {
  id: 'conv_a2_123',
  title: 'Present Perfect vs. Past Simple (Unspecified Experience vs. Specific Past Narrative)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_123'],
  estimatedMinutes: 5,
  scenario:
    'You are in an outdoor mountain gear shop in Fort William speaking with mountain guide Ian Campbell before planning an ascent of Ben Nevis. Learn to transition naturally between introducing general hiking experience in the Present Perfect ("I have hiked several high peaks") and narrating specific past hikes using the Past Simple with finished time markers ("Last summer, I climbed Scafell Pike, and the weather changed suddenly").',
  communicativeGoals: [
    'Introduce general life experiences using the Present Perfect without specific times ("I have climbed several mountains")',
    'Switch fluently to the Past Simple when providing specific dates, times, and narrative details ("In June 2023, I climbed...")',
    'Identify and apply finished past time markers correctly (yesterday, last year, two months ago, in 2022)',
    'Ask specific follow-up questions about when and where a past event occurred',
  ],
  canDoStatements: [
    'Can distinguish between general lifetime experience and finished past events (CEFR A2)',
    'Can open a conversation with Present Perfect and develop the story using Past Simple',
    'Can avoid using Present Perfect with finished time expressions like "yesterday" or "in 2021"',
  ],
  characters: [
    {
      id: 'char_ian_campbell',
      name: 'Ian Campbell',
      role: 'Highland Mountain Guide',
      avatar: '🏔️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'summit',
        ipa: '/ˈsʌmɪt/',
        partOfSpeech: 'noun',
        meaning: 'The highest point of a hill or mountain',
        exampleSentence: 'We reached the summit of Scafell Pike just before sunset.',
        translations: { hi: 'शिखर / पर्वत की चोटी' },
      },
      {
        word: 'climb',
        ipa: '/klaɪm/',
        partOfSpeech: 'verb',
        meaning: 'To go up towards the top of a mountain or slope (past: climbed)',
        exampleSentence: 'I have climbed several peaks, but last summer I climbed Snowdon.',
        translations: { hi: 'चढ़ना' },
      },
      {
        word: 'unpredictable',
        ipa: '/ˌʌnprɪˈdɪktəbəl/',
        partOfSpeech: 'adjective',
        meaning: 'Not able to be predicted or foretold; changing quickly',
        exampleSentence: 'Highland mountain weather is extremely unpredictable.',
        translations: { hi: 'अप्रत्याशित / जिसका पहले से अनुमान न हो' },
      },
      {
        word: 'trail',
        ipa: '/treɪl/',
        partOfSpeech: 'noun',
        meaning: 'A marked path through a rugged forest or mountainous area',
        exampleSentence: 'We followed the rocky trail for five hours.',
        translations: { hi: 'पहाड़ी पगडंडी / रास्ता' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have hiked in the Lake District several times.',
        functionCategory: 'Stating Unspecified Lifetime Experience (Present Perfect)',
        exampleSentence: 'I have visited Scotland three times.',
      },
      {
        phrase: 'Last June, I climbed Scafell Pike with two friends.',
        functionCategory: 'Narrating Specific Past Event (Past Simple + time marker)',
        exampleSentence: 'Two months ago, I bought new hiking boots.',
      },
      {
        phrase: 'When did you climb it, and how was the weather?',
        functionCategory: 'Asking Past Simple Question (When did you...?)',
        exampleSentence: 'When did you reach the top?',
      },
      {
        phrase: 'What happened when you reached the summit ridge?',
        functionCategory: 'Asking for Narrative Continuation',
        exampleSentence: 'What did you do next?',
      },
    ],
    grammar: {
      title: 'Present Perfect vs. Past Simple: The Experience-to-Detail Bridge',
      conceptExplanation:
        '1. Golden Rule: Use Present Perfect ("have + V3") for general experience when the exact time is NOT mentioned (e.g. "I have climbed mountains").\n2. Shift to Past Simple ("V2"): As soon as you give a specific time ("last year", "in 2023", "two weeks ago", "when I was in Wales") or ask "When...?", you MUST switch to Past Simple.\n3. Common Error: Never say "I have climbed Snowdon last year" — because "last year" is a finished time, use "I climbed Snowdon last year".',
      patternFormula: 'Experience: Subject + have/has + [Past Participle] → Detail: In [Year] / Last [Time], Subject + [Past Simple V2]',
      contrastExamples: [
        {
          incorrect: 'I have climbed Ben Nevis last summer in August.',
          correct: 'I climbed Ben Nevis last summer in August. / I have climbed Ben Nevis before.',
          explanation: 'Finished past time expressions ("last summer in August") require Past Simple.',
        },
        {
          incorrect: 'When have you bought your waterproof jacket?',
          correct: 'When did you buy your waterproof jacket?',
          explanation: 'Questions starting with "When" ask for a specific past time point, requiring Past Simple ("When did you buy...").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Ian Campbell',
        text: 'Hello there! Welcome to Fort William. Ben Nevis is a serious mountain. Have you ever done any high-altitude hillwalking in the UK before?',
        translation: 'नमस्ते! फोर्ट विलियम में आपका स्वागत है। बेन नेविस एक गंभीर पर्वत है। क्या आपने पहले कभी यूके में ऊँचाई पर पहाड़ी चढ़ाई की है?',
      },
      {
        speaker: 'You',
        text: 'Hello Ian! Yes, I have hiked several major peaks in the UK. For example, last August I climbed Snowdon in Wales. The weather started clear, but near the top thick fog rolled in suddenly.',
        translation: 'नमस्ते इयान! हाँ, मैंने यूके में कई प्रमुख चोटियों पर चढ़ाई की है। उदाहरण के लिए, पिछले अगस्त में मैंने वेल्स में स्नोडन पर चढ़ाई की थी। मौसम साफ शुरू हुआ, लेकिन शीर्ष के पास अचानक घना कोहरा छा गया।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_123_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have visited Scotland three times, but last May I ___ (climb) my first mountain."',
      options: [
        { id: 'opt_1', text: 'climbed', isCorrect: true },
        { id: 'opt_2', text: 'have climbed', isCorrect: false },
        { id: 'opt_3', text: 'was climbing', isCorrect: false },
      ],
      correctAnswer: 'climbed',
      explanation: 'Use Past Simple "climbed" because "last May" specifies a finished past time.',
    },
    {
      id: 'cp_a2_123_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly avoids mixing Present Perfect with a finished time marker?',
      options: [
        { id: 'opt_1', text: 'I bought this waterproof jacket in London two weeks ago.', isCorrect: true },
        { id: 'opt_2', text: 'I have bought this waterproof jacket two weeks ago.', isCorrect: false },
        { id: 'opt_3', text: 'I have bought it yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I bought this waterproof jacket in London two weeks ago.',
      explanation: '"Two weeks ago" is a finished past time marker requiring Past Simple.',
    },
    {
      id: 'cp_a2_123_3',
      type: 'multiple_choice',
      prompt: 'How should you ask someone about the specific date they visited a place?',
      options: [
        { id: 'opt_1', text: 'When did you visit the Lake District?', isCorrect: true },
        { id: 'opt_2', text: 'When have you visited the Lake District?', isCorrect: false },
        { id: 'opt_3', text: 'When you have visited?', isCorrect: false },
      ],
      correctAnswer: 'When did you visit the Lake District?',
      explanation: '"When" questions require Past Simple ("When did you visit?").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_123_1',
      scenarioContext: 'State general experience followed by specific details.',
      prompt: 'Build: "I have hiked often but last year I climbed Snowdon."',
      targetStructure: 'Subject + have + participle + adverb + but + time marker + subject + past verb + object',
      wordBank: ['I', 'have', 'hiked', 'often', 'but', 'last', 'year', 'I', 'climbed', 'Snowdon', 'climb', 'has'],
      acceptableSolutions: [
        'I have hiked often but last year I climbed Snowdon',
        'I have hiked often, but last year I climbed Snowdon.',
        'I have hiked often but last year I climbed Snowdon.',
      ],
      explanation: 'Exemplifies the transition from Present Perfect experience to Past Simple narrative.',
    },
    {
      id: 'sc_a2_123_2',
      scenarioContext: 'Ask about the time of a past trip.',
      prompt: 'Build: "When did you buy your hiking boots?"',
      targetStructure: 'When + did + subject + base verb + object',
      wordBank: ['When', 'did', 'you', 'buy', 'your', 'hiking', 'boots', 'have', 'bought', 'were'],
      acceptableSolutions: [
        'When did you buy your hiking boots',
        'When did you buy your hiking boots?',
        'When did you buy your hiking boots.',
      ],
      explanation: 'Past Simple question using "When did you buy".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_123_1',
      turnIndex: 1,
      partnerPrompt:
        'Aye, hello there! Welcome to Fort William Mountain Gear. Ben Nevis stands over 1,300 meters tall and conditions change rapidly. Have you ever done any mountain hiking in the UK before?',
      partnerAudioText:
        'Aye, hello there! Welcome to Fort William Mountain Gear. Ben Nevis stands over 1,300 meters tall and conditions change rapidly. Have you ever done any mountain hiking in the UK before?',
      partnerQuestionHindi:
        'हाँ, नमस्ते! फोर्ट विलियम माउंटेन गियर में आपका स्वागत है। बेन नेविस 1,300 मीटर से अधिक ऊँचा है और वहाँ की परिस्थितियाँ तेजी से बदलती हैं। क्या आपने पहले कभी यूके में पहाड़ी चढ़ाई की है?',
      expectedFunction: 'Bridge General Experience (Present Perfect) to Specific Hike (Past Simple)',
      contextGoal:
        'State that you have hiked several high peaks in the UK; mention that last summer you climbed Scafell Pike in the Lake District, where you experienced sudden heavy rain.',
      targetVocabulary: ['have hiked several major peaks in the UK', 'last summer I climbed Scafell Pike', 'weather was sunny at first', 'suddenly it started raining heavily'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Hi Ian! Yes, I have hiked several mountains in the UK. For example, last summer I climbed Scafell Pike in the Lake District. The morning was sunny, but in the afternoon it started raining heavily near the summit.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'General Experience (have hiked / have climbed / mountains / peaks / UK)',
          patterns: ['have hiked', 'have climbed', 'mountains', 'peaks', 'uk', 'hills', 'scotland', 'lake district'],
          required: true,
        },
        {
          name: 'Specific Hike & Time (last summer / last year / climbed / Scafell Pike / Snowdon / rain)',
          patterns: ['last summer', 'last year', 'climbed', 'scafell pike', 'snowdon', 'rain', 'rained', 'afternoon', 'august'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'have_climbed_last_summer',
          pattern: /\bi have climbed scafell pike last summer\b|\bi have climbed snowdon last year\b/i,
          errorType: 'grammar',
          message: 'Do not use Present Perfect with "last summer": say "Last summer, I climbed Scafell Pike".',
          correctionPattern: 'Last summer, I climbed Scafell Pike',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_123_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly combines experience and specific time?',
        options: [
          { id: 'opt_1', text: 'I have done lots of hiking, and last summer I climbed Scafell Pike.', isCorrect: true },
          { id: 'opt_2', text: 'I have done lots of hiking, and last summer I have climbed Scafell Pike.', isCorrect: false },
          { id: 'opt_3', text: 'I did hiking, and last summer I am climb.', isCorrect: false },
        ],
        correctAnswer: 'I have done lots of hiking, and last summer I climbed Scafell Pike.',
        explanation: 'Present Perfect for general experience + Past Simple for "last summer".',
      },
    },
    {
      id: 'turn_a2_123_2',
      turnIndex: 2,
      partnerPrompt:
        'Scafell Pike is a great test! What happened when the weather turned wet? Did you have proper waterproofs, and what time did you get back down safely?',
      partnerAudioText:
        'Scafell Pike is a great test! What happened when the weather turned wet? Did you have proper waterproofs, and what time did you get back down safely?',
      partnerQuestionHindi:
        'स्कैफेल पाइक एक बेहतरीन परीक्षा है! जब मौसम गीला हुआ तो क्या हुआ? क्या आपके पास उचित वाटरप्रूफ कपड़े थे, और आप किस समय सुरक्षित रूप से नीचे वापस आए?',
      expectedFunction: 'Narrate Past Specific Events (Past Simple: put on waterproofs / reached base at 5 PM)',
      contextGoal:
        'Explain in Past Simple: you put on your waterproof jacket, followed the GPS trail carefully, and reached the car park at 5:00 PM without any injuries.',
      targetVocabulary: ['put on our waterproof layers immediately', 'followed the stone path carefully', 'reached the valley car park around 5:00 PM', 'felt exhausted but happy'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'When it started raining, we put on our waterproof jackets immediately and followed the marked trail down. We reached the valley car park around 5:00 PM. We were soaked, but we got down safely!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Actions (put on / wore / waterproof / jackets / followed trail)',
          patterns: ['put on', 'wore', 'waterproof', 'jacket', 'followed', 'trail', 'path', 'rain'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_123_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "We ___ (reach) the car park at 5:00 PM yesterday."',
        options: [
          { id: 'opt_1', text: 'reached', isCorrect: true },
          { id: 'opt_2', text: 'have reached', isCorrect: false },
          { id: 'opt_3', text: 'was reached', isCorrect: false },
        ],
        correctAnswer: 'reached',
        explanation: '"Yesterday" requires the Past Simple form "reached".',
      },
    },
    {
      id: 'turn_a2_123_3',
      turnIndex: 3,
      partnerPrompt:
        'Good decision-making in bad weather is what keeps hikers safe. Now looking at your gear for Ben Nevis: have you bought a mountain map and compass yet, or did you bring them from home?',
      partnerAudioText:
        'Good decision-making in bad weather is what keeps hikers safe. Now looking at your gear for Ben Nevis: have you bought a mountain map and compass yet, or did you bring them from home?',
      partnerQuestionHindi:
        'खराब मौसम में अच्छे निर्णय लेना ही पदयात्रियों को सुरक्षित रखता है। अब बेन नेविस के लिए आपके गियर को देखते हुए: क्या आपने अभी तक एक पर्वतीय नक्शा और कम्पास खरीदा है, या आप उन्हें घर से लाए थे?',
      expectedFunction: 'State Gear Status & Past Purchase Details (have packed compass / bought map yesterday)',
      contextGoal:
        'Explain that you packed your compass from home, and you bought an Ordnance Survey map of Ben Nevis yesterday in town; ask Ian for advice on the best route for tomorrow.',
      targetVocabulary: ['brought my compass from home', 'bought the Ben Nevis OS map yesterday', 'which trail do you recommend for tomorrow?', 'mountain tourist path'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'I brought my compass from home in my backpack, and I bought the official Ben Nevis OS map yesterday at the tourist center. Which trail would you recommend for an early morning climb tomorrow?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gear History (brought / packed / compass / bought / map / yesterday)',
          patterns: ['brought', 'packed', 'compass', 'bought', 'map', 'yesterday', 'have packed', 'home'],
          required: true,
        },
        {
          name: 'Route Inquiry (which trail / route / recommend / tomorrow / path)',
          patterns: ['which trail', 'route', 'recommend', 'path', 'tomorrow', 'mountain path', 'early morning'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_123_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly states when an item was purchased?',
        options: [
          { id: 'opt_1', text: 'I bought this map yesterday at the station.', isCorrect: true },
          { id: 'opt_2', text: 'I have bought this map yesterday at the station.', isCorrect: false },
          { id: 'opt_3', text: 'I am buying this map yesterday.', isCorrect: false },
        ],
        correctAnswer: 'I bought this map yesterday at the station.',
        explanation: 'Use Past Simple "bought" with "yesterday".',
      },
    },
    {
      id: 'turn_a2_123_4',
      turnIndex: 4,
      partnerPrompt:
        'Take the Mountain Path from the Glen Nevis Visitor Centre starting by 7:30 AM! If the cloud descends on the summit plateau, turn back immediately. Here are your emergency thermal blankets. Stay safe out there!',
      partnerAudioText:
        'Take the Mountain Path from the Glen Nevis Visitor Centre starting by 7:30 AM! If the cloud descends on the summit plateau, turn back immediately. Here are your emergency thermal blankets. Stay safe out there!',
      partnerQuestionHindi:
        'ग्लेन नेविस विज़िटर सेंटर से सुबह 7:30 बजे तक माउंटेन पाथ लें! यदि शिखर के पठार पर बादल छा जाते हैं, तो तुरंत वापस लौट आएं। यहाँ आपके आपातकालीन थर्मल कंबल हैं। बाहर सुरक्षित रहें!',
      expectedFunction: 'Express Gratitude & Confirm Mountain Safety Plan',
      contextGoal:
        'Thank Ian for the practical advice and safety equipment; confirm that you will start at 7:30 AM from the visitor center and watch the weather carefully.',
      targetVocabulary: ['thank you Ian for the invaluable advice', 'will start at 7:30 AM from Glen Nevis Centre', 'will turn back if visibility drops', 'have a great evening'],
      suggestedResponses: [
        {
          label: 'Moderate Scaffold',
          text: 'Thank you so much Ian for the invaluable safety advice! I will set off from the Glen Nevis Visitor Centre at 7:30 AM tomorrow and turn back if the weather turns bad. Have a wonderful evening!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Confirmation & Gratitude',
          patterns: ['thank you', 'thanks', 'ian', '7:30', 'glen nevis', 'visitor centre', 'advice', 'safety', 'wonderful evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_123_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for the ___ (value / invaluable) safety advice!"',
        options: [
          { id: 'opt_1', text: 'invaluable', isCorrect: true },
          { id: 'opt_2', text: 'value', isCorrect: false },
          { id: 'opt_3', text: 'invaluing', isCorrect: false },
        ],
        correctAnswer: 'invaluable',
        explanation: '"Invaluable" means extremely useful.',
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
