import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_219: ConversationDefinition = {
  id: 'conv_a2_219',
  title: 'Achievements, Experiences & Changes Over Time',
  cefr: 'A2',
  unitId: 'unit_a2_15',
  lessonLinks: ['lesson_a2_15_219'],
  estimatedMinutes: 5,
  scenario:
    'You are attending an end-of-term student showcase with your senior mentor Liam. You look back at your learning journey over the past few months, discuss major personal accomplishments, talk about the transformation in your communication skills, and use Present Perfect with "for" and "since" to describe your timeline.',
  communicativeGoals: [
    'Describe personal accomplishments and educational achievements ("Finishing my first project was a huge accomplishment")',
    'Express duration and ongoing experience using Present Perfect with "for" and "since" ("I have studied English for eight months", "I have attended weekly speaking clubs since October")',
    'Describe personal transformation and confidence growth over time',
    'Acknowledge mentor guidance and celebrate milestones together',
  ],
  canDoStatements: [
    'Can describe achievements, milestones, and personal experiences in simple A2 English',
    'Can correctly use Present Perfect with "for" (duration) and "since" (starting point)',
    'Can talk about how personal skills and confidence have transformed over time',
  ],
  characters: [
    {
      id: 'char_liam_mentor',
      name: 'Liam',
      role: 'Senior Student Mentor',
      avatar: '🏆',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'accomplishment',
        ipa: '/əˈkʌmplɪʃmənt/',
        partOfSpeech: 'noun',
        meaning: 'Something that has been achieved successfully through skill and effort',
        exampleSentence: 'Speaking in English for ten minutes was a proud accomplishment.',
        translations: { hi: 'उपलब्धि / सफलता (अकम्प्लिशमेंट)' },
      },
      {
        word: 'transformation',
        ipa: '/ˌtrænsfəˈmeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A complete or dramatic change in someone’s ability, character, or appearance',
        exampleSentence: 'My speaking confidence has undergone a total transformation.',
        translations: { hi: 'रूपांतरण / बड़ा बदलाव (ट्रांसफॉर्मेशन)' },
      },
      {
        word: 'experience',
        ipa: '/ɪkˈspɪəriəns/',
        partOfSpeech: 'noun',
        meaning: 'Practical contact with and observation of facts or events over time',
        exampleSentence: 'Working in group seminars gave me valuable practical experience.',
        translations: { hi: 'अनुभव (एक्सपीरियंस)' },
      },
      {
        word: 'progress',
        ipa: '/ˈprəʊɡres/',
        partOfSpeech: 'noun',
        meaning: 'Forward movement towards a destination or the development of knowledge and skill',
        exampleSentence: 'We have made tremendous progress since the semester began.',
        translations: { hi: 'प्रगति / सुधार (प्रोग्रेस)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I have studied English consistently for eight months now.',
        functionCategory: 'Stating duration with for',
        exampleSentence: 'I have lived in this campus dorm for one semester.',
      },
      {
        phrase: 'I have attended weekly speaking clubs since October.',
        functionCategory: 'Stating starting point with since',
        exampleSentence: 'I have practiced daily since the first week of class.',
      },
      {
        phrase: 'Over the past few months, my speaking confidence has transformed completely.',
        functionCategory: 'Describing positive personal change over time',
        exampleSentence: 'Over the past term, my vocabulary has doubled.',
      },
      {
        phrase: 'Thank you for mentoring me through this entire journey.',
        functionCategory: 'Expressing gratitude to a mentor',
        exampleSentence: 'Your guidance made a huge difference.',
      },
    ],
    grammar: {
      title: 'Present Perfect with "For" (Duration) and "Since" (Starting Point)',
      conceptExplanation:
        '1. Present Perfect + FOR (periods of time):\n   - "I have been in this class FOR six months / FOR three weeks."\n2. Present Perfect + SINCE (specific starting dates/points in the past):\n   - "I have studied here SINCE September / SINCE last Monday / SINCE I started university."\n3. Time expressions for change:\n   - "Over the past few months, I have learned..."\n   - "I have already completed 15 units."',
      patternFormula: 'Subject + have/has + [Past Participle] + [for + duration / since + start point]',
      contrastExamples: [
        {
          incorrect: 'I have studied English since six months.',
          correct: 'I have studied English for six months. / ...since last September.',
          explanation: 'Use "for" with duration (six months) and "since" with a starting point (September).',
        },
        {
          incorrect: 'I study here since two years.',
          correct: 'I have studied here for two years.',
          explanation: 'Use Present Perfect ("have studied"), not Present Simple, for actions continuing from the past.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Liam',
        text: 'Congratulations on reaching the end-of-term showcase! How long have you been studying with our academy now?',
        translation: 'सत्र-समाप्ति शोकेस तक पहुँचने पर बधाई! अब आप हमारे संस्थान में कितने समय से पढ़ रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'I have studied here for six months, and I have practiced speaking in our club since October.',
        translation: 'मैंने यहाँ छह महीने तक अध्ययन किया है, और मैंने अक्टूबर से हमारे क्लब में बोलने का अभ्यास किया है।',
      },
      {
        speaker: 'Liam',
        text: 'That is wonderful! Your conversational fluency has seen a real transformation.',
        translation: 'यह अद्भुत है! आपके संवादात्मक प्रवाह में वास्तविक बदलाव देखा गया है।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_219_1',
      type: 'fill_blank',
      prompt: 'Complete with "for" or "since": "I have attended the English workshop ______ (since / for) last November."',
      options: [
        { id: 'opt_1', text: 'since', isCorrect: true },
        { id: 'opt_2', text: 'for', isCorrect: false },
      ],
      correctAnswer: 'since',
      explanation: 'Use "since" with specific starting time point "last November".',
    },
    {
      id: 'cp_219_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses Present Perfect for duration?',
      options: [
        { id: 'opt_1', text: 'I have lived on campus for three months.', isCorrect: true },
        { id: 'opt_2', text: 'I live on campus since three months.', isCorrect: false },
        { id: 'opt_3', text: 'I have lived on campus since three months.', isCorrect: false },
      ],
      correctAnswer: 'I have lived on campus for three months.',
      explanation: 'Present Perfect + "for" + time period.',
    },
    {
      id: 'cp_219_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [over the past few months / my confidence / has grown / significantly]',
      correctAnswer: 'over the past few months my confidence has grown significantly',
      explanation: 'Time expression + subject + present perfect verb + adverb.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_219_1',
      prompt: 'Construct a sentence stating that you have practiced English every day for five months.',
      scenarioContext: 'Sharing your learning timeline with Liam.',
      targetStructure: 'I have practiced speaking English every day for five months now.',
      wordBank: ['I have practiced speaking', 'English every day', 'for five months', 'now,', 'Liam.'],
      acceptableSolutions: [
        'I have practiced speaking English every day for five months now.',
        'I have practiced English every day for five months.',
      ],
      explanation: 'Present perfect with "for five months".',
    },
    {
      id: 'sc_219_2',
      prompt: 'Construct a sentence stating that finishing your first spoken presentation was your biggest accomplishment.',
      scenarioContext: 'Reflecting on your proudest achievement.',
      targetStructure: 'Finishing my first spoken presentation was my proudest accomplishment this term.',
      wordBank: ['Finishing my first', 'spoken presentation was', 'my proudest accomplishment', 'this term,', 'Liam.'],
      acceptableSolutions: [
        'Finishing my first spoken presentation was my proudest accomplishment this term.',
        'Giving my first presentation was a proud accomplishment.',
      ],
      explanation: 'Gerund subject + accomplishment description.',
    },
  ],
  turns: [
    {
      id: 'turn_219_1',
      turnIndex: 1,
      partnerPrompt:
        'Hey there! Welcome to the end-of-term student showcase! As your mentor, I am so thrilled to see you here today. Looking back over your journey, how long have you been studying English with us, and what was your starting point?',
      partnerAudioText:
        'Hey there! Welcome to the end-of-term student showcase! As your mentor, I am so thrilled to see you here today. Looking back over your journey, how long have you been studying English with us, and what was your starting point?',
      partnerQuestionHindi:
        'अरे वहाँ! सत्र-समाप्ति छात्र शोकेस में आपका स्वागत है! आपके संरक्षक के रूप में, मैं आज आपको यहाँ देखकर बहुत रोमांचित हूँ। अपनी यात्रा पर पीछे मुड़कर देखते हुए, आप हमारे साथ कितने समय से अंग्रेजी सीख रहे हैं, और आपका शुरुआती बिंदु क्या था?',
      expectedFunction: 'Explaining study timeline using Present Perfect with "for" and "since"',
      contextGoal: 'Explain that you have studied for six months, practicing in the conversation club since the beginning of the term',
      targetVocabulary: ['have studied', 'for six months', 'since September', 'conversation club', 'starting point', 'Liam', 'hello'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Hi Liam! I have studied English with the academy for six months now, and I have attended the conversation club every week since September.',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Hello Liam! I have been in the program for half a year. When I started back in September, I could barely introduce myself!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Hi Liam! I’ve been studying consistently for six months. Ever since joining the program in September, I’ve committed to daily practice.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'greeting_and_mentor',
          patterns: ['hi', 'hello', 'liam', 'good afternoon'],
          required: true,
        },
        {
          name: 'present_perfect_for',
          patterns: ['have studied', 'have been', 'for six months', 'for half a year', 'for months'],
          required: true,
        },
        {
          name: 'since_starting_point',
          patterns: ['since september', 'since october', 'since the beginning', 'since joining', 'started'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_219_1_since_for',
          pattern: /since six months/i,
          errorType: 'grammar',
          message: 'Use "for" with periods of time: "I have studied for six months."',
          correctionPattern: 'I have studied for six months, since September.',
        },
      ],
      remediationPractice: {
        id: 'rem_219_1',
        type: 'fill_blank',
        prompt: 'Fill in: "I have studied ______ (for) six months."',
        options: [
          { id: 'r1', text: 'for', isCorrect: true },
          { id: 'r2', text: 'since', isCorrect: false },
        ],
        correctAnswer: 'for',
        explanation: 'Use "for" for duration of time.',
      },
    },
    {
      id: 'turn_219_2',
      turnIndex: 2,
      partnerPrompt:
        'Six months of dedication is fantastic! You have come so far. What do you consider your single proudest accomplishment during this time?',
      partnerAudioText:
        'Six months of dedication is fantastic! You have come so far. What do you consider your single proudest accomplishment during this time?',
      partnerQuestionHindi:
        'छह महीने का समर्पण शानदार है! आप इतनी दूर आ गए हैं। इस दौरान आप अपनी सबसे बड़ी उपलब्धि क्या मानते हैं?',
      expectedFunction: 'Describing proudest accomplishment and practical experience gained',
      contextGoal: 'Describe your proudest accomplishment (e.g. delivering your first 5-minute presentation in English, speaking without notes, or passing all unit checks)',
      targetVocabulary: ['proudest accomplishment', 'presentation', 'spoke without notes', 'confidence', 'milestone', 'experience'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'My proudest accomplishment was delivering a five-minute presentation in front of the whole class and speaking without reading from notes!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'Completing our group research project and answering questions from the professor in English was my biggest accomplishment.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Having a spontaneous 10-minute discussion with an exchange student last week was my greatest milestone. It proved to me how far I’ve come!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'accomplishment_phrase',
          patterns: ['accomplishment', 'milestone', 'proudest', 'achievement', 'greatest'],
          required: true,
        },
        {
          name: 'accomplishment_detail',
          patterns: ['presentation', 'notes', 'spoke', 'project', 'discussion', 'questions', 'class'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_219_2_vague',
          pattern: /^i passed test\.$/i,
          errorType: 'vocabulary',
          message: 'Expand with details: "My proudest accomplishment was delivering a five-minute presentation in English."',
          correctionPattern: 'My proudest accomplishment was delivering a presentation in English.',
        },
      ],
      remediationPractice: {
        id: 'rem_219_2',
        type: 'multiple_choice',
        prompt: 'Which response describes an achievement with rich A2 detail?',
        options: [
          { id: 'r1', text: 'My proudest accomplishment was delivering a 5-minute presentation without notes.', isCorrect: true },
          { id: 'r2', text: 'I did good things.', isCorrect: false },
        ],
        correctAnswer: 'My proudest accomplishment was delivering a 5-minute presentation without notes.',
        explanation: 'Concrete accomplishment with clear context.',
      },
    },
    {
      id: 'turn_219_3',
      turnIndex: 3,
      partnerPrompt:
        'Speaking without notes in front of an audience is a huge leap forward! How has your overall mindset and confidence transformed over the past few months?',
      partnerAudioText:
        'Speaking without notes in front of an audience is a huge leap forward! How has your overall mindset and confidence transformed over the past few months?',
      partnerQuestionHindi:
        'श्रोताओं के सामने बिना नोट्स के बोलना एक बहुत बड़ी छलांग है! पिछले कुछ महीनों में आपकी समग्र मानसिकता और आत्मविश्वास कैसे बदला है?',
      expectedFunction: 'Describing personal transformation and asking Liam about his own learning experience as a senior student',
      contextGoal: 'Explain that you used to be terrified of making mistakes, but now you see mistakes as learning steps; ask Liam what transformed his speaking most when he was at A2',
      targetVocabulary: ['transformation', 'over the past few months', 'mistakes', 'confidence', 'What helped you most', 'Liam'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Over the past few months, my mindset has undergone a total transformation. I no longer fear mistakes! What helped you most when you were learning, Liam?',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'My confidence has grown immensely. I now view mistakes as natural learning opportunities. What was the turning point in your language journey, Liam?',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'I’ve experienced a real shift in confidence. Instead of freezing, I keep communicating smoothly. What advice transformed your speaking most as a senior mentor, Liam?',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'transformation_concept',
          patterns: ['transformation', 'over the past few months', 'confidence', 'mistakes', 'mindset', 'grown', 'shift'],
          required: true,
        },
        {
          name: 'question_to_mentor',
          patterns: ['what helped you', 'what was the turning point', 'what advice', 'liam', 'when you were'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_219_3_no_question',
          pattern: /^i have confidence now\.$/i,
          errorType: 'interaction',
          message: 'Remember to ask your mentor: "What helped you most when you were at this stage, Liam?"',
          correctionPattern: 'My confidence has transformed. What helped you most when you were learning, Liam?',
        },
      ],
      remediationPractice: {
        id: 'rem_219_3',
        type: 'fill_blank',
        prompt: 'Fill in: "Over the past few months, my confidence ______ (has transformed) completely."',
        options: [
          { id: 'r1', text: 'has transformed', isCorrect: true },
          { id: 'r2', text: 'is transform', isCorrect: false },
        ],
        correctAnswer: 'has transformed',
        explanation: 'Present perfect for change over time.',
      },
    },
    {
      id: 'turn_219_4',
      turnIndex: 4,
      partnerPrompt:
        'For me, realizing that communication is about connection, not perfection, changed everything! You have shown incredible grit and passion. I am proud to have been your mentor this semester. Let’s celebrate your showcase achievement!',
      partnerAudioText:
        'For me, realizing that communication is about connection, not perfection, changed everything! You have shown incredible grit and passion. I am proud to have been your mentor this semester. Let’s celebrate your showcase achievement!',
      partnerQuestionHindi:
        'मेरे लिए, यह महसूस करना कि संचार कनेक्शन के बारे में है, न कि पूर्णता के बारे में, सब कुछ बदल दिया! आपने अविश्वसनीय धैर्य और जुनून दिखाया है। मुझे इस सेमेस्टर में आपका संरक्षक होने पर गर्व है। आइए आपकी शोकेस उपलब्धि का जश्न मनाएं!',
      expectedFunction: 'Closing the showcase conversation with heartfelt mentor gratitude and celebration',
      contextGoal: 'Thank Liam sincerely for his mentorship and guidance, and celebrate your shared milestone together',
      targetVocabulary: ['Thank you so much', 'Liam', 'mentorship', 'guidance', 'celebrate', 'journey', 'connection'],
      suggestedResponses: [
        {
          label: 'High Scaffolding',
          text: 'Thank you so much for your amazing mentorship and support throughout this journey, Liam! Let’s celebrate together!',
          scaffoldingLevel: 'high',
        },
        {
          label: 'Medium Scaffolding',
          text: 'I couldn’t have done it without your encouragement, Liam. Thank you for being such an inspiring mentor. Cheers to this milestone!',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Low Scaffolding',
          text: 'Thank you for believing in me since day one, Liam! "Connection over perfection" is a lesson I’ll carry forward forever. Let’s enjoy the celebration!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'heartfelt_thanks',
          patterns: ['thank you', 'thanks', 'liam', 'mentorship', 'support', 'guidance', 'encouragement'],
          required: true,
        },
        {
          name: 'celebration_closing',
          patterns: ['celebrate', 'cheers', 'milestone', 'enjoy', 'together', 'journey'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_219_4_short',
          pattern: /^(thanks|bye)$/i,
          errorType: 'interaction',
          message: 'Express appreciation to your mentor: "Thank you so much for your mentorship, Liam! Let’s celebrate together!"',
          correctionPattern: 'Thank you for your mentorship, Liam! Let’s celebrate together.',
        },
      ],
      remediationPractice: {
        id: 'rem_219_4',
        type: 'multiple_choice',
        prompt: 'Which sentence is a warm and respectful thank-you to a mentor?',
        options: [
          { id: 'r1', text: 'Thank you so much for your wonderful mentorship and support, Liam! Let’s celebrate!', isCorrect: true },
          { id: 'r2', text: 'Good job me bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you so much for your wonderful mentorship and support, Liam! Let’s celebrate!',
        explanation: 'Warm, respectful, and celebratory.',
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
