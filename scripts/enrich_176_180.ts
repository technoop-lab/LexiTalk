import { Exercise } from '../src/types';
import { LESSON_A2_12_176_DATA } from '../src/data/lessons/lesson_a2_12_176';
import { LESSON_A2_12_177_DATA } from '../src/data/lessons/lesson_a2_12_177';
import { LESSON_A2_12_178_DATA } from '../src/data/lessons/lesson_a2_12_178';
import { LESSON_A2_12_179_DATA } from '../src/data/lessons/lesson_a2_12_179';
import { LESSON_A2_12_180_DATA } from '../src/data/lessons/lesson_a2_12_180';
import { enrichUnit12LessonData } from './enrich_unit12_helper';

// =========================================================================
// LESSON 176: Handling Difficult Conversations & Conflict Resolution
// =========================================================================
const l176_practice: Exercise[] = [
  {
    id: "a2_u12_l176_p11",
    type: "reading",
    prompt: "Read the workplace conflict resolution case study and answer the question:\n\"Conflict Resolution Strategy: During a project planning dispute between the design and engineering leads, the facilitator used active listening techniques. First, both parties were encouraged to state their core concerns without interruption. The facilitator acknowledged both perspectives: 'I understand why the timeline is critical for engineering, and I also see why visual quality matters to design.' By focusing on shared goals, the team agreed on a phased milestone schedule that satisfied both priorities.\"\nHow did the facilitator help resolve the dispute?",
    sourceSentence: "How did the facilitator help resolve the dispute?",
    targetSentence: "By practicing active listening, acknowledging both concerns, and focusing on shared goals.",
    options: [
      { id: "o1", text: "By practicing active listening, acknowledging both concerns, and focusing on shared goals.", isCorrect: true },
      { id: "o2", text: "By firing the engineering lead immediately.", isCorrect: false },
      { id: "o3", text: "By cancelling the entire project completely.", isCorrect: false },
      { id: "o4", text: "By forcing the design team to work without any schedule.", isCorrect: false }
    ],
    correctAnswer: "By practicing active listening, acknowledging both concerns, and focusing on shared goals.",
    explanation: "The case study describes acknowledging both perspectives and focusing on shared goals to find a mutual solution."
  },
  {
    id: "a2_u12_l176_p12",
    type: "speaking",
    prompt: "Speak tactfully and diplomatically: Express a gentle disagreement with a colleague's proposal.",
    sourceSentence: "I see your point about rushing the launch, but I'm afraid that skipping testing could lead to serious quality issues.",
    targetSentence: "I see your point about rushing the launch, but I'm afraid that skipping testing could lead to serious quality issues.",
    audioText: "I see your point about rushing the launch, but I'm afraid that skipping testing could lead to serious quality issues.",
    explanation: "Practice the diplomatic framing: 'I see your point... but I'm afraid that...'."
  },
  {
    id: "a2_u12_l176_p13",
    type: "match_pairs",
    prompt: "Match conflict resolution phrases with their de-escalation functions:",
    options: [
      { id: "m1", text: "I see what you mean, but..." },
      { id: "m1_m", text: "tactfully disagree while acknowledging perspective" },
      { id: "m2", text: "Could you help me understand..." },
      { id: "m2_m", text: "ask for clarification without sounding defensive" },
      { id: "m3", text: "Let us focus on our common goal." },
      { id: "m3_m", text: "redirect tension towards shared objectives" },
      { id: "m4", text: "I appreciate your honesty." },
      { id: "m4_m", text: "validate open communication and build trust" }
    ]
  },
  {
    id: "a2_u12_l176_p14",
    type: "mediation",
    prompt: "Mediate this conflict resolution response into English: 'मैं आपकी बात समझता हूँ, लेकिन मुझे चिंता है कि इससे हमारा खर्च बढ़ जाएगा।' Choose the best translation.",
    sourceSentence: "मैं आपकी बात समझता हूँ, लेकिन मुझे चिंता है कि इससे हमारा खर्च बढ़ जाएगा।",
    targetSentence: "I understand your point, but I am concerned that this will increase our expenses.",
    options: [
      { id: "o1", text: "I understand your point, but I am concerned that this will increase our expenses.", isCorrect: true },
      { id: "o2", text: "You are wrong and I do not want to talk to you.", isCorrect: false },
      { id: "o3", text: "I understood your point yesterday when expenses increased.", isCorrect: false }
    ],
    correctAnswer: "I understand your point, but I am concerned that this will increase our expenses.",
    explanation: "'I understand your point, but I am concerned that...' is the standard professional diplomatic structure."
  },
  {
    id: "a2_u12_l176_p15",
    type: "error_correction",
    prompt: "Identify and correct the overly aggressive phrasing to make it professional:",
    sourceSentence: "Your suggestion is completely stupid and will never work.",
    targetSentence: "I see what you are aiming for, but I have some reservations about that approach.",
    options: [
      { id: "o1", text: "I see what you are aiming for, but I have some reservations about that approach.", isCorrect: true },
      { id: "o2", text: "Your suggestion is not good at all.", isCorrect: false },
      { id: "o3", text: "You are completely wrong about work.", isCorrect: false }
    ],
    correctAnswer: "I see what you are aiming for, but I have some reservations about that approach.",
    explanation: "'I see what you are aiming for, but I have some reservations...' provides tactful, constructive feedback."
  },
  {
    id: "a2_u12_l176_p16",
    type: "listening",
    prompt: "Listen to the team lead resolving a conflict and identify the agreed action:",
    audioText: "Thank you both for sharing your views openly. Let's take a twenty-minute break, review the customer analytics data together, and then agree on the final product roadmap.",
    targetSentence: "Take a 20-minute break, review analytics data together, and agree on the roadmap.",
    options: [
      { id: "o1", text: "Take a 20-minute break, review analytics data together, and agree on the roadmap.", isCorrect: true },
      { id: "o2", text: "Cancel the product launch and delete all data.", isCorrect: false },
      { id: "o3", text: "Assign the entire workload to one intern.", isCorrect: false },
      { id: "o4", text: "Vote on which employee should leave the company.", isCorrect: false }
    ],
    correctAnswer: "Take a 20-minute break, review analytics data together, and agree on the roadmap.",
    explanation: "The lead proposes a short break, reviewing data collaboratively, and then finalizing the roadmap."
  },
  {
    id: "a2_u12_l176_p17",
    type: "personal_production",
    prompt: "Write 2 sentences expressing a diplomatic disagreement and proposing a collaborative compromise:",
    targetSentence: "I appreciate your perspective on moving the deadline forward; however, I am worried that rushing may compromise software security. Could we review the critical milestones together to find a safe middle ground?",
    audioText: "I appreciate your perspective on moving the deadline forward; however, I am worried that rushing may compromise software security. Could we review the critical milestones together to find a safe middle ground?"
  },
  {
    id: "a2_u12_l176_p18",
    type: "dialogue_completion",
    prompt: "Complete the conflict de-escalation conversation:\nColleague: 'I feel like my ideas are not being considered in our team meetings.'\nTeam Leader: '________________________'",
    sourceSentence: "I feel like my ideas are not being considered in our team meetings.",
    targetSentence: "I appreciate you bringing this to my attention. Let's set up dedicated time in every meeting for everyone to share input.",
    options: [
      { id: "o1", text: "I appreciate you bringing this to my attention. Let's set up dedicated time in every meeting for everyone to share input.", isCorrect: true },
      { id: "o2", text: "That is because your ideas are not helpful.", isCorrect: false },
      { id: "o3", text: "Meetings are cancelled forever starting today.", isCorrect: false }
    ],
    correctAnswer: "I appreciate you bringing this to my attention. Let's set up dedicated time in every meeting for everyone to share input.",
    explanation: "Validating the colleague's feelings and proposing a systemic solution de-escalates tension effectively."
  },
  {
    id: "a2_u12_l176_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a diplomatic disagreement statement:",
    sourceSentence: "I see your point, but we need to consider the budget constraints.",
    targetSentence: "I see your point, but we need to consider the budget constraints.",
    tokens: ["I", "see", "your", "point,", "but", "we", "need", "to", "consider", "the", "budget", "constraints", "."],
    correctOrder: ["I", "see", "your", "point,", "but", "we", "need", "to", "consider", "the", "budget", "constraints", "."],
    explanation: "'I see your point, but...' is a premier diplomatic disagreement frame."
  },
  {
    id: "a2_u12_l176_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the polite softening phrase:",
    sourceSentence: "I'm [blank] (afraid / scared) I cannot agree with that timeline because our team is already fully booked.",
    targetSentence: "I'm afraid I cannot agree with that timeline because our team is already fully booked.",
    text: "I'm [blank] I cannot agree with that timeline because our team is already fully booked.",
    options: [
      { id: "o1", text: "afraid", isCorrect: true },
      { id: "o2", text: "scared", isCorrect: false },
      { id: "o3", text: "frightened", isCorrect: false },
      { id: "o4", text: "angry", isCorrect: false }
    ],
    correctAnswer: "afraid",
    explanation: "'I'm afraid (that)...' is the standard polite softener for expressing disagreement or declining."
  },
  {
    id: "a2_u12_l176_p21",
    type: "translation",
    prompt: "Translate to English: 'आइए व्यक्तिगत मतभेदों को अलग रखें और समाधान पर ध्यान केंद्रित करें।'",
    sourceSentence: "आइए व्यक्तिगत मतभेदों को अलग रखें और समाधान पर ध्यान केंद्रित करें।",
    targetSentence: "Let us set aside personal differences and focus on solutions.",
    explanation: "'Let us set aside personal differences and focus on solutions.' is a premier conflict resolution statement."
  },
  {
    id: "a2_u12_l176_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: De-escalate a heated meeting discussion constructively.",
    sourceSentence: "Let's take a quick step back and look at what we both agree on before making any final decisions.",
    targetSentence: "Let's take a quick step back and look at what we both agree on before making any final decisions.",
    audioText: "Let's take a quick step back and look at what we both agree on before making any final decisions.",
    explanation: "Practice a calm, measured, empathetic vocal tone."
  }
];

const l176_review: Exercise[] = [
  {
    id: "a2_u12_l176_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Customer Service & Complaints): Which response is most professional when an upset customer reports a problem?",
    options: [
      { id: "o1", text: "I sincerely apologize for the inconvenience, and I will resolve this issue for you right away.", isCorrect: true },
      { id: "o2", text: "It is not my fault so do not complain to me.", isCorrect: false },
      { id: "o3", text: "You should have read the instructions yesterday.", isCorrect: false },
      { id: "o4", text: "Why are you calling us today?", isCorrect: false }
    ],
    correctAnswer: "I sincerely apologize for the inconvenience, and I will resolve this issue for you right away.",
    explanation: "Empathy, apology, and immediate action form the foundation of professional service."
  },
  {
    id: "a2_u12_l176_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'I understand [blank] (what / that) you are saying, but we have strict safety regulations.'",
    sourceSentence: "I understand [blank] you are saying, but we have strict safety regulations.",
    targetSentence: "I understand what you are saying, but we have strict safety regulations.",
    text: "I understand [blank] you are saying, but we have strict safety regulations.",
    options: [
      { id: "o1", text: "what", isCorrect: true },
      { id: "o2", text: "that", isCorrect: false },
      { id: "o3", text: "which", isCorrect: false },
      { id: "o4", text: "how", isCorrect: false }
    ],
    correctAnswer: "what",
    explanation: "'understand what you are saying' is the standard empathetic phrase."
  },
  {
    id: "a2_u12_l176_r9",
    type: "error_correction",
    prompt: "Correct the preposition in this diplomatic phrase:",
    sourceSentence: "I have some concerns on this proposed strategy.",
    targetSentence: "I have some concerns about this proposed strategy.",
    options: [
      { id: "o1", text: "I have some concerns about this proposed strategy.", isCorrect: true },
      { id: "o2", text: "I have some concerns of this strategy.", isCorrect: false },
      { id: "o3", text: "I have some concerns at this strategy.", isCorrect: false }
    ],
    correctAnswer: "I have some concerns about this proposed strategy.",
    explanation: "The collocation is 'concerns about something'."
  },
  {
    id: "a2_u12_l176_r10",
    type: "translation",
    prompt: "Translate to English: 'मुझे डर है कि हम इस समय अतिरिक्त बजट वहन नहीं कर सकते।'",
    sourceSentence: "मुझे डर है कि हम इस समय अतिरिक्त बजट वहन नहीं कर सकते।",
    targetSentence: "I am afraid we cannot afford an additional budget at this time.",
    explanation: "'I am afraid we cannot afford...' is the standard polite financial constraint expression."
  }
];

const l176_assessment: Exercise[] = [
  {
    id: "a2_u12_l176_a7",
    type: "multiple_choice",
    prompt: "Which statement best exemplifies active listening during a workplace disagreement?",
    options: [
      { id: "o1", text: "If I understand correctly, your primary concern is meeting the deadline without extra overtime.", isCorrect: true },
      { id: "o2", text: "I do not care what your concern is because I am the manager.", isCorrect: false },
      { id: "o3", text: "Stop speaking and listen to my instructions.", isCorrect: false },
      { id: "o4", text: "You must agree with me right now.", isCorrect: false }
    ],
    correctAnswer: "If I understand correctly, your primary concern is meeting the deadline without extra overtime.",
    explanation: "'If I understand correctly, your primary concern is...' is the hallmark of active listening and paraphrasing."
  },
  {
    id: "a2_u12_l176_a8",
    type: "fill_blank",
    prompt: "Complete the tactful disagreement sentence:",
    sourceSentence: "With all [blank] (respect / polite), I believe we should test the software before launching.",
    targetSentence: "With all respect, I believe we should test the software before launching.",
    text: "With all [blank] I believe we should test the software before launching.",
    options: [
      { id: "o1", text: "respect", isCorrect: true },
      { id: "o2", text: "polite", isCorrect: false },
      { id: "o3", text: "kind", isCorrect: false },
      { id: "o4", text: "friend", isCorrect: false }
    ],
    correctAnswer: "respect",
    explanation: "'With all respect' / 'With all due respect' is a formal diplomatic softening phrase."
  },
  {
    id: "a2_u12_l176_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence diplomatic disagreement acknowledging a colleague's idea while presenting an alternative view.",
    sourceSentence: "I understand why you want to release the app immediately; however, I am concerned that unverified bugs could damage our reputation. What if we conduct a 48-hour beta test first?",
    targetSentence: "I understand why you want to release the app immediately; however, I am concerned that unverified bugs could damage our reputation. What if we conduct a 48-hour beta test first?",
    audioText: "I understand why you want to release the app immediately; however, I am concerned that unverified bugs could damage our reputation. What if we conduct a 48-hour beta test first?",
    explanation: "Demonstrate tactful acknowledgment, concern expression, and constructive alternative proposal."
  },
  {
    id: "a2_u12_l176_a10",
    type: "mediation",
    prompt: "Translate this conflict resolution agreement for your international team: 'हम दोनों इस बात पर सहमत हैं कि उत्पाद की गुणवत्ता हमारी पहली प्राथमिकता होनी चाहिए।' Provide the best translation.",
    sourceSentence: "हम दोनों इस बात पर सहमत हैं कि उत्पाद की गुणवत्ता हमारी पहली प्राथमिकता होनी चाहिए।",
    targetSentence: "We both agree that product quality should be our top priority.",
    options: [
      { id: "o1", text: "We both agree that product quality should be our top priority.", isCorrect: true },
      { id: "o2", text: "We disagreed yesterday because quality was cancelled.", isCorrect: false },
      { id: "o3", text: "Product quality is deleted unless we agree.", isCorrect: false }
    ],
    correctAnswer: "We both agree that product quality should be our top priority.",
    explanation: "'We both agree that product quality should be our top priority' accurately affirms consensus."
  }
];

// =========================================================================
// LESSON 177: Professional Networking, Introductions & Elevator Pitches
// =========================================================================
const l177_practice: Exercise[] = [
  {
    id: "a2_u12_l177_p11",
    type: "reading",
    prompt: "Read the elevator pitch and answer the question:\n\"Networking Pitch: 'Hello, my name is Priya Sharma. I am a cloud infrastructure architect with over five years of experience helping fintech startups automate their data security. Recently, my team built an automated compliance pipeline that reduced deployment audit time by 60%. I noticed your company is expanding into European markets, and I'd love to learn more about how you handle regional compliance challenges.'\"\nWhat specific accomplishment did Priya highlight?",
    sourceSentence: "What specific accomplishment did Priya highlight?",
    targetSentence: "Building an automated compliance pipeline that reduced audit time by 60%.",
    options: [
      { id: "o1", text: "Building an automated compliance pipeline that reduced audit time by 60%.", isCorrect: true },
      { id: "o2", text: "Moving to Europe to start a new fintech company.", isCorrect: false },
      { id: "o3", text: "Writing a book on European banking laws.", isCorrect: false },
      { id: "o4", text: "Deleting cloud infrastructure databases.", isCorrect: false }
    ],
    correctAnswer: "Building an automated compliance pipeline that reduced audit time by 60%.",
    explanation: "Priya explicitly mentions: 'my team built an automated compliance pipeline that reduced deployment audit time by 60%.'"
  },
  {
    id: "a2_u12_l177_p12",
    type: "speaking",
    prompt: "Speak clearly and confidently: Deliver a concise 30-second professional self-introduction.",
    sourceSentence: "Hello, I'm Rahul Verma. I specialize in frontend user experience design, and I've spent the last three years building responsive mobile applications for e-commerce brands.",
    targetSentence: "Hello, I'm Rahul Verma. I specialize in frontend user experience design, and I've spent the last three years building responsive mobile applications for e-commerce brands.",
    audioText: "Hello, I'm Rahul Verma. I specialize in frontend user experience design, and I've spent the last three years building responsive mobile applications for e-commerce brands.",
    explanation: "Practice a confident, warm introductory cadence with clear articulation of 'specialize in' and 'e-commerce brands'."
  },
  {
    id: "a2_u12_l177_p13",
    type: "match_pairs",
    prompt: "Match networking terms and phrases with their social functions:",
    options: [
      { id: "m1", text: "What line of work are you in?" },
      { id: "m1_m", text: "ask about someone's professional industry" },
      { id: "m2", text: "Let's stay in touch on LinkedIn." },
      { id: "m2_m", text: "propose connecting digitally after meeting" },
      { id: "m3", text: "I specialize in..." },
      { id: "m3_m", text: "describe one's core professional expertise" },
      { id: "m4", text: "It was a pleasure meeting you." },
      { id: "m4_m", text: "polite formal farewell at a networking event" }
    ]
  },
  {
    id: "a2_u12_l177_p14",
    type: "mediation",
    prompt: "Mediate this networking introduction into English: 'नमस्ते, मैं डेटा विश्लेषण में विशेषज्ञता रखता हूँ और मैं ई-कॉमर्स कंपनियों को बिक्री बढ़ाने में मदद करता हूँ।' Choose the best translation.",
    sourceSentence: "नमस्ते, मैं डेटा विश्लेषण में विशेषज्ञता रखता हूँ और मैं ई-कॉमर्स कंपनियों को बिक्री बढ़ाने में मदद करता हूँ।",
    targetSentence: "Hello, I specialize in data analytics and I help e-commerce companies increase sales.",
    options: [
      { id: "o1", text: "Hello, I specialize in data analytics and I help e-commerce companies increase sales.", isCorrect: true },
      { id: "o2", text: "Hello, I am data yesterday and help companies to buy.", isCorrect: false },
      { id: "o3", text: "I do not know data analytics but I want e-commerce.", isCorrect: false }
    ],
    correctAnswer: "Hello, I specialize in data analytics and I help e-commerce companies increase sales.",
    explanation: "'I specialize in data analytics and I help e-commerce companies increase sales' is concise and professional."
  },
  {
    id: "a2_u12_l177_p15",
    type: "error_correction",
    prompt: "Identify and correct the networking follow-up preposition error:",
    sourceSentence: "It was great talking with you at the summit; let's keep contact by email.",
    targetSentence: "It was great talking with you at the summit; let's keep in touch by email.",
    options: [
      { id: "o1", text: "It was great talking with you at the summit; let's keep in touch by email.", isCorrect: true },
      { id: "o2", text: "It was great talking with you at summit; let's keep touch in email.", isCorrect: false },
      { id: "o3", text: "It was great talking with you; let's stay contact on email.", isCorrect: false }
    ],
    correctAnswer: "It was great talking with you at the summit; let's keep in touch by email.",
    explanation: "The standard English idiom is 'keep in touch' or 'stay in touch'."
  },
  {
    id: "a2_u12_l177_p16",
    type: "listening",
    prompt: "Listen to the networking conversation and identify the speaker's industry:",
    audioText: "Hi there! I'm Carlos. I work in renewable energy engineering, focusing primarily on commercial solar panel installations across South America.",
    targetSentence: "Renewable energy engineering / commercial solar installations.",
    options: [
      { id: "o1", text: "Renewable energy engineering / commercial solar installations.", isCorrect: true },
      { id: "o2", text: "Fast food restaurant management.", isCorrect: false },
      { id: "o3", text: "Commercial airline pilot training.", isCorrect: false },
      { id: "o4", text: "Hospital medical surgery.", isCorrect: false }
    ],
    correctAnswer: "Renewable energy engineering / commercial solar installations.",
    explanation: "Carlos explicitly introduces himself as working in renewable energy engineering with a focus on solar panels."
  },
  {
    id: "a2_u12_l177_p17",
    type: "personal_production",
    prompt: "Write a 2-sentence networking elevator pitch stating your background, key skill, and a professional goal:",
    targetSentence: "I am a bilingual software developer with experience in building scalable cloud web applications. I am currently looking to collaborate with international teams on innovative fintech projects.",
    audioText: "I am a bilingual software developer with experience in building scalable cloud web applications. I am currently looking to collaborate with international teams on innovative fintech projects."
  },
  {
    id: "a2_u12_l177_p18",
    type: "dialogue_completion",
    prompt: "Complete the conference networking dialogue:\nAttendee A: 'Have you attended any interesting sessions today?'\nAttendee B: '________________________'",
    sourceSentence: "Have you attended any interesting sessions today?",
    targetSentence: "Yes, the keynote on artificial intelligence in healthcare was fascinating. What about you?",
    options: [
      { id: "o1", text: "Yes, the keynote on artificial intelligence in healthcare was fascinating. What about you?", isCorrect: true },
      { id: "o2", text: "No, conferences are boring so I went to sleep yesterday.", isCorrect: false },
      { id: "o3", text: "I do not speak to anyone at conferences.", isCorrect: false }
    ],
    correctAnswer: "Yes, the keynote on artificial intelligence in healthcare was fascinating. What about you?",
    explanation: "Sharing an insight and returning the question ('What about you?') maintains engaging networking momentum."
  },
  {
    id: "a2_u12_l177_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite networking follow-up invitation:",
    sourceSentence: "Would you like to connect on LinkedIn to stay in touch?",
    targetSentence: "Would you like to connect on LinkedIn to stay in touch?",
    tokens: ["Would", "you", "like", "to", "connect", "on", "LinkedIn", "to", "stay", "in", "touch", "?"],
    correctOrder: ["Would", "you", "like", "to", "connect", "on", "LinkedIn", "to", "stay", "in", "touch", "?"],
    explanation: "'Would you like to connect on LinkedIn to stay in touch?' is a modern networking standard."
  },
  {
    id: "a2_u12_l177_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct professional preposition:",
    sourceSentence: "I have been working [blank] (in / at) software engineering for over six years.",
    targetSentence: "I have been working in software engineering for over six years.",
    text: "I have been working [blank] software engineering for over six years.",
    options: [
      { id: "o1", text: "in", isCorrect: true },
      { id: "o2", text: "on", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "by", isCorrect: false }
    ],
    correctAnswer: "in",
    explanation: "Use preposition 'in' when referring to a field or industry ('in software engineering')."
  },
  {
    id: "a2_u12_l177_p21",
    type: "translation",
    prompt: "Translate to English: 'आपसे मिलकर बहुत अच्छा लगा। यहाँ मेरा विजिटिंग कार्ड है।'",
    sourceSentence: "आपसे मिलकर बहुत अच्छा लगा। यहाँ मेरा विजिटिंग कार्ड है।",
    targetSentence: "It was a pleasure meeting you. Here is my business card.",
    explanation: "'It was a pleasure meeting you. Here is my business card.' is standard networking etiquette."
  },
  {
    id: "a2_u12_l177_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Introduce a colleague to an international contact.",
    sourceSentence: "I'd like to introduce my colleague, Elena, who leads our international business development team.",
    targetSentence: "I'd like to introduce my colleague, Elena, who leads our international business development team.",
    audioText: "I'd like to introduce my colleague, Elena, who leads our international business development team.",
    explanation: "Practice gracious, clear introduction delivery with relative clause ('who leads...')."
  }
];

const l177_review: Exercise[] = [
  {
    id: "a2_u12_l177_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 9 - Talking about Experience): Which sentence correctly uses the Present Perfect to describe professional experience?",
    options: [
      { id: "o1", text: "I have managed international marketing teams for three years.", isCorrect: true },
      { id: "o2", text: "I have manage marketing teams since three years.", isCorrect: false },
      { id: "o3", text: "I manage marketing teams for three years ago.", isCorrect: false },
      { id: "o4", text: "I was managing teams since 3 years.", isCorrect: false }
    ],
    correctAnswer: "I have managed international marketing teams for three years.",
    explanation: "'have managed... for three years' correctly expresses ongoing or completed professional duration."
  },
  {
    id: "a2_u12_l177_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'What do you do [blank] (for / of) a living?'",
    sourceSentence: "What do you do [blank] a living?",
    targetSentence: "What do you do for a living?",
    text: "What do you do [blank] a living?",
    options: [
      { id: "o1", text: "for", isCorrect: true },
      { id: "o2", text: "of", isCorrect: false },
      { id: "o3", text: "in", isCorrect: false },
      { id: "o4", text: "with", isCorrect: false }
    ],
    correctAnswer: "for",
    explanation: "The standard question about occupation is 'What do you do for a living?'."
  },
  {
    id: "a2_u12_l177_r9",
    type: "error_correction",
    prompt: "Correct the preposition error in this introduction:",
    sourceSentence: "I specialize on mobile cybersecurity applications.",
    targetSentence: "I specialize in mobile cybersecurity applications.",
    options: [
      { id: "o1", text: "I specialize in mobile cybersecurity applications.", isCorrect: true },
      { id: "o2", text: "I specialize with mobile cybersecurity.", isCorrect: false },
      { id: "o3", text: "I specialize at mobile cybersecurity.", isCorrect: false }
    ],
    correctAnswer: "I specialize in mobile cybersecurity applications.",
    explanation: "The verb 'specialize' pairs with 'in' ('specialize in something')."
  },
  {
    id: "a2_u12_l177_r10",
    type: "translation",
    prompt: "Translate to English: 'मैं अपने काम में नई तकनीकों का उपयोग करने का आनंद लेता हूँ।'",
    sourceSentence: "मैं अपने काम में नई तकनीकों का उपयोग करने का आनंद लेता हूँ।",
    targetSentence: "I enjoy using new technologies in my work.",
    explanation: "'enjoy + gerund (-ing)' -> 'I enjoy using new technologies in my work.'."
  }
];

const l177_assessment: Exercise[] = [
  {
    id: "a2_u12_l177_a7",
    type: "multiple_choice",
    prompt: "Which opening line is most engaging and professional when starting a conversation at a business reception?",
    options: [
      { id: "o1", text: "Good evening! What brought you to this year's fintech summit?", isCorrect: true },
      { id: "o2", text: "Give me your business card immediately.", isCorrect: false },
      { id: "o3", text: "Why are you standing in this room?", isCorrect: false },
      { id: "o4", text: "I want to sell you my product right now.", isCorrect: false }
    ],
    correctAnswer: "Good evening! What brought you to this year's fintech summit?",
    explanation: "An open, friendly question about the shared event creates an easy, welcoming entry into networking."
  },
  {
    id: "a2_u12_l177_a8",
    type: "fill_blank",
    prompt: "Complete the networking pitch:",
    sourceSentence: "My background is [blank] (in / from) graphic design, and I now lead a digital creative studio.",
    targetSentence: "My background is in graphic design, and I now lead a digital creative studio.",
    text: "My background is [blank] graphic design, and I now lead a digital creative studio.",
    options: [
      { id: "o1", text: "in", isCorrect: true },
      { id: "o2", text: "from", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "by", isCorrect: false }
    ],
    correctAnswer: "in",
    explanation: "'My background is in + field' is the standard self-introduction pattern."
  },
  {
    id: "a2_u12_l177_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence networking pitch introducing yourself, your area of expertise, and your goal at an international conference.",
    sourceSentence: "Hi, I am an e-commerce strategist specializing in supply chain optimization. I am attending this summit to connect with international logistics partners.",
    targetSentence: "Hi, I am an e-commerce strategist specializing in supply chain optimization. I am attending this summit to connect with international logistics partners.",
    audioText: "Hi, I am an e-commerce strategist specializing in supply chain optimization. I am attending this summit to connect with international logistics partners.",
    explanation: "Demonstrate clear articulation, professional self-positioning, and purposeful networking language."
  },
  {
    id: "a2_u12_l177_a10",
    type: "mediation",
    prompt: "Translate this networking follow-up email line for an international colleague: 'सम्मेलन में आपसे मिलना बहुत अच्छा रहा। आइए अगले सप्ताह एक छोटी कॉल शेड्यूल करें।' Provide the best translation.",
    sourceSentence: "सम्मेलन में आपसे मिलना बहुत अच्छा रहा। आइए अगले सप्ताह एक छोटी कॉल शेड्यूल करें।",
    targetSentence: "It was great meeting you at the conference. Let us schedule a quick call next week.",
    options: [
      { id: "o1", text: "It was great meeting you at the conference. Let us schedule a quick call next week.", isCorrect: true },
      { id: "o2", text: "We did not meet at conference so call me yesterday.", isCorrect: false },
      { id: "o3", text: "Conference was cancelled so do not email me.", isCorrect: false }
    ],
    correctAnswer: "It was great meeting you at the conference. Let us schedule a quick call next week.",
    explanation: "'It was great meeting you at the conference. Let us schedule a quick call next week' is the ideal networking follow-up."
  }
];

// =========================================================================
// LESSON 178: Spaced Retrieval, Error Remediation & Grammar Contrast
// =========================================================================
const l178_practice: Exercise[] = [
  {
    id: "a2_u12_l178_p11",
    type: "reading",
    prompt: "Read the diagnostic review and identify the grammatical contrast being tested:\n\"Grammar Diagnostic: Sentence A: 'If we invest in automation, productivity will increase.' Sentence B: 'If we invested in quantum computing, research speeds would multiply tenfold.' Sentence C: 'The report was finalized yesterday by our senior auditor.'\"\nWhich conditional type is represented in Sentence B?",
    sourceSentence: "Which conditional type is represented in Sentence B?",
    targetSentence: "Second Conditional (hypothetical condition with past simple + would).",
    options: [
      { id: "o1", text: "Second Conditional (hypothetical condition with past simple + would).", isCorrect: true },
      { id: "o2", text: "First Conditional (realistic future possibility).", isCorrect: false },
      { id: "o3", text: "Passive voice present simple.", isCorrect: false },
      { id: "o4", text: "Present Perfect Continuous.", isCorrect: false }
    ],
    correctAnswer: "Second Conditional (hypothetical condition with past simple + would).",
    explanation: "Sentence B uses 'invested' (past simple) and 'would multiply', which is the Second Conditional."
  },
  {
    id: "a2_u12_l178_p12",
    type: "speaking",
    prompt: "Speak clearly and accurately: Contrast Real vs. Hypothetical conditions in two sentences.",
    sourceSentence: "If our client approves the contract tomorrow, we will begin construction immediately. However, if we had unlimited funding, we would design an even larger facility.",
    targetSentence: "If our client approves the contract tomorrow, we will begin construction immediately. However, if we had unlimited funding, we would design an even larger facility.",
    audioText: "If our client approves the contract tomorrow, we will begin construction immediately. However, if we had unlimited funding, we would design an even larger facility.",
    explanation: "Demonstrate clear contrast between First Conditional ('approves... will begin') and Second Conditional ('had... would design')."
  },
  {
    id: "a2_u12_l178_p13",
    type: "match_pairs",
    prompt: "Match Unit 12 grammar structures with their core functions:",
    options: [
      { id: "m1", text: "Passive Voice (was / were + V3)" },
      { id: "m1_m", text: "focus on the action rather than the actor" },
      { id: "m2", text: "Second Conditional (If + V2, would + V1)" },
      { id: "m2_m", text: "discuss hypothetical or unreal present/future" },
      { id: "m3", text: "Indirect Questions (Could you tell me...)" },
      { id: "m3_m", text: "make polite and diplomatic inquiries" },
      { id: "m4", text: "Modals of Deduction (must / can't be)" },
      { id: "m4_m", text: "express certainty based on logical evidence" }
    ]
  },
  {
    id: "a2_u12_l178_p14",
    type: "mediation",
    prompt: "Mediate this comprehensive review sentence into English: 'यदि सर्वर की मरम्मत समय पर हो जाती, तो हम डेटा खोने से बच सकते थे।' (Choose the closest A2 second conditional equivalent: 'यदि सर्वर अपडेट हो, तो सिस्टम क्रैश नहीं होगा')",
    sourceSentence: "यदि हमारे पास बैकअप होता, तो हम डेटा नहीं खोते।",
    targetSentence: "If we had a backup, we would not lose any data.",
    options: [
      { id: "o1", text: "If we had a backup, we would not lose any data.", isCorrect: true },
      { id: "o2", text: "If we have backup, we lost data yesterday.", isCorrect: false },
      { id: "o3", text: "We do not have backup so we delete data.", isCorrect: false }
    ],
    correctAnswer: "If we had a backup, we would not lose any data.",
    explanation: "Second Conditional: 'If we had a backup, we would not lose any data.'"
  },
  {
    id: "a2_u12_l178_p15",
    type: "error_correction",
    prompt: "Identify and correct the mixed grammar error in this sentence:",
    sourceSentence: "Could you tell me where is the document that was sign by the manager?",
    targetSentence: "Could you tell me where the document that was signed by the manager is?",
    options: [
      { id: "o1", text: "Could you tell me where the document that was signed by the manager is?", isCorrect: true },
      { id: "o2", text: "Could you tell me where is the document signed by manager?", isCorrect: false },
      { id: "o3", text: "Tell me where document signed by manager is right now?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me where the document that was signed by the manager is?",
    explanation: "Indirect question requires statement word order, and passive requires past participle 'signed'."
  },
  {
    id: "a2_u12_l178_p16",
    type: "listening",
    prompt: "Listen to the diagnostic synthesis and identify the grammatical structure used:",
    audioText: "The new laboratory equipment was purchased last month, and all scientific trials are being conducted under strict supervision.",
    targetSentence: "Past Simple Passive and Present Continuous Passive.",
    options: [
      { id: "o1", text: "Past Simple Passive and Present Continuous Passive.", isCorrect: true },
      { id: "o2", text: "Second Conditional and Past Perfect.", isCorrect: false },
      { id: "o3", text: "Future continuous and imperatives.", isCorrect: false },
      { id: "o4", text: "Zero conditional and reported speech.", isCorrect: false }
    ],
    correctAnswer: "Past Simple Passive and Present Continuous Passive.",
    explanation: "'was purchased' is Past Simple passive; 'are being conducted' is Present Continuous passive."
  },
  {
    id: "a2_u12_l178_p17",
    type: "personal_production",
    prompt: "Write 2 sentences demonstrating mastery of passive voice and indirect questions:",
    targetSentence: "The final project proposal was approved by the executive committee yesterday. Could you please tell me when the kickoff meeting will be scheduled?",
    audioText: "The final project proposal was approved by the executive committee yesterday. Could you please tell me when the kickoff meeting will be scheduled?"
  },
  {
    id: "a2_u12_l178_p18",
    type: "dialogue_completion",
    prompt: "Complete the diagnostic dialogue:\nAuditor: 'Why wasn't the security checklist submitted on Friday?'\nEngineer: '________________________'",
    sourceSentence: "Why wasn't the security checklist submitted on Friday?",
    targetSentence: "The checklist was delayed because an unexpected server error was being investigated.",
    options: [
      { id: "o1", text: "The checklist was delayed because an unexpected server error was being investigated.", isCorrect: true },
      { id: "o2", text: "We cancelled the company on Friday.", isCorrect: false },
      { id: "o3", text: "If we submit checklist yesterday, it will rain.", isCorrect: false }
    ],
    correctAnswer: "The checklist was delayed because an unexpected server error was being investigated.",
    explanation: "Passive voice accurately explains the situation professionally."
  },
  {
    id: "a2_u12_l178_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a deduction about a completed event:",
    sourceSentence: "The team must have resolved the issue because the servers are online.",
    targetSentence: "The team must have resolved the issue because the servers are online.",
    tokens: ["The", "team", "must", "have", "resolved", "the", "issue", "because", "the", "servers", "are", "online", "."],
    correctOrder: ["The", "team", "must", "have", "resolved", "the", "issue", "because", "the", "servers", "are", "online", "."],
    explanation: "'must have + V3' expresses a logical conclusion about a past event."
  },
  {
    id: "a2_u12_l178_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct passive participle:",
    sourceSentence: "The software glitch was [blank] (discover / discovered) during automated unit testing.",
    targetSentence: "The software glitch was discovered during automated unit testing.",
    text: "The software glitch was [blank] during automated unit testing.",
    options: [
      { id: "o1", text: "discovered", isCorrect: true },
      { id: "o2", text: "discover", isCorrect: false },
      { id: "o3", text: "discovering", isCorrect: false },
      { id: "o4", text: "discovers", isCorrect: false }
    ],
    correctAnswer: "discovered",
    explanation: "Passive voice requires past participle 'discovered'."
  },
  {
    id: "a2_u12_l178_p21",
    type: "translation",
    prompt: "Translate to English: 'यदि मौसम अच्छा रहा, तो हम हवाई अड्डे के लिए समय पर निकलेंगे।' (First conditional)",
    sourceSentence: "यदि मौसम अच्छा रहा, तो हम हवाई अड्डे के लिए समय पर निकलेंगे।",
    targetSentence: "If the weather remains good, we will leave for the airport on time.",
    explanation: "First conditional: 'If the weather remains good, we will leave for the airport on time.'."
  },
  {
    id: "a2_u12_l178_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Review three core rules of professional communication.",
    sourceSentence: "First, use indirect questions for polite inquiries. Second, acknowledge others' viewpoints before disagreeing. Finally, confirm agreements in writing.",
    targetSentence: "First, use indirect questions for polite inquiries. Second, acknowledge others' viewpoints before disagreeing. Finally, confirm agreements in writing.",
    audioText: "First, use indirect questions for polite inquiries. Second, acknowledge others' viewpoints before disagreeing. Finally, confirm agreements in writing.",
    explanation: "Practice clear sequencing and professional intonation."
  }
];

const l178_review: Exercise[] = [
  {
    id: "a2_u12_l178_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Units 7–11 Contrast): Which sentence demonstrates accurate tense harmony between Past Simple and Past Continuous?",
    options: [
      { id: "o1", text: "While the engineers were running the test, the power suddenly went out.", isCorrect: true },
      { id: "o2", text: "While engineers ran test, power was suddenly go out.", isCorrect: false },
      { id: "o3", text: "While engineers are running test, power went out yesterday.", isCorrect: false },
      { id: "o4", text: "Engineers were run test when power was out.", isCorrect: false }
    ],
    correctAnswer: "While the engineers were running the test, the power suddenly went out.",
    explanation: "Past Continuous ('were running') for ongoing background action interrupted by Past Simple ('went out')."
  },
  {
    id: "a2_u12_l178_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'If I [blank] (know / knew) his email address, I would forward him the slides.'",
    sourceSentence: "If I [blank] his email address, I would forward him the slides.",
    targetSentence: "If I knew his email address, I would forward him the slides.",
    text: "If I [blank] his email address, I would forward him the slides.",
    options: [
      { id: "o1", text: "knew", isCorrect: true },
      { id: "o2", text: "know", isCorrect: false },
      { id: "o3", text: "known", isCorrect: false },
      { id: "o4", text: "would know", isCorrect: false }
    ],
    correctAnswer: "knew",
    explanation: "Second Conditional if-clause requires Past Simple 'knew'."
  },
  {
    id: "a2_u12_l178_r9",
    type: "error_correction",
    prompt: "Correct the passive voice preposition in this sentence:",
    sourceSentence: "The new policy was announced with the CEO during the town hall.",
    targetSentence: "The new policy was announced by the CEO during the town hall.",
    options: [
      { id: "o1", text: "The new policy was announced by the CEO during the town hall.", isCorrect: true },
      { id: "o2", text: "The new policy announced of the CEO.", isCorrect: false },
      { id: "o3", text: "The new policy was announce to the CEO.", isCorrect: false }
    ],
    correctAnswer: "The new policy was announced by the CEO during the town hall.",
    explanation: "Use 'by' to introduce the agent in a passive sentence ('announced by the CEO')."
  },
  {
    id: "a2_u12_l178_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या आप मुझे बता सकते हैं कि निकटतम बैंक कहाँ है?'",
    sourceSentence: "क्या आप मुझे बता सकते हैं कि निकटतम बैंक कहाँ है?",
    targetSentence: "Could you tell me where the nearest bank is?",
    explanation: "Indirect question word order: 'where + subject ('the nearest bank') + verb ('is')'."
  }
];

const l178_assessment: Exercise[] = [
  {
    id: "a2_u12_l178_a7",
    type: "multiple_choice",
    prompt: "Select the sentence that has ZERO grammatical errors:",
    options: [
      { id: "o1", text: "If we had more time, we would conduct a thorough usability study.", isCorrect: true },
      { id: "o2", text: "If we would have more time, we will conduct study.", isCorrect: false },
      { id: "o3", text: "If we had more time, we conduct a study yesterday.", isCorrect: false },
      { id: "o4", text: "If we having more time, we would conduct study.", isCorrect: false }
    ],
    correctAnswer: "If we had more time, we would conduct a thorough usability study.",
    explanation: "Correct Second Conditional: 'If + had (Past Simple), would + conduct (Base Verb)'."
  },
  {
    id: "a2_u12_l178_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct deduction modal:",
    sourceSentence: "He hasn't eaten all day. He [blank] (must / can't) be starving!",
    targetSentence: "He hasn't eaten all day. He must be starving!",
    text: "He hasn't eaten all day. He [blank] be starving!",
    options: [
      { id: "o1", text: "must", isCorrect: true },
      { id: "o2", text: "can't", isCorrect: false },
      { id: "o3", text: "shouldn't", isCorrect: false },
      { id: "o4", text: "might not", isCorrect: false }
    ],
    correctAnswer: "must",
    explanation: "Not eating all day leads to a strong positive logical deduction ('must be starving')."
  },
  {
    id: "a2_u12_l178_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Contrast two scenarios using First Conditional (real) and Second Conditional (hypothetical).",
    sourceSentence: "If our flight arrives on time tonight, we will attend the welcoming dinner. However, if we owned a private jet, we would fly directly to the resort.",
    targetSentence: "If our flight arrives on time tonight, we will attend the welcoming dinner. However, if we owned a private jet, we would fly directly to the resort.",
    audioText: "If our flight arrives on time tonight, we will attend the welcoming dinner. However, if we owned a private jet, we would fly directly to the resort.",
    explanation: "Demonstrate accurate conditional contrast with smooth transition."
  },
  {
    id: "a2_u12_l178_a10",
    type: "mediation",
    prompt: "Translate this multi-clause remediation sentence into English: 'सभी सर्वर कल रात अपडेट किए गए थे, इसलिए सिस्टम अब सुचारू रूप से चलना चाहिए।' Provide the best translation.",
    sourceSentence: "सभी सर्वर कल रात अपडेट किए गए थे, इसलिए सिस्टम अब सुचारू रूप से चलना चाहिए।",
    targetSentence: "All servers were updated last night, so the system should run smoothly now.",
    options: [
      { id: "o1", text: "All servers were updated last night, so the system should run smoothly now.", isCorrect: true },
      { id: "o2", text: "Servers updated last night because system will run yesterday.", isCorrect: false },
      { id: "o3", text: "No servers were updated so system is deleted.", isCorrect: false }
    ],
    correctAnswer: "All servers were updated last night, so the system should run smoothly now.",
    explanation: "'were updated' (Past Passive) + 'should run smoothly' (Expectation modal) accurately translates the sentence."
  }
];

// =========================================================================
// LESSON 179: Integrated Workplace Simulation & Communicative Performance
// =========================================================================
const l179_practice: Exercise[] = [
  {
    id: "a2_u12_l179_p11",
    type: "reading",
    prompt: "Read the full workplace scenario simulation and answer the question:\n\"Simulation Case: TechStart Solutions is pitching a digital inventory tracking system to Global Retail Inc. During the meeting, TechStart presents the software benefits using visual charts. Global Retail raises concerns about the 6-week onboarding timeline. In response, TechStart's lead proposes a compromise: 'What if we deploy the core scanning tools in week two, and conduct staff training in parallel?' Global Retail agrees to this condition, provided that weekly progress reports are shared. The meeting concludes with mutual agreement.\"\nWhat specific compromise resolved the timeline concern?",
    sourceSentence: "What specific compromise resolved the timeline concern?",
    targetSentence: "Deploying core scanning tools in week two and training staff in parallel.",
    options: [
      { id: "o1", text: "Deploying core scanning tools in week two and training staff in parallel.", isCorrect: true },
      { id: "o2", text: "Cancelling the entire inventory project immediately.", isCorrect: false },
      { id: "o3", text: "Extending the project timeline to twelve months.", isCorrect: false },
      { id: "o4", text: "Firing the onboarding training team.", isCorrect: false }
    ],
    correctAnswer: "Deploying core scanning tools in week two and training staff in parallel.",
    explanation: "TechStart proposed deploying core scanning tools in week two with parallel training, which Global Retail accepted."
  },
  {
    id: "a2_u12_l179_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Deliver an opening pitch for a workplace product demo.",
    sourceSentence: "Good morning everyone. Today, I'm delighted to present our automated workflow platform, which reduces administrative processing time by 45%.",
    targetSentence: "Good morning everyone. Today, I'm delighted to present our automated workflow platform, which reduces administrative processing time by 45%.",
    audioText: "Good morning everyone. Today, I'm delighted to present our automated workflow platform, which reduces administrative processing time by 45%.",
    explanation: "Practice enthusiastic, polished presentation delivery."
  },
  {
    id: "a2_u12_l179_p13",
    type: "match_pairs",
    prompt: "Match workplace simulation phases with their communicative objectives:",
    options: [
      { id: "m1", text: "Phase 1: Pitch & Presentation" },
      { id: "m1_m", text: "deliver structured value proposition with signposts" },
      { id: "m2", text: "Phase 2: Client Q&A" },
      { id: "m2_m", text: "answer inquiries using indirect & polite forms" },
      { id: "m3", text: "Phase 3: Compromise & Negotiation" },
      { id: "m3_m", text: "find common ground using conditional chunks" },
      { id: "m4", text: "Phase 4: Follow-up & Confirmation" },
      { id: "m4_m", text: "send written summary confirming all deliverables" }
    ]
  },
  {
    id: "a2_u12_l179_p14",
    type: "mediation",
    prompt: "Mediate this simulation agreement into English for the executive summary: 'दोनों पक्ष इस बात पर सहमत हुए कि पहला चरण अगले सोमवार को शुरू होगा।' Choose the best translation.",
    sourceSentence: "दोनों पक्ष इस बात पर सहमत हुए कि पहला चरण अगले सोमवार को शुरू होगा।",
    targetSentence: "Both parties agreed that phase one will commence next Monday.",
    options: [
      { id: "o1", text: "Both parties agreed that phase one will commence next Monday.", isCorrect: true },
      { id: "o2", text: "Both parties disagreed because phase one was cancelled.", isCorrect: false },
      { id: "o3", text: "Phase one commenced yesterday without any agreement.", isCorrect: false }
    ],
    correctAnswer: "Both parties agreed that phase one will commence next Monday.",
    explanation: "'Both parties agreed that phase one will commence next Monday' captures the formal agreement."
  },
  {
    id: "a2_u12_l179_p15",
    type: "error_correction",
    prompt: "Identify and correct the negotiation follow-up error:",
    sourceSentence: "Thank you for the meeting; we look forward to collaborate with your team.",
    targetSentence: "Thank you for the meeting; we look forward to collaborating with your team.",
    options: [
      { id: "o1", text: "Thank you for the meeting; we look forward to collaborating with your team.", isCorrect: true },
      { id: "o2", text: "Thank you for meeting; we look forward to collaborate on team.", isCorrect: false },
      { id: "o3", text: "Thank you for meeting; we looking forward collaborate with you.", isCorrect: false }
    ],
    correctAnswer: "Thank you for the meeting; we look forward to collaborating with your team.",
    explanation: "The phrase 'look forward to' requires a gerund (-ing) ('collaborating')."
  },
  {
    id: "a2_u12_l179_p16",
    type: "listening",
    prompt: "Listen to the simulated client call and identify what the client requested:",
    audioText: "Client: 'We really appreciate the demonstration today. Could you please send us the revised financial quotation and implementation roadmap by Thursday afternoon?'",
    targetSentence: "The revised financial quotation and implementation roadmap by Thursday.",
    options: [
      { id: "o1", text: "The revised financial quotation and implementation roadmap by Thursday.", isCorrect: true },
      { id: "o2", text: "A cancellation of the software contract immediately.", isCorrect: false },
      { id: "o3", text: "Free laptops for all company employees.", isCorrect: false },
      { id: "o4", text: "A refund for products bought last year.", isCorrect: false }
    ],
    correctAnswer: "The revised financial quotation and implementation roadmap by Thursday.",
    explanation: "The client asks for 'the revised financial quotation and implementation roadmap by Thursday afternoon'."
  },
  {
    id: "a2_u12_l179_p17",
    type: "personal_production",
    prompt: "Write a 3-sentence simulated business follow-up email summarizing a meeting, confirming next steps, and expressing appreciation:",
    targetSentence: "Thank you for taking the time to meet with us today to discuss the software integration project. As agreed, we will send the revised implementation timeline by Thursday. We look forward to collaborating with your team on this exciting milestone.",
    audioText: "Thank you for taking the time to meet with us today to discuss the software integration project. As agreed, we will send the revised implementation timeline by Thursday. We look forward to collaborating with your team on this exciting milestone."
  },
  {
    id: "a2_u12_l179_p18",
    type: "dialogue_completion",
    prompt: "Complete the simulated workplace meeting conclusion:\nClient Executive: 'We are very pleased with today's proposal and look forward to the launch.'\nProject Lead: '________________________'",
    sourceSentence: "We are very pleased with today's proposal and look forward to the launch.",
    targetSentence: "Thank you very much. I will email the finalized agreement and milestone schedule this afternoon.",
    options: [
      { id: "o1", text: "Thank you very much. I will email the finalized agreement and milestone schedule this afternoon.", isCorrect: true },
      { id: "o2", text: "You should not be pleased because we might fail.", isCorrect: false },
      { id: "o3", text: "The agreement was deleted last week.", isCorrect: false }
    ],
    correctAnswer: "Thank you very much. I will email the finalized agreement and milestone schedule this afternoon.",
    explanation: "A gracious acknowledgement with a concrete next action closes the meeting professionally."
  },
  {
    id: "a2_u12_l179_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a formal follow-up sentence:",
    sourceSentence: "Please do not hesitate to contact us if you have any questions.",
    targetSentence: "Please do not hesitate to contact us if you have any questions.",
    tokens: ["Please", "do", "not", "hesitate", "to", "contact", "us", "if", "you", "have", "any", "questions", "."],
    correctOrder: ["Please", "do", "not", "hesitate", "to", "contact", "us", "if", "you", "have", "any", "questions", "."],
    explanation: "'Please do not hesitate to contact us if you have any questions' is the gold standard business closing."
  },
  {
    id: "a2_u12_l179_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct preposition:",
    sourceSentence: "We are on track to launch phase one [blank] (in / on) schedule.",
    targetSentence: "We are on track to launch phase one on schedule.",
    text: "We are on track to launch phase one [blank] schedule.",
    options: [
      { id: "o1", text: "on", isCorrect: true },
      { id: "o2", text: "in", isCorrect: false },
      { id: "o3", text: "at", isCorrect: false },
      { id: "o4", text: "by", isCorrect: false }
    ],
    correctAnswer: "on",
    explanation: "The idiom is 'on schedule'."
  },
  {
    id: "a2_u12_l179_p21",
    type: "translation",
    prompt: "Translate to English: 'हम आपके साथ मिलकर काम करने के लिए तत्पर हैं।'",
    sourceSentence: "हम आपके साथ मिलकर काम करने के लिए तत्पर हैं।",
    targetSentence: "We look forward to working with you.",
    explanation: "'We look forward to working with you.' (look forward to + -ing)."
  },
  {
    id: "a2_u12_l179_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Deliver a 2-sentence closing statement for a major client simulation.",
    sourceSentence: "Thank you for your valuable feedback today. We will incorporate all your suggestions into the final project charter.",
    targetSentence: "Thank you for your valuable feedback today. We will incorporate all your suggestions into the final project charter.",
    audioText: "Thank you for your valuable feedback today. We will incorporate all your suggestions into the final project charter.",
    explanation: "Practice polished, professional speech delivery."
  }
];

const l179_review: Exercise[] = [
  {
    id: "a2_u12_l179_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 Synthesis): Which sentence correctly combines a passive verb with a cause connector?",
    options: [
      { id: "o1", text: "The delivery was delayed due to severe weather conditions.", isCorrect: true },
      { id: "o2", text: "The delivery delayed because weather was bad.", isCorrect: false },
      { id: "o3", text: "The delivery was delay due to bad weather.", isCorrect: false },
      { id: "o4", text: "Due to bad weather the delivery was delay.", isCorrect: false }
    ],
    correctAnswer: "The delivery was delayed due to severe weather conditions.",
    explanation: "'was delayed' (passive) + 'due to + noun' ('severe weather conditions')."
  },
  {
    id: "a2_u12_l179_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'We look forward [blank] (to seeing / to see) you at tomorrow's workshop.'",
    sourceSentence: "We look forward [blank] you at tomorrow's workshop.",
    targetSentence: "We look forward to seeing you at tomorrow's workshop.",
    text: "We look forward [blank] you at tomorrow's workshop.",
    options: [
      { id: "o1", text: "to seeing", isCorrect: true },
      { id: "o2", text: "to see", isCorrect: false },
      { id: "o3", text: "seeing", isCorrect: false },
      { id: "o4", text: "for seeing", isCorrect: false }
    ],
    correctAnswer: "to seeing",
    explanation: "'look forward to + gerund (-ing)' -> 'to seeing'."
  },
  {
    id: "a2_u12_l179_r9",
    type: "error_correction",
    prompt: "Correct the indirect question error:",
    sourceSentence: "Could you tell me when will the revised roadmap be ready?",
    targetSentence: "Could you tell me when the revised roadmap will be ready?",
    options: [
      { id: "o1", text: "Could you tell me when the revised roadmap will be ready?", isCorrect: true },
      { id: "o2", text: "Could you tell me when is roadmap ready will be?", isCorrect: false },
      { id: "o3", text: "When will roadmap be ready could you tell me?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me when the revised roadmap will be ready?",
    explanation: "Embedded clause in indirect questions uses statement word order ('when the revised roadmap will be ready')."
  },
  {
    id: "a2_u12_l179_r10",
    type: "translation",
    prompt: "Translate to English: 'बैठक समाप्त होने के बाद, हम सभी को कार्यवृत्त भेज देंगे।'",
    sourceSentence: "बैठक समाप्त होने के बाद, हम सभी को कार्यवृत्त भेज देंगे।",
    targetSentence: "After the meeting finishes, we will send the minutes to everyone.",
    explanation: "Future time clause with Present Simple: 'After the meeting finishes, we will send...'."
  }
];

const l179_assessment: Exercise[] = [
  {
    id: "a2_u12_l179_a7",
    type: "multiple_choice",
    prompt: "Which sentence effectively concludes a professional client meeting and establishes clear next steps?",
    options: [
      { id: "o1", text: "We will summarize today's action items and send the revised proposal by tomorrow morning.", isCorrect: true },
      { id: "o2", text: "The meeting is over so everyone can leave immediately.", isCorrect: false },
      { id: "o3", text: "We do not know what to do next.", isCorrect: false },
      { id: "o4", text: "You must call us every hour until we respond.", isCorrect: false }
    ],
    correctAnswer: "We will summarize today's action items and send the revised proposal by tomorrow morning.",
    explanation: "Action-oriented and time-bound follow-up demonstrates executive professionalism."
  },
  {
    id: "a2_u12_l179_a8",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate conditional conjunction:",
    sourceSentence: "We will sign the agreement [blank] (as long as / unless) the revised terms are included.",
    targetSentence: "We will sign the agreement as long as the revised terms are included.",
    text: "We will sign the agreement [blank] the revised terms are included.",
    options: [
      { id: "o1", text: "as long as", isCorrect: true },
      { id: "o2", text: "unless", isCorrect: false },
      { id: "o3", text: "in case", isCorrect: false },
      { id: "o4", text: "although", isCorrect: false }
    ],
    correctAnswer: "as long as",
    explanation: "'as long as' establishes the positive condition for signing."
  },
  {
    id: "a2_u12_l179_a9",
    type: "speaking",
    prompt: "Can-Do Assessment: Deliver a 2-sentence workplace performance pitch summarizing an achievement and proposing a strategic next step.",
    sourceSentence: "Our team has completed all phase one milestones ahead of schedule. We now recommend launching phase two testing with selected enterprise clients next Monday.",
    targetSentence: "Our team has completed all phase one milestones ahead of schedule. We now recommend launching phase two testing with selected enterprise clients next Monday.",
    audioText: "Our team has completed all phase one milestones ahead of schedule. We now recommend launching phase two testing with selected enterprise clients next Monday.",
    explanation: "Demonstrate high-level communicative competence, concise structuring, and confident delivery."
  },
  {
    id: "a2_u12_l179_a10",
    type: "mediation",
    prompt: "Translate this executive simulation milestone for an international board: 'परियोजना समय पर और बजट के भीतर पूरी हो गई है, और सभी प्रमुख लक्ष्यों को हासिल कर लिया गया है।' Provide the best translation.",
    sourceSentence: "परियोजना समय पर और बजट के भीतर पूरी हो गई है, और सभी प्रमुख लक्ष्यों को हासिल कर लिया गया है।",
    targetSentence: "The project has been completed on time and within budget, and all key milestones have been achieved.",
    options: [
      { id: "o1", text: "The project has been completed on time and within budget, and all key milestones have been achieved.", isCorrect: true },
      { id: "o2", text: "The project was cancelled because milestones were not achieved.", isCorrect: false },
      { id: "o3", text: "We will complete project next year if budget is available.", isCorrect: false }
    ],
    correctAnswer: "The project has been completed on time and within budget, and all key milestones have been achieved.",
    explanation: "Present Perfect passive ('has been completed... have been achieved') accurately conveys accomplished institutional results."
  }
];

// =========================================================================
// LESSON 180: Unit 12 Master Capstone & CEFR A2 Culminating Milestone
// =========================================================================
const l180_practice: Exercise[] = [
  {
    id: "a2_u12_l180_p11",
    type: "reading",
    prompt: "Read the CEFR A2 Master Capstone Synthesis and answer the comprehensive question:\n\"CEFR A2 Capstone Synthesis: Over the course of CEFR A2 (Units 7–12), learners have acquired communicative proficiency across multiple real-world domains: navigating travel itineraries, managing workplace updates, troubleshooting technical glitches, presenting ideas with signposts, negotiating collaborative compromises, making diplomatic inquiries, resolving conflicts tactfully, and summarizing institutional outcomes. In this culminating evaluation, learners demonstrate their ability to seamlessly synthesize grammatical precision, rich vocabulary, active listening, and spontaneous spoken fluency across diverse professional scenarios.\"\nWhat is the primary objective of this Master Capstone evaluation?",
    sourceSentence: "What is the primary objective of this Master Capstone evaluation?",
    targetSentence: "To demonstrate full CEFR A2 communicative synthesis and fluency across diverse scenarios.",
    options: [
      { id: "o1", text: "To demonstrate full CEFR A2 communicative synthesis and fluency across diverse scenarios.", isCorrect: true },
      { id: "o2", text: "To memorize isolated grammar rules without speaking.", isCorrect: false },
      { id: "o3", text: "To cancel all previous lesson learning records.", isCorrect: false },
      { id: "o4", text: "To take a single-word spelling test.", isCorrect: false }
    ],
    correctAnswer: "To demonstrate full CEFR A2 communicative synthesis and fluency across diverse scenarios.",
    explanation: "The synthesis states the objective is to demonstrate full CEFR A2 communicative synthesis, fluency, and precision across diverse professional and personal contexts."
  },
  {
    id: "a2_u12_l180_p12",
    type: "speaking",
    prompt: "Speak clearly and authoritatively: Deliver a 2-sentence self-assessment of your CEFR A2 English language mastery.",
    sourceSentence: "I can communicate confidently in both professional and social situations, describe complex processes, and negotiate practical solutions in English.",
    targetSentence: "I can communicate confidently in both professional and social situations, describe complex processes, and negotiate practical solutions in English.",
    audioText: "I can communicate confidently in both professional and social situations, describe complex processes, and negotiate practical solutions in English.",
    explanation: "Practice fluent, expressive delivery reflecting CEFR A2 exit-level mastery."
  },
  {
    id: "a2_u12_l180_p13",
    type: "match_pairs",
    prompt: "Match the CEFR A2 core competencies with their real-world communicative demonstrations:",
    options: [
      { id: "m1", text: "Workplace Status Reporting" },
      { id: "m1_m", text: "explain milestone progress with Present Perfect & Past Simple" },
      { id: "m2", text: "Tactful Conflict Resolution" },
      { id: "m2_m", text: "acknowledge perspectives and offer diplomatic compromises" },
      { id: "m3", text: "Hypothetical Pitching" },
      { id: "m3_m", text: "propose innovative solutions using Second Conditional" },
      { id: "m4", text: "Logistics Coordination" },
      { id: "m4_m", text: "coordinate itineraries using future time clauses" }
    ]
  },
  {
    id: "a2_u12_l180_p14",
    type: "mediation",
    prompt: "Mediate this comprehensive culminating certification statement into English: 'मैंने सभी A2 स्तर के शिक्षण मॉड्यूल सफलतापूर्वक पूरे कर लिए हैं और मैं धाराप्रवाह संवाद करने के लिए तैयार हूँ।' Choose the best translation.",
    sourceSentence: "मैंने सभी A2 स्तर के शिक्षण मॉड्यूल सफलतापूर्वक पूरे कर लिए हैं और मैं धाराप्रवाह संवाद करने के लिए तैयार हूँ।",
    targetSentence: "I have successfully completed all A2 learning modules and I am ready to communicate fluently.",
    options: [
      { id: "o1", text: "I have successfully completed all A2 learning modules and I am ready to communicate fluently.", isCorrect: true },
      { id: "o2", text: "I did not complete modules because A2 was difficult.", isCorrect: false },
      { id: "o3", text: "I will complete A2 modules next century.", isCorrect: false }
    ],
    correctAnswer: "I have successfully completed all A2 learning modules and I am ready to communicate fluently.",
    explanation: "'I have successfully completed all A2 learning modules and I am ready to communicate fluently' expresses complete mastery."
  },
  {
    id: "a2_u12_l180_p15",
    type: "error_correction",
    prompt: "Identify and correct the final capstone sentence error:",
    sourceSentence: "We have achieved all our learning goals because we worked hard throughout the course.",
    targetSentence: "We have achieved all our learning goals because we worked hard throughout the course.",
    options: [
      { id: "o1", text: "We have achieved all our learning goals because we worked hard throughout the course.", isCorrect: true },
      { id: "o2", text: "We have achieve all goals because we work hard.", isCorrect: false },
      { id: "o3", text: "We achieved all goals because we have work hard.", isCorrect: false }
    ],
    correctAnswer: "We have achieved all our learning goals because we worked hard throughout the course.",
    explanation: "Present perfect 'have achieved' + clause with past simple 'worked' is grammatically flawless."
  },
  {
    id: "a2_u12_l180_p16",
    type: "listening",
    prompt: "Listen to the CEFR A2 certification address and identify the speaker's commendation:",
    audioText: "Congratulations to all learners! You have demonstrated comprehensive mastery of CEFR A2 communicative competencies, from complex workplace negotiations to spontaneous daily interactions.",
    targetSentence: "Comprehensive mastery of CEFR A2 competencies in workplace and daily interactions.",
    options: [
      { id: "o1", text: "Comprehensive mastery of CEFR A2 competencies in workplace and daily interactions.", isCorrect: true },
      { id: "o2", text: "A requirement to start A1 from the beginning.", isCorrect: false },
      { id: "o3", text: "A cancellation of all language certificates.", isCorrect: false },
      { id: "o4", text: "A warning about failing grammar exams.", isCorrect: false }
    ],
    correctAnswer: "Comprehensive mastery of CEFR A2 competencies in workplace and daily interactions.",
    explanation: "The address praises comprehensive mastery of CEFR A2 competencies across workplace and daily interactions."
  },
  {
    id: "a2_u12_l180_p17",
    type: "personal_production",
    prompt: "Write a 3-sentence master capstone reflection detailing what you have accomplished in English and how you will apply it in your professional or academic life:",
    targetSentence: "Throughout this course, I have mastered essential English skills for presentations, negotiations, and cross-cultural communication. I can now express hypothetical solutions, handle unexpected challenges, and collaborate effectively with international peers. In the future, I will use these skills to advance my career in global projects.",
    audioText: "Throughout this course, I have mastered essential English skills for presentations, negotiations, and cross-cultural communication. I can now express hypothetical solutions, handle unexpected challenges, and collaborate effectively with international peers. In the future, I will use these skills to advance my career in global projects."
  },
  {
    id: "a2_u12_l180_p18",
    type: "dialogue_completion",
    prompt: "Complete the capstone evaluation exchange:\nExaminer: 'How do you handle unexpected challenges when collaborating with international teams?'\nCandidate: '________________________'",
    sourceSentence: "How do you handle unexpected challenges when collaborating with international teams?",
    targetSentence: "I practice active listening, use polite indirect questions to clarify issues, and propose collaborative compromises that respect everyone's perspective.",
    options: [
      { id: "o1", text: "I practice active listening, use polite indirect questions to clarify issues, and propose collaborative compromises that respect everyone's perspective.", isCorrect: true },
      { id: "o2", text: "I ignore all international team members and do everything alone.", isCorrect: false },
      { id: "o3", text: "I quit the team whenever a challenge occurs.", isCorrect: false }
    ],
    correctAnswer: "I practice active listening, use polite indirect questions to clarify issues, and propose collaborative compromises that respect everyone's perspective.",
    explanation: "This response synthesizes active listening, polite inquiry, and collaborative compromise."
  },
  {
    id: "a2_u12_l180_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a CEFR A2 mastery summary statement:",
    sourceSentence: "We have developed the confidence and fluency to succeed in international communication.",
    targetSentence: "We have developed the confidence and fluency to succeed in international communication.",
    tokens: ["We", "have", "developed", "the", "confidence", "and", "fluency", "to", "succeed", "in", "international", "communication", "."],
    correctOrder: ["We", "have", "developed", "the", "confidence", "and", "fluency", "to", "succeed", "in", "international", "communication", "."],
    explanation: "'We have developed the confidence and fluency to succeed in international communication' is an inspiring summary."
  },
  {
    id: "a2_u12_l180_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate accomplishment verb:",
    sourceSentence: "By completing Unit 12, you have [blank] (achieved / achieving) full CEFR A2 competency.",
    targetSentence: "By completing Unit 12, you have achieved full CEFR A2 competency.",
    text: "By completing Unit 12, you have [blank] full CEFR A2 competency.",
    options: [
      { id: "o1", text: "achieved", isCorrect: true },
      { id: "o2", text: "achieving", isCorrect: false },
      { id: "o3", text: "achieve", isCorrect: false },
      { id: "o4", text: "achieves", isCorrect: false }
    ],
    correctAnswer: "achieved",
    explanation: "Present Perfect 'have achieved'."
  },
  {
    id: "a2_u12_l180_p21",
    type: "translation",
    prompt: "Translate to English: 'बधाई हो, आपने CEFR A2 स्तर सफलतापूर्वक पूरा कर लिया है!'",
    sourceSentence: "बधाई हो, आपने CEFR A2 स्तर सफलतापूर्वक पूरा कर लिया है!",
    targetSentence: "Congratulations, you have successfully completed CEFR Level A2!",
    explanation: "'Congratulations, you have successfully completed CEFR Level A2!'."
  },
  {
    id: "a2_u12_l180_p22",
    type: "speaking",
    prompt: "Speak aloud clearly and proudly: Deliver your culminating CEFR A2 graduation pledge.",
    sourceSentence: "I am proud of my language journey. I have mastered the foundation of English, and I am ready to communicate with the world.",
    targetSentence: "I am proud of my language journey. I have mastered the foundation of English, and I am ready to communicate with the world.",
    audioText: "I am proud of my language journey. I have mastered the foundation of English, and I am ready to communicate with the world.",
    explanation: "Deliver with confidence, clarity, and celebration."
  }
];

const l180_review: Exercise[] = [
  {
    id: "a2_u12_l180_r7",
    type: "multiple_choice",
    prompt: "Master Spaced Review (Units 7–12): Which sentence showcases flawless integration of a future time clause with Present Simple?",
    options: [
      { id: "o1", text: "As soon as we receive your confirmation, we will release the final payment.", isCorrect: true },
      { id: "o2", text: "As soon as we will receive confirmation, we release payment.", isCorrect: false },
      { id: "o3", text: "As soon as we received confirmation, we will releasing payment.", isCorrect: false },
      { id: "o4", text: "We will release payment as soon as we will receive confirmation.", isCorrect: false }
    ],
    correctAnswer: "As soon as we receive your confirmation, we will release the final payment.",
    explanation: "'As soon as + Present Simple ('receive'), will + Base Verb ('will release')' is the golden rule."
  },
  {
    id: "a2_u12_l180_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'If we [blank] (improve / improved) our communication channels, team efficiency would double.'",
    sourceSentence: "If we [blank] our communication channels, team efficiency would double.",
    targetSentence: "If we improved our communication channels, team efficiency would double.",
    text: "If we [blank] our communication channels, team efficiency would double.",
    options: [
      { id: "o1", text: "improved", isCorrect: true },
      { id: "o2", text: "improve", isCorrect: false },
      { id: "o3", text: "improving", isCorrect: false },
      { id: "o4", text: "would improve", isCorrect: false }
    ],
    correctAnswer: "improved",
    explanation: "Second Conditional if-clause uses Past Simple 'improved'."
  },
  {
    id: "a2_u12_l180_r9",
    type: "error_correction",
    prompt: "Correct the passive voice sentence:",
    sourceSentence: "The master certificate was award to each graduating student.",
    targetSentence: "The master certificate was awarded to each graduating student.",
    options: [
      { id: "o1", text: "The master certificate was awarded to each graduating student.", isCorrect: true },
      { id: "o2", text: "The master certificate awarded of each student.", isCorrect: false },
      { id: "o3", text: "The master certificate was awarding to each student.", isCorrect: false }
    ],
    correctAnswer: "The master certificate was awarded to each graduating student.",
    explanation: "Passive requires past participle 'awarded'."
  },
  {
    id: "a2_u12_l180_r10",
    type: "translation",
    prompt: "Translate to English: 'निरंतर अभ्यास से सफलता मिलती है।'",
    sourceSentence: "निरंतर अभ्यास से सफलता मिलती है।",
    targetSentence: "Consistent practice leads to success.",
    explanation: "'Consistent practice leads to success.' is a timeless truth."
  }
];

const l180_assessment: Exercise[] = [
  {
    id: "a2_u12_l180_a7",
    type: "multiple_choice",
    prompt: "Culminating Capstone Assessment: Which of the following best proves comprehensive CEFR A2 communicative competence?",
    options: [
      { id: "o1", text: "The ability to handle routine tasks requiring a direct exchange of information on familiar matters in work and personal life.", isCorrect: true },
      { id: "o2", text: "The ability to translate isolated dictionary words without understanding context.", isCorrect: false },
      { id: "o3", text: "Memorizing grammar tables without ever speaking English.", isCorrect: false },
      { id: "o4", text: "Reading one English sentence per year.", isCorrect: false }
    ],
    correctAnswer: "The ability to handle routine tasks requiring a direct exchange of information on familiar matters in work and personal life.",
    explanation: "This is the official definition and demonstration of CEFR A2 communicative mastery."
  },
  {
    id: "a2_u12_l180_a8",
    type: "fill_blank",
    prompt: "Complete the capstone declaration:",
    sourceSentence: "I am fully [blank] (prepared / preparing) to apply my English communication skills in global settings.",
    targetSentence: "I am fully prepared to apply my English communication skills in global settings.",
    text: "I am fully [blank] to apply my English communication skills in global settings.",
    options: [
      { id: "o1", text: "prepared", isCorrect: true },
      { id: "o2", text: "preparing", isCorrect: false },
      { id: "o3", text: "prepare", isCorrect: false },
      { id: "o4", text: "prepares", isCorrect: false }
    ],
    correctAnswer: "prepared",
    explanation: "'fully prepared to + verb' expresses readiness."
  },
  {
    id: "a2_u12_l180_a9",
    type: "speaking",
    prompt: "Master Can-Do Assessment: Deliver a comprehensive 3-sentence summary of your CEFR A2 English competencies.",
    sourceSentence: "I have achieved comprehensive fluency in CEFR A2 English. I can deliver structured presentations, negotiate professional compromises, and manage complex daily tasks with clarity and confidence. I am ready to engage with the global community.",
    targetSentence: "I have achieved comprehensive fluency in CEFR A2 English. I can deliver structured presentations, negotiate professional compromises, and manage complex daily tasks with clarity and confidence. I am ready to engage with the global community.",
    audioText: "I have achieved comprehensive fluency in CEFR A2 English. I can deliver structured presentations, negotiate professional compromises, and manage complex daily tasks with clarity and confidence. I am ready to engage with the global community.",
    explanation: "Demonstrate consummate spoken clarity, natural rhythm, and communicative mastery."
  },
  {
    id: "a2_u12_l180_a10",
    type: "mediation",
    prompt: "Master Culminating Mediation: Translate this final certification message: 'आपकी कड़ी मेहनत और समर्पण ने आपको एक आत्मविश्वासी अंग्रेजी वक्ता बना दिया है।' Provide the best translation.",
    sourceSentence: "आपकी कड़ी मेहनत और समर्पण ने आपको एक आत्मविश्वासी अंग्रेजी वक्ता बना दिया है।",
    targetSentence: "Your hard work and dedication have made you a confident English speaker.",
    options: [
      { id: "o1", text: "Your hard work and dedication have made you a confident English speaker.", isCorrect: true },
      { id: "o2", text: "You did not work hard so you cannot speak English.", isCorrect: false },
      { id: "o3", text: "Hard work was deleted yesterday by teachers.", isCorrect: false }
    ],
    correctAnswer: "Your hard work and dedication have made you a confident English speaker.",
    explanation: "'Your hard work and dedication have made you a confident English speaker' is the culminating celebration of mastery."
  }
];

export function runEnrichment176to180() {
  console.log('--- ENRICHING LESSONS 176 - 180 (UNIT 12) ---');
  enrichUnit12LessonData('lesson_a2_12_176', LESSON_A2_12_176_DATA, l176_practice, l176_review, l176_assessment);
  enrichUnit12LessonData('lesson_a2_12_177', LESSON_A2_12_177_DATA, l177_practice, l177_review, l177_assessment);
  enrichUnit12LessonData('lesson_a2_12_178', LESSON_A2_12_178_DATA, l178_practice, l178_review, l178_assessment);
  enrichUnit12LessonData('lesson_a2_12_179', LESSON_A2_12_179_DATA, l179_practice, l179_review, l179_assessment);
  enrichUnit12LessonData('lesson_a2_12_180', LESSON_A2_12_180_DATA, l180_practice, l180_review, l180_assessment);
  console.log('--- COMPLETED 176 - 180 ---');
}

runEnrichment176to180();
