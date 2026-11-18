import { Exercise } from '../src/types';
import { LESSON_A2_11_161_DATA } from '../src/data/lessons/lesson_a2_11_161';
import { LESSON_A2_11_162_DATA } from '../src/data/lessons/lesson_a2_11_162';
import { LESSON_A2_11_163_DATA } from '../src/data/lessons/lesson_a2_11_163';
import { LESSON_A2_11_164_DATA } from '../src/data/lessons/lesson_a2_11_164';
import { LESSON_A2_11_165_DATA } from '../src/data/lessons/lesson_a2_11_165';
import { enrichUnit11LessonData } from './enrich_unit11_helper';

// =========================================================================
// LESSON 161: Personal Journeys and Travel Stories
// =========================================================================
const l161_practice: Exercise[] = [
  {
    id: "a2_u11_l161_p16",
    type: "reading",
    prompt: "Read the travel story excerpt and answer the question:\n\"Travel Diary:\nWhile we were hiking through the mountain pass in Switzerland, dense fog suddenly descended upon the trail. As soon as the visibility dropped, our guide instructed us to stay close together. Meanwhile, local rescue rangers signaled from a nearby shelter. Thanks to their quick assistance, we reached the warm alpine hut safely before sunset.\"\nWhat happened while the hikers were crossing the mountain pass?",
    sourceSentence: "What happened while the hikers were crossing the mountain pass?",
    targetSentence: "Dense fog suddenly descended upon the trail.",
    options: [
      { id: "o1", text: "Dense fog suddenly descended upon the trail.", isCorrect: true },
      { id: "o2", text: "A heavy snowstorm trapped them for a month.", isCorrect: false },
      { id: "o3", text: "They lost all their luggage at the airport.", isCorrect: false },
      { id: "o4", text: "The guide decided to turn back to the city.", isCorrect: false }
    ],
    correctAnswer: "Dense fog suddenly descended upon the trail.",
    explanation: "The text states: 'While we were hiking through the mountain pass in Switzerland, dense fog suddenly descended upon the trail.'"
  },
  {
    id: "a2_u11_l161_p17",
    type: "speaking",
    prompt: "Speak clearly and recount an interesting event from a trip using past continuous and past simple:",
    sourceSentence: "While I was traveling by train across Italy, I met a friendly local artist who recommended the most wonderful hidden bakery in Florence.",
    targetSentence: "While I was traveling by train across Italy, I met a friendly local artist who recommended the most wonderful hidden bakery in Florence.",
    audioText: "While I was traveling by train across Italy, I met a friendly local artist who recommended the most wonderful hidden bakery in Florence.",
    explanation: "Fluently connect background action ('While I was traveling') with foreground event ('I met')."
  },
  {
    id: "a2_u11_l161_p18",
    type: "match_pairs",
    prompt: "Match the narrative connectors with their storytelling functions:",
    options: [
      { id: "m1", text: "While / As" },
      { id: "m1_m", text: "introducing an ongoing continuous background action" },
      { id: "m2", text: "As soon as" },
      { id: "m2_m", text: "indicating an immediate subsequent action" },
      { id: "m3", text: "Meanwhile" },
      { id: "m3_m", text: "describing another event happening at the same time" },
      { id: "m4", text: "Eventually / In the end" },
      { id: "m4_m", text: "introducing the final outcome or resolution" }
    ]
  },
  {
    id: "a2_u11_l161_p19",
    type: "mediation",
    prompt: "Help your friend translate this travel memory into English: 'जब हम द्वीप की खोज कर रहे थे, तभी अचानक हमारी नाव का इंजन बंद हो गया।' Choose the best translation:",
    sourceSentence: "जब हम द्वीप की खोज कर रहे थे, तभी अचानक हमारी नाव का इंजन बंद हो गया।",
    targetSentence: "While we were exploring the island, our boat engine suddenly stopped working.",
    options: [
      { id: "o1", text: "While we were exploring the island, our boat engine suddenly stopped working.", isCorrect: true },
      { id: "o2", text: "When boat engine stopped we was exploring island.", isCorrect: false },
      { id: "o3", text: "We explore island because boat engine was working.", isCorrect: false }
    ],
    correctAnswer: "While we were exploring the island, our boat engine suddenly stopped working.",
    explanation: "'While we were exploring... our boat engine suddenly stopped working' uses past continuous and past simple correctly."
  },
  {
    id: "a2_u11_l161_p20",
    type: "error_correction",
    prompt: "Correct the tense combination mistake in this narrative:",
    sourceSentence: "While she was waited for the bus, it was starting to rain heavily.",
    targetSentence: "While she was waiting for the bus, it started to rain heavily.",
    options: [
      { id: "o1", text: "While she was waiting for the bus, it started to rain heavily.", isCorrect: true },
      { id: "o2", text: "While she waited for the bus, it was starting raining heavily.", isCorrect: false },
      { id: "o3", text: "While she is waiting for bus, it start raining heavily.", isCorrect: false }
    ],
    correctAnswer: "While she was waiting for the bus, it started to rain heavily.",
    explanation: "Use Past Continuous ('was waiting') for the ongoing background action and Past Simple ('started') for the interrupting event."
  },
  {
    id: "a2_u11_l161_p21",
    type: "listening",
    prompt: "Listen to the traveler's story and identify what unexpected thing happened at the train station:",
    audioText: "As soon as we arrived at Kyoto Station, a local student noticed we looked confused and kindly guided us directly to our traditional inn.",
    targetSentence: "A local student helped them find their traditional inn.",
    options: [
      { id: "o1", text: "A local student helped them find their traditional inn.", isCorrect: true },
      { id: "o2", text: "They missed their bullet train to Tokyo.", isCorrect: false },
      { id: "o3", text: "The station was closed for holiday renovations.", isCorrect: false }
    ],
    correctAnswer: "A local student helped them find their traditional inn.",
    explanation: "The traveler shares that a local student kindly guided them to their inn."
  },
  {
    id: "a2_u11_l161_p22",
    type: "personal_production",
    prompt: "Write 2 sentences recounting a memorable trip or journey you experienced:",
    targetSentence: "Last summer, while I was visiting a coastal village, I went on an early morning boat tour to watch dolphins. As soon as the sun rose over the horizon, several pods of dolphins leaped beside our boat.",
    audioText: "Last summer, while I was visiting a coastal village, I went on an early morning boat tour to watch dolphins. As soon as the sun rose over the horizon, several pods of dolphins leaped beside our boat."
  }
];

const l161_review: Exercise[] = [
  {
    id: "a2_u11_l161_r6",
    type: "fill_blank",
    prompt: "Complete the narrative sentence: 'As ___ as we landed in Madrid, we collected our rental car and drove to the countryside.'",
    sourceSentence: "As soon as we landed in Madrid, we collected our rental car and drove to the countryside.",
    targetSentence: "As soon as we landed in Madrid, we collected our rental car and drove to the countryside.",
    options: [
      { id: "o1", text: "soon", isCorrect: true },
      { id: "o2", text: "long", isCorrect: false },
      { id: "o3", text: "far", isCorrect: false },
      { id: "o4", text: "well", isCorrect: false }
    ],
    correctAnswer: "soon",
    explanation: "'As soon as' means immediately after an event occurs."
  },
  {
    id: "a2_u11_l161_r7",
    type: "word_ordering",
    prompt: "Reconstruct the narrative sentence:",
    targetSentence: "While we were walking through the old town we discovered a quaint bookstore.",
    options: [
      { id: "w1", text: "While" },
      { id: "w2", text: "we" },
      { id: "w3", text: "were" },
      { id: "w4", text: "walking" },
      { id: "w5", text: "through" },
      { id: "w6", text: "the" },
      { id: "w7", text: "old" },
      { id: "w8", text: "town" },
      { id: "w9", text: "we" },
      { id: "w10", text: "discovered" },
      { id: "w11", text: "a" },
      { id: "w12", text: "quaint" },
      { id: "w13", text: "bookstore." }
    ],
    correctAnswer: "While we were walking through the old town we discovered a quaint bookstore."
  },
  {
    id: "a2_u11_l161_r8",
    type: "dialogue_completion",
    prompt: "Complete the travel conversation:",
    sourceSentence: "How was your hiking trip in the national park?",
    targetSentence: "It was unforgettable! While we were ascending the ridge, we saw a herd of wild deer grazing near the lake.",
    options: [
      { id: "o1", text: "It was unforgettable! While we were ascending the ridge, we saw a herd of wild deer grazing near the lake.", isCorrect: true },
      { id: "o2", text: "National parks are protected conservation areas.", isCorrect: false },
      { id: "o3", text: "I do not know what mountains look like.", isCorrect: false }
    ],
    correctAnswer: "It was unforgettable! While we were ascending the ridge, we saw a herd of wild deer grazing near the lake.",
    explanation: "Engaging storytelling using the past continuous background clause."
  },
  {
    id: "a2_u11_l161_r9",
    type: "translation",
    prompt: "Translate into English: 'जब मैं हवाई अड्डे पर इंतजार कर रहा था, तब मैंने एक पुराना दोस्त देखा।' Choose the best translation:",
    sourceSentence: "जब मैं हवाई अड्डे पर इंतजार कर रहा था, तब मैंने एक पुराना दोस्त देखा।",
    targetSentence: "While I was waiting at the airport, I saw an old friend.",
    options: [
      { id: "o1", text: "While I was waiting at the airport, I saw an old friend.", isCorrect: true },
      { id: "o2", text: "When I waited at airport I was seeing friend.", isCorrect: false },
      { id: "o3", text: "I was see old friend while airport waiting.", isCorrect: false }
    ],
    correctAnswer: "While I was waiting at the airport, I saw an old friend.",
    explanation: "'While I was waiting at the airport, I saw an old friend' is grammatically accurate."
  },
  {
    id: "a2_u11_l161_r10",
    type: "multiple_choice",
    prompt: "Which sentence correctly demonstrates past narrative sequence?",
    targetSentence: "As soon as the storm passed, we continued our road trip along the coast.",
    options: [
      { id: "o1", text: "As soon as the storm passed, we continued our road trip along the coast.", isCorrect: true },
      { id: "o2", text: "As soon as the storm was passing, we was continuing road trip.", isCorrect: false },
      { id: "o3", text: "As soon as storm pass, we continue road trip yesterday.", isCorrect: false }
    ],
    correctAnswer: "As soon as the storm passed, we continued our road trip along the coast.",
    explanation: "'As soon as' with two simple past actions shows immediate sequence."
  }
];

const l161_assess: Exercise[] = [
  {
    id: "a2_u11_l161_a6",
    type: "listening",
    prompt: "Listen to the travel anecdote and answer: What happened when the tourists reached the summit?",
    audioText: "We were hiking for four grueling hours in the cold, but as soon as we reached the mountain summit, a breathtaking double rainbow appeared across the entire valley.",
    targetSentence: "A breathtaking double rainbow appeared across the valley.",
    options: [
      { id: "o1", text: "A breathtaking double rainbow appeared across the valley.", isCorrect: true },
      { id: "o2", text: "It started hailing and they lost their backpacks.", isCorrect: false },
      { id: "o3", text: "They found a five-star luxury hotel at the top.", isCorrect: false }
    ],
    correctAnswer: "A breathtaking double rainbow appeared across the valley.",
    explanation: "The speaker highlights that a double rainbow appeared upon reaching the summit."
  },
  {
    id: "a2_u11_l161_a7",
    type: "error_correction",
    prompt: "Correct the conjunction error: 'During we were flying to London, we watched two movies.'",
    sourceSentence: "During we were flying to London, we watched two movies.",
    targetSentence: "While we were flying to London, we watched two movies.",
    options: [
      { id: "o1", text: "While we were flying to London, we watched two movies.", isCorrect: true },
      { id: "o2", text: "During flying to London we was watched movies.", isCorrect: false },
      { id: "o3", text: "During we flew to London we watching movies.", isCorrect: false }
    ],
    correctAnswer: "While we were flying to London, we watched two movies.",
    explanation: "Use 'while' before a subject + verb clause ('we were flying'); 'during' must be followed by a noun phrase ('during the flight')."
  },
  {
    id: "a2_u11_l161_a8",
    type: "mediation",
    prompt: "Explain this travel experience in English to your companion: 'जैसे ही हम होटल पहुंचे, कर्मचारियों ने हमारा स्वागत गर्म चाय से किया।' Choose the best translation:",
    sourceSentence: "जैसे ही हम होटल पहुंचे, कर्मचारियों ने हमारा स्वागत गर्म चाय से किया।",
    targetSentence: "As soon as we arrived at the hotel, the staff welcomed us with warm tea.",
    options: [
      { id: "o1", text: "As soon as we arrived at the hotel, the staff welcomed us with warm tea.", isCorrect: true },
      { id: "o2", text: "Hotel staff never gave us any tea because we arrived late.", isCorrect: false },
      { id: "o3", text: "We arrived hotel while staff was drinking tea alone.", isCorrect: false }
    ],
    correctAnswer: "As soon as we arrived at the hotel, the staff welcomed us with warm tea.",
    explanation: "'As soon as we arrived... the staff welcomed us with warm tea' precisely translates the Hindi statement."
  },
  {
    id: "a2_u11_l161_a9",
    type: "speaking",
    prompt: "Speak clearly: Narrate a brief travel incident where things did not go according to plan.",
    sourceSentence: "While we were driving to the beach, our GPS lost satellite connection, so we had to ask a local shopkeeper for directions.",
    targetSentence: "While we were driving to the beach, our GPS lost satellite connection, so we had to ask a local shopkeeper for directions.",
    audioText: "While we were driving to the beach, our GPS lost satellite connection, so we had to ask a local shopkeeper for directions.",
    explanation: "Fluent storytelling with natural pace and pauses."
  },
  {
    id: "a2_u11_l161_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing the most exciting city or natural landmark you have ever visited:",
    targetSentence: "Last year, I traveled to the Grand Canyon in Arizona. While I was standing on the canyon rim at sunrise, the colorful rock layers looked absolutely majestic in the morning light.",
    audioText: "Last year, I traveled to the Grand Canyon in Arizona. While I was standing on the canyon rim at sunrise, the colorful rock layers looked absolutely majestic in the morning light."
  }
];

// =========================================================================
// LESSON 162: Environmental Awareness
// =========================================================================
const l162_practice: Exercise[] = [
  {
    id: "a2_u11_l162_p16",
    type: "reading",
    prompt: "Read the environmental community newsletter and answer the question:\n\"Green Neighborhood Initiative:\nIf every household reduces electricity consumption by just 10%, our neighborhood will prevent over 200 metric tons of carbon emissions annually. Unless we take proactive steps to recycle organic food waste and conserve water, local landfills will reach full capacity within three years. Please sign up for our free composting workshop this Saturday!\"\nWhat will happen if residents do NOT take proactive steps to recycle and conserve?",
    sourceSentence: "What will happen if residents do NOT take proactive steps to recycle and conserve?",
    targetSentence: "Local landfills will reach full capacity within three years.",
    options: [
      { id: "o1", text: "Local landfills will reach full capacity within three years.", isCorrect: true },
      { id: "o2", text: "Electricity bills will drop to zero.", isCorrect: false },
      { id: "o3", text: "The community workshop will be held every day.", isCorrect: false },
      { id: "o4", text: "The city will plant ten million trees tomorrow.", isCorrect: false }
    ],
    correctAnswer: "Local landfills will reach full capacity within three years.",
    explanation: "The text warns: 'Unless we take proactive steps... local landfills will reach full capacity within three years.'"
  },
  {
    id: "a2_u11_l162_p17",
    type: "speaking",
    prompt: "Speak clearly and state an environmental cause-and-effect relationship using the first conditional:",
    sourceSentence: "If we plant more native trees in our urban parks, we will improve local air quality and provide habitats for birds.",
    targetSentence: "If we plant more native trees in our urban parks, we will improve local air quality and provide habitats for birds.",
    audioText: "If we plant more native trees in our urban parks, we will improve local air quality and provide habitats for birds.",
    explanation: "Fluently deliver conditional clauses ('If we plant... we will improve')."
  },
  {
    id: "a2_u11_l162_p18",
    type: "match_pairs",
    prompt: "Match the environmental conservation terms with their definitions:",
    options: [
      { id: "m1", text: "carbon footprint" },
      { id: "m1_m", text: "the total amount of greenhouse gases generated by our actions" },
      { id: "m2", text: "renewable energy" },
      { id: "m2_m", text: "energy from natural sources that replenish faster than consumed" },
      { id: "m3", text: "single-use plastics" },
      { id: "m3_m", text: "disposable items used only once before being discarded" },
      { id: "m4", text: "composting" },
      { id: "m4_m", text: "recycling organic waste into nutrient-rich soil" }
    ]
  },
  {
    id: "a2_u11_l162_p19",
    type: "mediation",
    prompt: "Help your friend translate this conservation message into English: 'यदि हम ऊर्जा बचाते हैं और प्लास्टिक का उपयोग कम करते हैं, तो हम पर्यावरण की रक्षा कर सकते हैं।' Choose the best translation:",
    sourceSentence: "यदि हम ऊर्जा बचाते हैं और प्लास्टिक का उपयोग कम करते हैं, तो हम पर्यावरण की रक्षा कर सकते हैं।",
    targetSentence: "If we conserve energy and reduce plastic usage, we can protect the environment.",
    options: [
      { id: "o1", text: "If we conserve energy and reduce plastic usage, we can protect the environment.", isCorrect: true },
      { id: "o2", text: "We never protect environment because plastic is good.", isCorrect: false },
      { id: "o3", text: "If we wasting energy environment protects itself.", isCorrect: false }
    ],
    correctAnswer: "If we conserve energy and reduce plastic usage, we can protect the environment.",
    explanation: "'If we conserve energy and reduce plastic usage, we can protect the environment' is grammatically exact."
  },
  {
    id: "a2_u11_l162_p20",
    type: "error_correction",
    prompt: "Correct the negative conditional mistake: 'Unless we don't reduce waste, pollution will increase.'",
    sourceSentence: "Unless we don't reduce waste, pollution will increase.",
    targetSentence: "Unless we reduce waste, pollution will increase.",
    options: [
      { id: "o1", text: "Unless we reduce waste, pollution will increase.", isCorrect: true },
      { id: "o2", text: "Unless we won't reduce waste, pollution will increase.", isCorrect: false },
      { id: "o3", text: "Unless we not reduce waste, pollution will increase.", isCorrect: false }
    ],
    correctAnswer: "Unless we reduce waste, pollution will increase.",
    explanation: "'Unless' already means 'if not', so do not use a negative verb ('don't reduce') in the unless-clause."
  },
  {
    id: "a2_u11_l162_p21",
    type: "listening",
    prompt: "Listen to the ecologist's presentation and answer: What simple habit saves the most household water?",
    audioText: "Fixing leaky faucets and turning off the tap while brushing your teeth can save up to two thousand gallons of clean water per household every single year.",
    targetSentence: "Fixing leaky faucets and turning off the tap while brushing teeth.",
    options: [
      { id: "o1", text: "Fixing leaky faucets and turning off the tap while brushing teeth.", isCorrect: true },
      { id: "o2", text: "Washing the car three times every day.", isCorrect: false },
      { id: "o3", text: "Leaving sprinklers running continuously all night.", isCorrect: false }
    ],
    correctAnswer: "Fixing leaky faucets and turning off the tap while brushing teeth.",
    explanation: "The ecologist emphasizes fixing faucet leaks and turning off taps while brushing."
  },
  {
    id: "a2_u11_l162_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing one green habit you practice to protect the natural environment:",
    targetSentence: "I carry a reusable stainless-steel water bottle and cloth shopping bags whenever I leave home. By avoiding single-use plastics, I help reduce municipal landfill waste.",
    audioText: "I carry a reusable stainless-steel water bottle and cloth shopping bags whenever I leave home. By avoiding single-use plastics, I help reduce municipal landfill waste."
  }
];

const l162_review: Exercise[] = [
  {
    id: "a2_u11_l162_r6",
    type: "fill_blank",
    prompt: "Complete the environmental conditional: 'Unless we ___ action now, ocean pollution will threaten marine ecosystems.'",
    sourceSentence: "Unless we take action now, ocean pollution will threaten marine ecosystems.",
    targetSentence: "Unless we take action now, ocean pollution will threaten marine ecosystems.",
    options: [
      { id: "o1", text: "take", isCorrect: true },
      { id: "o2", text: "will take", isCorrect: false },
      { id: "o3", text: "took", isCorrect: false },
      { id: "o4", text: "don't take", isCorrect: false }
    ],
    correctAnswer: "take",
    explanation: "'Unless' takes present simple affirmative ('take action')."
  },
  {
    id: "a2_u11_l162_r7",
    type: "word_ordering",
    prompt: "Arrange the words into an eco-friendly recommendation:",
    targetSentence: "If we recycle paper and plastic we will conserve natural resources.",
    options: [
      { id: "w1", text: "If" },
      { id: "w2", text: "we" },
      { id: "w3", text: "recycle" },
      { id: "w4", text: "paper" },
      { id: "w5", text: "and" },
      { id: "w6", text: "plastic" },
      { id: "w7", text: "we" },
      { id: "w8", text: "will" },
      { id: "w9", text: "conserve" },
      { id: "w10", text: "natural" },
      { id: "w11", text: "resources." }
    ],
    correctAnswer: "If we recycle paper and plastic we will conserve natural resources."
  },
  {
    id: "a2_u11_l162_r8",
    type: "dialogue_completion",
    prompt: "Complete the conversation about sustainable living:",
    sourceSentence: "What can our community do to reduce traffic pollution?",
    targetSentence: "If we invest in protected bike lanes and frequent public transit, more residents will leave their cars at home.",
    options: [
      { id: "o1", text: "If we invest in protected bike lanes and frequent public transit, more residents will leave their cars at home.", isCorrect: true },
      { id: "o2", text: "Cars are vehicles with four wheels and an engine.", isCorrect: false },
      { id: "o3", text: "We should ban all walking in the city.", isCorrect: false }
    ],
    correctAnswer: "If we invest in protected bike lanes and frequent public transit, more residents will leave their cars at home.",
    explanation: "Logical first conditional policy proposal."
  },
  {
    id: "a2_u11_l162_r9",
    type: "translation",
    prompt: "Translate into English: 'पेड़ लगाने से हमें हवा को शुद्ध करने में मदद मिलेगी।' Choose the best translation:",
    sourceSentence: "पेड़ लगाने से हमें हवा को शुद्ध करने में मदद मिलेगी।",
    targetSentence: "Planting trees will help us purify the air.",
    options: [
      { id: "o1", text: "Planting trees will help us purify the air.", isCorrect: true },
      { id: "o2", text: "Plant trees help purify air yesterday.", isCorrect: false },
      { id: "o3", text: "Trees planting is no helping for air.", isCorrect: false }
    ],
    correctAnswer: "Planting trees will help us purify the air.",
    explanation: "Gerund subject 'Planting trees' + future modal 'will help us purify the air'."
  },
  {
    id: "a2_u11_l162_r10",
    type: "multiple_choice",
    prompt: "Select the sentence that uses the first conditional correctly:",
    targetSentence: "If the temperature rises, the polar ice caps will melt faster.",
    options: [
      { id: "o1", text: "If the temperature rises, the polar ice caps will melt faster.", isCorrect: true },
      { id: "o2", text: "If the temperature will rise, the polar ice caps will melt faster.", isCorrect: false },
      { id: "o3", text: "If the temperature is rising, the polar ice caps melted faster.", isCorrect: false }
    ],
    correctAnswer: "If the temperature rises, the polar ice caps will melt faster.",
    explanation: "Present simple in if-clause ('rises') and 'will' + base verb in result clause ('will melt')."
  }
];

const l162_assess: Exercise[] = [
  {
    id: "a2_u11_l162_a6",
    type: "listening",
    prompt: "Listen to the environmental report and answer: What benefit did the community solar project achieve?",
    audioText: "Since installing rooftop solar panels on all municipal buildings, the town has reduced its reliance on coal power by thirty-five percent.",
    targetSentence: "Reduced municipal reliance on coal power by 35%.",
    options: [
      { id: "o1", text: "Reduced municipal reliance on coal power by 35%.", isCorrect: true },
      { id: "o2", text: "Increased coal consumption by fifty percent.", isCorrect: false },
      { id: "o3", text: "Shut down all municipal electricity permanently.", isCorrect: false }
    ],
    correctAnswer: "Reduced municipal reliance on coal power by 35%.",
    explanation: "The broadcast highlights a 35% reduction in coal reliance."
  },
  {
    id: "a2_u11_l162_a7",
    type: "error_correction",
    prompt: "Fix the error in this conditional sentence: 'If we will switch to LED bulbs, we save energy.'",
    sourceSentence: "If we will switch to LED bulbs, we save energy.",
    targetSentence: "If we switch to LED bulbs, we will save energy.",
    options: [
      { id: "o1", text: "If we switch to LED bulbs, we will save energy.", isCorrect: true },
      { id: "o2", text: "If we will switch to LED bulbs, we will saved energy.", isCorrect: false },
      { id: "o3", text: "If we switched LED bulbs, we save energy.", isCorrect: false }
    ],
    correctAnswer: "If we switch to LED bulbs, we will save energy.",
    explanation: "First conditional rule: 'if' + present simple ('switch'), result clause with 'will' + base verb ('will save')."
  },
  {
    id: "a2_u11_l162_a8",
    type: "mediation",
    prompt: "Translate this eco-friendly initiative in English: 'जब तक हम कचरे को अलग नहीं करेंगे, तब तक पुनर्चक्रण संभव नहीं होगा।' Choose the best translation:",
    sourceSentence: "जब तक हम कचरे को अलग नहीं करेंगे, तब तक पुनर्चक्रण संभव नहीं होगा।",
    targetSentence: "Unless we separate our waste, recycling will not be possible.",
    options: [
      { id: "o1", text: "Unless we separate our waste, recycling will not be possible.", isCorrect: true },
      { id: "o2", text: "Unless we don't separate waste recycling is easy.", isCorrect: false },
      { id: "o3", text: "We do not recycle because waste is separated.", isCorrect: false }
    ],
    correctAnswer: "Unless we separate our waste, recycling will not be possible.",
    explanation: "'Unless we separate our waste, recycling will not be possible' accurately translates 'जब तक... नहीं... तब तक'."
  },
  {
    id: "a2_u11_l162_a9",
    type: "speaking",
    prompt: "Speak clearly: Propose an environmental action plan for your school, workplace, or neighborhood.",
    sourceSentence: "If our office eliminates disposable coffee cups and implements compost bins, we will significantly reduce our daily landfill waste.",
    targetSentence: "If our office eliminates disposable coffee cups and implements compost bins, we will significantly reduce our daily landfill waste.",
    audioText: "If our office eliminates disposable coffee cups and implements compost bins, we will significantly reduce our daily landfill waste.",
    explanation: "Confident and articulate presentation of an eco-proposal."
  },
  {
    id: "a2_u11_l162_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing why preserving clean water and natural forests is vital for future generations:",
    targetSentence: "Clean water and dense forests are essential for sustaining global biodiversity and mitigating extreme climate patterns. If we protect these natural ecosystems today, future generations will inherit a healthy and thriving planet.",
    audioText: "Clean water and dense forests are essential for sustaining global biodiversity and mitigating extreme climate patterns. If we protect these natural ecosystems today, future generations will inherit a healthy and thriving planet."
  }
];

// =========================================================================
// LESSON 163: Digital Communication and Remote Collaboration
// =========================================================================
const l163_practice: Exercise[] = [
  {
    id: "a2_u11_l163_p16",
    type: "reading",
    prompt: "Read the remote team guide and answer the question:\n\"Remote Work Etiquette:\nWhen participating in virtual video conferences, please keep your microphone muted whenever someone else is speaking in order to eliminate background noise. Would you mind sharing your screen only when presenting your specific agenda items? If you experience connectivity issues, please post a quick note in the meeting chat so the host knows you are reconnecting.\"\nWhat should team members do to eliminate background noise during video calls?",
    sourceSentence: "What should team members do to eliminate background noise during video calls?",
    targetSentence: "Keep their microphones muted when someone else is speaking.",
    options: [
      { id: "o1", text: "Keep their microphones muted when someone else is speaking.", isCorrect: true },
      { id: "o2", text: "Turn off their computer monitors completely.", isCorrect: false },
      { id: "o3", text: "Play loud music in the background.", isCorrect: false },
      { id: "o4", text: "Leave the video call without telling anyone.", isCorrect: false }
    ],
    correctAnswer: "Keep their microphones muted when someone else is speaking.",
    explanation: "The guidelines instruct: 'please keep your microphone muted whenever someone else is speaking in order to eliminate background noise.'"
  },
  {
    id: "a2_u11_l163_p17",
    type: "speaking",
    prompt: "Speak clearly and make a polite remote meeting request using 'Would you mind':",
    sourceSentence: "Would you mind sharing your screen so we can all review the updated sprint board together?",
    targetSentence: "Would you mind sharing your screen so we can all review the updated sprint board together?",
    audioText: "Would you mind sharing your screen so we can all review the updated sprint board together?",
    explanation: "Notice the gerund form after 'Would you mind' ('sharing')."
  },
  {
    id: "a2_u11_l163_p18",
    type: "match_pairs",
    prompt: "Match the remote collaboration expressions with their meanings:",
    options: [
      { id: "m1", text: "You're on mute." },
      { id: "m1_m", text: "your microphone is currently turned off while speaking" },
      { id: "m2", text: "Would you mind sharing your screen?" },
      { id: "m2_m", text: "polite request to display visual documents to attendees" },
      { id: "m3", text: "There is a slight audio lag." },
      { id: "m3_m", text: "a digital delay causing sound to arrive late" },
      { id: "m4", text: "Let's take this offline." },
      { id: "m4_m", text: "discuss this specific topic outside the group meeting" }
    ]
  },
  {
    id: "a2_u11_l163_p19",
    type: "mediation",
    prompt: "Help your colleague say this in an international video conference: 'क्या आप अपनी स्क्रीन साझा कर सकते हैं ताकि हम दस्तावेज़ देख सकें?' Choose the best translation:",
    sourceSentence: "क्या आप अपनी स्क्रीन साझा कर सकते हैं ताकि हम दस्तावेज़ देख सकें?",
    targetSentence: "Could you please share your screen so that we can view the document?",
    options: [
      { id: "o1", text: "Could you please share your screen so that we can view the document?", isCorrect: true },
      { id: "o2", text: "Stop sharing screen because document is deleted.", isCorrect: false },
      { id: "o3", text: "Screen sharing is not working for all people.", isCorrect: false }
    ],
    correctAnswer: "Could you please share your screen so that we can view the document?",
    explanation: "'Could you please share your screen so that we can view the document?' is polite and standard digital etiquette."
  },
  {
    id: "a2_u11_l163_p20",
    type: "error_correction",
    prompt: "Identify the grammatical mistake after 'Would you mind':",
    sourceSentence: "Would you mind to mute your microphone during the presentation?",
    targetSentence: "Would you mind muting your microphone during the presentation?",
    options: [
      { id: "o1", text: "Would you mind muting your microphone during the presentation?", isCorrect: true },
      { id: "o2", text: "Would you mind mute your microphone during the presentation?", isCorrect: false },
      { id: "o3", text: "Would you mind for muting your microphone during presentation?", isCorrect: false }
    ],
    correctAnswer: "Would you mind muting your microphone during the presentation?",
    explanation: "'Would you mind' must be followed by a gerund ('-ing' form), not an infinitive."
  },
  {
    id: "a2_u11_l163_p21",
    type: "listening",
    prompt: "Listen to the team standup and identify the technical problem Maya is experiencing:",
    audioText: "Sorry everyone, my home internet connection is unstable today, so my video might freeze occasionally. I'll turn off my camera to save bandwidth.",
    targetSentence: "Unstable internet connection causing video freezes.",
    options: [
      { id: "o1", text: "Unstable internet connection causing video freezes.", isCorrect: true },
      { id: "o2", text: "Her laptop battery died completely.", isCorrect: false },
      { id: "o3", text: "She was locked out of the corporate office.", isCorrect: false }
    ],
    correctAnswer: "Unstable internet connection causing video freezes.",
    explanation: "Maya explains that her home connection is unstable and causing video freezes."
  },
  {
    id: "a2_u11_l163_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing how digital communication tools help you study or collaborate remotely:",
    targetSentence: "Using cloud-based collaborative documents allows my team to edit reports simultaneously in real time. Video conferencing apps also enable us to hold productive discussions regardless of geographic distance.",
    audioText: "Using cloud-based collaborative documents allows my team to edit reports simultaneously in real time. Video conferencing apps also enable us to hold productive discussions regardless of geographic distance."
  }
];

const l163_review: Exercise[] = [
  {
    id: "a2_u11_l163_r6",
    type: "fill_blank",
    prompt: "Complete the remote meeting request: 'Would you mind ___ the recording link after the call?'",
    sourceSentence: "Would you mind sending the recording link after the call?",
    targetSentence: "Would you mind sending the recording link after the call?",
    options: [
      { id: "o1", text: "sending", isCorrect: true },
      { id: "o2", text: "to send", isCorrect: false },
      { id: "o3", text: "send", isCorrect: false },
      { id: "o4", text: "sent", isCorrect: false }
    ],
    correctAnswer: "sending",
    explanation: "'Would you mind + gerund (sending)' is the correct grammatical form."
  },
  {
    id: "a2_u11_l163_r7",
    type: "word_ordering",
    prompt: "Assemble the tech support response:",
    targetSentence: "Could you please restart your computer to apply the updates?",
    options: [
      { id: "w1", text: "Could" },
      { id: "w2", text: "you" },
      { id: "w3", text: "please" },
      { id: "w4", text: "restart" },
      { id: "w5", text: "your" },
      { id: "w6", text: "computer" },
      { id: "w7", text: "to" },
      { id: "w8", text: "apply" },
      { id: "w9", text: "the" },
      { id: "w10", text: "updates?" }
    ],
    correctAnswer: "Could you please restart your computer to apply the updates?"
  },
  {
    id: "a2_u11_l163_r8",
    type: "dialogue_completion",
    prompt: "Complete the digital meeting repair exchange:",
    sourceSentence: "David, we can see your slides, but we cannot hear your voice.",
    targetSentence: "Oh, apologies! I was on mute. Can you hear me clearly now?",
    options: [
      { id: "o1", text: "Oh, apologies! I was on mute. Can you hear me clearly now?", isCorrect: true },
      { id: "o2", text: "Microphones are audio hardware devices.", isCorrect: false },
      { id: "o3", text: "I do not want to talk to anyone today.", isCorrect: false }
    ],
    correctAnswer: "Oh, apologies! I was on mute. Can you hear me clearly now?",
    explanation: "Standard and natural remote work repair phrase."
  },
  {
    id: "a2_u11_l163_r9",
    type: "translation",
    prompt: "Translate into English: 'क्या आपको चैट में फाइल भेजने में कोई आपत्ति होगी?' Choose the best translation:",
    sourceSentence: "क्या आपको चैट में फाइल भेजने में कोई आपत्ति होगी?",
    targetSentence: "Would you mind sending the file in the chat?",
    options: [
      { id: "o1", text: "Would you mind sending the file in the chat?", isCorrect: true },
      { id: "o2", text: "Do you mind to send file in chat?", isCorrect: false },
      { id: "o3", text: "Would you mind for send file in chat?", isCorrect: false }
    ],
    correctAnswer: "Would you mind sending the file in the chat?",
    explanation: "'Would you mind sending the file in the chat?' correctly uses the gerund."
  },
  {
    id: "a2_u11_l163_r10",
    type: "multiple_choice",
    prompt: "Which sentence correctly expresses a modal deduction regarding remote tech?",
    targetSentence: "The server must be offline because none of our team can access the shared database.",
    options: [
      { id: "o1", text: "The server must be offline because none of our team can access the shared database.", isCorrect: true },
      { id: "o2", text: "The server must to be offline because none of our team can access database.", isCorrect: false },
      { id: "o3", text: "The server must being offline because database is closed.", isCorrect: false }
    ],
    correctAnswer: "The server must be offline because none of our team can access the shared database.",
    explanation: "'Must be' + adjective/state expresses strong logical deduction."
  }
];

const l163_assess: Exercise[] = [
  {
    id: "a2_u11_l163_a6",
    type: "listening",
    prompt: "Listen to the meeting host and answer: What action does the host request from attendees?",
    audioText: "Before we begin today's webinar, would you mind typing your name and organization in the chat box for attendance tracking?",
    targetSentence: "Type their name and organization in the chat box.",
    options: [
      { id: "o1", text: "Type their name and organization in the chat box.", isCorrect: true },
      { id: "o2", text: "Turn on all microphones simultaneously.", isCorrect: false },
      { id: "o3", text: "Disconnect from the webinar immediately.", isCorrect: false }
    ],
    correctAnswer: "Type their name and organization in the chat box.",
    explanation: "The host requests attendees to type their name and organization in the chat box."
  },
  {
    id: "a2_u11_l163_a7",
    type: "error_correction",
    prompt: "Correct the modal deduction error: 'His camera is on and he is nodding, so he must to hear us.'",
    sourceSentence: "His camera is on and he is nodding, so he must to hear us.",
    targetSentence: "His camera is on and he is nodding, so he must hear us.",
    options: [
      { id: "o1", text: "His camera is on and he is nodding, so he must hear us.", isCorrect: true },
      { id: "o2", text: "His camera is on and he is nodding, so he must hearing us.", isCorrect: false },
      { id: "o3", text: "His camera is on and he is nodding, so he must for hear us.", isCorrect: false }
    ],
    correctAnswer: "His camera is on and he is nodding, so he must hear us.",
    explanation: "Modal 'must' is followed by the bare infinitive ('hear'), never 'to hear'."
  },
  {
    id: "a2_u11_l163_a8",
    type: "mediation",
    prompt: "Relay this digital instruction in English: 'कृपया अपनी स्क्रीन साझा करना बंद करें ताकि अगला वक्ता प्रस्तुत कर सके।' Choose the best translation:",
    sourceSentence: "कृपया अपनी स्क्रीन साझा करना बंद करें ताकि अगला वक्ता प्रस्तुत कर सके।",
    targetSentence: "Please stop sharing your screen so that the next speaker can present.",
    options: [
      { id: "o1", text: "Please stop sharing your screen so that the next speaker can present.", isCorrect: true },
      { id: "o2", text: "Never share screen because speaker is not presenting.", isCorrect: false },
      { id: "o3", text: "Screen sharing is stopped forever for all speakers.", isCorrect: false }
    ],
    correctAnswer: "Please stop sharing your screen so that the next speaker can present.",
    explanation: "'Please stop sharing your screen so that the next speaker can present' is polite and accurate."
  },
  {
    id: "a2_u11_l163_a9",
    type: "speaking",
    prompt: "Speak clearly: Politely ask meeting participants to turn on their cameras for a group photo at the end of the session.",
    sourceSentence: "Would everyone mind turning on their cameras for a quick moment so we can take a group screenshot?",
    targetSentence: "Would everyone mind turning on their cameras for a quick moment so we can take a group screenshot?",
    audioText: "Would everyone mind turning on their cameras for a quick moment so we can take a group screenshot?",
    explanation: "Friendly and clear delivery of 'Would everyone mind turning on...'."
  },
  {
    id: "a2_u11_l163_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing your personal digital work habits during remote meetings:",
    targetSentence: "I always test my microphone and camera five minutes prior to any scheduled virtual meeting. I also keep my notifications silenced in order to maintain full focus during discussions.",
    audioText: "I always test my microphone and camera five minutes prior to any scheduled virtual meeting. I also keep my notifications silenced in order to maintain full focus during discussions."
  }
];

// =========================================================================
// LESSON 164: Customer Service and Consumer Issues
// =========================================================================
const l164_practice: Exercise[] = [
  {
    id: "a2_u11_l164_p16",
    type: "reading",
    prompt: "Read the customer service response email and answer the question:\n\"Dear Ms. Davies,\nThank you for contacting our support team regarding order #4892. We sincerely apologize that the blender arrived with a cracked glass jug. We have already looked into the issue with our warehouse fulfillment center. We have processed a complimentary replacement unit, which will be dispatched via express courier today. You do not need to return the damaged item.\"\nHow did the customer support team resolve Ms. Davies's complaint?",
    sourceSentence: "How did the customer support team resolve Ms. Davies's complaint?",
    targetSentence: "By dispatching a free replacement unit today without requiring a return.",
    options: [
      { id: "o1", text: "By dispatching a free replacement unit today without requiring a return.", isCorrect: true },
      { id: "o2", text: "By charging her a twenty percent restocking fee.", isCorrect: false },
      { id: "o3", text: "By telling her to fix the cracked glass jug herself.", isCorrect: false },
      { id: "o4", text: "By canceling her customer account permanently.", isCorrect: false }
    ],
    correctAnswer: "By dispatching a free replacement unit today without requiring a return.",
    explanation: "The email confirms: 'We have processed a complimentary replacement unit, which will be dispatched via express courier today. You do not need to return the damaged item.'"
  },
  {
    id: "a2_u11_l164_p17",
    type: "speaking",
    prompt: "Speak clearly and assertively: Politely report a defective product and request a refund or replacement.",
    sourceSentence: "I am calling to report that the tablet I purchased last week stopped charging. Could you please look into this and issue a replacement?",
    targetSentence: "I am calling to report that the tablet I purchased last week stopped charging. Could you please look into this and issue a replacement?",
    audioText: "I am calling to report that the tablet I purchased last week stopped charging. Could you please look into this and issue a replacement?",
    explanation: "Polite assertive tone using 'look into' and 'issue a replacement'."
  },
  {
    id: "a2_u11_l164_p18",
    type: "match_pairs",
    prompt: "Match the customer service phrasal verbs with their definitions:",
    options: [
      { id: "m1", text: "look into a problem" },
      { id: "m1_m", text: "investigate and examine the facts of an issue" },
      { id: "m2", text: "sort out a dispute" },
      { id: "m2_m", text: "resolve and successfully settle a conflict" },
      { id: "m3", text: "follow up with a client" },
      { id: "m3_m", text: "contact someone again to provide updates or check satisfaction" },
      { id: "m4", text: "issue a full refund" },
      { id: "m4_m", text: "return all paid money back to the customer" }
    ]
  },
  {
    id: "a2_u11_l164_p19",
    type: "mediation",
    prompt: "Help a customer explain their complaint in English: 'मुझे गलत सामान मिला था; क्या आप इसे बदल सकते हैं या मुझे पैसे वापस कर सकते हैं?' Choose the best translation:",
    sourceSentence: "मुझे गलत सामान मिला था; क्या आप इसे बदल सकते हैं या मुझे पैसे वापस कर सकते हैं?",
    targetSentence: "I received the wrong item; could you please exchange it or issue a refund?",
    options: [
      { id: "o1", text: "I received the wrong item; could you please exchange it or issue a refund?", isCorrect: true },
      { id: "o2", text: "I received right item and want to pay double.", isCorrect: false },
      { id: "o3", text: "Wrong item delivered so keep all my money.", isCorrect: false }
    ],
    correctAnswer: "I received the wrong item; could you please exchange it or issue a refund?",
    explanation: "'I received the wrong item; could you please exchange it or issue a refund?' is polite, clear, and accurate."
  },
  {
    id: "a2_u11_l164_p20",
    type: "error_correction",
    prompt: "Identify the phrasal verb preposition mistake in this customer request:",
    sourceSentence: "Could you please look after the delay with my package?",
    targetSentence: "Could you please look into the delay with my package?",
    options: [
      { id: "o1", text: "Could you please look into the delay with my package?", isCorrect: true },
      { id: "o2", text: "Could you please look at the delay with my package after?", isCorrect: false },
      { id: "o3", text: "Could you please look for delay with my package?", isCorrect: false }
    ],
    correctAnswer: "Could you please look into the delay with my package?",
    explanation: "'Look into' means to investigate a problem. 'Look after' means to take care of someone (like a child or pet)."
  },
  {
    id: "a2_u11_l164_p21",
    type: "listening",
    prompt: "Listen to the customer service representative and answer: What timeframe did they promise for resolving the issue?",
    audioText: "I have escalated your billing inquiry to our finance supervisor. We will investigate the discrepancy and follow up with you via email within twenty-four hours.",
    targetSentence: "Within 24 hours via email.",
    options: [
      { id: "o1", text: "Within 24 hours via email.", isCorrect: true },
      { id: "o2", text: "Within six months by postal letter.", isCorrect: false },
      { id: "o3", text: "Never.", isCorrect: false }
    ],
    correctAnswer: "Within 24 hours via email.",
    explanation: "The agent explicitly promises: 'follow up with you via email within twenty-four hours'."
  },
  {
    id: "a2_u11_l164_p22",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you would write a professional complaint email regarding a damaged delivery:",
    targetSentence: "Dear Customer Support, I am writing to report that order #7732 arrived with a broken display screen. Could you please investigate this delivery issue and let me know how to arrange a replacement?",
    audioText: "Dear Customer Support, I am writing to report that order #7732 arrived with a broken display screen. Could you please investigate this delivery issue and let me know how to arrange a replacement?"
  }
];

const l164_review: Exercise[] = [
  {
    id: "a2_u11_l164_r6",
    type: "fill_blank",
    prompt: "Complete the customer service statement: 'Our team will ___ into the billing error immediately.'",
    sourceSentence: "Our team will look into the billing error immediately.",
    targetSentence: "Our team will look into the billing error immediately.",
    options: [
      { id: "o1", text: "look", isCorrect: true },
      { id: "o2", text: "take", isCorrect: false },
      { id: "o3", text: "make", isCorrect: false },
      { id: "o4", text: "give", isCorrect: false }
    ],
    correctAnswer: "look",
    explanation: "'Look into' is the phrasal verb meaning investigate."
  },
  {
    id: "a2_u11_l164_r7",
    type: "word_ordering",
    prompt: "Arrange the words into a polite customer service commitment:",
    targetSentence: "We will sort out this problem as quickly as possible.",
    options: [
      { id: "w1", text: "We" },
      { id: "w2", text: "will" },
      { id: "w3", text: "sort" },
      { id: "w4", text: "out" },
      { id: "w5", text: "this" },
      { id: "w6", text: "problem" },
      { id: "w7", text: "as" },
      { id: "w8", text: "quickly" },
      { id: "w9", text: "as" },
      { id: "w10", text: "possible." }
    ],
    correctAnswer: "We will sort out this problem as quickly as possible."
  },
  {
    id: "a2_u11_l164_r8",
    type: "dialogue_completion",
    prompt: "Complete the resolution dialogue:",
    sourceSentence: "I was charged twice for my subscription this month.",
    targetSentence: "I apologize for the error; I have refunded the duplicate charge and sent a confirmation receipt to your email.",
    options: [
      { id: "o1", text: "I apologize for the error; I have refunded the duplicate charge and sent a confirmation receipt to your email.", isCorrect: true },
      { id: "o2", text: "Subscriptions are monthly recurring payments.", isCorrect: false },
      { id: "o3", text: "We will charge your card three more times today.", isCorrect: false }
    ],
    correctAnswer: "I apologize for the error; I have refunded the duplicate charge and sent a confirmation receipt to your email.",
    explanation: "Professional, empathetic, and effective customer service resolution."
  },
  {
    id: "a2_u11_l164_r9",
    type: "translation",
    prompt: "Translate into English: 'हम आपके मामले की जांच करेंगे और कल आपसे संपर्क करेंगे।'",
    sourceSentence: "हम आपके मामले की जांच करेंगे और कल आपसे संपर्क करेंगे।",
    targetSentence: "We will look into your case and follow up with you tomorrow.",
    options: [
      { id: "o1", text: "We will look into your case and follow up with you tomorrow.", isCorrect: true },
      { id: "o2", text: "We look after your case and never follow tomorrow.", isCorrect: false },
      { id: "o3", text: "Your case is looked into because we forget tomorrow.", isCorrect: false }
    ],
    correctAnswer: "We will look into your case and follow up with you tomorrow.",
    explanation: "'We will look into your case and follow up with you tomorrow' uses both phrasal verbs accurately."
  },
  {
    id: "a2_u11_l164_r10",
    type: "multiple_choice",
    prompt: "Select the sentence that expresses polite customer assertiveness:",
    targetSentence: "I understand there was a delay, but I would appreciate a clear update on when the technician will arrive.",
    options: [
      { id: "o1", text: "I understand there was a delay, but I would appreciate a clear update on when the technician will arrive.", isCorrect: true },
      { id: "o2", text: "Your company is useless and I will scream until technician comes.", isCorrect: false },
      { id: "o3", text: "Technician never arriving so I don't care about anything.", isCorrect: false }
    ],
    correctAnswer: "I understand there was a delay, but I would appreciate a clear update on when the technician will arrive.",
    explanation: "'I understand... but I would appreciate a clear update on when...' is polite, firm, and constructive."
  }
];

const l164_assess: Exercise[] = [
  {
    id: "a2_u11_l164_a6",
    type: "listening",
    prompt: "Listen to the store manager and answer: What compensation is offered to the customer?",
    audioText: "To make up for the prolonged delay with your furniture order, we would like to offer you a fifteen percent discount on your current purchase along with free home assembly.",
    targetSentence: "A 15% discount and free home assembly.",
    options: [
      { id: "o1", text: "A 15% discount and free home assembly.", isCorrect: true },
      { id: "o2", text: "An extra delivery charge of one hundred dollars.", isCorrect: false },
      { id: "o3", text: "Canceling the furniture order without a refund.", isCorrect: false }
    ],
    correctAnswer: "A 15% discount and free home assembly.",
    explanation: "The manager offers a 15% discount and complimentary home assembly."
  },
  {
    id: "a2_u11_l164_a7",
    type: "error_correction",
    prompt: "Correct the phrasal verb error in this service dialogue: 'Don't worry, our team will sort up this issue today.'",
    sourceSentence: "Don't worry, our team will sort up this issue today.",
    targetSentence: "Don't worry, our team will sort out this issue today.",
    options: [
      { id: "o1", text: "Don't worry, our team will sort out this issue today.", isCorrect: true },
      { id: "o2", text: "Don't worry, our team will sort in this issue today.", isCorrect: false },
      { id: "o3", text: "Don't worry, our team will sort at this issue today.", isCorrect: false }
    ],
    correctAnswer: "Don't worry, our team will sort out this issue today.",
    explanation: "The correct phrasal verb is 'sort out', meaning resolve or clarify."
  },
  {
    id: "a2_u11_l164_a8",
    type: "mediation",
    prompt: "Translate this customer refund request into professional English: 'यदि उत्पाद 30 दिनों के भीतर वापस कर दिया जाता है, तो आपको पूरा रिफंड मिलेगा।' Choose the best translation:",
    sourceSentence: "यदि उत्पाद 30 दिनों के भीतर वापस कर दिया जाता है, तो आपको पूरा रिफंड मिलेगा।",
    targetSentence: "If the product is returned within thirty days, you will receive a full refund.",
    options: [
      { id: "o1", text: "If the product is returned within thirty days, you will receive a full refund.", isCorrect: true },
      { id: "o2", text: "If you return product after thirty days you get no refund.", isCorrect: false },
      { id: "o3", text: "Refund is never given for thirty days.", isCorrect: false }
    ],
    correctAnswer: "If the product is returned within thirty days, you will receive a full refund.",
    explanation: "'If the product is returned within thirty days, you will receive a full refund' is the standard consumer policy format."
  },
  {
    id: "a2_u11_l164_a9",
    type: "speaking",
    prompt: "Speak clearly: Politely explain to a customer service agent that your billing issue has not yet been resolved and ask for an escalation.",
    sourceSentence: "I have called twice regarding the incorrect billing charge, but it has not yet been resolved. Could you please escalate this to a supervisor?",
    targetSentence: "I have called twice regarding the incorrect billing charge, but it has not yet been resolved. Could you please escalate this to a supervisor?",
    audioText: "I have called twice regarding the incorrect billing charge, but it has not yet been resolved. Could you please escalate this to a supervisor?",
    explanation: "Assertive, professional customer escalation phrase."
  },
  {
    id: "a2_u11_l164_a10",
    type: "personal_production",
    prompt: "Write 2 sentences describing what qualities make customer service truly effective and satisfying for consumers:",
    targetSentence: "Effective customer service requires empathetic listening and transparent communication. When support representatives look into issues promptly and follow up until a problem is sorted out, customers feel valued and respected.",
    audioText: "Effective customer service requires empathetic listening and transparent communication. When support representatives look into issues promptly and follow up until a problem is sorted out, customers feel valued and respected."
  }
];

// =========================================================================
// LESSON 165: Unit 11 Comprehensive Capstone & CEFR A2 Synthesis
// =========================================================================
const l165_practice: Exercise[] = [
  {
    id: "a2_u11_l165_p16",
    type: "reading",
    prompt: "Read the comprehensive workplace and community capstone case study:\n\"Project Synthesis Report:\nTo launch our citywide environmental awareness campaign, our multidisciplinary team collaborated across four departments. In order to ensure seamless execution, we divided roles: Liam managed community outreach, whereas Sarah coordinated municipal media releases. When scheduling bottlenecks arose due to severe weather, we held indirect clarification discussions to adjust timelines constructively. By sticking to our budget and utilizing remote digital collaboration tools, the campaign exceeded its community participation target by thirty percent.\"\nWhat key collaborative strategies enabled the campaign's success?",
    sourceSentence: "What key collaborative strategies enabled the campaign's success?",
    targetSentence: "Role division, clear communication, budget control, and digital collaboration.",
    options: [
      { id: "o1", text: "Role division, clear communication, budget control, and digital collaboration.", isCorrect: true },
      { id: "o2", text: "Canceling all public communication and spending unlimited funds.", isCorrect: false },
      { id: "o3", text: "Hiring only one person to do all four departments' work.", isCorrect: false },
      { id: "o4", text: "Ignoring the weather and refusing to adjust timelines.", isCorrect: false }
    ],
    correctAnswer: "Role division, clear communication, budget control, and digital collaboration.",
    explanation: "The report highlights collaborative role allocation, purposeful execution, constructive adjustment, and budget discipline."
  },
  {
    id: "a2_u11_l165_p17",
    type: "speaking",
    prompt: "Speak clearly and deliver a complete CEFR A2 capstone reflection on your collaborative and communicative capabilities:",
    sourceSentence: "Throughout Unit 11, I developed the confidence to explain objectives using purpose infinitives, deliver constructive feedback, clarify misunderstandings politely, and participate effectively in remote teamwork.",
    targetSentence: "Throughout Unit 11, I developed the confidence to explain objectives using purpose infinitives, deliver constructive feedback, clarify misunderstandings politely, and participate effectively in remote teamwork.",
    audioText: "Throughout Unit 11, I developed the confidence to explain objectives using purpose infinitives, deliver constructive feedback, clarify misunderstandings politely, and participate effectively in remote teamwork.",
    explanation: "Comprehensive capstone communicative speech delivery."
  },
  {
    id: "a2_u11_l165_p18",
    type: "match_pairs",
    prompt: "Match the major Unit 11 linguistic functions with their core grammatical structures:",
    options: [
      { id: "m1", text: "In order to / To + verb" },
      { id: "m1_m", text: "expressing intentional purpose and objectives" },
      { id: "m2", text: "Due to / Because of + noun" },
      { id: "m2_m", text: "giving justifications and causal explanations" },
      { id: "m3", text: "Could you clarify what...?" },
      { id: "m3_m", text: "indirect question for diplomatic clarification" },
      { id: "m4", text: "Much more / Far better than" },
      { id: "m4_m", text: "intensified comparative evaluations" }
    ]
  },
  {
    id: "a2_u11_l165_p19",
    type: "mediation",
    prompt: "Translate this comprehensive capstone statement into English: 'हमने गलतफहमी को दूर करने और परियोजना को समय पर पूरा करने के लिए एक साथ मिलकर काम किया।' Choose the best translation:",
    sourceSentence: "हमने गलतफहमी को दूर करने और परियोजना को समय पर पूरा करने के लिए एक साथ मिलकर काम किया।",
    targetSentence: "We worked together in order to resolve misunderstandings and complete the project on time.",
    options: [
      { id: "o1", text: "We worked together in order to resolve misunderstandings and complete the project on time.", isCorrect: true },
      { id: "o2", text: "We worked alone because project was delayed by misunderstanding.", isCorrect: false },
      { id: "o3", text: "Misunderstanding happened because we worked together.", isCorrect: false }
    ],
    correctAnswer: "We worked together in order to resolve misunderstandings and complete the project on time.",
    explanation: "'We worked together in order to resolve misunderstandings and complete the project on time' combines purpose infinitives and teamwork collocations."
  },
  {
    id: "a2_u11_l165_p20",
    type: "error_correction",
    prompt: "Identify and fix the composite grammar and register errors in this capstone summary:",
    sourceSentence: "Due to we collaborated closely, our project was very more successful than last year.",
    targetSentence: "Because we collaborated closely, our project was much more successful than last year.",
    options: [
      { id: "o1", text: "Because we collaborated closely, our project was much more successful than last year.", isCorrect: true },
      { id: "o2", text: "Due to we collaborated closely, our project was more much successful.", isCorrect: false },
      { id: "o3", text: "Because of we collaborated closely, our project was very more successful.", isCorrect: false }
    ],
    correctAnswer: "Because we collaborated closely, our project was much more successful than last year.",
    explanation: "Use 'because' before a full clause ('we collaborated closely') and 'much more' (not 'very more') for comparative intensification."
  },
  {
    id: "a2_u11_l165_p21",
    type: "listening",
    prompt: "Listen to the capstone presentation debrief and choose the key achievement:",
    audioText: "By combining rigorous financial budgeting with open digital communication, our cross-functional team delivered the new community center three weeks ahead of schedule and ten percent below estimated costs.",
    targetSentence: "Delivering the community center ahead of schedule and under budget.",
    options: [
      { id: "o1", text: "Delivering the community center ahead of schedule and under budget.", isCorrect: true },
      { id: "o2", text: "Canceling the community center project entirely.", isCorrect: false },
      { id: "o3", text: "Exceeding the construction budget by fifty percent.", isCorrect: false }
    ],
    correctAnswer: "Delivering the community center ahead of schedule and under budget.",
    explanation: "The speaker highlights early delivery and cost savings."
  },
  {
    id: "a2_u11_l165_p22",
    type: "personal_production",
    prompt: "Write 2 sentences summarizing the most valuable communicative skills you have developed across CEFR A2 Unit 11:",
    targetSentence: "Throughout Unit 11, I learned how to articulate purpose clearly, deliver constructive feedback, and resolve interpersonal misunderstandings with polite phrasing. I also gained practical competence in managing personal finances, narrating travel experiences, and solving consumer issues.",
    audioText: "Throughout Unit 11, I learned how to articulate purpose clearly, deliver constructive feedback, and resolve interpersonal misunderstandings with polite phrasing. I also gained practical competence in managing personal finances, narrating travel experiences, and solving consumer issues."
  }
];

const l165_review: Exercise[] = [
  {
    id: "a2_u11_l165_r6",
    type: "fill_blank",
    prompt: "Complete the capstone synthesis: 'We held a virtual debrief ___ celebrate our milestone and share constructive feedback.'",
    sourceSentence: "We held a virtual debrief to celebrate our milestone and share constructive feedback.",
    targetSentence: "We held a virtual debrief to celebrate our milestone and share constructive feedback.",
    options: [
      { id: "o1", text: "to", isCorrect: true },
      { id: "o2", text: "for", isCorrect: false },
      { id: "o3", text: "because of", isCorrect: false },
      { id: "o4", text: "due to", isCorrect: false }
    ],
    correctAnswer: "to",
    explanation: "'To + base verb' expresses purpose directly."
  },
  {
    id: "a2_u11_l165_r7",
    type: "word_ordering",
    prompt: "Arrange the words into a comprehensive communicative conclusion:",
    targetSentence: "If we communicate with clarity and empathy we will achieve our shared goals.",
    options: [
      { id: "w1", text: "If" },
      { id: "w2", text: "we" },
      { id: "w3", text: "communicate" },
      { id: "w4", text: "with" },
      { id: "w5", text: "clarity" },
      { id: "w6", text: "and" },
      { id: "w7", text: "empathy" },
      { id: "w8", text: "we" },
      { id: "w9", text: "will" },
      { id: "w10", text: "achieve" },
      { id: "w11", text: "our" },
      { id: "w12", text: "shared" },
      { id: "w13", text: "goals." }
    ],
    correctAnswer: "If we communicate with clarity and empathy we will achieve our shared goals."
  },
  {
    id: "a2_u11_l165_r8",
    type: "dialogue_completion",
    prompt: "Complete the final milestone reflection:",
    sourceSentence: "How do you feel about your overall English progress after completing Unit 11?",
    targetSentence: "I feel far more confident in participating in complex conversations, giving polite feedback, and resolving real-world problems in English.",
    options: [
      { id: "o1", text: "I feel far more confident in participating in complex conversations, giving polite feedback, and resolving real-world problems in English.", isCorrect: true },
      { id: "o2", text: "English is a Germanic language spoken worldwide.", isCorrect: false },
      { id: "o3", text: "I did not study any lessons this month.", isCorrect: false }
    ],
    correctAnswer: "I feel far more confident in participating in complex conversations, giving polite feedback, and resolving real-world problems in English.",
    explanation: "Affirms communicative growth with precise A2 language."
  },
  {
    id: "a2_u11_l165_r9",
    type: "translation",
    prompt: "Translate into English: 'हमने सभी चुनौतियों को सफलतापूर्वक पार कर लिया और अपने उद्देश्यों को प्राप्त किया।' Choose the best translation:",
    sourceSentence: "हमने सभी चुनौतियों को सफलतापूर्वक पार कर लिया और अपने उद्देश्यों को प्राप्त किया।",
    targetSentence: "We successfully overcame all challenges and achieved our objectives.",
    options: [
      { id: "o1", text: "We successfully overcame all challenges and achieved our objectives.", isCorrect: true },
      { id: "o2", text: "We fail challenges because no objectives achieved.", isCorrect: false },
      { id: "o3", text: "Challenges was overcoming us yesterday.", isCorrect: false }
    ],
    correctAnswer: "We successfully overcame all challenges and achieved our objectives.",
    explanation: "'We successfully overcame all challenges and achieved our objectives' accurately conveys the accomplishment."
  },
  {
    id: "a2_u11_l165_r10",
    type: "multiple_choice",
    prompt: "Select the sentence that demonstrates complete grammatical mastery of Unit 11 structures:",
    targetSentence: "Due to thorough preparation and collaborative planning, our team completed the initiative far faster than expected.",
    options: [
      { id: "o1", text: "Due to thorough preparation and collaborative planning, our team completed the initiative far faster than expected.", isCorrect: true },
      { id: "o2", text: "Due to we prepared thoroughly, our team completed the initiative very faster than expected.", isCorrect: false },
      { id: "o3", text: "Because of thorough preparation, our team completed initiative more faster as expected.", isCorrect: false }
    ],
    correctAnswer: "Due to thorough preparation and collaborative planning, our team completed the initiative far faster than expected.",
    explanation: "'Due to + noun phrase' followed by comparative intensifier 'far faster than expected'."
  }
];

const l165_assess: Exercise[] = [
  {
    id: "a2_u11_l165_a6",
    type: "listening",
    prompt: "Listen to the capstone course summary and identify the primary outcome of CEFR A2 mastery:",
    audioText: "Upon mastering CEFR A2 Unit 11, learners can confidently navigate professional collaboration, express nuanced recommendations, handle consumer inquiries, and tell engaging personal stories in English.",
    targetSentence: "Navigating professional collaboration, recommendations, consumer inquiries, and storytelling.",
    options: [
      { id: "o1", text: "Navigating professional collaboration, recommendations, consumer inquiries, and storytelling.", isCorrect: true },
      { id: "o2", text: "Memorizing bilingual vocabulary lists without speaking.", isCorrect: false },
      { id: "o3", text: "Avoiding all social and professional interactions.", isCorrect: false }
    ],
    correctAnswer: "Navigating professional collaboration, recommendations, consumer inquiries, and storytelling.",
    explanation: "The audio highlights full communicative competence across collaboration, recommendations, consumer issues, and narratives."
  },
  {
    id: "a2_u11_l165_a7",
    type: "error_correction",
    prompt: "Correct the error in this capstone sentence: 'She asked me where was the meeting room located.'",
    sourceSentence: "She asked me where was the meeting room located.",
    targetSentence: "She asked me where the meeting room was located.",
    options: [
      { id: "o1", text: "She asked me where the meeting room was located.", isCorrect: true },
      { id: "o2", text: "She asked me where was located the meeting room.", isCorrect: false },
      { id: "o3", text: "She asked me where did the meeting room located.", isCorrect: false }
    ],
    correctAnswer: "She asked me where the meeting room was located.",
    explanation: "Embedded indirect question clause uses statement order ('where the meeting room was located')."
  },
  {
    id: "a2_u11_l165_a8",
    type: "mediation",
    prompt: "Deliver this culminating English summary to an international panel: 'हमने स्पष्ट संचार, टीम वर्क और प्रभावी योजना के माध्यम से अपने सभी लक्ष्यों को प्राप्त किया।' Choose the best translation:",
    sourceSentence: "हमने स्पष्ट संचार, टीम वर्क और प्रभावी योजना के माध्यम से अपने सभी लक्ष्यों को प्राप्त किया।",
    targetSentence: "We achieved all our goals through clear communication, teamwork, and effective planning.",
    options: [
      { id: "o1", text: "We achieved all our goals through clear communication, teamwork, and effective planning.", isCorrect: true },
      { id: "o2", text: "We missed goals because communication was not clear.", isCorrect: false },
      { id: "o3", text: "Goals were impossible due to teamwork planning.", isCorrect: false }
    ],
    correctAnswer: "We achieved all our goals through clear communication, teamwork, and effective planning.",
    explanation: "'We achieved all our goals through clear communication, teamwork, and effective planning' encapsulates the communicative purpose."
  },
  {
    id: "a2_u11_l165_a9",
    type: "speaking",
    prompt: "Speak clearly: Deliver a concluding statement celebrating your successful completion of Unit 11 and readiness for advanced communicative challenges.",
    sourceSentence: "I have successfully completed all fifteen lessons of Unit 11, mastering essential collaborative, social, and professional communication skills in English.",
    targetSentence: "I have successfully completed all fifteen lessons of Unit 11, mastering essential collaborative, social, and professional communication skills in English.",
    audioText: "I have successfully completed all fifteen lessons of Unit 11, mastering essential collaborative, social, and professional communication skills in English.",
    explanation: "Confident and articulate capstone speech delivery."
  },
  {
    id: "a2_u11_l165_a10",
    type: "personal_production",
    prompt: "Write a comprehensive 2-sentence personal mission statement on how you will apply your English skills in real-world personal and professional scenarios:",
    targetSentence: "I will use my English skills to collaborate effectively with diverse teams worldwide and articulate ideas with clarity, empathy, and confidence. By continuing to practice active listening and clear writing daily, I will build strong global relationships and achieve my personal aspirations.",
    audioText: "I will use my English skills to collaborate effectively with diverse teams worldwide and articulate ideas with clarity, empathy, and confidence. By continuing to practice active listening and clear writing daily, I will build strong global relationships and achieve my personal aspirations."
  }
];

// Execute enrichment for Lessons 161-165
enrichUnit11LessonData('lesson_a2_11_161', LESSON_A2_11_161_DATA, l161_practice, l161_review, l161_assess);
enrichUnit11LessonData('lesson_a2_11_162', LESSON_A2_11_162_DATA, l162_practice, l162_review, l162_assess);
enrichUnit11LessonData('lesson_a2_11_163', LESSON_A2_11_163_DATA, l163_practice, l163_review, l163_assess);
enrichUnit11LessonData('lesson_a2_11_164', LESSON_A2_11_164_DATA, l164_practice, l164_review, l164_assess);
enrichUnit11LessonData('lesson_a2_11_165', LESSON_A2_11_165_DATA, l165_practice, l165_review, l165_assess);
