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
  prompts: string[];
  vocab: VocabDef[];
  expressions: ExpDef[];
  grammar: GrammarDef;
  mistakes: MistakeDef[];
  dialogue: DialogueDef;
}

function buildLessonData(def: LessonDef) {
  const lessonId = `lesson_a2_15_${def.num}`;
  
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
        explanation: `Standard CEFR A2 usage: "${p}"`,
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
        wordBank: [...words, "distractor1", "distractor2"].sort(() => 0.5 - Math.random()),
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
        audioId: `en_a2_u15_l${def.num}_spk_${i}`,
        explanation: "Focus on clear rhythm and intonation across thought groups.",
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
        audioId: `en_a2_u15_l${def.num}_lis_${i}`,
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
    unitId: "unit_a2_15",
    title: def.title,
    cefr: "A2",
    icon: def.num === 225 ? "🏆" : "🎓",
    estimatedMinutes: 25,
    learningObjective: {
      title: def.title,
      description: def.concept,
      descriptionsByLang: {
        hi: def.concept,
        es: def.concept
      },
      canDoStatements: [
        `I can understand and apply target structures for ${def.title.toLowerCase()}.`,
        `I can communicate effectively in educational and learning contexts using A2 vocabulary.`,
        `I can formulate accurate sentences and avoid common learner pitfalls.`,
        `I can demonstrate CEFR A2 communicative mastery in this domain.`
      ],
      canDoByLang: {
        hi: [
          `मैं ${def.title} से संबंधित प्रमुख संरचनाओं को समझ और उपयोग कर सकता हूँ।`,
          `मैं शैक्षिक संदर्भों में लक्ष्य शब्दावली के साथ प्रभावी ढंग से संवाद कर सकता हूँ।`
        ],
        es: [
          `Puedo comprender y utilizar las estructuras clave de ${def.title.toLowerCase()}.`,
          `Puedo comunicarme eficazmente en contextos educativos con vocabulario A2.`
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
  {
    num: 211,
    title: "Courses, Subjects & Learning Preferences",
    concept: "Talk about academic subjects, course choices, and express learning preferences using like/prefer/would rather.",
    prompts: [
      "I prefer interactive language seminars to large lecture classes.",
      "My favourite subject this semester is modern European history.",
      "Are you planning to take the elective course in psychology?",
      "I would rather study in a quiet library than in a noisy cafe.",
      "She is interested in taking an introductory computer science course.",
      "The syllabus outlines all weekly assignments and reading materials.",
      "Which academic subjects do you find most engaging?",
      "I enjoy participating in group discussions during literature class.",
      "The course fee includes all textbook downloads and lab access.",
      "Choosing the right electives helps develop specialized career skills."
    ],
    vocab: [
      { id: "v_u15_l211_1", word: "syllabus", phonetic: "/ˈsɪləbəs/", meaning: "an outline of the subjects in a course of study", translationsByLang: { hi: "पाठ्यक्रम रूपरेखा", es: "programa de estudios" }, exampleSentence: "Read the syllabus before the first class.", exampleTranslationByLang: { hi: "पहली कक्षा से पहले पाठ्यक्रम पढ़ें।", es: "Lea el programa antes de la primera clase." }, audioText: "syllabus", audioId: "en_a2_u15_l211_v_1", slowAudioId: "en_a2_u15_l211_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📑", difficulty: "A2 Elementary" },
      { id: "v_u15_l211_2", word: "elective", phonetic: "/ɪˈlektɪv/", meaning: "an optional course of study", translationsByLang: { hi: "ऐच्छिक विषय", es: "asignatura optativa" }, exampleSentence: "I chose art history as my elective.", exampleTranslationByLang: { hi: "मैंने कला इतिहास को अपने ऐच्छिक विषय के रूप में चुना।", es: "Elegí historia del arte como optativa." }, audioText: "elective", audioId: "en_a2_u15_l211_v_2", slowAudioId: "en_a2_u15_l211_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎨", difficulty: "A2 Elementary" },
      { id: "v_u15_l211_3", word: "preference", phonetic: "/ˈprefrəns/", meaning: "a greater liking for one alternative over another", translationsByLang: { hi: "प्राथमिकता / पसंद", es: "preferencia" }, exampleSentence: "State your learning preference on the form.", exampleTranslationByLang: { hi: "फॉर्म पर अपनी सीखने की प्राथमिकता बताएं।", es: "Indique su preferencia de aprendizaje." }, audioText: "preference", audioId: "en_a2_u15_l211_v_3", slowAudioId: "en_a2_u15_l211_v_3_slow", voiceId: "EN_TEACHER_01", icon: "⭐", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l211_1", expression: "I prefer X to Y", meaning: "expressing preference between two options", translationsByLang: { hi: "मुझे Y की तुलना में X अधिक पसंद है।", es: "Prefiero X a Y." }, usageNote: "Use 'to' (not 'than') with prefer.", audioText: "I prefer interactive seminars to lectures", audioId: "en_a2_u15_l211_c_1", slowAudioId: "en_a2_u15_l211_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚖️" }
    ],
    grammar: {
      title: "Expressing Preferences (Prefer vs Would Rather)",
      concept: "Use prefer + noun/gerund + to + noun/gerund; use would rather + base verb + than + base verb.",
      patterns: [
        {
          id: "gp_u15_l211_1",
          title: "Prefer Structure",
          structure: "Subject + prefer + [noun/gerund] + to + [noun/gerund]",
          explanation: "Expresses general preference.",
          examples: [
            {
              english: "I prefer studying in the morning to studying late at night.",
              translation: "Prefiero estudiar por la mañana que por la noche.",
              translationByLang: { hi: "मुझे देर रात की तुलना में सुबह पढ़ना अधिक पसंद है।", es: "Prefiero estudiar por la mañana que por la noche." },
              audioText: "I prefer studying in the morning to studying late at night.",
              audioId: "en_a2_u15_l211_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l211_1",
        incorrect: "I prefer English than Spanish.",
        correct: "I prefer English to Spanish.",
        explanation: "In English, use 'to' with 'prefer', not 'than'.",
        explanationsByLang: { hi: "'prefer' के साथ 'to' का प्रयोग करें, 'than' का नहीं।", es: "Usa 'to' con 'prefer', no 'than'." }
      }
    ],
    dialogue: {
      id: "d_u15_l211_1",
      title: "Course Selection",
      context: "Two students discussing elective subjects for the new term.",
      lines: [
        { speaker: "Aarav", text: "Which elective course are you choosing this term?", audioText: "Which elective course are you choosing this term?" },
        { speaker: "Meera", text: "I prefer psychology to sociology because the professor is excellent.", audioText: "I prefer psychology to sociology because the professor is excellent." }
      ]
    }
  },
  {
    num: 212,
    title: "School, University & Campus Life",
    concept: "Describe campus buildings, student facilities, academic departments, and everyday student routines.",
    prompts: [
      "The modern science laboratory is located next to the main library.",
      "Students gather at the student union cafeteria between lectures.",
      "You can find the registrar office on the ground floor of the administration building.",
      "The campus shuttle bus runs every fifteen minutes during term time.",
      "Our university campus has excellent sports and recreational facilities.",
      "The lecture hall has seating capacity for over three hundred students.",
      "Dormitory rooms are equipped with high-speed internet and study desks.",
      "Where is the faculty of foreign languages situated?",
      "Students must show their digital ID cards at the campus entrance.",
      "The campus bookstore offers discounts on all required textbooks."
    ],
    vocab: [
      { id: "v_u15_l212_1", word: "dormitory", phonetic: "/ˈdɔːmətri/", meaning: "a building providing living quarters for university students", translationsByLang: { hi: "छात्रावास / हॉस्टल", es: "residencia estudiantil" }, exampleSentence: "He lives in the campus dormitory.", exampleTranslationByLang: { hi: "वह कैंपस के छात्रावास में रहता है।", es: "Vive en la residencia del campus." }, audioText: "dormitory", audioId: "en_a2_u15_l212_v_1", slowAudioId: "en_a2_u15_l212_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏢", difficulty: "A2 Elementary" },
      { id: "v_u15_l212_2", word: "auditorium", phonetic: "/ˌɔːdɪˈtɔːriəm/", meaning: "a large room used for lectures and gatherings", translationsByLang: { hi: "सभागार", es: "auditorio" }, exampleSentence: "The orientation ceremony takes place in the auditorium.", exampleTranslationByLang: { hi: "ओरिएंटेशन समारोह सभागार में होता है।", es: "La ceremonia se realiza en el auditorio." }, audioText: "auditorium", audioId: "en_a2_u15_l212_v_2", slowAudioId: "en_a2_u15_l212_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎭", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l212_1", expression: "located on the ground floor", meaning: "specifying building floor level", translationsByLang: { hi: "भू-तल पर स्थित", es: "ubicado en la planta baja" }, usageNote: "Use 'on' for floor levels in British/American English.", audioText: "located on the ground floor", audioId: "en_a2_u15_l212_c_1", slowAudioId: "en_a2_u15_l212_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📍" }
    ],
    grammar: {
      title: "Prepositions of Place & Campus Spatial Descriptions",
      concept: "Using opposite, next to, between, across from, on the floor.",
      patterns: [
        {
          id: "gp_u15_l212_1",
          title: "Spatial Location Structure",
          structure: "[Subject] + is located + [preposition] + [landmark]",
          explanation: "Describes where buildings and offices are situated.",
          examples: [
            {
              english: "The student union is situated opposite the central library.",
              translation: "La asociación de estudiantes está situada frente a la biblioteca central.",
              translationByLang: { hi: "छात्र संघ केंद्रीय पुस्तकालय के सामने स्थित है।", es: "La asociación de estudiantes está situada frente a la biblioteca central." },
              audioText: "The student union is situated opposite the central library.",
              audioId: "en_a2_u15_l212_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l212_1",
        incorrect: "The library is in the first floor.",
        correct: "The library is on the first floor.",
        explanation: "Use preposition 'on' for building floors.",
        explanationsByLang: { hi: "मंजिलों के लिए 'on' का प्रयोग करें, 'in' का नहीं।", es: "Usa 'on' para las plantas de un edificio." }
      }
    ],
    dialogue: {
      id: "d_u15_l212_1",
      title: "Finding the Lecture Hall",
      context: "A new student asking for directions on campus.",
      lines: [
        { speaker: "Student", text: "Excuse me, where is the main science auditorium?", audioText: "Excuse me, where is the main science auditorium?" },
        { speaker: "Guide", text: "It is located on the second floor, just across from the computer lab.", audioText: "It is located on the second floor, just across from the computer lab." }
      ]
    }
  },
  {
    num: 213,
    title: "Study Habits, Routines & Time Management",
    concept: "Describe daily study routines, prioritize tasks, overcome procrastination, and manage deadlines effectively.",
    prompts: [
      "I prioritize my most challenging assignments early in the morning.",
      "Setting a daily schedule helps prevent last-minute procrastination.",
      "Taking short five-minute breaks improves overall study concentration.",
      "She creates a prioritized checklist before starting her revision.",
      "How do you balance extracurricular activities with academic study?",
      "Managing your time effectively reduces stress before final exams.",
      "I always review my lecture notes within twenty-four hours.",
      "Turning off phone notifications eliminates unnecessary study distractions.",
      "He maintains a digital calendar to track all project deadlines.",
      "Consistent daily study habits yield better results than cramming."
    ],
    vocab: [
      { id: "v_u15_l213_1", word: "procrastination", phonetic: "/prəˌkræstɪˈneɪʃn/", meaning: "the action of delaying or postponing something", translationsByLang: { hi: "टालमटोल / काम टालना", es: "postergación / procrastinación" }, exampleSentence: "Procrastination causes avoidable deadline panic.", exampleTranslationByLang: { hi: "काम टालने से समय सीमा का तनाव होता है।", es: "La procrastinación genera estrés evitable." }, audioText: "procrastination", audioId: "en_a2_u15_l213_v_1", slowAudioId: "en_a2_u15_l213_v_1_slow", voiceId: "EN_TEACHER_01", icon: "⏳", difficulty: "A2 Elementary" },
      { id: "v_u15_l213_2", word: "prioritize", phonetic: "/praɪˈɒrətaɪz/", meaning: "treat something as more important than other things", translationsByLang: { hi: "प्राथमिकता देना", es: "priorizar" }, exampleSentence: "Prioritize urgent tasks first.", exampleTranslationByLang: { hi: "जरूरी कामों को पहले प्राथमिकता दें।", es: "Priorice primero las tareas urgentes." }, audioText: "prioritize", audioId: "en_a2_u15_l213_v_2", slowAudioId: "en_a2_u15_l213_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📌", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l213_1", expression: "meet a deadline", meaning: "finish work before the agreed time limit", translationsByLang: { hi: "समय सीमा में काम पूरा करना", es: "cumplir un plazo" }, usageNote: "High-frequency collocation: meet a deadline / miss a deadline.", audioText: "meet a deadline", audioId: "en_a2_u15_l213_c_1", slowAudioId: "en_a2_u15_l213_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📅" }
    ],
    grammar: {
      title: "Adverbs of Frequency & Temporal Time Clauses",
      concept: "Using consistently, rarely, before/after + gerund for study routines.",
      patterns: [
        {
          id: "gp_u15_l213_1",
          title: "Before / After + Gerund",
          structure: "Before/After + [verb-ing], [main clause]",
          explanation: "Describes routine sequences.",
          examples: [
            {
              english: "After reviewing the lecture slides, I write summary flashcards.",
              translation: "Después de revisar las diapositivas, escribo tarjetas de resumen.",
              translationByLang: { hi: "स्लाइड्स की समीक्षा करने के बाद, मैं सारांश फ्लैशकार्ड लिखता हूँ।", es: "Después de revisar las diapositivas, escribo tarjetas de resumen." },
              audioText: "After reviewing the lecture slides, I write summary flashcards.",
              audioId: "en_a2_u15_l213_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l213_1",
        incorrect: "I am used to study late night.",
        correct: "I usually study late at night.",
        explanation: "Use 'usually + verb' for present habits, not 'used to'.",
        explanationsByLang: { hi: "वर्तमान आदतों के लिए 'usually' का प्रयोग करें।", es: "Usa 'usually' para hábitos presentes." }
      }
    ],
    dialogue: {
      id: "d_u15_l213_1",
      title: "Time Management Advice",
      context: "A mentor advising a student on effective study schedules.",
      lines: [
        { speaker: "Mentor", text: "How do you organize your study time before exams?", audioText: "How do you organize your study time before exams?" },
        { speaker: "Student", text: "I prioritize two hours every morning and break long tasks into chunks.", audioText: "I prioritize two hours every morning and break long tasks into chunks." }
      ]
    }
  },
  {
    num: 214,
    title: "Exams, Tests, Results & Grades",
    concept: "Discuss exam formats, assessment criteria, understand grading scales, and talk about academic results.",
    prompts: [
      "The mid-term examination accounts for thirty percent of the final grade.",
      "She achieved top marks in her English listening comprehension test.",
      "What is the minimum passing score required for this module?",
      "The professor gave constructive written feedback on my essay.",
      "Students must arrive fifteen minutes before the exam begins.",
      "I was thrilled to receive a grade A in statistics this semester.",
      "Multiple-choice questions test broad factual recall and vocabulary.",
      "You can retake the test if your score falls below fifty percent.",
      "Ensure you write your student identification number on the answer sheet.",
      "The final examination schedule will be published next Monday."
    ],
    vocab: [
      { id: "v_u15_l214_1", word: "evaluation", phonetic: "/ɪˌvæljuˈeɪʃn/", meaning: "the making of a judgment about the amount or quality of something", translationsByLang: { hi: "मूल्यांकन", es: "evaluación" }, exampleSentence: "The teacher finished her evaluation.", exampleTranslationByLang: { hi: "शिक्षक ने अपना मूल्यांकन पूरा किया।", es: "La profesora terminó su evaluación." }, audioText: "evaluation", audioId: "en_a2_u15_l214_v_1", slowAudioId: "en_a2_u15_l214_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📊", difficulty: "A2 Elementary" },
      { id: "v_u15_l214_2", word: "distinction", phonetic: "/dɪˈstɪŋkʃn/", meaning: "a high grade awarded for outstanding performance", translationsByLang: { hi: "विशेष योग्यता / डिस्टिंक्शन", es: "matrícula de honor / distinción" }, exampleSentence: "She passed the exam with distinction.", exampleTranslationByLang: { hi: "उसने विशेष योग्यता के साथ परीक्षा उत्तीर्ण की।", es: "Aprobó con distinción." }, audioText: "distinction", audioId: "en_a2_u15_l214_v_2", slowAudioId: "en_a2_u15_l214_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏅", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l214_1", expression: "pass with flying colours", meaning: "pass an examination with very high marks", translationsByLang: { hi: "शानदार अंकों से उत्तीर्ण होना", es: "aprobar con excelentes notas" }, usageNote: "Idiomatic expression for high achievement.", audioText: "pass with flying colours", audioId: "en_a2_u15_l214_c_1", slowAudioId: "en_a2_u15_l214_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎉" }
    ],
    grammar: {
      title: "Past Simple vs Present Perfect for Results",
      concept: "Use Past Simple for specific past test dates; use Present Perfect for ongoing result relevance.",
      patterns: [
        {
          id: "gp_u15_l214_1",
          title: "Present Perfect Result",
          structure: "Subject + have/has + [past participle] + [result object]",
          explanation: "Expresses current academic accomplishment.",
          examples: [
            {
              english: "I have received an A on my midterm exam.",
              translation: "He recibido una A en mi examen parcial.",
              translationByLang: { hi: "मुझे अपने मध्यावधि परीक्षा में ए ग्रेड मिला है।", es: "He recibido una A en mi examen parcial." },
              audioText: "I have received an A on my midterm exam.",
              audioId: "en_a2_u15_l214_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l214_1",
        incorrect: "I have passed the exam yesterday.",
        correct: "I passed the exam yesterday.",
        explanation: "Do not use Present Perfect with specific past time words like 'yesterday'.",
        explanationsByLang: { hi: "'yesterday' के साथ Past Simple का प्रयोग करें।", es: "Usa Past Simple con 'yesterday', no Present Perfect." }
      }
    ],
    dialogue: {
      id: "d_u15_l214_1",
      title: "Exam Results",
      context: "Two classmates comparing test results.",
      lines: [
        { speaker: "Rohan", text: "Have you checked your English exam score yet?", audioText: "Have you checked your English exam score yet?" },
        { speaker: "Priya", text: "Yes, I passed with ninety percent! The revision really paid off.", audioText: "Yes, I passed with ninety percent! The revision really paid off." }
      ]
    }
  },
  {
    num: 215,
    title: "Learning Strategies & How to Learn Effectively",
    concept: "Explain mnemonic devices, active recall, flashcards, and spaced repetition methods for optimal learning.",
    prompts: [
      "Spaced repetition significantly improves long-term memory retention.",
      "Active recall involves testing yourself without looking at the answer.",
      "Creating digital flashcards is an efficient way to memorize vocabulary.",
      "Summarizing key concepts in your own words ensures deep comprehension.",
      "Teaching a concept to a peer is one of the most effective study methods.",
      "Using visual diagrams helps connect complex grammatical relationships.",
      "You should review new words at increasing intervals over several weeks.",
      "Avoid passive re-reading because it creates a false sense of mastery.",
      "Mnemonics provide helpful memory shortcuts for difficult spellings.",
      "Consistent fifteen-minute daily practice beats irregular marathon sessions."
    ],
    vocab: [
      { id: "v_u15_l215_1", word: "retention", phonetic: "/rɪˈtenʃn/", meaning: "the ability to remember facts and information", translationsByLang: { hi: "स्मरण शक्ति / याददाश्त में टिकना", es: "retención de memoria" }, exampleSentence: "Spaced repetition boosts word retention.", exampleTranslationByLang: { hi: "स्थानबद्ध पुनरावृत्ति याददाश्त बढ़ाती है।", es: "La repetición espaciada mejora la retención." }, audioText: "retention", audioId: "en_a2_u15_l215_v_1", slowAudioId: "en_a2_u15_l215_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🧠", difficulty: "A2 Elementary" },
      { id: "v_u15_l215_2", word: "mnemonic", phonetic: "/nɪˈmɒnɪk/", meaning: "a system such as a pattern of letters or associations to assist the memory", translationsByLang: { hi: "स्मरण सहायक युक्ति", es: "regla mnemotécnica" }, exampleSentence: "Use a mnemonic to remember the rule.", exampleTranslationByLang: { hi: "नियम याद रखने के लिए निमोनिक का प्रयोग करें।", es: "Usa una regla mnemotécnica para el orden." }, audioText: "mnemonic", audioId: "en_a2_u15_l215_v_2", slowAudioId: "en_a2_u15_l215_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l215_1", expression: "active recall", meaning: "testing your own knowledge actively", translationsByLang: { hi: "सक्रिय स्मरण परीक्षण", es: "recuperación activa" }, usageNote: "Key learning science term.", audioText: "active recall", audioId: "en_a2_u15_l215_c_1", slowAudioId: "en_a2_u15_l215_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🔄" }
    ],
    grammar: {
      title: "Gerunds as Subjects in Study Advice",
      concept: "Using Verb-ing as the subject to describe actions and techniques.",
      patterns: [
        {
          id: "gp_u15_l215_1",
          title: "Gerund Subject Pattern",
          structure: "[Verb-ing + object] + is / helps / improves + [noun]",
          explanation: "States the benefit of a learning technique.",
          examples: [
            {
              english: "Summarizing notes in your own words improves conceptual understanding.",
              translation: "Resumir notas con tus propias palabras mejora la comprensión.",
              translationByLang: { hi: "अपने शब्दों में नोट्स का सारांश बनाना समझ को बेहतर करता है।", es: "Resumir notas con tus propias palabras mejora la comprensión." },
              audioText: "Summarizing notes in your own words improves conceptual understanding.",
              audioId: "en_a2_u15_l215_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l215_1",
        incorrect: "To review notes help for remember.",
        correct: "Reviewing notes helps you remember.",
        explanation: "Use gerund 'Reviewing' as subject with singular verb 'helps'.",
        explanationsByLang: { hi: "विषय के रूप में 'Reviewing' और एकवचन क्रिया 'helps' का प्रयोग करें।", es: "Usa el gerundio 'Reviewing' como sujeto con verbo en singular." }
      }
    ],
    dialogue: {
      id: "d_u15_l215_1",
      title: "Vocabulary Strategies",
      context: "Two learners discussing vocabulary memorization techniques.",
      lines: [
        { speaker: "Dev", text: "How do you manage to remember so many new words?", audioText: "How do you manage to remember so many new words?" },
        { speaker: "Ananya", text: "I use spaced repetition apps and test myself daily with active recall.", audioText: "I use spaced repetition apps and test myself daily with active recall." }
      ]
    }
  },
  {
    num: 216,
    title: "Asking for Clarification & Understanding Explanations",
    concept: "Polite clarification questions, checking mutual understanding, asking teachers to elaborate or give examples.",
    prompts: [
      "Could you please explain what this grammatical term means?",
      "I did not quite catch that. Could you repeat it with an example?",
      "Could you elaborate on the difference between these two words?",
      "If I understand correctly, we need to submit both drafts by Friday.",
      "Could you speak a little more slowly, please?",
      "What is the exact distinction between 'affect' and 'effect'?",
      "Could you clarify the second requirement in the homework assignment?",
      "So what you are saying is that attendance is mandatory for every lecture?",
      "Thank you for clarifying; that makes complete sense now.",
      "Would you mind writing the correct spelling on the whiteboard?"
    ],
    vocab: [
      { id: "v_u15_l216_1", word: "clarification", phonetic: "/ˌklærəfɪˈkeɪʃn/", meaning: "the action of making a statement less confused and more comprehensible", translationsByLang: { hi: "स्पष्टीकरण", es: "aclaración" }, exampleSentence: "Ask for clarification if you are unsure.", exampleTranslationByLang: { hi: "यदि आप आश्वस्त नहीं हैं तो स्पष्टीकरण मांगें।", es: "Pida una aclaración si tiene dudas." }, audioText: "clarification", audioId: "en_a2_u15_l216_v_1", slowAudioId: "en_a2_u15_l216_v_1_slow", voiceId: "EN_TEACHER_01", icon: "❓", difficulty: "A2 Elementary" },
      { id: "v_u15_l216_2", word: "elaborate", phonetic: "/ɪˈlæbəreɪt/", meaning: "develop or present a theory, policy, or system in further detail", translationsByLang: { hi: "विस्तार से बताना", es: "explicar en detalle / profundizar" }, exampleSentence: "Could you elaborate on that point?", exampleTranslationByLang: { hi: "क्या आप उस बिंदु पर विस्तार से बता सकते हैं?", es: "¿Podría profundizar en ese punto?" }, audioText: "elaborate", audioId: "en_a2_u15_l216_v_2", slowAudioId: "en_a2_u15_l216_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🔍", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l216_1", expression: "If I understand correctly...", meaning: "checking mutual understanding formula", translationsByLang: { hi: "यदि मैं सही समझा हूँ...", es: "Si he entendido correctamente..." }, usageNote: "Excellent polite checking strategy.", audioText: "If I understand correctly", audioId: "en_a2_u15_l216_c_1", slowAudioId: "en_a2_u15_l216_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🤝" }
    ],
    grammar: {
      title: "Indirect Questions for Polite Clarification",
      concept: "Could you explain + what/where/how + subject + verb (no auxiliary inversion).",
      patterns: [
        {
          id: "gp_u15_l216_1",
          title: "Indirect Question Structure",
          structure: "Could you please explain + [question word] + [subject] + [verb]?",
          explanation: "Polite inquiry without auxiliary inversion.",
          examples: [
            {
              english: "Could you please explain what this term means?",
              translation: "¿Podría explicar qué significa este término?",
              translationByLang: { hi: "क्या आप समझा सकते हैं कि इस शब्द का क्या अर्थ है?", es: "¿Podría explicar qué significa este término?" },
              audioText: "Could you please explain what this term means?",
              audioId: "en_a2_u15_l216_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l216_1",
        incorrect: "Could you explain me what means this word?",
        correct: "Could you explain to me what this word means?",
        explanation: "Use 'explain to me' and word order 'what this word means'.",
        explanationsByLang: { hi: "'explain to me' और 'what this word means' का प्रयोग करें।", es: "Usa 'explain to me' y orden sujeto-verbo al final." }
      }
    ],
    dialogue: {
      id: "d_u15_l216_1",
      title: "Classroom Clarification",
      context: "A student asking a professor to clarify a homework requirement.",
      lines: [
        { speaker: "Student", text: "Professor Davis, could you clarify whether we need to cite academic journals?", audioText: "Professor Davis, could you clarify whether we need to cite academic journals?" },
        { speaker: "Professor", text: "Yes, you should include at least three peer-reviewed references in your bibliography.", audioText: "Yes, you should include at least three peer-reviewed references in your bibliography." }
      ]
    }
  },
  {
    num: 217,
    title: "Skills, Strengths, Weaknesses & Personal Progress",
    concept: "Assess linguistic strengths and weaknesses, describe competencies using good at/struggle with, and chart progress.",
    prompts: [
      "I used to struggle with English listening, but I have made substantial progress.",
      "My greatest strength is reading comprehension and grammar analysis.",
      "I am working on improving my spoken fluency and pronunciation accuracy.",
      "She is exceptionally good at writing structured essays and summaries.",
      "Identifying your weak areas is the first step toward real improvement.",
      "Consistent practice has significantly boosted my confidence when speaking.",
      "I find English prepositions challenging, but I practice them every week.",
      "What skills do you feel most confident about in English?",
      "He demonstrated noticeable improvement in his oral presentation skills.",
      "Tracking your weekly progress keeps you focused on long-term targets."
    ],
    vocab: [
      { id: "v_u15_l217_1", word: "proficiency", phonetic: "/prəˈfɪʃnsi/", meaning: "a high degree of competence or skill", translationsByLang: { hi: "प्रवीणता / दक्षता", es: "competencia / fluidez" }, exampleSentence: "She reached A2 proficiency in English.", exampleTranslationByLang: { hi: "वह अंग्रेजी में A2 प्रवीणता तक पहुंच गई।", es: "Alcanzó la competencia A2 en inglés." }, audioText: "proficiency", audioId: "en_a2_u15_l217_v_1", slowAudioId: "en_a2_u15_l217_v_1_slow", voiceId: "EN_TEACHER_01", icon: "⭐", difficulty: "A2 Elementary" },
      { id: "v_u15_l217_2", word: "competence", phonetic: "/ˈkɒmpɪtəns/", meaning: "the ability to do something successfully or efficiently", translationsByLang: { hi: "क्षमता / योग्यता", es: "competencia lingüística" }, exampleSentence: "Demonstrate communicative competence in speech.", exampleTranslationByLang: { hi: "बोलचाल में संवादात्मक क्षमता का प्रदर्शन करें।", es: "Demuestre competencia comunicativa." }, audioText: "competence", audioId: "en_a2_u15_l217_v_2", slowAudioId: "en_a2_u15_l217_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎯", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l217_1", expression: "be good at / struggle with", meaning: "contrasting strengths and weaknesses", translationsByLang: { hi: "में अच्छा होना / में कठिनाई होना", es: "ser bueno en / costarle trabajo" }, usageNote: "Both take nouns or gerunds (verb-ing).", audioText: "I am good at reading but struggle with speaking", audioId: "en_a2_u15_l217_c_1", slowAudioId: "en_a2_u15_l217_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚖️" }
    ],
    grammar: {
      title: "Used to vs Present Capability Contrast",
      concept: "Contrast past struggle (used to find X difficult) with current progress (now I can / have improved).",
      patterns: [
        {
          id: "gp_u15_l217_1",
          title: "Progress Contrast Pattern",
          structure: "I used to struggle with [noun/gerund], but now I can [base verb]",
          explanation: "Expresses personal growth over time.",
          examples: [
            {
              english: "I used to struggle with listening speed, but now I understand podcasts easily.",
              translation: "Solía costarme la velocidad auditiva, pero ahora entiendo los podcasts fácilmente.",
              translationByLang: { hi: "मुझे सुनने की गति में कठिनाई होती थी, लेकिन अब मैं पॉडकास्ट आसानी से समझता हूँ।", es: "Solía costarme la velocidad auditiva, pero ahora entiendo los podcasts fácilmente." },
              audioText: "I used to struggle with listening speed, but now I understand podcasts easily.",
              audioId: "en_a2_u15_l217_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l217_1",
        incorrect: "I am good in speak English.",
        correct: "I am good at speaking English.",
        explanation: "Use preposition 'at' + gerund (-ing) with 'good'.",
        explanationsByLang: { hi: "'good at' + verb-ing का प्रयोग करें।", es: "Usa 'good at' seguido de gerundio." }
      }
    ],
    dialogue: {
      id: "d_u15_l217_1",
      title: "Evaluating Progress",
      context: "A student and teacher reviewing semester growth.",
      lines: [
        { speaker: "Teacher", text: "What do you consider your biggest language achievement this term?", audioText: "What do you consider your biggest language achievement this term?" },
        { speaker: "Student", text: "I used to hesitate when speaking, but now I can express my opinions comfortably.", audioText: "I used to hesitate when speaking, but now I can express my opinions comfortably." }
      ]
    }
  },
  {
    num: 218,
    title: "Learning Goals, Plans & Personal Development",
    concept: "Formulate SMART learning goals, plan study roadmaps, and express future intentions with be going to / plan to / aim to.",
    prompts: [
      "I aim to achieve CEFR B1 level proficiency by the end of this year.",
      "Setting specific and measurable goals keeps you motivated and disciplined.",
      "I plan to practice speaking with native speakers at least twice a week.",
      "She is going to take an international English certification exam next spring.",
      "What are your main personal development objectives for the upcoming semester?",
      "Breaking large goals into weekly milestones makes them achievable.",
      "I intend to read one English graded reader book every month.",
      "Self-discipline and consistency are essential for long-term skill acquisition.",
      "We created a structured study roadmap for the entire academic term.",
      "Celebrating small milestones reinforces positive study momentum."
    ],
    vocab: [
      { id: "v_u15_l218_1", word: "milestone", phonetic: "/ˈmaɪlstəʊn/", meaning: "a significant stage or event in the development of something", translationsByLang: { hi: "महत्वपूर्ण पड़ाव / मील का पत्थर", es: "hito / meta intermedia" }, exampleSentence: "Completing A2 is an important milestone.", exampleTranslationByLang: { hi: "A2 पूरा करना एक महत्वपूर्ण पड़ाव है।", es: "Completar A2 es un hito importante." }, audioText: "milestone", audioId: "en_a2_u15_l218_v_1", slowAudioId: "en_a2_u15_l218_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🚩", difficulty: "A2 Elementary" },
      { id: "v_u15_l218_2", word: "aspiration", phonetic: "/ˌæspəˈreɪʃn/", meaning: "a hope or ambition of achieving something", translationsByLang: { hi: "आकांक्षा / उच्च लक्ष्य", es: "aspiración" }, exampleSentence: "His aspiration is to work internationally.", exampleTranslationByLang: { hi: "उसकी आकांक्षा अंतरराष्ट्रीय स्तर पर काम करने की है।", es: "Su aspiración es trabajar en el extranjero." }, audioText: "aspiration", audioId: "en_a2_u15_l218_v_2", slowAudioId: "en_a2_u15_l218_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🌟", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l218_1", expression: "aim to + base verb", meaning: "expressing deliberate goals", translationsByLang: { hi: "का लक्ष्य रखना", es: "tener como objetivo" }, usageNote: "Used for professional and academic goal setting.", audioText: "I aim to achieve fluency", audioId: "en_a2_u15_l218_c_1", slowAudioId: "en_a2_u15_l218_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎯" }
    ],
    grammar: {
      title: "Verbs of Intention (Plan to / Aim to / Be going to)",
      concept: "Expressing structured learning intentions and future commitments.",
      patterns: [
        {
          id: "gp_u15_l218_1",
          title: "Goal Formulation Pattern",
          structure: "Subject + aim / plan / intend + to + [base verb] + by [timeline]",
          explanation: "Defines actionable targets with deadlines.",
          examples: [
            {
              english: "I plan to finish all A2 review modules by next Friday.",
              translation: "Planeo terminar todos los módulos de revisión A2 para el próximo viernes.",
              translationByLang: { hi: "मैं अगले शुक्रवार तक सभी A2 समीक्षा मॉड्यूल पूरा करने की योजना बना रहा हूँ।", es: "Planeo terminar todos los módulos de revisión A2 para el próximo viernes." },
              audioText: "I plan to finish all A2 review modules by next Friday.",
              audioId: "en_a2_u15_l218_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l218_1",
        incorrect: "I aim for pass the exam.",
        correct: "I aim to pass the exam.",
        explanation: "Use 'aim to + base verb' when expressing planned action.",
        explanationsByLang: { hi: "'aim to + base verb' का प्रयोग करें।", es: "Usa 'aim to' seguido de verbo en infinitivo." }
      }
    ],
    dialogue: {
      id: "d_u15_l218_1",
      title: "Setting Semester Goals",
      context: "Two friends discussing their personal study roadmaps.",
      lines: [
        { speaker: "Karan", text: "What is your main language goal for the next three months?", audioText: "What is your main language goal for the next three months?" },
        { speaker: "Sonia", text: "I aim to master 500 new vocabulary items and complete my B1 gateway prep.", audioText: "I aim to master 500 new vocabulary items and complete my B1 gateway prep." }
      ]
    }
  },
  {
    num: 219,
    title: "Achievements, Experiences & Changes Over Time",
    concept: "Describe personal milestones, past educational experiences, and changes using Present Perfect with for/since and time markers.",
    prompts: [
      "I have studied English for six months, and my confidence has grown tremendously.",
      "Since starting this course, I have learned over two thousand new words.",
      "She has already completed all fifteen units of the A2 master curriculum.",
      "Have you ever participated in an English debate competition?",
      "Over the past year, my listening comprehension has improved dramatically.",
      "Earning this completion certificate is a proud milestone for me.",
      "I haven't taken the final proficiency test yet, but I am preparing for it.",
      "He has lived in three different countries and speaks four languages.",
      "How much has your language fluency changed over the last term?",
      "We have made great progress through persistent daily effort."
    ],
    vocab: [
      { id: "v_u15_l219_1", word: "accomplishment", phonetic: "/əˈkʌmplɪʃmənt/", meaning: "something that has been achieved successfully", translationsByLang: { hi: "उपलब्धि", es: "logro / logro personal" }, exampleSentence: "Finishing the course was a great accomplishment.", exampleTranslationByLang: { hi: "कोर्स पूरा करना एक बड़ी उपलब्धि थी।", es: "Terminar el curso fue un gran logro." }, audioText: "accomplishment", audioId: "en_a2_u15_l219_v_1", slowAudioId: "en_a2_u15_l219_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" },
      { id: "v_u15_l219_2", word: "transformation", phonetic: "/ˌtrænsfəˈmeɪʃn/", meaning: "a marked change in form, nature, or appearance", translationsByLang: { hi: "रूपांतरण / बड़ा बदलाव", es: "transformación" }, exampleSentence: "Her confidence underwent a transformation.", exampleTranslationByLang: { hi: "उसके आत्मविश्वास में बड़ा बदलाव आया।", es: "Su confianza experimentó una gran transformación." }, audioText: "transformation", audioId: "en_a2_u15_l219_v_2", slowAudioId: "en_a2_u15_l219_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🦋", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l219_1", expression: "over the past few months", meaning: "time marker for ongoing gradual change", translationsByLang: { hi: "पिछले कुछ महीनों में", es: "en los últimos meses" }, usageNote: "Commonly triggers Present Perfect.", audioText: "over the past few months", audioId: "en_a2_u15_l219_c_1", slowAudioId: "en_a2_u15_l219_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📈" }
    ],
    grammar: {
      title: "Present Perfect with For, Since, Already & Yet",
      concept: "Connecting past actions to present consequences with duration and milestone markers.",
      patterns: [
        {
          id: "gp_u15_l219_1",
          title: "Duration & Milestone Pattern",
          structure: "Subject + have/has + [past participle] + for [duration] / since [point in time]",
          explanation: "Expresses an ongoing state that started in the past.",
          examples: [
            {
              english: "I have practiced speaking every morning since January.",
              translation: "He practicado hablar todas las mañanas desde enero.",
              translationByLang: { hi: "मैं जनवरी से हर सुबह बोलने का अभ्यास कर रहा हूँ।", es: "He practicado hablar todas las mañanas desde enero." },
              audioText: "I have practiced speaking every morning since January.",
              audioId: "en_a2_u15_l219_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l219_1",
        incorrect: "I am studying here since two years.",
        correct: "I have been studying here for two years.",
        explanation: "Use 'for' with durations of time (two years), not 'since'.",
        explanationsByLang: { hi: "समयावधि (two years) के लिए 'for' का प्रयोग करें।", es: "Usa 'for' con periodos de tiempo, no 'since'." }
      }
    ],
    dialogue: {
      id: "d_u15_l219_1",
      title: "Reflecting on Growth",
      context: "Two language partners reflecting on their progress over the year.",
      lines: [
        { speaker: "Vikram", text: "How long have you been studying English on this platform?", audioText: "How long have you been studying English on this platform?" },
        { speaker: "Neha", text: "I have studied for six months, and I have already completed all A1 and A2 units!", audioText: "I have studied for six months, and I have already completed all A1 and A2 units!" }
      ]
    }
  },
  {
    num: 220,
    title: "Learning a New Skill: Explaining Steps & Processes",
    concept: "Explain procedural steps, instructional sequences, and methodologies using discourse connectors (First, Next, After that, Finally).",
    prompts: [
      "First, identify the core vocabulary for the topic you want to learn.",
      "Next, listen to native dialogues and repeat the sentences aloud.",
      "Then, write short practice sentences to consolidate your understanding.",
      "After that, test yourself using flashcards or quizzes without looking.",
      "Finally, practice speaking with a conversation partner to build confidence.",
      "Learning any new skill requires breaking the process into manageable steps.",
      "Make sure you review each step before moving on to the next level.",
      "The first stage involves understanding fundamental concepts and grammar rules.",
      "Once you master the basics, you can move on to complex real-world tasks.",
      "Following a clear step-by-step workflow guarantees steady improvement."
    ],
    vocab: [
      { id: "v_u15_l220_1", word: "methodology", phonetic: "/ˌmeθəˈdɒlədʒi/", meaning: "a system of methods used in a particular area of study or activity", translationsByLang: { hi: "कार्यप्रणाली / पद्धति", es: "metodología" }, exampleSentence: "Follow a proven learning methodology.", exampleTranslationByLang: { hi: "प्रमाणित सीखने की पद्धति का पालन करें।", es: "Siga una metodología comprobada." }, audioText: "methodology", audioId: "en_a2_u15_l220_v_1", slowAudioId: "en_a2_u15_l220_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📐", difficulty: "A2 Elementary" },
      { id: "v_u15_l220_2", word: "incremental", phonetic: "/ˌɪŋkrəˈmentl/", meaning: "relating to or denoting an increase or addition, especially one of a series on a fixed scale", translationsByLang: { hi: "क्रमिक / धीरे-धीरे बढ़ने वाला", es: "incremental / paso a paso" }, exampleSentence: "Language growth is an incremental process.", exampleTranslationByLang: { hi: "भाषा सीखना एक क्रमिक प्रक्रिया है।", es: "El aprendizaje es un proceso incremental." }, audioText: "incremental", audioId: "en_a2_u15_l220_v_2", slowAudioId: "en_a2_u15_l220_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🪜", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l220_1", expression: "step-by-step process", meaning: "gradual sequential procedure", translationsByLang: { hi: "चरणबद्ध प्रक्रिया", es: "proceso paso a paso" }, usageNote: "Key discourse formula for instructions.", audioText: "step-by-step process", audioId: "en_a2_u15_l220_c_1", slowAudioId: "en_a2_u15_l220_c_1_slow", voiceId: "EN_TEACHER_01", icon: "👣" }
    ],
    grammar: {
      title: "Sequential Discourse Connectors & Imperative Instructions",
      concept: "First, Next, Then, After that, Finally + base verb imperative instructions.",
      patterns: [
        {
          id: "gp_u15_l220_1",
          title: "Sequencing Steps Pattern",
          structure: "[Sequence word], + [imperative verb] + [instruction]",
          explanation: "Guides someone through a learning process.",
          examples: [
            {
              english: "First, listen to the audio recording. Next, repeat each line aloud.",
              translation: "Primero, escuche la grabación de audio. A continuación, repita cada línea en voz alta.",
              translationByLang: { hi: "पहले, ऑडियो रिकॉर्डिंग सुनें। फिर, प्रत्येक पंक्ति को जोर से दोहराएं।", es: "Primero, escuche la grabación de audio. A continuación, repita cada línea en voz alta." },
              audioText: "First, listen to the audio recording. Next, repeat each line aloud.",
              audioId: "en_a2_u15_l220_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l220_1",
        incorrect: "At first, write sentences, after listen audio.",
        correct: "First, write sentences; then, listen to the audio.",
        explanation: "Use 'First' (not 'At first') for sequencing and 'then' before the next step.",
        explanationsByLang: { hi: "क्रम बताने के लिए 'First' और 'then' का प्रयोग करें।", es: "Usa 'First' para secuencias y 'then' para el paso siguiente." }
      }
    ],
    dialogue: {
      id: "d_u15_l220_1",
      title: "Explaining How to Learn",
      context: "A tutor explaining how to master conversational speaking.",
      lines: [
        { speaker: "Tutor", text: "How should a beginner approach speaking practice?", audioText: "How should a beginner approach speaking practice?" },
        { speaker: "Learner", text: "First, master short phrases, then practice shadowing dialogues every day.", audioText: "First, master short phrases, then practice shadowing dialogues every day." }
      ]
    }
  },
  {
    num: 221,
    title: "Comparing Learning Methods & Making Choices",
    concept: "Compare traditional vs digital learning, online vs in-person classes, and evaluate pros and cons with comparative structures.",
    prompts: [
      "Online self-paced study is far more flexible than traditional classroom schedules.",
      "In-person seminars offer better opportunities for immediate spontaneous interaction.",
      "Active recall methods are much more effective than passive re-reading.",
      "Which learning approach suits your personal schedule better?",
      "Digital applications are as useful as printed textbooks for vocabulary practice.",
      "Group study sessions can be less focused than solitary revision.",
      "Blended learning combines the advantages of both virtual and classroom formats.",
      "In comparison with audio-only lessons, video tutorials provide helpful visual context.",
      "Each study method has distinct advantages depending on your learning style.",
      "Choosing the right learning medium saves both time and financial resources."
    ],
    vocab: [
      { id: "v_u15_l221_1", word: "collaborative", phonetic: "/kəˈlæbərətɪv/", meaning: "produced or conducted by two or more people working together", translationsByLang: { hi: "सहयोगात्मक", es: "colaborativo" }, exampleSentence: "Group projects foster collaborative learning.", exampleTranslationByLang: { hi: "समूह परियोजनाएं सहयोगात्मक सीख को बढ़ावा देती हैं।", es: "Los proyectos grupales fomentan el aprendizaje colaborativo." }, audioText: "collaborative", audioId: "en_a2_u15_l221_v_1", slowAudioId: "en_a2_u15_l221_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👥", difficulty: "A2 Elementary" },
      { id: "v_u15_l221_2", word: "flexibility", phonetic: "/ˌfleksəˈbɪləti/", meaning: "the quality of bending easily or being easily modified", translationsByLang: { hi: "लचीलापन / सुविधा", es: "flexibilidad horaria" }, exampleSentence: "Online courses offer great schedule flexibility.", exampleTranslationByLang: { hi: "ऑनलाइन कोर्स समय का बेहतरीन लचीलापन प्रदान करते हैं।", es: "Los cursos online ofrecen gran flexibilidad." }, audioText: "flexibility", audioId: "en_a2_u15_l221_v_2", slowAudioId: "en_a2_u15_l221_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🕒", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l221_1", expression: "in comparison with", meaning: "comparing two alternatives directly", translationsByLang: { hi: "की तुलना में", es: "en comparación con" }, usageNote: "High-value academic comparative linker.", audioText: "in comparison with", audioId: "en_a2_u15_l221_c_1", slowAudioId: "en_a2_u15_l221_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚖️" }
    ],
    grammar: {
      title: "Comparative Modifiers (Far more / Much better / As... as)",
      concept: "Using modifiers (far, much, slightly) with comparative adjectives to express degrees of difference.",
      patterns: [
        {
          id: "gp_u15_l221_1",
          title: "Comparative Degree Pattern",
          structure: "[Option A] + is + [much / far + comparative] + than + [Option B]",
          explanation: "Expresses significant differences between learning approaches.",
          examples: [
            {
              english: "Interactive practice is far more effective than passive listening alone.",
              translation: "La práctica interactiva es mucho más eficaz que la escucha pasiva por sí sola.",
              translationByLang: { hi: "इंटरैक्टिव अभ्यास अकेले निष्क्रिय सुनने की तुलना में कहीं अधिक प्रभावी है।", es: "La práctica interactiva es mucho más eficaz que la escucha pasiva por sí sola." },
              audioText: "Interactive practice is far more effective than passive listening alone.",
              audioId: "en_a2_u15_l221_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l221_1",
        incorrect: "Online is more better than classroom.",
        correct: "Online learning is much better than classroom learning.",
        explanation: "Do not use 'more' with comparative 'better'; use 'much better'.",
        explanationsByLang: { hi: "'more better' गलत है; 'much better' का प्रयोग करें।", es: "No uses 'more better'; usa 'much better'." }
      }
    ],
    dialogue: {
      id: "d_u15_l221_1",
      title: "Online vs Offline Courses",
      context: "Two students debating the merits of online vs in-person study.",
      lines: [
        { speaker: "Amit", text: "Do you prefer online classes or attending lectures in person?", audioText: "Do you prefer online classes or attending lectures in person?" },
        { speaker: "Deepa", text: "I prefer online classes because they are far more flexible with my work schedule.", audioText: "I prefer online classes because they are far more flexible with my work schedule." }
      ]
    }
  },
  {
    num: 222,
    title: "Giving Recommendations About Courses, Books & Resources",
    concept: "Recommend educational resources, review study materials, and advise peers using recommend/suggest/ought to/worth.",
    prompts: [
      "I highly recommend this English grammar workbook for self-study.",
      "It is well worth listening to educational podcasts during your daily commute.",
      "You ought to try using digital flashcards for medical vocabulary revision.",
      "She suggested joining an online conversational exchange group.",
      "This bilingual dictionary is an indispensable resource for new learners.",
      "What study applications would you recommend for intermediate grammar?",
      "I advise you to start your exam preparation at least six weeks in advance.",
      "The textbook includes comprehensive audio exercises and answer keys.",
      "If you want to improve pronunciation, you should record your own voice.",
      "Our professor recommended several academic articles on second language acquisition."
    ],
    vocab: [
      { id: "v_u15_l222_1", word: "recommendation", phonetic: "/ˌrekəmenˈdeɪʃn/", meaning: "a suggestion or proposal as to the best course of action", translationsByLang: { hi: "सिफारिश / सुझाव", es: "recomendación" }, exampleSentence: "Follow the teacher's recommendation.", exampleTranslationByLang: { hi: "शिक्षक के सुझाव का पालन करें।", es: "Siga la recomendación del profesor." }, audioText: "recommendation", audioId: "en_a2_u15_l222_v_1", slowAudioId: "en_a2_u15_l222_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👍", difficulty: "A2 Elementary" },
      { id: "v_u15_l222_2", word: "indispensable", phonetic: "/ˌɪndɪˈspensəbl/", meaning: "absolutely necessary", translationsByLang: { hi: "अपरिहार्य / अत्यंत आवश्यक", es: "indispensable" }, exampleSentence: "A good dictionary is indispensable.", exampleTranslationByLang: { hi: "एक अच्छा शब्दकोश अत्यंत आवश्यक है।", es: "Un buen diccionario es indispensable." }, audioText: "indispensable", audioId: "en_a2_u15_l222_v_2", slowAudioId: "en_a2_u15_l222_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💎", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l222_1", expression: "it is well worth + gerund", meaning: "strongly advising an activity", translationsByLang: { hi: "... करना पूरी तरह सार्थक है", es: "vale mucho la pena" }, usageNote: "Followed by verb-ing: it is well worth trying.", audioText: "it is well worth trying", audioId: "en_a2_u15_l222_c_1", slowAudioId: "en_a2_u15_l222_c_1_slow", voiceId: "EN_TEACHER_01", icon: "✨" }
    ],
    grammar: {
      title: "Recommendation Structures (Recommend + Gerund / Ought to)",
      concept: "Using recommend + verb-ing / recommend that + clause; ought to + base verb.",
      patterns: [
        {
          id: "gp_u15_l222_1",
          title: "Recommendation Pattern",
          structure: "Subject + recommend / suggest + [verb-ing]",
          explanation: "Direct recommendation structure.",
          examples: [
            {
              english: "I recommend listening to English news broadcasts every morning.",
              translation: "Recomiendo escuchar emisiones de noticias en inglés todas las mañanas.",
              translationByLang: { hi: "मैं हर सुबह अंग्रेजी समाचार प्रसारण सुनने की सिफारिश करता हूँ।", es: "Recomiendo escuchar emisiones de noticias en inglés todas las mañanas." },
              audioText: "I recommend listening to English news broadcasts every morning.",
              audioId: "en_a2_u15_l222_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l222_1",
        incorrect: "I recommend you to buy this book.",
        correct: "I recommend buying this book / I recommend that you buy this book.",
        explanation: "In standard English, 'recommend' is followed by gerund (-ing) or a that-clause.",
        explanationsByLang: { hi: "'recommend' के बाद verb-ing या 'that' क्लॉज का प्रयोग करें।", es: "Usa gerundio o 'that' con el verbo recommend." }
      }
    ],
    dialogue: {
      id: "d_u15_l222_1",
      title: "Resource Recommendations",
      context: "A learner asking a senior student for recommended study tools.",
      lines: [
        { speaker: "Junior", text: "Can you recommend a good grammar book for self-study?", audioText: "Can you recommend a good grammar book for self-study?" },
        { speaker: "Senior", text: "I recommend this practical handbook; it has clear explanations and exercises.", audioText: "I recommend this practical handbook; it has clear explanations and exercises." }
      ]
    }
  },
  {
    num: 223,
    title: "Short Presentations & Explaining Simple Information",
    concept: "Structure short informational presentations, use signposting phrases (Today I will talk about, To conclude), and present topics clearly.",
    prompts: [
      "Today I would like to give a short presentation about effective study habits.",
      "First, I will explain the importance of daily time management.",
      "Moving on to my next point, let us look at active revision techniques.",
      "As you can see from this simple diagram, retention increases with repetition.",
      "In conclusion, consistent daily practice leads to measurable language growth.",
      "Thank you for your attention. I would be happy to answer any questions.",
      "To illustrate this concept, let us look at an everyday example.",
      "The main purpose of my talk today is to share useful study strategies.",
      "Let me summarize the three key takeaways from this presentation.",
      "Speaking clearly and pacing your words helps your audience follow along."
    ],
    vocab: [
      { id: "v_u15_l223_1", word: "signposting", phonetic: "/ˈsaɪnpəʊstɪŋ/", meaning: "words and phrases that help the listener understand the structure of a presentation", translationsByLang: { hi: "प्रस्तुति दिशा-संकेत सूत्र", es: "señalización discursiva" }, exampleSentence: "Use signposting phrases during talks.", exampleTranslationByLang: { hi: "प्रस्तुतियों के दौरान दिशा-संकेत सूत्रों का प्रयोग करें।", es: "Usa frases de señalización en tus charlas." }, audioText: "signposting", audioId: "en_a2_u15_l223_v_1", slowAudioId: "en_a2_u15_l223_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🧭", difficulty: "A2 Elementary" },
      { id: "v_u15_l223_2", word: "conclude", phonetic: "/kənˈkluːd/", meaning: "bring or come to an end", translationsByLang: { hi: "निष्कर्ष निकालना / समाप्त करना", es: "concluir / finalizar" }, exampleSentence: "To conclude, practice makes perfect.", exampleTranslationByLang: { hi: "निष्कर्ष के रूप में, अभ्यास से पूर्णता आती है।", es: "Para concluir, la práctica hace al maestro." }, audioText: "conclude", audioId: "en_a2_u15_l223_v_2", slowAudioId: "en_a2_u15_l223_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎬", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l223_1", expression: "moving on to my next point", meaning: "presentation transition marker", translationsByLang: { hi: "मेरे अगले बिंदु पर बढ़ते हुए", es: "pasando a mi siguiente punto" }, usageNote: "Standard formal presentation signpost.", audioText: "moving on to my next point", audioId: "en_a2_u15_l223_c_1", slowAudioId: "en_a2_u15_l223_c_1_slow", voiceId: "EN_TEACHER_01", icon: "➡️" }
    ],
    grammar: {
      title: "Presentation Signposting & Discourse Markers",
      concept: "Structuring introductions, transitions, and conclusions in formal presentations.",
      patterns: [
        {
          id: "gp_u15_l223_1",
          title: "Presentation Signpost Pattern",
          structure: "Today I would like to + [base verb] + [topic noun phrase]",
          explanation: "Polite and formal presentation opening.",
          examples: [
            {
              english: "Today I would like to discuss three effective language learning strategies.",
              translation: "Hoy me gustaría hablar sobre tres estrategias eficaces para aprender idiomas.",
              translationByLang: { hi: "आज मैं भाषा सीखने की तीन प्रभावी रणनीतियों पर चर्चा करना चाहूँगा।", es: "Hoy me gustaría hablar sobre tres estrategias eficaces para aprender idiomas." },
              audioText: "Today I would like to discuss three effective language learning strategies.",
              audioId: "en_a2_u15_l223_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l223_1",
        incorrect: "For conclude, I want say thanks.",
        correct: "In conclusion, I would like to thank you for your attention.",
        explanation: "Use 'In conclusion' or 'To conclude', not 'For conclude'.",
        explanationsByLang: { hi: "'In conclusion' या 'To conclude' का प्रयोग करें।", es: "Usa 'In conclusion' o 'To conclude', no 'For conclude'." }
      }
    ],
    dialogue: {
      id: "d_u15_l223_1",
      title: "Delivering a Short Talk",
      context: "A student introducing a presentation in a seminar.",
      lines: [
        { speaker: "Presenter", text: "Today I would like to share our group findings on digital learning tools.", audioText: "Today I would like to share our group findings on digital learning tools." },
        { speaker: "Professor", text: "Excellent, please proceed with your first slide.", audioText: "Excellent, please proceed with your first slide." }
      ]
    }
  },
  {
    num: 224,
    title: "Integrated Speaking, Writing & Mediation Practice",
    concept: "Synthesize educational messages, relay schedule changes, explain notices to peers, and draft formal academic emails.",
    prompts: [
      "The professor announced that the Friday lecture has been rescheduled to Monday.",
      "I am writing to summarize the key decisions made during our study group meeting.",
      "Could you please explain this university policy notice to the new international students?",
      "Please find attached my updated research proposal and bibliography.",
      "According to the exam regulations, electronic devices are strictly prohibited.",
      "I will relay the tutor's instructions to the rest of our project team.",
      "She translated the academic guidelines into plain English for her classmates.",
      "In summary, we need to prepare our presentation slides before Wednesday afternoon.",
      "The department head stated that all extension requests must be submitted in writing.",
      "Mediation involves explaining complex notices in clear and accessible language."
    ],
    vocab: [
      { id: "v_u15_l224_1", word: "rescheduled", phonetic: "/ˌriːˈʃedjuːld/", meaning: "scheduled for a different time or date", translationsByLang: { hi: "पुनर्निर्धारित", es: "reprogramado" }, exampleSentence: "The seminar was rescheduled for Monday.", exampleTranslationByLang: { hi: "सेमिनार सोमवार के लिए पुनर्निर्धारित किया गया था।", es: "El seminario fue reprogramado para el lunes." }, audioText: "rescheduled", audioId: "en_a2_u15_l224_v_1", slowAudioId: "en_a2_u15_l224_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🗓️", difficulty: "A2 Elementary" },
      { id: "v_u15_l224_2", word: "prohibited", phonetic: "/prəˈhɪbɪtɪd/", meaning: "that has been forbidden; banned", translationsByLang: { hi: "प्रतिबंधित / मना", es: "prohibido" }, exampleSentence: "Phones are prohibited in the exam room.", exampleTranslationByLang: { hi: "परीक्षा कक्ष में फोन प्रतिबंधित हैं।", es: "Los teléfonos están prohibidos en la sala." }, audioText: "prohibited", audioId: "en_a2_u15_l224_v_2", slowAudioId: "en_a2_u15_l224_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🚫", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l224_1", expression: "relay instructions to", meaning: "passing on information to others (mediation)", translationsByLang: { hi: "निर्देश दूसरों तक पहुंचाना", es: "transmitir instrucciones a" }, usageNote: "Essential mediation formula.", audioText: "relay instructions to", audioId: "en_a2_u15_l224_c_1", slowAudioId: "en_a2_u15_l224_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📢" }
    ],
    grammar: {
      title: "Reported Speech Basics in Academic Mediation",
      concept: "Relaying announcements: The teacher said that / announced that + past tense clause.",
      patterns: [
        {
          id: "gp_u15_l224_1",
          title: "Reported Announcement Pattern",
          structure: "[Speaker] + announced / stated + that + [clause with tense shift]",
          explanation: "Relays announcements accurately to others.",
          examples: [
            {
              english: "The teacher announced that the final test was rescheduled for next Friday.",
              translation: "El profesor anunció que el examen final fue reprogramado para el próximo viernes.",
              translationByLang: { hi: "शिक्षक ने घोषणा की कि अंतिम परीक्षा अगले शुक्रवार के लिए पुनर्निर्धारित की गई थी।", es: "El profesor anunció que el examen final fue reprogramado para el próximo viernes." },
              audioText: "The teacher announced that the final test was rescheduled for next Friday.",
              audioId: "en_a2_u15_l224_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l224_1",
        incorrect: "He said me that the class was cancelled.",
        correct: "He told me that the class was cancelled / He said that the class was cancelled.",
        explanation: "Use 'said that' without object, or 'told me that' with direct object.",
        explanationsByLang: { hi: "'told me that' या 'said that' का प्रयोग करें।", es: "Usa 'told me that' o 'said that', no 'said me'." }
      }
    ],
    dialogue: {
      id: "d_u15_l224_1",
      title: "Relaying an Announcement",
      context: "A student relaying a lecture change to a classmate.",
      lines: [
        { speaker: "Student A", text: "Did you see the notice on the departmental board?", audioText: "Did you see the notice on the departmental board?" },
        { speaker: "Student B", text: "No, what happened? The teacher announced that tomorrow's lab session is moved to room 302.", audioText: "No, what happened? The teacher announced that tomorrow's lab session is moved to room 302." }
      ]
    }
  },
  {
    num: 225,
    title: "Unit 15 Review & Communicative Mastery",
    concept: "Synthesize all Unit 15 educational concepts, study routines, exams, learning strategies, presentations, and mediation.",
    prompts: [
      "I have successfully developed comprehensive study and educational communication skills.",
      "Although academic requirements can be demanding, effective time management ensures success.",
      "Could you please explain what this concept means in simple everyday English?",
      "I prefer interactive collaborative workshops to passive lecture courses.",
      "Spaced repetition and active recall significantly improve long-term retention.",
      "I aim to achieve full conversational fluency and complete all CEFR A2 milestones.",
      "In conclusion, consistent daily practice is the key to personal development.",
      "We have made great progress across all fifteen units of this master curriculum.",
      "The professor recommended joining a study group to prepare for final assessments.",
      "Congratulations on completing Unit 15 and mastering educational English communication!"
    ],
    vocab: [
      { id: "v_u15_l225_1", word: "comprehensive", phonetic: "/ˌkɒmprɪˈhensɪv/", meaning: "including or dealing with all or nearly all elements or aspects of something", translationsByLang: { hi: "व्यापक / समग्र", es: "integral / completo" }, exampleSentence: "We completed a comprehensive review.", exampleTranslationByLang: { hi: "हमने एक व्यापक समीक्षा पूरी की।", es: "Completamos una revisión integral." }, audioText: "comprehensive", audioId: "en_a2_u15_l225_v_1", slowAudioId: "en_a2_u15_l225_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📚", difficulty: "A2 Elementary" },
      { id: "v_u15_l225_2", word: "synthesis", phonetic: "/ˈsɪnθəsɪs/", meaning: "the combination of ideas to form a theory or system", translationsByLang: { hi: "संश्लेषण / समग्र संयोजन", es: "síntesis" }, exampleSentence: "This lesson provides a complete synthesis.", exampleTranslationByLang: { hi: "यह पाठ एक पूर्ण संश्लेषण प्रदान करता है।", es: "Esta lección ofrece una síntesis completa." }, audioText: "synthesis", audioId: "en_a2_u15_l225_v_2", slowAudioId: "en_a2_u15_l225_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🧬", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u15_l225_1", expression: "master communicative competencies", meaning: "achieving thorough communicative ability", translationsByLang: { hi: "संवादात्मक क्षमताओं में महारत हासिल करना", es: "dominar las competencias comunicativas" }, usageNote: "Culmination milestone expression.", audioText: "master communicative competencies", audioId: "en_a2_u15_l225_c_1", slowAudioId: "en_a2_u15_l225_c_1_slow", voiceId: "EN_TEACHER_01", icon: "👑" }
    ],
    grammar: {
      title: "Comprehensive Unit 15 Grammatical Synthesis",
      concept: "Integrated discourse combining modals, conditionals, gerunds, indirect questions, and signposting.",
      patterns: [
        {
          id: "gp_u15_l225_1",
          title: "Unit 15 Mastery Synthesis Pattern",
          structure: "Although + [subordinate clause], [main clause with modal/present perfect]",
          explanation: "Demonstrates advanced A2 synthesis across complex educational topics.",
          examples: [
            {
              english: "Although the curriculum was demanding, we have achieved all educational milestones successfully.",
              translation: "Aunque el plan de estudios era exigente, hemos alcanzado todos los hitos educativos con éxito.",
              translationByLang: { hi: "हालाँकि पाठ्यक्रम कठिन था, हमने सभी शैक्षिक मील के पत्थर सफलतापूर्वक हासिल कर लिए हैं।", es: "Aunque el plan de estudios era exigente, hemos alcanzado todos los hitos educativos con éxito." },
              audioText: "Although the curriculum was demanding, we have achieved all educational milestones successfully.",
              audioId: "en_a2_u15_l225_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u15_l225_1",
        incorrect: "I finished Unit 15 so I don't need practice anymore.",
        correct: "I have finished Unit 15, and I will continue reinforcing my skills for B1.",
        explanation: "Continuous reinforcement and spaced practice ensure long-term language retention.",
        explanationsByLang: { hi: "निरंतर अभ्यास और समीक्षा दीर्घकालिक याददाश्त सुनिश्चित करते हैं।", es: "La práctica continua garantiza la retención a largo plazo." }
      }
    ],
    dialogue: {
      id: "d_u15_l225_1",
      title: "Unit 15 Graduation",
      context: "Teacher and student celebrating the completion of Unit 15.",
      lines: [
        { speaker: "Teacher", text: "Congratulations on completing all fifteen lessons of Unit 15!", audioText: "Congratulations on completing all fifteen lessons of Unit 15!" },
        { speaker: "Student", text: "Thank you! I feel confident discussing education, study methods, and personal development in English now.", audioText: "Thank you! I feel confident discussing education, study methods, and personal development in English now." }
      ]
    }
  }
];

LESSON_DEFINITIONS.forEach(def => {
  const data = buildLessonData(def);
  const outPath = path.join(process.cwd(), `src/data/lessons/lesson_a2_15_${def.num}.ts`);
  const code = `import { DetailedLessonData } from '../../types';\n\nexport const LESSON_A2_15_${def.num}_DATA: DetailedLessonData = ${JSON.stringify(data, null, 2)};\n`;
  fs.writeFileSync(outPath, code);
  console.log(`Generated complete structured lesson ${def.num}: ${def.title}`);
});
