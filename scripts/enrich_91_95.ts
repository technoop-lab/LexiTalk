import { Exercise } from '../src/types';
import { LESSON_A2_7_91_DATA } from '../src/data/lessons/lesson_a2_7_91';
import { LESSON_A2_7_92_DATA } from '../src/data/lessons/lesson_a2_7_92';
import { LESSON_A2_7_93_DATA } from '../src/data/lessons/lesson_a2_7_93';
import { LESSON_A2_7_94_DATA } from '../src/data/lessons/lesson_a2_7_94';
import { LESSON_A2_7_95_DATA } from '../src/data/lessons/lesson_a2_7_95';
import { enrichLessonData } from './enrichHelper';

// ==========================================
// LESSON 91: Daily Routines & Frequency Adverbs
// ==========================================
const l91_practice: Exercise[] = [
  {
    id: "a2_u07_l91_p16",
    type: "reading",
    prompt: "Read David's daily routine description and answer the question:\n\"David is an IT support specialist in Manchester. He usually starts work at 8:30 AM, but on Tuesdays he always arrives 30 minutes early to perform network backups. He rarely takes lunch at his desk because he prefers walking in the park.\"\nWhen does David perform network backups?",
    sourceSentence: "When does David perform network backups?",
    targetSentence: "On Tuesdays before starting his normal workday.",
    options: [
      { id: "o1", text: "On Tuesdays before starting his normal workday.", isCorrect: true },
      { id: "o2", text: "Every day at lunch time.", isCorrect: false },
      { id: "o3", text: "Only on weekends at home.", isCorrect: false },
      { id: "o4", text: "Never during the work week.", isCorrect: false }
    ],
    correctAnswer: "On Tuesdays before starting his normal workday.",
    explanation: "The text states: 'on Tuesdays he always arrives 30 minutes early to perform network backups.'"
  },
  {
    id: "a2_u07_l91_p17",
    type: "fill_blank",
    prompt: "Choose the correct frequency adverb for a 100% habitual action:",
    sourceSentence: "I ____ brush my teeth before going to sleep at night.",
    targetSentence: "I always brush my teeth before going to sleep at night.",
    options: [
      { id: "o1", text: "always", isCorrect: true },
      { id: "o2", "text": "rarely", isCorrect: false },
      { id: "o3", text: "never", isCorrect: false },
      { id: "o4", text: "hardly ever", isCorrect: false }
    ],
    correctAnswer: "always",
    explanation: "\"Always\" expresses 100% habitual frequency."
  },
  {
    id: "a2_u07_l91_p18",
    type: "speaking",
    prompt: "Read this daily routine statement aloud clearly:",
    targetSentence: "I usually prepare a nutritious breakfast before leaving for the office.",
    audioText: "I usually prepare a nutritious breakfast before leaving for the office."
  },
  {
    id: "a2_u07_l91_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "We often have a team standup meeting at nine o'clock.",
    targetSentence: "We often have a team standup meeting at nine o'clock."
  },
  {
    id: "a2_u07_l91_p20",
    type: "error_correction",
    prompt: "Identify and correct the mistake with the frequency adverb position:",
    sourceSentence: "She drinks never coffee in the late afternoon.",
    targetSentence: "She never drinks coffee in the late afternoon.",
    options: [
      { id: "o1", text: "She never drinks coffee in the late afternoon.", isCorrect: true },
      { id: "o2", text: "She drinks coffee never in the late afternoon.", isCorrect: false },
      { id: "o3", text: "Never she drinks coffee in the late afternoon.", isCorrect: false },
      { id: "o4", text: "She is never drinking coffee in the late afternoon.", isCorrect: false }
    ],
    correctAnswer: "She never drinks coffee in the late afternoon.",
    explanation: "Frequency adverbs go before the main verb: \"never drinks\"."
  },
  {
    id: "a2_u07_l91_p21",
    type: "mediation",
    prompt: "Mediation: A new coworker asks how often the company holds project retrospectives. Explain the schedule politely and clearly:",
    sourceSentence: "How often do you have project retrospectives here?",
    targetSentence: "We usually hold project retrospectives every two weeks, but we occasionally have them after major software releases.",
    options: [
      { id: "o1", text: "We usually hold project retrospectives every two weeks, but we occasionally have them after major software releases.", isCorrect: true },
      { id: "o2", text: "We are never working on projects.", isCorrect: false },
      { id: "o3", text: "Retro is happening tomorrow yesterday.", isCorrect: false },
      { id: "o4", text: "I did not retrospective yesterday.", isCorrect: false }
    ],
    correctAnswer: "We usually hold project retrospectives every two weeks, but we occasionally have them after major software releases.",
    explanation: "Clearly communicates routine frequency with \"usually\" and \"occasionally\"."
  },
  {
    id: "a2_u07_l91_p22",
    type: "match_pairs",
    prompt: "Match time prepositions with routine time expressions:",
    options: [
      { id: "m1", text: "in" },
      { id: "m1_m", text: "the morning / the afternoon" },
      { id: "m2", text: "at" },
      { id: "m2_m", text: "night / seven o'clock" },
      { id: "m3", text: "on" },
      { id: "m3_m", text: "weekdays / Friday evenings" },
      { id: "m4", text: "every" },
      { id: "m4_m", text: "single morning / weekend" }
    ]
  },
  {
    id: "a2_u07_l91_p23",
    type: "word_ordering",
    prompt: "Arrange the words to form a correct habit description with an intensifier:",
    sourceSentence: "My morning commute is extremely crowded during rush hour.",
    targetSentence: "My morning commute is extremely crowded during rush hour",
    wordBank: ["My", "morning", "commute", "is", "extremely", "crowded", "during", "rush", "hour", "never", "at"],
    explanation: "Subject (My morning commute) + verb BE (is) + intensifier (extremely) + adjective (crowded) + prepositional phrase (during rush hour)."
  },
  {
    id: "a2_u07_l91_p24",
    type: "recognition",
    prompt: "Which adverb expresses approximately 50% frequency?",
    sourceSentence: "I sometimes order lunch from the local cafe.",
    targetSentence: "I sometimes order lunch from the local cafe.",
    options: [
      { id: "o1", text: "sometimes", isCorrect: true },
      { id: "o2", text: "always", isCorrect: false },
      { id: "o3", text: "never", isCorrect: false },
      { id: "o4", text: "rarely", isCorrect: false }
    ],
    correctAnswer: "sometimes",
    explanation: "\"Sometimes\" indicates moderate frequency (~50%)."
  },
  {
    id: "a2_u07_l91_p25",
    type: "dialogue_completion",
    prompt: "Complete the exchange about workout routines:",
    sourceSentence: "Alex: \"How often do you go to the gym?\"\nSam: \"____\"",
    targetSentence: "I try to go three times a week, usually on Mondays, Wednesdays, and Fridays.",
    options: [
      { id: "o1", text: "I try to go three times a week, usually on Mondays, Wednesdays, and Fridays.", isCorrect: true },
      { id: "o2", text: "I went there last year once.", isCorrect: false },
      { id: "o3", text: "Gym is being very heavy.", isCorrect: false },
      { id: "o4", text: "Because I like to sleep.", isCorrect: false }
    ],
    correctAnswer: "I try to go three times a week, usually on Mondays, Wednesdays, and Fridays.",
    explanation: "Provides a precise frequency and routine explanation."
  },
  {
    id: "a2_u07_l91_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing your morning routine using at least one frequency adverb and one time preposition:",
    targetSentence: "I always wake up at 7 AM on weekdays. Then, I usually make fresh coffee in the kitchen.",
    guidelines: "Use 'always' or 'usually' and correct prepositions (at 7 AM, in the morning, on weekdays)."
  }
];

const l91_review: Exercise[] = [
  {
    id: "a2_u07_l91_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Complete the question about third-person daily routine:",
    sourceSentence: "What time ____ your manager usually arrive at the office?",
    targetSentence: "What time does your manager usually arrive at the office?",
    options: [
      { id: "o1", text: "does", isCorrect: true },
      { id: "o2", text: "is", isCorrect: false },
      { id: "o3", text: "do", isCorrect: false },
      { id: "o4", text: "has", isCorrect: false }
    ],
    correctAnswer: "does",
    explanation: "Use auxiliary \"does\" for third-person singular habits: What time does your manager usually arrive?"
  },
  {
    id: "a2_u07_l91_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the word order with the verb BE:",
    sourceSentence: "Our train on time always is in the winter.",
    targetSentence: "Our train is always on time in the winter.",
    options: [
      { id: "o1", text: "Our train is always on time in the winter.", isCorrect: true },
      { id: "o2", text: "Our train always is on time in the winter.", isCorrect: false },
      { id: "o3", text: "Always our train on time is in the winter.", isCorrect: false },
      { id: "o4", text: "Our train is on time always in the winter.", isCorrect: false }
    ],
    correctAnswer: "Our train is always on time in the winter.",
    explanation: "Frequency adverbs follow the verb BE: \"is always\"."
  },
  {
    id: "a2_u07_l91_r08",
    type: "speaking",
    prompt: "Speak this routine contrast aloud:",
    targetSentence: "I rarely work late on Fridays because I prefer spending time with family.",
    audioText: "I rarely work late on Fridays because I prefer spending time with family."
  }
];

const l91_assessment: Exercise[] = [
  {
    id: "a2_u07_l91_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly demonstrates the position of 'hardly ever'?",
    sourceSentence: "We hardly ever miss our weekly project review.",
    targetSentence: "We hardly ever miss our weekly project review.",
    options: [
      { id: "o1", text: "We hardly ever miss our weekly project review.", isCorrect: true },
      { id: "o2", text: "We miss hardly ever our weekly project review.", isCorrect: false },
      { id: "o3", text: "Hardly ever we miss our weekly project review.", isCorrect: false },
      { id: "o4", text: "We are hardly ever missing our weekly project review.", isCorrect: false }
    ],
    correctAnswer: "We hardly ever miss our weekly project review.",
    explanation: "\"Hardly ever\" sits directly before the lexical verb \"miss\"."
  },
  {
    id: "a2_u07_l91_a07",
    type: "listening",
    prompt: "Listen to the statement and choose the correct meaning:",
    audioText: "Elena seldom eats dessert after dinner.",
    targetSentence: "Elena almost never eats dessert after dinner.",
    options: [
      { id: "o1", text: "Elena almost never eats dessert after dinner.", isCorrect: true },
      { id: "o2", text: "Elena always eats dessert after dinner.", isCorrect: false },
      { id: "o3", text: "Elena is eating dessert right now.", isCorrect: false },
      { id: "o4", text: "Elena eats dessert every day.", isCorrect: false }
    ],
    correctAnswer: "Elena almost never eats dessert after dinner.",
    explanation: "\"Seldom\" is synonymous with \"rarely\" or \"almost never\"."
  },
  {
    id: "a2_u07_l91_a08",
    type: "writing",
    prompt: "Write a sentence describing an activity you 'often' do on weekends:",
    targetSentence: "I often visit the local farmers market on Saturday mornings.",
    guidelines: "Use 'often' in front of a regular action verb with a specific weekend time marker."
  }
];

enrichLessonData('lesson_a2_7_91', LESSON_A2_7_91_DATA, l91_practice, l91_review, l91_assessment);

// ==========================================
// LESSON 92: Ongoing Activities vs Habits
// ==========================================
const l92_practice: Exercise[] = [
  {
    id: "a2_u07_l92_p16",
    type: "reading",
    prompt: "Read the workplace scenario and answer the question:\n\"Liam is an architect. He normally works from the central office in Leeds, but this week he is working from home because his team is renovating the studio space.\"\nWhy is Liam working from home this week?",
    sourceSentence: "Why is Liam working from home this week?",
    targetSentence: "Because the central studio is undergoing renovations.",
    options: [
      { id: "o1", text: "Because the central studio is undergoing renovations.", isCorrect: true },
      { id: "o2", text: "Because he quit his job as an architect.", isCorrect: false },
      { id: "o3", text: "Because he always works from home permanently.", isCorrect: false },
      { id: "o4", text: "Because Leeds is closed for holidays.", isCorrect: false }
    ],
    correctAnswer: "Because the central studio is undergoing renovations.",
    explanation: "Present continuous expresses a temporary situation this week."
  },
  {
    id: "a2_u07_l92_p17",
    type: "fill_blank",
    prompt: "Select the correct verb form for a stative verb (preference):",
    sourceSentence: "Right now, I ____ a warm cup of herbal tea.",
    targetSentence: "Right now, I want a warm cup of herbal tea.",
    options: [
      { id: "o1", text: "want", isCorrect: true },
      { id: "o2", text: "am wanting", isCorrect: false },
      { id: "o3", text: "wanting", isCorrect: false },
      { id: "o4", text: "am want", isCorrect: false }
    ],
    correctAnswer: "want",
    explanation: "\"Want\" is a stative verb and is not used in the continuous form, even with 'right now'."
  },
  {
    id: "a2_u07_l92_p18",
    type: "speaking",
    prompt: "Speak this contrast sentence clearly aloud:",
    targetSentence: "I usually drive to work, but today I am walking because the weather is sunny.",
    audioText: "I usually drive to work, but today I am walking because the weather is sunny."
  },
  {
    id: "a2_u07_l92_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "She is attending a remote webinar at the moment.",
    targetSentence: "She is attending a remote webinar at the moment."
  },
  {
    id: "a2_u07_l92_p20",
    type: "error_correction",
    prompt: "Identify and correct the stative verb error:",
    sourceSentence: "I am knowing the answer to this technical problem.",
    targetSentence: "I know the answer to this technical problem.",
    options: [
      { id: "o1", text: "I know the answer to this technical problem.", isCorrect: true },
      { id: "o2", text: "I am know the answer to this technical problem.", isCorrect: false },
      { id: "o3", text: "I knowing the answer to this technical problem.", isCorrect: false },
      { id: "o4", text: "I is knowing the answer to this technical problem.", isCorrect: false }
    ],
    correctAnswer: "I know the answer to this technical problem.",
    explanation: "\"Know\" is a stative verb expressing a mental state; use Present Simple."
  },
  {
    id: "a2_u07_l92_p21",
    type: "mediation",
    prompt: "Mediation: A client calls asking to speak with your manager immediately. Explain her current temporary situation professionally:",
    sourceSentence: "May I speak with Ms. Davis immediately?",
    targetSentence: "She is currently meeting with executive clients, but she usually checks her messages at three o'clock.",
    options: [
      { id: "o1", text: "She is currently meeting with executive clients, but she usually checks her messages at three o'clock.", isCorrect: true },
      { id: "o2", text: "She never works in this company.", isCorrect: false },
      { id: "o3", text: "She is meeting yesterday and tomorrow.", isCorrect: false },
      { id: "o4", text: "No speak to her now.", isCorrect: false }
    ],
    correctAnswer: "She is currently meeting with executive clients, but she usually checks her messages at three o'clock.",
    explanation: "Effectively contrasts current action (is meeting) with regular habit (checks messages at 3)."
  },
  {
    id: "a2_u07_l92_p22",
    type: "match_pairs",
    prompt: "Match time signals with the correct grammatical aspect:",
    options: [
      { id: "m1", text: "every Monday / usually" },
      { id: "m1_m", text: "Present Simple (Habits)" },
      { id: "m2", text: "right now / at the moment" },
      { id: "m2_m", text: "Present Continuous (Ongoing)" },
      { id: "m3", text: "this week / currently" },
      { id: "m3_m", text: "Present Continuous (Temporary)" },
      { id: "m4", text: "never / twice a month" },
      { id: "m4_m", text: "Present Simple (Frequency)" }
    ]
  },
  {
    id: "a2_u07_l92_p23",
    type: "word_ordering",
    prompt: "Assemble the sentence contrasting a regular habit with a temporary action:",
    sourceSentence: "He usually drinks coffee, but currently he is drinking tea.",
    targetSentence: "He usually drinks coffee but currently he is drinking tea",
    wordBank: ["He", "usually", "drinks", "coffee", "but", "currently", "he", "is", "drinking", "tea", "are", "drink"],
    explanation: "Present Simple for habit (drinks) + Present Continuous for temporary state (is drinking)."
  },
  {
    id: "a2_u07_l92_p24",
    type: "recognition",
    prompt: "Which of the following verbs is a stative verb that is NOT usually used in continuous forms?",
    sourceSentence: "understand / run / cook / build",
    targetSentence: "understand",
    options: [
      { id: "o1", text: "understand", isCorrect: true },
      { id: "o2", text: "run", isCorrect: false },
      { id: "o3", text: "cook", isCorrect: false },
      { id: "o4", text: "build", isCorrect: false }
    ],
    correctAnswer: "understand",
    explanation: "\"Understand\" represents a cognitive state, making it a stative verb."
  },
  {
    id: "a2_u07_l92_p25",
    type: "dialogue_completion",
    prompt: "Complete the phone conversation:",
    sourceSentence: "Sarah: \"Can you talk right now?\"\nMark: \"____\"",
    targetSentence: "I'm sorry, I'm presenting our quarterly figures right now. Can I call you back in twenty minutes?",
    options: [
      { id: "o1", text: "I'm sorry, I'm presenting our quarterly figures right now. Can I call you back in twenty minutes?", isCorrect: true },
      { id: "o2", text: "I always present quarterly figures yesterday.", isCorrect: false },
      { id: "o3", text: "Yes, I never talk to you.", isCorrect: false },
      { id: "o4", text: "I was having a presentation last year.", isCorrect: false }
    ],
    correctAnswer: "I'm sorry, I'm presenting our quarterly figures right now. Can I call you back in twenty minutes?",
    explanation: "Uses Present Continuous for the ongoing action preventing the phone call."
  },
  {
    id: "a2_u07_l92_p26",
    type: "personal_production",
    prompt: "Write a sentence contrasting what you normally do versus what you are doing right now:",
    targetSentence: "I usually study at the library, but right now I am practicing English on my laptop at home.",
    guidelines: "Include 'usually + present simple' and 'right now + present continuous'."
  }
];

const l92_review: Exercise[] = [
  {
    id: "a2_u07_l92_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct verb form for a permanent truth:",
    sourceSentence: "Water ____ at 100 degrees Celsius.",
    targetSentence: "Water boils at 100 degrees Celsius.",
    options: [
      { id: "o1", text: "boils", isCorrect: true },
      { id: "o2", text: "is boiling", isCorrect: false },
      { id: "o3", text: "boiled", isCorrect: false },
      { id: "o4", text: "boil", isCorrect: false }
    ],
    correctAnswer: "boils",
    explanation: "Scientific facts and universal truths use Present Simple."
  },
  {
    id: "a2_u07_l92_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the question formation for ongoing actions:",
    sourceSentence: "What are you read at the moment?",
    targetSentence: "What are you reading at the moment?",
    options: [
      { id: "o1", text: "What are you reading at the moment?", isCorrect: true },
      { id: "o2", text: "What do you reading at the moment?", isCorrect: false },
      { id: "o3", text: "What are you read at moment?", isCorrect: false },
      { id: "o4", text: "What is you reading at the moment?", isCorrect: false }
    ],
    correctAnswer: "What are you reading at the moment?",
    explanation: "Present Continuous requires BE + verb-ing: \"are you reading\"."
  },
  {
    id: "a2_u07_l92_r08",
    type: "speaking",
    prompt: "Speak this sentence with correct stress and rhythm:",
    targetSentence: "Why are you wearing a winter coat when it's warm outside?",
    audioText: "Why are you wearing a winter coat when it's warm outside?"
  }
];

const l92_assessment: Exercise[] = [
  {
    id: "a2_u07_l92_a06",
    type: "multiple_choice",
    prompt: "Choose the sentence that correctly distinguishes state from action:",
    sourceSentence: "I think this plan is brilliant, and we are thinking about launching it next month.",
    targetSentence: "I think this plan is brilliant, and we are thinking about launching it next month.",
    options: [
      { id: "o1", text: "I think this plan is brilliant, and we are thinking about launching it next month.", isCorrect: true },
      { id: "o2", text: "I am thinking this plan is brilliant, and we think about launching it right now.", isCorrect: false },
      { id: "o3", text: "I think this plan is brilliant, and we are think about it.", isCorrect: false },
      { id: "o4", text: "I am think this plan is brilliant.", isCorrect: false }
    ],
    correctAnswer: "I think this plan is brilliant, and we are thinking about launching it next month.",
    explanation: "\"Think\" as opinion = stative (I think). \"Think about\" as mental consideration = dynamic action (we are thinking)."
  },
  {
    id: "a2_u07_l92_a07",
    type: "listening",
    prompt: "Listen to the audio and identify the situation:",
    audioText: "The software developers are currently debugging the payment gateway.",
    targetSentence: "The developers are doing an ongoing task right now.",
    options: [
      { id: "o1", text: "The developers are doing an ongoing task right now.", isCorrect: true },
      { id: "o2", text: "The developers finished the gateway yesterday.", isCorrect: false },
      { id: "o3", text: "The developers never debug code.", isCorrect: false },
      { id: "o4", text: "The gateway will never work.", isCorrect: false }
    ],
    correctAnswer: "The developers are doing an ongoing task right now.",
    explanation: "\"Are currently debugging\" indicates an active present operation."
  },
  {
    id: "a2_u07_l92_a08",
    type: "writing",
    prompt: "Write a sentence describing an ongoing project you or your team is working on this month:",
    targetSentence: "Our department is currently updating all customer security protocols.",
    guidelines: "Use 'is/are currently + verb-ing' with a specific project context."
  }
];

enrichLessonData('lesson_a2_7_92', LESSON_A2_7_92_DATA, l92_practice, l92_review, l92_assessment);

// ==========================================
// LESSON 93: Past Experiences & Completed Events
// ==========================================
const l93_practice: Exercise[] = [
  {
    id: "a2_u07_l93_p16",
    type: "reading",
    prompt: "Read Sofia's account of her business trip and answer the question:\n\"Last month, Sofia traveled to Berlin for an international renewable energy summit. She met three prospective partners, delivered a 20-minute keynote presentation, and signed a preliminary collaboration agreement before flying back to Madrid.\"\nWhat did Sofia do before flying back to Madrid?",
    sourceSentence: "What did Sofia do before flying back to Madrid?",
    targetSentence: "She signed a preliminary collaboration agreement.",
    options: [
      { id: "o1", text: "She signed a preliminary collaboration agreement.", isCorrect: true },
      { id: "o2", text: "She moved to Berlin permanently.", isCorrect: false },
      { id: "o3", text: "She cancelled all partner meetings.", isCorrect: false },
      { id: "o4", text: "She missed her keynote presentation.", isCorrect: false }
    ],
    correctAnswer: "She signed a preliminary collaboration agreement.",
    explanation: "The text states: '...and signed a preliminary collaboration agreement before flying back to Madrid.'"
  },
  {
    id: "a2_u07_l93_p17",
    type: "fill_blank",
    prompt: "Choose the correct irregular past tense form of 'buy':",
    sourceSentence: "We ____ new ergonomic chairs for the office last Friday.",
    targetSentence: "We bought new ergonomic chairs for the office last Friday.",
    options: [
      { id: "o1", text: "bought", isCorrect: true },
      { id: "o2", text: "buyed", isCorrect: false },
      { id: "o3", text: "boughted", isCorrect: false },
      { id: "o4", text: "were bought", isCorrect: false }
    ],
    correctAnswer: "bought",
    explanation: "\"Buy\" is an irregular verb with past tense \"bought\"."
  },
  {
    id: "a2_u07_l93_p18",
    type: "speaking",
    prompt: "Read this past narrative sentence aloud with natural intonation:",
    targetSentence: "We launched the new mobile application three weeks ago and received positive feedback.",
    audioText: "We launched the new mobile application three weeks ago and received positive feedback."
  },
  {
    id: "a2_u07_l93_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "Did you receive the updated invoice yesterday afternoon?",
    targetSentence: "Did you receive the updated invoice yesterday afternoon?"
  },
  {
    id: "a2_u07_l93_p20",
    type: "error_correction",
    prompt: "Correct the double past tense error in this negative sentence:",
    sourceSentence: "They didn't went to the trade exhibition last weekend.",
    targetSentence: "They didn't go to the trade exhibition last weekend.",
    options: [
      { id: "o1", text: "They didn't go to the trade exhibition last weekend.", isCorrect: true },
      { id: "o2", text: "They didn't gone to the trade exhibition last weekend.", isCorrect: false },
      { id: "o3", text: "They not went to the trade exhibition last weekend.", isCorrect: false },
      { id: "o4", text: "They don't went to the trade exhibition last weekend.", isCorrect: false }
    ],
    correctAnswer: "They didn't go to the trade exhibition last weekend.",
    explanation: "After auxiliary \"didn't\", use the base form of the verb: \"didn't go\"."
  },
  {
    id: "a2_u07_l93_p21",
    type: "mediation",
    prompt: "Mediation: A colleague missed yesterday's staff meeting. Summarize what happened clearly and concisely:",
    sourceSentence: "Can you tell me what happened in yesterday's meeting?",
    targetSentence: "The management team reviewed our quarterly budget, approved the new hiring plan, and scheduled the next client review for Thursday.",
    options: [
      { id: "o1", text: "The management team reviewed our quarterly budget, approved the new hiring plan, and scheduled the next client review for Thursday.", isCorrect: true },
      { id: "o2", text: "Nobody attended and nothing happened forever.", isCorrect: false },
      { id: "o3", text: "The meeting will happen tomorrow.", isCorrect: false },
      { id: "o4", text: "I do not know what is meeting.", isCorrect: false }
    ],
    correctAnswer: "The management team reviewed our quarterly budget, approved the new hiring plan, and scheduled the next client review for Thursday.",
    explanation: "Summarizes completed past events using accurate Past Simple verbs."
  },
  {
    id: "a2_u07_l93_p22",
    type: "match_pairs",
    prompt: "Match base verbs with their irregular past tense forms:",
    options: [
      { id: "m1", text: "catch" },
      { id: "m1_m", text: "caught" },
      { id: "m2", text: "bring" },
      { id: "m2_m", text: "brought" },
      { id: "m3", text: "teach" },
      { id: "m3_m", text: "taught" },
      { id: "m4", text: "choose" },
      { id: "m4_m", text: "chose" }
    ]
  },
  {
    id: "a2_u07_l93_p23",
    type: "word_ordering",
    prompt: "Put the words in order to form a past question with 'did':",
    sourceSentence: "Did you complete the financial audit on time?",
    targetSentence: "Did you complete the financial audit on time",
    wordBank: ["Did", "you", "complete", "the", "financial", "audit", "on", "time", "completed", "were"],
    explanation: "Did + subject (you) + base verb (complete) + object (the financial audit) + time phrase (on time)?"
  },
  {
    id: "a2_u07_l93_p24",
    type: "recognition",
    prompt: "Which past -ed ending is pronounced with the extra syllable /ɪd/?",
    sourceSentence: "visited / worked / watched / called",
    targetSentence: "visited",
    options: [
      { id: "o1", text: "visited", isCorrect: true },
      { id: "o2", text: "worked", isCorrect: false },
      { id: "o3", text: "watched", isCorrect: false },
      { id: "o4", text: "called", isCorrect: false }
    ],
    correctAnswer: "visited",
    explanation: "Verbs ending in /t/ or /d/ (like visit) add the /ɪd/ syllable in the past: visited (/ˈvɪz.ɪ.tɪd/)."
  },
  {
    id: "a2_u07_l93_p25",
    type: "dialogue_completion",
    prompt: "Complete the exchange about past weekend experiences:",
    sourceSentence: "Clara: \"How was your weekend trip to the coast?\"\nBen: \"____\"",
    targetSentence: "It was fantastic! We rented a small cottage and spent both days hiking along the cliffs.",
    options: [
      { id: "o1", text: "It was fantastic! We rented a small cottage and spent both days hiking along the cliffs.", isCorrect: true },
      { id: "o2", text: "I am going to go next year.", isCorrect: false },
      { id: "o3", text: "Coast is usually very water.", isCorrect: false },
      { id: "o4", text: "Because I didn't have time tomorrow.", isCorrect: false }
    ],
    correctAnswer: "It was fantastic! We rented a small cottage and spent both days hiking along the cliffs.",
    explanation: "Responds in Past Simple with descriptive details (was, rented, spent)."
  },
  {
    id: "a2_u07_l93_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing a memorable event from last year using two different past simple verbs:",
    targetSentence: "Last summer, I visited my grandparents in Canada and learned how to bake traditional sourdough bread.",
    guidelines: "Use past time markers (last summer, in 2023) and past simple verbs (visited, learned, went, bought)."
  }
];

const l93_review: Exercise[] = [
  {
    id: "a2_u07_l93_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct past form of verb BE for plural subjects:",
    sourceSentence: "All the team members ____ present at the kickoff meeting yesterday.",
    targetSentence: "All the team members were present at the kickoff meeting yesterday.",
    options: [
      { id: "o1", text: "were", isCorrect: true },
      { id: "o2", text: "was", isCorrect: false },
      { id: "o3", text: "are", isCorrect: false },
      { id: "o4", text: "been", isCorrect: false }
    ],
    correctAnswer: "were",
    explanation: "Plural subject \"team members\" takes \"were\" in the past simple."
  },
  {
    id: "a2_u07_l93_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the past question structure:",
    sourceSentence: "Where did you went after the conference ended?",
    targetSentence: "Where did you go after the conference ended?",
    options: [
      { id: "o1", text: "Where did you go after the conference ended?", isCorrect: true },
      { id: "o2", text: "Where did you gone after the conference ended?", isCorrect: false },
      { id: "o3", text: "Where you went after conference ended?", isCorrect: false },
      { id: "o4", text: "Where were you go after conference ended?", isCorrect: false }
    ],
    correctAnswer: "Where did you go after the conference ended?",
    explanation: "Auxiliary \"did\" takes base verb \"go\": \"Where did you go...?\""
  },
  {
    id: "a2_u07_l93_r08",
    type: "speaking",
    prompt: "Speak this past narrative sentence aloud clearly:",
    targetSentence: "We successfully resolved the customer inquiry within two hours yesterday.",
    audioText: "We successfully resolved the customer inquiry within two hours yesterday."
  }
];

const l93_assessment: Exercise[] = [
  {
    id: "a2_u07_l93_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses past simple for an action completed in a finished time period?",
    sourceSentence: "I wrote three detailed reports during my internship in 2022.",
    targetSentence: "I wrote three detailed reports during my internship in 2022.",
    options: [
      { id: "o1", text: "I wrote three detailed reports during my internship in 2022.", isCorrect: true },
      { id: "o2", text: "I have written three detailed reports in 2022.", isCorrect: false },
      { id: "o3", text: "I was wrote three detailed reports in 2022.", isCorrect: false },
      { id: "o4", text: "I write three reports yesterday in 2022.", isCorrect: false }
    ],
    correctAnswer: "I wrote three detailed reports during my internship in 2022.",
    explanation: "A specific finished past time period (in 2022) requires Past Simple: wrote."
  },
  {
    id: "a2_u07_l93_a07",
    type: "listening",
    prompt: "Listen to the statement and choose the correct option:",
    audioText: "They arrived at the airport two hours before departure.",
    targetSentence: "They were early for their flight.",
    options: [
      { id: "o1", text: "They were early for their flight.", isCorrect: true },
      { id: "o2", text: "They missed their flight completely.", isCorrect: false },
      { id: "o3", text: "They are boarding the plane tomorrow.", isCorrect: false },
      { id: "o4", text: "They never arrived at the airport.", isCorrect: false }
    ],
    correctAnswer: "They were early for their flight.",
    explanation: "Arriving two hours before departure means they were on time/early."
  },
  {
    id: "a2_u07_l93_a08",
    type: "writing",
    prompt: "Write a sentence describing what you did yesterday evening:",
    targetSentence: "Yesterday evening, I cooked dinner and read two chapters of my book.",
    guidelines: "Start with 'Yesterday evening,' and use two regular or irregular past tense verbs."
  }
];

enrichLessonData('lesson_a2_7_93', LESSON_A2_7_93_DATA, l93_practice, l93_review, l93_assessment);

// ==========================================
// LESSON 94: Storytelling & Narrative Sequencing
// ==========================================
const l94_practice: Exercise[] = [
  {
    id: "a2_u07_l94_p16",
    type: "reading",
    prompt: "Read the story extract and answer the question:\n\"First, the hikers checked their gear and compasses. Then, they followed the forested trail up the mountain ridge. Suddenly, a dense fog rolled in, reducing visibility to just a few meters. Fortunately, they found a secure shelter before nightfall.\"\nWhat happened immediately after a dense fog rolled in?",
    sourceSentence: "What happened immediately after a dense fog rolled in?",
    targetSentence: "Visibility was reduced to just a few meters.",
    options: [
      { id: "o1", text: "Visibility was reduced to just a few meters.", isCorrect: true },
      { id: "o2", text: "They lost their compasses.", isCorrect: false },
      { id: "o3", text: "They gave up and went home immediately.", isCorrect: false },
      { id: "o4", text: "It became completely sunny.", isCorrect: false }
    ],
    correctAnswer: "Visibility was reduced to just a shocks few meters.",
    explanation: "The text states: 'Suddenly, a dense fog rolled in, reducing visibility to just a few meters.'"
  },
  {
    id: "a2_u07_l94_p17",
    type: "fill_blank",
    prompt: "Choose the best connector for an unexpected event:",
    sourceSentence: "We were enjoying a quiet picnic in the park when ____ it started to hail heavily.",
    targetSentence: "We were enjoying a quiet picnic in the park when suddenly it started to hail heavily.",
    options: [
      { id: "o1", text: "suddenly", isCorrect: true },
      { id: "o2", text: "first", isCorrect: false },
      { id: "o3", text: "finally", isCorrect: false },
      { id: "o4", text: "afterwards", isCorrect: false }
    ],
    correctAnswer: "suddenly",
    explanation: "\"Suddenly\" introduces an abrupt, unexpected event."
  },
  {
    id: "a2_u07_l94_p18",
    type: "speaking",
    prompt: "Speak this narrative sequence aloud with clear transitional pauses:",
    targetSentence: "First, we analyzed the user data; next, we redesigned the onboarding flow; and finally, we tested it with real users.",
    audioText: "First, we analyzed the user data; next, we redesigned the onboarding flow; and finally, we tested it with real users."
  },
  {
    id: "a2_u07_l94_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "While I was driving home, my phone rang twice.",
    targetSentence: "While I was driving home, my phone rang twice."
  },
  {
    id: "a2_u07_l94_p20",
    type: "error_correction",
    prompt: "Correct the connector misuse in this story opening:",
    sourceSentence: "Finally, I woke up and made breakfast, and first I left for school.",
    targetSentence: "First, I woke up and made breakfast, and then I left for school.",
    options: [
      { id: "o1", text: "First, I woke up and made breakfast, and then I left for school.", isCorrect: true },
      { id: "o2", text: "Finally, I woke up and first made breakfast, then I left.", isCorrect: false },
      { id: "o3", text: "Suddenly I woke up and finally I left school.", isCorrect: false },
      { id: "o4", text: "First, I woke up and finally I left for school yesterday.", isCorrect: false }
    ],
    correctAnswer: "First, I woke up and made breakfast, and then I left for school.",
    explanation: "Chronological narratives begin with \"First\" and follow with \"then\" or \"next\"."
  },
  {
    id: "a2_u07_l94_p21",
    type: "mediation",
    prompt: "Mediation: A friend was confused about how an incident occurred at work. Sequence the story clearly for them:",
    sourceSentence: "What exactly happened during the system outage yesterday?",
    targetSentence: "First, a server overheated at 2 PM. Then, the backup generator kicked in. After that, IT technicians replaced the cooling unit, and finally, all services were restored by 4 PM.",
    options: [
      { id: "o1", text: "First, a server overheated at 2 PM. Then, the backup generator kicked in. After that, IT technicians replaced the cooling unit, and finally, all services were restored by 4 PM.", isCorrect: true },
      { id: "o2", text: "The computers died forever and nothing works anymore.", isCorrect: false },
      { id: "o3", text: "First finally server died yesterday tomorrow.", isCorrect: false },
      { id: "o4", text: "Because internet is always bad.", isCorrect: false }
    ],
    correctAnswer: "First, a server overheated at 2 PM. Then, the backup generator kicked in. After that, IT technicians replaced the cooling unit, and finally, all services were restored by 4 PM.",
    explanation: "Clearly sequences chronological events using First, Then, After that, and Finally."
  },
  {
    id: "a2_u07_l94_p22",
    type: "match_pairs",
    prompt: "Match narrative sequencing connectors with their storytelling functions:",
    options: [
      { id: "m1", text: "First / In the beginning" },
      { id: "m1_m", text: "Initiating the story" },
      { id: "m2", text: "Then / Next / After that" },
      { id: "m2_m", text: "Continuing chronological steps" },
      { id: "m3", text: "Suddenly / Out of the blue" },
      { id: "m3_m", text: "Introducing a surprise event" },
      { id: "m4", text: "Finally / In the end" },
      { id: "m4_m", text: "Concluding the narrative" }
    ]
  },
  {
    id: "a2_u07_l94_p23",
    type: "word_ordering",
    prompt: "Arrange the words to form a narrative sentence showing an interrupted action:",
    sourceSentence: "While we were discussing the budget the fire alarm went off.",
    targetSentence: "While we were discussing the budget the fire alarm went off",
    wordBank: ["While", "we", "were", "discussing", "the", "budget", "the", "fire", "alarm", "went", "off", "when", "did"],
    explanation: "While + past continuous (were discussing) + past simple interruption (the fire alarm went off)."
  },
  {
    id: "a2_u07_l94_p24",
    type: "recognition",
    prompt: "Which connector indicates the final step of a process or narrative?",
    sourceSentence: "eventually / suddenly / meanwhile / initially",
    targetSentence: "eventually",
    options: [
      { id: "o1", text: "eventually", isCorrect: true },
      { id: "o2", text: "suddenly", isCorrect: false },
      { id: "o3", text: "meanwhile", isCorrect: false },
      { id: "o4", text: "initially", isCorrect: false }
    ],
    correctAnswer: "eventually",
    explanation: "\"Eventually\" marks the culmination or ultimate result after a passage of time."
  },
  {
    id: "a2_u07_l94_p25",
    type: "dialogue_completion",
    prompt: "Complete the story dialogue with natural sequencing:",
    sourceSentence: "Leo: \"How did you manage to get that international flight on such short notice?\"\nMaya: \"____\"",
    targetSentence: "First, I checked three airline websites; then, a cancellation popped up; and after that, I booked the last seat immediately!",
    options: [
      { id: "o1", text: "First, I checked three airline websites; then, a cancellation popped up; and after that, I booked the last seat immediately!", isCorrect: true },
      { id: "o2", text: "I am going to fly tomorrow morning.", isCorrect: false },
      { id: "o3", text: "Airplane is very fast.", isCorrect: false },
      { id: "o4", text: "Because tickets are expensive.", isCorrect: false }
    ],
    correctAnswer: "First, I checked three airline websites; then, a cancellation popped up; and after that, I booked the last seat immediately!",
    explanation: "Chronologically explains the steps taken to solve the travel problem."
  },
  {
    id: "a2_u07_l94_p26",
    type: "personal_production",
    prompt: "Write a 3-step story recounting a busy day using 'First', 'Then', and 'Finally':",
    targetSentence: "First, I finished an urgent report for my manager. Then, I met an important client for lunch. Finally, I attended an evening language workshop.",
    guidelines: "Use 'First, ... Then, ... Finally, ...' with past simple verbs in each clause."
  }
];

const l94_review: Exercise[] = [
  {
    id: "a2_u07_l94_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct connector for two simultaneous past actions:",
    sourceSentence: "____ I was preparing dinner, my brother was setting the table.",
    targetSentence: "While I was preparing dinner, my brother was setting the table.",
    options: [
      { id: "o1", text: "While", isCorrect: true },
      { id: "o2", text: "Suddenly", isCorrect: false },
      { id: "o3", text: "Finally", isCorrect: false },
      { id: "o4", text: "Because of", isCorrect: false }
    ],
    correctAnswer: "While",
    explanation: "\"While\" links two continuous background actions happening simultaneously in the past."
  },
  {
    id: "a2_u07_l94_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the past continuous + past simple connector usage:",
    sourceSentence: "We walked in the park while the lightning struck.",
    targetSentence: "We were walking in the park when the lightning struck.",
    options: [
      { id: "o1", text: "We were walking in the park when the lightning struck.", isCorrect: true },
      { id: "o2", text: "We walked in the park when the lightning was striking.", isCorrect: false },
      { id: "o3", text: "We was walking in the park when lightning struck.", isCorrect: false },
      { id: "o4", text: "We were walking in park while lightning struck.", isCorrect: false }
    ],
    correctAnswer: "We were walking in the park when the lightning struck.",
    explanation: "Use \"when\" before the short interrupting action in the Past Simple (when lightning struck)."
  },
  {
    id: "a2_u07_l94_r08",
    type: "speaking",
    prompt: "Speak this narrative sentence aloud:",
    targetSentence: "In the end, all our hard work paid off and the client approved the contract.",
    audioText: "In the end, all our hard work paid off and the client approved the contract."
  }
];

const l94_assessment: Exercise[] = [
  {
    id: "a2_u07_l94_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly demonstrates a sequence of past completed actions?",
    sourceSentence: "She opened the envelope, read the letter carefully, and smiled with relief.",
    targetSentence: "She opened the envelope, read the letter carefully, and smiled with relief.",
    options: [
      { id: "o1", text: "She opened the envelope, read the letter carefully, and smiled with relief.", isCorrect: true },
      { id: "o2", text: "She was opening the envelope, was reading the letter, and smiling.", isCorrect: false },
      { id: "o3", text: "She opens the envelope, read the letter, and will smile.", isCorrect: false },
      { id: "o4", text: "She opened the envelope, has read the letter, and smiled.", isCorrect: false }
    ],
    correctAnswer: "She opened the envelope, read the letter carefully, and smiled with relief.",
    explanation: "Sequential past actions use consecutive Past Simple verbs: opened, read, smiled."
  },
  {
    id: "a2_u07_l94_a07",
    type: "listening",
    prompt: "Listen and identify what caused the interruption:",
    audioText: "We were negotiating the final terms when the fire alarm suddenly rang.",
    targetSentence: "The fire alarm rang during the negotiation.",
    options: [
      { id: "o1", text: "The fire alarm rang during the negotiation.", isCorrect: true },
      { id: "o2", text: "The negotiation succeeded before the fire alarm.", isCorrect: false },
      { id: "o3", text: "The building caught fire last week.", isCorrect: false },
      { id: "o4", text: "They never negotiated terms.", isCorrect: false }
    ],
    correctAnswer: "The fire alarm rang during the negotiation.",
    explanation: "The ongoing negotiation was interrupted by the fire alarm."
  },
  {
    id: "a2_u07_l94_a08",
    type: "writing",
    prompt: "Write a two-clause sentence showing a sudden event interrupting an ongoing action:",
    targetSentence: "I was writing an email when my computer screen suddenly went black.",
    guidelines: "Use 'was/were + verb-ing + when + past simple + suddenly'."
  }
];

enrichLessonData('lesson_a2_7_94', LESSON_A2_7_94_DATA, l94_practice, l94_review, l94_assessment);

// ==========================================
// LESSON 95: Giving Reasons, Causes & Results
// ==========================================
const l95_practice: Exercise[] = [
  {
    id: "a2_u07_l95_p16",
    type: "reading",
    prompt: "Read the project update and answer the question:\n\"Due to heavy snowfall in the alpine pass, the logistics transport was delayed by 24 hours. Consequently, the warehouse team rescheduled deliveries for Saturday morning so that all retail partners would receive their shipments on time.\"\nWhy were deliveries rescheduled for Saturday morning?",
    sourceSentence: "Why were deliveries rescheduled for Saturday morning?",
    targetSentence: "Because the logistics transport was delayed by snowfall.",
    options: [
      { id: "o1", text: "Because the logistics transport was delayed by snowfall.", isCorrect: true },
      { id: "o2", text: "Because the retail partners closed down.", isCorrect: false },
      { id: "o3", text: "Because the warehouse workers went on vacation.", isCorrect: false },
      { id: "o4", text: "Because snowfall never affects transport.", isCorrect: false }
    ],
    correctAnswer: "Because the logistics transport was delayed by snowfall.",
    explanation: "The text explains: 'Due to heavy snowfall... Consequently, the warehouse team rescheduled deliveries...'"
  },
  {
    id: "a2_u07_l95_p17",
    type: "fill_blank",
    prompt: "Choose between 'because' and 'because of':",
    sourceSentence: "The flight was cancelled ____ the dense morning fog.",
    targetSentence: "The flight was cancelled because of the dense morning fog.",
    options: [
      { id: "o1", text: "because of", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "so that", isCorrect: false },
      { id: "o4", text: "therefore", isCorrect: false }
    ],
    correctAnswer: "because of",
    explanation: "\"Because of\" is followed by a noun phrase (\"the dense morning fog\"), whereas \"because\" is followed by a full clause."
  },
  {
    id: "a2_u07_l95_p18",
    type: "speaking",
    prompt: "Speak this cause-and-effect statement aloud clearly:",
    targetSentence: "The server crashed because of a power surge, so we lost our unsaved data.",
    audioText: "The server crashed because of a power surge, so we lost our unsaved data."
  },
  {
    id: "a2_u07_l95_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "She studied diligently; therefore, she passed the exam with top marks.",
    targetSentence: "She studied diligently; therefore, she passed the exam with top marks."
  },
  {
    id: "a2_u07_l95_p20",
    type: "error_correction",
    prompt: "Identify and fix the conjunction error:",
    sourceSentence: "We stayed indoors because of it was raining heavily.",
    targetSentence: "We stayed indoors because it was raining heavily.",
    options: [
      { id: "o1", text: "We stayed indoors because it was raining heavily.", isCorrect: true },
      { id: "o2", text: "We stayed indoors because of raining heavily.", isCorrect: false },
      { id: "o3", text: "We stayed indoors so it was raining heavily.", isCorrect: false },
      { id: "o4", text: "We stayed indoors therefore it rained.", isCorrect: false }
    ],
    correctAnswer: "We stayed indoors because it was raining heavily.",
    explanation: "\"It was raining heavily\" is a subject + verb clause, so use \"because\", not \"because of\"."
  },
  {
    id: "a2_u07_l95_p21",
    type: "mediation",
    prompt: "Mediation: Explain to a client why the scheduled product launch date was moved back:",
    sourceSentence: "Why did you postpone the software release by two weeks?",
    targetSentence: "We postponed the launch because we found a critical security bug during beta testing, so we need two extra weeks to ensure total data protection for your team.",
    options: [
      { id: "o1", text: "We postponed the launch because we found a critical security bug during beta testing, so we need two extra weeks to ensure total data protection for your team.", isCorrect: true },
      { id: "o2", text: "Because we do not like software.", isCorrect: false },
      { id: "o3", text: "Software is always postponed for fun.", isCorrect: false },
      { id: "o4", text: "No reason at all.", isCorrect: false }
    ],
    correctAnswer: "We postponed the launch because we found a critical security bug during beta testing, so we need two extra weeks to ensure total data protection for your team.",
    explanation: "Clearly explains the cause (found a bug) and the justified result (need extra time for security)."
  },
  {
    id: "a2_u07_l95_p22",
    type: "match_pairs",
    prompt: "Match connectors of cause and effect with their grammatical patterns:",
    options: [
      { id: "m1", text: "because / since" },
      { id: "m1_m", text: "+ Full Clause (Subject + Verb)" },
      { id: "m2", text: "because of / due to" },
      { id: "m2_m", text: "+ Noun Phrase / Gerund" },
      { id: "m3", text: "so / as a result" },
      { id: "m3_m", text: "Introduces the consequence/result" },
      { id: "m4", text: "in order to / so as to" },
      { id: "m4_m", text: "+ Base Verb (Purpose)" }
    ]
  },
  {
    id: "a2_u07_l95_p23",
    type: "word_ordering",
    prompt: "Put the words in order to form a result sentence with 'so':",
    sourceSentence: "The train was delayed so we took a taxi to the meeting.",
    targetSentence: "The train was delayed so we took a taxi to the meeting",
    wordBank: ["The", "train", "was", "delayed", "so", "we", "took", "a", "taxi", "to", "the", "meeting", "because", "due"],
    explanation: "Cause (The train was delayed) + so + result (we took a taxi to the meeting)."
  },
  {
    id: "a2_u07_l95_p24",
    type: "recognition",
    prompt: "Which connector indicates a purpose / intention rather than a cause?",
    sourceSentence: "so that / because / since / due to",
    targetSentence: "so that",
    options: [
      { id: "o1", text: "so that", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "since", isCorrect: false },
      { id: "o4", text: "due to", isCorrect: false }
    ],
    correctAnswer: "so that",
    explanation: "\"So that\" introduces the goal or purpose of an action (e.g., I studied hard so that I could pass)."
  },
  {
    id: "a2_u07_l95_p25",
    type: "dialogue_completion",
    prompt: "Complete the workplace conversation explaining a decision:",
    sourceSentence: "Manager: \"Why did we choose cloud hosting over on-premise servers?\"\nDev Lead: \"____\"",
    targetSentence: "Because cloud hosting offers automatic backups and scalability, which significantly reduces our maintenance costs.",
    options: [
      { id: "o1", text: "Because cloud hosting offers automatic backups and scalability, which significantly reduces our maintenance costs.", isCorrect: true },
      { id: "o2", text: "Because of we wanted to buy more computers.", isCorrect: false },
      { id: "o3", text: "So cloud is in the sky.", isCorrect: false },
      { id: "o4", text: "Therefore we didn't do anything.", isCorrect: false }
    ],
    correctAnswer: "Because cloud hosting offers automatic backups and scalability, which significantly reduces our maintenance costs.",
    explanation: "Provides clear cause-effect justification with \"Because... which reduces...\""
  },
  {
    id: "a2_u07_l95_p26",
    type: "personal_production",
    prompt: "Write a sentence giving a reason for why you are learning English using 'because' or 'in order to':",
    targetSentence: "I am learning English because I want to communicate effectively with international colleagues.",
    guidelines: "Use 'because + subject + verb' or 'in order to + base verb' to state your reason."
  }
];

const l95_review: Exercise[] = [
  {
    id: "a2_u07_l95_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct connector:",
    sourceSentence: "The concert was cancelled ____ the singer lost her voice.",
    targetSentence: "The concert was cancelled because the singer lost her voice.",
    options: [
      { id: "o1", text: "because", isCorrect: true },
      { id: "o2", text: "because of", isCorrect: false },
      { id: "o3", text: "so that", isCorrect: false },
      { id: "o4", text: "due", isCorrect: false }
    ],
    correctAnswer: "because",
    explanation: "\"the singer lost her voice\" is a full clause; use \"because\"."
  },
  {
    id: "a2_u07_l95_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the double connector error:",
    sourceSentence: "Because it was raining so we stayed home.",
    targetSentence: "Because it was raining, we stayed home.",
    options: [
      { id: "o1", text: "Because it was raining, we stayed home.", isCorrect: true },
      { id: "o2", text: "Because of it was raining so we stayed home.", isCorrect: false },
      { id: "o3", text: "Because raining so we stayed at home.", isCorrect: false },
      { id: "o4", text: "It was raining so because we stayed home.", isCorrect: false }
    ],
    correctAnswer: "Because it was raining, we stayed home.",
    explanation: "Never use \"because\" and \"so\" together in the same sentence structure."
  },
  {
    id: "a2_u07_l95_r08",
    type: "speaking",
    prompt: "Speak this cause and result sentence aloud:",
    targetSentence: "We arrived early in order to get front row seats for the presentation.",
    audioText: "We arrived early in order to get front row seats for the presentation."
  }
];

const l95_assessment: Exercise[] = [
  {
    id: "a2_u07_l95_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly demonstrates 'due to' followed by a noun phrase?",
    sourceSentence: "The bridge was closed due to severe storm damage.",
    targetSentence: "The bridge was closed due to severe storm damage.",
    options: [
      { id: "o1", text: "The bridge was closed due to severe storm damage.", isCorrect: true },
      { id: "o2", text: "The bridge was closed due to it was storming heavily.", isCorrect: false },
      { id: "o3", text: "The bridge was closed due storm damaged it.", isCorrect: false },
      { id: "o4", text: "Due to the bridge closed we turned around.", isCorrect: false }
    ],
    correctAnswer: "The bridge was closed due to severe storm damage.",
    explanation: "\"Due to\" is properly followed by the noun phrase \"severe storm damage\"."
  },
  {
    id: "a2_u07_l95_a07",
    type: "listening",
    prompt: "Listen and identify the reason for the meeting postponement:",
    audioText: "We had to reschedule the meeting because the main conference room was double-booked.",
    targetSentence: "The conference room had a scheduling conflict.",
    options: [
      { id: "o1", text: "The conference room had a scheduling conflict.", isCorrect: true },
      { id: "o2", text: "The manager cancelled the project.", isCorrect: false },
      { id: "o3", text: "The meeting room was under construction.", isCorrect: false },
      { id: "o4", text: "Nobody wanted to attend.", isCorrect: false }
    ],
    correctAnswer: "The conference room had a scheduling conflict.",
    explanation: "\"Double-booked\" means two different groups reserved the room at the same time."
  },
  {
    id: "a2_u07_l95_a08",
    type: "writing",
    prompt: "Write a cause-and-effect sentence about taking a break using 'so':",
    targetSentence: "I had worked for four hours without stopping, so I decided to take a thirty-minute walk.",
    guidelines: "Use 'Clause 1, so + Clause 2' to show the cause and resulting action."
  }
];

enrichLessonData('lesson_a2_7_95', LESSON_A2_7_95_DATA, l95_practice, l95_review, l95_assessment);
