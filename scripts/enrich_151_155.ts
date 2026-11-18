import { Exercise } from '../src/types';
import { LESSON_A2_11_151_DATA } from '../src/data/lessons/lesson_a2_11_151';
import { LESSON_A2_11_152_DATA } from '../src/data/lessons/lesson_a2_11_152';
import { LESSON_A2_11_153_DATA } from '../src/data/lessons/lesson_a2_11_153';
import { LESSON_A2_11_154_DATA } from '../src/data/lessons/lesson_a2_11_154';
import { LESSON_A2_11_155_DATA } from '../src/data/lessons/lesson_a2_11_155';
import { enrichUnit11LessonData } from './enrich_unit11_helper';

// =========================================================================
// LESSON 151: Teamwork Dynamics and Collaboration
// =========================================================================
const l151_practice: Exercise[] = [
  {
    id: "a2_u11_l151_p16",
    type: "reading",
    prompt: "Read the project kickoff update and answer the question:\n\"Team Update: To deliver the client demo on time, Sarah will lead the backend integrations whereas Liam will design the interactive dashboard. Both engineers will meet daily at 9:30 AM in order to resolve technical blockers quickly. Everyone is expected to update the shared sprint board before leaving each evening.\"\nWhy will Sarah and Liam meet every morning at 9:30 AM?",
    sourceSentence: "Why will Sarah and Liam meet every morning at 9:30 AM?",
    targetSentence: "In order to resolve technical blockers quickly.",
    options: [
      { id: "o1", text: "In order to resolve technical blockers quickly.", isCorrect: true },
      { id: "o2", text: "To present the finished project to the client.", isCorrect: false },
      { id: "o3", text: "To interview new frontend designers.", isCorrect: false },
      { id: "o4", text: "Because the sprint board was deleted.", isCorrect: false }
    ],
    correctAnswer: "In order to resolve technical blockers quickly.",
    explanation: "The text explicitly states: 'Both engineers will meet daily at 9:30 AM in order to resolve technical blockers quickly.'"
  },
  {
    id: "a2_u11_l151_p17",
    type: "speaking",
    prompt: "Speak clearly and professionally: Explain why your team scheduled an extra review meeting.",
    sourceSentence: "We scheduled an extra review meeting in order to ensure all project deliverables meet quality standards.",
    targetSentence: "We scheduled an extra review meeting in order to ensure all project deliverables meet quality standards.",
    audioText: "We scheduled an extra review meeting in order to ensure all project deliverables meet quality standards.",
    explanation: "Emphasize clear pronunciation of 'in order to ensure' and 'deliverables'."
  },
  {
    id: "a2_u11_l151_p18",
    type: "match_pairs",
    prompt: "Match the teamwork collocations with their definitions:",
    options: [
      { id: "m1", text: "delegate tasks" },
      { id: "m1_m", text: "assign responsibilities to team members" },
      { id: "m2", text: "meet a deadline" },
      { id: "m2_m", text: "complete work by the target date" },
      { id: "m3", text: "resolve a bottleneck" },
      { id: "m3_m", text: "remove an obstacle slowing down progress" },
      { id: "m4", text: "keep someone in the loop" },
      { id: "m4_m", text: "keep someone continuously informed" }
    ]
  },
  {
    id: "a2_u11_l151_p19",
    type: "mediation",
    prompt: "Your colleague needs help explaining a teamwork instruction in English: 'हमने कार्यभार को विभाजित किया है ताकि कोई भी टीम सदस्य तनावग्रस्त न हो।' Provide the most accurate translation.",
    sourceSentence: "हमने कार्यभार को विभाजित किया है ताकि कोई भी टीम सदस्य तनावग्रस्त न हो।",
    targetSentence: "We divided the workload in order that no team member gets overwhelmed.",
    options: [
      { id: "o1", text: "We divided the workload in order that no team member gets overwhelmed.", isCorrect: true },
      { id: "o2", text: "We stopped working because team member was overwhelmed.", isCorrect: false },
      { id: "o3", text: "We do not divide work so everyone works alone.", isCorrect: false }
    ],
    correctAnswer: "We divided the workload in order that no team member gets overwhelmed.",
    explanation: "'in order that / so that' correctly conveys 'ताकि' to express purpose."
  },
  {
    id: "a2_u11_l151_p20",
    type: "error_correction",
    prompt: "Identify and correct the grammatical mistake in expressing purpose:",
    sourceSentence: "He stayed late at the office for finish the quarterly presentation.",
    targetSentence: "He stayed late at the office to finish the quarterly presentation.",
    options: [
      { id: "o1", text: "He stayed late at the office to finish the quarterly presentation.", isCorrect: true },
      { id: "o2", text: "He stayed late at the office for to finish the quarterly presentation.", isCorrect: false },
      { id: "o3", text: "He stayed late at the office for finished the quarterly presentation.", isCorrect: false }
    ],
    correctAnswer: "He stayed late at the office to finish the quarterly presentation.",
    explanation: "To express purpose with a verb, use the infinitive ('to finish' or 'in order to finish'), not 'for + infinitive'."
  },
  {
    id: "a2_u11_l151_p21",
    type: "listening",
    prompt: "Listen to the project manager and identify who will draft the customer onboarding guide:",
    audioText: "Marcus is responsible for testing the server, whereas Elena will write the customer onboarding guide to help new users.",
    targetSentence: "Elena will write the customer onboarding guide.",
    options: [
      { id: "o1", text: "Elena will write the customer onboarding guide.", isCorrect: true },
      { id: "o2", text: "Marcus will write the customer onboarding guide.", isCorrect: false },
      { id: "o3", text: "Both Elena and Marcus are testing the server.", isCorrect: false }
    ],
    correctAnswer: "Elena will write the customer onboarding guide.",
    explanation: "The speaker clarifies: 'whereas Elena will write the customer onboarding guide to help new users.'"
  },
  {
    id: "a2_u11_l151_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you and a classmate or coworker divided tasks to complete a project on time:",
    targetSentence: "I analyzed the survey data to identify user preferences, whereas my partner prepared the summary slides. We collaborated closely in order to finish before the deadline.",
    audioText: "I analyzed the survey data to identify user preferences, whereas my partner prepared the summary slides. We collaborated closely in order to finish before the deadline."
  }
];

const l151_review: Exercise[] = [
  {
    id: "a2_u11_l151_r6",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct purpose connector: 'We hired an external consultant ___ review our data security.'",
    sourceSentence: "We hired an external consultant in order to review our data security.",
    targetSentence: "We hired an external consultant in order to review our data security.",
    options: [
      { id: "o1", text: "in order to", isCorrect: true },
      { id: "o2", text: "for to", isCorrect: false },
      { id: "o3", text: "because of", isCorrect: false },
      { id: "o4", text: "due to", isCorrect: false }
    ],
    correctAnswer: "in order to",
    explanation: "'In order to + base verb' correctly shows intention and purpose."
  },
  {
    id: "a2_u11_l151_r7",
    type: "word_ordering",
    prompt: "Reorder the words to form a grammatically correct sentence:",
    targetSentence: "She arrived early in order to prepare the presentation slides.",
    options: [
      { id: "w1", text: "She" },
      { id: "w2", text: "arrived" },
      { id: "w3", text: "early" },
      { id: "w4", text: "in" },
      { id: "w5", text: "order" },
      { id: "w6", text: "to" },
      { id: "w7", text: "prepare" },
      { id: "w8", text: "the" },
      { id: "w9", text: "presentation" },
      { id: "w10", text: "slides." }
    ],
    correctAnswer: "She arrived early in order to prepare the presentation slides."
  },
  {
    id: "a2_u11_l151_r8",
    type: "dialogue_completion",
    prompt: "Choose the most appropriate response to coordinate task delegation:",
    sourceSentence: "Who will handle the client feedback while David is on vacation?",
    targetSentence: "I can take over client communications, whereas Maya will manage the technical tickets.",
    options: [
      { id: "o1", text: "I can take over client communications, whereas Maya will manage the technical tickets.", isCorrect: true },
      { id: "o2", text: "David left for vacation yesterday morning at seven.", isCorrect: false },
      { id: "o3", text: "We do not like receiving feedback from clients.", isCorrect: false }
    ],
    correctAnswer: "I can take over client communications, whereas Maya will manage the technical tickets.",
    explanation: "This smoothly allocates the duties using the contrastive conjunction 'whereas'."
  },
  {
    id: "a2_u11_l151_r9",
    type: "translation",
    prompt: "Translate into English: 'हम परियोजना को समय पर पूरा करने के लिए एक साथ काम कर रहे हैं।'",
    sourceSentence: "हम परियोजना को समय पर पूरा करने के लिए एक साथ काम कर रहे हैं।",
    targetSentence: "We are working together in order to complete the project on time.",
    options: [
      { id: "o1", text: "We are working together in order to complete the project on time.", isCorrect: true },
      { id: "o2", text: "We work together because project was completed yesterday.", isCorrect: false },
      { id: "o3", text: "We are working together for completing on time project.", isCorrect: false }
    ],
    correctAnswer: "We are working together in order to complete the project on time.",
    explanation: "'in order to complete' captures 'पूरा करने के लिए'."
  },
  {
    id: "a2_u11_l151_r10",
    type: "multiple_choice",
    prompt: "Select the sentence that contains NO grammatical errors:",
    targetSentence: "Both the engineering and marketing teams must collaborate to reach our target.",
    options: [
      { id: "o1", text: "Both the engineering and marketing teams must collaborate to reach our target.", isCorrect: true },
      { id: "o2", text: "Both the engineering or marketing teams must collaborate for reach our target.", isCorrect: false },
      { id: "o3", text: "Both engineering and marketing team must collaborating in order reaching our target.", isCorrect: false }
    ],
    correctAnswer: "Both the engineering and marketing teams must collaborate to reach our target.",
    explanation: "'Both... and' pairs plural subjects, followed by modal 'must' + bare infinitive 'collaborate' + infinitive of purpose 'to reach'."
  }
];

const l151_assess: Exercise[] = [
  {
    id: "a2_u11_l151_a6",
    type: "listening",
    prompt: "Listen to the team debrief and answer: What is the primary purpose of the new checklist?",
    audioText: "We implemented this five-step checklist in order to reduce configuration errors before software release.",
    targetSentence: "To reduce configuration errors before software release.",
    options: [
      { id: "o1", text: "To reduce configuration errors before software release.", isCorrect: true },
      { id: "o2", text: "To increase software licensing costs.", isCorrect: false },
      { id: "o3", text: "To replace all human software testers.", isCorrect: false }
    ],
    correctAnswer: "To reduce configuration errors before software release.",
    explanation: "The audio explicitly says 'in order to reduce configuration errors'."
  },
  {
    id: "a2_u11_l151_a7",
    type: "error_correction",
    prompt: "Identify the mistake in the sentence: 'They created a group chat for to communicate faster.'",
    sourceSentence: "They created a group chat for to communicate faster.",
    targetSentence: "They created a group chat to communicate faster.",
    options: [
      { id: "o1", text: "They created a group chat to communicate faster.", isCorrect: true },
      { id: "o2", text: "They created a group chat for communicate faster.", isCorrect: false },
      { id: "o3", text: "They creating a group chat to communicating faster.", isCorrect: false }
    ],
    correctAnswer: "They created a group chat to communicate faster.",
    explanation: "Never combine 'for' with 'to' in English; use the infinitive 'to communicate'."
  },
  {
    id: "a2_u11_l151_a8",
    type: "mediation",
    prompt: "Explain this team decision in English: 'हमने समय बचाने के लिए कार्यों को दो भागों में बांटा।' Choose the best sentence:",
    sourceSentence: "हमने समय बचाने के लिए कार्यों को दो भागों में बांटा।",
    targetSentence: "We divided the tasks into two parts in order to save time.",
    options: [
      { id: "o1", text: "We divided the tasks into two parts in order to save time.", isCorrect: true },
      { id: "o2", text: "We divided tasks because of we lost time.", isCorrect: false },
      { id: "o3", text: "We are dividing tasks for saving time yesterday.", isCorrect: false }
    ],
    correctAnswer: "We divided the tasks into two parts in order to save time.",
    explanation: "Past tense 'divided' + infinitive of purpose 'in order to save time'."
  },
  {
    id: "a2_u11_l151_a9",
    type: "speaking",
    prompt: "Speak aloud: Reassure your team lead that you will coordinate with marketing to finish the flyer.",
    sourceSentence: "I will coordinate with the marketing team today in order to finalize the promotional flyer.",
    targetSentence: "I will coordinate with the marketing team today in order to finalize the promotional flyer.",
    audioText: "I will coordinate with the marketing team today in order to finalize the promotional flyer.",
    explanation: "Focus on clear phrasing of 'coordinate with' and 'in order to finalize'."
  },
  {
    id: "a2_u11_l151_a10",
    type: "personal_production",
    prompt: "Write a short summary (2 sentences) explaining how you organize team projects:",
    targetSentence: "At the start of every project, we establish clear milestones to monitor progress. We also hold weekly check-ins in order to assist teammates who need support.",
    audioText: "At the start of every project, we establish clear milestones to monitor progress. We also hold weekly check-ins in order to assist teammates who need support."
  }
];

// =========================================================================
// LESSON 152: Constructive Feedback and Reasons
// =========================================================================
const l152_practice: Exercise[] = [
  {
    id: "a2_u11_l152_p16",
    type: "reading",
    prompt: "Read the manager's performance feedback email and answer the question:\n\"Dear Alex,\nYour client presentation was very well structured and engaging. However, due to several technical glitches with the video links, some attendees lost focus near the end. You might want to test all embedded media files in the conference room beforehand. Overall, great work on the content!\"\nWhat specific recommendation does the manager give to Alex?",
    sourceSentence: "What specific recommendation does the manager give to Alex?",
    targetSentence: "To test embedded media in the conference room beforehand.",
    options: [
      { id: "o1", text: "To test embedded media in the conference room beforehand.", isCorrect: true },
      { id: "o2", text: "To completely rewrite the presentation content.", isCorrect: false },
      { id: "o3", text: "To cancel future client meetings.", isCorrect: false },
      { id: "o4", text: "To hire an outside video production agency.", isCorrect: false }
    ],
    correctAnswer: "To test embedded media in the conference room beforehand.",
    explanation: "The manager suggests: 'You might want to test all embedded media files in the conference room beforehand.'"
  },
  {
    id: "a2_u11_l152_p17",
    type: "speaking",
    prompt: "Speak politely: Offer constructive feedback to a peer about formatting their report.",
    sourceSentence: "The analysis is excellent, but you might want to simplify the charts so the key conclusions are easier to read.",
    targetSentence: "The analysis is excellent, but you might want to simplify the charts so the key conclusions are easier to read.",
    audioText: "The analysis is excellent, but you might want to simplify the charts so the key conclusions are easier to read.",
    explanation: "Softened constructive feedback using 'you might want to simplify'."
  },
  {
    id: "a2_u11_l152_p18",
    type: "match_pairs",
    prompt: "Match the cause connectors with their grammatical structures:",
    options: [
      { id: "m1", text: "due to / because of" },
      { id: "m1_m", text: "followed by a noun phrase or gerund" },
      { id: "m2", text: "because / since" },
      { id: "m2_m", text: "followed by a full subject + verb clause" },
      { id: "m3", text: "you might want to" },
      { id: "m3_m", text: "polite suggestion followed by base verb" },
      { id: "m4", text: "I see your point, but" },
      { id: "m4_m", text: "diplomatic acknowledgment before offering a counterpoint" }
    ]
  },
  {
    id: "a2_u11_l152_p19",
    type: "mediation",
    prompt: "Your colleague needs to deliver constructive feedback in English: 'भारी बारिश के कारण हमारी डिलीवरी में देरी हुई, लेकिन हमने तुरंत ग्राहकों को सूचित किया।' How do you say this in professional English?",
    sourceSentence: "भारी बारिश के कारण हमारी डिलीवरी में देरी हुई, लेकिन हमने तुरंत ग्राहकों को सूचित किया।",
    targetSentence: "Due to heavy rain, our deliveries were delayed, but we notified the customers immediately.",
    options: [
      { id: "o1", text: "Due to heavy rain, our deliveries were delayed, but we notified the customers immediately.", isCorrect: true },
      { id: "o2", text: "Because heavy rain delivery was delayed but we forgot customer.", isCorrect: false },
      { id: "o3", text: "Owing rain our deliveries canceled without customer notification.", isCorrect: false }
    ],
    correctAnswer: "Due to heavy rain, our deliveries were delayed, but we notified the customers immediately.",
    explanation: "'Due to + noun phrase (heavy rain)' accurately translates 'भारी बारिश के कारण'."
  },
  {
    id: "a2_u11_l152_p20",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this feedback statement:",
    sourceSentence: "The flight was canceled because of the pilot was sick.",
    targetSentence: "The flight was canceled because the pilot was sick.",
    options: [
      { id: "o1", text: "The flight was canceled because the pilot was sick.", isCorrect: true },
      { id: "o2", text: "The flight was canceled because of the pilot being sick was.", isCorrect: false },
      { id: "o3", text: "The flight was canceled due to the pilot was sick.", isCorrect: false }
    ],
    correctAnswer: "The flight was canceled because the pilot was sick.",
    explanation: "Use 'because' before a full clause ('the pilot was sick'). 'Because of' or 'due to' requires a noun phrase ('the pilot's illness')."
  },
  {
    id: "a2_u11_l152_p21",
    type: "listening",
    prompt: "Listen to the supervisor's comment and identify the reason for the rescheduling:",
    audioText: "Owing to unexpected maintenance on the main server, our product training session has been moved to Thursday morning.",
    targetSentence: "Unexpected maintenance on the main server.",
    options: [
      { id: "o1", text: "Unexpected maintenance on the main server.", isCorrect: true },
      { id: "o2", text: "The trainer was stuck in airport traffic.", isCorrect: false },
      { id: "o3", text: "The company decided to cancel product training permanently.", isCorrect: false }
    ],
    correctAnswer: "Unexpected maintenance on the main server.",
    explanation: "The speaker uses 'Owing to unexpected maintenance on the main server'."
  },
  {
    id: "a2_u11_l152_p22",
    type: "personal_production",
    prompt: "Write 2 sentences providing polite feedback to a teammate on how they can improve their draft document:",
    targetSentence: "Your draft provides thorough data points. However, due to the lengthy paragraphs, you might want to break the text into bullet points for clarity.",
    audioText: "Your draft provides thorough data points. However, due to the lengthy paragraphs, you might want to break the text into bullet points for clarity."
  }
];

const l152_review: Exercise[] = [
  {
    id: "a2_u11_l152_r6",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate connector: 'The outdoor banquet was moved indoors ___ the sudden thunderstorm.'",
    sourceSentence: "The outdoor banquet was moved indoors because of the sudden thunderstorm.",
    targetSentence: "The outdoor banquet was moved indoors because of the sudden thunderstorm.",
    options: [
      { id: "o1", text: "because of", isCorrect: true },
      { id: "o2", text: "because", isCorrect: false },
      { id: "o3", text: "since that", isCorrect: false },
      { id: "o4", text: "so that", isCorrect: false }
    ],
    correctAnswer: "because of",
    explanation: "'Because of' is followed by the noun phrase 'the sudden thunderstorm'."
  },
  {
    id: "a2_u11_l152_r7",
    type: "word_ordering",
    prompt: "Rearrange the words to make a diplomatic recommendation:",
    targetSentence: "You might want to double check the budget calculations.",
    options: [
      { id: "w1", text: "You" },
      { id: "w2", text: "might" },
      { id: "w3", text: "want" },
      { id: "w4", text: "to" },
      { id: "w5", text: "double" },
      { id: "w6", text: "check" },
      { id: "w7", text: "the" },
      { id: "w8", text: "budget" },
      { id: "w9", text: "calculations." }
    ],
    correctAnswer: "You might want to double check the budget calculations."
  },
  {
    id: "a2_u11_l152_r8",
    type: "dialogue_completion",
    prompt: "Choose the most polite and constructive response to a coworker's rough draft:",
    sourceSentence: "What do you think of this first version of our website homepage?",
    targetSentence: "The layout is very clean, but why don't you make the call-to-action button slightly larger?",
    options: [
      { id: "o1", text: "The layout is very clean, but why don't you make the call-to-action button slightly larger?", isCorrect: true },
      { id: "o2", text: "This homepage is terrible and nobody will visit our website.", isCorrect: false },
      { id: "o3", text: "I did not open the link you sent yesterday.", isCorrect: false }
    ],
    correctAnswer: "The layout is very clean, but why don't you make the call-to-action button slightly larger?",
    explanation: "Combines praise with a gentle suggestion using 'why don't you...'."
  },
  {
    id: "a2_u11_l152_r9",
    type: "translation",
    prompt: "Translate into English: 'खराब मौसम के कारण कार्यक्रम रद्द कर दिया गया था।'",
    sourceSentence: "खराब मौसम के कारण कार्यक्रम रद्द कर दिया गया था।",
    targetSentence: "The event was canceled due to bad weather.",
    options: [
      { id: "o1", text: "The event was canceled due to bad weather.", isCorrect: true },
      { id: "o2", text: "The event canceled because bad weather was.", isCorrect: false },
      { id: "o3", text: "Due to bad weather event is canceling tomorrow.", isCorrect: false }
    ],
    correctAnswer: "The event was canceled due to bad weather.",
    explanation: "'due to bad weather' accurately expresses 'खराब मौसम के कारण'."
  },
  {
    id: "a2_u11_l152_r10",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'because of' vs 'because'?",
    targetSentence: "We postponed the launch because of budget constraints.",
    options: [
      { id: "o1", text: "We postponed the launch because of budget constraints.", isCorrect: true },
      { id: "o2", text: "We postponed the launch because budget constraints.", isCorrect: false },
      { id: "o3", text: "We postponed the launch because of we had no budget.", isCorrect: false }
    ],
    correctAnswer: "We postponed the launch because of budget constraints.",
    explanation: "'Because of + noun phrase (budget constraints)' is grammatically correct."
  }
];

const l152_assess: Exercise[] = [
  {
    id: "a2_u11_l152_a6",
    type: "listening",
    prompt: "Listen to the critique and choose the suggested improvement:",
    audioText: "I really like the tone of your article, but you might want to add two concrete real-world examples to support your conclusion.",
    targetSentence: "Add two concrete real-world examples.",
    options: [
      { id: "o1", text: "Add two concrete real-world examples.", isCorrect: true },
      { id: "o2", text: "Delete the entire conclusion paragraph.", isCorrect: false },
      { id: "o3", text: "Change the topic of the article completely.", isCorrect: false }
    ],
    correctAnswer: "Add two concrete real-world examples.",
    explanation: "The reviewer suggests adding two concrete real-world examples."
  },
  {
    id: "a2_u11_l152_a7",
    type: "error_correction",
    prompt: "Fix the error in this reason clause: 'Due to he was sick, he missed the team meeting.'",
    sourceSentence: "Due to he was sick, he missed the team meeting.",
    targetSentence: "Because he was sick, he missed the team meeting.",
    options: [
      { id: "o1", text: "Because he was sick, he missed the team meeting.", isCorrect: true },
      { id: "o2", text: "Due to sickness he was, he missed the team meeting.", isCorrect: false },
      { id: "o3", text: "Owing to he sick, he missed the team meeting.", isCorrect: false }
    ],
    correctAnswer: "Because he was sick, he missed the team meeting.",
    explanation: "'Because' is used before subject + verb clause ('he was sick')."
  },
  {
    id: "a2_u11_l152_a8",
    type: "mediation",
    prompt: "Your team lead wants to know why you recommend postponing a meeting: 'कम उपस्थिति के कारण, हमें बैठक स्थगित करनी चाहिए।' Explain this politely in English:",
    sourceSentence: "कम उपस्थिति के कारण, हमें बैठक स्थगित करनी चाहिए।",
    targetSentence: "Due to low attendance, we should postpone the meeting.",
    options: [
      { id: "o1", text: "Due to low attendance, we should postpone the meeting.", isCorrect: true },
      { id: "o2", text: "Because low attendance we must stop meetings forever.", isCorrect: false },
      { id: "o3", text: "Attendance is low so we canceled all future work.", isCorrect: false }
    ],
    correctAnswer: "Due to low attendance, we should postpone the meeting.",
    explanation: "'Due to low attendance, we should postpone the meeting' is accurate and natural."
  },
  {
    id: "a2_u11_l152_a9",
    type: "speaking",
    prompt: "Speak clearly: Politely explain that you understand your manager's concern, but suggest an alternative timeline.",
    sourceSentence: "I see your point about the deadline, but due to team capacity, could we submit the report by Monday morning instead?",
    targetSentence: "I see your point about the deadline, but due to team capacity, could we submit the report by Monday morning instead?",
    audioText: "I see your point about the deadline, but due to team capacity, could we submit the report by Monday morning instead?",
    explanation: "Natural negotiation and constructive feedback delivery."
  },
  {
    id: "a2_u11_l152_a10",
    type: "personal_production",
    prompt: "Write 2 sentences explaining a time you had to change your plans due to an unexpected event:",
    targetSentence: "Last Saturday, we planned to go hiking in the hills. However, due to continuous heavy rain, we decided to visit the local art museum instead.",
    audioText: "Last Saturday, we planned to go hiking in the hills. However, due to continuous heavy rain, we decided to visit the local art museum instead."
  }
];

// =========================================================================
// LESSON 153: Misunderstandings and Clarification
// =========================================================================
const l153_practice: Exercise[] = [
  {
    id: "a2_u11_l153_p16",
    type: "reading",
    prompt: "Read the email exchange and answer the question:\n\"Hi Team,\nTo avoid any confusion regarding tomorrow's client visit, could you clarify whether the lunch meeting will be held in conference room B or at the downtown bistro? What I mean is, we need to know whether catering has been booked in-house or if we should arrange transportation for the guests.\"\nWhat is the sender trying to clarify?",
    sourceSentence: "What is the sender trying to clarify?",
    targetSentence: "The exact location and catering arrangements for the lunch meeting.",
    options: [
      { id: "o1", text: "The exact location and catering arrangements for the lunch meeting.", isCorrect: true },
      { id: "o2", text: "The names of all client family members.", isCorrect: false },
      { id: "o3", text: "The budget for next year's office party.", isCorrect: false },
      { id: "o4", text: "The cancellation of tomorrow's client visit.", isCorrect: false }
    ],
    correctAnswer: "The exact location and catering arrangements for the lunch meeting.",
    explanation: "The sender asks whether lunch is in room B or downtown bistro to know if catering or transport is required."
  },
  {
    id: "a2_u11_l153_p17",
    type: "speaking",
    prompt: "Speak clearly and politely: Ask a colleague to clarify what they meant during the conference call.",
    sourceSentence: "Could you clarify what you meant by the revised timeline? Are we extending the release date by one week?",
    targetSentence: "Could you clarify what you meant by the revised timeline? Are we extending the release date by one week?",
    audioText: "Could you clarify what you meant by the revised timeline? Are we extending the release date by one week?",
    explanation: "Use polite rising intonation for indirect clarification requests."
  },
  {
    id: "a2_u11_l153_p18",
    type: "match_pairs",
    prompt: "Match the clarification phrases with their conversational functions:",
    options: [
      { id: "m1", text: "What I mean is..." },
      { id: "m1_m", text: "rephrasing your own point to prevent misinterpretation" },
      { id: "m2", text: "Could you clarify...?" },
      { id: "m2_m", text: "asking the speaker to provide additional detail" },
      { id: "m3", text: "If I understand correctly..." },
      { id: "m3_m", text: "confirming your interpretation of the speaker's statement" },
      { id: "m4", text: "Do you happen to know...?" },
      { id: "m4_m", text: "polite indirect question asking for information" }
    ]
  },
  {
    id: "a2_u11_l153_p19",
    type: "mediation",
    prompt: "Your friend wants to clarify a confusing schedule message in English: 'क्या आप स्पष्ट कर सकते हैं कि कार्यशाला 2 बजे शुरू होगी या 3 बजे?' Choose the best translation:",
    sourceSentence: "क्या आप स्पष्ट कर सकते हैं कि कार्यशाला 2 बजे शुरू होगी या 3 बजे?",
    targetSentence: "Could you clarify whether the workshop starts at two or three o'clock?",
    options: [
      { id: "o1", text: "Could you clarify whether the workshop starts at two or three o'clock?", isCorrect: true },
      { id: "o2", text: "You tell me workshop start two or three right now.", isCorrect: false },
      { id: "o3", text: "Workshop cancelled at two or three o'clock.", isCorrect: false }
    ],
    correctAnswer: "Could you clarify whether the workshop starts at two or three o'clock?",
    explanation: "Polite indirect question using 'Could you clarify whether...'."
  },
  {
    id: "a2_u11_l153_p20",
    type: "error_correction",
    prompt: "Identify the word order error in this indirect question:",
    sourceSentence: "Could you tell me where does the conference take place?",
    targetSentence: "Could you tell me where the conference takes place?",
    options: [
      { id: "o1", text: "Could you tell me where the conference takes place?", isCorrect: true },
      { id: "o2", text: "Could you tell me where does conference take place?", isCorrect: false },
      { id: "o3", text: "Could you tell me where is taking place the conference?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me where the conference takes place?",
    explanation: "Indirect questions use statement word order (where + subject + verb), not question auxiliary inversion ('does the conference take place')."
  },
  {
    id: "a2_u11_l153_p21",
    type: "listening",
    prompt: "Listen to the conversation and determine what the speaker is confirming:",
    audioText: "Just to make sure we're on the same page, you want me to send the preliminary report to the client before Friday noon, correct?",
    targetSentence: "Sending the preliminary report to the client before Friday noon.",
    options: [
      { id: "o1", text: "Sending the preliminary report to the client before Friday noon.", isCorrect: true },
      { id: "o2", text: "Canceling the Friday meeting with the client.", isCorrect: false },
      { id: "o3", text: "Writing a completely new report next month.", isCorrect: false }
    ],
    correctAnswer: "Sending the preliminary report to the client before Friday noon.",
    explanation: "The speaker confirms: 'you want me to send the preliminary report to the client before Friday noon, correct?'"
  },
  {
    id: "a2_u11_l153_p22",
    type: "personal_production",
    prompt: "Write 2 sentences repairing a potential misunderstanding with a client or colleague:",
    targetSentence: "I think there was a slight misunderstanding regarding the delivery date. What I meant was that the prototypes will be ready for testing by next Wednesday, not today.",
    audioText: "I think there was a slight misunderstanding regarding the delivery date. What I meant was that the prototypes will be ready for testing by next Wednesday, not today."
  }
];

const l153_review: Exercise[] = [
  {
    id: "a2_u11_l153_r6",
    type: "fill_blank",
    prompt: "Complete the indirect question: 'Do you happen to know what time the seminar ___?'",
    sourceSentence: "Do you happen to know what time the seminar begins?",
    targetSentence: "Do you happen to know what time the seminar begins?",
    options: [
      { id: "o1", text: "begins", isCorrect: true },
      { id: "o2", text: "does begin", isCorrect: false },
      { id: "o3", text: "did it begin", isCorrect: false },
      { id: "o4", text: "is beginning does", isCorrect: false }
    ],
    correctAnswer: "begins",
    explanation: "In an indirect question, use statement order: 'what time the seminar begins'."
  },
  {
    id: "a2_u11_l153_r7",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite clarification question:",
    targetSentence: "Could you clarify what you mean by that proposal?",
    options: [
      { id: "w1", text: "Could" },
      { id: "w2", text: "you" },
      { id: "w3", text: "clarify" },
      { id: "w4", text: "what" },
      { id: "w5", text: "you" },
      { id: "w6", text: "mean" },
      { id: "w7", text: "by" },
      { id: "w8", text: "that" },
      { id: "w9", text: "proposal?" }
    ],
    correctAnswer: "Could you clarify what you mean by that proposal?"
  },
  {
    id: "a2_u11_l153_r8",
    type: "dialogue_completion",
    prompt: "Complete the clarification dialogue:",
    sourceSentence: "We need everyone to arrive by seven.",
    targetSentence: "Just to be clear, do you mean seven in the morning or seven in the evening?",
    options: [
      { id: "o1", text: "Just to be clear, do you mean seven in the morning or seven in the evening?", isCorrect: true },
      { id: "o2", text: "Seven is a number between six and eight.", isCorrect: false },
      { id: "o3", text: "I do not like the number seven at all.", isCorrect: false }
    ],
    correctAnswer: "Just to be clear, do you mean seven in the morning or seven in the evening?",
    explanation: "'Just to be clear, do you mean...' is the standard diplomatic clarification structure."
  },
  {
    id: "a2_u11_l153_r9",
    type: "translation",
    prompt: "Translate into English: 'क्या आप जानते हैं कि बैठक कब शुरू होगी?'",
    sourceSentence: "क्या आप जानते हैं कि बैठक कब शुरू होगी?",
    targetSentence: "Do you know when the meeting will start?",
    options: [
      { id: "o1", text: "Do you know when the meeting will start?", isCorrect: true },
      { id: "o2", text: "Do you know when will the meeting start?", isCorrect: false },
      { id: "o3", text: "Do you know when does start the meeting?", isCorrect: false }
    ],
    correctAnswer: "Do you know when the meeting will start?",
    explanation: "In indirect questions, the subject ('the meeting') comes before the auxiliary ('will start')."
  },
  {
    id: "a2_u11_l153_r10",
    type: "multiple_choice",
    prompt: "Select the sentence with the correct indirect question structure:",
    targetSentence: "Can you tell me where the manager's office is located?",
    options: [
      { id: "o1", text: "Can you tell me where the manager's office is located?", isCorrect: true },
      { id: "o2", text: "Can you tell me where is located the manager's office?", isCorrect: false },
      { id: "o3", text: "Can you tell me where is the manager's office located does?", isCorrect: false }
    ],
    correctAnswer: "Can you tell me where the manager's office is located?",
    explanation: "The embedded clause uses subject + verb order ('where the manager's office is located')."
  }
];

const l153_assess: Exercise[] = [
  {
    id: "a2_u11_l153_a6",
    type: "listening",
    prompt: "Listen to the dialogue and determine how the misunderstanding is resolved:",
    audioText: "I thought you were in charge of the slides! — Oh, sorry for the confusion! Let me send you my draft right away so we can finish them together.",
    targetSentence: "The speaker sends their draft immediately so they can finish together.",
    options: [
      { id: "o1", text: "The speaker sends their draft immediately so they can finish together.", isCorrect: true },
      { id: "o2", text: "They cancel the presentation.", isCorrect: false },
      { id: "o3", text: "They blame each other and refuse to collaborate.", isCorrect: false }
    ],
    correctAnswer: "The speaker sends their draft immediately so they can finish together.",
    explanation: "The speaker apologizes for the confusion and immediately shares the draft."
  },
  {
    id: "a2_u11_l153_a7",
    type: "error_correction",
    prompt: "Correct the error in this polite question: 'Do you know how much does this software cost?'",
    sourceSentence: "Do you know how much does this software cost?",
    targetSentence: "Do you know how much this software costs?",
    options: [
      { id: "o1", text: "Do you know how much this software costs?", isCorrect: true },
      { id: "o2", text: "Do you know how much does this software costs?", isCorrect: false },
      { id: "o3", text: "Do you know how much is costing this software?", isCorrect: false }
    ],
    correctAnswer: "Do you know how much this software costs?",
    explanation: "In an indirect question, eliminate 'does' and inflect the verb: 'how much this software costs'."
  },
  {
    id: "a2_u11_l153_a8",
    type: "mediation",
    prompt: "Explain to an English-speaking coworker what your manager clarified: 'मेरा मतलब यह था कि हमें केवल पहली दो रिपोर्टें आज जमा करनी हैं।'",
    sourceSentence: "मेरा मतलब यह था कि हमें केवल पहली दो रिपोर्टें आज जमा करनी हैं।",
    targetSentence: "What I meant was that we only need to submit the first two reports today.",
    options: [
      { id: "o1", text: "What I meant was that we only need to submit the first two reports today.", isCorrect: true },
      { id: "o2", text: "I mean we should submit all twenty reports today.", isCorrect: false },
      { id: "o3", text: "We do not have any reports to submit this week.", isCorrect: false }
    ],
    correctAnswer: "What I meant was that we only need to submit the first two reports today.",
    explanation: "'What I meant was that...' precisely translates 'मेरा मतलब यह था कि...'."
  },
  {
    id: "a2_u11_l153_a9",
    type: "speaking",
    prompt: "Speak clearly: Check your understanding with a client after receiving new project instructions.",
    sourceSentence: "If I understand correctly, you would like us to prioritize the mobile interface before updating the desktop version.",
    targetSentence: "If I understand correctly, you would like us to prioritize the mobile interface before updating the desktop version.",
    audioText: "If I understand correctly, you would like us to prioritize the mobile interface before updating the desktop version.",
    explanation: "Natural active listening confirmation phrase."
  },
  {
    id: "a2_u11_l153_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you handle a miscommunication at work or in daily life:",
    targetSentence: "Whenever there is a misunderstanding, I ask follow-up questions to clarify expectations. Then, I summarize the key action items in an email to make sure everyone agrees.",
    audioText: "Whenever there is a misunderstanding, I ask follow-up questions to clarify expectations. Then, I summarize the key action items in an email to make sure everyone agrees."
  }
];

// =========================================================================
// LESSON 154: Recommendations and Comparisons
// =========================================================================
const l154_practice: Exercise[] = [
  {
    id: "a2_u11_l154_p16",
    type: "reading",
    prompt: "Read the product comparison summary and answer the question:\n\"Software Evaluation:\nPlan A is much more expensive than Plan B, but it offers far better customer support and automated backups. On the other hand, Plan B is slightly easier to configure for small teams, although its reporting features are not as comprehensive as Plan A's. For growing businesses, we strongly recommend Plan A.\"\nWhy does the evaluator recommend Plan A despite the higher price?",
    sourceSentence: "Why does the evaluator recommend Plan A despite the higher price?",
    targetSentence: "Because it offers far better customer support and automated backups.",
    options: [
      { id: "o1", text: "Because it offers far better customer support and automated backups.", isCorrect: true },
      { id: "o2", text: "Because it is completely free of charge.", isCorrect: false },
      { id: "o3", text: "Because Plan B is no longer available.", isCorrect: false },
      { id: "o4", text: "Because Plan A has no reporting features.", isCorrect: false }
    ],
    correctAnswer: "Because it offers far better customer support and automated backups.",
    explanation: "The evaluation states Plan A offers 'far better customer support and automated backups'."
  },
  {
    id: "a2_u11_l154_p17",
    type: "speaking",
    prompt: "Speak clearly and make a recommendation using comparative intensifiers:",
    sourceSentence: "I recommend the second supplier because their delivery time is much faster and their prices are far more reasonable.",
    targetSentence: "I recommend the second supplier because their delivery time is much faster and their prices are far more reasonable.",
    audioText: "I recommend the second supplier because their delivery time is much faster and their prices are far more reasonable.",
    explanation: "Emphasize 'much faster' and 'far more reasonable'."
  },
  {
    id: "a2_u11_l154_p18",
    type: "match_pairs",
    prompt: "Match the comparative intensifiers with their meanings:",
    options: [
      { id: "m1", text: "far better / much better" },
      { id: "m1_m", text: "significantly superior with a large difference" },
      { id: "m2", text: "slightly more expensive" },
      { id: "m2_m", text: "a small, minimal difference in cost" },
      { id: "m3", text: "not nearly as good as" },
      { id: "m3_m", text: "substantially worse in comparison" },
      { id: "m4", text: "a lot easier" },
      { id: "m4_m", text: "requiring considerably less effort" }
    ]
  },
  {
    id: "a2_u11_l154_p19",
    type: "mediation",
    prompt: "Help your colleague explain this product comparison in English: 'नया सॉफ्टवेयर पुराने सॉफ्टवेयर की तुलना में कहीं अधिक तेज़ और बहुत आसान है।' Choose the best translation:",
    sourceSentence: "नया सॉफ्टवेयर पुराने सॉफ्टवेयर की तुलना में कहीं अधिक तेज़ और बहुत आसान है।",
    targetSentence: "The new software is much faster and far easier than the old software.",
    options: [
      { id: "o1", text: "The new software is much faster and far easier than the old software.", isCorrect: true },
      { id: "o2", text: "The new software is fast and easy like old one.", isCorrect: false },
      { id: "o3", text: "The new software is not as fast as old software.", isCorrect: false }
    ],
    correctAnswer: "The new software is much faster and far easier than the old software.",
    explanation: "'much faster and far easier' accurately captures 'कहीं अधिक तेज़ और बहुत आसान'."
  },
  {
    id: "a2_u11_l154_p20",
    type: "error_correction",
    prompt: "Identify the mistake in this comparative sentence: 'This laptop is more cheaper than the desktop computer.'",
    sourceSentence: "This laptop is more cheaper than the desktop computer.",
    targetSentence: "This laptop is much cheaper than the desktop computer.",
    options: [
      { id: "o1", text: "This laptop is much cheaper than the desktop computer.", isCorrect: true },
      { id: "o2", text: "This laptop is more cheap than the desktop computer.", isCorrect: false },
      { id: "o3", text: "This laptop is more cheap as desktop computer.", isCorrect: false }
    ],
    correctAnswer: "This laptop is much cheaper than the desktop computer.",
    explanation: "Do not use double comparatives ('more cheaper'). To intensify a 1-syllable comparative adjective ('cheaper'), use 'much' or 'far'."
  },
  {
    id: "a2_u11_l154_p21",
    type: "listening",
    prompt: "Listen to the travel agent and select which hotel they recommend:",
    audioText: "While the seaside hotel is slightly closer to the beach, the downtown hotel is far quieter and not nearly as expensive.",
    targetSentence: "The downtown hotel because it is far quieter and less expensive.",
    options: [
      { id: "o1", text: "The downtown hotel because it is far quieter and less expensive.", isCorrect: true },
      { id: "o2", text: "The seaside hotel because it is completely free.", isCorrect: false },
      { id: "o3", text: "Neither hotel because both are fully booked.", isCorrect: false }
    ],
    correctAnswer: "The downtown hotel because it is far quieter and less expensive.",
    explanation: "The speaker highlights that the downtown hotel is 'far quieter and not nearly as expensive'."
  },
  {
    id: "a2_u11_l154_p22",
    type: "personal_production",
    prompt: "Write 2 sentences comparing two gadgets, apps, or vehicles you have used:",
    targetSentence: "My new electric bicycle is much more convenient than my old scooter for city commuting. It is also far cheaper to maintain on a monthly basis.",
    audioText: "My new electric bicycle is much more convenient than my old scooter for city commuting. It is also far cheaper to maintain on a monthly basis."
  }
];

const l154_review: Exercise[] = [
  {
    id: "a2_u11_l154_r6",
    type: "fill_blank",
    prompt: "Complete the comparison: 'The bullet train is ___ faster than taking the intercity bus.'",
    sourceSentence: "The bullet train is far faster than taking the intercity bus.",
    targetSentence: "The bullet train is far faster than taking the intercity bus.",
    options: [
      { id: "o1", text: "far", isCorrect: true },
      { id: "o2", text: "more", isCorrect: false },
      { id: "o3", text: "most", isCorrect: false },
      { id: "o4", text: "very", isCorrect: false }
    ],
    correctAnswer: "far",
    explanation: "'Far' or 'much' intensifies comparative adjectives ('faster')."
  },
  {
    id: "a2_u11_l154_r7",
    type: "word_ordering",
    prompt: "Assemble the words to construct a comparative equality structure:",
    targetSentence: "The local market is not as expensive as the supermarket.",
    options: [
      { id: "w1", text: "The" },
      { id: "w2", text: "local" },
      { id: "w3", text: "market" },
      { id: "w4", text: "is" },
      { id: "w5", text: "not" },
      { id: "w6", text: "as" },
      { id: "w7", text: "expensive" },
      { id: "w8", text: "as" },
      { id: "w9", text: "the" },
      { id: "w10", text: "supermarket." }
    ],
    correctAnswer: "The local market is not as expensive as the supermarket."
  },
  {
    id: "a2_u11_l154_r8",
    type: "dialogue_completion",
    prompt: "Complete the shopping recommendation dialogue:",
    sourceSentence: "Should we buy this refurbished tablet or the brand new model?",
    targetSentence: "I recommend the refurbished one; it is a lot cheaper and performs almost as well.",
    options: [
      { id: "o1", text: "I recommend the refurbished one; it is a lot cheaper and performs almost as well.", isCorrect: true },
      { id: "o2", text: "Tablets are electronic devices that have touchscreens.", isCorrect: false },
      { id: "o3", text: "We do not have any money to buy groceries.", isCorrect: false }
    ],
    correctAnswer: "I recommend the refurbished one; it is a lot cheaper and performs almost as well.",
    explanation: "'a lot cheaper and performs almost as well' gives a clear, practical recommendation."
  },
  {
    id: "a2_u11_l154_r9",
    type: "translation",
    prompt: "Translate into English: 'यह कमरा पिछले वाले कमरे जितना बड़ा नहीं है।'",
    sourceSentence: "यह कमरा पिछले वाले कमरे जितना बड़ा नहीं है।",
    targetSentence: "This room is not as big as the previous one.",
    options: [
      { id: "o1", text: "This room is not as big as the previous one.", isCorrect: true },
      { id: "o2", text: "This room is not more bigger than previous one.", isCorrect: false },
      { id: "o3", text: "This room as big as not previous one.", isCorrect: false }
    ],
    correctAnswer: "This room is not as big as the previous one.",
    explanation: "'not as big as' translates '...जितना बड़ा नहीं है'."
  },
  {
    id: "a2_u11_l154_r10",
    type: "multiple_choice",
    prompt: "Choose the grammatically sound sentence:",
    targetSentence: "Online shopping is considerably more convenient than visiting physical stores.",
    options: [
      { id: "o1", text: "Online shopping is considerably more convenient than visiting physical stores.", isCorrect: true },
      { id: "o2", text: "Online shopping is very more convenient than visiting physical stores.", isCorrect: false },
      { id: "o3", text: "Online shopping is more much convenient than visiting physical stores.", isCorrect: false }
    ],
    correctAnswer: "Online shopping is considerably more convenient than visiting physical stores.",
    explanation: "'Considerably more convenient' is the correct intensified comparative structure."
  }
];

const l154_assess: Exercise[] = [
  {
    id: "a2_u11_l154_a6",
    type: "listening",
    prompt: "Listen to the review and identify which vehicle is recommended for family road trips:",
    audioText: "Although the hybrid hatchback is slightly more economical, the full-size SUV is far more spacious and comfortable for long family trips.",
    targetSentence: "The full-size SUV.",
    options: [
      { id: "o1", text: "The full-size SUV.", isCorrect: true },
      { id: "o2", text: "The hybrid hatchback.", isCorrect: false },
      { id: "o3", text: "A motor scooter.", isCorrect: false }
    ],
    correctAnswer: "The full-size SUV.",
    explanation: "The reviewer emphasizes that the SUV is 'far more spacious and comfortable for long family trips'."
  },
  {
    id: "a2_u11_l154_a7",
    type: "error_correction",
    prompt: "Correct the comparison error: 'Her presentation was very more detailed than mine.'",
    sourceSentence: "Her presentation was very more detailed than mine.",
    targetSentence: "Her presentation was much more detailed than mine.",
    options: [
      { id: "o1", text: "Her presentation was much more detailed than mine.", isCorrect: true },
      { id: "o2", text: "Her presentation was more very detailed than mine.", isCorrect: false },
      { id: "o3", text: "Her presentation was detailed more than mine very.", isCorrect: false }
    ],
    correctAnswer: "Her presentation was much more detailed than mine.",
    explanation: "Do not use 'very' before comparative adjectives ('more detailed'); use 'much' or 'far'."
  },
  {
    id: "a2_u11_l154_a8",
    type: "mediation",
    prompt: "Your friend wants to buy a phone and asks what you think: 'यह नया मॉडल पुराने मॉडल की तुलना में काफी हल्का है।' Translate this advice accurately into English:",
    sourceSentence: "यह नया मॉडल पुराने मॉडल की तुलना में काफी हल्का है।",
    targetSentence: "This new model is considerably lighter than the old model.",
    options: [
      { id: "o1", text: "This new model is considerably lighter than the old model.", isCorrect: true },
      { id: "o2", text: "This new model is heavy than old model.", isCorrect: false },
      { id: "o3", text: "This new model is not as light as old model.", isCorrect: false }
    ],
    correctAnswer: "This new model is considerably lighter than the old model.",
    explanation: "'considerably lighter / much lighter' translates 'काफी हल्का'."
  },
  {
    id: "a2_u11_l154_a9",
    type: "speaking",
    prompt: "Speak clearly: Compare public transit with driving in your city and state your preference.",
    sourceSentence: "Taking the subway is far faster during rush hour, whereas driving is much more comfortable on weekends.",
    targetSentence: "Taking the subway is far faster during rush hour, whereas driving is much more comfortable on weekends.",
    audioText: "Taking the subway is far faster during rush hour, whereas driving is much more comfortable on weekends.",
    explanation: "Clear pronunciation of comparative intensifiers 'far faster' and 'much more comfortable'."
  },
  {
    id: "a2_u11_l154_a10",
    type: "personal_production",
    prompt: "Write 2 sentences comparing living in a big city versus living in a quiet town:",
    targetSentence: "Living in a large city is much more exciting because of the cultural events and restaurants. However, small towns are far more peaceful and considerably less stressful.",
    audioText: "Living in a large city is much more exciting because of the cultural events and restaurants. However, small towns are far more peaceful and considerably less stressful."
  }
];

// =========================================================================
// LESSON 155: Social Event Planning
// =========================================================================
const l155_practice: Exercise[] = [
  {
    id: "a2_u11_l155_p16",
    type: "reading",
    prompt: "Read the community event invitation and answer the question:\n\"Annual Neighborhood Picnic:\nDate: Saturday, June 14th\nTime: 12:00 PM – 4:00 PM\nVenue: Oakridge Community Park (near Pavilion 3)\nRSVP: Please confirm your attendance by June 8th so that we can arrange sufficient barbecue catering and seating. In case of heavy rain, the event will move to the community center gymnasium.\"\nWhat should attendees do by June 8th and why?",
    sourceSentence: "What should attendees do by June 8th and why?",
    targetSentence: "Confirm attendance so organizers can arrange sufficient catering and seating.",
    options: [
      { id: "o1", text: "Confirm attendance so organizers can arrange sufficient catering and seating.", isCorrect: true },
      { id: "o2", text: "Pay an entrance fee of fifty dollars.", isCorrect: false },
      { id: "o3", text: "Move the picnic tables to the gymnasium.", isCorrect: false },
      { id: "o4", text: "Bring their own barbecue grills.", isCorrect: false }
    ],
    correctAnswer: "Confirm attendance so organizers can arrange sufficient catering and seating.",
    explanation: "The notice states: 'Please confirm your attendance by June 8th so that we can arrange sufficient barbecue catering and seating.'"
  },
  {
    id: "a2_u11_l155_p17",
    type: "speaking",
    prompt: "Speak clearly and suggest an event plan to your friends:",
    sourceSentence: "Why don't we organize a surprise birthday party for Maya at the Italian restaurant next Saturday evening?",
    targetSentence: "Why don't we organize a surprise birthday party for Maya at the Italian restaurant next Saturday evening?",
    audioText: "Why don't we organize a surprise birthday party for Maya at the Italian restaurant next Saturday evening?",
    explanation: "Natural friendly intonation for social event suggestions."
  },
  {
    id: "a2_u11_l155_p18",
    type: "match_pairs",
    prompt: "Match the event planning phrases with their conversational intents:",
    options: [
      { id: "m1", text: "Shall we reserve...?" },
      { id: "m1_m", text: "formal/polite suggestion for booking a venue or table" },
      { id: "m2", text: "How about meeting at...?" },
      { id: "m2_m", text: "casual suggestion regarding a specific time or location" },
      { id: "m3", text: "finalize the headcount" },
      { id: "m3_m", text: "determine the exact number of attending guests" },
      { id: "m4", text: "RSVP by Friday" },
      { id: "m4_m", text: "request for guests to confirm attendance before the deadline" }
    ]
  },
  {
    id: "a2_u11_l155_p19",
    type: "mediation",
    prompt: "Translate this party planning suggestion for an English-speaking group: 'क्या हम शुक्रवार शाम 7 बजे कैफे में मिल सकते हैं ताकि योजना को अंतिम रूप दिया जा सके?'",
    sourceSentence: "क्या हम शुक्रवार शाम 7 बजे कैफे में मिल सकते हैं ताकि योजना को अंतिम रूप दिया जा सके?",
    targetSentence: "Shall we meet at the café on Friday at seven PM in order to finalize the plan?",
    options: [
      { id: "o1", text: "Shall we meet at the café on Friday at seven PM in order to finalize the plan?", isCorrect: true },
      { id: "o2", text: "We must not go to café on Friday at seven.", isCorrect: false },
      { id: "o3", text: "Meeting cancelled because cafe closed on Friday.", isCorrect: false }
    ],
    correctAnswer: "Shall we meet at the café on Friday at seven PM in order to finalize the plan?",
    explanation: "'Shall we meet... in order to finalize the plan?' captures the polite suggestion and purpose."
  },
  {
    id: "a2_u11_l155_p20",
    type: "error_correction",
    prompt: "Identify the preposition mistake in this invitation: 'Let's meet in next Saturday on seven o'clock.'",
    sourceSentence: "Let's meet in next Saturday on seven o'clock.",
    targetSentence: "Let's meet next Saturday at seven o'clock.",
    options: [
      { id: "o1", text: "Let's meet next Saturday at seven o'clock.", isCorrect: true },
      { id: "o2", text: "Let's meet at next Saturday in seven o'clock.", isCorrect: false },
      { id: "o3", text: "Let's meet on next Saturday on seven o'clock.", isCorrect: false }
    ],
    correctAnswer: "Let's meet next Saturday at seven o'clock.",
    explanation: "Do not use prepositions before 'next/last Saturday'; use 'at' for specific times ('at seven o'clock')."
  },
  {
    id: "a2_u11_l155_p21",
    type: "listening",
    prompt: "Listen to the party organizer and identify what item Liam is bringing:",
    audioText: "Sarah is bringing the birthday cake, and Liam will be in charge of bringing paper cups, plates, and party decorations.",
    targetSentence: "Paper cups, plates, and party decorations.",
    options: [
      { id: "o1", text: "Paper cups, plates, and party decorations.", isCorrect: true },
      { id: "o2", text: "The custom chocolate birthday cake.", isCorrect: false },
      { id: "o3", text: "A live musical band.", isCorrect: false }
    ],
    correctAnswer: "Paper cups, plates, and party decorations.",
    explanation: "The speaker clarifies: 'Liam will be in charge of bringing paper cups, plates, and party decorations.'"
  },
  {
    id: "a2_u11_l155_p22",
    type: "personal_production",
    prompt: "Write 2 sentences suggesting a weekend get-together with friends including a time and activity:",
    targetSentence: "How about going for a picnic at the lake this Sunday afternoon around two o'clock? We could all bring some homemade snacks and board games.",
    audioText: "How about going for a picnic at the lake this Sunday afternoon around two o'clock? We could all bring some homemade snacks and board games."
  }
];

const l155_review: Exercise[] = [
  {
    id: "a2_u11_l155_r6",
    type: "fill_blank",
    prompt: "Complete the suggestion: '___ we reserve a table outside if the weather stays sunny?'",
    sourceSentence: "Shall we reserve a table outside if the weather stays sunny?",
    targetSentence: "Shall we reserve a table outside if the weather stays sunny?",
    options: [
      { id: "o1", text: "Shall", isCorrect: true },
      { id: "o2", text: "Will", isCorrect: false },
      { id: "o3", text: "Do", isCorrect: false },
      { id: "o4", text: "Are", isCorrect: false }
    ],
    correctAnswer: "Shall",
    explanation: "'Shall we + verb' is the classic polite suggestion form for cooperative planning."
  },
  {
    id: "a2_u11_l155_r7",
    type: "word_ordering",
    prompt: "Arrange the words into a natural invitation suggestion:",
    targetSentence: "Why don't we invite our neighbors to the barbecue?",
    options: [
      { id: "w1", text: "Why" },
      { id: "w2", text: "don't" },
      { id: "w3", text: "we" },
      { id: "w4", text: "invite" },
      { id: "w5", text: "our" },
      { id: "w6", text: "neighbors" },
      { id: "w7", text: "to" },
      { id: "w8", text: "the" },
      { id: "w9", text: "barbecue?" }
    ],
    correctAnswer: "Why don't we invite our neighbors to the barbecue?"
  },
  {
    id: "a2_u11_l155_r8",
    type: "dialogue_completion",
    prompt: "Select the most natural response for event coordination:",
    sourceSentence: "Would you be able to pick up the dessert on your way to the dinner?",
    targetSentence: "Sure, no problem! What kind of dessert would everyone prefer?",
    options: [
      { id: "o1", text: "Sure, no problem! What kind of dessert would everyone prefer?", isCorrect: true },
      { id: "o2", text: "I do not eat any food ever.", isCorrect: false },
      { id: "o3", text: "Dessert was eaten yesterday afternoon.", isCorrect: false }
    ],
    correctAnswer: "Sure, no problem! What kind of dessert would everyone prefer?",
    explanation: "Friendly and cooperative event coordination response."
  },
  {
    id: "a2_u11_l155_r9",
    type: "translation",
    prompt: "Translate into English: 'हम रविवार को दोपहर के भोजन के लिए कहाँ मिलें?'",
    sourceSentence: "हम रविवार को दोपहर के भोजन के लिए कहाँ मिलें?",
    targetSentence: "Where shall we meet for lunch on Sunday?",
    options: [
      { id: "o1", text: "Where shall we meet for lunch on Sunday?", isCorrect: true },
      { id: "o2", text: "Where we meet for lunch in Sunday?", isCorrect: false },
      { id: "o3", text: "Where meeting us for lunch on Sunday?", isCorrect: false }
    ],
    correctAnswer: "Where shall we meet for lunch on Sunday?",
    explanation: "'Where shall we meet for lunch on Sunday?' is natural and grammatically accurate."
  },
  {
    id: "a2_u11_l155_r10",
    type: "multiple_choice",
    prompt: "Choose the sentence with correct preposition usage for events:",
    targetSentence: "The reunion will take place on Saturday at 6:00 PM in the grand ballroom.",
    options: [
      { id: "o1", text: "The reunion will take place on Saturday at 6:00 PM in the grand ballroom.", isCorrect: true },
      { id: "o2", text: "The reunion will take place in Saturday on 6:00 PM at the grand ballroom.", isCorrect: false },
      { id: "o3", text: "The reunion will take place at Saturday in 6:00 PM on the grand ballroom.", isCorrect: false }
    ],
    correctAnswer: "The reunion will take place on Saturday at 6:00 PM in the grand ballroom.",
    explanation: "'on' for day of the week, 'at' for specific time, 'in' for room/hall."
  }
];

const l155_assess: Exercise[] = [
  {
    id: "a2_u11_l155_a6",
    type: "listening",
    prompt: "Listen to the voicemail and identify the location change:",
    audioText: "Hi everyone, due to the construction at Riverside Park, our volleyball tournament has been moved to Hilltop Arena on Court 4.",
    targetSentence: "Hilltop Arena on Court 4.",
    options: [
      { id: "o1", text: "Hilltop Arena on Court 4.", isCorrect: true },
      { id: "o2", text: "Riverside Park next to the river.", isCorrect: false },
      { id: "o3", text: "The tournament was canceled.", isCorrect: false }
    ],
    correctAnswer: "Hilltop Arena on Court 4.",
    explanation: "The caller announces the relocation to 'Hilltop Arena on Court 4'."
  },
  {
    id: "a2_u11_l155_a7",
    type: "error_correction",
    prompt: "Identify and fix the mistake: 'How about to order Italian pizza for the party?'",
    sourceSentence: "How about to order Italian pizza for the party?",
    targetSentence: "How about ordering Italian pizza for the party?",
    options: [
      { id: "o1", text: "How about ordering Italian pizza for the party?", isCorrect: true },
      { id: "o2", text: "How about order Italian pizza for the party?", isCorrect: false },
      { id: "o3", text: "How about for order Italian pizza for the party?", isCorrect: false }
    ],
    correctAnswer: "How about ordering Italian pizza for the party?",
    explanation: "'How about' is a prepositional phrase followed by a gerund ('-ing' form), not an infinitive."
  },
  {
    id: "a2_u11_l155_a8",
    type: "mediation",
    prompt: "Relay this event invitation in English to your neighbor: 'कृपया शनिवार तक बता दें कि क्या आप पार्टी में आ पाएंगे ताकि हम भोजन का प्रबंध कर सकें।'",
    sourceSentence: "कृपया शनिवार तक बता दें कि क्या आप पार्टी में आ पाएंगे ताकि हम भोजन का प्रबंध कर सकें।",
    targetSentence: "Please let us know by Saturday if you can make it to the party so we can arrange the food.",
    options: [
      { id: "o1", text: "Please let us know by Saturday if you can make it to the party so we can arrange the food.", isCorrect: true },
      { id: "o2", text: "Do not come to party on Saturday because food is finished.", isCorrect: false },
      { id: "o3", text: "Party cancelled on Saturday because nobody came.", isCorrect: false }
    ],
    correctAnswer: "Please let us know by Saturday if you can make it to the party so we can arrange the food.",
    explanation: "'Please let us know by Saturday if you can make it... so we can arrange the food' is exact."
  },
  {
    id: "a2_u11_l155_a9",
    type: "speaking",
    prompt: "Speak clearly: Propose a venue and time for a farewell celebration for a departing coworker.",
    sourceSentence: "Shall we gather at the rooftop café this Friday at five thirty to celebrate Daniel's new job?",
    targetSentence: "Shall we gather at the rooftop café this Friday at five thirty to celebrate Daniel's new job?",
    audioText: "Shall we gather at the rooftop café this Friday at five thirty to celebrate Daniel's new job?",
    explanation: "Natural celebratory invitation delivery."
  },
  {
    id: "a2_u11_l155_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you would organize a family reunion dinner:",
    targetSentence: "First, I would send a digital survey to choose a date that works for everyone. Then, I would book a private dining room at a family-friendly restaurant two weeks in advance.",
    audioText: "First, I would send a digital survey to choose a date that works for everyone. Then, I would book a private dining room at a family-friendly restaurant two weeks in advance."
  }
];

// Execute enrichment for Lessons 151-155
enrichUnit11LessonData('lesson_a2_11_151', LESSON_A2_11_151_DATA, l151_practice, l151_review, l151_assess);
enrichUnit11LessonData('lesson_a2_11_152', LESSON_A2_11_152_DATA, l152_practice, l152_review, l152_assess);
enrichUnit11LessonData('lesson_a2_11_153', LESSON_A2_11_153_DATA, l153_practice, l153_review, l153_assess);
enrichUnit11LessonData('lesson_a2_11_154', LESSON_A2_11_154_DATA, l154_practice, l154_review, l154_assess);
enrichUnit11LessonData('lesson_a2_11_155', LESSON_A2_11_155_DATA, l155_practice, l155_review, l155_assess);
