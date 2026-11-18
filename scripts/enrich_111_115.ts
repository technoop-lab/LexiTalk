import { Exercise } from '../src/types';
import { LESSON_A2_8_111_DATA } from '../src/data/lessons/lesson_a2_8_111';
import { LESSON_A2_8_112_DATA } from '../src/data/lessons/lesson_a2_8_112';
import { LESSON_A2_8_113_DATA } from '../src/data/lessons/lesson_a2_8_113';
import { LESSON_A2_8_114_DATA } from '../src/data/lessons/lesson_a2_8_114';
import { LESSON_A2_8_115_DATA } from '../src/data/lessons/lesson_a2_8_115';
import { enrichUnit8LessonData } from './enrich_unit8_helper';

// =========================================================================
// LESSON 111: Workplaces, Careers & Job Responsibilities
// =========================================================================
const l111_practice: Exercise[] = [
  {
    id: "a2_u08_l111_p11",
    type: "reading",
    prompt: "Read the job advertisement and answer the question:\n\"Apex Solutions is seeking an Operations Assistant. The successful candidate will be in charge of coordinating client meetings, managing project schedules, and dealing with customer inquiries. Fluency in spoken English and strong multitasking skills are required.\"\nWhat is one of the main responsibilities of the role?",
    sourceSentence: "What is one of the main responsibilities of the role?",
    targetSentence: "Coordinating client meetings and handling customer inquiries.",
    options: [
      { id: "o1", text: "Coordinating client meetings and handling customer inquiries.", isCorrect: true },
      { id: "o2", text: "Writing computer code for mobile applications.", isCorrect: false },
      { id: "o3", text: "Driving delivery trucks across the country.", isCorrect: false },
      { id: "o4", text: "Cooking meals for the executive staff.", isCorrect: false }
    ],
    correctAnswer: "Coordinating client meetings and handling customer inquiries.",
    explanation: "The advertisement specifies coordinating meetings, managing schedules, and dealing with inquiries."
  },
  {
    id: "a2_u08_l111_p12",
    type: "fill_blank",
    prompt: "Choose the correct preposition for workplace duty:",
    sourceSentence: "As a senior analyst, she is responsible ____ training new recruits.",
    targetSentence: "As a senior analyst, she is responsible for training new recruits.",
    options: [
      { id: "o1", text: "for", isCorrect: true },
      { id: "o2", text: "to", isCorrect: false },
      { id: "o3", text: "of", isCorrect: false },
      { id: "o4", text: "with", isCorrect: false }
    ],
    correctAnswer: "for",
    explanation: "We use 'responsible for + verb-ing / noun'."
  },
  {
    id: "a2_u08_l111_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly expresses hierarchical reporting in a company?",
    sourceSentence: "I report directly to the regional marketing director.",
    targetSentence: "I report directly to the regional marketing director.",
    options: [
      { id: "o1", text: "I report directly to the regional marketing director.", isCorrect: true },
      { id: "o2", text: "I report at the regional marketing director.", isCorrect: false },
      { id: "o3", text: "I am reporting with the director directly.", isCorrect: false },
      { id: "o4", text: "I report on the director directly.", isCorrect: false }
    ],
    correctAnswer: "I report directly to the regional marketing director.",
    explanation: "The standard professional collocation is 'report to [manager/supervisor]'."
  },
  {
    id: "a2_u08_l111_p14",
    type: "speaking",
    prompt: "Speak this job description statement clearly:",
    targetSentence: "I deal with client feedback and ensure our projects are delivered on time.",
    audioText: "I deal with client feedback and ensure our projects are delivered on time."
  },
  {
    id: "a2_u08_l111_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the workplace sentence:",
    audioText: "He is in charge of customer support operations.",
    targetSentence: "He is in charge of customer support operations."
  },
  {
    id: "a2_u08_l111_p16",
    type: "error_correction",
    prompt: "Fix the preposition error in job responsibility:",
    sourceSentence: "She is in charge for the accounting department.",
    targetSentence: "She is in charge of the accounting department.",
    options: [
      { id: "o1", text: "She is in charge of the accounting department.", isCorrect: true },
      { id: "o2", text: "She is in charge to the accounting department.", isCorrect: false },
      { id: "o3", text: "She is in charge with accounting department.", isCorrect: false },
      { id: "o4", text: "She is charge of the accounting department.", isCorrect: false }
    ],
    correctAnswer: "She is in charge of the accounting department.",
    explanation: "The idiom is 'in charge of', not 'in charge for'."
  },
  {
    id: "a2_u08_l111_p17",
    type: "mediation",
    prompt: "Mediation: A job applicant asks what working conditions are like in your company. Summarize accurately:",
    sourceSentence: "What kind of working hours and environment do you offer here?",
    targetSentence: "We offer flexible working hours, hybrid remote options, and comprehensive health benefits.",
    options: [
      { id: "o1", text: "We offer flexible working hours, hybrid remote options, and comprehensive health benefits.", isCorrect: true },
      { id: "o2", text: "You must work twenty-four hours every weekend without sleep.", isCorrect: false },
      { id: "o3", text: "The office roof is painted white.", isCorrect: false }
    ],
    correctAnswer: "We offer flexible working hours, hybrid remote options, and comprehensive health benefits.",
    explanation: "Highlights key workplace terms: flexible hours, hybrid options, health benefits."
  },
  {
    id: "a2_u08_l111_p18",
    type: "match_pairs",
    prompt: "Match the workplace idioms and collocations:",
    options: [
      { id: "m1", text: "meet a deadline" },
      { id: "m1_m", text: "finish a task or project before the due time" },
      { id: "m2", text: "work overtime" },
      { id: "m2_m", text: "work extra hours beyond normal schedule" },
      { id: "m3", text: "apply for a vacancy" },
      { id: "m3_m", text: "submit a formal job application for an open position" },
      { id: "m4", text: "get a promotion" },
      { id: "m4_m", text: "advance to a higher position with more responsibility" }
    ]
  },
  {
    id: "a2_u08_l111_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing professional duties:",
    sourceSentence: "Our team collaborates closely to resolve complex technical challenges.",
    targetSentence: "Our team collaborates closely to resolve complex technical challenges",
    wordBank: ["Our", "team", "collaborates", "closely", "to", "resolve", "complex", "technical", "challenges", "is", "reports"]
  },
  {
    id: "a2_u08_l111_p20",
    type: "translation",
    prompt: "Translate into English: 'वह अंतरराष्ट्रीय ग्राहकों के साथ बातचीत करने की प्रभारी है।'",
    sourceSentence: "वह अंतरराष्ट्रीय ग्राहकों के साथ बातचीत करने की प्रभारी है।",
    targetSentence: "She is in charge of negotiating with international clients.",
    wordBank: ["She", "is", "in", "charge", "of", "negotiating", "with", "international", "clients", "for", "responsible"]
  },
  {
    id: "a2_u08_l111_p21",
    type: "listening",
    prompt: "Listen to the interview excerpt and choose the correct answer:",
    audioText: "In my previous role, I led a cross-functional team of five analysts and managed our annual software budget.",
    targetSentence: "The candidate led a team of five analysts and managed the software budget.",
    options: [
      { id: "o1", text: "The candidate led a team of five analysts and managed the software budget.", isCorrect: true },
      { id: "o2", text: "The candidate worked alone without any team responsibilities.", isCorrect: false },
      { id: "o3", text: "The candidate has never worked in a technology company.", isCorrect: false }
    ],
    correctAnswer: "The candidate led a team of five analysts and managed the software budget.",
    explanation: "Audio explicitly states leadership of five analysts and budget management."
  },
  {
    id: "a2_u08_l111_p22",
    type: "personal_production",
    prompt: "Describe your current job or ideal career in 2-3 sentences using workplace vocabulary:",
    targetSentence: "In my ideal career, I would manage creative projects, collaborate with international colleagues, and solve meaningful real-world problems.",
    audioText: "In my ideal career, I would manage creative projects, collaborate with international colleagues, and solve meaningful real-world problems."
  }
];

const l111_review: Exercise[] = [
  {
    id: "a2_u08_l111_r9",
    type: "dialogue_completion",
    prompt: "Complete the interview dialogue naturally:",
    sourceSentence: "Interviewer: What do you find most rewarding about your current role?\nCandidate: _____",
    targetSentence: "I really enjoy mentoring junior teammates and seeing our solutions improve client efficiency.",
    options: [
      { id: "o1", text: "I really enjoy mentoring junior teammates and seeing our solutions improve client efficiency.", isCorrect: true },
      { id: "o2", text: "I like eating snacks in the kitchen.", isCorrect: false },
      { id: "o3", text: "I did not apply to any job next year.", isCorrect: false },
      { id: "o4", text: "Offices have big glass windows.", isCorrect: false }
    ],
    correctAnswer: "I really enjoy mentoring junior teammates and seeing our solutions improve client efficiency.",
    explanation: "Gives a thoughtful, professional response focusing on team leadership and impact."
  },
  {
    id: "a2_u08_l111_r10",
    type: "reading",
    prompt: "Read the performance appraisal policy note:\n\"Annual performance reviews evaluate key competencies including goal completion, team collaboration, and proactive problem solving.\"\nWhat are performance reviews based on?",
    sourceSentence: "What are performance reviews based on?",
    targetSentence: "Goal completion, collaboration, and proactive problem solving.",
    options: [
      { id: "o1", text: "Goal completion, collaboration, and proactive problem solving.", isCorrect: true },
      { id: "o2", text: "Only attendance on Monday mornings.", isCorrect: false },
      { id: "o3", text: "The color of clothing employees wear.", isCorrect: false }
    ],
    correctAnswer: "Goal completion, collaboration, and proactive problem solving.",
    explanation: "The text specifies these three key evaluation areas."
  }
];

const l111_assess: Exercise[] = [
  {
    id: "a2_u08_l111_a9",
    type: "mediation",
    prompt: "Mediation: A colleague is feeling overwhelmed by a looming project deadline. Suggest a practical workflow solution:",
    sourceSentence: "I have three major client reports due tomorrow and I don't know how I'll finish them all!",
    targetSentence: "Let's review the reports together, prioritize the most urgent client, and delegate the data entry part to the support team.",
    options: [
      { id: "o1", text: "Let's review the reports together, prioritize the most urgent client, and delegate the data entry part to the support team.", isCorrect: true },
      { id: "o2", text: "You should turn off your computer and go to sleep immediately.", isCorrect: false },
      { id: "o3", text: "Paper reports were invented many centuries ago.", isCorrect: false }
    ],
    correctAnswer: "Let's review the reports together, prioritize the most urgent client, and delegate the data entry part to the support team.",
    explanation: "Provides constructive, realistic project triage and task delegation."
  },
  {
    id: "a2_u08_l111_a10",
    type: "speaking",
    prompt: "Speak your final professional commitment statement:",
    targetSentence: "Clear communication, accountability, and continuous learning drive long-term career growth.",
    audioText: "Clear communication, accountability, and continuous learning drive long-term career growth."
  }
];

// =========================================================================
// LESSON 112: Free Time Activities, Sports & Fitness
// =========================================================================
const l112_practice: Exercise[] = [
  {
    id: "a2_u08_l112_p11",
    type: "reading",
    prompt: "Read the community fitness center schedule and answer:\n\"The sports complex offers swimming lessons on Tuesday mornings, yoga and pilates classes on weekday evenings, and organized football leagues on Saturdays. Advance registration is required for all racquet sports.\"\nWhich activity requires advance registration?",
    sourceSentence: "Which activity requires advance registration?",
    targetSentence: "All racquet sports (badminton, tennis, squash).",
    options: [
      { id: "o1", text: "All racquet sports (badminton, tennis, squash).", isCorrect: true },
      { id: "o2", text: "Only Saturday morning jogging.", isCorrect: false },
      { id: "o3", text: "Watching matches from the bleachers.", isCorrect: false },
      { id: "o4", text: "Drinking water at the café.", isCorrect: false }
    ],
    correctAnswer: "All racquet sports (badminton, tennis, squash).",
    explanation: "The notice states: 'Advance registration is required for all racquet sports.'"
  },
  {
    id: "a2_u08_l112_p12",
    type: "fill_blank",
    prompt: "Choose the correct sports verb (play / go / do):",
    sourceSentence: "Every weekend during the summer, we ____ hiking in the national park.",
    targetSentence: "Every weekend during the summer, we go hiking in the national park.",
    options: [
      { id: "o1", text: "go", isCorrect: true },
      { id: "o2", text: "play", isCorrect: false },
      { id: "o3", text: "do", isCorrect: false },
      { id: "o4", text: "make", isCorrect: false }
    ],
    correctAnswer: "go",
    explanation: "We use 'go' with sports and outdoor activities ending in -ing (go hiking, go swimming)."
  },
  {
    id: "a2_u08_l112_p13",
    type: "multiple_choice",
    prompt: "Which pair correctly matches the sports with their verbs?",
    sourceSentence: "play tennis / do yoga / go cycling",
    targetSentence: "play tennis / do yoga / go cycling",
    options: [
      { id: "o1", text: "play tennis / do yoga / go cycling", isCorrect: true },
      { id: "o2", text: "do tennis / go yoga / play cycling", isCorrect: false },
      { id: "o3", text: "go tennis / play yoga / do cycling", isCorrect: false },
      { id: "o4", text: "play tennis / play yoga / play cycling", isCorrect: false }
    ],
    correctAnswer: "play tennis / do yoga / go cycling",
    explanation: "Rule: 'play' for ball/competitive games, 'do' for martial arts/exercise routines, 'go' for -ing activities."
  },
  {
    id: "a2_u08_l112_p14",
    type: "speaking",
    prompt: "Speak this fitness routine statement clearly:",
    targetSentence: "I work out at the local gym three times a week to build stamina.",
    audioText: "I work out at the local gym three times a week to build stamina."
  },
  {
    id: "a2_u08_l112_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sports sentence:",
    audioText: "Regular cardiovascular exercise improves heart health and endurance.",
    targetSentence: "Regular cardiovascular exercise improves heart health and endurance."
  },
  {
    id: "a2_u08_l112_p16",
    type: "error_correction",
    prompt: "Correct the verb error in sports collocation:",
    sourceSentence: "My brother plays martial arts every Tuesday evening.",
    targetSentence: "My brother does martial arts every Tuesday evening.",
    options: [
      { id: "o1", text: "My brother does martial arts every Tuesday evening.", isCorrect: true },
      { id: "o2", text: "My brother goes martial arts every Tuesday.", isCorrect: false },
      { id: "o3", text: "My brother makes martial arts every Tuesday.", isCorrect: false },
      { id: "o4", text: "My brother is playing martial arts.", isCorrect: false }
    ],
    correctAnswer: "My brother does martial arts every Tuesday evening.",
    explanation: "We say 'do martial arts / do karate / do judo', not 'play'."
  },
  {
    id: "a2_u08_l112_p17",
    type: "mediation",
    prompt: "Mediation: A friend wants to start getting active but doesn't enjoy heavy gym workouts. Recommend enjoyable alternatives:",
    sourceSentence: "What sports would you suggest for someone who dislikes lifting weights?",
    targetSentence: "You could try swimming, badminton, or outdoor cycling; they are great fun and keep you fit.",
    options: [
      { id: "o1", text: "You could try swimming, badminton, or outdoor cycling; they are great fun and keep you fit.", isCorrect: true },
      { id: "o2", text: "You must buy ten heavy dumbbells and never leave home.", isCorrect: false },
      { id: "o3", text: "Sports were played yesterday on television.", isCorrect: false }
    ],
    correctAnswer: "You could try swimming, badminton, or outdoor cycling; they are great fun and keep you fit.",
    explanation: "Suggests appealing, non-gym fitness activities that match the friend's interests."
  },
  {
    id: "a2_u08_l112_p18",
    type: "match_pairs",
    prompt: "Match the fitness phrases with their meanings:",
    options: [
      { id: "m1", text: "stay in shape" },
      { id: "m1_m", text: "maintain good physical fitness and health" },
      { id: "m2", text: "warm up" },
      { id: "m2_m", text: "perform gentle exercises before intense activity" },
      { id: "m3", text: "take up a sport" },
      { id: "m3_m", text: "start practicing a new athletic hobby" },
      { id: "m4", text: "build endurance" },
      { id: "m4_m", text: "develop stamina to sustain prolonged physical effort" }
    ]
  },
  {
    id: "a2_u08_l112_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing health benefits:",
    sourceSentence: "Stretching after workouts prevents muscle soreness and improves flexibility.",
    targetSentence: "Stretching after workouts prevents muscle soreness and improves flexibility",
    wordBank: ["Stretching", "after", "workouts", "prevents", "muscle", "soreness", "and", "improves", "flexibility", "play", "does"]
  },
  {
    id: "a2_u08_l112_p20",
    type: "translation",
    prompt: "Translate into English: 'मैं स्वस्थ और ऊर्जावान रहने के लिए हर सुबह योग करता हूँ।'",
    sourceSentence: "मैं स्वस्थ और ऊर्जावान रहने के लिए हर सुबह योग करता हूँ।",
    targetSentence: "I do yoga every morning to stay healthy and energetic.",
    wordBank: ["I", "do", "yoga", "every", "morning", "to", "stay", "healthy", "and", "energetic", "play", "hiking"]
  },
  {
    id: "a2_u08_l112_p21",
    type: "listening",
    prompt: "Listen to the athletic goal and answer:",
    audioText: "I am training five days a week because I signed up for the city half-marathon in October.",
    targetSentence: "The speaker is training for a city half-marathon in October.",
    options: [
      { id: "o1", text: "The speaker is training for a city half-marathon in October.", isCorrect: true },
      { id: "o2", text: "The speaker is retiring from running completely.", isCorrect: false },
      { id: "o3", text: "The speaker prefers swimming over running.", isCorrect: false }
    ],
    correctAnswer: "The speaker is training for a city half-marathon in October.",
    explanation: "Audio explicitly states: 'signed up for the city half-marathon in October'."
  },
  {
    id: "a2_u08_l112_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences about your favorite physical activity and why you enjoy it:",
    targetSentence: "I love playing badminton because it requires quick reflexes, keeps me agile, and lets me socialize with friends.",
    audioText: "I love playing badminton because it requires quick reflexes, keeps me agile, and lets me socialize with friends."
  }
];

const l112_review: Exercise[] = [
  {
    id: "a2_u08_l112_r9",
    type: "dialogue_completion",
    prompt: "Complete the weekend leisure conversation:",
    sourceSentence: "A: Are you doing anything active this Saturday?\nB: _____",
    targetSentence: "Yes, a group of us are going mountain biking along the forest trails.",
    options: [
      { id: "o1", text: "Yes, a group of us are going mountain biking along the forest trails.", isCorrect: true },
      { id: "o2", text: "No, I am playing swimming tomorrow.", isCorrect: false },
      { id: "o3", text: "Bicycles have two round wheels.", isCorrect: false },
      { id: "o4", text: "I have eaten football yesterday.", isCorrect: false }
    ],
    correctAnswer: "Yes, a group of us are going mountain biking along the forest trails.",
    explanation: "Uses 'go mountain biking' naturally for a future leisure arrangement."
  },
  {
    id: "a2_u08_l112_r10",
    type: "reading",
    prompt: "Read the fitness guideline:\n\"Hydration is critical: drink water before, during, and after exercise to prevent dehydration and maintain peak cardiovascular performance.\"\nWhen should athletes drink water?",
    sourceSentence: "When should athletes drink water?",
    targetSentence: "Before, during, and after physical exercise.",
    options: [
      { id: "o1", text: "Before, during, and after physical exercise.", isCorrect: true },
      { id: "o2", text: "Only once after going to sleep.", isCorrect: false },
      { id: "o3", text: "Never while exercising.", isCorrect: false }
    ],
    correctAnswer: "Before, during, and after physical exercise.",
    explanation: "The text specifies hydrating before, during, and after activity."
  }
];

const l112_assess: Exercise[] = [
  {
    id: "a2_u08_l112_a9",
    type: "mediation",
    prompt: "Mediation: A colleague asks how to start running without getting injured. Give structured advice:",
    sourceSentence: "How should a complete beginner start training for a 5k run?",
    targetSentence: "Start with a run-walk method, invest in supportive running shoes, and increase your distance gradually each week.",
    options: [
      { id: "o1", text: "Start with a run-walk method, invest in supportive running shoes, and increase your distance gradually each week.", isCorrect: true },
      { id: "o2", text: "Sprint as fast as you can until you collapse on day one.", isCorrect: false },
      { id: "o3", text: "Running shoes are made of fabric.", isCorrect: false }
    ],
    correctAnswer: "Start with a run-walk method, invest in supportive running shoes, and increase your distance gradually each week.",
    explanation: "Provides safe, progressive training advice for beginner runners."
  },
  {
    id: "a2_u08_l112_a10",
    type: "speaking",
    prompt: "Speak your final wellness philosophy statement:",
    targetSentence: "Physical fitness strengthens both the body and mind, boosting daily energy and focus.",
    audioText: "Physical fitness strengthens both the body and mind, boosting daily energy and focus."
  }
];

// =========================================================================
// LESSON 113: Entertainment, Media, Movies & Music
// =========================================================================
const l113_practice: Exercise[] = [
  {
    id: "a2_u08_l113_p11",
    type: "reading",
    prompt: "Read the film review excerpt and answer:\n\"Directed by Sofia Ramos, 'Echoes of Dawn' is a gripping historical drama that captivates audiences from start to finish. The authentic costume design and award-winning soundtrack elevate this film into a cinematic masterpiece.\"\nWhat two aspects of the film receive special praise?",
    sourceSentence: "What two aspects of the film receive special praise?",
    targetSentence: "The authentic costume design and award-winning soundtrack.",
    options: [
      { id: "o1", text: "The authentic costume design and award-winning soundtrack.", isCorrect: true },
      { id: "o2", text: "The low budget and short running time.", isCorrect: false },
      { id: "o3", text: "The poor acting and confusing dialogue.", isCorrect: false },
      { id: "o4", text: "The cinema snacks and ticket prices.", isCorrect: false }
    ],
    correctAnswer: "The authentic costume design and award-winning soundtrack.",
    explanation: "The review highlights: 'authentic costume design and award-winning soundtrack'."
  },
  {
    id: "a2_u08_l113_p12",
    type: "fill_blank",
    prompt: "Choose the correct relative pronoun for people:",
    sourceSentence: "The lead actress ____ won the academy award gave an unforgettable speech.",
    targetSentence: "The lead actress who won the academy award gave an unforgettable speech.",
    options: [
      { id: "o1", text: "who", isCorrect: true },
      { id: "o2", text: "which", isCorrect: false },
      { id: "o3", text: "whose", isCorrect: false },
      { id: "o4", text: "where", isCorrect: false }
    ],
    correctAnswer: "who",
    explanation: "We use 'who' as the relative pronoun referring to people (the lead actress)."
  },
  {
    id: "a2_u08_l113_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses relative pronouns for things/films?",
    sourceSentence: "This is the documentary which explored biodiversity in the Amazon.",
    targetSentence: "This is the documentary which explored biodiversity in the Amazon.",
    options: [
      { id: "o1", text: "This is the documentary which explored biodiversity in the Amazon.", isCorrect: true },
      { id: "o2", text: "This is the documentary who explored biodiversity in the Amazon.", isCorrect: false },
      { id: "o3", text: "This is the documentary where explored biodiversity.", isCorrect: false },
      { id: "o4", text: "This is documentary whose exploring biodiversity.", isCorrect: false }
    ],
    correctAnswer: "This is the documentary which explored biodiversity in the Amazon.",
    explanation: "We use 'which' or 'that' for things, concepts, and documentaries."
  },
  {
    id: "a2_u08_l113_p14",
    type: "speaking",
    prompt: "Speak this movie recommendation clearly:",
    targetSentence: "It is a thought-provoking film that is well worth watching with friends.",
    audioText: "It is a thought-provoking film that is well worth watching with friends."
  },
  {
    id: "a2_u08_l113_p15",
    type: "listen_and_type",
    prompt: "Listen and write the entertainment sentence:",
    audioText: "The concert was sold out within fifteen minutes of ticket release.",
    targetSentence: "The concert was sold out within fifteen minutes of ticket release."
  },
  {
    id: "a2_u08_l113_p16",
    type: "error_correction",
    prompt: "Correct the relative pronoun error:",
    sourceSentence: "I loved the soundtrack who was composed by Hans Zimmer.",
    targetSentence: "I loved the soundtrack which was composed by Hans Zimmer.",
    options: [
      { id: "o1", text: "I loved the soundtrack which was composed by Hans Zimmer.", isCorrect: true },
      { id: "o2", text: "I loved the soundtrack who composed by Hans Zimmer.", isCorrect: false },
      { id: "o3", text: "I loved the soundtrack where was composed.", isCorrect: false },
      { id: "o4", text: "I loved soundtrack whose was composed.", isCorrect: false }
    ],
    correctAnswer: "I loved the soundtrack which was composed by Hans Zimmer.",
    explanation: "A soundtrack is a thing/music, so it takes 'which' or 'that', not 'who'."
  },
  {
    id: "a2_u08_l113_p17",
    type: "mediation",
    prompt: "Mediation: A friend asks whether they should watch a new mystery thriller series. Give a balanced review:",
    sourceSentence: "Is the new mystery series on streaming worth watching?",
    targetSentence: "The first three episodes have incredible plot twists, though the finale is slightly predictable. Overall, it's definitely worth streaming.",
    options: [
      { id: "o1", text: "The first three episodes have incredible plot twists, though the finale is slightly predictable. Overall, it's definitely worth streaming.", isCorrect: true },
      { id: "o2", text: "Television sets consume electrical energy from sockets.", isCorrect: false },
      { id: "o3", text: "Actors eat popcorn while acting.", isCorrect: false }
    ],
    correctAnswer: "The first three episodes have incredible plot twists, though the finale is slightly predictable. Overall, it's definitely worth streaming.",
    explanation: "Provides a balanced, nuanced evaluation using authentic entertainment terminology."
  },
  {
    id: "a2_u08_l113_p18",
    type: "match_pairs",
    prompt: "Match the media and entertainment terms with their meanings:",
    options: [
      { id: "m1", text: "plot twist" },
      { id: "m1_m", text: "an unexpected turn of events in a story" },
      { id: "m2", text: "box office" },
      { id: "m2_m", text: "the commercial earnings of a cinema release" },
      { id: "m3", text: "soundtrack" },
      { id: "m3_m", text: "the recorded music accompanying a film" },
      { id: "m4", text: "sequel" },
      { id: "m4_m", text: "a film or book continuing a previous story" }
    ]
  },
  {
    id: "a2_u08_l113_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing a musical performance:",
    sourceSentence: "The lead singer delivered a breathtaking performance that thrilled the audience.",
    targetSentence: "The lead singer delivered a breathtaking performance that thrilled the audience",
    wordBank: ["The", "lead", "singer", "delivered", "a", "breathtaking", "performance", "that", "thrilled", "the", "audience", "who"]
  },
  {
    id: "a2_u08_l113_p20",
    type: "translation",
    prompt: "Translate into English: 'यह फिल्म एक सच्ची घटना पर आधारित है जो 1990 में घटी थी।'",
    sourceSentence: "यह फिल्म एक सच्ची घटना पर आधारित है जो 1990 में घटी थी।",
    targetSentence: "This movie is based on a true story that happened in 1990.",
    wordBank: ["This", "movie", "is", "based", "on", "a", "true", "story", "that", "happened", "in", "1990"]
  },
  {
    id: "a2_u08_l113_p21",
    type: "listening",
    prompt: "Listen to the podcast recommendation and choose the main topic:",
    audioText: "Every Wednesday, this podcast features interviews with independent musicians who share the stories behind their songwriting process.",
    targetSentence: "Interviews with independent musicians about their songwriting process.",
    options: [
      { id: "o1", text: "Interviews with independent musicians about their songwriting process.", isCorrect: true },
      { id: "o2", text: "Financial market reports on banking stocks.", isCorrect: false },
      { id: "o3", text: "Cooking lessons for traditional Italian pasta.", isCorrect: false }
    ],
    correctAnswer: "Interviews with independent musicians about their songwriting process.",
    explanation: "Audio explicitly identifies independent musicians and songwriting stories."
  },
  {
    id: "a2_u08_l113_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences describing your favorite book, movie, or music album:",
    targetSentence: "My favorite film is Inception because the plot is extraordinarily creative, the visual effects are stunning, and the ending leaves you thinking.",
    audioText: "My favorite film is Inception because the plot is extraordinarily creative, the visual effects are stunning, and the ending leaves you thinking."
  }
];

const l113_review: Exercise[] = [
  {
    id: "a2_u08_l113_r9",
    type: "dialogue_completion",
    prompt: "Complete the cinema discussion turn:",
    sourceSentence: "A: What did you think of the lead actor's performance?\nB: _____",
    targetSentence: "He brought great depth and authenticity to the character.",
    options: [
      { id: "o1", text: "He brought great depth and authenticity to the character.", isCorrect: true },
      { id: "o2", text: "The ticket cost ten euros yesterday.", isCorrect: false },
      { id: "o3", text: "He is having two arms and legs.", isCorrect: false },
      { id: "o4", text: "I have eaten popcorn tomorrow.", isCorrect: false }
    ],
    correctAnswer: "He brought great depth and authenticity to the character.",
    explanation: "Evaluates the actor's artistry and portrayal skillfully."
  },
  {
    id: "a2_u08_l113_r10",
    type: "reading",
    prompt: "Read the music festival announcement:\n\"The City Arts Festival will host over forty live performances across three outdoor stages, featuring jazz, indie rock, and classical ensembles.\"\nHow many outdoor stages will the festival feature?",
    sourceSentence: "How many outdoor stages will the festival feature?",
    targetSentence: "Three outdoor stages.",
    options: [
      { id: "o1", text: "Three outdoor stages.", isCorrect: true },
      { id: "o2", text: "Forty stages.", isCorrect: false },
      { id: "o3", text: "Only one indoor hall.", isCorrect: false }
    ],
    correctAnswer: "Three outdoor stages.",
    explanation: "The text specifies: 'across three outdoor stages'."
  }
];

const l113_assess: Exercise[] = [
  {
    id: "a2_u08_l113_a9",
    type: "mediation",
    prompt: "Mediation: Recommend a culturally rich documentary to an international student:",
    sourceSentence: "Can you suggest a good documentary about wildlife conservation?",
    targetSentence: "I highly recommend 'Planet Earth II'; it showcases breathtaking cinematography and explains critical ecological conservation challenges.",
    options: [
      { id: "o1", text: "I highly recommend 'Planet Earth II'; it showcases breathtaking cinematography and explains critical ecological conservation challenges.", isCorrect: true },
      { id: "o2", text: "Monkeys climb trees in green forests.", isCorrect: false },
      { id: "o3", text: "Documentaries are printed on heavy paper.", isCorrect: false }
    ],
    correctAnswer: "I highly recommend 'Planet Earth II'; it showcases breathtaking cinematography and explains critical ecological conservation challenges.",
    explanation: "Provides an insightful, well-justified cultural media recommendation."
  },
  {
    id: "a2_u08_l113_a10",
    type: "speaking",
    prompt: "Speak your final reflection on art and entertainment:",
    targetSentence: "Great storytelling connects people across different cultures and broadens our worldview.",
    audioText: "Great storytelling connects people across different cultures and broadens our worldview."
  }
];

// =========================================================================
// LESSON 114: Travel Planning, Destinations & Accommodations
// =========================================================================
const l114_practice: Exercise[] = [
  {
    id: "a2_u08_l114_p11",
    type: "reading",
    prompt: "Read the hotel booking confirmation and answer:\n\"Dear Guest, your reservation at the Grand Heritage Hotel is confirmed from July 10th to July 14th. Complimentary buffet breakfast is served daily between 7:00 AM and 10:30 AM on the mezzanine floor. Check-out time is strictly 11:00 AM on the day of departure.\"\nWhat time must guests check out on July 14th?",
    sourceSentence: "What time must guests check out on July 14th?",
    targetSentence: "By 11:00 AM.",
    options: [
      { id: "o1", text: "By 11:00 AM.", isCorrect: true },
      { id: "o2", text: "At 7:00 AM.", isCorrect: false },
      { id: "o3", text: "At 10:30 PM.", isCorrect: false },
      { id: "o4", text: "Any time in the afternoon.", isCorrect: false }
    ],
    correctAnswer: "By 11:00 AM.",
    explanation: "The confirmation states: 'Check-out time is strictly 11:00 AM'."
  },
  {
    id: "a2_u08_l114_p12",
    type: "fill_blank",
    prompt: "Choose the correct word order in an indirect question:",
    sourceSentence: "Could you please tell me where the baggage claim area ____?",
    targetSentence: "Could you please tell me where the baggage claim area is?",
    options: [
      { id: "o1", text: "is", isCorrect: true },
      { id: "o2", text: "is it", isCorrect: false },
      { id: "o3", text: "is where", isCorrect: false },
      { id: "o4", text: "does it", isCorrect: false }
    ],
    correctAnswer: "is",
    explanation: "In indirect questions, word order is affirmative (subject + verb): 'where the baggage claim area is'."
  },
  {
    id: "a2_u08_l114_p13",
    type: "multiple_choice",
    prompt: "Which sentence is a polite and grammatically correct indirect travel inquiry?",
    sourceSentence: "Do you know what time the airport shuttle arrives?",
    targetSentence: "Do you know what time the airport shuttle arrives?",
    options: [
      { id: "o1", text: "Do you know what time the airport shuttle arrives?", isCorrect: true },
      { id: "o2", text: "Do you know what time does the airport shuttle arrive?", isCorrect: false },
      { id: "o3", text: "Do you know what time arrives the airport shuttle?", isCorrect: false },
      { id: "o4", text: "Tell me what time does shuttle arrive.", isCorrect: false }
    ],
    correctAnswer: "Do you know what time the airport shuttle arrives?",
    explanation: "Indirect questions embed regular statement word order without auxiliary inversion."
  },
  {
    id: "a2_u08_l114_p14",
    type: "speaking",
    prompt: "Speak this polite hotel check-in inquiry clearly:",
    targetSentence: "Could you let me know if breakfast is included in our room rate?",
    audioText: "Could you let me know if breakfast is included in our room rate?"
  },
  {
    id: "a2_u08_l114_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the travel itinerary detail:",
    audioText: "Our connecting flight departs from Terminal 2 at noon.",
    targetSentence: "Our connecting flight departs from Terminal 2 at noon."
  },
  {
    id: "a2_u08_l114_p16",
    type: "error_correction",
    prompt: "Correct the word order in the indirect question:",
    sourceSentence: "Can you tell me where is the currency exchange counter?",
    targetSentence: "Can you tell me where the currency exchange counter is?",
    options: [
      { id: "o1", text: "Can you tell me where the currency exchange counter is?", isCorrect: true },
      { id: "o2", text: "Can you tell me where is currency exchange?", isCorrect: false },
      { id: "o3", text: "Can you tell me where counter currency exchange is?", isCorrect: false },
      { id: "o4", text: "Tell me where is the counter?", isCorrect: false }
    ],
    correctAnswer: "Can you tell me where the currency exchange counter is?",
    explanation: "In indirect questions, the verb 'is' goes after the subject 'currency exchange counter'."
  },
  {
    id: "a2_u08_l114_p17",
    type: "mediation",
    prompt: "Mediation: A tourist at the train station doesn't know how to validate their ticket. Explain politely:",
    sourceSentence: "Where and how do I validate this platform ticket?",
    targetSentence: "Insert your ticket into the small green machine at the entrance gate before boarding the train.",
    options: [
      { id: "o1", text: "Insert your ticket into the small green machine at the entrance gate before boarding the train.", isCorrect: true },
      { id: "o2", text: "Throw the ticket on the floor.", isCorrect: false },
      { id: "o3", text: "Trains run on rails every day.", isCorrect: false }
    ],
    correctAnswer: "Insert your ticket into the small green machine at the entrance gate before boarding the train.",
    explanation: "Provides clear, step-by-step practical instructions for ticket validation."
  },
  {
    id: "a2_u08_l114_p18",
    type: "match_pairs",
    prompt: "Match the travel collocations:",
    options: [
      { id: "m1", text: "book in advance" },
      { id: "m1_m", text: "reserve tickets or rooms prior to arrival" },
      { id: "m2", text: "boarding pass" },
      { id: "m2_m", text: "document allowing a passenger to enter an aircraft" },
      { id: "m3", text: "baggage allowance" },
      { id: "m3_m", text: "the permitted weight or number of luggage pieces" },
      { id: "m4", text: "sightseeing tour" },
      { id: "m4_m", text: "guided excursion to visit historical and cultural landmarks" }
    ]
  },
  {
    id: "a2_u08_l114_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a polite airport check-in request:",
    sourceSentence: "Would it be possible to request a window seat near the front?",
    targetSentence: "Would it be possible to request a window seat near the front",
    wordBank: ["Would", "it", "be", "possible", "to", "request", "a", "window", "seat", "near", "the", "front", "can"]
  },
  {
    id: "a2_u08_l114_p20",
    type: "translation",
    prompt: "Translate into English: 'क्या आप मुझे बता सकते हैं कि निकटतम मेट्रो स्टेशन कहाँ है?'",
    sourceSentence: "क्या आप मुझे बता सकते हैं कि निकटतम मेट्रो स्टेशन कहाँ है?",
    targetSentence: "Could you tell me where the nearest metro station is?",
    wordBank: ["Could", "you", "tell", "me", "where", "the", "nearest", "metro", "station", "is", "where is"]
  },
  {
    id: "a2_u08_l114_p21",
    type: "listening",
    prompt: "Listen to the flight announcement and identify the gate change:",
    audioText: "Flight BA 142 to London Heathrow has now been moved from Gate 12 to Gate 24B. Boarding will commence in ten minutes.",
    targetSentence: "The flight has been moved to Gate 24B with boarding in ten minutes.",
    options: [
      { id: "o1", text: "The flight has been moved to Gate 24B with boarding in ten minutes.", isCorrect: true },
      { id: "o2", text: "The flight to London is cancelled.", isCorrect: false },
      { id: "o3", text: "Boarding is at Gate 12 tomorrow morning.", isCorrect: false }
    ],
    correctAnswer: "The flight has been moved to Gate 24B with boarding in ten minutes.",
    explanation: "Audio explicitly announces gate change to 24B and boarding starting in ten minutes."
  },
  {
    id: "a2_u08_l114_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences describing your dream travel destination and what you would do there:",
    targetSentence: "I would love to visit Japan during spring to see the cherry blossoms, explore ancient temples in Kyoto, and taste authentic local ramen.",
    audioText: "I would love to visit Japan during spring to see the cherry blossoms, explore ancient temples in Kyoto, and taste authentic local ramen."
  }
];

const l114_review: Exercise[] = [
  {
    id: "a2_u08_l114_r9",
    type: "dialogue_completion",
    prompt: "Complete the hotel reception interaction:",
    sourceSentence: "Guest: Excuse me, do you know what time the swimming pool closes?\nReceptionist: _____",
    targetSentence: "The pool is open until 10:00 PM every evening for hotel guests.",
    options: [
      { id: "o1", text: "The pool is open until 10:00 PM every evening for hotel guests.", isCorrect: true },
      { id: "o2", text: "Water is wet and blue.", isCorrect: false },
      { id: "o3", text: "I have swam yesterday in the sea.", isCorrect: false },
      { id: "o4", text: "You must buy a car today.", isCorrect: false }
    ],
    correctAnswer: "The pool is open until 10:00 PM every evening for hotel guests.",
    explanation: "Politely and accurately answers the guest's indirect inquiry."
  },
  {
    id: "a2_u08_l114_r10",
    type: "reading",
    prompt: "Read the airline baggage policy rule:\n\"Passengers traveling in Economy Class are permitted one piece of checked luggage up to 23 kg and one cabin bag up to 8 kg.\"\nWhat is the maximum allowed weight for a cabin bag?",
    sourceSentence: "What is the maximum allowed weight for a cabin bag?",
    targetSentence: "8 kg.",
    options: [
      { id: "o1", text: "8 kg.", isCorrect: true },
      { id: "o2", text: "23 kg.", isCorrect: false },
      { id: "o3", text: "50 kg.", isCorrect: false }
    ],
    correctAnswer: "8 kg.",
    explanation: "The text specifies cabin bag limit as 8 kg and checked luggage as 23 kg."
  }
];

const l114_assess: Exercise[] = [
  {
    id: "a2_u08_l114_a9",
    type: "mediation",
    prompt: "Mediation: A tourist's suitcase didn't arrive on the baggage carousel. Help them report it to the lost luggage desk:",
    sourceSentence: "My luggage is missing from flight AF 318. What information do you need from me?",
    targetSentence: "Please provide your baggage claim receipt, passport, and a brief description of your suitcase color and brand.",
    options: [
      { id: "o1", text: "Please provide your baggage claim receipt, passport, and a brief description of your suitcase color and brand.", isCorrect: true },
      { id: "o2", text: "Airplanes fly very high in the clouds.", isCorrect: false },
      { id: "o3", text: "You can buy a ticket for the next flight.", isCorrect: false }
    ],
    correctAnswer: "Please provide your baggage claim receipt, passport, and a brief description of your suitcase color and brand.",
    explanation: "Clearly outlines the exact documents and details required for luggage recovery."
  },
  {
    id: "a2_u08_l114_a10",
    type: "speaking",
    prompt: "Speak your final travel communication statement:",
    targetSentence: "Traveling with an open mind allows us to appreciate different cultures and build lasting memories.",
    audioText: "Traveling with an open mind allows us to appreciate different cultures and build lasting memories."
  }
];

// =========================================================================
// LESSON 115: Transportation, Commuting & Directions
// =========================================================================
const l115_practice: Exercise[] = [
  {
    id: "a2_u08_l115_p11",
    type: "reading",
    prompt: "Read the transit navigation instructions:\n\"To reach the Central Art Museum from the main railway terminal, take the Blue Line subway southbound for four stops. Alight at Victoria Square, exit via Gate B, and walk two hundred meters straight ahead past the library.\"\nAt which station should the passenger alight?",
    sourceSentence: "At which station should the passenger alight?",
    targetSentence: "Victoria Square (after four stops).",
    options: [
      { id: "o1", text: "Victoria Square (after four stops).", isCorrect: true },
      { id: "o2", text: "At the first stop on the Red Line.", isCorrect: false },
      { id: "o3", text: "Airport Terminal 3.", isCorrect: false },
      { id: "o4", text: "Nowhere, stay on the train forever.", isCorrect: false }
    ],
    correctAnswer: "Victoria Square (after four stops).",
    explanation: "The directions clearly specify: 'Alight at Victoria Square, exit via Gate B'."
  },
  {
    id: "a2_u08_l115_p12",
    type: "fill_blank",
    prompt: "Choose the correct preposition of movement for passing through an arch or tunnel:",
    sourceSentence: "Walk ____ the archway and you will see the cathedral courtyard on your right.",
    targetSentence: "Walk through the archway and you will see the cathedral courtyard on your right.",
    options: [
      { id: "o1", text: "through", isCorrect: true },
      { id: "o2", text: "across", isCorrect: false },
      { id: "o3", text: "along", isCorrect: false },
      { id: "o4", text: "over", isCorrect: false }
    ],
    correctAnswer: "through",
    explanation: "We use 'through' when moving inside a 3D enclosed space (tunnel, doorway, archway, park)."
  },
  {
    id: "a2_u08_l115_p13",
    type: "multiple_choice",
    prompt: "Which preposition describes moving alongside a street or river?",
    sourceSentence: "Stroll along the riverbank until you reach the pedestrian suspension bridge.",
    targetSentence: "Stroll along the riverbank until you reach the pedestrian suspension bridge.",
    options: [
      { id: "o1", text: "along", isCorrect: true },
      { id: "o2", text: "through", isCorrect: false },
      { id: "o3", text: "across", isCorrect: false },
      { id: "o4", text: "into", isCorrect: false }
    ],
    correctAnswer: "along",
    explanation: "'Along' indicates movement parallel to the line of a path, road, or river."
  },
  {
    id: "a2_u08_l115_p14",
    type: "speaking",
    prompt: "Speak these street directions clearly into your microphone:",
    targetSentence: "Go straight for two blocks, then take the second turning on your left.",
    audioText: "Go straight for two blocks, then take the second turning on your left."
  },
  {
    id: "a2_u08_l115_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the commuting sentence:",
    audioText: "The morning commuter train was delayed due to track maintenance.",
    targetSentence: "The morning commuter train was delayed due to track maintenance."
  },
  {
    id: "a2_u08_l115_p16",
    type: "error_correction",
    prompt: "Correct the preposition error in street direction:",
    sourceSentence: "Walk across the street until the end and turn right.",
    targetSentence: "Walk down the street until the end and turn right.",
    options: [
      { id: "o1", text: "Walk down the street until the end and turn right.", isCorrect: true },
      { id: "o2", text: "Walk through the street until the end.", isCorrect: false },
      { id: "o3", text: "Walk inside the street until end.", isCorrect: false },
      { id: "o4", text: "Walk over street to end.", isCorrect: false }
    ],
    correctAnswer: "Walk down the street until the end and turn right.",
    explanation: "'Walk down/along the street' means along its length; 'across' means from one side to the other."
  },
  {
    id: "a2_u08_l115_p17",
    type: "mediation",
    prompt: "Mediation: A pedestrian asks how to reach the post office from the city square. Give step-by-step guidance:",
    sourceSentence: "Excuse me, how do I get to the general post office from here?",
    targetSentence: "Go past the fountain, cross the pedestrian crossing, and it is the red brick building opposite the bank.",
    options: [
      { id: "o1", text: "Go past the fountain, cross the pedestrian crossing, and it is the red brick building opposite the bank.", isCorrect: true },
      { id: "o2", text: "Post offices sell postage stamps.", isCorrect: false },
      { id: "o3", text: "I mailed a letter five years ago.", isCorrect: false }
    ],
    correctAnswer: "Go past the fountain, cross the pedestrian crossing, and it is the red brick building opposite the bank.",
    explanation: "Provides precise landmarks and navigational prepositions (past, cross, opposite)."
  },
  {
    id: "a2_u08_l115_p18",
    type: "match_pairs",
    prompt: "Match the transit terms with their definitions:",
    options: [
      { id: "m1", text: "roundabout" },
      { id: "m1_m", text: "a circular road junction where traffic moves in one direction" },
      { id: "m2", text: "pedestrian crossing" },
      { id: "m2_m", text: "a designated marked street area for people to walk across safely" },
      { id: "m3", text: "interchange" },
      { id: "m3_m", text: "a major transit station where passengers switch between lines" },
      { id: "m4", text: "congestion" },
      { id: "m4_m", text: "heavy traffic overcrowding that slows vehicle movement" }
    ]
  },
  {
    id: "a2_u08_l115_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence giving driving instructions:",
    sourceSentence: "At the roundabout take the third exit towards the motorway.",
    targetSentence: "At the roundabout take the third exit towards the motorway",
    wordBank: ["At", "the", "roundabout", "take", "the", "third", "exit", "towards", "the", "motorway", "across"]
  },
  {
    id: "a2_u08_l115_p20",
    type: "translation",
    prompt: "Translate into English: 'पुल पार करें और ट्रैफ़िक लाइट पर बाएँ मुड़ें।'",
    sourceSentence: "पुल पार करें और ट्रैफ़िक लाइट पर बाएँ मुड़ें।",
    targetSentence: "Cross the bridge and turn left at the traffic lights.",
    wordBank: ["Cross", "the", "bridge", "and", "turn", "left", "at", "the", "traffic", "lights", "along", "through"]
  },
  {
    id: "a2_u08_l115_p21",
    type: "listening",
    prompt: "Listen to the bus driver announcement and answer:",
    audioText: "Next stop is Riverside Market. Transfer here for Bus 45 towards the Science University.",
    targetSentence: "Transfer at Riverside Market for Bus 45 to Science University.",
    options: [
      { id: "o1", text: "Transfer at Riverside Market for Bus 45 to Science University.", isCorrect: true },
      { id: "o2", text: "The bus is out of service.", isCorrect: false },
      { id: "o3", text: "Passengers must remain seated for two hours.", isCorrect: false }
    ],
    correctAnswer: "Transfer at Riverside Market for Bus 45 to Science University.",
    explanation: "Audio explicitly mentions transferring to Bus 45 at Riverside Market."
  },
  {
    id: "a2_u08_l115_p22",
    type: "personal_production",
    prompt: "Describe your daily commute to work or school in 2-3 sentences using transit prepositions:",
    targetSentence: "I walk along Park Avenue to the metro station, take the line through the city center, and alight near my office building.",
    audioText: "I walk along Park Avenue to the metro station, take the line through the city center, and alight near my office building."
  }
];

const l115_review: Exercise[] = [
  {
    id: "a2_u08_l115_r9",
    type: "dialogue_completion",
    prompt: "Complete the street navigation exchange:",
    sourceSentence: "A: Is the pharmacy within walking distance from here?\nB: _____",
    targetSentence: "Yes, it's just a five-minute walk straight down this avenue.",
    options: [
      { id: "o1", text: "Yes, it's just a five-minute walk straight down this avenue.", isCorrect: true },
      { id: "o2", text: "No, pharmacies sell medicines.", isCorrect: false },
      { id: "o3", text: "I bought an airplane ticket yesterday.", isCorrect: false },
      { id: "o4", text: "Walking shoes are made of leather.", isCorrect: false }
    ],
    correctAnswer: "Yes, it's just a five-minute walk straight down this avenue.",
    explanation: "Confirms distance and gives simple, clear walking directions."
  },
  {
    id: "a2_u08_l115_r10",
    type: "reading",
    prompt: "Read the transit card notice:\n\"Tap your contactless travel card on the card reader when boarding and alighting to ensure you are charged the correct fare zone rate.\"\nWhy must commuters tap when alighting?",
    sourceSentence: "Why must commuters tap when alighting?",
    targetSentence: "To ensure they are charged the correct fare zone rate.",
    options: [
      { id: "o1", text: "To ensure they are charged the correct fare zone rate.", isCorrect: true },
      { id: "o2", text: "To take a photograph of the bus.", isCorrect: false },
      { id: "o3", text: "To turn off the card reader machine.", isCorrect: false }
    ],
    correctAnswer: "To ensure they are charged the correct fare zone rate.",
    explanation: "The notice states tapping on exit calculates the proper zonal fare."
  }
];

const l115_assess: Exercise[] = [
  {
    id: "a2_u08_l115_a9",
    type: "mediation",
    prompt: "Mediation: A lost tourist needs directions to the historic castle. Provide clear, landmark-based navigation:",
    sourceSentence: "How can I walk to the historic castle on the hill?",
    targetSentence: "Follow the cobblestone path through the old town gate, walk up the hill past the clock tower, and the castle entrance is directly ahead.",
    options: [
      { id: "o1", text: "Follow the cobblestone path through the old town gate, walk up the hill past the clock tower, and the castle entrance is directly ahead.", isCorrect: true },
      { id: "o2", text: "Castles were built in medieval times.", isCorrect: false },
      { id: "o3", text: "You should stay home and watch television.", isCorrect: false }
    ],
    correctAnswer: "Follow the cobblestone path through the old town gate, walk up the hill past the clock tower, and the castle entrance is directly ahead.",
    explanation: "Provides sequenced directions with recognizable landmarks and directional prepositions."
  },
  {
    id: "a2_u08_l115_a10",
    type: "speaking",
    prompt: "Speak your final navigational mastery statement:",
    targetSentence: "Confidently asking for and giving clear directions is an essential skill for global travelers.",
    audioText: "Confidently asking for and giving clear directions is an essential skill for global travelers."
  }
];

export function enrichBatch111_115() {
  console.log("=== ENRICHING LESSONS 111 TO 115 ===");
  enrichUnit8LessonData('lesson_a2_8_111', LESSON_A2_8_111_DATA, l111_practice, l111_review, l111_assess);
  enrichUnit8LessonData('lesson_a2_8_112', LESSON_A2_8_112_DATA, l112_practice, l112_review, l112_assess);
  enrichUnit8LessonData('lesson_a2_8_113', LESSON_A2_8_113_DATA, l113_practice, l113_review, l113_assess);
  enrichUnit8LessonData('lesson_a2_8_114', LESSON_A2_8_114_DATA, l114_practice, l114_review, l114_assess);
  enrichUnit8LessonData('lesson_a2_8_115', LESSON_A2_8_115_DATA, l115_practice, l115_review, l115_assess);
  console.log("=== BATCH 111-115 COMPLETED ===");
}

enrichBatch111_115();
