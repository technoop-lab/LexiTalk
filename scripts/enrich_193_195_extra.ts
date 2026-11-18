import { Exercise } from '../src/types';
import { LESSON_A2_13_193_DATA } from '../src/data/lessons/lesson_a2_13_193';
import { LESSON_A2_13_194_DATA } from '../src/data/lessons/lesson_a2_13_194';
import { LESSON_A2_13_195_DATA } from '../src/data/lessons/lesson_a2_13_195';
import { enrichUnit13LessonData } from './enrich_unit13_helper';

const extra_193_practice: Exercise[] = [
  {
    id: "a2_u13_l193_p23",
    type: "multiple_choice",
    prompt: "Choose the most tactful way to introduce a counter-proposal during budget deliberations:",
    options: [
      { id: "o1", text: "Having reviewed the figures, might we consider allocating twenty percent to digital outreach instead?", isCorrect: true },
      { id: "o2", text: "Your numbers are awful so give me all the money.", isCorrect: false },
      { id: "o3", text: "Money should not be spent on anything at all.", isCorrect: false },
      { id: "o4", text: "I deleted the entire spreadsheet because I disagreed.", isCorrect: false }
    ],
    correctAnswer: "Having reviewed the figures, might we consider allocating twenty percent to digital outreach instead?",
    explanation: "'Having reviewed the figures, might we consider...' is diplomatic and respectful."
  },
  {
    id: "a2_u13_l193_p24",
    type: "fill_blank",
    prompt: "Fill in the blank: 'With all due [blank] (respect / respected), I view the market trends somewhat differently.'",
    sourceSentence: "With all due [blank], I view the market trends somewhat differently.",
    targetSentence: "With all due respect, I view the market trends somewhat differently.",
    text: "With all due [blank], I view the market trends somewhat differently.",
    options: [
      { id: "o1", text: "respect", isCorrect: true },
      { id: "o2", text: "respected", isCorrect: false },
      { id: "o3", text: "respectful", isCorrect: false },
      { id: "o4", text: "respecting", isCorrect: false }
    ],
    correctAnswer: "respect",
    explanation: "The standard diplomatic idiom is 'With all due respect'."
  },
  {
    id: "a2_u13_l193_p25",
    type: "word_ordering",
    prompt: "Reorder the words to form a balanced opinion sentence:",
    sourceSentence: "While there are clear benefits we must also evaluate potential drawbacks.",
    targetSentence: "While there are clear benefits we must also evaluate potential drawbacks.",
    tokens: ["While", "there", "are", "clear", "benefits", "we", "must", "also", "evaluate", "potential", "drawbacks", "."],
    correctOrder: ["While", "there", "are", "clear", "benefits", "we", "must", "also", "evaluate", "potential", "drawbacks", "."],
    explanation: "'While there are clear benefits we must also evaluate potential drawbacks' is balanced."
  },
  {
    id: "a2_u13_l193_p26",
    type: "translation",
    prompt: "Translate to English: 'यद्यपि यह एक कठिन निर्णय है, यह दीर्घावधि में फायदेमंद साबित होगा।'",
    sourceSentence: "यद्यपि यह एक कठिन निर्णय है, यह दीर्घावधि में फायदेमंद साबित होगा।",
    targetSentence: "Although this is a difficult decision, it will prove beneficial in the long run.",
    explanation: "'Although it is a tough / difficult decision, it will prove beneficial in the long run.'"
  },
  {
    id: "a2_u13_l193_p27",
    type: "speaking",
    prompt: "Speak clearly and practice diplomatic persuasion:",
    sourceSentence: "If we examine the feedback carefully, we will notice that our users are requesting simpler navigation rather than more complex features.",
    targetSentence: "If we examine the feedback carefully, we will notice that our users are requesting simpler navigation rather than more complex features.",
    audioText: "If we examine the feedback carefully, we will notice that our users are requesting simpler navigation rather than more complex features.",
    explanation: "Practice persuasive presentation intonation."
  }
];

const extra_193_review: Exercise[] = [
  {
    id: "a2_u13_l193_r11",
    type: "match_pairs",
    prompt: "Match diplomatic opinion markers with their communicative tone:",
    options: [
      { id: "m1", text: "As far as I can tell..." },
      { id: "m1_m", text: "cautious assessment based on available evidence" },
      { id: "m2", text: "I'm inclined to agree that..." },
      { id: "m2_m", text: "tentative, gentle agreement" },
      { id: "m3", text: "That may be so, yet..." },
      { id: "m3_m", text: "polite concession preceding a counterpoint" }
    ]
  },
  {
    id: "a2_u13_l193_r12",
    type: "fill_blank",
    prompt: "Fill in the blank: 'We ought to weigh the pros [blank] (and / or) cons before making a binding commitment.'",
    sourceSentence: "We ought to weigh the pros [blank] cons before making a binding commitment.",
    targetSentence: "We ought to weigh the pros and cons before making a binding commitment.",
    text: "We ought to weigh the pros [blank] cons before making a binding commitment.",
    options: [
      { id: "o1", text: "and", isCorrect: true },
      { id: "o2", text: "or", isCorrect: false },
      { id: "o3", text: "nor", isCorrect: false },
      { id: "o4", text: "so", isCorrect: false }
    ],
    correctAnswer: "and",
    explanation: "The set idiom is 'pros and cons'."
  }
];

const extra_194_practice: Exercise[] = [
  {
    id: "a2_u13_l194_p23",
    type: "multiple_choice",
    prompt: "Which statement is the most professional way to interrupt politely to seek clarification?",
    options: [
      { id: "o1", text: "Pardon the interruption, but could you clarify what you mean by 'tiered rollout'?", isCorrect: true },
      { id: "o2", text: "Stop speaking right now and explain tiered rollout.", isCorrect: false },
      { id: "o3", text: "I don't care about tiered rollout so skip it.", isCorrect: false },
      { id: "o4", text: "Tiered rollout is a fake word you made up.", isCorrect: false }
    ],
    correctAnswer: "Pardon the interruption, but could you clarify what you mean by 'tiered rollout'?",
    explanation: "'Pardon the interruption, but could you clarify...' is courteous and professional."
  },
  {
    id: "a2_u13_l194_p24",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Could you spell your surname for the record, [blank] (please / thanking)?'",
    sourceSentence: "Could you spell your surname for the record, [blank]?",
    targetSentence: "Could you spell your surname for the record, please?",
    text: "Could you spell your surname for the record, [blank]?",
    options: [
      { id: "o1", text: "please", isCorrect: true },
      { id: "o2", text: "thanking", isCorrect: false },
      { id: "o3", text: "thanks you", isCorrect: false },
      { id: "o4", text: "pleased", isCorrect: false }
    ],
    correctAnswer: "please",
    explanation: "Polite request ends with 'please'."
  },
  {
    id: "a2_u13_l194_p25",
    type: "word_ordering",
    prompt: "Reorder the words to form a clarification check:",
    sourceSentence: "So what you are suggesting is that we delay until next quarter?",
    targetSentence: "So what you are suggesting is that we delay until next quarter?",
    tokens: ["So", "what", "you", "are", "suggesting", "is", "that", "we", "delay", "until", "next", "quarter", "?"],
    correctOrder: ["So", "what", "you", "are", "suggesting", "is", "that", "we", "delay", "until", "next", "quarter", "?"],
    explanation: "'So what you are suggesting is that we delay until next quarter?' checks understanding."
  },
  {
    id: "a2_u13_l194_p26",
    type: "translation",
    prompt: "Translate to English: 'माफ़ कीजिए, मेरी आवाज़ कट रही थी; क्या आप फिर से कह सकते हैं?'",
    sourceSentence: "माफ़ कीजिए, मेरी आवाज़ कट रही थी; क्या आप फिर से कह सकते हैं?",
    targetSentence: "Sorry, you were cutting out; could you say that again?",
    explanation: "'Sorry, you were breaking up / cutting out; could you repeat that?'"
  },
  {
    id: "a2_u13_l194_p27",
    type: "speaking",
    prompt: "Speak clearly and practice repairing a virtual meeting audio breakdown:",
    sourceSentence: "I apologize, my internet connection dropped momentarily. Could you please repeat the last action item on the slide?",
    targetSentence: "I apologize, my internet connection dropped momentarily. Could you please repeat the last action item on the slide?",
    audioText: "I apologize, my internet connection dropped momentarily. Could you please repeat the last action item on the slide?",
    explanation: "Practice professional online communication repair."
  }
];

const extra_194_review: Exercise[] = [
  {
    id: "a2_u13_l194_r11",
    type: "match_pairs",
    prompt: "Match conversational repair signals with their context:",
    options: [
      { id: "m1", text: "You're breaking up a bit." },
      { id: "m1_m", text: "poor audio or connectivity in a phone or online call" },
      { id: "m2", text: "Let me rephrase that." },
      { id: "m2_m", text: "self-correcting your own previous statement" },
      { id: "m3", text: "What do you mean by that?" },
      { id: "m3_m", text: "seeking a deeper definition of a specific word or phrase" }
    ]
  },
  {
    id: "a2_u13_l194_r12",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Did you say fifteen [blank] (or / nor) fifty?'",
    sourceSentence: "Did you say fifteen [blank] fifty?",
    targetSentence: "Did you say fifteen or fifty?",
    text: "Did you say fifteen [blank] fifty?",
    options: [
      { id: "o1", text: "or", isCorrect: true },
      { id: "o2", text: "nor", isCorrect: false },
      { id: "o3", text: "and", isCorrect: false },
      { id: "o4", text: "but", isCorrect: false }
    ],
    correctAnswer: "or",
    explanation: "Numbers ending in -teen and -ty are easily confused; 'or' provides the alternative choice."
  }
];

const extra_195_practice: Exercise[] = [
  {
    id: "a2_u13_l195_p23",
    type: "multiple_choice",
    prompt: "Which sentence exemplifies the communicative fluency expected at the end of CEFR A2?",
    options: [
      { id: "o1", text: "Whenever I travel abroad, I enjoy exploring historical districts, asking locals for recommendations, and sharing cultural stories.", isCorrect: true },
      { id: "o2", text: "I go place eat food sleep.", isCorrect: false },
      { id: "o3", text: "Travel was deleted from planet.", isCorrect: false },
      { id: "o4", text: "I only write single words on paper.", isCorrect: false }
    ],
    correctAnswer: "Whenever I travel abroad, I enjoy exploring historical districts, asking locals for recommendations, and sharing cultural stories.",
    explanation: "Demonstrates subordinate clause ('Whenever I travel...'), gerunds ('exploring', 'asking', 'sharing'), and rich communicative range."
  },
  {
    id: "a2_u13_l195_p24",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Language proficiency is achieved [blank] (through / across) persistent dedication and interactive practice.'",
    sourceSentence: "Language proficiency is achieved [blank] persistent dedication and interactive practice.",
    targetSentence: "Language proficiency is achieved through persistent dedication and interactive practice.",
    text: "Language proficiency is achieved [blank] persistent dedication and interactive practice.",
    options: [
      { id: "o1", text: "through", isCorrect: true },
      { id: "o2", text: "across", isCorrect: false },
      { id: "o3", text: "between", isCorrect: false },
      { id: "o4", text: "overly", isCorrect: false }
    ],
    correctAnswer: "through",
    explanation: "'through' indicates the means or mechanism of accomplishment."
  },
  {
    id: "a2_u13_l195_p25",
    type: "word_ordering",
    prompt: "Reorder the words to form a comprehensive milestone sentence:",
    sourceSentence: "We are now fully prepared to communicate effectively in diverse international environments.",
    targetSentence: "We are now fully prepared to communicate effectively in diverse international environments.",
    tokens: ["We", "are", "now", "fully", "prepared", "to", "communicate", "effectively", "in", "diverse", "international", "environments", "."],
    correctOrder: ["We", "are", "now", "fully", "prepared", "to", "communicate", "effectively", "in", "diverse", "international", "environments", "."],
    explanation: "'We are now fully prepared to communicate effectively in diverse international environments' is syntactically pristine."
  },
  {
    id: "a2_u13_l195_p26",
    type: "translation",
    prompt: "Translate to English: 'हमने एक साथ बहुत कुछ सीखा है और हम अपने भविष्य के लिए तैयार हैं।'",
    sourceSentence: "हमने एक साथ बहुत कुछ सीखा है और हम अपने भविष्य के लिए तैयार हैं।",
    targetSentence: "We have learned so much together and we are ready for our future.",
    explanation: "'We have learned a great deal together and we are ready for our future.'"
  },
  {
    id: "a2_u13_l195_p27",
    type: "speaking",
    prompt: "Speak clearly and deliver your final CEFR A2 celebratory pledge:",
    sourceSentence: "I promise to keep practicing English every single day, embracing new challenges, and communicating with openness, empathy, and joy.",
    targetSentence: "I promise to keep practicing English every single day, embracing new challenges, and communicating with openness, empathy, and joy.",
    audioText: "I promise to keep practicing English every single day, embracing new challenges, and communicating with openness, empathy, and joy.",
    explanation: "Deliver with passion, precision, and celebratory clarity."
  }
];

const extra_195_review: Exercise[] = [
  {
    id: "a2_u13_l195_r11",
    type: "match_pairs",
    prompt: "Match the major communicative domains of Unit 13 with their thematic focus:",
    options: [
      { id: "m1", text: "Environmental Conservation" },
      { id: "m1_m", text: "wildlife ecosystems, recycling initiatives, zero conditionals" },
      { id: "m2", text: "Culinary & Dining Traditions" },
      { id: "m2_m", text: "recipe imperatives, hosting etiquette, polite food offers" },
      { id: "m3", text: "Visual Arts & Photography" },
      { id: "m3_m", text: "composition descriptions, spatial prepositions, passive voice" },
      { id: "m4", text: "Discourse & Dialogue Repair" },
      { id: "m4_m", text: "hedging, active listening, asking for clarification" }
    ]
  },
  {
    id: "a2_u13_l195_r12",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Every learner has the potential to succeed [blank] (if / unless) they maintain steady consistency.'",
    sourceSentence: "Every learner has the potential to succeed [blank] they maintain steady consistency.",
    targetSentence: "Every learner has the potential to succeed if they maintain steady consistency.",
    text: "Every learner has the potential to succeed [blank] they maintain steady consistency.",
    options: [
      { id: "o1", text: "if", isCorrect: true },
      { id: "o2", text: "unless", isCorrect: false },
      { id: "o3", text: "without", isCorrect: false },
      { id: "o4", text: "nor", isCorrect: false }
    ],
    correctAnswer: "if",
    explanation: "'if' introduces the positive condition for success."
  }
];

enrichUnit13LessonData('lesson_a2_13_193', LESSON_A2_13_193_DATA, extra_193_practice, extra_193_review, []);
enrichUnit13LessonData('lesson_a2_13_194', LESSON_A2_13_194_DATA, extra_194_practice, extra_194_review, []);
enrichUnit13LessonData('lesson_a2_13_195', LESSON_A2_13_195_DATA, extra_195_practice, extra_195_review, []);
