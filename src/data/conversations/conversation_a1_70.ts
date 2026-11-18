import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A1_70: ConversationDefinition = {
  id: 'conv_a1_70',
  title: 'Formal & Informal Emails, Inquiries & Professional Tone',
  cefr: 'A1',
  unitId: 'unit_a1_5',
  lessonLinks: ['lesson_a1_5_70'],
  estimatedMinutes: 5,
  scenario:
    'You are collaborating with your department mentor, Rachel Evans, to draft and polish an email inquiry to an international conference organizer in London. You discuss appropriate formal greetings, stating the inquiry purpose clearly, attaching your presentation outline document, and choosing a respectful professional sign-off.',
  communicativeGoals: [
    'Distinguish between formal business email register and informal conversational register ("Dear Ms. Evans" vs. "Hi Rachel")',
    'State email purposes clearly with standard written formulas ("I am writing to inquire about...", "Please find attached...")',
    'Reference email attachments and follow-up requests ("I have attached the presentation summary for your review")',
    'Choose appropriate formal sign-offs ("Sincerely", "Kind regards", "Best regards")',
  ],
  canDoStatements: [
    'Can structure and write a formal email inquiry in English (CEFR A1.2)',
    'Can use appropriate written salutations and professional closings',
    'Can mention attachments and request follow-up actions',
  ],
  characters: [
    {
      id: 'char_rachel_mentor',
      name: 'Rachel Evans',
      role: 'Senior Department Mentor',
      avatar: '✉️',
      voiceGender: 'female',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'inquiry',
        ipa: '/ɪnˈkwaɪəri/',
        partOfSpeech: 'noun',
        meaning: 'An act of asking for information or making an official request',
        exampleSentence: 'I am writing this formal inquiry regarding conference registration deadlines.',
        translations: { hi: 'पूछताछ / औपचारिक अनुरोध' },
      },
      {
        word: 'attachment',
        ipa: '/əˈtætʃmənt/',
        partOfSpeech: 'noun',
        meaning: 'An extra file (such as a document or image) sent along with an email message',
        exampleSentence: 'Please find the project summary in the email attachment.',
        translations: { hi: 'संलग्नक / अटैचमेंट' },
      },
      {
        word: 'salutation',
        ipa: '/ˌsæljuːˈteɪʃən/',
        partOfSpeech: 'noun',
        meaning: 'A greeting in a letter or email, such as "Dear Mr. Davis"',
        exampleSentence: 'Use a formal salutation like "Dear Dr. Watson" when writing to organizers.',
        translations: { hi: 'अभिवादन / संबोधन' },
      },
      {
        word: 'regards',
        ipa: '/rɪˈɡɑːrdz/',
        partOfSpeech: 'noun (plural)',
        meaning: 'Best wishes or polite greetings sent at the end of an email',
        exampleSentence: 'Sign off your formal business email with "Kind regards" or "Sincerely".',
        translations: { hi: 'सादर / शुभकामनाएं' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'I am writing to inquire about...',
        functionCategory: 'Stating Purpose',
        exampleSentence: 'I am writing to inquire about the speaker registration deadline.',
      },
      {
        phrase: 'Please find attached...',
        functionCategory: 'Referencing Attachment',
        exampleSentence: 'Please find attached our conference presentation proposal and slides.',
      },
      {
        phrase: 'Thank you for your time and assistance.',
        functionCategory: 'Polite Courtesy',
        exampleSentence: 'Thank you for your time and assistance with our inquiry.',
      },
      {
        phrase: 'I look forward to hearing from you.',
        functionCategory: 'Anticipating Reply',
        exampleSentence: 'I look forward to hearing from you at your earliest convenience.',
      },
    ],
    grammar: {
      title: 'Formal Email Conventions: I am writing to [Verb] / Please find attached [Noun]',
      conceptExplanation:
        'Formal emails open with "Dear [Title] [Last Name],". State the email purpose with "I am writing to [inquire / inform / request]". Mention files with "Please find attached [File]". Close with "Kind regards," or "Sincerely,".',
      patternFormula: 'Dear [Title + Last Name], I am writing to inquire about [Topic]. Please find attached [File]. Kind regards, [Name]',
      contrastExamples: [
        {
          incorrect: 'Hey man, send me conference info fast.',
          correct: 'Dear Mr. Clark, I am writing to inquire about the conference schedule.',
          explanation: 'Use formal salutations and standard email formulas for professional inquiries.',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Rachel',
        text: 'Good morning Alex! Let us review your draft email to the London Tech Conference committee. How should we open the email formally?',
        translation: 'शुभ प्रभात एलेक्स! आइए लंदन टेक सम्मेलन समिति को आपके मसौदा ईमेल की समीक्षा करें। हमें ईमेल को औपचारिक रूप से कैसे शुरू करना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'Good morning Rachel! We should open with "Dear Conference Committee Members," or "Dear Ms. Watson," followed by our clear inquiry statement.',
        translation: 'शुभ प्रभात राचेल! हमें "प्रिय सम्मेलन समिति के सदस्य," या "प्रिय सुश्री वाटसन," के साथ शुरू करना चाहिए, जिसके बाद हमारा स्पष्ट पूछताछ बयान होना चाहिए।',
      },
      {
        speaker: 'Rachel',
        text: 'Exactly right. And how should you phrase the opening sentence to state why we are writing?',
        translation: 'बिल्कुल सही। और हम क्यों लिख रहे हैं यह बताने के लिए आपको शुरुआती वाक्य कैसे बनाना चाहिए?',
      },
      {
        speaker: 'You',
        text: 'I will write: "I am writing to inquire about the presentation schedule and submit our workshop proposal."',
        translation: 'मैं लिखूंगा: "मैं प्रस्तुति कार्यक्रम के बारे में पूछताछ करने और हमारे कार्यशाला प्रस्ताव को प्रस्तुत करने के लिए लिख रहा हूँ।"',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a1_70_1',
      type: 'fill_blank',
      prompt: 'Complete the formal email opening sentence: "I am writing to ___ about the workshop schedule."',
      options: [
        { id: 'opt_1', text: 'inquire', isCorrect: true },
        { id: 'opt_2', text: 'inquired', isCorrect: false },
        { id: 'opt_3', text: 'inquiring', isCorrect: false },
      ],
      correctAnswer: 'inquire',
      explanation: 'Infinitive "to inquire" after "I am writing".',
    },
    {
      id: 'cp_a1_70_2',
      type: 'multiple_choice',
      prompt: 'Which sentence references an attached document correctly?',
      options: [
        { id: 'opt_1', text: 'Please find attached the presentation summary for your review.', isCorrect: true },
        { id: 'opt_2', text: 'Look file is stick on email bottom now.', isCorrect: false },
        { id: 'opt_3', text: 'Attachment document inside letter here.', isCorrect: false },
      ],
      correctAnswer: 'Please find attached the presentation summary for your review.',
      explanation: 'Standard professional email formula.',
    },
    {
      id: 'cp_a1_70_3',
      type: 'multiple_choice',
      prompt: 'Which closing sign-off is appropriate for a formal business inquiry?',
      options: [
        { id: 'opt_1', text: 'Kind regards,', isCorrect: true },
        { id: 'opt_2', text: 'Catch you later dude,', isCorrect: false },
        { id: 'opt_3', text: 'Bye bye forever,', isCorrect: false },
      ],
      correctAnswer: 'Kind regards,',
      explanation: 'Respectful and formal closing.',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a1_70_1',
      scenarioContext: 'State the purpose of your formal email.',
      prompt: 'Build: "I am writing to inquire about the schedule."',
      targetStructure: 'I am writing to inquire about the schedule',
      wordBank: ['I', 'am', 'writing', 'to', 'inquire', 'about', 'the', 'schedule', 'write', 'is', 'for'],
      acceptableSolutions: [
        'I am writing to inquire about the schedule',
        'I am writing to inquire about the schedule.',
      ],
      explanation: 'Formal email purpose statement.',
    },
    {
      id: 'sc_a1_70_2',
      scenarioContext: 'Reference your attached project document.',
      prompt: 'Build: "Please find attached our project proposal."',
      targetStructure: 'Please find attached our project proposal',
      wordBank: ['Please', 'find', 'attached', 'our', 'project', 'proposal', 'finding', 'is', 'at'],
      acceptableSolutions: [
        'Please find attached our project proposal',
        'Please find attached our project proposal.',
      ],
      explanation: 'Standard attachment formula.',
    },
  ],
  turns: [
    {
      id: 'turn_a1_70_1',
      turnIndex: 1,
      partnerPrompt:
        'Good morning Alex! Let’s review your draft email to the London Technology Conference organizers before sending it out. How should we format the subject line and formal salutation for Ms. Watson?',
      partnerAudioText:
        'Good morning Alex! Let’s review your draft email to the London Technology Conference organizers before sending it out. How should we format the subject line and formal salutation for Ms. Watson?',
      partnerQuestionHindi:
        'शुभ प्रभात एलेक्स! लंदन टेक्नोलॉजी सम्मेलन के आयोजकों को भेजने से पहले आइए सुश्री वाटसन के लिए आपके मसौदा ईमेल की समीक्षा करें। हमें विषय पंक्ति और औपचारिक अभिवादन को कैसे प्रारूपित करना चाहिए?',
      expectedFunction: 'Propose Subject Line & Formal Salutation (Subject: Inquiry & Dear Ms. Watson)',
      contextGoal:
        'Propose a clear subject line (e.g. "Subject: Conference Presentation Inquiry - Alex Sharma") and formal salutation ("Dear Ms. Watson,").',
      targetVocabulary: ['good morning Rachel', 'subject line', 'Conference Inquiry', 'Dear Ms. Watson', 'formal salutation'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'Good morning Rachel! I propose the subject line "Subject: Workshop Inquiry - Alex Sharma", and we should open with the formal salutation "Dear Ms. Watson,".',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Subject Line & Salutation',
          patterns: [
            'subject',
            'inquiry',
            'dear ms. watson',
            'dear ms watson',
            'salutation',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'hey_watson_error',
          pattern: /\bhey watson\b/i,
          errorType: 'interaction',
          message: 'Use formal salutation "Dear Ms. Watson,", not informal "Hey".',
          correctionPattern: 'Dear Ms. Watson,',
        },
      ],
      remediationPractice: {
        id: 'rem_a1_70_1',
        type: 'fill_blank',
        prompt: 'Choose the formal salutation: "___ Mr. Davis,"',
        options: [
          { id: 'opt_1', text: 'Dear', isCorrect: true },
          { id: 'opt_2', text: 'Hey', isCorrect: false },
          { id: 'opt_3', text: 'Yo', isCorrect: false },
        ],
        correctAnswer: 'Dear',
        explanation: '"Dear" is the standard formal salutation.',
      },
    },
    {
      id: 'turn_a1_70_2',
      turnIndex: 2,
      partnerPrompt:
        'That subject line is very professional. Now, how should we write the first body paragraph to explain why we are getting in touch with her?',
      partnerAudioText:
        'That subject line is very professional. Now, how should we write the first body paragraph to explain why we are getting in touch with her?',
      partnerQuestionHindi:
        'वह विषय पंक्ति बहुत पेशेवर है। अब, हमें यह समझाने के लिए पहला मुख्य पैराग्राफ कैसे लिखना चाहिए कि हम उनसे क्यों संपर्क कर रहे हैं?',
      expectedFunction: 'Draft Opening Purpose Sentence (I am writing to inquire about...)',
      contextGoal:
        'State that you are writing to inquire about the workshop presentation schedule and speaker guidelines for the upcoming conference.',
      targetVocabulary: ['I am writing to inquire about', 'presentation schedule', 'speaker guidelines', 'upcoming conference', 'workshop details'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'We should write: "I am writing to inquire about the presentation schedule and speaker guidelines for the upcoming London Technology Conference."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Opening Purpose Formula',
          patterns: [
            'writing to inquire',
            'inquire about',
            'presentation',
            'schedule',
            'speaker',
            'guidelines',
            'conference',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_70_2',
        type: 'multiple_choice',
        prompt: 'Which sentence states email purpose with correct formal tone?',
        options: [
          { id: 'opt_1', text: 'I am writing to inquire about the workshop guidelines.', isCorrect: true },
          { id: 'opt_2', text: 'I write email because I want talk about conference.', isCorrect: false },
          { id: 'opt_3', text: 'Email is coming for ask you thing.', isCorrect: false },
        ],
        correctAnswer: 'I am writing to inquire about the workshop guidelines.',
        explanation: 'Standard business English.',
      },
    },
    {
      id: 'turn_a1_70_3',
      turnIndex: 3,
      partnerPrompt:
        'Clear and courteous. We also need to mention the attached PDF outline of our workshop slides and ask her to review it. How should we phrase that attachment line?',
      partnerAudioText:
        'Clear and courteous. We also need to mention the attached PDF outline of our workshop slides and ask her to review it. How should we phrase that attachment line?',
      partnerQuestionHindi:
        'स्पष्ट और विनम्र। हमें अपनी कार्यशाला स्लाइड्स के संलग्न पीडीएफ आउटलाइन का उल्लेख करने और उनसे इसकी समीक्षा करने के लिए कहने की भी आवश्यकता है। हमें उस अटैचमेंट लाइन को कैसे लिखना चाहिए?',
      expectedFunction: 'Draft Attachment Reference & Action Request (Please find attached...)',
      contextGoal:
        'Write: "Please find attached our presentation outline for your review. Please let us know if any adjustments are needed."',
      targetVocabulary: ['please find attached', 'presentation outline', 'for your review', 'PDF document', 'let us know'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: 'I will write: "Please find attached our presentation outline in PDF format for your review. Please let us know if you need any additional details."',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Attachment Phrasing',
          patterns: [
            'please find attached',
            'attached',
            'presentation outline',
            'review',
            'additional details',
            'let us know',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_70_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Please find ___ the document."',
        options: [
          { id: 'opt_1', text: 'attached', isCorrect: true },
          { id: 'opt_2', text: 'attach', isCorrect: false },
          { id: 'opt_3', text: 'attaching', isCorrect: false },
        ],
        correctAnswer: 'attached',
        explanation: 'Past participle "attached".',
      },
    },
    {
      id: 'turn_a1_70_4',
      turnIndex: 4,
      partnerPrompt:
        'Spot on. Now to wrap up the email, how should we thank Ms. Watson, express that we anticipate her reply, and sign off?',
      partnerAudioText:
        'Spot on. Now to wrap up the email, how should we thank Ms. Watson, express that we anticipate her reply, and sign off?',
      partnerQuestionHindi:
        'बिल्कुल सही। अब ईमेल को समाप्त करने के लिए, हमें सुश्री वाटसन को कैसे धन्यवाद देना चाहिए, यह कैसे व्यक्त करना चाहिए कि हम उनके उत्तर की प्रतीक्षा कर रहे हैं, और हस्ताक्षर कैसे करना चाहिए?',
      expectedFunction: 'Draft Closing Anticipation & Formal Sign-Off (I look forward to hearing from you. Kind regards, Alex)',
      contextGoal:
        'Write: "Thank you for your time and assistance. I look forward to hearing from you. Kind regards, Alex Sharma".',
      targetVocabulary: ['thank you for your time', 'look forward to hearing from you', 'Kind regards', 'Sincerely', 'Alex Sharma'],
      suggestedResponses: [
        {
          label: 'Multi-Turn Independent',
          text: '"Thank you for your time and assistance. I look forward to hearing from you soon.\n\nKind regards,\nAlex Sharma"',
          scaffoldingLevel: 'low',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Email Sign-Off',
          patterns: [
            'thank you for your time',
            'look forward to hearing',
            'kind regards',
            'sincerely',
            'alex',
          ],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a1_70_4',
        type: 'multiple_choice',
        prompt: 'Which sign-off is standard and polite for professional emails?',
        options: [
          { id: 'opt_1', text: 'Kind regards, Alex Sharma', isCorrect: true },
          { id: 'opt_2', text: 'See ya later Alex', isCorrect: false },
          { id: 'opt_3', text: 'Done with text bye Alex', isCorrect: false },
        ],
        correctAnswer: 'Kind regards, Alex Sharma',
        explanation: 'Professional sign-off formula.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 4,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 70,
  },
};
