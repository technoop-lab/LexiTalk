import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_133: ConversationDefinition = {
  id: 'conv_a2_133',
  title: 'Hobbies, Arts, Creativity & Musical Interests (Open Studio Creative Mixer)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_133'],
  estimatedMinutes: 5,
  scenario:
    'You are attending an open studio creative social evening at the BALTIC Centre for Contemporary Art in Newcastle upon Tyne. Chat with visual artist and musician Oliver Hayes. Express your artistic passions using gerunds and infinitives ("I enjoy playing acoustic guitar" / "I love to capture street scenes with my camera"), explain how long you have practiced your hobbies using the Present Perfect, compare creative disciplines, and discuss visiting local galleries and live concerts.',
  communicativeGoals: [
    'Express enthusiasm for artistic and musical hobbies using gerunds and infinitives ("I enjoy painting" / "I love to play")',
    'Describe how long you have practiced creative pastimes using the Present Perfect ("I have played guitar for four years")',
    'Express personal artistic tastes and preferences using "keen on", "fond of", and "passionate about"',
    'Discuss attending art exhibitions, creative workshops, and live acoustic music gigs',
  ],
  canDoStatements: [
    'Can describe creative pastimes, artistic methods, and musical instruments in detail (CEFR A2)',
    'Can express likes and preferences using verbs followed by gerunds or infinitives',
    'Can maintain an engaging cultural conversation about arts, galleries, and live performances',
  ],
  characters: [
    {
      id: 'char_oliver_hayes',
      name: 'Oliver Hayes',
      role: 'Visual Artist & Independent Music Producer',
      avatar: '🎨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'acoustic guitar',
        ipa: '/əˈkuːstɪk ɡɪˈtɑːr/',
        partOfSpeech: 'noun phrase',
        meaning: 'A stringed musical instrument that produces sound acoustically without electric amplification',
        exampleSentence: 'I have played the acoustic guitar since I was fourteen years old.',
        translations: { hi: 'ध्वनिक गिटार / एकॉस्टिक गिटार' },
      },
      {
        word: 'exhibition',
        ipa: '/ˌɛksɪˈbɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A public display of works of art, photography, or historical items in a gallery or museum',
        exampleSentence: 'The contemporary photography exhibition at BALTIC is truly inspiring.',
        translations: { hi: 'प्रदर्शनी / कला प्रदर्शनी' },
      },
      {
        word: 'composition',
        ipa: '/ˌkɒmpəˈzɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'The artistic arrangement of visual elements in a painting or photograph',
        exampleSentence: 'She has a fantastic eye for lighting and visual composition.',
        translations: { hi: 'रचना / कला या फोटो का संयोजन' },
      },
      {
        word: 'keen on',
        ipa: '/kiːn ɒn/',
        partOfSpeech: 'adjective phrase',
        meaning: 'Very interested in or enthusiastic about an activity or subject',
        exampleSentence: 'I am very keen on watercolor painting and digital graphic design.',
        translations: { hi: 'का बहुत शौकीन / अत्यधिक रुचि रखने वाला' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I really enjoy playing fingerstyle acoustic guitar in the evenings.',
        functionCategory: 'Expressing Hobby with Gerund (enjoy + -ing)',
        exampleSentence: 'I enjoy painting mountain landscapes with acrylics.',
      },
      {
        phrase: 'I love to take 35mm street photography during golden hour.',
        functionCategory: 'Expressing Hobby with Infinitive (love to + verb)',
        exampleSentence: 'I love to visit contemporary art galleries on Sundays.',
      },
      {
        phrase: 'How long have you practiced landscape photography?',
        functionCategory: 'Asking Duration of Creative Passion',
        exampleSentence: 'How long have you played the piano?',
      },
      {
        phrase: 'Have you seen the new modern sculpture gallery yet?',
        functionCategory: 'Inquiring About Art Events',
        exampleSentence: 'Have you attended any live jazz concerts recently?',
      },
    ],
    grammar: {
      title: 'Verbs of Preference: Gerunds vs. Infinitives & Duration with Present Perfect',
      conceptExplanation:
        '1. Verbs followed by Gerund (-ing): enjoy, avoid, practice, keep, be keen on / fond of.\n- "I enjoy playing guitar" / "I am fond of sketching".\n2. Verbs followed by either Gerund or Infinitive (with similar meaning): love, like, hate, prefer, start, continue.\n- "I love painting" = "I love to paint".\n3. Duration of artistic pastimes: Use Present Perfect + for/since ("I have played the violin for five years" / "I have loved sculpture since childhood").\n4. Contrast with Past Simple: "Last year I exhibited two landscape photos at a local fair".',
      patternFormula: 'Subject + enjoy / love / like + [Verb-ing / to Base Verb] | Subject + have/has practiced [Art] + for [Duration]',
      contrastExamples: [
        {
          incorrect: 'I enjoy to play acoustic guitar.',
          correct: 'I enjoy playing acoustic guitar. / I love to play acoustic guitar.',
          explanation: '"Enjoy" is always followed by a gerund (-ing), never an infinitive with "to".',
        },
        {
          incorrect: 'I am playing guitar since five years.',
          correct: 'I have played guitar for five years. / I have played guitar since 2019.',
          explanation: 'Ongoing states/hobbies with duration require Present Perfect + "for".',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Oliver Hayes',
        text: 'Hi there! Welcome to the BALTIC artists studio mixer. I’m Oliver, I work with film photography and ambient music. What kind of creative hobbies or artistic passions do you pursue?',
        translation: 'नमस्ते! बाल्टिक आर्टिस्ट्स स्टूडियो मिक्सर में आपका स्वागत है। मैं ओलिवर हूँ, मैं फिल्म फोटोग्राफी और परिवेशी संगीत के साथ काम करता हूँ। आप किस तरह के रचनात्मक शौक या कलात्मक जुनून को आगे बढ़ाते हैं?',
      },
      {
        speaker: 'You',
        text: 'Hi Oliver! I really enjoy playing fingerstyle acoustic guitar in my free time, and I love taking street photography around Newcastle during golden hour. I have practiced photography for about three years now!',
        translation: 'नमस्ते ओलिवर! मुझे अपने खाली समय में फिंगरस्टाइल एकॉस्टिक गिटार बजाना बहुत पसंद है, और मुझे न्यूकैसल में गोल्डन ऑवर के दौरान स्ट्रीट फोटोग्राफी करना बहुत पसंद है। मैं अब लगभग तीन साल से फोटोग्राफी का अभ्यास कर रहा हूँ!',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_133_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I really enjoy ___ (playing / to play) acoustic folk guitar."',
      options: [
        { id: 'opt_1', text: 'playing', isCorrect: true },
        { id: 'opt_2', text: 'to play', isCorrect: false },
        { id: 'opt_3', text: 'play', isCorrect: false },
      ],
      correctAnswer: 'playing',
      explanation: 'The verb "enjoy" requires a gerund (-ing form).',
    },
    {
      id: 'cp_a2_133_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses a long-term musical interest?',
      options: [
        { id: 'opt_1', text: 'I have played the piano for seven years.', isCorrect: true },
        { id: 'opt_2', text: 'I am playing piano since seven years.', isCorrect: false },
        { id: 'opt_3', text: 'I play piano for seven years ago.', isCorrect: false },
      ],
      correctAnswer: 'I have played the piano for seven years.',
      explanation: 'Present Perfect "have played" + "for seven years" indicates ongoing duration.',
    },
    {
      id: 'cp_a2_133_3',
      type: 'multiple_choice',
      prompt: 'Which phrase means you are very interested in visual arts?',
      options: [
        { id: 'opt_1', text: 'I am keen on contemporary watercolor painting.', isCorrect: true },
        { id: 'opt_2', text: 'I am keen to contemporary watercolor.', isCorrect: false },
        { id: 'opt_3', text: 'I keen in watercolors.', isCorrect: false },
      ],
      correctAnswer: 'I am keen on contemporary watercolor painting.',
      explanation: 'The fixed preposition with "keen" is "on" ("keen on + noun/gerund").',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_133_1',
      scenarioContext: 'Express artistic hobby with enjoy.',
      prompt: 'Build: "I enjoy taking street photographs during golden hour."',
      targetStructure: 'Subject + enjoy + gerund phrase + prepositional phrase',
      wordBank: ['I', 'enjoy', 'taking', 'street', 'photographs', 'during', 'golden', 'hour', 'to', 'take', 'took'],
      acceptableSolutions: [
        'I enjoy taking street photographs during golden hour',
        'I enjoy taking street photographs during golden hour.',
      ],
      explanation: 'Uses "enjoy + gerund (-ing)".',
    },
    {
      id: 'sc_a2_133_2',
      scenarioContext: 'State duration of playing an instrument.',
      prompt: 'Build: "I have played acoustic guitar for four years."',
      targetStructure: 'Subject + have + participle + instrument + for + period',
      wordBank: ['I', 'have', 'played', 'acoustic', 'guitar', 'for', 'four', 'years', 'since', 'playing', 'am'],
      acceptableSolutions: [
        'I have played acoustic guitar for four years',
        'I have played acoustic guitar for four years.',
      ],
      explanation: 'Present Perfect duration structure.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_133_1',
      turnIndex: 1,
      partnerPrompt:
        'Hi there! Welcome to the BALTIC artists studio social. I’m Oliver, a visual photographer and music producer. What creative hobbies or artistic pursuits do you enjoy the most?',
      partnerAudioText:
        'Hi there! Welcome to the BALTIC artists studio social. I’m Oliver, a visual photographer and music producer. What creative hobbies or artistic pursuits do you enjoy the most?',
      partnerQuestionHindi:
        'नमस्ते! बाल्टिक आर्टिस्ट्स स्टूडियो सोशल में आपका स्वागत है। मैं ओलिवर हूँ, एक विज़ुअल फ़ोटोग्राफ़र और संगीत निर्माता। आप किन रचनात्मक शौकों या कलात्मक गतिविधियों का सबसे अधिक आनंद लेते हैं?',
      expectedFunction: 'Express Creative Passions (enjoy playing acoustic guitar / love taking street photos / for 3 years)',
      contextGoal:
        'Explain that you enjoy playing acoustic fingerstyle guitar and love taking 35mm street photographs around Newcastle; add that you have practiced photography for three years.',
      targetVocabulary: ['enjoy playing acoustic fingerstyle guitar', 'love taking street photography with natural light', 'have practiced photography for three years', 'fascinated by urban architecture and river reflections'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'Hi Oliver! I really enjoy playing acoustic fingerstyle guitar in the evenings, and I love taking street photography around Newcastle’s historic quayside. I have practiced photography for about three years now!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Guitar & Music (guitar / acoustic / fingerstyle / playing / music)',
          patterns: ['guitar', 'acoustic', 'fingerstyle', 'playing', 'music', 'instrument', 'folk'],
          required: true,
        },
        {
          name: 'Photography & Duration (photography / photos / street / camera / three years / for 3 years)',
          patterns: ['photography', 'photos', 'street', 'camera', 'three years', 'for 3 years', 'quayside', 'newcastle', 'love to take'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'enjoy_infinitive_rule',
          pattern: /\bi enjoy to play\b|\bi enjoy to take\b/i,
          errorType: 'grammar',
          message: 'Say "I enjoy playing" (enjoy is always followed by a gerund -ing).',
          correctionPattern: 'I enjoy playing acoustic guitar',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_133_1',
        type: 'multiple_choice',
        prompt: 'Which form is grammatically correct after "enjoy"?',
        options: [
          { id: 'opt_1', text: 'I enjoy taking photographs at sunset.', isCorrect: true },
          { id: 'opt_2', text: 'I enjoy to take photographs at sunset.', isCorrect: false },
          { id: 'opt_3', text: 'I enjoy take photographs.', isCorrect: false },
        ],
        correctAnswer: 'I enjoy taking photographs at sunset.',
        explanation: '"Enjoy" requires a gerund (-ing form).',
      },
    },
    {
      id: 'turn_a2_133_2',
      turnIndex: 2,
      partnerPrompt:
        'The Tyne bridges offer incredible light during golden hour! I shoot mostly black-and-white architectural compositions. What inspires your photography the most, and do you prefer digital cameras or traditional 35mm film?',
      partnerAudioText:
        'The Tyne bridges offer incredible light during golden hour! I shoot mostly black-and-white architectural compositions. What inspires your photography the most, and do you prefer digital cameras or traditional 35mm film?',
      partnerQuestionHindi:
        'टाइन पुल गोल्डन ऑवर के दौरान अविश्वसनीय रोशनी प्रदान करते हैं! मैं ज्यादातर श्वेत-श्याम स्थापत्य रचनाओं की शूटिंग करता हूँ। आपकी फोटोग्राफी को सबसे ज्यादा क्या प्रेरित करता है, और क्या आप डिजिटल कैमरे या पारंपरिक 35 मिमी फिल्म पसंद करते हैं?',
      expectedFunction: 'Discuss Aesthetic Inspiration & Camera Preferences (prefer digital / golden hour lighting)',
      contextGoal:
        'Explain that you are inspired by dramatic evening shadows and reflections on the river; state that you prefer shooting with a mirrorless digital camera because you like experimenting with manual exposure settings.',
      targetVocabulary: ['inspired by evening shadows and river reflections', 'prefer shooting on a mirrorless digital camera', 'like experimenting with manual exposure settings', 'capturing candid human moments'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'I am deeply inspired by dramatic evening shadows and reflections on the River Tyne. I prefer using a mirrorless digital camera because I love experimenting with manual aperture and shutter speeds in low light.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Inspiration (shadows / reflections / river / light / evening / candid / architecture)',
          patterns: ['shadows', 'reflections', 'river', 'tyne', 'light', 'golden hour', 'evening', 'architecture', 'people'],
          required: true,
        },
        {
          name: 'Camera Preference (prefer digital / mirrorless / manual / experimenting / camera)',
          patterns: ['prefer', 'digital', 'mirrorless', 'camera', 'manual', 'settings', 'experimenting', 'film', 'exposure'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_133_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I prefer ___ (using / to using) a digital camera."',
        options: [
          { id: 'opt_1', text: 'using', isCorrect: true },
          { id: 'opt_2', text: 'to using', isCorrect: false },
          { id: 'opt_3', text: 'used', isCorrect: false },
        ],
        correctAnswer: 'using',
        explanation: '"Prefer" takes a gerund ("using") or infinitive ("to use").',
      },
    },
    {
      id: 'turn_a2_133_3',
      turnIndex: 3,
      partnerPrompt:
        'Manual exposure gives you total creative control. What about your music? Have you ever played in an acoustic band or performed live at an open mic night in town?',
      partnerAudioText:
        'Manual exposure gives you total creative control. What about your music? Have you ever played in an acoustic band or performed live at an open mic night in town?',
      partnerQuestionHindi:
        'मैन्युअल एक्सपोज़र आपको कुल रचनात्मक नियंत्रण देता है। आपके संगीत के बारे में क्या? क्या आपने कभी किसी ध्वनिक बैंड में बजाया है या शहर में किसी ओपन माइक नाइट में लाइव प्रदर्शन किया है?',
      expectedFunction: 'Share Musical Performance Experience (Present Perfect: played at open mic last autumn)',
      contextGoal:
        'State that you have played at an open mic night once at a local coffeehouse last autumn; you felt nervous beforehand, but the audience was warm and welcoming.',
      targetVocabulary: ['have performed at an open mic night once', 'played two original acoustic songs last autumn', 'felt nervous before going on stage', 'audience was supportive and encouraging'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'I have performed at an open mic night once! Last autumn, I played two acoustic folk songs at a cozy cafe in Jesmond. I felt quite nervous before stepping onto the stage, but the audience was very supportive and kind.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Open Mic Experience (open mic / once / cafe / jesmond / performed / played / acoustic / autumn)',
          patterns: ['open mic', 'performed', 'played', 'once', 'cafe', 'jesmond', 'autumn', 'last autumn', 'songs', 'folk'],
          required: true,
        },
        {
          name: 'Emotional Reaction (nervous / supportive / welcoming / audience / stage / loved it)',
          patterns: ['nervous', 'supportive', 'welcoming', 'audience', 'stage', 'kind', 'warm', 'loved it', 'experience'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_133_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes a past performance?',
        options: [
          { id: 'opt_1', text: 'Last autumn, I performed two songs at an open mic cafe.', isCorrect: true },
          { id: 'opt_2', text: 'Last autumn, I have performed two songs at open mic.', isCorrect: false },
          { id: 'opt_3', text: 'Last autumn I was perform songs.', isCorrect: false },
        ],
        correctAnswer: 'Last autumn, I performed two songs at an open mic cafe.',
        explanation: 'Finished past time "Last autumn" requires Past Simple "performed".',
      },
    },
    {
      id: 'turn_a2_133_4',
      turnIndex: 4,
      partnerPrompt:
        'Performing your own music takes courage! We are hosting an acoustic jam and photo exhibition opening right here at BALTIC next Friday evening at 7:00 PM. You should bring your guitar and a few of your photographic prints!',
      partnerAudioText:
        'Performing your own music takes courage! We are hosting an acoustic jam and photo exhibition opening right here at BALTIC next Friday evening at 7:00 PM. You should bring your guitar and a few of your photographic prints!',
      partnerQuestionHindi:
        'अपना खुद का संगीत प्रस्तुत करने के लिए साहस की आवश्यकता होती है! हम अगले शुक्रवार शाम 7:00 बजे यहीं बाल्टिक में एक ध्वनिक जैम और फोटो प्रदर्शनी का आयोजन कर रहे हैं। आपको अपना गिटार और अपने कुछ फोटोग्राफिक प्रिंट लाने चाहिए!',
      expectedFunction: 'Accept Invitation, Confirm Participation & Conclude Creative Exchange',
      contextGoal:
        'Accept the invitation enthusiastically; confirm you will bring your acoustic guitar and five framed prints to the BALTIC jam session next Friday at 7:00 PM; exchange contact details.',
      targetVocabulary: ['would be honored to join next Friday at 7:00 PM', 'will bring my acoustic guitar and photo prints', 'let’s exchange Instagram or phone numbers', 'thank you Oliver for the inspiration'],
      suggestedResponses: [
        {
          label: 'Integrated A2 Scaffold',
          text: 'I would be thrilled to join! I will bring my acoustic guitar and four framed river prints next Friday at 7:00 PM. Let’s exchange Instagram handles so we can stay connected. Thank you so much, Oliver!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Acceptance & Details (thrilled / bring guitar / prints / next friday / 7:00 / baltic / instagram / oliver)',
          patterns: ['thrilled', 'honored', 'guitar', 'prints', 'next friday', '7:00', '7 pm', 'instagram', 'contact', 'oliver', 'thank you'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_133_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "I would be ___ (thrilled / thrill) to participate in the jam session."',
        options: [
          { id: 'opt_1', text: 'thrilled', isCorrect: true },
          { id: 'opt_2', text: 'thrill', isCorrect: false },
          { id: 'opt_3', text: 'thrillingly', isCorrect: false },
        ],
        correctAnswer: 'thrilled',
        explanation: 'Use the participial adjective "thrilled" (feeling great excitement).',
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
