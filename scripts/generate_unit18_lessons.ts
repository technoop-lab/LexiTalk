import fs from 'fs';
import path from 'path';

interface VocabDef {
  id: string;
  word: string;
  phonetic: string;
  meaning: string;
  translationsByLang: { hi: string; es?: string };
  exampleSentence: string;
  exampleTranslationByLang: { hi: string; es?: string };
  audioText: string;
  audioId: string;
  slowAudioId: string;
  voiceId: string;
  icon: string;
  difficulty: string;
}

interface ExpDef {
  id: string;
  expression: string;
  meaning: string;
  translationsByLang: { hi: string; es?: string };
  usageNote: string;
  audioText: string;
  audioId: string;
  slowAudioId: string;
  voiceId: string;
  icon: string;
}

interface GrammarDef {
  title: string;
  concept: string;
  patterns: {
    id: string;
    title: string;
    structure: string;
    explanation: string;
    examples: {
      english: string;
      translation: string;
      translationByLang: { hi: string; es?: string };
      audioText: string;
      audioId: string;
    }[];
  }[];
}

interface MistakeDef {
  id: string;
  incorrect: string;
  correct: string;
  explanation: string;
  explanationsByLang: { hi: string; es?: string };
}

interface DialogueDef {
  id: string;
  title: string;
  context: string;
  lines: { speaker: string; text: string; audioText: string; translation?: string }[];
}

interface LessonDef {
  num: number;
  title: string;
  concept: string;
  scaffoldingLevel: 'moderate' | 'reduced' | 'mixed_independent' | 'low' | 'mastery_prep';
  prompts: string[];
  vocab: VocabDef[];
  expressions: ExpDef[];
  grammar: GrammarDef;
  mistakes: MistakeDef[];
  dialogue: DialogueDef;
}

function buildLessonData(def: LessonDef) {
  const lessonId = `lesson_a2_18_${def.num}`;
  
  const practiceExercises: any[] = [];
  const reviewExercises: any[] = [];
  const assessmentExercises: any[] = [];

  for (let i = 1; i <= 20; i++) {
    const p = def.prompts[(i - 1) % def.prompts.length];
    const words = p.split(' ');
    
    if (i % 5 === 1) {
      practiceExercises.push({
        id: `ex_${def.num}_p${i}`,
        type: "multiple_choice",
        prompt: `Choose the correct phrasing for: "${p}"`,
        options: [
          { id: "1", text: p, isCorrect: true },
          { id: "2", text: words.slice(0, Math.max(1, words.length - 2)).join(' ') + " wrong form.", isCorrect: false },
          { id: "3", text: "Incorrect grammar pattern " + i, isCorrect: false },
          { id: "4", text: "Alternative ungrammatical sentence", isCorrect: false }
        ],
        correctAnswer: p,
        explanation: `Standard CEFR A2 integrated communicative usage: "${p}"`,
        skillTags: ["grammar", "vocabulary"]
      });
    } else if (i % 5 === 2) {
      const midIdx = Math.floor(words.length / 2);
      const targetWord = words[midIdx].replace(/[.,?!]/g, '');
      const masked = p.replace(targetWord, "____");
      practiceExercises.push({
        id: `ex_${def.num}_p${i}`,
        type: "fill_blank",
        prompt: "Complete the sentence with the appropriate target word:",
        sourceSentence: masked,
        targetSentence: p,
        blankIndex: midIdx,
        options: [
          { id: "1", text: targetWord, isCorrect: true },
          { id: "2", text: targetWord + "ing_unfit", isCorrect: false },
          { id: "3", text: "misplaced_word", isCorrect: false },
          { id: "4", text: "unrelated_form", isCorrect: false }
        ],
        correctAnswer: targetWord,
        explanation: `The correct target word is "${targetWord}".`,
        skillTags: ["grammar", "writing"]
      });
    } else if (i % 5 === 3) {
      practiceExercises.push({
        id: `ex_${def.num}_p${i}`,
        type: "translate_tiles",
        prompt: `Translate to English: ${p}`,
        sourceSentence: p,
        targetSentence: p,
        wordBank: [...words, "alternative", "however"].sort(() => 0.5 - Math.random()),
        correctAnswer: p,
        explanation: `Complete English sentence: "${p}".`,
        skillTags: ["mediation", "writing"]
      });
    } else if (i % 5 === 4) {
      practiceExercises.push({
        id: `ex_${def.num}_p${i}`,
        type: "word_ordering",
        prompt: "Arrange the words into the correct communicative order:",
        targetSentence: p,
        words: [...words].sort(() => 0.5 - Math.random()),
        correctAnswer: p,
        explanation: `Natural word order: "${p}".`,
        skillTags: ["grammar", "reading"]
      });
    } else {
      practiceExercises.push({
        id: `ex_${def.num}_p${i}`,
        type: "speaking",
        prompt: `Speak this sentence clearly: "${p}"`,
        targetSentence: p,
        correctAnswer: p,
        audioText: p,
        audioId: `en_a2_u18_l${def.num}_spk_${i}`,
        explanation: "Focus on clear sentence stress, rhythm, and natural conversational cadence.",
        skillTags: ["speaking", "pronunciation"]
      });
    }
  }

  for (let i = 1; i <= 10; i++) {
    const p = def.prompts[(i + 3) % def.prompts.length];
    if (i % 2 === 1) {
      reviewExercises.push({
        id: `ex_${def.num}_r${i}`,
        type: "listening",
        prompt: `Listen and select the matching statement:`,
        audioText: p,
        audioId: `en_a2_u18_l${def.num}_lis_${i}`,
        options: [
          { id: "1", text: p, isCorrect: true },
          { id: "2", text: "Different spoken sentence with subtle error", isCorrect: false },
          { id: "3", text: "Incorrect interpretation choice", isCorrect: false },
          { id: "4", text: "Contradictory statement", isCorrect: false }
        ],
        correctAnswer: p,
        explanation: `Acoustic match: "${p}".`,
        skillTags: ["listening", "vocabulary"]
      });
    } else {
      reviewExercises.push({
        id: `ex_${def.num}_r${i}`,
        type: "fill_blank",
        prompt: `Review check: Complete the sentence:`,
        sourceSentence: p.replace(p.split(' ')[1] || 'word', '____'),
        targetSentence: p,
        options: [
          { id: "1", text: p.split(' ')[1] || 'word', isCorrect: true },
          { id: "2", text: "wrongOption1", isCorrect: false },
          { id: "3", text: "wrongOption2", isCorrect: false },
          { id: "4", text: "wrongOption3", isCorrect: false }
        ],
        correctAnswer: p.split(' ')[1] || 'word',
        explanation: `Correct word form: "${p.split(' ')[1] || 'word'}".`,
        skillTags: ["grammar", "vocabulary"]
      });
    }
  }

  for (let i = 1; i <= 10; i++) {
    const p = def.prompts[(i + 7) % def.prompts.length];
    if (i % 2 === 1) {
      assessmentExercises.push({
        id: `ex_${def.num}_a${i}`,
        type: "error_correction",
        prompt: `Identify the correct version of this statement:`,
        errorSentence: p.toLowerCase().replace('is', 'are').replace('have', 'has'),
        targetSentence: p,
        options: [
          { id: "1", text: p, isCorrect: true },
          { id: "2", text: "Incorrect variant A", isCorrect: false },
          { id: "3", text: "Incorrect variant B", isCorrect: false }
        ],
        correctAnswer: p,
        explanation: `Standard syntactic concordance: "${p}".`,
        skillTags: ["grammar", "writing"]
      });
    } else {
      assessmentExercises.push({
        id: `ex_${def.num}_a${i}`,
        type: "multiple_choice",
        prompt: `Communicative assessment item ${i}: Which response is most natural and accurate?`,
        options: [
          { id: "1", text: p, isCorrect: true },
          { id: "2", text: "Unnatural sentence construction", isCorrect: false },
          { id: "3", text: "Grammatically flawed sentence", isCorrect: false },
          { id: "4", text: "Inappropriate contextual register", isCorrect: false }
        ],
        correctAnswer: p,
        explanation: `Target response: "${p}".`,
        skillTags: ["grammar", "vocabulary", "interaction"]
      });
    }
  }

  return {
    id: lessonId,
    unitId: "unit_a2_18",
    title: def.title,
    cefr: "A2",
    icon: def.num === 270 ? "🏆" : (def.num === 269 ? "🎭" : "🌐"),
    estimatedMinutes: 25,
    learningObjective: {
      title: def.title,
      description: def.concept,
      descriptionsByLang: {
        hi: def.concept,
        es: def.concept
      },
      canDoStatements: [
        `I can understand and apply target communicative structures for ${def.title.toLowerCase()}.`,
        `I can communicate effectively with reduced scaffolding using integrated A2 vocabulary and functional phrases.`,
        `I can formulate accurate multi-clause sentences and avoid common learner pitfalls.`,
        `I can demonstrate CEFR A2 communicative mastery and fluency readiness in this domain.`
      ],
      canDoByLang: {
        hi: [
          `मैं ${def.title} से संबंधित प्रमुख संवादात्मक संरचनाओं को समझ और स्वतंत्र रूप से उपयोग कर सकता हूँ।`,
          `मैं दैनिक जीवन, समस्या निवारण और सामाजिक बातचीत में A2 स्तर पर प्रभावी ढंग से संवाद कर सकता हूँ।`
        ],
        es: [
          `Puedo comprender y utilizar las estructuras comunicativas clave de ${def.title.toLowerCase()}.`,
          `Puedo comunicarme eficazmente con menor andamiaje utilizando vocabulario A2 y frases funcionales.`
        ]
      }
    },
    vocabulary: def.vocab,
    expressions: def.expressions,
    grammar: def.grammar,
    commonMistakes: def.mistakes,
    dialogues: [def.dialogue],
    practiceExercises,
    reviewExercises,
    assessmentExercises
  };
}

const LESSON_DEFINITIONS: LessonDef[] = [
  // Lesson 256: Everyday Life Problem Solving: Explaining a Situation Clearly
  {
    num: 256,
    title: "Everyday Life Problem Solving: Explaining a Situation Clearly",
    concept: "Explain practical everyday dilemmas, misunderstandings, household or transit issues, and state what needs to be fixed clearly.",
    scaffoldingLevel: "moderate",
    prompts: [
      "Excuse me, the heater in my room is not working properly.",
      "Could you please explain what happened to the package?",
      "There is a problem with my train reservation for tomorrow morning.",
      "I ordered a vegetarian meal, but I received chicken instead.",
      "The washing machine stopped suddenly during the spin cycle.",
      "We need to contact customer support to resolve this billing issue.",
      "I tried to restart the router, but the internet connection is still down.",
      "Could someone come and take a look at the leaky bathroom faucet?",
      "The key card does not unlock the main entrance door after midnight.",
      "Let me explain the situation step by step so we can solve it quickly."
    ],
    vocab: [
      { id: "v_u18_l256_1", word: "faucet", phonetic: "/ˈfɔːsɪt/", meaning: "a device by which a flow of liquid or gas from a pipe can be controlled", translationsByLang: { hi: "नल", es: "grifo" }, exampleSentence: "The bathroom faucet is leaking constantly.", exampleTranslationByLang: { hi: "बाथरूम का नल लगातार टपक रहा है।", es: "El grifo del baño gotea constantemente." }, audioText: "faucet", audioId: "en_a2_u18_l256_v_1", slowAudioId: "en_a2_u18_l256_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🚰", difficulty: "A2 Elementary" },
      { id: "v_u18_l256_2", word: "resolve", phonetic: "/rɪˈzɒlv/", meaning: "settle or find a solution to a problem or contentious matter", translationsByLang: { hi: "हल करना / सुलझाना", es: "resolver / solucionar" }, exampleSentence: "We managed to resolve the billing dispute quickly.", exampleTranslationByLang: { hi: "हम बिलिंग विवाद को जल्दी सुलझाने में कामयाब रहे।", es: "Logramos resolver la disputa de facturación rápidamente." }, audioText: "resolve", audioId: "en_a2_u18_l256_v_2", slowAudioId: "en_a2_u18_l256_v_2_slow", voiceId: "EN_TEACHER_01", icon: "✅", difficulty: "A2 Elementary" },
      { id: "v_u18_l256_3", word: "reservation", phonetic: "/ˌrezəˈveɪʃn/", meaning: "an arrangement whereby something is held for someone's use at a later time", translationsByLang: { hi: "आरक्षण / बुकिंग", es: "reserva" }, exampleSentence: "I have a train reservation for the morning express.", exampleTranslationByLang: { hi: "मेरे पास सुबह की एक्सप्रेस के लिए ट्रेन आरक्षण है।", es: "Tengo una reserva de tren para el expreso de la mañana." }, audioText: "reservation", audioId: "en_a2_u18_l256_v_3", slowAudioId: "en_a2_u18_l256_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🎫", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l256_1", expression: "There seems to be a problem with...", meaning: "polite way to report an issue", translationsByLang: { hi: "...में कुछ समस्या लग रही है", es: "Parece haber un problema con..." }, usageNote: "Used to report malfunctions or misunderstandings politely.", audioText: "There seems to be a problem with my hotel key.", audioId: "en_a2_u18_l256_c_1", slowAudioId: "en_a2_u18_l256_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚠️" }
    ],
    grammar: {
      title: "Explaining Problems with Present Continuous & Passive Noticing",
      concept: "Use Present Continuous and stative verbs to describe current malfunctioning states and required solutions.",
      patterns: [
        {
          id: "gp_u18_l256_1",
          title: "Describing Malfunctions",
          structure: "Subject + is/are not working + properly / correctly",
          explanation: "Clear, direct way to describe operational problems in everyday life.",
          examples: [
            {
              english: "The air conditioner is making a strange noise.",
              translation: "El aire acondicionado está haciendo un ruido extraño.",
              translationByLang: { hi: "एयर कंडीशनर अजीब आवाज कर रहा है।", es: "El aire acondicionado está haciendo un ruido extraño." },
              audioText: "The air conditioner is making a strange noise.",
              audioId: "en_a2_u18_l256_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l256_1",
        incorrect: "The machine is broken since morning.",
        correct: "The machine has been broken since this morning. / The machine broke this morning.",
        explanation: "Use Present Perfect with 'since', or Past Simple if specifying when it occurred.",
        explanationsByLang: {
          hi: "'since' के साथ Present Perfect का प्रयोग करें: 'has been broken since this morning'।",
          es: "Usa Present Perfect con 'since': 'has been broken since this morning'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l256_1",
      title: "Reporting a Maintenance Issue",
      context: "David speaks with the hotel front desk manager about heating issues.",
      lines: [
        { speaker: "David", text: "Excuse me, I'm calling from Room 402. The heater is not working.", audioText: "Excuse me, I'm calling from Room 402. The heater is not working.", translation: "Disculpe, llamo de la habitación 402. La calefacción no funciona." },
        { speaker: "Receptionist", text: "I'm very sorry to hear that, sir. We will send a technician right away.", audioText: "I'm very sorry to hear that, sir. We will send a technician right away.", translation: "Lamento mucho escuchar eso, señor. Enviaremos un técnico enseguida." }
      ]
    }
  },

  // Lesson 257: Making Plans Under Constraints & Changing Plans
  {
    num: 257,
    title: "Making Plans Under Constraints & Changing Plans",
    concept: "Negotiate schedules, propose alternatives when conflicts arise, explain constraints (budget, timing, weather), and confirm updated arrangements.",
    scaffoldingLevel: "moderate",
    prompts: [
      "I was hoping to meet tomorrow, but something urgent came up.",
      "Would Friday afternoon work better for your schedule?",
      "Because of heavy traffic, our arrival will be delayed by thirty minutes.",
      "Can we reschedule our lunch meeting to next Tuesday at one o'clock?",
      "I cannot make it on Thursday because I have a dentist appointment.",
      "Let us check the weather forecast before booking the outdoor venue.",
      "If the rain continues, we should move the picnic indoors.",
      "I am tied up all morning, but my afternoon is completely free.",
      "Let's confirm the new meeting time by sending a calendar invitation.",
      "Does meeting at three o'clock at the central library suit you?"
    ],
    vocab: [
      { id: "v_u18_l257_1", word: "reschedule", phonetic: "/ˌriːˈʃedjuːl/", meaning: "change the time of a planned event", translationsByLang: { hi: "पुनर्निर्धारित करना / समय बदलना", es: "reprogramar" }, exampleSentence: "We need to reschedule the dentist appointment.", exampleTranslationByLang: { hi: "हमें दंत चिकित्सक के अपॉइंटमेंट का समय बदलना होगा।", es: "Necesitamos reprogramar la cita con el dentista." }, audioText: "reschedule", audioId: "en_a2_u18_l257_v_1", slowAudioId: "en_a2_u18_l257_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🗓️", difficulty: "A2 Elementary" },
      { id: "v_u18_l257_2", word: "constraint", phonetic: "/kənˈstreɪnt/", meaning: "a limitation or restriction", translationsByLang: { hi: "बाध्यता / सीमा", es: "restricción / limitación" }, exampleSentence: "Time constraints prevent us from visiting both museums today.", exampleTranslationByLang: { hi: "समय की कमी हमें आज दोनों संग्रहालयों में जाने से रोकती है।", es: "Las limitaciones de tiempo nos impiden visitar ambos museos hoy." }, audioText: "constraint", audioId: "en_a2_u18_l257_v_2", slowAudioId: "en_a2_u18_l257_v_2_slow", voiceId: "EN_TEACHER_01", icon: "⏳", difficulty: "A2 Elementary" },
      { id: "v_u18_l257_3", word: "available", phonetic: "/əˈveɪləbl/", meaning: "free to do something; not busy", translationsByLang: { hi: "उपलब्ध / खाली", es: "disponible" }, exampleSentence: "Are you available for a quick phone call this afternoon?", exampleTranslationByLang: { hi: "क्या आप आज दोपहर एक त्वरित फोन कॉल के लिए उपलब्ध हैं?", es: "¿Estás disponible para una llamada rápida esta tarde?" }, audioText: "available", audioId: "en_a2_u18_l257_v_3", slowAudioId: "en_a2_u18_l257_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🟢", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l257_1", expression: "Something came up", meaning: "an unexpected event occurred", translationsByLang: { hi: "कुछ ज़रूरी काम आ गया", es: "Surgió un imprevisto" }, usageNote: "Polite, standard idiom for excusing a plan change.", audioText: "I'm sorry, but something came up at work.", audioId: "en_a2_u18_l257_c_1", slowAudioId: "en_a2_u18_l257_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚡" }
    ],
    grammar: {
      title: "Polite Proposing and Future Arrangement Adjustments",
      concept: "Use modal verbs 'would', 'could', and conditional 'if' to negotiate and change plans flexibly.",
      patterns: [
        {
          id: "gp_u18_l257_1",
          title: "Suggesting New Times",
          structure: "Would + Day/Time + work / suit for you?",
          explanation: "Polite arrangement negotiation.",
          examples: [
            {
              english: "Would Monday at four work for you?",
              translation: "¿Te vendría bien el lunes a las cuatro?",
              translationByLang: { hi: "क्या सोमवार को चार बजे आपके लिए ठीक रहेगा?", es: "¿Te vendría bien el lunes a las cuatro?" },
              audioText: "Would Monday at four work for you?",
              audioId: "en_a2_u18_l257_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l257_1",
        incorrect: "I cannot to meet you tomorrow.",
        correct: "I cannot meet you tomorrow.",
        explanation: "Modal verbs like 'cannot' are followed by base verb without 'to'.",
        explanationsByLang: {
          hi: "'cannot' के बाद 'to' का प्रयोग न करें: 'cannot meet'।",
          es: "Los verbos modales como 'cannot' van seguidos de infinitivo sin 'to'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l257_1",
      title: "Rescheduling a Coffee Date",
      context: "Emma texts Sam to adjust their meeting time.",
      lines: [
        { speaker: "Emma", text: "Hi Sam! Something came up at the office. Can we postpone coffee to five?", audioText: "Hi Sam! Something came up at the office. Can we postpone coffee to five?", translation: "¡Hola Sam! Surgió algo en la oficina. ¿Podemos posponer el café para las cinco?" },
        { speaker: "Sam", text: "No problem at all Emma! Five o'clock works perfectly for me.", audioText: "No problem at all Emma! Five o'clock works perfectly for me.", translation: "¡Ningún problema Emma! Las cinco me viene perfecto." }
      ]
    }
  },

  // Lesson 258: Explaining Causes, Results & Solutions
  {
    num: 258,
    title: "Explaining Causes, Results & Solutions",
    concept: "Connect ideas logically using connectors like because, because of, so, therefore, and since to explain reasons, outcomes, and practical remedies.",
    scaffoldingLevel: "moderate",
    prompts: [
      "The flight was canceled because of thick fog over the airport runway.",
      "I woke up late, so I had to take a taxi to the train station.",
      "Since we missed the morning bus, we decided to explore the town center.",
      "The battery died; therefore, I could not receive your incoming call.",
      "She practiced speaking every day, and as a result, her fluency improved.",
      "We brought umbrellas in case it rained during our walking tour.",
      "Because the restaurant was fully booked, we ordered food to our hotel.",
      "He studied all weekend so that he could pass his driving theory test.",
      "Due to unexpected maintenance work, the elevator is out of order.",
      "By sharing the workload evenly, we solved the problem before the deadline."
    ],
    vocab: [
      { id: "v_u18_l258_1", word: "therefore", phonetic: "/ˈðeəfɔː/", meaning: "for that reason; consequently", translationsByLang: { hi: "इसलिए / परिणामस्वरूप", es: "por lo tanto / por consiguiente" }, exampleSentence: "It was raining heavily; therefore, we stayed indoors.", exampleTranslationByLang: { hi: "भारी बारिश हो रही थी; इसलिए, हम घर के अंदर ही रहे।", es: "Estaba lloviendo mucho; por lo tanto, nos quedamos adentro." }, audioText: "therefore", audioId: "en_a2_u18_l258_v_1", slowAudioId: "en_a2_u18_l258_v_1_slow", voiceId: "EN_TEACHER_01", icon: "➡️", difficulty: "A2 Elementary" },
      { id: "v_u18_l258_2", word: "consequence", phonetic: "/ˈkɒnsɪkwəns/", meaning: "a result or effect of an action or condition", translationsByLang: { hi: "परिणाम", es: "consecuencia" }, exampleSentence: "Missing the flight had serious consequences for our schedule.", exampleTranslationByLang: { hi: "उड़ान छूटने के हमारे कार्यक्रम पर गंभीर परिणाम हुए।", es: "Perder el vuelo tuvo graves consecuencias para nuestro horario." }, audioText: "consequence", audioId: "en_a2_u18_l258_v_2", slowAudioId: "en_a2_u18_l258_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📊", difficulty: "A2 Elementary" },
      { id: "v_u18_l258_3", word: "remedy", phonetic: "/ˈremədi/", meaning: "a means of counteracting or solving something undesirable", translationsByLang: { hi: "उपाय / समाधान", es: "solución / remedio" }, exampleSentence: "We found a simple remedy for the noise problem.", exampleTranslationByLang: { hi: "हमें शोर की समस्या का एक सरल समाधान मिल गया।", es: "Encontramos un remedio sencillo para el problema del ruido." }, audioText: "remedy", audioId: "en_a2_u18_l258_v_3", slowAudioId: "en_a2_u18_l258_v_3_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l258_1", expression: "As a result", meaning: "because of this; consequently", translationsByLang: { hi: "जिसके परिणामस्वरूप", es: "Como resultado" }, usageNote: "Useful transition phrase for explaining outcomes.", audioText: "He trained hard, and as a result, he won the race.", audioId: "en_a2_u18_l258_c_1", slowAudioId: "en_a2_u18_l258_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏁" }
    ],
    grammar: {
      title: "Cause and Effect Connectors (because vs because of vs so)",
      concept: "Use 'because + clause' for actions, 'because of + noun phrase' for objects/reasons, and 'so' for results.",
      patterns: [
        {
          id: "gp_u18_l258_1",
          title: "Because of + Noun Phrase",
          structure: "Clause + because of + Noun Phrase",
          explanation: "States the direct cause as a noun.",
          examples: [
            {
              english: "We arrived late because of heavy traffic.",
              translation: "Llegamos tarde debido al tráfico intenso.",
              translationByLang: { hi: "भारी ट्रैफिक के कारण हम देर से पहुंचे।", es: "Llegamos tarde debido al tráfico intenso." },
              audioText: "We arrived late because of heavy traffic.",
              audioId: "en_a2_u18_l258_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l258_1",
        incorrect: "Because it was raining, so we stayed home.",
        correct: "Because it was raining, we stayed home. / It was raining, so we stayed home.",
        explanation: "Do not use 'because' and 'so' together in the same sentence.",
        explanationsByLang: {
          hi: "एक ही वाक्य में 'because' और 'so' दोनों का एक साथ प्रयोग न करें।",
          es: "No uses 'because' y 'so' juntos en la misma oración."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l258_1",
      title: "Explaining a Project Delay",
      context: "Sarah explains why a report was submitted late.",
      lines: [
        { speaker: "Manager", text: "Why was the final report delayed yesterday, Sarah?", audioText: "Why was the final report delayed yesterday, Sarah?", translation: "¿Por qué se retrasó el informe final ayer, Sarah?" },
        { speaker: "Sarah", text: "Because our database went offline, so we had to verify all numbers manually.", audioText: "Because our database went offline, we had to verify all numbers manually.", translation: "Como nuestra base de datos se cayó, tuvimos que verificar todos los números manualmente." }
      ]
    }
  },

  // Lesson 259: Personal Experiences, Stories & What Happened
  {
    num: 259,
    title: "Personal Experiences, Stories & What Happened",
    concept: "Narrate memorable personal experiences, mishaps, and past events using integrated Past Simple, Past Continuous, and sequence markers.",
    scaffoldingLevel: "moderate",
    prompts: [
      "While I was walking through the park, I met an old school friend.",
      "First, we bought our tickets, and then we queued for the exhibit.",
      "Suddenly, the lights went out while everyone was having dinner.",
      "It was raining heavily when we finally reached the mountain cabin.",
      "I was looking for my passport when I realized I had left it in my car.",
      "At first, the journey seemed difficult, but in the end, everything went well.",
      "While the chef was cooking, a famous food critic entered the restaurant.",
      "We were waiting at the bus stop when a friendly stranger gave us directions.",
      "After finishing my university studies, I decided to travel across Asia.",
      "That surprising experience taught me never to travel without a paper map."
    ],
    vocab: [
      { id: "v_u18_l259_1", word: "suddenly", phonetic: "/ˈsʌdənli/", meaning: "quickly and unexpectedly", translationsByLang: { hi: "अचानक / यकायक", es: "de repente / repentinamente" }, exampleSentence: "Suddenly, the thunderstorm began with loud thunder.", exampleTranslationByLang: { hi: "अचानक, तेज गड़गड़ाहट के साथ आंधी शुरू हो गई।", es: "De repente, la tormenta comenzó con un fuerte trueno." }, audioText: "suddenly", audioId: "en_a2_u18_l259_v_1", slowAudioId: "en_a2_u18_l259_v_1_slow", voiceId: "EN_TEACHER_01", icon: "⚡", difficulty: "A2 Elementary" },
      { id: "v_u18_l259_2", word: "memorable", phonetic: "/ˈmemərəbl/", meaning: "worth remembering or easily remembered", translationsByLang: { hi: "यादगार", es: "memorable / inolvidable" }, exampleSentence: "Our trip to the ancient castle was truly memorable.", exampleTranslationByLang: { hi: "प्राचीन महल की हमारी यात्रा वास्तव में यादगार थी।", es: "Nuestro viaje al antiguo castillo fue verdaderamente memorable." }, audioText: "memorable", audioId: "en_a2_u18_l259_v_2", slowAudioId: "en_a2_u18_l259_v_2_slow", voiceId: "EN_TEACHER_01", icon: "⭐", difficulty: "A2 Elementary" },
      { id: "v_u18_l259_3", word: "mishap", phonetic: "/ˈmɪshæp/", meaning: "an unlucky but relatively minor accident", translationsByLang: { hi: "दुर्घटना / चूक", es: "percance / contratiempo" }, exampleSentence: "Despite a minor luggage mishap, our vacation was wonderful.", exampleTranslationByLang: { hi: "सामान की एक छोटी सी चूक के बावजूद, हमारी छुट्टियां शानदार रहीं।", es: "A pesar de un pequeño contratiempo con el equipaje, nuestras vacaciones fueron maravillosas." }, audioText: "mishap", audioId: "en_a2_u18_l259_v_3", slowAudioId: "en_a2_u18_l259_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🧳", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l259_1", expression: "In the end", meaning: "finally; after considering everything", translationsByLang: { hi: "अंत में / आखिरकार", es: "Al final" }, usageNote: "Narrative resolution phrase.", audioText: "We searched everywhere, and in the end, we found the keys.", audioId: "en_a2_u18_l259_c_1", slowAudioId: "en_a2_u18_l259_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏁" }
    ],
    grammar: {
      title: "Past Narrative Framing (Past Continuous with Past Simple)",
      concept: "Use Past Continuous (was/were + verb-ing) for background setting and Past Simple for the interrupting event.",
      patterns: [
        {
          id: "gp_u18_l259_1",
          title: "While + Past Continuous, Past Simple",
          structure: "While + Subject + was/were + V-ing, Subject + Past Simple verb",
          explanation: "Narrates actions in progress interrupted by main events.",
          examples: [
            {
              english: "While I was driving home, my phone rang.",
              translation: "Mientras conducía a casa, sonó mi teléfono.",
              translationByLang: { hi: "जब मैं घर गाड़ी चलाकर जा रहा था, तब मेरा फोन बजा।", es: "Mientras conducía a casa, sonó mi teléfono." },
              audioText: "While I was driving home, my phone rang.",
              audioId: "en_a2_u18_l259_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l259_1",
        incorrect: "When I was walk home, it started raining.",
        correct: "When I was walking home, it started to rain / raining.",
        explanation: "After 'was/were' in continuous tenses, always use verb + -ing form ('walking').",
        explanationsByLang: {
          hi: "'was' के बाद निरंतर रूप (verb + ing) का उपयोग करें: 'was walking'।",
          es: "Después de 'was/were' en tiempos continuos, usa la forma -ing: 'was walking'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l259_1",
      title: "Sharing a Travel Mishap",
      context: "Carlos tells Linda about getting lost in Rome.",
      lines: [
        { speaker: "Carlos", text: "You won't believe what happened in Rome! My phone battery died while I was navigating.", audioText: "You won't believe what happened in Rome! My phone battery died while I was navigating.", translation: "¡No vas a creer lo que pasó en Roma! La batería de mi teléfono se agotó mientras navegaba." },
        { speaker: "Linda", text: "Oh no! How did you manage to find your hotel?", audioText: "Oh no! How did you manage to find your hotel?", translation: "¡Oh no! ¿Cómo lograste encontrar tu hotel?" },
        { speaker: "Carlos", text: "A kind shopkeeper drew a paper map for me, and I reached safely.", audioText: "A kind shopkeeper drew a paper map for me, and I reached safely.", translation: "Un comerciante amable me dibujó un mapa en papel y llegué a salvo." }
      ]
    }
  },

  // Lesson 260: Talking About Changes, Progress & Achievements
  {
    num: 260,
    title: "Talking About Changes, Progress & Achievements",
    concept: "Describe personal growth, habit changes, learning milestones, and life transitions contrasting past habits with present achievements.",
    scaffoldingLevel: "reduced",
    prompts: [
      "I used to find English grammar confusing, but now I understand it clearly.",
      "Over the past six months, my conversational confidence has grown a lot.",
      "I have completed over two hundred lessons on this language platform.",
      "Before moving to the city, I used to live in a quiet rural village.",
      "She has improved her pronunciation by recording herself every day.",
      "Now that I work remotely, I have more time to spend with my family.",
      "I didn't use to exercise regularly, but now I jog three times a week.",
      "We have achieved our team goal two weeks ahead of the schedule.",
      "Learning a new language has opened up many new career opportunities.",
      "Looking back at where I started, I feel very proud of my steady progress."
    ],
    vocab: [
      { id: "v_u18_l260_1", word: "achievement", phonetic: "/əˈtʃiːvmənt/", meaning: "a thing done successfully typically by effort, courage, or skill", translationsByLang: { hi: "उपलब्धि", es: "logro / éxito" }, exampleSentence: "Finishing the course was a major personal achievement.", exampleTranslationByLang: { hi: "कोर्स पूरा करना एक बड़ी व्यक्तिगत उपलब्धि थी।", es: "Terminar el curso fue un gran logro personal." }, audioText: "achievement", audioId: "en_a2_u18_l260_v_1", slowAudioId: "en_a2_u18_l260_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" },
      { id: "v_u18_l260_2", word: "milestone", phonetic: "/ˈmaɪlstəʊn/", meaning: "an action or event marking a significant stage in development", translationsByLang: { hi: "मील का पत्थर / महत्वपूर्ण पड़ाव", es: "hito / etapa clave" }, exampleSentence: "Passing CEFR A2 is an important learning milestone.", exampleTranslationByLang: { hi: "CEFR A2 पास करना एक महत्वपूर्ण शिक्षण पड़ाव है।", es: "Aprobar el nivel CEFR A2 es un hito de aprendizaje importante." }, audioText: "milestone", audioId: "en_a2_u18_l260_v_2", slowAudioId: "en_a2_u18_l260_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🚩", difficulty: "A2 Elementary" },
      { id: "v_u18_l260_3", word: "progress", phonetic: "/ˈprəʊɡres/", meaning: "forward movement toward a destination or goal", translationsByLang: { hi: "प्रगति / सुधार", es: "progreso / avance" }, exampleSentence: "You have made remarkable progress in spoken English.", exampleTranslationByLang: { hi: "आपने स्पोकन इंग्लिश में उल्लेखनीय प्रगति की है।", es: "Has hecho un progreso notable en inglés hablado." }, audioText: "progress", audioId: "en_a2_u18_l260_v_3", slowAudioId: "en_a2_u18_l260_v_3_slow", voiceId: "EN_TEACHER_01", icon: "📈", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l260_1", expression: "Used to...", meaning: "refers to past habits or states that are no longer true", translationsByLang: { hi: "किया करता था...", es: "Solía..." }, usageNote: "Key A2 contrast structure for habit changes.", audioText: "I used to be shy when speaking English.", audioId: "en_a2_u18_l260_c_1", slowAudioId: "en_a2_u18_l260_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🕰️" }
    ],
    grammar: {
      title: "Contrasting Past and Present (used to vs Present Simple / Present Perfect)",
      concept: "Use 'used to + infinitive' for discontinued past states and 'have + past participle' for accumulated achievements.",
      patterns: [
        {
          id: "gp_u18_l260_1",
          title: "Used to vs Now",
          structure: "Subject + used to + Base Verb, but now + Subject + Present Simple",
          explanation: "Expresses clear personal transitions.",
          examples: [
            {
              english: "I used to make many errors, but now I speak more fluently.",
              translation: "Solía cometer muchos errores, pero ahora hablo con más fluidez.",
              translationByLang: { hi: "मैं कई गलतियाँ किया करता था, लेकिन अब मैं अधिक धाराप्रवाह बोलता हूँ।", es: "Solía cometer muchos errores, pero ahora hablo con más fluidez." },
              audioText: "I used to make many errors, but now I speak more fluently.",
              audioId: "en_a2_u18_l260_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l260_1",
        incorrect: "I am use to study every night in the past.",
        correct: "I used to study every night in the past.",
        explanation: "For past habits, use 'used to + base verb' (not 'am use to').",
        explanationsByLang: {
          hi: "पिछली आदतों के लिए 'used to' का प्रयोग करें: 'I used to study'।",
          es: "Para hábitos pasados, usa 'used to + verbo base': 'I used to study'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l260_1",
      title: "Reflecting on Learning Progress",
      context: "Tanya discusses her language progress with her mentor.",
      lines: [
        { speaker: "Mentor", text: "How do you feel about your English conversational skills now, Tanya?", audioText: "How do you feel about your English conversational skills now, Tanya?", translation: "¿Cómo te sientes acerca de tus habilidades de conversación en inglés ahora, Tanya?" },
        { speaker: "Tanya", text: "I used to feel nervous, but I have gained a lot of confidence over these months.", audioText: "I used to feel nervous, but I have gained a lot of confidence over these months.", translation: "Solía sentirme nerviosa, pero he ganado mucha confianza a lo largo de estos meses." }
      ]
    }
  },

  // Lesson 261: Opinions, Reasons & Respectful Disagreement
  {
    num: 261,
    title: "Opinions, Reasons & Respectful Disagreement",
    concept: "State personal viewpoints on everyday topics, support them with reasons, ask others for their view, and disagree politely and constructively.",
    scaffoldingLevel: "reduced",
    prompts: [
      "In my opinion, living in a walkable city improves quality of life.",
      "I see your point, but I still think public transport is more economical.",
      "From my perspective, working from home provides better work-life balance.",
      "I am afraid I have to disagree with you on that particular issue.",
      "What is your view on replacing physical textbooks with digital tablets?",
      "I agree with you up to a point, but there are also disadvantages to consider.",
      "The main reason I prefer electric vehicles is their lower environmental impact.",
      "I completely agree with what you just mentioned about language practice.",
      "That is a valid argument, although the initial cost is quite high.",
      "It seems to me that regular practice is far more important than talent."
    ],
    vocab: [
      { id: "v_u18_l261_1", word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "a particular attitude toward or way of regarding something; point of view", translationsByLang: { hi: "दृष्टिकोण / नज़रिया", es: "perspectiva / punto de vista" }, exampleSentence: "From my perspective, communication is the key to success.", exampleTranslationByLang: { hi: "मेरे दृष्टिकोण से, संचार ही सफलता की कुंजी है।", es: "Desde mi perspectiva, la comunicación es la clave del éxito." }, audioText: "perspective", audioId: "en_a2_u18_l261_v_1", slowAudioId: "en_a2_u18_l261_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👁️", difficulty: "A2 Elementary" },
      { id: "v_u18_l261_2", word: "disagree", phonetic: "/ˌdɪsəˈɡriː/", meaning: "have or express a different opinion", translationsByLang: { hi: "असहमत होना", es: "discrepar / no estar de acuerdo" }, exampleSentence: "It is normal to disagree politely in a constructive discussion.", exampleTranslationByLang: { hi: "रचनात्मक चर्चा में विनम्रता से असहमत होना सामान्य बात है।", es: "Es normal discrepar cortésmente en una discusión constructiva." }, audioText: "disagree", audioId: "en_a2_u18_l261_v_2", slowAudioId: "en_a2_u18_l261_v_2_slow", voiceId: "EN_TEACHER_01", icon: "⚖️", difficulty: "A2 Elementary" },
      { id: "v_u18_l261_3", word: "economical", phonetic: "/ˌiːkəˈnɒmɪkl/", meaning: "giving good value or return in relation to the money or time spent", translationsByLang: { hi: "किफायती / सस्ता", es: "económico / rentable" }, exampleSentence: "Taking the subway is much more economical than driving a car.", exampleTranslationByLang: { hi: "सबवे लेना कार चलाने की तुलना में कहीं अधिक किफायती है।", es: "Tomar el metro es mucho más económico que conducir un coche." }, audioText: "economical", audioId: "en_a2_u18_l261_v_3", slowAudioId: "en_a2_u18_l261_v_3_slow", voiceId: "EN_TEACHER_01", icon: "💰", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l261_1", expression: "I see what you mean, but...", meaning: "polite disagreement softener", translationsByLang: { hi: "मैं समझता हूँ आपका क्या मतलब है, लेकिन...", es: "Entiendo lo que quieres decir, pero..." }, usageNote: "Essential diplomatic disagreement chunk.", audioText: "I see what you mean, but the cost is too high.", audioId: "en_a2_u18_l261_c_1", slowAudioId: "en_a2_u18_l261_c_1_slow", voiceId: "EN_TEACHER_01", icon: "💬" }
    ],
    grammar: {
      title: "Hedging and Polite Opinion Markers",
      concept: "Use softening modals ('it seems to me', 'I'm afraid', 'up to a point') to express opinions diplomatically.",
      patterns: [
        {
          id: "gp_u18_l261_1",
          title: "Polite Disagreement Framework",
          structure: "I see your point, but + Clause / I agree up to a point, but + Clause",
          explanation: "Maintains respectful tone during debate.",
          examples: [
            {
              english: "I see your point, but we should consider the budget first.",
              translation: "Entiendo tu punto, pero primero deberíamos considerar el presupuesto.",
              translationByLang: { hi: "मैं आपकी बात समझता हूँ, लेकिन हमें पहले बजट पर विचार करना चाहिए।", es: "Entiendo tu punto, pero primero deberíamos considerar el presupuesto." },
              audioText: "I see your point, but we should consider the budget first.",
              audioId: "en_a2_u18_l261_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l261_1",
        incorrect: "I am agree with your opinion.",
        correct: "I agree with your opinion.",
        explanation: "'Agree' is a verb in English, not an adjective. Do not say 'I am agree'.",
        explanationsByLang: {
          hi: "'agree' एक क्रिया है। 'I am agree' न कहें, बल्कि 'I agree' कहें।",
          es: "'Agree' es un verbo. No digas 'I am agree', sino 'I agree'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l261_1",
      title: "Discussing Remote Work",
      context: "Alex and Maya share perspectives on hybrid office policies.",
      lines: [
        { speaker: "Alex", text: "I think everyone should work from the office five days a week for collaboration.", audioText: "I think everyone should work from the office five days a week for collaboration.", translation: "Creo que todos deberían trabajar desde la oficina cinco días a la semana para colaborar." },
        { speaker: "Maya", text: "I see what you mean, but flexible hybrid models give people better productivity.", audioText: "I see what you mean, but flexible hybrid models give people better productivity.", translation: "Entiendo tu punto, pero los modelos híbridos flexibles dan mejor productividad a la gente." }
      ]
    }
  },

  // Lesson 262: Social Interaction, Follow-Up Questions & Conversation Repair
  {
    num: 262,
    title: "Social Interaction, Follow-Up Questions & Conversation Repair",
    concept: "Maintain social dialogue, ask follow-up questions, react empathetically, clarify misunderstandings, and repair communication breakdowns.",
    scaffoldingLevel: "reduced",
    prompts: [
      "Sorry, could you say that again more slowly, please?",
      "That sounds fascinating! How long have you been doing that?",
      "What do you mean by that exactly? Could you give an example?",
      "I am not quite sure I follow. Are you saying the flight is delayed?",
      "Really? That must have been an incredible experience for you!",
      "If I understand correctly, we need to submit the form before Friday.",
      "How did that turn out in the end? Did you get the job?",
      "Excuse me, did you say fifteen dollars or fifty dollars?",
      "Thank you for clarifying that for me; now it makes complete sense.",
      "Anyway, returning to what we were discussing earlier about travel plans..."
    ],
    vocab: [
      { id: "v_u18_l262_1", word: "clarify", phonetic: "/ˈklærəfaɪ/", meaning: "make a statement or situation less confused and more clearly comprehensible", translationsByLang: { hi: "स्पष्ट करना", es: "aclarar / clarificar" }, exampleSentence: "Could you please clarify the departure time for us?", exampleTranslationByLang: { hi: "क्या आप कृपया हमारे लिए प्रस्थान का समय स्पष्ट कर सकते हैं?", es: "¿Podría aclararnos la hora de salida, por favor?" }, audioText: "clarify", audioId: "en_a2_u18_l262_v_1", slowAudioId: "en_a2_u18_l262_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🔍", difficulty: "A2 Elementary" },
      { id: "v_u18_l262_2", word: "fascinating", phonetic: "/ˈfæsɪneɪtɪŋ/", meaning: "extremely interesting and captivating", translationsByLang: { hi: "आकर्षक / बहुत दिलचस्प", es: "fascinante" }, exampleSentence: "Your story about living abroad is truly fascinating.", exampleTranslationByLang: { hi: "विदेश में रहने के बारे में आपकी कहानी वाकई बहुत दिलचस्प है।", es: "Tu historia sobre vivir en el extranjero es verdaderamente fascinante." }, audioText: "fascinating", audioId: "en_a2_u18_l262_v_2", slowAudioId: "en_a2_u18_l262_v_2_slow", voiceId: "EN_TEACHER_01", icon: "✨", difficulty: "A2 Elementary" },
      { id: "v_u18_l262_3", word: "misunderstanding", phonetic: "/ˌmɪsʌndəˈstændɪŋ/", meaning: "a failure to understand something correctly", translationsByLang: { hi: "गलतफहमी", es: "malentendido" }, exampleSentence: "A quick phone call cleared up the misunderstanding.", exampleTranslationByLang: { hi: "एक त्वरित फोन कॉल ने गलतफहमी को दूर कर दिया।", es: "Una llamada rápida aclaró el malentendido." }, audioText: "misunderstanding", audioId: "en_a2_u18_l262_v_3", slowAudioId: "en_a2_u18_l262_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🔄", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l262_1", expression: "If I understand correctly...", meaning: "checking understanding and confirming facts", translationsByLang: { hi: "अगर मैं सही समझ रहा हूँ तो...", es: "Si entiendo correctamente..." }, usageNote: "Active listening and conversation repair phrase.", audioText: "If I understand correctly, we meet at the station gate.", audioId: "en_a2_u18_l262_c_1", slowAudioId: "en_a2_u18_l262_c_1_slow", voiceId: "EN_TEACHER_01", icon: "👂" }
    ],
    grammar: {
      title: "Active Listening, Echo Questions & Clarification Tags",
      concept: "Use echo questions ('Did you say...?', 'Are you saying...?') and rejoinders to keep conversations flowing smoothly.",
      patterns: [
        {
          id: "gp_u18_l262_1",
          title: "Clarification Echo Request",
          structure: "Did you say + Option A + or + Option B?",
          explanation: "Clarifies ambiguous numbers or names in noisy environments.",
          examples: [
            {
              english: "Did you say gate fourteen or forty?",
              translation: "¿Dijiste puerta catorce o cuarenta?",
              translationByLang: { hi: "क्या आपने गेट चौदह कहा या चालीस?", es: "¿Dijiste puerta catorce o cuarenta?" },
              audioText: "Did you say gate fourteen or forty?",
              audioId: "en_a2_u18_l262_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l262_1",
        incorrect: "What means this word?",
        correct: "What does this word mean? / What is the meaning of this word?",
        explanation: "In English questions with simple verbs, use the auxiliary 'does': 'What does this word mean?'.",
        explanationsByLang: {
          hi: "प्रश्न पूछते समय 'does' का प्रयोग करें: 'What does this word mean?'।",
          es: "En preguntas de presente simple, usa el auxiliar 'does': 'What does this word mean?'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l262_1",
      title: "Checking Train Platform Information",
      context: "Raj confirms train announcements with a station agent.",
      lines: [
        { speaker: "Raj", text: "Excuse me, the loudspeaker was unclear. Did you say Platform 3 for the Oxford train?", audioText: "Excuse me, the loudspeaker was unclear. Did you say Platform 3 for the Oxford train?", translation: "Disculpe, el altavoz no se escuchó claro. ¿Dijo plataforma 3 para el tren de Oxford?" },
        { speaker: "Agent", text: "Yes, exactly! Platform 3, departing in ten minutes.", audioText: "Yes, exactly! Platform 3, departing in ten minutes.", translation: "¡Sí, exactamente! Plataforma 3, saliendo en diez minutos." }
      ]
    }
  },

  // Lesson 263: Practical Services & Solving Mixed Everyday Problems
  {
    num: 263,
    title: "Practical Services & Solving Mixed Everyday Problems",
    concept: "Interact with service providers (reception, deliveries, repairs, returns, banking) to state issues, request remedies, and confirm outcomes.",
    scaffoldingLevel: "reduced",
    prompts: [
      "I would like to return this jacket because the zipper is broken.",
      "Could you please check when my parcel is scheduled for delivery?",
      "I was charged twice on my credit card statement for the same purchase.",
      "Can I exchange this shirt for a larger size, please?",
      "I have my original receipt and the tags are still attached to the item.",
      "Could you help me set up mobile banking on my smartphone?",
      "The package arrived damaged, so I would like to request a full refund.",
      "Is it possible to track the courier in real time using this tracking number?",
      "The technician promised to visit between two and five this afternoon.",
      "Thank you for your prompt assistance in resolving this transaction."
    ],
    vocab: [
      { id: "v_u18_l263_1", word: "refund", phonetic: "/ˈriːfʌnd/", meaning: "a repayment of a sum of money", translationsByLang: { hi: "रिफंड / धनवापसी", es: "reembolso" }, exampleSentence: "The store issued a full refund to my original card.", exampleTranslationByLang: { hi: "दुकान ने मेरे मूल कार्ड में पूरा रिफंड जारी कर दिया।", es: "La tienda emitió un reembolso completo a mi tarjeta original." }, audioText: "refund", audioId: "en_a2_u18_l263_v_1", slowAudioId: "en_a2_u18_l263_v_1_slow", voiceId: "EN_TEACHER_01", icon: "💳", difficulty: "A2 Elementary" },
      { id: "v_u18_l263_2", word: "exchange", phonetic: "/ɪksˈtʃeɪndʒ/", meaning: "give something and receive something else in return", translationsByLang: { hi: "बदलना / एक्सचेंज करना", es: "cambiar / canjear" }, exampleSentence: "I would like to exchange this sweater for a medium.", exampleTranslationByLang: { hi: "मैं इस स्वेटर को मध्यम आकार से बदलना चाहूँगा।", es: "Me gustaría cambiar este suéter por una talla mediana." }, audioText: "exchange", audioId: "en_a2_u18_l263_v_2", slowAudioId: "en_a2_u18_l263_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🔄", difficulty: "A2 Elementary" },
      { id: "v_u18_l263_3", word: "receipt", phonetic: "/rɪˈsiːt/", meaning: "a written acknowledgment of having received a specified amount of money or goods", translationsByLang: { hi: "रसीद", es: "recibo / comprobante" }, exampleSentence: "Please keep your receipt in case you need a warranty repair.", exampleTranslationByLang: { hi: "यदि आपको वारंटी मरम्मत की आवश्यकता हो तो कृपया अपनी रसीद संभाल कर रखें।", es: "Guarde su recibo en caso de que necesite una reparación bajo garantía." }, audioText: "receipt", audioId: "en_a2_u18_l263_v_3", slowAudioId: "en_a2_u18_l263_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🧾", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l263_1", expression: "I'd like to request a refund", meaning: "formal polite consumer request", translationsByLang: { hi: "मैं धनवापसी का अनुरोध करना चाहूँगा", es: "Me gustaría solicitar un reembolso" }, usageNote: "High-frequency consumer interaction phrase.", audioText: "I'd like to request a refund for this broken item.", audioId: "en_a2_u18_l263_c_1", slowAudioId: "en_a2_u18_l263_c_1_slow", voiceId: "EN_TEACHER_01", icon: "💵" }
    ],
    grammar: {
      title: "Polite Consumer Requests (I would like to + Verb / Could you please + Verb)",
      concept: "Use conditional polite modals for service encounters and consumer transactions.",
      patterns: [
        {
          id: "gp_u18_l263_1",
          title: "Service Encounter Request",
          structure: "I would like to + return / exchange / report + Noun Phrase",
          explanation: "Polite customer service opening.",
          examples: [
            {
              english: "I would like to return this defective charger.",
              translation: "Me gustaría devolver este cargador defectuoso.",
              translationByLang: { hi: "मैं इस खराब चार्जर को वापस करना चाहूँगा।", es: "Me gustaría devolver este cargador defectuoso." },
              audioText: "I would like to return this defective charger.",
              audioId: "en_a2_u18_l263_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l263_1",
        incorrect: "I want that you change this shirt.",
        correct: "Could you please exchange this shirt for me? / I would like to exchange this shirt.",
        explanation: "In English customer service, 'I want that you...' sounds aggressive. Use polite requests.",
        explanationsByLang: {
          hi: "दुकान में 'I want that you' न कहें, बल्कि विनम्रता से 'Could you please exchange this shirt?' कहें।",
          es: "En atención al cliente, 'I want that you' suena descortés. Usa 'Could you please exchange this shirt?'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l263_1",
      title: "Returning an Online Order",
      context: "Liam brings an online purchase to the store customer service counter.",
      lines: [
        { speaker: "Liam", text: "Hello, I would like to return these headphones. The left earbud has no sound.", audioText: "Hello, I would like to return these headphones. The left earbud has no sound.", translation: "Hola, me gustaría devolver estos auriculares. El auricular izquierdo no tiene sonido." },
        { speaker: "Clerk", text: "Certainly! Do you have the order number or digital receipt?", audioText: "Certainly! Do you have the order number or digital receipt?", translation: "¡Por supuesto! ¿Tiene el número de pedido o recibo digital?" },
        { speaker: "Liam", text: "Yes, here is the barcode on my smartphone.", audioText: "Yes, here is the barcode on my smartphone.", translation: "Sí, aquí está el código de barras en mi teléfono." }
      ]
    }
  },

  // Lesson 264: Listening to Connected Everyday Conversations
  {
    num: 264,
    title: "Listening to Connected Everyday Conversations",
    concept: "Extract key details, identify speaker intentions, follow narrative sequences, and decode spontaneous spoken English with connected speech.",
    scaffoldingLevel: "mixed_independent",
    prompts: [
      "The announcement said the express train will depart from Platform 7.",
      "According to the speaker, the registration fee must be paid in cash.",
      "The doctor advised the patient to rest and drink plenty of warm fluids.",
      "Both colleagues agreed to postpone the budget review until next week.",
      "The tour guide mentioned that the cathedral was constructed in the twelfth century.",
      "She sounded worried because she couldn't locate her boarding pass.",
      "The barista asked if they preferred regular milk, oat milk, or soy milk.",
      "The mechanic explained that the car brakes would take two hours to replace.",
      "He suggested booking tickets online in advance to avoid long entrance queues.",
      "The speaker emphasized that safety helmets must be worn at all times."
    ],
    vocab: [
      { id: "v_u18_l264_1", word: "intention", phonetic: "/ɪnˈtenʃn/", meaning: "an aim or plan", translationsByLang: { hi: "इरादा / उद्देश्य", es: "intención / propósito" }, exampleSentence: "His intention was to assist the travelers, not to delay them.", exampleTranslationByLang: { hi: "उसका इरादा यात्रियों की मदद करना था, उन्हें देर कराना नहीं।", es: "Su intención era ayudar a los viajeros, no retrasarlos." }, audioText: "intention", audioId: "en_a2_u18_l264_v_1", slowAudioId: "en_a2_u18_l264_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎯", difficulty: "A2 Elementary" },
      { id: "v_u18_l264_2", word: "emphasize", phonetic: "/ˈemfəsaɪz/", meaning: "give special importance or prominence to something in speaking or writing", translationsByLang: { hi: "जोर देना / रेखांकित करना", es: "enfatizar / destacar" }, exampleSentence: "The teacher emphasized the importance of regular listening practice.", exampleTranslationByLang: { hi: "शिक्षक ने नियमित सुनने के अभ्यास के महत्व पर जोर दिया।", es: "El profesor enfatizó la importancia de la práctica auditiva regular." }, audioText: "emphasize", audioId: "en_a2_u18_l264_v_2", slowAudioId: "en_a2_u18_l264_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📢", difficulty: "A2 Elementary" },
      { id: "v_u18_l264_3", word: "colleague", phonetic: "/ˈkɒliːɡ/", meaning: "a person with whom one works in a profession or business", translationsByLang: { hi: "सहकर्मी", es: "colega / compañero de trabajo" }, exampleSentence: "My colleague helped me finish the presentation slides.", exampleTranslationByLang: { hi: "मेरे सहकर्मी ने प्रेजेंटेशन स्लाइड्स पूरी करने में मेरी मदद की।", es: "Mi colega me ayudó a terminar las diapositivas de la presentación." }, audioText: "colleague", audioId: "en_a2_u18_l264_v_3", slowAudioId: "en_a2_u18_l264_v_3_slow", voiceId: "EN_TEACHER_01", icon: "👥", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l264_1", expression: "In advance", meaning: "ahead of time; beforehand", translationsByLang: { hi: "पहले से ही / अग्रिम रूप से", es: "Con antelación / Por adelantado" }, usageNote: "High-frequency operational chunk.", audioText: "Please book your museum tickets in advance.", audioId: "en_a2_u18_l264_c_1", slowAudioId: "en_a2_u18_l264_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎟️" }
    ],
    grammar: {
      title: "Decoding Connected Speech and Weak Forms (wanna / gonna / could've)",
      concept: "Recognize spoken reductions ('gonna', 'wanna', 'could've') and weak prepositions in natural fast English dialogue.",
      patterns: [
        {
          id: "gp_u18_l264_1",
          title: "Connected Speech Reduction Recognition",
          structure: "Spoken 'gonna / wanna' = Written 'going to / want to'",
          explanation: "Understands spoken natural reductions without misinterpreting meaning.",
          examples: [
            {
              english: "We're gonna miss our bus if we don't hurry.",
              translation: "Vamos a perder el autobús si no nos damos prisa.",
              translationByLang: { hi: "अगर हम जल्दी नहीं करेंगे तो हमारी बस छूट जाएगी।", es: "Vamos a perder el autobús si no nos damos prisa." },
              audioText: "We're gonna miss our bus if we don't hurry.",
              audioId: "en_a2_u18_l264_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l264_1",
        incorrect: "I heard the announcement that the train cancel.",
        correct: "I heard the announcement that the train was canceled / has been canceled.",
        explanation: "Use past passive 'was canceled' for completed actions reported by speakers.",
        explanationsByLang: {
          hi: "घोषणाओं की रिपोर्ट करते समय पैसिव वॉइस का प्रयोग करें: 'the train was canceled'।",
          es: "Al reportar anuncios, usa la voz pasiva: 'the train was canceled'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l264_1",
      title: "Listening to Airport Gate Announcements",
      context: "Passengers listen to flight boarding updates at an international airport.",
      lines: [
        { speaker: "Announcer", text: "Attention all passengers on flight BA 284 to London. Boarding will now commence at Gate 19.", audioText: "Attention all passengers on flight BA 284 to London. Boarding will now commence at Gate 19.", translation: "Atención a todos los pasajeros del vuelo BA 284 a Londres. El embarque comenzará ahora en la puerta 19." },
        { speaker: "Passenger", text: "Did she say Gate 19? We'd better walk over right away.", audioText: "Did she say Gate 19? We'd better walk over right away.", translation: "¿Dijo la puerta 19? Será mejor que caminemos de inmediato." }
      ]
    }
  },

  // Lesson 265: Reading Real-World Information & Identifying Key Points
  {
    num: 265,
    title: "Reading Real-World Information & Identifying Key Points",
    concept: "Read and decode everyday practical texts: notices, emails, schedules, rules, reviews, and announcements to extract essential information.",
    scaffoldingLevel: "mixed_independent",
    prompts: [
      "According to the notice, the public swimming pool is closed on Mondays.",
      "The email states that all staff members must complete the safety survey.",
      "Please review the rental agreement terms regarding the security deposit.",
      "The apartment guidelines clearly prohibit loud music after ten at night.",
      "The museum brochure indicates that student discounts require valid school ID.",
      "The doctor's prescription advises taking one tablet after breakfast daily.",
      "The warranty policy covers accidental hardware damages for twelve full months.",
      "The library notice reminds visitors to return borrowed books within three weeks.",
      "The job posting lists intermediate English proficiency as a mandatory requirement.",
      "Reading the small print prevented us from paying unexpected hidden fees."
    ],
    vocab: [
      { id: "v_u18_l265_1", word: "prohibit", phonetic: "/prəˈhɪbɪt/", meaning: "formally forbid something by law, rule, or other authority", translationsByLang: { hi: "निषेध करना / मना करना", es: "prohibir" }, exampleSentence: "Smoking is strictly prohibited throughout the facility.", exampleTranslationByLang: { hi: "पूरे परिसर में धूम्रपान सख्त वर्जित है।", es: "Está estrictamente prohibido fumar en toda la instalación." }, audioText: "prohibit", audioId: "en_a2_u18_l265_v_1", slowAudioId: "en_a2_u18_l265_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🚫", difficulty: "A2 Elementary" },
      { id: "v_u18_l265_2", word: "guidelines", phonetic: "/ˈɡaɪdlaɪnz/", meaning: "general rules, principles, or pieces of advice", translationsByLang: { hi: "दिशा-निर्देश", es: "pautas / directrices" }, exampleSentence: "Follow the safety guidelines when operating the equipment.", exampleTranslationByLang: { hi: "उपकरण का संचालन करते समय सुरक्षा दिशानिर्देशों का पालन करें।", es: "Siga las pautas de seguridad al operar el equipo." }, audioText: "guidelines", audioId: "en_a2_u18_l265_v_2", slowAudioId: "en_a2_u18_l265_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📋", difficulty: "A2 Elementary" },
      { id: "v_u18_l265_3", word: "mandatory", phonetic: "/ˈmændətəri/", meaning: "required by law or rules; compulsory", translationsByLang: { hi: "अनिवार्य / बाध्यकारी", es: "obligatorio / mandatorio" }, exampleSentence: "Wearing a life vest is mandatory on all boat tours.", exampleTranslationByLang: { hi: "सभी नाव यात्राओं पर लाइफ वेस्ट पहनना अनिवार्य है।", es: "El uso de chaleco salvavidas es obligatorio en todos los paseos en barco." }, audioText: "mandatory", audioId: "en_a2_u18_l265_v_3", slowAudioId: "en_a2_u18_l265_v_3_slow", voiceId: "EN_TEACHER_01", icon: "⚠️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l265_1", expression: "Terms and conditions", meaning: "rules under which a service or agreement operates", translationsByLang: { hi: "नियम और शर्तें", es: "Términos y condiciones" }, usageNote: "Standard practical contract chunk.", audioText: "Please read the terms and conditions carefully.", audioId: "en_a2_u18_l265_c_1", slowAudioId: "en_a2_u18_l265_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📄" }
    ],
    grammar: {
      title: "Modal Obligations and Permissions in Written Texts (must / must not / may / are required to)",
      concept: "Understand the differences between obligation ('must / required to'), prohibition ('must not / prohibited'), and permission ('may / permitted').",
      patterns: [
        {
          id: "gp_u18_l265_1",
          title: "Written Rule Syntax",
          structure: "Visitors / Passengers + are required to + Base Verb",
          explanation: "Formal written notices for public rules.",
          examples: [
            {
              english: "Passengers are required to show photo identification.",
              translation: "Los pasajeros deben mostrar una identificación con foto.",
              translationByLang: { hi: "यात्रियों को फोटो पहचान पत्र दिखाना आवश्यक है।", es: "Los pasajeros deben mostrar una identificación con foto." },
              audioText: "Passengers are required to show photo identification.",
              audioId: "en_a2_u18_l265_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l265_1",
        incorrect: "You must not to enter without a badge.",
        correct: "You must not enter without a badge.",
        explanation: "Do not use 'to' after modal verbs like 'must not'.",
        explanationsByLang: {
          hi: "'must not' के बाद 'to' का प्रयोग न करें: 'must not enter'।",
          es: "No uses 'to' después de verbos modales como 'must not'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l265_1",
      title: "Interpreting Building Regulations",
      context: "Marta reads the residential building noticeboard to her roommate.",
      lines: [
        { speaker: "Marta", text: "Look at this new notice: recycling bins must be put outside before seven in the morning.", audioText: "Look at this new notice: recycling bins must be put outside before seven in the morning.", translation: "Mira este nuevo aviso: los contenedores de reciclaje deben colocarse afuera antes de las siete de la mañana." },
        { speaker: "Roommate", text: "Good to know! We should put them out tonight so we don't forget.", audioText: "Good to know! We should put them out tonight so we don't forget.", translation: "¡Es bueno saberlo! Deberíamos sacarlos esta noche para no olvidarnos." }
      ]
    }
  },

  // Lesson 266: Writing Connected Messages, Emails & Short Narratives
  {
    num: 266,
    title: "Writing Connected Messages, Emails & Short Narratives",
    concept: "Write clear, coherent 50–80 word emails, messages, personal updates, and short narratives with logical connectors and paragraphing.",
    scaffoldingLevel: "mixed_independent",
    prompts: [
      "Dear Mr. Davis, I am writing to inquire about the summer internship position.",
      "Thank you for your prompt response; I look forward to hearing from you soon.",
      "First, we visited the national gallery, and later, we had lunch near the river.",
      "Please let me know if you need any additional documentation from my side.",
      "Although the weather was chilly, we thoroughly enjoyed our weekend road trip.",
      "I am attaching my updated resume for your review and consideration.",
      "To begin with, let me thank you for organizing such a wonderful conference.",
      "In conclusion, I believe this project will greatly benefit our local community.",
      "Feel free to reach out if you have any questions or require clarification.",
      "Best regards, and I hope you have a restful and productive weekend ahead."
    ],
    vocab: [
      { id: "v_u18_l266_1", word: "inquire", phonetic: "/ɪnˈkwaɪə/", meaning: "ask for information from someone", translationsByLang: { hi: "पूछताछ करना / जानकारी मांगना", es: "preguntar / consultar" }, exampleSentence: "I am writing to inquire about the course fees and schedule.", exampleTranslationByLang: { hi: "मैं पाठ्यक्रम शुल्क और समय सारिणी के बारे में पूछताछ करने के लिए लिख रहा हूँ।", es: "Le escribo para consultar sobre los precios y el horario del curso." }, audioText: "inquire", audioId: "en_a2_u18_l266_v_1", slowAudioId: "en_a2_u18_l266_v_1_slow", voiceId: "EN_TEACHER_01", icon: "✉️", difficulty: "A2 Elementary" },
      { id: "v_u18_l266_2", word: "attach", phonetic: "/əˈtætʃ/", meaning: "join or fasten (something) to something else; add an email file", translationsByLang: { hi: "संलग्न करना / जोड़ना", es: "adjuntar" }, exampleSentence: "I have attached the invoice to this email.", exampleTranslationByLang: { hi: "मैंने इस ईमेल में चालान संलग्न कर दिया है।", es: "He adjuntado la factura a este correo electrónico." }, audioText: "attach", audioId: "en_a2_u18_l266_v_2", slowAudioId: "en_a2_u18_l266_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📎", difficulty: "A2 Elementary" },
      { id: "v_u18_l266_3", word: "regards", phonetic: "/rɪˈɡɑːdz/", meaning: "best wishes (used as a closing in letters or emails)", translationsByLang: { hi: "सादर / शुभकामनाएँ", es: "saludos / cordiales saludos" }, exampleSentence: "Kind regards, Elena Gomez.", exampleTranslationByLang: { hi: "सादर, ऐलेना गोमेज़।", es: "Saludos cordiales, Elena Gómez." }, audioText: "regards", audioId: "en_a2_u18_l266_v_3", slowAudioId: "en_a2_u18_l266_v_3_slow", voiceId: "EN_TEACHER_01", icon: "✍️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l266_1", expression: "I look forward to hearing from you", meaning: "standard polite email closing", translationsByLang: { hi: "मैं आपके उत्तर की प्रतीक्षा कर रहा हूँ", es: "Espero tener noticias suyas pronto" }, usageNote: "Classic professional correspondence closing chunk.", audioText: "I look forward to hearing from you soon.", audioId: "en_a2_u18_l266_c_1", slowAudioId: "en_a2_u18_l266_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📬" }
    ],
    grammar: {
      title: "Cohesive Email Structure and Discourse Linkers (First / Although / In conclusion)",
      concept: "Structure short emails: Salutation -> Purpose -> Body with linkers -> Call to action -> Sign-off.",
      patterns: [
        {
          id: "gp_u18_l266_1",
          title: "Purpose Opening in Formal Email",
          structure: "I am writing to + Base Verb (inquire / confirm / apply / request)",
          explanation: "Clear, professional opening statement for written messages.",
          examples: [
            {
              english: "I am writing to confirm my attendance at tomorrow's workshop.",
              translation: "Le escribo para confirmar mi asistencia al taller de mañana.",
              translationByLang: { hi: "मैं कल की कार्यशाला में अपनी उपस्थिति की पुष्टि करने के लिए लिख रहा हूँ।", es: "Le escribo para confirmar mi asistencia al taller de mañana." },
              audioText: "I am writing to confirm my attendance at tomorrow's workshop.",
              audioId: "en_a2_u18_l266_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l266_1",
        incorrect: "I look forward to hear from you.",
        correct: "I look forward to hearing from you.",
        explanation: "'Look forward to' is followed by a gerund (verb + -ing), not a base verb.",
        explanationsByLang: {
          hi: "'look forward to' के बाद verb + ing का उपयोग करें: 'hearing from you'।",
          es: "'Look forward to' va seguido de gerundio: 'hearing from you'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l266_1",
      title: "Drafting a Professional Inquiry",
      context: "Kenji reviews his inquiry email draft with a colleague.",
      lines: [
        { speaker: "Kenji", text: "Could you check my email to the admissions office? Does it sound polite?", audioText: "Could you check my email to the admissions office? Does it sound polite?", translation: "¿Podrías revisar mi correo para la oficina de admisiones? ¿Suena cortés?" },
        { speaker: "Colleague", text: "It looks great! The opening is clear and 'Kind regards' is the perfect sign-off.", audioText: "It looks great! The opening is clear and 'Kind regards' is the perfect sign-off.", translation: "¡Se ve genial! La apertura es clara y 'Kind regards' es la despedida perfecta." }
      ]
    }
  },

  // Lesson 267: True Mediation: Relaying and Explaining Information
  {
    num: 267,
    title: "True Mediation: Relaying and Explaining Information",
    concept: "Relay schedules, instructions, notices, and spoken decisions to another person clearly, explaining the key points in simple English.",
    scaffoldingLevel: "mixed_independent",
    prompts: [
      "The receptionist said that breakfast is served on the third floor from seven to ten.",
      "The sign says we cannot park here because it is a designated loading zone.",
      "According to the doctor, you should take this medication twice a day with meals.",
      "My friend asked me to explain what the ticket machine instructions mean.",
      "The guide explained that visitors must take off their shoes before entering.",
      "The text message from the airline says our flight has been rescheduled for six PM.",
      "He wants to know if there is a pharmacy nearby that stays open all night.",
      "The manager announced that tomorrow's morning meeting has been canceled.",
      "She asked me to translate the cooking instructions on the noodle package.",
      "In short, the notice means we have to register online before attending."
    ],
    vocab: [
      { id: "v_u18_l267_1", word: "relay", phonetic: "/ˈriːleɪ/", meaning: "receive and pass on information or a message", translationsByLang: { hi: "आगे पहुँचाना / संदेश देना", es: "transmitir / retransmitir" }, exampleSentence: "I will relay your message to the team leader immediately.", exampleTranslationByLang: { hi: "मैं आपका संदेश तुरंत टीम लीडर तक पहुँचा दूंगा।", es: "Transmitiré su mensaje al líder del equipo de inmediato." }, audioText: "relay", audioId: "en_a2_u18_l267_v_1", slowAudioId: "en_a2_u18_l267_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🔄", difficulty: "A2 Elementary" },
      { id: "v_u18_l267_2", word: "designated", phonetic: "/ˈdezɪɡneɪtɪd/", meaning: "officially assigned to a specified purpose or role", translationsByLang: { hi: "निर्दिष्ट / तय किया हुआ", es: "designado / asignado" }, exampleSentence: "Please leave your bicycle in the designated parking area.", exampleTranslationByLang: { hi: "कृपया अपनी साइकिल निर्दिष्ट पार्किंग क्षेत्र में छोड़ें।", es: "Por favor deje su bicicleta en el área de estacionamiento designada." }, audioText: "designated", audioId: "en_a2_u18_l267_v_2", slowAudioId: "en_a2_u18_l267_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📍", difficulty: "A2 Elementary" },
      { id: "v_u18_l267_3", word: "instructions", phonetic: "/ɪnˈstrʌkʃnz/", meaning: "detailed directions on how something should be done or used", translationsByLang: { hi: "निर्देश / हिदायतें", es: "instrucciones" }, exampleSentence: "Follow the assembly instructions carefully to build the desk.", exampleTranslationByLang: { hi: "डेस्क बनाने के लिए असेंबली निर्देशों का ध्यानपूर्वक पालन करें।", es: "Siga las instrucciones de montaje cuidadosamente para armar el escritorio." }, audioText: "instructions", audioId: "en_a2_u18_l267_v_3", slowAudioId: "en_a2_u18_l267_v_3_slow", voiceId: "EN_TEACHER_01", icon: "📑", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l267_1", expression: "In short, it means...", meaning: "summarizing mediated information clearly", translationsByLang: { hi: "संक्षेप में इसका मतलब है...", es: "En resumen, significa..." }, usageNote: "Essential communicative mediation chunk.", audioText: "In short, it means we have to wait here for ten minutes.", audioId: "en_a2_u18_l267_c_1", slowAudioId: "en_a2_u18_l267_c_1_slow", voiceId: "EN_TEACHER_01", icon: "💡" }
    ],
    grammar: {
      title: "Reported Speech for Practical Mediation (He said that / The notice says that)",
      concept: "Relay third-party information clearly: 'The sign says that...', 'She told me that...'.",
      patterns: [
        {
          id: "gp_u18_l267_1",
          title: "Relaying Rules and Instructions",
          structure: "The sign / notice / person + says / said + that + Clause",
          explanation: "Simplifies complex third-party notices into clear spoken English.",
          examples: [
            {
              english: "The sign says that photography is not allowed inside the temple.",
              translation: "El letrero dice que no se permite tomar fotos dentro del templo.",
              translationByLang: { hi: "बोर्ड पर लिखा है कि मंदिर के अंदर फोटोग्राफी की अनुमति नहीं है।", es: "El letrero dice que no se permite tomar fotos dentro del templo." },
              audioText: "The sign says that photography is not allowed inside the temple.",
              audioId: "en_a2_u18_l267_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l267_1",
        incorrect: "He said me that the train is late.",
        correct: "He told me that the train is late. / He said that the train is late.",
        explanation: "'Tell' takes a personal object ('told me'), whereas 'say' does not ('said that').",
        explanationsByLang: {
          hi: "'said me' न कहें। 'told me' या 'said that' का प्रयोग करें।",
          es: "No digas 'said me'. Usa 'told me' o 'said that'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l267_1",
      title: "Explaining a Transit Notice to a Friend",
      context: "Ananya explains a metro maintenance notice to her travel companion.",
      lines: [
        { speaker: "Companion", text: "What does that red notice on the ticket barrier say, Ananya?", audioText: "What does that red notice on the ticket barrier say, Ananya?", translation: "¿Qué dice ese aviso rojo en la barrera de billetes, Ananya?" },
        { speaker: "Ananya", text: "It says the Red Line is closed for track repairs. We need to take the Blue Line instead.", audioText: "It says the Red Line is closed for track repairs. We need to take the Blue Line instead.", translation: "Dice que la Línea Roja está cerrada por reparaciones en las vías. Tenemos que tomar la Línea Azul en su lugar." }
      ]
    }
  },

  // Lesson 268: Integrated Speaking Performance with Reduced Scaffolding
  {
    num: 268,
    title: "Integrated Speaking Performance with Reduced Scaffolding",
    concept: "Speak spontaneously on familiar topics, answer open-ended questions, explain situations, and tell short stories without textual prompts.",
    scaffoldingLevel: "low",
    prompts: [
      "Tell me about a memorable trip you took and what made it so special.",
      "Describe what a typical productive weekday looks like in your life.",
      "Explain how you usually handle unexpected travel delays or problems.",
      "What are the advantages and disadvantages of living in a large metropolis?",
      "Describe a skill you have learned recently and how you practiced it.",
      "How do you prefer to spend your weekends when you want to relax?",
      "Explain your favorite dish and describe how to prepare it simply.",
      "Tell a short story about a time when you received surprising news.",
      "What changes would you like to make in your daily routine this year?",
      "Give your opinion on the best way to maintain long-lasting friendships."
    ],
    vocab: [
      { id: "v_u18_l268_1", word: "spontaneous", phonetic: "/spɒnˈteɪniəs/", meaning: "performed or occurring as a result of a sudden impulse without premeditation", translationsByLang: { hi: "स्वाभाविक / तत्कालिक", es: "espontáneo" }, exampleSentence: "Speaking spontaneously builds true conversational fluency.", exampleTranslationByLang: { hi: "सहज रूप से बोलना वास्तविक संवादात्मक प्रवाह का निर्माण करता है।", es: "Hablar de forma espontánea desarrolla una verdadera fluidez conversacional." }, audioText: "spontaneous", audioId: "en_a2_u18_l268_v_1", slowAudioId: "en_a2_u18_l268_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎙️", difficulty: "A2 Elementary" },
      { id: "v_u18_l268_2", word: "metropolis", phonetic: "/məˈtrɒpəlɪs/", meaning: "a very large and densely populated city", translationsByLang: { hi: "महानगर", es: "metrópoli / gran ciudad" }, exampleSentence: "Tokyo is a bustling modern metropolis with efficient transit.", exampleTranslationByLang: { hi: "टोक्यो कुशल पारगमन वाला एक हलचल भरा आधुनिक महानगर है।", es: "Tokio es una metrópoli moderna y bulliciosa con un transporte eficiente." }, audioText: "metropolis", audioId: "en_a2_u18_l268_v_2", slowAudioId: "en_a2_u18_l268_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏙️", difficulty: "A2 Elementary" },
      { id: "v_u18_l268_3", word: "routine", phonetic: "/ruːˈtiːn/", meaning: "a sequence of actions regularly followed", translationsByLang: { hi: "दिनचर्या", es: "rutina" }, exampleSentence: "My morning routine includes meditation and a healthy breakfast.", exampleTranslationByLang: { hi: "मेरी सुबह की दिनचर्या में ध्यान और स्वस्थ नाश्ता शामिल है।", es: "Mi rutina matutina incluye meditación y un desayuno saludable." }, audioText: "routine", audioId: "en_a2_u18_l268_v_3", slowAudioId: "en_a2_u18_l268_v_3_slow", voiceId: "EN_TEACHER_01", icon: "⏰", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l268_1", expression: "To tell you the truth...", meaning: "speaking candidly and naturally", translationsByLang: { hi: "सच बताऊं तो...", es: "A decir verdad..." }, usageNote: "Conversational discourse marker for spontaneous speech.", audioText: "To tell you the truth, I was quite surprised by the result.", audioId: "en_a2_u18_l268_c_1", slowAudioId: "en_a2_u18_l268_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🗣️" }
    ],
    grammar: {
      title: "Multi-Sentence Spoken Discourse Structuring",
      concept: "Combine opening assertion -> supporting detail -> personal example -> concluding reflection in spoken turns.",
      patterns: [
        {
          id: "gp_u18_l268_1",
          title: "Extended Turn Speaking Pattern",
          structure: "Well, in my view... For example... That's why I believe...",
          explanation: "Structures 3-4 sentence spoken answers smoothly.",
          examples: [
            {
              english: "Well, I love cooking because it helps me unwind after work. For example, yesterday I made fresh pasta.",
              translation: "Bueno, me encanta cocinar porque me ayuda a relajarme después del trabajo. Por ejemplo, ayer hice pasta fresca.",
              translationByLang: { hi: "खैर, मुझे खाना बनाना पसंद है क्योंकि यह काम के बाद मुझे तनावमुक्त करने में मदद करता है। उदाहरण के लिए, कल मैंने ताज़ा पास्ता बनाया।", es: "Bueno, me encanta cocinar porque me ayuda a relajarme después del trabajo. Por ejemplo, ayer hice pasta fresca." },
              audioText: "Well, I love cooking because it helps me unwind after work. For example, yesterday I made fresh pasta.",
              audioId: "en_a2_u18_l268_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l268_1",
        incorrect: "Yesterday I have visited my grandparents.",
        correct: "Yesterday I visited my grandparents.",
        explanation: "When a specific past time ('yesterday', 'last year') is mentioned, use Past Simple, not Present Perfect.",
        explanationsByLang: {
          hi: "जब 'yesterday' जैसा विशिष्ट भूतकाल का समय दिया गया हो, तो Past Simple का उपयोग करें: 'visited'।",
          es: "Cuando se menciona un tiempo pasado específico ('yesterday'), usa Past Simple: 'visited'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l268_1",
      title: "Spontaneous Interview Response",
      context: "Examiner asks Diego to speak about his hometown.",
      lines: [
        { speaker: "Examiner", text: "Diego, could you describe your favorite place in your hometown?", audioText: "Diego, could you describe your favorite place in your hometown?", translation: "Diego, ¿podrías describir tu lugar favorito en tu ciudad natal?" },
        { speaker: "Diego", text: "Certainly! My favorite spot is the riverside park because it is quiet and full of green trees. I often go there on Sundays to read.", audioText: "Certainly! My favorite spot is the riverside park because it is quiet and full of green trees. I often go there on Sundays to read.", translation: "¡Ciertamente! Mi lugar favorito es el parque junto al río porque es tranquilo y lleno de árboles verdes. A menudo voy allí los domingos a leer." }
      ]
    }
  },

  // Lesson 269: Integrated A2 Communication Simulation
  {
    num: 269,
    title: "Integrated A2 Communication Simulation",
    concept: "Handle end-to-end everyday scenarios: scheduling a meeting, solving a travel mishap, giving advice, and mediating information in real time.",
    scaffoldingLevel: "low",
    prompts: [
      "Good morning, I have an appointment with Dr. Peterson at ten thirty.",
      "Could you recommend a reasonably priced restaurant with vegetarian options?",
      "I lost my hotel room key card near the swimming pool area.",
      "If you take the express train, you will arrive twenty minutes earlier.",
      "I would suggest checking the reviews online before making a final booking.",
      "Excuse me, could you tell me how to get to the nearest metro station?",
      "I called customer service, and they agreed to replace the damaged item.",
      "Let's meet outside the cinema fifteen minutes before the movie starts.",
      "Thank you for all your help; I really appreciate your kind assistance.",
      "We managed to solve the entire issue smoothly and catch our train on time."
    ],
    vocab: [
      { id: "v_u18_l269_1", word: "simulation", phonetic: "/ˌsɪmjuˈleɪʃn/", meaning: "the imitation of the operation of a real-world process or system", translationsByLang: { hi: "अनुरूपण / व्यावहारिक अभ्यास", es: "simulación / práctica real" }, exampleSentence: "This communicative simulation tests all your A2 English skills.", exampleTranslationByLang: { hi: "यह संवादात्मक अभ्यास आपके सभी A2 अंग्रेजी कौशलों का परीक्षण करता है।", es: "Esta simulación comunicativa evalúa todas tus habilidades de inglés A2." }, audioText: "simulation", audioId: "en_a2_u18_l269_v_1", slowAudioId: "en_a2_u18_l269_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎭", difficulty: "A2 Elementary" },
      { id: "v_u18_l269_2", word: "reasonably", phonetic: "/ˈriːznəbli/", meaning: "to a moderate or acceptable degree; fairly", translationsByLang: { hi: "उचित रूप से / वाजिब तौर पर", es: "razonablemente" }, exampleSentence: "The lunch menu is reasonably priced and delicious.", exampleTranslationByLang: { hi: "दोपहर के भोजन का मेनू उचित मूल्य और स्वादिष्ट है।", es: "El menú del almuerzo tiene un precio razonable y es delicioso." }, audioText: "reasonably", audioId: "en_a2_u18_l269_v_2", slowAudioId: "en_a2_u18_l269_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏷️", difficulty: "A2 Elementary" },
      { id: "v_u18_l269_3", word: "appreciate", phonetic: "/əˈpriːʃieɪt/", meaning: "recognize the full worth of; be grateful for", translationsByLang: { hi: "सराहना करना / आभारी होना", es: "apreciar / agradecer" }, exampleSentence: "I truly appreciate your assistance during our trip.", exampleTranslationByLang: { hi: "हमारी यात्रा के दौरान आपकी सहायता की मैं वास्तव में सराहना करता हूँ।", es: "Realmente aprecio tu ayuda durante nuestro viaje." }, audioText: "appreciate", audioId: "en_a2_u18_l269_v_3", slowAudioId: "en_a2_u18_l269_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🙏", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l269_1", expression: "I really appreciate your help", meaning: "warm, sincere expression of gratitude", translationsByLang: { hi: "मैं आपकी मदद की बहुत सराहना करता हूँ", es: "Realmente aprecio tu ayuda" }, usageNote: "Polite, universally appreciated social closure.", audioText: "Thank you so much, I really appreciate your help.", audioId: "en_a2_u18_l269_c_1", slowAudioId: "en_a2_u18_l269_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🤝" }
    ],
    grammar: {
      title: "Integrated Conditional Advice and Suggestion Formulations",
      concept: "Use first conditionals ('If you take... you will...') and modal recommendations ('I would suggest -ing / checking').",
      patterns: [
        {
          id: "gp_u18_l269_1",
          title: "Advisory First Conditional",
          structure: "If + Present Simple, you will / can + Base Verb",
          explanation: "Gives clear, practical advice in simulations.",
          examples: [
            {
              english: "If you leave now, you will avoid the evening rush hour traffic.",
              translation: "Si sales ahora, evitarás el tráfico de la hora punta de la tarde.",
              translationByLang: { hi: "यदि आप अभी निकलते हैं, तो आप शाम के व्यस्त समय के ट्रैफ़िक से बच जाएंगे।", es: "Si sales ahora, evitarás el tráfico de la hora punta de la tarde." },
              audioText: "If you leave now, you will avoid the evening rush hour traffic.",
              audioId: "en_a2_u18_l269_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l269_1",
        incorrect: "If you will leave now, you will arrive early.",
        correct: "If you leave now, you will arrive early.",
        explanation: "In the 'if-clause' of a first conditional, use Present Simple, not 'will'.",
        explanationsByLang: {
          hi: "प्रथम कंडीशनल के 'if-clause' में 'will' का प्रयोग न करें, Present Simple का उपयोग करें: 'If you leave'।",
          es: "En la cláusula 'if' de un primer condicional, usa Present Simple, no 'will'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l269_1",
      title: "Real-World Travel Scenario",
      context: "Tourist asks an information officer for advice on visiting historical sites.",
      lines: [
        { speaker: "Tourist", text: "Excuse me, what is the best way to visit the castle and the old bridge in one afternoon?", audioText: "Excuse me, what is the best way to visit the castle and the old bridge in one afternoon?", translation: "Disculpe, ¿cuál es la mejor manera de visitar el castillo y el puente viejo en una tarde?" },
        { speaker: "Officer", text: "If you take Tram 4 to the castle first, you can easily walk down to the old bridge afterwards.", audioText: "If you take Tram 4 to the castle first, you can easily walk down to the old bridge afterwards.", translation: "Si toma el tranvía 4 hacia el castillo primero, luego puede caminar fácilmente hacia el puente viejo." }
      ]
    }
  },

  // Lesson 270: Final Unit Review, A2 Preparation & Communicative Mastery
  {
    num: 270,
    title: "Final Unit Review, A2 Preparation & Communicative Mastery",
    concept: "Comprehensive synthesis across all A2 communicative competencies: listening, reading, speaking, writing, grammar, vocabulary, and mediation.",
    scaffoldingLevel: "mastery_prep",
    prompts: [
      "I have developed strong English communicative skills throughout this A2 course.",
      "Whenever a problem arises, I can explain the situation clearly and seek solutions.",
      "I can understand spoken announcements, everyday conversations, and podcast summaries.",
      "Reading notices, schedules, reviews, and short articles is now straightforward for me.",
      "I am able to write clear emails, messages, personal narratives, and opinions.",
      "I feel confident asking follow-up questions and maintaining natural conversations.",
      "By using connectors like although, because, and therefore, my sentences are well structured.",
      "I can mediate information by explaining signs, menus, and instructions to others.",
      "Practicing every single day has helped me build solid grammatical foundations.",
      "I am fully prepared to demonstrate complete CEFR A2 communicative mastery."
    ],
    vocab: [
      { id: "v_u18_l270_1", word: "mastery", phonetic: "/ˈmɑːstəri/", meaning: "comprehensive knowledge or skill in a subject or accomplishment", translationsByLang: { hi: "महारत / निपुणता", es: "maestría / dominio" }, exampleSentence: "You have achieved true CEFR A2 communicative mastery.", exampleTranslationByLang: { hi: "आपने वास्तविक CEFR A2 संवादात्मक महारत हासिल कर ली है।", es: "Has alcanzado un verdadero dominio comunicativo CEFR A2." }, audioText: "mastery", audioId: "en_a2_u18_l270_v_1", slowAudioId: "en_a2_u18_l270_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" },
      { id: "v_u18_l270_2", word: "foundation", phonetic: "/faʊnˈdeɪʃn/", meaning: "an underlying basis or principle", translationsByLang: { hi: "नींव / आधार", es: "fundamento / base" }, exampleSentence: "A strong A2 foundation prepares you for B1 intermediate fluency.", exampleTranslationByLang: { hi: "एक मजबूत A2 आधार आपको B1 मध्यवर्ती प्रवाह के लिए तैयार करता है।", es: "Una sólida base A2 te prepara para la fluidez intermedia B1." }, audioText: "foundation", audioId: "en_a2_u18_l270_v_2", slowAudioId: "en_a2_u18_l270_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏛️", difficulty: "A2 Elementary" },
      { id: "v_u18_l270_3", word: "competence", phonetic: "/ˈkɒmpɪtəns/", meaning: "the ability to do something successfully or efficiently", translationsByLang: { hi: "क्षमता / योग्यता", es: "competencia / capacidad" }, exampleSentence: "Your linguistic competence covers all everyday communicative situations.", exampleTranslationByLang: { hi: "आपकी भाषाई क्षमता सभी दैनिक संवादात्मक स्थितियों को कवर करती है।", es: "Tu competencia lingüística cubre todas las situaciones comunicativas cotidianas." }, audioText: "competence", audioId: "en_a2_u18_l270_v_3", slowAudioId: "en_a2_u18_l270_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🌟", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u18_l270_1", expression: "Step by step", meaning: "gradually, progressing methodically", translationsByLang: { hi: "कदम दर कदम / धीरे-धीरे", es: "Paso a paso" }, usageNote: "Celebratory learning chunk.", audioText: "Step by step, we reached complete A2 communicative mastery.", audioId: "en_a2_u18_l270_c_1", slowAudioId: "en_a2_u18_l270_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🪜" }
    ],
    grammar: {
      title: "Integrated CEFR A2 Master Synthesis (Tenses, Modals, Connectors & Discourse)",
      concept: "Synthesize all A2 grammatical frameworks: Present Simple/Continuous, Past Simple/Continuous, Present Perfect, Future forms, Modals, Connectors, Conditionals, and Relative Clauses.",
      patterns: [
        {
          id: "gp_u18_l270_1",
          title: "Full A2 Synthesis Matrix",
          structure: "Integrated Multiclause Discourse with Cause, Condition & Narrative",
          explanation: "Commands complete A2 communicative flexibility across all domains.",
          examples: [
            {
              english: "Although learning English was challenging at first, I have practiced consistently, and now I can express my thoughts clearly.",
              translation: "Aunque aprender inglés fue un desafío al principio, he practicado constantemente y ahora puedo expresar mis pensamientos con claridad.",
              translationByLang: { hi: "हालाँकि शुरुआत में अंग्रेजी सीखना चुनौतीपूर्ण था, मैंने लगातार अभ्यास किया है, और अब मैं अपने विचारों को स्पष्ट रूप से व्यक्त कर सकता हूँ।", es: "Aunque aprender inglés fue un desafío al principio, he practicado constantemente y ahora puedo expresar mis pensamientos con claridad." },
              audioText: "Although learning English was challenging at first, I have practiced consistently, and now I can express my thoughts clearly.",
              audioId: "en_a2_u18_l270_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "m_u18_l270_1",
        incorrect: "I am ready for the B1 level because I finish all lessons.",
        correct: "I am ready for the B1 level because I have finished all lessons.",
        explanation: "Use Present Perfect ('have finished') to connect past completion with present readiness.",
        explanationsByLang: {
          hi: "वर्तमान तत्परता से जोड़ने के लिए Present Perfect का उपयोग करें: 'have finished all lessons'।",
          es: "Usa Present Perfect para conectar la finalización pasada con la preparación presente: 'have finished all lessons'."
        }
      }
    ],
    dialogue: {
      id: "d_u18_l270_1",
      title: "Celebrating A2 Mastery Completion",
      context: "Academic advisor congratulates a learner on mastering CEFR A2 curriculum.",
      lines: [
        { speaker: "Advisor", text: "Congratulations on completing all 270 lessons! How do you evaluate your overall English progress?", audioText: "Congratulations on completing all 270 lessons! How do you evaluate your overall English progress?", translation: "¡Felicitaciones por completar las 270 lecciones! ¿Cómo evalúas tu progreso general en inglés?" },
        { speaker: "Learner", text: "Thank you so much! I can now understand native speech, solve daily problems, write clear emails, and speak confidently without fear.", audioText: "Thank you so much! I can now understand native speech, solve daily problems, write clear emails, and speak confidently without fear.", translation: "¡Muchas gracias! Ahora puedo entender el habla cotidiana, resolver problemas diarios, escribir correos claros y hablar con confianza sin temor." }
      ]
    }
  }
];

export function generateAllUnit18Lessons() {
  const targetDir = path.join(process.cwd(), 'src', 'data', 'lessons');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  console.log(`Generating 15 production lesson files for Unit 18 (Lessons 256 to 270)...`);

  for (const def of LESSON_DEFINITIONS) {
    const data = buildLessonData(def);
    const fileName = `lesson_a2_18_${def.num}.ts`;
    const filePath = path.join(targetDir, fileName);

    const fileContent = `import { DetailedLessonData } from '../../types';

export const LESSON_A2_18_${def.num}_DATA: DetailedLessonData = ${JSON.stringify(data, null, 2)};
`;

    fs.writeFileSync(filePath, fileContent, 'utf-8');
    console.log(`✅ Generated ${fileName} (${data.practiceExercises.length + data.reviewExercises.length + data.assessmentExercises.length} exercises)`);
  }

  console.log(`\n🎉 Successfully generated all 15 lessons for Unit 18!`);
}

generateAllUnit18Lessons();
