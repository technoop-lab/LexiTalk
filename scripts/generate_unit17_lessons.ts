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
  const lessonId = `lesson_a2_17_${def.num}`;
  
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
        audioId: `en_a2_u17_l${def.num}_spk_${i}`,
        explanation: "Focus on clear rhythm, phrasing, and stress across thought units.",
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
        audioId: `en_a2_u17_l${def.num}_lis_${i}`,
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
    unitId: "unit_a2_17",
    title: def.title,
    cefr: "A2",
    icon: def.num === 255 ? "🏆" : "🎭",
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
        `I can communicate effectively in media, cultural, entertainment, and public information contexts using A2 vocabulary.`,
        `I can formulate accurate sentences and avoid common learner pitfalls.`,
        `I can demonstrate CEFR A2 communicative mastery in this domain.`
      ],
      canDoByLang: {
        hi: [
          `मैं ${def.title} से संबंधित प्रमुख संरचनाओं को समझ और उपयोग कर सकता हूँ।`,
          `मैं मीडिया, सांस्कृतिक और सार्वजनिक सूचना संदर्भों में लक्ष्य शब्दावली के साथ प्रभावी ढंग से संवाद कर सकता हूँ।`
        ],
        es: [
          `Puedo comprender y utilizar las estructuras clave de ${def.title.toLowerCase()}.`,
          `Puedo comunicarme eficazmente en contextos de medios, cultura e información pública con vocabulario A2.`
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
    num: 241,
    title: "News, Headlines & Understanding Main Ideas",
    concept: "Read and understand newspaper and online news headlines, identify main story facts, and report breaking events using Present Simple for headlines and Past Simple for details.",
    prompts: [
      "The morning newspaper headline announced a major breakthrough in solar energy.",
      "According to the news report, heavy rainfall is expected throughout the weekend.",
      "The city council voted yesterday to approve the new public park project.",
      "Did you read the article about the historic discovery in the valley?",
      "Journalists gathered at the press conference to interview the government spokesperson.",
      "Headlines often use the present simple tense to describe recent events.",
      "The news broadcast summarized the main local and international developments.",
      "Where do you usually get your daily updates and current affairs news?",
      "Scientists published their new research findings in an international scientific journal.",
      "Understanding news summaries helps citizens stay informed about public matters."
    ],
    vocab: [
      { id: "v_u17_l241_1", word: "headline", phonetic: "/ˈhedlaɪn/", meaning: "a heading at the top of an article or page in a newspaper or magazine", translationsByLang: { hi: "सुर्ख़ी / मुख्य समाचार", es: "titular" }, exampleSentence: "The bold headline caught my attention immediately.", exampleTranslationByLang: { hi: "बोल्ड शीर्षक ने तुरंत मेरा ध्यान आकर्षित किया।", es: "El titular en negrita captó mi atención de inmediato." }, audioText: "headline", audioId: "en_a2_u17_l241_v_1", slowAudioId: "en_a2_u17_l241_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📰", difficulty: "A2 Elementary" },
      { id: "v_u17_l241_2", word: "broadcast", phonetic: "/ˈbrɔːdkɑːst/", meaning: "transmit (a program or some information) by radio or television", translationsByLang: { hi: "प्रसारण / प्रसारित करना", es: "emisión / retransmisión" }, exampleSentence: "The evening news broadcast starts at eight o'clock.", exampleTranslationByLang: { hi: "शाम का समाचार प्रसारण आठ बजे शुरू होता है।", es: "El informativo nocturno comienza a las ocho." }, audioText: "broadcast", audioId: "en_a2_u17_l241_v_2", slowAudioId: "en_a2_u17_l241_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📺", difficulty: "A2 Elementary" },
      { id: "v_u17_l241_3", word: "spokesperson", phonetic: "/ˈspəʊkspɜːsn/", meaning: "a person who speaks on behalf of others or an organization", translationsByLang: { hi: "प्रवक्ता", es: "portavoz" }, exampleSentence: "The police spokesperson answered questions from reporters.", exampleTranslationByLang: { hi: "पुलिस प्रवक्ता ने पत्रकारों के सवालों के जवाब दिए।", es: "El portavoz de la policía respondió preguntas de los periodistas." }, audioText: "spokesperson", audioId: "en_a2_u17_l241_v_3", slowAudioId: "en_a2_u17_l241_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🎙️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l241_1", expression: "According to...", meaning: "as stated by or in", translationsByLang: { hi: "के अनुसार...", es: "Según..." }, usageNote: "High-frequency news reporting chunk.", audioText: "According to the report, traffic is moving slowly.", audioId: "en_a2_u17_l241_c_1", slowAudioId: "en_a2_u17_l241_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📑" }
    ],
    grammar: {
      title: "Reporting Verbs with That-Clauses (report that / announce that)",
      concept: "Use reporting verbs ('announced that', 'reported that', 'stated that') to relay factual information from media sources.",
      patterns: [
        {
          id: "gp_u17_l241_1",
          title: "Reporting News Information",
          structure: "Subject + reported / announced + that + clause",
          explanation: "Relays news reports and public statements.",
          examples: [
            {
              english: "The report stated that the new metro line will open next month.",
              translation: "El informe indicó que la nueva línea de metro abrirá el próximo mes.",
              translationByLang: { hi: "रिपोर्ट में कहा गया कि नई मेट्रो लाइन अगले महीने खुलेगी।", es: "El informe indicó que la nueva línea de metro abrirá el próximo mes." },
              audioText: "The report stated that the new metro line will open next month.",
              audioId: "en_a2_u17_l241_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l241_1",
        incorrect: "According to me, the news is accurate.",
        correct: "In my opinion, the news is accurate. / According to the journalist, the news is accurate.",
        explanation: "Do not use 'according to me' for personal opinions; use 'in my opinion'. Use 'according to' for third-party sources.",
        explanationsByLang: { hi: "अपनी राय के लिए 'in my opinion' का प्रयोग करें, 'according to me' का नहीं।", es: "Usa 'in my opinion' para tu propia opinión y 'according to' para terceros." }
      }
    ],
    dialogue: {
      id: "d_u17_l241_1",
      title: "Discussing the Morning News",
      context: "Two colleagues discussing a front-page headline over tea.",
      lines: [
        { speaker: "Alok", text: "Did you see the front-page headline in today's paper?", audioText: "Did you see the front-page headline in today's paper?" },
        { speaker: "Bhavna", text: "Yes, the mayor announced that the new community solar project is fully funded!", audioText: "Yes, the mayor announced that the new community solar project is fully funded!" }
      ]
    }
  },
  {
    num: 242,
    title: "Movies, Series & Describing Stories",
    concept: "Describe film genres, plot summaries, main characters, and evaluate cinematographic elements using it is directed by / it stars / the plot revolves around.",
    prompts: [
      "The latest science fiction film is directed by an acclaimed international filmmaker.",
      "The storyline revolves around a young detective solving an enigmatic disappearance.",
      "Which film genre do you find most entertaining: comedies, thrillers, or documentaries?",
      "The lead actor delivered a powerful performance that captivated the whole audience.",
      "I watched an inspiring mini-series about historical space exploration on television.",
      "The special effects and musical score created an intensely thrilling atmosphere.",
      "Although the movie was quite long, the unexpected plot twist kept us engaged.",
      "Have you seen the new animated fantasy film that was released last Friday?",
      "Many viewers praised the director for addressing important environmental themes.",
      "Writing a concise movie summary requires highlighting the main conflict and resolution."
    ],
    vocab: [
      { id: "v_u17_l242_1", word: "plot", phonetic: "/plɒt/", meaning: "the main events of a play, novel, film, or similar work", translationsByLang: { hi: "कथानक / कहानी का ताना-बाना", es: "trama / argumento" }, exampleSentence: "The unexpected plot twist surprised everyone in the cinema.", exampleTranslationByLang: { hi: "अप्रत्याशित कथानक मोड़ ने सिनेमा में सभी को चौंका दिया।", es: "El inesperado giro de la trama sorprendió a todos en el cine." }, audioText: "plot", audioId: "en_a2_u17_l242_v_1", slowAudioId: "en_a2_u17_l242_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎬", difficulty: "A2 Elementary" },
      { id: "v_u17_l242_2", word: "genre", phonetic: "/ˈʒɒnrə/", meaning: "a category of artistic composition, as in music or literature, characterized by similarities in form, style, or subject matter", translationsByLang: { hi: "विधा / शैली", es: "género" }, exampleSentence: "Historical drama is my favorite movie genre.", exampleTranslationByLang: { hi: "ऐतिहासिक नाटक मेरी पसंदीदा फिल्म शैली है।", es: "El drama histórico es mi género cinematográfico favorito." }, audioText: "genre", audioId: "en_a2_u17_l242_v_2", slowAudioId: "en_a2_u17_l242_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎞️", difficulty: "A2 Elementary" },
      { id: "v_u17_l242_3", word: "soundtrack", phonetic: "/ˈsaʊndtræk/", meaning: "the recorded music accompanying and synchronized to the images of a film or television show", translationsByLang: { hi: "संगीत ट्रैक / साउंडट्रैक", es: "banda sonora" }, exampleSentence: "The orchestral soundtrack added emotional depth to each scene.", exampleTranslationByLang: { hi: "ऑर्केस्ट्रा साउंडट्रैक ने प्रत्येक दृश्य में भावनात्मक गहराई जोड़ दी।", es: "La banda sonora añadió profundidad emocional a cada escena." }, audioText: "soundtrack", audioId: "en_a2_u17_l242_v_3", slowAudioId: "en_a2_u17_l242_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🎵", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l242_1", expression: "set in", meaning: "taking place in a particular time or location", translationsByLang: { hi: "की पृष्ठभूमि में आधारित", es: "ambientado en" }, usageNote: "Used to describe the setting of films and novels.", audioText: "The story is set in 19th-century London.", audioId: "en_a2_u17_l242_c_1", slowAudioId: "en_a2_u17_l242_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏙️" }
    ],
    grammar: {
      title: "Relative Clauses in Media Descriptions (which / who / that)",
      concept: "Use defining relative clauses ('a director who...', 'a film that...') to add essential detail to descriptions.",
      patterns: [
        {
          id: "gp_u17_l242_1",
          title: "Relative Clauses with who/which/that",
          structure: "Noun (person) + who + clause / Noun (thing) + which/that + clause",
          explanation: "Connects clauses smoothly to describe films and authors.",
          examples: [
            {
              english: "It is an exciting thriller that takes place in a remote mountain village.",
              translation: "Es un thriller emocionante que se desarrolla en un remoto pueblo de montaña.",
              translationByLang: { hi: "यह एक रोमांचक थ्रिलर है जो एक दूरदराज के पहाड़ी गांव में घटित होती है।", es: "Es un thriller emocionante que se desarrolla en un remoto pueblo de montaña." },
              audioText: "It is an exciting thriller that takes place in a remote mountain village.",
              audioId: "en_a2_u17_l242_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l242_1",
        incorrect: "The actor which played the detective won an award.",
        correct: "The actor who played the detective won an award.",
        explanation: "Use 'who' for people, not 'which'.",
        explanationsByLang: { hi: "व्यक्तियों के लिए 'who' का प्रयोग करें, 'which' का नहीं।", es: "Usa 'who' para personas, no 'which'." }
      }
    ],
    dialogue: {
      id: "d_u17_l242_1",
      title: "Film Recommendation",
      context: "Two friends discussing what movie to stream on Friday night.",
      lines: [
        { speaker: "Dev", text: "Have you seen that new mystery series everyone is talking about?", audioText: "Have you seen that new mystery series everyone is talking about?" },
        { speaker: "Isha", text: "Yes! The plot revolves around a stolen painting, and the acting is fantastic.", audioText: "Yes! The plot revolves around a stolen painting, and the acting is fantastic." }
      ]
    }
  },
  {
    num: 243,
    title: "Books, Reading Preferences & Simple Reviews",
    concept: "Discuss literary genres, favorite authors, reading habits, and write concise book reviews with recommendations using written by / highly recommend / easy to read.",
    prompts: [
      "I recently finished reading an engrossing biography written by a renowned historian.",
      "The novel explores themes of friendship, resilience, and personal courage.",
      "Do you prefer reading printed physical books or digital e-books on a tablet?",
      "I highly recommend this historical novel to anyone interested in ancient civilizations.",
      "The author writes with clear, descriptive prose that keeps the reader hooked.",
      "Our local library book club selects a new contemporary novel every month.",
      "Although the beginning was slightly slow, the final chapters were deeply moving.",
      "She enjoys reading detective mysteries during her daily commute on the train.",
      "Writing a balanced book review involves evaluating both strengths and minor drawbacks.",
      "Reading diverse authors expands our worldview and deepens our cultural empathy."
    ],
    vocab: [
      { id: "v_u17_l243_1", word: "novel", phonetic: "/ˈnɒvl/", meaning: "a fictitious prose narrative of book length", translationsByLang: { hi: "उपन्यास", es: "novela" }, exampleSentence: "Her debut novel became an international bestseller.", exampleTranslationByLang: { hi: "उनका पहला उपन्यास एक अंतरराष्ट्रीय बेस्टसेलर बन गया।", es: "Su primera novela se convirtió en un éxito de ventas internacional." }, audioText: "novel", audioId: "en_a2_u17_l243_v_1", slowAudioId: "en_a2_u17_l243_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📚", difficulty: "A2 Elementary" },
      { id: "v_u17_l243_2", word: "biography", phonetic: "/baɪˈɒɡrəfi/", meaning: "an account of someone's life written by someone else", translationsByLang: { hi: "जीवनी", es: "biografía" }, exampleSentence: "I read an inspiring biography of the famous scientist.", exampleTranslationByLang: { hi: "मैंने प्रसिद्ध वैज्ञानिक की एक प्रेरक जीवनी पढ़ी।", es: "Leí una biografía inspiradora del famoso científico." }, audioText: "biography", audioId: "en_a2_u17_l243_v_2", slowAudioId: "en_a2_u17_l243_v_2_slow", voiceId: "EN_TEACHER_01", icon: "👤", difficulty: "A2 Elementary" },
      { id: "v_u17_l243_3", word: "chapter", phonetic: "/ˈtʃæptə(r)/", meaning: "a main division of a book, typically with a number or title", translationsByLang: { hi: "अध्याय", es: "capítulo" }, exampleSentence: "The concluding chapter resolved all the unanswered mysteries.", exampleTranslationByLang: { hi: "अंतिम अध्याय ने सभी अनुत्तरित रहस्यों को सुलझा दिया।", es: "El capítulo final resolvió todos los misterios." }, audioText: "chapter", audioId: "en_a2_u17_l243_v_3", slowAudioId: "en_a2_u17_l243_v_3_slow", voiceId: "EN_TEACHER_01", icon: "📖", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l243_1", expression: "a page-turner", meaning: "a book that is so exciting you want to read it quickly", translationsByLang: { hi: "बेहद दिलचस्प किताब", es: "un libro apasionante / muy entretenido" }, usageNote: "Idiomatic informal review expression.", audioText: "This mystery thriller is an absolute page-turner.", audioId: "en_a2_u17_l243_c_1", slowAudioId: "en_a2_u17_l243_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚡" }
    ],
    grammar: {
      title: "Participle Adjectives in Reviews (-ing vs -ed)",
      concept: "Use -ed adjectives to describe feelings (interested, fascinated) and -ing adjectives to describe the cause (interesting, fascinating).",
      patterns: [
        {
          id: "gp_u17_l243_1",
          title: "-ed vs -ing Adjectives",
          structure: "The book is [exciting/boring/moving] / The reader felt [excited/bored/moved]",
          explanation: "Avoids confusion between emotional states and object qualities.",
          examples: [
            {
              english: "I was fascinated by the novel because the plot was so interesting.",
              translation: "Quedé fascinado por la novela porque la trama era muy interesante.",
              translationByLang: { hi: "मैं उपन्यास से मुग्ध था क्योंकि कथानक बहुत दिलचस्प था।", es: "Quedé fascinado por la novela porque la trama era muy interesante." },
              audioText: "I was fascinated by the novel because the plot was so interesting.",
              audioId: "en_a2_u17_l243_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l243_1",
        incorrect: "I was very interesting in the book.",
        correct: "I was very interested in the book.",
        explanation: "Use '-ed' (interested) to describe how a person feels.",
        explanationsByLang: { hi: "व्यक्ति की भावना के लिए '-ed' रूप (interested) का प्रयोग करें।", es: "Usa '-ed' (interested) para expresar cómo te sientes." }
      }
    ],
    dialogue: {
      id: "d_u17_l243_1",
      title: "Book Club Review",
      context: "Two library members sharing impressions of a newly published book.",
      lines: [
        { speaker: "Kunal", text: "What did you think of the novel we read for this week?", audioText: "What did you think of the novel we read for this week?" },
        { speaker: "Radhika", text: "The character development was remarkable, and the ending was truly touching.", audioText: "The character development was remarkable, and the ending was truly touching." }
      ]
    }
  },
  {
    num: 244,
    title: "Music, Concerts & Cultural Experiences",
    concept: "Describe musical styles, instruments, live performance venues, concert experiences, and musical preferences using play live / performed on stage / acoustic.",
    prompts: [
      "The local orchestra performed a breathtaking classical symphony at the auditorium.",
      "Attending an outdoor live music concert with friends is an exhilarating experience.",
      "Which musical instruments can you play: piano, acoustic guitar, or violin?",
      "The acoustic quality inside the historic concert hall is world renowned.",
      "They bought front-row tickets well in advance for the indie music festival.",
      "Traditional folk music reflects the rich cultural history of a region.",
      "The lead singer thanked the enthusiastic audience for their warm reception.",
      "Listening to soothing instrumental melodies helps many people concentrate while studying.",
      "The street musicians performed lively jazz tunes near the pedestrian promenade.",
      "Experiencing live cultural performances enriches community life and social harmony."
    ],
    vocab: [
      { id: "v_u17_l244_1", word: "orchestra", phonetic: "/ˈɔːkɪstrə/", meaning: "a large group of musicians playing different instruments together", translationsByLang: { hi: "वाद्यवृंद / ऑर्केस्ट्रा", es: "orquesta" }, exampleSentence: "The symphony orchestra practiced for months before the concert.", exampleTranslationByLang: { hi: "सिम्फनी ऑर्केस्ट्रा ने कॉन्सर्ट से पहले महीनों अभ्यास किया।", es: "La orquesta sinfónica practicó durante meses antes del concierto." }, audioText: "orchestra", audioId: "en_a2_u17_l244_v_1", slowAudioId: "en_a2_u17_l244_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎻", difficulty: "A2 Elementary" },
      { id: "v_u17_l244_2", word: "auditorium", phonetic: "/ˌɔːdɪˈtɔːriəm/", meaning: "the part of a theater, concert hall, or other public building in which the audience sits", translationsByLang: { hi: "सभागार / श्रोताकक्ष", es: "auditorio / sala de conciertos" }, exampleSentence: "The spacious auditorium was filled to maximum capacity.", exampleTranslationByLang: { hi: "विशाल सभागार पूरी क्षमता से भरा हुआ था।", es: "El espacioso auditorio estaba lleno a su máxima capacidad." }, audioText: "auditorium", audioId: "en_a2_u17_l244_v_2", slowAudioId: "en_a2_u17_l244_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏛️", difficulty: "A2 Elementary" },
      { id: "v_u17_l244_3", word: "melody", phonetic: "/ˈmelədi/", meaning: "a sequence of single notes that is musically satisfying; a tune", translationsByLang: { hi: "धुन / राग", es: "melodía" }, exampleSentence: "The flutist played a hauntingly beautiful folk melody.", exampleTranslationByLang: { hi: "बांसुरी वादक ने एक बेहद सुंदर लोक धुन बजाई।", es: "El flautista tocó una hermosa melodía folclórica." }, audioText: "melody", audioId: "en_a2_u17_l244_v_3", slowAudioId: "en_a2_u17_l244_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🎶", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l244_1", expression: "live performance", meaning: "a musical or theatrical show presented directly to an audience", translationsByLang: { hi: "प्रत्यक्ष / सजीव प्रस्तुति", es: "actuación en vivo" }, usageNote: "Collocation for concerts and theater.", audioText: "Nothing compares to the energy of a live performance.", audioId: "en_a2_u17_l244_c_1", slowAudioId: "en_a2_u17_l244_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎤" }
    ],
    grammar: {
      title: "Sensory Verbs (sound like / look like / feel like + noun/clause)",
      concept: "Use sensory verbs ('sound like', 'feel like') to express impressions of cultural events.",
      patterns: [
        {
          id: "gp_u17_l244_1",
          title: "Sensory Perception Patterns",
          structure: "Subject + sound / feel / look + like + noun / adjective",
          explanation: "Describes sensory impressions of music and venues.",
          examples: [
            {
              english: "That acoustic piece sounds like traditional Spanish guitar music.",
              translation: "Esa pieza acústica suena como música de guitarra tradicional española.",
              translationByLang: { hi: "वह ध्वनिक धुन पारंपरिक स्पेनिश गिटार संगीत जैसी लगती है।", es: "Esa pieza acústica suena como música de guitarra tradicional española." },
              audioText: "That acoustic piece sounds like traditional Spanish guitar music.",
              audioId: "en_a2_u17_l244_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l244_1",
        incorrect: "The concert was very sound good.",
        correct: "The concert sounded very good.",
        explanation: "Use 'sounded' as the main verb, not 'was sound'.",
        explanationsByLang: { hi: "'sounded' को मुख्य क्रिया के रूप में प्रयोग करें।", es: "Usa 'sounded' como verbo principal." }
      }
    ],
    dialogue: {
      id: "d_u17_l244_1",
      title: "Concert Impressions",
      context: "Two attendees leaving a weekend jazz festival.",
      lines: [
        { speaker: "Karan", text: "How did you find the saxophone solo in the second half?", audioText: "How did you find the saxophone solo in the second half?" },
        { speaker: "Pallavi", text: "It was absolutely incredible; the acoustics in the hall made it sound magical!", audioText: "It was absolutely incredible; the acoustics in the hall made it sound magical!" }
      ]
    }
  },
  {
    num: 245,
    title: "Museums, Exhibitions & Historical Places",
    concept: "Inquire about museum admission, exhibit sections, historical artifacts, guided tours, and opening hours using admission fee / guided tour / artifact.",
    prompts: [
      "The national museum exhibits ancient artifacts dating back over two thousand years.",
      "How much is the admission fee for students and senior citizens?",
      "The museum offers complimentary audio guides in several international languages.",
      "Photography without flash is permitted in all permanent exhibition galleries.",
      "The guided walking tour begins every hour outside the main entrance hall.",
      "Visitors are requested not to touch any fragile ceramic or glass artifacts.",
      "The temporary modern art exhibition will remain open until the end of May.",
      "Where is the interactive section dedicated to ancient maritime history located?",
      "Historic monuments preserve the architectural triumphs of past civilizations.",
      "Visiting cultural heritage museums provides deep insight into world history."
    ],
    vocab: [
      { id: "v_u17_l245_1", word: "artifact", phonetic: "/ˈɑːtɪfækt/", meaning: "an object made by a human being, typically one of cultural or historical interest", translationsByLang: { hi: "कलाकृति / ऐतिहासिक अवशेष", es: "artefacto / pieza histórica" }, exampleSentence: "Archaeologists uncovered a collection of bronze artifacts.", exampleTranslationByLang: { hi: "पुरातत्वविदों ने कांस्य कलाकृतियों का एक संग्रह खोजा।", es: "Los arqueólogos descubrieron una colección de artefactos de bronce." }, audioText: "artifact", audioId: "en_a2_u17_l245_v_1", slowAudioId: "en_a2_u17_l245_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏺", difficulty: "A2 Elementary" },
      { id: "v_u17_l245_2", word: "admission", phonetic: "/ədˈmɪʃn/", meaning: "the fee charged for entry to a place or event", translationsByLang: { hi: "प्रवेश शुल्क / दाखिला", es: "entrada / admisión" }, exampleSentence: "Admission is free on the first Sunday of every month.", exampleTranslationByLang: { hi: "हर महीने के पहले रविवार को प्रवेश निःशुल्क है।", es: "La entrada es gratuita el primer domingo de cada mes." }, audioText: "admission", audioId: "en_a2_u17_l245_v_2", slowAudioId: "en_a2_u17_l245_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎟️", difficulty: "A2 Elementary" },
      { id: "v_u17_l245_3", word: "exhibition", phonetic: "/ˌeksɪˈbɪʃn/", meaning: "a public display of works of art or items of interest", translationsByLang: { hi: "प्रदर्शनी", es: "exposición" }, exampleSentence: "The sculpture exhibition attracted thousands of art enthusiasts.", exampleTranslationByLang: { hi: "मूर्तिकला प्रदर्शनी ने हजारों कला प्रेमियों को आकर्षित किया।", es: "La exposición de escultura atrajo a miles de entusiastas del arte." }, audioText: "exhibition", audioId: "en_a2_u17_l245_v_3", slowAudioId: "en_a2_u17_l245_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🖼️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l245_1", expression: "guided tour", meaning: "a tour of a historic building or museum led by a knowledgeable guide", translationsByLang: { hi: "गाइडेड टूर / निर्देशित भ्रमण", es: "visita guiada" }, usageNote: "Standard tourism collocation.", audioText: "We joined the guided tour of the castle.", audioId: "en_a2_u17_l245_c_1", slowAudioId: "en_a2_u17_l245_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🚩" }
    ],
    grammar: {
      title: "Passive Voice for Museum Notices & Rules (is permitted / are requested)",
      concept: "Use Present Simple passive for institutional rules and information (is displayed / are prohibited).",
      patterns: [
        {
          id: "gp_u17_l245_1",
          title: "Passive Rules & Regulations",
          structure: "Subject + is / are + past participle (+ prepositional phrase)",
          explanation: "Expresses formal institutional regulations and informational signage.",
          examples: [
            {
              english: "Ancient coins are displayed in secure glass showcases.",
              translation: "Las monedas antiguas se exhiben en vitrinas de vidrio seguras.",
              translationByLang: { hi: "प्राचीन सिक्के सुरक्षित कांच के शोकेस में प्रदर्शित हैं।", es: "Las monedas antiguas se exhiben en vitrinas de vidrio seguras." },
              audioText: "Ancient coins are displayed in secure glass showcases.",
              audioId: "en_a2_u17_l245_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l245_1",
        incorrect: "Photos is not allowed in this room.",
        correct: "Photos are not allowed in this room.",
        explanation: "'Photos' is plural, so use 'are not allowed'.",
        explanationsByLang: { hi: "'Photos' बहुवचन है, इसलिए 'are not allowed' का प्रयोग करें।", es: "'Photos' es plural, requiere 'are not allowed'." }
      }
    ],
    dialogue: {
      id: "d_u17_l245_1",
      title: "At the Museum Ticket Counter",
      context: "A visitor asking about audio guides and exhibit entry.",
      lines: [
        { speaker: "Visitor", text: "Excuse me, does the general admission ticket include the temporary exhibition?", audioText: "Excuse me, does the general admission ticket include the temporary exhibition?" },
        { speaker: "Staff", text: "Yes, it grants access to all galleries, and audio guides are available in Hall 1.", audioText: "Yes, it grants access to all galleries, and audio guides are available in Hall 1." }
      ]
    }
  },
  {
    num: 246,
    title: "Festivals, Traditions & Cultural Celebrations",
    concept: "Explain festive customs, cultural heritage, seasonal carnivals, traditional attire, and ceremonial food using celebrate / take place / symbolic.",
    prompts: [
      "The annual lantern festival takes place during the full moon of the autumn season.",
      "People wear ornate traditional costumes and dance in the main village square.",
      "What is the cultural significance of lighting clay oil lamps during the celebration?",
      "Special ceremonial sweets are prepared and distributed among all community members.",
      "The carnival procession featured colorful floats, live drummers, and acrobats.",
      "Families clean and decorate their homes thoroughly before the festival begins.",
      "Sharing festive meals symbolizes goodwill, prosperity, and communal harmony.",
      "How do people in your country celebrate the arrival of the spring harvest?",
      "Cultural festivals offer wonderful opportunities to learn about diverse global customs.",
      "Preserving ancestral traditions connects younger generations with their history."
    ],
    vocab: [
      { id: "v_u17_l246_1", word: "procession", phonetic: "/prəˈseʃn/", meaning: "a number of people or vehicles moving forward in an orderly fashion, especially as part of a ceremony", translationsByLang: { hi: "जुलूस / शोभायात्रा", es: "procesión / desfile" }, exampleSentence: "The festival procession marched through the historic streets.", exampleTranslationByLang: { hi: "त्योहार का जुलूस ऐतिहासिक गलियों से होकर गुजरा।", es: "La procesión del festival recorrió las calles históricas." }, audioText: "procession", audioId: "en_a2_u17_l246_v_1", slowAudioId: "en_a2_u17_l246_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎺", difficulty: "A2 Elementary" },
      { id: "v_u17_l246_2", word: "symbolize", phonetic: "/ˈsɪmbəlaɪz/", meaning: "be a symbol of; represent", translationsByLang: { hi: "का प्रतीक होना", es: "simbolizar / representar" }, exampleSentence: "White blossoms symbolize renewal and peace in our culture.", exampleTranslationByLang: { hi: "सफेद फूल हमारी संस्कृति में नवीकरण और शांति का प्रतीक हैं।", es: "Las flores blancas simbolizan la renovación y la paz en nuestra cultura." }, audioText: "symbolize", audioId: "en_a2_u17_l246_v_2", slowAudioId: "en_a2_u17_l246_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🕊️", difficulty: "A2 Elementary" },
      { id: "v_u17_l246_3", word: "heritage", phonetic: "/ˈherɪtɪdʒ/", meaning: "valued objects and qualities such as historic buildings and cultural traditions", translationsByLang: { hi: "विरासत / धरोहर", es: "patrimonio / herencia cultural" }, exampleSentence: "The festival honors the rich musical heritage of the region.", exampleTranslationByLang: { hi: "त्योहार इस क्षेत्र की समृद्ध संगीत विरासत का सम्मान करता है।", es: "El festival honra el rico patrimonio musical de la región." }, audioText: "heritage", audioId: "en_a2_u17_l246_v_3", slowAudioId: "en_a2_u17_l246_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🏛️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l246_1", expression: "take place", meaning: "to happen or occur at a particular place or time", translationsByLang: { hi: "आयोजित होना / घटित होना", es: "tener lugar / celebrarse" }, usageNote: "High-frequency event phrase.", audioText: "The ceremony takes place every autumn.", audioId: "en_a2_u17_l246_c_1", slowAudioId: "en_a2_u17_l246_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📅" }
    ],
    grammar: {
      title: "Adverbial Clauses of Time (when / before / after / while)",
      concept: "Connect celebration events with chronological time linkers in present or past contexts.",
      patterns: [
        {
          id: "gp_u17_l246_1",
          title: "Time Connectors in Cultural Contexts",
          structure: "When / Before / After + clause, main clause",
          explanation: "Sequences traditional rituals and seasonal steps.",
          examples: [
            {
              english: "Before the celebration begins, elders light the ceremonial lamp.",
              translation: "Antes de que comience la celebración, los mayores encienden la lámpara ceremonial.",
              translationByLang: { hi: "समारोह शुरू होने से पहले, बुजुर्ग औपचारिक दीपक जलाते हैं।", es: "Antes de que comience la celebración, los mayores encienden la lámpara ceremonial." },
              audioText: "Before the celebration begins, elders light the ceremonial lamp.",
              audioId: "en_a2_u17_l246_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l246_1",
        incorrect: "When the festival will start, people dance.",
        correct: "When the festival starts, people dance.",
        explanation: "In time clauses referring to regular or future events, use Present Simple, not 'will'.",
        explanationsByLang: { hi: "समय उपवाक्यों (time clauses) में 'will' के स्थान पर Present Simple का प्रयोग करें।", es: "En cláusulas temporales con 'when' se usa Present Simple, no 'will'." }
      }
    ],
    dialogue: {
      id: "d_u17_l246_1",
      title: "Explaining a Cultural Tradition",
      context: "A local resident explaining harvest festival rituals to an international guest.",
      lines: [
        { speaker: "Guest", text: "Why do people distribute sweet rice dishes during this festival?", audioText: "Why do people distribute sweet rice dishes during this festival?" },
        { speaker: "Local", text: "It symbolizes gratitude for a bountiful harvest and wishes for good fortune in the new year.", audioText: "It symbolizes gratitude for a bountiful harvest and wishes for good fortune in the new year." }
      ]
    }
  },
  {
    num: 247,
    title: "Tourism, Sightseeing & Local Recommendations",
    concept: "Recommend must-see tourist landmarks, scenic viewpoints, local transit tips, and itineraries using must-see / breathtaking / located in.",
    prompts: [
      "The ancient stone fortress is a must-see landmark for every visitor.",
      "You can enjoy breathtaking panoramic views of the bay from the hilltop lookout.",
      "I recommend buying a twenty-four-hour travel pass for the city tram network.",
      "Where can we find authentic regional cuisine at reasonable prices?",
      "The historic old town is famous for its cobblestone alleys and artisan craft shops.",
      "Taking an early morning boat cruise allows you to avoid the busiest afternoon crowds.",
      "The tourist information office provides free city maps and transit schedules.",
      "Is the scenic coastal trail suitable for beginner hikers and families?",
      "Local tour guides share fascinating anecdotes about the city's maritime history.",
      "Exploring a city on foot allows travelers to discover hidden architectural gems."
    ],
    vocab: [
      { id: "v_u17_l247_1", word: "landmark", phonetic: "/ˈlændmɑːk/", meaning: "an object or feature of a landscape or town that is easily seen and recognized from a distance", translationsByLang: { hi: "प्रसिद्ध ऐतिहासिक स्थल / मील का पत्थर", es: "punto de referencia / monumento emblemático" }, exampleSentence: "The iconic clock tower is the city's most famous landmark.", exampleTranslationByLang: { hi: "प्रतिष्ठित क्लॉक टॉवर शहर का सबसे प्रसिद्ध स्थल है।", es: "La icónica torre del reloj es el monumento más famoso de la ciudad." }, audioText: "landmark", audioId: "en_a2_u17_l247_v_1", slowAudioId: "en_a2_u17_l247_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🗼", difficulty: "A2 Elementary" },
      { id: "v_u17_l247_2", word: "panoramic", phonetic: "/ˌpænəˈræmɪk/", meaning: "with a wide view of an extensive area in all directions", translationsByLang: { hi: "विहंगम / चारों ओर का दृश्य", es: "panorámico" }, exampleSentence: "We paused at the summit to admire the panoramic mountain view.", exampleTranslationByLang: { hi: "हमने पहाड़ के विहंगम दृश्य की प्रशंसा करने के लिए चोटी पर विश्राम किया।", es: "Nos detuvimos en la cima para admirar la vista panorámica de la montaña." }, audioText: "panoramic", audioId: "en_a2_u17_l247_v_2", slowAudioId: "en_a2_u17_l247_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏞️", difficulty: "A2 Elementary" },
      { id: "v_u17_l247_3", word: "itinerary", phonetic: "/aɪˈtɪnərəri/", meaning: "a planned route or journey", translationsByLang: { hi: "यात्रा कार्यक्रम / मार्ग योजना", es: "itinerario / plan de viaje" }, exampleSentence: "Our weekend travel itinerary includes three historic museums.", exampleTranslationByLang: { hi: "हमारे सप्ताहांत यात्रा कार्यक्रम में तीन ऐतिहासिक संग्रहालय शामिल हैं।", es: "Nuestro itinerario de fin de semana incluye tres museos históricos." }, audioText: "itinerary", audioId: "en_a2_u17_l247_v_3", slowAudioId: "en_a2_u17_l247_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🗺️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l247_1", expression: "a must-see", meaning: "something that is highly recommended and should not be missed", translationsByLang: { hi: "अवश्य देखने योग्य", es: "una visita obligada" }, usageNote: "Used to highlight top tourist attractions.", audioText: "The royal palace is an absolute must-see.", audioId: "en_a2_u17_l247_c_1", slowAudioId: "en_a2_u17_l247_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⭐" }
    ],
    grammar: {
      title: "Superlatives & Recommendations (the most scenic / the best way)",
      concept: "Use superlative adjectives ('the oldest', 'the most popular') combined with modal suggestions ('you should', 'you can').",
      patterns: [
        {
          id: "gp_u17_l247_1",
          title: "Superlative Sightseeing Guidance",
          structure: "The most + adjective + noun + is / The best way to [verb] is to [verb]",
          explanation: "Highlights premier sights and practical transit advice.",
          examples: [
            {
              english: "The best way to see the historic canals is by taking an electric boat tour.",
              translation: "La mejor manera de ver los canales históricos es tomar un tour en barco eléctrico.",
              translationByLang: { hi: "ऐतिहासिक नहरों को देखने का सबसे अच्छा तरीका इलेक्ट्रिक बोट टूर लेना है।", es: "La mejor manera de ver los canales históricos es tomar un tour en barco eléctrico." },
              audioText: "The best way to see the historic canals is by taking an electric boat tour.",
              audioId: "en_a2_u17_l247_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l247_1",
        incorrect: "This is the most best viewpoint in the city.",
        correct: "This is the best viewpoint in the city.",
        explanation: "Do not use 'most' with irregular superlatives like 'best'.",
        explanationsByLang: { hi: "'best' के साथ 'most' का प्रयोग न करें।", es: "'Best' ya es superlativo; no uses 'most best'." }
      }
    ],
    dialogue: {
      id: "d_u17_l247_1",
      title: "Asking for Tourist Advice",
      context: "A traveler asking the concierge for the best sightseeing route.",
      lines: [
        { speaker: "Traveler", text: "What is the best way to explore the old quarter in one afternoon?", audioText: "What is the best way to explore the old quarter in one afternoon?" },
        { speaker: "Concierge", text: "Start at the cathedral square, walk through the artisan market, and end at the panoramic river viewpoint.", audioText: "Start at the cathedral square, walk through the artisan market, and end at the panoramic river viewpoint." }
      ]
    }
  },
  {
    num: 248,
    title: "Travel Culture & Respectful Communication",
    concept: "Communicate respectfully in diverse cultural contexts, follow local etiquette, ask about appropriate dress codes, and handle intercultural interactions with politeness.",
    prompts: [
      "When visiting religious shrines, visitors should dress modestly and remove their shoes.",
      "It is polite to ask permission before taking photographs of local artisans.",
      "Learning a few polite greeting phrases in the local language shows respect.",
      "Could you please advise me on the customary tipping etiquette in this country?",
      "In many cultures, speaking loudly on public transportation is considered discourteous.",
      "Respecting local cultural norms helps foster warm and positive intercultural relationships.",
      "Always greet shopkeepers courteously when entering a small neighborhood boutique.",
      "What are the customary dining traditions when eating with local host families?",
      "Being open-minded and adaptable makes traveling a more rewarding experience.",
      "Clear, courteous communication resolves cultural differences peacefully and easily."
    ],
    vocab: [
      { id: "v_u17_l248_1", word: "etiquette", phonetic: "/ˈetɪket/", meaning: "the customary code of polite behavior in society or among members of a particular profession", translationsByLang: { hi: "शिष्टाचार / आचार-व्यवहार", es: "etiqueta / normas de cortesía" }, exampleSentence: "Understanding dining etiquette is important when attending a formal dinner.", exampleTranslationByLang: { hi: "औपचारिक रात्रिभोज में भाग लेते समय भोजन के शिष्टाचार को समझना महत्वपूर्ण है।", es: "Comprender la etiqueta al cenar es importante en una cena formal." }, audioText: "etiquette", audioId: "en_a2_u17_l248_v_1", slowAudioId: "en_a2_u17_l248_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🤝", difficulty: "A2 Elementary" },
      { id: "v_u17_l248_2", word: "customary", phonetic: "/ˈkʌstəməri/", meaning: "according to the customs or usual practices associated with a particular society, place, or set of circumstances", translationsByLang: { hi: "प्रथागत / परंपरागत", es: "acostumbrado / habitual" }, exampleSentence: "It is customary to bring a small gift when visiting someone's home.", exampleTranslationByLang: { hi: "किसी के घर जाते समय एक छोटा उपहार लाना प्रथागत है।", es: "Es habitual llevar un pequeño obsequio al visitar una casa." }, audioText: "customary", audioId: "en_a2_u17_l248_v_2", slowAudioId: "en_a2_u17_l248_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎁", difficulty: "A2 Elementary" },
      { id: "v_u17_l248_3", word: "courteous", phonetic: "/ˈkɜːtiəs/", meaning: "polite, respectful, or considerate in manner", translationsByLang: { hi: "विनम्र / भद्र", es: "cortés / educado" }, exampleSentence: "The hotel receptionist was very courteous and accommodating.", exampleTranslationByLang: { hi: "होटल रिसेप्शनिस्ट बहुत विनम्र और सहयोगी था।", es: "El recepcionista del hotel fue muy cortés y atento." }, audioText: "courteous", audioId: "en_a2_u17_l248_v_3", slowAudioId: "en_a2_u17_l248_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🙏", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l248_1", expression: "When in Rome, do as the Romans do", meaning: "adapt yourself to the customs of the places you are visiting", translationsByLang: { hi: "जैसा देश, वैसा भेष", es: "Donde fueres, haz lo que vieres" }, usageNote: "Proverb on cultural adaptability.", audioText: "Remember: when in Rome, do as the Romans do.", audioId: "en_a2_u17_l248_c_1", slowAudioId: "en_a2_u17_l248_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏛️" }
    ],
    grammar: {
      title: "Modal Verbs for Social Rules & Advice (should / must / ought to / be allowed to)",
      concept: "Use modal verbs to communicate social obligations, cultural recommendations, and prohibitions.",
      patterns: [
        {
          id: "gp_u17_l248_1",
          title: "Modals of Cultural Propriety",
          structure: "Visitors should / must + base verb / It is considered + adjective + to-infinitive",
          explanation: "Expresses cultural expectations politely.",
          examples: [
            {
              english: "You should dress respectfully when entering sacred historic monuments.",
              translation: "Debes vestir con respeto al ingresar a monumentos históricos sagrados.",
              translationByLang: { hi: "पवित्र ऐतिहासिक स्मारकों में प्रवेश करते समय आपको सम्मानपूर्वक कपड़े पहनने चाहिए।", es: "Debes vestir con respeto al ingresar a monumentos históricos sagrados." },
              audioText: "You should dress respectfully when entering sacred historic monuments.",
              audioId: "en_a2_u17_l248_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l248_1",
        incorrect: "You must to take off your shoes.",
        correct: "You must take off your shoes. / You have to take off your shoes.",
        explanation: "Modal verbs like 'must' take a bare infinitive without 'to'.",
        explanationsByLang: { hi: "'must' के बाद 'to' नहीं लगाया जाता है।", es: "Los modales como 'must' no llevan 'to'." }
      }
    ],
    dialogue: {
      id: "d_u17_l248_1",
      title: "Etiquette at a Temple",
      context: "A tour guide advising visitors before entering a historical temple complex.",
      lines: [
        { speaker: "Guide", text: "Before we step inside the main hall, please turn your mobile phones on silent mode.", audioText: "Before we step inside the main hall, please turn your mobile phones on silent mode." },
        { speaker: "Traveler", text: "Thank you for the guidance; are we permitted to take photos in the outer courtyard?", audioText: "Thank you for the guidance; are we permitted to take photos in the outer courtyard?" }
      ]
    }
  },
  {
    num: 249,
    title: "Weather, Natural Events & Public Information",
    concept: "Understand meteorological bulletins, weather forecasts, severe weather warnings, seasonal conditions, and relay advisory notices using forecast / expected to / warning.",
    prompts: [
      "The meteorological office issued a severe thunderstorm warning for northern coastal regions.",
      "Temperatures are expected to drop below freezing point during the overnight hours.",
      "Heavy snowfall caused temporary delays on several regional mountain rail routes.",
      "What is the weather forecast for our outdoor weekend hiking trip in the valley?",
      "Clear skies and mild sunny weather will prevail across the entire central plateau.",
      "Residents in low-lying river areas were advised to take precautions against possible flooding.",
      "Strong wind gusts reached over sixty kilometers per hour along the coastline.",
      "Carry an umbrella because intermittent light showers are predicted for this afternoon.",
      "Understanding weather advisories helps people plan outdoor travel safely and comfortably.",
      "The local news broadcast provides hourly updates during unexpected weather disruptions."
    ],
    vocab: [
      { id: "v_u17_l249_1", word: "forecast", phonetic: "/ˈfɔːkɑːst/", meaning: "a prediction or estimate of future events, especially coming weather", translationsByLang: { hi: "पूर्वानुमान / मौसम का हाल", es: "pronóstico / previsión meteorológica" }, exampleSentence: "The five-day weather forecast predicts warm sunny days.", exampleTranslationByLang: { hi: "पांच दिवसीय मौसम पूर्वानुमान गर्म धूप वाले दिनों की भविष्यवाणी करता है।", es: "El pronóstico del tiempo para cinco días prevé días soleados." }, audioText: "forecast", audioId: "en_a2_u17_l249_v_1", slowAudioId: "en_a2_u17_l249_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🌤️", difficulty: "A2 Elementary" },
      { id: "v_u17_l249_2", word: "precaution", phonetic: "/prɪˈkɔːʃn/", meaning: "a measure taken in advance to prevent something dangerous or unpleasant from happening", translationsByLang: { hi: "एहतियात / सावधानी", es: "precaución" }, exampleSentence: "Motorists should take extra precautions on wet, slippery roads.", exampleTranslationByLang: { hi: "वाहन चालकों को गीली, फिसलन भरी सड़कों पर अतिरिक्त सावधानी बरतनी चाहिए।", es: "Los conductores deben tomar precauciones en carreteras mojadas." }, audioText: "precaution", audioId: "en_a2_u17_l249_v_2", slowAudioId: "en_a2_u17_l249_v_2_slow", voiceId: "EN_TEACHER_01", icon: "⚠️", difficulty: "A2 Elementary" },
      { id: "v_u17_l249_3", word: "intermittent", phonetic: "/ˌɪntəˈmɪtənt/", meaning: "occurring at irregular intervals; not continuous or steady", translationsByLang: { hi: "रुक-रुक कर होने वाला", es: "intermitente" }, exampleSentence: "Expect intermittent rain showers throughout tomorrow morning.", exampleTranslationByLang: { hi: "कल सुबह रुक-रुक कर बारिश होने की उम्मीद है।", es: "Se esperan lluvias intermitentes durante la mañana de mañana." }, audioText: "intermittent", audioId: "en_a2_u17_l249_v_3", slowAudioId: "en_a2_u17_l249_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🌧️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l249_1", expression: "be expected to", meaning: "anticipated or predicted to happen", translationsByLang: { hi: "की उम्मीद होना / होने की संभावना होना", es: "esperarse que / estar previsto que" }, usageNote: "Key forecasting construction.", audioText: "Rain is expected to clear by evening.", audioId: "en_a2_u17_l249_c_1", slowAudioId: "en_a2_u17_l249_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📈" }
    ],
    grammar: {
      title: "Future Predictions with will / is expected to / likely to",
      concept: "Express degrees of certainty in weather predictions and public forecasts.",
      patterns: [
        {
          id: "gp_u17_l249_1",
          title: "Forecasting Structures",
          structure: "Subject + is/are expected to + base verb / Subject + will likely + verb",
          explanation: "Structures objective weather forecasts and public safety notices.",
          examples: [
            {
              english: "Winds are expected to ease by early tomorrow morning.",
              translation: "Se espera que los vientos disminuyan a primera hora de mañana.",
              translationByLang: { hi: "कल सुबह तक हवाओं के शांत होने की उम्मीद है।", es: "Se espera que los vientos disminuyan a primera hora de mañana." },
              audioText: "Winds are expected to ease by early tomorrow morning.",
              audioId: "en_a2_u17_l249_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l249_1",
        incorrect: "It is raining very hardly today.",
        correct: "It is raining very hard today.",
        explanation: "'Hard' is both an adjective and an adverb; 'hardly' means scarcely or barely.",
        explanationsByLang: { hi: "तेज बारिश के लिए 'hard' का प्रयोग करें; 'hardly' का अर्थ 'मुश्किल से' होता है।", es: "Usa 'hard' para intensidad; 'hardly' significa 'apenas'." }
      }
    ],
    dialogue: {
      id: "d_u17_l249_1",
      title: "Checking the Weekend Forecast",
      context: "Two friends planning a weekend cycling excursion.",
      lines: [
        { speaker: "Anil", text: "Did you check the weather report before we finalize our bicycle route?", audioText: "Did you check the weather report before we finalize our bicycle route?" },
        { speaker: "Suman", text: "Yes! Sunday is expected to be sunny and dry, so that will be the best day for our ride.", audioText: "Yes! Sunday is expected to be sunny and dry, so that will be the best day for our ride." }
      ]
    }
  },
  {
    num: 250,
    title: "Everyday Information, Notices & Announcements",
    concept: "Read and decode municipal notices, public transit announcements, opening hours, schedule alterations, and elevator/facility signs.",
    prompts: [
      "Please note that the public library will be closed on Monday for inventory maintenance.",
      "Passengers traveling on platform four should board the train through the front doors.",
      "The elevator is temporarily out of service; please use the adjacent staircase.",
      "All visitors must register their vehicles at the entrance security gatehouse.",
      "The municipal drinking water supply will be briefly interrupted on Wednesday morning.",
      "Due to track modernization, subway trains will operate on a revised Sunday schedule.",
      "You can find official council announcements on the public community noticeboard.",
      "Smoking is strictly prohibited on all station platforms and covered waiting areas.",
      "Lost and found items can be claimed at the station customer service center.",
      "Understanding public signs helps citizens navigate municipal infrastructure independently."
    ],
    vocab: [
      { id: "v_u17_l250_1", word: "announcement", phonetic: "/əˈnaʊnsmənt/", meaning: "a formal public statement about a fact, occurrence, or intention", translationsByLang: { hi: "घोषणा / सूचना", es: "anuncio / aviso" }, exampleSentence: "We listened attentively to the station loudspeaker announcement.", exampleTranslationByLang: { hi: "हमने स्टेशन लाउडस्पीकर की घोषणा को ध्यान से सुना।", es: "Escuchamos atentamente el anuncio del altavoz de la estación." }, audioText: "announcement", audioId: "en_a2_u17_l250_v_1", slowAudioId: "en_a2_u17_l250_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📢", difficulty: "A2 Elementary" },
      { id: "v_u17_l250_2", word: "prohibited", phonetic: "/prəˈhɪbɪtɪd/", meaning: "that has been forbidden; banned", translationsByLang: { hi: "निषिद्ध / वर्जित", es: "prohibido" }, exampleSentence: "Parking in front of emergency exits is strictly prohibited.", exampleTranslationByLang: { hi: "आपातकालीन निकास के सामने पार्किंग सख्त वर्जित है।", es: "Está estrictamente prohibido estacionar frente a las salidas de emergencia." }, audioText: "prohibited", audioId: "en_a2_u17_l250_v_2", slowAudioId: "en_a2_u17_l250_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🚫", difficulty: "A2 Elementary" },
      { id: "v_u17_l250_3", word: "adjacent", phonetic: "/əˈdʒeɪsnt/", meaning: "next to or adjoining something else", translationsByLang: { hi: "सटा हुआ / पास का", es: "adyacente / contiguo" }, exampleSentence: "The ticket office is located in the adjacent terminal building.", exampleTranslationByLang: { hi: "टिकट कार्यालय पास के टर्मिनल भवन में स्थित है।", es: "La taquilla se encuentra en el edificio terminal adyacente." }, audioText: "adjacent", audioId: "en_a2_u17_l250_v_3", slowAudioId: "en_a2_u17_l250_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🏢", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l250_1", expression: "out of service", meaning: "not working or not available for use", translationsByLang: { hi: "काम नहीं कर रहा / सेवा से बाहर", es: "fuera de servicio" }, usageNote: "Common signage chunk.", audioText: "The ticket machine is temporarily out of service.", audioId: "en_a2_u17_l250_c_1", slowAudioId: "en_a2_u17_l250_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🔧" }
    ],
    grammar: {
      title: "Imperatives & Passive Notices (Please note that / Must be registered)",
      concept: "Use polite imperatives ('Please note that', 'Please use') and modal passives ('Must be registered') for public instructions.",
      patterns: [
        {
          id: "gp_u17_l250_1",
          title: "Public Directives & Signs",
          structure: "Please + base verb / Subject + must be + past participle",
          explanation: "Formulates official instructions and public notifications.",
          examples: [
            {
              english: "Bicycles must be parked in designated bike racks outside the entrance.",
              translation: "Las bicicletas deben estacionarse en los soportes designados fuera de la entrada.",
              translationByLang: { hi: "साइकिलें प्रवेश द्वार के बाहर निर्दिष्ट बाइक रैक में पार्क की जानी चाहिए।", es: "Las bicicletas deben estacionarse en los soportes designados fuera de la entrada." },
              audioText: "Bicycles must be parked in designated bike racks outside the entrance.",
              audioId: "en_a2_u17_l250_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l250_1",
        incorrect: "Please to not enter this area.",
        correct: "Please do not enter this area.",
        explanation: "In negative imperatives, use 'do not + base verb', not 'to not'.",
        explanationsByLang: { hi: "नकारात्मक आज्ञार्थक वाक्यों में 'do not + base verb' का प्रयोग करें।", es: "En imperativos negativos se usa 'do not + verbo'." }
      }
    ],
    dialogue: {
      id: "d_u17_l250_1",
      title: "Decoding a Train Notice",
      context: "A passenger asking a station attendant about a platform announcement.",
      lines: [
        { speaker: "Passenger", text: "Did the announcement say that our train is arriving on platform three instead of two?", audioText: "Did the announcement say that our train is arriving on platform three instead of two?" },
        { speaker: "Attendant", text: "That is correct! Please cross the footbridge to reach platform three.", audioText: "That is correct! Please cross the footbridge to reach platform three." }
      ]
    }
  },
  {
    num: 251,
    title: "Giving Opinions About Media & Cultural Topics",
    concept: "Debate cultural trends, streaming platforms, digital reading vs print, and cinema vs home entertainment using I reckon / from what I understand / on balance.",
    prompts: [
      "In my view, streaming documentaries makes learning about science accessible to everyone.",
      "I reckon that cinema visits offer a far more immersive auditory and visual experience.",
      "From what I understand, independent film festivals support innovative young directors.",
      "Do you believe that social media platforms should verify all news articles before publication?",
      "On balance, reading printed books causes less eye fatigue than reading on glowing screens.",
      "She argued persuasively that public art installations beautify modern urban spaces.",
      "While digital media offers instant convenience, preserving physical libraries remains crucial.",
      "I am inclined to agree that classical music concerts deserve public funding and support.",
      "Everyone in the seminar shared diverse cultural perspectives with mutual respect.",
      "Constructive discussions allow people to evaluate media content with critical thinking."
    ],
    vocab: [
      { id: "v_u17_l251_1", word: "immersive", phonetic: "/ɪˈmɜːsɪv/", meaning: "generating a three-dimensional image which appears to surround the user", translationsByLang: { hi: "सम्मोहक / पूरी तरह डूबा देने वाला", es: "inmersivo" }, exampleSentence: "The surround-sound audio provided an immersive cinema experience.", exampleTranslationByLang: { hi: "सराउंड-साउंड ऑडियो ने एक सम्मोहक सिनेमा अनुभव प्रदान किया।", es: "El sonido envolvente proporcionó una experiencia cinematográfica inmersiva." }, audioText: "immersive", audioId: "en_a2_u17_l251_v_1", slowAudioId: "en_a2_u17_l251_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎧", difficulty: "A2 Elementary" },
      { id: "v_u17_l251_2", word: "accessible", phonetic: "/əkˈsesəbl/", meaning: "able to be reached, entered, or easily understood", translationsByLang: { hi: "सुलभ / आसान पहुंच वाला", es: "accesible / comprensible" }, exampleSentence: "The documentary made complex physics concepts accessible to beginners.", exampleTranslationByLang: { hi: "वृत्तचित्र ने जटिल भौतिकी अवधारणाओं को शुरुआती लोगों के लिए सुलभ बना दिया।", es: "El documental hizo que los conceptos fueran accesibles para principiantes." }, audioText: "accessible", audioId: "en_a2_u17_l251_v_2", slowAudioId: "en_a2_u17_l251_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🔓", difficulty: "A2 Elementary" },
      { id: "v_u17_l251_3", word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "a particular attitude toward or way of regarding something; a point of view", translationsByLang: { hi: "दृष्टिकोण / परिप्रेक्ष्य", es: "perspectiva / punto de vista" }, exampleSentence: "Hearing different cultural perspectives enriched our debate.", exampleTranslationByLang: { hi: "विभिन्न सांस्कृतिक दृष्टिकोणों को सुनने से हमारी बहस समृद्ध हुई।", es: "Escuchar diferentes perspectivas culturales enriqueció nuestro debate." }, audioText: "perspective", audioId: "en_a2_u17_l251_v_3", slowAudioId: "en_a2_u17_l251_v_3_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l251_1", expression: "on balance", meaning: "after taking all things into consideration", translationsByLang: { hi: "कुल मिलाकर / सब बातों पर विचार करने के बाद", es: "en balance / considerando todo" }, usageNote: "Discourse marker for balanced conclusions.", audioText: "On balance, the advantages outweigh the drawbacks.", audioId: "en_a2_u17_l251_c_1", slowAudioId: "en_a2_u17_l251_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚖️" }
    ],
    grammar: {
      title: "Verbs of Opinion & Speculation (reckon / believe that / argue that)",
      concept: "Use varied opinion verbs to present nuanced viewpoints on cultural and media topics.",
      patterns: [
        {
          id: "gp_u17_l251_1",
          title: "Stating Nuanced Opinions",
          structure: "I reckon / believe / argue that + clause",
          explanation: "Expresses reasoned opinions beyond basic 'I think'.",
          examples: [
            {
              english: "I reckon that documentary films can inspire meaningful social change.",
              translation: "Considero que las películas documentales pueden inspirar cambios sociales significativos.",
              translationByLang: { hi: "मेरा मानना है कि वृत्तचित्र फिल्में सार्थक सामाजिक बदलाव को प्रेरित कर सकती हैं।", es: "Considero que las películas documentales pueden inspirar cambios sociales significativos." },
              audioText: "I reckon that documentary films can inspire meaningful social change.",
              audioId: "en_a2_u17_l251_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l251_1",
        incorrect: "In my opinion, I think that the cinema is better.",
        correct: "In my opinion, the cinema is better. / I think that the cinema is better.",
        explanation: "Do not combine 'In my opinion' and 'I think' in the same sentence (redundancy).",
        explanationsByLang: { hi: "'In my opinion' और 'I think' को एक साथ न मिलाएं।", es: "No uses 'in my opinion' e 'I think' juntos (es redundante)." }
      }
    ],
    dialogue: {
      id: "d_u17_l251_1",
      title: "Debating Streaming vs Cinema",
      context: "Two cinema lovers discussing changing media consumption habits.",
      lines: [
        { speaker: "Manish", text: "Do you prefer watching newly released films on streaming services at home?", audioText: "Do you prefer watching newly released films on streaming services at home?" },
        { speaker: "Kavya", text: "Streaming is convenient, but I reckon seeing a movie on a giant cinema screen is unmatched.", audioText: "Streaming is convenient, but I reckon seeing a movie on a giant cinema screen is unmatched." }
      ]
    }
  },
  {
    num: 252,
    title: "Comparing Sources & Identifying Important Information",
    concept: "Cross-reference information across media channels, identify reliable sources, separate facts from rumors, and compare differing news accounts.",
    prompts: [
      "It is always prudent to verify breaking news across multiple reputable news sources.",
      "The official government bulletin confirmed the facts that were rumored online.",
      "How can readers distinguish between factual reporting and unverified sensational rumors?",
      "Comparing two different articles revealed subtle differences in their casualty estimates.",
      "The investigative journalist cited primary official documents and verified eyewitness interviews.",
      "Critical readers check the publication date before sharing articles on social networks.",
      "One source reported that the museum was open, whereas another claimed it was closed.",
      "Cross-referencing transit schedules prevented us from missing the early morning coach.",
      "Reputable newspapers employ experienced fact-checkers to maintain editorial integrity.",
      "Developing media literacy empowers citizens to make well-informed daily decisions."
    ],
    vocab: [
      { id: "v_u17_l252_1", word: "reputable", phonetic: "/ˈrepjətəbl/", meaning: "having a good reputation; well thought of", translationsByLang: { hi: "प्रतिष्ठित / विश्वसनीय", es: "reputado / de buena reputación" }, exampleSentence: "Always consult a reputable news source before drawing conclusions.", exampleTranslationByLang: { hi: "निष्कर्ष निकालने से पहले हमेशा किसी प्रतिष्ठित समाचार स्रोत से परामर्श लें।", es: "Consulte siempre una fuente de noticias de buena reputación." }, audioText: "reputable", audioId: "en_a2_u17_l252_v_1", slowAudioId: "en_a2_u17_l252_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🛡️", difficulty: "A2 Elementary" },
      { id: "v_u17_l252_2", word: "verify", phonetic: "/ˈverɪfaɪ/", meaning: "make sure or demonstrate that (something) is true, accurate, or justified", translationsByLang: { hi: "सत्यापित करना / जांचना", es: "verificar / comprobar" }, exampleSentence: "The editor took time to verify every statistical claim.", exampleTranslationByLang: { hi: "संपादक ने प्रत्येक सांख्यिकीय दावे को सत्यापित करने के लिए समय लिया।", es: "El editor se tomó el tiempo para verificar cada afirmación." }, audioText: "verify", audioId: "en_a2_u17_l252_v_2", slowAudioId: "en_a2_u17_l252_v_2_slow", voiceId: "EN_TEACHER_01", icon: "✔️", difficulty: "A2 Elementary" },
      { id: "v_u17_l252_3", word: "rumor", phonetic: "/ˈruːmə(r)/", meaning: "a currently circulating story or report of uncertain or doubtful truth", translationsByLang: { hi: "अफवाह", es: "rumor" }, exampleSentence: "Do not spread unconfirmed rumors on community forums.", exampleTranslationByLang: { hi: "सामुदायिक मंचों पर अपुष्ट अफवाहें न फैलाएं।", es: "No difunda rumores no confirmados en los foros comunitarios." }, audioText: "rumor", audioId: "en_a2_u17_l252_v_3", slowAudioId: "en_a2_u17_l252_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🗣️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l252_1", expression: "cross-reference", meaning: "check information by comparing it with another source", translationsByLang: { hi: "परस्पर जांच करना / मिलान करना", es: "cotejar / cruzar información" }, usageNote: "Critical thinking phrase.", audioText: "We should cross-reference both reports.", audioId: "en_a2_u17_l252_c_1", slowAudioId: "en_a2_u17_l252_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🔄" }
    ],
    grammar: {
      title: "Contrastive Linkers (whereas / while / on the contrary)",
      concept: "Use contrastive conjunctions ('whereas', 'while') to highlight discrepancies between sources.",
      patterns: [
        {
          id: "gp_u17_l252_1",
          title: "Contrasting Information Sources",
          structure: "Source A stated [clause], whereas Source B reported [clause]",
          explanation: "Compares contrasting data and narratives smoothly.",
          examples: [
            {
              english: "One article reported a five percent rise, whereas the official report stated only three percent.",
              translation: "Un artículo informó un aumento del cinco por ciento, mientras que el informe oficial indicó solo el tres por ciento.",
              translationByLang: { hi: "एक लेख में पांच प्रतिशत की वृद्धि बताई गई, जबकि आधिकारिक रिपोर्ट में केवल तीन प्रतिशत कहा गया।", es: "Un artículo informó un aumento del cinco por ciento, mientras que el informe oficial indicó solo el tres por ciento." },
              audioText: "One article reported a five percent rise, whereas the official report stated only three percent.",
              audioId: "en_a2_u17_l252_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l252_1",
        incorrect: "Whereas it rained, but we went out.",
        correct: "Whereas it rained in the north, it remained sunny in the south. / Although it rained, we went out.",
        explanation: "Do not use 'whereas' and 'but' together. Use 'whereas' to contrast two independent facts.",
        explanationsByLang: { hi: "'whereas' और 'but' को एक साथ न लगाएं; दो तथ्यों की तुलना के लिए 'whereas' का प्रयोग करें।", es: "No combines 'whereas' y 'but' en la misma frase." }
      }
    ],
    dialogue: {
      id: "d_u17_l252_1",
      title: "Checking Event Details",
      context: "Two students checking contradictory concert timings on two websites.",
      lines: [
        { speaker: "Naveen", text: "The venue website says the doors open at six, whereas the ticket states seven.", audioText: "The venue website says the doors open at six, whereas the ticket states seven." },
        { speaker: "Priya", text: "Let us call the box office directly to verify the exact schedule.", audioText: "Let us call the box office directly to verify the exact schedule." }
      ]
    }
  },
  {
    num: 253,
    title: "Short Narratives, Reports & Summaries",
    concept: "Synthesize cultural events, draft brief exhibition reviews, summarize news stories, and structure clear short reports using sequentially linked paragraphs.",
    prompts: [
      "To summarize briefly, the cultural festival attracted over ten thousand visitors this year.",
      "In conclusion, the modern art exhibition successfully bridged traditional and contemporary themes.",
      "The report highlights three principal factors contributing to the museum's increased attendance.",
      "First, the renovated galleries opened; next, interactive touchscreens were installed.",
      "Overall, the theatrical performance received overwhelmingly positive reviews from both critics and audiences.",
      "She wrote a concise summary of the archaeological discovery for the school newsletter.",
      "The author concluded the historical narrative with a thoughtful reflection on cultural preservation.",
      "Can you give me a two-sentence summary of the main points from the documentary?",
      "Structuring reports with clear introductory headings helps readers locate key information quickly.",
      "Summarizing complex information concisely is an essential academic and professional skill."
    ],
    vocab: [
      { id: "v_u17_l253_1", word: "concise", phonetic: "/kənˈsaɪs/", meaning: "giving a lot of information clearly and in a few words; brief, comprehensive", translationsByLang: { hi: "संक्षिप्त / सारगर्भित", es: "conciso / breve" }, exampleSentence: "She wrote a concise summary of the research report.", exampleTranslationByLang: { hi: "उसने शोध रिपोर्ट का एक संक्षिप्त सार लिखा।", es: "Ella escribió un resumen conciso del informe de investigación." }, audioText: "concise", audioId: "en_a2_u17_l253_v_1", slowAudioId: "en_a2_u17_l253_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📝", difficulty: "A2 Elementary" },
      { id: "v_u17_l253_2", word: "conclusion", phonetic: "/kənˈkluːʒn/", meaning: "the end or finish of an event, process, or text; a judgment reached by reasoning", translationsByLang: { hi: "निष्कर्ष / समाप्ति", es: "conclusión" }, exampleSentence: "In conclusion, the exhibition was a resounding success.", exampleTranslationByLang: { hi: "निष्कर्ष के रूप में, प्रदर्शनी एक शानदार सफलता थी।", es: "En conclusión, la exposición fue un éxito rotundo." }, audioText: "conclusion", audioId: "en_a2_u17_l253_v_2", slowAudioId: "en_a2_u17_l253_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🏁", difficulty: "A2 Elementary" },
      { id: "v_u17_l253_3", word: "highlight", phonetic: "/ˈhaɪlaɪt/", meaning: "draw special attention to", translationsByLang: { hi: "प्रमुखता से दिखाना / उजागर करना", es: "destacar / resaltar" }, exampleSentence: "The report highlights the necessity of cultural preservation.", exampleTranslationByLang: { hi: "रिपोर्ट सांस्कृतिक संरक्षण की आवश्यकता को रेखांकित करती है।", es: "El informe destaca la necesidad de la preservación cultural." }, audioText: "highlight", audioId: "en_a2_u17_l253_v_3", slowAudioId: "en_a2_u17_l253_v_3_slow", voiceId: "EN_TEACHER_01", icon: "✨", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l253_1", expression: "To sum up", meaning: "in summary; concluding briefly", translationsByLang: { hi: "संक्षेप में कहें तो", es: "Para resumir" }, usageNote: "Signposting expression for conclusions.", audioText: "To sum up, the festival exceeded expectations.", audioId: "en_a2_u17_l253_c_1", slowAudioId: "en_a2_u17_l253_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📌" }
    ],
    grammar: {
      title: "Discourse Markers for Summaries (to sum up / overall / in conclusion)",
      concept: "Use formal discourse markers to organize structured multi-sentence summaries and cultural reports.",
      patterns: [
        {
          id: "gp_u17_l253_1",
          title: "Signposting in Summaries",
          structure: "To sum up / Overall / In conclusion, + main clause summarizing findings",
          explanation: "Frames concluding summaries professionally.",
          examples: [
            {
              english: "Overall, the new historical library offers remarkable resources for the public.",
              translation: "En general, la nueva biblioteca histórica ofrece recursos notables para el público.",
              translationByLang: { hi: "कुल मिलाकर, नया ऐतिहासिक पुस्तकालय जनता के लिए उल्लेखनीय संसाधन प्रदान करता है।", es: "En general, la nueva biblioteca histórica ofrece recursos notables para el público." },
              audioText: "Overall, the new historical library offers remarkable resources for the public.",
              audioId: "en_a2_u17_l253_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l253_1",
        incorrect: "In the conclusion, we had a good time.",
        correct: "In conclusion, we had a wonderful experience.",
        explanation: "The standard phrase is 'In conclusion,' without the definite article 'the'.",
        explanationsByLang: { hi: "मानक अभिव्यक्ति 'In conclusion,' है, 'the' न लगाएं।", es: "La locución correcta es 'In conclusion,' sin 'the'." }
      }
    ],
    dialogue: {
      id: "d_u17_l253_1",
      title: "Summarizing an Event",
      context: "A student sharing a short summary of a cultural festival with a classmate.",
      lines: [
        { speaker: "Tanvi", text: "How would you summarize the heritage day celebrations in a few sentences?", audioText: "How would you summarize the heritage day celebrations in a few sentences?" },
        { speaker: "Siddharth", text: "To sum up, the festival featured authentic folk performances, traditional foods, and drew a record turnout of visitors.", audioText: "To sum up, the festival featured authentic folk performances, traditional foods, and drew a record turnout of visitors." }
      ]
    }
  },
  {
    num: 254,
    title: "Integrated Listening, Reading, Speaking & Mediation",
    concept: "Synthesize multimodal information: listen to a museum audio announcement, read a tourist brochure, explain details to a friend, and draft a visit itinerary.",
    prompts: [
      "I am relaying the key details from the museum brochure so you know where to meet.",
      "The brochure states that the historic botanical gardens are open from dawn until dusk.",
      "According to the audio announcement, visitors must collect their headsets at counter B.",
      "Let me explain the main points of the city festival program to our travel group.",
      "The guided architectural walking tour lasts approximately ninety minutes.",
      "Please summarize the parking instructions from the municipal website for our driver.",
      "We should reserve our exhibition entrance time slot online to avoid long queues.",
      "She mediated the foreign language menu descriptions for her family at dinner.",
      "Accurate mediation ensures that everyone in a multicultural group stays well informed.",
      "Integrated communication combines reading brochures, listening to guides, and explaining information clearly."
    ],
    vocab: [
      { id: "v_u17_l254_1", word: "brochure", phonetic: "/ˈbrəʊʃə(r)/", meaning: "a small book or magazine containing pictures and information about a product or service", translationsByLang: { hi: "विवरणिका / ब्रोशर", es: "folleto / folleto informativo" }, exampleSentence: "Take a colorful brochure from the tourist information desk.", exampleTranslationByLang: { hi: "पर्यटक सूचना डेस्क से एक रंगीन विवरणिका लें।", es: "Tome un folleto colorido del mostrador de información turística." }, audioText: "brochure", audioId: "en_a2_u17_l254_v_1", slowAudioId: "en_a2_u17_l254_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📄", difficulty: "A2 Elementary" },
      { id: "v_u17_l254_2", word: "multicultural", phonetic: "/ˌmʌltiˈkʌltʃərəl/", meaning: "relating to or constituting several cultural or ethnic groups within a society", translationsByLang: { hi: "बहुसांस्कृतिक", es: "multicultural" }, exampleSentence: "Our city hosts an exciting multicultural food and arts festival.", exampleTranslationByLang: { hi: "हमारा शहर एक रोमांचक बहुसांस्कृतिक भोजन और कला उत्सव का आयोजन करता है।", es: "Nuestra ciudad alberga un emocionante festival multicultural." }, audioText: "multicultural", audioId: "en_a2_u17_l254_v_2", slowAudioId: "en_a2_u17_l254_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🌐", difficulty: "A2 Elementary" },
      { id: "v_u17_l254_3", word: "reserve", phonetic: "/rɪˈzɜːv/", meaning: "retain for a person; arrange for (a room, seat, or of something) to be kept for the use of a particular person", translationsByLang: { hi: "आरक्षित करना / बुक करना", es: "reservar" }, exampleSentence: "We should reserve our museum tickets in advance.", exampleTranslationByLang: { hi: "हमें अपने संग्रहालय के टिकट पहले से आरक्षित कर लेने चाहिए।", es: "Deberíamos reservar nuestras entradas para el museo con anticipación." }, audioText: "reserve", audioId: "en_a2_u17_l254_v_3", slowAudioId: "en_a2_u17_l254_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🎟️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l254_1", expression: "In a nutshell", meaning: "in summary; in very few words", translationsByLang: { hi: "संक्षेप में", es: "En pocas palabras / en resumen" }, usageNote: "Informal mediation phrase.", audioText: "In a nutshell, we need to arrive before ten.", audioId: "en_a2_u17_l254_c_1", slowAudioId: "en_a2_u17_l254_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🥜" }
    ],
    grammar: {
      title: "Complex Sentence Linking for Mediation (According to X, ... which means that ...)",
      concept: "Synthesize source information by linking source attribution with practical consequences.",
      patterns: [
        {
          id: "gp_u17_l254_1",
          title: "Mediation Synthesis Structure",
          structure: "According to [source], [fact], which means that we should [action]",
          explanation: "Transfers written/spoken notices into practical actions for others.",
          examples: [
            {
              english: "According to the brochure, the museum closes at five, which means that we should arrive by two.",
              translation: "Según el folleto, el museo cierra a las cinco, lo que significa que deberíamos llegar a las dos.",
              translationByLang: { hi: "विवरणिका के अनुसार, संग्रहालय पांच बजे बंद हो जाता है, जिसका अर्थ है कि हमें दो बजे तक पहुंच जाना चाहिए।", es: "Según el folleto, el museo cierra a las cinco, lo que significa que deberíamos llegar a las dos." },
              audioText: "According to the brochure, the museum closes at five, which means that we should arrive by two.",
              audioId: "en_a2_u17_l254_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l254_1",
        incorrect: "The brochure says us that entry is free.",
        correct: "The brochure tells us that entry is free. / The brochure says that entry is free.",
        explanation: "Use 'says that' or 'tells us that' (never 'says us').",
        explanationsByLang: { hi: "'says that' या 'tells us that' का प्रयोग करें, 'says us' गलत है।", es: "Usa 'says that' o 'tells us that', nunca 'says us'." }
      }
    ],
    dialogue: {
      id: "d_u17_l254_1",
      title: "Relaying Sightseeing Information",
      context: "A traveler explaining a monument schedule to a family member.",
      lines: [
        { speaker: "Megha", text: "What did the information board say about the castle tour?", audioText: "What did the information board say about the castle tour?" },
        { speaker: "Rajesh", text: "The board says that guided tours run every forty minutes and photography is permitted in the courtyard.", audioText: "The board says that guided tours run every forty minutes and photography is permitted in the courtyard." }
      ]
    }
  },
  {
    num: 255,
    title: "Unit 17 Review & Communicative Mastery",
    concept: "Comprehensive review and communicative synthesis of Unit 17: news headlines, films, books, concerts, museums, festivals, tourism, respectful etiquette, weather reports, and mediation.",
    prompts: [
      "Understanding news reports and cultural notices enhances our global awareness and confidence.",
      "The historical exhibition is an absolute must-see for anyone interested in ancient civilizations.",
      "According to the weather forecast, clear skies are expected throughout the festival weekend.",
      "In my opinion, exploring diverse cultural traditions enriches our worldview immensely.",
      "While we were visiting the national art museum, a curator explained the restoration process.",
      "The brochure clearly states that advance reservations are required for all guided tours.",
      "Could you please tell me where the tourist information center is located?",
      "To sum up, respecting local customs and communicating politely creates lasting friendships.",
      "We shared memorable cultural experiences and recommended our favorite historical landmarks.",
      "Congratulations on completing Unit 17 and mastering cultural and media communication in English!"
    ],
    vocab: [
      { id: "v_u17_l255_1", word: "comprehension", phonetic: "/ˌkɒmprɪˈhenʃn/", meaning: "the action or capability of understanding something", translationsByLang: { hi: "समझ / बोध", es: "comprensión / entendimiento" }, exampleSentence: "Reading diverse news articles develops reading comprehension.", exampleTranslationByLang: { hi: "विविध समाचार लेख पढ़ने से पढ़ने की समझ विकसित होती है।", es: "Leer diversos artículos desarrolla la comprensión lectora." }, audioText: "comprehension", audioId: "en_a2_u17_l255_v_1", slowAudioId: "en_a2_u17_l255_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🧠", difficulty: "A2 Elementary" },
      { id: "v_u17_l255_2", word: "enrich", phonetic: "/ɪnˈrɪtʃ/", meaning: "improve or enhance the quality or value of", translationsByLang: { hi: "समृद्ध करना", es: "enriquecer" }, exampleSentence: "Experiencing live music enriches our cultural appreciation.", exampleTranslationByLang: { hi: "सजीव संगीत का अनुभव हमारी सांस्कृतिक समझ को समृद्ध करता है।", es: "Experimentar la música en vivo enriquece nuestro aprecio cultural." }, audioText: "enrich", audioId: "en_a2_u17_l255_v_2", slowAudioId: "en_a2_u17_l255_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💎", difficulty: "A2 Elementary" },
      { id: "v_u17_l255_3", word: "proficiency", phonetic: "/prəˈfɪʃnsi/", meaning: "a high degree of competence or skill; expertise", translationsByLang: { hi: "प्रवीणता / दक्षता", es: "competencia / fluidez" }, exampleSentence: "Her communicative proficiency in English improved remarkably.", exampleTranslationByLang: { hi: "अंग्रेजी में उनकी संवादात्मक प्रवीणता में उल्लेखनीय सुधार हुआ।", es: "Su competencia comunicativa en inglés mejoró notablemente." }, audioText: "proficiency", audioId: "en_a2_u17_l255_v_3", slowAudioId: "en_a2_u17_l255_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u17_l255_1", expression: "Broaden one's horizons", meaning: "expand one's knowledge, experience, or perspectives", translationsByLang: { hi: "दृष्टिकोण व्यापक करना", es: "ampliar horizontes" }, usageNote: "High-value cultural expression.", audioText: "Traveling helps broaden our horizons.", audioId: "en_a2_u17_l255_c_1", slowAudioId: "en_a2_u17_l255_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🌅" }
    ],
    grammar: {
      title: "Unit 17 Comprehensive Media & Cultural Discourse Synthesis",
      concept: "Synthesize relative clauses, passive notices, sensory verbs, contrastive linkers, and reporting structures across cultural contexts.",
      patterns: [
        {
          id: "gp_u17_l255_1",
          title: "Integrated Cultural Discourse Patterns",
          structure: "Mixed A2 communicative patterns for media analysis, cultural exchange, and public information mediation",
          explanation: "Mastery of varied communicative structures in cultural, media, and civic domains.",
          examples: [
            {
              english: "The documentary that we watched last night explained how ancient monuments are preserved today.",
              translation: "El documental que vimos anoche explicó cómo se preservan hoy los monumentos antiguos.",
              translationByLang: { hi: "कल रात हमने जो वृत्तचित्र देखा, उसमें बताया गया कि आज प्राचीन स्मारकों को कैसे संरक्षित किया जाता है।", es: "El documental que vimos anoche explicó cómo se preservan hoy los monumentos antiguos." },
              audioText: "The documentary that we watched last night explained how ancient monuments are preserved today.",
              audioId: "en_a2_u17_l255_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u17_l255_1",
        incorrect: "The news are very interesting and I am agree with the report.",
        correct: "The news is very interesting and I agree with the report.",
        explanation: "'News' is uncountable and takes a singular verb ('is'); 'agree' is a verb ('I agree').",
        explanationsByLang: { hi: "'News' एकवचन (is) लेता है और 'I agree' सही है।", es: "'News' es incontable (is) y 'agree' es un verbo ('I agree')." }
      }
    ],
    dialogue: {
      id: "d_u17_l255_1",
      title: "Unit 17 Mastery Celebration",
      context: "Two learners reviewing their media, culture, and communication achievements.",
      lines: [
        { speaker: "Vikram", text: "We have mastered understanding news headlines, museum notices, film reviews, and cultural mediation!", audioText: "We have mastered understanding news headlines, museum notices, film reviews, and cultural mediation!" },
        { speaker: "Ananya", text: "Yes! Now I can navigate public information, understand cultural events, and share my opinions with clarity and confidence.", audioText: "Yes! Now I can navigate public information, understand cultural events, and share my opinions with clarity and confidence." }
      ]
    }
  }
];

function generateFiles() {
  const outDir = path.join(process.cwd(), 'src', 'data', 'lessons');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  for (const def of LESSON_DEFINITIONS) {
    const data = buildLessonData(def);
    const fileName = `lesson_a2_17_${def.num}.ts`;
    const filePath = path.join(outDir, fileName);
    const varName = `LESSON_A2_17_${def.num}_DATA`;

    const content = `import { DetailedLessonData } from '../../types';

export const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};
`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated complete structured lesson ${def.num}: ${def.title}`);
  }
}

generateFiles();
