import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_135: ConversationDefinition = {
  id: 'conv_a2_135',
  title: 'Unit 9 Capstone: Life Milestones, Experiences, Global Living & Future Visions (International Gala)',
  cefr: 'A2',
  unitId: 'unit_a2_9',
  lessonLinks: ['lesson_a2_9_135'],
  estimatedMinutes: 6,
  scenario:
    'You are in the grand lecture hall at the Royal Geographical Society in Kensington, London, attending the annual Global Exchange & Cultural Leaders Gala. You are seated beside international program director and cultural anthropologist Helena Lindqvist. Engage in a comprehensive, independent A2 capstone conversation synthesizing all Unit 9 language: reflect on life milestones and duration of experiences (Present Perfect with ever, never, already, yet, just, for, since), share practical anecdotes of overcoming real-world challenges (travel disruptions, housing maintenance, consumer redress), debate environmental and wellness habits with modals (must, should), and articulate your five-year career vision and global aspirations.',
  communicativeGoals: [
    'Synthesize the Present Perfect (life experiences, duration with "for/since", result with "just/already/yet") with fluency and accuracy',
    'Narrate real-life problem-solving experiences combining Past Continuous and Past Simple',
    'Give advice and express civic/environmental responsibility using modal verbs (should, must, ought to)',
    'Articulate multifaceted future aspirations using "going to", "hope to", "plan to", and "dream of"',
  ],
  canDoStatements: [
    'Can participate autonomously in an extended multi-topic conversation about life, career, and global issues (CEFR A2 Capstone)',
    'Can seamlessly switch between Past Simple, Past Continuous, Present Perfect, and Future structures',
    'Can express opinions, offer thoughtful advice, and discuss personal aspirations with cultural sensitivity',
  ],
  characters: [
    {
      id: 'char_helena_lindqvist',
      name: 'Helena Lindqvist',
      role: 'International Program Director & Cultural Exchange Chair',
      avatar: '🌍',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstəʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage, event, or turning point in the development of a person’s life or career',
        exampleSentence: 'Graduating from university and moving abroad were the two biggest milestones of my twenties.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण उपलब्धि' },
      },
      {
        word: 'resilience',
        ipa: '/rɪˈzɪliəns/',
        partOfSpeech: 'noun',
        meaning: 'The capacity to recover quickly from difficulties, disruptions, and tough challenges',
        exampleSentence: 'Navigating flight cancellations and housing repairs taught me great personal resilience.',
        translations: { hi: 'लचीलापन / विपरीत परिस्थितियों से उबरने की क्षमता' },
      },
      {
        word: 'sustainability',
        ipa: '/səˌsteɪnəˈbɪlɪti/',
        partOfSpeech: 'noun',
        meaning: 'The quality of causing little or no damage to the environment to support long-term ecological balance',
        exampleSentence: 'Urban sustainability requires both green policies and grassroots community participation.',
        translations: { hi: 'स्थिरता / पर्यावरण संरक्षण' },
      },
      {
        word: 'vision',
        ipa: '/ˈvɪʒən/',
        partOfSpeech: 'noun',
        meaning: 'An inspiring mental picture of what the future could achieve or look like',
        exampleSentence: 'My vision for the next five years is to unite technology with social impact.',
        translations: { hi: 'दृष्टिकोण / भविष्य की दृष्टि' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have lived and worked in the UK for over two years now.',
        functionCategory: 'Stating Duration of Living Experience (Present Perfect + for)',
        exampleSentence: 'I have studied environmental policy since 2021.',
      },
      {
        phrase: 'While I was traveling across Europe, I encountered several unexpected flight delays.',
        functionCategory: 'Narrating Past Challenge (Past Continuous + Past Simple)',
        exampleSentence: 'While we were preparing the report, our server crashed.',
      },
      {
        phrase: 'We must adopt sustainable habits, and you should never neglect your physical health.',
        functionCategory: 'Synthesizing Advice & Obligation (must / should)',
        exampleSentence: 'We should protect our oceans and prioritize daily balance.',
      },
      {
        phrase: 'In five years, I hope to lead international initiatives and dream of launching a green NGO.',
        functionCategory: 'Articulating Comprehensive Future Vision',
        exampleSentence: 'I plan to publish my research and expand our global network.',
      },
    ],
    grammar: {
      title: 'Grand Capstone Synthesis: The Tense Symphony (Past, Present Perfect, Modals & Future)',
      conceptExplanation:
        '1. Present Perfect (Life Experience & Duration): "I have lived in London for two years" / "I have already managed major projects" / "I haven\'t visited Japan yet".\n2. Narrative Past (Past Continuous + Past Simple): "While I was dealing with a leaking pipe, the power went out" / "When I landed, my luggage was missing".\n3. Modals for Advice & Responsibility: "We must protect our ecosystems" / "You should maintain healthy boundaries" / "If I were you, I would take regular breaks".\n4. Future Trajectory: "Next year I am going to finish my master\'s" / "In five years I hope to lead a global initiative" / "I dream of founding an ethical enterprise".',
      patternFormula: 'Present Perfect (Life Journey) -> Narrative Past (Overcoming Obstacles) -> Modals (Values & Advice) -> Future Forms (5-Year Vision)',
      contrastExamples: [
        {
          incorrect: 'I live here since two years and next year I hope launch startup.',
          correct: 'I have lived here for two years and next year I hope to launch a startup.',
          explanation: 'Present Perfect + "for" + infinitive after "hope to".',
        },
        {
          incorrect: 'While I worked, suddenly the boiler broke and I must to fix it.',
          correct: 'While I was working, suddenly the boiler broke down and I had to get it repaired.',
          explanation: 'Past Continuous for ongoing action, Past Simple for sudden event, "had to" for past obligation.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Helena Lindqvist',
        text: 'Good evening! Welcome to the Royal Geographical Society Gala. I’m Helena Lindqvist. It’s wonderful to share a table with you. How long have you lived in the UK, and what significant life milestones have shaped your journey so far?',
        translation: 'शुभ संध्या! रॉयल ज्योग्राफिकल सोसाइटी गाला में आपका स्वागत है। मैं हेलेना लिंडक्विस्ट हूँ। आपके साथ एक टेबल साझा करना अद्भुत है। आप ब्रिटेन में कितने समय से रह रहे हैं, और किन महत्वपूर्ण जीवन मील के पत्थरों ने अब तक आपकी यात्रा को आकार दिया है?',
      },
      {
        speaker: 'You',
        text: 'Good evening Helena! I have lived and worked in the UK for two years now. Moving here from abroad and completing my postgraduate degree were huge milestones for me. I have already gained practical experience in project management, and I have loved immersing myself in British cultural life.',
        translation: 'शुभ संध्या हेलेना! मैं अब दो साल से ब्रिटेन में रह रहा हूँ और काम कर रहा हूँ। विदेश से यहाँ आना और अपनी स्नातकोत्तर डिग्री पूरी करना मेरे लिए बहुत बड़े मील के पत्थर थे। मैंने पहले ही प्रोजेक्ट मैनेजमेंट में व्यावहारिक अनुभव प्राप्त कर लिया है, और मुझे ब्रिटिश सांस्कृतिक जीवन में खुद को डुबोना बहुत पसंद आया है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_135_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "I have lived in the UK ___ (for / since) two years."',
      options: [
        { id: 'opt_1', text: 'for', isCorrect: true },
        { id: 'opt_2', text: 'since', isCorrect: false },
        { id: 'opt_3', text: 'from', isCorrect: false },
      ],
      correctAnswer: 'for',
      explanation: 'Use "for" with a duration of time ("two years").',
    },
    {
      id: 'cp_a2_135_2',
      type: 'multiple_choice',
      prompt: 'Which sentence seamlessly combines Past Continuous and Past Simple?',
      options: [
        { id: 'opt_1', text: 'While I was living in Edinburgh, I faced a sudden boiler breakdown during winter.', isCorrect: true },
        { id: 'opt_2', text: 'While I lived in Edinburgh, boiler was breaking.', isCorrect: false },
        { id: 'opt_3', text: 'When I was live in Edinburgh, boiler broke.', isCorrect: false },
      ],
      correctAnswer: 'While I was living in Edinburgh, I faced a sudden boiler breakdown during winter.',
      explanation: 'Past Continuous ("was living") provides context; Past Simple ("faced") marks the event.',
    },
    {
      id: 'cp_a2_135_3',
      type: 'multiple_choice',
      prompt: 'Which future sentence expresses both a definite plan and an ambitious dream?',
      options: [
        { id: 'opt_1', text: 'Next year I am going to complete my degree, and in five years I dream of founding an international sustainability initiative.', isCorrect: true },
        { id: 'opt_2', text: 'Next year I will to complete degree and dream to found.', isCorrect: false },
        { id: 'opt_3', text: 'Next year I going complete degree and dream founding.', isCorrect: false },
      ],
      correctAnswer: 'Next year I am going to complete my degree, and in five years I dream of founding an international sustainability initiative.',
      explanation: 'Correct usage of "am going to complete" (decided plan) + "dream of founding" (gerund dream).',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_135_1',
      scenarioContext: 'Summarize life milestone and duration.',
      prompt: 'Build: "I have lived in London for two years and graduated recently."',
      targetStructure: 'Subject + have lived + in London + for two years + and + graduated recently',
      wordBank: ['I', 'have', 'lived', 'in', 'London', 'for', 'two', 'years', 'and', 'graduated', 'recently', 'living', 'since'],
      acceptableSolutions: [
        'I have lived in London for two years and graduated recently',
        'I have lived in London for two years and graduated recently.',
      ],
      explanation: 'Present Perfect duration + recent milestone.',
    },
    {
      id: 'sc_a2_135_2',
      scenarioContext: 'Express future vision.',
      prompt: 'Build: "In five years I hope to lead international development projects."',
      targetStructure: 'Prepositional phrase + subject + hope to + base verb + object',
      wordBank: ['In', 'five', 'years', 'I', 'hope', 'to', 'lead', 'international', 'development', 'projects', 'leading', 'dream'],
      acceptableSolutions: [
        'In five years I hope to lead international development projects',
        'In five years I hope to lead international development projects.',
        'In five years, I hope to lead international development projects.',
      ],
      explanation: 'Comprehensive future ambition statement.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_135_1',
      turnIndex: 1,
      partnerPrompt:
        'Good evening! Welcome to the Royal Geographical Society Gala. I’m Helena Lindqvist, chair of international cultural exchanges. It is wonderful to meet you. Tell me, how long have you been in the UK, and what key personal or professional milestones have shaped your journey?',
      partnerAudioText:
        'Good evening! Welcome to the Royal Geographical Society Gala. I’m Helena Lindqvist, chair of international cultural exchanges. It is wonderful to meet you. Tell me, how long have you been in the UK, and what key personal or professional milestones have shaped your journey?',
      partnerQuestionHindi:
        'शुभ संध्या! रॉयल ज्योग्राफिकल सोसाइटी गाला में आपका स्वागत है। मैं हेलेना लिंडक्विस्ट हूँ, अंतर्राष्ट्रीय सांस्कृतिक आदान-प्रदान की अध्यक्ष। आपसे मिलकर बहुत अच्छा लगा। मुझे बताएं, आप ब्रिटेन में कितने समय से हैं, और किन प्रमुख व्यक्तिगत या व्यावसायिक मील के पत्थरों ने आपकी यात्रा को आकार दिया है?',
      expectedFunction: 'Synthesize Life Milestones & Duration (Present Perfect + for/since + recent achievements)',
      contextGoal:
        'Explain that you have lived in the UK for two years; moving abroad, completing your degree, and starting in project management were major milestones; mention that you have loved adapting to multicultural life here.',
      targetVocabulary: ['have lived in the UK for two years', 'moving abroad and completing my degree were major milestones', 'have already gained valuable project experience', 'thrived in this multicultural environment'],
      suggestedResponses: [
        {
          label: 'Independent Capstone',
          text: 'Good evening Helena! I have lived in the UK for two years now. Relocating abroad, finishing my degree, and starting my career in project operations were transformative milestones for me. I have already collaborated with international teams and loved immersing myself in this diverse community.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Duration & Living (lived / in the UK / two years / for 2 years / london / since)',
          patterns: ['lived', 'uk', 'two years', 'for two years', 'for 2 years', 'london', 'been here', 'since'],
          required: true,
        },
        {
          name: 'Milestones & Experience (milestones / degree / career / project / abroad / international / collaborated / experience)',
          patterns: ['milestone', 'milestones', 'degree', 'career', 'project', 'abroad', 'international', 'collaborated', 'experience', 'relocating'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'live_uk_since_two_years',
          pattern: /\bi live in uk since two years\b/i,
          errorType: 'grammar',
          message: 'Say "I have lived in the UK for two years" (Present Perfect with "for").',
          correctionPattern: 'I have lived in the UK for two years',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_135_1',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly describes duration of living abroad?',
        options: [
          { id: 'opt_1', text: 'I have lived in the UK for two years.', isCorrect: true },
          { id: 'opt_2', text: 'I live in the UK since two years.', isCorrect: false },
          { id: 'opt_3', text: 'I am living in the UK for two years ago.', isCorrect: false },
        ],
        correctAnswer: 'I have lived in the UK for two years.',
        explanation: 'Present Perfect "have lived" + "for + period".',
      },
    },
    {
      id: 'turn_a2_135_2',
      turnIndex: 2,
      partnerPrompt:
        'Living abroad always builds tremendous character. Of course, international life isn’t without friction—from travel delays to finding flats or navigating daily customer service. Have you experienced any challenging moments while living or traveling here, and how did you resolve them?',
      partnerAudioText:
        'Living abroad always builds tremendous character. Of course, international life isn’t without friction—from travel delays to finding flats or navigating daily customer service. Have you experienced any challenging moments while living or traveling here, and how did you resolve them?',
      partnerQuestionHindi:
        'विदेश में रहना हमेशा जबरदस्त चरित्र का निर्माण करता है। बेशक, अंतरराष्ट्रीय जीवन बिना घर्षण के नहीं है—यात्रा में देरी से लेकर फ्लैट खोजने या दैनिक ग्राहक सेवा को नेविगेट करने तक। क्या आपने यहाँ रहने या यात्रा करने के दौरान किसी चुनौतीपूर्ण क्षण का अनुभव किया है, और आपने उन्हें कैसे हल किया?',
      expectedFunction: 'Narrate Overcoming Real-World Challenges (Past Continuous + Past Simple: travel disruption / flat repairs / complaint resolution)',
      contextGoal:
        'Narrate a real challenge: while you were traveling during winter, your flight was canceled and your luggage was delayed, or when your rental boiler broke down, you communicated calmly and negotiated a prompt resolution with the airline/landlord.',
      targetVocabulary: ['while I was traveling during winter, our flight was delayed by storms', 'checked luggage went missing on the carousel', 'stayed calm, filed a Property Irregularity Report, and received my bag the next morning', 'taught me patience and clear communication'],
      suggestedResponses: [
        {
          label: 'Independent Capstone',
          text: 'Certainly! While I was traveling to Dublin last winter, severe weather delayed our flight and my luggage was lost. Instead of panicking, I spoke with the baggage desk, filed a Property Irregularity Report, and arranged delivery directly to my hotel. It taught me patience and effective communication under pressure.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Past Disruption (while traveling / flight delayed / luggage lost / boiler broke / leak / problem / winter)',
          patterns: ['while', 'traveling', 'flight', 'delayed', 'luggage', 'lost', 'boiler', 'broke', 'weather', 'problem', 'room'],
          required: true,
        },
        {
          name: 'Resolution & Learning (resolved / report / communicated / calm / delivered / repaired / patience / taught me)',
          patterns: ['resolved', 'report', 'pir', 'communicated', 'calm', 'delivered', 'repaired', 'patience', 'taught me', 'handled'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_135_2',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "While I ___ (was traveling / traveled), my flight was canceled."',
        options: [
          { id: 'opt_1', text: 'was traveling', isCorrect: true },
          { id: 'opt_2', text: 'traveled', isCorrect: false },
          { id: 'opt_3', text: 'am traveling', isCorrect: false },
        ],
        correctAnswer: 'was traveling',
        explanation: 'Past Continuous ("was traveling") describes the background activity in progress.',
      },
    },
    {
      id: 'turn_a2_135_3',
      turnIndex: 3,
      partnerPrompt:
        'Remaining calm and assertive in service situations is a vital skill. Looking at wider societal challenges today—like climate change and the fast pace of modern work—what values or advice do you think our generation must embrace to create a healthier, more sustainable world?',
      partnerAudioText:
        'Remaining calm and assertive in service situations is a vital skill. Looking at wider societal challenges today—like climate change and the fast pace of modern work—what values or advice do you think our generation must embrace to create a healthier, more sustainable world?',
      partnerQuestionHindi:
        'सेवा स्थितियों में शांत और मुखर रहना एक महत्वपूर्ण कौशल है। आज की व्यापक सामाजिक चुनौतियों को देखते हुए—जैसे जलवायु परिवर्तन और आधुनिक काम की तेज गति—आपके विचार से हमारी पीढ़ी को एक स्वस्थ, अधिक टिकाऊ दुनिया बनाने के लिए किन मूल्यों या सलाह को अपनाना चाहिए?',
      expectedFunction: 'Synthesize Values, Advice & Modals (must reduce carbon footprint / should protect mental wellness)',
      contextGoal:
        'State that we must reduce plastic pollution and transition to renewable energy; on a personal level, people should prioritize work-life balance and avoid burnout by setting digital boundaries and pursuing creative hobbies.',
      targetVocabulary: ['we must protect our environment by reducing single-use plastics', 'we have to conserve energy and promote public transit', 'individuals should prioritize mental health and set digital boundaries', 'cultivating creative arts and music brings balance'],
      suggestedResponses: [
        {
          label: 'Independent Capstone',
          text: 'I believe we must urgently protect our environment: we should eliminate single-use plastics, support community composting, and reduce our carbon footprint. Simultaneously, we should prioritize personal wellness: people ought to set digital curfews and pursue creative arts like music and photography to prevent burnout.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Environmental Must/Should (environment / plastic / carbon footprint / reduce / climate / sustainable / must / should)',
          patterns: ['environment', 'plastic', 'carbon footprint', 'reduce', 'climate', 'sustainable', 'must', 'should', 'compost', 'energy'],
          required: true,
        },
        {
          name: 'Wellness Advice (wellness / health / digital curfew / balance / burnout / hobbies / arts / music / ought to)',
          patterns: ['wellness', 'health', 'digital curfew', 'balance', 'burnout', 'hobbies', 'arts', 'music', 'ought to', 'screens', 'sleep'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_135_3',
        type: 'multiple_choice',
        prompt: 'Which sentence correctly combines ecological and personal recommendations?',
        options: [
          { id: 'opt_1', text: 'We must reduce plastic waste, and we should protect our sleep routines.', isCorrect: true },
          { id: 'opt_2', text: 'We must to reduce plastic and should to protect sleep.', isCorrect: false },
          { id: 'opt_3', text: 'We must reducing plastic and should protecting sleep.', isCorrect: false },
        ],
        correctAnswer: 'We must reduce plastic waste, and we should protect our sleep routines.',
        explanation: 'Both "must" and "should" are followed by bare base verbs ("reduce", "protect").',
      },
    },
    {
      id: 'turn_a2_135_4',
      turnIndex: 4,
      partnerPrompt:
        'Balancing ecological responsibility with mindful living is profound. Finally, as you look toward the next five years, what is your ultimate vision? What plans and dreams do you hope to accomplish next on your global journey?',
      partnerAudioText:
        'Balancing ecological responsibility with mindful living is profound. Finally, as you look toward the next five years, what is your ultimate vision? What plans and dreams do you hope to accomplish next on your global journey?',
      partnerQuestionHindi:
        'पारिस्थितिक जिम्मेदारी को सचेत जीवन के साथ संतुलित करना गहरा है। अंत में, जैसे ही आप अगले पांच वर्षों की ओर देखते हैं, आपका अंतिम दृष्टिकोण क्या है? आप अपनी वैश्विक यात्रा पर आगे किन योजनाओं और सपनों को पूरा करने की आशा करते हैं?',
      expectedFunction: 'Articulate Comprehensive 5-Year Vision (going to earn diploma / hope to lead global projects / dream of launching green initiative)',
      contextGoal:
        'Express your 5-year vision: next spring you are going to complete your professional qualification, in five years you hope to lead international cross-border initiatives, and you dream of launching your own sustainability consultancy; thank Helena for an inspiring exchange.',
      targetVocabulary: ['next spring I am going to complete my advanced qualification', 'in five years I hope to lead international sustainability projects', 'dream of launching my own social impact consultancy', 'thank you Helena for this inspiring conversation'],
      suggestedResponses: [
        {
          label: 'Independent Capstone',
          text: 'In the short term, I am going to finish my professional certification next spring. Looking ahead five years, I hope to manage international sustainability programs across Europe and Asia, and I dream of launching my own ethical consultancy. Thank you so much, Helena, for such an inspiring conversation!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Near-term Plan (going to finish / certification / diploma / next spring / next year)',
          patterns: ['going to', 'finish', 'certification', 'diploma', 'next spring', 'next year', 'complete'],
          required: true,
        },
        {
          name: 'Long-term Aspirations (five years / hope to lead / international / sustainability / dream of / consultancy / global)',
          patterns: ['five years', 'hope to', 'lead', 'manage', 'international', 'sustainability', 'dream of', 'consultancy', 'programs', 'impact'],
          required: true,
        },
        {
          name: 'Gratitude & Closure (thank you / helena / inspiring / conversation / gala)',
          patterns: ['thank you', 'thanks', 'helena', 'inspiring', 'conversation', 'gala', 'pleasure', 'evening'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_135_4',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "In five years, I hope ___ (to lead / leading) international initiatives."',
        options: [
          { id: 'opt_1', text: 'to lead', isCorrect: true },
          { id: 'opt_2', text: 'leading', isCorrect: false },
          { id: 'opt_3', text: 'lead', isCorrect: false },
        ],
        correctAnswer: 'to lead',
        explanation: '"Hope" is followed by the infinitive with "to" ("hope to lead").',
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
