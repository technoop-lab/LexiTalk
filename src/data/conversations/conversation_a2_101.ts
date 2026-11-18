import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_101: ConversationDefinition = {
  id: 'conv_a2_101',
  title: 'Opinions, Agreement & Disagreement (In my opinion, I agree, I see your point but)',
  cefr: 'A2',
  unitId: 'unit_a2_7',
  lessonLinks: ['lesson_a2_7_101'],
  estimatedMinutes: 5,
  scenario:
    'You are taking part in a team workplace survey feedback session with Project Manager Clara Jensen in Copenhagen. Clara is gathering perspectives on whether the team should adopt a 3-day hybrid schedule or a fully remote structure. State your opinions clearly, agree with valid points, politely express alternative views using "I see your point, but...", and help reach a consensus.',
  communicativeGoals: [
    'Express personal opinions using clear introductory phrases (In my opinion, I think, From my perspective, Personally)',
    'Agree warmly with valid points (I completely agree, Exactly, That is a great point)',
    'Express polite, constructive disagreement without confrontation (I see what you mean, but..., On the other hand, However)',
    'Summarize shared team consensus and balance different working styles',
  ],
  canDoStatements: [
    'Can give personal opinions and ask others for their views in simple discussions (CEFR A2)',
    'Can agree and politely disagree using appropriate conversational formulas',
    'Can justify opinions with simple supporting reasons and examples',
  ],
  characters: [
    {
      id: 'char_clara_jensen',
      name: 'Clara Jensen',
      role: 'Project Manager & Culture Lead',
      avatar: '📊',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'perspective',
        ipa: '/pərˈspɛktɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'From my perspective, flexible schedules boost creativity.',
        translations: { hi: 'दृष्टिकोण / नज़रिया' },
      },
      {
        word: 'collaboration',
        ipa: '/kəˌlæbəˈreɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The action of working with someone to produce or create something',
        exampleSentence: 'In-person collaboration is very helpful for brainstorming workshops.',
        translations: { hi: 'सहयोग / मिलकर काम करना' },
      },
      {
        word: 'productivity',
        ipa: '/ˌprɒdʌkˈtɪvəti/',
        partOfSpeech: 'noun',
        meaning: 'The effectiveness of productive effort, especially in industry or business',
        exampleSentence: 'Working quietly from home increases my coding productivity.',
        translations: { hi: 'उत्पादकता' },
      },
      {
        word: 'consensus',
        ipa: '/kənˈsɛnsəs/',
        partOfSpeech: 'noun',
        meaning: 'A general agreement among a group of people',
        exampleSentence: 'We reached a team consensus on a two-day hybrid model.',
        translations: { hi: 'सर्वसम्मति / आम सहमति' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In my opinion, ... because...',
        functionCategory: 'Expressing Clear Opinion',
        exampleSentence: 'In my opinion, hybrid work is ideal because it offers balance.',
      },
      {
        phrase: 'I completely agree with you on that.',
        functionCategory: 'Warm Agreement',
        exampleSentence: 'I completely agree with you on team bonding days.',
      },
      {
        phrase: 'I see what you mean, but on the other hand...',
        functionCategory: 'Polite Disagreement / Nuance',
        exampleSentence: 'I see what you mean, but on the other hand, long commutes cause fatigue.',
      },
      {
        phrase: 'What is your take on this?',
        functionCategory: 'Inviting Opinions',
        exampleSentence: 'Clara, what is your take on flexible core hours?',
      },
    ],
    grammar: {
      title: 'Stating Opinions & Polite Disagreement Modifiers',
      conceptExplanation:
        'To express opinions politely: "In my opinion / I think / I believe / From my point of view + [clause]". To agree: "I agree (with you) / Exactly / Absolutely". To disagree politely, soften the contrast with "I see your point, but..." or "I\'m not sure I fully agree, because...". NEVER use harsh direct negations (*"You are wrong"*).',
      patternFormula: 'Opinion: In my opinion, [Sentence] | Soft Disagreement: I see your point, but [Alternative]',
      contrastExamples: [
        {
          incorrect: 'You are completely wrong about office work.',
          correct: 'I see what you mean, but in my view, working from home provides better deep focus.',
          explanation: 'Use diplomatic disagreement strategies in professional discussions.',
        },
        {
          incorrect: 'I am agree with your opinion.',
          correct: 'I agree with your opinion.',
          explanation: '"Agree" is a verb, not an adjective; do not say *"I am agree".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Clara Jensen',
        text: 'Hi Alex! Some teammates feel we should be in the office 4 days a week for creativity. What is your honest opinion?',
        translation: 'नमस्ते एलेक्स! कुछ साथियों को लगता है कि रचनात्मकता के लिए हमें सप्ताह में 4 दिन कार्यालय में होना चाहिए। आपकी ईमानदार राय क्या है?',
      },
      {
        speaker: 'You',
        text: 'Hi Clara. In my opinion, two days in the office is the sweet spot. It gives us great collaboration without exhausting daily commutes.',
        translation: 'नमस्ते क्लारा। मेरी राय में, कार्यालय में दो दिन सबसे अच्छा संतुलन है। यह हमें थका देने वाले दैनिक आवागमन के बिना शानदार सहयोग देता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_101_1',
      type: 'multiple_choice',
      prompt: 'Which phrase is grammatically correct for expressing agreement?',
      options: [
        { id: 'opt_1', text: 'I completely agree with your proposal.', isCorrect: true },
        { id: 'opt_2', text: 'I am completely agree with your proposal.', isCorrect: false },
        { id: 'opt_3', text: 'I agreeing with your proposal.', isCorrect: false },
      ],
      correctAnswer: 'I completely agree with your proposal.',
      explanation: '"Agree" is an action verb: "I agree", never *"I am agree".',
    },
    {
      id: 'cp_a2_101_2',
      type: 'fill_blank',
      prompt: 'Complete the polite disagreement: "I see your point, ___ on the other hand, remote days allow deep focus."',
      options: [
        { id: 'opt_1', text: 'but', isCorrect: true },
        { id: 'opt_2', text: 'because', isCorrect: false },
        { id: 'opt_3', text: 'so therefore', isCorrect: false },
      ],
      correctAnswer: 'but',
      explanation: '"I see your point, but..." is the standard diplomatic transition.',
    },
    {
      id: 'cp_a2_101_3',
      type: 'multiple_choice',
      prompt: 'Which introductory phrase best presents a personal opinion?',
      options: [
        { id: 'opt_1', text: 'From my perspective, flexibility increases overall motivation.', isCorrect: true },
        { id: 'opt_2', text: 'According to me is good.', isCorrect: false },
        { id: 'opt_3', text: 'My perspective says yes.', isCorrect: false },
      ],
      correctAnswer: 'From my perspective, flexibility increases overall motivation.',
      explanation: '"From my perspective" or "In my opinion" are standard natural formulas.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_101_1',
      scenarioContext: 'State your opinion on hybrid work flexibility.',
      prompt: 'Build: "In my opinion hybrid work improves our work-life balance."',
      targetStructure: 'Prepositional phrase + subject + verb + object',
      wordBank: ['In', 'my', 'opinion', 'hybrid', 'work', 'improves', 'our', 'work-life', 'balance', 'am', 'improving'],
      acceptableSolutions: [
        'In my opinion hybrid work improves our work-life balance',
        'In my opinion, hybrid work improves our work-life balance.',
      ],
      explanation: 'States opinion clearly with justification.',
    },
    {
      id: 'sc_a2_101_2',
      scenarioContext: 'Express polite disagreement and propose an alternative.',
      prompt: 'Build: "I see your point but quiet time is necessary."',
      targetStructure: 'Clause + but + subject + be + adjective',
      wordBank: ['I', 'see', 'your', 'point', 'but', 'quiet', 'time', 'is', 'necessary', 'are', 'seeing'],
      acceptableSolutions: [
        'I see your point but quiet time is necessary',
        'I see your point, but quiet time is necessary.',
      ],
      explanation: 'Polite disagreement connector.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_101_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi Alex! As you know, leadership is reviewing our workplace policy for next quarter. Some managers believe having everyone in the office four days a week will maximize team cohesion. What is your perspective on this?',
      partnerAudioText:
        'Hi Alex! As you know, leadership is reviewing our workplace policy for next quarter. Some managers believe having everyone in the office four days a week will maximize team cohesion. What is your perspective on this?',
      partnerQuestionHindi:
        'नमस्ते एलेक्स! जैसा कि आप जानते हैं, नेतृत्व अगली तिमाही के लिए हमारी कार्यस्थल नीति की समीक्षा कर रहा है। कुछ प्रबंधकों का मानना है कि सप्ताह में चार दिन सभी को कार्यालय में रखने से टीम का सामंजस्य अधिकतम होगा। इस पर आपका क्या दृष्टिकोण है?',
      expectedFunction: 'Express Opinion & Polite Counter-Perspective on Work Policy',
      contextGoal:
        'State your opinion: in your view, a four-day office mandate is too rigid; a flexible 2-day hybrid model is better because it balances deep focus at home with collaboration in the office.',
      targetVocabulary: ['in my opinion a two-day hybrid model is best', 'from my perspective four days is too rigid', 'deep focus at home', 'meaningful collaboration in person'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Hi Clara. In my opinion, requiring four days in the office is a bit too rigid. From my perspective, a flexible two-day hybrid model is ideal because it allows for deep focus on coding tasks at home, while still giving us dedicated days for team brainstorming and collaboration.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Opinion Intro (In my opinion / From my perspective / I think)',
          patterns: ['in my opinion', 'from my perspective', 'i think', 'i believe', 'personally', 'in my view'],
          required: true,
        },
        {
          name: 'Hybrid / Flexibility Argument',
          patterns: ['hybrid', 'two days', 'rigid', 'focus', 'balance', 'collaboration', 'home', 'office'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'i_am_agree_error',
          pattern: /\bi am agree\b|\bi am disagree\b/i,
          errorType: 'grammar',
          message: 'Say "I agree" or "I disagree", not "I am agree".',
          correctionPattern: 'I agree / I disagree',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_101_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly introduces an opinion?',
        options: [
          { id: 'opt_1', text: 'In my opinion, flexible hours increase team productivity.', isCorrect: true },
          { id: 'opt_2', text: 'In my opinion is flexible hours increase productivity.', isCorrect: false },
          { id: 'opt_3', text: 'According to my view are flexible.', isCorrect: false },
        ],
        correctAnswer: 'In my opinion, flexible hours increase team productivity.',
        explanation: '"In my opinion, [clause]" is the standard structure.',
      },
    },
    {
      id: 'turn_a2_101_2',
      turnIndex: 2,
      partnerPrompt:
        'I see your point regarding deep focus. However, some junior developers mentioned that onboarding remotely felt isolating, and they learned much faster when sitting next to senior colleagues. How do you think we can address that concern?',
      partnerAudioText:
        'I see your point regarding deep focus. However, some junior developers mentioned that onboarding remotely felt isolating, and they learned much faster when sitting next to senior colleagues. How do you think we can address that concern?',
      partnerQuestionHindi:
        'मैं गहन फोकस के संबंध में आपकी बात समझती हूँ। हालाँकि, कुछ जूनियर डेवलपर्स ने उल्लेख किया कि दूर से ऑनबोर्डिंग करना अलग-थलग महसूस हुआ, और जब वे वरिष्ठ सहयोगियों के बगल में बैठे तो वे बहुत तेजी से सीखे। आपको क्या लगता है कि हम उस चिंता को कैसे हल कर सकते हैं?',
      expectedFunction: 'Agree with Junior Onboarding Needs & Propose Mentorship Anchor Days',
      contextGoal:
        'Agree that in-person mentoring for junior developers is essential; suggest designated "Anchor Days" (e.g. Tuesdays and Thursdays) for pairing and mentorship.',
      targetVocabulary: ['I completely agree that onboarding is critical', 'that is a very valid point', 'designated anchor days for pairing', 'mentorship workshops'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'I completely agree with you on that point, Clara—in-person mentorship is crucial for new joiners. Perhaps we could establish designated "Team Anchor Days" on Tuesdays and Thursdays, where everyone is in the office for pairing sessions, sprint planning, and team lunches.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Agreement Phrase (I completely agree / valid point)',
          patterns: ['completely agree', 'agree', 'valid point', 'see what you mean', 'absolutely', 'exactly'],
          required: true,
        },
        {
          name: 'Mentorship / Anchor Days Proposal',
          patterns: ['anchor days', 'tuesday', 'thursday', 'mentorship', 'pairing', 'onboarding', 'junior', 'designated'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_101_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I completely ___ with your proposal on mentorship."',
        options: [
          { id: 'opt_1', text: 'agree', isCorrect: true },
          { id: 'opt_2', text: 'am agree', isCorrect: false },
          { id: 'opt_3', text: 'agreed to', isCorrect: false },
        ],
        correctAnswer: 'agree',
        explanation: 'Verb "agree": "I completely agree with...".',
      },
    },
    {
      id: 'turn_a2_101_3',
      turnIndex: 3,
      partnerPrompt:
        'Having designated "Anchor Days" for workshops and team lunches is a brilliant compromise! What about meeting schedules on home days? Some team members complain of "Zoom fatigue" from back-to-back video calls.',
      partnerAudioText:
        'Having designated "Anchor Days" for workshops and team lunches is a brilliant compromise! What about meeting schedules on home days? Some team members complain of "Zoom fatigue" from back-to-back video calls.',
      partnerQuestionHindi:
        'कार्यशालाओं और टीम लंच के लिए नामित "एंकर डेज" होना एक शानदार समझौता है! घर के दिनों में मीटिंग शेड्यूल के बारे में क्या? टीम के कुछ सदस्य लगातार वीडियो कॉल से "ज़ूम थकान" की शिकायत करते हैं।',
      expectedFunction: 'Express Opinion on Meeting Free Days & Async Communication',
      contextGoal:
        'Share your view: propose "No-Meeting Wednesdays" for uninterrupted coding, and encourage asynchronous Slack updates instead of unnecessary calls.',
      targetVocabulary: ['in my view we should have no-meeting Wednesdays', 'prevent Zoom fatigue', 'asynchronous updates on Slack', 'protect focus time'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'In my view, we should introduce "No-Meeting Wednesdays" to protect uninterrupted focus time. Furthermore, I believe quick status updates can happen asynchronously on Slack rather than holding 30-minute calls. What do you think about that idea?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Opinion / No-Meeting Proposal',
          patterns: ['no-meeting', 'wednesday', 'in my view', 'i believe', 'i think', 'slack', 'async', 'uninterrupted', 'focus'],
          required: true,
        },
        {
          name: 'Follow-up Question',
          patterns: ['what do you think', 'how does that sound', 'what is your take', 'clara', 'and you'],
          required: false,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_101_3',
        type: 'multiple_choice',
        prompt: 'Which sentence presents a constructive workplace suggestion politely?',
        options: [
          { id: 'opt_1', text: 'In my view, having no-meeting days protects our deep concentration.', isCorrect: true },
          { id: 'opt_2', text: 'All meetings must stop now.', isCorrect: false },
          { id: 'opt_3', text: 'I am hate video calls.', isCorrect: false },
        ],
        correctAnswer: 'In my view, having no-meeting days protects our deep concentration.',
        explanation: 'Professional, articulate suggestion format.',
      },
    },
    {
      id: 'turn_a2_101_4',
      turnIndex: 4,
      partnerPrompt:
        'I love that suggestion! A 2-day office rhythm with anchor collaboration days and "No-Meeting Wednesdays" balances culture and productivity perfectly. I will draft this into our quarterly recommendations for leadership. Thank you Alex for such insightful feedback!',
      partnerAudioText:
        'I love that suggestion! A 2-day office rhythm with anchor collaboration days and "No-Meeting Wednesdays" balances culture and productivity perfectly. I will draft this into our quarterly recommendations for leadership. Thank you Alex for such insightful feedback!',
      partnerQuestionHindi:
        'मुझे वह सुझाव बहुत पसंद आया! एंकर सहयोग दिवसों और "नो-मीटिंग बुधवार" के साथ 2-दिवसीय कार्यालय तालमेल संस्कृति और उत्पादकता को पूरी तरह से संतुलित करता है। मैं इसे नेतृत्व के लिए हमारी त्रैमासिक सिफारिशों में तैयार करूँगी। इतनी व्यावहारिक प्रतिक्रिया के लिए धन्यवाद एलेक्स!',
      expectedFunction: 'Acknowledge Consensus & Express Collaborative Closing',
      contextGoal:
        'Thank Clara for listening and fostering an open culture; express excitement for the new policy rollout.',
      targetVocabulary: ['thank you Clara for listening', 'excited for the new framework', 'appreciate the open discussion', 'have a great afternoon'],
      suggestedResponses: [
        {
          label: 'Low Scaffold',
          text: 'Thank you Clara for listening to team feedback and championing this balance! I think this framework will keep everyone motivated, productive, and connected. Have a wonderful rest of your day in Copenhagen!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Collaborative Sign-off & Gratitude',
          patterns: ['thank you', 'thanks', 'clara', 'feedback', 'balance', 'framework', 'have a wonderful', 'great day', 'copenhagen'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_101_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Thank you for listening to our ___!"',
        options: [
          { id: 'opt_1', text: 'feedback', isCorrect: true },
          { id: 'opt_2', text: 'feedbacks', isCorrect: false },
          { id: 'opt_3', text: 'feedbacking', isCorrect: false },
        ],
        correctAnswer: 'feedback',
        explanation: '"Feedback" is an uncountable noun in English.',
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
