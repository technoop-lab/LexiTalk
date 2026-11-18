import { Exercise } from '../src/types';
import { LESSON_A2_11_156_DATA } from '../src/data/lessons/lesson_a2_11_156';
import { LESSON_A2_11_157_DATA } from '../src/data/lessons/lesson_a2_11_157';
import { LESSON_A2_11_158_DATA } from '../src/data/lessons/lesson_a2_11_158';
import { LESSON_A2_11_159_DATA } from '../src/data/lessons/lesson_a2_11_159';
import { LESSON_A2_11_160_DATA } from '../src/data/lessons/lesson_a2_11_160';
import { enrichUnit11LessonData } from './enrich_unit11_helper';

// =========================================================================
// LESSON 156: Invitations and Responses
// =========================================================================
const l156_practice: Exercise[] = [
  {
    id: "a2_u11_l156_p16",
    type: "reading",
    prompt: "Read the invitation RSVP response and answer the question:\n\"Hi Carlos,\nThank you so much for inviting me to your graduation dinner next Thursday! I would love to attend, but unfortunately, I have a mandatory business trip to Chicago that evening. I am really sorry I will miss the celebration, but I would love to take you out for lunch the following week to celebrate your achievement!\"\nWhy is the sender unable to attend the graduation dinner?",
    sourceSentence: "Why is the sender unable to attend the graduation dinner?",
    targetSentence: "Due to a scheduled business trip to Chicago that evening.",
    options: [
      { id: "o1", text: "Due to a scheduled business trip to Chicago that evening.", isCorrect: true },
      { id: "o2", text: "Because they do not like Italian food.", isCorrect: false },
      { id: "o3", text: "Because Carlos canceled the dinner.", isCorrect: false },
      { id: "o4", text: "Because they forgot the date.", isCorrect: false }
    ],
    correctAnswer: "Due to a scheduled business trip to Chicago that evening.",
    explanation: "The text explains: 'unfortunately, I have a mandatory business trip to Chicago that evening.'"
  },
  {
    id: "a2_u11_l156_p17",
    type: "speaking",
    prompt: "Speak politely: Graciously decline a dinner invitation due to a prior commitment and propose a rain check.",
    sourceSentence: "I'd love to join you for dinner, but I'm afraid I have a prior commitment. Could we take a rain check and meet next week instead?",
    targetSentence: "I'd love to join you for dinner, but I'm afraid I have a prior commitment. Could we take a rain check and meet next week instead?",
    audioText: "I'd love to join you for dinner, but I'm afraid I have a prior commitment. Could we take a rain check and meet next week instead?",
    explanation: "Natural polite refusal using 'I'd love to... but I'm afraid' and offering a rain check."
  },
  {
    id: "a2_u11_l156_p18",
    type: "match_pairs",
    prompt: "Match the invitation response phrases with their communicative functions:",
    options: [
      { id: "m1", text: "I'd be delighted to attend." },
      { id: "m1_m", text: "formal and enthusiastic acceptance" },
      { id: "m2", text: "I'm afraid I can't make it." },
      { id: "m2_m", text: "polite decline indicating inability to attend" },
      { id: "m3", text: "Can I take a rain check?" },
      { id: "m3_m", text: "asking to reschedule an offer or invitation for a later time" },
      { id: "m4", text: "Count me in!" },
      { id: "m4_m", text: "informal and enthusiastic confirmation of attendance" }
    ]
  },
  {
    id: "a2_u11_l156_p19",
    type: "mediation",
    prompt: "Help your friend translate this polite Hindi refusal into English: 'निमंत्रण के लिए धन्यवाद, लेकिन मुझे डर है कि उस समय मेरी पहले से एक बैठक है।' Provide the best English response:",
    sourceSentence: "निमंत्रण के लिए धन्यवाद, लेकिन मुझे डर है कि उस समय मेरी पहले से एक बैठक है।",
    targetSentence: "Thanks for the invitation, but I'm afraid I already have a meeting scheduled at that time.",
    options: [
      { id: "o1", text: "Thanks for the invitation, but I'm afraid I already have a meeting scheduled at that time.", isCorrect: true },
      { id: "o2", text: "I will never come to your invitation because meetings are bad.", isCorrect: false },
      { id: "o3", text: "I don't thank you for invitation today.", isCorrect: false }
    ],
    correctAnswer: "Thanks for the invitation, but I'm afraid I already have a meeting scheduled at that time.",
    explanation: "'Thanks for the invitation, but I'm afraid I already have a meeting...' is polite and exact."
  },
  {
    id: "a2_u11_l156_p20",
    type: "error_correction",
    prompt: "Identify and correct the politeness error in declining this social offer:",
    sourceSentence: "I cannot come to your party because I don't want.",
    targetSentence: "I'm afraid I can't make it to your party because I have other plans.",
    options: [
      { id: "o1", text: "I'm afraid I can't make it to your party because I have other plans.", isCorrect: true },
      { id: "o2", text: "I am not coming party because boring.", isCorrect: false },
      { id: "o3", text: "I will not attend because you didn't ask nicely.", isCorrect: false }
    ],
    correctAnswer: "I'm afraid I can't make it to your party because I have other plans.",
    explanation: "In English social etiquette, polite refusals use softening phrases ('I'm afraid I can't make it') rather than blunt declarations."
  },
  {
    id: "a2_u11_l156_p21",
    type: "listening",
    prompt: "Listen to the phone conversation and answer: Will David attend the concert on Saturday?",
    audioText: "Hey David, a few of us are going to the jazz concert on Saturday night. Would you like to come along? — I would love to, but Saturday is my sister's wedding! Thanks so much for thinking of me, though!",
    targetSentence: "No, because he is attending his sister's wedding on Saturday.",
    options: [
      { id: "o1", text: "No, because he is attending his sister's wedding on Saturday.", isCorrect: true },
      { id: "o2", text: "Yes, he will buy tickets for all of them.", isCorrect: false },
      { id: "o3", text: "No, because he dislikes jazz music.", isCorrect: false }
    ],
    correctAnswer: "No, because he is attending his sister's wedding on Saturday.",
    explanation: "David declines politely: 'Saturday is my sister's wedding!'."
  },
  {
    id: "a2_u11_l156_p22",
    type: "personal_production",
    prompt: "Write 2 sentences accepting an invitation to a colleague's farewell dinner and asking if you can bring anything:",
    targetSentence: "Thank you so much for the invitation! I would be delighted to attend the farewell dinner on Friday. Please let me know if I can bring a side dish or dessert.",
    audioText: "Thank you so much for the invitation! I would be delighted to attend the farewell dinner on Friday. Please let me know if I can bring a side dish or dessert."
  }
];

const l156_review: Exercise[] = [
  {
    id: "a2_u11_l156_r6",
    type: "fill_blank",
    prompt: "Complete the polite phrase: 'Thank you for the kind invitation. I would ___ to join you!'",
    sourceSentence: "Thank you for the kind invitation. I would love to join you!",
    targetSentence: "Thank you for the kind invitation. I would love to join you!",
    options: [
      { id: "o1", text: "love", isCorrect: true },
      { id: "o2", text: "loved", isCorrect: false },
      { id: "o3", text: "loving", isCorrect: false },
      { id: "o4", text: "loves", isCorrect: false }
    ],
    correctAnswer: "love",
    explanation: "'Would love to + base verb' expresses enthusiastic acceptance."
  },
  {
    id: "a2_u11_l156_r7",
    type: "word_ordering",
    prompt: "Arrange the words into a polite refusal with a reason:",
    targetSentence: "I'm afraid I cannot attend due to a previous appointment.",
    options: [
      { id: "w1", text: "I'm" },
      { id: "w2", text: "afraid" },
      { id: "w3", text: "I" },
      { id: "w4", text: "cannot" },
      { id: "w5", text: "attend" },
      { id: "w6", text: "due" },
      { id: "w7", text: "to" },
      { id: "w8", text: "a" },
      { id: "w9", text: "previous" },
      { id: "w10", text: "appointment." }
    ],
    correctAnswer: "I'm afraid I cannot attend due to a previous appointment."
  },
  {
    id: "a2_u11_l156_r8",
    type: "dialogue_completion",
    prompt: "Complete the exchange naturally:",
    sourceSentence: "Would you like to come over for board game night this Friday?",
    targetSentence: "That sounds like a lot of fun! Count me in! What time should I arrive?",
    options: [
      { id: "o1", text: "That sounds like a lot of fun! Count me in! What time should I arrive?", isCorrect: true },
      { id: "o2", text: "Board games were invented centuries ago.", isCorrect: false },
      { id: "o3", text: "I do not know what Friday means.", isCorrect: false }
    ],
    correctAnswer: "That sounds like a lot of fun! Count me in! What time should I arrive?",
    explanation: "Enthusiastic and natural social confirmation."
  },
  {
    id: "a2_u11_l156_r9",
    type: "translation",
    prompt: "Translate into English: 'मुझे निमंत्रण के बारे में सोचने के लिए थोड़ा समय दें।'",
    sourceSentence: "मुझे निमंत्रण के बारे में सोचने के लिए थोड़ा समय दें।",
    targetSentence: "Please give me a little time to think about the invitation.",
    options: [
      { id: "o1", text: "Please give me a little time to think about the invitation.", isCorrect: true },
      { id: "o2", text: "Give me time to thinking about invite.", isCorrect: false },
      { id: "o3", text: "I am thinking about never coming to invitation.", isCorrect: false }
    ],
    correctAnswer: "Please give me a little time to think about the invitation.",
    explanation: "'Please give me a little time to think about the invitation' is polite and accurate."
  },
  {
    id: "a2_u11_l156_r10",
    type: "multiple_choice",
    prompt: "Select the sentence that expresses a polite, complete social acceptance:",
    targetSentence: "I would be delighted to attend your art exhibition on Sunday afternoon.",
    options: [
      { id: "o1", text: "I would be delighted to attend your art exhibition on Sunday afternoon.", isCorrect: true },
      { id: "o2", text: "I will be delighting for attend your art exhibition on Sunday.", isCorrect: false },
      { id: "o3", text: "I delight to attending your art exhibition in Sunday afternoon.", isCorrect: false }
    ],
    correctAnswer: "I would be delighted to attend your art exhibition on Sunday afternoon.",
    explanation: "'I would be delighted to attend...' is standard polite formal English."
  }
];

const l156_assess: Exercise[] = [
  {
    id: "a2_u11_l156_a6",
    type: "listening",
    prompt: "Listen to the voice message and identify the caller's purpose:",
    audioText: "Hi Jessica, it's Mark. I just wanted to see if you're free for a coffee catch-up this Wednesday morning around ten. Let me know if that works for you!",
    targetSentence: "Inviting Jessica for a casual coffee catch-up on Wednesday morning.",
    options: [
      { id: "o1", text: "Inviting Jessica for a casual coffee catch-up on Wednesday morning.", isCorrect: true },
      { id: "o2", text: "Canceling a job interview with Jessica.", isCorrect: false },
      { id: "o3", text: "Asking Jessica to lend him some money.", isCorrect: false }
    ],
    correctAnswer: "Inviting Jessica for a casual coffee catch-up on Wednesday morning.",
    explanation: "Mark extends a warm invitation for coffee on Wednesday at 10 AM."
  },
  {
    id: "a2_u11_l156_a7",
    type: "error_correction",
    prompt: "Correct the grammatical mistake: 'I would love coming to your house for dinner.'",
    sourceSentence: "I would love coming to your house for dinner.",
    targetSentence: "I would love to come to your house for dinner.",
    options: [
      { id: "o1", text: "I would love to come to your house for dinner.", isCorrect: true },
      { id: "o2", text: "I would love for come to your house for dinner.", isCorrect: false },
      { id: "o3", text: "I would love came to your house for dinner.", isCorrect: false }
    ],
    correctAnswer: "I would love to come to your house for dinner.",
    explanation: "'Would love' is followed by the to-infinitive ('to come'), not the gerund ('coming')."
  },
  {
    id: "a2_u11_l156_a8",
    type: "mediation",
    prompt: "A friend sent you an invitation in Hindi: 'क्या आप रविवार को हमारे नए घर की पार्टी में आ सकते हैं?' Relay your polite acceptance in English:",
    sourceSentence: "क्या आप रविवार को हमारे नए घर की पार्टी में आ सकते हैं?",
    targetSentence: "I'd love to come to your housewarming party on Sunday! Congratulations on your new home!",
    options: [
      { id: "o1", text: "I'd love to come to your housewarming party on Sunday! Congratulations on your new home!", isCorrect: true },
      { id: "o2", text: "I don't like houses so I will stay home.", isCorrect: false },
      { id: "o3", text: "You must come to my party instead.", isCorrect: false }
    ],
    correctAnswer: "I'd love to come to your housewarming party on Sunday! Congratulations on your new home!",
    explanation: "Warm and socially appropriate housewarming RSVP acceptance."
  },
  {
    id: "a2_u11_l156_a9",
    type: "speaking",
    prompt: "Speak clearly: Accept an invitation to a museum tour and confirm the meeting point.",
    sourceSentence: "Thank you for the invitation! I would love to join the museum tour. Shall we meet by the main entrance at eleven?",
    targetSentence: "Thank you for the invitation! I would love to join the museum tour. Shall we meet by the main entrance at eleven?",
    audioText: "Thank you for the invitation! I would love to join the museum tour. Shall we meet by the main entrance at eleven?",
    explanation: "Enthusiastic acceptance combined with a logistical confirmation question."
  },
  {
    id: "a2_u11_l156_a10",
    type: "personal_production",
    prompt: "Write 2 sentences politely turning down a weekend invitation while expressing warmth and offering another time:",
    targetSentence: "I really appreciate the invitation to go camping this weekend, but unfortunately I have family visiting from out of town. Would you be free to grab dinner together next Tuesday instead?",
    audioText: "I really appreciate the invitation to go camping this weekend, but unfortunately I have family visiting from out of town. Would you be free to grab dinner together next Tuesday instead?"
  }
];

// =========================================================================
// LESSON 157: News and Media
// =========================================================================
const l157_practice: Exercise[] = [
  {
    id: "a2_u11_l157_p16",
    type: "reading",
    prompt: "Read the local news snippet and answer the question:\n\"City Transit News:\nAccording to municipal officials, the new tram line will open to the public on October 1st. The mayor stated that the project was completed under budget and two months ahead of schedule. Over 50,000 daily commuters are expected to benefit from the direct connection to the business district.\"\nWhat did the mayor state about the tram project?",
    sourceSentence: "What did the mayor state about the tram project?",
    targetSentence: "That it was completed under budget and two months ahead of schedule.",
    options: [
      { id: "o1", text: "That it was completed under budget and two months ahead of schedule.", isCorrect: true },
      { id: "o2", text: "That the tram line has been permanently shut down.", isCorrect: false },
      { id: "o3", text: "That ticket prices will increase by fifty percent.", isCorrect: false },
      { id: "o4", text: "That only city officials may ride the new tram.", isCorrect: false }
    ],
    correctAnswer: "That it was completed under budget and two months ahead of schedule.",
    explanation: "The article explicitly reports: 'The mayor stated that the project was completed under budget and two months ahead of schedule.'"
  },
  {
    id: "a2_u11_l157_p17",
    type: "speaking",
    prompt: "Speak clearly and report news information using reporting verbs:",
    sourceSentence: "According to the latest meteorological report, severe thunderstorms are expected across the region tonight.",
    targetSentence: "According to the latest meteorological report, severe thunderstorms are expected across the region tonight.",
    audioText: "According to the latest meteorological report, severe thunderstorms are expected across the region tonight.",
    explanation: "Clear broadcast-style delivery of news information."
  },
  {
    id: "a2_u11_l157_p18",
    type: "match_pairs",
    prompt: "Match the media reporting terms with their definitions:",
    options: [
      { id: "m1", text: "according to sources" },
      { id: "m1_m", text: "as stated by reliable informants or documents" },
      { id: "m2", text: "spokesperson claimed" },
      { id: "m2_m", text: "official representative asserted a statement" },
      { id: "m3", text: "breaking news" },
      { id: "m3_m", text: "current events happening right now" },
      { id: "m4", text: "press release" },
      { id: "m4_m", text: "official statement issued to media outlets" }
    ]
  },
  {
    id: "a2_u11_l157_p19",
    type: "mediation",
    prompt: "Translate this news report update into English: 'समाचार रिपोर्टों के अनुसार, भारी बर्फबारी के कारण आज स्कूल बंद रहेंगे।'",
    sourceSentence: "समाचार रिपोर्टों के अनुसार, भारी बर्फबारी के कारण आज स्कूल बंद रहेंगे।",
    targetSentence: "According to news reports, schools will remain closed today due to heavy snowfall.",
    options: [
      { id: "o1", text: "According to news reports, schools will remain closed today due to heavy snowfall.", isCorrect: true },
      { id: "o2", text: "News says schools open because snow is finished.", isCorrect: false },
      { id: "o3", text: "Schools closed forever because of no snow.", isCorrect: false }
    ],
    correctAnswer: "According to news reports, schools will remain closed today due to heavy snowfall.",
    explanation: "'According to news reports... due to heavy snowfall' accurately captures the report."
  },
  {
    id: "a2_u11_l157_p20",
    type: "error_correction",
    prompt: "Identify the reporting verb error: 'The article said me that the bridge was repaired.'",
    sourceSentence: "The article said me that the bridge was repaired.",
    targetSentence: "The article told me that the bridge was repaired.",
    options: [
      { id: "o1", text: "The article told me that the bridge was repaired.", isCorrect: true },
      { id: "o2", text: "The article said to me that bridge was repaired.", isCorrect: false },
      { id: "o3", text: "The article is saying me that bridge repaired.", isCorrect: false }
    ],
    correctAnswer: "The article told me that the bridge was repaired.",
    explanation: "'Say' does not take an indirect personal object without 'to' ('said to me'), whereas 'tell' takes a direct personal object ('told me')."
  },
  {
    id: "a2_u11_l157_p21",
    type: "listening",
    prompt: "Listen to the radio broadcast and answer: What milestone did the renewable energy park reach?",
    audioText: "In environmental news, the national energy grid reported that solar and wind farms generated more than fifty percent of the country's electricity last month.",
    targetSentence: "Generating more than 50% of the country's electricity last month.",
    options: [
      { id: "o1", text: "Generating more than 50% of the country's electricity last month.", isCorrect: true },
      { id: "o2", text: "Reducing solar energy production to zero.", isCorrect: false },
      { id: "o3", text: "Closing all national wind farms.", isCorrect: false }
    ],
    correctAnswer: "Generating more than 50% of the country's electricity last month.",
    explanation: "The broadcast highlights that solar and wind generated over 50% of electricity."
  },
  {
    id: "a2_u11_l157_p22",
    type: "personal_production",
    prompt: "Write 2 sentences summarizing a recent news story or positive community development you heard about:",
    targetSentence: "According to local news, our city opened a new public library featuring digital learning labs and community workspaces. The mayor stated that thousands of students have already registered for library memberships.",
    audioText: "According to local news, our city opened a new public library featuring digital learning labs and community workspaces. The mayor stated that thousands of students have already registered for library memberships."
  }
];

const l157_review: Exercise[] = [
  {
    id: "a2_u11_l157_r6",
    type: "fill_blank",
    prompt: "Complete the reported statement: 'The scientist explained ___ global temperatures had risen over the last decade.'",
    sourceSentence: "The scientist explained that global temperatures had risen over the last decade.",
    targetSentence: "The scientist explained that global temperatures had risen over the last decade.",
    options: [
      { id: "o1", text: "that", isCorrect: true },
      { id: "o2", text: "which", isCorrect: false },
      { id: "o3", text: "what", isCorrect: false },
      { id: "o4", text: "because of", isCorrect: false }
    ],
    correctAnswer: "that",
    explanation: "Reporting verbs like 'explain', 'state', 'report' are followed by the conjunction 'that'."
  },
  {
    id: "a2_u11_l157_r7",
    type: "word_ordering",
    prompt: "Reconstruct the media headline summary:",
    targetSentence: "According to police reports the suspect was arrested yesterday.",
    options: [
      { id: "w1", text: "According" },
      { id: "w2", text: "to" },
      { id: "w3", text: "police" },
      { id: "w4", text: "reports" },
      { id: "w5", text: "the" },
      { id: "w6", text: "suspect" },
      { id: "w7", text: "was" },
      { id: "w8", text: "arrested" },
      { id: "w9", text: "yesterday." }
    ],
    correctAnswer: "According to police reports the suspect was arrested yesterday."
  },
  {
    id: "a2_u11_l157_r8",
    type: "dialogue_completion",
    prompt: "Complete the discussion about current affairs:",
    sourceSentence: "Did you hear the news about the high-speed rail expansion?",
    targetSentence: "Yes! The minister stated that construction will begin early next spring.",
    options: [
      { id: "o1", text: "Yes! The minister stated that construction will begin early next spring.", isCorrect: true },
      { id: "o2", text: "Trains are vehicles that run on tracks.", isCorrect: false },
      { id: "o3", text: "I lost my train ticket ten years ago.", isCorrect: false }
    ],
    correctAnswer: "Yes! The minister stated that construction will begin early next spring.",
    explanation: "Accurately conveys reported speech regarding the news story."
  },
  {
    id: "a2_u11_l157_r9",
    type: "translation",
    prompt: "Translate into English: 'कंपनी ने घोषणा की कि वे अगले साल नए उत्पाद लॉन्च करेंगे।'",
    sourceSentence: "कंपनी ने घोषणा की कि वे अगले साल नए उत्पाद लॉन्च करेंगे।",
    targetSentence: "The company announced that they would launch new products next year.",
    options: [
      { id: "o1", text: "The company announced that they would launch new products next year.", isCorrect: true },
      { id: "o2", text: "The company announce they launch product yesterday.", isCorrect: false },
      { id: "o3", text: "Company is announced product launched next year.", isCorrect: false }
    ],
    correctAnswer: "The company announced that they would launch new products next year.",
    explanation: "'The company announced that they would launch new products next year' accurately uses reported speech backshifting."
  },
  {
    id: "a2_u11_l157_r10",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses reporting verbs?",
    targetSentence: "The spokesperson claimed that customer satisfaction had improved noticeably.",
    options: [
      { id: "o1", text: "The spokesperson claimed that customer satisfaction had improved noticeably.", isCorrect: true },
      { id: "o2", text: "The spokesperson claimed me that customer satisfaction had improved.", isCorrect: false },
      { id: "o3", text: "The spokesperson told that customer satisfaction had improved noticeably.", isCorrect: false }
    ],
    correctAnswer: "The spokesperson claimed that customer satisfaction had improved noticeably.",
    explanation: "'Claimed that...' is standard without a personal object; 'told' requires a personal object ('told reporters that')."
  }
];

const l157_assess: Exercise[] = [
  {
    id: "a2_u11_l157_a6",
    type: "listening",
    prompt: "Listen to the financial news report and choose the key fact:",
    audioText: "According to financial analysts, technology stocks rose sharply today after major companies reported stronger-than-expected quarterly revenues.",
    targetSentence: "Technology stocks rose sharply after strong quarterly earnings.",
    options: [
      { id: "o1", text: "Technology stocks rose sharply after strong quarterly earnings.", isCorrect: true },
      { id: "o2", text: "Technology companies went bankrupt today.", isCorrect: false },
      { id: "o3", text: "The stock market was closed all week.", isCorrect: false }
    ],
    correctAnswer: "Technology stocks rose sharply after strong quarterly earnings.",
    explanation: "The broadcast explains that tech stocks rose sharply due to strong quarterly revenues."
  },
  {
    id: "a2_u11_l157_a7",
    type: "error_correction",
    prompt: "Correct the error in this report: 'According with the newspaper, the museum is free on Sundays.'",
    sourceSentence: "According with the newspaper, the museum is free on Sundays.",
    targetSentence: "According to the newspaper, the museum is free on Sundays.",
    options: [
      { id: "o1", text: "According to the newspaper, the museum is free on Sundays.", isCorrect: true },
      { id: "o2", text: "According by the newspaper, the museum is free on Sundays.", isCorrect: false },
      { id: "o3", text: "According for the newspaper, the museum is free on Sundays.", isCorrect: false }
    ],
    correctAnswer: "According to the newspaper, the museum is free on Sundays.",
    explanation: "The correct fixed preposition is 'according to', never 'according with'."
  },
  {
    id: "a2_u11_l157_a8",
    type: "mediation",
    prompt: "Relay this news update in English to a foreign colleague: 'मौसम विभाग ने चेतावनी दी है कि कल दोपहर तेज हवाएं चलेंगी।'",
    sourceSentence: "मौसम विभाग ने चेतावनी दी है कि कल दोपहर तेज हवाएं चलेंगी।",
    targetSentence: "The weather department warned that strong winds will blow tomorrow afternoon.",
    options: [
      { id: "o1", text: "The weather department warned that strong winds will blow tomorrow afternoon.", isCorrect: true },
      { id: "o2", text: "Weather department said no wind tomorrow at all.", isCorrect: false },
      { id: "o3", text: "Tomorrow weather will be hot and sunny with no air.", isCorrect: false }
    ],
    correctAnswer: "The weather department warned that strong winds will blow tomorrow afternoon.",
    explanation: "'The weather department warned that strong winds will blow tomorrow afternoon' is clear and accurate."
  },
  {
    id: "a2_u11_l157_a9",
    type: "speaking",
    prompt: "Speak clearly: Summarize an environmental news headline about plastic reduction.",
    sourceSentence: "According to a new study, citywide bans on single-use plastics have significantly reduced ocean waste over the past three years.",
    targetSentence: "According to a new study, citywide bans on single-use plastics have significantly reduced ocean waste over the past three years.",
    audioText: "According to a new study, citywide bans on single-use plastics have significantly reduced ocean waste over the past three years.",
    explanation: "Articulate 'According to a new study' and 'significantly reduced'."
  },
  {
    id: "a2_u11_l157_a10",
    type: "personal_production",
    prompt: "Write 2 sentences discussing how you stay informed about world events and which news sources you trust:",
    targetSentence: "I read international news daily on verified digital news apps to keep track of global developments. I prefer checking multiple reputable outlets in order to get a balanced perspective on major events.",
    audioText: "I read international news daily on verified digital news apps to keep track of global developments. I prefer checking multiple reputable outlets in order to get a balanced perspective on major events."
  }
];

// =========================================================================
// LESSON 158: Personal Finance and Budgeting
// =========================================================================
const l158_practice: Exercise[] = [
  {
    id: "a2_u11_l158_p16",
    type: "reading",
    prompt: "Read the personal finance advice article and answer the question:\n\"Budgeting Guidelines for Young Professionals:\nIf you want to build financial resilience, experts recommend following the 50/30/20 rule. Allocate 50% of your net income to essential living expenses (rent, utilities, groceries), 30% to personal wants, and save the remaining 20% in an emergency fund. If you cut down on dining out, you will have enough money to invest in your retirement fund every month.\"\nAccording to the 50/30/20 rule, how much income should go toward savings and investments?",
    sourceSentence: "According to the 50/30/20 rule, how much income should go toward savings and investments?",
    targetSentence: "20% of your net income.",
    options: [
      { id: "o1", text: "20% of your net income.", isCorrect: true },
      { id: "o2", text: "50% of your total earnings.", isCorrect: false },
      { id: "o3", text: "30% of your gross salary.", isCorrect: false },
      { id: "o4", text: "None of your income.", isCorrect: false }
    ],
    correctAnswer: "20% of your net income.",
    explanation: "The article specifies: 'and save the remaining 20% in an emergency fund.'"
  },
  {
    id: "a2_u11_l158_p17",
    type: "speaking",
    prompt: "Speak clearly and describe your financial savings strategy:",
    sourceSentence: "If I track my daily expenses carefully and cut down on non-essential purchases, I will be able to save enough money for a down payment on an apartment.",
    targetSentence: "If I track my daily expenses carefully and cut down on non-essential purchases, I will be able to save enough money for a down payment on an apartment.",
    audioText: "If I track my daily expenses carefully and cut down on non-essential purchases, I will be able to save enough money for a down payment on an apartment.",
    explanation: "Practice the first conditional structure 'If I track... I will be able to save'."
  },
  {
    id: "a2_u11_l158_p18",
    type: "match_pairs",
    prompt: "Match the personal finance collocations with their definitions:",
    options: [
      { id: "m1", text: "cut down on expenses" },
      { id: "m1_m", text: "reduce the amount of money you spend" },
      { id: "m2", text: "emergency fund" },
      { id: "m2_m", text: "savings set aside for unexpected urgent costs" },
      { id: "m3", text: "stick to a budget" },
      { id: "m3_m", text: "stay within planned financial spending limits" },
      { id: "m4", text: "interest rate" },
      { id: "m4_m", text: "the percentage cost of borrowing or return on savings" }
    ]
  },
  {
    id: "a2_u11_l158_p19",
    type: "mediation",
    prompt: "Help your friend explain this budgeting rule in English: 'यदि आप हर महीने अपनी आय का 15% बचाते हैं, तो आपके पास आपात स्थिति के लिए पर्याप्त धन होगा।' Choose the best translation:",
    sourceSentence: "यदि आप हर महीने अपनी आय का 15% बचाते हैं, तो आपके पास आपात स्थिति के लिए पर्याप्त धन होगा।",
    targetSentence: "If you save fifteen percent of your income every month, you will have enough money for emergencies.",
    options: [
      { id: "o1", text: "If you save fifteen percent of your income every month, you will have enough money for emergencies.", isCorrect: true },
      { id: "o2", text: "If you spend all money you will have emergency.", isCorrect: false },
      { id: "o3", text: "Saving fifteen percent makes you poor every month.", isCorrect: false }
    ],
    correctAnswer: "If you save fifteen percent of your income every month, you will have enough money for emergencies.",
    explanation: "'If you save... you will have enough money for emergencies' is the correct conditional formulation."
  },
  {
    id: "a2_u11_l158_p20",
    type: "error_correction",
    prompt: "Identify the quantifier error in this finance statement:",
    sourceSentence: "I have too many money in my savings account.",
    targetSentence: "I have a lot of money in my savings account.",
    options: [
      { id: "o1", text: "I have a lot of money in my savings account.", isCorrect: true },
      { id: "o2", text: "I have too many moneys in my savings account.", isCorrect: false },
      { id: "o3", text: "I have many money in my savings account.", isCorrect: false }
    ],
    correctAnswer: "I have a lot of money in my savings account.",
    explanation: "'Money' is an uncountable noun, so use 'a lot of' or 'much' (in negatives/questions), never 'many'."
  },
  {
    id: "a2_u11_l158_p21",
    type: "listening",
    prompt: "Listen to the financial advisor and answer: What does the advisor suggest doing before investing in stocks?",
    audioText: "Before you start investing in volatile stock markets, it is crucial to pay off all high-interest credit card debt and accumulate at least three months of living expenses in cash.",
    targetSentence: "Pay off high-interest credit card debt and save 3 months of living expenses.",
    options: [
      { id: "o1", text: "Pay off high-interest credit card debt and save 3 months of living expenses.", isCorrect: true },
      { id: "o2", text: "Borrow as much money as possible to buy stocks.", isCorrect: false },
      { id: "o3", text: "Spend all savings on expensive vacations.", isCorrect: false }
    ],
    correctAnswer: "Pay off high-interest credit card debt and save 3 months of living expenses.",
    explanation: "The advisor recommends clearing high-interest debt and establishing a 3-month cash buffer."
  },
  {
    id: "a2_u11_l158_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you manage your monthly budget or personal spending:",
    targetSentence: "Every month, I use a mobile app to categorize my expenses and monitor my grocery bills. By avoiding impulsive online shopping, I am able to put aside ten percent of my paycheck into savings.",
    audioText: "Every month, I use a mobile app to categorize my expenses and monitor my grocery bills. By avoiding impulsive online shopping, I am able to put aside ten percent of my paycheck into savings."
  }
];

const l158_review: Exercise[] = [
  {
    id: "a2_u11_l158_r6",
    type: "fill_blank",
    prompt: "Complete the financial conditional: 'If we ___ cooking at home more often, we will save over three hundred dollars a month.'",
    sourceSentence: "If we start cooking at home more often, we will save over three hundred dollars a month.",
    targetSentence: "If we start cooking at home more often, we will save over three hundred dollars a month.",
    options: [
      { id: "o1", text: "start", isCorrect: true },
      { id: "o2", text: "will start", isCorrect: false },
      { id: "o3", text: "started", isCorrect: false },
      { id: "o4", text: "have started", isCorrect: false }
    ],
    correctAnswer: "start",
    explanation: "In first conditional if-clauses, use the Present Simple ('start'), not 'will start'."
  },
  {
    id: "a2_u11_l158_r7",
    type: "word_ordering",
    prompt: "Arrange the words to form a sound financial guideline:",
    targetSentence: "You should always set aside money for unexpected emergencies.",
    options: [
      { id: "w1", text: "You" },
      { id: "w2", text: "should" },
      { id: "w3", text: "always" },
      { id: "w4", text: "set" },
      { id: "w5", text: "aside" },
      { id: "w6", text: "money" },
      { id: "w7", text: "for" },
      { id: "w8", text: "unexpected" },
      { id: "w9", text: "emergencies." }
    ],
    correctAnswer: "You should always set aside money for unexpected emergencies."
  },
  {
    id: "a2_u11_l158_r8",
    type: "dialogue_completion",
    prompt: "Complete the conversation about budgeting:",
    sourceSentence: "How do you manage to save so much money every month?",
    targetSentence: "I stick to a strict monthly budget and avoid buying brand-name clothes when generic brands are just as good.",
    options: [
      { id: "o1", text: "I stick to a strict monthly budget and avoid buying brand-name clothes when generic brands are just as good.", isCorrect: true },
      { id: "o2", text: "I don't know where all my money went yesterday.", isCorrect: false },
      { id: "o3", text: "Banks are buildings with vaults and tellers.", isCorrect: false }
    ],
    correctAnswer: "I stick to a strict monthly budget and avoid buying brand-name clothes when generic brands are just as good.",
    explanation: "Describes practical money-saving habits with clear reasoning."
  },
  {
    id: "a2_u11_l158_r9",
    type: "translation",
    prompt: "Translate into English: 'मेरे पास इस महीने नई कार खरीदने के लिए पर्याप्त पैसे नहीं हैं।'",
    sourceSentence: "मेरे पास इस महीने नई कार खरीदने के लिए पर्याप्त पैसे नहीं हैं।",
    targetSentence: "I don't have enough money to buy a new car this month.",
    options: [
      { id: "o1", text: "I don't have enough money to buy a new car this month.", isCorrect: true },
      { id: "o2", text: "I have plenty money to buy cars this month.", isCorrect: false },
      { id: "o3", text: "I not have money enough for buying a car this month.", isCorrect: false }
    ],
    correctAnswer: "I don't have enough money to buy a new car this month.",
    explanation: "'enough money to buy' correctly uses 'enough + noun + infinitive'."
  },
  {
    id: "a2_u11_l158_r10",
    type: "multiple_choice",
    prompt: "Select the sentence with the correct quantifier and noun agreement:",
    targetSentence: "She saves a large amount of money by packing her own lunch for work.",
    options: [
      { id: "o1", text: "She saves a large amount of money by packing her own lunch for work.", isCorrect: true },
      { id: "o2", text: "She saves a large number of money by packing her own lunch for work.", isCorrect: false },
      { id: "o3", text: "She saves many money by packing her own lunch for work.", isCorrect: false }
    ],
    correctAnswer: "She saves a large amount of money by packing her own lunch for work.",
    explanation: "Use 'amount of' with uncountable nouns like 'money'."
  }
];

const l158_assess: Exercise[] = [
  {
    id: "a2_u11_l158_a6",
    type: "listening",
    prompt: "Listen to the financial tip and identify the main benefit of automated savings:",
    audioText: "Setting up an automatic transfer on payday ensures that you save money before you have the chance to spend it on impulse purchases.",
    targetSentence: "It saves money automatically before you can spend it impulsively.",
    options: [
      { id: "o1", text: "It saves money automatically before you can spend it impulsively.", isCorrect: true },
      { id: "o2", text: "It triples your salary within one month.", isCorrect: false },
      { id: "o3", text: "It prevents you from paying your rent on time.", isCorrect: false }
    ],
    correctAnswer: "It saves money automatically before you can spend it impulsively.",
    explanation: "The tip highlights saving money before having the chance to spend it impulsively."
  },
  {
    id: "a2_u11_l158_a7",
    type: "error_correction",
    prompt: "Correct the grammar mistake: 'If you will cancel your gym subscription, you save thirty dollars monthly.'",
    sourceSentence: "If you will cancel your gym subscription, you save thirty dollars monthly.",
    targetSentence: "If you cancel your gym subscription, you will save thirty dollars monthly.",
    options: [
      { id: "o1", text: "If you cancel your gym subscription, you will save thirty dollars monthly.", isCorrect: true },
      { id: "o2", text: "If you are canceling gym subscription, you saved thirty dollars monthly.", isCorrect: false },
      { id: "o3", text: "If you will canceled gym subscription, you will save thirty dollars.", isCorrect: false }
    ],
    correctAnswer: "If you cancel your gym subscription, you will save thirty dollars monthly.",
    explanation: "First conditional rule: 'if' + present simple ('cancel'), main clause with 'will' + base verb ('will save')."
  },
  {
    id: "a2_u11_l158_a8",
    type: "mediation",
    prompt: "Explain this financial advice to a friend: 'खर्चों में कटौती करने के लिए, हमें अनावश्यक सब्सक्रिप्शन रद्द करने चाहिए।' Choose the best English translation:",
    sourceSentence: "खर्चों में कटौती करने के लिए, हमें अनावश्यक सब्सक्रिप्शन रद्द करने चाहिए।",
    targetSentence: "In order to cut down on expenses, we should cancel unnecessary subscriptions.",
    options: [
      { id: "o1", text: "In order to cut down on expenses, we should cancel unnecessary subscriptions.", isCorrect: true },
      { id: "o2", text: "Because expenses we must buy all subscriptions.", isCorrect: false },
      { id: "o3", text: "We cancelled subscriptions because we are rich.", isCorrect: false }
    ],
    correctAnswer: "In order to cut down on expenses, we should cancel unnecessary subscriptions.",
    explanation: "'In order to cut down on expenses, we should cancel unnecessary subscriptions' uses the purpose infinitive and correct collocation."
  },
  {
    id: "a2_u11_l158_a9",
    type: "speaking",
    prompt: "Speak clearly: State your primary financial goal for the upcoming year and how you will achieve it.",
    sourceSentence: "My primary financial goal is to build an emergency fund covering six months of expenses by saving twenty percent of my monthly earnings.",
    targetSentence: "My primary financial goal is to build an emergency fund covering six months of expenses by saving twenty percent of my monthly earnings.",
    audioText: "My primary financial goal is to build an emergency fund covering six months of expenses by saving twenty percent of my monthly earnings.",
    explanation: "Fluent articulation of 'emergency fund' and 'twenty percent of my monthly earnings'."
  },
  {
    id: "a2_u11_l158_a10",
    type: "personal_production",
    prompt: "Write 2 sentences outlining what advice you would give to someone who wants to save money for their education:",
    targetSentence: "I would advise creating a realistic monthly budget and tracking every small expense carefully. Additionally, looking for student discounts on public transit and textbooks can save a considerable amount of money.",
    audioText: "I would advise creating a realistic monthly budget and tracking every small expense carefully. Additionally, looking for student discounts on public transit and textbooks can save a considerable amount of money."
  }
];

// =========================================================================
// LESSON 159: Health and Wellness
// =========================================================================
const l159_practice: Exercise[] = [
  {
    id: "a2_u11_l159_p16",
    type: "reading",
    prompt: "Read the health and wellness article and answer the question:\n\"Maintaining a Healthy Work-Life Balance:\nDoctors recommend that adults get between 7 and 9 hours of quality sleep every night. If you work at a computer desk all day, you ought to stand up and stretch every 45 minutes to prevent back strain. You had better stay hydrated by drinking water throughout the day rather than relying on sugary energy drinks.\"\nWhat recommendation is made for desk workers to prevent back strain?",
    sourceSentence: "What recommendation is made for desk workers to prevent back strain?",
    targetSentence: "To stand up and stretch every 45 minutes.",
    options: [
      { id: "o1", text: "To stand up and stretch every 45 minutes.", isCorrect: true },
      { id: "o2", text: "To drink five energy drinks daily.", isCorrect: false },
      { id: "o3", text: "To sleep only four hours per night.", isCorrect: false },
      { id: "o4", text: "To avoid walking outdoors entirely.", isCorrect: false }
    ],
    correctAnswer: "To stand up and stretch every 45 minutes.",
    explanation: "The article advises: 'you ought to stand up and stretch every 45 minutes to prevent back strain.'"
  },
  {
    id: "a2_u11_l159_p17",
    type: "speaking",
    prompt: "Speak clearly and give health advice using strong modal recommendations ('ought to', 'had better'):",
    sourceSentence: "If you have a persistent cough and fever, you had better see a doctor and get plenty of rest.",
    targetSentence: "If you have a persistent cough and fever, you had better see a doctor and get plenty of rest.",
    audioText: "If you have a persistent cough and fever, you had better see a doctor and get plenty of rest.",
    explanation: "Pronounce 'had better see' with natural advisory emphasis."
  },
  {
    id: "a2_u11_l159_p18",
    type: "match_pairs",
    prompt: "Match the health and wellness advice structures with their meanings:",
    options: [
      { id: "m1", text: "you had better" },
      { id: "m1_m", text: "strong advice warning of negative consequences if ignored" },
      { id: "m2", text: "you ought to" },
      { id: "m2_m", text: "moral or sensible recommendation equivalent to 'should'" },
      { id: "m3", text: "used to exercise" },
      { id: "m3_m", text: "a past routine or habit that no longer happens" },
      { id: "m4", text: "stay hydrated" },
      { id: "m4_m", text: "drink sufficient fluids to maintain bodily health" }
    ]
  },
  {
    id: "a2_u11_l159_p19",
    type: "mediation",
    prompt: "Help your friend translate this doctor's recommendation into English: 'स्वस्थ रहने के लिए आपको नियमित रूप से व्यायाम करना चाहिए और संतुलित आहार लेना चाहिए।' Choose the best translation:",
    sourceSentence: "स्वस्थ रहने के लिए आपको नियमित रूप से व्यायाम करना चाहिए और संतुलित आहार लेना चाहिए।",
    targetSentence: "In order to stay healthy, you ought to exercise regularly and eat a balanced diet.",
    options: [
      { id: "o1", text: "In order to stay healthy, you ought to exercise regularly and eat a balanced diet.", isCorrect: true },
      { id: "o2", text: "You must stop eating food and never exercise.", isCorrect: false },
      { id: "o3", text: "Healthy staying means sleeping all day without moving.", isCorrect: false }
    ],
    correctAnswer: "In order to stay healthy, you ought to exercise regularly and eat a balanced diet.",
    explanation: "'In order to stay healthy, you ought to exercise regularly and eat a balanced diet' combines purpose infinitive and modal advice."
  },
  {
    id: "a2_u11_l159_p20",
    type: "error_correction",
    prompt: "Identify the mistake in giving medical advice: 'You had better to take your medicine after breakfast.'",
    sourceSentence: "You had better to take your medicine after breakfast.",
    targetSentence: "You had better take your medicine after breakfast.",
    options: [
      { id: "o1", text: "You had better take your medicine after breakfast.", isCorrect: true },
      { id: "o2", text: "You had better taking your medicine after breakfast.", isCorrect: false },
      { id: "o3", text: "You have better to take your medicine after breakfast.", isCorrect: false }
    ],
    correctAnswer: "You had better take your medicine after breakfast.",
    explanation: "'Had better' is followed directly by the bare infinitive ('take'), without 'to'."
  },
  {
    id: "a2_u11_l159_p21",
    type: "listening",
    prompt: "Listen to the fitness instructor and identify the recommended frequency for cardiovascular exercise:",
    audioText: "To improve your heart health and stamina, you should engage in moderate aerobic exercise, such as brisk walking or cycling, at least three to four times a week for thirty minutes.",
    targetSentence: "At least 3 to 4 times a week for 30 minutes.",
    options: [
      { id: "o1", text: "At least 3 to 4 times a week for 30 minutes.", isCorrect: true },
      { id: "o2", text: "Once a year for five hours.", isCorrect: false },
      { id: "o3", text: "Every day for eight hours continuously.", isCorrect: false }
    ],
    correctAnswer: "At least 3 to 4 times a week for 30 minutes.",
    explanation: "The instructor recommends 'at least three to four times a week for thirty minutes'."
  },
  {
    id: "a2_u11_l159_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing your daily wellness routine and a healthy habit you practice:",
    targetSentence: "I start every morning with a fifteen-minute yoga routine and drink a tall glass of water. In the evening, I avoid looking at digital screens before bedtime in order to improve my sleep quality.",
    audioText: "I start every morning with a fifteen-minute yoga routine and drink a tall glass of water. In the evening, I avoid looking at digital screens before bedtime in order to improve my sleep quality."
  }
];

const l159_review: Exercise[] = [
  {
    id: "a2_u11_l159_r6",
    type: "fill_blank",
    prompt: "Complete the advice sentence: 'You ___ take an umbrella; the weather forecast predicts heavy rain.'",
    sourceSentence: "You had better take an umbrella; the weather forecast predicts heavy rain.",
    targetSentence: "You had better take an umbrella; the weather forecast predicts heavy rain.",
    options: [
      { id: "o1", text: "had better", isCorrect: true },
      { id: "o2", text: "have better", isCorrect: false },
      { id: "o3", text: "ought", isCorrect: false },
      { id: "o4", text: "would better to", isCorrect: false }
    ],
    correctAnswer: "had better",
    explanation: "'Had better + base verb' gives strong advice regarding imminent situations."
  },
  {
    id: "a2_u11_l159_r7",
    type: "word_ordering",
    prompt: "Assemble the wellness advice:",
    targetSentence: "You ought to drink plenty of water during workouts.",
    options: [
      { id: "w1", text: "You" },
      { id: "w2", text: "ought" },
      { id: "w3", text: "to" },
      { id: "w4", text: "drink" },
      { id: "w5", text: "plenty" },
      { id: "w6", text: "of" },
      { id: "w7", text: "water" },
      { id: "w8", text: "during" },
      { id: "w9", text: "workouts." }
    ],
    correctAnswer: "You ought to drink plenty of water during workouts."
  },
  {
    id: "a2_u11_l159_r8",
    type: "dialogue_completion",
    prompt: "Complete the health consultation exchange:",
    sourceSentence: "I've been feeling exhausted and unable to concentrate at work.",
    targetSentence: "You had better get more consistent sleep and make sure you take regular breaks during the day.",
    options: [
      { id: "o1", text: "You had better get more consistent sleep and make sure you take regular breaks during the day.", isCorrect: true },
      { id: "o2", text: "You should work sixteen hours every night without sleeping.", isCorrect: false },
      { id: "o3", text: "Work is something people do for money.", isCorrect: false }
    ],
    correctAnswer: "You had better get more consistent sleep and make sure you take regular breaks during the day.",
    explanation: "Appropriate empathetic and practical health advice."
  },
  {
    id: "a2_u11_l159_r9",
    type: "translation",
    prompt: "Translate into English: 'मैं पहले हर सप्ताहांत दौड़ने जाता था, लेकिन अब मैं तैरना पसंद करता हूँ।' Choose the best translation:",
    sourceSentence: "मैं पहले हर सप्ताहांत दौड़ने जाता था, लेकिन अब मैं तैरना पसंद करता हूँ।",
    targetSentence: "I used to go running every weekend, but now I prefer swimming.",
    options: [
      { id: "o1", text: "I used to go running every weekend, but now I prefer swimming.", isCorrect: true },
      { id: "o2", text: "I use to go run every weekend but now swim.", isCorrect: false },
      { id: "o3", text: "I am used to run every weekend but swimming now.", isCorrect: false }
    ],
    correctAnswer: "I used to go running every weekend, but now I prefer swimming.",
    explanation: "'used to + base verb' describes past habits that are no longer true in the present."
  },
  {
    id: "a2_u11_l159_r10",
    type: "multiple_choice",
    prompt: "Which sentence correctly contrasts 'used to' with present habits?",
    targetSentence: "He used to eat fast food frequently, but now he cooks nutritious meals at home.",
    options: [
      { id: "o1", text: "He used to eat fast food frequently, but now he cooks nutritious meals at home.", isCorrect: true },
      { id: "o2", text: "He was used to eat fast food frequently, but now he cooking meals.", isCorrect: false },
      { id: "o3", text: "He used eat fast food frequently, but now he cook meals at home.", isCorrect: false }
    ],
    correctAnswer: "He used to eat fast food frequently, but now he cooks nutritious meals at home.",
    explanation: "'Used to eat' correctly expresses past discontinued habit."
  }
];

const l159_assess: Exercise[] = [
  {
    id: "a2_u11_l159_a6",
    type: "listening",
    prompt: "Listen to the nutritionist and identify what they recommend replacing sugary snacks with:",
    audioText: "Instead of reaching for cookies or candy during afternoon slumps, you ought to snack on fresh fruits, raw almonds, or unsweetened yogurt to maintain steady energy levels.",
    targetSentence: "Fresh fruits, raw almonds, or unsweetened yogurt.",
    options: [
      { id: "o1", text: "Fresh fruits, raw almonds, or unsweetened yogurt.", isCorrect: true },
      { id: "o2", text: "Chocolate bars and carbonated soda.", isCorrect: false },
      { id: "o3", text: "Deep-fried potato chips.", isCorrect: false }
    ],
    correctAnswer: "Fresh fruits, raw almonds, or unsweetened yogurt.",
    explanation: "The nutritionist explicitly recommends fresh fruits, almonds, or unsweetened yogurt."
  },
  {
    id: "a2_u11_l159_a7",
    type: "error_correction",
    prompt: "Fix the error in this wellness advice: 'You ought wear a helmet whenever you ride your bicycle.'",
    sourceSentence: "You ought wear a helmet whenever you ride your bicycle.",
    targetSentence: "You ought to wear a helmet whenever you ride your bicycle.",
    options: [
      { id: "o1", text: "You ought to wear a helmet whenever you ride your bicycle.", isCorrect: true },
      { id: "o2", text: "You ought wearing a helmet whenever you ride your bicycle.", isCorrect: false },
      { id: "o3", text: "You ought for wear a helmet whenever you ride your bicycle.", isCorrect: false }
    ],
    correctAnswer: "You ought to wear a helmet whenever you ride your bicycle.",
    explanation: "'Ought' must always be followed by 'to' ('ought to wear')."
  },
  {
    id: "a2_u11_l159_a8",
    type: "mediation",
    prompt: "Relay this wellness tip in English: 'यदि आपकी पीठ में दर्द है, तो आपको भारी सामान उठाने से बचना चाहिए।' Choose the best translation:",
    sourceSentence: "यदि आपकी पीठ में दर्द है, तो आपको भारी सामान उठाने से बचना चाहिए।",
    targetSentence: "If you have back pain, you had better avoid lifting heavy objects.",
    options: [
      { id: "o1", text: "If you have back pain, you had better avoid lifting heavy objects.", isCorrect: true },
      { id: "o2", text: "If you have back pain, you must lift heaviest boxes.", isCorrect: false },
      { id: "o3", text: "Back pain means you should never sit down.", isCorrect: false }
    ],
    correctAnswer: "If you have back pain, you had better avoid lifting heavy objects.",
    explanation: "'If you have back pain, you had better avoid lifting heavy objects' provides clear advisory guidance."
  },
  {
    id: "a2_u11_l159_a9",
    type: "speaking",
    prompt: "Speak clearly: Advise a coworker who has been looking stressed about taking care of their mental wellbeing.",
    sourceSentence: "You ought to take a few days off to recharge; your health and wellbeing should always be your top priority.",
    targetSentence: "You ought to take a few days off to recharge; your health and wellbeing should always be your top priority.",
    audioText: "You ought to take a few days off to recharge; your health and wellbeing should always be your top priority.",
    explanation: "Deliver compassionate, clear health advice."
  },
  {
    id: "a2_u11_l159_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you maintain physical and mental wellness during busy weeks:",
    targetSentence: "Even during hectic work weeks, I make sure to take a thirty-minute walk in the park during lunchtime. Fresh air and light exercise help clear my mind and reduce daily stress.",
    audioText: "Even during hectic work weeks, I make sure to take a thirty-minute walk in the park during lunchtime. Fresh air and light exercise help clear my mind and reduce daily stress."
  }
];

// =========================================================================
// LESSON 160: Unit 11 Mid-Unit Consolidation & Error Remediation
// =========================================================================
const l160_practice: Exercise[] = [
  {
    id: "a2_u11_l160_p16",
    type: "reading",
    prompt: "Read the comprehensive review scenario and answer the question:\n\"Workplace Case Study:\nTo prepare for next month's international product launch, the team divided duties: Marcus coordinated customer support in order to train the frontline staff, whereas Elena managed the budget due to her extensive financial background. When a scheduling conflict arose, they held a clarification meeting to ensure everyone understood the updated deadlines. Thanks to proactive collaboration, the launch preparations are running far smoother than last year's.\"\nWhat factors contributed to the smoother launch preparation?",
    sourceSentence: "What factors contributed to the smoother launch preparation?",
    targetSentence: "Clear division of roles, training, financial management, and proactive clarification.",
    options: [
      { id: "o1", text: "Clear division of roles, training, financial management, and proactive clarification.", isCorrect: true },
      { id: "o2", text: "Canceling all international product launches.", isCorrect: false },
      { id: "o3", text: "Hiring fifty temporary contractors without training.", isCorrect: false },
      { id: "o4", text: "Ignoring all scheduling conflicts completely.", isCorrect: false }
    ],
    correctAnswer: "Clear division of roles, training, financial management, and proactive clarification.",
    explanation: "The case study illustrates successful role division, purpose-driven actions, and active clarification."
  },
  {
    id: "a2_u11_l160_p17",
    type: "speaking",
    prompt: "Speak clearly: Summarize how you use purpose infinitives, feedback phrasing, and polite clarification in your daily work.",
    sourceSentence: "I communicate clearly with my colleagues in order to avoid misunderstandings, and I use constructive feedback to support continuous improvement.",
    targetSentence: "I communicate clearly with my colleagues in order to avoid misunderstandings, and I use constructive feedback to support continuous improvement.",
    audioText: "I communicate clearly with my colleagues in order to avoid misunderstandings, and I use constructive feedback to support continuous improvement.",
    explanation: "Consolidated mastery speaking prompt covering Unit 11 themes."
  },
  {
    id: "a2_u11_l160_p18",
    type: "match_pairs",
    prompt: "Match the Unit 11 target structures with their communicative applications:",
    options: [
      { id: "m1", text: "in order to + verb" },
      { id: "m1_m", text: "expressing objective, goal, or purpose" },
      { id: "m2", text: "due to / because of" },
      { id: "m2_m", text: "explaining reasons using noun phrases" },
      { id: "m3", text: "Could you clarify...?" },
      { id: "m3_m", text: "polite indirect question checking meaning" },
      { id: "m4", text: "far better / much easier" },
      { id: "m4_m", text: "intensifying comparative evaluations" }
    ]
  },
  {
    id: "a2_u11_l160_p19",
    type: "mediation",
    prompt: "Translate this comprehensive summary into English: 'गलतफहमी से बचने के लिए, हमें यह स्पष्ट करना चाहिए कि कौन सा सदस्य किस कार्य के लिए जिम्मेदार है।' Choose the best translation:",
    sourceSentence: "गलतफहमी से बचने के लिए, हमें यह स्पष्ट करना चाहिए कि कौन सा सदस्य किस कार्य के लिए जिम्मेदार है।",
    targetSentence: "In order to avoid misunderstandings, we should clarify which member is responsible for which task.",
    options: [
      { id: "o1", text: "In order to avoid misunderstandings, we should clarify which member is responsible for which task.", isCorrect: true },
      { id: "o2", text: "Misunderstanding happened because no member worked yesterday.", isCorrect: false },
      { id: "o3", text: "We do not know who is working on the project.", isCorrect: false }
    ],
    correctAnswer: "In order to avoid misunderstandings, we should clarify which member is responsible for which task.",
    explanation: "'In order to avoid misunderstandings, we should clarify...' integrates purpose infinitive and indirect question vocabulary."
  },
  {
    id: "a2_u11_l160_p20",
    type: "error_correction",
    prompt: "Identify and fix the composite error: 'He stayed home for rest due to he was having a fever.'",
    sourceSentence: "He stayed home for rest due to he was having a fever.",
    targetSentence: "He stayed home to rest because he had a fever.",
    options: [
      { id: "o1", text: "He stayed home to rest because he had a fever.", isCorrect: true },
      { id: "o2", text: "He stayed home for resting due to he had fever.", isCorrect: false },
      { id: "o3", text: "He staying home in order resting because of fever was.", isCorrect: false }
    ],
    correctAnswer: "He stayed home to rest because he had a fever.",
    explanation: "Correct purpose infinitive ('to rest') and correct causal conjunction before clause ('because he had a fever')."
  },
  {
    id: "a2_u11_l160_p21",
    type: "listening",
    prompt: "Listen to the meeting summary and identify the consensus reached by the team:",
    audioText: "After reviewing the survey results, the committee agreed that the proposed hybrid schedule is much more flexible and far less stressful for team members.",
    targetSentence: "The hybrid schedule is much more flexible and far less stressful.",
    options: [
      { id: "o1", text: "The hybrid schedule is much more flexible and far less stressful.", isCorrect: true },
      { id: "o2", text: "The committee rejected all hybrid work proposals.", isCorrect: false },
      { id: "o3", text: "Team members demanded mandatory overtime on weekends.", isCorrect: false }
    ],
    correctAnswer: "The hybrid schedule is much more flexible and far less stressful.",
    explanation: "The audio explicitly notes the agreement that the hybrid schedule is 'much more flexible and far less stressful'."
  },
  {
    id: "a2_u11_l160_p22",
    type: "personal_production",
    prompt: "Write 2 sentences reflecting on how clear communication and budgeting help you achieve your personal goals:",
    targetSentence: "By managing my finances carefully, I am able to save enough money to pursue professional training courses. Clear communication also helps me collaborate effectively with colleagues and avoid stressful misunderstandings.",
    audioText: "By managing my finances carefully, I am able to save enough money to pursue professional training courses. Clear communication also helps me collaborate effectively with colleagues and avoid stressful misunderstandings."
  }
];

const l160_review: Exercise[] = [
  {
    id: "a2_u11_l160_r6",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct purpose connector: 'She attended the networking seminar ___ connect with industry mentors.'",
    sourceSentence: "She attended the networking seminar in order to connect with industry mentors.",
    targetSentence: "She attended the networking seminar in order to connect with industry mentors.",
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
    id: "a2_u11_l160_r7",
    type: "word_ordering",
    prompt: "Reconstruct the polite indirect question:",
    targetSentence: "Could you clarify what the total estimated cost is?",
    options: [
      { id: "w1", text: "Could" },
      { id: "w2", text: "you" },
      { id: "w3", text: "clarify" },
      { id: "w4", text: "what" },
      { id: "w5", text: "the" },
      { id: "w6", text: "total" },
      { id: "w7", text: "estimated" },
      { id: "w8", text: "cost" },
      { id: "w9", text: "is?" }
    ],
    correctAnswer: "Could you clarify what the total estimated cost is?"
  },
  {
    id: "a2_u11_l160_r8",
    type: "dialogue_completion",
    prompt: "Complete the collaborative dialogue:",
    sourceSentence: "We noticed several discrepancies in the draft proposal.",
    targetSentence: "I see your point; why don't we schedule a brief call to reconcile the numbers?",
    options: [
      { id: "o1", text: "I see your point; why don't we schedule a brief call to reconcile the numbers?", isCorrect: true },
      { id: "o2", text: "Numbers are mathematical symbols used for counting.", isCorrect: false },
      { id: "o3", text: "We will delete the entire proposal immediately.", isCorrect: false }
    ],
    correctAnswer: "I see your point; why don't we schedule a brief call to reconcile the numbers?",
    explanation: "Constructive and collaborative problem-solving response."
  },
  {
    id: "a2_u11_l160_r9",
    type: "translation",
    prompt: "Translate into English: 'खराब मौसम के कारण उड़ानों में काफी देरी हुई।'",
    sourceSentence: "खराब मौसम के कारण उड़ानों में काफी देरी हुई।",
    targetSentence: "Due to bad weather, flights were significantly delayed.",
    options: [
      { id: "o1", text: "Due to bad weather, flights were significantly delayed.", isCorrect: true },
      { id: "o2", text: "Because bad weather flights was on time.", isCorrect: false },
      { id: "o3", text: "Flights delayed because of weather was bad.", isCorrect: false }
    ],
    correctAnswer: "Due to bad weather, flights were significantly delayed.",
    explanation: "'Due to bad weather, flights were significantly delayed' is grammatically precise."
  },
  {
    id: "a2_u11_l160_r10",
    type: "multiple_choice",
    prompt: "Which sentence demonstrates proper comparative intensifier and structure?",
    targetSentence: "Working in a team is far more productive than working completely in isolation.",
    options: [
      { id: "o1", text: "Working in a team is far more productive than working completely in isolation.", isCorrect: true },
      { id: "o2", text: "Working in a team is very more productive than working in isolation.", isCorrect: false },
      { id: "o3", text: "Working in a team is more far productive than working in isolation.", isCorrect: false }
    ],
    correctAnswer: "Working in a team is far more productive than working completely in isolation.",
    explanation: "'Far more productive' is the correct intensified comparative."
  }
];

const l160_assess: Exercise[] = [
  {
    id: "a2_u11_l160_a6",
    type: "listening",
    prompt: "Listen to the debrief and answer: What strategy helped the team complete the project under budget?",
    audioText: "By cutting down on unnecessary software licenses and meeting weekly in order to track expenditures, we finished the project well under budget.",
    targetSentence: "Cutting software licenses and tracking expenditures in weekly meetings.",
    options: [
      { id: "o1", text: "Cutting software licenses and tracking expenditures in weekly meetings.", isCorrect: true },
      { id: "o2", text: "Hiring expensive outside agencies.", isCorrect: false },
      { id: "o3", text: "Stopping all communication between departments.", isCorrect: false }
    ],
    correctAnswer: "Cutting software licenses and tracking expenditures in weekly meetings.",
    explanation: "The audio highlights eliminating unused licenses and weekly expenditure tracking."
  },
  {
    id: "a2_u11_l160_a7",
    type: "error_correction",
    prompt: "Correct the sentence: 'Do you happen to know where does the train station be?'",
    sourceSentence: "Do you happen to know where does the train station be?",
    targetSentence: "Do you happen to know where the train station is?",
    options: [
      { id: "o1", text: "Do you happen to know where the train station is?", isCorrect: true },
      { id: "o2", text: "Do you happen to know where is the train station be?", isCorrect: false },
      { id: "o3", text: "Do you happen to know where does the train station is?", isCorrect: false }
    ],
    correctAnswer: "Do you happen to know where the train station is?",
    explanation: "Indirect question format: 'where' + subject ('the train station') + verb ('is')."
  },
  {
    id: "a2_u11_l160_a8",
    type: "mediation",
    prompt: "Summarize this teamwork principle in English: 'यदि हम खुलकर संवाद करते हैं, तो हम समस्याओं को बहुत तेजी से हल कर सकते हैं।' Choose the best translation:",
    sourceSentence: "यदि हम खुलकर संवाद करते हैं, तो हम समस्याओं को बहुत तेजी से हल कर सकते हैं।",
    targetSentence: "If we communicate openly, we can solve problems much faster.",
    options: [
      { id: "o1", text: "If we communicate openly, we can solve problems much faster.", isCorrect: true },
      { id: "o2", text: "If we will communicate openly we solve problems slow.", isCorrect: false },
      { id: "o3", text: "Communicating openly makes problems more harder.", isCorrect: false }
    ],
    correctAnswer: "If we communicate openly, we can solve problems much faster.",
    explanation: "'If we communicate openly, we can solve problems much faster' accurately translates the conditional and comparative intensifier."
  },
  {
    id: "a2_u11_l160_a9",
    type: "speaking",
    prompt: "Speak clearly: Deliver a 2-sentence summary of how you handle conflicting priorities at work or in your studies.",
    sourceSentence: "When facing conflicting deadlines, I prioritize urgent tasks in order to prevent delays. I also consult with my supervisor to ensure our team goals remain aligned.",
    targetSentence: "When facing conflicting deadlines, I prioritize urgent tasks in order to prevent delays. I also consult with my supervisor to ensure our team goals remain aligned.",
    audioText: "When facing conflicting deadlines, I prioritize urgent tasks in order to prevent delays. I also consult with my supervisor to ensure our team goals remain aligned.",
    explanation: "Fluently deliver cohesive, professional speech."
  },
  {
    id: "a2_u11_l160_a10",
    type: "personal_production",
    prompt: "Write 2 sentences outlining the key communication and planning strategies you have mastered in Unit 11 so far:",
    targetSentence: "In this unit, I learned how to use purpose infinitives and comparative intensifiers to articulate recommendations clearly. I also gained confidence in using indirect questions to clarify misunderstandings diplomatically.",
    audioText: "In this unit, I learned how to use purpose infinitives and comparative intensifiers to articulate recommendations clearly. I also gained confidence in using indirect questions to clarify misunderstandings diplomatically."
  }
];

// Execute enrichment for Lessons 156-160
enrichUnit11LessonData('lesson_a2_11_156', LESSON_A2_11_156_DATA, l156_practice, l156_review, l156_assess);
enrichUnit11LessonData('lesson_a2_11_157', LESSON_A2_11_157_DATA, l157_practice, l157_review, l157_assess);
enrichUnit11LessonData('lesson_a2_11_158', LESSON_A2_11_158_DATA, l158_practice, l158_review, l158_assess);
enrichUnit11LessonData('lesson_a2_11_159', LESSON_A2_11_159_DATA, l159_practice, l159_review, l159_assess);
enrichUnit11LessonData('lesson_a2_11_160', LESSON_A2_11_160_DATA, l160_practice, l160_review, l160_assess);
