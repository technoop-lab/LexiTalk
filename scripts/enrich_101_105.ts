import { Exercise } from '../src/types';
import { LESSON_A2_7_101_DATA } from '../src/data/lessons/lesson_a2_7_101';
import { LESSON_A2_7_102_DATA } from '../src/data/lessons/lesson_a2_7_102';
import { LESSON_A2_7_103_DATA } from '../src/data/lessons/lesson_a2_7_103';
import { LESSON_A2_7_104_DATA } from '../src/data/lessons/lesson_a2_7_104';
import { LESSON_A2_7_105_DATA } from '../src/data/lessons/lesson_a2_7_105';
import { enrichLessonData } from './enrichHelper';

// ==========================================
// LESSON 101: Opinions, Agreement & Polite Disagreement
// ==========================================
const l101_practice: Exercise[] = [
  {
    id: "a2_u07_l101_p16",
    type: "reading",
    prompt: "Read the discussion forum excerpt and answer the question:\n\"In my opinion, remote working improves productivity because workers spend zero hours commuting each day. However, I agree that in-person collaboration once a week helps preserve team cohesion.\"\nWhat does the writer believe about remote working?",
    sourceSentence: "What does the writer believe about remote working?",
    targetSentence: "It enhances productivity by eliminating daily commute times.",
    options: [
      { id: "o1", text: "It enhances productivity by eliminating daily commute times.", isCorrect: true },
      { id: "o2", text: "It should be banned by governments completely.", isCorrect: false },
      { id: "o3", text: "It makes all employees less productive.", isCorrect: false },
      { id: "o4", text: "It costs more than renting an office.", isCorrect: false }
    ],
    correctAnswer: "It enhances productivity by eliminating daily commute times.",
    explanation: "The text states: 'In my opinion, remote working improves productivity because workers spend zero hours commuting each day.'"
  },
  {
    id: "a2_u07_l101_p17",
    type: "fill_blank",
    prompt: "Choose the polite phrase to introduce a gentle disagreement:",
    sourceSentence: "I see your point, ____ I think we need to test this hypothesis with users first.",
    targetSentence: "I see your point, but I think we need to test this hypothesis with users first.",
    options: [
      { id: "o1", text: "but", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "so that", isCorrect: false },
      { id: "o4", text: "since", isCorrect: false }
    ],
    correctAnswer: "but",
    explanation: "\"I see your point, but...\" is a classic polite partial agreement and gentle contrast."
  },
  {
    id: "a2_u07_l101_p18",
    type: "speaking",
    prompt: "Speak this opinion statement aloud with natural persuasive tone:",
    targetSentence: "From my perspective, investing in renewable solar energy is essential for long-term sustainability.",
    audioText: "From my perspective, investing in renewable solar energy is essential for long-term sustainability."
  },
  {
    id: "a2_u07_l101_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the speaker's viewpoint:",
    audioText: "I completely agree with your proposal to streamline customer onboarding.",
    targetSentence: "I completely agree with your proposal to streamline customer onboarding."
  },
  {
    id: "a2_u07_l101_p20",
    type: "error_correction",
    prompt: "Correct the opinion expression error:",
    sourceSentence: "According to my opinion, this marketing campaign is effective.",
    targetSentence: "In my opinion, this marketing campaign is effective.",
    options: [
      { id: "o1", text: "In my opinion, this marketing campaign is effective.", isCorrect: true },
      { id: "o2", text: "According to me opinion, this marketing campaign is effective.", isCorrect: false },
      { id: "o3", text: "According my opinion, this campaign effective.", isCorrect: false },
      { id: "o4", text: "In me opinion, marketing campaign is effective.", isCorrect: false }
    ],
    correctAnswer: "In my opinion, this marketing campaign is effective.",
    explanation: "Say \"In my opinion\" or \"According to [someone else]\"; never blend them as \"According to my opinion\"."
  },
  {
    id: "a2_u07_l101_p21",
    type: "mediation",
    prompt: "Mediation: Two team members hold conflicting opinions on project deadlines. Help them find common ground politely:",
    sourceSentence: "One wants to launch immediately; the other wants two more weeks of testing.",
    targetSentence: "I understand both perspectives: launching early gives us rapid user feedback, but taking extra days for automated testing minimizes post-launch security risks.",
    options: [
      { id: "o1", text: "I understand both perspectives: launching early gives us rapid user feedback, but taking extra days for automated testing minimizes post-launch security risks.", isCorrect: true },
      { id: "o2", text: "Both of you are completely wrong and fire everybody.", isCorrect: false },
      { id: "o3", text: "No opinions allowed in software.", isCorrect: false },
      { id: "o4", text: "I like coffee very much.", isCorrect: false }
    ],
    correctAnswer: "I understand both perspectives: launching early gives us rapid user feedback, but taking extra days for automated testing minimizes post-launch security risks.",
    explanation: "Diplomatically bridges the two views, acknowledging the merits of each side."
  },
  {
    id: "a2_u07_l101_p22",
    type: "match_pairs",
    prompt: "Match discussion phrases with their communicative stance:",
    options: [
      { id: "m1", text: "I couldn't agree more." },
      { id: "m1_m", text: "100% Strong Agreement" },
      { id: "m2", text: "I see what you mean, but..." },
      { id: "m2_m", text: "Polite / Partial Disagreement" },
      { id: "m3", text: "As far as I'm concerned..." },
      { id: "m3_m", text: "Stating Personal Perspective" },
      { id: "m4", text: "I'm afraid I have to disagree." },
      { id: "m4_m", text: "Courteous Direct Disagreement" }
    ]
  },
  {
    id: "a2_u07_l101_p23",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite expression of disagreement:",
    sourceSentence: "I am afraid I disagree with that conclusion.",
    targetSentence: "I am afraid I disagree with that conclusion",
    wordBank: ["I", "am", "afraid", "I", "disagree", "with", "that", "conclusion", "agree", "do"],
    explanation: "I am afraid + I disagree + with that conclusion."
  },
  {
    id: "a2_u07_l101_p24",
    type: "recognition",
    prompt: "Which phrase indicates complete alignment with the other speaker?",
    sourceSentence: "You have hit the nail on the head / I'm not so sure / That's debatable / On the contrary",
    targetSentence: "You have hit the nail on the head",
    options: [
      { id: "o1", text: "You have hit the nail on the head", isCorrect: true },
      { id: "o2", text: "I'm not so sure", isCorrect: false },
      { id: "o3", text: "That's debatable", isCorrect: false },
      { id: "o4", text: "On the contrary", isCorrect: false }
    ],
    correctAnswer: "You have hit the nail on the head",
    explanation: "\"Hit the nail on the head\" is an idiom meaning you are exactly right / completely accurate."
  },
  {
    id: "a2_u07_l101_p25",
    type: "dialogue_completion",
    prompt: "Complete the team discussion dialogue:",
    sourceSentence: "Liam: \"Should we switch to a four-day work week?\"\nRachel: \"____\"",
    targetSentence: "In my view, that could boost employee morale and focus, provided productivity targets remain clear.",
    options: [
      { id: "o1", text: "In my view, that could boost employee morale and focus, provided productivity targets remain clear.", isCorrect: true },
      { id: "o2", text: "Yesterday was Thursday.", isCorrect: false },
      { id: "o3", text: "I never worked in four days.", isCorrect: false },
      { id: "o4", text: "Because calendars have seven days.", isCorrect: false }
    ],
    correctAnswer: "In my view, that could boost employee morale and focus, provided productivity targets remain clear.",
    explanation: "Presents a thoughtful, nuanced perspective introduced by \"In my view\"."
  },
  {
    id: "a2_u07_l101_p26",
    type: "personal_production",
    prompt: "Write 2 sentences sharing your opinion on public transportation versus driving cars using 'In my opinion' and 'However':",
    targetSentence: "In my opinion, expanding public subway networks reduces urban traffic congestion significantly. However, rural areas still require reliable personal vehicles.",
    guidelines: "Use 'In my opinion, ...' in sentence 1 and 'However, ...' in sentence 2."
  }
];

const l101_review: Exercise[] = [
  {
    id: "a2_u07_l101_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct preposition:",
    sourceSentence: "I completely agree ____ your analysis of the quarterly sales trends.",
    targetSentence: "I completely agree with your analysis of the quarterly sales trends.",
    options: [
      { id: "o1", text: "with", isCorrect: true },
      { id: "o2", text: "to", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "on", isCorrect: false }
    ],
    correctAnswer: "with",
    explanation: "The verb \"agree\" collocates with \"with\" when referencing a person, idea, or statement: agree with your analysis."
  },
  {
    id: "a2_u07_l101_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the agreement error:",
    sourceSentence: "I am agree with the proposed changes to the schedule.",
    targetSentence: "I agree with the proposed changes to the schedule.",
    options: [
      { id: "o1", text: "I agree with the proposed changes to the schedule.", isCorrect: true },
      { id: "o2", text: "I am agreeing with the proposed changes to the schedule.", isCorrect: false },
      { id: "o3", text: "I am agreed with the proposed changes.", isCorrect: false },
      { id: "o4", text: "I have agree with the proposed changes.", isCorrect: false }
    ],
    correctAnswer: "I agree with the proposed changes to the schedule.",
    explanation: "\"Agree\" is a verb, not an adjective. Say \"I agree\", never \"I am agree\"."
  },
  {
    id: "a2_u07_l101_r08",
    type: "speaking",
    prompt: "Speak this polite discussion phrase aloud:",
    targetSentence: "That is an interesting viewpoint; however, have we considered the financial implications?",
    audioText: "That is an interesting viewpoint; however, have we considered the financial implications?"
  }
];

const l101_assessment: Exercise[] = [
  {
    id: "a2_u07_l101_a06",
    type: "multiple_choice",
    prompt: "Which response demonstrates the most polite and constructive disagreement in a professional setting?",
    sourceSentence: "A colleague proposes cancelling all weekly status meetings.",
    targetSentence: "I see where you're coming from, but keeping a brief 15-minute sync helps keep everyone aligned.",
    options: [
      { id: "o1", text: "I see where you're coming from, but keeping a brief 15-minute sync helps keep everyone aligned.", isCorrect: true },
      { id: "o2", text: "That is a terrible idea and you are completely wrong.", isCorrect: false },
      { id: "o3", text: "No way, you don't know what you're talking about.", isCorrect: false },
      { id: "o4", text: "I hate meetings anyway so whatever.", isCorrect: false }
    ],
    correctAnswer: "I see where you're coming from, but keeping a brief 15-minute sync helps keep everyone aligned.",
    explanation: "Demonstrates professional tact by validating the colleague's perspective before offering an alternative."
  },
  {
    id: "a2_u07_l101_a07",
    type: "listening",
    prompt: "Listen to the speaker and identify their attitude:",
    audioText: "I'm not entirely convinced that this software will solve our inventory bottlenecks.",
    targetSentence: "The speaker is expressing polite doubt/skepticism.",
    options: [
      { id: "o1", text: "The speaker is expressing polite doubt/skepticism.", isCorrect: true },
      { id: "o2", text: "The speaker is enthusiastic and ready to buy immediately.", isCorrect: false },
      { id: "o3", text: "The speaker created the software.", isCorrect: false },
      { id: "o4", text: "The speaker does not care about inventory.", isCorrect: false }
    ],
    correctAnswer: "The speaker is expressing polite doubt/skepticism.",
    explanation: "\"I'm not entirely convinced...\" conveys polite hesitation or doubt."
  },
  {
    id: "a2_u07_l101_a08",
    type: "writing",
    prompt: "Write a short comment expressing your perspective on AI in education:",
    targetSentence: "In my opinion, AI tools can greatly personalize student learning, but human teachers remain irreplaceable for empathy and mentorship.",
    guidelines: "Use 'In my opinion, ... but ...' to present a balanced viewpoint."
  }
];

enrichLessonData('lesson_a2_7_101', LESSON_A2_7_101_DATA, l101_practice, l101_review, l101_assessment);

// ==========================================
// LESSON 102: Rules, Obligations & Permissions
// ==========================================
const l102_practice: Exercise[] = [
  {
    id: "a2_u07_l102_p16",
    type: "reading",
    prompt: "Read the university lab safety regulations and answer the question:\n\"All students must wear protective safety goggles and lab coats inside the chemical laboratory at all times. Food and open beverages are strictly prohibited (must not be brought inside). You do not have to wear gloves unless handling corrosive reagents.\"\nWhen do students have to wear gloves in the lab?",
    sourceSentence: "When do students have to wear gloves in the lab?",
    targetSentence: "Only when handling corrosive chemical reagents.",
    options: [
      { id: "o1", text: "Only when handling corrosive chemical reagents.", isCorrect: true },
      { id: "o2", text: "At all times from the moment they enter the building.", isCorrect: false },
      { id: "o3", text: "Never under any circumstances.", isCorrect: false },
      { id: "o4", text: "Only while eating lunch.", isCorrect: false }
    ],
    correctAnswer: "Only when handling corrosive chemical reagents.",
    explanation: "The text states: 'You do not have to wear gloves unless handling corrosive reagents.'"
  },
  {
    id: "a2_u07_l102_p17",
    type: "fill_blank",
    prompt: "Choose the modal expressing lack of obligation (it is optional):",
    sourceSentence: "Tomorrow is a national holiday, so you ____ come into the office.",
    targetSentence: "Tomorrow is a national holiday, so you don't have to come into the office.",
    options: [
      { id: "o1", text: "don't have to", isCorrect: true },
      { id: "o2", text: "mustn't", isCorrect: false },
      { id: "o3", text: "can't", isCorrect: false },
      { id: "o4", text: "should not have", isCorrect: false }
    ],
    correctAnswer: "don't have to",
    explanation: "\"Don't have to\" denotes lack of necessity (you are not required to do it), whereas \"mustn't\" means strict prohibition."
  },
  {
    id: "a2_u07_l102_p18",
    type: "speaking",
    prompt: "Speak this building regulation sentence aloud clearly:",
    targetSentence: "Visitors must sign in at the reception desk and wear a visitor badge at all times.",
    audioText: "Visitors must sign in at the reception desk and wear a visitor badge at all times."
  },
  {
    id: "a2_u07_l102_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the safety rule:",
    audioText: "You mustn't block the emergency fire exit under any circumstances.",
    targetSentence: "You mustn't block the emergency fire exit under any circumstances."
  },
  {
    id: "a2_u07_l102_p20",
    type: "error_correction",
    prompt: "Correct the modal prohibition vs lack of obligation confusion:",
    sourceSentence: "You don't have to park in front of the hospital entrance because ambulances need immediate access.",
    targetSentence: "You mustn't park in front of the hospital entrance because ambulances need immediate access.",
    options: [
      { id: "o1", text: "You mustn't park in front of the hospital entrance because ambulances need immediate access.", isCorrect: true },
      { id: "o2", text: "You not have to park in front of hospital.", isCorrect: false },
      { id: "o3", text: "You must park in front of the hospital entrance.", isCorrect: false },
      { id: "o4", text: "You can parking in front of the hospital entrance.", isCorrect: false }
    ],
    correctAnswer: "You mustn't park in front of the hospital entrance because ambulances need immediate access.",
    explanation: "Blocking ambulances is strictly forbidden (prohibition -> mustn't / cannot)."
  },
  {
    id: "a2_u07_l102_p21",
    type: "mediation",
    prompt: "Mediation: A foreign exchange student is unfamiliar with campus library rules. Summarize the key regulations clearly:",
    sourceSentence: "What are the essential rules for borrowing books and study areas in the library?",
    targetSentence: "You can borrow up to ten books with your student ID, and you don't have to pay any lending fees. However, you must return them within three weeks, and you mustn't talk on your phone in the quiet study zones.",
    options: [
      { id: "o1", text: "You can borrow up to ten books with your student ID, and you don't have to pay any lending fees. However, you must return them within three weeks, and you mustn't talk on your phone in the quiet study zones.", isCorrect: true },
      { id: "o2", text: "Libraries do not allow books inside.", isCorrect: false },
      { id: "o3", text: "You must shout loudly in library.", isCorrect: false },
      { id: "o4", text: "I bought a book last month.", isCorrect: false }
    ],
    correctAnswer: "You can borrow up to ten books with your student ID, and you don't have to pay any lending fees. However, you must return them within three weeks, and you mustn't talk on your phone in the quiet study zones.",
    explanation: "Synthesizes permission (can borrow), lack of obligation (don't have to pay), obligation (must return), and prohibition (mustn't talk)."
  },
  {
    id: "a2_u07_l102_p22",
    type: "match_pairs",
    prompt: "Match modal verbs with their regulatory meanings:",
    options: [
      { id: "m1", text: "must / have to" },
      { id: "m1_m", text: "Mandatory Obligation / Necessity" },
      { id: "m2", text: "mustn't / can't" },
      { id: "m2_m", text: "Strict Prohibition / Forbidden" },
      { id: "m3", text: "don't have to / needn't" },
      { id: "m3_m", text: "No Obligation / Optional" },
      { id: "m4", text: "can / allowed to" },
      { id: "m4_m", text: "Permission / Allowed" }
    ]
  },
  {
    id: "a2_u07_l102_p23",
    type: "word_ordering",
    prompt: "Arrange the words to form a rule about company dress codes:",
    sourceSentence: "Employees do not have to wear formal business attire on Fridays.",
    targetSentence: "Employees do not have to wear formal business attire on Fridays",
    wordBank: ["Employees", "do", "not", "have", "to", "wear", "formal", "business", "attire", "on", "Fridays", "mustn't", "is"],
    explanation: "Subject (Employees) + do not have to + base verb (wear) + object + on Fridays."
  },
  {
    id: "a2_u07_l102_p24",
    type: "recognition",
    prompt: "Which sentence indicates that an action is strictly prohibited by law?",
    sourceSentence: "Drivers must not exceed the posted speed limit in school zones.",
    targetSentence: "Drivers must not exceed the posted speed limit in school zones.",
    options: [
      { id: "o1", text: "Drivers must not exceed the posted speed limit in school zones.", isCorrect: true },
      { id: "o2", text: "Drivers don't have to drive fast in school zones.", isCorrect: false },
      { id: "o3", text: "Drivers can drive at any speed they prefer.", isCorrect: false },
      { id: "o4", text: "Drivers might stop if they want to.", isCorrect: false }
    ],
    correctAnswer: "Drivers must not exceed the posted speed limit in school zones.",
    explanation: "\"Must not\" (mustn't) explicitly denotes legal prohibition."
  },
  {
    id: "a2_u07_l102_p25",
    type: "dialogue_completion",
    prompt: "Complete the office onboarding dialogue regarding working hours:",
    sourceSentence: "New Employee: \"Do I have to arrive exactly at 8:30 AM every day?\"\nHR Manager: \"____\"",
    targetSentence: "No, we have flexible core hours, so you don't have to be here at 8:30, but you must complete eight hours each day.",
    options: [
      { id: "o1", text: "No, we have flexible core hours, so you don't have to be here at 8:30, but you must complete eight hours each day.", isCorrect: true },
      { id: "o2", text: "You must arrive yesterday at midnight.", isCorrect: false },
      { id: "o3", text: "Nobody works in this company.", isCorrect: false },
      { id: "o4", text: "Because watches show time.", isCorrect: false }
    ],
    correctAnswer: "No, we have flexible core hours, so you don't have to be here at 8:30, but you must complete eight hours each day.",
    explanation: "Accurately contrasts lack of fixed arrival time (don't have to) with daily hour obligation (must complete)."
  },
  {
    id: "a2_u07_l102_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing one rule you must follow at your workplace or school, and one thing that is optional (don't have to):",
    targetSentence: "We must submit our project progress reports by Friday afternoon. However, we don't have to attend the optional Monday morning social coffee.",
    guidelines: "Use 'must + verb' for obligation and 'don't have to + verb' for optional tasks."
  }
];

const l102_review: Exercise[] = [
  {
    id: "a2_u07_l102_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct third-person form of 'have to':",
    sourceSentence: "Every passenger ____ show a valid passport before boarding the flight.",
    targetSentence: "Every passenger has to show a valid passport before boarding the flight.",
    options: [
      { id: "o1", text: "has to", isCorrect: true },
      { id: "o2", text: "have to", isCorrect: false },
      { id: "o3", text: "must to", isCorrect: false },
      { id: "o4", text: "is having to", isCorrect: false }
    ],
    correctAnswer: "has to",
    explanation: "\"Every passenger\" is singular, requiring \"has to\"."
  },
  {
    id: "a2_u07_l102_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the modal auxiliary combination error:",
    sourceSentence: "You must to show your driver's license upon request.",
    targetSentence: "You must show your driver's license upon request.",
    options: [
      { id: "o1", text: "You must show your driver's license upon request.", isCorrect: true },
      { id: "o2", text: "You must to showing your driver's license.", isCorrect: false },
      { id: "o3", text: "You are must to show your license.", isCorrect: false },
      { id: "o4", text: "You must showed driver's license.", isCorrect: false }
    ],
    correctAnswer: "You must show your driver's license upon request.",
    explanation: "The modal verb \"must\" takes a bare infinitive without \"to\": \"must show\"."
  },
  {
    id: "a2_u07_l102_r08",
    type: "speaking",
    prompt: "Speak this flight safety instruction aloud clearly:",
    targetSentence: "Electronic devices must be switched to flight mode during takeoff and landing.",
    audioText: "Electronic devices must be switched to flight mode during takeoff and landing."
  }
];

const l102_assessment: Exercise[] = [
  {
    id: "a2_u07_l102_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly expresses that something is NOT permitted?",
    sourceSentence: "You cannot use your phone during the final examination.",
    targetSentence: "You cannot use your phone during the final examination.",
    options: [
      { id: "o1", text: "You cannot use your phone during the final examination.", isCorrect: true },
      { id: "o2", text: "You don't have to use your phone during the examination.", isCorrect: false },
      { id: "o3", text: "You must use your phone during the exam.", isCorrect: false },
      { id: "o4", text: "You should to not use your phone during exam.", isCorrect: false }
    ],
    correctAnswer: "You cannot use your phone during the final examination.",
    explanation: "\"Cannot\" / \"must not\" expresses prohibition (it is strictly against the rules)."
  },
  {
    id: "a2_u07_l102_a07",
    type: "listening",
    prompt: "Listen to the building announcement and identify what is optional:",
    audioText: "All employees must attend the safety briefing, but you don't have to take the written quiz unless you are a floor warden.",
    targetSentence: "Taking the written quiz is optional for regular employees.",
    options: [
      { id: "o1", text: "Taking the written quiz is optional for regular employees.", isCorrect: true },
      { id: "o2", text: "Attending the briefing is optional for all staff.", isCorrect: false },
      { id: "o3", text: "Leaving the building is strictly forbidden.", isCorrect: false },
      { id: "o4", text: "Everyone must take the quiz three times.", isCorrect: false }
    ],
    correctAnswer: "Taking the written quiz is optional for regular employees.",
    explanation: "\"You don't have to take the written quiz unless...\" indicates the quiz is optional for regular staff."
  },
  {
    id: "a2_u07_l102_a08",
    type: "writing",
    prompt: "Write a short list of 2 rules for guests staying in a shared apartment:",
    targetSentence: "Guests must keep the kitchen clean after cooking. Guests must not play loud music after 10 PM.",
    guidelines: "Use 'must + base verb' for obligation and 'must not + base verb' for prohibition."
  }
];

enrichLessonData('lesson_a2_7_102', LESSON_A2_7_102_DATA, l102_practice, l102_review, l102_assessment);

// ==========================================
// LESSON 103: Future Plans, Intentions & Predictions
// ==========================================
const l103_practice: Exercise[] = [
  {
    id: "a2_u07_l103_p17",
    type: "reading",
    prompt: "Read the meteorological forecast and answer the question:\n\"According to satellite radar data, a strong cold front is approaching from the north. Temperatures will drop sharply tomorrow night, and there might be snow showers in elevated mountain passes.\"\nWhat is the predicted weather in the mountains tomorrow night?",
    sourceSentence: "What is the predicted weather in the mountains tomorrow night?",
    targetSentence: "There is a possibility of snow showers in elevated areas.",
    options: [
      { id: "o1", text: "There is a possibility of snow showers in elevated areas.", isCorrect: true },
      { id: "o2", text: "It will be hot and sunny with zero clouds.", isCorrect: false },
      { id: "o3", text: "Summer temperatures will arrive early.", isCorrect: false },
      { id: "o4", text: "Rain stopped forever.", isCorrect: false }
    ],
    correctAnswer: "There is a possibility of snow showers in elevated areas.",
    explanation: "\"might be snow showers\" indicates a possibility in the weather forecast."
  },
  {
    id: "a2_u07_l103_p18",
    type: "fill_blank",
    prompt: "Choose the modal expressing 50% possibility about a future event:",
    sourceSentence: "We ____ launch the beta version next Friday if the final test passes.",
    targetSentence: "We might launch the beta version next Friday if the final test passes.",
    options: [
      { id: "o1", text: "might", isCorrect: true },
      { id: "o2", text: "will certainly", isCorrect: false },
      { id: "o3", text: "are definitely", isCorrect: false },
      { id: "o4", text: "must to", isCorrect: false }
    ],
    correctAnswer: "might",
    explanation: "\"Might + base verb\" indicates tentative possibility."
  },
  {
    id: "a2_u07_l103_p19",
    type: "speaking",
    prompt: "Speak this tech prediction sentence aloud:",
    targetSentence: "Artificial intelligence will significantly transform how languages are learned across the globe.",
    audioText: "Artificial intelligence will significantly transform how languages are learned across the globe."
  },
  {
    id: "a2_u07_l103_p20",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "I think renewable energy will power most cities by 2040.",
    targetSentence: "I think renewable energy will power most cities by 2040."
  },
  {
    id: "a2_u07_l103_p21",
    type: "error_correction",
    prompt: "Correct the modal verb with 'might' error:",
    sourceSentence: "We might to postpone our vacation due to work deadlines.",
    targetSentence: "We might postpone our vacation due to work deadlines.",
    options: [
      { id: "o1", text: "We might postpone our vacation due to work deadlines.", isCorrect: true },
      { id: "o2", text: "We might postponing our vacation due to deadlines.", isCorrect: false },
      { id: "o3", text: "We are might to postpone our vacation.", isCorrect: false },
      { id: "o4", text: "We might to postponed our vacation.", isCorrect: false }
    ],
    correctAnswer: "We might postpone our vacation due to work deadlines.",
    explanation: "\"Might\" is a modal auxiliary followed by a bare infinitive without \"to\": \"might postpone\"."
  },
  {
    id: "a2_u07_l103_p22",
    type: "mediation",
    prompt: "Mediation: A family member is worried about travel delays tomorrow. Reassure them with a balanced prediction:",
    sourceSentence: "Will our flight be delayed tomorrow because of the storm?",
    targetSentence: "The weather forecast predicts morning fog, so our flight might be delayed by an hour, but the airline expects all afternoon flights to depart on schedule.",
    options: [
      { id: "o1", text: "The weather forecast predicts morning fog, so our flight might be delayed by an hour, but the airline expects all afternoon flights to depart on schedule.", isCorrect: true },
      { id: "o2", text: "Airplanes will never fly ever again.", isCorrect: false },
      { id: "o3", text: "The flight departed yesterday morning.", isCorrect: false },
      { id: "o4", text: "I do not know what is airplane.", isCorrect: false }
    ],
    correctAnswer: "The weather forecast predicts morning fog, so our flight might be delayed by an hour, but the airline expects all afternoon flights to depart on schedule.",
    explanation: "Synthesizes possibility (might be delayed) with reassurance (expects to depart on schedule)."
  },
  {
    id: "a2_u07_l103_p23",
    type: "match_pairs",
    prompt: "Match future prediction structures with their degree of certainty:",
    options: [
      { id: "m1", text: "will definitely / is certain to" },
      { id: "m1_m", text: "100% High Certainty" },
      { id: "m2", text: "will probably / is likely to" },
      { id: "m2_m", text: "75-80% Strong Probability" },
      { id: "m3", text: "may / might / could" },
      { id: "m3_m", text: "40-50% Possibility / Uncertainty" },
      { id: "m4", text: "probably won't / unlikely to" },
      { id: "m4_m", text: "Low Probability of Occurring" }
    ]
  },
  {
    id: "a2_u07_l103_p24",
    type: "word_ordering",
    prompt: "Arrange the words to form a prediction with 'probably':",
    sourceSentence: "The tech conference will probably attract over five thousand attendees.",
    targetSentence: "The tech conference will probably attract over five thousand attendees",
    wordBank: ["The", "tech", "conference", "will", "probably", "attract", "over", "five", "thousand", "attendees", "is", "might"],
    explanation: "Subject (The tech conference) + will probably + base verb (attract) + object."
  },
  {
    id: "a2_u07_l103_p25",
    type: "recognition",
    prompt: "Which adverb expresses that an event is almost guaranteed to happen?",
    sourceSentence: "definitely / possibly / perhaps / maybe",
    targetSentence: "definitely",
    options: [
      { id: "o1", text: "definitely", isCorrect: true },
      { id: "o2", text: "possibly", isCorrect: false },
      { id: "o3", text: "perhaps", isCorrect: false },
      { id: "o4", text: "maybe", isCorrect: false }
    ],
    correctAnswer: "definitely",
    explanation: "\"Definitely\" conveys total certainty."
  },
  {
    id: "a2_u07_l103_p26",
    type: "personal_production",
    prompt: "Write 2 future predictions: one that will definitely happen and one that might happen in your career:",
    targetSentence: "I will definitely complete my English proficiency certification this year. I might also apply for an international marketing position abroad.",
    guidelines: "Use 'will definitely + verb' and 'might + verb'."
  }
];

const l103_review: Exercise[] = [
  {
    id: "a2_u07_l103_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct prediction form:",
    sourceSentence: "Scientists believe global temperatures ____ continue to rise if emissions are not curtailed.",
    targetSentence: "Scientists believe global temperatures will continue to rise if emissions are not curtailed.",
    options: [
      { id: "o1", text: "will", isCorrect: true },
      { id: "o2", text: "are", isCorrect: false },
      { id: "o3", text: "were", isCorrect: false },
      { id: "o4", text: "shall to", isCorrect: false }
    ],
    correctAnswer: "will",
    explanation: "Future predictions based on beliefs and opinions use \"will + base verb\"."
  },
  {
    id: "a2_u07_l103_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the negative prediction word order with 'probably':",
    sourceSentence: "She will probably not come to the party tonight.",
    targetSentence: "She probably won't come to the party tonight.",
    options: [
      { id: "o1", text: "She probably won't come to the party tonight.", isCorrect: true },
      { id: "o2", text: "She won't probably come to the party tonight.", isCorrect: false },
      { id: "o3", text: "She will not probably come to party.", isCorrect: false },
      { id: "o4", text: "She not probably will come to the party.", isCorrect: false }
    ],
    correctAnswer: "She probably won't come to the party tonight.",
    explanation: "With contracted \"won't\", \"probably\" comes before \"won't\": \"She probably won't come\"."
  },
  {
    id: "a2_u07_l103_r08",
    type: "speaking",
    prompt: "Speak this future prediction aloud:",
    targetSentence: "Electric autonomous vehicles will likely become standard on major highways within a decade.",
    audioText: "Electric autonomous vehicles will likely become standard on major highways within a decade."
  }
];

const l103_assessment: Exercise[] = [
  {
    id: "a2_u07_l103_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'may' vs 'will' for uncertain future plans?",
    sourceSentence: "I haven't decided yet, but I may take an intensive programming boot camp next summer.",
    targetSentence: "I haven't decided yet, but I may take an intensive programming boot camp next summer.",
    options: [
      { id: "o1", text: "I haven't decided yet, but I may take an intensive programming boot camp next summer.", isCorrect: true },
      { id: "o2", text: "I haven't decided yet, but I will definitely take it.", isCorrect: false },
      { id: "o3", text: "I haven't decided yet, but I took it last year.", isCorrect: false },
      { id: "o4", text: "I haven't decided yet, so I am take it.", isCorrect: false }
    ],
    correctAnswer: "I haven't decided yet, but I may take an intensive programming boot camp next summer.",
    explanation: "\"May take\" correctly expresses that the plan is tentative and undecided."
  },
  {
    id: "a2_u07_l103_a07",
    type: "listening",
    prompt: "Listen and determine the probability of rain:",
    audioText: "There's a slight chance of showers in the afternoon, but it will probably remain dry.",
    targetSentence: "Rain is unlikely; the weather will most likely stay dry.",
    options: [
      { id: "o1", text: "Rain is unlikely; the weather will most likely stay dry.", isCorrect: true },
      { id: "o2", text: "Heavy torrential thunderstorms will flood the streets.", isCorrect: false },
      { id: "o3", text: "It snowed all morning.", isCorrect: false },
      { id: "o4", text: "The weather never changes.", isCorrect: false }
    ],
    correctAnswer: "Rain is unlikely; the weather will most likely stay dry.",
    explanation: "\"Slight chance... probably remain dry\" indicates low probability of rain."
  },
  {
    id: "a2_u07_l103_a08",
    type: "writing",
    prompt: "Write a short paragraph predicting how modern technology will change work in the next 10 years:",
    targetSentence: "In the next ten years, automation will handle repetitive administrative tasks. As a result, workers will focus more on creative problem solving and human collaboration.",
    guidelines: "Use 'will + verb' and 'will focus on' to outline your predictions."
  }
];

enrichLessonData('lesson_a2_7_103', LESSON_A2_7_103_DATA, l103_practice, l103_review, l103_assessment);

// ==========================================
// LESSON 104: Digital Life, Apps & Modern Communication
// ==========================================
const l104_practice: Exercise[] = [
  {
    id: "a2_u07_l104_p17",
    type: "reading",
    prompt: "Read the IT security guideline and answer the question:\n\"To protect your account from unauthorized breaches, always set up two-factor authentication. Never click on suspicious verification links in unexpected emails, and make sure to back up your critical files to the encrypted cloud storage weekly.\"\nHow should employees protect their important files according to the guideline?",
    sourceSentence: "How should employees protect their important files according to the guideline?",
    targetSentence: "By backing them up to encrypted cloud storage weekly.",
    options: [
      { id: "o1", text: "By backing them up to encrypted cloud storage weekly.", isCorrect: true },
      { id: "o2", text: "By clicking on all email links immediately.", isCorrect: false },
      { id: "o3", text: "By writing passwords on sticky notes.", isCorrect: false },
      { id: "o4", text: "By deleting cloud storage files daily.", isCorrect: false }
    ],
    correctAnswer: "By backing them up to encrypted cloud storage weekly.",
    explanation: "The text advises: 'back up your critical files to the encrypted cloud storage weekly.'"
  },
  {
    id: "a2_u07_l104_p18",
    type: "fill_blank",
    prompt: "Choose the correct tech phrasal verb for accessing a secure account:",
    sourceSentence: "Please enter your username and one-time passcode to ____ to your banking portal.",
    targetSentence: "Please enter your username and one-time passcode to log in to your banking portal.",
    options: [
      { id: "o1", text: "log in", isCorrect: true },
      { id: "o2", text: "shut down", isCorrect: false },
      { id: "o3", text: "turn up", isCorrect: false },
      { id: "o4", text: "run out", isCorrect: false }
    ],
    correctAnswer: "log in",
    explanation: "\"Log in\" means to authenticate and gain access to a digital system."
  },
  {
    id: "a2_u07_l104_p19",
    type: "speaking",
    prompt: "Speak this tech instruction sentence aloud:",
    targetSentence: "If the application freezes, restart your device and update the software to the latest patch.",
    audioText: "If the application freezes, restart your device and update the software to the latest patch."
  },
  {
    id: "a2_u07_l104_p20",
    type: "listen_and_type",
    prompt: "Listen and transcribe the digital troubleshooting step:",
    audioText: "Make sure you log out of public computers after checking your email.",
    targetSentence: "Make sure you log out of public computers after checking your email."
  },
  {
    id: "a2_u07_l104_p21",
    type: "error_correction",
    prompt: "Correct the separable phrasal verb word order with a pronoun object:",
    sourceSentence: "The battery is low; please turn on it.",
    targetSentence: "The battery is low; please turn it on.",
    options: [
      { id: "o1", text: "The battery is low; please turn it on.", isCorrect: true },
      { id: "o2", text: "The battery is low; please turn on them.", isCorrect: false },
      { id: "o3", text: "The battery is low; please turn it out.", isCorrect: false },
      { id: "o4", text: "Please turning on it now.", isCorrect: false }
    ],
    correctAnswer: "The battery is low; please turn it on.",
    explanation: "When the object of a separable phrasal verb is a pronoun (it, them, him, her), it MUST go between the verb and particle: \"turn it on\"."
  },
  {
    id: "a2_u07_l104_p22",
    type: "mediation",
    prompt: "Mediation: A less tech-savvy colleague cannot access a shared online folder. Guide them through the steps calmly:",
    sourceSentence: "How do I get access to the project folder on Google Drive?",
    targetSentence: "First, open the link sent to your email. Next, log in with your company credentials. If permission is required, click 'Request Access', and our IT administrator will approve it.",
    options: [
      { id: "o1", text: "First, open the link sent to your email. Next, log in with your company credentials. If permission is required, click 'Request Access', and our IT administrator will approve it.", isCorrect: true },
      { id: "o2", text: "Throw the computer out of window.", isCorrect: false },
      { id: "o3", text: "Google Drive is broken forever.", isCorrect: false },
      { id: "o4", text: "I do not use emails.", isCorrect: false }
    ],
    correctAnswer: "First, open the link sent to your email. Next, log in with your company credentials. If permission is required, click 'Request Access', and our IT administrator will approve it.",
    explanation: "Step-by-step guidance utilizing clear sequencing and digital vocabulary."
  },
  {
    id: "a2_u07_l104_p23",
    type: "match_pairs",
    prompt: "Match digital phrasal verbs with their definitions:",
    options: [
      { id: "m1", text: "back up" },
      { id: "m1_m", text: "Create duplicate copies of files for safety" },
      { id: "m2", text: "scroll down" },
      { id: "m2_m", text: "Move downward on a screen or web page" },
      { id: "m3", text: "sign up" },
      { id: "m3_m", text: "Register a new user account" },
      { id: "m4", text: "shut down" },
      { id: "m4_m", text: "Completely power off a computer system" }
    ]
  },
  {
    id: "a2_u07_l104_p24",
    type: "word_ordering",
    prompt: "Arrange the words to form a troubleshooting instruction:",
    sourceSentence: "You should back up your database before updating the server.",
    targetSentence: "You should back up your database before updating the server",
    wordBank: ["You", "should", "back", "up", "your", "database", "before", "updating", "the", "server", "down", "log"],
    explanation: "You + should + back up (phrasal verb) + your database (object) + before updating the server (time clause)."
  },
  {
    id: "a2_u07_l104_p25",
    type: "recognition",
    prompt: "Which term refers to fraudulent emails designed to steal passwords or sensitive information?",
    sourceSentence: "phishing / streaming / caching / compiling",
    targetSentence: "phishing",
    options: [
      { id: "o1", text: "phishing", isCorrect: true },
      { id: "o2", text: "streaming", isCorrect: false },
      { id: "o3", text: "caching", isCorrect: false },
      { id: "o4", text: "compiling", isCorrect: false }
    ],
    correctAnswer: "phishing",
    explanation: "\"Phishing\" is a cybercrime in which targets are contacted by email or message to lure them into providing sensitive data."
  },
  {
    id: "a2_u07_l104_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing your daily digital habits using at least two phrasal verbs (e.g. log in, check out, turn off, back up):",
    targetSentence: "Every morning, I log in to my project management app to check my daily tasks. Before going to bed, I turn off all my digital notifications.",
    guidelines: "Use at least two digital phrasal verbs in your sentences."
  }
];

const l104_review: Exercise[] = [
  {
    id: "a2_u07_l104_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct preposition:",
    sourceSentence: "Don't forget to attach the PDF document ____ your follow-up email.",
    targetSentence: "Don't forget to attach the PDF document to your follow-up email.",
    options: [
      { id: "o1", text: "to", isCorrect: true },
      { id: "o2", text: "with", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "for", isCorrect: false }
    ],
    correctAnswer: "to",
    explanation: "The verb \"attach\" collocates with \"to\": attach a file to an email."
  },
  {
    id: "a2_u07_l104_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the phrasal verb preposition mistake:",
    sourceSentence: "Can you turn on the light? It's getting dark.",
    targetSentence: "Can you turn on the light? It's getting dark.",
    options: [
      { id: "o1", text: "Can you turn on the light? It's getting dark.", isCorrect: true },
      { id: "o2", text: "Can you open the light? It's getting dark.", isCorrect: false },
      { id: "o3", text: "Can you make on light? It's getting dark.", isCorrect: false },
      { id: "o4", text: "Can you light up on the room?", isCorrect: false }
    ],
    correctAnswer: "Can you turn on the light? It's getting dark.",
    explanation: "In English, say \"turn on the light / switch on the light\", not \"open the light\"."
  },
  {
    id: "a2_u07_l104_r08",
    type: "speaking",
    prompt: "Speak this cybersecurity advice aloud:",
    targetSentence: "Creating strong, unique passphrases for each digital account significantly prevents cyber threats.",
    audioText: "Creating strong, unique passphrases for each digital account significantly prevents cyber threats."
  }
];

const l104_assessment: Exercise[] = [
  {
    id: "a2_u07_l104_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly places the pronoun in a phrasal verb construction?",
    sourceSentence: "I downloaded the new update and installed it immediately.",
    targetSentence: "I downloaded the new update and installed it immediately.",
    options: [
      { id: "o1", text: "I downloaded the new update and installed it immediately.", isCorrect: true },
      { id: "o2", text: "I turned off it when it crashed.", isCorrect: false },
      { id: "o3", text: "Please log in it right now.", isCorrect: false },
      { id: "o4", text: "She backed up them yesterday.", isCorrect: false }
    ],
    correctAnswer: "I downloaded the new update and installed it immediately.",
    explanation: "Standard verb-object syntax; for separable phrasal verbs, the pronoun sits between verb and particle (e.g. backed them up, turned it off)."
  },
  {
    id: "a2_u07_l104_a07",
    type: "listening",
    prompt: "Listen to the voice assistant prompt and choose the action performed:",
    audioText: "Your device has successfully synced forty-eight photos to the cloud storage vault.",
    targetSentence: "48 photos have been uploaded and backed up to cloud storage.",
    options: [
      { id: "o1", text: "48 photos have been uploaded and backed up to cloud storage.", isCorrect: true },
      { id: "o2", text: "All 48 photos were deleted by accident.", isCorrect: false },
      { id: "o3", text: "The camera is broken and cannot take pictures.", isCorrect: false },
      { id: "o4", text: "Cloud storage is completely full.", isCorrect: false }
    ],
    correctAnswer: "48 photos have been uploaded and backed up to cloud storage.",
    explanation: "\"Successfully synced forty-eight photos\" = 48 photos backed up to cloud."
  },
  {
    id: "a2_u07_l104_a08",
    type: "writing",
    prompt: "Write a short technical advice tip on what to do when an app is not responding:",
    targetSentence: "When an app freezes, first force quit the application and restart your phone. If the issue continues, check for software updates or reinstall the app from the app store.",
    guidelines: "Use clear technical imperatives: 'force quit', 'restart', 'check for updates', 'reinstall'."
  }
];

enrichLessonData('lesson_a2_7_104', LESSON_A2_7_104_DATA, l104_practice, l104_review, l104_assessment);

// ==========================================
// LESSON 105: Unit 7 Milestone Review & Mastery
// ==========================================
const l105_practice: Exercise[] = [
  {
    id: "a2_u07_l105_p17",
    type: "reading",
    prompt: "Read the comprehensive A2 profile summary and answer the question:\n\"Maya lives in Valencia. She usually commutes by bicycle, but last month she traveled across Europe by train for work. Next week, she is attending an international language conference in London where she will present her research on bilingual education.\"\nWhich grammar tenses are demonstrated in Maya's profile?",
    sourceSentence: "Which grammar tenses are demonstrated in Maya's profile?",
    targetSentence: "Present Simple (habit), Past Simple (trip), and Present Continuous/Future (conference).",
    options: [
      { id: "o1", text: "Present Simple (habit), Past Simple (trip), and Present Continuous/Future (conference).", isCorrect: true },
      { id: "o2", text: "Only Past Perfect continuous throughout the entire text.", isCorrect: false },
      { id: "o3", text: "Only passive voice in future perfect aspect.", isCorrect: false },
      { id: "o4", text: "Imperative commands only.", isCorrect: false }
    ],
    correctAnswer: "Present Simple (habit), Past Simple (trip), and Present Continuous/Future (conference).",
    explanation: "The profile synthesizes Present Simple (usually commutes), Past Simple (traveled), and Present Continuous (is attending) with will."
  },
  {
    id: "a2_u07_l105_p18",
    type: "fill_blank",
    prompt: "Unit 7 Mastery: Select the correct connector of cause and effect:",
    sourceSentence: "Our flight was postponed ____ heavy thunderstorms, so we booked a hotel near the terminal.",
    targetSentence: "Our flight was postponed due to heavy thunderstorms, so we booked a hotel near the terminal.",
    options: [
      { id: "o1", text: "due to", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "although", isCorrect: false },
      { id: "o4", text: "in order to", isCorrect: false }
    ],
    correctAnswer: "due to",
    explanation: "\"Due to + noun phrase (heavy thunderstorms)\" correctly expresses cause."
  },
  {
    id: "a2_u07_l105_p19",
    type: "speaking",
    prompt: "Speak this comprehensive A2 synthesis sentence aloud with clear pronunciation and rhythm:",
    targetSentence: "I usually manage my projects effectively, but whenever urgent issues arise, I collaborate closely with my team to resolve them.",
    audioText: "I usually manage my projects effectively, but whenever urgent issues arise, I collaborate closely with my team to resolve them."
  },
  {
    id: "a2_u07_l105_p20",
    type: "listen_and_type",
    prompt: "Listen and transcribe the milestone synthesis statement:",
    audioText: "You must follow safety regulations, but you don't have to wear protective equipment outside the testing zone.",
    targetSentence: "You must follow safety regulations, but you don't have to wear protective equipment outside the testing zone."
  },
  {
    id: "a2_u07_l105_p21",
    type: "error_correction",
    prompt: "Identify and correct the tense mixing error:",
    sourceSentence: "Yesterday I go to the supermarket and I am buying some fresh fruits.",
    targetSentence: "Yesterday I went to the supermarket and I bought some fresh fruits.",
    options: [
      { id: "o1", text: "Yesterday I went to the supermarket and I bought some fresh fruits.", isCorrect: true },
      { id: "o2", text: "Yesterday I will go to supermarket and buy fruits.", isCorrect: false },
      { id: "o3", text: "Yesterday I go supermarket and buying fruit.", isCorrect: false },
      { id: "o4", text: "Yesterday I was go to the supermarket and bought.", isCorrect: false }
    ],
    correctAnswer: "Yesterday I went to the supermarket and I bought some fresh fruits.",
    explanation: "Past time signal (\"Yesterday\") requires consistent Past Simple verbs: went and bought."
  },
  {
    id: "a2_u07_l105_p22",
    type: "mediation",
    prompt: "Mediation: Synthesize an entire travel itinerary for a visitor arriving in your city for 3 days:",
    sourceSentence: "Can you recommend a 3-day itinerary covering culture, dining, and outdoor activities?",
    targetSentence: "On day one, you should explore the historic old town and visit the cathedral. On day two, I recommend hiking in the national park, followed by dinner at a traditional local restaurant. Finally, on day three, you can visit the modern art museum before heading to the airport.",
    options: [
      { id: "o1", text: "On day one, you should explore the historic old town and visit the cathedral. On day two, I recommend hiking in the national park, followed by dinner at a traditional local restaurant. Finally, on day three, you can visit the modern art museum before heading to the airport.", isCorrect: true },
      { id: "o2", text: "Stay in your hotel room for three days without eating.", isCorrect: false },
      { id: "o3", text: "Our city has no buildings and no food.", isCorrect: false },
      { id: "o4", text: "I traveled last century.", isCorrect: false }
    ],
    correctAnswer: "On day one, you should explore the historic old town and visit the cathedral. On day two, I recommend hiking in the national park, followed by dinner at a traditional local restaurant. Finally, on day three, you can visit the modern art museum before heading to the airport.",
    explanation: "Masterful mediation synthesizing recommendations, sequencing connectors (First, On day two, Finally), and modals (should, can)."
  },
  {
    id: "a2_u07_l105_p23",
    type: "match_pairs",
    prompt: "Match Unit 7 core communication functions with their key language exponents:",
    options: [
      { id: "m1", text: "Describing Daily Frequency" },
      { id: "m1_m", text: "always / usually / rarely / every morning" },
      { id: "m2", text: "Narrative Past Storytelling" },
      { id: "m2_m", text: "First / Then / Suddenly / While ... when" },
      { id: "m3", text: "Polite Dining & Shopping Requests" },
      { id: "m3_m", text: "Could I please have / Would you like" },
      { id: "m4", text: "Expressing Rules & Obligations" },
      { id: "m4_m", text: "must / mustn't / don't have to / can" }
    ]
  },
  {
    id: "a2_u07_l105_p24",
    type: "word_ordering",
    prompt: "Arrange the words to form a multi-clause A2 milestone sentence:",
    sourceSentence: "Although it was raining heavily we decided to continue our mountain hike.",
    targetSentence: "Although it was raining heavily we decided to continue our mountain hike",
    wordBank: ["Although", "it", "was", "raining", "heavily", "we", "decided", "to", "continue", "our", "mountain", "hike", "because", "must"],
    explanation: "Concession (Although + past continuous) + main clause (we decided to continue our mountain hike)."
  },
  {
    id: "a2_u07_l105_p25",
    type: "recognition",
    prompt: "Which sentence demonstrates the CEFR A2 standard for describing personal background and future plans?",
    sourceSentence: "I worked as an accountant for two years, and now I am learning software engineering to build educational tools.",
    targetSentence: "I worked as an accountant for two years, and now I am learning software engineering to build educational tools.",
    options: [
      { id: "o1", text: "I worked as an accountant for two years, and now I am learning software engineering to build educational tools.", isCorrect: true },
      { id: "o2", text: "I work yesterday and learning tomorrow.", isCorrect: false },
      { id: "o3", text: "I was accountant forever and ever.", isCorrect: false },
      { id: "o4", text: "Accounting is number.", isCorrect: false }
    ],
    correctAnswer: "I worked as an accountant for two years, and now I am learning software engineering to build educational tools.",
    explanation: "Cleanly links completed past experience with present continuous activity and purpose (to build)."
  },
  {
    id: "a2_u07_l105_p26",
    type: "personal_production",
    prompt: "Write a comprehensive 3-sentence self-introduction covering your daily routine, a past achievement, and a future ambition:",
    targetSentence: "I usually start my day with a 30-minute workout and a healthy breakfast. Last year, I successfully led a cross-functional marketing project in my company. Next year, I am going to master conversational English and travel across North America.",
    guidelines: "Include 1 routine sentence (Present Simple + adverb), 1 past achievement sentence (Past Simple), and 1 future ambition sentence (going to / will)."
  }
];

const l105_review: Exercise[] = [
  {
    id: "a2_u07_l105_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct modal for polite advice:",
    sourceSentence: "If you feel overwhelmed by your workload, you ____ prioritize your top three tasks.",
    targetSentence: "If you feel overwhelmed by your workload, you should prioritize your top three tasks.",
    options: [
      { id: "o1", text: "should", isCorrect: true },
      { id: "o2", text: "must to", isCorrect: false },
      { id: "o3", text: "have", isCorrect: false },
      { id: "o4", text: "will to", isCorrect: false }
    ],
    correctAnswer: "should",
    explanation: "\"Should + base verb\" is the gold standard for giving helpful recommendations."
  },
  {
    id: "a2_u07_l105_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the quantifier and comparative error:",
    sourceSentence: "This online course is more cheaper and has much exercises.",
    targetSentence: "This online course is cheaper and has many exercises.",
    options: [
      { id: "o1", text: "This online course is cheaper and has many exercises.", isCorrect: true },
      { id: "o2", text: "This course is more cheap and has much exercises.", isCorrect: false },
      { id: "o3", text: "This course is cheap and has much exercise.", isCorrect: false },
      { id: "o4", text: "This course is more cheaper and has few exercises.", isCorrect: false }
    ],
    correctAnswer: "This online course is cheaper and has many exercises.",
    explanation: "\"Cheap\" -> \"cheaper\" (no more); \"exercises\" is countable plural -> \"many exercises\"."
  },
  {
    id: "a2_u07_l105_r08",
    type: "speaking",
    prompt: "Speak this milestone capstone sentence aloud with confident pronunciation:",
    targetSentence: "Congratulations on completing Unit Seven! You have mastered key A2 English communication skills!",
    audioText: "Congratulations on completing Unit Seven! You have mastered key A2 English communication skills!"
  }
];

const l105_assessment: Exercise[] = [
  {
    id: "a2_u07_l105_a06",
    type: "multiple_choice",
    prompt: "Which sentence accurately combines narrative sequencing with past continuous and past simple?",
    sourceSentence: "First we were waiting at the gate, but then an announcement informed us of the platform change.",
    targetSentence: "First we were waiting at the gate, but then an announcement informed us of the platform change.",
    options: [
      { id: "o1", text: "First we were waiting at the gate, but then an announcement informed us of the platform change.", isCorrect: true },
      { id: "o2", text: "First we waited gate and then announcement was informing.", isCorrect: false },
      { id: "o3", text: "We were wait at gate when announcement informs us.", isCorrect: false },
      { id: "o4", text: "First gate we wait then announcement.", isCorrect: false }
    ],
    correctAnswer: "First we were waiting at the gate, but then an announcement informed us of the platform change.",
    explanation: "Properly sequences ongoing past state (were waiting) with subsequent completed event (informed us)."
  },
  {
    id: "a2_u07_l105_a07",
    type: "listening",
    prompt: "Listen to the capstone speech and choose the core message:",
    audioText: "By practicing consistent daily habits, reviewing past errors, and applying English in real situations, you have achieved CEFR A2 communicative competence.",
    targetSentence: "The learner has reached functional A2 communicative competence.",
    options: [
      { id: "o1", text: "The learner has reached functional A2 communicative competence.", isCorrect: true },
      { id: "o2", text: "The learner must restart from the beginner level.", isCorrect: false },
      { id: "o3", text: "The learner should never speak English again.", isCorrect: false },
      { id: "o4", text: "Grammar is completely unnecessary.", isCorrect: false }
    ],
    correctAnswer: "The learner has reached functional A2 communicative competence.",
    explanation: "The milestone assessment speech confirms mastery of A2 communication competence."
  },
  {
    id: "a2_u07_l105_a08",
    type: "writing",
    prompt: "Write a summary paragraph reflecting on your English learning progress and outlining how you will use English in real life:",
    targetSentence: "Over the past few weeks, I have learned how to describe my routines, share past stories, and express polite requests. In the future, I am going to use English to communicate with international colleagues and travel with confidence.",
    guidelines: "Reflect on skills learned (routines, past stories, polite requests) and state future intentions (going to use English)."
  }
];

enrichLessonData('lesson_a2_7_105', LESSON_A2_7_105_DATA, l105_practice, l105_review, l105_assessment);
