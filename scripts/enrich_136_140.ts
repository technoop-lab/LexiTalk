import { Exercise } from '../src/types';
import { LESSON_A2_10_136_DATA } from '../src/data/lessons/lesson_a2_10_136';
import { LESSON_A2_10_137_DATA } from '../src/data/lessons/lesson_a2_10_137';
import { LESSON_A2_10_138_DATA } from '../src/data/lessons/lesson_a2_10_138';
import { LESSON_A2_10_139_DATA } from '../src/data/lessons/lesson_a2_10_139';
import { LESSON_A2_10_140_DATA } from '../src/data/lessons/lesson_a2_10_140';
import { enrichUnit10LessonData } from './enrich_unit10_helper';

// =========================================================================
// LESSON 136: Work Responsibilities, Team Roles & Daily Tasks
// =========================================================================
const l136_practice: Exercise[] = [
  {
    id: "a2_u10_l136_p11",
    type: "reading",
    prompt: "Read the workplace memo and answer the question:\n\"From: Operations Team\nTo: All Department Staff\nSubject: Updated Weekly Shift Protocol\nStarting this Monday, team leads are responsible for submitting shift schedules by 4 PM on Thursday. Staff members do not have to fill out paper timesheets anymore because the new biometric portal tracks hours automatically. However, anyone requiring scheduled leave must request approval at least two weeks in advance.\"\nWhat change is introduced regarding timesheets?",
    sourceSentence: "What change is introduced regarding timesheets?",
    targetSentence: "Employees no longer need to complete paper timesheets.",
    options: [
      { id: "o1", text: "Employees no longer need to complete paper timesheets.", isCorrect: true },
      { id: "o2", text: "Employees must submit paper timesheets daily at 4 PM.", isCorrect: false },
      { id: "o3", text: "Team leads must approve leave within two hours.", isCorrect: false },
      { id: "o4", text: "Staff members have to work overtime every Thursday.", isCorrect: false }
    ],
    correctAnswer: "Employees no longer need to complete paper timesheets.",
    explanation: "The memo explicitly notes: 'Staff members do not have to fill out paper timesheets anymore because the new biometric portal tracks hours automatically.'"
  },
  {
    id: "a2_u10_l136_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Describe your team duties and who handles client communications.",
    sourceSentence: "I am in charge of coordinating product testing, while my colleague handles direct client communications.",
    targetSentence: "I am in charge of coordinating product testing, while my colleague handles direct client communications.",
    audioText: "I am in charge of coordinating product testing, while my colleague handles direct client communications.",
    explanation: "Emphasize clear intonation and natural stress on 'coordinating' and 'handles'."
  },
  {
    id: "a2_u10_l136_p13",
    type: "match_pairs",
    prompt: "Match the workplace responsibility phrases with their correct definitions:",
    options: [
      { id: "m1", text: "oversee a project" },
      { id: "m1_m", text: "supervise and monitor ongoing work" },
      { id: "m2", text: "delegate duties" },
      { id: "m2_m", text: "assign tasks to qualified team members" },
      { id: "m3", text: "meet a strict deadline" },
      { id: "m3_m", text: "finish work before the agreed time limit" },
      { id: "m4", text: "prioritize urgent tickets" },
      { id: "m4_m", text: "resolve critical customer issues first" }
    ]
  },
  {
    id: "a2_u10_l136_p14",
    type: "mediation",
    prompt: "Your new teammate asks you to clarify the manager's Hindi message: 'आपको आज रात देर तक रुकने की ज़रूरत नहीं है, लेकिन कल सुबह की बैठक अनिवार्य है।' How do you explain this in clear English?",
    sourceSentence: "आपको आज रात देर तक रुकने की ज़रूरत नहीं है, लेकिन कल सुबह की बैठक अनिवार्य है।",
    targetSentence: "You don't have to stay late tonight, but tomorrow morning's meeting is mandatory.",
    options: [
      { id: "o1", text: "You don't have to stay late tonight, but tomorrow morning's meeting is mandatory.", isCorrect: true },
      { id: "o2", text: "You must not stay late tonight and tomorrow meeting is optional.", isCorrect: false },
      { id: "o3", text: "You have to stay late tonight because meeting cancelled.", isCorrect: false }
    ],
    correctAnswer: "You don't have to stay late tonight, but tomorrow morning's meeting is mandatory.",
    explanation: "'don't have to' captures lack of obligation, while 'mandatory / must attend' reflects अनिवार्यता."
  },
  {
    id: "a2_u10_l136_p15",
    type: "error_correction",
    prompt: "Identify and fix the grammatical error in this task assignment:",
    sourceSentence: "Our manager said we must to finish the audit before Friday afternoon.",
    targetSentence: "Our manager said we must finish the audit before Friday afternoon.",
    options: [
      { id: "o1", text: "Our manager said we must finish the audit before Friday afternoon.", isCorrect: true },
      { id: "o2", text: "Our manager said we must to finishing the audit before Friday afternoon.", isCorrect: false },
      { id: "o3", text: "Our manager said we must finished the audit before Friday afternoon.", isCorrect: false }
    ],
    correctAnswer: "Our manager said we must finish the audit before Friday afternoon.",
    explanation: "The modal verb 'must' is followed directly by the bare infinitive ('finish'), never 'to finish'."
  },
  {
    id: "a2_u10_l136_p16",
    type: "listening",
    prompt: "Listen to the team lead assigning roles and identify who is responsible for the financial forecast:",
    audioText: "Marcus, you'll be in charge of the system migration, and Priya has to prepare the quarterly financial forecast by Wednesday noon.",
    targetSentence: "Priya is responsible for the quarterly financial forecast.",
    options: [
      { id: "o1", text: "Priya is responsible for the quarterly financial forecast.", isCorrect: true },
      { id: "o2", text: "Marcus is preparing the financial forecast.", isCorrect: false },
      { id: "o3", text: "Both Marcus and Priya are leading the system migration.", isCorrect: false }
    ],
    correctAnswer: "Priya is responsible for the quarterly financial forecast.",
    explanation: "The speaker states: 'Priya has to prepare the quarterly financial forecast by Wednesday noon.'"
  },
  {
    id: "a2_u10_l136_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing one daily requirement at your workplace or school and one optional task:",
    targetSentence: "I have to attend the morning standup meeting at nine o'clock every day. However, I don't have to submit daily status reports unless there is a blocker.",
    audioText: "I have to attend the morning standup meeting at nine o'clock every day. However, I don't have to submit daily status reports unless there is a blocker."
  },
  {
    id: "a2_u10_l136_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the sentence:\n\"As the lead supervisor, David _____ all safety audits across the facility.\"",
    options: [
      { id: "o1", text: "is in charge of overseeing", isCorrect: true },
      { id: "o2", text: "is in charge to oversee", isCorrect: false },
      { id: "o3", text: "have to oversee", isCorrect: false },
      { id: "o4", text: "responsible to oversee", isCorrect: false }
    ],
    correctAnswer: "is in charge of overseeing",
    explanation: "'In charge of' takes a gerund (-ing form)."
  },
  {
    id: "a2_u10_l136_p19",
    type: "fill_blank",
    prompt: "You _____ (not / need / worry) about the catering; our event coordinator has already handled it.",
    correctAnswer: "don't need to worry",
    explanation: "Use 'don't need to + base verb' to express absence of necessity."
  },
  {
    id: "a2_u10_l136_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite workplace delegation:",
    tokens: ["Could", "you", "please", "assist", "me", "with", "the", "client", "presentation?"],
    correctAnswer: "Could you please assist me with the client presentation?",
    explanation: "Standard polite request: 'Could you please assist me with...'."
  },
  {
    id: "a2_u10_l136_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange with the most natural response:\nColleague: \"Do we need to get executive approval before confirming this order?\"\nSupervisor: \"_____\"",
    options: [
      { id: "o1", text: "Yes, every purchase over five hundred dollars must be signed off by the director.", isCorrect: true },
      { id: "o2", text: "No, you must not purchase anything ever.", isCorrect: false },
      { id: "o3", text: "Yes, we don't have to check any orders.", isCorrect: false },
      { id: "o4", text: "I have to delegate you yesterday.", isCorrect: false }
    ],
    correctAnswer: "Yes, every purchase over five hundred dollars must be signed off by the director.",
    explanation: "Provides clear clarification of company obligation and policy."
  },
  {
    id: "a2_u10_l136_p22",
    type: "translation",
    prompt: "Translate into English: 'हमारा पर्यवेक्षक सभी नए कर्मचारियों के प्रशिक्षण की देखरेख करता है।'",
    correctAnswer: "Our supervisor oversees the training of all new employees.",
    acceptableAnswers: [
      "Our supervisor oversees the training of all new staff.",
      "Our supervisor is in charge of training all new employees."
    ],
    explanation: "'Oversees the training' accurately conveys 'प्रशिक्षण की देखरेख करता है'."
  }
];

const l136_review: Exercise[] = [
  {
    id: "a2_u10_l136_r09",
    type: "multiple_choice",
    prompt: "Which modal verb construction correctly indicates that an action is strictly prohibited by workplace regulations?",
    options: [
      { id: "o1", text: "Employees must not share confidential login credentials with anyone.", isCorrect: true },
      { id: "o2", text: "Employees don't have to share confidential login credentials.", isCorrect: false },
      { id: "o3", text: "Employees needn't share confidential login credentials.", isCorrect: false },
      { id: "o4", text: "Employees are not having to share credentials.", isCorrect: false }
    ],
    correctAnswer: "Employees must not share confidential login credentials with anyone.",
    explanation: "'Must not' expresses prohibition (it is strictly forbidden), whereas 'don't have to' merely means not required."
  },
  {
    id: "a2_u10_l136_r10",
    type: "error_correction",
    prompt: "Find and fix the error in this team update:",
    sourceSentence: "Since it is a public holiday, we haven't to go to the office tomorrow.",
    targetSentence: "Since it is a public holiday, we don't have to go to the office tomorrow.",
    options: [
      { id: "o1", text: "Since it is a public holiday, we don't have to go to the office tomorrow.", isCorrect: true },
      { id: "o2", text: "Since it is a public holiday, we must not go to the office tomorrow.", isCorrect: false },
      { id: "o3", text: "Since it is a public holiday, we didn't have to go to the office tomorrow.", isCorrect: false }
    ],
    correctAnswer: "Since it is a public holiday, we don't have to go to the office tomorrow.",
    explanation: "In modern standard English, the negative of 'have to' in the present tense is 'don't have to', not 'haven't to'."
  }
];

const l136_assessment: Exercise[] = [
  {
    id: "a2_u10_l136_a08",
    type: "reading",
    prompt: "Read the job description excerpt:\n\"Role: Junior Project Coordinator\nKey Responsibilities:\n- Coordinate weekly sprint planning sessions.\n- Track deliverables against strict client deadlines.\n- Assist the Senior Operations Manager with quarterly budgets.\nNote: Experience with enterprise ERP software is preferred but not required.\"\nIs experience with ERP software mandatory for candidates?",
    sourceSentence: "Is experience with ERP software mandatory for candidates?",
    targetSentence: "No, it is preferred but optional.",
    options: [
      { id: "o1", text: "No, it is preferred but optional.", isCorrect: true },
      { id: "o2", text: "Yes, candidates must have five years of ERP experience.", isCorrect: false },
      { id: "o3", text: "Yes, it is the primary weekly duty.", isCorrect: false }
    ],
    correctAnswer: "No, it is preferred but optional.",
    explanation: "The note states 'preferred but not required', meaning it is not mandatory."
  },
  {
    id: "a2_u10_l136_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain two main responsibilities in your current role or studies.",
    sourceSentence: "My primary duty is managing team workflows, and I also have to ensure that all deliverables meet our quality standards.",
    targetSentence: "My primary duty is managing team workflows, and I also have to ensure that all deliverables meet our quality standards.",
    audioText: "My primary duty is managing team workflows, and I also have to ensure that all deliverables meet our quality standards.",
    explanation: "Demonstrates proficient use of 'primary duty is + gerund' and 'have to ensure'."
  },
  {
    id: "a2_u10_l136_a10",
    type: "mediation",
    prompt: "You are interpreting a supervisor's feedback for a colleague: 'आपको अपने काम की गति बढ़ानी होगी, अन्यथा हम शुक्रवार की समय-सीमा चूक जाएंगे।' Provide an accurate, polite English translation.",
    sourceSentence: "आपको अपने काम की गति बढ़ानी होगी, अन्यथा हम शुक्रवार की समय-सीमा चूक जाएंगे।",
    targetSentence: "You need to speed up your workflow, or we will miss the Friday deadline.",
    options: [
      { id: "o1", text: "You need to speed up your workflow, or we will miss the Friday deadline.", isCorrect: true },
      { id: "o2", text: "You don't have to work fast because deadline passed.", isCorrect: false },
      { id: "o3", text: "You must to slow down before Friday meeting.", isCorrect: false }
    ],
    correctAnswer: "You need to speed up your workflow, or we will miss the Friday deadline.",
    explanation: "'need to speed up your workflow' and 'miss the deadline' precisely translate the urgency."
  }
];

// =========================================================================
// LESSON 137: Workplace Problem-Solving & Dealing with Delays
// =========================================================================
const l137_practice: Exercise[] = [
  {
    id: "a2_u10_l137_p11",
    type: "reading",
    prompt: "Read the email update and answer the question:\n\"Hi Team,\nWe ran into an unexpected technical glitch with our payment server this morning, which caused a two-hour delay in order processing. We are currently implementing a temporary workaround to clear the backlog. We apologize for the inconvenience and will keep everyone posted on further developments.\"\nWhat caused the order processing delay?",
    sourceSentence: "What caused the order processing delay?",
    targetSentence: "An unexpected technical glitch with the payment server.",
    options: [
      { id: "o1", text: "An unexpected technical glitch with the payment server.", isCorrect: true },
      { id: "o2", text: "A planned team meeting that took two hours.", isCorrect: false },
      { id: "o3", text: "Staff members arriving late due to traffic.", isCorrect: false },
      { id: "o4", text: "Cancellation of all international orders.", isCorrect: false }
    ],
    correctAnswer: "An unexpected technical glitch with the payment server.",
    explanation: "The text states: 'We ran into an unexpected technical glitch with our payment server this morning...'"
  },
  {
    id: "a2_u10_l137_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Report a delay and propose a realistic solution.",
    sourceSentence: "We have encountered a minor delay with the shipment, but we are expediting delivery to meet tomorrow's deadline.",
    targetSentence: "We have encountered a minor delay with the shipment, but we are expediting delivery to meet tomorrow's deadline.",
    audioText: "We have encountered a minor delay with the shipment, but we are expediting delivery to meet tomorrow's deadline.",
    explanation: "Practice professional workplace cadence and vocabulary ('encountered', 'expediting')."
  },
  {
    id: "a2_u10_l137_p13",
    type: "match_pairs",
    prompt: "Match the problem-solving collocations with their definitions:",
    options: [
      { id: "m1", text: "fall behind schedule" },
      { id: "m1_m", text: "fail to maintain planned progress" },
      { id: "m2", text: "run into an issue" },
      { id: "m2_m", text: "encounter an unexpected problem" },
      { id: "m3", text: "implement a workaround" },
      { id: "m3_m", text: "use a temporary solution to bypass a fault" },
      { id: "m4", text: "clear the backlog" },
      { id: "m4_m", text: "finish accumulated unfinished tasks" }
    ]
  },
  {
    id: "a2_u10_l137_p14",
    type: "mediation",
    prompt: "Your vendor in India sends this message: 'सॉफ़्टवेयर में गड़बड़ी के कारण डिलीवरी में दो दिन की देरी होगी, हम अतिरिक्त शुल्क नहीं लेंगे।' How do you summarize this to your client in English?",
    sourceSentence: "सॉफ़्टवेयर में गड़बड़ी के कारण डिलीवरी में दो दिन की देरी होगी, हम अतिरिक्त शुल्क नहीं लेंगे।",
    targetSentence: "Due to a software glitch, delivery will be delayed by two days at no additional charge.",
    options: [
      { id: "o1", text: "Due to a software glitch, delivery will be delayed by two days at no additional charge.", isCorrect: true },
      { id: "o2", text: "Delivery is cancelled forever because of software fees.", isCorrect: false },
      { id: "o3", text: "We are charging double because software is working well.", isCorrect: false }
    ],
    correctAnswer: "Due to a software glitch, delivery will be delayed by two days at no additional charge.",
    explanation: "Accurately conveys 'सॉफ़्टवेयर में गड़बड़ी', 'दो दिन की देरी', and 'अतिरिक्त शुल्क नहीं'."
  },
  {
    id: "a2_u10_l137_p15",
    type: "error_correction",
    prompt: "Correct the error in this progress report:",
    sourceSentence: "We are fallen behind schedule because three team members were unwell.",
    targetSentence: "We have fallen behind schedule because three team members were unwell.",
    options: [
      { id: "o1", text: "We have fallen behind schedule because three team members were unwell.", isCorrect: true },
      { id: "o2", text: "We are fell behind schedule because three team members were unwell.", isCorrect: false },
      { id: "o3", text: "We have falling behind schedule because three team members were unwell.", isCorrect: false }
    ],
    correctAnswer: "We have fallen behind schedule because three team members were unwell.",
    explanation: "Present perfect is formed with 'have/has + past participle' ('have fallen'), not 'are fallen'."
  },
  {
    id: "a2_u10_l137_p16",
    type: "listening",
    prompt: "Listen to the project manager and identify the proposed action:",
    audioText: "Since the supplier couldn't deliver the raw materials on time, we are switching to an alternative local vendor to avoid further downtime.",
    targetSentence: "They are switching to a local vendor to avoid downtime.",
    options: [
      { id: "o1", text: "They are switching to a local vendor to avoid downtime.", isCorrect: true },
      { id: "o2", text: "They are closing down the production line permanently.", isCorrect: false },
      { id: "o3", text: "They are waiting another month for the original supplier.", isCorrect: false }
    ],
    correctAnswer: "They are switching to a local vendor to avoid downtime.",
    explanation: "The audio says: 'we are switching to an alternative local vendor to avoid further downtime.'"
  },
  {
    id: "a2_u10_l137_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing an unexpected problem you encountered recently and what you did to fix it:",
    targetSentence: "Last week, I ran into a system error while generating the monthly invoices. I contacted IT support immediately and resolved the issue within an hour.",
    audioText: "Last week, I ran into a system error while generating the monthly invoices. I contacted IT support immediately and resolved the issue within an hour."
  },
  {
    id: "a2_u10_l137_p18",
    type: "fill_blank",
    prompt: "Don't worry, our engineering team is _____ (deal with / currently) the network outage.",
    correctAnswer: "currently dealing with",
    explanation: "Present continuous 'is currently dealing with' describes an ongoing problem-solving action."
  },
  {
    id: "a2_u10_l137_p19",
    type: "multiple_choice",
    prompt: "Select the most appropriate workplace expression to apologize for a delay:\n\"We sincerely apologize for the delay and _____.\"",
    options: [
      { id: "o1", text: "appreciate your patience while we resolve the matter", isCorrect: true },
      { id: "o2", text: "don't care about your inconvenience", isCorrect: false },
      { id: "o3", text: "hope you can find another company immediately", isCorrect: false },
      { id: "o4", text: "are blaming our junior staff members", isCorrect: false }
    ],
    correctAnswer: "appreciate your patience while we resolve the matter",
    explanation: "Standard courteous customer service and professional business communication."
  },
  {
    id: "a2_u10_l137_p20",
    type: "word_ordering",
    prompt: "Arrange the words to describe an ongoing solution:",
    tokens: ["We", "are", "doing", "our", "best", "to", "resolve", "this", "bottleneck."],
    correctAnswer: "We are doing our best to resolve this bottleneck.",
    explanation: "'Doing our best to resolve...' is standard for reassuring stakeholders."
  },
  {
    id: "a2_u10_l137_p21",
    type: "dialogue_completion",
    prompt: "Choose the best completion for this client dialogue:\nClient: \"When can we expect the revised project blueprint?\"\nAccount Manager: \"_____\"",
    options: [
      { id: "o1", text: "Our architects are finalizing adjustments and will send it by five o'clock today.", isCorrect: true },
      { id: "o2", text: "We ran into no problems so we will never send it.", isCorrect: false },
      { id: "o3", text: "You must not look at blueprints.", isCorrect: false },
      { id: "o4", text: "We are fall behind yesterday.", isCorrect: false }
    ],
    correctAnswer: "Our architects are finalizing adjustments and will send it by five o'clock today.",
    explanation: "Provides clear, accountable timeframe."
  },
  {
    id: "a2_u10_l137_p22",
    type: "translation",
    prompt: "Translate into English: 'हम इस तकनीकी समस्या को जल्द से जल्द ठीक करने के लिए काम कर रहे हैं।'",
    correctAnswer: "We are working to fix this technical issue as soon as possible.",
    acceptableAnswers: [
      "We are working on resolving this technical problem as soon as possible.",
      "We are working to resolve this technical issue as soon as possible."
    ],
    explanation: "'Working to fix/resolve this technical issue as soon as possible' is natural and accurate."
  }
];

const l137_review: Exercise[] = [
  {
    id: "a2_u10_l137_r09",
    type: "multiple_choice",
    prompt: "Which sentence correctly contrasts a past obstacle with the current status?",
    options: [
      { id: "o1", text: "We encountered a server crash yesterday, but everything is running smoothly now.", isCorrect: true },
      { id: "o2", text: "We encounter a server crash yesterday, but everything ran smoothly now.", isCorrect: false },
      { id: "o3", text: "We have encountered yesterday crash and runs smoothly.", isCorrect: false },
      { id: "o4", text: "We were encounter crash yesterday but is smoothly.", isCorrect: false }
    ],
    correctAnswer: "We encountered a server crash yesterday, but everything is running smoothly now.",
    explanation: "Past Simple ('encountered') for finished past event + Present Continuous ('is running smoothly') for current state."
  },
  {
    id: "a2_u10_l137_r10",
    type: "error_correction",
    prompt: "Find and correct the error in this status email:",
    sourceSentence: "Please let me know if you runned into any difficulties during setup.",
    targetSentence: "Please let me know if you ran into any difficulties during setup.",
    options: [
      { id: "o1", text: "Please let me know if you ran into any difficulties during setup.", isCorrect: true },
      { id: "o2", text: "Please let me know if you running into any difficulties during setup.", isCorrect: false },
      { id: "o3", text: "Please let me know if you run into any difficulties during setup yesterday.", isCorrect: false }
    ],
    correctAnswer: "Please let me know if you ran into any difficulties during setup.",
    explanation: "The past tense of the irregular verb 'run' is 'ran', not 'runned'."
  }
];

const l137_assessment: Exercise[] = [
  {
    id: "a2_u10_l137_a08",
    type: "reading",
    prompt: "Read the incident report:\n\"At 09:15, the automated packaging line stopped due to a sensor malfunction. Technicians arrived at 09:30 and replaced the faulty component. Normal operations resumed at 10:00, resulting in a total downtime of 45 minutes.\"\nHow long was the packaging line shut down?",
    sourceSentence: "How long was the packaging line shut down?",
    targetSentence: "For a total of 45 minutes.",
    options: [
      { id: "o1", text: "For a total of 45 minutes.", isCorrect: true },
      { id: "o2", text: "For two hours and fifteen minutes.", isCorrect: false },
      { id: "o3", text: "For the entire working shift.", isCorrect: false }
    ],
    correctAnswer: "For a total of 45 minutes.",
    explanation: "09:15 to 10:00 is exactly 45 minutes, confirmed by 'resulting in a total downtime of 45 minutes'."
  },
  {
    id: "a2_u10_l137_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain a delay to a client and assure them of prompt delivery.",
    sourceSentence: "I apologize for the slight delay with your order. We had a logistics backlog, but your package is out for delivery today.",
    targetSentence: "I apologize for the slight delay with your order. We had a logistics backlog, but your package is out for delivery today.",
    audioText: "I apologize for the slight delay with your order. We had a logistics backlog, but your package is out for delivery today.",
    explanation: "Natural customer service tone and accurate phrasing."
  },
  {
    id: "a2_u10_l137_a10",
    type: "mediation",
    prompt: "Translate and summarize this customer query response into English: 'हम सर्वर की खराबी के कारण हुई असुविधा के लिए क्षमा चाहते हैं; सभी सेवाएँ अब पूरी तरह से बहाल कर दी गई हैं।'",
    sourceSentence: "हम सर्वर की खराबी के कारण हुई असुविधा के लिए क्षमा चाहते हैं; सभी सेवाएँ अब पूरी तरह से बहाल कर दी गई हैं।",
    targetSentence: "We apologize for the inconvenience caused by the server glitch; all services have now been fully restored.",
    options: [
      { id: "o1", text: "We apologize for the inconvenience caused by the server glitch; all services have now been fully restored.", isCorrect: true },
      { id: "o2", text: "Server is broken and all services are cancelled.", isCorrect: false },
      { id: "o3", text: "We will not fix the server glitch tomorrow.", isCorrect: false }
    ],
    correctAnswer: "We apologize for the inconvenience caused by the server glitch; all services have now been fully restored.",
    explanation: "Accurate translation of 'असुविधा के लिए क्षमा', 'सर्वर की खराबी', and 'पूरी तरह से बहाल'."
  }
];

// =========================================================================
// LESSON 138: Scheduling Meetings, Appointments & Resolving Conflicts
// =========================================================================
const l138_practice: Exercise[] = [
  {
    id: "a2_u10_l138_p11",
    type: "reading",
    prompt: "Read the scheduling correspondence:\n\"Hi Daniel,\nThank you for reaching out. Unfortunately, I have a conflicting appointment at 2 PM on Thursday. Would Friday morning at 10:30 AM suit you instead? If that works, I will send out a calendar invitation with the video conference link.\"\nWhy can't the speaker meet on Thursday at 2 PM?",
    sourceSentence: "Why can't the speaker meet on Thursday at 2 PM?",
    targetSentence: "They have a prior scheduling conflict at that time.",
    options: [
      { id: "o1", text: "They have a prior scheduling conflict at that time.", isCorrect: true },
      { id: "o2", text: "They are leaving the company permanently.", isCorrect: false },
      { id: "o3", text: "Their video conferencing software was uninstalled.", isCorrect: false },
      { id: "o4", text: "Thursday is an official company holiday.", isCorrect: false }
    ],
    correctAnswer: "They have a prior scheduling conflict at that time.",
    explanation: "The text states: 'Unfortunately, I have a conflicting appointment at 2 PM on Thursday.'"
  },
  {
    id: "a2_u10_l138_p12",
    type: "speaking",
    prompt: "Speak clearly and politely: Propose an alternative meeting time due to a clash.",
    sourceSentence: "I am tied up on Tuesday afternoon, but would Wednesday at eleven in the morning work for you?",
    targetSentence: "I am tied up on Tuesday afternoon, but would Wednesday at eleven in the morning work for you?",
    audioText: "I am tied up on Tuesday afternoon, but would Wednesday at eleven in the morning work for you?",
    explanation: "Use natural rising intonation on 'work for you?' and clear stress on days and times."
  },
  {
    id: "a2_u10_l138_p13",
    type: "match_pairs",
    prompt: "Match the meeting scheduling phrases with their meanings:",
    options: [
      { id: "m1", text: "pencil in a meeting" },
      { id: "m1_m", text: "set a tentative, provisional time" },
      { id: "m2", text: "have a schedule clash" },
      { id: "m2_m", text: "have two appointments booked at the same time" },
      { id: "m3", text: "push back a meeting" },
      { id: "m3_m", text: "delay or reschedule to a later hour or date" },
      { id: "m4", text: "bring forward a discussion" },
      { id: "m4_m", text: "move an appointment to an earlier time" }
    ]
  },
  {
    id: "a2_u10_l138_p14",
    type: "mediation",
    prompt: "A client writes in Hindi: 'क्या हम अपनी बैठक को शुक्रवार दोपहर 3 बजे तक के लिए टाल सकते हैं?' Translate and confirm this request in English.",
    sourceSentence: "क्या हम अपनी बैठक को शुक्रवार दोपहर 3 बजे तक के लिए टाल सकते हैं?",
    targetSentence: "Could we postpone our meeting to Friday at 3 PM?",
    options: [
      { id: "o1", text: "Could we postpone our meeting to Friday at 3 PM?", isCorrect: true },
      { id: "o2", text: "Can we cancel our meeting on Friday forever?", isCorrect: false },
      { id: "o3", text: "We must meet earlier on Friday morning 3 AM.", isCorrect: false }
    ],
    correctAnswer: "Could we postpone our meeting to Friday at 3 PM?",
    explanation: "'postpone / push back our meeting to Friday at 3 PM' correctly translates 'बैठक को शुक्रवार दोपहर 3 बजे तक के लिए टालना'."
  },
  {
    id: "a2_u10_l138_p15",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this calendar invitation:",
    sourceSentence: "Does Friday at two o'clock suits for you?",
    targetSentence: "Does Friday at two o'clock suit you?",
    options: [
      { id: "o1", text: "Does Friday at two o'clock suit you?", isCorrect: true },
      { id: "o2", text: "Does Friday at two o'clock suited you?", isCorrect: false },
      { id: "o3", text: "Do Friday at two o'clock suit for you?", isCorrect: false }
    ],
    correctAnswer: "Does Friday at two o'clock suit you?",
    explanation: "After auxiliary 'Does', the verb must be in bare infinitive form ('suit'), and 'suit' is transitive without 'for'."
  },
  {
    id: "a2_u10_l138_p16",
    type: "listening",
    prompt: "Listen to the voicemail and identify the agreed meeting slot:",
    audioText: "Hi Sophie, thanks for the message. Thursday is packed, but let's lock in Friday at three in the boardroom. See you then!",
    targetSentence: "Friday at 3:00 PM in the boardroom.",
    options: [
      { id: "o1", text: "Friday at 3:00 PM in the boardroom.", isCorrect: true },
      { id: "o2", text: "Thursday afternoon at 3:00 PM.", isCorrect: false },
      { id: "o3", text: "Friday morning at 9:00 AM online.", isCorrect: false }
    ],
    correctAnswer: "Friday at 3:00 PM in the boardroom.",
    explanation: "The speaker confirms: 'let's lock in Friday at three in the boardroom.'"
  },
  {
    id: "a2_u10_l138_p17",
    type: "personal_production",
    prompt: "Write 2 sentences requesting to reschedule a dentist or doctor appointment to next week:",
    targetSentence: "I am writing to inquire if I could reschedule my dental checkup to next Tuesday. Would ten in the morning be available?",
    audioText: "I am writing to inquire if I could reschedule my dental checkup to next Tuesday. Would ten in the morning be available?"
  },
  {
    id: "a2_u10_l138_p18",
    type: "fill_blank",
    prompt: "I am completely _____ (tie up) with interviews this morning, but I am free after lunch.",
    correctAnswer: "tied up",
    explanation: "The idiomatic collocation is 'be tied up' (busy / occupied with obligations)."
  },
  {
    id: "a2_u10_l138_p19",
    type: "multiple_choice",
    prompt: "Select the most polite way to ask about someone's availability:\n\"_____ next Monday morning for a brief status call?\"",
    options: [
      { id: "o1", text: "Would you happen to be free", isCorrect: true },
      { id: "o2", text: "You must come", isCorrect: false },
      { id: "o3", text: "Are you have time", isCorrect: false },
      { id: "o4", text: "Do you free", isCorrect: false }
    ],
    correctAnswer: "Would you happen to be free",
    explanation: "'Would you happen to be free...' is an extremely polite and natural formula."
  },
  {
    id: "a2_u10_l138_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite calendar request:",
    tokens: ["Please", "let", "me", "know", "which", "time", "slot", "suits", "you", "best."],
    correctAnswer: "Please let me know which time slot suits you best.",
    explanation: "Standard closing sentence in professional scheduling emails."
  },
  {
    id: "a2_u10_l138_p21",
    type: "dialogue_completion",
    prompt: "Complete the scheduling exchange:\nDoctor's Receptionist: \"We have an opening on Thursday at 4 PM or Friday at 9 AM.\"\nPatient: \"_____\"",
    options: [
      { id: "o1", text: "Friday at 9 AM works much better for me, thank you.", isCorrect: true },
      { id: "o2", text: "I have no teeth anymore.", isCorrect: false },
      { id: "o3", text: "I must not see the doctor ever.", isCorrect: false },
      { id: "o4", text: "Thursday at 4 PM is clashing with last year.", isCorrect: false }
    ],
    correctAnswer: "Friday at 9 AM works much better for me, thank you.",
    explanation: "Polite choice indicating personal preference clearly."
  },
  {
    id: "a2_u10_l138_p22",
    type: "translation",
    prompt: "Translate into English: 'क्या हम समय की पुष्टि के लिए कल सुबह बात कर सकते हैं?'",
    correctAnswer: "Can we talk tomorrow morning to confirm the time?",
    acceptableAnswers: [
      "Could we speak tomorrow morning to confirm the timing?",
      "Can we speak tomorrow morning to confirm the time?"
    ],
    explanation: "'speak/talk tomorrow morning to confirm the time' accurately translates the prompt."
  }
];

const l138_review: Exercise[] = [
  {
    id: "a2_u10_l138_r09",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to suggest postponing an event to a later date:\n\"Due to bad weather, the organizers decided to _____ until next month.\"",
    options: [
      { id: "o1", text: "push back the tournament", isCorrect: true },
      { id: "o2", text: "bring forward the tournament", isCorrect: false },
      { id: "o3", text: "pencil in the tournament yesterday", isCorrect: false },
      { id: "o4", text: "clash the tournament", isCorrect: false }
    ],
    correctAnswer: "push back the tournament",
    explanation: "'Push back' means to delay/postpone to a later time."
  },
  {
    id: "a2_u10_l138_r10",
    type: "error_correction",
    prompt: "Identify and fix the preposition error in this appointment booking:",
    sourceSentence: "I have booked an appointment on 3:30 PM in Friday.",
    targetSentence: "I have booked an appointment at 3:30 PM on Friday.",
    options: [
      { id: "o1", text: "I have booked an appointment at 3:30 PM on Friday.", isCorrect: true },
      { id: "o2", text: "I have booked an appointment in 3:30 PM at Friday.", isCorrect: false },
      { id: "o3", text: "I have booked an appointment on 3:30 PM on Friday.", isCorrect: false }
    ],
    correctAnswer: "I have booked an appointment at 3:30 PM on Friday.",
    explanation: "Use preposition 'at' for specific clock times ('at 3:30 PM') and 'on' for days of the week ('on Friday')."
  }
];

const l138_assessment: Exercise[] = [
  {
    id: "a2_u10_l138_a08",
    type: "reading",
    prompt: "Read the meeting minutes extract:\n\"The committee reviewed the project milestones. It was agreed that the interim presentation will be brought forward from December 15th to December 8th to allow adequate time for client feedback before the winter shutdown.\"\nWhen will the interim presentation now take place?",
    sourceSentence: "When will the interim presentation now take place?",
    targetSentence: "On December 8th.",
    options: [
      { id: "o1", text: "On December 8th.", isCorrect: true },
      { id: "o2", text: "On December 15th.", isCorrect: false },
      { id: "o3", text: "After the winter shutdown.", isCorrect: false }
    ],
    correctAnswer: "On December 8th.",
    explanation: "'brought forward from December 15th to December 8th' means moved to the earlier date."
  },
  {
    id: "a2_u10_l138_a09",
    type: "speaking",
    prompt: "Speak clearly: Suggest three possible time slots for an upcoming client review.",
    sourceSentence: "I am available on Monday at ten, Wednesday at two, or Friday morning at eleven if any of those suit your schedule.",
    targetSentence: "I am available on Monday at ten, Wednesday at two, or Friday morning at eleven if any of those suit your schedule.",
    audioText: "I am available on Monday at ten, Wednesday at two, or Friday morning at eleven if any of those suit your schedule.",
    explanation: "Demonstrates natural presentation of options using coordinating conjunctions."
  },
  {
    id: "a2_u10_l138_a10",
    type: "mediation",
    prompt: "Your director asks you to email a German client: 'कृपया उन्हें बताएं कि हमारी बैठक 30 मिनट की देरी से शुरू होगी क्योंकि पिछली बैठक लंबी खिंच गई।' Write the professional English notification.",
    sourceSentence: "कृपया उन्हें बताएं कि हमारी बैठक 30 मिनट की देरी से शुरू होगी क्योंकि पिछली बैठक लंबी खिंच गई।",
    targetSentence: "Please inform them that our meeting will start 30 minutes late as the previous session ran over time.",
    options: [
      { id: "o1", text: "Please inform them that our meeting will start 30 minutes late as the previous session ran over time.", isCorrect: true },
      { id: "o2", text: "Meeting is cancelled because of 30 hours delay.", isCorrect: false },
      { id: "o3", text: "Previous session was fast so we start 30 minutes earlier.", isCorrect: false }
    ],
    correctAnswer: "Please inform them that our meeting will start 30 minutes late as the previous session ran over time.",
    explanation: "'ran over time' is the natural English idiom for 'लंबी खिंच गई'."
  }
];

// =========================================================================
// LESSON 139: Travel Logistics, Booking Adjustments & Itinerary Changes
// =========================================================================
const l139_practice: Exercise[] = [
  {
    id: "a2_u10_l139_p11",
    type: "reading",
    prompt: "Read the airline travel advisory and answer the question:\n\"Due to severe crosswinds at London Heathrow, flight BA 178 has been diverted to Manchester. Passengers with connecting flights to Edinburgh will be accommodated on express coach transfers or rebooked on the next morning shuttle at no additional expense. Please proceed to the service desk in Terminal 2.\"\nWhat provision is made for passengers with connecting flights?",
    sourceSentence: "What provision is made for passengers with connecting flights?",
    targetSentence: "They will be provided express coach transfers or rebooked free of charge.",
    options: [
      { id: "o1", text: "They will be provided express coach transfers or rebooked free of charge.", isCorrect: true },
      { id: "o2", text: "They must purchase new first-class tickets immediately.", isCorrect: false },
      { id: "o3", text: "They must arrange their own private taxis to London.", isCorrect: false },
      { id: "o4", text: "Connecting flights have been cancelled without alternative options.", isCorrect: false }
    ],
    correctAnswer: "They will be provided express coach transfers or rebooked free of charge.",
    explanation: "The notice states: 'Passengers with connecting flights ... will be accommodated on express coach transfers or rebooked on the next morning shuttle at no additional expense.'"
  },
  {
    id: "a2_u10_l139_p12",
    type: "speaking",
    prompt: "Speak clearly and politely at an airline desk: Inquire about rebooking options after a missed connection.",
    sourceSentence: "My inbound flight was delayed, and I missed my connection. Could you please rebook me on the next available flight to Chicago?",
    targetSentence: "My inbound flight was delayed, and I missed my connection. Could you please rebook me on the next available flight to Chicago?",
    audioText: "My inbound flight was delayed, and I missed my connection. Could you please rebook me on the next available flight to Chicago?",
    explanation: "Focus on polite, assertive phrasing ('Could you please rebook me on...')."
  },
  {
    id: "a2_u10_l139_p13",
    type: "match_pairs",
    prompt: "Match the travel logistics collocations with their definitions:",
    options: [
      { id: "m1", text: "miss a connecting flight" },
      { id: "m1_m", text: "arrive too late to board the second leg of a journey" },
      { id: "m2", text: "request a full refund" },
      { id: "m2_m", text: "ask for all payment money to be returned" },
      { id: "m3", text: "extend a hotel reservation" },
      { id: "m3_m", text: "book additional nights beyond the original checkout date" },
      { id: "m4", text: "divert an aircraft" },
      { id: "m4_m", text: "change the landing destination due to weather or emergencies" }
    ]
  },
  {
    id: "a2_u10_l139_p14",
    type: "mediation",
    prompt: "A fellow traveler at the train station doesn't understand Hindi: 'हमारी ट्रेन 45 मिनट देरी से चल रही है, क्या हमें प्लेटफॉर्म 4 पर इंतजार करना चाहिए?' Explain this in clear English.",
    sourceSentence: "हमारी ट्रेन 45 मिनट देरी से चल रही है, क्या हमें प्लेटफॉर्म 4 पर इंतजार करना चाहिए?",
    targetSentence: "Our train is running 45 minutes late. Should we wait on platform 4?",
    options: [
      { id: "o1", text: "Our train is running 45 minutes late. Should we wait on platform 4?", isCorrect: true },
      { id: "o2", text: "The train arrived 45 hours ago on platform 4.", isCorrect: false },
      { id: "o3", text: "We must buy 45 tickets on platform 4.", isCorrect: false }
    ],
    correctAnswer: "Our train is running 45 minutes late. Should we wait on platform 4?",
    explanation: "'running 45 minutes late' and 'wait on platform 4' accurately communicate the situation."
  },
  {
    id: "a2_u10_l139_p15",
    type: "error_correction",
    prompt: "Find and fix the error in this hotel change request:",
    sourceSentence: "Could I please to extend my stay for two more nights?",
    targetSentence: "Could I please extend my stay for two more nights?",
    options: [
      { id: "o1", text: "Could I please extend my stay for two more nights?", isCorrect: true },
      { id: "o2", text: "Could I please extending my stay for two more nights?", isCorrect: false },
      { id: "o3", text: "Could I please to extending my stay for two more nights?", isCorrect: false }
    ],
    correctAnswer: "Could I please extend my stay for two more nights?",
    explanation: "Modal verb 'Could' is followed by bare infinitive 'extend', never 'to extend'."
  },
  {
    id: "a2_u10_l139_p16",
    type: "listening",
    prompt: "Listen to the airport announcement and determine the new gate number:",
    audioText: "Attention passengers on flight AF 442 to Paris: boarding has been moved from Gate 14 to Gate 28B due to an aircraft change.",
    targetSentence: "Gate 28B.",
    options: [
      { id: "o1", text: "Gate 28B.", isCorrect: true },
      { id: "o2", text: "Gate 14.", isCorrect: false },
      { id: "o3", text: "Gate 44.", isCorrect: false }
    ],
    correctAnswer: "Gate 28B.",
    explanation: "The announcement states: 'boarding has been moved from Gate 14 to Gate 28B'."
  },
  {
    id: "a2_u10_l139_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing an adjustment you had to make to your travel plans during a previous trip:",
    targetSentence: "When my evening train was cancelled, I had to stay at a nearby hostel overnight. The next morning, I caught the first express train to Vienna.",
    audioText: "When my evening train was cancelled, I had to stay at a nearby hostel overnight. The next morning, I caught the first express train to Vienna."
  },
  {
    id: "a2_u10_l139_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to ask for a change in travel dates:\n\"Is it possible to _____ my return flight without paying a penalty?\"",
    options: [
      { id: "o1", text: "modify the date of", isCorrect: true },
      { id: "o2", text: "modifying date for", isCorrect: false },
      { id: "o3", text: "cancel penalty with", isCorrect: false },
      { id: "o4", text: "delayed my flight on", isCorrect: false }
    ],
    correctAnswer: "modify the date of",
    explanation: "'Is it possible to + base verb' -> 'modify the date of'."
  },
  {
    id: "a2_u10_l139_p19",
    type: "fill_blank",
    prompt: "The airline provided us with meal _____ (voucher) while we waited for our delayed flight.",
    correctAnswer: "vouchers",
    explanation: "Plural noun 'meal vouchers' refers to coupons issued for dining during disruptions."
  },
  {
    id: "a2_u10_l139_p20",
    type: "word_ordering",
    prompt: "Arrange the words to make a polite inquiry about baggage:",
    tokens: ["Where", "can", "I", "file", "a", "claim", "for", "delayed", "luggage?"],
    correctAnswer: "Where can I file a claim for delayed luggage?",
    explanation: "Standard formula for lost or delayed baggage inquiries at the airport."
  },
  {
    id: "a2_u10_l139_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange at the hotel front desk:\nGuest: \"My flight doesn't leave until 8 PM. Is it possible to arrange a late check-out?\"\nReceptionist: \"_____\"",
    options: [
      { id: "o1", text: "Certainly! We can extend your check-out to 2 PM complimentary, and store your bags after that.", isCorrect: true },
      { id: "o2", text: "No, you must leave the country immediately at 8 AM.", isCorrect: false },
      { id: "o3", text: "We have cancelled your flight.", isCorrect: false },
      { id: "o4", text: "You don't have to stay in any room ever.", isCorrect: false }
    ],
    correctAnswer: "Certainly! We can extend your check-out to 2 PM complimentary, and store your bags after that.",
    explanation: "Standard helpful hospitality response."
  },
  {
    id: "a2_u10_l139_p22",
    type: "translation",
    prompt: "Translate into English: 'क्या मुझे टिकट रद्द करने पर पूरा रिफंड मिल सकता है?'",
    correctAnswer: "Can I get a full refund if I cancel the ticket?",
    acceptableAnswers: [
      "Could I get a full refund if I cancel the ticket?",
      "Can I receive a full refund upon cancelling the ticket?"
    ],
    explanation: "'Can I get a full refund if I cancel the ticket?' is clear and natural."
  }
];

const l139_review: Exercise[] = [
  {
    id: "a2_u10_l139_r09",
    type: "multiple_choice",
    prompt: "Which sentence correctly describes a condition under which rebooking fees are waived?",
    options: [
      { id: "o1", text: "If the airline cancels your flight, you do not have to pay any change fees.", isCorrect: true },
      { id: "o2", text: "If the airline cancel your flight, you must not pay fees.", isCorrect: false },
      { id: "o3", text: "If the airline is cancelling, you haven't pay change fees.", isCorrect: false },
      { id: "o4", text: "If airline will cancel, you didn't have to pay fees.", isCorrect: false }
    ],
    correctAnswer: "If the airline cancels your flight, you do not have to pay any change fees.",
    explanation: "First conditional with zero obligation: 'If + present simple, you do not have to + verb'."
  },
  {
    id: "a2_u10_l139_r10",
    type: "error_correction",
    prompt: "Identify and fix the word choice error in this travel inquiry:",
    sourceSentence: "We lost our flight because of heavy traffic on the motorway.",
    targetSentence: "We missed our flight because of heavy traffic on the motorway.",
    options: [
      { id: "o1", text: "We missed our flight because of heavy traffic on the motorway.", isCorrect: true },
      { id: "o2", text: "We lose our flight because of heavy traffic on the motorway.", isCorrect: false },
      { id: "o3", text: "We was lost our flight because of heavy traffic on the motorway.", isCorrect: false }
    ],
    correctAnswer: "We missed our flight because of heavy traffic on the motorway.",
    explanation: "In English, one 'misses' a train, flight, or bus (arriving too late), but 'loses' physical items like luggage or keys."
  }
];

const l139_assessment: Exercise[] = [
  {
    id: "a2_u10_l139_a08",
    type: "reading",
    prompt: "Read the railway compensation terms:\n\"Passengers whose trains are delayed by more than 60 minutes are entitled to a 50% refund of their single ticket fare. Delays exceeding 120 minutes qualify for a 100% full refund. Claims must be submitted online within 28 days of travel.\"\nWhat compensation is provided for a 90-minute train delay?",
    sourceSentence: "What compensation is provided for a 90-minute train delay?",
    targetSentence: "A 50% refund of the single ticket fare.",
    options: [
      { id: "o1", text: "A 50% refund of the single ticket fare.", isCorrect: true },
      { id: "o2", text: "A 100% full refund.", isCorrect: false },
      { id: "o3", text: "No compensation is allowed.", isCorrect: false }
    ],
    correctAnswer: "A 50% refund of the single ticket fare.",
    explanation: "90 minutes is more than 60 minutes but less than 120 minutes, qualifying for a 50% refund."
  },
  {
    id: "a2_u10_l139_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain to a hotel clerk that your travel plans changed and you need to leave one day early.",
    sourceSentence: "Good morning. Due to an urgent work commitment, I need to check out tomorrow instead of Thursday. Could you please update my invoice?",
    targetSentence: "Good morning. Due to an urgent work commitment, I need to check out tomorrow instead of Thursday. Could you please update my invoice?",
    audioText: "Good morning. Due to an urgent work commitment, I need to check out tomorrow instead of Thursday. Could you please update my invoice?",
    explanation: "Polite, structured explanation of early departure."
  },
  {
    id: "a2_u10_l139_a10",
    type: "mediation",
    prompt: "Translate this announcement for a non-Hindi speaking co-passenger: 'तकनीकी खराबी के कारण सभी यात्रियों को दूसरी बस में स्थानांतरित किया जा रहा है।'",
    sourceSentence: "तकनीकी खराबी के कारण सभी यात्रियों को दूसरी बस में स्थानांतरित किया जा रहा है।",
    targetSentence: "Due to a technical fault, all passengers are being transferred to another bus.",
    options: [
      { id: "o1", text: "Due to a technical fault, all passengers are being transferred to another bus.", isCorrect: true },
      { id: "o2", text: "Bus is driving faster because weather is nice.", isCorrect: false },
      { id: "o3", text: "All passengers must buy two new buses.", isCorrect: false }
    ],
    correctAnswer: "Due to a technical fault, all passengers are being transferred to another bus.",
    explanation: "'Due to a technical fault' and 'passengers are being transferred' accurately reflect the source message."
  }
];

// =========================================================================
// LESSON 140: Navigating City Services, Public Transport & Local Facilities
// =========================================================================
const l140_practice: Exercise[] = [
  {
    id: "a2_u10_l140_p11",
    type: "reading",
    prompt: "Read the city council guide:\n\"Welcome to the Central Public Library! Resident library cards are free upon proof of address (such as a utility bill or rental agreement). Cardholders can borrow up to ten books for three weeks, access digital audiobooks online, and book study rooms for two hours per day without charge.\"\nWhat document is required to get a free resident library card?",
    sourceSentence: "What document is required to get a free resident library card?",
    targetSentence: "Proof of address, such as a utility bill or rental agreement.",
    options: [
      { id: "o1", text: "Proof of address, such as a utility bill or rental agreement.", isCorrect: true },
      { id: "o2", text: "A passport with an international visa stamp.", isCorrect: false },
      { id: "o3", text: "A fee payment of fifty dollars in cash.", isCorrect: false },
      { id: "o4", text: "A university graduation certificate.", isCorrect: false }
    ],
    correctAnswer: "Proof of address, such as a utility bill or rental agreement.",
    explanation: "The text says: 'Resident library cards are free upon proof of address (such as a utility bill or rental agreement).'"
  },
  {
    id: "a2_u10_l140_p12",
    type: "speaking",
    prompt: "Speak clearly and politely: Ask for directions to the nearest subway station and where to buy a transit pass.",
    sourceSentence: "Excuse me, could you tell me how to get to the nearest metro station and where I can top up a travel card?",
    targetSentence: "Excuse me, could you tell me how to get to the nearest metro station and where I can top up a travel card?",
    audioText: "Excuse me, could you tell me how to get to the nearest metro station and where I can top up a travel card?",
    explanation: "Natural inquiry tone with polite phrasing ('Excuse me, could you tell me...')."
  },
  {
    id: "a2_u10_l140_p13",
    type: "match_pairs",
    prompt: "Match the public transport and municipal terms with their meanings:",
    options: [
      { id: "m1", text: "top up a transit pass" },
      { id: "m1_m", text: "add funds or credit to a travel card" },
      { id: "m2", text: "transfer between lines" },
      { id: "m2_m", text: "switch from one bus or train route to another" },
      { id: "m3", text: "council tax office" },
      { id: "m3_m", text: "local government department managing municipal fees" },
      { id: "m4", text: "pedestrian zone" },
      { id: "m4_m", text: "street area designated solely for people walking" }
    ]
  },
  {
    id: "a2_u10_l140_p14",
    type: "mediation",
    prompt: "A tourist in Delhi asks you to translate this Hindi notice on the metro platform: 'कृपया लाइन के पीछे खड़े रहें और पहले उतरने वाले यात्रियों को रास्ता दें।' Translate into standard English transit instructions.",
    sourceSentence: "कृपया लाइन के पीछे खड़े रहें और पहले उतरने वाले यात्रियों को रास्ता दें।",
    targetSentence: "Please stand behind the yellow line and let passengers alight first.",
    options: [
      { id: "o1", text: "Please stand behind the yellow line and let passengers alight first.", isCorrect: true },
      { id: "o2", text: "You must cross the line before train stops.", isCorrect: false },
      { id: "o3", text: "Do not let any passengers leave the train.", isCorrect: false }
    ],
    correctAnswer: "Please stand behind the yellow line and let passengers alight first.",
    explanation: "'stand behind the yellow line' and 'let passengers alight first' are authentic transit phrasing."
  },
  {
    id: "a2_u10_l140_p15",
    type: "error_correction",
    prompt: "Correct the preposition error in this navigation instruction:",
    sourceSentence: "Turn right at the traffic lights and go straight until you reach to the post office.",
    targetSentence: "Turn right at the traffic lights and go straight until you reach the post office.",
    options: [
      { id: "o1", text: "Turn right at the traffic lights and go straight until you reach the post office.", isCorrect: true },
      { id: "o2", text: "Turn right in the traffic lights and go straight until you reach to post office.", isCorrect: false },
      { id: "o3", text: "Turn right at the traffic lights and go straight until reach at post office.", isCorrect: false }
    ],
    correctAnswer: "Turn right at the traffic lights and go straight until you reach the post office.",
    explanation: "The verb 'reach' is transitive and takes a direct object without preposition 'to' ('reach the post office')."
  },
  {
    id: "a2_u10_l140_p16",
    type: "listening",
    prompt: "Listen to the bus driver and determine which stop is nearest the municipal council:",
    audioText: "For the City Hall and Municipal Council, get off at Market Square, which is the second stop after the cathedral.",
    targetSentence: "Market Square, two stops after the cathedral.",
    options: [
      { id: "o1", text: "Market Square, two stops after the cathedral.", isCorrect: true },
      { id: "o2", text: "Directly opposite the cathedral.", isCorrect: false },
      { id: "o3", text: "At the airport terminal.", isCorrect: false }
    ],
    correctAnswer: "Market Square, two stops after the cathedral.",
    explanation: "The driver specifies: 'get off at Market Square, which is the second stop after the cathedral.'"
  },
  {
    id: "a2_u10_l140_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you usually get around your town or city and whether public transport is convenient:",
    targetSentence: "I usually take the subway to work because it runs every five minutes during rush hour. It is much more convenient than driving in heavy traffic.",
    audioText: "I usually take the subway to work because it runs every five minutes during rush hour. It is much more convenient than driving in heavy traffic."
  },
  {
    id: "a2_u10_l140_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the sentence:\n\"You can buy a weekly travel card at the ticket counter or _____.\"",
    options: [
      { id: "o1", text: "via the mobile transit application", isCorrect: true },
      { id: "o2", text: "with jumping the barrier", isCorrect: false },
      { id: "o3", text: "by must to paying cash", isCorrect: false },
      { id: "o4", text: "from no tickets machine", isCorrect: false }
    ],
    correctAnswer: "via the mobile transit application",
    explanation: "'via the mobile transit application' is grammatically sound and natural."
  },
  {
    id: "a2_u10_l140_p19",
    type: "fill_blank",
    prompt: "Is the community sports center within _____ (walk) distance of the train station?",
    correctAnswer: "walking",
    explanation: "The standard collocation is 'within walking distance' (close enough to walk)."
  },
  {
    id: "a2_u10_l140_p20",
    type: "word_ordering",
    prompt: "Arrange the words to ask about bus schedules:",
    tokens: ["How", "often", "does", "the", "number", "twelve", "bus", "run?"],
    correctAnswer: "How often does the number twelve bus run?",
    explanation: "Standard inquiry for transport frequency: 'How often does the [route] run?'"
  },
  {
    id: "a2_u10_l140_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange at the post office:\nCustomer: \"I need to send this parcel to Canada by registered post. How much will it cost?\"\nPostal Worker: \"_____\"",
    options: [
      { id: "o1", text: "Let me weigh it for you. It comes to eighteen pounds fifty including tracking.", isCorrect: true },
      { id: "o2", text: "Canada has been cancelled today.", isCorrect: false },
      { id: "o3", text: "You don't have to post parcels ever.", isCorrect: false },
      { id: "o4", text: "I have weighed yesterday's letters.", isCorrect: false }
    ],
    correctAnswer: "Let me weigh it for you. It comes to eighteen pounds fifty including tracking.",
    explanation: "Realistic and courteous postal transaction."
  },
  {
    id: "a2_u10_l140_p22",
    type: "translation",
    prompt: "Translate into English: 'निकटतम डाकघर कहाँ है और यह किस समय बंद होता है?'",
    correctAnswer: "Where is the nearest post office and what time does it close?",
    acceptableAnswers: [
      "Where is the closest post office and at what time does it close?",
      "Where is the nearest post office and when does it close?"
    ],
    explanation: "'Where is the nearest post office and what time does it close?' is direct and accurate."
  }
];

const l140_review: Exercise[] = [
  {
    id: "a2_u10_l140_r09",
    type: "multiple_choice",
    prompt: "Which question is the most polite when asking a stranger for street directions in a new city?",
    options: [
      { id: "o1", text: "Excuse me, could you point me in the direction of the civic center?", isCorrect: true },
      { id: "o2", text: "Tell me civic center where now.", isCorrect: false },
      { id: "o3", text: "You must show me civic center.", isCorrect: false },
      { id: "o4", text: "Why is civic center here?", isCorrect: false }
    ],
    correctAnswer: "Excuse me, could you point me in the direction of the civic center?",
    explanation: "'Excuse me, could you point me in the direction of...' is a polished, polite inquiry formula."
  },
  {
    id: "a2_u10_l140_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this transport advice:",
    sourceSentence: "Take the blue line until end station and change to the tram.",
    targetSentence: "Take the blue line to the final stop and transfer to the tram.",
    options: [
      { id: "o1", text: "Take the blue line to the final stop and transfer to the tram.", isCorrect: true },
      { id: "o2", text: "Take the blue line until end and changing to tram.", isCorrect: false },
      { id: "o3", text: "Taking blue line until ends station.", isCorrect: false }
    ],
    correctAnswer: "Take the blue line to the final stop and transfer to the tram.",
    explanation: "'final stop / terminus' and 'transfer to' are the standard English transit expressions."
  }
];

const l140_assessment: Exercise[] = [
  {
    id: "a2_u10_l140_a08",
    type: "reading",
    prompt: "Read the waste collection schedule notice:\n\"Household recycling bins (blue lids) are collected on alternate Tuesdays. General waste (green bins) is collected every Friday morning. Bins must be placed on the curb by 7:00 AM on collection days.\"\nWhen should residents put out their general waste bins?",
    sourceSentence: "When should residents put out their general waste bins?",
    targetSentence: "Every Friday morning before 7:00 AM.",
    options: [
      { id: "o1", text: "Every Friday morning before 7:00 AM.", isCorrect: true },
      { id: "o2", text: "On alternate Tuesdays at noon.", isCorrect: false },
      { id: "o3", text: "Only on the first day of every month.", isCorrect: false }
    ],
    correctAnswer: "Every Friday morning before 7:00 AM.",
    explanation: "General waste (green) is collected Friday morning, placed on curb by 7:00 AM."
  },
  {
    id: "a2_u10_l140_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain how to travel from the airport to the city center using public transport.",
    sourceSentence: "You can take the airport express train directly to Central Station. It leaves every fifteen minutes and takes just twenty minutes.",
    targetSentence: "You can take the airport express train directly to Central Station. It leaves every fifteen minutes and takes just twenty minutes.",
    audioText: "You can take the airport express train directly to Central Station. It leaves every fifteen minutes and takes just twenty minutes.",
    explanation: "Natural rhythm and clear articulation of transport intervals."
  },
  {
    id: "a2_u10_l140_a10",
    type: "mediation",
    prompt: "Translate this advice for a newly arrived student in English: 'सार्वजनिक पुस्तकालय में मुफ्त वाई-फाई और शांत अध्ययन क्षेत्र उपलब्ध हैं, आपको बस एक वैध आईडी कार्ड दिखाना होगा।'",
    sourceSentence: "सार्वजनिक पुस्तकालय में मुफ्त वाई-फाई और शांत अध्ययन क्षेत्र उपलब्ध हैं, आपको बस एक वैध आईडी कार्ड दिखाना होगा।",
    targetSentence: "The public library offers free Wi-Fi and quiet study areas; you just need to show a valid ID card.",
    options: [
      { id: "o1", text: "The public library offers free Wi-Fi and quiet study areas; you just need to show a valid ID card.", isCorrect: true },
      { id: "o2", text: "Library is closed and no students allowed.", isCorrect: false },
      { id: "o3", text: "You must pay for Wi-Fi and buy study rooms.", isCorrect: false }
    ],
    correctAnswer: "The public library offers free Wi-Fi and quiet study areas; you just need to show a valid ID card.",
    explanation: "Accurately conveys 'मुफ्त वाई-फाई', 'शांत अध्ययन क्षेत्र', and 'वैध आईडी कार्ड'."
  }
];

// Execute enrichment for batch 136-140
export function runEnrichment136_140() {
  console.log('--- ENRICHING LESSONS 136-140 TO 42 EXERCISES ---');
  enrichUnit10LessonData('lesson_a2_10_136', LESSON_A2_10_136_DATA, l136_practice, l136_review, l136_assessment);
  enrichUnit10LessonData('lesson_a2_10_137', LESSON_A2_10_137_DATA, l137_practice, l137_review, l137_assessment);
  enrichUnit10LessonData('lesson_a2_10_138', LESSON_A2_10_138_DATA, l138_practice, l138_review, l138_assessment);
  enrichUnit10LessonData('lesson_a2_10_139', LESSON_A2_10_139_DATA, l139_practice, l139_review, l139_assessment);
  enrichUnit10LessonData('lesson_a2_10_140', LESSON_A2_10_140_DATA, l140_practice, l140_review, l140_assessment);
}

runEnrichment136_140();
