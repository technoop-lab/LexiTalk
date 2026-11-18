import { Exercise } from '../src/types';
import { LESSON_A2_13_191_DATA } from '../src/data/lessons/lesson_a2_13_191';
import { LESSON_A2_13_192_DATA } from '../src/data/lessons/lesson_a2_13_192';
import { LESSON_A2_13_193_DATA } from '../src/data/lessons/lesson_a2_13_193';
import { LESSON_A2_13_194_DATA } from '../src/data/lessons/lesson_a2_13_194';
import { LESSON_A2_13_195_DATA } from '../src/data/lessons/lesson_a2_13_195';
import { enrichUnit13LessonData } from './enrich_unit13_helper';

// =========================================================================
// LESSON 191: Social Gatherings, Hosting Guests & Polite Conversation
// Grammar: Polite Requests, Offers, Invitations (Would you like..., May I..., Could you possibly...)
// =========================================================================
const l191_practice: Exercise[] = [
  {
    id: "a2_u13_l191_p11",
    type: "reading",
    prompt: "Read the dinner party host etiquette guide and answer the question:\n\"Hosting Advice: When welcoming guests into your home, greet them warmly at the entrance and offer to take their coats. Always offer a refreshing beverage promptly and introduce newcomers to other guests with a shared interest. As the host, make sure all guests feel included in dinner discussions without putting anyone uncomfortably on the spot.\"\nWhat should a gracious host do when introducing newcomers?",
    sourceSentence: "What should a gracious host do when introducing newcomers?",
    targetSentence: "Introduce them to other guests with a shared interest.",
    options: [
      { id: "o1", text: "Introduce them to other guests with a shared interest.", isCorrect: true },
      { id: "o2", text: "Leave them standing alone in the hallway.", isCorrect: false },
      { id: "o3", text: "Lock the front door and ignore them.", isCorrect: false },
      { id: "o4", text: "Ask them to prepare the entire dinner alone.", isCorrect: false }
    ],
    correctAnswer: "Introduce them to other guests with a shared interest.",
    explanation: "The guide explicitly advises: 'introduce newcomers to other guests with a shared interest.'"
  },
  {
    id: "a2_u13_l191_p12",
    type: "speaking",
    prompt: "Speak clearly and make a polite hosting offer to your guests:",
    sourceSentence: "Welcome! Make yourselves right at home. May I offer you some sparkling water or fresh herbal iced tea?",
    targetSentence: "Welcome! Make yourselves right at home. May I offer you some sparkling water or fresh herbal iced tea?",
    audioText: "Welcome! Make yourselves right at home. May I offer you some sparkling water or fresh herbal iced tea?",
    explanation: "Practice warm, hospitable intonation with 'Make yourselves right at home' and 'May I offer you...'."
  },
  {
    id: "a2_u13_l191_p13",
    type: "match_pairs",
    prompt: "Match social hospitality phrases with their communicative purpose:",
    options: [
      { id: "m1", text: "Make yourself comfortable!" },
      { id: "m1_m", text: "welcoming a guest to relax in your home" },
      { id: "m2", text: "Would you care for a refill?" },
      { id: "m2_m", text: "politely offering additional drink or food" },
      { id: "m3", text: "Thank you so much for having me!" },
      { id: "m3_m", text: "expressing gratitude to the host for the invitation" },
      { id: "m4", text: "Let me introduce you to..." },
      { id: "m4_m", text: "facilitating social introductions among guests" }
    ]
  },
  {
    id: "a2_u13_l191_p14",
    type: "mediation",
    prompt: "Mediate this polite host offer into English: 'क्या मैं आपके लिए थोड़ी और गर्म चाय लाऊँ या आप कुछ ठंडा लेना पसंद करेंगे?' Choose the best translation.",
    sourceSentence: "क्या मैं आपके लिए थोड़ी और गर्म चाय लाऊँ या आप कुछ ठंडा लेना पसंद करेंगे?",
    targetSentence: "May I bring you some more hot tea, or would you prefer something cold?",
    options: [
      { id: "o1", text: "May I bring you some more hot tea, or would you prefer something cold?", isCorrect: true },
      { id: "o2", text: "Tea was cold yesterday so drink water.", isCorrect: false },
      { id: "o3", text: "I deleted tea and bring cold.", isCorrect: false }
    ],
    correctAnswer: "May I bring you some more hot tea, or would you prefer something cold?",
    explanation: "'May I bring you some more hot tea, or would you prefer something cold?' is gracious and natural."
  },
  {
    id: "a2_u13_l191_p15",
    type: "error_correction",
    prompt: "Identify and correct the modal politeness error:",
    sourceSentence: "Would you like to having some dessert with coffee?",
    targetSentence: "Would you like to have some dessert with coffee?",
    options: [
      { id: "o1", text: "Would you like to have some dessert with coffee?", isCorrect: true },
      { id: "o2", text: "Would you like having dessert with coffee?", isCorrect: false },
      { id: "o3", text: "Do you like to having dessert with coffee?", isCorrect: false }
    ],
    correctAnswer: "Would you like to have some dessert with coffee?",
    explanation: "'Would you like + to + base verb' ('to have')."
  },
  {
    id: "a2_u13_l191_p16",
    type: "listening",
    prompt: "Listen to the host's dinner announcement and identify what is being served:",
    audioText: "Dinner is served, everyone! We have a roasted vegetable lasagna, a crisp Mediterranean garden salad, and warm garlic bread. Please help yourselves to whatever you like!",
    targetSentence: "Roasted vegetable lasagna, Mediterranean salad, and warm garlic bread.",
    options: [
      { id: "o1", text: "Roasted vegetable lasagna, Mediterranean salad, and warm garlic bread.", isCorrect: true },
      { id: "o2", text: "Fast food hamburgers and soda cans.", isCorrect: false },
      { id: "o3", text: "Only raw rice and dry cereal.", isCorrect: false },
      { id: "o4", text: "Dinner was cancelled due to kitchen issues.", isCorrect: false }
    ],
    correctAnswer: "Roasted vegetable lasagna, Mediterranean salad, and warm garlic bread.",
    explanation: "The host announces roasted vegetable lasagna, Mediterranean salad, and garlic bread."
  },
  {
    id: "a2_u13_l191_p17",
    type: "personal_production",
    prompt: "Write 2 sentences thanking a host after attending a dinner party at their home:",
    targetSentence: "Thank you so much for the wonderful dinner party last night! The food was absolutely delicious and we had such engaging conversations with everyone.",
    audioText: "Thank you so much for the wonderful dinner party last night! The food was absolutely delicious and we had such engaging conversations with everyone."
  },
  {
    id: "a2_u13_l191_p18",
    type: "dialogue_completion",
    prompt: "Complete the dinner conversation:\nGuest: 'This homemade pasta is outstanding! You must give me the recipe.'\nHost: '________________________'",
    sourceSentence: "This homemade pasta is outstanding! You must give me the recipe.",
    targetSentence: "I'm so glad you enjoy it! I'd be delighted to email the recipe to you tomorrow.",
    options: [
      { id: "o1", text: "I'm so glad you enjoy it! I'd be delighted to email the recipe to you tomorrow.", isCorrect: true },
      { id: "o2", text: "Recipes are confidential state secrets.", isCorrect: false },
      { id: "o3", text: "I deleted the pasta three hours ago.", isCorrect: false }
    ],
    correctAnswer: "I'm so glad you enjoy it! I'd be delighted to email the recipe to you tomorrow.",
    explanation: "'I'm so glad you enjoy it! I'd be delighted to...' is gracious, polite hosting speech."
  },
  {
    id: "a2_u13_l191_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite guest offer:",
    sourceSentence: "Is there anything I can help you with in the kitchen?",
    targetSentence: "Is there anything I can help you with in the kitchen?",
    tokens: ["Is", "there", "anything", "I", "can", "help", "you", "with", "in", "the", "kitchen", "?"],
    correctOrder: ["Is", "there", "anything", "I", "can", "help", "you", "with", "in", "the", "kitchen", "?"],
    explanation: "'Is there anything I can help you with in the kitchen?' is the standard considerate guest phrase."
  },
  {
    id: "a2_u13_l191_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the polite modal phrase:",
    sourceSentence: "Please [blank] (help yourselves / help yourselfs) to appetizers on the patio.",
    targetSentence: "Please help yourselves to appetizers on the patio.",
    text: "Please [blank] to appetizers on the patio.",
    options: [
      { id: "o1", text: "help yourselves", isCorrect: true },
      { id: "o2", text: "help yourselfs", isCorrect: false },
      { id: "o3", text: "help yourselfes", isCorrect: false },
      { id: "o4", text: "helping yourselves", isCorrect: false }
    ],
    correctAnswer: "help yourselves",
    explanation: "Plural reflexive imperative is 'help yourselves'."
  },
  {
    id: "a2_u13_l191_p21",
    type: "translation",
    prompt: "Translate to English: 'हमारे घर आने के लिए आपका बहुत-बहुत धन्यवाद, आपसे मिलकर बहुत खुशी हुई।'",
    sourceSentence: "हमारे घर आने के लिए आपका बहुत-बहुत धन्यवाद, आपसे मिलकर बहुत खुशी हुई।",
    targetSentence: "Thank you so much for coming over, it was wonderful seeing you.",
    explanation: "'Thank you so much for coming over to our home, it was a pleasure seeing / meeting you.'"
  },
  {
    id: "a2_u13_l191_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give a warm toast to celebrate a gathering of friends.",
    sourceSentence: "Thank you all for being here tonight to share good food, meaningful laughter, and cherished memories together. Cheers to great friendship!",
    targetSentence: "Thank you all for being here tonight to share good food, meaningful laughter, and cherished memories together. Cheers to great friendship!",
    audioText: "Thank you all for being here tonight to share good food, meaningful laughter, and cherished memories together. Cheers to great friendship!",
    explanation: "Practice celebratory social intonation ('meaningful laughter', 'cherished memories', 'Cheers to great friendship!')."
  }
];

const l191_review: Exercise[] = [
  {
    id: "a2_u13_l191_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Modals of Politeness): Which response is most polite when declining food due to fullness?",
    options: [
      { id: "o1", text: "It looks absolutely delicious, but I'm completely full, thank you so much!", isCorrect: true },
      { id: "o2", text: "No, I hate this food so take it away.", isCorrect: false },
      { id: "o3", text: "Stop giving food to people immediately.", isCorrect: false },
      { id: "o4", text: "Food was bad so I cannot eat.", isCorrect: false }
    ],
    correctAnswer: "It looks absolutely delicious, but I'm completely full, thank you so much!",
    explanation: "Gracious declining pairs appreciation of the food with polite refusal."
  },
  {
    id: "a2_u13_l191_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Could you [blank] (possibly / possible) pass the salt and pepper, please?'",
    sourceSentence: "Could you [blank] pass the salt and pepper, please?",
    targetSentence: "Could you possibly pass the salt and pepper, please?",
    text: "Could you [blank] pass the salt and pepper, please?",
    options: [
      { id: "o1", text: "possibly", isCorrect: true },
      { id: "o2", text: "possible", isCorrect: false },
      { id: "o3", text: "possibility", isCorrect: false },
      { id: "o4", text: "possibled", isCorrect: false }
    ],
    correctAnswer: "possibly",
    explanation: "Adverb 'possibly' softens the request in 'Could you possibly...?'."
  },
  {
    id: "a2_u13_l191_r9",
    type: "error_correction",
    prompt: "Correct the polite offer structure:",
    sourceSentence: "Do you like me to make fresh coffee?",
    targetSentence: "Would you like me to make fresh coffee?",
    options: [
      { id: "o1", text: "Would you like me to make fresh coffee?", isCorrect: true },
      { id: "o2", text: "Would you like that I make fresh coffee?", isCorrect: false },
      { id: "o3", text: "Do you like making me fresh coffee?", isCorrect: false }
    ],
    correctAnswer: "Would you like me to make fresh coffee?",
    explanation: "Polite offer is 'Would you like me to + base verb'."
  },
  {
    id: "a2_u13_l191_r10",
    type: "translation",
    prompt: "Translate to English: 'कृपया अंदर आइए और आराम से बैठिए।' (Polite hospitality)",
    sourceSentence: "कृपया अंदर आइए और आराम से बैठिए।",
    targetSentence: "Please come in and make yourself comfortable.",
    explanation: "'Please come inside and make yourself at home / make yourself comfortable.'"
  }
];

const l191_assessment: Exercise[] = [
  {
    id: "a2_u13_l191_a5",
    type: "multiple_choice",
    prompt: "When arriving at a dinner party as a guest, which action is standard etiquette?",
    options: [
      { id: "o1", text: "Arrive on time, greet the host warmly, and offer a small token of appreciation like flowers or dessert.", isCorrect: true },
      { id: "o2", text: "Show up two hours early and demand breakfast.", isCorrect: false },
      { id: "o3", text: "Ignore the hosts and inspect all bedroom closets.", isCorrect: false },
      { id: "o4", text: "Eat all the food before other guests arrive.", isCorrect: false }
    ],
    correctAnswer: "Arrive on time, greet the host warmly, and offer a small token of appreciation like flowers or dessert.",
    explanation: "Arriving punctually, greeting the host warmly, and offering a host gift is standard social etiquette."
  },
  {
    id: "a2_u13_l191_a6",
    type: "fill_blank",
    prompt: "Complete the host statement:",
    sourceSentence: "It was [blank] (delightful / delight) having all of you here with us this evening.",
    targetSentence: "It was delightful having all of you here with us this evening.",
    text: "It was [blank] having all of you here with us this evening.",
    options: [
      { id: "o1", text: "delightful", isCorrect: true },
      { id: "o2", text: "delight", isCorrect: false },
      { id: "o3", text: "delightfully", isCorrect: false },
      { id: "o4", text: "delighted", isCorrect: false }
    ],
    correctAnswer: "delightful",
    explanation: "'It was delightful' uses the predicate adjective."
  },
  {
    id: "a2_u13_l191_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences politely welcoming guests to a celebration at your home.",
    sourceSentence: "Good evening, everyone! Thank you so much for joining us tonight to celebrate. Please grab a drink, help yourselves to some hors d'oeuvres, and make yourselves completely at home.",
    targetSentence: "Good evening, everyone! Thank you so much for joining us tonight to celebrate. Please grab a drink, help yourselves to some hors d'oeuvres, and make yourselves completely at home.",
    audioText: "Good evening, everyone! Thank you so much for joining us tonight to celebrate. Please grab a drink, help yourselves to some hors d'oeuvres, and make yourselves completely at home.",
    explanation: "Demonstrate gracious hosting warmth and flawless social hospitality phrases."
  },
  {
    id: "a2_u13_l191_a8",
    type: "mediation",
    prompt: "Mediate this invitation message: 'हम अगले शनिवार शाम को अपने नए घर में डिनर पार्टी रख रहे हैं, क्या आप आ सकेंगे?' Provide the best translation.",
    sourceSentence: "हम अगले शनिवार शाम को अपने नए घर में डिनर पार्टी रख रहे हैं, क्या आप आ सकेंगे?",
    targetSentence: "We're hosting a dinner party at our new home next Saturday evening, will you be able to make it?",
    options: [
      { id: "o1", text: "We're hosting a dinner party at our new home next Saturday evening, will you be able to make it?", isCorrect: true },
      { id: "o2", text: "Dinner party deleted next Saturday at new house.", isCorrect: false },
      { id: "o3", text: "New home has no dinner for guests.", isCorrect: false }
    ],
    correctAnswer: "We're hosting a dinner party at our new home next Saturday evening, will you be able to make it?",
    explanation: "'We're hosting a dinner party at our new home next Saturday evening, will you be able to make it?' is natural and friendly."
  },
  {
    id: "a2_u13_l191_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite departure statement:",
    sourceSentence: "We had such a wonderful evening and thank you for being so hospitable.",
    targetSentence: "We had such a wonderful evening and thank you for being so hospitable.",
    tokens: ["We", "had", "such", "a", "wonderful", "evening", "and", "thank", "you", "for", "being", "so", "hospitable", "."],
    correctOrder: ["We", "had", "such", "a", "wonderful", "evening", "and", "thank", "you", "for", "being", "so", "hospitable", "."],
    explanation: "'We had such a wonderful evening and thank you for being so hospitable' is gracious and polite."
  },
  {
    id: "a2_u13_l191_a10",
    type: "dialogue_completion",
    prompt: "Complete the social gathering interaction:\nHost: 'Can I get you anything else before we serve dessert?'\nGuest: '________________________'",
    sourceSentence: "Can I get you anything else before we serve dessert?",
    targetSentence: "I'm wonderful, thank you! Everything has been perfect so far.",
    options: [
      { id: "o1", text: "I'm wonderful, thank you! Everything has been perfect so far.", isCorrect: true },
      { id: "o2", text: "Dessert was banned last year.", isCorrect: false },
      { id: "o3", text: "I demand twenty plates of soup.", isCorrect: false }
    ],
    correctAnswer: "I'm wonderful, thank you! Everything has been perfect so far.",
    explanation: "'I'm wonderful, thank you! Everything has been perfect so far' is warm and polite."
  }
];

// =========================================================================
// LESSON 192: Conversational Rejoinders, Active Listening & Showing Empathy
// Grammar: Conversational Reactions, Empathy Markers & Discourse Particles
// =========================================================================
const l192_practice: Exercise[] = [
  {
    id: "a2_u13_l192_p11",
    type: "reading",
    prompt: "Read the active listening guide and answer the question:\n\"Effective Communication: In social and professional interactions, active listening is just as important as speaking clearly. Using conversational rejoinders like 'I see what you mean,' 'That must have been challenging,' or 'How exciting!' demonstrates that you are genuinely engaged. Nodding, maintaining eye contact, and asking open follow-up questions help build rapport and trust.\"\nWhy should speakers use conversational rejoinders like 'That must have been challenging'?",
    sourceSentence: "Why should speakers use conversational rejoinders like 'That must have been challenging'?",
    targetSentence: "To show genuine engagement, empathy, and active listening.",
    options: [
      { id: "o1", text: "To show genuine engagement, empathy, and active listening.", isCorrect: true },
      { id: "o2", text: "To interrupt the speaker and change the subject immediately.", isCorrect: false },
      { id: "o3", text: "To criticize the speaker's grammar mistakes.", isCorrect: false },
      { id: "o4", text: "To end the conversation as quickly as possible.", isCorrect: false }
    ],
    correctAnswer: "To show genuine engagement, empathy, and active listening.",
    explanation: "Rejoinders and empathy markers show that you are actively listening and validating the speaker's experience."
  },
  {
    id: "a2_u13_l192_p12",
    type: "speaking",
    prompt: "Speak clearly and practice empathetic active listening rejoinders:",
    sourceSentence: "That sounds like an incredible opportunity! Tell me more about what you'll be working on.",
    targetSentence: "That sounds like an incredible opportunity! Tell me more about what you'll be working on.",
    audioText: "That sounds like an incredible opportunity! Tell me more about what you'll be working on.",
    explanation: "Practice positive conversational enthusiasm and supportive open prompting."
  },
  {
    id: "a2_u13_l192_p13",
    type: "match_pairs",
    prompt: "Match conversational rejoinders with their emotional function:",
    options: [
      { id: "m1", text: "What a relief!" },
      { id: "m1_m", text: "reacting to good news following worry or anxiety" },
      { id: "m2", text: "That must have been so frustrating!" },
      { id: "m2_m", text: "validating someone's difficult or annoying experience" },
      { id: "m3", text: "You're kidding! Really?" },
      { id: "m3_m", text: "expressing friendly surprise and disbelief" },
      { id: "m4", text: "I completely understand where you're coming from." },
      { id: "m4_m", text: "showing deep intellectual and emotional agreement" }
    ]
  },
  {
    id: "a2_u13_l192_p14",
    type: "mediation",
    prompt: "Mediate this empathetic reaction into English: 'यह सुनकर बहुत दुख हुआ, आशा है कि वह जल्द ही ठीक हो जाएंगे।' Choose the best translation.",
    sourceSentence: "यह सुनकर बहुत दुख हुआ, आशा है कि वह जल्द ही ठीक हो जाएंगे।",
    targetSentence: "I'm so sorry to hear that; I hope he makes a speedy recovery.",
    options: [
      { id: "o1", text: "I'm so sorry to hear that; I hope he makes a speedy recovery.", isCorrect: true },
      { id: "o2", text: "He was sick so I deleted him yesterday.", isCorrect: false },
      { id: "o3", text: "Sorry is good because recovery is funny.", isCorrect: false }
    ],
    correctAnswer: "I'm so sorry to hear that; I hope he makes a speedy recovery.",
    explanation: "'I'm so sorry to hear that; I hope he makes a speedy recovery' is warm, empathetic, and standard."
  },
  {
    id: "a2_u13_l192_p15",
    type: "error_correction",
    prompt: "Identify and correct the conversational rejoinder phrasing error:",
    sourceSentence: "When hearing about the cancelled flight, she said: 'What a terrible luck!'",
    targetSentence: "When hearing about the cancelled flight, she said: 'What terrible luck!'",
    options: [
      { id: "o1", text: "When hearing about the cancelled flight, she said: 'What terrible luck!'", isCorrect: true },
      { id: "o2", text: "She said: 'What an terrible luck!'", isCorrect: false },
      { id: "o3", text: "She said: 'How a terrible luck!'", isCorrect: false }
    ],
    correctAnswer: "When hearing about the cancelled flight, she said: 'What terrible luck!'",
    explanation: "'Luck' is uncountable, so exclamations use 'What terrible luck!' without 'a'."
  },
  {
    id: "a2_u13_l192_p16",
    type: "listening",
    prompt: "Listen to the dialogue and identify the speaker's reaction to the news:",
    audioText: "Speaker A: 'After six months of intense studying, I finally passed my professional certification exam!' Speaker B: 'Oh, congratulations! That's wonderful news! You must be thrilled!'",
    targetSentence: "Speaker B is overjoyed and congratulates Speaker A warmly.",
    options: [
      { id: "o1", text: "Speaker B is overjoyed and congratulates Speaker A warmly.", isCorrect: true },
      { id: "o2", text: "Speaker B gets angry and walks away.", isCorrect: false },
      { id: "o3", text: "Speaker B did not hear the news at all.", isCorrect: false },
      { id: "o4", text: "Speaker B tells Speaker A to retake the exam.", isCorrect: false }
    ],
    correctAnswer: "Speaker B is overjoyed and congratulates Speaker A warmly.",
    explanation: "Speaker B offers enthusiastic congratulations and acknowledges how thrilled Speaker A must be."
  },
  {
    id: "a2_u13_l192_p17",
    type: "personal_production",
    prompt: "Write 2 sentences showing active listening and empathetic encouragement when a friend shares a difficult work day:",
    targetSentence: "I can see why you feel exhausted after dealing with all those unexpected client issues. You handled a really tough situation with great patience, so give yourself credit!",
    audioText: "I can see why you feel exhausted after dealing with all those unexpected client issues. You handled a really tough situation with great patience, so give yourself credit!"
  },
  {
    id: "a2_u13_l192_p18",
    type: "dialogue_completion",
    prompt: "Complete the conversation with an appropriate active listening rejoinder:\nColleague: 'We worked through the weekend and managed to finish the project on time.'\nYou: '________________________'",
    sourceSentence: "We worked through the weekend and managed to finish the project on time.",
    targetSentence: "That's fantastic! You all did an incredible job pulling together under pressure.",
    options: [
      { id: "o1", text: "That's fantastic! You all did an incredible job pulling together under pressure.", isCorrect: true },
      { id: "o2", text: "Weekends are illegal in modern offices.", isCorrect: false },
      { id: "o3", text: "I never work on anything.", isCorrect: false }
    ],
    correctAnswer: "That's fantastic! You all did an incredible job pulling together under pressure.",
    explanation: "'That's fantastic! You all did an incredible job...' offers authentic recognition and praise."
  },
  {
    id: "a2_u13_l192_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form an empathetic rejoinder:",
    sourceSentence: "I can completely understand why that situation made you feel upset.",
    targetSentence: "I can completely understand why that situation made you feel upset.",
    tokens: ["I", "can", "completely", "understand", "why", "that", "situation", "made", "you", "feel", "upset", "."],
    correctOrder: ["I", "can", "completely", "understand", "why", "that", "situation", "made", "you", "feel", "upset", "."],
    explanation: "'I can completely understand why that situation made you feel upset' validates feelings with empathy."
  },
  {
    id: "a2_u13_l192_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate rejoinder phrase:",
    sourceSentence: "Speaker A: 'Our lost luggage was returned to our hotel room this morning.' Speaker B: '[blank] (What a relief / What a pity)! I was so worried for you.'",
    targetSentence: "Speaker A: 'Our lost luggage was returned to our hotel room this morning.' Speaker B: 'What a relief! I was so worried for you.'",
    text: "Speaker A: 'Our lost luggage was returned to our hotel room this morning.' Speaker B: '[blank]! I was so worried for you.'",
    options: [
      { id: "o1", text: "What a relief", isCorrect: true },
      { id: "o2", text: "What a pity", isCorrect: false },
      { id: "o3", text: "How terrible", isCorrect: false },
      { id: "o4", text: "Never mind", isCorrect: false }
    ],
    correctAnswer: "What a relief",
    explanation: "'What a relief!' reacts to the resolution of a worrying problem."
  },
  {
    id: "a2_u13_l192_p21",
    type: "translation",
    prompt: "Translate to English: 'यह तो वाकई बहुत अच्छी खबर है, मुझे आपके लिए बहुत खुशी हो रही है!'",
    sourceSentence: "यह तो वाकई बहुत अच्छी खबर है, मुझे आपके लिए बहुत खुशी हो रही है!",
    targetSentence: "That is truly wonderful news, I'm so happy for you!",
    explanation: "'That is truly wonderful news, I am so thrilled / happy for you!'"
  },
  {
    id: "a2_u13_l192_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give an engaged conversational follow-up to someone sharing travel plans.",
    sourceSentence: "That itinerary sounds incredible! Which historical landmarks are you most excited to explore when you arrive?",
    targetSentence: "That itinerary sounds incredible! Which historical landmarks are you most excited to explore when you arrive?",
    audioText: "That itinerary sounds incredible! Which historical landmarks are you most excited to explore when you arrive?",
    explanation: "Practice active listening engagement with an enthusiastic follow-up question."
  }
];

const l192_review: Exercise[] = [
  {
    id: "a2_u13_l192_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Discourse Markers & Flow): Which phrase best shows that you are following someone's line of reasoning?",
    options: [
      { id: "o1", text: "I see your point, and it makes a lot of sense in this context.", isCorrect: true },
      { id: "o2", text: "You are talking too many words right now.", isCorrect: false },
      { id: "o3", text: "I never think about what people say.", isCorrect: false },
      { id: "o4", text: "Points are cancelled in conversations.", isCorrect: false }
    ],
    correctAnswer: "I see your point, and it makes a lot of sense in this context.",
    explanation: "'I see your point, and it makes a lot of sense...' validates the other person's logic."
  },
  {
    id: "a2_u13_l192_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'That [blank] (must have been / should have been) quite a stressful ordeal for your family.'",
    sourceSentence: "That [blank] quite a stressful ordeal for your family.",
    targetSentence: "That must have been quite a stressful ordeal for your family.",
    text: "That [blank] quite a stressful ordeal for your family.",
    options: [
      { id: "o1", text: "must have been", isCorrect: true },
      { id: "o2", text: "should have been", isCorrect: false },
      { id: "o3", text: "can have been", isCorrect: false },
      { id: "o4", text: "would be being", isCorrect: false }
    ],
    correctAnswer: "must have been",
    explanation: "'must have been' expresses empathetic deduction about a past experience."
  },
  {
    id: "a2_u13_l192_r9",
    type: "error_correction",
    prompt: "Correct the exclamation rejoinder:",
    sourceSentence: "How a wonderful surprise to see you here!",
    targetSentence: "What a wonderful surprise to see you here!",
    options: [
      { id: "o1", text: "What a wonderful surprise to see you here!", isCorrect: true },
      { id: "o2", text: "How wonderful surprise to see you!", isCorrect: false },
      { id: "o3", text: "What wonderful surprise see you here!", isCorrect: false }
    ],
    correctAnswer: "What a wonderful surprise to see you here!",
    explanation: "'What + a + adjective + singular noun' ('What a wonderful surprise!')."
  },
  {
    id: "a2_u13_l192_r10",
    type: "translation",
    prompt: "Translate to English: 'चिंता मत करो, सब कुछ ठीक हो जाएगा।' (Reassuring empathy)",
    sourceSentence: "चिंता मत करो, सब कुछ ठीक हो जाएगा।",
    targetSentence: "Don't worry, everything is going to turn out fine.",
    explanation: "'Don't worry, everything will be fine / everything is going to be alright.'"
  }
];

const l192_assessment: Exercise[] = [
  {
    id: "a2_u13_l192_a5",
    type: "multiple_choice",
    prompt: "What is the primary role of non-verbal cues (nodding, eye contact) during active listening?",
    options: [
      { id: "o1", text: "They reassure the speaker that you are listening attentively and understanding their message.", isCorrect: true },
      { id: "o2", text: "They force the speaker to stop talking immediately.", isCorrect: false },
      { id: "o3", text: "They replace the need to learn any language.", isCorrect: false },
      { id: "o4", text: "They show you are bored and looking at the clock.", isCorrect: false }
    ],
    correctAnswer: "They reassure the speaker that you are listening attentively and understanding their message.",
    explanation: "Non-verbal cues like nodding and eye contact signal attentiveness and mutual understanding."
  },
  {
    id: "a2_u13_l192_a6",
    type: "fill_blank",
    prompt: "Complete the empathetic listener statement:",
    sourceSentence: "Take all the time you need; I'm here to [blank] (listen / hearing) whenever you're ready to talk.",
    targetSentence: "Take all the time you need; I'm here to listen whenever you're ready to talk.",
    text: "Take all the time you need; I'm here to [blank] whenever you're ready to talk.",
    options: [
      { id: "o1", text: "listen", isCorrect: true },
      { id: "o2", text: "hearing", isCorrect: false },
      { id: "o3", text: "listened", isCorrect: false },
      { id: "o4", text: "listens", isCorrect: false }
    ],
    correctAnswer: "listen",
    explanation: "Infinitive of purpose: 'here to listen'."
  },
  {
    id: "a2_u13_l192_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences showing active listening and summarizing what a colleague just shared.",
    sourceSentence: "If I understand correctly, you're looking for a way to streamline our weekly team updates while keeping everyone aligned. That sounds like a very practical initiative.",
    targetSentence: "If I understand correctly, you're looking for a way to streamline our weekly team updates while keeping everyone aligned. That sounds like a very practical initiative.",
    audioText: "If I understand correctly, you're looking for a way to streamline our weekly team updates while keeping everyone aligned. That sounds like a very practical initiative.",
    explanation: "Demonstrate conversational paraphrasing ('If I understand correctly, you're looking to...') and constructive validation."
  },
  {
    id: "a2_u13_l192_a8",
    type: "mediation",
    prompt: "Mediate this supportive coworker message: 'मुझे आपकी मेहनत पर पूरा भरोसा है, आप इस चुनौती को सफलतापूर्वक पार कर लेंगे।' Provide the best translation.",
    sourceSentence: "मुझे आपकी मेहनत पर पूरा भरोसा है, आप इस चुनौती को सफलतापूर्वक पार कर लेंगे।",
    targetSentence: "I have complete confidence in your hard work, and you will overcome this challenge successfully.",
    options: [
      { id: "o1", text: "I have complete confidence in your hard work, and you will overcome this challenge successfully.", isCorrect: true },
      { id: "o2", text: "Challenge was deleted by work yesterday.", isCorrect: false },
      { id: "o3", text: "I have zero confidence in hard work.", isCorrect: false }
    ],
    correctAnswer: "I have complete confidence in your hard work, and you will overcome this challenge successfully.",
    explanation: "'I have complete confidence in your hard work, and you will overcome this challenge successfully' is supportive and clear."
  },
  {
    id: "a2_u13_l192_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a constructive conversational reaction:",
    sourceSentence: "That makes a lot of sense and I appreciate you sharing your perspective.",
    targetSentence: "That makes a lot of sense and I appreciate you sharing your perspective.",
    tokens: ["That", "makes", "a", "lot", "of", "sense", "and", "I", "appreciate", "you", "sharing", "your", "perspective", "."],
    correctOrder: ["That", "makes", "a", "lot", "of", "sense", "and", "I", "appreciate", "you", "sharing", "your", "perspective", "."],
    explanation: "'That makes a lot of sense and I appreciate you sharing your perspective' is thoughtful and professional."
  },
  {
    id: "a2_u13_l192_a10",
    type: "dialogue_completion",
    prompt: "Complete the empathetic conversation:\nFriend: 'I was really nervous about giving the speech, but everyone clapped enthusiastically!'\nYou: '________________________'",
    sourceSentence: "I was really nervous about giving the speech, but everyone clapped enthusiastically!",
    targetSentence: "I knew you could do it! You prepared so thoroughly, and you deserved that applause.",
    options: [
      { id: "o1", text: "I knew you could do it! You prepared so thoroughly, and you deserved that applause.", isCorrect: true },
      { id: "o2", text: "Speeches are forbidden in public rooms.", isCorrect: false },
      { id: "o3", text: "I was sleeping during the entire talk.", isCorrect: false }
    ],
    correctAnswer: "I knew you could do it! You prepared so thoroughly, and you deserved that applause.",
    explanation: "'I knew you could do it! You prepared so thoroughly...' is warm, supportive, and congratulatory."
  }
];

// =========================================================================
// LESSON 193: Nuanced Opinions, Tactful Disagreement & Constructive Debates
// Grammar: Hedging Phrases, Concessions & Diplomatic Language
// =========================================================================
const l193_practice: Exercise[] = [
  {
    id: "a2_u13_l193_p11",
    type: "reading",
    prompt: "Read the debate protocol guide and answer the question:\n\"Constructive Debating: Expressing disagreement politely is an essential skill in international workplaces. Instead of blunt statements like 'You are wrong,' skilled communicators use diplomatic hedging, such as: 'I see your point; however, have we considered the alternative budget implications?' or 'From my perspective, there might be another factor at play.' This keeps discussions productive, respectful, and focused on solutions.\"\nWhy should speakers use diplomatic hedging phrases rather than blunt disagreements?",
    sourceSentence: "Why should speakers use diplomatic hedging phrases rather than blunt disagreements?",
    targetSentence: "To keep discussions productive, respectful, and focused on solutions.",
    options: [
      { id: "o1", text: "To keep discussions productive, respectful, and focused on solutions.", isCorrect: true },
      { id: "o2", text: "To confuse everyone and prevent any decision.", isCorrect: false },
      { id: "o3", text: "To insult the other party indirectly.", isCorrect: false },
      { id: "o4", text: "To avoid participating in any conversation.", isCorrect: false }
    ],
    correctAnswer: "To keep discussions productive, respectful, and focused on solutions.",
    explanation: "The text explains: 'This keeps discussions productive, respectful, and focused on solutions.'"
  },
  {
    id: "a2_u13_l193_p12",
    type: "speaking",
    prompt: "Speak clearly and practice expressing a tactful, nuanced opinion:",
    sourceSentence: "I understand where you're coming from, but on the other hand, we also need to consider long-term environmental sustainability.",
    targetSentence: "I understand where you're coming from, but on the other hand, we also need to consider long-term environmental sustainability.",
    audioText: "I understand where you're coming from, but on the other hand, we also need to consider long-term environmental sustainability.",
    explanation: "Practice diplomatic balance with 'I understand where you're coming from, but on the other hand...'."
  },
  {
    id: "a2_u13_l193_p13",
    type: "match_pairs",
    prompt: "Match diplomatic phrases with their communicative strategy:",
    options: [
      { id: "m1", text: "I see what you mean, however..." },
      { id: "m1_m", text: "acknowledging the other view before presenting a counterpoint" },
      { id: "m2", text: "I'm not entirely convinced that..." },
      { id: "m2_m", text: "expressing polite skepticism without being aggressive" },
      { id: "m3", text: "To a certain extent, that is true, but..." },
      { id: "m3_m", text: "partially conceding a point while setting boundaries" },
      { id: "m4", text: "Could there be another way to look at this?" },
      { id: "m4_m", text: "inviting alternative perspectives diplomatically" }
    ]
  },
  {
    id: "a2_u13_l193_p14",
    type: "mediation",
    prompt: "Mediate this diplomatic disagreement into English: 'मैं आपकी बात समझता हूँ, लेकिन मुझे लगता है कि हमें इस निर्णय के वित्तीय प्रभावों पर भी विचार करना चाहिए।' Choose the best translation.",
    sourceSentence: "मैं आपकी बात समझता हूँ, लेकिन मुझे लगता है कि हमें इस निर्णय के वित्तीय प्रभावों पर भी विचार करना चाहिए।",
    targetSentence: "I understand your point, but I believe we should also consider the financial implications of this decision.",
    options: [
      { id: "o1", text: "I understand your point, but I believe we should also consider the financial implications of this decision.", isCorrect: true },
      { id: "o2", text: "Your point is wrong and money is deleted.", isCorrect: false },
      { id: "o3", text: "Decisions have zero financial impact yesterday.", isCorrect: false }
    ],
    correctAnswer: "I understand your point, but I believe we should also consider the financial implications of this decision.",
    explanation: "'I understand your point, but I believe we should also consider the financial implications...' is diplomatic and professional."
  },
  {
    id: "a2_u13_l193_p15",
    type: "error_correction",
    prompt: "Identify and correct the diplomatic phrasing error:",
    sourceSentence: "From my point of view, on one hand it is cheap, but in other hand it is slow.",
    targetSentence: "From my point of view, on the one hand it is cheap, but on the other hand it is slow.",
    options: [
      { id: "o1", text: "From my point of view, on the one hand it is cheap, but on the other hand it is slow.", isCorrect: true },
      { id: "o2", text: "In my point of view, on one hand it cheap, on other slow.", isCorrect: false },
      { id: "o3", text: "From my view, with one hand cheap, with other hand slow.", isCorrect: false }
    ],
    correctAnswer: "From my point of view, on the one hand it is cheap, but on the other hand it is slow.",
    explanation: "The paired correlative phrase is 'on the one hand... on the other hand'."
  },
  {
    id: "a2_u13_l193_p16",
    type: "listening",
    prompt: "Listen to the discussion between two city planners and identify their shared conclusion:",
    audioText: "Speaker A: 'Widening the road might ease traffic temporarily, but it encourages more car dependency.' Speaker B: 'I agree with your assessment. Perhaps investing in electric bus rapid transit is a more sustainable solution.'",
    targetSentence: "Both planners agree that investing in electric bus rapid transit is a more sustainable solution.",
    options: [
      { id: "o1", text: "Both planners agree that investing in electric bus rapid transit is a more sustainable solution.", isCorrect: true },
      { id: "o2", text: "They decided to ban all transportation in the city.", isCorrect: false },
      { id: "o3", text: "They started arguing and cancelled the meeting.", isCorrect: false },
      { id: "o4", text: "They agreed to widen all roads to ten lanes.", isCorrect: false }
    ],
    correctAnswer: "Both planners agree that investing in electric bus rapid transit is a more sustainable solution.",
    explanation: "Both speakers reach consensus that electric bus rapid transit is more sustainable than road widening."
  },
  {
    id: "a2_u13_l193_p17",
    type: "personal_production",
    prompt: "Write 2 sentences expressing a balanced view on remote work versus working in an office:",
    targetSentence: "On the one hand, remote work provides great flexibility and eliminates stressful daily commutes. On the other hand, in-person office collaboration fosters spontaneous brainstorming and strong team relationships.",
    audioText: "On the one hand, remote work provides great flexibility and eliminates stressful daily commutes. On the other hand, in-person office collaboration fosters spontaneous brainstorming and strong team relationships."
  },
  {
    id: "a2_u13_l193_p18",
    type: "dialogue_completion",
    prompt: "Complete the respectful debate:\nColleague A: 'We should automate all customer service inquiries immediately.'\nColleague B: '________________________'",
    sourceSentence: "We should automate all customer service inquiries immediately.",
    targetSentence: "While automation speeds up response times, many customers still value personal human interaction for complex issues.",
    options: [
      { id: "o1", text: "While automation speeds up response times, many customers still value personal human interaction for complex issues.", isCorrect: true },
      { id: "o2", text: "Automation is illegal on computers.", isCorrect: false },
      { id: "o3", text: "No, customers hate talking to anyone.", isCorrect: false }
    ],
    correctAnswer: "While automation speeds up response times, many customers still value personal human interaction for complex issues.",
    explanation: "'While automation speeds up response times, many customers still value...' provides balanced nuance."
  },
  {
    id: "a2_u13_l193_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a tactful sentence expressing partial agreement:",
    sourceSentence: "To a certain extent that is true but there are other factors to consider.",
    targetSentence: "To a certain extent that is true but there are other factors to consider.",
    tokens: ["To", "a", "certain", "extent", "that", "is", "true", "but", "there", "are", "other", "factors", "to", "consider", "."],
    correctOrder: ["To", "a", "certain", "extent", "that", "is", "true", "but", "there", "are", "other", "factors", "to", "consider", "."],
    explanation: "'To a certain extent that is true but there are other factors to consider' is an exemplary diplomatic phrase."
  },
  {
    id: "a2_u13_l193_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the diplomatic hedging adverb:",
    sourceSentence: "I am [blank] (somewhat / completely) skeptical about whether this strategy will yield the expected results.",
    targetSentence: "I am somewhat skeptical about whether this strategy will yield the expected results.",
    text: "I am [blank] skeptical about whether this strategy will yield the expected results.",
    options: [
      { id: "o1", text: "somewhat", isCorrect: true },
      { id: "o2", text: "completely", isCorrect: false },
      { id: "o3", text: "harsh", isCorrect: false },
      { id: "o4", text: "extreme", isCorrect: false }
    ],
    correctAnswer: "somewhat",
    explanation: "'somewhat' acts as a polite diplomatic hedge."
  },
  {
    id: "a2_u13_l193_p21",
    type: "translation",
    prompt: "Translate to English: 'यद्यपि यह एक अच्छा विचार लगता है, फिर भी हमें इसके जोखिमों का मूल्यांकन करना चाहिए।'",
    sourceSentence: "यद्यपि यह एक अच्छा विचार लगता है, फिर भी हमें इसके जोखिमों का मूल्यांकन करना चाहिए।",
    targetSentence: "Although it seems like a good idea, we should nevertheless assess its risks.",
    explanation: "'Although it seems like a good idea, we still need to assess / evaluate the potential risks.'"
  },
  {
    id: "a2_u13_l193_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Present a diplomatic summary of two differing viewpoints.",
    sourceSentence: "Both proposals have distinct merits: one prioritizes rapid implementation, while the other emphasizes rigorous quality testing. A balanced hybrid approach may be our best path forward.",
    targetSentence: "Both proposals have distinct merits: one prioritizes rapid implementation, while the other emphasizes rigorous quality testing. A balanced hybrid approach may be our best path forward.",
    audioText: "Both proposals have distinct merits: one prioritizes rapid implementation, while the other emphasizes rigorous quality testing. A balanced hybrid approach may be our best path forward.",
    explanation: "Practice diplomatic synthesis language ('distinct merits', 'prioritizes rapid implementation', 'balanced hybrid approach')."
  }
];

const l193_review: Exercise[] = [
  {
    id: "a2_u13_l193_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 - Expressing Conditions & Concessions): Which transition word best introduces a counter-argument diplomatically?",
    options: [
      { id: "o1", text: "Nevertheless, we must ensure that all safety protocols remain strictly enforced.", isCorrect: true },
      { id: "o2", text: "Because you are wrong so safety is enforced.", isCorrect: false },
      { id: "o3", text: "Also safety protocols deleted yesterday.", isCorrect: false },
      { id: "o4", text: "Since safety is impossible to enforce.", isCorrect: false }
    ],
    correctAnswer: "Nevertheless, we must ensure that all safety protocols remain strictly enforced.",
    explanation: "'Nevertheless' introduces a contrast with formal, diplomatic elegance."
  },
  {
    id: "a2_u13_l193_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'I'm not [blank] (entirely / entire) sure that this is the most cost-effective solution.'",
    sourceSentence: "I'm not [blank] sure that this is the most cost-effective solution.",
    targetSentence: "I'm not entirely sure that this is the most cost-effective solution.",
    text: "I'm not [blank] sure that this is the most cost-effective solution.",
    options: [
      { id: "o1", text: "entirely", isCorrect: true },
      { id: "o2", text: "entire", isCorrect: false },
      { id: "o3", text: "entireness", isCorrect: false },
      { id: "o4", text: "entiring", isCorrect: false }
    ],
    correctAnswer: "entirely",
    explanation: "The adverb 'entirely' modifies 'sure' ('not entirely sure')."
  },
  {
    id: "a2_u13_l193_r9",
    type: "error_correction",
    prompt: "Correct the concession phrasing:",
    sourceSentence: "Even though I agree with your goal, but I disagree with the timeline.",
    targetSentence: "Even though I agree with your goal, I disagree with the timeline.",
    options: [
      { id: "o1", text: "Even though I agree with your goal, I disagree with the timeline.", isCorrect: true },
      { id: "o2", text: "Even though I agree with goal, and I disagree.", isCorrect: false },
      { id: "o3", text: "Even though agreeing goal, so disagree timeline.", isCorrect: false }
    ],
    correctAnswer: "Even though I agree with your goal, I disagree with the timeline.",
    explanation: "Do not use 'but' after an 'Even though' clause; the comma is sufficient."
  },
  {
    id: "a2_u13_l193_r10",
    type: "translation",
    prompt: "Translate to English: 'इस विषय पर हर किसी की अलग राय हो सकती है।' (Diplomatic acknowledgment)",
    sourceSentence: "इस विषय पर हर किसी की अलग राय हो सकती है।",
    targetSentence: "Everyone may have a different opinion on this matter.",
    explanation: "'Everyone might / may have a different perspective / opinion on this topic / matter.'"
  }
];

const l193_assessment: Exercise[] = [
  {
    id: "a2_u13_l193_a5",
    type: "multiple_choice",
    prompt: "Which statement exemplifies a constructive, professional way to disagree during a team meeting?",
    options: [
      { id: "o1", text: "I appreciate that idea; however, could we explore how it might impact our delivery timeline?", isCorrect: true },
      { id: "o2", text: "That idea makes zero sense and will fail completely.", isCorrect: false },
      { id: "o3", text: "I refuse to listen to any more proposals.", isCorrect: false },
      { id: "o4", text: "Nobody knows anything about this project.", isCorrect: false }
    ],
    correctAnswer: "I appreciate that idea; however, could we explore how it might impact our delivery timeline?",
    explanation: "This response pairs positive appreciation with a constructive question exploring risks."
  },
  {
    id: "a2_u13_l193_a6",
    type: "fill_blank",
    prompt: "Complete the diplomatic sentence:",
    sourceSentence: "From a practical [blank] (standpoint / standing), we need to ensure our resources are allocated efficiently.",
    targetSentence: "From a practical standpoint, we need to ensure our resources are allocated efficiently.",
    text: "From a practical [blank], we need to ensure our resources are allocated efficiently.",
    options: [
      { id: "o1", text: "standpoint", isCorrect: true },
      { id: "o2", text: "standing", isCorrect: false },
      { id: "o3", text: "stand", isCorrect: false },
      { id: "o4", text: "stood", isCorrect: false }
    ],
    correctAnswer: "standpoint",
    explanation: "The standard phrase is 'From a practical standpoint' (or 'perspective')."
  },
  {
    id: "a2_u13_l193_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences tactfully proposing an alternative solution during a group discussion.",
    sourceSentence: "While I recognize the urgency of finishing quickly, prioritizing thorough testing will prevent costly glitches later. Perhaps we could pilot the feature with a small test group first.",
    targetSentence: "While I recognize the urgency of finishing quickly, prioritizing thorough testing will prevent costly glitches later. Perhaps we could pilot the feature with a small test group first.",
    audioText: "While I recognize the urgency of finishing quickly, prioritizing thorough testing will prevent costly glitches later. Perhaps we could pilot the feature with a small test group first.",
    explanation: "Demonstrate tactful concession ('While I recognize...') followed by a constructive proposal ('Perhaps we could pilot...')."
  },
  {
    id: "a2_u13_l193_a8",
    type: "mediation",
    prompt: "Mediate this constructive compromise: 'आइए दोनों पक्षों के सर्वोत्तम सुझावों को मिलाकर एक साझा समाधान तैयार करें।' Provide the best translation.",
    sourceSentence: "आइए दोनों पक्षों के सर्वोत्तम सुझावों को मिलाकर एक साझा समाधान तैयार करें।",
    targetSentence: "Let's combine the best suggestions from both sides to develop a shared solution.",
    options: [
      { id: "o1", text: "Let's combine the best suggestions from both sides to develop a shared solution.", isCorrect: true },
      { id: "o2", text: "Both sides deleted all suggestions yesterday.", isCorrect: false },
      { id: "o3", text: "Solutions are forbidden in discussions.", isCorrect: false }
    ],
    correctAnswer: "Let's combine the best suggestions from both sides to develop a shared solution.",
    explanation: "'Let's combine the best suggestions from both sides to develop a shared solution' is collaborative and professional."
  },
  {
    id: "a2_u13_l193_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a diplomatic inquiry:",
    sourceSentence: "What would you say if we postponed the launch by one week?",
    targetSentence: "What would you say if we postponed the launch by one week?",
    tokens: ["What", "would", "you", "say", "if", "we", "postponed", "the", "launch", "by", "one", "week", "?"],
    correctOrder: ["What", "would", "you", "say", "if", "we", "postponed", "the", "launch", "by", "one", "week", "?"],
    explanation: "'What would you say if we postponed the launch by one week?' is a gentle second-conditional suggestion."
  },
  {
    id: "a2_u13_l193_a10",
    type: "dialogue_completion",
    prompt: "Complete the constructive dialogue:\nPartner: 'I'm afraid this advertising campaign is too expensive for our current quarterly budget.'\nYou: '________________________'",
    sourceSentence: "I'm afraid this advertising campaign is too expensive for our current quarterly budget.",
    targetSentence: "I understand your concern. What if we focus on targeted digital ads first to keep costs manageable?",
    options: [
      { id: "o1", text: "I understand your concern. What if we focus on targeted digital ads first to keep costs manageable?", isCorrect: true },
      { id: "o2", text: "Budgets do not matter at all.", isCorrect: false },
      { id: "o3", text: "I deleted all advertising yesterday.", isCorrect: false }
    ],
    correctAnswer: "I understand your concern. What if we focus on targeted digital ads first to keep costs manageable?",
    explanation: "'I understand your concern. What if we...' validates the concern and suggests a realistic compromise."
  }
];

// =========================================================================
// LESSON 194: Clarification Strategies, Repairing Misunderstandings & Natural Flow
// Grammar: Clarification Requests, Paraphrasing, Reformulation & Repair
// =========================================================================
const l194_practice: Exercise[] = [
  {
    id: "a2_u13_l194_p11",
    type: "reading",
    prompt: "Read the communication repair guide and answer the question:\n\"Conversation Repair: When conversing in a second language, misunderstandings are natural and expected. Effective language learners know how to request clarification smoothly. Useful repair strategies include: asking the speaker to repeat ('Could you say that again a bit more slowly?'), paraphrasing ('So if I understood correctly, you mean...'), or checking specific word meanings ('What does that term refer to in this context?'). These strategies maintain conversational flow without awkward pauses.\"\nWhat is a recommended strategy when you didn't quite catch a fast sentence?",
    sourceSentence: "What is a recommended strategy when you didn't quite catch a fast sentence?",
    targetSentence: "Ask the speaker politely to repeat a bit more slowly.",
    options: [
      { id: "o1", text: "Ask the speaker politely to repeat a bit more slowly.", isCorrect: true },
      { id: "o2", text: "Pretend you understood everything and leave the room.", isCorrect: false },
      { id: "o3", text: "Complain that English is too difficult.", isCorrect: false },
      { id: "o4", text: "Remain completely silent for five minutes.", isCorrect: false }
    ],
    correctAnswer: "Ask the speaker politely to repeat a bit more slowly.",
    explanation: "The text advises asking: 'Could you say that again a bit more slowly?' to maintain natural flow."
  },
  {
    id: "a2_u13_l194_p12",
    type: "speaking",
    prompt: "Speak clearly and practice asking for clarification professionally:",
    sourceSentence: "Could you please clarify what you mean by that, and perhaps give a brief example?",
    targetSentence: "Could you please clarify what you mean by that, and perhaps give a brief example?",
    audioText: "Could you please clarify what you mean by that, and perhaps give a brief example?",
    explanation: "Practice polite clarification requests: 'Could you please clarify...' with smooth rhythm."
  },
  {
    id: "a2_u13_l194_p13",
    type: "match_pairs",
    prompt: "Match clarification strategies with their intended communicative function:",
    options: [
      { id: "m1", text: "Did you mean X or Y?" },
      { id: "m1_m", text: "verifying understanding through a binary choice" },
      { id: "m2", text: "In other words, you're saying..." },
      { id: "m2_m", text: "reformulating the speaker's main point in simpler terms" },
      { id: "m3", text: "Sorry, I didn't quite catch that last part." },
      { id: "m3_m", text: "asking for a specific segment to be repeated" },
      { id: "m4", text: "How do you spell that name?" },
      { id: "m4_m", text: "confirming correct spelling for names or technical terms" }
    ]
  },
  {
    id: "a2_u13_l194_p14",
    type: "mediation",
    prompt: "Mediate this clarification request into English: 'माफ़ कीजिए, क्या आप इसे थोड़ा और सरल शब्दों में समझा सकते हैं?' Choose the best translation.",
    sourceSentence: "माफ़ कीजिए, क्या आप इसे थोड़ा और सरल शब्दों में समझा सकते हैं?",
    targetSentence: "Excuse me, could you explain that in slightly simpler terms?",
    options: [
      { id: "o1", text: "Excuse me, could you explain that in slightly simpler terms?", isCorrect: true },
      { id: "o2", text: "Words were simple yesterday so explain fast.", isCorrect: false },
      { id: "o3", text: "Excuse me, I deleted your explanation.", isCorrect: false }
    ],
    correctAnswer: "Excuse me, could you explain that in slightly simpler terms?",
    explanation: "'Excuse me, could you explain that in slightly simpler terms / words?' is polite, natural, and accurate."
  },
  {
    id: "a2_u13_l194_p15",
    type: "error_correction",
    prompt: "Identify and correct the clarification request error:",
    sourceSentence: "Could you repeat that again once more please?",
    targetSentence: "Could you repeat that once more, please?",
    options: [
      { id: "o1", text: "Could you repeat that once more, please?", isCorrect: true },
      { id: "o2", text: "Could you repeat again more, please?", isCorrect: false },
      { id: "o3", text: "Could you repeating that once again?", isCorrect: false }
    ],
    correctAnswer: "Could you repeat that once more, please?",
    explanation: "'repeat' already means say again; avoid redundant 'repeat that again once more'."
  },
  {
    id: "a2_u13_l194_p16",
    type: "listening",
    prompt: "Listen to the conference call and identify the repair strategy used by Participant B:",
    audioText: "Participant A: 'We need to recalibrate the client onboarding parameters by Q3.' Participant B: 'Just to make sure we're on the same page, do you mean updating our account registration forms by September?'",
    targetSentence: "Participant B uses paraphrasing to confirm what 'recalibrate parameters by Q3' means in practical terms.",
    options: [
      { id: "o1", text: "Participant B uses paraphrasing to confirm what 'recalibrate parameters by Q3' means in practical terms.", isCorrect: true },
      { id: "o2", text: "Participant B disconnects the call in frustration.", isCorrect: false },
      { id: "o3", text: "Participant B tells Participant A to leave the company.", isCorrect: false },
      { id: "o4", text: "Participant B says September was cancelled.", isCorrect: false }
    ],
    correctAnswer: "Participant B uses paraphrasing to confirm what 'recalibrate parameters by Q3' means in practical terms.",
    explanation: "Participant B paraphrases: 'Just to make sure we're on the same page, do you mean updating forms by September?'"
  },
  {
    id: "a2_u13_l194_p17",
    type: "personal_production",
    prompt: "Write 2 sentences demonstrating how to politely ask a native speaker to slow down and clarify an idiom:",
    targetSentence: "I'm not familiar with that idiom you just used. Could you explain what it means in this context, please?",
    audioText: "I'm not familiar with that idiom you just used. Could you explain what it means in this context, please?"
  },
  {
    id: "a2_u13_l194_p18",
    type: "dialogue_completion",
    prompt: "Complete the clarification exchange:\nColleague: 'We need to submit the draft by COB Thursday.'\nYou: '________________________'",
    sourceSentence: "We need to submit the draft by COB Thursday.",
    targetSentence: "Sorry, just to confirm: does 'COB' mean by the close of business around 5 p.m.?",
    options: [
      { id: "o1", text: "Sorry, just to confirm: does 'COB' mean by the close of business around 5 p.m.?", isCorrect: true },
      { id: "o2", text: "Thursday does not exist on calendars.", isCorrect: false },
      { id: "o3", text: "I deleted the draft last year.", isCorrect: false }
    ],
    correctAnswer: "Sorry, just to confirm: does 'COB' mean by the close of business around 5 p.m.?",
    explanation: "'Sorry, just to confirm: does COB mean...' clarifies professional jargon smoothly."
  },
  {
    id: "a2_u13_l194_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a clarification check:",
    sourceSentence: "Let me make sure I understood the main steps correctly.",
    targetSentence: "Let me make sure I understood the main steps correctly.",
    tokens: ["Let", "me", "make", "sure", "I", "understood", "the", "main", "steps", "correctly", "."],
    correctOrder: ["Let", "me", "make", "sure", "I", "understood", "the", "main", "steps", "correctly", "."],
    explanation: "'Let me make sure I understood the main steps correctly' is a stellar confirmation opener."
  },
  {
    id: "a2_u13_l194_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the clarification phrase:",
    sourceSentence: "Just to be [blank] (clear / clearly), the final deadline is Friday at noon, right?",
    targetSentence: "Just to be clear, the final deadline is Friday at noon, right?",
    text: "Just to be [blank], the final deadline is Friday at noon, right?",
    options: [
      { id: "o1", text: "clear", isCorrect: true },
      { id: "o2", text: "clearly", isCorrect: false },
      { id: "o3", text: "clearing", isCorrect: false },
      { id: "o4", text: "cleared", isCorrect: false }
    ],
    correctAnswer: "clear",
    explanation: "The idiom is 'Just to be clear...'."
  },
  {
    id: "a2_u13_l194_p21",
    type: "translation",
    prompt: "Translate to English: 'क्या आप कृपया उस अंतिम बिंदु को दोबारा समझा सकते हैं?'",
    sourceSentence: "क्या आप कृपया उस अंतिम बिंदु को दोबारा समझा सकते हैं?",
    targetSentence: "Could you please explain that last point again?",
    explanation: "'Could you please explain that last point / step once more / again?'"
  },
  {
    id: "a2_u13_l194_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give a smooth verbal repair when you realize you misspoke.",
    sourceSentence: "Actually, let me rephrase that so there's no confusion: what I meant was that the initial prototype will be ready by next Tuesday, not this Friday.",
    targetSentence: "Actually, let me rephrase that so there's no confusion: what I meant was that the initial prototype will be ready by next Tuesday, not this Friday.",
    audioText: "Actually, let me rephrase that so there's no confusion: what I meant was that the initial prototype will be ready by next Tuesday, not this Friday.",
    explanation: "Practice self-correction phrasing ('Actually, let me rephrase that so there's no confusion...')."
  }
];

const l194_review: Exercise[] = [
  {
    id: "a2_u13_l194_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 9 - Indirect Questions & Politeness): Which sentence is the most polite way to ask about meeting times?",
    options: [
      { id: "o1", text: "Could you tell me what time the briefing starts tomorrow morning?", isCorrect: true },
      { id: "o2", text: "What time does start briefing tell me now?", isCorrect: false },
      { id: "o3", text: "Tell briefing time fast please.", isCorrect: false },
      { id: "o4", text: "Could you tell me what time does briefing start?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me what time the briefing starts tomorrow morning?",
    explanation: "Indirect question word order: 'Could you tell me + what time + subject (the briefing) + verb (starts)'."
  },
  {
    id: "a2_u13_l194_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'If I'm not [blank] (mistaken / mistook), we agreed to meet in the lobby at six.'",
    sourceSentence: "If I'm not [blank], we agreed to meet in the lobby at six.",
    targetSentence: "If I'm not mistaken, we agreed to meet in the lobby at six.",
    text: "If I'm not [blank], we agreed to meet in the lobby at six.",
    options: [
      { id: "o1", text: "mistaken", isCorrect: true },
      { id: "o2", text: "mistook", isCorrect: false },
      { id: "o3", text: "mistake", isCorrect: false },
      { id: "o4", text: "mistaking", isCorrect: false }
    ],
    correctAnswer: "mistaken",
    explanation: "The set phrase is 'If I'm not mistaken' (past participle used as adjective)."
  },
  {
    id: "a2_u13_l194_r9",
    type: "error_correction",
    prompt: "Correct the clarification request word order:",
    sourceSentence: "What means this technical term in our field?",
    targetSentence: "What does this technical term mean in our field?",
    options: [
      { id: "o1", text: "What does this technical term mean in our field?", isCorrect: true },
      { id: "o2", text: "What means technical term in field?", isCorrect: false },
      { id: "o3", text: "What this technical term means?", isCorrect: false }
    ],
    correctAnswer: "What does this technical term mean in our field?",
    explanation: "Direct question format is 'What does + subject + mean?'."
  },
  {
    id: "a2_u13_l194_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या हम सही दिशा में आगे बढ़ रहे हैं?' (Check alignment)",
    sourceSentence: "क्या हम सही दिशा में आगे बढ़ रहे हैं?",
    targetSentence: "Are we heading in the right direction?",
    explanation: "'Are we on the right track?' or 'Are we heading in the right direction?'"
  }
];

const l194_assessment: Exercise[] = [
  {
    id: "a2_u13_l194_a5",
    type: "multiple_choice",
    prompt: "Which response demonstrates active listening and confirmation during a project briefing?",
    options: [
      { id: "o1", text: "So to summarize: our primary objective this week is completing user testing before the release.", isCorrect: true },
      { id: "o2", text: "I have no idea what you said and I don't care.", isCorrect: false },
      { id: "o3", text: "User testing was cancelled in 1980.", isCorrect: false },
      { id: "o4", text: "Let's talk about something completely unrelated.", isCorrect: false }
    ],
    correctAnswer: "So to summarize: our primary objective this week is completing user testing before the release.",
    explanation: "'So to summarize: our primary objective this week is...' captures active summarization and alignment."
  },
  {
    id: "a2_u13_l194_a6",
    type: "fill_blank",
    prompt: "Complete the clarification sentence:",
    sourceSentence: "Could you give us a concrete [blank] (example / exampling) of how this policy works in practice?",
    targetSentence: "Could you give us a concrete example of how this policy works in practice?",
    text: "Could you give us a concrete [blank] of how this policy works in practice?",
    options: [
      { id: "o1", text: "example", isCorrect: true },
      { id: "o2", text: "exampling", isCorrect: false },
      { id: "o3", text: "examples", isCorrect: false },
      { id: "o4", text: "exemplary", isCorrect: false }
    ],
    correctAnswer: "example",
    explanation: "Singular count noun: 'a concrete example'."
  },
  {
    id: "a2_u13_l194_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences politely confirming details and asking for a brief follow-up summary.",
    sourceSentence: "Thank you for the detailed briefing. Just to be certain we didn't miss any critical steps, could you email us a brief summary of the action items by tomorrow afternoon?",
    targetSentence: "Thank you for the detailed briefing. Just to be certain we didn't miss any critical steps, could you email us a brief summary of the action items by tomorrow afternoon?",
    audioText: "Thank you for the detailed briefing. Just to be certain we didn't miss any critical steps, could you email us a brief summary of the action items by tomorrow afternoon?",
    explanation: "Demonstrate polished professional clarification ('Just to be certain...', 'action items')."
  },
  {
    id: "a2_u13_l194_a8",
    type: "mediation",
    prompt: "Translate this clarification confirmation: 'ताकि कोई भ्रम न रहे, हम कल सुबह दस बजे वर्चुअल मीटिंग में जुड़ेंगे।' Provide the best translation.",
    sourceSentence: "ताकि कोई भ्रम न रहे, हम कल सुबह दस बजे वर्चुअल मीटिंग में जुड़ेंगे।",
    targetSentence: "To avoid any confusion, we will join the virtual meeting tomorrow at 10 a.m.",
    options: [
      { id: "o1", text: "To avoid any confusion, we will join the virtual meeting tomorrow at 10 a.m.", isCorrect: true },
      { id: "o2", text: "Confusion was deleted at ten yesterday.", isCorrect: false },
      { id: "o3", text: "Virtual meeting has zero people tomorrow.", isCorrect: false }
    ],
    correctAnswer: "To avoid any confusion, we will join the virtual meeting tomorrow at 10 a.m.",
    explanation: "'To avoid any confusion, we will join the virtual meeting tomorrow at 10 a.m.' is exact and clear."
  },
  {
    id: "a2_u13_l194_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a polite paraphrasing question:",
    sourceSentence: "Are you saying that the shipment will arrive two days earlier than expected?",
    targetSentence: "Are you saying that the shipment will arrive two days earlier than expected?",
    tokens: ["Are", "you", "saying", "that", "the", "shipment", "will", "arrive", "two", "days", "earlier", "than", "expected", "?"],
    correctOrder: ["Are", "you", "saying", "that", "the", "shipment", "will", "arrive", "two", "days", "earlier", "than", "expected", "?"],
    explanation: "'Are you saying that the shipment will arrive two days earlier than expected?' verifies information accurately."
  },
  {
    id: "a2_u13_l194_a10",
    type: "dialogue_completion",
    prompt: "Complete the clarification dialogue:\nTravel Agent: 'Your connecting flight requires a terminal transfer in Frankfurt.'\nTraveler: '________________________'",
    sourceSentence: "Your connecting flight requires a terminal transfer in Frankfurt.",
    targetSentence: "Will our checked luggage be transferred automatically, or do we need to re-check it?",
    options: [
      { id: "o1", text: "Will our checked luggage be transferred automatically, or do we need to re-check it?", isCorrect: true },
      { id: "o2", text: "Airports do not have luggage.", isCorrect: false },
      { id: "o3", text: "I deleted Frankfurt yesterday morning.", isCorrect: false }
    ],
    correctAnswer: "Will our checked luggage be transferred automatically, or do we need to re-check it?",
    explanation: "'Will our checked luggage be transferred automatically...?' is a practical, crucial travel clarification question."
  }
];

// =========================================================================
// LESSON 195: Unit 13 Capstone: Integrated Master Review, Conversational Fluency & A2 Final Exit
// Grammar: Full Synthesis across CEFR A1–A2 Grammar & Communicative Functions
// =========================================================================
const l195_practice: Exercise[] = [
  {
    id: "a2_u13_l195_p11",
    type: "reading",
    prompt: "Read the CEFR A2 mastery milestone guide and answer the question:\n\"CEFR A2 Exit Milestone: Achieving CEFR A2 communicative mastery means you can confidently handle daily social routines, describe past experiences, discuss future plans, express nuanced opinions diplomatically, and ask for clarification when needed. You have mastered defining relative clauses, passive voice, condition structures, question tags, and past narrative tenses across various themes including nature, travel, cultural heritage, and social gatherings.\"\nWhat core competency defines the CEFR A2 exit milestone?",
    sourceSentence: "What core competency defines the CEFR A2 exit milestone?",
    targetSentence: "Confidently handling daily social routines, narratives, opinions, and interactive communication.",
    options: [
      { id: "o1", text: "Confidently handling daily social routines, narratives, opinions, and interactive communication.", isCorrect: true },
      { id: "o2", text: "Memorizing ancient dictionary words without speaking.", isCorrect: false },
      { id: "o3", text: "Translating single words without understanding grammar.", isCorrect: false },
      { id: "o4", text: "Avoiding all English conversations permanently.", isCorrect: false }
    ],
    correctAnswer: "Confidently handling daily social routines, narratives, opinions, and interactive communication.",
    explanation: "CEFR A2 exit competence centers on confident handling of social routines, narratives, opinions, and interactive communication."
  },
  {
    id: "a2_u13_l195_p12",
    type: "speaking",
    prompt: "Speak clearly and deliver your CEFR A2 English capstone statement:",
    sourceSentence: "Throughout this course, I have learned to express my ideas clearly, describe memorable experiences, and participate actively in social and professional conversations with confidence.",
    targetSentence: "Throughout this course, I have learned to express my ideas clearly, describe memorable experiences, and participate actively in social and professional conversations with confidence.",
    audioText: "Throughout this course, I have learned to express my ideas clearly, describe memorable experiences, and participate actively in social and professional conversations with confidence.",
    explanation: "Practice fluent, confident delivery summarizing your learning journey across Units 1 to 13."
  },
  {
    id: "a2_u13_l195_p13",
    type: "match_pairs",
    prompt: "Match core CEFR A2 grammar milestones with their characteristic English examples:",
    options: [
      { id: "m1", text: "Defining Relative Clauses" },
      { id: "m1_m", text: "The national park which we visited features pristine alpine lakes." },
      { id: "m2", text: "Passive Voice in Art/Culture" },
      { id: "m2_m", text: "This historical monument was constructed in the fourteenth century." },
      { id: "m3", text: "Question Tags for Engagement" },
      { id: "m3_m", text: "You're joining us for the cultural festival tomorrow, aren't you?" },
      { id: "m4", text: "Diplomatic Opinion & Hedging" },
      { id: "m4_m", text: "I understand your perspective, but on the other hand, we must consider costs." }
    ]
  },
  {
    id: "a2_u13_l195_p14",
    type: "mediation",
    prompt: "Mediate this comprehensive reflection: 'अंग्रेजी सीखने की इस यात्रा ने मुझे नए लोगों से जुड़ने और अपनी सोच को आत्मविश्वास से व्यक्त करने में सक्षम बनाया है।' Choose the best translation.",
    sourceSentence: "अंग्रेजी सीखने की इस यात्रा ने मुझे नए लोगों से जुड़ने और अपनी सोच को आत्मविश्वास से व्यक्त करने में सक्षम बनाया है।",
    targetSentence: "This English learning journey has enabled me to connect with new people and express my thoughts with confidence.",
    options: [
      { id: "o1", text: "This English learning journey has enabled me to connect with new people and express my thoughts with confidence.", isCorrect: true },
      { id: "o2", text: "English was deleted from my journey yesterday.", isCorrect: false },
      { id: "o3", text: "People deleted thoughts with zero confidence.", isCorrect: false }
    ],
    correctAnswer: "This English learning journey has enabled me to connect with new people and express my thoughts with confidence.",
    explanation: "'This English learning journey has enabled me to connect with new people and express my thoughts with confidence' is articulate and inspiring."
  },
  {
    id: "a2_u13_l195_p15",
    type: "error_correction",
    prompt: "Identify and correct the integrated grammar error in this synthesis sentence:",
    sourceSentence: "The book which was writing by the famous author is very fascinating.",
    targetSentence: "The book which was written by the famous author is very fascinating.",
    options: [
      { id: "o1", text: "The book which was written by the famous author is very fascinating.", isCorrect: true },
      { id: "o2", text: "The book who was written by author is fascinating.", isCorrect: false },
      { id: "o3", text: "The book which written author was fascinating.", isCorrect: false }
    ],
    correctAnswer: "The book which was written by the famous author is very fascinating.",
    explanation: "Passive voice requires past participle 'written' ('was written by')."
  },
  {
    id: "a2_u13_l195_p16",
    type: "listening",
    prompt: "Listen to the capstone speech and identify the key takeaway:",
    audioText: "Congratulations to all learners completing the A2 program! You now have a solid linguistic foundation to communicate in everyday situations, travel internationally with ease, and embark on advanced B1 English studies with pride.",
    targetSentence: "Learners have a solid foundation for daily communication, international travel, and B1 progression.",
    options: [
      { id: "o1", text: "Learners have a solid foundation for daily communication, international travel, and B1 progression.", isCorrect: true },
      { id: "o2", text: "All learning has been permanently cancelled.", isCorrect: false },
      { id: "o3", text: "English is no longer spoken in international travel.", isCorrect: false },
      { id: "o4", text: "Students must restart from Unit 1 Lesson 1.", isCorrect: false }
    ],
    correctAnswer: "Learners have a solid foundation for daily communication, international travel, and B1 progression.",
    explanation: "The speech celebrates learners' readiness for daily communication, international travel, and B1 progression."
  },
  {
    id: "a2_u13_l195_p17",
    type: "personal_production",
    prompt: "Write 3 sentences summarizing your proudest achievements in English and your future learning goals:",
    targetSentence: "I am proud that I can now express my opinions, describe past travels, and interact politely with international speakers. In the future, I plan to expand my professional vocabulary and read original English literature with greater fluency.",
    audioText: "I am proud that I can now express my opinions, describe past travels, and interact politely with international speakers. In the future, I plan to expand my professional vocabulary and read original English literature with greater fluency."
  },
  {
    id: "a2_u13_l195_p18",
    type: "dialogue_completion",
    prompt: "Complete the capstone conversational simulation:\nInterviewer: 'How has your ability to communicate in English improved over this curriculum?'\nYou: '________________________'",
    sourceSentence: "How has your ability to communicate in English improved over this curriculum?",
    targetSentence: "I can now participate in discussions with ease, formulate questions tactfully, and understand complex natural dialogues without hesitation.",
    options: [
      { id: "o1", text: "I can now participate in discussions with ease, formulate questions tactfully, and understand complex natural dialogues without hesitation.", isCorrect: true },
      { id: "o2", text: "English words were cancelled last month.", isCorrect: false },
      { id: "o3", text: "I only know three words in total.", isCorrect: false }
    ],
    correctAnswer: "I can now participate in discussions with ease, formulate questions tactfully, and understand complex natural dialogues without hesitation.",
    explanation: "'I can now participate in discussions with ease...' demonstrates comprehensive A2 communicative competence."
  },
  {
    id: "a2_u13_l195_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a comprehensive synthesis statement:",
    sourceSentence: "Language learning opens doors to diverse cultures and meaningful global friendships.",
    targetSentence: "Language learning opens doors to diverse cultures and meaningful global friendships.",
    tokens: ["Language", "learning", "opens", "doors", "to", "diverse", "cultures", "and", "meaningful", "global", "friendships", "."],
    correctOrder: ["Language", "learning", "opens", "doors", "to", "diverse", "cultures", "and", "meaningful", "global", "friendships", "."],
    explanation: "'Language learning opens doors to diverse cultures and meaningful global friendships' is inspirational and syntactically flawless."
  },
  {
    id: "a2_u13_l195_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate integrative connector:",
    sourceSentence: "We explored [blank] (both / neither) the historic art galleries and the vibrant outdoor street markets during our visit.",
    targetSentence: "We explored both the historic art galleries and the vibrant outdoor street markets during our visit.",
    text: "We explored [blank] the historic art galleries and the vibrant outdoor street markets during our visit.",
    options: [
      { id: "o1", text: "both", isCorrect: true },
      { id: "o2", text: "neither", isCorrect: false },
      { id: "o3", text: "either", isCorrect: false },
      { id: "o4", text: "also", isCorrect: false }
    ],
    correctAnswer: "both",
    explanation: "Correlative conjunction pair: 'both... and'."
  },
  {
    id: "a2_u13_l195_p21",
    type: "translation",
    prompt: "Translate to English: 'बधाई हो, आपने CEFR A2 स्तर को सफलतापूर्वक पूरा कर लिया है!'",
    sourceSentence: "बधाई हो, आपने CEFR A2 स्तर को सफलतापूर्वक पूरा कर लिया है!",
    targetSentence: "Congratulations, you have successfully completed the CEFR A2 level!",
    explanation: "'Congratulations, you have successfully completed the CEFR A2 level!'"
  },
  {
    id: "a2_u13_l195_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Deliver a celebratory graduation speech for your language cohort.",
    sourceSentence: "Congratulations to everyone on this remarkable achievement! Through dedication, practice, and curiosity, we have built lifelong communication skills that will empower our future journeys.",
    targetSentence: "Congratulations to everyone on this remarkable achievement! Through dedication, practice, and curiosity, we have built lifelong communication skills that will empower our future journeys.",
    audioText: "Congratulations to everyone on this remarkable achievement! Through dedication, practice, and curiosity, we have built lifelong communication skills that will empower our future journeys.",
    explanation: "Deliver with celebratory warmth and clear, confident articulation ('remarkable achievement', 'curiosity', 'empower our future journeys')."
  }
];

const l195_review: Exercise[] = [
  {
    id: "a2_u13_l195_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Comprehensive A1-A2 Synthesis): Which sentence integrates relative clauses, passive voice, and conditionals correctly?",
    options: [
      { id: "o1", text: "If we visit the sanctuary where wild wolves are protected, we will learn how natural habitats are preserved.", isCorrect: true },
      { id: "o2", text: "If we visit sanctuary who wolves protect, we will learn habitat preserve.", isCorrect: false },
      { id: "o3", text: "If we visited sanctuary where wolves was protected, we learn.", isCorrect: false },
      { id: "o4", text: "Sanctuary where wolves protect if we visit will learn.", isCorrect: false }
    ],
    correctAnswer: "If we visit the sanctuary where wild wolves are protected, we will learn how natural habitats are preserved.",
    explanation: "Correctly integrates First Conditional ('If we visit... we will learn'), relative clause ('where wild wolves...'), and passive voice ('are protected', 'are preserved')."
  },
  {
    id: "a2_u13_l195_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'The skills you have mastered will serve you [blank] (well / good) in all your future endeavors.'",
    sourceSentence: "The skills you have mastered will serve you [blank] in all your future endeavors.",
    targetSentence: "The skills you have mastered will serve you well in all your future endeavors.",
    text: "The skills you have mastered will serve you [blank] in all your future endeavors.",
    options: [
      { id: "o1", text: "well", isCorrect: true },
      { id: "o2", text: "good", isCorrect: false },
      { id: "o3", text: "betterly", isCorrect: false },
      { id: "o4", text: "goodly", isCorrect: false }
    ],
    correctAnswer: "well",
    explanation: "The adverb 'well' modifies the verb 'serve' ('serve you well')."
  },
  {
    id: "a2_u13_l195_r9",
    type: "error_correction",
    prompt: "Correct the comprehensive synthesis sentence:",
    sourceSentence: "Neither the museum nor the gallery were open on Monday morning.",
    targetSentence: "Neither the museum nor the gallery was open on Monday morning.",
    options: [
      { id: "o1", text: "Neither the museum nor the gallery was open on Monday morning.", isCorrect: true },
      { id: "o2", text: "Neither museum or gallery was open on Monday.", isCorrect: false },
      { id: "o3", text: "Neither the museum nor gallery were opening Monday.", isCorrect: false }
    ],
    correctAnswer: "Neither the museum nor the gallery was open on Monday morning.",
    explanation: "With 'neither... nor', when both subjects are singular ('museum', 'gallery'), the verb is singular ('was open')."
  },
  {
    id: "a2_u13_l195_r10",
    type: "translation",
    prompt: "Translate to English: 'निरंतर अभ्यास ही भाषा में आत्मविश्वास और प्रवाह की कुंजी है।' (Lifelong learning)",
    sourceSentence: "निरंतर अभ्यास ही भाषा में आत्मविश्वास और प्रवाह की कुंजी है।",
    targetSentence: "Consistent practice is the key to confidence and fluency in language.",
    explanation: "'Consistent practice is the key to confidence and fluency in a language.'"
  }
];

const l195_assessment: Exercise[] = [
  {
    id: "a2_u13_l195_a5",
    type: "multiple_choice",
    prompt: "Which statement reflects true mastery of CEFR A2 English communicative competence?",
    options: [
      { id: "o1", text: "The ability to interact comfortably in familiar daily situations, describe personal experiences, and exchange information clearly with polite social strategies.", isCorrect: true },
      { id: "o2", text: "The ability to speak only in single-word answers when asked a question.", isCorrect: false },
      { id: "o3", text: "The requirement to know every single word in an unabridged dictionary.", isCorrect: false },
      { id: "o4", text: "Only communicating through written text without listening or speaking.", isCorrect: false }
    ],
    correctAnswer: "The ability to interact comfortably in familiar daily situations, describe personal experiences, and exchange information clearly with polite social strategies.",
    explanation: "This is the internationally standardized definition of CEFR A2 communicative mastery."
  },
  {
    id: "a2_u13_l195_a6",
    type: "fill_blank",
    prompt: "Complete the capstone reflection:",
    sourceSentence: "With dedication and curiosity, language learners can achieve [blank] (remarkable / remark) fluency.",
    targetSentence: "With dedication and curiosity, language learners can achieve remarkable fluency.",
    text: "With dedication and curiosity, language learners can achieve [blank] fluency.",
    options: [
      { id: "o1", text: "remarkable", isCorrect: true },
      { id: "o2", text: "remark", isCorrect: false },
      { id: "o3", text: "remarkably", isCorrect: false },
      { id: "o4", text: "remarked", isCorrect: false }
    ],
    correctAnswer: "remarkable",
    explanation: "The adjective 'remarkable' modifies the noun 'fluency'."
  },
  {
    id: "a2_u13_l195_a7",
    type: "speaking",
    prompt: "Final Can-Do Exit Assessment: Speak 3 sentences expressing your readiness to use English in the real world.",
    sourceSentence: "I am confident in my ability to travel, work, and build friendships in English. I can understand varied accents, express nuanced opinions, and resolve everyday situations with ease. I am excited to continue expanding my knowledge in the future.",
    targetSentence: "I am confident in my ability to travel, work, and build friendships in English. I can understand varied accents, express nuanced opinions, and resolve everyday situations with ease. I am excited to continue expanding my knowledge in the future.",
    audioText: "I am confident in my ability to travel, work, and build friendships in English. I can understand varied accents, express nuanced opinions, and resolve everyday situations with ease. I am excited to continue expanding my knowledge in the future.",
    explanation: "Demonstrate complete CEFR A2 exit readiness with fluent, confident articulation."
  },
  {
    id: "a2_u13_l195_a8",
    type: "mediation",
    prompt: "Translate this graduation message: 'आपकी कड़ी मेहनत रंग लाई है; नई ऊंचाइयों को छूते रहें और कभी भी सीखना बंद न करें!' Provide the best translation.",
    sourceSentence: "आपकी कड़ी मेहनत रंग लाई है; नई ऊंचाइयों को छूते रहें और कभी भी सीखना बंद न करें!",
    targetSentence: "Your hard work has paid off; keep reaching new heights and never stop learning!",
    options: [
      { id: "o1", text: "Your hard work has paid off; keep reaching new heights and never stop learning!", isCorrect: true },
      { id: "o2", text: "Hard work was deleted yesterday morning.", isCorrect: false },
      { id: "o3", text: "Stop learning immediately because course ended.", isCorrect: false }
    ],
    correctAnswer: "Your hard work has paid off; keep reaching new heights and never stop learning!",
    explanation: "'Your hard work has paid off; keep reaching new heights and never stop learning!' is motivating, elegant, and accurate."
  },
  {
    id: "a2_u13_l195_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a celebratory conclusion statement:",
    sourceSentence: "You have successfully demonstrated complete communicative mastery of CEFR A2 English.",
    targetSentence: "You have successfully demonstrated complete communicative mastery of CEFR A2 English.",
    tokens: ["You", "have", "successfully", "demonstrated", "complete", "communicative", "mastery", "of", "CEFR", "A2", "English", "."],
    correctOrder: ["You", "have", "successfully", "demonstrated", "complete", "communicative", "mastery", "of", "CEFR", "A2", "English", "."],
    explanation: "'You have successfully demonstrated complete communicative mastery of CEFR A2 English' is grammatically flawless."
  },
  {
    id: "a2_u13_l195_a10",
    type: "dialogue_completion",
    prompt: "Complete the final capstone graduation exchange:\nInstructor: 'Congratulations on completing Unit 13 and achieving full CEFR A2 certification!'\nStudent: '________________________'",
    sourceSentence: "Congratulations on completing Unit 13 and achieving full CEFR A2 certification!",
    targetSentence: "Thank you so much! It has been an enriching and transformative learning experience.",
    options: [
      { id: "o1", text: "Thank you so much! It has been an enriching and transformative learning experience.", isCorrect: true },
      { id: "o2", text: "Certificates are illegal in schools.", isCorrect: false },
      { id: "o3", text: "I deleted my memory of this course.", isCorrect: false }
    ],
    correctAnswer: "Thank you so much! It has been an enriching and transformative learning experience.",
    explanation: "'Thank you so much! It has been an enriching and transformative learning experience' is heartfelt and articulate."
  }
];

// Enrich Lessons 191 to 195
enrichUnit13LessonData('lesson_a2_13_191', LESSON_A2_13_191_DATA, l191_practice, l191_review, l191_assessment);
enrichUnit13LessonData('lesson_a2_13_192', LESSON_A2_13_192_DATA, l192_practice, l192_review, l192_assessment);
enrichUnit13LessonData('lesson_a2_13_193', LESSON_A2_13_193_DATA, l193_practice, l193_review, l193_assessment);
enrichUnit13LessonData('lesson_a2_13_194', LESSON_A2_13_194_DATA, l194_practice, l194_review, l194_assessment);
enrichUnit13LessonData('lesson_a2_13_195', LESSON_A2_13_195_DATA, l195_practice, l195_review, l195_assessment);
