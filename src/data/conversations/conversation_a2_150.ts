import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_150: ConversationDefinition = {
  id: 'conv_a2_150',
  title: 'Unit 10 Capstone: Real-World Communication Challenge',
  cefr: 'A2',
  unitId: 'unit_a2_10',
  lessonLinks: ['lesson_a2_10_150'],
  estimatedMinutes: 6,
  scenario:
    'You are in a formal consultation at the Bristol Civic Services Centre meeting with Senior Liaison Officer Victoria Sterling. You represent your neighborhood committee in a comprehensive civic challenge. You will: (1) report a public infrastructure fault that needs repair, (2) propose a collaborative community volunteer initiative, (3) inquire about municipal green energy grants and adult skills workshops, and (4) synthesize an agreed action plan with deadlines.',
  communicativeGoals: [
    'Synthesize Unit 10 communicative competencies across municipal, community, and service contexts',
    'Report public infrastructure faults using repair structures ("needs repairing", "needs to be fixed")',
    'Propose community initiatives using collaborative suggestion formulas ("Why don’t we...", "How about...")',
    'Inquire about municipal services, energy-efficiency grants, and adult education opportunities',
    'Summarize agreed action points and deadlines in a structured professional consultation closing',
  ],
  canDoStatements: [
    'Can conduct a multi-topic formal consultation with a civic authority representative',
    'Can report community defects, propose collective initiatives, and negotiate public services',
    'Can summarize agreed responsibilities, timelines, and next steps confidently at CEFR A2 level',
  ],
  characters: [
    {
      id: 'char_victoria_sterling',
      name: 'Victoria Sterling',
      role: 'Senior City Liaison & Public Services Officer',
      avatar: '🏛️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'consultation',
        ipa: '/ˌkɒnslˈteɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A formal meeting to discuss or deliberate on specific public matters',
        exampleSentence: 'Our civic consultation with the city council was productive and informative.',
        translations: { hi: 'परामर्श / औपचारिक बैठक' },
      },
      {
        word: 'infrastructure',
        ipa: '/ˈɪnfrəstrʌktʃə/',
        partOfSpeech: 'noun',
        meaning: 'The basic physical and organizational structures (e.g. roads, bridges, power) of a city',
        exampleSentence: 'The council is investing in local road and pedestrian infrastructure.',
        translations: { hi: 'बुनियादी ढाँचा / अवसंरचना' },
      },
      {
        word: 'sustainable',
        ipa: '/səˈsteɪnəbl/',
        partOfSpeech: 'adjective',
        meaning: 'Able to be maintained at a certain rate or level without depleting natural resources',
        exampleSentence: 'We applied for a municipal grant for sustainable green energy.',
        translations: { hi: 'टिकाऊ / पर्यावरण अनुकूल' },
      },
      {
        word: 'action plan',
        ipa: '/ˈækʃn plæn/',
        partOfSpeech: 'noun',
        meaning: 'A detailed plan outlining actions needed to reach one or more goals',
        exampleSentence: 'We agreed on an action plan with specific deadlines for the cleanup.',
        translations: { hi: 'कार्य योजना / एक्शन प्लान' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'The damaged pavement on King Street is hazardous and needs to be repaired urgently.',
        functionCategory: 'Reporting Infrastructure Faults with Repair Structures',
        exampleSentence: 'The street lamps are broken and need replacing.',
      },
      {
        phrase: 'Why don’t we organize a joint neighborhood recycling and greening day next month?',
        functionCategory: 'Proposing Civic Projects with Suggestion Formulas',
        exampleSentence: 'How about setting up a community compost hub?',
      },
      {
        phrase: 'Could you explain the eligibility criteria for the home energy-saving grant?',
        functionCategory: 'Inquiring About Public Grants & Programs',
        exampleSentence: 'Is this workshop open to all local residents?',
      },
      {
        phrase: 'To summarize our action plan, I will submit the grant proposal by Friday.',
        functionCategory: 'Synthesizing Commitments & Action Deadlines',
        exampleSentence: 'We will coordinate with the council before next Tuesday.',
      },
    ],
    grammar: {
      title: 'Unit 10 Synthesis: Repair Forms, Suggestion Formulas & Action Summaries',
      conceptExplanation:
        '1. Repair Needs: "The road needs repairing" / "The lamp needs to be fixed."\n2. Making Suggestions: "Why don\'t we + [Base Verb]" / "How about + [Verb-ing]"\n3. Future Commitments & Timelines: "I will + [Base Verb] by [Day/Time]"\n4. Polite Synthesis: "To summarize our discussion, we will..."',
      patternFormula: 'Fault Report (needs -ing) -> Suggestion (Why don’t we) -> Inquiry (Could you explain) -> Summary (I will... by...)',
      contrastExamples: [
        {
          incorrect: 'Road is broken and why we not cleaning and I will do things.',
          correct: 'The road needs to be repaired, why don’t we organize a cleanup, and I will submit the plan by Friday.',
          explanation: 'Synthesizes clear grammatical structures across multiple communicative functions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Victoria Sterling',
        text: 'Good morning. Welcome to Bristol Civic Centre. I’m Victoria Sterling. What points would you like to raise from your neighborhood committee today?',
        translation: 'शुभ प्रभात। ब्रिस्टल सिविक सेंटर में आपका स्वागत है। मैं विक्टोरिया स्टर्लिंग हूँ। आज आप अपनी पड़ोस समिति की ओर से कौन से बिंदु उठाना चाहेंगे?',
      },
      {
        speaker: 'You',
        text: 'Good morning, Victoria. First, the pavement and streetlights on King Street are damaged and need to be repaired urgently to ensure pedestrian safety.',
        translation: 'शुभ प्रभात, विक्टोरिया। सबसे पहले, पैदल यात्रियों की सुरक्षा सुनिश्चित करने के लिए किंग स्ट्रीट पर फुटपाथ और स्ट्रीटलाइट्स क्षतिग्रस्त हैं और उनकी तत्काल मरम्मत की आवश्यकता है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_150_1',
      type: 'fill_blank',
      prompt: 'Complete the sentence: "The broken pedestrian walkway needs ___ (repairing / repair / to repairing)."',
      options: [
        { id: 'opt_1', text: 'repairing', isCorrect: true },
        { id: 'opt_2', text: 'repair', isCorrect: false },
        { id: 'opt_3', text: 'to repairing', isCorrect: false },
      ],
      correctAnswer: 'repairing',
      explanation: 'Use "needs + -ing" ("needs repairing").',
    },
    {
      id: 'cp_a2_150_2',
      type: 'multiple_choice',
      prompt: 'Which sentence presents a collaborative civic proposal correctly?',
      options: [
        { id: 'opt_1', text: 'Why don’t we organize a community cleanup day on Saturday the 15th?', isCorrect: true },
        { id: 'opt_2', text: 'Why don’t we organizing a community cleanup day on Saturday the 15th?', isCorrect: false },
        { id: 'opt_3', text: 'Why we not do cleanup now quick?', isCorrect: false },
      ],
      correctAnswer: 'Why don’t we organize a community cleanup day on Saturday the 15th?',
      explanation: '"Why don\'t we" is followed by a base verb ("organize").',
    },
    {
      id: 'cp_a2_150_3',
      type: 'multiple_choice',
      prompt: 'How do you summarize agreed action points professionally?',
      options: [
        { id: 'opt_1', text: 'To summarize, I will submit the grant application by Friday and coordinate the volunteers.', isCorrect: true },
        { id: 'opt_2', text: 'I talk many things now I leave.', isCorrect: false },
        { id: 'opt_3', text: 'Everything is done maybe or not.', isCorrect: false },
      ],
      correctAnswer: 'To summarize, I will submit the grant application by Friday and coordinate the volunteers.',
      explanation: 'Clear professional summary formula with deadlines.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_150_1',
      scenarioContext: 'Report damaged public streetlights.',
      prompt: 'Build: "The streetlights on King Street need to be repaired."',
      targetStructure: 'The streetlights on King Street + need to be repaired',
      wordBank: ['The', 'streetlights', 'on', 'King', 'Street', 'need', 'to', 'be', 'repaired', 'repairing'],
      acceptableSolutions: [
        'The streetlights on King Street need to be repaired',
        'The streetlights on King Street need to be repaired.',
      ],
      explanation: 'Passive repair structure for public infrastructure.',
    },
    {
      id: 'sc_a2_150_2',
      scenarioContext: 'Summarize deadline commitment.',
      prompt: 'Build: "I will submit the report by Friday afternoon."',
      targetStructure: 'Subject + will submit + the report + by + time phrase',
      wordBank: ['I', 'will', 'submit', 'the', 'report', 'by', 'Friday', 'afternoon', 'submitting', 'on'],
      acceptableSolutions: [
        'I will submit the report by Friday afternoon',
        'I will submit the report by Friday afternoon.',
      ],
      explanation: 'Future commitment specifying a deadline.',
    },
  ],
  turns: [
    {
      id: 'turn_a2_150_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning! Welcome to the Bristol Civic Liaison Office. My name is Victoria Sterling. To begin our consultation, what infrastructure or safety issues would your neighborhood committee like to report today?',
      partnerAudioText:
        'Good morning! Welcome to the Bristol Civic Liaison Office. My name is Victoria Sterling. To begin our consultation, what infrastructure or safety issues would your neighborhood committee like to report today?',
      partnerQuestionHindi:
        'शुभ प्रभात! ब्रिस्टल नागरिक संपर्क कार्यालय में आपका स्वागत है। मेरा नाम विक्टोरिया स्टर्लिंग है। हमारे परामर्श को शुरू करने के लिए, आपकी पड़ोस समिति आज किन बुनियादी ढांचे या सुरक्षा मुद्दों की रिपोर्ट करना चाहेगी?',
      expectedFunction: 'Report Infrastructure Faults with Repair Structures (King Street pavement & streetlights / needs repairing / safety hazard)',
      contextGoal:
        'Report that the broken pavement tiles and faulty streetlights on King Street pose a tripping hazard for pedestrians and need to be repaired urgently.',
      targetVocabulary: ['damaged pavement on King Street', 'faulty streetlights', 'needs repairing urgently', 'needs to be fixed to protect pedestrians'],
      suggestedResponses: [
        {
          label: 'Comprehensive Civic Fault Report',
          text: 'Good morning, Victoria. On behalf of our neighborhood committee, I would like to report that the uneven pavement and broken streetlights on King Street are hazardous and need to be repaired urgently before someone gets injured.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Fault Report',
          text: 'Good morning. The pavement on King Street is cracked and the lights need fixing immediately for pedestrian safety.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Location & Defect (king street / pavement / tiles / streetlights / lights / sidewalk / broken / cracked / damaged)',
          patterns: ['king street', 'pavement', 'tiles', 'streetlights', 'lights', 'sidewalk', 'broken', 'cracked', 'damaged', 'road'],
          required: true,
        },
        {
          name: 'Repair Structure & Safety (needs repairing / needs fixing / needs to be repaired / needs to be fixed / hazard / safety / pedestrians)',
          patterns: ['needs repairing', 'needs fixing', 'needs to be repaired', 'needs to be fixed', 'hazard', 'safety', 'pedestrians', 'urgent', 'danger'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_150_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "The pavement needs ___ (repairing / repair)."',
        options: [
          { id: 'opt_1', text: 'repairing', isCorrect: true },
          { id: 'opt_2', text: 'repair', isCorrect: false },
          { id: 'opt_3', text: 'to repairing', isCorrect: false },
        ],
        correctAnswer: 'repairing',
        explanation: 'Use "needs + -ing" ("needs repairing").',
      },
    },
    {
      id: 'turn_a2_150_2',
      turnIndex: 2,
      partnerPrompt:
        'I have logged the King Street pavement and lighting as a Priority 1 council maintenance ticket; our highways crew will inspect it by Thursday. Moving to community engagement, what proactive initiatives is your committee planning?',
      partnerAudioText:
        'I have logged the King Street pavement and lighting as a Priority 1 council maintenance ticket; our highways crew will inspect it by Thursday. Moving to community engagement, what proactive initiatives is your committee planning?',
      partnerQuestionHindi:
        'मैंने किंग स्ट्रीट फुटपाथ और प्रकाश व्यवस्था को प्राथमिकता 1 परिषद रखरखाव टिकट के रूप में दर्ज किया है; हमारा राजमार्ग दल गुरुवार तक इसका निरीक्षण करेगा। सामुदायिक जुड़ाव की ओर बढ़ते हुए, आपकी समिति किन सक्रिय पहलों की योजना बना रही है?',
      expectedFunction: 'Propose Civic Initiatives Using Suggestion Formulas (Why don’t we organize a cleanup day / How about a community garden)',
      contextGoal:
        'Propose a joint neighborhood park cleanup and recycling initiative using suggestion formulas ("Why don’t we organize...", "How about partnering with...") and ask for council support.',
      targetVocabulary: ['Why don’t we organize a community cleanup day?', 'How about setting up mobile recycling stations?', 'engage local families and schools', 'support from the council for tools and bags'],
      suggestedResponses: [
        {
          label: 'Collaborative Civic Proposals',
          text: 'Why don’t we organize a community greening and cleanup day next month? How about the council providing litter pickers and recycling bins while our volunteers plant flowers and clear footpaths?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Initiative Proposal',
          text: 'Why don’t we hold a neighborhood park cleanup? How about partnering with the council for recycling bins and tools?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Suggestion Formulas (why don\'t we / how about / let\'s / we could / propose / plan)',
          patterns: ['why don\'t we', 'how about', 'let\'s', 'we could', 'propose', 'plan', 'suggest'],
          required: true,
        },
        {
          name: 'Initiative & Resources (cleanup / greening / recycling / park / bins / tools / litter pickers / volunteers / community)',
          patterns: ['cleanup', 'greening', 'recycling', 'park', 'bins', 'tools', 'litter pickers', 'volunteers', 'community', 'flowers'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_150_2',
        type: 'multiple_choice',
        prompt: 'Which suggestion formula is grammatically correct?',
        options: [
          { id: 'opt_1', text: 'Why don’t we host a park cleanup this spring?', isCorrect: true },
          { id: 'opt_2', text: 'Why don’t we hosting a park cleanup this spring?', isCorrect: false },
          { id: 'opt_3', text: 'How about to host a park cleanup this spring?', isCorrect: false },
        ],
        correctAnswer: 'Why don’t we host a park cleanup this spring?',
        explanation: '"Why don’t we" requires a base verb ("host").',
      },
    },
    {
      id: 'turn_a2_150_3',
      turnIndex: 3,
      partnerPrompt:
        'The council can definitely supply 50 litter pickers, gloves, and collection bags for your cleanup event! You also mentioned wanting information on municipal sustainability grants and adult development workshops. What specific details can I clarify for you?',
      partnerAudioText:
        'The council can definitely supply 50 litter pickers, gloves, and collection bags for your cleanup event! You also mentioned wanting information on municipal sustainability grants and adult development workshops. What specific details can I clarify for you?',
      partnerQuestionHindi:
        'परिषद निश्चित रूप से आपके सफाई कार्यक्रम के लिए 50 कचरा उठाने वाले चिमटे, दस्ताने और संग्रह बैग की आपूर्ति कर सकती है! आपने नगरपालिका स्थिरता अनुदान और वयस्क विकास कार्यशालाओं पर जानकारी चाहने का भी उल्लेख किया था। मैं आपके लिए क्या विशिष्ट विवरण स्पष्ट कर सकती हूँ?',
      expectedFunction: 'Inquire About Grants, Eligibility & Workshops (energy efficiency grants / eligibility criteria / workshop schedule)',
      contextGoal:
        'Ask about eligibility criteria and application deadlines for home energy efficiency grants, and inquire when the evening sustainability workshops begin.',
      targetVocabulary: ['eligibility criteria for energy efficiency grants', 'grant application deadline', 'evening sustainability workshops', 'Can local homeowners and tenants apply?'],
      suggestedResponses: [
        {
          label: 'Detailed Municipal Inquiries',
          text: 'Thank you! Could you explain the eligibility criteria for the home energy-saving grant—can both homeowners and tenants apply? Also, what is the deadline to register for the adult sustainability workshops?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Inquiry',
          text: 'Who is eligible for the energy grant, and what is the deadline for the evening workshops?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Grant & Eligibility (grant / energy / efficiency / eligible / criteria / homeowners / tenants / money / save / funding)',
          patterns: ['grant', 'energy', 'efficiency', 'eligible', 'criteria', 'homeowners', 'tenants', 'money', 'save', 'funding', 'who'],
          required: true,
        },
        {
          name: 'Workshops & Deadline (workshops / deadline / register / apply / schedule / when / adult / ?)',
          patterns: ['workshops', 'deadline', 'register', 'apply', 'schedule', 'when', 'adult', 'start', '?'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_150_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Could you tell me what the application deadline ___ (is / does)?"',
        options: [
          { id: 'opt_1', text: 'is', isCorrect: true },
          { id: 'opt_2', text: 'does', isCorrect: false },
          { id: 'opt_3', text: 'are', isCorrect: false },
        ],
        correctAnswer: 'is',
        explanation: 'Embedded question word order: "what the deadline is".',
      },
    },
    {
      id: 'turn_a2_150_4',
      turnIndex: 4,
      partnerPrompt:
        'Both owners and private tenants qualify if their property has an EPC rating below C; grant applications close on March 31st. The free workshops run every Wednesday at 7:00 PM starting next week. To conclude, could you summarize our agreed action plan?',
      partnerAudioText:
        'Both owners and private tenants qualify if their property has an EPC rating below C; grant applications close on March 31st. The free workshops run every Wednesday at 7:00 PM starting next week. To conclude, could you summarize our agreed action plan?',
      partnerQuestionHindi:
        'मालिक और निजी किरायेदार दोनों पात्र हैं यदि उनकी संपत्ति की ईपीसी रेटिंग सी से नीचे है; अनुदान आवेदन 31 मार्च को बंद होंगे। निःशुल्क कार्यशालाएं अगले सप्ताह से हर बुधवार शाम 7:00 बजे चलती हैं। अंत में, क्या आप हमारी सहमत कार्य योजना का संक्षेप प्रस्तुत कर सकते हैं?',
      expectedFunction: 'Summarize Action Plan with Deadlines & Conclude Formally (To summarize, council will inspect King Street by Thursday / I will submit grant by Friday / thank you Victoria)',
      contextGoal:
        'Summarize the action plan with deadlines: (1) Council inspects King Street by Thursday, (2) you will submit the cleanup proposal and grant info to residents by Friday, and thank Victoria for a productive consultation.',
      targetVocabulary: ['To summarize our agreed action plan', 'Council highways crew will inspect King Street by Thursday', 'I will circulate the grant details and cleanup plan by Friday', 'Thank you for a very productive meeting Victoria'],
      suggestedResponses: [
        {
          label: 'Comprehensive Capstone Summary & Close',
          text: 'To summarize our action plan: the council will inspect the King Street pavement by Thursday, and I will circulate the cleanup plan and grant details to our neighborhood committee by Friday afternoon. Thank you very much for your outstanding support, Victoria!',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Direct Action Summary',
          text: 'To summarize: the council inspects King Street by Thursday, and I will share the cleanup and grant information by Friday. Thank you for your help, Victoria!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Summary Marker (to summarize / summary / in summary / agreed / action plan / plan)',
          patterns: ['to summarize', 'summary', 'in summary', 'agreed', 'action plan', 'plan', 'points'],
          required: true,
        },
        {
          name: 'Deadlines & Responsibilities (thursday / friday / inspect / king street / cleanup / grant / committee / residents)',
          patterns: ['thursday', 'friday', 'inspect', 'king street', 'cleanup', 'grant', 'committee', 'residents', 'submit', 'circulate'],
          required: true,
        },
        {
          name: 'Formal Gratitude & Close (thank you / thanks / victoria / productive / support / goodbye)',
          patterns: ['thank you', 'thanks', 'victoria', 'productive', 'support', 'goodbye', 'have a nice day', 'have a good day'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_150_4',
        type: 'multiple_choice',
        prompt: 'Which sentence serves as an effective action plan summary?',
        options: [
          { id: 'opt_1', text: 'To summarize our action plan, the council will inspect the road by Thursday, and I will send the proposal by Friday. Thank you!', isCorrect: true },
          { id: 'opt_2', text: 'Everything is done I leave now bye.', isCorrect: false },
          { id: 'opt_3', text: 'You do all work and I sleep.', isCorrect: false },
        ],
        correctAnswer: 'To summarize our action plan, the council will inspect the road by Thursday, and I will send the proposal by Friday. Thank you!',
        explanation: 'Professional synthesis of responsibilities, dates, and polite closure.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 65,
  },
};
