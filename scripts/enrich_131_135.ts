import { Exercise } from '../src/types';
import { LESSON_A2_9_131_DATA } from '../src/data/lessons/lesson_a2_9_131';
import { LESSON_A2_9_132_DATA } from '../src/data/lessons/lesson_a2_9_132';
import { LESSON_A2_9_133_DATA } from '../src/data/lessons/lesson_a2_9_133';
import { LESSON_A2_9_134_DATA } from '../src/data/lessons/lesson_a2_9_134';
import { LESSON_A2_9_135_DATA } from '../src/data/lessons/lesson_a2_9_135';
import { enrichUnit9LessonData } from './enrich_unit9_helper';

// =========================================================================
// LESSON 131: Health, Minor Illnesses, Pharmacies & Medical Consultations
// =========================================================================
const l131_practice: Exercise[] = [
  {
    id: "a2_u09_l131_p16",
    type: "reading",
    prompt: "Read the pharmacy consultation transcript:\n\"Pharmacist: Good morning. How can I help you today?\nCustomer: I've had a persistent dry cough and a sore throat since Tuesday. I don't have a fever, but it hurts when I swallow.\nPharmacist: I recommend this soothing herbal syrup. Take two teaspoons three times daily after meals. If the symptoms persist for more than five days, please consult your doctor.\"\nWhat dosage instructions does the pharmacist give?",
    sourceSentence: "What dosage instructions does the pharmacist give?",
    targetSentence: "Take two teaspoons three times daily after meals.",
    options: [
      { id: "o1", text: "Take two teaspoons three times daily after meals.", isCorrect: true },
      { id: "o2", text: "Drink the whole bottle at bedtime.", isCorrect: false },
      { id: "o3", text: "Take one tablet before sleeping every week.", isCorrect: false },
      { id: "o4", text: "Do not take any medication for five days.", isCorrect: false }
    ],
    correctAnswer: "Take two teaspoons three times daily after meals.",
    explanation: "The pharmacist clearly instructs: 'Take two teaspoons three times daily after meals.'"
  },
  {
    id: "a2_u09_l131_p17",
    type: "speaking",
    prompt: "Practice describing physical symptoms at a doctor's clinic:\n'Doctor, I've had a severe migraine and felt dizzy since yesterday morning. I also feel nauseous.'",
    sourceSentence: "Doctor, I've had a severe migraine and felt dizzy since yesterday morning. I also feel nauseous.",
    targetSentence: "Doctor, I've had a severe migraine and felt dizzy since yesterday morning. I also feel nauseous.",
    audioText: "Doctor, I've had a severe migraine and felt dizzy since yesterday morning. I also feel nauseous.",
    explanation: "Uses Present Perfect for ongoing symptoms ('I've had... and felt...') + precise medical vocabulary."
  },
  {
    id: "a2_u09_l131_p18",
    type: "match_pairs",
    prompt: "Match the health symptoms with appropriate home remedies / recommendations:",
    options: [
      { id: "m1", text: "sore throat & cough" },
      { id: "m1_m", text: "warm honey lemon tea & throat lozenges" },
      { id: "m2", text: "sprained ankle" },
      { id: "m2_m", text: "ice packs, elevation, and elastic bandage" },
      { id: "m3", text: "mild fever & body aches" },
      { id: "m3_m", text: "plenty of fluids, rest, and paracetamol" },
      { id: "m4", text: "indigestion / stomach ache" },
      { id: "m4_m", text: "antacid tablets and light herbal tea" }
    ]
  },
  {
    id: "a2_u09_l131_p19",
    type: "mediation",
    prompt: "A Hindi-speaking patient at an international clinic says: 'मुझे पिछले तीन दिनों से हल्का बुखार और सिरदर्द है। क्या मुझे कोई दर्द निवारक दवा मिल सकती है?' Translate this request clearly into English:",
    sourceSentence: "मुझे पिछले तीन दिनों से हल्का बुखार और सिरदर्द है। क्या मुझे कोई दर्द निवारक दवा मिल सकती है?",
    targetSentence: "I have had a mild fever and a headache for the past three days. Could I get some pain relief medication?",
    options: [
      { id: "o1", text: "I have had a mild fever and a headache for the past three days. Could I get some pain relief medication?", isCorrect: true },
      { id: "o2", text: "I was sick three days ago and take medicine tomorrow.", isCorrect: false },
      { id: "o3", text: "Fever and headache is living three days please.", isCorrect: false }
    ],
    correctAnswer: "I have had a mild fever and a headache for the past three days. Could I get some pain relief medication?",
    explanation: "Accurately conveys duration ('for the past three days') and specific symptoms with polite request for medication."
  },
  {
    id: "a2_u09_l131_p20",
    type: "error_correction",
    prompt: "Correct the preposition in this medical advice sentence:",
    sourceSentence: "You should take these antibiotics with water before go to bed.",
    targetSentence: "You should take these antibiotics with water before going to bed.",
    options: [
      { id: "o1", text: "You should take these antibiotics with water before going to bed.", isCorrect: true },
      { id: "o2", text: "You should take these antibiotics with water before go to bed.", isCorrect: false },
      { id: "o3", text: "You should to take these antibiotics with water before go bed.", isCorrect: false }
    ],
    correctAnswer: "You should take these antibiotics with water before going to bed.",
    explanation: "Preposition 'before' is followed by a gerund ('going')."
  },
  {
    id: "a2_u09_l131_p21",
    type: "listening",
    prompt: "Listen to the medical appointment receptionist and identify the doctor's availability:",
    audioText: "Dr. Patel is fully booked for this afternoon, but she has an open slot tomorrow morning at 9:45 AM. Would you like me to schedule that appointment for you?",
    targetSentence: "Tomorrow morning at 9:45 AM.",
    options: [
      { id: "o1", text: "Tomorrow morning at 9:45 AM.", isCorrect: true },
      { id: "o2", text: "Today at 2:00 PM.", isCorrect: false },
      { id: "o3", text: "Next Friday afternoon.", isCorrect: false }
    ],
    correctAnswer: "Tomorrow morning at 9:45 AM.",
    explanation: "Receptionist notes: 'open slot tomorrow morning at 9:45 AM'."
  },
  {
    id: "a2_u09_l131_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Describe a time you felt under the weather and what remedy helped you recover.",
    targetSentence: "Last winter I caught a bad cold with a runny nose and fatigue. Drinking ginger tea and getting plenty of sleep helped me recover quickly.",
    audioText: "Last winter I caught a bad cold with a runny nose and fatigue. Drinking ginger tea and getting plenty of sleep helped me recover quickly."
  }
];

const l131_review: Exercise[] = [
  {
    id: "a2_u09_l131_r06",
    type: "dialogue_completion",
    prompt: "Complete the clinic consultation:",
    sourceSentence: "Doctor: How long have you experienced these symptoms?\nPatient: _____",
    targetSentence: "I have felt feverish and tired for about four days.",
    options: [
      { id: "o1", text: "I have felt feverish and tired for about four days.", isCorrect: true },
      { id: "o2", text: "I will graduate from university tomorrow.", isCorrect: false },
      { id: "o3", text: "My flight was delayed yesterday.", isCorrect: false },
      { id: "o4", text: "I am feeling tired four days ago.", isCorrect: false }
    ],
    correctAnswer: "I have felt feverish and tired for about four days.",
    explanation: "Present Perfect + duration 'for about four days' answers 'How long...?'."
  },
  {
    id: "a2_u09_l131_r07",
    type: "word_ordering",
    prompt: "Arrange into a proper medical instruction:",
    sourceSentence: "Take one tablet twice a day after meals with plenty of water.",
    targetSentence: "Take one tablet twice a day after meals with plenty of water",
    wordBank: ["Take", "one", "tablet", "twice", "a", "day", "after", "meals", "with", "plenty", "of", "water", "taking", "did"]
  },
  {
    id: "a2_u09_l131_r08",
    type: "translation",
    prompt: "Translate into English: 'क्या इस दवा के कोई दुष्प्रभाव (साइड इफेक्ट्स) हैं?'",
    sourceSentence: "क्या इस दवा के कोई दुष्प्रभाव (साइड इफेक्ट्स) हैं?",
    targetSentence: "Are there any side effects with this medication?",
    wordBank: ["Are", "there", "any", "side", "effects", "with", "this", "medication?", "Is", "have"]
  },
  {
    id: "a2_u09_l131_r09",
    type: "reading",
    prompt: "Read the medicine label warning:\n\"Do not exceed the recommended dose of 4 capsules in 24 hours. May cause drowsiness; avoid driving or operating machinery after consumption.\"\nWhat precaution should users take after taking this medicine?",
    sourceSentence: "What precaution should users take after taking this medicine?",
    targetSentence: "Avoid driving or operating heavy machinery due to possible drowsiness.",
    options: [
      { id: "o1", text: "Avoid driving or operating heavy machinery due to possible drowsiness.", isCorrect: true },
      { id: "o2", text: "Take ten capsules immediately.", isCorrect: false },
      { id: "o3", text: "Exercise vigorously for two hours.", isCorrect: false }
    ],
    correctAnswer: "Avoid driving or operating heavy machinery due to possible drowsiness.",
    explanation: "Label explicitly warns: 'May cause drowsiness; avoid driving or operating machinery'."
  },
  {
    id: "a2_u09_l131_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "You ought to drink plenty of fluids and rest until the fever subsides.",
    targetSentence: "You ought to drink plenty of fluids and rest until the fever subsides.",
    explanation: "Spelling of 'fluids' and 'subsides'."
  }
];

const l131_assess: Exercise[] = [
  {
    id: "a2_u09_l131_a06",
    type: "multiple_choice",
    prompt: "Choose the correct term for a written order from a doctor for medicine:",
    sourceSentence: "You will need a doctor's ____ to purchase these antibiotics at the pharmacy.",
    targetSentence: "prescription",
    options: [
      { id: "o1", text: "prescription", isCorrect: true },
      { id: "o2", text: "receipt", isCorrect: false },
      { id: "o3", text: "menu", isCorrect: false },
      { id: "o4", text: "ticket", isCorrect: false }
    ],
    correctAnswer: "prescription",
    explanation: "A 'prescription' (/prɪˈskrɪpʃn/) is the official medical authorization for medicine."
  },
  {
    id: "a2_u09_l131_a07",
    type: "speaking",
    prompt: "Read aloud clearly: 'I have an allergic reaction to penicillin, so please prescribe an alternative medicine.'",
    sourceSentence: "I have an allergic reaction to penicillin, so please prescribe an alternative medicine.",
    targetSentence: "I have an allergic reaction to penicillin, so please prescribe an alternative medicine.",
    audioText: "I have an allergic reaction to penicillin, so please prescribe an alternative medicine.",
    explanation: "Pronounce 'allergic' (/əˈlɜːdʒɪk/), 'penicillin' (/ˌpenəˈsɪlɪn/), and 'alternative'."
  },
  {
    id: "a2_u09_l131_a08",
    type: "fill_blank",
    prompt: "Fill in the correct prepositions:",
    sourceSentence: "She has been suffering ____ chronic back pain ____ she started working at a desk.",
    targetSentence: "She has been suffering from chronic back pain since she started working at a desk.",
    options: [
      { id: "o1", text: "from / since", isCorrect: true },
      { id: "o2", text: "with / for", isCorrect: false },
      { id: "o3", text: "of / when", isCorrect: false },
      { id: "o4", text: "in / from", isCorrect: false }
    ],
    correctAnswer: "from / since",
    explanation: "Collocation: 'suffer from [ailment]' + 'since [past clause starting point]'."
  },
  {
    id: "a2_u09_l131_a09",
    type: "mediation",
    prompt: "A Spanish patient tells a nurse: 'Tengo dolor de estómago y náuseas desde anoche.' Translate this clearly for an English doctor:",
    sourceSentence: "Tengo dolor de estómago y náuseas desde anoche.",
    targetSentence: "I have had a stomach ache and nausea since last night.",
    options: [
      { id: "o1", text: "I have had a stomach ache and nausea since last night.", isCorrect: true },
      { id: "o2", text: "My stomach is broken yesterday evening.", isCorrect: false },
      { id: "o3", text: "I want to eat stomach tomorrow night.", isCorrect: false }
    ],
    correctAnswer: "I have had a stomach ache and nausea since last night.",
    explanation: "Accurate translation of symptoms and time duration."
  },
  {
    id: "a2_u09_l131_a10",
    type: "word_ordering",
    prompt: "Form a grammatical sentence with medical advice:",
    sourceSentence: "You had better schedule an appointment with a specialist for a thorough examination.",
    targetSentence: "You had better schedule an appointment with a specialist for a thorough examination",
    wordBank: ["You", "had", "better", "schedule", "an", "appointment", "with", "a", "specialist", "for", "a", "thorough", "examination", "to", "scheduling"]
  }
];

// =========================================================================
// LESSON 132: Environmental Awareness, Sustainable Living & Recycling
// =========================================================================
const l132_practice: Exercise[] = [
  {
    id: "a2_u09_l132_p16",
    type: "reading",
    prompt: "Read the community sustainability initiative:\n\"Our neighborhood council has introduced a mandatory waste-sorting scheme. Residents must separate organic kitchen waste from recyclable plastics and paper. By composting organic matter and reducing single-use packaging, our community has cut landfill waste by forty percent this year.\"\nWhat result has the neighborhood achieved?",
    sourceSentence: "What result has the neighborhood achieved?",
    targetSentence: "A forty percent reduction in landfill waste.",
    options: [
      { id: "o1", text: "A forty percent reduction in landfill waste.", isCorrect: true },
      { id: "o2", text: "An increase in plastic pollution.", isCorrect: false },
      { id: "o3", text: "Closing all neighborhood recycling bins.", isCorrect: false },
      { id: "o4", text: "Banning all kitchen cooking.", isCorrect: false }
    ],
    correctAnswer: "A forty percent reduction in landfill waste.",
    explanation: "The text highlights: 'our community has cut landfill waste by forty percent this year.'"
  },
  {
    id: "a2_u09_l132_p17",
    type: "speaking",
    prompt: "Practice discussing eco-friendly habits:\n'To reduce my carbon footprint, I cycle to work every day, carry a reusable water bottle, and compost organic food scraps.'",
    sourceSentence: "To reduce my carbon footprint, I cycle to work every day, carry a reusable water bottle, and compost organic food scraps.",
    targetSentence: "To reduce my carbon footprint, I cycle to work every day, carry a reusable water bottle, and compost organic food scraps.",
    audioText: "To reduce my carbon footprint, I cycle to work every day, carry a reusable water bottle, and compost organic food scraps.",
    explanation: "Clear pronunciation of environmental collocations: 'carbon footprint', 'reusable', and 'compost'."
  },
  {
    id: "a2_u09_l132_p18",
    type: "match_pairs",
    prompt: "Match sustainability concepts with their actions:",
    options: [
      { id: "m1", text: "reduce" },
      { id: "m1_m", text: "cut down on excessive consumption and waste" },
      { id: "m2", text: "reuse" },
      { id: "m2_m", text: "use containers, bags, and items multiple times" },
      { id: "m3", text: "recycle" },
      { id: "m3_m", text: "process materials like glass, metal, and paper into new goods" },
      { id: "m4", text: "renewable energy" },
      { id: "m4_m", text: "power generated from solar, wind, or hydroelectric sources" }
    ]
  },
  {
    id: "a2_u09_l132_p19",
    type: "mediation",
    prompt: "Translate this eco-awareness advice from Hindi into English for an environmental poster: 'हमें सिंगल-यूज प्लास्टिक का उपयोग बंद करना चाहिए और ऊर्जा बचाने के लिए सोलर पैनल अपनाने चाहिए।'",
    sourceSentence: "हमें सिंगल-यूज प्लास्टिक का उपयोग बंद करना चाहिए और ऊर्जा बचाने के लिए सोलर पैनल अपनाने चाहिए।",
    targetSentence: "We should stop using single-use plastic and adopt solar panels to conserve energy.",
    options: [
      { id: "o1", text: "We should stop using single-use plastic and adopt solar panels to conserve energy.", isCorrect: true },
      { id: "o2", text: "We were using plastic yesterday solar tomorrow.", isCorrect: false },
      { id: "o3", text: "Plastic is good and solar panels are stopped.", isCorrect: false }
    ],
    correctAnswer: "We should stop using single-use plastic and adopt solar panels to conserve energy.",
    explanation: "Clear modal recommendation using 'should stop using...' and 'adopt solar panels to conserve energy'."
  },
  {
    id: "a2_u09_l132_p20",
    type: "error_correction",
    prompt: "Correct the error in this sustainability sentence:",
    sourceSentence: "Many cities has banned single-use plastic bags to protect marine life.",
    targetSentence: "Many cities have banned single-use plastic bags to protect marine life.",
    options: [
      { id: "o1", text: "Many cities have banned single-use plastic bags to protect marine life.", isCorrect: true },
      { id: "o2", text: "Many cities has banned single-use plastic bags to protect marine life.", isCorrect: false },
      { id: "o3", text: "Many cities is banning single-use plastic bags to protect marine life.", isCorrect: false }
    ],
    correctAnswer: "Many cities have banned single-use plastic bags to protect marine life.",
    explanation: "Plural subject 'Many cities' requires auxiliary 'have', not 'has'."
  },
  {
    id: "a2_u09_l132_p21",
    type: "listening",
    prompt: "Listen to the urban planning broadcast and identify the green energy milestone:",
    audioText: "Since installing solar panels across municipal buildings in 2021, our city has generated over sixty percent of its electricity from renewable sources.",
    targetSentence: "Over 60% of municipal electricity comes from renewable sources.",
    options: [
      { id: "o1", text: "Over 60% of municipal electricity comes from renewable sources.", isCorrect: true },
      { id: "o2", text: "The city has closed all solar power installations.", isCorrect: false },
      { id: "o3", text: "The city only uses coal-fired power plants.", isCorrect: false }
    ],
    correctAnswer: "Over 60% of municipal electricity comes from renewable sources.",
    explanation: "Audio specifies: 'generated over sixty percent of its electricity from renewable sources.'"
  },
  {
    id: "a2_u09_l132_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Describe two simple changes you have made in your daily life to protect the environment.",
    targetSentence: "I have replaced plastic grocery bags with reusable cloth totes. I also turn off all lights and appliances when leaving a room.",
    audioText: "I have replaced plastic grocery bags with reusable cloth totes. I also turn off all lights and appliances when leaving a room."
  }
];

const l132_review: Exercise[] = [
  {
    id: "a2_u09_l132_r06",
    type: "dialogue_completion",
    prompt: "Complete the household conversation:",
    sourceSentence: "A: Which bin does this clean glass jar go into?\nB: _____",
    targetSentence: "It belongs in the green recycling bin for glass and metal containers.",
    options: [
      { id: "o1", text: "It belongs in the green recycling bin for glass and metal containers.", isCorrect: true },
      { id: "o2", text: "I have graduated from medical school.", isCorrect: false },
      { id: "o3", text: "My flight departs tomorrow morning.", isCorrect: false },
      { id: "o4", text: "We rented a flat last year.", isCorrect: false }
    ],
    correctAnswer: "It belongs in the green recycling bin for glass and metal containers.",
    explanation: "Directly instructs on proper waste separation."
  },
  {
    id: "a2_u09_l132_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a statement about environmental protection:",
    sourceSentence: "Switching to public transport significantly reduces urban air pollution.",
    targetSentence: "Switching to public transport significantly reduces urban air pollution",
    wordBank: ["Switching", "to", "public", "transport", "significantly", "reduces", "urban", "air", "pollution", "reduced", "did"]
  },
  {
    id: "a2_u09_l132_r08",
    type: "translation",
    prompt: "Translate into English: 'प्लास्टिक कचरे को कम करना पर्यावरण के लिए बेहद ज़रूरी है।'",
    sourceSentence: "प्लास्टिक कचरे को कम करना पर्यावरण के लिए बेहद ज़रूरी है।",
    targetSentence: "Reducing plastic waste is crucial for the environment.",
    wordBank: ["Reducing", "plastic", "waste", "is", "crucial", "for", "the", "environment.", "Reduced", "are"]
  },
  {
    id: "a2_u09_l132_r09",
    type: "reading",
    prompt: "Read the eco-label information:\n\"This product is made from 100% biodegradable bamboo fibers. It decomposes naturally within six months without releasing toxic microplastics into the soil.\"\nWhat is a key environmental benefit of this bamboo product?",
    sourceSentence: "What is a key environmental benefit of this bamboo product?",
    targetSentence: "It decomposes naturally in six months without toxic microplastics.",
    options: [
      { id: "o1", text: "It decomposes naturally in six months without toxic microplastics.", isCorrect: true },
      { id: "o2", text: "It lasts forever in landfills.", isCorrect: false },
      { id: "o3", text: "It contains synthetic chemicals.", isCorrect: false }
    ],
    correctAnswer: "It decomposes naturally in six months without toxic microplastics.",
    explanation: "Text notes: 'decomposes naturally within six months without releasing toxic microplastics'."
  },
  {
    id: "a2_u09_l132_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "Small individual daily actions can collectively make a massive environmental impact.",
    targetSentence: "Small individual daily actions can collectively make a massive environmental impact.",
    explanation: "Notice the adverbs 'collectively' and adjective 'massive environmental impact'."
  }
];

const l132_assess: Exercise[] = [
  {
    id: "a2_u09_l132_a06",
    type: "multiple_choice",
    prompt: "Select the sentence with accurate environmental collocation usage:",
    sourceSentence: "Investing in renewable energy sources like wind and solar reduces our dependence on fossil fuels.",
    targetSentence: "Investing in renewable energy sources like wind and solar reduces our dependence on fossil fuels.",
    options: [
      { id: "o1", text: "Investing in renewable energy sources like wind and solar reduces our dependence on fossil fuels.", isCorrect: true },
      { id: "o2", text: "Investing renewable energy is make dependence on fuels fossil.", isCorrect: false },
      { id: "o3", text: "Renewable energy has invested fossil fuel yesterday.", isCorrect: false },
      { id: "o4", text: "We are reduce energy renewable with fossil fuel.", isCorrect: false }
    ],
    correctAnswer: "Investing in renewable energy sources like wind and solar reduces our dependence on fossil fuels.",
    explanation: "Accurate collocations: 'renewable energy sources', 'dependence on fossil fuels'."
  },
  {
    id: "a2_u09_l132_a07",
    type: "speaking",
    prompt: "Read aloud with natural rhythm: 'By conserving water and planting native trees, we can preserve local biodiversity.'",
    sourceSentence: "By conserving water and planting native trees, we can preserve local biodiversity.",
    targetSentence: "By conserving water and planting native trees, we can preserve local biodiversity.",
    audioText: "By conserving water and planting native trees, we can preserve local biodiversity.",
    explanation: "Pronounce 'conserving' (/kənˈsɜːvɪŋ/) and 'biodiversity' (/ˌbaɪəʊdaɪˈvɜːsəti/) clearly."
  },
  {
    id: "a2_u09_l132_a08",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct verb form:",
    sourceSentence: "Our community ____ (plant) over five hundred trees since the conservation campaign started.",
    targetSentence: "Our community has planted over five hundred trees since the conservation campaign started.",
    options: [
      { id: "o1", text: "has planted", isCorrect: true },
      { id: "o2", text: "planted", isCorrect: false },
      { id: "o3", text: "is planting", isCorrect: false },
      { id: "o4", text: "have plant", isCorrect: false }
    ],
    correctAnswer: "has planted",
    explanation: "'Since [past clause]' requires Present Perfect ('has planted') with singular collective noun 'our community'."
  },
  {
    id: "a2_u09_l132_a09",
    type: "mediation",
    prompt: "A Spanish student writes: 'Debemos reciclar más para proteger la naturaleza.' Translate this message effectively for an international school campaign:",
    sourceSentence: "Debemos reciclar más para proteger la naturaleza.",
    targetSentence: "We must recycle more in order to protect the natural environment.",
    options: [
      { id: "o1", text: "We must recycle more in order to protect the natural environment.", isCorrect: true },
      { id: "o2", text: "We are recycle nature yesterday.", isCorrect: false },
      { id: "o3", text: "Recycling is protecting nature tomorrow maybe.", isCorrect: false }
    ],
    correctAnswer: "We must recycle more in order to protect the natural environment.",
    explanation: "Formal campaign tone using modal obligation 'must recycle' + purpose clause 'in order to protect'."
  },
  {
    id: "a2_u09_l132_a10",
    type: "word_ordering",
    prompt: "Form a natural sentence advocating sustainable living:",
    sourceSentence: "Conserving electricity and reducing waste helps protect our planet for future generations.",
    targetSentence: "Conserving electricity and reducing waste helps protect our planet for future generations",
    wordBank: ["Conserving", "electricity", "and", "reducing", "waste", "helps", "protect", "our", "planet", "for", "future", "generations", "helping", "did"]
  }
];

// =========================================================================
// LESSON 133: Hobbies, Arts, Creativity & Musical Interests
// =========================================================================
const l133_practice: Exercise[] = [
  {
    id: "a2_u09_l133_p16",
    type: "reading",
    prompt: "Read the creative artist profile:\n\"Julian has played the acoustic guitar since he was twelve years old. In his spare time, he also experiments with oil painting and pottery. He finds that creative pursuits help him unwind after demanding workdays.\"\nWhat two creative hobbies does Julian enjoy besides playing guitar?",
    sourceSentence: "What two creative hobbies does Julian enjoy besides playing guitar?",
    targetSentence: "Oil painting and pottery.",
    options: [
      { id: "o1", text: "Oil painting and pottery.", isCorrect: true },
      { id: "o2", text: "Playing football and running marathons.", isCorrect: false },
      { id: "o3", text: "Fixing cars and flying planes.", isCorrect: false },
      { id: "o4", text: "Cooking fast food only.", isCorrect: false }
    ],
    correctAnswer: "Oil painting and pottery.",
    explanation: "Text explicitly states: 'he also experiments with oil painting and pottery.'"
  },
  {
    id: "a2_u09_l133_p17",
    type: "speaking",
    prompt: "Practice expressing passion for a creative hobby:\n'I am passionate about photography; I love capturing landscapes during golden hour and editing them digitally.'",
    sourceSentence: "I am passionate about photography; I love capturing landscapes during golden hour and editing them digitally.",
    targetSentence: "I am passionate about photography; I love capturing landscapes during golden hour and editing them digitally.",
    audioText: "I am passionate about photography; I love capturing landscapes during golden hour and editing them digitally.",
    explanation: "Expressive intonation with collocations: 'passionate about', 'capturing landscapes', 'golden hour'."
  },
  {
    id: "a2_u09_l133_p18",
    type: "match_pairs",
    prompt: "Match the creative hobbies with their associated verbs and equipment:",
    options: [
      { id: "m1", text: "pottery / ceramics" },
      { id: "m1_m", text: "shape clay on a wheel and bake in a kiln" },
      { id: "m2", text: "landscape photography" },
      { id: "m2_m", text: "adjust shutter speed and shoot with a camera" },
      { id: "m3", text: "watercolor painting" },
      { id: "m3_m", text: "blend pigments with water on canvas paper" },
      { id: "m4", text: "playing an instrument" },
      { id: "m4_m", text: "practice chords, scales, and read sheet music" }
    ]
  },
  {
    id: "a2_u09_l133_p19",
    type: "mediation",
    prompt: "Translate and explain this creative aspiration from Hindi: 'मुझे हमेशा से गिटार बजाना सीखने का शौक रहा है, इसलिए मैंने पिछले महीने क्लास लेना शुरू किया।'",
    sourceSentence: "मुझे हमेशा से गिटार बजाना सीखने का शौक रहा है, इसलिए मैंने पिछले महीने क्लास लेना शुरू किया।",
    targetSentence: "I have always wanted to learn to play the guitar, so I started taking classes last month.",
    options: [
      { id: "o1", text: "I have always wanted to learn to play the guitar, so I started taking classes last month.", isCorrect: true },
      { id: "o2", text: "I am playing guitar yesterday so class starts tomorrow.", isCorrect: false },
      { id: "o3", text: "I used to want guitar last month now stopped.", isCorrect: false }
    ],
    correctAnswer: "I have always wanted to learn to play the guitar, so I started taking classes last month.",
    explanation: "Natural combination of Present Perfect ('have always wanted') + Past Simple trigger ('started taking classes last month')."
  },
  {
    id: "a2_u09_l133_p20",
    type: "error_correction",
    prompt: "Correct the preposition error in this hobby expression:",
    sourceSentence: "She is very good in playing the piano and composing melodies.",
    targetSentence: "She is very good at playing the piano and composing melodies.",
    options: [
      { id: "o1", text: "She is very good at playing the piano and composing melodies.", isCorrect: true },
      { id: "o2", text: "She is very good on playing the piano and composing melodies.", isCorrect: false },
      { id: "o3", text: "She is very good with play the piano and composing melodies.", isCorrect: false }
    ],
    correctAnswer: "She is very good at playing the piano and composing melodies.",
    explanation: "The correct idiom is 'good at + noun/gerund' (playing)."
  },
  {
    id: "a2_u09_l133_p21",
    type: "listening",
    prompt: "Listen to the musician talk about her journey and choose how long she has played the cello:",
    audioText: "I picked up the cello at age seven, which means I've played classical music for nearly twenty years now.",
    targetSentence: "For nearly twenty years.",
    options: [
      { id: "o1", text: "For nearly twenty years.", isCorrect: true },
      { id: "o2", text: "For seven months only.", isCorrect: false },
      { id: "o3", text: "She started playing last week.", isCorrect: false }
    ],
    correctAnswer: "For nearly twenty years.",
    explanation: "Audio explicitly states: 'I've played classical music for nearly twenty years now.'"
  },
  {
    id: "a2_u09_l133_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: Describe a hobby you enjoy in your free time and why it is meaningful to you.",
    targetSentence: "In my free time, I enjoy watercolor painting because it allows me to express my imagination. I have painted landscapes for over two years.",
    audioText: "In my free time, I enjoy watercolor painting because it allows me to express my imagination. I have painted landscapes for over two years."
  }
];

const l133_review: Exercise[] = [
  {
    id: "a2_u09_l133_r06",
    type: "dialogue_completion",
    prompt: "Complete the casual hobby conversation:",
    sourceSentence: "A: How do you spend your Sunday afternoons?\nB: _____",
    targetSentence: "I usually bake artisanal sourdough bread and listen to classical jazz records.",
    options: [
      { id: "o1", text: "I usually bake artisanal sourdough bread and listen to classical jazz records.", isCorrect: true },
      { id: "o2", text: "I will be born in a small village.", isCorrect: false },
      { id: "o3", text: "My flight was delayed three hours.", isCorrect: false },
      { id: "o4", text: "I complained to the landlord yesterday.", isCorrect: false }
    ],
    correctAnswer: "I usually bake artisanal sourdough bread and listen to classical jazz records.",
    explanation: "Describes habitual leisure activities using rich creative vocabulary."
  },
  {
    id: "a2_u09_l133_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing artistic talent:",
    sourceSentence: "She has developed impressive watercolor painting skills over the years.",
    targetSentence: "She has developed impressive watercolor painting skills over the years",
    wordBank: ["She", "has", "developed", "impressive", "watercolor", "painting", "skills", "over", "the", "years", "did", "develops"]
  },
  {
    id: "a2_u09_l133_r08",
    type: "translation",
    prompt: "Translate into English: 'संगीत मुझे लंबे दिन के बाद तनावमुक्त होने में मदद करता है।'",
    sourceSentence: "संगीत मुझे लंबे दिन के बाद तनावमुक्त होने में मदद करता है।",
    targetSentence: "Music helps me unwind after a long day.",
    wordBank: ["Music", "helps", "me", "unwind", "after", "a", "long", "day.", "stress", "helped"]
  },
  {
    id: "a2_u09_l133_r09",
    type: "reading",
    prompt: "Read the community center workshop notice:\n\"Join our weekend ceramics workshop! No prior experience is necessary. All materials, including clay, glazes, and pottery wheels, are provided by the instructor.\"\nWho can attend this ceramics workshop?",
    sourceSentence: "Who can attend this ceramics workshop?",
    targetSentence: "Anyone, including complete beginners with no prior experience.",
    options: [
      { id: "o1", text: "Anyone, including complete beginners with no prior experience.", isCorrect: true },
      { id: "o2", text: "Only professional sculptors with ten years of experience.", isCorrect: false },
      { id: "o3", text: "Only students enrolled in a university art degree.", isCorrect: false }
    ],
    correctAnswer: "Anyone, including complete beginners with no prior experience.",
    explanation: "Text notes: 'No prior experience is necessary.'"
  },
  {
    id: "a2_u09_l133_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "Playing an instrument requires patience, regular practice, and genuine dedication.",
    targetSentence: "Playing an instrument requires patience, regular practice, and genuine dedication.",
    explanation: "Notice the spelling of 'patience', 'practice', and 'dedication'."
  }
];

const l133_assess: Exercise[] = [
  {
    id: "a2_u09_l133_a06",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the sentence:\n'Marco is keen ____ digital illustration and spends hours sketching on his tablet.'",
    sourceSentence: "Marco is keen ____ digital illustration and spends hours sketching on his tablet.",
    targetSentence: "on",
    options: [
      { id: "o1", text: "on", isCorrect: true },
      { id: "o2", text: "at", isCorrect: false },
      { id: "o3", text: "in", isCorrect: false },
      { id: "o4", text: "with", isCorrect: false }
    ],
    correctAnswer: "on",
    explanation: "The idiom is 'keen on + noun/gerund' (interested in/enthusiastic about)."
  },
  {
    id: "a2_u09_l133_a07",
    type: "speaking",
    prompt: "Read aloud fluently: 'Engaging in creative arts fosters problem-solving and enhances mental well-being.'",
    sourceSentence: "Engaging in creative arts fosters problem-solving and enhances mental well-being.",
    targetSentence: "Engaging in creative arts fosters problem-solving and enhances mental well-being.",
    audioText: "Engaging in creative arts fosters problem-solving and enhances mental well-being.",
    explanation: "Clear pronunciation of 'fosters' (/ˈfɒstəz/) and 'enhances' (/ɪnˈhɑːnsɪz/)."
  },
  {
    id: "a2_u09_l133_a08",
    type: "fill_blank",
    prompt: "Fill in the correct forms:",
    sourceSentence: "He ____ (take) up pottery last autumn and has already ____ (create) a set of bowls.",
    targetSentence: "He took up pottery last autumn and has already created a set of bowls.",
    options: [
      { id: "o1", text: "took / created", isCorrect: true },
      { id: "o2", text: "has taken / creates", isCorrect: false },
      { id: "o3", text: "takes / creating", isCorrect: false },
      { id: "o4", text: "taken / created", isCorrect: false }
    ],
    correctAnswer: "took / created",
    explanation: "Past simple 'took up' for specific past time ('last autumn') + Present Perfect 'has already created'."
  },
  {
    id: "a2_u09_l133_a09",
    type: "mediation",
    prompt: "A Spanish friend says: 'Tocar la guitarra me relaja mucho después del trabajo.' Translate this natural expression into English:",
    sourceSentence: "Tocar la guitarra me relaja mucho después del trabajo.",
    targetSentence: "Playing the guitar relaxes me a lot after work.",
    options: [
      { id: "o1", text: "Playing the guitar relaxes me a lot after work.", isCorrect: true },
      { id: "o2", text: "I was played guitar yesterday after work.", isCorrect: false },
      { id: "o3", text: "Guitar play relaxing me tomorrow work.", isCorrect: false }
    ],
    correctAnswer: "Playing the guitar relaxes me a lot after work.",
    explanation: "Gerund subject 'Playing the guitar' + third-person verb 'relaxes me'."
  },
  {
    id: "a2_u09_l133_a10",
    type: "word_ordering",
    prompt: "Form a grammatical sentence describing hobby benefits:",
    sourceSentence: "Pursuing creative hobbies helps reduce stress and encourages personal growth.",
    targetSentence: "Pursuing creative hobbies helps reduce stress and encourages personal growth",
    wordBank: ["Pursuing", "creative", "hobbies", "helps", "reduce", "stress", "and", "encourages", "personal", "growth", "reduced", "did"]
  }
];

// =========================================================================
// LESSON 134: Future Aspirations, Career Goals & Life Ambitions
// =========================================================================
const l134_practice: Exercise[] = [
  {
    id: "a2_u09_l134_p16",
    type: "reading",
    prompt: "Read the career vision statement:\n\"Over the next five years, Clara aims to transition into sustainable architecture. She plans on completing a master's degree in green urban design and hopes to lead environmentally friendly building projects across Europe.\"\nWhat are Clara's two main career aspirations?",
    sourceSentence: "What are Clara's two main career aspirations?",
    targetSentence: "Completing a master's degree in green urban design and leading sustainable building projects.",
    options: [
      { id: "o1", text: "Completing a master's degree in green urban design and leading sustainable building projects.", isCorrect: true },
      { id: "o2", text: "Retiring from work and moving to the countryside.", isCorrect: false },
      { id: "o3", text: "Opening a traditional fast food restaurant.", isCorrect: false },
      { id: "o4", text: "Stopping her architectural studies completely.", isCorrect: false }
    ],
    correctAnswer: "Completing a master's degree in green urban design and leading sustainable building projects.",
    explanation: "Text notes: 'plans on completing a master's degree... hopes to lead environmentally friendly building projects'."
  },
  {
    id: "a2_u09_l134_p17",
    type: "speaking",
    prompt: "Practice articulating future career ambitions with clear future structures:\n'In the long run, I hope to establish my own technology consultancy and mentor upcoming young engineers.'",
    sourceSentence: "In the long run, I hope to establish my own technology consultancy and mentor upcoming young engineers.",
    targetSentence: "In the long run, I hope to establish my own technology consultancy and mentor upcoming young engineers.",
    audioText: "In the long run, I hope to establish my own technology consultancy and mentor upcoming young engineers.",
    explanation: "Expresses long-term ambition using 'In the long run, I hope to + verb'."
  },
  {
    id: "a2_u09_l134_p18",
    type: "match_pairs",
    prompt: "Match the future aspiration expressions with their verb patterns:",
    options: [
      { id: "m1", text: "hope / aim / aspire" },
      { id: "m1_m", text: "+ to + infinitive (e.g., hope to build / aim to achieve)" },
      { id: "m2", text: "plan on / dream of" },
      { id: "m2_m", text: "+ gerund (-ing) (e.g., plan on launching / dream of living)" },
      { id: "m3", text: "in the near future" },
      { id: "m3_m", text: "within a short time horizon (months)" },
      { id: "m4", text: "in the long run" },
      { id: "m4_m", text: "over a longer, extended lifetime horizon (years)" }
    ]
  },
  {
    id: "a2_u09_l134_p19",
    type: "mediation",
    prompt: "Translate and explain this career ambition statement from Hindi: 'मेरा लक्ष्य अगले दो वर्षों में एक सफल उद्यमी बनना और अपनी खुद की कंपनी शुरू करना है।'",
    sourceSentence: "मेरा लक्ष्य अगले दो वर्षों में एक सफल उद्यमी बनना और अपनी खुद की कंपनी शुरू करना है।",
    targetSentence: "My goal is to become a successful entrepreneur and launch my own company within the next two years.",
    options: [
      { id: "o1", text: "My goal is to become a successful entrepreneur and launch my own company within the next two years.", isCorrect: true },
      { id: "o2", text: "I was entrepreneur two years ago company stopped.", isCorrect: false },
      { id: "o3", text: "Goal is becoming company yesterday.", isCorrect: false }
    ],
    correctAnswer: "My goal is to become a successful entrepreneur and launch my own company within the next two years.",
    explanation: "Natural future ambition formulation ('My goal is to become... within the next two years')."
  },
  {
    id: "a2_u09_l134_p20",
    type: "error_correction",
    prompt: "Correct the verb complementation error in this aspiration sentence:",
    sourceSentence: "She plans on to launch her online boutique next spring.",
    targetSentence: "She plans on launching her online boutique next spring.",
    options: [
      { id: "o1", text: "She plans on launching her online boutique next spring.", isCorrect: true },
      { id: "o2", text: "She plans on to launch her online boutique next spring.", isCorrect: false },
      { id: "o3", text: "She plans to launching her online boutique next spring.", isCorrect: false }
    ],
    correctAnswer: "She plans on launching her online boutique next spring.",
    explanation: "'Plan on' is followed by a preposition + gerund ('on launching'), or 'plan to + base verb' ('plan to launch')."
  },
  {
    id: "a2_u09_l134_p21",
    type: "listening",
    prompt: "Listen to the university graduate discuss his future plans and identify his immediate step:",
    audioText: "While my long-term ambition is to work in international diplomacy, my immediate plan is to complete a six-month internship at the United Nations.",
    targetSentence: "Completing a six-month UN internship.",
    options: [
      { id: "o1", text: "Completing a six-month UN internship.", isCorrect: true },
      { id: "o2", text: "Retiring from public service immediately.", isCorrect: false },
      { id: "o3", text: "Moving back to primary school.", isCorrect: false }
    ],
    correctAnswer: "Completing a six-month UN internship.",
    explanation: "Audio specifies: 'immediate plan is to complete a six-month internship at the United Nations.'"
  },
  {
    id: "a2_u09_l134_p22",
    type: "personal_production",
    prompt: "Write 2 sentences: State one major personal goal you aim to achieve over the next five years and how you plan to prepare for it.",
    targetSentence: "Over the next five years, I aim to become fluent in two foreign languages. I plan on practicing with native speakers and studying every day.",
    audioText: "Over the next five years, I aim to become fluent in two foreign languages. I plan on practicing with native speakers and studying every day."
  }
];

const l134_review: Exercise[] = [
  {
    id: "a2_u09_l134_r06",
    type: "dialogue_completion",
    prompt: "Complete the career coaching dialogue:",
    sourceSentence: "Coach: Where do you see yourself in five years?\nClient: _____",
    targetSentence: "I hope to be managing a senior design team and driving innovative product features.",
    options: [
      { id: "o1", text: "I hope to be managing a senior design team and driving innovative product features.", isCorrect: true },
      { id: "o2", text: "I was born in a coastal village.", isCorrect: false },
      { id: "o3", text: "My flight was canceled due to weather.", isCorrect: false },
      { id: "o4", text: "I have taken antibiotics yesterday.", isCorrect: false }
    ],
    correctAnswer: "I hope to be managing a senior design team and driving innovative product features.",
    explanation: "Professional future ambition formulation."
  },
  {
    id: "a2_u09_l134_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a statement about future career ambitions:",
    sourceSentence: "He aspires to lead international scientific research expeditions in the Arctic.",
    targetSentence: "He aspires to lead international scientific research expeditions in the Arctic",
    wordBank: ["He", "aspires", "to", "lead", "international", "scientific", "research", "expeditions", "in", "the", "Arctic", "aspiring", "did"]
  },
  {
    id: "a2_u09_l134_r08",
    type: "translation",
    prompt: "Translate into English: 'मैं अगले साल अपनी खुद की टेक कंपनी शुरू करने की योजना बना रहा हूँ।'",
    sourceSentence: "मैं अगले साल अपनी खुद की टेक कंपनी शुरू करने की योजना बना रहा हूँ।",
    targetSentence: "I am planning to launch my own tech company next year.",
    wordBank: ["I", "am", "planning", "to", "launch", "my", "own", "tech", "company", "next", "year.", "launched", "did"]
  },
  {
    id: "a2_u09_l134_r09",
    type: "reading",
    prompt: "Read the personal development article:\n\"Setting clear, measurable milestones transforms abstract dreams into achievable reality. Break your five-year vision into quarterly actionable goals.\"\nWhat practical strategy does the article recommend?",
    sourceSentence: "What practical strategy does the article recommend?",
    targetSentence: "Breaking long-term five-year visions into quarterly actionable goals.",
    options: [
      { id: "o1", text: "Breaking long-term five-year visions into quarterly actionable goals.", isCorrect: true },
      { id: "o2", text: "Never setting any deadlines or plans.", isCorrect: false },
      { id: "o3", text: "Waiting for luck without taking action.", isCorrect: false }
    ],
    correctAnswer: "Breaking long-term five-year visions into quarterly actionable goals.",
    explanation: "Text specifies: 'Break your five-year vision into quarterly actionable goals.'"
  },
  {
    id: "a2_u09_l134_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "With dedication and continuous learning, you can achieve your most ambitious career aspirations.",
    targetSentence: "With dedication and continuous learning, you can achieve your most ambitious career aspirations.",
    explanation: "Spelling of 'continuous', 'ambitious', and 'aspirations'."
  }
];

const l134_assess: Exercise[] = [
  {
    id: "a2_u09_l134_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly pairs the verb with its required infinitive or gerund pattern?",
    sourceSentence: "She dreams of opening an eco-friendly bakery and aims to source all ingredients locally.",
    targetSentence: "She dreams of opening an eco-friendly bakery and aims to source all ingredients locally.",
    options: [
      { id: "o1", text: "She dreams of opening an eco-friendly bakery and aims to source all ingredients locally.", isCorrect: true },
      { id: "o2", text: "She dreams to open an eco-friendly bakery and aims sourcing all ingredients.", isCorrect: false },
      { id: "o3", text: "She dreams on opening bakery and aims for source ingredients.", isCorrect: false },
      { id: "o4", text: "She dream of open bakery and aim to sourcing.", isCorrect: false }
    ],
    correctAnswer: "She dreams of opening an eco-friendly bakery and aims to source all ingredients locally.",
    explanation: "'dream of + gerund' (opening) + 'aim + to-infinitive' (to source)."
  },
  {
    id: "a2_u09_l134_a07",
    type: "speaking",
    prompt: "Read aloud with confidence: 'I am determined to expand my professional horizons and embrace new leadership opportunities.'",
    sourceSentence: "I am determined to expand my professional horizons and embrace new leadership opportunities.",
    targetSentence: "I am determined to expand my professional horizons and embrace new leadership opportunities.",
    audioText: "I am determined to expand my professional horizons and embrace new leadership opportunities.",
    explanation: "Stress 'determined' (/dɪˈtɜːmɪnd/) and 'leadership opportunities'."
  },
  {
    id: "a2_u09_l134_a08",
    type: "fill_blank",
    prompt: "Fill in the correct prepositions:",
    sourceSentence: "He plans ____ relocating abroad and hopes ____ establish a global business.",
    targetSentence: "He plans on relocating abroad and hopes to establish a global business.",
    options: [
      { id: "o1", text: "on / to", isCorrect: true },
      { id: "o2", text: "to / for", isCorrect: false },
      { id: "o3", text: "for / on", isCorrect: false },
      { id: "o4", text: "in / at", isCorrect: false }
    ],
    correctAnswer: "on / to",
    explanation: "'plan on + gerund' (relocating) + 'hope + to-infinitive' (to establish)."
  },
  {
    id: "a2_u09_l134_a09",
    type: "mediation",
    prompt: "A Spanish candidate says: 'Aspiro a liderar proyectos internacionales en el futuro.' Translate this into standard professional English for a resume summary:",
    sourceSentence: "Aspiro a liderar proyectos internacionales en el futuro.",
    targetSentence: "I aspire to lead international projects in the future.",
    options: [
      { id: "o1", text: "I aspire to lead international projects in the future.", isCorrect: true },
      { id: "o2", text: "I was leader international yesterday.", isCorrect: false },
      { id: "o3", text: "I am aspire to project future tomorrow.", isCorrect: false }
    ],
    correctAnswer: "I aspire to lead international projects in the future.",
    explanation: "Accurate translation of professional ambition using 'aspire to lead'."
  },
  {
    id: "a2_u09_l134_a10",
    type: "word_ordering",
    prompt: "Form a grammatical sentence describing long-term commitment:",
    sourceSentence: "Continuous skill development is essential for achieving long-term career success.",
    targetSentence: "Continuous skill development is essential for achieving long-term career success",
    wordBank: ["Continuous", "skill", "development", "is", "essential", "for", "achieving", "long-term", "career", "success", "achieved", "did"]
  }
];

// =========================================================================
// LESSON 135: Unit 9 Review, A2 Level Consolidation & Integrated Milestone Mastery
// =========================================================================
const l135_practice: Exercise[] = [
  {
    id: "a2_u09_l135_p16",
    type: "reading",
    prompt: "Read the comprehensive review text:\n\"Over the course of this unit, we have mastered narrating past milestones, contrasting Present Perfect with Past Simple, using time adverbs (just, already, yet, for, since), collaborating professionally, handling travel and customer service situations, discussing health and the environment, and setting future goals.\"\nWhich grammar distinction is fundamental when comparing finished past moments with ongoing life experiences?",
    sourceSentence: "Which grammar distinction is fundamental when comparing finished past moments with ongoing life experiences?",
    targetSentence: "Past Simple specifies exact finished times, while Present Perfect connects past actions to present relevance.",
    options: [
      { id: "o1", text: "Past Simple specifies exact finished times, while Present Perfect connects past actions to present relevance.", isCorrect: true },
      { id: "o2", text: "Both tenses must always use 'will' and 'going to'.", isCorrect: false },
      { id: "o3", text: "There is no difference between Past Simple and Present Perfect.", isCorrect: false },
      { id: "o4", text: "Present Perfect can only be used with future dates.", isCorrect: false }
    ],
    correctAnswer: "Past Simple specifies exact finished times, while Present Perfect connects past actions to present relevance.",
    explanation: "Core CEFR A2 distinction: specific finished past (Past Simple) vs. life duration/unspecified experience up to now (Present Perfect)."
  },
  {
    id: "a2_u09_l135_p17",
    type: "speaking",
    prompt: "Deliver a comprehensive personal summary combining past background, present experience, and future ambitions:\n'I grew up in an active coastal town. I have worked in technology for five years, and in the future, I aim to lead sustainable energy initiatives.'",
    sourceSentence: "I grew up in an active coastal town. I have worked in technology for five years, and in the future, I aim to lead sustainable energy initiatives.",
    targetSentence: "I grew up in an active coastal town. I have worked in technology for five years, and in the future, I aim to lead sustainable energy initiatives.",
    audioText: "I grew up in an active coastal town. I have worked in technology for five years, and in the future, I aim to lead sustainable energy initiatives.",
    explanation: "Integrates past narrative ('grew up'), Present Perfect duration ('have worked for five years'), and future aspiration ('aim to lead')."
  },
  {
    id: "a2_u09_l135_p18",
    type: "match_pairs",
    prompt: "Match Unit 9 key structures with their communicative functions:",
    options: [
      { id: "m1", text: "used to + verb" },
      { id: "m1_m", text: "past habits or states that are no longer true" },
      { id: "m2", text: "have you ever...?" },
      { id: "m2_m", text: "asking about life experiences at any unspecified time" },
      { id: "m3", text: "for vs. since" },
      { id: "m3_m", text: "total duration of time vs. specific starting point in the past" },
      { id: "m4", text: "should / had better / why don't you" },
      { id: "m4_m", text: "giving advice, warnings, and polite recommendations" }
    ]
  },
  {
    id: "a2_u09_l135_p19",
    type: "mediation",
    prompt: "Translate and summarize this multifaceted personal profile from Hindi for an international community intro: 'मैं दिल्ली में पला-बढ़ा, लेकिन पिछले तीन सालों से लंदन में रह रहा हूँ। मैं भविष्य में एक गैर-सरकारी संगठन (NGO) शुरू करने की योजना बना रहा हूँ।'",
    sourceSentence: "मैं दिल्ली में पला-बढ़ा, लेकिन पिछले तीन सालों से लंदन में रह रहा हूँ। मैं भविष्य में एक गैर-सरकारी संगठन (NGO) शुरू करने की योजना बना रहा हूँ।",
    targetSentence: "I grew up in Delhi, but I have lived in London for the past three years. I plan on launching an NGO in the future.",
    options: [
      { id: "o1", text: "I grew up in Delhi, but I have lived in London for the past three years. I plan on launching an NGO in the future.", isCorrect: true },
      { id: "o2", text: "I am growing up in Delhi and live London yesterday NGO tomorrow.", isCorrect: false },
      { id: "o3", text: "I used to live London since three years and born Delhi.", isCorrect: false }
    ],
    correctAnswer: "I grew up in Delhi, but I have lived in London for the past three years. I plan on launching an NGO in the future.",
    explanation: "Flawlessly integrates past simple ('grew up'), present perfect duration ('have lived for three years'), and future planning ('plan on launching')."
  },
  {
    id: "a2_u09_l135_p20",
    type: "error_correction",
    prompt: "Identify and fix the double-error in this synthesis sentence:",
    sourceSentence: "I have lived here since five years and I didn't received the letter yet.",
    targetSentence: "I have lived here for five years and I haven't received the letter yet.",
    options: [
      { id: "o1", text: "I have lived here for five years and I haven't received the letter yet.", isCorrect: true },
      { id: "o2", text: "I lived here since five years and I haven't receive letter yet.", isCorrect: false },
      { id: "o3", text: "I am living here from five years and didn't received yet.", isCorrect: false }
    ],
    correctAnswer: "I have lived here for five years and I haven't received the letter yet.",
    explanation: "'For five years' (duration) + 'haven't received ... yet' (Present Perfect negative with 'yet')."
  },
  {
    id: "a2_u09_l135_p21",
    type: "listening",
    prompt: "Listen to the graduation valedictorian speech and identify the three life phases mentioned:",
    audioText: "Looking back, our time in high school shaped our character. Over the past four years at university, we have acquired invaluable skills. Ahead of us lies the opportunity to shape the future of sustainable technology.",
    targetSentence: "Past high school formation, university skill acquisition up to now, and future tech leadership.",
    options: [
      { id: "o1", text: "Past high school formation, university skill acquisition up to now, and future tech leadership.", isCorrect: true },
      { id: "o2", text: "Only childhood primary school memories.", isCorrect: false },
      { id: "o3", text: "Retirement from public life after forty years.", isCorrect: false }
    ],
    correctAnswer: "Past high school formation, university skill acquisition up to now, and future tech leadership.",
    explanation: "The speech connects past, present accomplishments, and future aspirations."
  },
  {
    id: "a2_u09_l135_p22",
    type: "personal_production",
    prompt: "Write 3 sentences: 1) Where you grew up and a past habit, 2) Something you have done for several years, 3) A future ambition you plan to achieve.",
    targetSentence: "I grew up in a vibrant city, and I used to play basketball every weekend. I have studied web design for two years. In the near future, I plan on launching my own digital studio.",
    audioText: "I grew up in a vibrant city, and I used to play basketball every weekend. I have studied web design for two years. In the near future, I plan on launching my own digital studio."
  }
];

const l135_review: Exercise[] = [
  {
    id: "a2_u09_l135_r06",
    type: "dialogue_completion",
    prompt: "Complete the capstone interview dialogue:",
    sourceSentence: "Interviewer: Could you give us an overview of your journey and where you hope to head next?\nCandidate: _____",
    targetSentence: "I graduated in 2020 and have worked in customer solutions for three years. Moving forward, I aim to lead international projects.",
    options: [
      { id: "o1", text: "I graduated in 2020 and have worked in customer solutions for three years. Moving forward, I aim to lead international projects.", isCorrect: true },
      { id: "o2", text: "I was born yesterday and will take antibiotics.", isCorrect: false },
      { id: "o3", text: "My flight has delayed three days ago.", isCorrect: false },
      { id: "o4", text: "I used to be graduating next week.", isCorrect: false }
    ],
    correctAnswer: "I graduated in 2020 and have worked in customer solutions for three years. Moving forward, I aim to lead international projects.",
    explanation: "Seamlessly synthesizes Unit 9 narrative competencies."
  },
  {
    id: "a2_u09_l135_r07",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence demonstrating mastery of present perfect and past simple contrast:",
    sourceSentence: "She has visited six countries this year, but she went to Iceland last November.",
    targetSentence: "She has visited six countries this year, but she went to Iceland last November",
    wordBank: ["She", "has", "visited", "six", "countries", "this", "year,", "but", "she", "went", "to", "Iceland", "last", "November", "has gone", "did"]
  },
  {
    id: "a2_u09_l135_r08",
    type: "translation",
    prompt: "Translate into English: 'हमने इस यूनिट में जीवन के अनुभवों, कार्यस्थल संवाद और भविष्य की योजनाओं को गहराई से सीखा है।'",
    sourceSentence: "हमने इस यूनिट में जीवन के अनुभवों, कार्यस्थल संवाद और भविष्य की योजनाओं को गहराई से सीखा है।",
    targetSentence: "In this unit, we have deeply learned about life experiences, workplace communication, and future plans.",
    wordBank: ["In", "this", "unit,", "we", "have", "deeply", "learned", "about", "life", "experiences,", "workplace", "communication,", "and", "future", "plans.", "did", "were"]
  },
  {
    id: "a2_u09_l135_r09",
    type: "reading",
    prompt: "Read the pedagogical synthesis:\n\"Mastery of A2 English requires not merely memorizing isolated grammatical rules, but dynamically integrating them into spontaneous conversation, professional collaboration, empathetic problem-solving, and reflective life storytelling.\"\nWhat is the ultimate goal of A2 curriculum integration?",
    sourceSentence: "What is the ultimate goal of A2 curriculum integration?",
    targetSentence: "Dynamically integrating language skills into spontaneous conversation and real-world communication.",
    options: [
      { id: "o1", text: "Dynamically integrating language skills into spontaneous conversation and real-world communication.", isCorrect: true },
      { id: "o2", text: "Memorizing isolated grammar rules without speaking.", isCorrect: false },
      { id: "o3", text: "Skipping vocabulary and reading comprehension.", isCorrect: false }
    ],
    correctAnswer: "Dynamically integrating language skills into spontaneous conversation and real-world communication.",
    explanation: "Text emphasizes: 'dynamically integrating them into spontaneous conversation, professional collaboration, empathetic problem-solving, and reflective life storytelling.'"
  },
  {
    id: "a2_u09_l135_r10",
    type: "listen_and_type",
    prompt: "Listen and write the sentence accurately:",
    audioText: "Congratulations on successfully mastering all core linguistic milestones across Unit Nine.",
    targetSentence: "Congratulations on successfully mastering all core linguistic milestones across Unit Nine.",
    explanation: "Spelling of 'Congratulations', 'successfully', 'linguistic', and 'milestones'."
  }
];

const l135_assess: Exercise[] = [
  {
    id: "a2_u09_l135_a06",
    type: "multiple_choice",
    prompt: "Which multi-clause sentence correctly demonstrates complete grammatical harmony across tenses and prepositions?",
    sourceSentence: "Although I grew up in a small village, I have lived in this metropolitan city since 2019, and I plan on launching my own startup next year.",
    targetSentence: "Although I grew up in a small village, I have lived in this metropolitan city since 2019, and I plan on launching my own startup next year.",
    options: [
      { id: "o1", text: "Although I grew up in a small village, I have lived in this metropolitan city since 2019, and I plan on launching my own startup next year.", isCorrect: true },
      { id: "o2", text: "Although I have grown up in small village, I live here for 2019 and plan to launching startup.", isCorrect: false },
      { id: "o3", text: "I used to grow up in village while living since five years ago tomorrow.", isCorrect: false },
      { id: "o4", text: "When I was born village, I am living here since and plan on launch.", isCorrect: false }
    ],
    correctAnswer: "Although I grew up in a small village, I have lived in this metropolitan city since 2019, and I plan on launching my own startup next year.",
    explanation: "Flawless synthesis: Past Simple narrative ('grew up'), Present Perfect with 'since [year]' ('have lived since 2019'), and future plan ('plan on launching')."
  },
  {
    id: "a2_u09_l135_a07",
    type: "speaking",
    prompt: "Read aloud with mastery, conviction, and natural cadence: 'I have achieved significant personal milestones, and I am fully equipped to navigate complex conversations in English.'",
    sourceSentence: "I have achieved significant personal milestones, and I am fully equipped to navigate complex conversations in English.",
    targetSentence: "I have achieved significant personal milestones, and I am fully equipped to navigate complex conversations in English.",
    audioText: "I have achieved significant personal milestones, and I am fully equipped to navigate complex conversations in English.",
    explanation: "Pronounce 'achieved' (/əˈtʃiːvd/), 'equipped' (/ɪˈkwɪpt/), and 'navigate' (/ˈnævɪɡeɪt/) with confidence."
  },
  {
    id: "a2_u09_l135_a08",
    type: "fill_blank",
    prompt: "Fill in the correct prepositions across this integrated sentence:",
    sourceSentence: "She has been passionate ____ environmental conservation ____ she participated ____ a youth summit in 2021.",
    targetSentence: "She has been passionate about environmental conservation since she participated in a youth summit in 2021.",
    options: [
      { id: "o1", text: "about / since / in", isCorrect: true },
      { id: "o2", text: "for / for / at", isCorrect: false },
      { id: "o3", text: "with / when / on", isCorrect: false },
      { id: "o4", text: "of / since / with", isCorrect: false }
    ],
    correctAnswer: "about / since / in",
    explanation: "Collocations: 'passionate about', 'since [past event]', 'participated in'."
  },
  {
    id: "a2_u09_l135_a09",
    type: "mediation",
    prompt: "A bilingual educator asks you to summarize the core learning outcomes of Unit 9 for students in Spanish: 'Hemos consolidado el uso del presente perfecto, la resolución de conflictos cotidianos y la expresión de metas futuras con precisión.' Translate this summary into natural, professional English:",
    sourceSentence: "Hemos consolidado el uso del presente perfecto, la resolución de conflictos cotidianos y la expresión de metas futuras con precisión.",
    targetSentence: "We have consolidated the use of the Present Perfect, everyday problem-solving, and expressing future goals with precision.",
    options: [
      { id: "o1", text: "We have consolidated the use of the Present Perfect, everyday problem-solving, and expressing future goals with precision.", isCorrect: true },
      { id: "o2", text: "We are consolidating present perfect yesterday and future tomorrow.", isCorrect: false },
      { id: "o3", text: "Unit Nine is finished with no goals.", isCorrect: false }
    ],
    correctAnswer: "We have consolidated the use of the Present Perfect, everyday problem-solving, and expressing future goals with precision.",
    explanation: "Professional academic summary translation."
  },
  {
    id: "a2_u09_l135_a10",
    type: "word_ordering",
    prompt: "Form a celebratory capstone sentence:",
    sourceSentence: "Consistent practice and dedicated learning lead to lasting fluency and communicative confidence.",
    targetSentence: "Consistent practice and dedicated learning lead to lasting fluency and communicative confidence",
    wordBank: ["Consistent", "practice", "and", "dedicated", "learning", "lead", "to", "lasting", "fluency", "and", "communicative", "confidence", "leading", "did"]
  }
];

// Execute enrichment for Lessons 131–135
enrichUnit9LessonData('lesson_a2_9_131', LESSON_A2_9_131_DATA, l131_practice, l131_review, l131_assess);
enrichUnit9LessonData('lesson_a2_9_132', LESSON_A2_9_132_DATA, l132_practice, l132_review, l132_assess);
enrichUnit9LessonData('lesson_a2_9_133', LESSON_A2_9_133_DATA, l133_practice, l133_review, l133_assess);
enrichUnit9LessonData('lesson_a2_9_134', LESSON_A2_9_134_DATA, l134_practice, l134_review, l134_assess);
enrichUnit9LessonData('lesson_a2_9_135', LESSON_A2_9_135_DATA, l135_practice, l135_review, l135_assess);
