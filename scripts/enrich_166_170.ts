import { Exercise } from '../src/types';
import { LESSON_A2_12_166_DATA } from '../src/data/lessons/lesson_a2_12_166';
import { LESSON_A2_12_167_DATA } from '../src/data/lessons/lesson_a2_12_167';
import { LESSON_A2_12_168_DATA } from '../src/data/lessons/lesson_a2_12_168';
import { LESSON_A2_12_169_DATA } from '../src/data/lessons/lesson_a2_12_169';
import { LESSON_A2_12_170_DATA } from '../src/data/lessons/lesson_a2_12_170';
import { enrichUnit12LessonData } from './enrich_unit12_helper';

// =========================================================================
// LESSON 166: Project Updates, Status Reports & Explaining Milestones
// =========================================================================
const l166_practice: Exercise[] = [
  {
    id: "a2_u12_l166_p11",
    type: "reading",
    prompt: "Read the project status update and answer the question:\n\"Weekly Status Report: The development team has already completed 85% of the core modules. Yesterday at 3 PM, we deployed the payment gateway to the staging server. However, we haven't received the client's final security checklist yet. As of now, we are still on track to launch next Friday provided there are no new blockers.\"\nWhat specific milestone occurred yesterday at 3 PM?",
    sourceSentence: "What specific milestone occurred yesterday at 3 PM?",
    targetSentence: "The payment gateway was deployed to the staging server.",
    options: [
      { id: "o1", text: "The payment gateway was deployed to the staging server.", isCorrect: true },
      { id: "o2", text: "The client approved the final security checklist.", isCorrect: false },
      { id: "o3", text: "The team delayed the launch until next month.", isCorrect: false },
      { id: "o4", text: "The core modules were reduced to 50%.", isCorrect: false }
    ],
    correctAnswer: "The payment gateway was deployed to the staging server.",
    explanation: "The report states: 'Yesterday at 3 PM, we deployed the payment gateway to the staging server.'"
  },
  {
    id: "a2_u12_l166_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Give a quick 2-sentence project status report to your team lead.",
    sourceSentence: "We have already finished the user interface testing, but we haven't resolved the database connection issue yet. I will update the roadmap by this afternoon.",
    targetSentence: "We have already finished the user interface testing, but we haven't resolved the database connection issue yet. I will update the roadmap by this afternoon.",
    audioText: "We have already finished the user interface testing, but we haven't resolved the database connection issue yet. I will update the roadmap by this afternoon.",
    explanation: "Emphasize correct usage of 'already finished', 'haven't resolved... yet', and clear rhythm."
  },
  {
    id: "a2_u12_l166_p13",
    type: "match_pairs",
    prompt: "Match the project management terms with their workplace meanings:",
    options: [
      { id: "m1", text: "ahead of schedule" },
      { id: "m1_m", text: "completing tasks earlier than planned" },
      { id: "m2", text: "run into a blocker" },
      { id: "m2_m", text: "encounter an obstacle stopping progress" },
      { id: "m3", text: "touch base" },
      { id: "m3_m", text: "have a brief check-in conversation" },
      { id: "m4", text: "deliverable" },
      { id: "m4_m", text: "tangible output or product to submit" }
    ]
  },
  {
    id: "a2_u12_l166_p14",
    type: "mediation",
    prompt: "Mediate this project status update into English for your remote manager: 'हमने अभी-अभी नया सुरक्षा पैच जारी किया है, लेकिन ग्राहक ने अभी तक इसकी पुष्टि नहीं की है।'",
    sourceSentence: "हमने अभी-अभी नया सुरक्षा पैच जारी किया है, लेकिन ग्राहक ने अभी तक इसकी पुष्टि नहीं की है।",
    targetSentence: "We have just released the new security patch, but the client has not confirmed it yet.",
    options: [
      { id: "o1", text: "We have just released the new security patch, but the client has not confirmed it yet.", isCorrect: true },
      { id: "o2", text: "We released yesterday security patch, but client already confirmed.", isCorrect: false },
      { id: "o3", text: "We are releasing patch tomorrow if client wants it yet.", isCorrect: false }
    ],
    correctAnswer: "We have just released the new security patch, but the client has not confirmed it yet.",
    explanation: "'have just released' expresses recent completion, and 'has not confirmed... yet' accurately captures 'अभी तक पुष्टि नहीं की है'."
  },
  {
    id: "a2_u12_l166_p15",
    type: "error_correction",
    prompt: "Identify and correct the verb tense mistake in this progress report:",
    sourceSentence: "The lead engineer has committed the bug fix yesterday evening.",
    targetSentence: "The lead engineer committed the bug fix yesterday evening.",
    options: [
      { id: "o1", text: "The lead engineer committed the bug fix yesterday evening.", isCorrect: true },
      { id: "o2", text: "The lead engineer has commit the bug fix yesterday evening.", isCorrect: false },
      { id: "o3", text: "The lead engineer already committed the bug fix yesterday evening.", isCorrect: false }
    ],
    correctAnswer: "The lead engineer committed the bug fix yesterday evening.",
    explanation: "Specific past time markers like 'yesterday evening' require the Past Simple ('committed'), not the Present Perfect."
  },
  {
    id: "a2_u12_l166_p16",
    type: "listening",
    prompt: "Listen to the stand-up meeting and identify what task is still pending:",
    audioText: "Good morning team. We have already updated the database schema, and Liam pushed the frontend assets ten minutes ago. However, we haven't conducted the load test yet due to server maintenance.",
    targetSentence: "Conducting the load test.",
    options: [
      { id: "o1", text: "Conducting the load test.", isCorrect: true },
      { id: "o2", text: "Updating the database schema.", isCorrect: false },
      { id: "o3", text: "Pushing the frontend assets.", isCorrect: false },
      { id: "o4", text: "Canceling the project.", isCorrect: false }
    ],
    correctAnswer: "Conducting the load test.",
    explanation: "The speaker states: 'we haven't conducted the load test yet due to server maintenance.'"
  },
  {
    id: "a2_u12_l166_p17",
    type: "personal_production",
    prompt: "Write a short 2-sentence project status email indicating one task completed already and one task not completed yet:",
    targetSentence: "I have already submitted the revised design mockups to the marketing lead. However, I have not received their approval on the color palette yet.",
    audioText: "I have already submitted the revised design mockups to the marketing lead. However, I have not received their approval on the color palette yet."
  },
  {
    id: "a2_u12_l166_p18",
    type: "dialogue_completion",
    prompt: "Complete the conversation between project managers:\nAlex: 'How is the mobile onboarding feature coming along?'\nFatima: '________________________'",
    sourceSentence: "How is the mobile onboarding feature coming along?",
    targetSentence: "We are on track to wrap it up by Thursday, but we haven't finished user testing yet.",
    options: [
      { id: "o1", text: "We are on track to wrap it up by Thursday, but we haven't finished user testing yet.", isCorrect: true },
      { id: "o2", text: "We didn't start the project because it is already 2025.", isCorrect: false },
      { id: "o3", text: "We have finished it yesterday at 2 PM.", isCorrect: false }
    ],
    correctAnswer: "We are on track to wrap it up by Thursday, but we haven't finished user testing yet.",
    explanation: "'on track to wrap it up' and 'haven't finished... yet' provide a professional, grammatically accurate status response."
  },
  {
    id: "a2_u12_l166_p19",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite request for a progress update:",
    sourceSentence: "Could you give us a quick status update on the deliverable?",
    targetSentence: "Could you give us a quick status update on the deliverable?",
    tokens: ["Could", "you", "give", "us", "a", "quick", "status", "update", "on", "the", "deliverable", "?"],
    correctOrder: ["Could", "you", "give", "us", "a", "quick", "status", "update", "on", "the", "deliverable", "?"],
    explanation: "'Could you give us a quick status update on...?' is a standard polite business question."
  },
  {
    id: "a2_u12_l166_p20",
    type: "fill_blank",
    prompt: "Fill in the correct time adverb to indicate an action completed earlier than expected:",
    sourceSentence: "The backend engineers have [blank] deployed the emergency security patch.",
    targetSentence: "The backend engineers have already deployed the emergency security patch.",
    text: "The backend engineers have [blank] deployed the emergency security patch.",
    options: [
      { id: "o1", text: "already", isCorrect: true },
      { id: "o2", text: "yet", isCorrect: false },
      { id: "o3", text: "still", isCorrect: false },
      { id: "o4", text: "ago", isCorrect: false }
    ],
    correctAnswer: "already",
    explanation: "'already' goes between 'have' and the past participle 'deployed' to show early completion."
  },
  {
    id: "a2_u12_l166_p21",
    type: "translation",
    prompt: "Translate to English: 'क्या आपने अभी तक अंतिम रिपोर्ट की समीक्षा की है?'",
    sourceSentence: "क्या आपने अभी तक अंतिम रिपोर्ट की समीक्षा की है?",
    targetSentence: "Have you reviewed the final report yet?",
    explanation: "Questions about completion status use 'Have you + past participle + ... yet?'."
  },
  {
    id: "a2_u12_l166_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain why the project roadmap was adjusted.",
    sourceSentence: "We adjusted the roadmap last Friday because our team ran into an unexpected technical blocker.",
    targetSentence: "We adjusted the roadmap last Friday because our team ran into an unexpected technical blocker.",
    audioText: "We adjusted the roadmap last Friday because our team ran into an unexpected technical blocker.",
    explanation: "Pronounce 'adjusted', 'unexpected', and 'blocker' clearly."
  }
];

const l166_review: Exercise[] = [
  {
    id: "a2_u12_l166_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Expressing Purpose): Which sentence correctly explains why the team hired a consultant?",
    options: [
      { id: "o1", text: "We hired a consultant in order to accelerate our mobile app launch.", isCorrect: true },
      { id: "o2", text: "We hired a consultant for accelerate our mobile app launch.", isCorrect: false },
      { id: "o3", text: "We hired a consultant in order to accelerating our launch.", isCorrect: false },
      { id: "o4", text: "We hired a consultant so to accelerate our launch.", isCorrect: false }
    ],
    correctAnswer: "We hired a consultant in order to accelerate our mobile app launch.",
    explanation: "'in order to' must be followed by the base verb infinitive ('accelerate')."
  },
  {
    id: "a2_u12_l166_r8",
    type: "fill_blank",
    prompt: "Choose the correct verb form: 'I [blank] (speak) to the client two days ago about the budget.'",
    sourceSentence: "I [blank] to the client two days ago about the budget.",
    targetSentence: "I spoke to the client two days ago about the budget.",
    text: "I [blank] to the client two days ago about the budget.",
    options: [
      { id: "o1", text: "spoke", isCorrect: true },
      { id: "o2", text: "have spoken", isCorrect: false },
      { id: "o3", text: "have speak", isCorrect: false },
      { id: "o4", text: "speaking", isCorrect: false }
    ],
    correctAnswer: "spoke",
    explanation: "'two days ago' is a specific past time expression requiring Past Simple 'spoke'."
  },
  {
    id: "a2_u12_l166_r9",
    type: "error_correction",
    prompt: "Correct the position of the adverb in this sentence:",
    sourceSentence: "We have finished yet the design mockups.",
    targetSentence: "We have already finished the design mockups.",
    options: [
      { id: "o1", text: "We have already finished the design mockups.", isCorrect: true },
      { id: "o2", text: "We yet have finished the design mockups.", isCorrect: false },
      { id: "o3", text: "We have finished already the design mockups.", isCorrect: false }
    ],
    correctAnswer: "We have already finished the design mockups.",
    explanation: "In affirmative sentences indicating completion, use 'already' between 'have' and the participle."
  },
  {
    id: "a2_u12_l166_r10",
    type: "translation",
    prompt: "Translate to English: 'हम तय समय से आगे चल रहे हैं और हमने सभी लक्ष्य हासिल कर लिए हैं।'",
    sourceSentence: "हम तय समय से आगे चल रहे हैं और हमने सभी लक्ष्य हासिल कर लिए हैं।",
    targetSentence: "We are ahead of schedule and we have achieved all our targets.",
    explanation: "'ahead of schedule' expresses being earlier than planned, and 'have achieved' captures completed accomplishments."
  }
];

const l166_assessment: Exercise[] = [
  {
    id: "a2_u12_l166_a7",
    type: "multiple_choice",
    prompt: "Which response best summarizes a project with zero blockers that will finish on time?",
    options: [
      { id: "o1", text: "We are on track to deliver the project by Friday with no blockers reported.", isCorrect: true },
      { id: "o2", text: "We ran into several delays and postponed the deliverable indefinitely.", isCorrect: false },
      { id: "o3", text: "We haven't started working on the project yet.", isCorrect: false },
      { id: "o4", text: "The team is behind schedule due to technical difficulties.", isCorrect: false }
    ],
    correctAnswer: "We are on track to deliver the project by Friday with no blockers reported.",
    explanation: "'on track to deliver' indicates smooth progress towards on-time completion."
  },
  {
    id: "a2_u12_l166_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct negative Present Perfect structure:",
    sourceSentence: "The finance department [blank] the invoice yet.",
    targetSentence: "The finance department has not approved the invoice yet.",
    text: "The finance department [blank] the invoice yet.",
    options: [
      { id: "o1", text: "has not approved", isCorrect: true },
      { id: "o2", text: "did not approved", isCorrect: false },
      { id: "o3", text: "have not approve", isCorrect: false },
      { id: "o4", text: "is not approving", isCorrect: false }
    ],
    correctAnswer: "has not approved",
    explanation: "Singular subject 'The finance department' takes 'has not approved' with 'yet'."
  },
  {
    id: "a2_u12_l166_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a clear 2-sentence milestone briefing stating what was accomplished last week vs. what has just been completed today.",
    sourceSentence: "Last week, we finalized the contract with the vendor. Today, we have just launched the initial user registration portal.",
    targetSentence: "Last week, we finalized the contract with the vendor. Today, we have just launched the initial user registration portal.",
    audioText: "Last week, we finalized the contract with the vendor. Today, we have just launched the initial user registration portal.",
    explanation: "Demonstrate accurate contrast between Past Simple ('finalized last week') and Present Perfect ('have just launched today')."
  },
  {
    id: "a2_u12_l166_a10",
    type: "mediation",
    prompt: "Real-world transfer: Translate your manager's briefing for an overseas partner: 'हमने पिछले हफ्ते बुनियादी ढांचा तैयार किया और आज सुबह हमने पहली रिपोर्ट पूरी कर ली है।'",
    sourceSentence: "हमने पिछले हफ्ते बुनियादी ढांचा तैयार किया और आज सुबह हमने पहली रिपोर्ट पूरी कर ली है।",
    targetSentence: "We set up the infrastructure last week and we have completed the first report this morning.",
    options: [
      { id: "o1", text: "We set up the infrastructure last week and we have completed the first report this morning.", isCorrect: true },
      { id: "o2", text: "We have set up infrastructure yesterday and will complete tomorrow.", isCorrect: false },
      { id: "o3", text: "We did not finish anything last week or this morning.", isCorrect: false }
    ],
    correctAnswer: "We set up the infrastructure last week and we have completed the first report this morning.",
    explanation: "'set up... last week' (Past Simple) and 'have completed... this morning' (Present Perfect) correctly translate the two clauses."
  }
];

// =========================================================================
// LESSON 167: Technical Glitches, Troubleshooting & Reporting Software Bugs
// =========================================================================
const l167_practice: Exercise[] = [
  {
    id: "a2_u12_l167_p11",
    type: "reading",
    prompt: "Read the IT incident report and answer the question:\n\"Incident Summary: At 08:15 AM, the main customer database was disconnected due to a network hardware failure. Automated alerts were sent to the on-call engineers immediately. By 08:45 AM, the backup server was activated and normal operations were restored. A post-incident investigation is being conducted to prevent future outages.\"\nWhat action was taken immediately after the network hardware failure?",
    sourceSentence: "What action was taken immediately after the network hardware failure?",
    targetSentence: "Automated alerts were sent to the on-call engineers.",
    options: [
      { id: "o1", text: "Automated alerts were sent to the on-call engineers.", isCorrect: true },
      { id: "o2", text: "The entire office was closed for the day.", isCorrect: false },
      { id: "o3", text: "The customer database was permanently deleted.", isCorrect: false },
      { id: "o4", text: "The engineers ignored the system notification.", isCorrect: false }
    ],
    correctAnswer: "Automated alerts were sent to the on-call engineers.",
    explanation: "The incident report explicitly notes: 'Automated alerts were sent to the on-call engineers immediately.'"
  },
  {
    id: "a2_u12_l167_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Report a software bug using the passive voice.",
    sourceSentence: "The error was discovered during regression testing, and the bug has already been assigned to the backend team.",
    targetSentence: "The error was discovered during regression testing, and the bug has already been assigned to the backend team.",
    audioText: "The error was discovered during regression testing, and the bug has already been assigned to the backend team.",
    explanation: "Practice passive voice structures: 'was discovered' and 'has already been assigned'."
  },
  {
    id: "a2_u12_l167_p13",
    type: "match_pairs",
    prompt: "Match technical troubleshooting terms with their definitions:",
    options: [
      { id: "m1", text: "glitch" },
      { id: "m1_m", text: "temporary unexpected malfunction" },
      { id: "m2", text: "patch" },
      { id: "m2_m", text: "piece of code written to fix a problem" },
      { id: "m3", text: "troubleshoot" },
      { id: "m3_m", text: "investigate and trace the source of an error" },
      { id: "m4", text: "outage" },
      { id: "m4_m", text: "period when a power or service system is offline" }
    ]
  },
  {
    id: "a2_u12_l167_p14",
    type: "mediation",
    prompt: "Help your colleague explain this IT support status in English: 'यह सॉफ्टवेयर बग कल डेवलपर्स द्वारा ठीक कर दिया गया था।' Provide the best translation.",
    sourceSentence: "यह सॉफ्टवेयर बग कल डेवलपर्स द्वारा ठीक कर दिया गया था।",
    targetSentence: "This software bug was fixed by the developers yesterday.",
    options: [
      { id: "o1", text: "This software bug was fixed by the developers yesterday.", isCorrect: true },
      { id: "o2", text: "This software bug has fixing by developers yesterday.", isCorrect: false },
      { id: "o3", text: "This software bug is fix yesterday from developers.", isCorrect: false }
    ],
    correctAnswer: "This software bug was fixed by the developers yesterday.",
    explanation: "Past Simple passive: 'was fixed by the developers yesterday'."
  },
  {
    id: "a2_u12_l167_p15",
    type: "error_correction",
    prompt: "Identify and correct the passive voice error in this sentence:",
    sourceSentence: "The user database was delete by accident during migration.",
    targetSentence: "The user database was deleted by accident during migration.",
    options: [
      { id: "o1", text: "The user database was deleted by accident during migration.", isCorrect: true },
      { id: "o2", text: "The user database was deleting by accident during migration.", isCorrect: false },
      { id: "o3", text: "The user database is delete by accident during migration.", isCorrect: false }
    ],
    correctAnswer: "The user database was deleted by accident during migration.",
    explanation: "Passive voice requires 'was/were + past participle' ('deleted')."
  },
  {
    id: "a2_u12_l167_p16",
    type: "listening",
    prompt: "Listen to the IT helpdesk announcement and select the correct status:",
    audioText: "Attention all staff: The email server is currently being updated. In the meantime, critical messages are stored safely in the queue and will be delivered shortly.",
    targetSentence: "Messages are stored safely and will be delivered shortly.",
    options: [
      { id: "o1", text: "Messages are stored safely and will be delivered shortly.", isCorrect: true },
      { id: "o2", text: "All incoming emails were permanently lost.", isCorrect: false },
      { id: "o3", text: "The email server was shut down forever.", isCorrect: false },
      { id: "o4", text: "Staff must delete their email accounts today.", isCorrect: false }
    ],
    correctAnswer: "Messages are stored safely and will be delivered shortly.",
    explanation: "The speaker confirms: 'critical messages are stored safely in the queue and will be delivered shortly.'"
  },
  {
    id: "a2_u12_l167_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a technical malfunction you solved recently at work or study, using passive structures where appropriate:",
    targetSentence: "When the application crashed, the error log was analyzed by our technical team. A new software update was installed to resolve the issue.",
    audioText: "When the application crashed, the error log was analyzed by our technical team. A new software update was installed to resolve the issue."
  },
  {
    id: "a2_u12_l167_p18",
    type: "dialogue_completion",
    prompt: "Complete the helpdesk conversation:\nUser: 'I can't log into the customer portal.'\nSupport Agent: '________________________'",
    sourceSentence: "I can't log into the customer portal.",
    targetSentence: "Your account was temporarily locked after three failed password attempts. Let me unlock it for you.",
    options: [
      { id: "o1", text: "Your account was temporarily locked after three failed password attempts. Let me unlock it for you.", isCorrect: true },
      { id: "o2", text: "You must buy a brand new computer immediately.", isCorrect: false },
      { id: "o3", text: "The portal does not exist anymore.", isCorrect: false }
    ],
    correctAnswer: "Your account was temporarily locked after three failed password attempts. Let me unlock it for you.",
    explanation: "'Your account was temporarily locked...' is a polite, professional explanation using past passive."
  },
  {
    id: "a2_u12_l167_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a passive troubleshooting statement:",
    sourceSentence: "The diagnostic test was completed in less than five minutes.",
    targetSentence: "The diagnostic test was completed in less than five minutes.",
    tokens: ["The", "diagnostic", "test", "was", "completed", "in", "less", "than", "five", "minutes", "."],
    correctOrder: ["The", "diagnostic", "test", "was", "completed", "in", "less", "than", "five", "minutes", "."],
    explanation: "Structure: Subject ('The diagnostic test') + was + past participle ('completed') + prepositional phrase."
  },
  {
    id: "a2_u12_l167_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct passive auxiliary verb:",
    sourceSentence: "All confidential files [blank] encrypted before they are uploaded to the cloud.",
    targetSentence: "All confidential files are encrypted before they are uploaded to the cloud.",
    text: "All confidential files [blank] encrypted before they are uploaded to the cloud.",
    options: [
      { id: "o1", text: "are", isCorrect: true },
      { id: "o2", text: "is", isCorrect: false },
      { id: "o3", text: "have", isCorrect: false },
      { id: "o4", text: "been", isCorrect: false }
    ],
    correctAnswer: "are",
    explanation: "Plural subject 'files' in general present passive takes 'are encrypted'."
  },
  {
    id: "a2_u12_l167_p21",
    type: "translation",
    prompt: "Translate to English: 'सभी सर्वर त्रुटियों की जांच की जा रही है।'",
    sourceSentence: "सभी सर्वर त्रुटियों की जांच की जा रही है।",
    targetSentence: "All server errors are being investigated.",
    explanation: "Present continuous passive: 'are being investigated'."
  },
  {
    id: "a2_u12_l167_p22",
    type: "speaking",
    prompt: "Speak clearly: Explain what happens when a system update is installed.",
    sourceSentence: "When the system update is installed, user settings are automatically preserved and saved.",
    targetSentence: "When the system update is installed, user settings are automatically preserved and saved.",
    audioText: "When the system update is installed, user settings are automatically preserved and saved.",
    explanation: "Focus on clear pronunciation of passive participles 'installed', 'preserved', and 'saved'."
  }
];

const l167_review: Exercise[] = [
  {
    id: "a2_u12_l167_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Expressing Uncertainty / Future): Which sentence expresses a future possibility regarding system maintenance?",
    options: [
      { id: "o1", text: "The network might experience brief slowdowns during tonight's maintenance.", isCorrect: true },
      { id: "o2", text: "The network must experiencing slowdowns yesterday.", isCorrect: false },
      { id: "o3", text: "The network will definitely not have any maintenance.", isCorrect: false },
      { id: "o4", text: "The network was maintained tomorrow.", isCorrect: false }
    ],
    correctAnswer: "The network might experience brief slowdowns during tonight's maintenance.",
    explanation: "'might experience' correctly expresses a possible future occurrence."
  },
  {
    id: "a2_u12_l167_r8",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct passive verb: 'The security patch was [blank] (apply) last night.'",
    sourceSentence: "The security patch was [blank] last night.",
    targetSentence: "The security patch was applied last night.",
    text: "The security patch was [blank] last night.",
    options: [
      { id: "o1", text: "applied", isCorrect: true },
      { id: "o2", text: "apply", isCorrect: false },
      { id: "o3", text: "applying", isCorrect: false },
      { id: "o4", text: "applies", isCorrect: false }
    ],
    correctAnswer: "applied",
    explanation: "Past participle of regular verb 'apply' is 'applied'."
  },
  {
    id: "a2_u12_l167_r9",
    type: "error_correction",
    prompt: "Correct the active/passive confusion in this IT ticket:",
    sourceSentence: "The payment gateway developed by external contractors in 2023.",
    targetSentence: "The payment gateway was developed by external contractors in 2023.",
    options: [
      { id: "o1", text: "The payment gateway was developed by external contractors in 2023.", isCorrect: true },
      { id: "o2", text: "The payment gateway has develop by external contractors in 2023.", isCorrect: false },
      { id: "o3", text: "The payment gateway developing by external contractors in 2023.", isCorrect: false }
    ],
    correctAnswer: "The payment gateway was developed by external contractors in 2023.",
    explanation: "The passive voice requires 'was + past participle' when the agent ('external contractors') did the action."
  },
  {
    id: "a2_u12_l167_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या सिस्टम बैकअप हर रात लिया जाता है?'",
    sourceSentence: "क्या सिस्टम बैकअप हर रात लिया जाता है?",
    targetSentence: "Is the system backup taken every night?",
    explanation: "Present Simple passive question: 'Is + subject + past participle...?'."
  }
];

const l167_assessment: Exercise[] = [
  {
    id: "a2_u12_l167_a7",
    type: "multiple_choice",
    prompt: "Select the sentence that uses the passive voice correctly to focus on the action rather than the actor:",
    options: [
      { id: "o1", text: "All customer passwords are encrypted using modern cryptographic protocols.", isCorrect: true },
      { id: "o2", text: "All customer passwords encrypt using modern cryptographic protocols.", isCorrect: false },
      { id: "o3", text: "Modern protocols encrypting all customer passwords are.", isCorrect: false },
      { id: "o4", text: "Passwords are encrypt by protocols.", isCorrect: false }
    ],
    correctAnswer: "All customer passwords are encrypted using modern cryptographic protocols.",
    explanation: "Structure: Subject ('passwords') + are + past participle ('encrypted')."
  },
  {
    id: "a2_u12_l167_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate agent preposition:",
    sourceSentence: "The hardware issue was quickly resolved [blank] our network administrator.",
    targetSentence: "The hardware issue was quickly resolved by our network administrator.",
    text: "The hardware issue was quickly resolved [blank] our network administrator.",
    options: [
      { id: "o1", text: "by", isCorrect: true },
      { id: "o2", text: "with", isCorrect: false },
      { id: "o3", text: "from", isCorrect: false },
      { id: "o4", text: "to", isCorrect: false }
    ],
    correctAnswer: "by",
    explanation: "In passive sentences, the person or entity performing the action is introduced with 'by'."
  },
  {
    id: "a2_u12_l167_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak aloud a 2-sentence summary explaining a technical troubleshooting procedure.",
    sourceSentence: "First, the server logs were reviewed to locate the bug. Then, a new security patch was deployed by the engineering team.",
    targetSentence: "First, the server logs were reviewed to locate the bug. Then, a new security patch was deployed by the engineering team.",
    audioText: "First, the server logs were reviewed to locate the bug. Then, a new security patch was deployed by the engineering team.",
    explanation: "Demonstrate accurate use of passive voice and sequential sequencing markers ('First', 'Then')."
  },
  {
    id: "a2_u12_l167_a10",
    type: "mediation",
    prompt: "Translate this technical update for a customer support bulletin: 'सभी प्रभावित खातों को पुनर्स्थापित कर दिया गया है और डेटा सुरक्षित है।'",
    sourceSentence: "सभी प्रभावित खातों को पुनर्स्थापित कर दिया गया है और डेटा सुरक्षित है।",
    targetSentence: "All affected accounts have been restored and the data is secure.",
    options: [
      { id: "o1", text: "All affected accounts have been restored and the data is secure.", isCorrect: true },
      { id: "o2", text: "All accounts deleted yesterday and data was lost.", isCorrect: false },
      { id: "o3", text: "We will restore accounts next year if data is secure.", isCorrect: false }
    ],
    correctAnswer: "All affected accounts have been restored and the data is secure.",
    explanation: "'have been restored' (Present Perfect passive) accurately renders 'पुनर्स्थापित कर दिया गया है'."
  }
];

// =========================================================================
// LESSON 168: Creative Solutions, Brainstorming Ideas & Pitching Proposals
// =========================================================================
const l168_practice: Exercise[] = [
  {
    id: "a2_u12_l168_p11",
    type: "reading",
    prompt: "Read the innovation proposal memo and answer the question:\n\"Proposal Pitch: If our company adopted a hybrid flexible schedule, employee satisfaction would increase significantly. Furthermore, if we automated our inventory tracking, we could reduce manual data errors by 40%. One potential challenge is initial software costs; however, the long-term savings would easily justify the investment.\"\nAccording to the proposal, what would happen if inventory tracking were automated?",
    sourceSentence: "According to the proposal, what would happen if inventory tracking were automated?",
    targetSentence: "Manual data errors could be reduced by 40%.",
    options: [
      { id: "o1", text: "Manual data errors could be reduced by 40%.", isCorrect: true },
      { id: "o2", text: "Employee satisfaction would decrease.", isCorrect: false },
      { id: "o3", text: "The company would cancel all software investments.", isCorrect: false },
      { id: "o4", text: "All hybrid schedules would be eliminated.", isCorrect: false }
    ],
    correctAnswer: "Manual data errors could be reduced by 40%.",
    explanation: "The text states: 'if we automated our inventory tracking, we could reduce manual data errors by 40%.'"
  },
  {
    id: "a2_u12_l168_p12",
    type: "speaking",
    prompt: "Speak clearly and persuasively: Pitch a hypothetical improvement idea using the Second Conditional.",
    sourceSentence: "If we redesigned our checkout process, customers would finish purchases much faster and sales would increase.",
    targetSentence: "If we redesigned our checkout process, customers would finish purchases much faster and sales would increase.",
    audioText: "If we redesigned our checkout process, customers would finish purchases much faster and sales would increase.",
    explanation: "Emphasize correct Second Conditional cadence: 'If we redesigned... customers would finish...'."
  },
  {
    id: "a2_u12_l168_p13",
    type: "match_pairs",
    prompt: "Match the proposal pitching phrases with their communicative functions:",
    options: [
      { id: "m1", text: "What if we..." },
      { id: "m1_m", text: "propose a creative hypothetical idea" },
      { id: "m2", text: "One option would be to..." },
      { id: "m2_m", text: "suggest a diplomatic solution" },
      { id: "m3", text: "If I were in your position..." },
      { id: "m3_m", text: "offer polite advisory perspective" },
      { id: "m4", text: "The main benefit is..." },
      { id: "m4_m", text: "highlight the primary positive outcome" }
    ]
  },
  {
    id: "a2_u12_l168_p14",
    type: "mediation",
    prompt: "Help your colleague pitch an idea in English: 'यदि हमारे पास अधिक बजट होता, तो हम एक नया मोबाइल ऐप विकसित करते।' Provide the most accurate translation.",
    sourceSentence: "यदि हमारे पास अधिक बजट होता, तो हम एक नया मोबाइल ऐप विकसित करते।",
    targetSentence: "If we had a larger budget, we would develop a new mobile app.",
    options: [
      { id: "o1", text: "If we had a larger budget, we would develop a new mobile app.", isCorrect: true },
      { id: "o2", text: "If we have a larger budget, we will develop a new mobile app.", isCorrect: false },
      { id: "o3", text: "If we had budget, we develop mobile app yesterday.", isCorrect: false }
    ],
    correctAnswer: "If we had a larger budget, we would develop a new mobile app.",
    explanation: "Second Conditional: 'If + Past Simple ('had'), would + base verb ('would develop')' expresses hypothetical present/future."
  },
  {
    id: "a2_u12_l168_p15",
    type: "error_correction",
    prompt: "Identify and correct the Second Conditional structure mistake:",
    sourceSentence: "If I would have more free time, I would learn Spanish.",
    targetSentence: "If I had more free time, I would learn Spanish.",
    options: [
      { id: "o1", text: "If I had more free time, I would learn Spanish.", isCorrect: true },
      { id: "o2", text: "If I have more free time, I would learned Spanish.", isCorrect: false },
      { id: "o3", text: "If I will have more free time, I would learn Spanish.", isCorrect: false }
    ],
    correctAnswer: "If I had more free time, I would learn Spanish.",
    explanation: "Do NOT use 'would' in the 'if'-clause. Use the Past Simple ('had')."
  },
  {
    id: "a2_u12_l168_p16",
    type: "listening",
    prompt: "Listen to the brainstorming session and select the proposed solution:",
    audioText: "If we partnered with local universities, we could recruit talented software interns and lower our hiring costs significantly.",
    targetSentence: "Partnering with local universities to recruit interns.",
    options: [
      { id: "o1", text: "Partnering with local universities to recruit interns.", isCorrect: true },
      { id: "o2", text: "Closing the software department completely.", isCorrect: false },
      { id: "o3", text: "Increasing hiring costs by hiring expensive agencies.", isCorrect: false },
      { id: "o4", text: "Moving the headquarters to another country.", isCorrect: false }
    ],
    correctAnswer: "Partnering with local universities to recruit interns.",
    explanation: "The speaker proposes: 'If we partnered with local universities, we could recruit talented software interns...'"
  },
  {
    id: "a2_u12_l168_p17",
    type: "personal_production",
    prompt: "Write 2 sentences proposing an innovative improvement for your workplace or school using the Second Conditional ('If we... we would...'):",
    targetSentence: "If we organized monthly brainstorming workshops, team members would share creative ideas more openly. We could discover innovative solutions to common problems.",
    audioText: "If we organized monthly brainstorming workshops, team members would share creative ideas more openly. We could discover innovative solutions to common problems."
  },
  {
    id: "a2_u12_l168_p18",
    type: "dialogue_completion",
    prompt: "Complete the creative problem-solving conversation:\nTeam Lead: 'Our customer support response time is too slow. What should we do?'\nAnalyst: '________________________'",
    sourceSentence: "Our customer support response time is too slow. What should we do?",
    targetSentence: "What if we created an automated FAQ chatbot? It would answer routine questions instantly.",
    options: [
      { id: "o1", text: "What if we created an automated FAQ chatbot? It would answer routine questions instantly.", isCorrect: true },
      { id: "o2", text: "We should ignore all customer emails forever.", isCorrect: false },
      { id: "o3", text: "If we had time yesterday, we answered.", isCorrect: false }
    ],
    correctAnswer: "What if we created an automated FAQ chatbot? It would answer routine questions instantly.",
    explanation: "'What if we created... It would answer...' is an engaging, polite brainstorming structure."
  },
  {
    id: "a2_u12_l168_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite hypothetical suggestion:",
    sourceSentence: "One option would be to launch a customer feedback survey.",
    targetSentence: "One option would be to launch a customer feedback survey.",
    tokens: ["One", "option", "would", "be", "to", "launch", "a", "customer", "feedback", "survey", "."],
    correctOrder: ["One", "option", "would", "be", "to", "launch", "a", "customer", "feedback", "survey", "."],
    explanation: "'One option would be to + base verb' is a standard polite proposal frame."
  },
  {
    id: "a2_u12_l168_p20",
    type: "fill_blank",
    prompt: "Fill in the correct conditional verb form:",
    sourceSentence: "If the company [blank] (offer) remote work options, it would attract more international talent.",
    targetSentence: "If the company offered remote work options, it would attract more international talent.",
    text: "If the company [blank] remote work options, it would attract more international talent.",
    options: [
      { id: "o1", text: "offered", isCorrect: true },
      { id: "o2", text: "would offer", isCorrect: false },
      { id: "o3", text: "offers", isCorrect: false },
      { id: "o4", text: "will offer", isCorrect: false }
    ],
    correctAnswer: "offered",
    explanation: "Second Conditional if-clause takes Past Simple 'offered'."
  },
  {
    id: "a2_u12_l168_p21",
    type: "translation",
    prompt: "Translate to English: 'यदि मैं टीम लीडर होता, तो मैं जिम्मेदारियों को अधिक निष्पक्ष रूप से विभाजित करता।'",
    sourceSentence: "यदि मैं टीम लीडर होता, तो मैं जिम्मेदारियों को अधिक निष्पक्ष रूप से विभाजित करता।",
    targetSentence: "If I were the team leader, I would divide responsibilities more fairly.",
    explanation: "Hypothetical conditional with subjunctive 'were': 'If I were..., I would divide...'."
  },
  {
    id: "a2_u12_l168_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give advice to a colleague starting a new business proposal.",
    sourceSentence: "If I were in your position, I would highlight the financial benefits before discussing the technical details.",
    targetSentence: "If I were in your position, I would highlight the financial benefits before discussing the technical details.",
    audioText: "If I were in your position, I would highlight the financial benefits before discussing the technical details.",
    explanation: "Practice smooth rhythm on 'If I were in your position, I would highlight...'."
  }
];

const l168_review: Exercise[] = [
  {
    id: "a2_u12_l168_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 9 - First Conditional vs Second Conditional): Which sentence describes a REAL future possibility rather than a hypothetical scenario?",
    options: [
      { id: "o1", text: "If it rains tomorrow, we will move the presentation indoors.", isCorrect: true },
      { id: "o2", text: "If we had wings, we would fly to the client meeting.", isCorrect: false },
      { id: "o3", text: "If I were the CEO, I would double all salaries.", isCorrect: false },
      { id: "o4", text: "If they won a billion dollars, they would retire today.", isCorrect: false }
    ],
    correctAnswer: "If it rains tomorrow, we will move the presentation indoors.",
    explanation: "First conditional ('If + Present, will + Verb') is used for realistic, possible future events."
  },
  {
    id: "a2_u12_l168_r8",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct modal form: 'If we upgraded the computers, the team [blank] (can / could) render 3D graphics faster.'",
    sourceSentence: "If we upgraded the computers, the team [blank] render 3D graphics faster.",
    targetSentence: "If we upgraded the computers, the team could render 3D graphics faster.",
    text: "If we upgraded the computers, the team [blank] render 3D graphics faster.",
    options: [
      { id: "o1", text: "could", isCorrect: true },
      { id: "o2", text: "can", isCorrect: false },
      { id: "o3", text: "will can", isCorrect: false },
      { id: "o4", text: "is able", isCorrect: false }
    ],
    correctAnswer: "could",
    explanation: "In Second Conditional result clauses, 'could' is used to express hypothetical ability."
  },
  {
    id: "a2_u12_l168_r9",
    type: "error_correction",
    prompt: "Correct the verb error in this hypothetical proposal:",
    sourceSentence: "If we hire three more designers, we would complete the website sooner.",
    targetSentence: "If we hired three more designers, we would complete the website sooner.",
    options: [
      { id: "o1", text: "If we hired three more designers, we would complete the website sooner.", isCorrect: true },
      { id: "o2", text: "If we hiring three more designers, we would complete the website sooner.", isCorrect: false },
      { id: "o3", text: "If we will hire three more designers, we would complete the website sooner.", isCorrect: false }
    ],
    correctAnswer: "If we hired three more designers, we would complete the website sooner.",
    explanation: "Match the 'would' result clause with Past Simple 'hired' in the if-clause."
  },
  {
    id: "a2_u12_l168_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या होगा यदि हम सीधे ग्राहकों से प्रतिक्रिया मांगें?'",
    sourceSentence: "क्या होगा यदि हम सीधे ग्राहकों से प्रतिक्रिया मांगें?",
    targetSentence: "What would happen if we asked for feedback directly from customers?",
    explanation: "Use 'What would happen if we + Past Simple...?' for hypothetical inquiries."
  }
];

const l168_assessment: Exercise[] = [
  {
    id: "a2_u12_l168_a7",
    type: "multiple_choice",
    prompt: "Which phrase is most effective for introducing a constructive alternative solution during a strategy session?",
    options: [
      { id: "o1", text: "Another viable option would be to streamline our onboarding process.", isCorrect: true },
      { id: "o2", text: "Your idea is completely wrong and useless.", isCorrect: false },
      { id: "o3", text: "I do not want to discuss this project anymore.", isCorrect: false },
      { id: "o4", text: "We must stop working immediately.", isCorrect: false }
    ],
    correctAnswer: "Another viable option would be to streamline our onboarding process.",
    explanation: "'Another viable option would be to...' provides a constructive, professional proposal tone."
  },
  {
    id: "a2_u12_l168_a8",
    type: "fill_blank",
    prompt: "Complete the Second Conditional sentence with the correct hypothetical auxiliary:",
    sourceSentence: "If our team had better analytical tools, we [blank] identify customer trends more accurately.",
    targetSentence: "If our team had better analytical tools, we would identify customer trends more accurately.",
    text: "If our team had better analytical tools, we [blank] identify customer trends more accurately.",
    options: [
      { id: "o1", text: "would", isCorrect: true },
      { id: "o2", text: "will", isCorrect: false },
      { id: "o3", text: "have", isCorrect: false },
      { id: "o4", text: "did", isCorrect: false }
    ],
    correctAnswer: "would",
    explanation: "Second Conditional result clause uses 'would + base verb'."
  },
  {
    id: "a2_u12_l168_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Pitch a 2-sentence creative proposal explaining how flexible work hours would benefit your team.",
    sourceSentence: "If our team had flexible working hours, employee productivity would improve. We would also experience less daily commuting stress.",
    targetSentence: "If our team had flexible working hours, employee productivity would improve. We would also experience less daily commuting stress.",
    audioText: "If our team had flexible working hours, employee productivity would improve. We would also experience less daily commuting stress.",
    explanation: "Demonstrate accurate Second Conditional structures ('If our team had... would improve... would experience')."
  },
  {
    id: "a2_u12_l168_a10",
    type: "mediation",
    prompt: "Relay this brainstorming idea in English to your foreign team: 'यदि हम एक डिजिटल कैटलॉग बनाएं, तो हम छपाई की लागत में काफी बचत कर सकते हैं।' Provide the best translation.",
    sourceSentence: "यदि हम एक डिजिटल कैटलॉग बनाएं, तो हम छपाई की लागत में काफी बचत कर सकते हैं।",
    targetSentence: "If we created a digital catalog, we could save significantly on printing costs.",
    options: [
      { id: "o1", text: "If we created a digital catalog, we could save significantly on printing costs.", isCorrect: true },
      { id: "o2", text: "If we create digital catalog, we will printing costs yesterday.", isCorrect: false },
      { id: "o3", text: "We do not create catalog because printing is expensive.", isCorrect: false }
    ],
    correctAnswer: "If we created a digital catalog, we could save significantly on printing costs.",
    explanation: "Second conditional with 'could save' accurately conveys the potential hypothetical savings."
  }
];

// =========================================================================
// LESSON 169: Conditions, Concessions & Project Constraints
// =========================================================================
const l169_practice: Exercise[] = [
  {
    id: "a2_u12_l169_p11",
    type: "reading",
    prompt: "Read the supplier contract terms and answer the question:\n\"Delivery Terms & Conditions: Goods will be delivered within three business days provided that full payment is received in advance. The supplier will maintain wholesale discounts as long as the monthly order volume exceeds 500 units. In case of shipping delays caused by customs clearance, the buyer will be notified within 24 hours. The contract will renew automatically unless either party submits written notice 30 days prior.\"\nUnder what condition will the supplier maintain wholesale discounts?",
    sourceSentence: "Under what condition will the supplier maintain wholesale discounts?",
    targetSentence: "As long as the monthly order volume exceeds 500 units.",
    options: [
      { id: "o1", text: "As long as the monthly order volume exceeds 500 units.", isCorrect: true },
      { id: "o2", text: "Only if full payment is delayed by customs.", isCorrect: false },
      { id: "o3", text: "Unless the buyer submits written notice every week.", isCorrect: false },
      { id: "o4", text: "Provided that shipping takes more than 30 days.", isCorrect: false }
    ],
    correctAnswer: "As long as the monthly order volume exceeds 500 units.",
    explanation: "The contract states: 'The supplier will maintain wholesale discounts as long as the monthly order volume exceeds 500 units.'"
  },
  {
    id: "a2_u12_l169_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Explain project delivery conditions using 'provided that' and 'unless'.",
    sourceSentence: "We can deliver the software by Friday provided that we receive client approval today, unless unexpected server bugs occur.",
    targetSentence: "We can deliver the software by Friday provided that we receive client approval today, unless unexpected server bugs occur.",
    audioText: "We can deliver the software by Friday provided that we receive client approval today, unless unexpected server bugs occur.",
    explanation: "Practice natural articulation of conditional linkers 'provided that' and 'unless'."
  },
  {
    id: "a2_u12_l169_p13",
    type: "match_pairs",
    prompt: "Match the conditional conjunctions with their exact meanings:",
    options: [
      { id: "m1", text: "unless" },
      { id: "m1_m", text: "if not / except if" },
      { id: "m2", text: "provided that" },
      { id: "m2_m", text: "only on the condition that" },
      { id: "m3", text: "as long as" },
      { id: "m3_m", text: "during the entire time that / on condition that" },
      { id: "m4", text: "in case" },
      { id: "m4_m", text: "as a precaution against a possibility" }
    ]
  },
  {
    id: "a2_u12_l169_p14",
    type: "mediation",
    prompt: "Mediate this contingency instruction in English for an overseas partner: 'अतिरिक्त सर्वर बैकअप रखें यदि मुख्य सिस्टम विफल हो जाए।' Choose the best translation.",
    sourceSentence: "अतिरिक्त सर्वर बैकअप रखें यदि मुख्य सिस्टम विफल हो जाए।",
    targetSentence: "Keep an extra server backup in case the main system fails.",
    options: [
      { id: "o1", text: "Keep an extra server backup in case the main system fails.", isCorrect: true },
      { id: "o2", text: "Keep server backup unless main system will fail tomorrow.", isCorrect: false },
      { id: "o3", text: "Do not keep backup provided that system fails.", isCorrect: false }
    ],
    correctAnswer: "Keep an extra server backup in case the main system fails.",
    explanation: "'in case' expresses doing something as a precaution in advance of a possible event."
  },
  {
    id: "a2_u12_l169_p15",
    type: "error_correction",
    prompt: "Identify and correct the double negative error with 'unless':",
    sourceSentence: "We will not launch the product unless we do not pass the security audit.",
    targetSentence: "We will not launch the product unless we pass the security audit.",
    options: [
      { id: "o1", text: "We will not launch the product unless we pass the security audit.", isCorrect: true },
      { id: "o2", text: "We will not launch the product unless we won't pass the security audit.", isCorrect: false },
      { id: "o3", text: "We launch the product unless we don't pass the audit.", isCorrect: false }
    ],
    correctAnswer: "We will not launch the product unless we pass the security audit.",
    explanation: "'Unless' already contains negative meaning ('if we do not'); do not use a negative verb inside the unless-clause."
  },
  {
    id: "a2_u12_l169_p16",
    type: "listening",
    prompt: "Listen to the project coordinator and determine what condition is required for overtime pay:",
    audioText: "Team members are eligible for overtime compensation as long as all extra hours are logged and approved by their department manager beforehand.",
    targetSentence: "Extra hours must be logged and approved beforehand.",
    options: [
      { id: "o1", text: "Extra hours must be logged and approved beforehand.", isCorrect: true },
      { id: "o2", text: "Team members can work without informing any manager.", isCorrect: false },
      { id: "o3", text: "Overtime pay is cancelled for all employees.", isCorrect: false },
      { id: "o4", text: "Overtime is only granted on Sunday mornings.", isCorrect: false }
    ],
    correctAnswer: "Extra hours must be logged and approved beforehand.",
    explanation: "The coordinator states: 'as long as all extra hours are logged and approved by their department manager beforehand.'"
  },
  {
    id: "a2_u12_l169_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing conditions or safety precautions for a project using 'provided that' and 'in case':",
    targetSentence: "We will finish the outdoor photoshoot tomorrow provided that the weather remains clear. I will carry extra waterproof covers in case it rains.",
    audioText: "We will finish the outdoor photoshoot tomorrow provided that the weather remains clear. I will carry extra waterproof covers in case it rains."
  },
  {
    id: "a2_u12_l169_p18",
    type: "dialogue_completion",
    prompt: "Complete the contract negotiation conversation:\nClient: 'Can you guarantee delivery of all 200 laptops by Friday?'\nSupplier: '________________________'",
    sourceSentence: "Can you guarantee delivery of all 200 laptops by Friday?",
    targetSentence: "Yes, we can guarantee Friday delivery provided that the purchase order is signed today.",
    options: [
      { id: "o1", text: "Yes, we can guarantee Friday delivery provided that the purchase order is signed today.", isCorrect: true },
      { id: "o2", text: "No, we will not deliver unless you pay us next year.", isCorrect: false },
      { id: "o3", text: "We delivered all laptops last month already.", isCorrect: false }
    ],
    correctAnswer: "Yes, we can guarantee Friday delivery provided that the purchase order is signed today.",
    explanation: "'provided that the purchase order is signed today' sets a clear, professional condition."
  },
  {
    id: "a2_u12_l169_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a cautionary sentence with 'in case':",
    sourceSentence: "Take an umbrella with you in case it rains later.",
    targetSentence: "Take an umbrella with you in case it rains later.",
    tokens: ["Take", "an", "umbrella", "with", "you", "in", "case", "it", "rains", "later", "."],
    correctOrder: ["Take", "an", "umbrella", "with", "you", "in", "case", "it", "rains", "later", "."],
    explanation: "Structure: Imperative clause ('Take an umbrella...') + in case + Present Simple clause ('it rains later')."
  },
  {
    id: "a2_u12_l169_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate conditional linker:",
    sourceSentence: "You can borrow my company car [blank] you return it with a full tank of fuel.",
    targetSentence: "You can borrow my company car as long as you return it with a full tank of fuel.",
    text: "You can borrow my company car [blank] you return it with a full tank of fuel.",
    options: [
      { id: "o1", text: "as long as", isCorrect: true },
      { id: "o2", text: "unless", isCorrect: false },
      { id: "o3", text: "in case", isCorrect: false },
      { id: "o4", text: "although", isCorrect: false }
    ],
    correctAnswer: "as long as",
    explanation: "'as long as' introduces the condition required for permission."
  },
  {
    id: "a2_u12_l169_p21",
    type: "translation",
    prompt: "Translate to English: 'जब तक आप समय पर नहीं पहुंचते, हम बैठक शुरू नहीं करेंगे।'",
    sourceSentence: "जब तक आप समय पर नहीं पहुंचते, हम बैठक शुरू नहीं करेंगे।",
    targetSentence: "We will not start the meeting unless you arrive on time.",
    explanation: "'Unless you arrive on time' accurately translates 'जब तक आप समय पर नहीं पहुंचते'."
  },
  {
    id: "a2_u12_l169_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain a safety rule to a new employee.",
    sourceSentence: "Everyone is allowed inside the laboratory provided that they wear safety goggles and protective gloves.",
    targetSentence: "Everyone is allowed inside the laboratory provided that they wear safety goggles and protective gloves.",
    audioText: "Everyone is allowed inside the laboratory provided that they wear safety goggles and protective gloves.",
    explanation: "Practice clear pronunciation of 'laboratory', 'provided that', and 'protective'."
  }
];

const l169_review: Exercise[] = [
  {
    id: "a2_u12_l169_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 8 - Conjunctions & Time Clauses): Which sentence correctly joins two contrasting ideas?",
    options: [
      { id: "o1", text: "Although the budget was cut, our team delivered all key features on time.", isCorrect: true },
      { id: "o2", text: "Although the budget was cut, but we finished on time.", isCorrect: false },
      { id: "o3", text: "Despite the budget cut, but we finished.", isCorrect: false },
      { id: "o4", text: "Because the budget was cut, therefore we celebrated.", isCorrect: false }
    ],
    correctAnswer: "Although the budget was cut, our team delivered all key features on time.",
    explanation: "Do NOT combine 'Although' with 'but' in the same sentence."
  },
  {
    id: "a2_u12_l169_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'I will write down your phone number [blank] (in case / unless) my phone battery dies.'",
    sourceSentence: "I will write down your phone number [blank] my phone battery dies.",
    targetSentence: "I will write down your phone number in case my phone battery dies.",
    text: "I will write down your phone number [blank] my phone battery dies.",
    options: [
      { id: "o1", text: "in case", isCorrect: true },
      { id: "o2", text: "unless", isCorrect: false },
      { id: "o3", text: "provided that", isCorrect: false },
      { id: "o4", text: "as soon as", isCorrect: false }
    ],
    correctAnswer: "in case",
    explanation: "'in case' expresses taking precaution against a possible future occurrence ('my phone battery dies')."
  },
  {
    id: "a2_u12_l169_r9",
    type: "error_correction",
    prompt: "Correct the tense in the conditional clause:",
    sourceSentence: "We will proceed with the agreement as long as they will agree to our terms.",
    targetSentence: "We will proceed with the agreement as long as they agree to our terms.",
    options: [
      { id: "o1", text: "We will proceed with the agreement as long as they agree to our terms.", isCorrect: true },
      { id: "o2", text: "We will proceed with the agreement as long as they would agree to our terms.", isCorrect: false },
      { id: "o3", text: "We will proceed with the agreement as long as they agreeing to our terms.", isCorrect: false }
    ],
    correctAnswer: "We will proceed with the agreement as long as they agree to our terms.",
    explanation: "Conditional clauses introduced by 'as long as' take the Present Simple ('agree'), not 'will'."
  },
  {
    id: "a2_u12_l169_r10",
    type: "translation",
    prompt: "Translate to English: 'यदि कोई आपात स्थिति हो तो इस नंबर पर कॉल करें।'",
    sourceSentence: "यदि कोई आपात स्थिति हो तो इस नंबर पर कॉल करें।",
    targetSentence: "Call this number in case of an emergency.",
    explanation: "Use 'in case of + noun' or 'in case there is an emergency'."
  }
];

const l169_assessment: Exercise[] = [
  {
    id: "a2_u12_l169_a7",
    type: "multiple_choice",
    prompt: "Which sentence means: 'We will cancel the outdoor workshop if it rains'?",
    options: [
      { id: "o1", text: "We will hold the outdoor workshop unless it rains.", isCorrect: true },
      { id: "o2", text: "We will hold the outdoor workshop in case it rains.", isCorrect: false },
      { id: "o3", text: "We will hold the outdoor workshop as long as it rains.", isCorrect: false },
      { id: "o4", text: "We will cancel the workshop provided that it does not rain.", isCorrect: false }
    ],
    correctAnswer: "We will hold the outdoor workshop unless it rains.",
    explanation: "'unless it rains' means 'except if it rains' / 'if it does not rain'."
  },
  {
    id: "a2_u12_l169_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct conjunction:",
    sourceSentence: "You will pass your certification exam [blank] you review the course modules thoroughly.",
    targetSentence: "You will pass your certification exam provided that you review the course modules thoroughly.",
    text: "You will pass your certification exam [blank] you review the course modules thoroughly.",
    options: [
      { id: "o1", text: "provided that", isCorrect: true },
      { id: "o2", text: "unless", isCorrect: false },
      { id: "o3", text: "in case", isCorrect: false },
      { id: "o4", text: "although", isCorrect: false }
    ],
    correctAnswer: "provided that",
    explanation: "'provided that' introduces the positive condition required for success."
  },
  {
    id: "a2_u12_l169_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: State two conditions under which your team can accept a new client project.",
    sourceSentence: "We can accept the new client project provided that they agree to our timeline, as long as our current workload remains manageable.",
    targetSentence: "We can accept the new client project provided that they agree to our timeline, as long as our current workload remains manageable.",
    audioText: "We can accept the new client project provided that they agree to our timeline, as long as our current workload remains manageable.",
    explanation: "Accurately integrate conditional connectors 'provided that' and 'as long as'."
  },
  {
    id: "a2_u12_l169_a10",
    type: "mediation",
    prompt: "Translate this company travel policy for an incoming team member: 'कंपनी आपके होटल के खर्च का भुगतान करेगी बशर्ते आप सभी मूल रसीदें जमा करें।' Provide the best translation.",
    sourceSentence: "कंपनी आपके होटल के खर्च का भुगतान करेगी बशर्ते आप सभी मूल रसीदें जमा करें।",
    targetSentence: "The company will reimburse your hotel expenses provided that you submit all original receipts.",
    options: [
      { id: "o1", text: "The company will reimburse your hotel expenses provided that you submit all original receipts.", isCorrect: true },
      { id: "o2", text: "The company will not pay hotel expenses unless receipts are lost.", isCorrect: false },
      { id: "o3", text: "The company pays hotel in case you submit no receipts.", isCorrect: false }
    ],
    correctAnswer: "The company will reimburse your hotel expenses provided that you submit all original receipts.",
    explanation: "'provided that you submit all original receipts' accurately translates 'बशर्ते आप सभी मूल रसीदें जमा करें'."
  }
];

// =========================================================================
// LESSON 170: Logistics, Group Travel Planning & Itinerary Coordination
// =========================================================================
const l170_practice: Exercise[] = [
  {
    id: "a2_u12_l170_p11",
    type: "reading",
    prompt: "Read the group conference itinerary and answer the question:\n\"Conference Travel Schedule: The team will depart from Terminal 2 on Flight BA108 at 09:30 AM. As soon as we land at Heathrow Airport, our driver will meet us at the arrivals hall. We will check in at the hotel before we attend the opening keynote at 3:00 PM. Please note: Once everyone arrives at the hotel lobby, team badges will be distributed.\"\nWhen will the team badges be distributed?",
    sourceSentence: "When will the team badges be distributed?",
    targetSentence: "Once everyone arrives at the hotel lobby.",
    options: [
      { id: "o1", text: "Once everyone arrives at the hotel lobby.", isCorrect: true },
      { id: "o2", text: "Before departing from Terminal 2.", isCorrect: false },
      { id: "o3", text: "After the opening keynote finishes at night.", isCorrect: false },
      { id: "o4", text: "Only when the conference is over.", isCorrect: false }
    ],
    correctAnswer: "Once everyone arrives at the hotel lobby.",
    explanation: "The text states: 'Once everyone arrives at the hotel lobby, team badges will be distributed.'"
  },
  {
    id: "a2_u12_l170_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Explain group travel plans using future time clauses ('as soon as', 'before', 'when').",
    sourceSentence: "As soon as our flight lands, we will collect our luggage and meet the shuttle driver outside Terminal 3.",
    targetSentence: "As soon as our flight lands, we will collect our luggage and meet the shuttle driver outside Terminal 3.",
    audioText: "As soon as our flight lands, we will collect our luggage and meet the shuttle driver outside Terminal 3.",
    explanation: "Notice the Present Simple in the time clause ('lands') paired with future in the main clause ('will collect')."
  },
  {
    id: "a2_u12_l170_p13",
    type: "match_pairs",
    prompt: "Match group travel and logistics terms with their definitions:",
    options: [
      { id: "m1", text: "itinerary" },
      { id: "m1_m", text: "detailed plan or route of a journey" },
      { id: "m2", text: "layover" },
      { id: "m2_m", text: "period of waiting between connecting flights" },
      { id: "m3", text: "charter" },
      { id: "m3_m", text: "hire an entire vehicle or plane for private group use" },
      { id: "m4", text: "shuttle" },
      { id: "m4_m", text: "vehicle traveling regularly between two points" }
    ]
  },
  {
    id: "a2_u12_l170_p14",
    type: "mediation",
    prompt: "Mediate this travel update in English for your international group: 'होटल पहुँचते ही मैं सभी को कमरे की चाबियाँ सौंप दूँगा।' Choose the best translation.",
    sourceSentence: "होटल पहुँचते ही मैं सभी को कमरे की चाबियाँ सौंप दूँगा।",
    targetSentence: "As soon as we arrive at the hotel, I will hand out the room keys to everyone.",
    options: [
      { id: "o1", text: "As soon as we arrive at the hotel, I will hand out the room keys to everyone.", isCorrect: true },
      { id: "o2", text: "When we will arrive at hotel, I handed out keys yesterday.", isCorrect: false },
      { id: "o3", text: "Before we arrived at hotel, I will hand out room keys.", isCorrect: false }
    ],
    correctAnswer: "As soon as we arrive at the hotel, I will hand out the room keys to everyone.",
    explanation: "'As soon as we arrive' uses Present Simple for future time clause, followed by 'I will hand out'."
  },
  {
    id: "a2_u12_l170_p15",
    type: "error_correction",
    prompt: "Identify and correct the future time clause error:",
    sourceSentence: "When we will land at the airport, we will call our tour guide.",
    targetSentence: "When we land at the airport, we will call our tour guide.",
    options: [
      { id: "o1", text: "When we land at the airport, we will call our tour guide.", isCorrect: true },
      { id: "o2", text: "When we landed at the airport, we will call our tour guide.", isCorrect: false },
      { id: "o3", text: "When we will landing at airport, we call our guide.", isCorrect: false }
    ],
    correctAnswer: "When we land at the airport, we will call our tour guide.",
    explanation: "In future time clauses with 'when', use the Present Simple ('land'), not 'will land'."
  },
  {
    id: "a2_u12_l170_p16",
    type: "listening",
    prompt: "Listen to the travel coordinator and identify the meeting point:",
    audioText: "Attention group members: After we collect our baggage at carousel four, please gather near the information desk in the central hall so we can board the private bus together.",
    targetSentence: "Near the information desk in the central hall.",
    options: [
      { id: "o1", text: "Near the information desk in the central hall.", isCorrect: true },
      { id: "o2", text: "Inside the aircraft cockpit.", isCorrect: false },
      { id: "o3", text: "At the hotel swimming pool.", isCorrect: false },
      { id: "o4", text: "Outside on the runway.", isCorrect: false }
    ],
    correctAnswer: "Near the information desk in the central hall.",
    explanation: "The coordinator directs the group to 'gather near the information desk in the central hall'."
  },
  {
    id: "a2_u12_l170_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a travel itinerary using future time linkers ('as soon as', 'before', 'after'):",
    targetSentence: "Before we board the train tomorrow morning, we will buy breakfast at the station café. As soon as we reach Kyoto, we will check into our hotel.",
    audioText: "Before we board the train tomorrow morning, we will buy breakfast at the station café. As soon as we reach Kyoto, we will check into our hotel."
  },
  {
    id: "a2_u12_l170_p18",
    type: "dialogue_completion",
    prompt: "Complete the travel coordination conversation:\nTravel Leader: 'What is our schedule after the flight lands in Mumbai?'\nAssistant: '________________________'",
    sourceSentence: "What is our schedule after the flight lands in Mumbai?",
    targetSentence: "As soon as we clear customs, our pre-booked taxi will take us directly to the exhibition center.",
    options: [
      { id: "o1", text: "As soon as we clear customs, our pre-booked taxi will take us directly to the exhibition center.", isCorrect: true },
      { id: "o2", text: "We cancelled the trip last week because Mumbai was closed.", isCorrect: false },
      { id: "o3", text: "Before we will clear customs, we already arrived yesterday.", isCorrect: false }
    ],
    correctAnswer: "As soon as we clear customs, our pre-booked taxi will take us directly to the exhibition center.",
    explanation: "'As soon as we clear customs...' gives a clear, grammatically accurate itinerary response."
  },
  {
    id: "a2_u12_l170_p19",
    type: "word_ordering",
    prompt: "Reorder the words to describe an arrival sequence:",
    sourceSentence: "We will call the hotel as soon as our train departs.",
    targetSentence: "We will call the hotel as soon as our train departs.",
    tokens: ["We", "will", "call", "the", "hotel", "as", "soon", "as", "our", "train", "departs", "."],
    correctOrder: ["We", "will", "call", "the", "hotel", "as", "soon", "as", "our", "train", "departs", "."],
    explanation: "Structure: Main clause ('We will call the hotel') + as soon as + Present Simple time clause ('our train departs')."
  },
  {
    id: "a2_u12_l170_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct verb form:",
    sourceSentence: "Before the conference [blank] (begin), we will test the audio equipment.",
    targetSentence: "Before the conference begins, we will test the audio equipment.",
    text: "Before the conference [blank] we will test the audio equipment.",
    options: [
      { id: "o1", text: "begins", isCorrect: true },
      { id: "o2", text: "will begin", isCorrect: false },
      { id: "o3", text: "began", isCorrect: false },
      { id: "o4", text: "is beginning", isCorrect: false }
    ],
    correctAnswer: "begins",
    explanation: "Future time clauses with 'before' take Present Simple ('begins') for singular subject 'conference'."
  },
  {
    id: "a2_u12_l170_p21",
    type: "translation",
    prompt: "Translate to English: 'होटल छोड़ने से पहले अपने पासपोर्ट की जांच कर लें।'",
    sourceSentence: "होटल छोड़ने से पहले अपने पासपोर्ट की जांच कर लें।",
    targetSentence: "Check your passports before you leave the hotel.",
    explanation: "Imperative with time clause: 'Check your passports before you leave the hotel.'."
  },
  {
    id: "a2_u12_l170_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give directions to your travel group upon arrival.",
    sourceSentence: "Once everyone collects their luggage, please follow me to the exit where our private shuttle is waiting.",
    targetSentence: "Once everyone collects their luggage, please follow me to the exit where our private shuttle is waiting.",
    audioText: "Once everyone collects their luggage, please follow me to the exit where our private shuttle is waiting.",
    explanation: "Practice smooth cadence on 'Once everyone collects their luggage...'."
  }
];

const l170_review: Exercise[] = [
  {
    id: "a2_u12_l170_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 7 - Travel & Directions): Which sentence correctly asks for directions to the train station?",
    options: [
      { id: "o1", text: "Excuse me, could you tell me the way to the nearest railway station?", isCorrect: true },
      { id: "o2", text: "Where is station going to be yesterday?", isCorrect: false },
      { id: "o3", text: "Tell me station right now immediately.", isCorrect: false },
      { id: "o4", text: "Can you go to station for me please?", isCorrect: false }
    ],
    correctAnswer: "Excuse me, could you tell me the way to the nearest railway station?",
    explanation: "'Excuse me, could you tell me the way to...?' is a polite, standard inquiry."
  },
  {
    id: "a2_u12_l170_r8",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct time preposition: 'Our flight is scheduled to depart [blank] 06:45 AM.'",
    sourceSentence: "Our flight is scheduled to depart [blank] 06:45 AM.",
    targetSentence: "Our flight is scheduled to depart at 06:45 AM.",
    text: "Our flight is scheduled to depart [blank] 06:45 AM.",
    options: [
      { id: "o1", text: "at", isCorrect: true },
      { id: "o2", text: "on", isCorrect: false },
      { id: "o3", text: "in", isCorrect: false },
      { id: "o4", text: "by", isCorrect: false }
    ],
    correctAnswer: "at",
    explanation: "Exact times of the day require preposition 'at'."
  },
  {
    id: "a2_u12_l170_r9",
    type: "error_correction",
    prompt: "Correct the tense in this travel plan:",
    sourceSentence: "As soon as we will check in, we will go to the dining room.",
    targetSentence: "As soon as we check in, we will go to the dining room.",
    options: [
      { id: "o1", text: "As soon as we check in, we will go to the dining room.", isCorrect: true },
      { id: "o2", text: "As soon as we checked in, we will go to the dining room.", isCorrect: false },
      { id: "o3", text: "As soon as we will checking in, we will go.", isCorrect: false }
    ],
    correctAnswer: "As soon as we check in, we will go to the dining room.",
    explanation: "Clauses with 'as soon as' referring to the future use Present Simple ('check in')."
  },
  {
    id: "a2_u12_l170_r10",
    type: "translation",
    prompt: "Translate to English: 'ट्रेन आने से पहले हम टिकट खरीद लेंगे।'",
    sourceSentence: "ट्रेन आने से पहले हम टिकट खरीद लेंगे।",
    targetSentence: "We will buy tickets before the train arrives.",
    explanation: "'We will buy tickets before the train arrives' (Present Simple in 'before' clause)."
  }
];

const l170_assessment: Exercise[] = [
  {
    id: "a2_u12_l170_a7",
    type: "multiple_choice",
    prompt: "Which sentence correctly coordinates a group itinerary using future time clauses?",
    options: [
      { id: "o1", text: "After we finish breakfast tomorrow, we will visit the historical museum.", isCorrect: true },
      { id: "o2", text: "After we will finish breakfast tomorrow, we visit museum.", isCorrect: false },
      { id: "o3", text: "After we finished breakfast tomorrow, we will visit.", isCorrect: false },
      { id: "o4", text: "We will visit museum after we will finish breakfast.", isCorrect: false }
    ],
    correctAnswer: "After we finish breakfast tomorrow, we will visit the historical museum.",
    explanation: "'After + Present Simple ('finish'), will + Verb ('will visit')' is the correct rule."
  },
  {
    id: "a2_u12_l170_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate time conjunction:",
    sourceSentence: "Please make sure your seatbelt is fastened [blank] the plane takes off.",
    targetSentence: "Please make sure your seatbelt is fastened before the plane takes off.",
    text: "Please make sure your seatbelt is fastened [blank] the plane takes off.",
    options: [
      { id: "o1", text: "before", isCorrect: true },
      { id: "o2", text: "although", isCorrect: false },
      { id: "o3", text: "unless", isCorrect: false },
      { id: "o4", text: "whereas", isCorrect: false }
    ],
    correctAnswer: "before",
    explanation: "'before the plane takes off' indicates the prior action required."
  },
  {
    id: "a2_u12_l170_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence itinerary announcement to your travel group for tomorrow's departure.",
    sourceSentence: "Tomorrow morning, our bus will leave the hotel at 8:00 AM sharp. As soon as we arrive at the exhibition hall, we will distribute your entry passes.",
    targetSentence: "Tomorrow morning, our bus will leave the hotel at 8:00 AM sharp. As soon as we arrive at the exhibition hall, we will distribute your entry passes.",
    audioText: "Tomorrow morning, our bus will leave the hotel at 8:00 AM sharp. As soon as we arrive at the exhibition hall, we will distribute your entry passes.",
    explanation: "Demonstrate accurate future time coordination and professional delivery."
  },
  {
    id: "a2_u12_l170_a10",
    type: "mediation",
    prompt: "Translate this travel announcement for non-Hindi speaking delegates: 'जब तक सभी प्रतिनिधि बस में नहीं बैठ जाते, हम हवाई अड्डे के लिए रवाना नहीं होंगे।' Provide the best translation.",
    sourceSentence: "जब तक सभी प्रतिनिधि बस में नहीं बैठ जाते, हम हवाई अड्डे के लिए रवाना नहीं होंगे।",
    targetSentence: "We will not depart for the airport until all delegates are seated on the bus.",
    options: [
      { id: "o1", text: "We will not depart for the airport until all delegates are seated on the bus.", isCorrect: true },
      { id: "o2", text: "We will leave without delegates because bus is full.", isCorrect: false },
      { id: "o3", text: "We departed yesterday before delegates arrived at airport.", isCorrect: false }
    ],
    correctAnswer: "We will not depart for the airport until all delegates are seated on the bus.",
    explanation: "'until all delegates are seated' accurately translates 'जब तक सभी प्रतिनिधि बस में नहीं बैठ जाते'."
  }
];

export function runEnrichment166to170() {
  console.log('--- ENRICHING LESSONS 166 - 170 (UNIT 12) ---');
  enrichUnit12LessonData('lesson_a2_12_166', LESSON_A2_12_166_DATA, l166_practice, l166_review, l166_assessment);
  enrichUnit12LessonData('lesson_a2_12_167', LESSON_A2_12_167_DATA, l167_practice, l167_review, l167_assessment);
  enrichUnit12LessonData('lesson_a2_12_168', LESSON_A2_12_168_DATA, l168_practice, l168_review, l168_assessment);
  enrichUnit12LessonData('lesson_a2_12_169', LESSON_A2_12_169_DATA, l169_practice, l169_review, l169_assessment);
  enrichUnit12LessonData('lesson_a2_12_170', LESSON_A2_12_170_DATA, l170_practice, l170_review, l170_assessment);
  console.log('--- COMPLETED 166 - 170 ---');
}

runEnrichment166to170();
