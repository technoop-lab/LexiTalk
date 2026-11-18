import { Exercise } from '../src/types';
import { LESSON_A2_12_171_DATA } from '../src/data/lessons/lesson_a2_12_171';
import { LESSON_A2_12_172_DATA } from '../src/data/lessons/lesson_a2_12_172';
import { LESSON_A2_12_173_DATA } from '../src/data/lessons/lesson_a2_12_173';
import { LESSON_A2_12_174_DATA } from '../src/data/lessons/lesson_a2_12_174';
import { LESSON_A2_12_175_DATA } from '../src/data/lessons/lesson_a2_12_175';
import { enrichUnit12LessonData } from './enrich_unit12_helper';

// =========================================================================
// LESSON 171: Modals of Deduction & Probability (Must, Can't, Might, Could)
// =========================================================================
const l171_practice: Exercise[] = [
  {
    id: "a2_u12_l171_p11",
    type: "reading",
    prompt: "Read the workplace detective puzzle and answer the question:\n\"Office Mystery: It is 10:00 AM on Monday. David's computer is turned on, his coffee cup is still warm on his desk, and his jacket is on his chair. However, he is not at his workstation. Today, the executive committee is holding their quarterly strategic review in Conference Room B.\"\nBased on the evidence, which deduction is most logical?",
    sourceSentence: "Based on the evidence, which deduction is most logical?",
    targetSentence: "David must be in the office, and he might be in Conference Room B.",
    options: [
      { id: "o1", text: "David must be in the office, and he might be in Conference Room B.", isCorrect: true },
      { id: "o2", text: "David can't be at work because he lives in another country.", isCorrect: false },
      { id: "o3", text: "David definitely quit his job last year.", isCorrect: false },
      { id: "o4", text: "David must not have arrived at work today.", isCorrect: false }
    ],
    correctAnswer: "David must be in the office, and he might be in Conference Room B.",
    explanation: "His warm coffee and jacket show he 'must be in the office', and the meeting indicates he 'might be in Conference Room B'."
  },
  {
    id: "a2_u12_l171_p12",
    type: "speaking",
    prompt: "Speak clearly and naturally: Make logical deductions about an unanswered phone call.",
    sourceSentence: "Maria isn't answering her desk phone. She must be in a client presentation, or she might be at lunch.",
    targetSentence: "Maria isn't answering her desk phone. She must be in a client presentation, or she might be at lunch.",
    audioText: "Maria isn't answering her desk phone. She must be in a client presentation, or she might be at lunch.",
    explanation: "Emphasize modal deduction stress: 'She MUST be in a presentation, or she MIGHT be at lunch.'"
  },
  {
    id: "a2_u12_l171_p13",
    type: "match_pairs",
    prompt: "Match the deduction modals with their degree of certainty:",
    options: [
      { id: "m1", text: "must be" },
      { id: "m1_m", text: "almost 100% logically certain (positive)" },
      { id: "m2", text: "can't be" },
      { id: "m2_m", text: "almost 100% logically impossible (negative)" },
      { id: "m3", text: "might / could be" },
      { id: "m3_m", text: "possible (approx. 50% probability)" },
      { id: "m4", text: "should be" },
      { id: "m4_m", text: "expected based on regular schedule or logic" }
    ]
  },
  {
    id: "a2_u12_l171_p14",
    type: "mediation",
    prompt: "Mediate this observation in English for your coworker: 'वह अभी घर पर नहीं हो सकता क्योंकि मैंने उसे पांच मिनट पहले कार्यालय में देखा था।' Choose the best translation.",
    sourceSentence: "वह अभी घर पर नहीं हो सकता क्योंकि मैंने उसे पांच मिनट पहले कार्यालय में देखा था।",
    targetSentence: "He can't be at home right now because I saw him in the office five minutes ago.",
    options: [
      { id: "o1", text: "He can't be at home right now because I saw him in the office five minutes ago.", isCorrect: true },
      { id: "o2", text: "He must not be at home because he might saw me yesterday.", isCorrect: false },
      { id: "o3", text: "He can be at home if he saw office five minutes ago.", isCorrect: false }
    ],
    correctAnswer: "He can't be at home right now because I saw him in the office five minutes ago.",
    explanation: "'can't be' expresses strong negative logical certainty (it is impossible for him to be home)."
  },
  {
    id: "a2_u12_l171_p15",
    type: "error_correction",
    prompt: "Identify and correct the deduction modal error:",
    sourceSentence: "Look at all those luxury sports cars outside. The owner must not be poor.",
    targetSentence: "Look at all those luxury sports cars outside. The owner can't be poor.",
    options: [
      { id: "o1", text: "Look at all those luxury sports cars outside. The owner can't be poor.", isCorrect: true },
      { id: "o2", text: "Look at all those luxury sports cars outside. The owner mustn't be poor.", isCorrect: false },
      { id: "o3", text: "Look at all those luxury sports cars outside. The owner might not be poor.", isCorrect: false }
    ],
    correctAnswer: "Look at all those luxury sports cars outside. The owner can't be poor.",
    explanation: "For negative logical impossibility, English uses 'can't be' (not 'must not be')."
  },
  {
    id: "a2_u12_l171_p16",
    type: "listening",
    prompt: "Listen to the discussion and determine what the speakers conclude about the light in the lab:",
    audioText: "Speaker A: 'The lights are still on in the research laboratory.' Speaker B: 'Dr. Patel must still be running the overnight simulation. He told me he had extra experiments to finish tonight.'",
    targetSentence: "Dr. Patel must still be working on experiments in the lab.",
    options: [
      { id: "o1", text: "Dr. Patel must still be working on experiments in the lab.", isCorrect: true },
      { id: "o2", text: "The laboratory was closed for renovation.", isCorrect: false },
      { id: "o3", text: "Dr. Patel can't be in the laboratory today.", isCorrect: false },
      { id: "o4", text: "The lights were broken by accident.", isCorrect: false }
    ],
    correctAnswer: "Dr. Patel must still be working on experiments in the lab.",
    explanation: "Speaker B concludes: 'Dr. Patel must still be running the overnight simulation.'"
  },
  {
    id: "a2_u12_l171_p17",
    type: "personal_production",
    prompt: "Write 2 sentences making deductions about someone's schedule using 'must be' and 'might be':",
    targetSentence: "Pooja has three folders on her desk and her calendar is fully booked. She must be preparing for the board meeting, or she might be interviewing new candidates.",
    audioText: "Pooja has three folders on her desk and her calendar is fully booked. She must be preparing for the board meeting, or she might be interviewing new candidates."
  },
  {
    id: "a2_u12_l171_p18",
    type: "dialogue_completion",
    prompt: "Complete the deduction conversation:\nColleague A: 'Why is the website loading so slowly right now?'\nColleague B: '________________________'",
    sourceSentence: "Why is the website loading so slowly right now?",
    targetSentence: "There must be unusually high traffic because our marketing campaign just launched.",
    options: [
      { id: "o1", text: "There must be unusually high traffic because our marketing campaign just launched.", isCorrect: true },
      { id: "o2", text: "It can't have any users because no one knows us.", isCorrect: false },
      { id: "o3", text: "The website was built in 1990 yesterday.", isCorrect: false }
    ],
    correctAnswer: "There must be unusually high traffic because our marketing campaign just launched.",
    explanation: "'There must be...' expresses a highly logical conclusion based on recent events."
  },
  {
    id: "a2_u12_l171_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a deduction about possibility:",
    sourceSentence: "The package might arrive earlier than expected today.",
    targetSentence: "The package might arrive earlier than expected today.",
    tokens: ["The", "package", "might", "arrive", "earlier", "than", "expected", "today", "."],
    correctOrder: ["The", "package", "might", "arrive", "earlier", "than", "expected", "today", "."],
    explanation: "Structure: Subject ('The package') + modal ('might') + base verb ('arrive') + comparative adverbial."
  },
  {
    id: "a2_u12_l171_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct modal of impossibility:",
    sourceSentence: "That [blank] (can't / must) be John's car because John is currently working in London.",
    targetSentence: "That can't be John's car because John is currently working in London.",
    text: "That [blank] be John's car because John is currently working in London.",
    options: [
      { id: "o1", text: "can't", isCorrect: true },
      { id: "o2", text: "must", isCorrect: false },
      { id: "o3", text: "should", isCorrect: false },
      { id: "o4", text: "might", isCorrect: false }
    ],
    correctAnswer: "can't",
    explanation: "Since John is in London, it is logically impossible for the car to be his ('can't be')."
  },
  {
    id: "a2_u12_l171_p21",
    type: "translation",
    prompt: "Translate to English: 'वे इतने लंबे सफर के बाद बहुत थके हुए होंगे।'",
    sourceSentence: "वे इतने लंबे सफर के बाद बहुत थके हुए होंगे।",
    targetSentence: "They must be very tired after such a long journey.",
    explanation: "Strong positive deduction: 'They must be very tired after such a long journey.'."
  },
  {
    id: "a2_u12_l171_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain why a meeting room is empty.",
    sourceSentence: "The conference room is completely dark and empty. The clients must have finished their presentation early.",
    targetSentence: "The conference room is completely dark and empty. The clients must have finished their presentation early.",
    audioText: "The conference room is completely dark and empty. The clients must have finished their presentation early.",
    explanation: "Focus on clear pronunciation and natural stress on 'must have finished'."
  }
];

const l171_review: Exercise[] = [
  {
    id: "a2_u12_l171_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 9 - Modals of Ability & Permission): Which sentence correctly asks for polite permission?",
    options: [
      { id: "o1", text: "Could I please take a look at the latest project draft?", isCorrect: true },
      { id: "o2", text: "Must I look at your draft yesterday?", isCorrect: false },
      { id: "o3", text: "Can't I to see your project draft?", isCorrect: false },
      { id: "o4", text: "Would I taking a look at your draft?", isCorrect: false }
    ],
    correctAnswer: "Could I please take a look at the latest project draft?",
    explanation: "'Could I please + base verb' is standard polite permission."
  },
  {
    id: "a2_u12_l171_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'He is wearing a doctor's lab coat and stethoscope. He [blank] (must / can't) work at the hospital.'",
    sourceSentence: "He is wearing a doctor's lab coat and stethoscope. He [blank] work at the hospital.",
    targetSentence: "He is wearing a doctor's lab coat and stethoscope. He must work at the hospital.",
    text: "He is wearing a doctor's lab coat and stethoscope. He [blank] work at the hospital.",
    options: [
      { id: "o1", text: "must", isCorrect: true },
      { id: "o2", text: "can't", isCorrect: false },
      { id: "o3", text: "must not", isCorrect: false },
      { id: "o4", text: "wouldn't", isCorrect: false }
    ],
    correctAnswer: "must",
    explanation: "The strong visual evidence leads to positive logical certainty ('must')."
  },
  {
    id: "a2_u12_l171_r9",
    type: "error_correction",
    prompt: "Correct the modal of deduction error:",
    sourceSentence: "She is not smiling. She must be not very happy with the test results.",
    targetSentence: "She is not smiling. She can't be very happy with the test results.",
    options: [
      { id: "o1", text: "She is not smiling. She can't be very happy with the test results.", isCorrect: true },
      { id: "o2", text: "She is not smiling. She mustn't to be happy with results.", isCorrect: false },
      { id: "o3", text: "She is not smiling. She must be happy with results.", isCorrect: false }
    ],
    correctAnswer: "She is not smiling. She can't be very happy with the test results.",
    explanation: "Use 'can't be' to express logical negative deduction ('she can't be very happy')."
  },
  {
    id: "a2_u12_l171_r10",
    type: "translation",
    prompt: "Translate to English: 'यह खबर सच हो सकती है, लेकिन मुझे पूरा यकीन नहीं है।'",
    sourceSentence: "यह खबर सच हो सकती है, लेकिन मुझे पूरा यकीन नहीं है।",
    targetSentence: "This news might be true, but I am not entirely sure.",
    explanation: "'might be true' expresses possibility without certainty."
  }
];

const l171_assessment: Exercise[] = [
  {
    id: "a2_u12_l171_a7",
    type: "multiple_choice",
    prompt: "Which sentence expresses that something is 50% possible based on available facts?",
    options: [
      { id: "o1", text: "The courier might deliver the package before noon.", isCorrect: true },
      { id: "o2", text: "The courier must deliver the package yesterday.", isCorrect: false },
      { id: "o3", text: "The courier can't deliver the package ever.", isCorrect: false },
      { id: "o4", text: "The courier definitely delivered the package already.", isCorrect: false }
    ],
    correctAnswer: "The courier might deliver the package before noon.",
    explanation: "'might deliver' indicates moderate possibility."
  },
  {
    id: "a2_u12_l171_a8",
    type: "fill_blank",
    prompt: "Complete the deduction sentence:",
    sourceSentence: "There is smoke coming from the kitchen. Something [blank] (must / can't) be burning!",
    targetSentence: "There is smoke coming from the kitchen. Something must be burning!",
    text: "There is smoke coming from the kitchen. Something [blank] be burning!",
    options: [
      { id: "o1", text: "must", isCorrect: true },
      { id: "o2", text: "can't", isCorrect: false },
      { id: "o3", text: "might not", isCorrect: false },
      { id: "o4", text: "shouldn't", isCorrect: false }
    ],
    correctAnswer: "must",
    explanation: "The visible smoke creates a high-certainty logical deduction ('must be burning')."
  },
  {
    id: "a2_u12_l171_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: State two logical deductions about an empty office building at 8:00 PM on Friday.",
    sourceSentence: "All the lights are turned off and the main doors are locked. The staff must have gone home for the weekend, so the building can't be open right now.",
    targetSentence: "All the lights are turned off and the main doors are locked. The staff must have gone home for the weekend, so the building can't be open right now.",
    audioText: "All the lights are turned off and the main doors are locked. The staff must have gone home for the weekend, so the building can't be open right now.",
    explanation: "Demonstrate accurate use of 'must' for positive deduction and 'can't' for negative impossibility."
  },
  {
    id: "a2_u12_l171_a10",
    type: "mediation",
    prompt: "Translate this deduction for your coworker: 'चाबियां मेज पर हैं, इसलिए वह अभी बाहर नहीं गया होगा।' Provide the best translation.",
    sourceSentence: "चाबियां मेज पर हैं, इसलिए वह अभी बाहर नहीं गया होगा।",
    targetSentence: "The keys are on the desk, so he can't have gone out yet.",
    options: [
      { id: "o1", text: "The keys are on the desk, so he can't have gone out yet.", isCorrect: true },
      { id: "o2", text: "Keys are on desk so he must went out yesterday.", isCorrect: false },
      { id: "o3", text: "He might went out because keys are deleted.", isCorrect: false }
    ],
    correctAnswer: "The keys are on the desk, so he can't have gone out yet.",
    explanation: "'can't have gone out yet' expresses strong logical negative deduction."
  }
];

// =========================================================================
// LESSON 172: Giving Professional Presentations & Structuring Speeches
// =========================================================================
const l172_practice: Exercise[] = [
  {
    id: "a2_u12_l172_p11",
    type: "reading",
    prompt: "Read the presentation transcript excerpt and answer the question:\n\"Speaker: 'Good morning everyone. Today, I'd like to talk about our new customer engagement strategy. First, I will outline the quarterly survey results. Next, I will explain our three proposed solutions. Finally, we will look at the budget requirements. If you have any questions, please feel free to ask at the end of the presentation.'\"\nWhen does the speaker invite the audience to ask questions?",
    sourceSentence: "When does the speaker invite the audience to ask questions?",
    targetSentence: "At the end of the presentation.",
    options: [
      { id: "o1", text: "At the end of the presentation.", isCorrect: true },
      { id: "o2", text: "During the first slide only.", isCorrect: false },
      { id: "o3", text: "Before the speaker begins talking.", isCorrect: false },
      { id: "o4", text: "In an email next year.", isCorrect: false }
    ],
    correctAnswer: "At the end of the presentation.",
    explanation: "The speaker explicitly notes: 'If you have any questions, please feel free to ask at the end of the presentation.'"
  },
  {
    id: "a2_u12_l172_p12",
    type: "speaking",
    prompt: "Speak clearly and confidently: Introduce a presentation agenda using signposting language.",
    sourceSentence: "First, I will present the survey findings. Then, I will move on to our marketing plan, and finally, I will summarize our key recommendations.",
    targetSentence: "First, I will present the survey findings. Then, I will move on to our marketing plan, and finally, I will summarize our key recommendations.",
    audioText: "First, I will present the survey findings. Then, I will move on to our marketing plan, and finally, I will summarize our key recommendations.",
    explanation: "Emphasize clear signposting pauses at 'First', 'Then', 'and finally'."
  },
  {
    id: "a2_u12_l172_p13",
    type: "match_pairs",
    prompt: "Match presentation signposting phrases with their communicative functions:",
    options: [
      { id: "m1", text: "To start with..." },
      { id: "m1_m", text: "introduce the first topic" },
      { id: "m2", text: "Turning now to..." },
      { id: "m2_m", text: "transition smoothly to the next point" },
      { id: "m3", text: "As you can see on this chart..." },
      { id: "m3_m", text: "direct attention to a visual aid" },
      { id: "m4", text: "To sum up..." },
      { id: "m4_m", text: "provide a concluding summary" }
    ]
  },
  {
    id: "a2_u12_l172_p14",
    type: "mediation",
    prompt: "Mediate this presentation opening in English: 'आज मैं हमारे नए उत्पाद की मुख्य विशेषताओं को पेश करना चाहूंगा।' Choose the best translation.",
    sourceSentence: "आज मैं हमारे नए उत्पाद की मुख्य विशेषताओं को पेश करना चाहूंगा।",
    targetSentence: "Today, I would like to present the key features of our new product.",
    options: [
      { id: "o1", text: "Today, I would like to present the key features of our new product.", isCorrect: true },
      { id: "o2", text: "Today, I will presented product yesterday to everyone.", isCorrect: false },
      { id: "o3", text: "I do not want to present features of new product.", isCorrect: false }
    ],
    correctAnswer: "Today, I would like to present the key features of our new product.",
    explanation: "'Today, I would like to present...' is the classic, professional presentation opening."
  },
  {
    id: "a2_u12_l172_p15",
    type: "error_correction",
    prompt: "Identify and correct the presentation transition error:",
    sourceSentence: "Now let's move in the next slide to see the quarterly revenue.",
    targetSentence: "Now let's move on to the next slide to see the quarterly revenue.",
    options: [
      { id: "o1", text: "Now let's move on to the next slide to see the quarterly revenue.", isCorrect: true },
      { id: "o2", text: "Now let's moving next slide to see the revenue.", isCorrect: false },
      { id: "o3", text: "Now let's move at the next slide to see revenue.", isCorrect: false }
    ],
    correctAnswer: "Now let's move on to the next slide to see the quarterly revenue.",
    explanation: "The correct collocation is 'move on to the next slide'."
  },
  {
    id: "a2_u12_l172_p16",
    type: "listening",
    prompt: "Listen to the presenter and identify what the chart illustrates:",
    audioText: "As you can see from this bar chart, mobile app downloads increased by thirty-five percent following our social media campaign in November.",
    targetSentence: "A 35% increase in mobile app downloads in November.",
    options: [
      { id: "o1", text: "A 35% increase in mobile app downloads in November.", isCorrect: true },
      { id: "o2", text: "A sharp decline in customer satisfaction.", isCorrect: false },
      { id: "o3", text: "The total cost of office supplies in November.", isCorrect: false },
      { id: "o4", text: "A cancellation of all social media accounts.", isCorrect: false }
    ],
    correctAnswer: "A 35% increase in mobile app downloads in November.",
    explanation: "The presenter states: 'mobile app downloads increased by thirty-five percent following our social media campaign in November.'"
  },
  {
    id: "a2_u12_l172_p17",
    type: "personal_production",
    prompt: "Write a 2-sentence conclusion for a business presentation summarizing findings and opening the floor to questions:",
    targetSentence: "In conclusion, expanding our digital sales channels will increase our customer reach. Thank you for your time, and I would now be glad to take any questions.",
    audioText: "In conclusion, expanding our digital sales channels will increase our customer reach. Thank you for your time, and I would now be glad to take any questions."
  },
  {
    id: "a2_u12_l172_p18",
    type: "dialogue_completion",
    prompt: "Complete the Q&A transition in a presentation:\nAudience Member: 'Can you clarify the delivery timeline?'\nPresenter: '________________________'",
    sourceSentence: "Can you clarify the delivery timeline?",
    targetSentence: "Certainly. That brings me to our implementation roadmap on slide six.",
    options: [
      { id: "o1", text: "Certainly. That brings me to our implementation roadmap on slide six.", isCorrect: true },
      { id: "o2", text: "I refuse to answer your question during my presentation.", isCorrect: false },
      { id: "o3", text: "The delivery was finished in 1890 yesterday.", isCorrect: false }
    ],
    correctAnswer: "Certainly. That brings me to our implementation roadmap on slide six.",
    explanation: "'Certainly. That brings me to...' is a smooth, polite way to bridge a question to visual evidence."
  },
  {
    id: "a2_u12_l172_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a visual reference statement:",
    sourceSentence: "This graph illustrates our quarterly profit growth over the past year.",
    targetSentence: "This graph illustrates our quarterly profit growth over the past year.",
    tokens: ["This", "graph", "illustrates", "our", "quarterly", "profit", "growth", "over", "the", "past", "year", "."],
    correctOrder: ["This", "graph", "illustrates", "our", "quarterly", "profit", "growth", "over", "the", "past", "year", "."],
    explanation: "'This graph illustrates our quarterly profit growth...' is a standard presentation sentence."
  },
  {
    id: "a2_u12_l172_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate presentation signpost:",
    sourceSentence: "To [blank] (sum / point) up, our team has achieved all quarterly objectives ahead of schedule.",
    targetSentence: "To sum up, our team has achieved all quarterly objectives ahead of schedule.",
    text: "To [blank] up, our team has achieved all quarterly objectives ahead of schedule.",
    options: [
      { id: "o1", text: "sum", isCorrect: true },
      { id: "o2", text: "point", isCorrect: false },
      { id: "o3", text: "tell", isCorrect: false },
      { id: "o4", text: "bring", isCorrect: false }
    ],
    correctAnswer: "sum",
    explanation: "'To sum up' is a standard concluding signpost."
  },
  {
    id: "a2_u12_l172_p21",
    type: "translation",
    prompt: "Translate to English: 'यदि आपका कोई प्रश्न है, तो कृपया अंत में पूछें।'",
    sourceSentence: "यदि आपका कोई प्रश्न है, तो कृपया अंत में पूछें।",
    targetSentence: "If you have any questions, please ask them at the end.",
    explanation: "'If you have any questions, please ask them at the end.' is polite presentation etiquette."
  },
  {
    id: "a2_u12_l172_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Conclude a business presentation and thank the audience.",
    sourceSentence: "That brings us to the end of my presentation. Thank you very much for your attention, and I look forward to your questions.",
    targetSentence: "That brings us to the end of my presentation. Thank you very much for your attention, and I look forward to your questions.",
    audioText: "That brings us to the end of my presentation. Thank you very much for your attention, and I look forward to your questions.",
    explanation: "Practice a warm, confident concluding tone."
  }
];

const l172_review: Exercise[] = [
  {
    id: "a2_u12_l172_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Expressing Intentions): Which structure correctly expresses a planned presentation topic?",
    options: [
      { id: "o1", text: "I am going to discuss three major market opportunities today.", isCorrect: true },
      { id: "o2", text: "I going to discuss three market opportunities.", isCorrect: false },
      { id: "o3", text: "I will discussing market opportunities yesterday.", isCorrect: false },
      { id: "o4", text: "I am discuss market opportunities.", isCorrect: false }
    ],
    correctAnswer: "I am going to discuss three major market opportunities today.",
    explanation: "'am going to discuss' correctly expresses a planned intention."
  },
  {
    id: "a2_u12_l172_r8",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct preposition: 'Let us take a closer look [blank] the demographic data.'",
    sourceSentence: "Let us take a closer look [blank] the demographic data.",
    targetSentence: "Let us take a closer look at the demographic data.",
    text: "Let us take a closer look [blank] the demographic data.",
    options: [
      { id: "o1", text: "at", isCorrect: true },
      { id: "o2", text: "on", isCorrect: false },
      { id: "o3", text: "in", isCorrect: false },
      { id: "o4", text: "to", isCorrect: false }
    ],
    correctAnswer: "at",
    explanation: "The phrase is 'take a look at something'."
  },
  {
    id: "a2_u12_l172_r9",
    type: "error_correction",
    prompt: "Correct the signposting error:",
    sourceSentence: "For start with, I would like to welcome all our international guests.",
    targetSentence: "To start with, I would like to welcome all our international guests.",
    options: [
      { id: "o1", text: "To start with, I would like to welcome all our international guests.", isCorrect: true },
      { id: "o2", text: "At start with, I would like to welcome guests.", isCorrect: false },
      { id: "o3", text: "In start with, I welcome all guests.", isCorrect: false }
    ],
    correctAnswer: "To start with, I would like to welcome all our international guests.",
    explanation: "The correct introductory signpost is 'To start with'."
  },
  {
    id: "a2_u12_l172_r10",
    type: "translation",
    prompt: "Translate to English: 'यह पाई चार्ट हमारे बजट आवंटन को दर्शाता है।'",
    sourceSentence: "यह पाई चार्ट हमारे बजट आवंटन को दर्शाता है।",
    targetSentence: "This pie chart shows our budget allocation.",
    explanation: "'This pie chart shows our budget allocation.' accurately describes a visual chart."
  }
];

const l172_assessment: Exercise[] = [
  {
    id: "a2_u12_l172_a7",
    type: "multiple_choice",
    prompt: "Which sequence correctly arranges the 3 core parts of a structured business presentation?",
    options: [
      { id: "o1", text: "Introduction and Agenda → Main Body with Evidence → Summary and Q&A", isCorrect: true },
      { id: "o2", text: "Q&A Session → Main Body → Welcome and Agenda", isCorrect: false },
      { id: "o3", text: "Closing Summary → Questions → First Slide", isCorrect: false },
      { id: "o4", text: "Detailed Graphs → Conclusion → Speaker Introduction", isCorrect: false }
    ],
    correctAnswer: "Introduction and Agenda → Main Body with Evidence → Summary and Q&A",
    explanation: "Standard presentation structure moves from Intro/Agenda to Main Body to Summary/Q&A."
  },
  {
    id: "a2_u12_l172_a8",
    type: "fill_blank",
    prompt: "Complete the transitional sentence:",
    sourceSentence: "Now that we have reviewed the problem, let us turn [blank] our proposed solutions.",
    targetSentence: "Now that we have reviewed the problem, let us turn to our proposed solutions.",
    text: "Now that we have reviewed the problem, let us turn [blank] our proposed solutions.",
    options: [
      { id: "o1", text: "to", isCorrect: true },
      { id: "o2", text: "on", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "in", isCorrect: false }
    ],
    correctAnswer: "to",
    explanation: "'turn to + noun' is used to transition attention to a new topic."
  },
  {
    id: "a2_u12_l172_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence presentation opening outlining your talk and telling the audience when to ask questions.",
    sourceSentence: "Good afternoon everyone. Today I will present our customer feedback analysis, and I will be delighted to answer any questions at the end.",
    targetSentence: "Good afternoon everyone. Today I will present our customer feedback analysis, and I will be delighted to answer any questions at the end.",
    audioText: "Good afternoon everyone. Today I will present our customer feedback analysis, and I will be delighted to answer any questions at the end.",
    explanation: "Demonstrate clear presentation delivery and polite audience guidance."
  },
  {
    id: "a2_u12_l172_a10",
    type: "mediation",
    prompt: "Translate this presentation summary for an overseas partner: 'संक्षेप में, हमारे नए सिस्टम ने त्रुटियों को कम किया है और उत्पादकता बढ़ाई है।' Provide the best translation.",
    sourceSentence: "संक्षेप में, हमारे नए सिस्टम ने त्रुटियों को कम किया है और उत्पादकता बढ़ाई है।",
    targetSentence: "In summary, our new system has reduced errors and increased productivity.",
    options: [
      { id: "o1", text: "In summary, our new system has reduced errors and increased productivity.", isCorrect: true },
      { id: "o2", text: "To start with, system will reduce errors next year.", isCorrect: false },
      { id: "o3", text: "In conclusion, we deleted system because errors increased.", isCorrect: false }
    ],
    correctAnswer: "In summary, our new system has reduced errors and increased productivity.",
    explanation: "'In summary' captures 'संक्षेप में', followed by Present Perfect for completed achievements."
  }
];

// =========================================================================
// LESSON 173: Decision Making, Compromise & Constructive Negotiation
// =========================================================================
const l173_practice: Exercise[] = [
  {
    id: "a2_u12_l173_p11",
    type: "reading",
    prompt: "Read the negotiation dialogue summary and answer the question:\n\"Contract Negotiation: Company A requested a 15% discount for a bulk purchase of 1,000 units. Company B explained that a 15% discount would be too steep for their profit margins. However, Company B offered an 8% discount along with free expedited shipping and extended warranty coverage. Company A agreed that this was a fair compromise.\"\nWhat compromise did Company B offer?",
    sourceSentence: "What compromise did Company B offer?",
    targetSentence: "An 8% discount with free expedited shipping and extended warranty.",
    options: [
      { id: "o1", text: "An 8% discount with free expedited shipping and extended warranty.", isCorrect: true },
      { id: "o2", text: "A 50% discount with no warranty.", isCorrect: false },
      { id: "o3", text: "They cancelled the contract completely.", isCorrect: false },
      { id: "o4", text: "A 15% discount with paid standard shipping.", isCorrect: false }
    ],
    correctAnswer: "An 8% discount with free expedited shipping and extended warranty.",
    explanation: "Company B offered 'an 8% discount along with free expedited shipping and extended warranty coverage.'"
  },
  {
    id: "a2_u12_l173_p12",
    type: "speaking",
    prompt: "Speak clearly and diplomatically: Propose a compromise during a project negotiation.",
    sourceSentence: "We understand your budget constraints. What if we reduced the initial scope and delivered the advanced features in phase two?",
    targetSentence: "We understand your budget constraints. What if we reduced the initial scope and delivered the advanced features in phase two?",
    audioText: "We understand your budget constraints. What if we reduced the initial scope and delivered the advanced features in phase two?",
    explanation: "Practice empathetic intonation on 'We understand your constraints' followed by constructive 'What if we reduced...'."
  },
  {
    id: "a2_u12_l173_p13",
    type: "match_pairs",
    prompt: "Match negotiation chunks with their strategic functions:",
    options: [
      { id: "m1", text: "meet in the middle" },
      { id: "m1_m", text: "reach an equal compromise between two positions" },
      { id: "m2", text: "I would rather..." },
      { id: "m2_m", text: "state a polite preference" },
      { id: "m3", text: "How about we..." },
      { id: "m3_m", text: "suggest an alternative solution" },
      { id: "m4", text: "We could agree to that provided..." },
      { id: "m4_m", text: "accept a proposal with a specific condition" }
    ]
  },
  {
    id: "a2_u12_l173_p14",
    type: "mediation",
    prompt: "Mediate this compromise proposal into English for a client: 'यदि आप समय-सीमा को एक सप्ताह बढ़ा दें, तो हम अतिरिक्त परीक्षण शामिल कर सकते हैं।' Choose the best translation.",
    sourceSentence: "यदि आप समय-सीमा को एक सप्ताह बढ़ा दें, तो हम अतिरिक्त परीक्षण शामिल कर सकते हैं।",
    targetSentence: "If you extend the deadline by one week, we can include additional testing.",
    options: [
      { id: "o1", text: "If you extend the deadline by one week, we can include additional testing.", isCorrect: true },
      { id: "o2", text: "We will cancel testing unless deadline extended yesterday.", isCorrect: false },
      { id: "o3", text: "Extend deadline because we do not want to test.", isCorrect: false }
    ],
    correctAnswer: "If you extend the deadline by one week, we can include additional testing.",
    explanation: "First conditional negotiation offer: 'If you extend..., we can include...'."
  },
  {
    id: "a2_u12_l173_p15",
    type: "error_correction",
    prompt: "Identify and correct the preference grammar error:",
    sourceSentence: "I would rather to discuss the budget before finalizing the contract.",
    targetSentence: "I would rather discuss the budget before finalizing the contract.",
    options: [
      { id: "o1", text: "I would rather discuss the budget before finalizing the contract.", isCorrect: true },
      { id: "o2", text: "I would rather discussing budget before finalizing contract.", isCorrect: false },
      { id: "o3", text: "I would rather to discussed budget before contract.", isCorrect: false }
    ],
    correctAnswer: "I would rather discuss the budget before finalizing the contract.",
    explanation: "'would rather' is followed directly by the bare infinitive ('discuss'), NOT 'to + verb'."
  },
  {
    id: "a2_u12_l173_p16",
    type: "listening",
    prompt: "Listen to the negotiation discussion and identify the agreed compromise:",
    audioText: "Client: 'We cannot pay fifteen thousand dollars upfront.' Agency: 'How about a fifty percent deposit now, and the remaining fifty percent upon final delivery?' Client: 'That sounds like a fair compromise.'",
    targetSentence: "50% deposit now, and 50% upon final delivery.",
    options: [
      { id: "o1", text: "50% deposit now, and 50% upon final delivery.", isCorrect: true },
      { id: "o2", text: "100% payment before any work begins.", isCorrect: false },
      { id: "o3", text: "The agency agreed to do the project for free.", isCorrect: false },
      { id: "o4", text: "The client cancelled the project completely.", isCorrect: false }
    ],
    correctAnswer: "50% deposit now, and 50% upon final delivery.",
    explanation: "The agency suggests a 50% deposit now with the balance on delivery, which the client accepts as a fair compromise."
  },
  {
    id: "a2_u12_l173_p17",
    type: "personal_production",
    prompt: "Write 2 sentences proposing a collaborative compromise on a project deadline or budget:",
    targetSentence: "I understand that you need the final report by Wednesday. What if we submit an executive summary on Wednesday and the full detailed report on Friday?",
    audioText: "I understand that you need the final report by Wednesday. What if we submit an executive summary on Wednesday and the full detailed report on Friday?"
  },
  {
    id: "a2_u12_l173_p18",
    type: "dialogue_completion",
    prompt: "Complete the diplomatic negotiation exchange:\nPartner: 'We are concerned about the tight delivery schedule.'\nTeam Lead: '________________________'",
    sourceSentence: "We are concerned about the tight delivery schedule.",
    targetSentence: "We understand your concern. Would it be possible to divide the launch into two phases?",
    options: [
      { id: "o1", text: "We understand your concern. Would it be possible to divide the launch into two phases?", isCorrect: true },
      { id: "o2", text: "You must work 24 hours a day without sleeping.", isCorrect: false },
      { id: "o3", text: "We delivered everything last year already.", isCorrect: false }
    ],
    correctAnswer: "We understand your concern. Would it be possible to divide the launch into two phases?",
    explanation: "'We understand your concern. Would it be possible to...?' is tactful and solutions-oriented."
  },
  {
    id: "a2_u12_l173_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite compromise suggestion:",
    sourceSentence: "Why don't we meet halfway on the pricing proposal?",
    targetSentence: "Why don't we meet halfway on the pricing proposal?",
    tokens: ["Why", "don't", "we", "meet", "halfway", "on", "the", "pricing", "proposal", "?"],
    correctOrder: ["Why", "don't", "we", "meet", "halfway", "on", "the", "pricing", "proposal", "?"],
    explanation: "'Why don't we meet halfway on...?' is a classic collaborative negotiation idiom."
  },
  {
    id: "a2_u12_l173_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct preference phrase:",
    sourceSentence: "I would [blank] (rather / prefer) focus on quality rather than rushing the release.",
    targetSentence: "I would rather focus on quality rather than rushing the release.",
    text: "I would [blank] focus on quality rather than rushing the release.",
    options: [
      { id: "o1", text: "rather", isCorrect: true },
      { id: "o2", text: "prefer to", isCorrect: false },
      { id: "o3", text: "like to", isCorrect: false },
      { id: "o4", text: "better", isCorrect: false }
    ],
    correctAnswer: "rather",
    explanation: "'would rather + bare verb ('focus')' is the correct construction."
  },
  {
    id: "a2_u12_l173_p21",
    type: "translation",
    prompt: "Translate to English: 'आइए एक ऐसा समाधान खोजें जो दोनों पक्षों के लिए काम करे।'",
    sourceSentence: "आइए एक ऐसा समाधान खोजें जो दोनों पक्षों के लिए काम करे।",
    targetSentence: "Let us find a solution that works for both sides.",
    explanation: "'Let us find a solution that works for both sides.' is a constructive negotiation phrase."
  },
  {
    id: "a2_u12_l173_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Accept a compromise proposal politely.",
    sourceSentence: "That sounds like a fair compromise. As long as you confirm the revised delivery date, we have a deal.",
    targetSentence: "That sounds like a fair compromise. As long as you confirm the revised delivery date, we have a deal.",
    audioText: "That sounds like a fair compromise. As long as you confirm the revised delivery date, we have a deal.",
    explanation: "Practice confident, professional delivery."
  }
];

const l173_review: Exercise[] = [
  {
    id: "a2_u12_l173_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Constructive Feedback): Which phrase is best for offering tactful, constructive feedback?",
    options: [
      { id: "o1", text: "You did a great job on the design; perhaps we could simplify the navigation menu slightly.", isCorrect: true },
      { id: "o2", text: "This entire website looks terrible and useless.", isCorrect: false },
      { id: "o3", text: "You must never design anything again.", isCorrect: false },
      { id: "o4", text: "I do not care about this project.", isCorrect: false }
    ],
    correctAnswer: "You did a great job on the design; perhaps we could simplify the navigation menu slightly.",
    explanation: "Praise followed by a gentle suggestion ('perhaps we could...') represents constructive feedback."
  },
  {
    id: "a2_u12_l173_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'How about [blank] (schedule / scheduling) a follow-up call tomorrow?'",
    sourceSentence: "How about [blank] a follow-up call tomorrow?",
    targetSentence: "How about scheduling a follow-up call tomorrow?",
    text: "How about [blank] a follow-up call tomorrow?",
    options: [
      { id: "o1", text: "scheduling", isCorrect: true },
      { id: "o2", text: "schedule", isCorrect: false },
      { id: "o3", text: "scheduled", isCorrect: false },
      { id: "o4", text: "to schedule", isCorrect: false }
    ],
    correctAnswer: "scheduling",
    explanation: "'How about + gerund (-ing)' is the correct suggestion pattern."
  },
  {
    id: "a2_u12_l173_r9",
    type: "error_correction",
    prompt: "Correct the compromise clause:",
    sourceSentence: "We could agree to that provided if you lower the price by five percent.",
    targetSentence: "We could agree to that provided that you lower the price by five percent.",
    options: [
      { id: "o1", text: "We could agree to that provided that you lower the price by five percent.", isCorrect: true },
      { id: "o2", text: "We could agree to that provided if you lowering price.", isCorrect: false },
      { id: "o3", text: "We could agree to that provided you lowered price yesterday.", isCorrect: false }
    ],
    correctAnswer: "We could agree to that provided that you lower the price by five percent.",
    explanation: "Use 'provided that' (do not mix 'provided' with 'if')."
  },
  {
    id: "a2_u12_l173_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या दोनों टीमों के लिए बीच का रास्ता निकालना संभव होगा?'",
    sourceSentence: "क्या दोनों टीमों के लिए बीच का रास्ता निकालना संभव होगा?",
    targetSentence: "Would it be possible for both teams to find a middle ground?",
    explanation: "'find a middle ground' or 'meet halfway' captures 'बीच का रास्ता निकालना'."
  }
];

const l173_assessment: Exercise[] = [
  {
    id: "a2_u12_l173_a7",
    type: "multiple_choice",
    prompt: "Which statement represents a constructive negotiation approach?",
    options: [
      { id: "o1", text: "If we adjust the payment schedule, both parties can meet their cash flow needs.", isCorrect: true },
      { id: "o2", text: "Take our offer immediately or we will walk away forever.", isCorrect: false },
      { id: "o3", text: "We refuse to discuss any terms with you.", isCorrect: false },
      { id: "o4", text: "Our proposal cannot be changed under any circumstances.", isCorrect: false }
    ],
    correctAnswer: "If we adjust the payment schedule, both parties can meet their cash flow needs.",
    explanation: "Focusing on mutual benefit ('both parties can meet their needs') is the essence of constructive negotiation."
  },
  {
    id: "a2_u12_l173_a8",
    type: "fill_blank",
    prompt: "Complete the negotiation offer with the correct modal:",
    sourceSentence: "We [blank] offer a ten percent discount if you sign a twelve-month service contract.",
    targetSentence: "We could offer a ten percent discount if you sign a twelve-month service contract.",
    text: "We [blank] offer a ten percent discount if you sign a twelve-month service contract.",
    options: [
      { id: "o1", text: "could", isCorrect: true },
      { id: "o2", text: "must", isCorrect: false },
      { id: "o3", text: "should to", isCorrect: false },
      { id: "o4", text: "ought", isCorrect: false }
    ],
    correctAnswer: "could",
    explanation: "'could offer' politely expresses a conditional offer in negotiation."
  },
  {
    id: "a2_u12_l173_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence negotiation proposal offering a compromise on a delivery timeline.",
    sourceSentence: "We cannot deliver all one thousand units by Monday. However, we could deliver five hundred units on Monday and the remaining five hundred by Thursday.",
    targetSentence: "We cannot deliver all one thousand units by Monday. However, we could deliver five hundred units on Monday and the remaining five hundred by Thursday.",
    audioText: "We cannot deliver all one thousand units by Monday. However, we could deliver five hundred units on Monday and the remaining five hundred by Thursday.",
    explanation: "Demonstrate polite assertion and clear presentation of alternative solutions."
  },
  {
    id: "a2_u12_l173_a10",
    type: "mediation",
    prompt: "Translate this compromise agreement for an international partner: 'हम इस शर्त पर सहमत हैं कि आप हमें शुक्रवार तक संशोधित अनुबंध भेज दें।' Provide the best translation.",
    sourceSentence: "हम इस शर्त पर सहमत हैं कि आप हमें शुक्रवार तक संशोधित अनुबंध भेज दें।",
    targetSentence: "We agree on the condition that you send us the revised contract by Friday.",
    options: [
      { id: "o1", text: "We agree on the condition that you send us the revised contract by Friday.", isCorrect: true },
      { id: "o2", text: "We do not agree because contract was sent yesterday.", isCorrect: false },
      { id: "o3", text: "We agree unless you send contract next year.", isCorrect: false }
    ],
    correctAnswer: "We agree on the condition that you send us the revised contract by Friday.",
    explanation: "'on the condition that you send...' accurately renders 'इस शर्त पर सहमत हैं कि आप भेज दें'."
  }
];

// =========================================================================
// LESSON 174: Explaining Cause, Effect & Business Impact
// =========================================================================
const l174_practice: Exercise[] = [
  {
    id: "a2_u12_l174_p11",
    type: "reading",
    prompt: "Read the quarterly business impact report and answer the question:\n\"Business Review: Due to an unexpected rise in fuel prices, our shipping expenses increased by 12% in Q3. As a result, operating profits were slightly lower than projected. Consequently, the management board decided to optimize delivery routes. Therefore, shipping costs are expected to decrease by 8% in the upcoming quarter.\"\nWhy did shipping expenses increase by 12% in Q3?",
    sourceSentence: "Why did shipping expenses increase by 12% in Q3?",
    targetSentence: "Due to an unexpected rise in fuel prices.",
    options: [
      { id: "o1", text: "Due to an unexpected rise in fuel prices.", isCorrect: true },
      { id: "o2", text: "Because the management board cancelled all deliveries.", isCorrect: false },
      { id: "o3", text: "As a result of hiring too many drivers.", isCorrect: false },
      { id: "o4", text: "Because delivery routes were already optimized.", isCorrect: false }
    ],
    correctAnswer: "Due to an unexpected rise in fuel prices.",
    explanation: "The report states: 'Due to an unexpected rise in fuel prices, our shipping expenses increased by 12% in Q3.'"
  },
  {
    id: "a2_u12_l174_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Explain cause and effect in a workplace context using 'due to' and 'as a result'.",
    sourceSentence: "Due to severe winter storms, flight operations were suspended. As a result, several international shipments were delayed by two days.",
    targetSentence: "Due to severe winter storms, flight operations were suspended. As a result, several international shipments were delayed by two days.",
    audioText: "Due to severe winter storms, flight operations were suspended. As a result, several international shipments were delayed by two days.",
    explanation: "Notice the noun phrase after 'due to' ('severe winter storms') and the transition 'As a result'."
  },
  {
    id: "a2_u12_l174_p13",
    type: "match_pairs",
    prompt: "Match cause and effect connectors with their grammatical patterns:",
    options: [
      { id: "m1", text: "due to / because of" },
      { id: "m1_m", text: "followed by a noun phrase or gerund" },
      { id: "m2", text: "because / since" },
      { id: "m2_m", text: "followed by a subject + verb clause" },
      { id: "m3", text: "as a result / consequently" },
      { id: "m3_m", text: "introduces the consequence in a new sentence" },
      { id: "m4", text: "therefore" },
      { id: "m4_m", text: "links logical conclusion to a previous premise" }
    ]
  },
  {
    id: "a2_u12_l174_p14",
    type: "mediation",
    prompt: "Mediate this business update in English for your manager: 'भारी बारिश के कारण निर्माण कार्य रुक गया था। परिणामस्वरूप, परियोजना में दो सप्ताह की देरी हुई।' Choose the best translation.",
    sourceSentence: "भारी बारिश के कारण निर्माण कार्य रुक गया था। परिणामस्वरूप, परियोजना में दो सप्ताह की देरी हुई।",
    targetSentence: "Construction was halted due to heavy rain. As a result, the project was delayed by two weeks.",
    options: [
      { id: "o1", text: "Construction was halted due to heavy rain. As a result, the project was delayed by two weeks.", isCorrect: true },
      { id: "o2", text: "Construction stopped because rain will fall tomorrow. Therefore project finished.", isCorrect: false },
      { id: "o3", text: "Heavy rain was halted due to construction delays.", isCorrect: false }
    ],
    correctAnswer: "Construction was halted due to heavy rain. As a result, the project was delayed by two weeks.",
    explanation: "'due to heavy rain' (cause with noun) and 'As a result, the project was delayed' (consequence) accurately convey the message."
  },
  {
    id: "a2_u12_l174_p15",
    type: "error_correction",
    prompt: "Identify and correct the cause/effect connector error:",
    sourceSentence: "The office was closed due to it was snowing heavily.",
    targetSentence: "The office was closed because it was snowing heavily.",
    options: [
      { id: "o1", text: "The office was closed because it was snowing heavily.", isCorrect: true },
      { id: "o2", text: "The office was closed due to of heavy snow.", isCorrect: false },
      { id: "o3", text: "The office closed due that it snowed.", isCorrect: false }
    ],
    correctAnswer: "The office was closed because it was snowing heavily.",
    explanation: "Use 'because' before a full clause with subject and verb ('it was snowing'). 'Due to' requires a noun phrase ('due to heavy snow')."
  },
  {
    id: "a2_u12_l174_p16",
    type: "listening",
    prompt: "Listen to the financial update and determine the consequence of automating customer support:",
    audioText: "By automating routine customer support inquiries, response times dropped by fifty percent. Consequently, overall customer satisfaction ratings reached a record high.",
    targetSentence: "Customer satisfaction ratings reached a record high.",
    options: [
      { id: "o1", text: "Customer satisfaction ratings reached a record high.", isCorrect: true },
      { id: "o2", text: "Customer support was shut down completely.", isCorrect: false },
      { id: "o3", text: "Response times became twice as slow.", isCorrect: false },
      { id: "o4", text: "The company lost 50% of its customers.", isCorrect: false }
    ],
    correctAnswer: "Customer satisfaction ratings reached a record high.",
    explanation: "The speaker confirms: 'Consequently, overall customer satisfaction ratings reached a record high.'"
  },
  {
    id: "a2_u12_l174_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a problem and its consequence using 'because of' and 'therefore':",
    targetSentence: "Because of heavy traffic on the expressway, our team arrived twenty minutes late. Therefore, the manager rescheduled the morning presentation to 11:00 AM.",
    audioText: "Because of heavy traffic on the expressway, our team arrived twenty minutes late. Therefore, the manager rescheduled the morning presentation to 11:00 AM."
  },
  {
    id: "a2_u12_l174_p18",
    type: "dialogue_completion",
    prompt: "Complete the business impact discussion:\nExecutive: 'Why did our digital subscription numbers grow so rapidly in Q4?'\nMarketing Lead: '________________________'",
    sourceSentence: "Why did our digital subscription numbers grow so rapidly in Q4?",
    targetSentence: "We launched an targeted influencer campaign in October. As a result, our website traffic doubled.",
    options: [
      { id: "o1", text: "We launched an targeted influencer campaign in October. As a result, our website traffic doubled.", isCorrect: true },
      { id: "o2", text: "Because we stopped all marketing activities completely.", isCorrect: false },
      { id: "o3", text: "Therefore subscriptions decreased by 100%.", isCorrect: false }
    ],
    correctAnswer: "We launched an targeted influencer campaign in October. As a result, our website traffic doubled.",
    explanation: "'As a result, our website traffic doubled' explains the direct business impact."
  },
  {
    id: "a2_u12_l174_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a cause and effect statement with 'consequently':",
    sourceSentence: "Sales increased significantly; consequently, we hired three new account managers.",
    targetSentence: "Sales increased significantly; consequently, we hired three new account managers.",
    tokens: ["Sales", "increased", "significantly;", "consequently,", "we", "hired", "three", "new", "account", "managers", "."],
    correctOrder: ["Sales", "increased", "significantly;", "consequently,", "we", "hired", "three", "new", "account", "managers", "."],
    explanation: "Structure: Independent clause + semicolon + consequently, + result clause."
  },
  {
    id: "a2_u12_l174_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate cause preposition:",
    sourceSentence: "The outdoor concert was cancelled [blank] (because of / because) the thunderstorm.",
    targetSentence: "The outdoor concert was cancelled because of the thunderstorm.",
    text: "The outdoor concert was cancelled [blank] the thunderstorm.",
    options: [
      { id: "o1", text: "because of", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "therefore", isCorrect: false },
      { id: "o4", text: "as a result", isCorrect: false }
    ],
    correctAnswer: "because of",
    explanation: "'because of' is used before a noun phrase ('the thunderstorm')."
  },
  {
    id: "a2_u12_l174_p21",
    type: "translation",
    prompt: "Translate to English: 'तकनीकी खराबी के कारण वेबसाइट अस्थायी रूप से अनुपलब्ध थी।'",
    sourceSentence: "तकनीकी खराबी के कारण वेबसाइट अस्थायी रूप से अनुपलब्ध थी।",
    targetSentence: "The website was temporarily unavailable due to a technical glitch.",
    explanation: "'due to a technical glitch' accurately translates 'तकनीकी खराबी के कारण'."
  },
  {
    id: "a2_u12_l174_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain the impact of a new company policy.",
    sourceSentence: "We simplified our return process last month. Consequently, customer trust has improved and repeat purchases have risen.",
    targetSentence: "We simplified our return process last month. Consequently, customer trust has improved and repeat purchases have risen.",
    audioText: "We simplified our return process last month. Consequently, customer trust has improved and repeat purchases have risen.",
    explanation: "Practice natural pause before 'Consequently' and clear delivery."
  }
];

const l174_review: Exercise[] = [
  {
    id: "a2_u12_l174_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Explaining Reasons): Which sentence correctly uses 'because of' vs 'because'?",
    options: [
      { id: "o1", text: "We postponed the flight because of bad weather, because visibility was very low.", isCorrect: true },
      { id: "o2", text: "We postponed flight because bad weather, because of visibility was low.", isCorrect: false },
      { id: "o3", text: "We postponed flight due to visibility was low.", isCorrect: false },
      { id: "o4", text: "Because of it rained, we stayed indoors.", isCorrect: false }
    ],
    correctAnswer: "We postponed the flight because of bad weather, because visibility was very low.",
    explanation: "'because of + noun' ('bad weather') and 'because + clause' ('visibility was very low')."
  },
  {
    id: "a2_u12_l174_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'The store ran out of stock; [blank] (therefore / due to), customers had to wait for backorders.'",
    sourceSentence: "The store ran out of stock; [blank] customers had to wait for backorders.",
    targetSentence: "The store ran out of stock; therefore, customers had to wait for backorders.",
    text: "The store ran out of stock; [blank] customers had to wait for backorders.",
    options: [
      { id: "o1", text: "therefore", isCorrect: true },
      { id: "o2", text: "due to", isCorrect: false },
      { id: "o3", text: "because of", isCorrect: false },
      { id: "o4", text: "unless", isCorrect: false }
    ],
    correctAnswer: "therefore",
    explanation: "'therefore' functions as a transition introducing the consequence."
  },
  {
    id: "a2_u12_l174_r9",
    type: "error_correction",
    prompt: "Correct the connector error in this business summary:",
    sourceSentence: "The system crashed because of the server overheated.",
    targetSentence: "The system crashed because the server overheated.",
    options: [
      { id: "o1", text: "The system crashed because the server overheated.", isCorrect: true },
      { id: "o2", text: "The system crashed due to server overheated.", isCorrect: false },
      { id: "o3", text: "The system crashed as result the server overheated.", isCorrect: false }
    ],
    correctAnswer: "The system crashed because the server overheated.",
    explanation: "'the server overheated' is a full subject-verb clause, so use 'because' (not 'because of')."
  },
  {
    id: "a2_u12_l174_r10",
    type: "translation",
    prompt: "Translate to English: 'लागत में कमी के परिणामस्वरूप हमारा लाभ बढ़ गया।'",
    sourceSentence: "लागत में कमी के परिणामस्वरूप हमारा लाभ बढ़ गया।",
    targetSentence: "As a result of cost reductions, our profit increased.",
    explanation: "'As a result of cost reductions, our profit increased.' expresses direct consequence."
  }
];

const l174_assessment: Exercise[] = [
  {
    id: "a2_u12_l174_a7",
    type: "multiple_choice",
    prompt: "Which transition best connects these two sentences: 'Our team completed the software testing early. [Connector], we were able to launch the product ahead of schedule.'",
    options: [
      { id: "o1", text: "As a result", isCorrect: true },
      { id: "o2", text: "Although", isCorrect: false },
      { id: "o3", text: "Unless", isCorrect: false },
      { id: "o4", text: "Due to", isCorrect: false }
    ],
    correctAnswer: "As a result",
    explanation: "'As a result' introduces the positive outcome resulting from early testing."
  },
  {
    id: "a2_u12_l174_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct prepositional cause linker:",
    sourceSentence: "Production was temporarily suspended [blank] a power outage.",
    targetSentence: "Production was temporarily suspended due to a power outage.",
    text: "Production was temporarily suspended [blank] a power outage.",
    options: [
      { id: "o1", text: "due to", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "therefore", isCorrect: false },
      { id: "o4", text: "consequently", isCorrect: false }
    ],
    correctAnswer: "due to",
    explanation: "'due to + noun phrase ('a power outage')' expresses cause."
  },
  {
    id: "a2_u12_l174_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence explanation of a workplace improvement and its positive business impact.",
    sourceSentence: "We invested in automated testing tools last quarter. Consequently, software bug resolution time decreased by forty percent.",
    targetSentence: "We invested in automated testing tools last quarter. Consequently, software bug resolution time decreased by forty percent.",
    audioText: "We invested in automated testing tools last quarter. Consequently, software bug resolution time decreased by forty percent.",
    explanation: "Demonstrate accurate use of cause-and-effect connectors ('Consequently')."
  },
  {
    id: "a2_u12_l174_a10",
    type: "mediation",
    prompt: "Translate this corporate announcement for foreign team members: 'कर्मचारियों के प्रशिक्षण के कारण ग्राहक शिकायतों में भारी कमी आई है।' Provide the best translation.",
    sourceSentence: "कर्मचारियों के प्रशिक्षण के कारण ग्राहक शिकायतों में भारी कमी आई है।",
    targetSentence: "Customer complaints have decreased significantly due to staff training.",
    options: [
      { id: "o1", text: "Customer complaints have decreased significantly due to staff training.", isCorrect: true },
      { id: "o2", text: "Staff training was cancelled because complaints increased yesterday.", isCorrect: false },
      { id: "o3", text: "Customer complaints will increase unless staff is trained.", isCorrect: false }
    ],
    correctAnswer: "Customer complaints have decreased significantly due to staff training.",
    explanation: "'have decreased significantly due to staff training' accurately translates the cause and recent result."
  }
];

// =========================================================================
// LESSON 175: Cross-Cultural Communication, Etiquette & Polite Inquiries
// =========================================================================
const l175_practice: Exercise[] = [
  {
    id: "a2_u12_l175_p11",
    type: "reading",
    prompt: "Read the international business etiquette guideline and answer the question:\n\"Cross-Cultural Communication Guide: When collaborating with colleagues from diverse backgrounds, avoid direct commands such as 'Send me the file now.' Instead, use polite indirect inquiry structures like 'Could you please let me know when the file will be ready?' or 'Would you mind sharing the latest draft?' Always confirm agreements in writing following virtual meetings to ensure mutual clarity.\"\nWhy does the guide recommend using indirect inquiries?",
    sourceSentence: "Why does the guide recommend using indirect inquiries?",
    targetSentence: "To maintain professional politeness and avoid sounding demanding across cultures.",
    options: [
      { id: "o1", text: "To maintain professional politeness and avoid sounding demanding across cultures.", isCorrect: true },
      { id: "o2", text: "Because direct commands are illegal in business.", isCorrect: false },
      { id: "o3", text: "To make emails much longer and harder to read.", isCorrect: false },
      { id: "o4", text: "Because international colleagues do not understand English.", isCorrect: false }
    ],
    correctAnswer: "To maintain professional politeness and avoid sounding demanding across cultures.",
    explanation: "The guide advises indirect structures to ensure polite, respectful collaboration across diverse cultures."
  },
  {
    id: "a2_u12_l175_p12",
    type: "speaking",
    prompt: "Speak politely and diplomatically: Transform a direct question into an indirect inquiry.",
    sourceSentence: "Could you please tell me what time the international conference call is scheduled to start?",
    targetSentence: "Could you please tell me what time the international conference call is scheduled to start?",
    audioText: "Could you please tell me what time the international conference call is scheduled to start?",
    explanation: "Notice the normal statement word order in the embedded clause ('the conference call is scheduled to start')."
  },
  {
    id: "a2_u12_l175_p13",
    type: "match_pairs",
    prompt: "Match indirect question frames with their standard structures:",
    options: [
      { id: "m1", text: "Could you tell me..." },
      { id: "m1_m", text: "followed by question word + subject + verb" },
      { id: "m2", text: "Do you know if / whether..." },
      { id: "m2_m", text: "used for yes/no embedded questions" },
      { id: "m3", text: "Would you mind..." },
      { id: "m3_m", text: "followed by gerund (-ing) for polite requests" },
      { id: "m4", text: "I was wondering if..." },
      { id: "m4_m", text: "very polite indirect opening frame" }
    ]
  },
  {
    id: "a2_u12_l175_p14",
    type: "mediation",
    prompt: "Help your colleague make a polite inquiry in English: 'क्या आप मुझे बता सकते हैं कि बैठक कहाँ आयोजित की जाएगी?' Choose the best translation.",
    sourceSentence: "क्या आप मुझे बता सकते हैं कि बैठक कहाँ आयोजित की जाएगी?",
    targetSentence: "Could you tell me where the meeting will be held?",
    options: [
      { id: "o1", text: "Could you tell me where the meeting will be held?", isCorrect: true },
      { id: "o2", text: "Could you tell me where will be held the meeting?", isCorrect: false },
      { id: "o3", text: "Where the meeting will held tell me now?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me where the meeting will be held?",
    explanation: "Indirect question word order: 'where + subject ('the meeting') + verb ('will be held')'."
  },
  {
    id: "a2_u12_l175_p15",
    type: "error_correction",
    prompt: "Identify and correct the word order error in this indirect question:",
    sourceSentence: "Do you know where is the main conference room?",
    targetSentence: "Do you know where the main conference room is?",
    options: [
      { id: "o1", text: "Do you know where the main conference room is?", isCorrect: true },
      { id: "o2", text: "Do you know where is conference room?", isCorrect: false },
      { id: "o3", text: "Where is main conference room do you know?", isCorrect: false }
    ],
    correctAnswer: "Do you know where the main conference room is?",
    explanation: "In indirect questions, use statement word order: 'where + subject + verb' ('where the main conference room is')."
  },
  {
    id: "a2_u12_l175_p16",
    type: "listening",
    prompt: "Listen to the international team meeting and identify the polite request:",
    audioText: "Excuse me Hiroshi, would you mind sharing your screen so that all delegates can review the design wireframes together?",
    targetSentence: "Would you mind sharing your screen?",
    options: [
      { id: "o1", text: "Would you mind sharing your screen?", isCorrect: true },
      { id: "o2", text: "Turn off your computer immediately.", isCorrect: false },
      { id: "o3", text: "Leave the virtual meeting room now.", isCorrect: false },
      { id: "o4", text: "Delete all wireframes from the server.", isCorrect: false }
    ],
    correctAnswer: "Would you mind sharing your screen?",
    explanation: "The speaker politely asks: 'would you mind sharing your screen...'."
  },
  {
    id: "a2_u12_l175_p17",
    type: "personal_production",
    prompt: "Write 2 polite indirect inquiries you would use when contacting an international business partner for the first time:",
    targetSentence: "Could you please let me know what time would be convenient for a brief introductory call? I was also wondering if you could share your team's project guidelines.",
    audioText: "Could you please let me know what time would be convenient for a brief introductory call? I was also wondering if you could share your team's project guidelines."
  },
  {
    id: "a2_u12_l175_p18",
    type: "dialogue_completion",
    prompt: "Complete the cross-cultural inquiry dialogue:\nVisitor: 'Excuse me, I was wondering if the reception desk is open during lunchtime.'\nHost: '________________________'",
    sourceSentence: "Excuse me, I was wondering if the reception desk is open during lunchtime.",
    targetSentence: "Yes, there is always a staff member available at reception throughout the day.",
    options: [
      { id: "o1", text: "Yes, there is always a staff member available at reception throughout the day.", isCorrect: true },
      { id: "o2", text: "No, ask someone else because I am busy.", isCorrect: false },
      { id: "o3", text: "The reception was closed in 2020 yesterday.", isCorrect: false }
    ],
    correctAnswer: "Yes, there is always a staff member available at reception throughout the day.",
    explanation: "A warm, helpful response matches the polite indirect inquiry."
  },
  {
    id: "a2_u12_l175_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite indirect question:",
    sourceSentence: "I was wondering if you could clarify the project scope.",
    targetSentence: "I was wondering if you could clarify the project scope.",
    tokens: ["I", "was", "wondering", "if", "you", "could", "clarify", "the", "project", "scope", "."],
    correctOrder: ["I", "was", "wondering", "if", "you", "could", "clarify", "the", "project", "scope", "."],
    explanation: "'I was wondering if you could + base verb...' is an exceptionally polite indirect frame."
  },
  {
    id: "a2_u12_l175_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct verb form following 'Would you mind':",
    sourceSentence: "Would you mind [blank] (send / sending) me the updated meeting minutes?",
    targetSentence: "Would you mind sending me the updated meeting minutes?",
    text: "Would you mind [blank] me the updated meeting minutes?",
    options: [
      { id: "o1", text: "sending", isCorrect: true },
      { id: "o2", text: "send", isCorrect: false },
      { id: "o3", text: "to send", isCorrect: false },
      { id: "o4", text: "sent", isCorrect: false }
    ],
    correctAnswer: "sending",
    explanation: "'Would you mind + gerund (-ing)' is the required grammatical form."
  },
  {
    id: "a2_u12_l175_p21",
    type: "translation",
    prompt: "Translate to English: 'क्या आपको पता है कि ट्रेन कब आएगी?'",
    sourceSentence: "क्या आपको पता है कि ट्रेन कब आएगी?",
    targetSentence: "Do you know when the train will arrive?",
    explanation: "Indirect question order: 'Do you know when + subject ('the train') + verb ('will arrive')?'."
  },
  {
    id: "a2_u12_l175_p22",
    type: "speaking",
    prompt: "Speak aloud politely: Ask a colleague about their availability for a collaborative meeting.",
    sourceSentence: "Could you let me know if you are free for a short catch-up call on Thursday afternoon?",
    targetSentence: "Could you let me know if you are free for a short catch-up call on Thursday afternoon?",
    audioText: "Could you let me know if you are free for a short catch-up call on Thursday afternoon?",
    explanation: "Practice soft, polite intonation on 'Could you let me know if you are free...'."
  }
];

const l175_review: Exercise[] = [
  {
    id: "a2_u12_l175_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Polite Requests): Which sentence is the most polite and appropriate for a workplace email?",
    options: [
      { id: "o1", text: "Would you be able to provide feedback on the draft by Friday?", isCorrect: true },
      { id: "o2", text: "Give me feedback immediately right now.", isCorrect: false },
      { id: "o3", text: "You must to send feedback today.", isCorrect: false },
      { id: "o4", text: "Why you did not send feedback yesterday?", isCorrect: false }
    ],
    correctAnswer: "Would you be able to provide feedback on the draft by Friday?",
    explanation: "'Would you be able to provide...' is polite, professional, and respectful."
  },
  {
    id: "a2_u12_l175_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Could you tell me [blank] (how / what) much this software license costs?'",
    sourceSentence: "Could you tell me [blank] much this software license costs?",
    targetSentence: "Could you tell me how much this software license costs?",
    text: "Could you tell me [blank] much this software license costs?",
    options: [
      { id: "o1", text: "how", isCorrect: true },
      { id: "o2", text: "what", isCorrect: false },
      { id: "o3", text: "where", isCorrect: false },
      { id: "o4", text: "which", isCorrect: false }
    ],
    correctAnswer: "how",
    explanation: "The price question uses 'how much'."
  },
  {
    id: "a2_u12_l175_r9",
    type: "error_correction",
    prompt: "Correct the auxiliary verb error in this indirect question:",
    sourceSentence: "Could you tell me what time does the presentation start?",
    targetSentence: "Could you tell me what time the presentation starts?",
    options: [
      { id: "o1", text: "Could you tell me what time the presentation starts?", isCorrect: true },
      { id: "o2", text: "Could you tell me what time is start presentation?", isCorrect: false },
      { id: "o3", text: "What time presentation starts could you tell me?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me what time the presentation starts?",
    explanation: "Do NOT use the question auxiliary 'does' in the embedded clause of an indirect question."
  },
  {
    id: "a2_u12_l175_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या आपको कोई आपत्ति होगी यदि मैं यह दस्तावेज़ कल जमा करूँ?'",
    sourceSentence: "क्या आपको कोई आपत्ति होगी यदि मैं यह दस्तावेज़ कल जमा करूँ?",
    targetSentence: "Would you mind if I submitted this document tomorrow?",
    explanation: "'Would you mind if I + Past Subjunctive ('submitted')...?' is very polite."
  }
];

const l175_assessment: Exercise[] = [
  {
    id: "a2_u12_l175_a7",
    type: "multiple_choice",
    prompt: "Which indirect question is grammatically correct and uses proper statement word order?",
    options: [
      { id: "o1", text: "Could you please explain how this authentication process works?", isCorrect: true },
      { id: "o2", text: "Could you please explain how does this authentication process work?", isCorrect: false },
      { id: "o3", text: "Could you please explain how works this process?", isCorrect: false },
      { id: "o4", text: "Explain me how does process work please?", isCorrect: false }
    ],
    correctAnswer: "Could you please explain how this authentication process works?",
    explanation: "Indirect question uses statement order: 'how + subject ('this authentication process') + verb ('works')'."
  },
  {
    id: "a2_u12_l175_a8",
    type: "fill_blank",
    prompt: "Complete the polite indirect question:",
    sourceSentence: "Do you know [blank] (whether / that) the office will remain open during the public holiday?",
    targetSentence: "Do you know whether the office will remain open during the public holiday?",
    text: "Do you know [blank] the office will remain open during the public holiday?",
    options: [
      { id: "o1", text: "whether", isCorrect: true },
      { id: "o2", text: "that", isCorrect: false },
      { id: "o3", text: "what", isCorrect: false },
      { id: "o4", text: "which", isCorrect: false }
    ],
    correctAnswer: "whether",
    explanation: "'whether / if' introduces yes/no indirect questions."
  },
  {
    id: "a2_u12_l175_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Ask two polite indirect questions to an international visitor regarding their hotel preferences and dietary requirements.",
    sourceSentence: "Could you please let me know what type of room you prefer? I was also wondering if you have any special dietary requirements.",
    targetSentence: "Could you please let me know what type of room you prefer? I was also wondering if you have any special dietary requirements.",
    audioText: "Could you please let me know what type of room you prefer? I was also wondering if you have any special dietary requirements.",
    explanation: "Demonstrate accurate indirect question word order and hospitable, diplomatic delivery."
  },
  {
    id: "a2_u12_l175_a10",
    type: "mediation",
    prompt: "Translate this diplomatic email opening for a foreign client: 'मुझे उम्मीद है कि आप सकुशल हैं। क्या आप मुझे बता सकते हैं कि अनुबंध की समीक्षा कब पूरी होगी?' Provide the best translation.",
    sourceSentence: "मुझे उम्मीद है कि आप सकुशल हैं। क्या आप मुझे बता सकते हैं कि अनुबंध की समीक्षा कब पूरी होगी?",
    targetSentence: "I hope this email finds you well. Could you please let me know when the contract review will be completed?",
    options: [
      { id: "o1", text: "I hope this email finds you well. Could you please let me know when the contract review will be completed?", isCorrect: true },
      { id: "o2", text: "Send contract review now why you delayed yesterday?", isCorrect: false },
      { id: "o3", text: "I am fine and tell me when contract is deleted.", isCorrect: false }
    ],
    correctAnswer: "I hope this email finds you well. Could you please let me know when the contract review will be completed?",
    explanation: "'I hope this email finds you well' and 'Could you please let me know when... will be completed' provide perfect professional etiquette."
  }
];

export function runEnrichment171to175() {
  console.log('--- ENRICHING LESSONS 171 - 175 (UNIT 12) ---');
  enrichUnit12LessonData('lesson_a2_12_171', LESSON_A2_12_171_DATA, l171_practice, l171_review, l171_assessment);
  enrichUnit12LessonData('lesson_a2_12_172', LESSON_A2_12_172_DATA, l172_practice, l172_review, l172_assessment);
  enrichUnit12LessonData('lesson_a2_12_173', LESSON_A2_12_173_DATA, l173_practice, l173_review, l173_assessment);
  enrichUnit12LessonData('lesson_a2_12_174', LESSON_A2_12_174_DATA, l174_practice, l174_review, l174_assessment);
  enrichUnit12LessonData('lesson_a2_12_175', LESSON_A2_12_175_DATA, l175_practice, l175_review, l175_assessment);
  console.log('--- COMPLETED 171 - 175 ---');
}

runEnrichment171to175();
