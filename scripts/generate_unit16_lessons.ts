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
  const lessonId = `lesson_a2_16_${def.num}`;
  
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
        audioId: `en_a2_u16_l${def.num}_spk_${i}`,
        explanation: "Focus on clear rhythm, stress, and intonation across phrase groups.",
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
        audioId: `en_a2_u16_l${def.num}_lis_${i}`,
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
    unitId: "unit_a2_16",
    title: def.title,
    cefr: "A2",
    icon: def.num === 240 ? "🏆" : "🤝",
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
        `I can communicate effectively in social, community, and relational contexts using A2 vocabulary.`,
        `I can formulate accurate sentences and avoid common learner pitfalls.`,
        `I can demonstrate CEFR A2 communicative mastery in this domain.`
      ],
      canDoByLang: {
        hi: [
          `मैं ${def.title} से संबंधित प्रमुख संरचनाओं को समझ और उपयोग कर सकता हूँ।`,
          `मैं सामाजिक एवं सामुदायिक संदर्भों में लक्ष्य शब्दावली के साथ प्रभावी ढंग से संवाद कर सकता हूँ।`
        ],
        es: [
          `Puedo comprender y utilizar las estructuras clave de ${def.title.toLowerCase()}.`,
          `Puedo comunicarme eficazmente en contextos sociales y comunitarios con vocabulario A2.`
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
    num: 226,
    title: "Friendship, Relationships & Staying in Touch",
    concept: "Describe friendship qualities, maintain social connections, catch up on news, and use Present Perfect to talk about friendship duration.",
    prompts: [
      "We have been close friends since our first year of secondary school.",
      "How often do you stay in touch with your childhood friends?",
      "It is always wonderful to catch up with old classmates over coffee.",
      "A loyal friend is someone who supports you during challenging moments.",
      "I try to send a quick text message whenever I think of my friends.",
      "We rarely see each other in person, but we talk online every week.",
      "Making new friends becomes easier when you join community hobby clubs.",
      "Have you heard from Priya recently or did she move away?",
      "They have known each other for more than ten years now.",
      "Keeping in touch requires regular effort and thoughtful communication."
    ],
    vocab: [
      { id: "v_u16_l226_1", word: "catch up", phonetic: "/kætʃ ʌp/", meaning: "to talk to someone you have not seen for a while to hear their news", translationsByLang: { hi: "हाल-चाल जानना / मिलना", es: "ponerse al día" }, exampleSentence: "Let us catch up over coffee this Saturday.", exampleTranslationByLang: { hi: "चलो इस शनिवार कॉफी पर हाल-चाल जानते हैं।", es: "Pongámonos al día tomando un café este sábado." }, audioText: "catch up", audioId: "en_a2_u16_l226_v_1", slowAudioId: "en_a2_u16_l226_v_1_slow", voiceId: "EN_TEACHER_01", icon: "☕", difficulty: "A2 Elementary" },
      { id: "v_u16_l226_2", word: "stay in touch", phonetic: "/steɪ ɪn tʌtʃ/", meaning: "to maintain contact with someone", translationsByLang: { hi: "संपर्क में रहना", es: "mantenerse en contacto" }, exampleSentence: "We stay in touch through weekly messages.", exampleTranslationByLang: { hi: "हम साप्ताहिक संदेशों के माध्यम से संपर्क में रहते हैं।", es: "Nos mantenemos en contacto a través de mensajes semanales." }, audioText: "stay in touch", audioId: "en_a2_u16_l226_v_2", slowAudioId: "en_a2_u16_l226_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📱", difficulty: "A2 Elementary" },
      { id: "v_u16_l226_3", word: "supportive", phonetic: "/səˈpɔːtɪv/", meaning: "providing encouragement or emotional help", translationsByLang: { hi: "सहायक / सहयोगी", es: "solidario / comprensivo" }, exampleSentence: "My friends were very supportive when I started my new course.", exampleTranslationByLang: { hi: "जब मैंने नया कोर्स शुरू किया तो मेरे दोस्त बहुत सहायक थे।", es: "Mis amigos fueron muy solidarios cuando empecé mi nuevo curso." }, audioText: "supportive", audioId: "en_a2_u16_l226_v_3", slowAudioId: "en_a2_u16_l226_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🤝", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l226_1", expression: "What have you been up to?", meaning: "asking what someone has been doing recently", translationsByLang: { hi: "आप हाल ही में क्या कर रहे हैं?", es: "¿Qué has estado haciendo últimamente?" }, usageNote: "Common informal greeting when catching up.", audioText: "What have you been up to recently?", audioId: "en_a2_u16_l226_c_1", slowAudioId: "en_a2_u16_l226_c_1_slow", voiceId: "EN_TEACHER_01", icon: "💬" }
    ],
    grammar: {
      title: "Present Perfect for Duration (for vs since)",
      concept: "Use Present Perfect with 'for' (duration/period) and 'since' (starting point) to describe ongoing friendships and relationships.",
      patterns: [
        {
          id: "gp_u16_l226_1",
          title: "Present Perfect + for / since",
          structure: "Subject + have/has + past participle + for [time period] / since [time point]",
          explanation: "Describes situations that started in the past and continue into the present.",
          examples: [
            {
              english: "We have known each other for five years.",
              translation: "Nos conocemos desde hace cinco años.",
              translationByLang: { hi: "हम एक-दूसरे को पांच साल से जानते हैं।", es: "Nos conocemos desde hace cinco años." },
              audioText: "We have known each other for five years.",
              audioId: "en_a2_u16_l226_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l226_1",
        incorrect: "We know each other since five years.",
        correct: "We have known each other for five years.",
        explanation: "Use Present Perfect ('have known') and 'for' for duration in English.",
        explanationsByLang: { hi: "अवधि के लिए Present Perfect और 'for' का प्रयोग करें।", es: "Usa Present Perfect y 'for' para indicar duración." }
      }
    ],
    dialogue: {
      id: "d_u16_l226_1",
      title: "Meeting an Old Friend",
      context: "Two friends meeting accidentally in a local cafe.",
      lines: [
        { speaker: "Ananya", text: "Long time no see! What have you been up to?", audioText: "Long time no see! What have you been up to?" },
        { speaker: "Rohan", text: "I have been busy with my studies, but it is great to see you again!", audioText: "I have been busy with my studies, but it is great to see you again!" }
      ]
    }
  },
  {
    num: 227,
    title: "Social Invitations, Plans & Changing Arrangements",
    concept: "Extend, accept, and decline invitations politely; make joint plans and reschedule appointments using would you like to / how about / can we postpone.",
    prompts: [
      "Would you like to come over for dinner on Friday evening?",
      "I would love to join you, but I have a prior appointment.",
      "How about meeting at the town square around six in the evening?",
      "Something urgent came up, so can we postpone our meeting to Sunday?",
      "Shall we invite Sarah and Daniel to join our picnic in the park?",
      "I am afraid I cannot make it because I have to finish an assignment.",
      "Let us confirm the meeting time and location by sending a group text.",
      "Are you free tomorrow afternoon to visit the community art exhibit?",
      "We decided to reschedule the outdoor lunch due to unexpected rain.",
      "Thank you so much for the invitation; I am looking forward to it!"
    ],
    vocab: [
      { id: "v_u16_l227_1", word: "postpone", phonetic: "/pəʊstˈpəʊn/", meaning: "to delay an event or arrangement until a later date", translationsByLang: { hi: "स्थगित करना / आगे बढ़ाना", es: "posponer / aplazar" }, exampleSentence: "Can we postpone the dinner to next week?", exampleTranslationByLang: { hi: "क्या हम रात का खाना अगले सप्ताह के लिए स्थगित कर सकते हैं?", es: "¿Podemos posponer la cena para la próxima semana?" }, audioText: "postpone", audioId: "en_a2_u16_l227_v_1", slowAudioId: "en_a2_u16_l227_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📅", difficulty: "A2 Elementary" },
      { id: "v_u16_l227_2", word: "invitation", phonetic: "/ˌɪnvɪˈteɪʃn/", meaning: "a written or spoken request inviting someone to an event", translationsByLang: { hi: "निमंत्रण", es: "invitación" }, exampleSentence: "Thank you for the warm invitation.", exampleTranslationByLang: { hi: "हार्दिक निमंत्रण के लिए धन्यवाद।", es: "Gracias por la cálida invitación." }, audioText: "invitation", audioId: "en_a2_u16_l227_v_2", slowAudioId: "en_a2_u16_l227_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💌", difficulty: "A2 Elementary" },
      { id: "v_u16_l227_3", word: "reschedule", phonetic: "/ˌriːˈskedʒuːl/", meaning: "to change the time or date of an arranged event", translationsByLang: { hi: "पुनर्निर्धारित करना", es: "reprogramar" }, exampleSentence: "Let us reschedule our appointment for Tuesday morning.", exampleTranslationByLang: { hi: "चलो अपनी मुलाकात मंगलवार सुबह के लिए पुनर्निर्धारित करते हैं।", es: "Reprogramemos nuestra cita para el martes por la mañana." }, audioText: "reschedule", audioId: "en_a2_u16_l227_v_3", slowAudioId: "en_a2_u16_l227_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🔄", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l227_1", expression: "I'm afraid I can't make it", meaning: "politely declining an invitation or arrangement", translationsByLang: { hi: "मुझे खेद है कि मैं नहीं आ सकता।", es: "Me temo que no podré asistir." }, usageNote: "Use to soften the refusal before offering a reason.", audioText: "I'm afraid I can't make it tonight.", audioId: "en_a2_u16_l227_c_1", slowAudioId: "en_a2_u16_l227_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🙏" }
    ],
    grammar: {
      title: "Proposals & Polite Declining Forms",
      concept: "Use 'Would you like to + verb', 'How about + -ing/noun', and 'I am afraid + clause' for polite social arrangements.",
      patterns: [
        {
          id: "gp_u16_l227_1",
          title: "Invitations & Suggestions",
          structure: "Would you like + to-infinitive / How about + gerund / noun?",
          explanation: "Polite invitation and collaborative suggestion formulas.",
          examples: [
            {
              english: "How about going to the new Italian restaurant tonight?",
              translation: "¿Qué tal si vamos al nuevo restaurante italiano esta noche?",
              translationByLang: { hi: "आज रात नए इतालवी रेस्तरां जाने के बारे में क्या ख्याल है?", es: "¿Qué tal si vamos al nuevo restaurante italiano esta noche?" },
              audioText: "How about going to the new Italian restaurant tonight?",
              audioId: "en_a2_u16_l227_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l227_1",
        incorrect: "How about to go to the park?",
        correct: "How about going to the park?",
        explanation: "'How about' is followed by a gerund (-ing form), not a to-infinitive.",
        explanationsByLang: { hi: "'How about' के बाद '-ing' रूप (gerund) आता है।", es: "'How about' va seguido de gerundio (-ing)." }
      }
    ],
    dialogue: {
      id: "d_u16_l227_1",
      title: "Weekend Plans",
      context: "Two friends planning a weekend get-together.",
      lines: [
        { speaker: "Kavita", text: "Would you like to come to the street market on Saturday?", audioText: "Would you like to come to the street market on Saturday?" },
        { speaker: "Vikram", text: "I would love to, but can we meet around three in the afternoon?", audioText: "I would love to, but can we meet around three in the afternoon?" }
      ]
    }
  },
  {
    num: 228,
    title: "Celebrations, Traditions & Special Occasions",
    concept: "Describe cultural festivals, family traditions, birthdays, and public holidays using descriptive adjectives and customary expressions.",
    prompts: [
      "Every year, our neighborhood holds a colorful spring celebration.",
      "It is a traditional festival where families prepare delicious sweet dishes.",
      "How do people in your hometown celebrate the new year?",
      "We gathered together to celebrate my grandfather's seventieth birthday.",
      "The streets are decorated with bright lanterns and handmade banners.",
      "Children wear traditional festive clothes and exchange small gifts.",
      "Fireworks lit up the midnight sky during the national holiday.",
      "Sharing meals with neighbors creates a strong sense of community unity.",
      "Which holiday tradition do you look forward to the most each year?",
      "Celebrating cultural heritage helps keep ancient traditions alive."
    ],
    vocab: [
      { id: "v_u16_l228_1", word: "tradition", phonetic: "/trəˈdɪʃn/", meaning: "a custom or belief passed down through generations", translationsByLang: { hi: "परंपरा", es: "tradición" }, exampleSentence: "Lighting candles is an old family tradition.", exampleTranslationByLang: { hi: "मोमबत्तियाँ जलाना एक पुरानी पारिवारिक परंपरा है।", es: "Encender velas es una antigua tradición familiar." }, audioText: "tradition", audioId: "en_a2_u16_l228_v_1", slowAudioId: "en_a2_u16_l228_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🕯️", difficulty: "A2 Elementary" },
      { id: "v_u16_l228_2", word: "gathering", phonetic: "/ˈɡæðərɪŋ/", meaning: "an assembly or meeting of people for a specific purpose", translationsByLang: { hi: "सभा / मिलन समारोह", es: "reunión / encuentro" }, exampleSentence: "We attended a wonderful family gathering on Sunday.", exampleTranslationByLang: { hi: "हम रविवार को एक शानदार पारिवारिक मिलन समारोह में शामिल हुए।", es: "Asistimos a una maravillosa reunión familiar el domingo." }, audioText: "gathering", audioId: "en_a2_u16_l228_v_2", slowAudioId: "en_a2_u16_l228_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🎉", difficulty: "A2 Elementary" },
      { id: "v_u16_l228_3", word: "festive", phonetic: "/ˈfestɪv/", meaning: "cheerful and suitably celebratory for a festival", translationsByLang: { hi: "उत्सवपूर्ण / उल्लासमय", es: "festivo" }, exampleSentence: "The entire marketplace had a lively festive atmosphere.", exampleTranslationByLang: { hi: "पूरे बाजार में एक जीवंत उत्सवपूर्ण माहौल था।", es: "Todo el mercado tenía un animado ambiente festivo." }, audioText: "festive", audioId: "en_a2_u16_l228_v_3", slowAudioId: "en_a2_u16_l228_v_3_slow", voiceId: "EN_TEACHER_01", icon: "✨", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l228_1", expression: "look forward to", meaning: "to feel excited about something that is going to happen", translationsByLang: { hi: "उत्सुकता से प्रतीक्षा करना", es: "esperar con ilusión" }, usageNote: "Always followed by a noun or gerund (-ing).", audioText: "I look forward to celebrating the festival.", audioId: "en_a2_u16_l228_c_1", slowAudioId: "en_a2_u16_l228_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🌟" }
    ],
    grammar: {
      title: "Describing Customs with Habitual Present & Passive",
      concept: "Use Present Simple for customary habits and simple passive (is celebrated / are prepared) for cultural traditions.",
      patterns: [
        {
          id: "gp_u16_l228_1",
          title: "Customary Traditions",
          structure: "Special dishes are + past participle / People usually + base verb",
          explanation: "Expresses universal cultural habits and traditions.",
          examples: [
            {
              english: "Special sweets are shared among relatives and neighbors.",
              translation: "Se comparten dulces especiales entre familiares y vecinos.",
              translationByLang: { hi: "रिश्तेदारों और पड़ोसियों के बीच विशेष मिठाइयाँ बांटी जाती हैं।", es: "Se comparten dulces especiales entre familiares y vecinos." },
              audioText: "Special sweets are shared among relatives and neighbors.",
              audioId: "en_a2_u16_l228_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l228_1",
        incorrect: "I look forward to meet you at the festival.",
        correct: "I look forward to meeting you at the festival.",
        explanation: "'Look forward to' requires a gerund (-ing) or noun phrase.",
        explanationsByLang: { hi: "'look forward to' के बाद '-ing' रूप आता है।", es: "'Look forward to' va seguido de gerundio (-ing)." }
      }
    ],
    dialogue: {
      id: "d_u16_l228_1",
      title: "Festival Preparation",
      context: "Two neighbors discussing neighborhood festival preparations.",
      lines: [
        { speaker: "Deepak", text: "Are you ready for the neighborhood festival this weekend?", audioText: "Are you ready for the neighborhood festival this weekend?" },
        { speaker: "Sunita", text: "Yes, we are preparing handmade lanterns and sweet pastries today!", audioText: "Yes, we are preparing handmade lanterns and sweet pastries today!" }
      ]
    }
  },
  {
    num: 229,
    title: "Hobbies, Leisure & Joining Local Activities",
    concept: "Talk about recreational interests, pastimes, sports clubs, and joining local hobby groups using enjoy/interested in/take up.",
    prompts: [
      "I recently decided to take up digital photography as a creative hobby.",
      "She has been an active member of the local hiking club for two years.",
      "Joining a community sports team is a great way to stay active and healthy.",
      "What do you enjoy doing during your spare time on weekends?",
      "He is very interested in learning classical guitar and songwriting.",
      "The community center offers free gardening and pottery workshops.",
      "I spend most Saturday mornings practicing badminton with friends.",
      "Have you ever thought about taking up a martial arts class?",
      "Participating in regular hobby groups helps reduce everyday stress.",
      "Our reading group meets once a month at the neighborhood library."
    ],
    vocab: [
      { id: "v_u16_l229_1", word: "take up", phonetic: "/teɪk ʌp/", meaning: "to start doing a particular hobby or activity", translationsByLang: { hi: "कोई नया शौक या गतिविधि शुरू करना", es: "empezar / retomar una afición" }, exampleSentence: "I want to take up swimming this summer.", exampleTranslationByLang: { hi: "मैं इस गर्मी में तैराकी शुरू करना चाहता हूँ।", es: "Quiero empezar a nadar este verano." }, audioText: "take up", audioId: "en_a2_u16_l229_v_1", slowAudioId: "en_a2_u16_l229_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🎨", difficulty: "A2 Elementary" },
      { id: "v_u16_l229_2", word: "pastime", phonetic: "/ˈpɑːstaɪm/", meaning: "an activity that someone does regularly for enjoyment; a hobby", translationsByLang: { hi: "मनोरंजन / शौक", es: "pasatiempo" }, exampleSentence: "Gardening is her favorite weekend pastime.", exampleTranslationByLang: { hi: "बागवानी उसका पसंदीदा सप्ताहांत का शौक है।", es: "La jardinería es su pasatiempo favorito de fin de semana." }, audioText: "pastime", audioId: "en_a2_u16_l229_v_2", slowAudioId: "en_a2_u16_l229_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🌱", difficulty: "A2 Elementary" },
      { id: "v_u16_l229_3", word: "recreation", phonetic: "/ˌrekriˈeɪʃn/", meaning: "activity done for enjoyment when one is not working", translationsByLang: { hi: "मनोरंजन / फुर्सत की गतिविधि", es: "recreación / ocio" }, exampleSentence: "The recreation park has bicycle trails and tennis courts.", exampleTranslationByLang: { hi: "मनोरंजन पार्क में साइकिल ट्रैक और टेनिस कोर्ट हैं।", es: "El parque recreativo cuenta con pistas de ciclismo y tenis." }, audioText: "recreation", audioId: "en_a2_u16_l229_v_3", slowAudioId: "en_a2_u16_l229_v_3_slow", voiceId: "EN_TEACHER_01", icon: "⚽", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l229_1", expression: "interested in", meaning: "giving your attention to something because you enjoy it", translationsByLang: { hi: "में रुचि रखना", es: "interesado en" }, usageNote: "Always followed by a noun or -ing gerund.", audioText: "I am interested in joining the choir.", audioId: "en_a2_u16_l229_c_1", slowAudioId: "en_a2_u16_l229_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🎵" }
    ],
    grammar: {
      title: "Verbs of Preference with Gerunds & Infinitives",
      concept: "Use enjoy/fancy + gerund (-ing); use want/hope/decide + to-infinitive; use like/love/prefer with either.",
      patterns: [
        {
          id: "gp_u16_l229_1",
          title: "Enjoy + Gerund",
          structure: "Subject + enjoy / avoid / spend time + gerund (-ing)",
          explanation: "Common verbs of leisure strictly taking gerunds.",
          examples: [
            {
              english: "I really enjoy painting landscapes on sunny afternoons.",
              translation: "Disfruto mucho pintando paisajes en las tardes soleadas.",
              translationByLang: { hi: "मुझे धूप भरी दोपहर में परिदृश्य पेंट करने में बहुत आनंद आता है।", es: "Disfruto mucho pintando paisajes en las tardes soleadas." },
              audioText: "I really enjoy painting landscapes on sunny afternoons.",
              audioId: "en_a2_u16_l229_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l229_1",
        incorrect: "I enjoy to play football on weekends.",
        correct: "I enjoy playing football on weekends.",
        explanation: "'Enjoy' is always followed by a gerund (-ing), never a to-infinitive.",
        explanationsByLang: { hi: "'enjoy' के बाद हमेशा '-ing' रूप (gerund) आता है।", es: "'Enjoy' siempre va seguido de gerundio (-ing)." }
      }
    ],
    dialogue: {
      id: "d_u16_l229_1",
      title: "Joining a Club",
      context: "A resident asking about joining a local leisure club.",
      lines: [
        { speaker: "Manoj", text: "Are you interested in joining our weekend cycling club?", audioText: "Are you interested in joining our weekend cycling club?" },
        { speaker: "Rita", text: "That sounds exciting! I have been looking for an outdoor hobby.", audioText: "That sounds exciting! I have been looking for an outdoor hobby." }
      ]
    }
  },
  {
    num: 230,
    title: "Community Life, Neighborhood Events & Local Information",
    concept: "Describe neighborhood facilities, volunteer initiatives, community cleanups, and finding local civic information.",
    prompts: [
      "Our neighborhood association organizes a tree-planting day every spring.",
      "The community bulletin board contains notices about local volunteer projects.",
      "Residents gathered at the town hall to discuss improving public parks.",
      "Volunteering at the animal shelter is a rewarding way to help the community.",
      "Where is the nearest recycling collection point located in this area?",
      "The local library hosts free computer literacy classes for senior citizens.",
      "Living in a close-knit neighborhood makes everyday life safer and friendlier.",
      "Please keep the shared residential garden clean and tidy for everyone.",
      "You can find flyers for upcoming musical concerts near the notice board.",
      "Local residents collaborated to restore the historic fountain in the square."
    ],
    vocab: [
      { id: "v_u16_l230_1", word: "volunteer", phonetic: "/ˌvɒlənˈtɪə(r)/", meaning: "a person who freely offers to take part in an enterprise or undertake a task", translationsByLang: { hi: "स्वयंसेवक / स्वयंसेवा करना", es: "voluntario / ser voluntario" }, exampleSentence: "She volunteers at the food bank every Saturday.", exampleTranslationByLang: { hi: "वह हर शनिवार फूड बैंक में स्वयंसेवा करती है।", es: "Ella es voluntaria en el banco de alimentos todos los sábados." }, audioText: "volunteer", audioId: "en_a2_u16_l230_v_1", slowAudioId: "en_a2_u16_l230_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🙋", difficulty: "A2 Elementary" },
      { id: "v_u16_l230_2", word: "bulletin board", phonetic: "/ˈbʊlətɪn bɔːd/", meaning: "a board on which notices and announcements are displayed", translationsByLang: { hi: "सूचना पट्ट", es: "tablón de anuncios" }, exampleSentence: "Check the bulletin board for the meeting schedule.", exampleTranslationByLang: { hi: "बैठक के कार्यक्रम के लिए सूचना पट्ट देखें।", es: "Consulte el tablón de anuncios para ver el horario." }, audioText: "bulletin board", audioId: "en_a2_u16_l230_v_2", slowAudioId: "en_a2_u16_l230_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📌", difficulty: "A2 Elementary" },
      { id: "v_u16_l230_3", word: "neighborly", phonetic: "/ˈneɪbəli/", meaning: "characteristic of a good neighbor; helpful and friendly", translationsByLang: { hi: "पड़ोसी जैसा / मिलनसार", es: "buen vecino / servicial" }, exampleSentence: "Offering to carry heavy groceries is a neighborly gesture.", exampleTranslationByLang: { hi: "भारी सामान उठाने की पेशकश करना एक मिलनसार इशारा है।", es: "Ofrecerse a cargar bolsas pesadas es un gesto de buen vecino." }, audioText: "neighborly", audioId: "en_a2_u16_l230_v_3", slowAudioId: "en_a2_u16_l230_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🏡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l230_1", expression: "take part in", meaning: "to join or participate in an activity or event", translationsByLang: { hi: "में भाग लेना", es: "participar en" }, usageNote: "Common collocation: take part in + event/activity.", audioText: "We decided to take part in the charity run.", audioId: "en_a2_u16_l230_c_1", slowAudioId: "en_a2_u16_l230_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏃" }
    ],
    grammar: {
      title: "There is / There are with Quantifiers in Community Contexts",
      concept: "Use there is/are + a lot of / several / few / many to describe neighborhood resources and events.",
      patterns: [
        {
          id: "gp_u16_l230_1",
          title: "There is / There are with Quantifiers",
          structure: "There is + singular noun / There are + plural noun + quantifier",
          explanation: "Expresses existence of neighborhood amenities and activities.",
          examples: [
            {
              english: "There are several community gardens in our neighborhood.",
              translation: "Hay varios huertos comunitarios en nuestro barrio.",
              translationByLang: { hi: "हमारे पड़ोस में कई सामुदायिक बगीचे हैं।", es: "Hay varios huertos comunitarios en nuestro barrio." },
              audioText: "There are several community gardens in our neighborhood.",
              audioId: "en_a2_u16_l230_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l230_1",
        incorrect: "There is many people at the town meeting.",
        correct: "There are many people at the town meeting.",
        explanation: "Use 'there are' with plural countable nouns like 'people'.",
        explanationsByLang: { hi: "'people' जैसे बहुवचन संज्ञा के साथ 'there are' का प्रयोग करें।", es: "Usa 'there are' con sustantivos plurales como 'people'." }
      }
    ],
    dialogue: {
      id: "d_u16_l230_1",
      title: "Community Cleanup",
      context: "Two neighbors meeting near the community notice board.",
      lines: [
        { speaker: "Geeta", text: "Did you see the notice about the park cleanup this Saturday?", audioText: "Did you see the notice about the park cleanup this Saturday?" },
        { speaker: "Arun", text: "Yes, I signed up as a volunteer to help plant flower beds.", audioText: "Yes, I signed up as a volunteer to help plant flower beds." }
      ]
    }
  },
  {
    num: 231,
    title: "Talking About Personal Preferences & Lifestyle Choices",
    concept: "Express habits, daily routines, dietary choices, living arrangements, and personal values using prefer/rather/tend to.",
    prompts: [
      "I tend to wake up early because I feel more productive in the morning.",
      "Many people nowadays prefer working from home to commuting daily.",
      "She decided to follow a vegetarian diet for health and environmental reasons.",
      "Do you prefer living in a bustling city or in a tranquil rural village?",
      "I would rather cook a fresh meal at home than order takeaway food.",
      "Maintaining a balanced lifestyle requires adequate rest and daily exercise.",
      "He prefers cycling to work instead of taking the crowded subway.",
      "My sister tends to plan her daily schedule very carefully in advance.",
      "Choosing simple living habits helps people save money and reduce clutter.",
      "Personal lifestyle choices reflect our individual values and priorities."
    ],
    vocab: [
      { id: "v_u16_l231_1", word: "lifestyle", phonetic: "/ˈlaɪfstaɪl/", meaning: "the way in which a person or group lives", translationsByLang: { hi: "जीवनशैली", es: "estilo de vida" }, exampleSentence: "She adopted a healthier lifestyle by walking every day.", exampleTranslationByLang: { hi: "उसने हर दिन पैदल चलकर एक स्वस्थ जीवनशैली अपनाई।", es: "Ella adoptó un estilo de vida más saludable caminando a diario." }, audioText: "lifestyle", audioId: "en_a2_u16_l231_v_1", slowAudioId: "en_a2_u16_l231_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🧘", difficulty: "A2 Elementary" },
      { id: "v_u16_l231_2", word: "tend to", phonetic: "/tend tuː/", meaning: "regularly or frequently behave in a particular way", translationsByLang: { hi: "प्रवृत्ति होना / आमतौर पर करना", es: "soler / tender a" }, exampleSentence: "I tend to read a book before going to sleep.", exampleTranslationByLang: { hi: "मैं आमतौर पर सोने से पहले एक किताब पढ़ता हूँ।", es: "Suelo leer un libro antes de ir a dormir." }, audioText: "tend to", audioId: "en_a2_u16_l231_v_2", slowAudioId: "en_a2_u16_l231_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📖", difficulty: "A2 Elementary" },
      { id: "v_u16_l231_3", word: "balanced", phonetic: "/ˈbælənst/", meaning: "taking everything into account in fair proportions", translationsByLang: { hi: "संतुलित", es: "equilibrado" }, exampleSentence: "Eating a balanced diet provides steady energy throughout the day.", exampleTranslationByLang: { hi: "संतुलित आहार खाने से पूरे दिन निरंतर ऊर्जा मिलती है।", es: "Una dieta equilibrada proporciona energía constante." }, audioText: "balanced", audioId: "en_a2_u16_l231_v_3", slowAudioId: "en_a2_u16_l231_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🥗", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l231_1", expression: "as for me", meaning: "speaking for oneself or introducing one's personal perspective", translationsByLang: { hi: "जहाँ तक मेरी बात है", es: "en cuanto a mí / por mi parte" }, usageNote: "Use at the beginning of a sentence to contrast opinions.", audioText: "As for me, I prefer living in the countryside.", audioId: "en_a2_u16_l231_c_1", slowAudioId: "en_a2_u16_l231_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🗣️" }
    ],
    grammar: {
      title: "Tend to + Infinitive for General Habits & Tendencies",
      concept: "Use 'tend to + base verb' to express habitual behavior and recurring lifestyle patterns.",
      patterns: [
        {
          id: "gp_u16_l231_1",
          title: "Tend to Structure",
          structure: "Subject + tend(s) to + base verb",
          explanation: "Expresses general lifestyle habits and tendencies.",
          examples: [
            {
              english: "They tend to spend their holidays exploring natural parks.",
              translation: "Suelen pasar sus vacaciones explorando parques naturales.",
              translationByLang: { hi: "वे आमतौर पर अपनी छुट्टियां प्राकृतिक पार्कों की खोज में बिताते हैं।", es: "Suelen pasar sus vacaciones explorando parques naturales." },
              audioText: "They tend to spend their holidays exploring natural parks.",
              audioId: "en_a2_u16_l231_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l231_1",
        incorrect: "I tend to waking up early.",
        correct: "I tend to wake up early.",
        explanation: "'Tend to' is followed by a base verb infinitive, not a gerund.",
        explanationsByLang: { hi: "'tend to' के बाद क्रिया का मूल रूप (base verb) आता है।", es: "'Tend to' va seguido del verbo en infinitivo sin -ing." }
      }
    ],
    dialogue: {
      id: "d_u16_l231_1",
      title: "Morning Routines",
      context: "Two friends discussing their daily schedules and wellness habits.",
      lines: [
        { speaker: "Neeraj", text: "Do you prefer working out in the morning or evening?", audioText: "Do you prefer working out in the morning or evening?" },
        { speaker: "Pooja", text: "I tend to exercise before breakfast because it boosts my energy all day.", audioText: "I tend to exercise before breakfast because it boosts my energy all day." }
      ]
    }
  },
  {
    num: 232,
    title: "Opinions, Agreement, Disagreement & Polite Discussion",
    concept: "Express personal viewpoints, agree wholeheartedly, disagree tactfully, and give reasoned justifications using in my opinion / I see your point / I am not so sure.",
    prompts: [
      "In my opinion, public transport should be free for all students.",
      "I see what you mean, but building new bike lanes is also important.",
      "I completely agree with your suggestion to renovate the neighborhood park.",
      "I am not entirely sure that banning private cars downtown will work.",
      "From my perspective, small local businesses deserve community support.",
      "That is a valid point, although we must also consider the total cost.",
      "I understand your viewpoint, but there are other factors to examine.",
      "Do you agree that community recycling should be made compulsory?",
      "To be honest, I think having more green spaces benefits public health.",
      "Polite discussions allow people with differing views to find common ground."
    ],
    vocab: [
      { id: "v_u16_l232_1", word: "perspective", phonetic: "/pəˈspektɪv/", meaning: "a particular attitude toward or way of regarding something; point of view", translationsByLang: { hi: "दृष्टिकोण / परिप्रेक्ष्य", es: "perspectiva / punto de vista" }, exampleSentence: "From my perspective, the plan needs further revision.", exampleTranslationByLang: { hi: "मेरे दृष्टिकोण से, योजना में और सुधार की आवश्यकता है।", es: "Desde mi perspectiva, el plan necesita una revisión." }, audioText: "perspective", audioId: "en_a2_u16_l232_v_1", slowAudioId: "en_a2_u16_l232_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👁️", difficulty: "A2 Elementary" },
      { id: "v_u16_l232_2", word: "viewpoint", phonetic: "/ˈvjuːpɔɪnt/", meaning: "another term for point of view or opinion", translationsByLang: { hi: "विचार / दृष्टिकोण", es: "punto de vista" }, exampleSentence: "Everyone in the group expressed a unique viewpoint.", exampleTranslationByLang: { hi: "समूह के सभी लोगों ने एक अनूठा दृष्टिकोण व्यक्त किया।", es: "Todos en el grupo expresaron un punto de vista único." }, audioText: "viewpoint", audioId: "en_a2_u16_l232_v_2", slowAudioId: "en_a2_u16_l232_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" },
      { id: "v_u16_l232_3", word: "valid", phonetic: "/ˈvælɪd/", meaning: "having a sound basis in logic or fact; reasonable", translationsByLang: { hi: "मान्य / तर्कसंगत", es: "válido / razonable" }, exampleSentence: "You made a very valid point during the debate.", exampleTranslationByLang: { hi: "आपने बहस के दौरान बहुत तर्कसंगत बात कही।", es: "Hiciste un comentario muy válido durante el debate." }, audioText: "valid", audioId: "en_a2_u16_l232_v_3", slowAudioId: "en_a2_u16_l232_v_3_slow", voiceId: "EN_TEACHER_01", icon: "✔️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l232_1", expression: "I see your point, but...", meaning: "polite concession before presenting a contrasting argument", translationsByLang: { hi: "मैं आपकी बात समझता हूँ, लेकिन...", es: "Entiendo tu punto, pero..." }, usageNote: "Softens disagreement during friendly conversations.", audioText: "I see your point, but cost is also important.", audioId: "en_a2_u16_l232_c_1", slowAudioId: "en_a2_u16_l232_c_1_slow", voiceId: "EN_TEACHER_01", icon: "💬" }
    ],
    grammar: {
      title: "Opinion Markers & Concessive Connectors (although / but)",
      concept: "Use opinion introductory clauses followed by concessive linkers to balance polite debates.",
      patterns: [
        {
          id: "gp_u16_l232_1",
          title: "Opinion & Polite Contrast",
          structure: "In my opinion, [clause] / I agree that [clause], although [contrasting clause]",
          explanation: "Structures opinions and nuanced concessions.",
          examples: [
            {
              english: "I agree that we need more parks, although land is limited.",
              translation: "Estoy de acuerdo en que necesitamos más parques, aunque el terreno es limitado.",
              translationByLang: { hi: "मैं सहमत हूँ कि हमें और पार्कों की आवश्यकता है, हालांकि जमीन सीमित है।", es: "Estoy de acuerdo en que necesitamos más parques, aunque el terreno es limitado." },
              audioText: "I agree that we need more parks, although land is limited.",
              audioId: "en_a2_u16_l232_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l232_1",
        incorrect: "I am agree with your opinion.",
        correct: "I agree with your opinion.",
        explanation: "'Agree' is a main verb, not an adjective. Do not say 'I am agree'.",
        explanationsByLang: { hi: "'agree' एक क्रिया है, 'I am agree' न कहें।", es: "'Agree' es un verbo, no se usa con el verbo 'to be'." }
      }
    ],
    dialogue: {
      id: "d_u16_l232_1",
      title: "Civic Discussion",
      context: "Two committee members discussing pedestrian zones.",
      lines: [
        { speaker: "Rahul", text: "In my opinion, closing the street to motorcars will boost local shops.", audioText: "In my opinion, closing the street to motorcars will boost local shops." },
        { speaker: "Meena", text: "I see your point, but we must ensure adequate delivery access for vans.", audioText: "I see your point, but we must ensure adequate delivery access for vans." }
      ]
    }
  },
  {
    num: 233,
    title: "Social Problems, Misunderstandings & Conflict Repair",
    concept: "Apologize sincerely, clarify mistaken intentions, explain misunderstandings, and propose peaceful solutions using I didn't mean to / I misunderstood / let's resolve.",
    prompts: [
      "I am very sorry for the confusion; I did not mean to offend you.",
      "It seems there was a slight misunderstanding regarding the meeting time.",
      "Let me clarify what I meant so that we can avoid any hard feelings.",
      "I thought you were arriving at noon, which is why I was not there.",
      "Please accept my sincere apology for arriving late to the dinner.",
      "We should sit down together and talk calmly to resolve this issue.",
      "I completely misunderstood your message; thank you for explaining.",
      "Clear communication prevents simple mistakes from turning into big arguments.",
      "No problem at all; these kinds of mix-ups happen to everyone sometimes.",
      "Repairing a friendship after a disagreement requires patience and empathy."
    ],
    vocab: [
      { id: "v_u16_l233_1", word: "misunderstanding", phonetic: "/ˌmɪsʌndəˈstændɪŋ/", meaning: "a failure to understand something correctly", translationsByLang: { hi: "गलतफहमी", es: "malentendido" }, exampleSentence: "A quick phone call resolved the misunderstanding.", exampleTranslationByLang: { hi: "एक त्वरित फोन कॉल ने गलतफहमी को दूर कर दिया।", es: "Una llamada rápida resolvió el malentendido." }, audioText: "misunderstanding", audioId: "en_a2_u16_l233_v_1", slowAudioId: "en_a2_u16_l233_v_1_slow", voiceId: "EN_TEACHER_01", icon: "❓", difficulty: "A2 Elementary" },
      { id: "v_u16_l233_2", word: "apologize", phonetic: "/əˈpɒlədʒaɪz/", meaning: "express regret for something that one has done wrong", translationsByLang: { hi: "माफी मांगना", es: "disculparse" }, exampleSentence: "He apologized for forgetting to reply to the email.", exampleTranslationByLang: { hi: "उसने ईमेल का उत्तर देना भूल जाने के लिए माफी मांगी।", es: "Se disculpó por olvidar responder al correo." }, audioText: "apologize", audioId: "en_a2_u16_l233_v_2", slowAudioId: "en_a2_u16_l233_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🙏", difficulty: "A2 Elementary" },
      { id: "v_u16_l233_3", word: "resolve", phonetic: "/rɪˈzɒlv/", meaning: "settle or find a solution to a problem or dispute", translationsByLang: { hi: "सुलझाना / समाधान करना", es: "resolver / solucionar" }, exampleSentence: "They had a productive discussion to resolve their disagreement.", exampleTranslationByLang: { hi: "उन्होंने अपनी असहमति को सुलझाने के लिए एक सार्थक चर्चा की।", es: "Tuvieron una conversación productiva para resolver su desacuerdo." }, audioText: "resolve", audioId: "en_a2_u16_l233_v_3", slowAudioId: "en_a2_u16_l233_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🤝", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l233_1", expression: "I didn't mean to...", meaning: "stating that an action or consequence was unintentional", translationsByLang: { hi: "मेरा इरादा ऐसा करने का नहीं था...", es: "No fue mi intención..." }, usageNote: "Followed by a base verb infinitive.", audioText: "I didn't mean to cause any confusion.", audioId: "en_a2_u16_l233_c_1", slowAudioId: "en_a2_u16_l233_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🕊️" }
    ],
    grammar: {
      title: "Past Explanations & Apologies (did not mean to / thought that)",
      concept: "Use Past Simple to clarify past intentions and misconceptions (I thought... / I didn't realize...).",
      patterns: [
        {
          id: "gp_u16_l233_1",
          title: "Clarifying Past Intentions",
          structure: "Subject + didn't mean to + base verb / Subject + thought that + past clause",
          explanation: "Explains past misinterpretations constructively.",
          examples: [
            {
              english: "I thought that you were coming with Sam to the party.",
              translation: "Pensé que venías con Sam a la fiesta.",
              translationByLang: { hi: "मुझे लगा था कि आप सैम के साथ पार्टी में आ रहे थे।", es: "Pensé que venías con Sam a la fiesta." },
              audioText: "I thought that you were coming with Sam to the party.",
              audioId: "en_a2_u16_l233_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l233_1",
        incorrect: "I am sorry for to be late.",
        correct: "I am sorry for being late.",
        explanation: "The preposition 'for' must be followed by a gerund (-ing), not a to-infinitive.",
        explanationsByLang: { hi: "'sorry for' के बाद '-ing' रूप (gerund) आता है।", es: "'Sorry for' va seguido de gerundio (-ing)." }
      }
    ],
    dialogue: {
      id: "d_u16_l233_1",
      title: "Fixing a Mix-up",
      context: "Two friends clearing up a miscommunicated meeting place.",
      lines: [
        { speaker: "Amit", text: "I waited at the library entrance for twenty minutes!", audioText: "I waited at the library entrance for twenty minutes!" },
        { speaker: "Sanjay", text: "I am so sorry! I thought we agreed to meet at the cafe across the street.", audioText: "I am so sorry! I thought we agreed to meet at the cafe across the street." }
      ]
    }
  },
  {
    num: 234,
    title: "Making Decisions, Comparing Options & Explaining Choices",
    concept: "Weigh pros and cons, compare alternatives, justify practical choices, and express certainty using on the one hand / on the other hand / the main reason is.",
    prompts: [
      "We weighed the pros and cons carefully before making our final choice.",
      "On the one hand, this apartment is spacious, but on the other hand, it is expensive.",
      "The main reason I chose this bicycle is its lightweight aluminum frame.",
      "Which option do you think provides the best value for our budget?",
      "Compared to the old model, the new version is significantly more efficient.",
      "I decided to take the train because it is more reliable than driving.",
      "After considering all alternatives, we agreed on the community hall.",
      "Making an informed decision requires gathering accurate facts first.",
      "Both choices have clear advantages depending on your daily priorities.",
      "I am confident that we made the right decision for our future."
    ],
    vocab: [
      { id: "v_u16_l234_1", word: "alternative", phonetic: "/ɔːlˈtɜːnətɪv/", meaning: "one of two or more available possibilities", translationsByLang: { hi: "विकल्प", es: "alternativa / opción" }, exampleSentence: "We explored several alternatives before deciding.", exampleTranslationByLang: { hi: "हमने निर्णय लेने से पहले कई विकल्पों की तलाश की।", es: "Exploramos varias alternativas antes de decidir." }, audioText: "alternative", audioId: "en_a2_u16_l234_v_1", slowAudioId: "en_a2_u16_l234_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🔀", difficulty: "A2 Elementary" },
      { id: "v_u16_l234_2", word: "advantage", phonetic: "/ədˈvɑːntɪdʒ/", meaning: "a condition or circumstance that puts one in a favorable position", translationsByLang: { hi: "फायदा / लाभ", es: "ventaja" }, exampleSentence: "One major advantage of living downtown is convenience.", exampleTranslationByLang: { hi: "शहर के केंद्र में रहने का एक बड़ा फायदा सुविधा है।", es: "Una gran ventaja de vivir en el centro es la comodidad." }, audioText: "advantage", audioId: "en_a2_u16_l234_v_2", slowAudioId: "en_a2_u16_l234_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📈", difficulty: "A2 Elementary" },
      { id: "v_u16_l234_3", word: "weigh", phonetic: "/weɪ/", meaning: "assess the nature or importance of, especially with a view to a decision", translationsByLang: { hi: "तोलना / विचार करना", es: "sopesar / ponderar" }, exampleSentence: "You should weigh the advantages against the possible risks.", exampleTranslationByLang: { hi: "आपको संभावित जोखिमों के मुकाबले लाभों पर विचार करना चाहिए।", es: "Debes sopesar las ventajas frente a los posibles riesgos." }, audioText: "weigh", audioId: "en_a2_u16_l234_v_3", slowAudioId: "en_a2_u16_l234_v_3_slow", voiceId: "EN_TEACHER_01", icon: "⚖️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l234_1", expression: "on the one hand... on the other hand", meaning: "used to introduce two contrasting aspects of a situation", translationsByLang: { hi: "एक तरफ... तो दूसरी तरफ", es: "por un lado... por otro lado" }, usageNote: "Common discourse marker for balanced decision making.", audioText: "On the one hand it is cheap, on the other hand it is slow.", audioId: "en_a2_u16_l234_c_1", slowAudioId: "en_a2_u16_l234_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚖️" }
    ],
    grammar: {
      title: "Comparative Justifications & Causal Connectors (because / due to)",
      concept: "Use comparative adjectives + 'than' paired with causal linkers ('because of / the main reason is') to justify decisions.",
      patterns: [
        {
          id: "gp_u16_l234_1",
          title: "Decision Justification",
          structure: "Subject + decided to [verb] because + clause / due to + noun",
          explanation: "Explains choices with clear logical justification.",
          examples: [
            {
              english: "We chose this venue because it is closer to the train station.",
              translation: "Elegimos este lugar porque está más cerca de la estación de tren.",
              translationByLang: { hi: "हमने इस स्थल को इसलिए चुना क्योंकि यह ट्रेन स्टेशन के करीब है।", es: "Elegimos este lugar porque está más cerca de la estación de tren." },
              audioText: "We chose this venue because it is closer to the train station.",
              audioId: "en_a2_u16_l234_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l234_1",
        incorrect: "Because of it was raining, we stayed home.",
        correct: "Because it was raining, we stayed home.",
        explanation: "Use 'because' before a full clause (subject + verb); use 'because of' before a noun phrase.",
        explanationsByLang: { hi: "पूर्ण उपवाक्य के पहले 'because' का प्रयोग करें, 'because of' का नहीं।", es: "Usa 'because' con una oración completa y 'because of' con un sustantivo." }
      }
    ],
    dialogue: {
      id: "d_u16_l234_1",
      title: "Choosing an Accommodation",
      context: "Two friends deciding between two vacation rentals.",
      lines: [
        { speaker: "Tara", text: "Which rental apartment should we book for our trip?", audioText: "Which rental apartment should we book for our trip?" },
        { speaker: "Nikhil", text: "The seaside apartment is slightly more expensive, but it has much better reviews.", audioText: "The seaside apartment is slightly more expensive, but it has much better reviews." }
      ]
    }
  },
  {
    num: 235,
    title: "Personal Experiences, Memories & Short Stories",
    concept: "Narrate memorable life experiences, past travels, childhood memories, and unexpected events using Past Simple and Past Continuous.",
    prompts: [
      "While we were hiking through the forest, it suddenly started to snow.",
      "I will never forget the day I adopted my playful rescue dog.",
      "We were sitting by the campfire when an old friend arrived unexpectedly.",
      "As a child, I used to spend summer holidays at my grandparents' village.",
      "It was an unforgettable journey filled with exciting adventures and new friends.",
      "She lost her house keys while she was jogging in the neighborhood park.",
      "When the power went out, everyone gathered in the living room with candles.",
      "That experience taught me how important it is to stay calm in difficult moments.",
      "We laughed about the funny incident for hours after we reached home safely.",
      "Sharing personal memories helps bring friends and family members closer together."
    ],
    vocab: [
      { id: "v_u16_l235_1", word: "unforgettable", phonetic: "/ˌʌnfəˈɡetəbl/", meaning: "impossible to forget; very memorable", translationsByLang: { hi: "अविस्मरणीय / न भूलने योग्य", es: "inolvidable" }, exampleSentence: "Our trip to the mountains was an unforgettable adventure.", exampleTranslationByLang: { hi: "पहाड़ों की हमारी यात्रा एक अविस्मरणीय रोमांच थी।", es: "Nuestro viaje a las montañas fue una aventura inolvidable." }, audioText: "unforgettable", audioId: "en_a2_u16_l235_v_1", slowAudioId: "en_a2_u16_l235_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🌠", difficulty: "A2 Elementary" },
      { id: "v_u16_l235_2", word: "incident", phonetic: "/ˈɪnsɪdənt/", meaning: "an event or occurrence, especially one that is unusual", translationsByLang: { hi: "घटना", es: "incidente / suceso" }, exampleSentence: "She recalled a humorous incident from her school days.", exampleTranslationByLang: { hi: "उसने अपने स्कूल के दिनों की एक हास्यास्पद घटना याद की।", es: "Recordó un incidente gracioso de sus días de escuela." }, audioText: "incident", audioId: "en_a2_u16_l235_v_2", slowAudioId: "en_a2_u16_l235_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📖", difficulty: "A2 Elementary" },
      { id: "v_u16_l235_3", word: "used to", phonetic: "/juːst tuː/", meaning: "describing past habits or states that are no longer true", translationsByLang: { hi: "किया करता था / हुआ करता था", es: "solía / acostumbraba a" }, exampleSentence: "I used to ride my bicycle everywhere during summer holidays.", exampleTranslationByLang: { hi: "मैं गर्मी की छुट्टियों में हर जगह अपनी साइकिल चलाया करता था।", es: "Solía andar en bicicleta por todas partes en verano." }, audioText: "used to", audioId: "en_a2_u16_l235_v_3", slowAudioId: "en_a2_u16_l235_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🕰️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l235_1", expression: "out of the blue", meaning: "happening suddenly and unexpectedly", translationsByLang: { hi: "अचानक / बिन बताए", es: "de repente / de la nada" }, usageNote: "Used to introduce surprising events in narratives.", audioText: "Out of the blue, my phone started ringing.", audioId: "en_a2_u16_l235_c_1", slowAudioId: "en_a2_u16_l235_c_1_slow", voiceId: "EN_TEACHER_01", icon: "⚡" }
    ],
    grammar: {
      title: "Narrative Tenses (Past Continuous vs Past Simple with while / when)",
      concept: "Use Past Continuous for ongoing background actions interrupted by a single completed Past Simple event.",
      patterns: [
        {
          id: "gp_u16_l235_1",
          title: "Past Interruption Pattern",
          structure: "While + was/were + -ing, Subject + past simple verb",
          explanation: "Narrates actions in progress interrupted by new occurrences.",
          examples: [
            {
              english: "While we were having lunch in the garden, a colorful bird landed on the table.",
              translation: "Mientras almorzábamos en el jardín, un pájaro colorido se posó en la mesa.",
              translationByLang: { hi: "जब हम बगीचे में दोपहर का भोजन कर रहे थे, एक रंगीन पक्षी मेज पर आ बैठा।", es: "Mientras almorzábamos en el jardín, un pájaro colorido se posó en la mesa." },
              audioText: "While we were having lunch in the garden, a colorful bird landed on the table.",
              audioId: "en_a2_u16_l235_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l235_1",
        incorrect: "While I walked home, it started to rain heavily.",
        correct: "While I was walking home, it started to rain heavily.",
        explanation: "Use Past Continuous ('was walking') for the background activity after 'while'.",
        explanationsByLang: { hi: "'while' के बाद पृष्ठभूमि की निरंतर क्रिया के लिए Past Continuous का प्रयोग करें।", es: "Usa Past Continuous después de 'while' para acciones en progreso." }
      }
    ],
    dialogue: {
      id: "d_u16_l235_1",
      title: "Sharing a Travel Story",
      context: "Two friends talking about unexpected travel experiences.",
      lines: [
        { speaker: "Divya", text: "What was the most memorable moment of your hiking trip?", audioText: "What was the most memorable moment of your hiking trip?" },
        { speaker: "Kabir", text: "While we were walking near the summit, the thick fog cleared to reveal a breathtaking view!", audioText: "While we were walking near the summit, the thick fog cleared to reveal a breathtaking view!" }
      ]
    }
  },
  {
    num: 236,
    title: "Describing Changes in Life, Habits & Circumstances",
    concept: "Describe life transformations, moving to a new area, career transitions, and lifestyle evolution using used to vs now / has changed.",
    prompts: [
      "My daily routine has changed completely since I moved into my new house.",
      "I used to stay up very late, but now I prefer going to sleep early.",
      "Our neighborhood has become much greener over the last five years.",
      "She used to work in finance, but now she manages an organic farm.",
      "Technology has transformed how we communicate with friends across the world.",
      "I did not use to like spicy food, but now it is my absolute favorite.",
      "Public transportation in our city has improved significantly recently.",
      "How has your lifestyle changed since you started your university course?",
      "Over time, people develop healthier habits and gain greater independence.",
      "Embracing positive changes helps us grow and adapt to new situations."
    ],
    vocab: [
      { id: "v_u16_l236_1", word: "transform", phonetic: "/trænsˈfɔːm/", meaning: "make a thorough or dramatic change in the form, appearance, or character", translationsByLang: { hi: "पूरी तरह बदलना / रूपांतरित करना", es: "transformar" }, exampleSentence: "Regular exercise transformed his physical stamina.", exampleTranslationByLang: { hi: "नियमित व्यायाम ने उनकी शारीरिक सहनशक्ति को पूरी तरह बदल दिया।", es: "El ejercicio regular transformó su resistencia física." }, audioText: "transform", audioId: "en_a2_u16_l236_v_1", slowAudioId: "en_a2_u16_l236_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🦋", difficulty: "A2 Elementary" },
      { id: "v_u16_l236_2", word: "routine", phonetic: "/ruːˈtiːn/", meaning: "a sequence of actions regularly followed", translationsByLang: { hi: "दिनचर्या", es: "rutina" }, exampleSentence: "Developing a stable morning routine saves time.", exampleTranslationByLang: { hi: "एक स्थिर सुबह की दिनचर्या विकसित करने से समय की बचत होती है।", es: "Desarrollar una rutina matutina estable ahorra tiempo." }, audioText: "routine", audioId: "en_a2_u16_l236_v_2", slowAudioId: "en_a2_u16_l236_v_2_slow", voiceId: "EN_TEACHER_01", icon: "⏰", difficulty: "A2 Elementary" },
      { id: "v_u16_l236_3", word: "circumstance", phonetic: "/ˈsɜːkəmstəns/", meaning: "a fact or condition connected with or relevant to an event or action", translationsByLang: { hi: "परिस्थिति / हालात", es: "circunstancia" }, exampleSentence: "Our circumstances changed when we relocated to a new city.", exampleTranslationByLang: { hi: "जब हम एक नए शहर में स्थानांतरित हुए तो हमारी परिस्थितियां बदल गईं।", es: "Nuestras circunstancias cambiaron cuando nos mudamos." }, audioText: "circumstance", audioId: "en_a2_u16_l236_v_3", slowAudioId: "en_a2_u16_l236_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🧭", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l236_1", expression: "step by step", meaning: "gradually and methodically", translationsByLang: { hi: "कदम-दर-कदम / धीरे-धीरे", es: "paso a paso" }, usageNote: "Describes gradual change over time.", audioText: "We changed our habits step by step.", audioId: "en_a2_u16_l236_c_1", slowAudioId: "en_a2_u16_l236_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🪜" }
    ],
    grammar: {
      title: "Used to vs Present Simple for Life Contrasts",
      concept: "Contrast past states with 'used to + base verb' and present states with Present Simple + 'now / nowadays'.",
      patterns: [
        {
          id: "gp_u16_l236_1",
          title: "Past vs Present Contrast",
          structure: "Subject + used to + verb, but now + subject + present verb",
          explanation: "Highlights major lifestyle and habit changes.",
          examples: [
            {
              english: "I used to eat junk food, but now I cook nutritious meals every day.",
              translation: "Solía comer comida chatarra, pero ahora cocino comidas nutritivas todos los días.",
              translationByLang: { hi: "मैं जंक फूड खाया करता था, लेकिन अब मैं हर दिन पौष्टिक खाना पकाता हूँ।", es: "Solía comer comida chatarra, pero ahora cocino comidas nutritivas todos los días." },
              audioText: "I used to eat junk food, but now I cook nutritious meals every day.",
              audioId: "en_a2_u16_l236_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l236_1",
        incorrect: "I am used to live in a small village five years ago.",
        correct: "I used to live in a small village five years ago.",
        explanation: "'Used to + verb' describes a past state; 'be used to' means accustomed to.",
        explanationsByLang: { hi: "पिछली आदत या स्थिति के लिए 'used to + क्रिया' का प्रयोग करें।", es: "Usa 'used to + verbo' para hablar del pasado." }
      }
    ],
    dialogue: {
      id: "d_u16_l236_1",
      title: "Talking About Past Habits",
      context: "Two friends reflecting on how their lifestyles have evolved.",
      lines: [
        { speaker: "Shreya", text: "You look so energetic! Have you changed your daily routine?", audioText: "You look so energetic! Have you changed your daily routine?" },
        { speaker: "Varun", text: "Yes! I used to drink three sugary sodas a day, but now I drink fresh herbal tea.", audioText: "Yes! I used to drink three sugary sodas a day, but now I drink fresh herbal tea." }
      ]
    }
  },
  {
    num: 237,
    title: "Local Services, Asking for Help & Everyday Independence",
    concept: "Interact with local public services, post office, dry cleaner, repair shop, library, and request assistance politely using could you please / do you know where.",
    prompts: [
      "Could you please tell me where the nearest post office is located?",
      "I need to get my winter coat dry-cleaned before the cold weather starts.",
      "Is there a reliable cobbler or shoe repair shop in this neighborhood?",
      "Excuse me, could you help me find the local council citizen service desk?",
      "You can renew your library card online or at the circulation counter.",
      "How much does it cost to send a registered parcel to London?",
      "The pharmacy stays open twenty-four hours a day for emergency prescriptions.",
      "I am looking for an electrician who can fix our kitchen light fixture.",
      "Learning to manage local public services builds everyday self-reliance.",
      "Could you please explain how to operate the ticket dispensing machine?"
    ],
    vocab: [
      { id: "v_u16_l237_1", word: "dry cleaner", phonetic: "/ˌdraɪ ˈkliːnə(r)/", meaning: "a shop where clothes are cleaned with chemical solvents", translationsByLang: { hi: "ड्राई क्लीनर / कपड़े धोने की दुकान", es: "tintorería" }, exampleSentence: "I dropped my suit off at the dry cleaner this morning.", exampleTranslationByLang: { hi: "मैंने आज सुबह अपना सूट ड्राई क्लीनर पर दे दिया।", es: "Dejé mi traje en la tintorería esta mañana." }, audioText: "dry cleaner", audioId: "en_a2_u16_l237_v_1", slowAudioId: "en_a2_u16_l237_v_1_slow", voiceId: "EN_TEACHER_01", icon: "👔", difficulty: "A2 Elementary" },
      { id: "v_u16_l237_2", word: "parcel", phonetic: "/ˈpɑːsl/", meaning: "an object or collection of objects wrapped in paper in order to be posted", translationsByLang: { hi: "पार्सल / डाक बंडल", es: "paquete / bulto" }, exampleSentence: "The courier delivered a heavy parcel to my doorstep.", exampleTranslationByLang: { hi: "कूरियर ने मेरे दरवाजे पर एक भारी पार्सल पहुंचाया।", es: "El mensajero entregó un paquete pesado en mi puerta." }, audioText: "parcel", audioId: "en_a2_u16_l237_v_2", slowAudioId: "en_a2_u16_l237_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📦", difficulty: "A2 Elementary" },
      { id: "v_u16_l237_3", word: "self-reliance", phonetic: "/ˌself rɪˈlaɪəns/", meaning: "reliance on one's own powers and resources rather than those of others", translationsByLang: { hi: "आत्मनिर्भरता", es: "autosuficiencia / independencia" }, exampleSentence: "Living on your own teaches valuable self-reliance.", exampleTranslationByLang: { hi: "अकेले रहने से मूल्यवान आत्मनिर्भरता सीखने को मिलती है।", es: "Vivir solo enseña una valiosa autosuficiencia." }, audioText: "self-reliance", audioId: "en_a2_u16_l237_v_3", slowAudioId: "en_a2_u16_l237_v_3_slow", voiceId: "EN_TEACHER_01", icon: "🛡️", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l237_1", expression: "Could you please help me with...", meaning: "polite formal request for assistance with a task", translationsByLang: { hi: "क्या आप कृपया इसमें मेरी मदद कर सकते हैं...", es: "¿Podría ayudarme con...?" }, usageNote: "Standard polite request formula for public interactions.", audioText: "Could you please help me with this form?", audioId: "en_a2_u16_l237_c_1", slowAudioId: "en_a2_u16_l237_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🤝" }
    ],
    grammar: {
      title: "Polite Indirect Enquiries (Do you know where... / Could you tell me...)",
      concept: "Use embedded indirect questions with statement word order (Subject + Verb) rather than inverted question order.",
      patterns: [
        {
          id: "gp_u16_l237_1",
          title: "Indirect Questions with Statement Order",
          structure: "Could you tell me where + subject + verb + is / are?",
          explanation: "Maintains polite register without inversion.",
          examples: [
            {
              english: "Could you tell me where the post office is?",
              translation: "¿Podría decirme dónde está la oficina de correos?",
              translationByLang: { hi: "क्या आप मुझे बता सकते हैं कि डाकघर कहाँ है?", es: "¿Podría decirme dónde está la oficina de correos?" },
              audioText: "Could you tell me where the post office is?",
              audioId: "en_a2_u16_l237_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l237_1",
        incorrect: "Could you tell me where is the post office?",
        correct: "Could you tell me where the post office is?",
        explanation: "In indirect questions, maintain normal statement word order ('where the post office is').",
        explanationsByLang: { hi: "अप्रत्यक्ष प्रश्नों में 'where the post office is' क्रम का उपयोग करें।", es: "En preguntas indirectas no se invierte el sujeto y el verbo." }
      }
    ],
    dialogue: {
      id: "d_u16_l237_1",
      title: "At the Post Office",
      context: "A customer asking a postal worker about parcel shipping.",
      lines: [
        { speaker: "Customer", text: "Good morning! Could you tell me how much it costs to send this parcel to Germany?", audioText: "Good morning! Could you tell me how much it costs to send this parcel to Germany?" },
        { speaker: "Clerk", text: "Certainly! Please place it on the scale so I can check its weight.", audioText: "Certainly! Please place it on the scale so I can check its weight." }
      ]
    }
  },
  {
    num: 238,
    title: "Making Recommendations & Sharing Personal Advice",
    concept: "Recommend local eateries, leisure spots, books, films, and offer sensible personal advice using you should definitely / I recommend / it is worth.",
    prompts: [
      "You should definitely visit the new botanical garden near the river.",
      "I highly recommend trying the traditional vegetable curry at that bistro.",
      "If you enjoy historical novels, this new book is well worth reading.",
      "You ought to book tickets in advance because the weekend shows sell out quickly.",
      "Why do you not take a short break to recharge your energy?",
      "If I were you, I would check the weather forecast before setting off on the hike.",
      "That cozy little bookstore has an amazing selection of foreign fiction.",
      "It is worth spending an afternoon exploring the local folk art museum.",
      "She recommended that we visit early in the morning to avoid large crowds.",
      "Sharing helpful recommendations allows friends to discover hidden neighborhood gems."
    ],
    vocab: [
      { id: "v_u16_l238_1", word: "recommendation", phonetic: "/ˌrekəmenˈdeɪʃn/", meaning: "a suggestion or proposal as to the best course of action", translationsByLang: { hi: "सिफारिश / सुझाव", es: "recomendación" }, exampleSentence: "Her recommendation led us to a delightful bakery.", exampleTranslationByLang: { hi: "उनकी सिफारिश हमें एक शानदार बेकरी तक ले गई।", es: "Su recomendación nos llevó a una panadería encantadora." }, audioText: "recommendation", audioId: "en_a2_u16_l238_v_1", slowAudioId: "en_a2_u16_l238_v_1_slow", voiceId: "EN_TEACHER_01", icon: "⭐", difficulty: "A2 Elementary" },
      { id: "v_u16_l238_2", word: "worth", phonetic: "/wɜːθ/", meaning: "sufficiently good, important, or interesting to justify a specified action", translationsByLang: { hi: "के योग्य / उचित", es: "merecer la pena / valer la pena" }, exampleSentence: "The panoramic view from the hilltop is well worth the climb.", exampleTranslationByLang: { hi: "पहाड़ी की चोटी से विहंगम दृश्य चढ़ाई के बिल्कुल लायक है।", es: "La vista panorámica vale la pena la subida." }, audioText: "worth", audioId: "en_a2_u16_l238_v_2", slowAudioId: "en_a2_u16_l238_v_2_slow", voiceId: "EN_TEACHER_01", icon: "💎", difficulty: "A2 Elementary" },
      { id: "v_u16_l238_3", word: "ought to", phonetic: "/ˈɔːt tuː/", meaning: "used to indicate duty or correctness, typically when giving advice", translationsByLang: { hi: "चाहिए (सलाह)", es: "debería / tendría que" }, exampleSentence: "You ought to rest after your long journey.", exampleTranslationByLang: { hi: "आपको अपनी लंबी यात्रा के बाद आराम करना चाहिए।", es: "Deberías descansar después de tu largo viaje." }, audioText: "ought to", audioId: "en_a2_u16_l238_v_3", slowAudioId: "en_a2_u16_l238_v_3_slow", voiceId: "EN_TEACHER_01", icon: "💡", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l238_1", expression: "It's well worth it", meaning: "the benefits or enjoyment are definitely worth the effort or cost", translationsByLang: { hi: "यह बिल्कुल इसके लायक है", es: "Vale totalmente la pena" }, usageNote: "High-frequency spoken recommendation chunk.", audioText: "Visiting the castle is well worth it.", audioId: "en_a2_u16_l238_c_1", slowAudioId: "en_a2_u16_l238_c_1_slow", voiceId: "EN_TEACHER_01", icon: "🏰" }
    ],
    grammar: {
      title: "Recommending with Gerunds (recommend + -ing / worth + -ing)",
      concept: "Use 'recommend + gerund' (or recommend that + clause) and 'be worth + gerund' to advise others.",
      patterns: [
        {
          id: "gp_u16_l238_1",
          title: "Recommend / Worth + Gerund",
          structure: "Subject + recommend + gerund (-ing) / It is worth + gerund (-ing)",
          explanation: "Structures high-impact recommendations.",
          examples: [
            {
              english: "I recommend booking your train seats early during the holiday season.",
              translation: "Recomiendo reservar los asientos del tren con anticipación en vacaciones.",
              translationByLang: { hi: "मैं छुट्टियों के मौसम में अपनी ट्रेन की सीटें जल्दी बुक करने की सलाह देता हूँ।", es: "Recomiendo reservar los asientos del tren con anticipación en vacaciones." },
              audioText: "I recommend booking your train seats early during the holiday season.",
              audioId: "en_a2_u16_l238_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l238_1",
        incorrect: "I recommend you to see this film.",
        correct: "I recommend seeing this film. / I recommend that you see this film.",
        explanation: "Do not use 'recommend + object + to-infinitive'. Use 'recommend + gerund' or 'recommend that'.",
        explanationsByLang: { hi: "'recommend' के बाद 'to-infinitive' न लगाएं; gerund या 'that' का प्रयोग करें।", es: "'Recommend' no se usa con infinitivo con 'to'." }
      }
    ],
    dialogue: {
      id: "d_u16_l238_1",
      title: "Restaurant Recommendation",
      context: "A resident recommending a local dinner spot to a newcomer.",
      lines: [
        { speaker: "Tourist", text: "Do you know a nice place for a casual dinner nearby?", audioText: "Do you know a nice place for a casual dinner nearby?" },
        { speaker: "Local", text: "You should definitely try the Green Garden Cafe; their homemade soup is worth trying!", audioText: "You should definitely try the Green Garden Cafe; their homemade soup is worth trying!" }
      ]
    }
  },
  {
    num: 239,
    title: "Integrated Social Communication, Speaking & Writing",
    concept: "Synthesize interpersonal messages, draft informal email invitations, pass along community notices, and mediate spoken info.",
    prompts: [
      "I am writing to invite you to our annual summer barbecue this Sunday.",
      "The community notice says that the main water pipe will undergo maintenance.",
      "Could you please let everyone in our study group know about the room change?",
      "Thank you for your thoughtful message; I will certainly attend the celebration.",
      "Let me summarize the key points of the neighborhood association announcement.",
      "Please bring your favorite board game or musical instrument to the gathering.",
      "The event starts at four in the afternoon and concludes around eight.",
      "I promised to relay the revised schedule to all our team members promptly.",
      "Effective mediation helps people understand important civic announcements easily.",
      "We look forward to seeing you and enjoying an inspiring afternoon together."
    ],
    vocab: [
      { id: "v_u16_l239_1", word: "relay", phonetic: "/rɪˈleɪ/", meaning: "receive and pass on (information or a message)", translationsByLang: { hi: "संदेश आगे पहुंचाना", es: "transmitir / pasar información" }, exampleSentence: "Please relay this message to all participants.", exampleTranslationByLang: { hi: "कृपया यह संदेश सभी प्रतिभागियों तक पहुँचाएँ।", es: "Por favor transmite este mensaje a todos los participantes." }, audioText: "relay", audioId: "en_a2_u16_l239_v_1", slowAudioId: "en_a2_u16_l239_v_1_slow", voiceId: "EN_TEACHER_01", icon: "📨", difficulty: "A2 Elementary" },
      { id: "v_u16_l239_2", word: "summarize", phonetic: "/ˈsʌməraɪz/", meaning: "give a brief statement of the main points of (something)", translationsByLang: { hi: "संक्षेप में बताना", es: "resumir" }, exampleSentence: "She summarized the meeting in three short bullet points.", exampleTranslationByLang: { hi: "उसने बैठक को तीन छोटे बिंदुओं में संक्षेप में प्रस्तुत किया।", es: "Ella resumió la reunión en tres puntos breves." }, audioText: "summarize", audioId: "en_a2_u16_l239_v_2", slowAudioId: "en_a2_u16_l239_v_2_slow", voiceId: "EN_TEACHER_01", icon: "📝", difficulty: "A2 Elementary" },
      { id: "v_u16_l239_3", word: "annual", phonetic: "/ˈænjuəl/", meaning: "occurring once every year", translationsByLang: { hi: "वार्षिक", es: "anual" }, exampleSentence: "Our annual sports meet takes place every October.", exampleTranslationByLang: { hi: "हमारी वार्षिक खेल प्रतियोगिता हर अक्टूबर में होती है।", es: "Nuestra reunión deportiva anual se celebra cada octubre." }, audioText: "annual", audioId: "en_a2_u16_l239_v_3", slowAudioId: "en_a2_u16_l239_v_3_slow", voiceId: "EN_TEACHER_01", icon: "📅", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l239_1", expression: "Let someone know", meaning: "to inform or notify someone about information", translationsByLang: { hi: "किसी को सूचित करना / बताना", es: "avisar a alguien / hacer saber" }, usageNote: "High-frequency communicative chunk.", audioText: "Please let me know if you can come.", audioId: "en_a2_u16_l239_c_1", slowAudioId: "en_a2_u16_l239_c_1_slow", voiceId: "EN_TEACHER_01", icon: "📣" }
    ],
    grammar: {
      title: "Indirect Speech & Reporting Verbs (say that / tell someone to)",
      concept: "Use reporting verbs ('said that', 'told us to', 'explained that') to relay spoken messages and written notices accurately.",
      patterns: [
        {
          id: "gp_u16_l239_1",
          title: "Reporting Information",
          structure: "Subject + said that + clause / Subject + told [object] to + base verb",
          explanation: "Relays messages and instructions to others.",
          examples: [
            {
              english: "The organizer said that the entrance is free for all local residents.",
              translation: "El organizador dijo que la entrada es gratuita para todos los residentes locales.",
              translationByLang: { hi: "आयोजक ने कहा कि सभी स्थानीय निवासियों के लिए प्रवेश निःशुल्क है।", es: "El organizador dijo que la entrada es gratuita para todos los residentes locales." },
              audioText: "The organizer said that the entrance is free for all local residents.",
              audioId: "en_a2_u16_l239_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l239_1",
        incorrect: "He said me that the class was cancelled.",
        correct: "He told me that the class was cancelled. / He said that the class was cancelled.",
        explanation: "Use 'told + person', but 'said + that clause' (without a direct person object).",
        explanationsByLang: { hi: "व्यक्तिगत वस्तु के साथ 'told' का प्रयोग करें, 'said me' गलत है।", es: "Usa 'told me' o 'said that', nunca 'said me'." }
      }
    ],
    dialogue: {
      id: "d_u16_l239_1",
      title: "Relaying an Event Notice",
      context: "A student relaying a schedule update to their study partner.",
      lines: [
        { speaker: "Aditi", text: "Did you read the notice about the lecture room change?", audioText: "Did you read the notice about the lecture room change?" },
        { speaker: "Karan", text: "Yes, the tutor told us that we are meeting in Hall B instead of Hall A.", audioText: "Yes, the tutor told us that we are meeting in Hall B instead of Hall A." }
      ]
    }
  },
  {
    num: 240,
    title: "Unit 16 Review & Communicative Mastery",
    concept: "Synthesize all Unit 16 social communication skills: invitations, relationships, community life, opinions, decisions, and narratives.",
    prompts: [
      "Building positive social connections enhances our daily well-being and confidence.",
      "Would you like to join our community book club meeting next Tuesday?",
      "We resolved our minor misunderstanding by having a friendly, open chat.",
      "In my opinion, volunteering for local projects brings neighbors closer together.",
      "While we were organizing the charity event, many volunteers offered their help.",
      "I used to feel shy in social gatherings, but now I enjoy meeting new people.",
      "Could you please tell me where the community center entrance is located?",
      "I highly recommend visiting the annual handicraft exhibition in the square.",
      "Let us stay in touch through weekly messages and catch up over lunch soon.",
      "Congratulations on completing Unit 16 and mastering social communication in English!"
    ],
    vocab: [
      { id: "v_u16_l240_1", word: "mastery", phonetic: "/ˈmɑːstəri/", meaning: "comprehensive knowledge or skill in a particular subject or activity", translationsByLang: { hi: "महारत / प्रवीणता", es: "maestría / dominio" }, exampleSentence: "Practicing regularly leads to fluency and language mastery.", exampleTranslationByLang: { hi: "नियमित अभ्यास से प्रवाह और भाषा में महारत हासिल होती है।", es: "Practicar regularmente conduce a la fluidez y el dominio." }, audioText: "mastery", audioId: "en_a2_u16_l240_v_1", slowAudioId: "en_a2_u16_l240_v_1_slow", voiceId: "EN_TEACHER_01", icon: "🏆", difficulty: "A2 Elementary" },
      { id: "v_u16_l240_2", word: "connection", phonetic: "/kəˈnekʃn/", meaning: "a relationship in which a person is linked or associated with someone", translationsByLang: { hi: "संबंध / जुड़ाव", es: "conexión / relación" }, exampleSentence: "Developing meaningful social connections enriches our life.", exampleTranslationByLang: { hi: "सार्थक सामाजिक संबंध विकसित करने से हमारा जीवन समृद्ध होता है।", es: "Desarrollar conexiones sociales significativas enriquece la vida." }, audioText: "connection", audioId: "en_a2_u16_l240_v_2", slowAudioId: "en_a2_u16_l240_v_2_slow", voiceId: "EN_TEACHER_01", icon: "🌐", difficulty: "A2 Elementary" },
      { id: "v_u16_l240_3", word: "confidence", phonetic: "/ˈkɒnfɪdəns/", meaning: "a feeling of self-assurance arising from one's appreciation of one's own abilities", translationsByLang: { hi: "आत्मविश्वास", es: "confianza / seguridad" }, exampleSentence: "Speaking in public with confidence comes with active practice.", exampleTranslationByLang: { hi: "सक्रिय अभ्यास से आत्मविश्वास के साथ सार्वजनिक रूप से बोलना आता है।", es: "Hablar en público con confianza se logra con la práctica activa." }, audioText: "confidence", audioId: "en_a2_u16_l240_v_3", slowAudioId: "en_a2_u16_l240_v_3_slow", voiceId: "EN_TEACHER_01", icon: "💪", difficulty: "A2 Elementary" }
    ],
    expressions: [
      { id: "c_u16_l240_1", expression: "Keep in touch", meaning: "maintain contact over time", translationsByLang: { hi: "संपर्क बनाए रखना", es: "mantener el contacto" }, usageNote: "Friendly parting phrase.", audioText: "Let's definitely keep in touch!", audioId: "en_a2_u16_l240_c_1", slowAudioId: "en_a2_u16_l240_c_1_slow", voiceId: "EN_TEACHER_01", icon: "👋" }
    ],
    grammar: {
      title: "Unit 16 Comprehensive Grammar Synthesis",
      concept: "Integration of Present Perfect (for/since), polite invitations, narrative tenses (while/when), 'used to', and indirect question structures.",
      patterns: [
        {
          id: "gp_u16_l240_1",
          title: "Comprehensive Social Discourse Structures",
          structure: "Mixed A2 communicative patterns for social interaction and narrative fluency",
          explanation: "Mastery of varied sentence structures across social interaction domains.",
          examples: [
            {
              english: "We have known each other since childhood, and we still catch up every weekend.",
              translation: "Nos conocemos desde la infancia y todavía nos ponemos al día cada fin de semana.",
              translationByLang: { hi: "हम बचपन से एक-दूसरे को जानते हैं, और हम अभी भी हर सप्ताहांत मिलते हैं।", es: "Nos conocemos desde la infancia y todavía nos ponemos al día cada fin de semana." },
              audioText: "We have known each other since childhood, and we still catch up every weekend.",
              audioId: "en_a2_u16_l240_g1"
            }
          ]
        }
      ]
    },
    mistakes: [
      {
        id: "cm_u16_l240_1",
        incorrect: "I have known him since five years and I used to living near him.",
        correct: "I have known him for five years and I used to live near him.",
        explanation: "Use 'for' with duration periods ('five years') and 'used to + base verb' ('live').",
        explanationsByLang: { hi: "अवधि के लिए 'for' और पुरानी स्थिति के लिए 'used to + base verb' का प्रयोग करें।", es: "Usa 'for' con periodos de tiempo y 'used to + infinitivo'." }
      }
    ],
    dialogue: {
      id: "d_u16_l240_1",
      title: "Unit 16 Celebration",
      context: "Two learners celebrating their social communication milestone.",
      lines: [
        { speaker: "Meera", text: "We have learned so much about social communication, invitations, and resolving misunderstandings!", audioText: "We have learned so much about social communication, invitations, and resolving misunderstandings!" },
        { speaker: "Aarav", text: "Yes! Now I feel much more confident having conversations with neighbors and friends in English.", audioText: "Yes! Now I feel much more confident having conversations with neighbors and friends in English." }
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
    const fileName = `lesson_a2_16_${def.num}.ts`;
    const filePath = path.join(outDir, fileName);
    const varName = `LESSON_A2_16_${def.num}_DATA`;

    const content = `import { DetailedLessonData } from '../../types';

export const ${varName}: DetailedLessonData = ${JSON.stringify(data, null, 2)};
`;

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Generated complete structured lesson ${def.num}: ${def.title}`);
  }
}

generateFiles();
