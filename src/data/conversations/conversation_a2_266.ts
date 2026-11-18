import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_266: ConversationDefinition = {
  id: 'conv_a2_266',
  title: 'Writing Connected Messages, Emails & Short Narratives',
  cefr: 'A2',
  unitId: 'unit_a2_18',
  lessonLinks: ['lesson_a2_18_266'],
  estimatedMinutes: 5,
  scenario:
    'You are drafting an email inquiry to Ms. Robinson, the admissions coordinator at the Metro Community Arts Institute. With your writing tutor Daniel, you construct a professional, well-structured message: introducing yourself, inquiring about the schedule and prerequisites for the evening Digital Photography course, requesting tuition fee details, and closing with standard formal conventions.',
  communicativeGoals: [
    'Compose clear, connected formal emails and inquiries in A2 English',
    'Use formal email salutations and openers: "Dear Ms. Robinson,", "I am writing to inquire about..."',
    'Link specific inquiries using connectors: "First of all, could you confirm...", "In addition, I would like to know if..."',
    'Apply professional email sign-offs: "I look forward to hearing from you.", "Sincerely, / Best regards,"',
  ],
  canDoStatements: [
    'Can write a polite formal email asking for information about a course or event',
    'Can connect multiple specific questions using cohesive transition markers',
    'Can use appropriate formal greetings, polite requests, and email closings',
  ],
  characters: [
    {
      id: 'char_daniel_tutor',
      name: 'Daniel',
      role: 'Writing & Communication Tutor',
      avatar: '✉️',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'inquire',
        ipa: '/ɪnˈkwaɪə/',
        partOfSpeech: 'verb',
        meaning: 'To ask for information from someone',
        exampleSentence: 'I am writing to inquire about the course registration deadline.',
        translations: { hi: 'पूछताछ करना / जानकारी मांगना (इन्क्वायर)' },
      },
      {
        word: 'prerequisite',
        ipa: '/ˌpriːˈrekwəzɪt/',
        partOfSpeech: 'noun',
        meaning: 'A thing that is required as a prior condition for something else to happen or exist',
        exampleSentence: 'Are there any prior prerequisites or equipment requirements for beginners?',
        translations: { hi: 'पूर्वापेक्षा / अनिवार्य पूर्व-शर्त (प्रीरेक्विज़िट)' },
      },
      {
        word: 'tuition',
        ipa: '/tjuːˈɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'A sum of money charged for teaching or instruction by a school, college, or university',
        exampleSentence: 'Could you please provide details regarding tuition fees and payment methods?',
        translations: { hi: 'शिक्षण शुल्क / फीस (ट्यूशन)' },
      },
      {
        word: 'regards',
        ipa: '/rɪˈɡɑːdz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'Best wishes (used to express good wishes at the end of a letter or email)',
        exampleSentence: 'Please close the email with "Best regards" followed by your full name.',
        translations: { hi: 'सादर / शुभकामनाएँ (रिगार्ड्स)' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'Dear Ms. Robinson, I am writing to inquire about...',
        functionCategory: 'Formal opening and statement of purpose',
        exampleSentence: 'Dear Ms. Robinson, I am writing to inquire about the evening Digital Photography course.',
      },
      {
        phrase: 'First of all, could you please confirm if...?',
        functionCategory: 'Introducing the primary inquiry',
        exampleSentence: 'First of all, could you please confirm if classes are held on Tuesdays and Thursdays?',
      },
      {
        phrase: 'In addition, I would be grateful if you could clarify...',
        functionCategory: 'Adding a secondary inquiry politely',
        exampleSentence: 'In addition, I would be grateful if you could clarify the total tuition fee and registration deadline.',
      },
      {
        phrase: 'Thank you for your time and assistance. Best regards,',
        functionCategory: 'Formal appreciation and closing sign-off',
        exampleSentence: 'Thank you for your time and assistance. Best regards, Alex Chen.',
      },
    ],
    grammar: {
      title: 'Formal Email Syntax: Indirect Questions & Politeness Modals',
      conceptExplanation:
        '1. Purpose opening: "I am writing to inquire about + [Noun Phrase]"\n2. Indirect question word order: "Could you tell me what the schedule is?" (not "what is the schedule")\n3. Linking markers: "First of all...", "Secondly...", "In addition...", "Furthermore..."\n4. Closing formula: "I look forward to hearing from you soon. Sincerely, / Best regards,"',
      patternFormula: 'Dear [Name], I am writing to [Purpose]. First, [Inquiry 1]. In addition, [Inquiry 2]. Thank you for your help. Best regards, [Your Name].',
      contrastExamples: [
        {
          incorrect: 'Hi Robinson, tell me course price and time.',
          correct: 'Dear Ms. Robinson, could you please provide details about the course fees and weekly schedule?',
          explanation: 'Use formal salutation and polite modal phrasing in professional correspondence.',
        },
        {
          incorrect: 'Could you tell me when does the course start?',
          correct: 'Could you tell me when the course starts?',
          explanation: 'Indirect questions use affirmative word order (subject + verb, without "does").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Daniel',
        text: 'Let’s review the email draft you want to send to the admissions office. How do you plan to open your message?',
        translation: 'आइए उस ईमेल ड्राफ्ट की समीक्षा करें जिसे आप प्रवेश कार्यालय को भेजना चाहते हैं। आप अपने संदेश को कैसे शुरू करने की योजना बना रहे हैं?',
      },
      {
        speaker: 'Learner',
        text: 'Dear Ms. Robinson, I hope this email finds you well. I am writing to inquire about the upcoming evening course in Digital Photography starting next month.',
        translation: 'आदरणीय सुश्री रॉबिन्सन, मुझे आशा है कि यह ईमेल आपको सकुशल मिलेगा। मैं अगले महीने से शुरू होने वाले डिजिटल फोटोग्राफी के आगामी शाम के पाठ्यक्रम के बारे में पूछताछ करने के लिए लिख रहा हूँ।',
      },
      {
        speaker: 'Daniel',
        text: 'Excellent opening! Now, what specific questions do you want to ask in the body paragraph?',
        translation: 'उत्कृष्ट शुरुआत! अब, आप मुख्य पैराग्राफ में कौन से विशिष्ट प्रश्न पूछना चाहते हैं?',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_266_1',
      type: 'fill_blank',
      prompt: 'Complete the formal opener: "Dear Ms. Robinson, I am writing to ______ (inquire / inquiring / inquiry) about the photography course."',
      options: [
        { id: 'opt_1', text: 'inquire', isCorrect: true },
        { id: 'opt_2', text: 'inquiring', isCorrect: false },
        { id: 'opt_3', text: 'inquiry', isCorrect: false },
      ],
      correctAnswer: 'inquire',
      explanation: 'Infinitive "to inquire" follows the verb phrase "writing".',
    },
    {
      id: 'cp_266_2',
      type: 'multiple_choice',
      prompt: 'Which indirect question is formatted with correct English word order for a formal email?',
      options: [
        { id: 'opt_1', text: 'Could you please let me know what equipment is required for the class?', isCorrect: true },
        { id: 'opt_2', text: 'Could you please let me know what equipment is require the class?', isCorrect: false },
        { id: 'opt_3', text: 'Could you please tell what is equipment required?', isCorrect: false },
      ],
      correctAnswer: 'Could you please let me know what equipment is required for the class?',
      explanation: 'Indirect question clause uses subject + verb order ("what equipment is required").',
    },
    {
      id: 'cp_266_3',
      type: 'chunk_order',
      prompt: 'Order the chunks: [I look forward to hearing / from you soon regarding / my registration application]',
      correctAnswer: 'I look forward to hearing from you soon regarding my registration application',
      explanation: 'Formal closing anticipation phrase + prepositional specification.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_266_1',
      prompt: 'Construct a sentence opening the email and stating the purpose of inquiring about the course schedule.',
      scenarioContext: 'Drafting the email opening.',
      targetStructure: 'I am writing to inquire about the evening course schedule and prerequisites.',
      wordBank: ['I am writing to', 'inquire about the', 'evening course schedule', 'and prerequisites.', 'write for inquiring', 'prerequisites of schedule'],
      acceptableSolutions: [
        'I am writing to inquire about the evening course schedule and prerequisites.',
        'I am writing to inquire about the course schedule and prerequisites.',
      ],
      explanation: 'Formulaic formal opening + compound noun phrase.',
    },
    {
      id: 'sc_266_2',
      prompt: 'Construct a sentence asking if beginner students need to bring their own camera.',
      scenarioContext: 'Formulating a specific inquiry.',
      targetStructure: 'Could you please clarify if beginners need to bring their own camera?',
      wordBank: ['Could you please clarify', 'if beginners need', 'to bring their', 'own camera?', 'clarify that beginner', 'camera own bring'],
      acceptableSolutions: [
        'Could you please clarify if beginners need to bring their own camera?',
        'Could you please let me know if beginners need to bring their own camera?',
      ],
      explanation: 'Polite modal request + embedded conditional clause with infinitive.',
    },
  ],
  turns: [
    {
      id: 'turn_266_1',
      turnIndex: 1,
      partnerPrompt:
        'Hello! Let’s work on your formal email draft for the Metro Arts Institute. How will you open the email to Ms. Robinson, and what is your clear statement of purpose?',
      partnerAudioText:
        'Hello! Let’s work on your formal email draft for the Metro Arts Institute. How will you open the email to Ms. Robinson, and what is your clear statement of purpose?',
      partnerQuestionHindi:
        'नमस्ते! आइए मेट्रो आर्ट्स इंस्टीट्यूट के लिए आपके औपचारिक ईमेल ड्राफ्ट पर काम करें। आप सुश्री रॉबिन्सन को ईमेल कैसे शुरू करेंगे, और आपका स्पष्ट उद्देश्य क्या है?',
      expectedFunction: 'Drafting a professional salutation, polite opener, and stating the inquiry purpose (evening Digital Photography course)',
      contextGoal: 'Write: "Dear Ms. Robinson,", polite greeting, and state you are writing to inquire about the schedule and registration for next month’s Digital Photography course',
      targetVocabulary: ['Dear Ms. Robinson', 'I hope this email finds you well', 'I am writing to inquire about', 'evening Digital Photography course', 'starting next month', 'registration details'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Dear Ms. Robinson,\n\nI hope this email finds you well. I am writing to inquire about the upcoming evening course in Digital Photography starting next month at the Metro Arts Institute. I am very interested in enrolling in this program.',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Dear Ms. Robinson,\n\nI am writing to ask for information regarding the evening Digital Photography course scheduled for next month. Could you please share the registration details?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'salutation',
          patterns: ['dear ms. robinson', 'dear ms robinson', 'ms. robinson', 'ms robinson', 'dear coordinator'],
          required: true,
        },
        {
          name: 'purpose_statement',
          patterns: ['writing to inquire', 'writing to ask', 'photography', 'course', 'digital photography', 'next month', 'registration', 'enroll'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_266_1_hi_ms_robinson',
          pattern: /hey robinson\b|hi robinson\b/i,
          errorType: 'interaction',
          message: 'In a formal email to an admissions coordinator, use "Dear Ms. Robinson,".',
          correctionPattern: 'Dear Ms. Robinson, I am writing to inquire about...',
        },
      ],
      remediationPractice: {
        id: 'rem_266_1',
        type: 'fill_blank',
        prompt: 'Fill in: "______ (Dear / Hey) Ms. Robinson, I am writing to inquire about the course."',
        options: [
          { id: 'r1', text: 'Dear', isCorrect: true },
          { id: 'r2', text: 'Hey', isCorrect: false },
        ],
        correctAnswer: 'Dear',
        explanation: 'Use "Dear [Title] [Last Name]" for formal business correspondence.',
      },
    },
    {
      id: 'turn_266_2',
      turnIndex: 2,
      partnerPrompt:
        'Great start. Now, what two or three concrete questions will you include in the body paragraph regarding the weekly schedule, equipment requirements, and tuition fees?',
      partnerAudioText:
        'Great start. Now, what two or three concrete questions will you include in the body paragraph regarding the weekly schedule, equipment requirements, and tuition fees?',
      partnerQuestionHindi:
        'शानदार शुरुआत। अब, आप साप्ताहिक कार्यक्रम, उपकरण आवश्यकताओं और शिक्षण शुल्क के संबंध में मुख्य पैराग्राफ में कौन से दो या तीन ठोस प्रश्न शामिल करेंगे?',
      expectedFunction: 'Connecting 2-3 specific inquiries with transition linkers (First of all, In addition, Furthermore)',
      contextGoal: 'Ask: 1. Days and hours of classes, 2. If students need their own DSLR camera or if equipment is provided, 3. Total tuition fee and payment deadline',
      targetVocabulary: ['First of all', 'could you confirm the weekly class times', 'In addition', 'are students required to bring their own DSLR camera', 'tuition fee and payment deadline', 'is equipment provided'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'First of all, could you please confirm the exact days and hours of the weekly evening classes? In addition, I would like to know if beginner students are required to bring their own DSLR camera or if the institute provides equipment. Furthermore, could you let me know the total tuition fee and the final registration deadline?',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'First, what days and times are the classes held? Second, do we need our own camera or can we borrow one from the institute? Lastly, how much is the tuition fee and when is the payment due?',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'schedule_and_equipment_questions',
          patterns: ['first', 'schedule', 'days', 'hours', 'times', 'camera', 'dslr', 'equipment', 'provided', 'bring'],
          required: true,
        },
        {
          name: 'fee_and_deadline_questions',
          patterns: ['in addition', 'furthermore', 'tuition', 'fee', 'cost', 'price', 'payment', 'deadline', 'due'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_266_2_how_much_cost_verb',
          pattern: /how much is cost the course/i,
          errorType: 'grammar',
          message: 'Say "How much does the course cost?" or "What is the total tuition fee?".',
          correctionPattern: 'Could you let me know what the total tuition fee is?',
        },
      ],
      remediationPractice: {
        id: 'rem_266_2',
        type: 'multiple_choice',
        prompt: 'Which indirect question is appropriate for a formal email?',
        options: [
          { id: 'r1', text: 'Could you please confirm what equipment is provided during the workshop?', isCorrect: true },
          { id: 'r2', text: 'Tell me what is equipment provided in workshop please.', isCorrect: false },
        ],
        correctAnswer: 'Could you please confirm what equipment is provided during the workshop?',
        explanation: 'Polite modal request + indirect clause word order.',
      },
    },
    {
      id: 'turn_266_3',
      turnIndex: 3,
      partnerPrompt:
        'The body paragraph is clear and polite! Now, how will you conclude your email with professional appreciation, contact readiness, and an appropriate formal sign-off?',
      partnerAudioText:
        'The body paragraph is clear and polite! Now, how will you conclude your email with professional appreciation, contact readiness, and an appropriate formal sign-off?',
      partnerQuestionHindi:
        'मुख्य पैराग्राफ स्पष्ट और विनम्र है! अब, आप पेशेवर कृतज्ञता, संपर्क तत्परता और एक उपयुक्त औपचारिक हस्ताक्षर के साथ अपना ईमेल कैसे समाप्त करेंगे?',
      expectedFunction: 'Writing a formal conclusion: offering further information, expressing anticipation, and using formal sign-off ("Best regards, [Name]")',
      contextGoal: 'Write: "Thank you for your time and assistance. I look forward to hearing from you soon. Best regards, [Your Name]"',
      targetVocabulary: ['Thank you for your time and assistance', 'Please let me know if you need any additional information', 'I look forward to hearing from you soon', 'Sincerely', 'Best regards', 'Daniel'],
      suggestedResponses: [
        {
          label: 'Spontaneous Response',
          text: 'Thank you very much for your time and assistance. Please let me know if you need any additional details or background information from me. I look forward to hearing from you soon.\n\nBest regards,\nAlex Chen\nPhone: +1 555-0199',
          scaffoldingLevel: 'low',
        },
        {
          label: 'Structured Response',
          text: 'Thank you for your help. I look forward to receiving your response.\n\nSincerely,\nAlex Chen',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'thanks_and_anticipation',
          patterns: ['thank you', 'time', 'assistance', 'help', 'look forward to', 'hearing from you', 'response'],
          required: true,
        },
        {
          name: 'formal_signoff',
          patterns: ['best regards', 'sincerely', 'regards', 'alex', 'name'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'err_266_3_look_forward_to_hear',
          pattern: /look forward to hear from you/i,
          errorType: 'grammar',
          message: 'Say "I look forward to hearing from you" (gerund after "to").',
          correctionPattern: 'I look forward to hearing from you soon.',
        },
      ],
      remediationPractice: {
        id: 'rem_266_3',
        type: 'chunk_order',
        prompt: 'Order the chunks: [Thank you for your time / and I look forward to / hearing from you soon]',
        correctAnswer: 'Thank you for your time and I look forward to hearing from you soon',
        explanation: 'Closing appreciation clause + formal forward-looking clause.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 1,
    targetVocabularyCoveragePct: 75,
  },
};
