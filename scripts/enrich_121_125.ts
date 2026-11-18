import { Exercise } from '../src/types';
import { LESSON_A2_9_121_DATA } from '../src/data/lessons/lesson_a2_9_121';
import { LESSON_A2_9_122_DATA } from '../src/data/lessons/lesson_a2_9_122';
import { LESSON_A2_9_123_DATA } from '../src/data/lessons/lesson_a2_9_123';
import { LESSON_A2_9_124_DATA } from '../src/data/lessons/lesson_a2_9_124';
import { LESSON_A2_9_125_DATA } from '../src/data/lessons/lesson_a2_9_125';
import { enrichUnit9LessonData } from './enrich_unit9_helper';

// =========================================================================
// LESSON 121: Life Milestones, Growing Up & Personal Background
// =========================================================================
const l121_practice: Exercise[] = [
  {
    id: "a2_u09_l121_p16",
    type: "reading",
    prompt: "Read the biography snippet and answer the question:\n\"Maya was born in a coastal village in Kerala. She grew up helping in her family's spice shop. When she turned eighteen, she relocated to Bangalore to study computer science. Looking back on her childhood, she considers her parents' work ethic her biggest inspiration.\"\nWhy did Maya relocate to Bangalore?",
    sourceSentence: "Why did Maya relocate to Bangalore?",
    targetSentence: "To pursue higher education in computer science.",
    options: [
      { id: "o1", text: "To pursue higher education in computer science.", isCorrect: true },
      { id: "o2", text: "To open a new spice shop with her family.", isCorrect: false },
      { id: "o3", text: "Because she retired from her job.", isCorrect: false },
      { id: "o4", text: "To spend her childhood near the coast.", isCorrect: false }
    ],
    correctAnswer: "To pursue higher education in computer science.",
    explanation: "The text states: 'When she turned eighteen, she relocated to Bangalore to study computer science.'"
  },
  {
    id: "a2_u09_l121_p17",
    type: "speaking",
    prompt: "Respond with natural rhythm: Describe where you grew up and a childhood habit using 'used to'.",
    sourceSentence: "I was born and raised in a quiet town, and I used to ride my bicycle everywhere with my neighbors.",
    targetSentence: "I was born and raised in a quiet town, and I used to ride my bicycle everywhere with my neighbors.",
    audioText: "I was born and raised in a quiet town, and I used to ride my bicycle everywhere with my neighbors.",
    explanation: "Using 'born and raised in' and 'used to + verb' produces natural background narration."
  },
  {
    id: "a2_u09_l121_p18",
    type: "match_pairs",
    prompt: "Match the life milestone collocations with their meanings:",
    options: [
      { id: "m1", text: "graduate from university" },
      { id: "m1_m", text: "complete a degree program" },
      { id: "m2", text: "relocate across the country" },
      { id: "m2_m", text: "move one's permanent home to a new city" },
      { id: "m3", text: "reach a major milestone" },
      { id: "m3_m", text: "achieve a significant life goal" },
      { id: "m4", text: "look back on memories" },
      { id: "m4_m", text: "reflect upon past childhood events" }
    ]
  },
  {
    id: "a2_u09_l121_p19",
    type: "mediation",
    prompt: "Your colleague is filling out a professional bio in English. Translate and explain this summary for them: 'मेरा जन्म जयपुर में हुआ था और मैं वहीं पला-बढ़ा, लेकिन 2020 में मैंने मुंबई में अपना करियर शुरू किया।'",
    sourceSentence: "मेरा जन्म जयपुर में हुआ था और मैं वहीं पला-बढ़ा, लेकिन 2020 में मैंने मुंबई में अपना करियर शुरू किया।",
    targetSentence: "I was born and raised in Jaipur, but I began my professional career in Mumbai in 2020.",
    options: [
      { id: "o1", text: "I was born and raised in Jaipur, but I began my professional career in Mumbai in 2020.", isCorrect: true },
      { id: "o2", text: "I am growing up in Jaipur and starting career now in Mumbai 2020.", isCorrect: false },
      { id: "o3", text: "I used to born in Jaipur and relocated tomorrow.", isCorrect: false }
    ],
    correctAnswer: "I was born and raised in Jaipur, but I began my professional career in Mumbai in 2020.",
    explanation: "Captures 'born and raised in' and historical past tense 'began my professional career in [year]'."
  },
  {
    id: "a2_u09_l121_p20",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this life narrative sentence:",
    sourceSentence: "When I was younger, I use to lived in a village before we moved.",
    targetSentence: "When I was younger, I used to live in a village before we moved.",
    options: [
      { id: "o1", text: "When I was younger, I used to live in a village before we moved.", isCorrect: true },
      { id: "o2", text: "When I was younger, I used to lived in a village before we moved.", isCorrect: false },
      { id: "o3", text: "When I was younger, I use to living in a village before we moved.", isCorrect: false }
    ],
    correctAnswer: "When I was younger, I used to live in a village before we moved.",
    explanation: "The structure is 'used to + base verb' (live), not 'use to' or 'used to lived'."
  },
  {
    id: "a2_u09_l121_p21",
    type: "listening",
    prompt: "Listen to the speaker reflect on their career journey and identify the key turning point:",
    audioText: "At that point in my life, graduating from college was thrilling, but the real turning point was landing my first apprenticeship abroad.",
    targetSentence: "Landing their first apprenticeship abroad was the real turning point.",
    options: [
      { id: "o1", text: "Landing their first apprenticeship abroad was the real turning point.", isCorrect: true },
      { id: "o2", text: "Retiring from work after forty years.", isCorrect: false },
      { id: "o3", text: "Moving back to primary school.", isCorrect: false }
    ],
    correctAnswer: "Landing their first apprenticeship abroad was the real turning point.",
    explanation: "Speaker explicitly states: 'the real turning point was landing my first apprenticeship abroad.'"
  },
  {
    id: "a2_u09_l121_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing where you grew up and one past habit you used to have as a teenager:",
    targetSentence: "I grew up in an active neighborhood near the hills. As a teenager, I used to sketch in my notebook every afternoon.",
    audioText: "I grew up in an active neighborhood near the hills. As a teenager, I used to sketch in my notebook every afternoon."
  }
];

const l121_review: Exercise[] = [
  {
    id: "a2_u09_l121_r06",
    type: "dialogue_completion",
    prompt: "Complete the interview dialogue naturally:",
    sourceSentence: "Interviewer: Tell me about your early background.\nCandidate: _____",
    targetSentence: "I grew up in Valencia, where I finished high school before moving to Madrid for my degree.",
    options: [
      { id: "o1", text: "I grew up in Valencia, where I finished high school before moving to Madrid for my degree.", isCorrect: true },
      { id: "o2", text: "I will be born in Valencia after ten years.", isCorrect: false },
      { id: "o3", text: "I used to be graduating every morning at six.", isCorrect: false },
      { id: "o4", text: "I am relocating to my childhood yesterday.", isCorrect: false }
    ],
    correctAnswer: "I grew up in Valencia, where I finished high school before moving to Madrid for my degree.",
    explanation: "Chronological narrative flow: grew up -> finished high school -> moved for degree."
  },
  {
    id: "a2_u09_l121_r07",
    type: "word_ordering",
    prompt: "Arrange the words to form a coherent statement about past habits:",
    sourceSentence: "We used to spend our summer vacations at our grandparents' farm.",
    targetSentence: "We used to spend our summer vacations at our grandparents' farm",
    wordBank: ["We", "used", "to", "spend", "our", "summer", "vacations", "at", "our", "grandparents'", "farm", "spend", "were"]
  },
  {
    id: "a2_u09_l121_r08",
    type: "translation",
    prompt: "Translate into English: 'वह बीस साल की उम्र में पहली बार विदेश गई थी।'",
    sourceSentence: "वह बीस साल की उम्र में पहली बार विदेश गई थी।",
    targetSentence: "She went abroad for the first time when she was twenty.",
    wordBank: ["She", "went", "abroad", "for", "the", "first", "time", "when", "she", "was", "twenty", "used", "born"]
  },
  {
    id: "a2_u09_l121_r09",
    type: "reading",
    prompt: "Read the personal essay excerpt:\n\"Growing up in an industrial city gave me a practical perspective on life. We didn't have much luxury, but my parents emphasized the importance of discipline and curiosity.\"\nWhat core values did the author's parents instill?",
    sourceSentence: "What core values did the author's parents instill?",
    targetSentence: "Discipline and curiosity.",
    options: [
      { id: "o1", text: "Discipline and curiosity.", isCorrect: true },
      { id: "o2", text: "Expensive luxury and leisure.", isCorrect: false },
      { id: "o3", text: "Moving away every year.", isCorrect: false }
    ],
    correctAnswer: "Discipline and curiosity.",
    explanation: "The text states: 'my parents emphasized the importance of discipline and curiosity.'"
  },
  {
    id: "a2_u09_l121_r10",
    type: "listen_and_type",
    prompt: "Listen to the recording and type exactly what you hear:",
    audioText: "Looking back on my early career, taking that risk was the best decision I ever made.",
    targetSentence: "Looking back on my early career, taking that risk was the best decision I ever made.",
    explanation: "Check punctuation and spelling of 'looking back on' and 'decision'."
  }
];

const l121_assess: Exercise[] = [
  {
    id: "a2_u09_l121_a06",
    type: "multiple_choice",
    prompt: "Select the sentence with accurate time clause punctuation and tense:",
    sourceSentence: "When she graduated from medical school in 2018, she immediately started her hospital residency.",
    targetSentence: "When she graduated from medical school in 2018, she immediately started her hospital residency.",
    options: [
      { id: "o1", text: "When she graduated from medical school in 2018, she immediately started her hospital residency.", isCorrect: true },
      { id: "o2", text: "When she graduates in 2018, she was starting residency yesterday.", isCorrect: false },
      { id: "o3", text: "She graduated from medical school while she starts immediately.", isCorrect: false },
      { id: "o4", text: "When she used to graduate, she relocates tomorrow.", isCorrect: false }
    ],
    correctAnswer: "When she graduated from medical school in 2018, she immediately started her hospital residency.",
    explanation: "Completed sequential past actions introduced with a past time clause 'When she graduated...'."
  },
  {
    id: "a2_u09_l121_a07",
    type: "speaking",
    prompt: "Read aloud fluently: 'After spending fifteen years in public service, my father retired with pride.'",
    sourceSentence: "After spending fifteen years in public service, my father retired with pride.",
    targetSentence: "After spending fifteen years in public service, my father retired with pride.",
    audioText: "After spending fifteen years in public service, my father retired with pride.",
    explanation: "Focus on clear past tense endings and rhythm in 'retired with pride'."
  },
  {
    id: "a2_u09_l121_a08",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct preposition:",
    sourceSentence: "He was born ____ the fourth of July ____ a small maternity hospital.",
    targetSentence: "He was born on the fourth of July in a small maternity hospital.",
    options: [
      { id: "o1", text: "on / in", isCorrect: true },
      { id: "o2", text: "at / on", isCorrect: false },
      { id: "o3", text: "in / at", isCorrect: false },
      { id: "o4", text: "to / for", isCorrect: false }
    ],
    correctAnswer: "on / in",
    explanation: "We use 'on' for specific calendar dates ('on the fourth of July') and 'in' for enclosed locations ('in a hospital')."
  },
  {
    id: "a2_u09_l121_a09",
    type: "mediation",
    prompt: "Summarize this Spanish sentence into natural English for a company newsletter: 'Nací en Colombia pero me trasladé a Londres a los diecinueve años para empezar mi carrera profesional.'",
    sourceSentence: "Nací en Colombia pero me trasladé a Londres a los diecinueve años para empezar mi carrera profesional.",
    targetSentence: "I was born in Colombia but relocated to London at age nineteen to launch my career.",
    options: [
      { id: "o1", text: "I was born in Colombia but relocated to London at age nineteen to launch my career.", isCorrect: true },
      { id: "o2", text: "I am born in Colombia and going to London nineteen years ago.", isCorrect: false },
      { id: "o3", text: "I used to be born in London and relocated Colombia.", isCorrect: false }
    ],
    correctAnswer: "I was born in Colombia but relocated to London at age nineteen to launch my career.",
    explanation: "Accurate translation preserving past milestone details."
  },
  {
    id: "a2_u09_l121_a10",
    type: "word_ordering",
    prompt: "Form a correct sentence about personal background:",
    sourceSentence: "Relocating to another country was a major milestone in their lives.",
    targetSentence: "Relocating to another country was a major milestone in their lives",
    wordBank: ["Relocating", "to", "another", "country", "was", "a", "major", "milestone", "in", "their", "lives", "were", "did"]
  }
];

// =========================================================================
// LESSON 122: Present Perfect for Life Experiences ("Have you ever...?")
// =========================================================================
const l122_practice: Exercise[] = [
  {
    id: "a2_u09_l122_p16",
    type: "reading",
    prompt: "Read the conversational exchange:\n\"Liam: Have you ever traveled outside Europe?\nSofia: Yes, I have! I've visited Japan twice, and I've even climbed Mount Fuji.\nLiam: That sounds incredible. I've never been to Asia, but I've always wanted to go.\"\nWhat life experience has Sofia had?",
    sourceSentence: "What life experience has Sofia had?",
    targetSentence: "She has visited Japan twice and climbed Mount Fuji.",
    options: [
      { id: "o1", text: "She has visited Japan twice and climbed Mount Fuji.", isCorrect: true },
      { id: "o2", text: "She has never left Europe.", isCorrect: false },
      { id: "o3", text: "She lives in Asia permanently.", isCorrect: false },
      { id: "o4", text: "She climbed Mount Fuji yesterday.", isCorrect: false }
    ],
    correctAnswer: "She has visited Japan twice and climbed Mount Fuji.",
    explanation: "Sofia states: 'I've visited Japan twice, and I've even climbed Mount Fuji.'"
  },
  {
    id: "a2_u09_l122_p17",
    type: "speaking",
    prompt: "Practice asking and answering with natural intonation: 'Have you ever tried rock climbing? No, I've never tried it, but I'd love to.'",
    sourceSentence: "Have you ever tried rock climbing? No, I've never tried it, but I'd love to.",
    targetSentence: "Have you ever tried rock climbing? No, I've never tried it, but I'd love to.",
    audioText: "Have you ever tried rock climbing? No, I've never tried it, but I'd love to.",
    explanation: "Rising intonation on yes/no questions with 'Have you ever...?' and falling intonation on the response."
  },
  {
    id: "a2_u09_l122_p18",
    type: "match_pairs",
    prompt: "Match the life experience chunks with their usage:",
    options: [
      { id: "m1", text: "Have you ever...?" },
      { id: "m1_m", text: "asking about experiences at any time in life" },
      { id: "m2", text: "I have never..." },
      { id: "m2_m", text: "stating zero life experience with an activity" },
      { id: "m3", text: "I have been to..." },
      { id: "m3_m", text: "visited a destination and returned" },
      { id: "m4", text: "She has gone to..." },
      { id: "m4_m", text: "traveled somewhere and is still there now" }
    ]
  },
  {
    id: "a2_u09_l122_p19",
    type: "mediation",
    prompt: "Your friend wants to ask a foreign guest if they have ever tasted traditional Indian sweets. Help them choose the best polite English phrase:",
    sourceSentence: "क्या आपने कभी पारंपरिक भारतीय मिठाइयों का स्वाद चखा है?",
    targetSentence: "Have you ever tasted traditional Indian sweets?",
    options: [
      { id: "o1", text: "Have you ever tasted traditional Indian sweets?", isCorrect: true },
      { id: "o2", text: "Did you ever tasted Indian sweets tomorrow?", isCorrect: false },
      { id: "o3", text: "Were you taste Indian sweets in your life?", isCorrect: false }
    ],
    correctAnswer: "Have you ever tasted traditional Indian sweets?",
    explanation: "'Have you ever + past participle' is the standard CEFR formula for inquiring about life experiences."
  },
  {
    id: "a2_u09_l122_p20",
    type: "error_correction",
    prompt: "Identify and correct the error with irregular past participle:",
    sourceSentence: "She has already ate at that Michelin-starred restaurant.",
    targetSentence: "She has already eaten at that Michelin-starred restaurant.",
    options: [
      { id: "o1", text: "She has already eaten at that Michelin-starred restaurant.", isCorrect: true },
      { id: "o2", text: "She has already ate at that Michelin-starred restaurant.", isCorrect: false },
      { id: "o3", text: "She is already eaten at that Michelin-starred restaurant.", isCorrect: false }
    ],
    correctAnswer: "She has already eaten at that Michelin-starred restaurant.",
    explanation: "Present perfect requires the past participle 'eaten', not the past simple form 'ate'."
  },
  {
    id: "a2_u09_l122_p21",
    type: "listening",
    prompt: "Listen to the travel enthusiast and choose the statement that matches what they say:",
    audioText: "I've visited more than thirty countries across four continents, but I've never experienced anything as majestic as the Northern Lights.",
    targetSentence: "The speaker has visited over thirty countries and seen the Northern Lights.",
    options: [
      { id: "o1", text: "The speaker has visited over thirty countries and seen the Northern Lights.", isCorrect: true },
      { id: "o2", text: "The speaker has never left their home city.", isCorrect: false },
      { id: "o3", text: "The speaker only visits one country every ten years.", isCorrect: false }
    ],
    correctAnswer: "The speaker has visited over thirty countries and seen the Northern Lights.",
    explanation: "Audio highlights: 'visited more than thirty countries' and experiencing the Northern Lights."
  },
  {
    id: "a2_u09_l122_p22",
    type: "personal_production",
    prompt: "Write 2 sentences about life experiences: one thing you have done in your life and one thing you have never done.",
    targetSentence: "I have swum in the ocean several times. However, I have never tried scuba diving.",
    audioText: "I have swum in the ocean several times. However, I have never tried scuba diving."
  }
];

const l122_review: Exercise[] = [
  {
    id: "a2_u09_l122_r06",
    type: "dialogue_completion",
    prompt: "Complete the dinner table conversation:",
    sourceSentence: "David: Have you ever ridden a camel in the desert?\nNadia: _____",
    targetSentence: "Yes, I did that during my trip to Morocco a few years ago.",
    options: [
      { id: "o1", text: "Yes, I did that during my trip to Morocco a few years ago.", isCorrect: true },
      { id: "o2", text: "No, I am riding a camel tomorrow morning.", isCorrect: false },
      { id: "o3", text: "Yes, I have ride a camel yesterday.", isCorrect: false },
      { id: "o4", text: "I have never do that never.", isCorrect: false }
    ],
    correctAnswer: "Yes, I did that during my trip to Morocco a few years ago.",
    explanation: "Natural transition: answer present perfect question, then supply specific past details using Past Simple ('I did that during my trip...')."
  },
  {
    id: "a2_u09_l122_r07",
    type: "word_ordering",
    prompt: "Form a grammatical question asking about life experiences:",
    sourceSentence: "Have you ever given a speech in front of hundreds of people?",
    targetSentence: "Have you ever given a speech in front of hundreds of people",
    wordBank: ["Have", "you", "ever", "given", "a", "speech", "in", "front", "of", "hundreds", "of", "people", "did", "gave"]
  },
  {
    id: "a2_u09_l122_r08",
    type: "translation",
    prompt: "Translate into English: 'मैंने अपनी ज़िंदगी में कभी ऐसा खूबसूरत सूर्यास्त नहीं देखा है।'",
    sourceSentence: "मैंने अपनी ज़िंदगी में कभी ऐसा खूबसूरत सूर्यास्त नहीं देखा है।",
    targetSentence: "I have never seen such a beautiful sunset in my life.",
    wordBank: ["I", "have", "never", "seen", "such", "a", "beautiful", "sunset", "in", "my", "life", "saw", "am"]
  },
  {
    id: "a2_u09_l122_r09",
    type: "reading",
    prompt: "Read the team icebreaker survey:\n\"Three of us have run a marathon. Five team members have lived in more than two countries. Interestingly, nobody on our team has ever failed a certification exam.\"\nWhat is true about the team's certification exam record?",
    sourceSentence: "What is true about the team's certification exam record?",
    targetSentence: "Everyone who took a certification exam passed it.",
    options: [
      { id: "o1", text: "Everyone who took a certification exam passed it.", isCorrect: true },
      { id: "o2", text: "Nobody has taken any certification exams.", isCorrect: false },
      { id: "o3", text: "Five team members failed their exams.", isCorrect: false }
    ],
    correctAnswer: "Everyone who took a certification exam passed it.",
    explanation: "'Nobody on our team has ever failed' means all attempts were successful."
  },
  {
    id: "a2_u09_l122_r10",
    type: "listen_and_type",
    prompt: "Listen and type the exact sentence:",
    audioText: "Have you ever thought about starting your own creative business?",
    targetSentence: "Have you ever thought about starting your own creative business?",
    explanation: "Listen carefully to the past participle 'thought'."
  }
];

const l122_assess: Exercise[] = [
  {
    id: "a2_u09_l122_a06",
    type: "multiple_choice",
    prompt: "Choose the correct distinction between 'been to' and 'gone to':",
    sourceSentence: "Where is Clara? She isn't in her office. — She has ____ to the bank to deposit the checks.",
    targetSentence: "She has gone to the bank to deposit the checks.",
    options: [
      { id: "o1", text: "gone", isCorrect: true },
      { id: "o2", text: "been", isCorrect: false },
      { id: "o3", text: "went", isCorrect: false },
      { id: "o4", text: "visited", isCorrect: false }
    ],
    correctAnswer: "gone",
    explanation: "'Has gone to' means she went and has not returned yet (she is still away)."
  },
  {
    id: "a2_u09_l122_a07",
    type: "speaking",
    prompt: "Speak clearly: 'I have traveled by high-speed train across Japan, but I have never flown in a helicopter.'",
    sourceSentence: "I have traveled by high-speed train across Japan, but I have never flown in a helicopter.",
    targetSentence: "I have traveled by high-speed train across Japan, but I have never flown in a helicopter.",
    audioText: "I have traveled by high-speed train across Japan, but I have never flown in a helicopter.",
    explanation: "Clear pronunciation of past participles 'traveled' and 'flown'."
  },
  {
    id: "a2_u09_l122_a08",
    type: "fill_blank",
    prompt: "Fill in the correct forms of the verbs in brackets:",
    sourceSentence: "They have ____ (see) that documentary twice, but they haven't ____ (read) the book yet.",
    targetSentence: "They have seen that documentary twice, but they haven't read the book yet.",
    options: [
      { id: "o1", text: "seen / read", isCorrect: true },
      { id: "o2", text: "saw / readed", isCorrect: false },
      { id: "o3", text: "seen / readed", isCorrect: false },
      { id: "o4", text: "saw / read", isCorrect: false }
    ],
    correctAnswer: "seen / read",
    explanation: "Past participles are 'seen' (/siːn/) and 'read' (/red/)."
  },
  {
    id: "a2_u09_l122_a09",
    type: "mediation",
    prompt: "A Spanish-speaking tourist asks: '¿Has estado alguna vez en un festival de música en vivo?' Explain what they are asking in English:",
    sourceSentence: "¿Has estado alguna vez en un festival de música en vivo?",
    targetSentence: "They are asking if you have ever attended a live music festival in your life.",
    options: [
      { id: "o1", text: "They are asking if you have ever attended a live music festival in your life.", isCorrect: true },
      { id: "o2", text: "They are inviting you to go to a music festival tomorrow.", isCorrect: false },
      { id: "o3", text: "They want to know why you dislike live music festivals.", isCorrect: false }
    ],
    correctAnswer: "They are asking if you have ever attended a live music festival in your life.",
    explanation: "Interprets the experiential question 'Have you ever been to a live music festival?' accurately."
  },
  {
    id: "a2_u09_l122_a10",
    type: "word_ordering",
    prompt: "Arrange the words into a negative experiential statement:",
    sourceSentence: "My grandparents have never used a smartphone or a tablet.",
    targetSentence: "My grandparents have never used a smartphone or a tablet",
    wordBank: ["My", "grandparents", "have", "never", "used", "a", "smartphone", "or", "a", "tablet", "did", "use"]
  }
];

// =========================================================================
// LESSON 123: Present Perfect vs. Past Simple (Unspecified vs. Specific Time)
// =========================================================================
const l123_practice: Exercise[] = [
  {
    id: "a2_u09_l123_p16",
    type: "reading",
    prompt: "Read the interview extract:\n\"A: Have you ever visited South America?\nB: Yes, I have. I went to Peru in 2019. I hiked the Inca Trail and stayed in Cusco for ten days.\"\nWhy does speaker B switch from Present Perfect to Past Simple?",
    sourceSentence: "Why does speaker B switch from Present Perfect to Past Simple?",
    targetSentence: "Because the speaker specifies an exact past time ('in 2019') and recounts finished chronological events.",
    options: [
      { id: "o1", text: "Because the speaker specifies an exact past time ('in 2019') and recounts finished chronological events.", isCorrect: true },
      { id: "o2", text: "Because the trip is still happening right now.", isCorrect: false },
      { id: "o3", text: "Because speaker B forgot what year it was.", isCorrect: false },
      { id: "o4", text: "Because Present Perfect cannot be used with South America.", isCorrect: false }
    ],
    correctAnswer: "Because the speaker specifies an exact past time ('in 2019') and recounts finished chronological events.",
    explanation: "Present Perfect introduces life experience; Past Simple provides specific past details and time markers."
  },
  {
    id: "a2_u09_l123_p17",
    type: "speaking",
    prompt: "Practice contrasting general experience with specific details:\n'I have driven an electric car before. I rented one last summer when I visited Norway.'",
    sourceSentence: "I have driven an electric car before. I rented one last summer when I visited Norway.",
    targetSentence: "I have driven an electric car before. I rented one last summer when I visited Norway.",
    audioText: "I have driven an electric car before. I rented one last summer when I visited Norway.",
    explanation: "Smooth transition from Present Perfect (general experience) to Past Simple ('rented... last summer')."
  },
  {
    id: "a2_u09_l123_p18",
    type: "match_pairs",
    prompt: "Match each time phrase with the correct verb tense it typically takes:",
    options: [
      { id: "m1", text: "yesterday afternoon / in 2021 / 3 days ago" },
      { id: "m1_m", text: "Past Simple (specific completed past time)" },
      { id: "m2", text: "so far / ever / in my entire life" },
      { id: "m2_m", text: "Present Perfect (unspecified life time frame)" },
      { id: "m3", text: "last Friday night" },
      { id: "m3_m", text: "Past Simple (fixed past marker)" },
      { id: "m4", text: "already / never / up to now" },
      { id: "m4_m", text: "Present Perfect (connection to current present moment)" }
    ]
  },
  {
    id: "a2_u09_l123_p19",
    type: "mediation",
    prompt: "Your colleague wrote: 'I have seen that client yesterday at 2 PM.' Explain in simple terms why this is incorrect and what to change:",
    sourceSentence: "I have seen that client yesterday at 2 PM.",
    targetSentence: "Because 'yesterday at 2 PM' is a specific finished past time, you must use Past Simple: 'I saw that client yesterday at 2 PM.'",
    options: [
      { id: "o1", text: "Because 'yesterday at 2 PM' is a specific finished past time, you must use Past Simple: 'I saw that client yesterday at 2 PM.'", isCorrect: true },
      { id: "o2", text: "You should use 'I am seeing that client yesterday.'", isCorrect: false },
      { id: "o3", text: "There is no mistake; 'have seen yesterday' is standard.", isCorrect: false }
    ],
    correctAnswer: "Because 'yesterday at 2 PM' is a specific finished past time, you must use Past Simple: 'I saw that client yesterday at 2 PM.'",
    explanation: "Finished specific time markers ('yesterday', 'at 2 PM') require Past Simple ('saw')."
  },
  {
    id: "a2_u09_l123_p20",
    type: "error_correction",
    prompt: "Choose the correct version of this contrasted tense sentence:",
    sourceSentence: "I have bought this laptop two months ago, but I haven't used it much.",
    targetSentence: "I bought this laptop two months ago, but I haven't used it much.",
    options: [
      { id: "o1", text: "I bought this laptop two months ago, but I haven't used it much.", isCorrect: true },
      { id: "o2", text: "I have bought this laptop two months ago, but I didn't used it much.", isCorrect: false },
      { id: "o3", text: "I buy this laptop two months ago, but I haven't use it much.", isCorrect: false }
    ],
    correctAnswer: "I bought this laptop two months ago, but I haven't used it much.",
    explanation: "'Two months ago' demands Past Simple ('bought'), while the second clause correctly expresses duration up to now ('haven't used')."
  },
  {
    id: "a2_u09_l123_p21",
    type: "listening",
    prompt: "Listen to the job applicant explain their project experience and identify when they finished the software migration:",
    audioText: "I've managed several cloud deployments throughout my career. For instance, I successfully led our core database migration in November 2022.",
    targetSentence: "The candidate led the database migration in November 2022.",
    options: [
      { id: "o1", text: "The candidate led the database migration in November 2022.", isCorrect: true },
      { id: "o2", text: "The candidate is migrating the database right now.", isCorrect: false },
      { id: "o3", text: "The candidate has never worked with cloud deployments.", isCorrect: false }
    ],
    correctAnswer: "The candidate led the database migration in November 2022.",
    explanation: "Audio specifies: 'led our core database migration in November 2022.'"
  },
  {
    id: "a2_u09_l123_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: First state an experience using Present Perfect, then give specific details (when/where) using Past Simple.",
    targetSentence: "I have met several famous authors. I met my favorite novelist at a book signing in Edinburgh last year.",
    audioText: "I have met several famous authors. I met my favorite novelist at a book signing in Edinburgh last year."
  }
];

const l123_review: Exercise[] = [
  {
    id: "a2_u09_l123_r06",
    type: "dialogue_completion",
    prompt: "Complete the conversation naturally:",
    sourceSentence: "A: Did you watch the match last night?\nB: No, I didn't. In fact, I _____ any football matches this season.",
    targetSentence: "haven't watched",
    options: [
      { id: "o1", text: "haven't watched", isCorrect: true },
      { id: "o2", text: "didn't watched", isCorrect: false },
      { id: "o3", text: "wasn't watching yesterday", isCorrect: false },
      { id: "o4", text: "not have watched", isCorrect: false }
    ],
    correctAnswer: "haven't watched",
    explanation: "'This season' is an unfinished time period connecting to the present, requiring Present Perfect."
  },
  {
    id: "a2_u09_l123_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a correct sentence contrasting past and present relevance:",
    sourceSentence: "I lost my house keys yesterday and I still haven't found them.",
    targetSentence: "I lost my house keys yesterday and I still haven't found them",
    wordBank: ["I", "lost", "my", "house", "keys", "yesterday", "and", "I", "still", "haven't", "found", "them", "have", "find"]
  },
  {
    id: "a2_u09_l123_r08",
    type: "translation",
    prompt: "Translate into English: 'हम 2018 में पेरिस गए थे, लेकिन हम कभी इटली नहीं गए हैं।'",
    sourceSentence: "हम 2018 में पेरिस गए थे, लेकिन हम कभी इटली नहीं गए हैं।",
    targetSentence: "We went to Paris in 2018, but we have never been to Italy.",
    wordBank: ["We", "went", "to", "Paris", "in", "2018,", "but", "we", "have", "never", "been", "to", "Italy.", "gone", "were"]
  },
  {
    id: "a2_u09_l123_r09",
    type: "reading",
    prompt: "Read the book review excerpt:\n\"Elena Ferrante has written many bestselling novels over her career. She published her breakthrough novel in 2011, which earned international acclaim.\"\nIdentify the tense usage:",
    sourceSentence: "Identify the tense usage:",
    targetSentence: "'has written' reflects life achievement so far, while 'published' marks a specific past date (2011).",
    options: [
      { id: "o1", text: "'has written' reflects life achievement so far, while 'published' marks a specific past date (2011).", isCorrect: true },
      { id: "o2", text: "Both clauses describe actions happening right now.", isCorrect: false },
      { id: "o3", text: "Both verbs are in future tense.", isCorrect: false }
    ],
    correctAnswer: "'has written' reflects life achievement so far, while 'published' marks a specific past date (2011).",
    explanation: "Presents general career accomplishments in Present Perfect and specific historic publication in Past Simple."
  },
  {
    id: "a2_u09_l123_r10",
    type: "listen_and_type",
    prompt: "Listen and type accurately:",
    audioText: "I've already eaten breakfast, but I had a coffee an hour ago.",
    targetSentence: "I've already eaten breakfast, but I had a coffee an hour ago.",
    explanation: "Notice the difference between 'I've already eaten' (Present Perfect) and 'I had ... an hour ago' (Past Simple)."
  }
];

const l123_assess: Exercise[] = [
  {
    id: "a2_u09_l123_a06",
    type: "multiple_choice",
    prompt: "Which pair of verb forms correctly completes the sentence?\n'Marcus ____ (live) in Berlin when he was a student, but he ____ (live) in Munich for the past four years.'",
    sourceSentence: "Marcus ____ in Berlin when he was a student, but he ____ in Munich for the past four years.",
    targetSentence: "lived / has lived",
    options: [
      { id: "o1", text: "lived / has lived", isCorrect: true },
      { id: "o2", text: "has lived / lived", isCorrect: false },
      { id: "o3", text: "lived / lived", isCorrect: false },
      { id: "o4", text: "has lived / is living", isCorrect: false }
    ],
    correctAnswer: "lived / has lived",
    explanation: "First clause is a finished past period ('when he was a student' -> Past Simple 'lived'); second clause continues up to now ('for the past four years' -> Present Perfect 'has lived')."
  },
  {
    id: "a2_u09_l123_a07",
    type: "speaking",
    prompt: "Read aloud with accurate inflection: 'She has won three gold medals so far, but she won her first one back in 2016.'",
    sourceSentence: "She has won three gold medals so far, but she won her first one back in 2016.",
    targetSentence: "She has won three gold medals so far, but she won her first one back in 2016.",
    audioText: "She has won three gold medals so far, but she won her first one back in 2016.",
    explanation: "Distinguish 'has won' (life achievement) and 'won' (specific year 2016)."
  },
  {
    id: "a2_u09_l123_a08",
    type: "fill_blank",
    prompt: "Fill in the blanks with the correct past forms:",
    sourceSentence: "We ____ (not see) Oliver since Tuesday, although we ____ (see) him at the staff meeting on Monday.",
    targetSentence: "We haven't seen Oliver since Tuesday, although we saw him at the staff meeting on Monday.",
    options: [
      { id: "o1", text: "haven't seen / saw", isCorrect: true },
      { id: "o2", text: "didn't see / have seen", isCorrect: false },
      { id: "o3", text: "haven't saw / seen", isCorrect: false },
      { id: "o4", text: "didn't saw / saw", isCorrect: false }
    ],
    correctAnswer: "haven't seen / saw",
    explanation: "'Since Tuesday' requires Present Perfect; 'on Monday' requires Past Simple."
  },
  {
    id: "a2_u09_l123_a09",
    type: "mediation",
    prompt: "A Spanish student wrote: 'El año pasado he viajado a Canadá.' How would you explain the correct English translation?",
    sourceSentence: "El año pasado he viajado a Canadá.",
    targetSentence: "In English, with a finished time expression like 'last year', you must use Past Simple: 'Last year I traveled to Canada.'",
    options: [
      { id: "o1", text: "In English, with a finished time expression like 'last year', you must use Past Simple: 'Last year I traveled to Canada.'", isCorrect: true },
      { id: "o2", text: "You should say 'Last year I have traveled to Canada.'", isCorrect: false },
      { id: "o3", text: "Say 'Last year I am traveling to Canada.'", isCorrect: false }
    ],
    correctAnswer: "In English, with a finished time expression like 'last year', you must use Past Simple: 'Last year I traveled to Canada.'",
    explanation: "Spanish often permits Pretérito Perfecto with past time adverbs in some dialects, but English strictly requires Past Simple with 'last year'."
  },
  {
    id: "a2_u09_l123_a10",
    type: "word_ordering",
    prompt: "Form a grammatical sentence contrasting past simple and present perfect:",
    sourceSentence: "I have known Arthur for ten years because we met at university.",
    targetSentence: "I have known Arthur for ten years because we met at university",
    wordBank: ["I", "have", "known", "Arthur", "for", "ten", "years", "because", "we", "met", "at", "university", "know", "have met"]
  }
];

// =========================================================================
// LESSON 124: Present Perfect with "Just", "Already", and "Yet"
// =========================================================================
const l124_practice: Exercise[] = [
  {
    id: "a2_u09_l124_p16",
    type: "reading",
    prompt: "Read the office communication:\n\"Project Lead: Have you finalized the quarterly budget yet?\nAccountant: I've already compiled the numbers and double-checked the expenses. However, our manager hasn't signed off on the document yet.\nProject Lead: Great! I've just sent her a polite reminder.\"\nWhat is the current status of the quarterly budget?",
    sourceSentence: "What is the current status of the quarterly budget?",
    targetSentence: "The figures are ready, but the manager's sign-off is still pending.",
    options: [
      { id: "o1", text: "The figures are ready, but the manager's sign-off is still pending.", isCorrect: true },
      { id: "o2", text: "The budget has not been started at all.", isCorrect: false },
      { id: "o3", text: "The manager has already approved everything.", isCorrect: false },
      { id: "o4", text: "The accountant is compiling the figures tomorrow.", isCorrect: false }
    ],
    correctAnswer: "The figures are ready, but the manager's sign-off is still pending.",
    explanation: "Accountant states: 'already compiled... manager hasn't signed off... yet'."
  },
  {
    id: "a2_u09_l124_p17",
    type: "speaking",
    prompt: "Practice giving quick workplace status updates with clear stress on adverbs:\n'I've already sent the invoice, but I haven't received the confirmation receipt yet.'",
    sourceSentence: "I've already sent the invoice, but I haven't received the confirmation receipt yet.",
    targetSentence: "I've already sent the invoice, but I haven't received the confirmation receipt yet.",
    audioText: "I've already sent the invoice, but I haven't received the confirmation receipt yet.",
    explanation: "Notice the mid-position of 'already' between auxiliary and verb, and end-position of 'yet'."
  },
  {
    id: "a2_u09_l124_p18",
    type: "match_pairs",
    prompt: "Match the adverb with its position and function in Present Perfect sentences:",
    options: [
      { id: "m1", text: "just" },
      { id: "m1_m", text: "between have/has and past participle (a very short time ago)" },
      { id: "m2", text: "already" },
      { id: "m2_m", text: "between have/has and past participle (sooner than expected)" },
      { id: "m3", text: "yet (negatives)" },
      { id: "m3_m", text: "at the end of negative sentences (action expected but not done)" },
      { id: "m4", text: "yet (questions)" },
      { id: "m4_m", text: "at the end of questions (asking if expected action happened)" }
    ]
  },
  {
    id: "a2_u09_l124_p19",
    type: "mediation",
    prompt: "Translate this urgent WhatsApp message into polite professional English for your manager: 'मैंने अभी-अभी क्लाइंट को रिपोर्ट भेज दी है, लेकिन मुझे अभी तक उनका जवाब नहीं मिला है।'",
    sourceSentence: "मैंने अभी-अभी क्लाइंट को रिपोर्ट भेज दी है, लेकिन मुझे अभी तक उनका जवाब नहीं मिला है।",
    targetSentence: "I have just sent the report to the client, but I haven't received their response yet.",
    options: [
      { id: "o1", text: "I have just sent the report to the client, but I haven't received their response yet.", isCorrect: true },
      { id: "o2", text: "I already sent report and no answer coming yesterday.", isCorrect: false },
      { id: "o3", text: "I just now sending report yet I didn't received response.", isCorrect: false }
    ],
    correctAnswer: "I have just sent the report to the client, but I haven't received their response yet.",
    explanation: "Accurately pairs 'have just sent' (अभी-अभी) and 'haven't received ... yet' (अभी तक नहीं)."
  },
  {
    id: "a2_u09_l124_p20",
    type: "error_correction",
    prompt: "Correct the position of the adverb in this sentence:",
    sourceSentence: "We have finished yet the presentation slides.",
    targetSentence: "We have already finished the presentation slides.",
    options: [
      { id: "o1", text: "We have already finished the presentation slides.", isCorrect: true },
      { id: "o2", text: "We yet have finished the presentation slides.", isCorrect: false },
      { id: "o3", text: "We have finished already the presentation slides yet.", isCorrect: false }
    ],
    correctAnswer: "We have already finished the presentation slides.",
    explanation: "'Yet' is not used in affirmative declarative statements in mid-position; 'already' is placed between auxiliary and verb."
  },
  {
    id: "a2_u09_l124_p21",
    type: "listening",
    prompt: "Listen to the announcement at the train station and determine what has just happened:",
    audioText: "Attention passengers on Platform 3: the express train from Manchester has just arrived at the station.",
    targetSentence: "The express train has arrived moments ago.",
    options: [
      { id: "o1", text: "The express train has arrived moments ago.", isCorrect: true },
      { id: "o2", text: "The train has been canceled.", isCorrect: false },
      { id: "o3", text: "The train will arrive in two hours.", isCorrect: false }
    ],
    correctAnswer: "The express train has arrived moments ago.",
    explanation: "'Has just arrived' indicates the arrival occurred a few moments ago."
  },
  {
    id: "a2_u09_l124_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: One thing you have already completed today, and one thing you haven't done yet.",
    targetSentence: "I have already finished my morning emails. However, I haven't eaten lunch yet.",
    audioText: "I have already finished my morning emails. However, I haven't eaten lunch yet."
  }
];

const l124_review: Exercise[] = [
  {
    id: "a2_u09_l124_r06",
    type: "dialogue_completion",
    prompt: "Complete the kitchen conversation:",
    sourceSentence: "A: Would you like some lunch?\nB: No thanks, I've _____ had a sandwich.",
    targetSentence: "just",
    options: [
      { id: "o1", text: "just", isCorrect: true },
      { id: "o2", text: "yet", isCorrect: false },
      { id: "o3", text: "still", isCorrect: false },
      { id: "o4", text: "ever", isCorrect: false }
    ],
    correctAnswer: "just",
    explanation: "'I've just had...' signifies having eaten a few moments before."
  },
  {
    id: "a2_u09_l124_r07",
    type: "word_ordering",
    prompt: "Arrange into a proper question using 'yet':",
    sourceSentence: "Have you received the updated flight boarding pass yet?",
    targetSentence: "Have you received the updated flight boarding pass yet",
    wordBank: ["Have", "you", "received", "the", "updated", "flight", "boarding", "pass", "yet", "already", "did"]
  },
  {
    id: "a2_u09_l124_r08",
    type: "translation",
    prompt: "Translate into English: 'क्या ट्रेन पहले ही छूट चुकी है?'",
    sourceSentence: "क्या ट्रेन पहले ही छूट चुकी है?",
    targetSentence: "Has the train already departed?",
    wordBank: ["Has", "the", "train", "already", "departed?", "Did", "leave", "yet"]
  },
  {
    id: "a2_u09_l124_r09",
    type: "reading",
    prompt: "Read the hotel reception note:\n\"Room 402: The guests have just checked in. Housekeeping has already refreshed the towels, but the welcome basket hasn't been delivered yet.\"\nWhat action is still incomplete?",
    sourceSentence: "What action is still incomplete?",
    targetSentence: "Delivering the welcome fruit basket.",
    options: [
      { id: "o1", text: "Delivering the welcome fruit basket.", isCorrect: true },
      { id: "o2", text: "Checking in the guests.", isCorrect: false },
      { id: "o3", text: "Refreshing the bathroom towels.", isCorrect: false }
    ],
    correctAnswer: "Delivering the welcome fruit basket.",
    explanation: "Text specifies: 'the welcome basket hasn't been delivered yet.'"
  },
  {
    id: "a2_u09_l124_r10",
    type: "listen_and_type",
    prompt: "Listen and write down the sentence exactly:",
    audioText: "We haven't discussed the marketing schedule with our director yet.",
    targetSentence: "We haven't discussed the marketing schedule with our director yet.",
    explanation: "Check the spelling of 'discussed' and the position of 'yet'."
  }
];

const l124_assess: Exercise[] = [
  {
    id: "a2_u09_l124_a06",
    type: "multiple_choice",
    prompt: "Which sentence shows the correct natural position for 'already' in an affirmative answer?",
    sourceSentence: "Don't forget to pay the electric bill. — Don't worry, I've already paid it.",
    targetSentence: "Don't worry, I've already paid it.",
    options: [
      { id: "o1", text: "Don't worry, I've already paid it.", isCorrect: true },
      { id: "o2", text: "Don't worry, I've paid already it.", isCorrect: false },
      { id: "o3", text: "Don't worry, I already have pay it.", isCorrect: false },
      { id: "o4", text: "Don't worry, I have paid it yet.", isCorrect: false }
    ],
    correctAnswer: "Don't worry, I've already paid it.",
    explanation: "'Already' naturally sits between the auxiliary verb 'have' and the past participle 'paid'."
  },
  {
    id: "a2_u09_l124_a07",
    type: "speaking",
    prompt: "Read aloud clearly: 'I have just heard the wonderful news about your promotion!'",
    sourceSentence: "I have just heard the wonderful news about your promotion!",
    targetSentence: "I have just heard the wonderful news about your promotion!",
    audioText: "I have just heard the wonderful news about your promotion!",
    explanation: "Stress 'just' and 'wonderful' with enthusiastic upward inflection."
  },
  {
    id: "a2_u09_l124_a08",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate time adverbs:",
    sourceSentence: "The courier has ____ arrived at the gate, but the package hasn't been scanned ____.",
    targetSentence: "The courier has just arrived at the gate, but the package hasn't been scanned yet.",
    options: [
      { id: "o1", text: "just / yet", isCorrect: true },
      { id: "o2", text: "yet / already", isCorrect: false },
      { id: "o3", text: "already / just", isCorrect: false },
      { id: "o4", text: "ever / never", isCorrect: false }
    ],
    correctAnswer: "just / yet",
    explanation: "'Has just arrived' (recently happened) + 'hasn't been scanned yet' (negative end-position)."
  },
  {
    id: "a2_u09_l124_a09",
    type: "mediation",
    prompt: "Your Spanish teammate asks: '¿Ya has terminado de revisar el informe?' Translate this natural question into English:",
    sourceSentence: "¿Ya has terminado de revisar el informe?",
    targetSentence: "Have you finished reviewing the report yet?",
    options: [
      { id: "o1", text: "Have you finished reviewing the report yet?", isCorrect: true },
      { id: "o2", text: "Did you already finish review report yesterday?", isCorrect: false },
      { id: "o3", text: "Are you finishing yet report now?", isCorrect: false }
    ],
    correctAnswer: "Have you finished reviewing the report yet?",
    explanation: "Questions expecting completion naturally conclude with 'yet' in English."
  },
  {
    id: "a2_u09_l124_a10",
    type: "word_ordering",
    prompt: "Form a natural sentence describing an unexpected accomplishment:",
    sourceSentence: "She has already mastered two programming languages this year.",
    targetSentence: "She has already mastered two programming languages this year",
    wordBank: ["She", "has", "already", "mastered", "two", "programming", "languages", "this", "year", "yet", "mastering"]
  }
];

// =========================================================================
// LESSON 125: Expressing Duration: Present Perfect with "For" and "Since"
// =========================================================================
const l125_practice: Exercise[] = [
  {
    id: "a2_u09_l125_p16",
    type: "reading",
    prompt: "Read the residential profile:\n\"Dr. Aris Thorne has lived in this historic neighborhood since 2012. He has worked as a consultant at the central hospital for over fifteen years. Throughout this time, he has known the local community intimately.\"\nHow long has Dr. Thorne worked at the central hospital?",
    sourceSentence: "How long has Dr. Thorne worked at the central hospital?",
    targetSentence: "For more than fifteen years.",
    options: [
      { id: "o1", text: "For more than fifteen years.", isCorrect: true },
      { id: "o2", text: "Since 2012 only.", isCorrect: false },
      { id: "o3", text: "He retired fifteen years ago.", isCorrect: false },
      { id: "o4", text: "He just started working there yesterday.", isCorrect: false }
    ],
    correctAnswer: "For more than fifteen years.",
    explanation: "The text states: 'He has worked as a consultant at the central hospital for over fifteen years.'"
  },
  {
    id: "a2_u09_l125_p17",
    type: "speaking",
    prompt: "Practice contrasting 'for' and 'since' with fluent timing:\n'I have known my business partner for eight years, ever since we met at university.'",
    sourceSentence: "I have known my business partner for eight years, ever since we met at university.",
    targetSentence: "I have known my business partner for eight years, ever since we met at university.",
    audioText: "I have known my business partner for eight years, ever since we met at university.",
    explanation: "'for eight years' expresses total duration; 'since we met' marks the starting point in the past."
  },
  {
    id: "a2_u09_l125_p18",
    type: "match_pairs",
    prompt: "Match each time expression with either 'for' or 'since':",
    options: [
      { id: "m1", text: "for" },
      { id: "m1_m", text: "three decades / two hours / several months (period of duration)" },
      { id: "m2", text: "since" },
      { id: "m2_m", text: "last Tuesday / 2015 / 8:30 AM / I graduated (starting point)" },
      { id: "m3", text: "How long...?" },
      { id: "m3_m", text: "question asking about duration of an ongoing state" },
      { id: "m4", text: "since then" },
      { id: "m4_m", text: "from that specific moment up to the present" }
    ]
  },
  {
    id: "a2_u09_l125_p19",
    type: "mediation",
    prompt: "Translate and clarify this client statement for your foreign supervisor: 'हम 2019 से इस कंपनी के साथ काम कर रहे हैं और हम सेवा से बहुत संतुष्ट हैं।'",
    sourceSentence: "हम 2019 से इस कंपनी के साथ काम कर रहे हैं और हम सेवा से बहुत संतुष्ट हैं।",
    targetSentence: "We have worked with this company since 2019 and we are very satisfied with the service.",
    options: [
      { id: "o1", text: "We have worked with this company since 2019 and we are very satisfied with the service.", isCorrect: true },
      { id: "o2", text: "We work with company for 2019 and satisfied.", isCorrect: false },
      { id: "o3", text: "We are worked since four years ago.", isCorrect: false }
    ],
    correctAnswer: "We have worked with this company since 2019 and we are very satisfied with the service.",
    explanation: "Uses 'have worked ... since [year]' to express duration started in the past and continuing now."
  },
  {
    id: "a2_u09_l125_p20",
    type: "error_correction",
    prompt: "Correct the preposition error in this duration sentence:",
    sourceSentence: "She has been a certified architect since six years.",
    targetSentence: "She has been a certified architect for six years.",
    options: [
      { id: "o1", text: "She has been a certified architect for six years.", isCorrect: true },
      { id: "o2", text: "She has been a certified architect from six years.", isCorrect: false },
      { id: "o3", text: "She is being a certified architect during six years.", isCorrect: false }
    ],
    correctAnswer: "She has been a certified architect for six years.",
    explanation: "'Six years' is a length of time (duration), so it requires 'for', not 'since'."
  },
  {
    id: "a2_u09_l125_p21",
    type: "listening",
    prompt: "Listen to the speaker talk about their living situation and choose the accurate fact:",
    audioText: "My family moved to this apartment five years ago. So we've lived here for five years, ever since 2019.",
    targetSentence: "The speaker has lived in the apartment for five years, starting in 2019.",
    options: [
      { id: "o1", text: "The speaker has lived in the apartment for five years, starting in 2019.", isCorrect: true },
      { id: "o2", text: "The speaker moved to the apartment yesterday.", isCorrect: false },
      { id: "o3", text: "The speaker is planning to relocate next month.", isCorrect: false }
    ],
    correctAnswer: "The speaker has lived in the apartment for five years, starting in 2019.",
    explanation: "Audio explicitly correlates 'for five years' with 'since 2019'."
  },
  {
    id: "a2_u09_l125_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: How long you have studied English (using 'for'), and since what age or year you started (using 'since').",
    targetSentence: "I have studied English for three years. I have attended this academy since 2023.",
    audioText: "I have studied English for three years. I have attended this academy since 2023."
  }
];

const l125_review: Exercise[] = [
  {
    id: "a2_u09_l125_r06",
    type: "dialogue_completion",
    prompt: "Complete the interview dialogue:",
    sourceSentence: "A: How long have you had this car?\nB: _____",
    targetSentence: "I've had it for about four months; I bought it in October.",
    options: [
      { id: "o1", text: "I've had it for about four months; I bought it in October.", isCorrect: true },
      { id: "o2", text: "I have it since four months ago.", isCorrect: false },
      { id: "o3", text: "I am having it for October.", isCorrect: false },
      { id: "o4", text: "I had it since four months tomorrow.", isCorrect: false }
    ],
    correctAnswer: "I've had it for about four months; I bought it in October.",
    explanation: "'for four months' (duration) + 'bought it in October' (specific purchase event)."
  },
  {
    id: "a2_u09_l125_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a question about duration:",
    sourceSentence: "How long has she been the head of the department?",
    targetSentence: "How long has she been the head of the department",
    wordBank: ["How", "long", "has", "she", "been", "the", "head", "of", "the", "department", "is", "did"]
  },
  {
    id: "a2_u09_l125_r08",
    type: "translation",
    prompt: "Translate into English: 'वह बचपन से ही संगीत का दीवाना रहा है।'",
    sourceSentence: "वह बचपन से ही संगीत का दीवाना रहा है।",
    targetSentence: "He has been passionate about music since childhood.",
    wordBank: ["He", "has", "been", "passionate", "about", "music", "since", "childhood.", "for", "is"]
  },
  {
    id: "a2_u09_l125_r09",
    type: "reading",
    prompt: "Read the language school notice:\n\"Our academy has taught international students since 1995. For nearly three decades, we have provided immersive language programs for learners worldwide.\"\nWhat information does 'since 1995' provide?",
    sourceSentence: "What information does 'since 1995' provide?",
    targetSentence: "The exact founding year when teaching began.",
    options: [
      { id: "o1", text: "The exact founding year when teaching began.", isCorrect: true },
      { id: "o2", text: "The year the school will close.", isCorrect: false },
      { id: "o3", text: "The total number of students enrolled.", isCorrect: false }
    ],
    correctAnswer: "The exact founding year when teaching began.",
    explanation: "'Since' denotes the specific historical starting point."
  },
  {
    id: "a2_u09_l125_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "They have known each other for a very long time, since primary school.",
    targetSentence: "They have known each other for a very long time, since primary school.",
    explanation: "Notice the distinction between 'for a very long time' and 'since primary school'."
  }
];

const l125_assess: Exercise[] = [
  {
    id: "a2_u09_l125_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly expresses duration of an ongoing state?",
    sourceSentence: "We have belonged to this sports club since last December.",
    targetSentence: "We have belonged to this sports club since last December.",
    options: [
      { id: "o1", text: "We have belonged to this sports club since last December.", isCorrect: true },
      { id: "o2", text: "We are belonging to this club for last December.", isCorrect: false },
      { id: "o3", text: "We belonged to this club since six months ago now.", isCorrect: false },
      { id: "o4", text: "We have belong to this club from last December.", isCorrect: false }
    ],
    correctAnswer: "We have belonged to this sports club since last December.",
    explanation: "State verb 'belong' in Present Perfect + 'since last December' (starting point)."
  },
  {
    id: "a2_u09_l125_a07",
    type: "speaking",
    prompt: "Read aloud fluently: 'Professor Vance has taught modern history at the college since 2008.'",
    sourceSentence: "Professor Vance has taught modern history at the college since 2008.",
    targetSentence: "Professor Vance has taught modern history at the college since 2008.",
    audioText: "Professor Vance has taught modern history at the college since 2008.",
    explanation: "Pronounce 'taught' (/tɔːt/) clearly and link 'since 2008'."
  },
  {
    id: "a2_u09_l125_a08",
    type: "fill_blank",
    prompt: "Choose the correct prepositions to fill the gaps:",
    sourceSentence: "I haven't heard from my former roommate ____ months, not ____ she relocated to Sydney.",
    targetSentence: "I haven't heard from my former roommate for months, not since she relocated to Sydney.",
    options: [
      { id: "o1", text: "for / since", isCorrect: true },
      { id: "o2", text: "since / for", isCorrect: false },
      { id: "o3", text: "during / from", isCorrect: false },
      { id: "o4", text: "from / since", isCorrect: false }
    ],
    correctAnswer: "for / since",
    explanation: "'for months' (duration) + 'since she relocated' (specific past event starting point)."
  },
  {
    id: "a2_u09_l125_a09",
    type: "mediation",
    prompt: "Your Spanish colleague writes: 'Vivo aquí desde hace cinco años.' Help them translate this accurately into standard English:",
    sourceSentence: "Vivo aquí desde hace cinco años.",
    targetSentence: "I have lived here for five years.",
    options: [
      { id: "o1", text: "I have lived here for five years.", isCorrect: true },
      { id: "o2", text: "I live here since five years.", isCorrect: false },
      { id: "o3", text: "I am living here from five years ago.", isCorrect: false }
    ],
    correctAnswer: "I have lived here for five years.",
    explanation: "Spanish 'desde hace + period' translates to English 'have lived ... for [period]'."
  },
  {
    id: "a2_u09_l125_a10",
    type: "word_ordering",
    prompt: "Arrange into a proper duration question:",
    sourceSentence: "How many years have they owned this family bakery?",
    targetSentence: "How many years have they owned this family bakery",
    wordBank: ["How", "many", "years", "have", "they", "owned", "this", "family", "bakery", "did", "own"]
  }
];

// Execute enrichment for Lessons 121–125
enrichUnit9LessonData('lesson_a2_9_121', LESSON_A2_9_121_DATA, l121_practice, l121_review, l121_assess);
enrichUnit9LessonData('lesson_a2_9_122', LESSON_A2_9_122_DATA, l122_practice, l122_review, l122_assess);
enrichUnit9LessonData('lesson_a2_9_123', LESSON_A2_9_123_DATA, l123_practice, l123_review, l123_assess);
enrichUnit9LessonData('lesson_a2_9_124', LESSON_A2_9_124_DATA, l124_practice, l124_review, l124_assess);
enrichUnit9LessonData('lesson_a2_9_125', LESSON_A2_9_125_DATA, l125_practice, l125_review, l125_assess);
