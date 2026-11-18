import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_75: ConversationDefinition = {
  id: 'conv_a1_75',
  title: 'Comprehensive Unit 5 Milestone & A1 Capstone Mastery',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_75'],
  estimatedMinutes: 6,
  scenario:
    'You participate in the comprehensive A1 Capstone Oral Assessment at the International Language Institute in London. Senior CEFR examiner Dr. Charlotte Sterling conducts a dynamic multi-phase conversation evaluating your communicative fluency across workplace collaboration, professional introductions, daily travel, emergency civic navigation, and long-term learning goals.',
  communicativeGoals: [
    'Demonstrate cumulative A1 spoken fluency across multiple social, workplace, and civic contexts',
    'Synthesize Greetings (Units 1–2), Daily Routines & Food (Unit 3), Travel & Housing (Unit 4), and Professional/Civic interactions (Unit 5)',
    'Fluently switch between Present Simple, Present Continuous, Past Simple, and Future intentions ("I work...", "I am currently developing...", "I studied...", "I will move...")',
    'Articulate personal milestones, accomplishments, and future language goals with poise and natural intonation',
  ],
  canDoStatements: [
    'Can participate in multi-turn spontaneous conversations across standard A1 communicative domains (CEFR A1 Milestone)',
    'Can describe background, present activities, past achievements, and future ambitions in coherent English',
    'Can handle unpredictable communicative turns and ask reciprocal questions gracefully',
  ],
  characters: [
    {
      id: 'char_charlotte_examiner',
      name: 'Dr. Charlotte Sterling',
      role: 'Senior CEFR Language Examiner',
      avatar: '🏆',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'milestone',
        ipa: '/ˈmaɪlstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'A significant stage or event in the development or progress of something',
        exampleSentence: 'Completing all seventy-five A1 English lessons is a major personal milestone.',
        translations: { hi: 'मील का पत्थर / महत्वपूर्ण उपलब्धि' },
      },
      {
        word: 'fluent',
        ipa: '/ˈfluːənt/',
        partOfSpeech: 'adjective',
        meaning: 'Able to express oneself easily, clearly, and articulately in a foreign language',
        exampleSentence: 'My goal is to become fully fluent in conversational English.',
        translations: { hi: 'धाराप्रवाह / सुवक्ता' },
      },
      {
        word: 'perspective',
        ipa: '/pərˈspɛktɪv/',
        partOfSpeech: 'noun',
        meaning: 'A particular attitude toward or way of regarding something; a point of view',
        exampleSentence: 'Learning English gives me a global perspective on technology and culture.',
        translations: { hi: 'दृष्टिकोण / परिप्रेक्ष्य' },
      },
      {
        word: 'capstone',
        ipa: '/ˈkæpstoʊn/',
        partOfSpeech: 'noun',
        meaning: 'The crowning achievement, point, or final culminating event',
        exampleSentence: 'This capstone oral assessment demonstrates total A1 conversational mastery.',
        translations: { hi: 'शिखर उपलब्धि / समापन कार्य' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Over the course of this journey, I have learned...',
        functionCategory: 'Reflecting on Progress',
        exampleSentence: 'Over the course of this journey, I have learned to communicate in daily life and work.',
      },
      {
        phrase: 'I can confidently handle...',
        functionCategory: 'Expressing Competence',
        exampleSentence: 'I can confidently handle hotel check-ins, job interviews, and emergency phone calls.',
      },
      {
        phrase: 'Looking ahead to the future, my goal is...',
        functionCategory: 'Future Ambitions',
        exampleSentence: 'Looking ahead to the future, my goal is to start CEFR A2 and work in global tech teams.',
      },
      {
        phrase: 'It has been a truly rewarding experience.',
        functionCategory: 'Expressing Gratitude',
        exampleSentence: 'Learning English with this curriculum has been a truly rewarding experience.',
      },
    ],
    grammar: {
      title: 'A1 Cumulative Tense Synthesis: Present Simple, Continuous, Past Simple & Future Intentions',
      conceptExplanation:
        'A1 Capstone mastery requires fluidly switching between tenses: "I live in London" (Present Simple), "I am currently preparing" (Present Continuous), "I graduated in 2023" (Past Simple), and "I am going to study A2" (Future Intentions).',
      patternFormula: 'Present Simple [Routines] + Present Continuous [Current Work] + Past Simple [Background] + Future [Goals]',
      contrastExamples: [
        {
          incorrect: 'Yesterday I go to bank and tomorrow I went to work.',
          correct: 'Yesterday I went to the bank, and tomorrow I will go to work.',
          explanation: 'Demonstrate accurate tense consistency across past, present, and future expressions.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Dr. Charlotte',
        text: 'Good afternoon Alex, and congratulations on reaching the final A1 Capstone evaluation! How would you describe your overall background and daily life in England?',
        translation: 'शुभ दोपहर एलेक्स, और अंतिम A1 कैपस्टोन मूल्यांकन तक पहुँचने पर बधाई! आप इंग्लैंड में अपनी समग्र पृष्ठभूमि और दैनिक जीवन का वर्णन कैसे करेंगे?',
      },
      {
        speaker: 'You',
        text: 'Good afternoon Dr. Charlotte! I graduated in Computer Science, and I currently live in London where I work on web applications, travel by train, and collaborate with international colleagues every day.',
        translation: 'शुभ दोपहर डॉ. चार्लोट! मैंने कंप्यूटर साइंस में स्नातक किया है, और मैं वर्तमान में लंदन में रहता हूँ जहाँ मैं वेब अनुप्रयोगों पर काम करता हूँ, ट्रेन से यात्रा करता हूँ, और हर दिन अंतर्राष्ट्रीय सहयोगियों के साथ मिलकर काम करता हूँ।',
      },
      {
        speaker: 'Dr. Charlotte',
        text: 'Wonderful synthesis. How do you handle complex practical situations, such as medical visits or job interviews?',
        translation: 'अद्भुत संश्लेषण। आप जटिल व्यावहारिक स्थितियों को कैसे संभालते हैं, जैसे कि चिकित्सा परामर्श या नौकरी के साक्षात्कार?',
      },
      {
        speaker: 'You',
        text: 'I can clearly describe symptoms to a doctor, articulate my strengths in job interviews, and communicate food allergies at restaurants with confidence.',
        translation: 'मैं डॉक्टर को स्पष्ट रूप से लक्षणों का वर्णन कर सकता हूँ, नौकरी के साक्षात्कारों में अपनी ताकत को व्यक्त कर सकता हूँ, और आत्मविश्वास के साथ रेस्तरां में भोजन की एलर्जी के बारे में बता सकता हूँ।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_75_1',
      type: 'fill_blank',
      prompt: 'Complete the tense synthesis: "Last year I ___ from university, and now I am working in tech."',
      options: [
        { id: 'opt_1', text: 'graduated', isCorrect: true },
        { id: 'opt_2', text: 'graduate', isCorrect: false },
        { id: 'opt_3', text: 'graduating', isCorrect: false },
      ],
      correctAnswer: 'graduated',
      explanation: 'Past tense "graduated" for "Last year".',
    },
    {
      id: 'cp_a1_75_2',
      type: 'multiple_choice',
      prompt: 'Which sentence synthesizes past background with future ambition correctly?',
      options: [
        { id: 'opt_1', text: 'I studied computer science in 2023, and I am going to master A2 English next.', isCorrect: true },
        { id: 'opt_2', text: 'I study last year and next year I was study A2.', isCorrect: false },
        { id: 'opt_3', text: 'I did study tomorrow and am study yesterday.', isCorrect: false },
      ],
      correctAnswer: 'I studied computer science in 2023, and I am going to master A2 English next.',
      explanation: 'Perfect tense consistency.',
    },
    {
      id: 'cp_a1_75_3',
      type: 'multiple_choice',
      prompt: 'How do you summarize your A1 conversational capability confidently?',
      options: [
        { id: 'opt_1', text: 'I can confidently communicate in workplace, travel, dining, and daily civic situations.', isCorrect: true },
        { id: 'opt_2', text: 'I speak all words of whole language 100%.', isCorrect: false },
        { id: 'opt_3', text: 'English is finished in my head completely.', isCorrect: false },
      ],
      correctAnswer: 'I can confidently communicate in workplace, travel, dining, and daily civic situations.',
      explanation: 'Balanced, accurate, and professional self-assessment.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_75_1',
      scenarioContext: 'Summarize your A1 journey and competence.',
      prompt: 'Build: "I can communicate confidently in daily English."',
      targetStructure: 'I can communicate confidently in daily English',
      wordBank: ['I', 'can', 'communicate', 'confidently', 'in', 'daily', 'English', 'communicating', 'am', 'to'],
      acceptableSolutions: [
        'I can communicate confidently in daily English',
        'I can communicate confidently in daily English.',
      ],
      explanation: 'Fluency declaration.',
    },
    {
      id: 'sc_a1_75_2',
      scenarioContext: 'Express future learning intentions.',
      prompt: 'Build: "I look forward to continuing into CEFR A2."',
      targetStructure: 'I look forward to continuing into CEFR A2',
      wordBank: ['I', 'look', 'forward', 'to', 'continuing', 'into', 'CEFR', 'A2', 'continue', 'am', 'for'],
      acceptableSolutions: [
        'I look forward to continuing into CEFR A2',
        'I look forward to continuing into CEFR A2.',
      ],
      explanation: 'Future milestone ambition.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_75_1',
      turnIndex: 1,
      partnerPrompt:
        'Good afternoon Alex! Welcome to your A1 Capstone Oral Evaluation. Over 75 lessons, you have built foundational English skills across everyday life, work, travel, and civic interactions. To begin, how would you summarize yourself, your daily routine, and what you are currently working on?',
      partnerAudioText:
        'Good afternoon Alex! Welcome to your A1 Capstone Oral Evaluation. Over 75 lessons, you have built foundational English skills across everyday life, work, travel, and civic interactions. To begin, how would you summarize yourself, your daily routine, and what you are currently working on?',
      partnerQuestionHindi:
        'शुभ दोपहर एलेक्स! आपके A1 कैपस्टोन मौखिक मूल्यांकन में आपका स्वागत है। 75 पाठों में, आपने दैनिक जीवन, काम, यात्रा और नागरिक बातचीत में मूलभूत अंग्रेजी कौशल का निर्माण किया है। शुरुआत करने के लिए, आप अपना, अपनी दैनिक दिनचर्या का और वर्तमान में आप जिस पर काम कर रहे हैं उसका सारांश कैसे देंगे?',
      expectedFunction: 'Synthesize Identity, Daily Routine & Current Projects (Present Simple + Present Continuous)',
      contextGoal:
        'Introduce yourself, describe your typical morning routine, and explain that you are currently working on responsive web applications and collaborating with agile teams.',
      targetVocabulary: ['good afternoon Dr. Charlotte', 'wake up at seven', 'commute by train', 'currently working on', 'collaborating with my team'],
      suggestedResponses: [
        {
          label: 'Capstone Mastery',
          text: 'Good afternoon Dr. Charlotte! I live in the UK and work as a software developer. Typically, I wake up at 7:00 AM, commute to the office by train, and collaborate with my team. Currently, I am designing responsive user interfaces and preparing client presentations.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Identity, Routine & Current Work',
          patterns: [
            'live in',
            'work',
            'wake up',
            'routine',
            'currently working',
            'collaborat',
            'team',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'capstone_broken_tense_error',
          pattern: /\bi living and I wake yesterday\b/i,
          errorType: 'grammar',
          message: 'Ensure clear tense agreement: "I live... I wake up... I am currently working on...".',
          correctionPattern: 'I live in the UK and I am currently working on web projects.',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_75_1',
        type: 'fill_blank',
        prompt: 'Choose the correct continuous verb: "I am currently ___ on web software."',
        options: [
          { id: 'opt_1', text: 'working', isCorrect: true },
          { id: 'opt_2', text: 'work', isCorrect: false },
          { id: 'opt_3', text: 'worked', isCorrect: false },
        ],
        correctAnswer: 'working',
        explanation: 'Present Continuous "am working".',
      },
    },
    {
      id: 'turn_a1_75_2',
      turnIndex: 2,
      partnerPrompt:
        'Excellent control of present routines and ongoing tasks. Now, let’s test your practical travel and dining communication: imagine you are traveling to a new city for a conference. How would you book a train ticket, check in to your hotel, and handle a dietary allergy at dinner?',
      partnerAudioText:
        'Excellent control of present routines and ongoing tasks. Now, let’s test your practical travel and dining communication: imagine you are traveling to a new city for a conference. How would you book a train ticket, check in to your hotel, and handle a dietary allergy at dinner?',
      partnerQuestionHindi:
        'वर्तमान दिनचर्या और चल रहे कार्यों पर उत्कृष्ट नियंत्रण। अब, आइए आपके व्यावहारिक यात्रा और भोजन संचार का परीक्षण करें: कल्पना करें कि आप एक सम्मेलन के लिए एक नए शहर की यात्रा कर रहे हैं। आप ट्रेन का टिकट कैसे बुक करेंगे, अपने होटल में चेक इन कैसे करेंगे, और रात के खाने में आहार संबंधी एलर्जी को कैसे संभालेंगे?',
      expectedFunction: 'Demonstrate Travel, Hotel Check-In & Restaurant Allergy Skills (Units 4–5 synthesis)',
      contextGoal:
        'Explain how you request a return train ticket with window seat, check into a hotel room under your name, and notify a server about a peanut allergy with dressing on the side.',
      targetVocabulary: ['return train ticket', 'check in under my reservation', 'quiet room on high floor', 'allergic to peanuts', 'dressing on the side'],
      suggestedResponses: [
        {
          label: 'Capstone Mastery',
          text: 'At the station, I ask for a return ticket with a window seat. At the hotel, I check in under my reservation name and request a quiet room on a higher floor. At dinner, I clearly inform the server: "I am allergic to peanuts, and could I have the dressing on the side, please?"',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Travel, Hotel & Dining Synthesis',
          patterns: [
            'ticket',
            'hotel',
            'reservation',
            'check in',
            'allergic',
            'peanuts',
            'dressing on the side',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_75_2',
        type: 'multiple_choice',
        prompt: 'Which sentence demonstrates seamless situational dining communication?',
        options: [
          { id: 'opt_1', text: 'I inform the server that I am allergic to nuts and request dressing on the side.', isCorrect: true },
          { id: 'opt_2', text: 'I am eat nothing because food makes scare.', isCorrect: false },
          { id: 'opt_3', text: 'Waiter give me food no poison.', isCorrect: false },
        ],
        correctAnswer: 'I inform the server that I am allergic to nuts and request dressing on the side.',
        explanation: 'Clear and natural English.',
      },
    },
    {
      id: 'turn_a1_75_3',
      turnIndex: 3,
      partnerPrompt:
        'Superb practical application! What about high-stakes situations: how would you handle calling 999 in an emergency, describing symptoms at a pharmacy, or communicating during a formal job interview?',
      partnerAudioText:
        'Superb practical application! What about high-stakes situations: how would you handle calling 999 in an emergency, describing symptoms at a pharmacy, or communicating during a formal job interview?',
      partnerQuestionHindi:
        'शानदार व्यावहारिक अनुप्रयोग! उच्च-दांव वाली स्थितियों के बारे में क्या: आप किसी आपात स्थिति में 999 पर कॉल करने, फार्मेसी में लक्षणों का वर्णन करने, या औपचारिक नौकरी के साक्षात्कार के दौरान बातचीत को कैसे संभालेंगे?',
      expectedFunction: 'Demonstrate Emergency, Medical & Interview Proficiency (Units 3–5 high-stakes mastery)',
      contextGoal:
        'Explain calling 999 with exact locations and victim condition, describing ailments at a pharmacy, and presenting career strengths and 3-year goals in an interview.',
      targetVocabulary: ['call emergency 999 for ambulance', 'exact street location', 'sore throat and dosage', 'interview strengths', 'problem-solving and goals'],
      suggestedResponses: [
        {
          label: 'Capstone Mastery',
          text: 'In an emergency, I call 999, request an ambulance, and give our exact street location and patient condition. At a pharmacy, I describe symptoms like a headache or sore throat and ask for dosage instructions. In an interview, I articulate my strengths in problem-solving and discuss my three-year career goals.',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Emergency, Health & Interview Synthesis',
          patterns: [
            '999',
            'ambulance',
            'location',
            'pharmacy',
            'symptoms',
            'interview',
            'strengths',
            'goals',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_75_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "In an emergency, I state the exact ___ and patient status."',
        options: [
          { id: 'opt_1', text: 'location', isCorrect: true },
          { id: 'opt_2', text: 'weather', isCorrect: false },
          { id: 'opt_3', text: 'colour', isCorrect: false },
        ],
        correctAnswer: 'location',
        explanation: '"location" is critical for emergency dispatchers.',
      },
    },
    {
      id: 'turn_a1_75_4',
      turnIndex: 4,
      partnerPrompt:
        'Alex, you have demonstrated comprehensive CEFR A1 communicative competence across all five units! You speak with clarity, precision, and confidence. What are your next learning ambitions as you graduate into CEFR A2?',
      partnerAudioText:
        'Alex, you have demonstrated comprehensive CEFR A1 communicative competence across all five units! You speak with clarity, precision, and confidence. What are your next learning ambitions as you graduate into CEFR A2?',
      partnerQuestionHindi:
        'एलेक्स, आपने सभी पांच इकाइयों में व्यापक CEFR A1 संचार क्षमता का प्रदर्शन किया है! आप स्पष्टता, सटीकता और आत्मविश्वास के साथ बोलते हैं। जैसे ही आप CEFR A2 में स्नातक होते हैं, आपकी अगली सीखने की महत्वाकांक्षाएं क्या हैं?',
      expectedFunction: 'Celebrate A1 Milestone, Express Gratitude & State CEFR A2 Ambitions',
      contextGoal:
        'Thank Dr. Charlotte, celebrate completing all 75 A1 lessons, and state your goal to advance into CEFR A2 to master complex workplace negotiations, storytelling, and fluent debates.',
      targetVocabulary: ['thank you Dr. Charlotte', 'completed all 75 lessons', 'major milestone', 'graduate into CEFR A2', 'fluent debates and storytelling'],
      suggestedResponses: [
        {
          label: 'Capstone Mastery',
          text: 'Thank you so much Dr. Charlotte! Completing all 75 A1 lessons is a major milestone for me. As I graduate into CEFR A2, my goal is to master complex workplace negotiations, engage in rich storytelling, and build deeper international connections. It has been an incredible learning journey!',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Milestone Celebration & A2 Ambitions',
          patterns: [
            'thank you',
            'charlotte',
            'milestone',
            '75 lessons',
            'cefr a2',
            'a2',
            'graduate',
            'ambition',
            'journey',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_75_4',
        type: 'multiple_choice',
        prompt: 'Which response concludes the A1 Capstone evaluation with poise and eloquence?',
        options: [
          { id: 'opt_1', text: 'Thank you Dr. Charlotte! I am excited to graduate A1 and begin CEFR A2. Goodbye!', isCorrect: true },
          { id: 'opt_2', text: 'I am pass test give me certificate right now.', isCorrect: false },
          { id: 'opt_3', text: 'English done I go away.', isCorrect: false },
        ],
        correctAnswer: 'Thank you Dr. Charlotte! I am excited to graduate A1 and begin CEFR A2. Goodbye!',
        explanation: 'Warm, articulate, and celebratory.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 85,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 75,
  },
};
