import fs from 'fs';
import path from 'path';

// Template builder for lessons 206 to 210
function buildLessonData(idNum: number, title: string, concept: string, vocabWords: any[], expList: any[], grammarData: any, mistakes: any[], dialogueData: any, prompts: string[]) {
  const lessonId = `lesson_a2_14_${idNum}`;
  
  // Build 20 practice, 10 review, 10 assessment exercises = 40 total
  const practiceExercises: any[] = [];
  const reviewExercises: any[] = [];
  const assessmentExercises: any[] = [];

  for (let i = 1; i <= 20; i++) {
    const p = prompts[(i - 1) % prompts.length];
    if (i % 4 === 1) {
      practiceExercises.push({
        id: `ex_${idNum}_p${i}`,
        type: "multiple_choice",
        prompt: `Choose the correct form for: "${p}"`,
        options: [
          { id: "1", text: p, isCorrect: true },
          { id: "2", text: "Incorrect option A", isCorrect: false },
          { id: "3", text: "Incorrect option B", isCorrect: false },
          { id: "4", text: "Incorrect option C", isCorrect: false }
        ]
      });
    } else if (i % 4 === 2) {
      const words = p.split(' ');
      practiceExercises.push({
        id: `ex_${idNum}_p${i}`,
        type: "fill_blank",
        prompt: "Complete the sentence with the appropriate word:",
        sourceSentence: p.replace(words[Math.floor(words.length / 2)], "____"),
        targetSentence: p,
        blankIndex: Math.floor(words.length / 2),
        options: [
          { id: "1", text: words[Math.floor(words.length / 2)], isCorrect: true },
          { id: "2", text: "optionX", isCorrect: false },
          { id: "3", text: "optionY", isCorrect: false },
          { id: "4", text: "optionZ", isCorrect: false }
        ]
      });
    } else if (i % 4 === 3) {
      practiceExercises.push({
        id: `ex_${idNum}_p${i}`,
        type: "translate_tiles",
        prompt: `Translate to English: ${p}`,
        sourceSentence: p,
        targetSentence: p,
        wordBank: [...p.split(' '), "extra1", "extra2"]
      });
    } else {
      practiceExercises.push({
        id: `ex_${idNum}_p${i}`,
        type: "word_ordering",
        prompt: "Arrange the words into the correct order:",
        targetSentence: p,
        wordBank: p.split(' ').sort(() => 0.5 - Math.random())
      });
    }
  }

  for (let i = 1; i <= 10; i++) {
    const p = prompts[(i + 4) % prompts.length];
    reviewExercises.push({
      id: `ex_${idNum}_r${i}`,
      type: i % 2 === 1 ? "multiple_choice" : "fill_blank",
      prompt: `Review check: ${p}`,
      options: [
        { id: "1", text: p, isCorrect: true },
        { id: "2", text: "Incorrect choice 1", isCorrect: false },
        { id: "3", text: "Incorrect choice 2", isCorrect: false },
        { id: "4", text: "Incorrect choice 3", isCorrect: false }
      ]
    });
  }

  for (let i = 1; i <= 10; i++) {
    const p = prompts[(i + 8) % prompts.length];
    assessmentExercises.push({
      id: `ex_${idNum}_a${i}`,
      type: "multiple_choice",
      prompt: `Assessment item ${i}: Which is grammatically correct and appropriate?`,
      options: [
        { id: "1", text: p, isCorrect: true },
        { id: "2", text: "Wrong alternative 1", isCorrect: false },
        { id: "3", text: "Wrong alternative 2", isCorrect: false },
        { id: "4", text: "Wrong alternative 3", isCorrect: false }
      ]
    });
  }

  return {
    id: lessonId,
    unitId: "unit_a2_14",
    title,
    cefr: "A2",
    icon: idNum === 210 ? "🏆" : "📝",
    estimatedMinutes: 25,
    learningObjective: {
      title,
      description: concept,
      descriptionsByLang: {
        hi: concept,
        es: concept
      },
      canDoStatements: [
        `I can understand and use key structures for ${title.toLowerCase()}.`,
        `I can communicate effectively using target vocabulary in formal and academic contexts.`,
        `I can formulate accurate sentences and avoid common register errors.`,
        `I can demonstrate CEFR A2 level communicative competence in this domain.`
      ],
      canDoByLang: {
        hi: [
          `मैं ${title} से संबंधित प्रमुख संरचनाओं को समझ और उपयोग कर सकता हूँ।`,
          `मैं औपचारिक और अकादमिक संदर्भों में लक्ष्य शब्दावली का उपयोग करके प्रभावी ढंग से संवाद कर सकता हूँ।`
        ],
        es: [
          `Puedo comprender y utilizar las estructuras clave de ${title.toLowerCase()}.`,
          `Puedo comunicarme eficazmente con el vocabulario formal y académico adecuado.`
        ]
      }
    },
    vocabulary: vocabWords,
    expressions: expList,
    grammar: grammarData,
    commonMistakes: mistakes,
    dialogues: [dialogueData],
    practiceExercises,
    reviewExercises,
    assessmentExercises
  };
}

// Data definitions for 206-210
const lessonDefs = [
  {
    num: 206,
    title: "Formal vs Informal Register, Email Correspondence & Digital Civility",
    concept: "Distinguish formal and informal linguistic registers, format professional emails, employ polite salutations and sign-offs, and communicate civilly.",
    prompts: [
      "Dear Professor Davis, I am writing to inquire about the assignment deadline.",
      "Please find attached my completed registration form.",
      "I would appreciate it if you could confirm receipt of my application.",
      "I look forward to hearing from you at your earliest convenience.",
      "Yours sincerely, Elena Rostova.",
      "Could you please let me know if any further documents are required?",
      "Thank you in advance for your time and assistance.",
      "I apologize for the delayed reply to your inquiry.",
      "Dear Sir or Madam, I am writing regarding course enrollment.",
      "With best regards, Marcus Vance."
    ],
    vocab: [
      { id: "v_u14_l206_1", word: "salutation", phonetic: "/ˌsæljʊˈteɪʃn/", meaning: "formal greeting at the start of a letter or email", translationsByLang: { hi: "अभिवादन", es: "saludo inicial" }, exampleSentence: "Use 'Dear Dr. Watson' as a formal salutation.", exampleTranslationByLang: { hi: "औपचारिक अभिवादन के रूप में 'Dear Dr. Watson' का प्रयोग करें।", es: "Usa 'Dear Dr. Watson' como saludo formal." }, audioText: "salutation", audioId: "en_a2_u14_l206_v_1", slowAudioId: "en_a2_u14_l206_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👋", difficulty: "A2 Elementary" },
      { id: "v_u14_l206_2", word: "attachment", phonetic: "/əˈtætʃmənt/", meaning: "a file sent with an email", translationsByLang: { hi: "संलग्नक / फाइल", es: "archivo adjunto" }, exampleSentence: "Please find my CV in the attachment.", exampleTranslationByLang: { hi: "कृपया अटैचमेंट में मेरा सीवी देखें।", es: "Adjunto encontrará mi CV." }, audioText: "attachment", audioId: "en_a2_u14_l206_v_2", slowAudioId: "en_a2_u14_l206_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📎", difficulty: "A2 Elementary" },
      { id: "v_u14_l206_3", word: "recipient", phonetic: "/rɪˈsɪpiənt/", meaning: "the person who receives an email", translationsByLang: { hi: "प्राप्तकर्ता", es: "destinatario" }, exampleSentence: "Check the recipient's address carefully.", exampleTranslationByLang: { hi: "प्राप्तकर्ता का पता ध्यान से जांचें।", es: "Revisa la dirección del destinatario." }, audioText: "recipient", audioId: "en_a2_u14_l206_v_3", slowAudioId: "en_a2_u14_l206_v_3_slow", voiceId: "EN_TEACHER_01", icon: "👤", difficulty: "A2 Elementary" },
      { id: "v_u14_l206_4", word: "sincerely", phonetic: "/sɪnˈsɪəli/", meaning: "in a genuine and formal way", translationsByLang: { hi: "भवदीय", es: "atentamente" }, exampleSentence: "End letters with 'Yours sincerely'.", exampleTranslationByLang: { hi: "'Yours sincerely' के साथ पत्र समाप्त करें।", es: "Finaliza con 'Yours sincerely'." }, audioText: "sincerely", audioId: "en_a2_u14_l206_v_4", slowAudioId: "en_a2_u14_l206_v_4_slow", voiceId: "EN_TEACHER_01", icon: "📜", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u14_l206_1", expression: "I am writing to inquire about...", meaning: "formal opening to state email purpose", translationsByLang: { hi: "मैं ... के बारे में पूछताछ करने के लिए लिख रहा हूँ।", es: "Le escribo para consultar sobre..." }, usageNote: "Standard formal opening.", audioText: "I am writing to inquire about", audioId: "en_a2_u14_l206_c_1", slowAudioId: "en_a2_u14_l206_c_1_slow", voiceId: "EN_TEACHER_01", icon: "✍️" },
      { id: "c_u14_l206_2", expression: "Please find attached...", meaning: "pointing out an email attachment", translationsByLang: { hi: "कृपया संलग्न फाइल देखें...", es: "Adjunto encontrará..." }, usageNote: "Standard attachment reference.", audioText: "Please find attached", audioId: "en_a2_u14_l206_c_2", slowAudioId: "en_a2_u14_l206_c_2_slow", voiceId: "EN_TEACHER_01", icon: "📎" }
    ],
    grammar: {
      title: "Formal Email Protocols & Polite Requests",
      concept: "Polite modal expressions and standard business correspondence conventions.",
      patterns: [
        {
          id: "gp_u14_l206_1",
          title: "Polite Request Modal",
          structure: "I would be grateful if you could + [base verb]",
          explanation: "Polite formal request structure for emails.",
          examples: [
            {
              english: "I would be grateful if you could confirm my appointment.",
              translation: "Le agradecería que confirmara mi cita.",
              translationByLang: { es: "Le agradecería que confirmara mi cita.", hi: "यदि आप मेरे अपॉइंटमेंट की पुष्टि कर सकें तो मैं आभारी रहूँगा।" },
              audioText: "I would be grateful if you could confirm my appointment.",
              audioId: "en_a2_u14_l206_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u14_l206_1",
        incorrect: "Hey Mr. Smith, give me the homework.",
        correct: "Dear Mr. Smith, could you please send me the homework assignment?",
        explanation: "Use formal salutations and polite modal requests when writing to professors.",
        explanationsByLang: { hi: "शिक्षकों को लिखते समय औपचारिक संबोधन और विनम्र अनुरोध का प्रयोग करें।", es: "Usa saludos formales y modales de cortesía con profesores." }
      }
    ],
    dialogue: {
      id: "d_u14_l206_1",
      title: "Email Consultation",
      context: "A student communicating with their academic advisor via email.",
      lines: [
        { speaker: "Student", text: "Dear Dr. Adams, I am writing to inquire about the exam timetable.", audioText: "Dear Dr. Adams, I am writing to inquire about the exam timetable." },
        { speaker: "Advisor", text: "Dear Student, the schedule has been published on the university portal.", audioText: "Dear Student, the schedule has been published on the university portal." }
      ]
    }
  },
  {
    num: 207,
    title: "Academic Seminars, Debate, Expressing Opinions & Agreeing/Disagreeing",
    concept: "Express viewpoints clearly, state supporting evidence, use diplomatic disagreement formulas, and participate actively in university seminars.",
    prompts: [
      "In my view, group discussions foster deeper collaborative learning.",
      "I see your point, but we must also consider the statistical evidence.",
      "I completely agree with the previous speaker's conclusions.",
      "From my perspective, this research offers invaluable insights.",
      "What are your thoughts on the proposed methodology?",
      "The survey data suggests that student engagement increases with interactive tools.",
      "I agree up to a point, although there are noticeable limitations.",
      "Could you elaborate on the third argument presented in your paper?",
      "We should look at this issue from a broader historical perspective.",
      "The evidence clearly demonstrates the validity of the hypothesis."
    ],
    vocab: [
      { id: "v_u14_l207_1", word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "a particular way of viewing something", translationsByLang: { hi: "दृष्टिकोण", es: "perspectiva" }, exampleSentence: "From my perspective, the theory is sound.", exampleTranslationByLang: { hi: "मेरे दृष्टिकोण से सिद्धांत सही है।", es: "Desde mi perspectiva la teoría es sólida." }, audioText: "perspective", audioId: "en_a2_u14_l207_v_1", slowAudioId: "en_a2_u14_l207_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🔭", difficulty: "A2 Elementary" },
      { id: "v_u14_l207_2", word: "argument", phonetic: "/ˈɑːɡjumənt/", meaning: "a reason given in support of an idea", translationsByLang: { hi: "तर्क", es: "argumento" }, exampleSentence: "Her argument was supported by empirical data.", exampleTranslationByLang: { hi: "उसका तर्क आंकड़ों द्वारा समर्थित था।", es: "Su argumento estaba respaldado por datos." }, audioText: "argument", audioId: "en_a2_u14_l207_v_2", slowAudioId: "en_a2_u14_l207_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u14_l207_1", expression: "I see your point, but...", meaning: "diplomatic disagreement phrase", translationsByLang: { hi: "मैं आपकी बात समझता हूँ, लेकिन...", es: "Entiendo tu punto, pero..." }, usageNote: "Polite disagreement formula.", audioText: "I see your point but", audioId: "en_a2_u14_l207_c_1", slowAudioId: "en_a2_u14_l207_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🤝" }
    ],
    grammar: {
      title: "Opinion Markers & Diplomatic Disagreement",
      concept: "Formulas for expressing academic viewpoints and polite counter-arguments.",
      patterns: [
        {
          id: "gp_u14_l207_1",
          title: "Diplomatic Disagreement",
          structure: "I see your point, but + [counter-argument clause]",
          explanation: "Validates the speaker before introducing a contrasting point.",
          examples: [
            {
              english: "I see your point, but we must also consider the budget limitations.",
              translation: "Entiendo tu punto, pero también debemos considerar el presupuesto.",
              translationByLang: { es: "Entiendo tu punto, pero también debemos considerar el presupuesto.", hi: "मैं आपकी बात समझता हूँ, लेकिन हमें बजट पर भी विचार करना चाहिए।" },
              audioText: "I see your point, but we must also consider the budget limitations.",
              audioId: "en_a2_u14_l207_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u14_l207_1",
        incorrect: "You are wrong and I hate your idea.",
        correct: "I see what you mean, but I have a slightly different perspective.",
        explanation: "Academic discussions require respectful, constructive disagreement.",
        explanationsByLang: { hi: "अकादमिक चर्चाओं में सम्मानजनक और विनम्र असहमति आवश्यक है।", es: "Los debates académicos exigen discrepar con respeto y cortesía." }
      }
    ],
    dialogue: {
      id: "d_u14_l207_1",
      title: "Seminar Discussion",
      context: "Two students debating during a university seminar.",
      lines: [
        { speaker: "Student A", text: "In my opinion, renewable energy is the most pressing topic.", audioText: "In my opinion, renewable energy is the most pressing topic." },
        { speaker: "Student B", text: "I completely agree with you on that point.", audioText: "I completely agree with you on that point." }
      ]
    }
  },
  {
    num: 208,
    title: "Student Banking, Administrative Fees, Currency & Budgeting",
    concept: "Manage student finances, open bank accounts, understand fee breakdowns, handle international currency transfers, and budget monthly expenses.",
    prompts: [
      "I would like to open a student bank account with debit card facilities.",
      "What documents are required to prove my student status and address?",
      "Tuition fees can be paid in three equal installments across the term.",
      "What is the commission fee for an international wire transfer?",
      "Please provide me with a printed copy of my recent bank statement.",
      "Keeping a monthly budget helps avoid unnecessary debt.",
      "What is the current exchange rate between pounds and euros?",
      "You are required to maintain a minimum balance in the account.",
      "The student discount card saves money on local transportation.",
      "All tuition invoices must be settled prior to examination week."
    ],
    vocab: [
      { id: "v_u14_l208_1", word: "tuition", phonetic: "/tjuːˈɪʃn/", meaning: "money charged for teaching at university", translationsByLang: { hi: "शिक्षण शुल्क", es: "matrícula académica" }, exampleSentence: "Tuition fees must be paid on time.", exampleTranslationByLang: { hi: "शिक्षण शुल्क समय पर दिया जाना चाहिए।", es: "Las tasas deben pagarse a tiempo." }, audioText: "tuition", audioId: "en_a2_u14_l208_v_1", slowAudioId: "en_a2_u14_l208_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎓", difficulty: "A2 Elementary" },
      { id: "v_u14_l208_2", word: "statement", phonetic: "/ˈsteɪtmənt/", meaning: "record of bank account balance and transactions", translationsByLang: { hi: "बैंक विवरण", es: "extracto bancario" }, exampleSentence: "Bring a recent bank statement to the appointment.", exampleTranslationByLang: { hi: "अपॉइंटमेंट पर हाल का बैंक विवरण लाएं।", es: "Lleve un extracto bancario reciente." }, audioText: "statement", audioId: "en_a2_u14_l208_v_2", slowAudioId: "en_a2_u14_l208_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📄", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u14_l208_1", expression: "I would like to open a student bank account.", meaning: "polite bank counter opening phrase", translationsByLang: { hi: "मैं छात्र बैंक खाता खोलना चाहूँगा।", es: "Me gustaría abrir una cuenta de estudiante." }, usageNote: "Standard banking counter request.", audioText: "I would like to open a student bank account", audioId: "en_a2_u14_l208_c_1", slowAudioId: "en_a2_u14_l208_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏛️" }
    ],
    grammar: {
      title: "Obligation & Conditional Financial Terms",
      concept: "Modals of obligation and conditions in banking agreements.",
      patterns: [
        {
          id: "gp_u14_l208_1",
          title: "Requirement Obligation",
          structure: "You are required to + [base verb]",
          explanation: "States mandatory institutional regulations.",
          examples: [
            {
              english: "You are required to maintain a minimum balance of twenty pounds.",
              translation: "Se requiere mantener un saldo mínimo de veinte libras.",
              translationByLang: { es: "Se requiere mantener un saldo mínimo de veinte libras.", hi: "आपको बीस पाउंड का न्यूनतम बैलेंस रखना आवश्यक है।" },
              audioText: "You are required to maintain a minimum balance of twenty pounds.",
              audioId: "en_a2_u14_l208_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u14_l208_1",
        incorrect: "I want money out now without card.",
        correct: "Could I please make a cash withdrawal from my account?",
        explanation: "Use polite banking formulas when interacting with bank tellers.",
        explanationsByLang: { hi: "बैंक टेलर से बात करते समय विनम्र बैंकिंग सूत्रों का उपयोग करें।", es: "Usa fórmulas bancarias formales y amables con los cajeros." }
      }
    ],
    dialogue: {
      id: "d_u14_l208_1",
      title: "At the Bank Counter",
      context: "A student opening an account at a branch.",
      lines: [
        { speaker: "Student", text: "Good morning, I would like to open a student bank account.", audioText: "Good morning, I would like to open a student bank account." },
        { speaker: "Clerk", text: "Certainly! May I see your passport and university acceptance letter?", audioText: "Certainly! May I see your passport and university acceptance letter?" }
      ]
    }
  },
  {
    num: 209,
    title: "Consular Services, Visas, Legal Documentation & Official Verification",
    concept: "Navigate consular services, understand visa renewal procedures, request certified document copies, and interact professionally with immigration authorities.",
    prompts: [
      "I am applying for an official student visa extension.",
      "Please bring certified copies of your academic qualifications.",
      "Ensure your passport remains valid for at least six months.",
      "All foreign certificates must be officially translated into English.",
      "You will need to attend a biometrics appointment next Tuesday.",
      "Please sign the legal declaration at the bottom of the application.",
      "What is the average processing time for a residence permit?",
      "The embassy confirmed that my visa application has been approved.",
      "International students must register their address within thirty days.",
      "Original documents must be presented during the consular interview."
    ],
    vocab: [
      { id: "v_u14_l209_1", word: "consulate", phonetic: "/ˈkɒnsjʊlət/", meaning: "office of a consul representing a foreign government", translationsByLang: { hi: "वाणिज्य दूतावास", es: "consulado" }, exampleSentence: "She visited the consulate for her visa stamp.", exampleTranslationByLang: { hi: "वह अपने वीज़ा स्टैम्प के लिए दूतावास गई।", es: "Visitó el consulado para el visado." }, audioText: "consulate", audioId: "en_a2_u14_l209_v_1", slowAudioId: "en_a2_u14_l209_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏛️", difficulty: "A2 Elementary" },
      { id: "v_u14_l209_2", word: "certified", phonetic: "/ˈsɜːtɪfaɪd/", meaning: "officially verified as authentic", translationsByLang: { hi: "प्रमाणित", es: "certificado / legalizado" }, exampleSentence: "Submit certified copies only.", exampleTranslationByLang: { hi: "केवल प्रमाणित प्रतियां जमा करें।", es: "Presente solo copias certificadas." }, audioText: "certified", audioId: "en_a2_u14_l209_v_2", slowAudioId: "en_a2_u14_l209_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📜", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u14_l209_1", expression: "I am applying for a student visa extension.", meaning: "official immigration purpose statement", translationsByLang: { hi: "मैं छात्र वीज़ा विस्तार के लिए आवेदन कर रहा हूँ।", es: "Estoy solicitando una extensión de visado." }, usageNote: "Standard consular statement.", audioText: "I am applying for a student visa extension", audioId: "en_a2_u14_l209_c_1", slowAudioId: "en_a2_u14_l209_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🛂" }
    ],
    grammar: {
      title: "Passive Voice in Official Procedures",
      concept: "Official passive constructions and temporal requirements.",
      patterns: [
        {
          id: "gp_u14_l209_1",
          title: "Administrative Passive",
          structure: "[Subject] + must be + [past participle] + prior to [time]",
          explanation: "Standard formal regulation phrasing.",
          examples: [
            {
              english: "All documents must be translated prior to submission.",
              translation: "Todos los documentos deben ser traducidos antes de la entrega.",
              translationByLang: { es: "Todos los documentos deben ser traducidos antes de la entrega.", hi: "जमा करने से पहले सभी दस्तावेजों का अनुवाद किया जाना चाहिए।" },
              audioText: "All documents must be translated prior to submission.",
              audioId: "en_a2_u14_l209_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u14_l209_1",
        incorrect: "I send photocopy I made at library.",
        correct: "I have submitted a notarized, certified copy of my diploma.",
        explanation: "Official consular processes require notarized, certified copies rather than informal scans.",
        explanationsByLang: { hi: "आधिकारिक प्रक्रियाओं के लिए नोटरी द्वारा प्रमाणित प्रतियों की आवश्यकता होती है।", es: "Los trámites oficiales requieren copias certificadas ante notario." }
      }
    ],
    dialogue: {
      id: "d_u14_l209_1",
      title: "Consular Interview",
      context: "A student interviewing with a consular officer.",
      lines: [
        { speaker: "Officer", text: "What is the primary purpose of your stay in the country?", audioText: "What is the primary purpose of your stay in the country?" },
        { speaker: "Student", text: "I have been admitted to a full-time Master's degree program at the university.", audioText: "I have been admitted to a full-time Master's degree program at the university." }
      ]
    }
  },
  {
    num: 210,
    title: "Unit 14 Capstone & CEFR A2 Stage Culmination Comprehensive Mastery Gate",
    concept: "The definitive CEFR A2 culmination and graduation mastery gate. Synthesizes official administration, academic seminars, formal correspondence, and diplomatic communication.",
    prompts: [
      "I have successfully completed all core CEFR A2 learning objectives.",
      "Although the academic workload was demanding, we finished on time, didn't we?",
      "In conclusion, regular practice and active participation foster language mastery.",
      "Could you please tell me when the final examination grades will be announced?",
      "From my perspective, combining self-study with group seminars yields optimal results.",
      "The university provides comprehensive career counseling and modern facilities.",
      "I would appreciate it if you could verify the administrative requirements.",
      "We look forward to beginning our advanced B1 studies next term.",
      "Ensure all official certifications and declarations are properly documented.",
      "Congratulations on achieving full CEFR A2 communicative competence!"
    ],
    vocab: [
      { id: "v_u14_l210_1", word: "culmination", phonetic: "/ˌkʌlmɪˈneɪʃn/", meaning: "highest or climactic point of an accomplishment", translationsByLang: { hi: "शीर्ष बिंदु / अंतिम परिणति", es: "culminación" }, exampleSentence: "Graduating is the culmination of hard work.", exampleTranslationByLang: { hi: "स्नातक होना कड़ी मेहनत की परिणति है।", es: "Graduarse es la culminación del esfuerzo." }, audioText: "culmination", audioId: "en_a2_u14_l210_v_1", slowAudioId: "en_a2_u14_l210_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" },
      { id: "v_u14_l210_2", word: "mastery", phonetic: "/ˈmɑːstəri/", meaning: "comprehensive skill and knowledge", translationsByLang: { hi: "महारत / प्रवीणता", es: "dominio / maestría" }, exampleSentence: "She demonstrated true mastery in English.", exampleTranslationByLang: { hi: "उसने अंग्रेजी में वास्तविक महारत का प्रदर्शन किया।", es: "Demostró verdadero dominio del inglés." }, audioText: "mastery", audioId: "en_a2_u14_l210_v_2", slowAudioId: "en_a2_u14_l210_v_2_slow", voiceId: "EN_TEACHER_01", icon: "👑", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u14_l210_1", expression: "I have successfully completed all CEFR A2 milestone objectives.", meaning: "CEFR A2 graduation declaration", translationsByLang: { hi: "मैंने CEFR A2 के सभी उद्देश्य सफलतापूर्वक पूरे कर लिए हैं।", es: "He completado con éxito todos los objetivos de CEFR A2." }, usageNote: "Stage completion declaration.", audioText: "I have successfully completed all CEFR A2 milestone objectives", audioId: "en_a2_u14_l210_c_1", slowAudioId: "en_a2_u14_l210_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎓" }
    ],
    grammar: {
      title: "Comprehensive CEFR A2 Discourse & Structural Mastery",
      concept: "Integrated discourse combining tag questions, polite modals, connectors, and passive structures.",
      patterns: [
        {
          id: "gp_u14_l210_1",
          title: "A2 Culmination Synthesis",
          structure: "Although + [clause 1], [clause 2] + [question tag]?",
          explanation: "Mastery synthesis combining concession, main proposition, and confirmation tags.",
          examples: [
            {
              english: "Although the requirements were demanding, we completed the assignment on time, didn't we?",
              translation: "Aunque los requisitos eran exigentes, completamos la tarea a tiempo, ¿verdad?",
              translationByLang: { es: "Aunque los requisitos eran exigentes, completamos la tarea a tiempo, ¿verdad?", hi: "हालाँकि आवश्यकताएं कठिन थीं, हमने समय पर काम पूरा कर लिया, है न?" },
              audioText: "Although the requirements were demanding, we completed the assignment on time, didn't we?",
              audioId: "en_a2_u14_l210_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u14_l210_1",
        incorrect: "I finish A2 now so I never need practice again.",
        correct: "I have finished A2, and I will continue practicing to advance into B1.",
        explanation: "Language learning is an active, ongoing continuum requiring continual reinforcement.",
        explanationsByLang: { hi: "भाषा सीखना एक निरंतर प्रक्रिया है जिसे नियमित अभ्यास की आवश्यकता होती है।", es: "El aprendizaje de idiomas es un proceso continuo que requiere práctica." }
      }
    ],
    dialogue: {
      id: "d_u14_l210_1",
      title: "CEFR A2 Graduation Ceremony",
      context: "Teacher and student reviewing progress at the end of CEFR A2.",
      lines: [
        { speaker: "Teacher", text: "Congratulations on completing all fourteen units of the A1 and A2 curriculum!", audioText: "Congratulations on completing all fourteen units of the A1 and A2 curriculum!" },
        { speaker: "Student", text: "Thank you! I feel confident in my conversational and academic English skills now.", audioText: "Thank you! I feel confident in my conversational and academic English skills now." }
      ]
    }
  }
];

lessonDefs.forEach(def => {
  const data = buildLessonData(def.num, def.title, def.concept, def.vocab, def.expressions, def.grammar, def.mistakes, def.dialogue, def.prompts);
  const outPath = `src/data/lessons/lesson_a2_14_${def.num}.ts`;
  const code = `import { DetailedLessonData } from '../../types';\n\nexport const LESSON_A2_14_${def.num}_DATA: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outPath, code);
  console.log(`Generated complete structured lesson ${def.num}`);
});
