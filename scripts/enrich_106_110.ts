import { Exercise } from '../src/types';
import { LESSON_A2_8_106_DATA } from '../src/data/lessons/lesson_a2_8_106';
import { LESSON_A2_8_107_DATA } from '../src/data/lessons/lesson_a2_8_107';
import { LESSON_A2_8_108_DATA } from '../src/data/lessons/lesson_a2_8_108';
import { LESSON_A2_8_109_DATA } from '../src/data/lessons/lesson_a2_8_109';
import { LESSON_A2_8_110_DATA } from '../src/data/lessons/lesson_a2_8_110';
import { enrichUnit8LessonData } from './enrich_unit8_helper';

// =========================================================================
// LESSON 106: Describing People: Appearance, Personality & Character Traits
// =========================================================================
const l106_practice: Exercise[] = [
  {
    id: "a2_u08_l106_p11",
    type: "reading",
    prompt: "Read the workplace description and answer the question:\n\"Our new project manager, Elena, is in her early thirties. She is tall, has curly brown hair, and wears modern glasses. More importantly, she is exceptionally reliable and patient when mentoring junior engineers.\"\nWhich character quality makes Elena effective with junior staff?",
    sourceSentence: "Which character quality makes Elena effective with junior staff?",
    targetSentence: "She is remarkably patient and reliable.",
    options: [
      { id: "o1", text: "She is remarkably patient and reliable.", isCorrect: true },
      { id: "o2", text: "She has curly brown hair.", isCorrect: false },
      { id: "o3", text: "She is strict and unapproachable.", isCorrect: false },
      { id: "o4", text: "She only works with senior staff.", isCorrect: false }
    ],
    correctAnswer: "She is remarkably patient and reliable.",
    explanation: "The text highlights that 'she is exceptionally reliable and patient when mentoring junior engineers.'"
  },
  {
    id: "a2_u08_l106_p12",
    type: "fill_blank",
    prompt: "Choose the correct preposition to contrast similarity:",
    sourceSentence: "Liam looks ____ his grandfather when he smiles warmly.",
    targetSentence: "Liam looks like his grandfather when he smiles warmly.",
    options: [
      { id: "o1", text: "like", isCorrect: true },
      { id: "o2", text: "as", isCorrect: false },
      { id: "o3", text: "to", isCorrect: false },
      { id: "o4", text: "of", isCorrect: false }
    ],
    correctAnswer: "like",
    explanation: "We use 'look like + noun/pronoun' to describe visual resemblance."
  },
  {
    id: "a2_u08_l106_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly applies adjective order?",
    sourceSentence: "She bought a lovely small vintage wooden desk.",
    targetSentence: "She bought a lovely small vintage wooden desk.",
    options: [
      { id: "o1", text: "She bought a lovely small vintage wooden desk.", isCorrect: true },
      { id: "o2", text: "She bought a wooden vintage small lovely desk.", isCorrect: false },
      { id: "o3", text: "She bought a vintage wooden small lovely desk.", isCorrect: false },
      { id: "o4", text: "She bought a small wooden lovely vintage desk.", isCorrect: false }
    ],
    correctAnswer: "She bought a lovely small vintage wooden desk.",
    explanation: "Standard adjective order: Opinion (lovely) -> Size (small) -> Age (vintage) -> Material (wooden)."
  },
  {
    id: "a2_u08_l106_p14",
    type: "speaking",
    prompt: "Read this professional personality description aloud clearly:",
    targetSentence: "My supervisor is very approachable, ambitious, and easygoing.",
    audioText: "My supervisor is very approachable, ambitious, and easygoing."
  },
  {
    id: "a2_u08_l106_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "He is a tall well-built man with a neat beard.",
    targetSentence: "He is a tall well-built man with a neat beard."
  },
  {
    id: "a2_u08_l106_p16",
    type: "error_correction",
    prompt: "Identify and correct the mistake with 'look':",
    sourceSentence: "You look like tired after that long flight.",
    targetSentence: "You look tired after that long flight.",
    options: [
      { id: "o1", text: "You look tired after that long flight.", isCorrect: true },
      { id: "o2", text: "You are looking like tired after that flight.", isCorrect: false },
      { id: "o3", text: "You look as tired after that flight.", isCorrect: false },
      { id: "o4", text: "You looks tired after that flight.", isCorrect: false }
    ],
    correctAnswer: "You look tired after that long flight.",
    explanation: "'Look' is followed directly by an adjective (tired) without 'like'."
  },
  {
    id: "a2_u08_l106_p17",
    type: "mediation",
    prompt: "Mediation: A friend asks you to describe your team leader before an interview. Explain their personality constructively:",
    sourceSentence: "What kind of person is the department head?",
    targetSentence: "She is very supportive and honest, but she expects everyone to be punctual and reliable.",
    options: [
      { id: "o1", text: "She is very supportive and honest, but she expects everyone to be punctual and reliable.", isCorrect: true },
      { id: "o2", text: "She wears black shoes every Monday morning.", isCorrect: false },
      { id: "o3", text: "She did not look like yesterday at all.", isCorrect: false },
      { id: "o4", text: "She has three cars and a bicycle.", isCorrect: false }
    ],
    correctAnswer: "She is very supportive and honest, but she expects everyone to be punctual and reliable.",
    explanation: "This response conveys relevant, nuanced character traits suitable for workplace preparation."
  },
  {
    id: "a2_u08_l106_p18",
    type: "match_pairs",
    prompt: "Match the personality traits with their definitions:",
    options: [
      { id: "m1", text: "outgoing" },
      { id: "m1_m", text: "friendly and socially confident" },
      { id: "m2", text: "sensible" },
      { id: "m2_m", text: "showing practical wisdom and good judgment" },
      { id: "m3", text: "generous" },
      { id: "m3_m", text: "willing to share time, money, and help" },
      { id: "m4", text: "stubborn" },
      { id: "m4_m", text: "refusing to change one's mind or compromise" }
    ]
  },
  {
    id: "a2_u08_l106_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a natural question about someone's appearance:",
    sourceSentence: "What does your elder brother look like?",
    targetSentence: "What does your elder brother look like",
    wordBank: ["What", "does", "your", "elder", "brother", "look", "like", "how", "is"]
  },
  {
    id: "a2_u08_l106_p20",
    type: "translation",
    prompt: "Translate into English: 'वह बहुत रचनात्मक और आत्मविश्वासी है।'",
    sourceSentence: "वह बहुत रचनात्मक और आत्मविश्वासी है।",
    targetSentence: "She is very creative and confident.",
    wordBank: ["She", "is", "very", "creative", "and", "confident", "stubborn", "looks"]
  },
  {
    id: "a2_u08_l106_p21",
    type: "listening",
    prompt: "Listen to the description and choose the correct answer:",
    audioText: "Marcus is in his late twenties, has straight dark hair, and always wears casual jackets.",
    targetSentence: "Marcus is in his late twenties with straight dark hair.",
    options: [
      { id: "o1", text: "Marcus is in his late twenties with straight dark hair.", isCorrect: true },
      { id: "o2", text: "Marcus is over sixty with blond curly hair.", isCorrect: false },
      { id: "o3", text: "Marcus only wears formal business suits.", isCorrect: false }
    ],
    correctAnswer: "Marcus is in his late twenties with straight dark hair.",
    explanation: "Audio explicitly states: 'late twenties, has straight dark hair, and always wears casual jackets'."
  },
  {
    id: "a2_u08_l106_p22",
    type: "personal_production",
    prompt: "Describe your best friend's appearance and personality in 2-3 sentences:",
    targetSentence: "My best friend is tall with wavy hair. She is extremely cheerful and generous with her friends.",
    audioText: "My best friend is tall with wavy hair. She is extremely cheerful and generous with her friends."
  }
];

const l106_review: Exercise[] = [
  {
    id: "a2_u08_l106_r9",
    type: "dialogue_completion",
    prompt: "Complete the dialogue naturally:",
    sourceSentence: "A: What is your new flatmate like?\nB: _____",
    targetSentence: "He is very tidy, easygoing, and great to chat with.",
    options: [
      { id: "o1", text: "He is very tidy, easygoing, and great to chat with.", isCorrect: true },
      { id: "o2", text: "He looks like tall and slim.", isCorrect: false },
      { id: "o3", text: "He likes swimming on Fridays.", isCorrect: false },
      { id: "o4", text: "He was born in London tomorrow.", isCorrect: false }
    ],
    correctAnswer: "He is very tidy, easygoing, and great to chat with.",
    explanation: "'What is [person] like?' asks for personality and character traits."
  },
  {
    id: "a2_u08_l106_r10",
    type: "reading",
    prompt: "Read the note and identify who is being described:\n\"We need someone reliable who can stay calm under pressure, listen patiently to customer concerns, and offer creative solutions.\"\nWhat key qualification is needed?",
    sourceSentence: "What key qualification is needed?",
    targetSentence: "A patient, reliable problem-solver.",
    options: [
      { id: "o1", text: "A patient, reliable problem-solver.", isCorrect: true },
      { id: "o2", text: "Someone who speaks quickly and aggressively.", isCorrect: false },
      { id: "o3", text: "A person who avoids customer contact.", isCorrect: false }
    ],
    correctAnswer: "A patient, reliable problem-solver.",
    explanation: "The profile emphasizes reliability, patience, and creative problem solving."
  }
];

const l106_assess: Exercise[] = [
  {
    id: "a2_u08_l106_a9",
    type: "mediation",
    prompt: "Mediation: Explain to an HR assistant why a candidate is suitable for a team role:",
    sourceSentence: "Why should we hire Priya for the community coordinator post?",
    targetSentence: "Priya is outgoing, highly empathetic, and communicates clearly with diverse groups of people.",
    options: [
      { id: "o1", text: "Priya is outgoing, highly empathetic, and communicates clearly with diverse groups of people.", isCorrect: true },
      { id: "o2", text: "Priya looks like a tall student from university.", isCorrect: false },
      { id: "o3", text: "Priya did not buy new shoes for the interview.", isCorrect: false }
    ],
    correctAnswer: "Priya is outgoing, highly empathetic, and communicates clearly with diverse groups of people.",
    explanation: "Highlights relevant social and communication competencies."
  },
  {
    id: "a2_u08_l106_a10",
    type: "speaking",
    prompt: "Speak your final personal character summary into the microphone:",
    targetSentence: "I am a dependable team player with strong organizational skills and an open mind.",
    audioText: "I am a dependable team player with strong organizational skills and an open mind."
  }
];

// =========================================================================
// LESSON 107: Feelings, Emotions & Physical Sensations
// =========================================================================
const l107_practice: Exercise[] = [
  {
    id: "a2_u08_l107_p11",
    type: "reading",
    prompt: "Read the diary entry and answer the question:\n\"After three continuous hours of intense presentations, the entire marketing team felt completely exhausted. However, when the director announced our proposal was approved, everyone felt immensely relieved and excited.\"\nHow did the team feel after hearing the approval announcement?",
    sourceSentence: "How did the team feel after hearing the approval announcement?",
    targetSentence: "They felt immensely relieved and excited.",
    options: [
      { id: "o1", text: "They felt immensely relieved and excited.", isCorrect: true },
      { id: "o2", text: "They felt frustrated and angry.", isCorrect: false },
      { id: "o3", text: "They felt anxious and nervous.", isCorrect: false },
      { id: "o4", text: "They felt bored and sleepy.", isCorrect: false }
    ],
    correctAnswer: "They felt immensely relieved and excited.",
    explanation: "The passage states: 'everyone felt immensely relieved and excited.'"
  },
  {
    id: "a2_u08_l107_p12",
    type: "fill_blank",
    prompt: "Choose the correct -ed or -ing participle adjective:",
    sourceSentence: "The documentary about deep ocean life was absolutely ____.",
    targetSentence: "The documentary about deep ocean life was absolutely fascinating.",
    options: [
      { id: "o1", text: "fascinating", isCorrect: true },
      { id: "o2", text: "fascinated", isCorrect: false },
      { id: "o3", text: "fascinate", isCorrect: false },
      { id: "o4", text: "fascinates", isCorrect: false }
    ],
    correctAnswer: "fascinating",
    explanation: "-ing adjectives describe the cause of an emotion or sensation (the documentary)."
  },
  {
    id: "a2_u08_l107_p13",
    type: "multiple_choice",
    prompt: "Select the sentence that correctly contrasts personal feeling with cause:",
    sourceSentence: "I was bored because the lecture was boring.",
    targetSentence: "I was bored because the lecture was boring.",
    options: [
      { id: "o1", text: "I was bored because the lecture was boring.", isCorrect: true },
      { id: "o2", text: "I was boring because the lecture was bored.", isCorrect: false },
      { id: "o3", text: "I was bore because the lecture boring.", isCorrect: false },
      { id: "o4", text: "I am boring with the bored lecture.", isCorrect: false }
    ],
    correctAnswer: "I was bored because the lecture was boring.",
    explanation: "-ed describes how a person feels (I was bored); -ing describes the thing causing it (boring lecture)."
  },
  {
    id: "a2_u08_l107_p14",
    type: "speaking",
    prompt: "Speak this emotional expression clearly:",
    targetSentence: "I was delighted to receive your encouraging message yesterday.",
    audioText: "I was delighted to receive your encouraging message yesterday."
  },
  {
    id: "a2_u08_l107_p15",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "She felt overwhelmed by the sudden change of plans.",
    targetSentence: "She felt overwhelmed by the sudden change of plans."
  },
  {
    id: "a2_u08_l107_p16",
    type: "error_correction",
    prompt: "Identify and correct the adjective error:",
    sourceSentence: "We were very surprising when we saw the final results.",
    targetSentence: "We were very surprised when we saw the final results.",
    options: [
      { id: "o1", text: "We were very surprised when we saw the final results.", isCorrect: true },
      { id: "o2", text: "We were very surprise when we saw the final results.", isCorrect: false },
      { id: "o3", text: "We were surprising very when seeing results.", isCorrect: false },
      { id: "o4", text: "We was surprised when seeing results.", isCorrect: false }
    ],
    correctAnswer: "We were very surprised when we saw the final results.",
    explanation: "People experience feelings with -ed ('surprised')."
  },
  {
    id: "a2_u08_l107_p17",
    type: "mediation",
    prompt: "Mediation: A classmate looks anxious before a test. Reassure them empathetically in English:",
    sourceSentence: "I'm so nervous that I can't remember anything!",
    targetSentence: "Take a deep breath; you prepared thoroughly and you will do great.",
    options: [
      { id: "o1", text: "Take a deep breath; you prepared thoroughly and you will do great.", isCorrect: true },
      { id: "o2", text: "You must buy three pencils right now.", isCorrect: false },
      { id: "o3", text: "Test is finished yesterday morning.", isCorrect: false },
      { id: "o4", text: "I don't like testing food.", isCorrect: false }
    ],
    correctAnswer: "Take a deep breath; you prepared thoroughly and you will do great.",
    explanation: "Provides empathetic, supportive reassurance appropriate for emotional mediation."
  },
  {
    id: "a2_u08_l107_p18",
    type: "match_pairs",
    prompt: "Match the emotion idioms with their meanings:",
    options: [
      { id: "m1", text: "under the weather" },
      { id: "m1_m", text: "feeling slightly unwell or sick" },
      { id: "m2", text: "on edge" },
      { id: "m2_m", text: "tense, nervous, or easily irritated" },
      { id: "m3", text: "over the moon" },
      { id: "m3_m", text: "extremely happy and thrilled" },
      { id: "m4", text: "at ease" },
      { id: "m4_m", text: "relaxed and comfortable" }
    ]
  },
  {
    id: "a2_u08_l107_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing physical sensation:",
    sourceSentence: "He felt dizzy after standing up too quickly.",
    targetSentence: "He felt dizzy after standing up too quickly",
    wordBank: ["He", "felt", "dizzy", "after", "standing", "up", "too", "quickly", "is", "feel"]
  },
  {
    id: "a2_u08_l107_p20",
    type: "translation",
    prompt: "Translate into English: 'हम उस खबर को सुनकर बेहद खुश और आभारी थे।'",
    sourceSentence: "हम उस खबर को सुनकर बेहद खुश और आभारी थे।",
    targetSentence: "We were thrilled and grateful to hear that news.",
    wordBank: ["We", "were", "thrilled", "and", "grateful", "to", "hear", "that", "news", "nervous"]
  },
  {
    id: "a2_u08_l107_p21",
    type: "listening",
    prompt: "Listen to the speaker and identify their feeling:",
    audioText: "I haven't slept all night because of the noise, so I am completely exhausted today.",
    targetSentence: "The speaker is completely exhausted due to lack of sleep.",
    options: [
      { id: "o1", text: "The speaker is completely exhausted due to lack of sleep.", isCorrect: true },
      { id: "o2", text: "The speaker is feeling refreshed and energetic.", isCorrect: false },
      { id: "o3", text: "The speaker is excited about a party.", isCorrect: false }
    ],
    correctAnswer: "The speaker is completely exhausted due to lack of sleep.",
    explanation: "Audio explicitly mentions: 'haven't slept all night... completely exhausted'."
  },
  {
    id: "a2_u08_l107_p22",
    type: "personal_production",
    prompt: "Describe a time you felt nervous and how you overcame it in 2-3 sentences:",
    targetSentence: "Before giving my first public speech, I felt really anxious. However, taking slow breaths helped me stay calm.",
    audioText: "Before giving my first public speech, I felt really anxious. However, taking slow breaths helped me stay calm."
  }
];

const l107_review: Exercise[] = [
  {
    id: "a2_u08_l107_r9",
    type: "dialogue_completion",
    prompt: "Complete the exchange with an appropriate emotion response:",
    sourceSentence: "A: How did you feel when you heard you won the competition?\nB: _____",
    targetSentence: "I was in total shock at first, but then I felt over the moon!",
    options: [
      { id: "o1", text: "I was in total shock at first, but then I felt over the moon!", isCorrect: true },
      { id: "o2", text: "I am feeling bored with the television.", isCorrect: false },
      { id: "o3", text: "It was a very exhausted competition.", isCorrect: false },
      { id: "o4", text: "I ate delicious lunch yesterday.", isCorrect: false }
    ],
    correctAnswer: "I was in total shock at first, but then I felt over the moon!",
    explanation: "'Over the moon' expresses extreme joy and excitement."
  },
  {
    id: "a2_u08_l107_r10",
    type: "reading",
    prompt: "Read the text and decide if the statement is True or False:\n\"Managing stress requires recognizing early symptoms such as muscle tension, irritability, and sleeplessness before they lead to severe burnout.\"\nTrue or False: Physical tension and irritability are early warning signs of stress.",
    sourceSentence: "True or False: Physical tension and irritability are early warning signs of stress.",
    targetSentence: "True",
    options: [
      { id: "o1", text: "True", isCorrect: true },
      { id: "o2", text: "False", isCorrect: false }
    ],
    correctAnswer: "True",
    explanation: "The text specifies muscle tension and irritability as early symptoms."
  }
];

const l107_assess: Exercise[] = [
  {
    id: "a2_u08_l107_a9",
    type: "mediation",
    prompt: "Mediation: A friend was disappointed after missing a train. Offer a constructive and encouraging message:",
    sourceSentence: "I missed the last express train and ruined my entire evening plans.",
    targetSentence: "Don't worry too much; there is another local train in twenty minutes and we can still enjoy dinner.",
    options: [
      { id: "o1", text: "Don't worry too much; there is another local train in twenty minutes and we can still enjoy dinner.", isCorrect: true },
      { id: "o2", text: "Train wheels are made of heavy metal.", isCorrect: false },
      { id: "o3", text: "You are being bored with trains.", isCorrect: false }
    ],
    correctAnswer: "Don't worry too much; there is another local train in twenty minutes and we can still enjoy dinner.",
    explanation: "Offers practical reassurance and positive alternatives."
  },
  {
    id: "a2_u08_l107_a10",
    type: "speaking",
    prompt: "Speak your final reflection on emotional awareness:",
    targetSentence: "Expressing gratitude daily helps me maintain a positive and balanced mindset.",
    audioText: "Expressing gratitude daily helps me maintain a positive and balanced mindset."
  }
];

// =========================================================================
// LESSON 108: Daily Life, Household Chores & Daily Routines
// =========================================================================
const l108_practice: Exercise[] = [
  {
    id: "a2_u08_l108_p11",
    type: "reading",
    prompt: "Read the household schedule and answer the question:\n\"In our shared apartment, we divide chores equally. Maya vacuums the living room carpets on Wednesdays, Leo cleans the kitchen counters every evening, and we all do a deep clean of the bathrooms together on Saturday mornings.\"\nWhen do they clean the bathrooms?",
    sourceSentence: "When do they clean the bathrooms?",
    targetSentence: "On Saturday mornings together.",
    options: [
      { id: "o1", text: "On Saturday mornings together.", isCorrect: true },
      { id: "o2", text: "Every Wednesday evening.", isCorrect: false },
      { id: "o3", text: "Only once a month.", isCorrect: false },
      { id: "o4", text: "Every weekday before work.", isCorrect: false }
    ],
    correctAnswer: "On Saturday mornings together.",
    explanation: "The text states: 'we all do a deep clean of the bathrooms together on Saturday mornings.'"
  },
  {
    id: "a2_u08_l108_p12",
    type: "fill_blank",
    prompt: "Choose the correct phrasal verb particle for domestic cleaning:",
    sourceSentence: "Please remember to tidy ____ your workspace before logging off.",
    targetSentence: "Please remember to tidy up your workspace before logging off.",
    options: [
      { id: "o1", text: "up", isCorrect: true },
      { id: "o2", text: "out", isCorrect: false },
      { id: "o3", text: "off", isCorrect: false },
      { id: "o4", text: "down", isCorrect: false }
    ],
    correctAnswer: "up",
    explanation: "'Tidy up' means to clean and organize a room or space."
  },
  {
    id: "a2_u08_l108_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses a separable phrasal verb with a pronoun?",
    sourceSentence: "The rubbish bin is full; please take it out.",
    targetSentence: "The rubbish bin is full; please take it out.",
    options: [
      { id: "o1", text: "The rubbish bin is full; please take it out.", isCorrect: true },
      { id: "o2", text: "The rubbish bin is full; please take out it.", isCorrect: false },
      { id: "o3", text: "The rubbish bin is full; please taking out it.", isCorrect: false },
      { id: "o4", text: "The rubbish bin is full; please took it out.", isCorrect: false }
    ],
    correctAnswer: "The rubbish bin is full; please take it out.",
    explanation: "When the object is a pronoun (it, them), it must go between the verb and particle: 'take it out'."
  },
  {
    id: "a2_u08_l108_p14",
    type: "speaking",
    prompt: "Speak this routine description clearly:",
    targetSentence: "I usually do the laundry on Sunday afternoons and fold the clothes immediately.",
    audioText: "I usually do the laundry on Sunday afternoons and fold the clothes immediately."
  },
  {
    id: "a2_u08_l108_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence accurately:",
    audioText: "Don't forget to wipe down the dining table after dinner.",
    targetSentence: "Don't forget to wipe down the dining table after dinner."
  },
  {
    id: "a2_u08_l108_p16",
    type: "error_correction",
    prompt: "Fix the phrasal verb word order mistake:",
    sourceSentence: "Can you turn off it before going to sleep?",
    targetSentence: "Can you turn it off before going to sleep?",
    options: [
      { id: "o1", text: "Can you turn it off before going to sleep?", isCorrect: true },
      { id: "o2", text: "Can you turning off it before sleep?", isCorrect: false },
      { id: "o3", text: "Can you off turn it before sleep?", isCorrect: false },
      { id: "o4", text: "Can you turn it of before sleeping?", isCorrect: false }
    ],
    correctAnswer: "Can you turn it off before going to sleep?",
    explanation: "Pronouns must precede the particle: 'turn it off'."
  },
  {
    id: "a2_u08_l108_p17",
    type: "mediation",
    prompt: "Mediation: A roommate asks about recycling guidelines in your building. Explain clearly:",
    sourceSentence: "Where should I put plastic bottles and cardboard boxes?",
    targetSentence: "Plastic bottles go into the yellow bin, and flattened cardboard boxes go into the blue container.",
    options: [
      { id: "o1", text: "Plastic bottles go into the yellow bin, and flattened cardboard boxes go into the blue container.", isCorrect: true },
      { id: "o2", text: "We do not eat cardboard for breakfast.", isCorrect: false },
      { id: "o3", text: "I bought three plastic chairs yesterday.", isCorrect: false },
      { id: "o4", text: "Trash is flying in the sky.", isCorrect: false }
    ],
    correctAnswer: "Plastic bottles go into the yellow bin, and flattened cardboard boxes go into the blue container.",
    explanation: "Gives clear, practical instructions for household recycling."
  },
  {
    id: "a2_u08_l108_p18",
    type: "match_pairs",
    prompt: "Match the household verbs with their typical collocations:",
    options: [
      { id: "m1", text: "do" },
      { id: "m1_m", text: "the laundry / the dishes" },
      { id: "m2", text: "make" },
      { id: "m2_m", text: "the bed / breakfast" },
      { id: "m3", text: "take out" },
      { id: "m3_m", text: "the garbage / the recycling" },
      { id: "m4", text: "put away" },
      { id: "m4_m", text: "the clean clothes / groceries" }
    ]
  },
  {
    id: "a2_u08_l108_p19",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite request for assistance:",
    sourceSentence: "Could you please empty the dishwasher while I cook?",
    targetSentence: "Could you please empty the dishwasher while I cook",
    wordBank: ["Could", "you", "please", "empty", "the", "dishwasher", "while", "I", "cook", "do", "making"]
  },
  {
    id: "a2_u08_l108_p20",
    type: "translation",
    prompt: "Translate into English: 'मैं सप्ताह में दो बार किराने का सामान खरीदता हूँ।'",
    sourceSentence: "मैं सप्ताह में दो बार किराने का सामान खरीदता हूँ।",
    targetSentence: "I buy groceries twice a week.",
    wordBank: ["I", "buy", "groceries", "twice", "a", "week", "laundry", "clean"]
  },
  {
    id: "a2_u08_l108_p21",
    type: "listening",
    prompt: "Listen to the routine reminder and answer:",
    audioText: "Before we leave for vacation, make sure all the windows are locked and the taps are turned off.",
    targetSentence: "Check that windows are locked and taps are turned off before leaving.",
    options: [
      { id: "o1", text: "Check that windows are locked and taps are turned off before leaving.", isCorrect: true },
      { id: "o2", text: "Leave the windows open for fresh air.", isCorrect: false },
      { id: "o3", text: "Water the plants while on vacation.", isCorrect: false }
    ],
    correctAnswer: "Check that windows are locked and taps are turned off before leaving.",
    explanation: "Audio explicitly states checking windows and taps before vacation."
  },
  {
    id: "a2_u08_l108_p22",
    type: "personal_production",
    prompt: "Describe your weekend morning chore routine in 2-3 sentences:",
    targetSentence: "On Saturday mornings, I make my bed, vacuum the floors, and do the weekly grocery shopping.",
    audioText: "On Saturday mornings, I make my bed, vacuum the floors, and do the weekly grocery shopping."
  }
];

const l108_review: Exercise[] = [
  {
    id: "a2_u08_l108_r9",
    type: "dialogue_completion",
    prompt: "Complete the household negotiation politely:",
    sourceSentence: "A: Would you mind taking out the trash tonight?\nB: _____",
    targetSentence: "Not at all, I'll do it right after I finish washing the dishes.",
    options: [
      { id: "o1", text: "Not at all, I'll do it right after I finish washing the dishes.", isCorrect: true },
      { id: "o2", text: "Yes, I mind taking trash yesterday.", isCorrect: false },
      { id: "o3", text: "Trash is very delicious.", isCorrect: false },
      { id: "o4", text: "I did not wake up tomorrow.", isCorrect: false }
    ],
    correctAnswer: "Not at all, I'll do it right after I finish washing the dishes.",
    explanation: "'Not at all' is the standard polite agreement to 'Would you mind...?'."
  },
  {
    id: "a2_u08_l108_r10",
    type: "reading",
    prompt: "Read the note from your landlord:\n\"Please ensure that common hallway corridors are kept clear of shoes and bicycles at all times for fire safety compliance.\"\nWhat is the main requirement?",
    sourceSentence: "What is the main requirement?",
    targetSentence: "Keep hallway corridors completely unobstructed.",
    options: [
      { id: "o1", text: "Keep hallway corridors completely unobstructed.", isCorrect: true },
      { id: "o2", text: "Store bicycles in the main hallway.", isCorrect: false },
      { id: "o3", text: "Paint the corridors red.", isCorrect: false }
    ],
    correctAnswer: "Keep hallway corridors completely unobstructed.",
    explanation: "The note requires corridors to be kept clear of personal items."
  }
];

const l108_assess: Exercise[] = [
  {
    id: "a2_u08_l108_a9",
    type: "mediation",
    prompt: "Mediation: Your roommate is cooking dinner while you clean. Coordinate tasks smoothly:",
    sourceSentence: "How should we split the evening workload?",
    targetSentence: "If you prepare dinner, I will set the table and take care of all the washing up afterwards.",
    options: [
      { id: "o1", text: "If you prepare dinner, I will set the table and take care of all the washing up afterwards.", isCorrect: true },
      { id: "o2", text: "I will watch television and eat all the food.", isCorrect: false },
      { id: "o3", text: "Dishes were cleaned next year.", isCorrect: false }
    ],
    correctAnswer: "If you prepare dinner, I will set the table and take care of all the washing up afterwards.",
    explanation: "Proposes a fair, reciprocal division of evening responsibilities."
  },
  {
    id: "a2_u08_l108_a10",
    type: "speaking",
    prompt: "Speak your statement on maintaining an organized home:",
    targetSentence: "Keeping a regular cleaning routine makes our home comfortable, healthy, and stress-free.",
    audioText: "Keeping a regular cleaning routine makes our home comfortable, healthy, and stress-free."
  }
];

// =========================================================================
// LESSON 109: Life Events, Milestones & Family Histories
// =========================================================================
const l109_practice: Exercise[] = [
  {
    id: "a2_u08_l109_p11",
    type: "reading",
    prompt: "Read the biographical sketch and answer the question:\n\"Arthur was born in Dublin in 1955. In his twenties, he moved to Canada, where he worked as a civil engineer for thirty years. He retired in 2020 and now spends his time writing memoirs and gardening.\"\nWhen did Arthur retire from his engineering career?",
    sourceSentence: "When did Arthur retire from his engineering career?",
    targetSentence: "In 2020 after working for thirty years.",
    options: [
      { id: "o1", text: "In 2020 after working for thirty years.", isCorrect: true },
      { id: "o2", text: "In 1955 when he was born.", isCorrect: false },
      { id: "o3", text: "He has not retired yet.", isCorrect: false },
      { id: "o4", text: "Immediately after arriving in Canada.", isCorrect: false }
    ],
    correctAnswer: "In 2020 after working for thirty years.",
    explanation: "The text specifies: 'He retired in 2020 and now spends his time writing memoirs...'"
  },
  {
    id: "a2_u08_l109_p12",
    type: "fill_blank",
    prompt: "Choose the correct tense form (Past Simple vs Present Perfect):",
    sourceSentence: "My grandparents ____ in a small coastal village until they got married in 1975.",
    targetSentence: "My grandparents lived in a small coastal village until they got married in 1975.",
    options: [
      { id: "o1", text: "lived", isCorrect: true },
      { id: "o2", text: "have lived", isCorrect: false },
      { id: "o3", text: "are living", isCorrect: false },
      { id: "o4", text: "live", isCorrect: false }
    ],
    correctAnswer: "lived",
    explanation: "Past Simple is used for completed states in a finished past time period."
  },
  {
    id: "a2_u08_l109_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'used to' for a past habit?",
    sourceSentence: "We used to visit our cousins in the countryside every summer.",
    targetSentence: "We used to visit our cousins in the countryside every summer.",
    options: [
      { id: "o1", text: "We used to visit our cousins in the countryside every summer.", isCorrect: true },
      { id: "o2", text: "We are used to visit our cousins every summer.", isCorrect: false },
      { id: "o3", text: "We use to visited our cousins every summer.", isCorrect: false },
      { id: "o4", text: "We used to visiting our cousins every summer.", isCorrect: false }
    ],
    correctAnswer: "We used to visit our cousins in the countryside every summer.",
    explanation: "'used to + base verb' describes past habits that no longer happen."
  },
  {
    id: "a2_u08_l109_p14",
    type: "speaking",
    prompt: "Speak this milestone sentence clearly:",
    targetSentence: "She graduated from medical school with top honors last June.",
    audioText: "She graduated from medical school with top honors last June."
  },
  {
    id: "a2_u08_l109_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the life history sentence:",
    audioText: "They got married in 2010 and started their own business.",
    targetSentence: "They got married in 2010 and started their own business."
  },
  {
    id: "a2_u08_l109_p16",
    type: "error_correction",
    prompt: "Identify and fix the tense mistake with a specific past year:",
    sourceSentence: "I have graduated from university in 2018.",
    targetSentence: "I graduated from university in 2018.",
    options: [
      { id: "o1", text: "I graduated from university in 2018.", isCorrect: true },
      { id: "o2", text: "I had graduate from university in 2018.", isCorrect: false },
      { id: "o3", text: "I am graduating in 2018.", isCorrect: false },
      { id: "o4", text: "I have been graduating in 2018.", isCorrect: false }
    ],
    correctAnswer: "I graduated from university in 2018.",
    explanation: "Specific past time markers ('in 2018') require Past Simple, not Present Perfect."
  },
  {
    id: "a2_u08_l109_p17",
    type: "mediation",
    prompt: "Mediation: A friend asks why your family moved cities ten years ago. Explain politely:",
    sourceSentence: "Why did your family relocate to Delhi back in 2015?",
    targetSentence: "My father got a career promotion and we wanted better educational opportunities for the children.",
    options: [
      { id: "o1", text: "My father got a career promotion and we wanted better educational opportunities for the children.", isCorrect: true },
      { id: "o2", text: "Trains run fast on iron tracks.", isCorrect: false },
      { id: "o3", text: "We did not have any suitcases tomorrow.", isCorrect: false }
    ],
    correctAnswer: "My father got a career promotion and we wanted better educational opportunities for the children.",
    explanation: "Provides clear, meaningful reasons for a major family life transition."
  },
  {
    id: "a2_u08_l109_p18",
    type: "match_pairs",
    prompt: "Match the life milestone phrases with their meanings:",
    options: [
      { id: "m1", text: "grow up" },
      { id: "m1_m", text: "spend one's childhood and mature" },
      { id: "m2", text: "settle down" },
      { id: "m2_m", text: "establish a permanent home and stable lifestyle" },
      { id: "m3", text: "change careers" },
      { id: "m3_m", text: "transition into a completely different profession" },
      { id: "m4", text: "retire" },
      { id: "m4_m", text: "stop working permanently due to age" }
    ]
  },
  {
    id: "a2_u08_l109_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing family roots:",
    sourceSentence: "My ancestors emigrated from Scotland in the nineteenth century.",
    targetSentence: "My ancestors emigrated from Scotland in the nineteenth century",
    wordBank: ["My", "ancestors", "emigrated", "from", "Scotland", "in", "the", "nineteenth", "century", "have", "are"]
  },
  {
    id: "a2_u08_l109_p20",
    type: "translation",
    prompt: "Translate into English: 'मेरे माता-पिता 25 साल पहले इस शहर में आए थे।'",
    sourceSentence: "मेरे माता-पिता 25 साल पहले इस शहर में आए थे।",
    targetSentence: "My parents moved to this city twenty-five years ago.",
    wordBank: ["My", "parents", "moved", "to", "this", "city", "twenty-five", "years", "ago", "since"]
  },
  {
    id: "a2_u08_l109_p21",
    type: "listening",
    prompt: "Listen to the family story and answer:",
    audioText: "My grandmother used to run a bakery, and she taught all her children how to bake traditional sourdough bread.",
    targetSentence: "The grandmother owned a bakery and taught her children traditional baking.",
    options: [
      { id: "o1", text: "The grandmother owned a bakery and taught her children traditional baking.", isCorrect: true },
      { id: "o2", text: "The grandmother never worked outside the house.", isCorrect: false },
      { id: "o3", text: "The grandmother bought bread from the supermarket.", isCorrect: false }
    ],
    correctAnswer: "The grandmother owned a bakery and taught her children traditional baking.",
    explanation: "Audio explicitly describes the grandmother running a bakery and teaching her children."
  },
  {
    id: "a2_u08_l109_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences about an important milestone in your own life:",
    targetSentence: "In 2021, I graduated from college and moved into my first apartment. It was an exciting new chapter.",
    audioText: "In 2021, I graduated from college and moved into my first apartment. It was an exciting new chapter."
  }
];

const l109_review: Exercise[] = [
  {
    id: "a2_u08_l109_r9",
    type: "dialogue_completion",
    prompt: "Complete the conversation about past experiences:",
    sourceSentence: "A: Did you grow up in a big city?\nB: _____",
    targetSentence: "No, I grew up in a peaceful mountain town, but I moved to the capital for university.",
    options: [
      { id: "o1", text: "No, I grew up in a peaceful mountain town, but I moved to the capital for university.", isCorrect: true },
      { id: "o2", text: "Yes, I am growing up tomorrow.", isCorrect: false },
      { id: "o3", text: "I have grown up in 1999 next year.", isCorrect: false },
      { id: "o4", text: "City is having many buses.", isCorrect: false }
    ],
    correctAnswer: "No, I grew up in a peaceful mountain town, but I moved to the capital for university.",
    explanation: "Provides an authentic, chronological past simple narrative."
  },
  {
    id: "a2_u08_l109_r10",
    type: "reading",
    prompt: "Read the milestone announcement:\n\"The Sharma family cordially invites you to celebrate the Golden Wedding Anniversary of Ramesh and Sunita Sharma, commemorating 50 years of marriage on Saturday, October 15th.\"\nHow many years of marriage are being celebrated?",
    sourceSentence: "How many years of marriage are being celebrated?",
    targetSentence: "50 years (Golden Anniversary).",
    options: [
      { id: "o1", text: "50 years (Golden Anniversary).", isCorrect: true },
      { id: "o2", text: "25 years (Silver Anniversary).", isCorrect: false },
      { id: "o3", text: "10 years.", isCorrect: false }
    ],
    correctAnswer: "50 years (Golden Anniversary).",
    explanation: "A Golden Wedding Anniversary commemorates 50 years of marriage."
  }
];

const l109_assess: Exercise[] = [
  {
    id: "a2_u08_l109_a9",
    type: "mediation",
    prompt: "Mediation: Summarize your family's journey for a cross-cultural heritage project:",
    sourceSentence: "Tell us briefly about your family's background.",
    targetSentence: "My grandparents migrated from a rural farming community, worked diligently in manufacturing, and enabled their children to pursue university degrees.",
    options: [
      { id: "o1", text: "My grandparents migrated from a rural farming community, worked diligently in manufacturing, and enabled their children to pursue university degrees.", isCorrect: true },
      { id: "o2", text: "We eat potatoes every single evening.", isCorrect: false },
      { id: "o3", text: "Grandparents will be born next summer.", isCorrect: false }
    ],
    correctAnswer: "My grandparents migrated from a rural farming community, worked diligently in manufacturing, and enabled their children to pursue university degrees.",
    explanation: "Captures intergenerational progress and values concisely."
  },
  {
    id: "a2_u08_l109_a10",
    type: "speaking",
    prompt: "Speak your reflection on personal milestones:",
    targetSentence: "Every major life challenge has taught me resilience and helped me grow as an individual.",
    audioText: "Every major life challenge has taught me resilience and helped me grow as an individual."
  }
];

// =========================================================================
// LESSON 110: Education, School Subjects & Study Habits
// =========================================================================
const l110_practice: Exercise[] = [
  {
    id: "a2_u08_l110_p11",
    type: "reading",
    prompt: "Read the university course syllabus policy and answer:\n\"All coursework assignments must be submitted online by Friday at 5:00 PM. Late submissions without prior medical documentation will receive an automatic ten percent deduction per day.\"\nWhat happens if an assignment is submitted late without medical proof?",
    sourceSentence: "What happens if an assignment is submitted late without medical proof?",
    targetSentence: "It receives a 10% daily grade deduction.",
    options: [
      { id: "o1", text: "It receives a 10% daily grade deduction.", isCorrect: true },
      { id: "o2", text: "It is automatically awarded full marks.", isCorrect: false },
      { id: "o3", text: "The student is expelled immediately.", isCorrect: false },
      { id: "o4", text: "Nothing happens.", isCorrect: false }
    ],
    correctAnswer: "It receives a 10% daily grade deduction.",
    explanation: "The policy explicitly states: 'automatic ten percent deduction per day'."
  },
  {
    id: "a2_u08_l110_p12",
    type: "fill_blank",
    prompt: "Choose the correct modal of academic advice:",
    sourceSentence: "You ____ revise the key vocabulary units before attempting the final mock test.",
    targetSentence: "You should revise the key vocabulary units before attempting the final mock test.",
    options: [
      { id: "o1", text: "should", isCorrect: true },
      { id: "o2", text: "must to", isCorrect: false },
      { id: "o3", text: "ought", isCorrect: false },
      { id: "o4", text: "should to", isCorrect: false }
    ],
    correctAnswer: "should",
    explanation: "'Should + base verb' is used for helpful recommendations and advice."
  },
  {
    id: "a2_u08_l110_p13",
    type: "multiple_choice",
    prompt: "Which preposition correctly connects with the academic skill?",
    sourceSentence: "Kavita has always been exceptionally good ____ mathematics and statistics.",
    targetSentence: "Kavita has always been exceptionally good at mathematics and statistics.",
    options: [
      { id: "o1", text: "at", isCorrect: true },
      { id: "o2", text: "in", isCorrect: false },
      { id: "o3", text: "on", isCorrect: false },
      { id: "o4", text: "with", isCorrect: false }
    ],
    correctAnswer: "at",
    explanation: "We say 'good at / bad at + subject/activity'."
  },
  {
    id: "a2_u08_l110_p14",
    type: "speaking",
    prompt: "Speak this study habit strategy clearly:",
    targetSentence: "Studying in short focused intervals helps me retain information much better.",
    audioText: "Studying in short focused intervals helps me retain information much better."
  },
  {
    id: "a2_u08_l110_p15",
    type: "listen_and_type",
    prompt: "Listen and write the study reminder:",
    audioText: "We have to submit our laboratory reports by midnight.",
    targetSentence: "We have to submit our laboratory reports by midnight."
  },
  {
    id: "a2_u08_l110_p16",
    type: "error_correction",
    prompt: "Correct the modal verb construction error:",
    sourceSentence: "Students must to attend all seminar discussions.",
    targetSentence: "Students must attend all seminar discussions.",
    options: [
      { id: "o1", text: "Students must attend all seminar discussions.", isCorrect: true },
      { id: "o2", text: "Students must attending all seminar discussions.", isCorrect: false },
      { id: "o3", text: "Students must to attending seminar discussions.", isCorrect: false },
      { id: "o4", text: "Students has to attend all seminar discussions.", isCorrect: false }
    ],
    correctAnswer: "Students must attend all seminar discussions.",
    explanation: "'Must' is a modal auxiliary followed directly by bare infinitive without 'to'."
  },
  {
    id: "a2_u08_l110_p17",
    type: "mediation",
    prompt: "Mediation: A classmate missed a lecture and asks what the professor assigned. Relay the instructions:",
    sourceSentence: "What did Professor Martin ask us to prepare for Monday?",
    targetSentence: "We have to read chapter four and prepare three discussion questions on modern renewable energy.",
    options: [
      { id: "o1", text: "We have to read chapter four and prepare three discussion questions on modern renewable energy.", isCorrect: true },
      { id: "o2", text: "The professor went to the cafeteria to drink tea.", isCorrect: false },
      { id: "o3", text: "Energy is very shiny in the sky.", isCorrect: false }
    ],
    correctAnswer: "We have to read chapter four and prepare three discussion questions on modern renewable energy.",
    explanation: "Accurately passes on academic instructions and tasks."
  },
  {
    id: "a2_u08_l110_p18",
    type: "match_pairs",
    prompt: "Match the academic collocations:",
    options: [
      { id: "m1", text: "hand in" },
      { id: "m1_m", text: "submit an assignment or paper" },
      { id: "m2", text: "fall behind" },
      { id: "m2_m", text: "fail to maintain the expected pace of coursework" },
      { id: "m3", text: "revise for" },
      { id: "m3_m", text: "review material thoroughly before an examination" },
      { id: "m4", text: "major in" },
      { id: "m4_m", text: "specialize in a specific academic field at university" }
    ]
  },
  {
    id: "a2_u08_l110_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing effective study methods:",
    sourceSentence: "Taking concise notes during lectures improves exam preparation.",
    targetSentence: "Taking concise notes during lectures improves exam preparation",
    wordBank: ["Taking", "concise", "notes", "during", "lectures", "improves", "exam", "preparation", "should", "at"]
  },
  {
    id: "a2_u08_l110_p20",
    type: "translation",
    prompt: "Translate into English: 'परीक्षा पास करने के लिए आपको नियमित रूप से अभ्यास करना होगा।'",
    sourceSentence: "परीक्षा पास करने के लिए आपको नियमित रूप से अभ्यास करना होगा।",
    targetSentence: "You have to practice regularly in order to pass the exam.",
    wordBank: ["You", "have", "to", "practice", "regularly", "in", "order", "to", "pass", "the", "exam"]
  },
  {
    id: "a2_u08_l110_p21",
    type: "listening",
    prompt: "Listen to the study advice and identify the main recommendation:",
    audioText: "Rather than cramming the night before an exam, review your notes for twenty minutes every single day.",
    targetSentence: "Review notes daily in short sessions instead of cramming before exams.",
    options: [
      { id: "o1", text: "Review notes daily in short sessions instead of cramming before exams.", isCorrect: true },
      { id: "o2", text: "Study for ten continuous hours the night before tests.", isCorrect: false },
      { id: "o3", text: "Never look at your notes until the test starts.", isCorrect: false }
    ],
    correctAnswer: "Review notes daily in short sessions instead of cramming before exams.",
    explanation: "Audio advises consistent 20-minute daily reviews over last-minute cramming."
  },
  {
    id: "a2_u08_l110_p22",
    type: "personal_production",
    prompt: "Describe your favorite subject or study technique in 2-3 sentences:",
    targetSentence: "My favorite subject is world history because I enjoy understanding how past events shape our modern society.",
    audioText: "My favorite subject is world history because I enjoy understanding how past events shape our modern society."
  }
];

const l110_review: Exercise[] = [
  {
    id: "a2_u08_l110_r9",
    type: "dialogue_completion",
    prompt: "Complete the academic inquiry:",
    sourceSentence: "A: What should I do if I don't understand the assignment brief?\nB: _____",
    targetSentence: "You should schedule a quick consultation with your tutor during office hours.",
    options: [
      { id: "o1", text: "You should schedule a quick consultation with your tutor during office hours.", isCorrect: true },
      { id: "o2", text: "You must ignore the teacher completely.", isCorrect: false },
      { id: "o3", text: "I have passed the test yesterday.", isCorrect: false },
      { id: "o4", text: "Books are made of yellow paper.", isCorrect: false }
    ],
    correctAnswer: "You should schedule a quick consultation with your tutor during office hours.",
    explanation: "Offers sound, practical academic guidance."
  },
  {
    id: "a2_u08_l110_r10",
    type: "reading",
    prompt: "Read the library announcement:\n\"The university central library will remain open 24 hours during mid-term and final examination periods to support quiet group and individual study.\"\nWhen is the library open 24 hours?",
    sourceSentence: "When is the library open 24 hours?",
    targetSentence: "During mid-term and final examination periods.",
    options: [
      { id: "o1", text: "During mid-term and final examination periods.", isCorrect: true },
      { id: "o2", text: "Only on Sunday mornings.", isCorrect: false },
      { id: "o3", text: "Never during the school year.", isCorrect: false }
    ],
    correctAnswer: "During mid-term and final examination periods.",
    explanation: "The announcement explicitly links 24-hour access to exam periods."
  }
];

const l110_assess: Exercise[] = [
  {
    id: "a2_u08_l110_a9",
    type: "mediation",
    prompt: "Mediation: A classmate is struggling to balance work and studies. Give actionable advice in English:",
    sourceSentence: "How can I manage working part-time while preparing for final exams?",
    targetSentence: "Create a weekly study timetable, prioritize the most demanding modules first, and break study tasks into manageable chunks.",
    options: [
      { id: "o1", text: "Create a weekly study timetable, prioritize the most demanding modules first, and break study tasks into manageable chunks.", isCorrect: true },
      { id: "o2", text: "You should stop sleeping and work all night.", isCorrect: false },
      { id: "o3", text: "Exams will be cancelled next century.", isCorrect: false }
    ],
    correctAnswer: "Create a weekly study timetable, prioritize the most demanding modules first, and break study tasks into manageable chunks.",
    explanation: "Provides realistic, evidence-based time management strategies."
  },
  {
    id: "a2_u08_l110_a10",
    type: "speaking",
    prompt: "Speak your final personal learning commitment:",
    targetSentence: "Consistent daily practice and curiosity are the keys to long-term language mastery.",
    audioText: "Consistent daily practice and curiosity are the keys to long-term language mastery."
  }
];

export function enrichBatch106_110() {
  console.log("=== ENRICHING LESSONS 106 TO 110 ===");
  enrichUnit8LessonData('lesson_a2_8_106', LESSON_A2_8_106_DATA, l106_practice, l106_review, l106_assess);
  enrichUnit8LessonData('lesson_a2_8_107', LESSON_A2_8_107_DATA, l107_practice, l107_review, l107_assess);
  enrichUnit8LessonData('lesson_a2_8_108', LESSON_A2_8_108_DATA, l108_practice, l108_review, l108_assess);
  enrichUnit8LessonData('lesson_a2_8_109', LESSON_A2_8_109_DATA, l109_practice, l109_review, l109_assess);
  enrichUnit8LessonData('lesson_a2_8_110', LESSON_A2_8_110_DATA, l110_practice, l110_review, l110_assess);
  console.log("=== BATCH 106-110 COMPLETED ===");
}

enrichBatch106_110();
