import { Exercise } from '../src/types';
import { LESSON_A2_9_126_DATA } from '../src/data/lessons/lesson_a2_9_126';
import { LESSON_A2_9_127_DATA } from '../src/data/lessons/lesson_a2_9_127';
import { LESSON_A2_9_128_DATA } from '../src/data/lessons/lesson_a2_9_128';
import { LESSON_A2_9_129_DATA } from '../src/data/lessons/lesson_a2_9_129';
import { LESSON_A2_9_130_DATA } from '../src/data/lessons/lesson_a2_9_130';
import { enrichUnit9LessonData } from './enrich_unit9_helper';

// =========================================================================
// LESSON 126: Workplace Collaboration, Delegating Tasks & Status Updates
// =========================================================================
const l126_practice: Exercise[] = [
  {
    id: "a2_u09_l126_p16",
    type: "reading",
    prompt: "Read the project update email and answer the question:\n\"Team, I have delegated the client onboarding presentation to Sarah and Liam. Sarah will prepare the slides by Thursday, and Liam will review the technical architecture. Please send all status updates to our shared channel by 4 PM tomorrow.\"\nWho is responsible for preparing the slides?",
    sourceSentence: "Who is responsible for preparing the slides?",
    targetSentence: "Sarah is responsible for preparing the presentation slides.",
    options: [
      { id: "o1", text: "Sarah is responsible for preparing the presentation slides.", isCorrect: true },
      { id: "o2", text: "Liam is preparing the presentation slides alone.", isCorrect: false },
      { id: "o3", text: "The client will prepare the presentation slides.", isCorrect: false },
      { id: "o4", text: "Nobody has been assigned this task yet.", isCorrect: false }
    ],
    correctAnswer: "Sarah is responsible for preparing the presentation slides.",
    explanation: "The email explicitly assigns: 'Sarah will prepare the slides by Thursday'."
  },
  {
    id: "a2_u09_l126_p17",
    type: "speaking",
    prompt: "Practice making a polite delegation request in a meeting:\n'Could you please take the lead on this project and give us a status update by Friday?'",
    sourceSentence: "Could you please take the lead on this project and give us a status update by Friday?",
    targetSentence: "Could you please take the lead on this project and give us a status update by Friday?",
    audioText: "Could you please take the lead on this project and give us a status update by Friday?",
    explanation: "Polite modal 'Could you please + verb' combined with collocation 'take the lead on'."
  },
  {
    id: "a2_u09_l126_p18",
    type: "match_pairs",
    prompt: "Match workplace collaboration collocations with their definitions:",
    options: [
      { id: "m1", text: "delegate tasks" },
      { id: "m1_m", text: "assign responsibilities to team members" },
      { id: "m2", text: "meet a tight deadline" },
      { id: "m2_m", text: "finish required work on time before the limit" },
      { id: "m3", text: "give a status update" },
      { id: "m3_m", text: "report current progress on an ongoing project" },
      { id: "m4", text: "collaborate closely" },
      { id: "m4_m", text: "work together cooperatively toward a common objective" }
    ]
  },
  {
    id: "a2_u09_l126_p19",
    type: "mediation",
    prompt: "Translate and summarize this task delegation note from Hindi into professional English: 'क्या आप इस हफ़्ते के अंत तक मार्केटिंग रिपोर्ट की समीक्षा कर सकते हैं और टीम को अपडेट दे सकते हैं?'",
    sourceSentence: "क्या आप इस हफ़्ते के अंत तक मार्केटिंग रिपोर्ट की समीक्षा कर सकते हैं और टीम को अपडेट दे सकते हैं?",
    targetSentence: "Could you please review the marketing report by the end of this week and update the team?",
    options: [
      { id: "o1", text: "Could you please review the marketing report by the end of this week and update the team?", isCorrect: true },
      { id: "o2", text: "You must review marketing report right now yesterday.", isCorrect: false },
      { id: "o3", text: "Are you reviewing report end of week tomorrow?", isCorrect: false }
    ],
    correctAnswer: "Could you please review the marketing report by the end of this week and update the team?",
    explanation: "Polite modal request suitable for workplace collaboration."
  },
  {
    id: "a2_u09_l126_p20",
    type: "error_correction",
    prompt: "Correct the preposition error in this status update sentence:",
    sourceSentence: "We are currently on schedule to finish the design in Friday.",
    targetSentence: "We are currently on schedule to finish the design by Friday.",
    options: [
      { id: "o1", text: "We are currently on schedule to finish the design by Friday.", isCorrect: true },
      { id: "o2", text: "We are currently at schedule to finish the design in Friday.", isCorrect: false },
      { id: "o3", text: "We are currently on schedule to finish design until Friday.", isCorrect: false }
    ],
    correctAnswer: "We are currently on schedule to finish the design by Friday.",
    explanation: "'By Friday' indicates a deadline (no later than Friday), whereas 'on schedule' means progressing as planned."
  },
  {
    id: "a2_u09_l126_p21",
    type: "listening",
    prompt: "Listen to the project manager's stand-up meeting voice note and identify the primary priority:",
    audioText: "Good morning team. Our main priority today is resolving the payment gateway bug before we deploy the new release at noon.",
    targetSentence: "Resolving the payment gateway bug before the noon deployment.",
    options: [
      { id: "o1", text: "Resolving the payment gateway bug before the noon deployment.", isCorrect: true },
      { id: "o2", text: "Canceling all afternoon meetings.", isCorrect: false },
      { id: "o3", text: "Hiring new engineers next month.", isCorrect: false }
    ],
    correctAnswer: "Resolving the payment gateway bug before the noon deployment.",
    explanation: "The speaker clearly states: 'Our main priority today is resolving the payment gateway bug...'"
  },
  {
    id: "a2_u09_l126_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Give a status update on a project and politely delegate one task to a teammate.",
    targetSentence: "We have finished the draft proposal ahead of time. Could you please double-check the client contact list?",
    audioText: "We have finished the draft proposal ahead of time. Could you please double-check the client contact list?"
  }
];

const l126_review: Exercise[] = [
  {
    id: "a2_u09_l126_r06",
    type: "dialogue_completion",
    prompt: "Complete the standup dialogue:",
    sourceSentence: "Team Lead: How is the database migration coming along?\nEngineer: _____",
    targetSentence: "Everything is on track, and we expect to complete the testing by 3 PM.",
    options: [
      { id: "o1", text: "Everything is on track, and we expect to complete the testing by 3 PM.", isCorrect: true },
      { id: "o2", text: "I have graduated from school yesterday.", isCorrect: false },
      { id: "o3", text: "We used to finish it tomorrow morning.", isCorrect: false },
      { id: "o4", text: "Nobody is working on it never.", isCorrect: false }
    ],
    correctAnswer: "Everything is on track, and we expect to complete the testing by 3 PM.",
    explanation: "'On track' + specific deadline expectation is the standard workplace idiom for progress updates."
  },
  {
    id: "a2_u09_l126_r07",
    type: "word_ordering",
    prompt: "Arrange into a polite request for project assistance:",
    sourceSentence: "Would you mind helping me review these quarterly figures?",
    targetSentence: "Would you mind helping me review these quarterly figures",
    wordBank: ["Would", "you", "mind", "helping", "me", "review", "these", "quarterly", "figures", "help", "do"]
  },
  {
    id: "a2_u09_l126_r08",
    type: "translation",
    prompt: "Translate into English: 'हम तय समय से आगे चल रहे हैं और शुक्रवार तक काम पूरा कर लेंगे।'",
    sourceSentence: "हम तय समय से आगे चल रहे हैं और शुक्रवार तक काम पूरा कर लेंगे।",
    targetSentence: "We are ahead of schedule and will finish the work by Friday.",
    wordBank: ["We", "are", "ahead", "of", "schedule", "and", "will", "finish", "the", "work", "by", "Friday.", "on", "in"]
  },
  {
    id: "a2_u09_l126_r09",
    type: "reading",
    prompt: "Read the workplace memo:\n\"To improve inter-departmental collaboration, all team leads will hold brief 10-minute syncs on Monday mornings to share roadblocks and synchronize timelines.\"\nWhat is the stated purpose of the Monday syncs?",
    sourceSentence: "What is the stated purpose of the Monday syncs?",
    targetSentence: "To share roadblocks and synchronize team timelines.",
    options: [
      { id: "o1", text: "To share roadblocks and synchronize team timelines.", isCorrect: true },
      { id: "o2", text: "To replace all individual emails permanently.", isCorrect: false },
      { id: "o3", text: "To celebrate annual employee anniversaries.", isCorrect: false }
    ],
    correctAnswer: "To share roadblocks and synchronize team timelines.",
    explanation: "The memo explicitly notes: 'to share roadblocks and synchronize timelines.'"
  },
  {
    id: "a2_u09_l126_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "I'll take care of the client feedback while you finalize the slides.",
    targetSentence: "I'll take care of the client feedback while you finalize the slides.",
    explanation: "Check the phrasing of 'take care of' and 'finalize'."
  }
];

const l126_assess: Exercise[] = [
  {
    id: "a2_u09_l126_a06",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to express being delayed against the planned timetable:",
    sourceSentence: "Unfortunately, due to server outages, we are running ____ schedule by two days.",
    targetSentence: "Unfortunately, due to server outages, we are running behind schedule by two days.",
    options: [
      { id: "o1", text: "behind", isCorrect: true },
      { id: "o2", text: "after", isCorrect: false },
      { id: "o3", text: "under", isCorrect: false },
      { id: "o4", text: "below", isCorrect: false }
    ],
    correctAnswer: "behind",
    explanation: "The idiom is 'running behind schedule' (delayed)."
  },
  {
    id: "a2_u09_l126_a07",
    type: "speaking",
    prompt: "Read aloud fluently: 'I have delegated the research tasks so we can deliver the final report on time.'",
    sourceSentence: "I have delegated the research tasks so we can deliver the final report on time.",
    targetSentence: "I have delegated the research tasks so we can deliver the final report on time.",
    audioText: "I have delegated the research tasks so we can deliver the final report on time.",
    explanation: "Pronounce 'delegated' (/ˈdelɪɡeɪtɪd/) clearly."
  },
  {
    id: "a2_u09_l126_a08",
    type: "fill_blank",
    prompt: "Fill in the correct prepositions:",
    sourceSentence: "Can we count ____ your support to wrap ____ this project by Wednesday?",
    targetSentence: "Can we count on your support to wrap up this project by Wednesday?",
    options: [
      { id: "o1", text: "on / up", isCorrect: true },
      { id: "o2", text: "in / down", isCorrect: false },
      { id: "o3", text: "at / over", isCorrect: false },
      { id: "o4", text: "to / in", isCorrect: false }
    ],
    correctAnswer: "on / up",
    explanation: "Collocations: 'count on (rely upon)' and 'wrap up (finish completely)'."
  },
  {
    id: "a2_u09_l126_a09",
    type: "mediation",
    prompt: "A Spanish teammate writes: 'Por favor, infórmanos sobre el estado del proyecto antes de las cinco.' Translate this into polite business English:",
    sourceSentence: "Por favor, infórmanos sobre el estado del proyecto antes de las cinco.",
    targetSentence: "Please give us a status update on the project before five o'clock.",
    options: [
      { id: "o1", text: "Please give us a status update on the project before five o'clock.", isCorrect: true },
      { id: "o2", text: "You must project status five o'clock immediately.", isCorrect: false },
      { id: "o3", text: "Please are you having status five yesterday.", isCorrect: false }
    ],
    correctAnswer: "Please give us a status update on the project before five o'clock.",
    explanation: "Accurate translation using workplace register 'give us a status update'."
  },
  {
    id: "a2_u09_l126_a10",
    type: "word_ordering",
    prompt: "Form a natural sentence about project delivery:",
    sourceSentence: "Effective team communication helps us meet every tight deadline successfully.",
    targetSentence: "Effective team communication helps us meet every tight deadline successfully",
    wordBank: ["Effective", "team", "communication", "helps", "us", "meet", "every", "tight", "deadline", "successfully", "meeting", "did"]
  }
];

// =========================================================================
// LESSON 127: Travel Disruptions, Flight Delays & Lost Luggage Solutions
// =========================================================================
const l127_practice: Exercise[] = [
  {
    id: "a2_u09_l127_p16",
    type: "reading",
    prompt: "Read the airline counter dialogue:\n\"Passenger: Excuse me, my connecting flight to Frankfurt was canceled due to bad weather.\nAgent: I understand your frustration. We have rebooked you on the next flight at 6:30 PM and provided a meal voucher. Please present your baggage claim tag so we can transfer your luggage.\"\nWhat two things did the airline agent provide to the passenger?",
    sourceSentence: "What two things did the airline agent provide to the passenger?",
    targetSentence: "A rebooked flight ticket for 6:30 PM and a meal voucher.",
    options: [
      { id: "o1", text: "A rebooked flight ticket for 6:30 PM and a meal voucher.", isCorrect: true },
      { id: "o2", text: "A refund check and a hotel room for next week.", isCorrect: false },
      { id: "o3", text: "A brand new suitcase and a taxi ride.", isCorrect: false },
      { id: "o4", text: "Nothing; the passenger had to buy another ticket.", isCorrect: false }
    ],
    correctAnswer: "A rebooked flight ticket for 6:30 PM and a meal voucher.",
    explanation: "The agent explicitly says: 'We have rebooked you on the next flight at 6:30 PM and provided a meal voucher.'"
  },
  {
    id: "a2_u09_l127_p17",
    type: "speaking",
    prompt: "Practice explaining a missing bag at airport baggage services:\n'Excuse me, my checked bag hasn't arrived on the carousel. Here is my baggage claim receipt and flight number.'",
    sourceSentence: "Excuse me, my checked bag hasn't arrived on the carousel. Here is my baggage claim receipt and flight number.",
    targetSentence: "Excuse me, my checked bag hasn't arrived on the carousel. Here is my baggage claim receipt and flight number.",
    audioText: "Excuse me, my checked bag hasn't arrived on the carousel. Here is my baggage claim receipt and flight number.",
    explanation: "Polite opening + problem statement + essential documentation ('baggage claim receipt')."
  },
  {
    id: "a2_u09_l127_p18",
    type: "match_pairs",
    prompt: "Match the travel disruption terms with their descriptions:",
    options: [
      { id: "m1", text: "baggage claim tag" },
      { id: "m1_m", text: "receipt code used to track checked suitcases" },
      { id: "m2", text: "connecting flight" },
      { id: "m2_m", text: "a second flight taken to reach the final destination" },
      { id: "m3", text: "flight delay" },
      { id: "m3_m", text: "when an airplane departs later than scheduled" },
      { id: "m4", text: "compensation / voucher" },
      { id: "m4_m", text: "payment or coupon given for service disruption" }
    ]
  },
  {
    id: "a2_u09_l127_p19",
    type: "mediation",
    prompt: "Help an Indian traveler translate their concern at an international airport information desk: 'मेरी कनेक्टिंग फ्लाइट छूट गई है क्योंकि पहली फ्लाइट दो घंटे लेट थी। क्या मुझे दूसरा टिकट मिल सकता है?'",
    sourceSentence: "मेरी कनेक्टिंग फ्लाइट छूट गई है क्योंकि पहली फ्लाइट दो घंटे लेट थी। क्या मुझे दूसरा टिकट मिल सकता है?",
    targetSentence: "I missed my connecting flight because the first flight was delayed by two hours. Can I be rebooked on the next flight?",
    options: [
      { id: "o1", text: "I missed my connecting flight because the first flight was delayed by two hours. Can I be rebooked on the next flight?", isCorrect: true },
      { id: "o2", text: "My flight is leaving yesterday so give me ticket now.", isCorrect: false },
      { id: "o3", text: "I have missed flight tomorrow two hours late.", isCorrect: false }
    ],
    correctAnswer: "I missed my connecting flight because the first flight was delayed by two hours. Can I be rebooked on the next flight?",
    explanation: "Accurate, courteous translation for handling airport disruptions."
  },
  {
    id: "a2_u09_l127_p20",
    type: "error_correction",
    prompt: "Correct the vocabulary mistake in this airport complaint:",
    sourceSentence: "My luggage has been lose since yesterday afternoon.",
    targetSentence: "My luggage has been lost since yesterday afternoon.",
    options: [
      { id: "o1", text: "My luggage has been lost since yesterday afternoon.", isCorrect: true },
      { id: "o2", text: "My luggage has been loose since yesterday afternoon.", isCorrect: false },
      { id: "o3", text: "My luggage has lose since yesterday afternoon.", isCorrect: false }
    ],
    correctAnswer: "My luggage has been lost since yesterday afternoon.",
    explanation: "Passive past participle form of 'lose' is 'lost'."
  },
  {
    id: "a2_u09_l127_p21",
    type: "listening",
    prompt: "Listen to the gate announcement and select the reason for the gate change:",
    audioText: "Passengers on Flight BA 482 to London Heathrow: Please proceed to Gate 18 immediately due to an aircraft maintenance check at Gate 12.",
    targetSentence: "Gate 18 due to maintenance at the previous gate.",
    options: [
      { id: "o1", text: "Gate 18 due to maintenance at the previous gate.", isCorrect: true },
      { id: "o2", text: "The flight has returned to London.", isCorrect: false },
      { id: "o3", text: "Passengers must collect their luggage at Gate 12.", isCorrect: false }
    ],
    correctAnswer: "Gate 18 due to maintenance at the previous gate.",
    explanation: "The announcement directs passengers to Gate 18 due to maintenance at Gate 12."
  },
  {
    id: "a2_u09_l127_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Describe what you would say to an airline agent if your suitcase was missing.",
    targetSentence: "Excuse me, my black suitcase has not appeared on the luggage belt. Could you please help me file a missing baggage report?",
    audioText: "Excuse me, my black suitcase has not appeared on the luggage belt. Could you please help me file a missing baggage report?"
  }
];

const l127_review: Exercise[] = [
  {
    id: "a2_u09_l127_r06",
    type: "dialogue_completion",
    prompt: "Complete the conversation at the lost luggage desk:",
    sourceSentence: "Agent: Could you please describe your missing suitcase?\nPassenger: _____",
    targetSentence: "It's a medium-sized navy blue hard-shell suitcase with a yellow identification tag.",
    options: [
      { id: "o1", text: "It's a medium-sized navy blue hard-shell suitcase with a yellow identification tag.", isCorrect: true },
      { id: "o2", text: "I have eaten breakfast in the morning.", isCorrect: false },
      { id: "o3", text: "My flight departs in two weeks.", isCorrect: false },
      { id: "o4", text: "I used to be an airplane pilot.", isCorrect: false }
    ],
    correctAnswer: "It's a medium-sized navy blue hard-shell suitcase with a yellow identification tag.",
    explanation: "Provides precise visual description (size, color, material, identifying features)."
  },
  {
    id: "a2_u09_l127_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a polite inquiry about delayed flight compensation:",
    sourceSentence: "Am I entitled to compensation or meal vouchers for this four-hour delay?",
    targetSentence: "Am I entitled to compensation or meal vouchers for this four-hour delay",
    wordBank: ["Am", "I", "entitled", "to", "compensation", "or", "meal", "vouchers", "for", "this", "four-hour", "delay", "did", "are"]
  },
  {
    id: "a2_u09_l127_r08",
    type: "translation",
    prompt: "Translate into English: 'तकनीकी खराबी के कारण उड़ान तीन घंटे के लिए विलंबित है।'",
    sourceSentence: "तकनीकी खराबी के कारण उड़ान तीन घंटे के लिए विलंबित है।",
    targetSentence: "The flight is delayed for three hours due to a technical fault.",
    wordBank: ["The", "flight", "is", "delayed", "for", "three", "hours", "due", "to", "a", "technical", "fault.", "cancelled", "by"]
  },
  {
    id: "a2_u09_l127_r09",
    type: "reading",
    prompt: "Read the airline passenger rights statement:\n\"In the event of a cancellation within our control, passengers are entitled to rebooking at no extra charge, complimentary refreshments, and hotel accommodation if an overnight stay is required.\"\nWhen is hotel accommodation provided?",
    sourceSentence: "When is hotel accommodation provided?",
    targetSentence: "When the disruption requires passengers to stay overnight.",
    options: [
      { id: "o1", text: "When the disruption requires passengers to stay overnight.", isCorrect: true },
      { id: "o2", text: "Only if passengers purchase a VIP membership.", isCorrect: false },
      { id: "o3", text: "Whenever there is a thirty-minute delay.", isCorrect: false }
    ],
    correctAnswer: "When the disruption requires passengers to stay overnight.",
    explanation: "Text specifies: 'if an overnight stay is required'."
  },
  {
    id: "a2_u09_l127_r10",
    type: "listen_and_type",
    prompt: "Listen and type accurately:",
    audioText: "Please keep your baggage claim receipt until you verify your suitcase at your destination.",
    targetSentence: "Please keep your baggage claim receipt until you verify your suitcase at your destination.",
    explanation: "Pay attention to 'baggage claim receipt' and 'destination'."
  }
];

const l127_assess: Exercise[] = [
  {
    id: "a2_u09_l127_a06",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the sentence:\n'If your luggage doesn't arrive within 24 hours, you can ____ a formal claim online.'",
    sourceSentence: "If your luggage doesn't arrive within 24 hours, you can ____ a formal claim online.",
    targetSentence: "file",
    options: [
      { id: "o1", text: "file", isCorrect: true },
      { id: "o2", text: "build", isCorrect: false },
      { id: "o3", text: "order", isCorrect: false },
      { id: "o4", text: "pass", isCorrect: false }
    ],
    correctAnswer: "file",
    explanation: "Collocation: 'file a claim' (submit an official request/complaint)."
  },
  {
    id: "a2_u09_l127_a07",
    type: "speaking",
    prompt: "Speak clearly: 'Due to severe weather conditions, all departing flights have been temporarily grounded.'",
    sourceSentence: "Due to severe weather conditions, all departing flights have been temporarily grounded.",
    targetSentence: "Due to severe weather conditions, all departing flights have been temporarily grounded.",
    audioText: "Due to severe weather conditions, all departing flights have been temporarily grounded.",
    explanation: "Accurate pronunciation of 'temporarily' (/ˈtemprərəli/) and 'grounded'."
  },
  {
    id: "a2_u09_l127_a08",
    type: "fill_blank",
    prompt: "Fill in the correct forms:",
    sourceSentence: "Our flight was ____ (cancel), so the airline ____ (put) us up in a nearby airport hotel.",
    targetSentence: "Our flight was canceled, so the airline put us up in a nearby airport hotel.",
    options: [
      { id: "o1", text: "canceled / put", isCorrect: true },
      { id: "o2", text: "canceling / puts", isCorrect: false },
      { id: "o3", text: "canceled / putted", isCorrect: false },
      { id: "o4", text: "cancel / has put", isCorrect: false }
    ],
    correctAnswer: "canceled / put",
    explanation: "Past passive 'was canceled' + past simple of irregular verb 'put' (put)."
  },
  {
    id: "a2_u09_l127_a09",
    type: "mediation",
    prompt: "A Spanish traveler is distressed at the service desk: 'Mi maleta no ha salido en la cinta transportadora.' Help them communicate clearly in English:",
    sourceSentence: "Mi maleta no ha salido en la cinta transportadora.",
    targetSentence: "My suitcase hasn't appeared on the baggage carousel.",
    options: [
      { id: "o1", text: "My suitcase hasn't appeared on the baggage carousel.", isCorrect: true },
      { id: "o2", text: "My suitcase is leaving carousel yesterday.", isCorrect: false },
      { id: "o3", text: "I am taking my suitcase to airport tomorrow.", isCorrect: false }
    ],
    correctAnswer: "My suitcase hasn't appeared on the baggage carousel.",
    explanation: "Direct translation conveying the missing baggage situation."
  },
  {
    id: "a2_u09_l127_a10",
    type: "word_ordering",
    prompt: "Form a natural sentence about flight disruptions:",
    sourceSentence: "We missed our connecting flight because of heavy air traffic delays.",
    targetSentence: "We missed our connecting flight because of heavy air traffic delays",
    wordBank: ["We", "missed", "our", "connecting", "flight", "because", "of", "heavy", "air", "traffic", "delays", "missing", "did"]
  }
];

// =========================================================================
// LESSON 128: Housing, Renting, Landlords & Household Maintenance
// =========================================================================
const l128_practice: Exercise[] = [
  {
    id: "a2_u09_l128_p16",
    type: "reading",
    prompt: "Read the tenant's email to their landlord:\n\"Dear Mr. Henderson, I am writing to notify you that the kitchen sink pipe started leaking yesterday evening. Water is dripping slowly under the cabinet. Could you please send a licensed plumber to inspect and fix the leak as soon as possible?\"\nWhat issue is the tenant reporting?",
    sourceSentence: "What issue is the tenant reporting?",
    targetSentence: "A water leak under the kitchen sink cabinet.",
    options: [
      { id: "o1", text: "A water leak under the kitchen sink cabinet.", isCorrect: true },
      { id: "o2", text: "The rent payment was not received.", isCorrect: false },
      { id: "o3", text: "The heating system is too hot.", isCorrect: false },
      { id: "o4", text: "The tenant wants to move out tomorrow.", isCorrect: false }
    ],
    correctAnswer: "A water leak under the kitchen sink cabinet.",
    explanation: "Tenant clearly states: 'the kitchen sink pipe started leaking yesterday evening. Water is dripping slowly under the cabinet.'"
  },
  {
    id: "a2_u09_l128_p17",
    type: "speaking",
    prompt: "Practice contacting a property manager regarding household maintenance:\n'Hello, I am calling from apartment 3B. Our hot water heater has stopped working, and we have no hot water in the bathroom.'",
    sourceSentence: "Hello, I am calling from apartment 3B. Our hot water heater has stopped working, and we have no hot water in the bathroom.",
    targetSentence: "Hello, I am calling from apartment 3B. Our hot water heater has stopped working, and we have no hot water in the bathroom.",
    audioText: "Hello, I am calling from apartment 3B. Our hot water heater has stopped working, and we have no hot water in the bathroom.",
    explanation: "Clear location ('apartment 3B') and explicit problem statement."
  },
  {
    id: "a2_u09_l128_p18",
    type: "match_pairs",
    prompt: "Match housing and tenancy vocabulary with their meanings:",
    options: [
      { id: "m1", text: "security deposit" },
      { id: "m1_m", text: "refundable money held by landlord against damages" },
      { id: "m2", text: "lease agreement" },
      { id: "m2_m", text: "formal legal contract for renting a property" },
      { id: "m3", text: "utilities included" },
      { id: "m3_m", text: "rent price covers water, electricity, or gas" },
      { id: "m4", text: "landlord / landlady" },
      { id: "m4_m", text: "the property owner who rents out accommodation" }
    ]
  },
  {
    id: "a2_u09_l128_p19",
    type: "mediation",
    prompt: "Help your neighbor write a polite WhatsApp message to their landlord in English: 'नमस्ते, हमारे बेडरूम की खिड़की ठीक से बंद नहीं हो रही है। क्या आप इसे ठीक करवाने के लिए किसी को भेज सकते हैं?'",
    sourceSentence: "नमस्ते, हमारे बेडरूम की खिड़की ठीक से बंद नहीं हो रही है। क्या आप इसे ठीक करवाने के लिए किसी को भेज सकते हैं?",
    targetSentence: "Hello, our bedroom window won't close properly. Could you please send someone to repair it?",
    options: [
      { id: "o1", text: "Hello, our bedroom window won't close properly. Could you please send someone to repair it?", isCorrect: true },
      { id: "o2", text: "Window is broken and you must pay money now.", isCorrect: false },
      { id: "o3", text: "Bedroom window closing yesterday tomorrow please.", isCorrect: false }
    ],
    correctAnswer: "Hello, our bedroom window won't close properly. Could you please send someone to repair it?",
    explanation: "Polite maintenance request using modal 'Could you please send someone...?'."
  },
  {
    id: "a2_u09_l128_p20",
    type: "error_correction",
    prompt: "Correct the error in this tenancy agreement sentence:",
    sourceSentence: "The monthly rent is including water, but not electric.",
    targetSentence: "The monthly rent includes water, but not electricity.",
    options: [
      { id: "o1", text: "The monthly rent includes water, but not electricity.", isCorrect: true },
      { id: "o2", text: "The monthly rent is includes water, but not electric.", isCorrect: false },
      { id: "o3", text: "The monthly rent include water, but not electricity.", isCorrect: false }
    ],
    correctAnswer: "The monthly rent includes water, but not electricity.",
    explanation: "Simple present 'includes' (stative verb) + noun 'electricity'."
  },
  {
    id: "a2_u09_l128_p21",
    type: "listening",
    prompt: "Listen to the property agent and identify the terms of the deposit:",
    audioText: "Before moving in, tenants must pay one month's rent in advance along with a security deposit equivalent to six weeks of rent.",
    targetSentence: "One month's rent in advance plus a six-week security deposit.",
    options: [
      { id: "o1", text: "One month's rent in advance plus a six-week security deposit.", isCorrect: true },
      { id: "o2", text: "No deposit is required at all.", isCorrect: false },
      { id: "o3", text: "Six months of rent upfront in cash.", isCorrect: false }
    ],
    correctAnswer: "One month's rent in advance plus a six-week security deposit.",
    explanation: "The agent explicitly specifies: 'one month's rent in advance along with a security deposit equivalent to six weeks'."
  },
  {
    id: "a2_u09_l128_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Describe your apartment or house and mention whether utilities (electricity/water) are included in the rent.",
    targetSentence: "I rent a bright two-bedroom flat near the city center. The monthly rent includes water and high-speed internet, but electricity is separate.",
    audioText: "I rent a bright two-bedroom flat near the city center. The monthly rent includes water and high-speed internet, but electricity is separate."
  }
];

const l128_review: Exercise[] = [
  {
    id: "a2_u09_l128_r06",
    type: "dialogue_completion",
    prompt: "Complete the apartment viewing conversation:",
    sourceSentence: "Prospective Tenant: Are pets allowed in this building?\nLandlord: _____",
    targetSentence: "Yes, small pets are permitted, provided you pay an additional pet deposit.",
    options: [
      { id: "o1", text: "Yes, small pets are permitted, provided you pay an additional pet deposit.", isCorrect: true },
      { id: "o2", text: "I have eaten lunch an hour ago.", isCorrect: false },
      { id: "o3", text: "The flight was delayed yesterday.", isCorrect: false },
      { id: "o4", text: "We used to graduate from university.", isCorrect: false }
    ],
    correctAnswer: "Yes, small pets are permitted, provided you pay an additional pet deposit.",
    explanation: "Directly addresses pet policy with relevant tenancy terms."
  },
  {
    id: "a2_u09_l128_r07",
    type: "word_ordering",
    prompt: "Arrange into a formal sentence regarding lease termination:",
    sourceSentence: "Tenants must give at least thirty days of written notice before moving out.",
    targetSentence: "Tenants must give at least thirty days of written notice before moving out",
    wordBank: ["Tenants", "must", "give", "at", "least", "thirty", "days", "of", "written", "notice", "before", "moving", "out", "give", "are"]
  },
  {
    id: "a2_u09_l128_r08",
    type: "translation",
    prompt: "Translate into English: 'मकान मालिक ने अगले सप्ताह छत की मरम्मत कराने का वादा किया है।'",
    sourceSentence: "मकान मालिक ने अगले सप्ताह छत की मरम्मत कराने का वादा किया है।",
    targetSentence: "The landlord has promised to have the roof repaired next week.",
    wordBank: ["The", "landlord", "has", "promised", "to", "have", "the", "roof", "repaired", "next", "week.", "tenant", "did"]
  },
  {
    id: "a2_u09_l128_r09",
    type: "reading",
    prompt: "Read the residential handbook rule:\n\"Quiet hours are strictly enforced between 10:00 PM and 7:00 AM. Please keep noise levels minimal during these hours to respect your neighbors.\"\nWhat are the established quiet hours?",
    sourceSentence: "What are the established quiet hours?",
    targetSentence: "From 10:00 PM to 7:00 AM.",
    options: [
      { id: "o1", text: "From 10:00 PM to 7:00 AM.", isCorrect: true },
      { id: "o2", text: "All day on weekends only.", isCorrect: false },
      { id: "o3", text: "Between 2:00 PM and 4:00 PM.", isCorrect: false }
    ],
    correctAnswer: "From 10:00 PM to 7:00 AM.",
    explanation: "Text clearly specifies: 'between 10:00 PM and 7:00 AM'."
  },
  {
    id: "a2_u09_l128_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "We signed a twelve-month lease agreement and paid the security deposit yesterday.",
    targetSentence: "We signed a twelve-month lease agreement and paid the security deposit yesterday.",
    explanation: "Ensure correct spelling of 'twelve-month lease agreement' and 'security deposit'."
  }
];

const l128_assess: Exercise[] = [
  {
    id: "a2_u09_l128_a06",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the maintenance request:\n'The radiator in the master bedroom is making a strange banging noise and ____.'",
    sourceSentence: "The radiator in the master bedroom is making a strange banging noise and ____.",
    targetSentence: "isn't heating the room properly",
    options: [
      { id: "o1", text: "isn't heating the room properly", isCorrect: true },
      { id: "o2", text: "didn't heated yesterday", isCorrect: false },
      { id: "o3", text: "was not heat properly tomorrow", isCorrect: false },
      { id: "o4", text: "haven't heat room", isCorrect: false }
    ],
    correctAnswer: "isn't heating the room properly",
    explanation: "Present continuous describing current malfunction."
  },
  {
    id: "a2_u09_l128_a07",
    type: "speaking",
    prompt: "Read aloud clearly: 'Our lease agreement expires at the end of next month, and we intend to renew it for another year.'",
    sourceSentence: "Our lease agreement expires at the end of next month, and we intend to renew it for another year.",
    targetSentence: "Our lease agreement expires at the end of next month, and we intend to renew it for another year.",
    audioText: "Our lease agreement expires at the end of next month, and we intend to renew it for another year.",
    explanation: "Clear pronunciation of 'expires' (/ɪkˈspaɪəz/) and 'renew'."
  },
  {
    id: "a2_u09_l128_a08",
    type: "fill_blank",
    prompt: "Fill in the blanks with the correct words:",
    sourceSentence: "The landlord returned our full security ____ after inspecting the flat for any ____.",
    targetSentence: "The landlord returned our full security deposit after inspecting the flat for any damages.",
    options: [
      { id: "o1", text: "deposit / damages", isCorrect: true },
      { id: "o2", text: "rent / leaks", isCorrect: false },
      { id: "o3", text: "contract / tenants", isCorrect: false },
      { id: "o4", text: "bill / neighbors", isCorrect: false }
    ],
    correctAnswer: "deposit / damages",
    explanation: "Standard housing collocations: 'security deposit' and inspecting for 'damages'."
  },
  {
    id: "a2_u09_l128_a09",
    type: "mediation",
    prompt: "A Spanish tenant says: 'El grifo del baño gotea constantemente.' Translate this problem clearly for an English-speaking landlord:",
    sourceSentence: "El grifo del baño gotea constantemente.",
    targetSentence: "The bathroom tap is dripping constantly.",
    options: [
      { id: "o1", text: "The bathroom tap is dripping constantly.", isCorrect: true },
      { id: "o2", text: "The bathroom is clean constantly.", isCorrect: false },
      { id: "o3", text: "The tap was closed yesterday morning.", isCorrect: false }
    ],
    correctAnswer: "The bathroom tap is dripping constantly.",
    explanation: "Accurately translates 'grifo' (tap/faucet) and 'gotea constantemente' (dripping constantly)."
  },
  {
    id: "a2_u09_l128_a10",
    type: "word_ordering",
    prompt: "Form a grammatical sentence describing tenant rights:",
    sourceSentence: "Tenants have the legal right to a safe and well-maintained living environment.",
    targetSentence: "Tenants have the legal right to a safe and well-maintained living environment",
    wordBank: ["Tenants", "have", "the", "legal", "right", "to", "a", "safe", "and", "well-maintained", "living", "environment", "are", "having"]
  }
];

// =========================================================================
// LESSON 129: Giving Advice & Making Recommendations
// =========================================================================
const l129_practice: Exercise[] = [
  {
    id: "a2_u09_l129_p16",
    type: "reading",
    prompt: "Read the advisory article excerpt:\n\"If you are feeling exhausted from chronic workplace stress, you ought to establish firmer boundaries. Why don't you talk to your manager about adjusting your workload? You had better not ignore these symptoms before burnout sets in.\"\nWhat three advisory structures are used in this text?",
    sourceSentence: "What three advisory structures are used in this text?",
    targetSentence: "'ought to', 'Why don't you...?', and 'had better not'.",
    options: [
      { id: "o1", text: "'ought to', 'Why don't you...?', and 'had better not'.", isCorrect: true },
      { id: "o2", text: "Only past tense simple forms.", isCorrect: false },
      { id: "o3", text: "Direct imperative orders with no modals.", isCorrect: false },
      { id: "o4", text: "Future continuous predictions.", isCorrect: false }
    ],
    correctAnswer: "'ought to', 'Why don't you...?', and 'had better not'.",
    explanation: "The text combines moral/practical recommendation ('ought to'), friendly suggestion ('Why don't you'), and strong warning ('had better not')."
  },
  {
    id: "a2_u09_l129_p17",
    type: "speaking",
    prompt: "Practice giving friendly and persuasive advice:\n'If you want to boost your speaking fluency, why don't you join our daily conversation club? You should also listen to English podcasts regularly.'",
    sourceSentence: "If you want to boost your speaking fluency, why don't you join our daily conversation club? You should also listen to English podcasts regularly.",
    targetSentence: "If you want to boost your speaking fluency, why don't you join our daily conversation club? You should also listen to English podcasts regularly.",
    audioText: "If you want to boost your speaking fluency, why don't you join our daily conversation club? You should also listen to English podcasts regularly.",
    explanation: "Natural rhythm with 'why don't you + base verb' and 'should + base verb'."
  },
  {
    id: "a2_u09_l129_p18",
    type: "match_pairs",
    prompt: "Match the advice structures with their degree of strength:",
    options: [
      { id: "m1", text: "You had better (do it)" },
      { id: "m1_m", text: "strong advice with an implied warning of negative consequences" },
      { id: "m2", text: "You should / ought to" },
      { id: "m2_m", text: "standard general advice or sensible recommendation" },
      { id: "m3", text: "Why don't you...?" },
      { id: "m3_m", text: "gentle, friendly suggestion or idea" },
      { id: "m4", text: "If I were you, I would..." },
      { id: "m4_m", text: "empathetic advice imagining oneself in the other's situation" }
    ]
  },
  {
    id: "a2_u09_l129_p19",
    type: "mediation",
    prompt: "Your friend is feeling unwell and unsure whether to take time off. Translate and explain this advice from Hindi: 'अगर आपको तेज़ बुखार है, तो आपको घर पर आराम करना चाहिए और डॉक्टर से सलाह लेनी चाहिए।'",
    sourceSentence: "अगर आपको तेज़ बुखार है, तो आपको घर पर आराम करना चाहिए और डॉक्टर से सलाह लेनी चाहिए।",
    targetSentence: "If you have a high fever, you should rest at home and consult a doctor.",
    options: [
      { id: "o1", text: "If you have a high fever, you should rest at home and consult a doctor.", isCorrect: true },
      { id: "o2", text: "You must go to work if fever is high tomorrow.", isCorrect: false },
      { id: "o3", text: "If fever you are resting doctor yesterday.", isCorrect: false }
    ],
    correctAnswer: "If you have a high fever, you should rest at home and consult a doctor.",
    explanation: "Uses conditional advice 'If you have..., you should [verb]'."
  },
  {
    id: "a2_u09_l129_p20",
    type: "error_correction",
    prompt: "Correct the grammatical error in this strong advice sentence:",
    sourceSentence: "You had better to leave now if you want to catch the last train.",
    targetSentence: "You had better leave now if you want to catch the last train.",
    options: [
      { id: "o1", text: "You had better leave now if you want to catch the last train.", isCorrect: true },
      { id: "o2", text: "You had better to leaving now if you want to catch the last train.", isCorrect: false },
      { id: "o3", text: "You have better to leave now if you want to catch the last train.", isCorrect: false }
    ],
    correctAnswer: "You had better leave now if you want to catch the last train.",
    explanation: "'Had better' is followed by the bare infinitive (base verb without 'to': 'leave', not 'to leave')."
  },
  {
    id: "a2_u09_l129_p21",
    type: "listening",
    prompt: "Listen to the career advisor and identify the main recommendation:",
    audioText: "If I were in your position, I would definitely update my portfolio and start networking with industry peers before sending out cold applications.",
    targetSentence: "Update the portfolio and network before submitting applications.",
    options: [
      { id: "o1", text: "Update the portfolio and network before submitting applications.", isCorrect: true },
      { id: "o2", text: "Quit your job immediately without a plan.", isCorrect: false },
      { id: "o3", text: "Wait three years before learning new skills.", isCorrect: false }
    ],
    correctAnswer: "Update the portfolio and network before submitting applications.",
    explanation: "The advisor clearly states: 'update my portfolio and start networking with industry peers before sending out cold applications.'"
  },
  {
    id: "a2_u09_l129_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Give advice to someone visiting your home city for the first time using 'You should' and 'Why don't you'.",
    targetSentence: "You should visit the historic museum early in the morning to avoid the crowd. Why don't you also try the local street food near the river?",
    audioText: "You should visit the historic museum early in the morning to avoid the crowd. Why don't you also try the local street food near the river?"
  }
];

const l129_review: Exercise[] = [
  {
    id: "a2_u09_l129_r06",
    type: "dialogue_completion",
    prompt: "Complete the dialogue offering constructive advice:",
    sourceSentence: "A: I really struggle to remember new English vocabulary words.\nB: _____",
    targetSentence: "Why don't you use digital flashcards and review them for ten minutes every day?",
    options: [
      { id: "o1", text: "Why don't you use digital flashcards and review them for ten minutes every day?", isCorrect: true },
      { id: "o2", text: "I have forgotten my keys yesterday morning.", isCorrect: false },
      { id: "o3", text: "You was having a new car last year.", isCorrect: false },
      { id: "o4", text: "You must not remember words never.", isCorrect: false }
    ],
    correctAnswer: "Why don't you use digital flashcards and review them for ten minutes every day?",
    explanation: "Offers practical study suggestion using 'Why don't you + base verb'."
  },
  {
    id: "a2_u09_l129_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a piece of strong advice:",
    sourceSentence: "You had better back up your files before installing the update.",
    targetSentence: "You had better back up your files before installing the update",
    wordBank: ["You", "had", "better", "back", "up", "your", "files", "before", "installing", "the", "update", "to", "have"]
  },
  {
    id: "a2_u09_l129_r08",
    type: "translation",
    prompt: "Translate into English: 'अगर मैं तुम्हारी जगह होता, तो मैं उस प्रस्ताव को स्वीकार कर लेता।'",
    sourceSentence: "अगर मैं तुम्हारी जगह होता, तो मैं उस प्रस्ताव को स्वीकार कर लेता।",
    targetSentence: "If I were you, I would accept that offer.",
    wordBank: ["If", "I", "were", "you,", "I", "would", "accept", "that", "offer.", "am", "will"]
  },
  {
    id: "a2_u09_l129_r09",
    type: "reading",
    prompt: "Read the fitness trainer's tip:\n\"Beginners ought to focus on proper technique before increasing the weights. Rushing into heavy lifting often leads to unnecessary joint strain.\"\nWhat does the trainer advise beginners to prioritize?",
    sourceSentence: "What does the trainer advise beginners to prioritize?",
    targetSentence: "Proper technique and form before adding weight.",
    options: [
      { id: "o1", text: "Proper technique and form before adding weight.", isCorrect: true },
      { id: "o2", text: "Lifting as heavy as possible immediately.", isCorrect: false },
      { id: "o3", text: "Skipping all warm-up exercises.", isCorrect: false }
    ],
    correctAnswer: "Proper technique and form before adding weight.",
    explanation: "Text states: 'Beginners ought to focus on proper technique before increasing the weights.'"
  },
  {
    id: "a2_u09_l129_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "You ought to double-check the contract terms before signing.",
    targetSentence: "You ought to double-check the contract terms before signing.",
    explanation: "Check the spelling of 'ought to' (/ɔːt tuː/) and 'contract terms'."
  }
];

const l129_assess: Exercise[] = [
  {
    id: "a2_u09_l129_a06",
    type: "multiple_choice",
    prompt: "Which sentence conveys an urgent warning with potential negative consequences?",
    sourceSentence: "You had better submit the tax documents today, or you will face a penalty fine.",
    targetSentence: "You had better submit the tax documents today, or you will face a penalty fine.",
    options: [
      { id: "o1", text: "You had better submit the tax documents today, or you will face a penalty fine.", isCorrect: true },
      { id: "o2", text: "Why don't you submit tax documents if you feel like it?", isCorrect: false },
      { id: "o3", text: "You might consider submitting tax documents sometime.", isCorrect: false },
      { id: "o4", text: "You submitted tax documents yesterday morning.", isCorrect: false }
    ],
    correctAnswer: "You had better submit the tax documents today, or you will face a penalty fine.",
    explanation: "'Had better' expresses urgent advisory warning backed by consequence ('or you will face a penalty fine')."
  },
  {
    id: "a2_u09_l129_a07",
    type: "speaking",
    prompt: "Read aloud with friendly confidence: 'I strongly recommend trying this authentic local restaurant; the seafood is fantastic!'",
    sourceSentence: "I strongly recommend trying this authentic local restaurant; the seafood is fantastic!",
    targetSentence: "I strongly recommend trying this authentic local restaurant; the seafood is fantastic!",
    audioText: "I strongly recommend trying this authentic local restaurant; the seafood is fantastic!",
    explanation: "Notice the verb structure: 'recommend + gerund' (trying) and natural enthusiastic tone."
  },
  {
    id: "a2_u09_l129_a08",
    type: "fill_blank",
    prompt: "Complete the suggestion with the appropriate verb forms:",
    sourceSentence: "If you feel stressed, you ____ (should / take) a short walk and drink some water.",
    targetSentence: "If you feel stressed, you should take a short walk and drink some water.",
    options: [
      { id: "o1", text: "should take", isCorrect: true },
      { id: "o2", text: "should to take", isCorrect: false },
      { id: "o3", text: "ought take", isCorrect: false },
      { id: "o4", text: "had better to take", isCorrect: false }
    ],
    correctAnswer: "should take",
    explanation: "'Should' is a modal auxiliary followed by the bare infinitive ('take')."
  },
  {
    id: "a2_u09_l129_a09",
    type: "mediation",
    prompt: "A Spanish speaker asks for advice: '¿Qué me recomiendas hacer para mejorar mi pronunciación?' Provide a natural English response giving two recommendations:",
    sourceSentence: "¿Qué me recomiendas hacer para mejorar mi pronunciación?",
    targetSentence: "I recommend recording your voice while reading aloud and mimicking native audio podcasts.",
    options: [
      { id: "o1", text: "I recommend recording your voice while reading aloud and mimicking native audio podcasts.", isCorrect: true },
      { id: "o2", text: "You had better not speak English never.", isCorrect: false },
      { id: "o3", text: "Why don't you stop learning English yesterday?", isCorrect: false }
    ],
    correctAnswer: "I recommend recording your voice while reading aloud and mimicking native audio podcasts.",
    explanation: "Clear, helpful advisory response in natural English."
  },
  {
    id: "a2_u09_l129_a10",
    type: "word_ordering",
    prompt: "Form a natural sentence offering recommendation:",
    sourceSentence: "You ought to get a good night's sleep before your big presentation tomorrow.",
    targetSentence: "You ought to get a good night's sleep before your big presentation tomorrow",
    wordBank: ["You", "ought", "to", "get", "a", "good", "night's", "sleep", "before", "your", "big", "presentation", "tomorrow", "had", "should to"]
  }
];

// =========================================================================
// LESSON 130: Making Complaints & Seeking Solutions in Customer Service
// =========================================================================
const l130_practice: Exercise[] = [
  {
    id: "a2_u09_l130_p16",
    type: "reading",
    prompt: "Read the customer service dialogue:\n\"Customer: Good afternoon. I bought this wireless speaker two days ago, but the Bluetooth connection keeps dropping every few minutes.\nStore Assistant: I'm sorry to hear that. Do you have the purchase receipt with you? We can either exchange it for a new unit or process a full refund right away.\"\nWhat two solutions did the store assistant offer?",
    sourceSentence: "What two solutions did the store assistant offer?",
    targetSentence: "An immediate replacement exchange or a full refund.",
    options: [
      { id: "o1", text: "An immediate replacement exchange or a full refund.", isCorrect: true },
      { id: "o2", text: "Sending the item to another country for six months.", isCorrect: false },
      { id: "o3", text: "Charging an extra fee for repairs.", isCorrect: false },
      { id: "o4", text: "Refusing to help the customer.", isCorrect: false }
    ],
    correctAnswer: "An immediate replacement exchange or a full refund.",
    explanation: "Assistant explicitly says: 'We can either exchange it for a new unit or process a full refund right away.'"
  },
  {
    id: "a2_u09_l130_p17",
    type: "speaking",
    prompt: "Practice making a polite yet firm complaint in a store:\n'I am afraid there is a problem with my bill. I was charged twice for the same dessert.'",
    sourceSentence: "I am afraid there is a problem with my bill. I was charged twice for the same dessert.",
    targetSentence: "I am afraid there is a problem with my bill. I was charged twice for the same dessert.",
    audioText: "I am afraid there is a problem with my bill. I was charged twice for the same dessert.",
    explanation: "Polite softener 'I am afraid there is a problem with...' + factual description of error."
  },
  {
    id: "a2_u09_l130_p18",
    type: "match_pairs",
    prompt: "Match customer service complaint expressions with their purpose:",
    options: [
      { id: "m1", text: "I'm afraid there has been a misunderstanding." },
      { id: "m1_m", text: "polite opening to point out an error or billing discrepancy" },
      { id: "m2", text: "The item is faulty / defective." },
      { id: "m2_m", text: "explaining that a purchased product does not work properly" },
      { id: "m3", text: "Could I speak to the manager, please?" },
      { id: "m3_m", text: "escalating an unresolved issue to a supervisor" },
      { id: "m4", text: "I would like a full refund or an exchange." },
      { id: "m4_m", text: "clearly stating the desired resolution" }
    ]
  },
  {
    id: "a2_u09_l130_p19",
    type: "mediation",
    prompt: "A customer in Delhi wants to return a shirt with a torn seam. Translate their request into polite English for an international store manager: 'नमस्ते, मैंने कल यह शर्ट खरीदी थी लेकिन इसकी सिलाई खुली हुई है। क्या मुझे इसके बदले दूसरी शर्ट या रिफंड मिल सकता है?'",
    sourceSentence: "नमस्ते, मैंने कल यह शर्ट खरीदी थी लेकिन इसकी सिलाई खुली हुई है। क्या मुझे इसके बदले दूसरी शर्ट या रिफंड मिल सकता है?",
    targetSentence: "Hello, I bought this shirt yesterday but the seam is torn. Could I please exchange it or get a refund?",
    options: [
      { id: "o1", text: "Hello, I bought this shirt yesterday but the seam is torn. Could I please exchange it or get a refund?", isCorrect: true },
      { id: "o2", text: "Take shirt back and give money immediately right now.", isCorrect: false },
      { id: "o3", text: "I am buying shirt tomorrow with torn seam.", isCorrect: false }
    ],
    correctAnswer: "Hello, I bought this shirt yesterday but the seam is torn. Could I please exchange it or get a refund?",
    explanation: "Polite customer service register balancing the problem with clear solution options."
  },
  {
    id: "a2_u09_l130_p20",
    type: "error_correction",
    prompt: "Correct the phrasing in this formal complaint email:",
    sourceSentence: "I am writing for complain about the awful service I received.",
    targetSentence: "I am writing to complain about the poor service I received.",
    options: [
      { id: "o1", text: "I am writing to complain about the poor service I received.", isCorrect: true },
      { id: "o2", text: "I am writing for complain about the poor service I received.", isCorrect: false },
      { id: "o3", text: "I write for complaining about the poor service I received.", isCorrect: false }
    ],
    correctAnswer: "I am writing to complain about the poor service I received.",
    explanation: "Standard formal opening formula is 'I am writing to complain about...' (infinitive of purpose)."
  },
  {
    id: "a2_u09_l130_p21",
    type: "listening",
    prompt: "Listen to the customer support representative and identify the agreed remedy:",
    audioText: "We sincerely apologize for the shipping delay. We have upgraded your delivery to priority express free of charge and issued a twenty-dollar store credit.",
    targetSentence: "Free upgrade to priority shipping plus a $20 store credit.",
    options: [
      { id: "o1", text: "Free upgrade to priority shipping plus a $20 store credit.", isCorrect: true },
      { id: "o2", text: "The order has been permanently canceled.", isCorrect: false },
      { id: "o3", text: "The customer must pay double shipping fees.", isCorrect: false }
    ],
    correctAnswer: "Free upgrade to priority shipping plus a $20 store credit.",
    explanation: "Support specifies: 'upgraded your delivery to priority express free of charge and issued a twenty-dollar store credit.'"
  },
  {
    id: "a2_u09_l130_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Politely complain about receiving a cold meal at a restaurant and request a fresh replacement.",
    targetSentence: "Excuse me, I'm afraid my soup is completely cold. Could you please heat it up or bring me a fresh bowl?",
    audioText: "Excuse me, I'm afraid my soup is completely cold. Could you please heat it up or bring me a fresh bowl?"
  }
];

const l130_review: Exercise[] = [
  {
    id: "a2_u09_l130_r06",
    type: "dialogue_completion",
    prompt: "Complete the customer service interaction:",
    sourceSentence: "Customer: I ordered this book two weeks ago, but it still hasn't arrived.\nRepresentative: _____",
    targetSentence: "I apologize for the delay. Let me track your order number right now.",
    options: [
      { id: "o1", text: "I apologize for the delay. Let me track your order number right now.", isCorrect: true },
      { id: "o2", text: "You should have graduated from university earlier.", isCorrect: false },
      { id: "o3", text: "I was born in a small town.", isCorrect: false },
      { id: "o4", text: "The book will arrive yesterday morning.", isCorrect: false }
    ],
    correctAnswer: "I apologize for the delay. Let me track your order number right now.",
    explanation: "Empathetic customer service response offering immediate action."
  },
  {
    id: "a2_u09_l130_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a polite complaint:",
    sourceSentence: "I am afraid this dish does not match what I ordered.",
    targetSentence: "I am afraid this dish does not match what I ordered",
    wordBank: ["I", "am", "afraid", "this", "dish", "does", "not", "match", "what", "I", "ordered", "did", "was"]
  },
  {
    id: "a2_u09_l130_r08",
    type: "translation",
    prompt: "Translate into English: 'क्या मैं स्टोर मैनेजर से बात कर सकता हूँ?'",
    sourceSentence: "क्या मैं स्टोर मैनेजर से बात कर सकता हूँ?",
    targetSentence: "Could I speak to the store manager, please?",
    wordBank: ["Could", "I", "speak", "to", "the", "store", "manager,", "please?", "Can", "tell"]
  },
  {
    id: "a2_u09_l130_r09",
    type: "reading",
    prompt: "Read the store return policy:\n\"Items in original condition with a valid receipt can be returned for a full refund within 30 days of purchase. Sale items are eligible for store credit only.\"\nWhat can a customer get when returning a sale item?",
    sourceSentence: "What can a customer get when returning a sale item?",
    targetSentence: "Store credit only.",
    options: [
      { id: "o1", text: "Store credit only.", isCorrect: true },
      { id: "o2", text: "A full cash refund.", isCorrect: false },
      { id: "o3", text: "Free gifts for a year.", isCorrect: false }
    ],
    correctAnswer: "Store credit only.",
    explanation: "Text specifies: 'Sale items are eligible for store credit only.'"
  },
  {
    id: "a2_u09_l130_r10",
    type: "listen_and_type",
    prompt: "Listen and write down the sentence exactly:",
    audioText: "I would appreciate it if you could resolve this billing issue promptly.",
    targetSentence: "I would appreciate it if you could resolve this billing issue promptly.",
    explanation: "Check the formal formula 'I would appreciate it if you could...' and the adverb 'promptly'."
  }
];

const l130_assess: Exercise[] = [
  {
    id: "a2_u09_l130_a06",
    type: "multiple_choice",
    prompt: "Choose the most polite and professional way to state that an item was delivered broken:",
    sourceSentence: "I received the package today, but unfortunately, the ceramic vase inside is damaged.",
    targetSentence: "I received the package today, but unfortunately, the ceramic vase inside is damaged.",
    options: [
      { id: "o1", text: "I received the package today, but unfortunately, the ceramic vase inside is damaged.", isCorrect: true },
      { id: "o2", text: "You broke my vase give me money right now!", isCorrect: false },
      { id: "o3", text: "The vase is broke yesterday tomorrow.", isCorrect: false },
      { id: "o4", text: "Why your delivery people destroy everything always?", isCorrect: false }
    ],
    correctAnswer: "I received the package today, but unfortunately, the ceramic vase inside is damaged.",
    explanation: "Uses polite framing ('unfortunately') and factual description ('the ceramic vase inside is damaged')."
  },
  {
    id: "a2_u09_l130_a07",
    type: "speaking",
    prompt: "Read aloud clearly: 'We apologize for the inconvenience caused and will process your replacement immediately.'",
    sourceSentence: "We apologize for the inconvenience caused and will process your replacement immediately.",
    targetSentence: "We apologize for the inconvenience caused and will process your replacement immediately.",
    audioText: "We apologize for the inconvenience caused and will process your replacement immediately.",
    explanation: "Pronounce 'inconvenience' (/ˌɪnkənˈviːniəns/) and 'immediately' (/ɪˈmiːdiətli/) smoothly."
  },
  {
    id: "a2_u09_l130_a08",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate prepositions:",
    sourceSentence: "I would like to complain ____ the poor quality ____ the product I received.",
    targetSentence: "I would like to complain about the poor quality of the product I received.",
    options: [
      { id: "o1", text: "about / of", isCorrect: true },
      { id: "o2", text: "for / on", isCorrect: false },
      { id: "o3", text: "to / with", isCorrect: false },
      { id: "o4", text: "on / for", isCorrect: false }
    ],
    correctAnswer: "about / of",
    explanation: "Collocations: 'complain about [something]' and 'quality of [something]'."
  },
  {
    id: "a2_u09_l130_a09",
    type: "mediation",
    prompt: "A Spanish tourist says: 'El aire acondicionado de mi habitación no funciona y hace mucho calor.' Translate this complaint politely to the hotel receptionist:",
    sourceSentence: "El aire acondicionado de mi habitación no funciona y hace mucho calor.",
    targetSentence: "The air conditioning in my room isn't working, and the room is very hot. Could someone look at it?",
    options: [
      { id: "o1", text: "The air conditioning in my room isn't working, and the room is very hot. Could someone look at it?", isCorrect: true },
      { id: "o2", text: "Room air condition is hot yesterday.", isCorrect: false },
      { id: "o3", text: "I want to freeze my room tomorrow please.", isCorrect: false }
    ],
    correctAnswer: "The air conditioning in my room isn't working, and the room is very hot. Could someone look at it?",
    explanation: "Accurate problem report and polite request for assistance."
  },
  {
    id: "a2_u09_l130_a10",
    type: "word_ordering",
    prompt: "Form a coherent customer service resolution sentence:",
    sourceSentence: "We are committed to ensuring that every customer issue is handled with care.",
    targetSentence: "We are committed to ensuring that every customer issue is handled with care",
    wordBank: ["We", "are", "committed", "to", "ensuring", "that", "every", "customer", "issue", "is", "handled", "with", "care", "handling", "did"]
  }
];

// Execute enrichment for Lessons 126–130
enrichUnit9LessonData('lesson_a2_9_126', LESSON_A2_9_126_DATA, l126_practice, l126_review, l126_assess);
enrichUnit9LessonData('lesson_a2_9_127', LESSON_A2_9_127_DATA, l127_practice, l127_review, l127_assess);
enrichUnit9LessonData('lesson_a2_9_128', LESSON_A2_9_128_DATA, l128_practice, l128_review, l128_assess);
enrichUnit9LessonData('lesson_a2_9_129', LESSON_A2_9_129_DATA, l129_practice, l129_review, l129_assess);
enrichUnit9LessonData('lesson_a2_9_130', LESSON_A2_9_130_DATA, l130_practice, l130_review, l130_assess);
