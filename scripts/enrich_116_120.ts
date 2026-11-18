import { Exercise } from '../src/types';
import { LESSON_A2_8_116_DATA } from '../src/data/lessons/lesson_a2_8_116';
import { LESSON_A2_8_117_DATA } from '../src/data/lessons/lesson_a2_8_117';
import { LESSON_A2_8_118_DATA } from '../src/data/lessons/lesson_a2_8_118';
import { LESSON_A2_8_119_DATA } from '../src/data/lessons/lesson_a2_8_119';
import { LESSON_A2_8_120_DATA } from '../src/data/lessons/lesson_a2_8_120';
import { enrichUnit8LessonData } from './enrich_unit8_helper';

// =========================================================================
// LESSON 116: Shopping for Groceries, Food Markets & Quantities
// =========================================================================
const l116_practice: Exercise[] = [
  {
    id: "a2_u08_l116_p11",
    type: "reading",
    prompt: "Read the farmers' market flyer and answer:\n\"Green Valley Organic Market is open every Sunday from 8:00 AM to 2:00 PM. All seasonal vegetables and farm-fresh dairy products are locally sourced within fifty kilometers. Bring your own reusable shopping bags to receive a five percent discount at checkout.\"\nHow can customers get a 5% discount?",
    sourceSentence: "How can customers get a 5% discount?",
    targetSentence: "By bringing their own reusable shopping bags.",
    options: [
      { id: "o1", text: "By bringing their own reusable shopping bags.", isCorrect: true },
      { id: "o2", text: "By arriving before 7:00 AM.", isCorrect: false },
      { id: "o3", text: "By buying more than fifty kilograms of vegetables.", isCorrect: false },
      { id: "o4", text: "By paying only in cash.", isCorrect: false }
    ],
    correctAnswer: "By bringing their own reusable shopping bags.",
    explanation: "The flyer states: 'Bring your own reusable shopping bags to receive a five percent discount'."
  },
  {
    id: "a2_u08_l116_p12",
    type: "fill_blank",
    prompt: "Choose the correct partitive container word for bread:",
    sourceSentence: "Could you please pick up a ____ of wholemeal bread on your way home?",
    targetSentence: "Could you please pick up a loaf of wholemeal bread on your way home?",
    options: [
      { id: "o1", text: "loaf", isCorrect: true },
      { id: "o2", text: "bottle", isCorrect: false },
      { id: "o3", text: "carton", isCorrect: false },
      { id: "o4", text: "bunch", isCorrect: false }
    ],
    correctAnswer: "loaf",
    explanation: "The standard measure/partitive for bread is 'a loaf of bread' (plural: 'loaves')."
  },
  {
    id: "a2_u08_l116_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses quantifiers for uncountable nouns?",
    sourceSentence: "We only need a little olive oil to dress the fresh salad.",
    targetSentence: "We only need a little olive oil to dress the fresh salad.",
    options: [
      { id: "o1", text: "We only need a little olive oil to dress the fresh salad.", isCorrect: true },
      { id: "o2", text: "We only need a few olive oil to dress the fresh salad.", isCorrect: false },
      { id: "o3", text: "We only need many olive oil for salad.", isCorrect: false },
      { id: "o4", text: "We only need few olive oil for salad.", isCorrect: false }
    ],
    correctAnswer: "We only need a little olive oil to dress the fresh salad.",
    explanation: "Use 'a little' with uncountable nouns (oil, sugar, water) and 'a few' with countable plural nouns."
  },
  {
    id: "a2_u08_l116_p14",
    type: "speaking",
    prompt: "Speak this grocery market query clearly:",
    targetSentence: "Excuse me, where can I find organic gluten-free oats?",
    audioText: "Excuse me, where can I find organic gluten-free oats?"
  },
  {
    id: "a2_u08_l116_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the supermarket purchase sentence:",
    audioText: "I bought two cartons of almond milk and a bunch of ripe bananas.",
    targetSentence: "I bought two cartons of almond milk and a bunch of ripe bananas."
  },
  {
    id: "a2_u08_l116_p16",
    type: "error_correction",
    prompt: "Correct the quantifier error with countable nouns:",
    sourceSentence: "How much apples did you put in the basket?",
    targetSentence: "How many apples did you put in the basket?",
    options: [
      { id: "o1", text: "How many apples did you put in the basket?", isCorrect: true },
      { id: "o2", text: "How much of apples did you put?", isCorrect: false },
      { id: "o3", text: "How little apples did you put?", isCorrect: false },
      { id: "o4", text: "How many apple did you put in basket?", isCorrect: false }
    ],
    correctAnswer: "How many apples did you put in the basket?",
    explanation: "'Apples' is countable plural, so we use 'How many', not 'How much'."
  },
  {
    id: "a2_u08_l116_p17",
    type: "mediation",
    prompt: "Mediation: A customer at the deli counter wants to know the difference between two cheeses. Explain helpfully:",
    sourceSentence: "What is the difference between mild cheddar and mature cheddar?",
    targetSentence: "Mild cheddar is creamy and subtle, while mature cheddar is aged longer and has a sharper, richer flavor.",
    options: [
      { id: "o1", text: "Mild cheddar is creamy and subtle, while mature cheddar is aged longer and has a sharper, richer flavor.", isCorrect: true },
      { id: "o2", text: "Cows produce milk on green pastures.", isCorrect: false },
      { id: "o3", text: "Cheese was invented in refrigerators.", isCorrect: false }
    ],
    correctAnswer: "Mild cheddar is creamy and subtle, while mature cheddar is aged longer and has a sharper, richer flavor.",
    explanation: "Clearly explains flavor profiles and aging differences in food products."
  },
  {
    id: "a2_u08_l116_p18",
    type: "match_pairs",
    prompt: "Match the food quantities and containers:",
    options: [
      { id: "m1", text: "a carton of" },
      { id: "m1_m", text: "milk / orange juice / eggs" },
      { id: "m2", text: "a bunch of" },
      { id: "m2_m", text: "grapes / bananas / fresh herbs" },
      { id: "m3", text: "a jar of" },
      { id: "m3_m", text: "strawberry jam / honey / peanut butter" },
      { id: "m4", text: "a pinch of" },
      { id: "m4_m", text: "sea salt / black pepper / cinnamon" }
    ]
  },
  {
    id: "a2_u08_l116_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing smart grocery shopping:",
    sourceSentence: "Checking expiration dates ensures food freshness and prevents unnecessary waste.",
    targetSentence: "Checking expiration dates ensures food freshness and prevents unnecessary waste",
    wordBank: ["Checking", "expiration", "dates", "ensures", "food", "freshness", "and", "prevents", "unnecessary", "waste", "few", "much"]
  },
  {
    id: "a2_u08_l116_p20",
    type: "translation",
    prompt: "Translate into English: 'क्या आपके पास कोई ताजी मौसमी स्ट्रॉबेरी बची है?'",
    sourceSentence: "क्या आपके पास कोई ताजी मौसमी स्ट्रॉबेरी बची है?",
    targetSentence: "Do you have any fresh seasonal strawberries left?",
    wordBank: ["Do", "you", "have", "any", "fresh", "seasonal", "strawberries", "left", "much", "many"]
  },
  {
    id: "a2_u08_l116_p21",
    type: "listening",
    prompt: "Listen to the cashier interaction and identify the payment method:",
    audioText: "Your total comes to twenty-four pounds and fifty pence. Would you like to pay by contactless card or cash?",
    targetSentence: "The total is £24.50 and the customer can pay by card or cash.",
    options: [
      { id: "o1", text: "The total is £24.50 and the customer can pay by card or cash.", isCorrect: true },
      { id: "o2", text: "The groceries are completely free today.", isCorrect: false },
      { id: "o3", text: "The store only accepts cheques.", isCorrect: false }
    ],
    correctAnswer: "The total is £24.50 and the customer can pay by card or cash.",
    explanation: "Audio explicitly states the total (£24.50) and offers contactless card or cash."
  },
  {
    id: "a2_u08_l116_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences describing your weekly grocery list using container and quantity words:",
    targetSentence: "Every weekend, I buy two loaves of wholemeal bread, a carton of oat milk, and plenty of fresh green vegetables for salads.",
    audioText: "Every weekend, I buy two loaves of wholemeal bread, a carton of oat milk, and plenty of fresh green vegetables for salads."
  }
];

const l116_review: Exercise[] = [
  {
    id: "a2_u08_l116_r9",
    type: "dialogue_completion",
    prompt: "Complete the grocery store dialogue:",
    sourceSentence: "Customer: Could you tell me where the olive oils are stocked?\nAssistant: _____",
    targetSentence: "They are in aisle four, on the middle shelf next to the vinegars.",
    options: [
      { id: "o1", text: "They are in aisle four, on the middle shelf next to the vinegars.", isCorrect: true },
      { id: "o2", text: "Olive trees grow in the Mediterranean.", isCorrect: false },
      { id: "o3", text: "I drank three bottles yesterday.", isCorrect: false },
      { id: "o4", text: "Shoes are on the second floor.", isCorrect: false }
    ],
    correctAnswer: "They are in aisle four, on the middle shelf next to the vinegars.",
    explanation: "Gives precise supermarket location directions (aisle, shelf)."
  },
  {
    id: "a2_u08_l116_r10",
    type: "reading",
    prompt: "Read the supermarket receipt return policy:\n\"Perishable chilled food items may be returned within 48 hours with a valid purchase receipt for a full refund or exchange.\"\nWithin what timeframe must perishable goods be returned?",
    sourceSentence: "Within what timeframe must perishable goods be returned?",
    targetSentence: "Within 48 hours.",
    options: [
      { id: "o1", text: "Within 48 hours.", isCorrect: true },
      { id: "o2", text: "Within 30 days.", isCorrect: false },
      { id: "o3", text: "Never.", isCorrect: false }
    ],
    correctAnswer: "Within 48 hours.",
    explanation: "The return policy explicitly stipulates 'within 48 hours with a valid purchase receipt'."
  }
];

const l116_assess: Exercise[] = [
  {
    id: "a2_u08_l116_a9",
    type: "mediation",
    prompt: "Mediation: A friend is organizing a picnic for six people. Suggest an efficient grocery list with quantities:",
    sourceSentence: "What food quantities should we buy for our picnic of six?",
    targetSentence: "Let's buy two loaves of sourdough bread, a pack of sliced cheeses, two bunches of grapes, and three bottles of sparkling juice.",
    options: [
      { id: "o1", text: "Let's buy two loaves of sourdough bread, a pack of sliced cheeses, two bunches of grapes, and three bottles of sparkling juice.", isCorrect: true },
      { id: "o2", text: "You should bring an umbrella because clouds are in the sky.", isCorrect: false },
      { id: "o3", text: "Picnics were invented in France.", isCorrect: false }
    ],
    correctAnswer: "Let's buy two loaves of sourdough bread, a pack of sliced cheeses, two bunches of grapes, and three bottles of sparkling juice.",
    explanation: "Demonstrates accurate quantity collocations (loaves, pack, bunches, bottles) for a group."
  },
  {
    id: "a2_u08_l116_a10",
    type: "speaking",
    prompt: "Speak your final grocery communication statement:",
    targetSentence: "Planning grocery purchases in advance saves time, reduces food waste, and supports healthy eating.",
    audioText: "Planning grocery purchases in advance saves time, reduces food waste, and supports healthy eating."
  }
];

// =========================================================================
// LESSON 117: Clothes Shopping, Sizing, Colors & Accessories
// =========================================================================
const l117_practice: Exercise[] = [
  {
    id: "a2_u08_l117_p11",
    type: "reading",
    prompt: "Read the clothing store policy and answer:\n\"Fitting rooms are located on the second floor near the elevator. Customers may take a maximum of six garments into the fitting room at one time. If you require a different size, our retail advisors are happy to assist.\"\nWhat is the maximum number of items allowed in the fitting room at once?",
    sourceSentence: "What is the maximum number of items allowed in the fitting room at once?",
    targetSentence: "Six garments.",
    options: [
      { id: "o1", text: "Six garments.", isCorrect: true },
      { id: "o2", text: "Two garments.", isCorrect: false },
      { id: "o3", text: "Ten garments.", isCorrect: false },
      { id: "o4", text: "Unlimited items.", isCorrect: false }
    ],
    correctAnswer: "Six garments.",
    explanation: "The store policy states: 'a maximum of six garments into the fitting room at one time'."
  },
  {
    id: "a2_u08_l117_p12",
    type: "fill_blank",
    prompt: "Choose the correct demonstrative pronoun for plural clothing items close to the speaker:",
    sourceSentence: "I really like ____ blue linen shirts on this front rack.",
    targetSentence: "I really like these blue linen shirts on this front rack.",
    options: [
      { id: "o1", text: "these", isCorrect: true },
      { id: "o2", text: "this", isCorrect: false },
      { id: "o3", text: "that", isCorrect: false },
      { id: "o4", text: "those ones over there", isCorrect: false }
    ],
    correctAnswer: "these",
    explanation: "'These' is used for plural objects near the speaker."
  },
  {
    id: "a2_u08_l117_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly contrasts 'too' with 'enough' for clothing fit?",
    sourceSentence: "This jacket is too tight; do you have it in a larger size?",
    targetSentence: "This jacket is too tight; do you have it in a larger size?",
    options: [
      { id: "o1", text: "This jacket is too tight; do you have it in a larger size?", isCorrect: true },
      { id: "o2", text: "This jacket is enough tight; do you have smaller?", isCorrect: false },
      { id: "o3", text: "This jacket is tight too much; have you big size?", isCorrect: false },
      { id: "o4", text: "This jacket is too much big enough for me.", isCorrect: false }
    ],
    correctAnswer: "This jacket is too tight; do you have it in a larger size?",
    explanation: "'Too + adjective' indicates an excessive, undesirable degree (too tight)."
  },
  {
    id: "a2_u08_l117_p14",
    type: "speaking",
    prompt: "Speak this fitting room request clearly:",
    targetSentence: "Could I try this woolen sweater on in a medium size, please?",
    audioText: "Could I try this woolen sweater on in a medium size, please?"
  },
  {
    id: "a2_u08_l117_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the clothes shopping sentence:",
    audioText: "These leather shoes are stylish and comfortable enough for daily wear.",
    targetSentence: "These leather shoes are stylish and comfortable enough for daily wear."
  },
  {
    id: "a2_u08_l117_p16",
    type: "error_correction",
    prompt: "Correct the word order mistake with 'enough':",
    sourceSentence: "These trousers are not enough long for my height.",
    targetSentence: "These trousers are not long enough for my height.",
    options: [
      { id: "o1", text: "These trousers are not long enough for my height.", isCorrect: true },
      { id: "o2", text: "These trousers are not enough of long.", isCorrect: false },
      { id: "o3", text: "These trousers are too enough long.", isCorrect: false },
      { id: "o4", text: "These trousers are no long enough.", isCorrect: false }
    ],
    correctAnswer: "These trousers are not long enough for my height.",
    explanation: "'Enough' follows adjectives: 'adjective + enough' (long enough)."
  },
  {
    id: "a2_u08_l117_p17",
    type: "mediation",
    prompt: "Mediation: A friend is looking for an outfit for a formal summer wedding. Offer constructive style advice:",
    sourceSentence: "What should I wear to an outdoor summer wedding?",
    targetSentence: "A breathable light-colored linen suit or an elegant pastel dress with comfortable dress shoes would be perfect.",
    options: [
      { id: "o1", text: "A breathable light-colored linen suit or an elegant pastel dress with comfortable dress shoes would be perfect.", isCorrect: true },
      { id: "o2", text: "Wear heavy winter boots and a thick ski jacket.", isCorrect: false },
      { id: "o3", text: "Weddings take place on calendar dates.", isCorrect: false }
    ],
    correctAnswer: "A breathable light-colored linen suit or an elegant pastel dress with comfortable dress shoes would be perfect.",
    explanation: "Recommends seasonally appropriate fabrics, colors, and formal footwear."
  },
  {
    id: "a2_u08_l117_p18",
    type: "match_pairs",
    prompt: "Match the clothing and fashion idioms:",
    options: [
      { id: "m1", text: "try on" },
      { id: "m1_m", text: "put on a garment to check size and appearance" },
      { id: "m2", text: "fit like a glove" },
      { id: "m2_m", text: "fit someone perfectly in size and shape" },
      { id: "m3", text: "out of stock" },
      { id: "m3_m", text: "temporarily unavailable for purchase" },
      { id: "m4", text: "in the sale" },
      { id: "m4_m", text: "available at a discounted promotional price" }
    ]
  },
  {
    id: "a2_u08_l117_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence inquiring about store inventory:",
    sourceSentence: "Do you have this formal cotton shirt in navy blue?",
    targetSentence: "Do you have this formal cotton shirt in navy blue",
    wordBank: ["Do", "you", "have", "this", "formal", "cotton", "shirt", "in", "navy", "blue", "too", "these"]
  },
  {
    id: "a2_u08_l117_p20",
    type: "translation",
    prompt: "Translate into English: 'यह कोट बहुत ढीला है; क्या मैं छोटा साइज देख सकता हूँ?'",
    sourceSentence: "यह कोट बहुत ढीला है; क्या मैं छोटा साइज देख सकता हूँ?",
    targetSentence: "This coat is too loose; could I see a smaller size?",
    wordBank: ["This", "coat", "is", "too", "loose", "could", "I", "see", "a", "smaller", "size", "enough"]
  },
  {
    id: "a2_u08_l117_p21",
    type: "listening",
    prompt: "Listen to the store announcement and identify the sale promotion:",
    audioText: "Today only, enjoy thirty percent off all winter outerwear, scarves, and leather boots on the third floor.",
    targetSentence: "30% off all winter outerwear, scarves, and leather boots on the 3rd floor.",
    options: [
      { id: "o1", text: "30% off all winter outerwear, scarves, and leather boots on the 3rd floor.", isCorrect: true },
      { id: "o2", text: "The clothing department is closed today.", isCorrect: false },
      { id: "o3", text: "Summer swimwear is fifty percent off.", isCorrect: false }
    ],
    correctAnswer: "30% off all winter outerwear, scarves, and leather boots on the 3rd floor.",
    explanation: "Audio explicitly specifies 30% discount on winter outerwear, scarves, and boots on floor 3."
  },
  {
    id: "a2_u08_l117_p22",
    type: "personal_production",
    prompt: "Describe your personal style and what you prefer wearing for work and casual weekends in 2-3 sentences:",
    targetSentence: "For work, I prefer smart casual outfits like tailored trousers and cotton shirts. On weekends, I wear comfortable jeans and hoodies.",
    audioText: "For work, I prefer smart casual outfits like tailored trousers and cotton shirts. On weekends, I wear comfortable jeans and hoodies."
  }
];

const l117_review: Exercise[] = [
  {
    id: "a2_u08_l117_r9",
    type: "dialogue_completion",
    prompt: "Complete the customer service exchange:",
    sourceSentence: "Customer: I bought this dress yesterday, but it's too small. Can I exchange it?\nAssistant: _____",
    targetSentence: "Certainly! As long as you have the receipt and tags attached, we can exchange it for a larger size.",
    options: [
      { id: "o1", text: "Certainly! As long as you have the receipt and tags attached, we can exchange it for a larger size.", isCorrect: true },
      { id: "o2", text: "No, dresses are made of woven yarn.", isCorrect: false },
      { id: "o3", text: "I went shopping in Paris five years ago.", isCorrect: false },
      { id: "o4", text: "You must pay ten times more.", isCorrect: false }
    ],
    correctAnswer: "Certainly! As long as you have the receipt and tags attached, we can exchange it for a larger size.",
    explanation: "Clearly explains the standard exchange policy conditions (receipt and tags)."
  },
  {
    id: "a2_u08_l117_r10",
    type: "reading",
    prompt: "Read the garment care label:\n\"100% Organic Silk: Dry clean only. Do not tumble dry. Cool iron on reverse side if needed.\"\nHow should this silk garment be dried?",
    sourceSentence: "How should this silk garment be dried?",
    targetSentence: "It should not be tumble dried (dry clean only).",
    options: [
      { id: "o1", text: "It should not be tumble dried (dry clean only).", isCorrect: true },
      { id: "o2", text: "In a high-temperature tumble dryer.", isCorrect: false },
      { id: "o3", text: "With boiling hot water.", isCorrect: false }
    ],
    correctAnswer: "It should not be tumble dried (dry clean only).",
    explanation: "The care label explicitly instructs: 'Do not tumble dry. Dry clean only.'"
  }
];

const l117_assess: Exercise[] = [
  {
    id: "a2_u08_l117_a9",
    type: "mediation",
    prompt: "Mediation: Help a tourist request a tax-free shopping refund form at a department store checkout:",
    sourceSentence: "How can I claim tax-free shopping as an international visitor?",
    targetSentence: "Please show your passport to the cashier, and they will print a tax-free refund form for you to validate at airport customs.",
    options: [
      { id: "o1", text: "Please show your passport to the cashier, and they will print a tax-free refund form for you to validate at airport customs.", isCorrect: true },
      { id: "o2", text: "Taxes are paid to the national government.", isCorrect: false },
      { id: "o3", text: "You should buy twenty pairs of socks.", isCorrect: false }
    ],
    correctAnswer: "Please show your passport to the cashier, and they will print a tax-free refund form for you to validate at airport customs.",
    explanation: "Explains the exact steps for international tax-free shopping procedures."
  },
  {
    id: "a2_u08_l117_a10",
    type: "speaking",
    prompt: "Speak your final personal expression statement on clothing choices:",
    targetSentence: "Choosing high-quality, comfortable clothing allows us to express our personality with confidence.",
    audioText: "Choosing high-quality, comfortable clothing allows us to express our personality with confidence."
  }
];

// =========================================================================
// LESSON 118: Dining Out, Restaurant Etiquette & Dietary Needs
// =========================================================================
const l118_practice: Exercise[] = [
  {
    id: "a2_u08_l118_p11",
    type: "reading",
    prompt: "Read the restaurant menu notice and answer:\n\"Please inform your server of any food allergies before placing your order. Our kitchen handles nuts, dairy, gluten, and shellfish. Vegetarian and vegan dishes are marked with a green leaf symbol.\"\nHow are vegetarian and vegan dishes identified on the menu?",
    sourceSentence: "How are vegetarian and vegan dishes identified on the menu?",
    targetSentence: "With a green leaf symbol.",
    options: [
      { id: "o1", text: "With a green leaf symbol.", isCorrect: true },
      { id: "o2", text: "With a red warning star.", isCorrect: false },
      { id: "o3", text: "They are written in a secret code.", isCorrect: false },
      { id: "o4", text: "They are not listed on the menu.", isCorrect: false }
    ],
    correctAnswer: "With a green leaf symbol.",
    explanation: "The notice states: 'Vegetarian and vegan dishes are marked with a green leaf symbol.'"
  },
  {
    id: "a2_u08_l118_p12",
    type: "fill_blank",
    prompt: "Choose the polite phrase to request the bill in a restaurant:",
    sourceSentence: "Excuse me, could we ____ the bill, please?",
    targetSentence: "Excuse me, could we have the bill, please?",
    options: [
      { id: "o1", text: "have", isCorrect: true },
      { id: "o2", text: "give", isCorrect: false },
      { id: "o3", text: "demand", isCorrect: false },
      { id: "o4", text: "take out", isCorrect: false }
    ],
    correctAnswer: "have",
    explanation: "'Could we have the bill / check, please?' is the standard polite formula."
  },
  {
    id: "a2_u08_l118_p13",
    type: "multiple_choice",
    prompt: "Which sentence politely explains a dietary restriction?",
    sourceSentence: "I am allergic to peanuts, so could you check if this sauce contains any nuts?",
    targetSentence: "I am allergic to peanuts, so could you check if this sauce contains any nuts?",
    options: [
      { id: "o1", text: "I am allergic to peanuts, so could you check if this sauce contains any nuts?", isCorrect: true },
      { id: "o2", text: "I hate peanuts and cook sauces badly.", isCorrect: false },
      { id: "o3", text: "Do not put food in my dish.", isCorrect: false },
      { id: "o4", text: "Peanuts are round and brown.", isCorrect: false }
    ],
    correctAnswer: "I am allergic to peanuts, so could you check if this sauce contains any nuts?",
    explanation: "States the specific allergy ('allergic to peanuts') and requests kitchen verification politely."
  },
  {
    id: "a2_u08_l118_p14",
    type: "speaking",
    prompt: "Speak this polite ordering phrase clearly:",
    targetSentence: "I'd like to order the grilled salmon with steamed seasonal vegetables, please.",
    audioText: "I'd like to order the grilled salmon with steamed seasonal vegetables, please."
  },
  {
    id: "a2_u08_l118_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the restaurant dialogue turn:",
    audioText: "Would you like still or sparkling mineral water for the table?",
    targetSentence: "Would you like still or sparkling mineral water for the table?"
  },
  {
    id: "a2_u08_l118_p16",
    type: "error_correction",
    prompt: "Correct the impolite or ungrammatical restaurant request:",
    sourceSentence: "Give me the menu immediately.",
    targetSentence: "Could we see the dessert menu, please?",
    options: [
      { id: "o1", text: "Could we see the dessert menu, please?", isCorrect: true },
      { id: "o2", text: "Bring menu to me fast.", isCorrect: false },
      { id: "o3", text: "I want see menu now.", isCorrect: false },
      { id: "o4", text: "Give menu here.", isCorrect: false }
    ],
    correctAnswer: "Could we see the dessert menu, please?",
    explanation: "'Could we see... please?' uses polite modal framing rather than direct commands."
  },
  {
    id: "a2_u08_l118_p17",
    type: "mediation",
    prompt: "Mediation: A dining companion received a cold soup by mistake. Help them request a warm replacement politely:",
    sourceSentence: "My vegetable soup arrived lukewarm rather than hot.",
    targetSentence: "Excuse me, could you please heat this soup up for us? It arrived a bit cold.",
    options: [
      { id: "o1", text: "Excuse me, could you please heat this soup up for us? It arrived a bit cold.", isCorrect: true },
      { id: "o2", text: "Your kitchen is awful and we are leaving immediately!", isCorrect: false },
      { id: "o3", text: "Soup is made of water and salt.", isCorrect: false }
    ],
    correctAnswer: "Excuse me, could you please heat this soup up for us? It arrived a bit cold.",
    explanation: "Handles a service issue with polite, constructive language."
  },
  {
    id: "a2_u08_l118_p18",
    type: "match_pairs",
    prompt: "Match the restaurant dining terms:",
    options: [
      { id: "m1", text: "appetizer / starter" },
      { id: "m1_m", text: "small dish served before the main meal" },
      { id: "m2", text: "main course" },
      { id: "m2_m", text: "the primary and most substantial dish of a meal" },
      { id: "m3", text: "dessert" },
      { id: "m3_m", text: "sweet course served at the end of a meal" },
      { id: "m4", text: "leave a tip" },
      { id: "m4_m", text: "give extra money to the server for good service" }
    ]
  },
  {
    id: "a2_u08_l118_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a polite table reservation request:",
    sourceSentence: "I would like to book a table for four at eight tonight.",
    targetSentence: "I would like to book a table for four at eight tonight",
    wordBank: ["I", "would", "like", "to", "book", "a", "table", "for", "four", "at", "eight", "tonight", "give"]
  },
  {
    id: "a2_u08_l118_p20",
    type: "translation",
    prompt: "Translate into English: 'क्या हम बिल को बराबर बांट सकते हैं?'",
    sourceSentence: "क्या हम बिल को बराबर बांट सकते हैं?",
    targetSentence: "Could we split the bill equally, please?",
    wordBank: ["Could", "we", "split", "the", "bill", "equally", "please", "have", "divide"]
  },
  {
    id: "a2_u08_l118_p21",
    type: "listening",
    prompt: "Listen to the waiter's recommendation and answer:",
    audioText: "Our chef's special tonight is handmade ravioli stuffed with spinach and ricotta in a sage butter sauce.",
    targetSentence: "The special is handmade spinach and ricotta ravioli in sage butter sauce.",
    options: [
      { id: "o1", text: "The special is handmade spinach and ricotta ravioli in sage butter sauce.", isCorrect: true },
      { id: "o2", text: "The special is deep-fried chicken wings with fries.", isCorrect: false },
      { id: "o3", text: "The kitchen has run out of all food.", isCorrect: false }
    ],
    correctAnswer: "The special is handmade spinach and ricotta ravioli in sage butter sauce.",
    explanation: "Audio explicitly describes handmade ravioli with spinach, ricotta, and sage butter."
  },
  {
    id: "a2_u08_l118_p22",
    type: "personal_production",
    prompt: "Describe your favorite restaurant experience and dish in 2-3 sentences:",
    targetSentence: "My favorite dining experience was at an Italian trattoria where I had fresh mushroom risotto. The atmosphere was warm and the staff were exceptionally hospitable.",
    audioText: "My favorite dining experience was at an Italian trattoria where I had fresh mushroom risotto. The atmosphere was warm and the staff were exceptionally hospitable."
  }
];

const l118_review: Exercise[] = [
  {
    id: "a2_u08_l118_r9",
    type: "dialogue_completion",
    prompt: "Complete the table inquiry exchange:",
    sourceSentence: "Server: How was everything with your meal tonight?\nCustomer: _____",
    targetSentence: "Everything was absolutely delicious, thank you! Compliments to the chef.",
    options: [
      { id: "o1", text: "Everything was absolutely delicious, thank you! Compliments to the chef.", isCorrect: true },
      { id: "o2", text: "Plates are made of porcelain.", isCorrect: false },
      { id: "o3", text: "I have paid yesterday in another city.", isCorrect: false },
      { id: "o4", text: "You must eat all my bread.", isCorrect: false }
    ],
    correctAnswer: "Everything was absolutely delicious, thank you! Compliments to the chef.",
    explanation: "Offers warm, polite feedback acknowledging the food quality."
  },
  {
    id: "a2_u08_l118_r10",
    type: "reading",
    prompt: "Read the service charge notice at the bottom of the bill:\n\"An optional 10% discretionary service charge has been added to your bill. All gratuities go directly to kitchen and floor staff.\"\nWho receives the service charge tips?",
    sourceSentence: "Who receives the service charge tips?",
    targetSentence: "The kitchen and floor staff directly.",
    options: [
      { id: "o1", text: "The kitchen and floor staff directly.", isCorrect: true },
      { id: "o2", text: "Only the building owner.", isCorrect: false },
      { id: "o3", text: "The city council tax department.", isCorrect: false }
    ],
    correctAnswer: "The kitchen and floor staff directly.",
    explanation: "The notice states: 'All gratuities go directly to kitchen and floor staff.'"
  }
];

const l118_assess: Exercise[] = [
  {
    id: "a2_u08_l118_a9",
    type: "mediation",
    prompt: "Mediation: A foreign colleague is visiting and has a severe gluten intolerance. Help them order safely from a local menu:",
    sourceSentence: "Which dishes on this menu are safe for someone with celiac disease?",
    targetSentence: "You can safely choose the grilled sea bass with roasted potatoes or the quinoa salad, as they are naturally gluten-free.",
    options: [
      { id: "o1", text: "You can safely choose the grilled sea bass with roasted potatoes or the quinoa salad, as they are naturally gluten-free.", isCorrect: true },
      { id: "o2", text: "Eat the crusty wheat bread with butter.", isCorrect: false },
      { id: "o3", text: "Fish swim in the blue ocean.", isCorrect: false }
    ],
    correctAnswer: "You can safely choose the grilled sea bass with roasted potatoes or the quinoa salad, as they are naturally gluten-free.",
    explanation: "Identifies safe, gluten-free dish components for health safety."
  },
  {
    id: "a2_u08_l118_a10",
    type: "speaking",
    prompt: "Speak your final dining etiquette statement:",
    targetSentence: "Dining together with friends creates wonderful opportunities for meaningful conversation and cultural sharing.",
    audioText: "Dining together with friends creates wonderful opportunities for meaningful conversation and cultural sharing."
  }
];

// =========================================================================
// LESSON 119: Health Symptoms, Pharmacy Visits & Doctor Consultations
// =========================================================================
const l119_practice: Exercise[] = [
  {
    id: "a2_u08_l119_p11",
    type: "reading",
    prompt: "Read the pharmacy medication label and answer:\n\"Amoxicillin 500mg: Take one capsule three times daily with meals. Complete the full seven-day course even if symptoms improve. Store in a cool, dry place away from direct sunlight.\"\nWhy should the patient complete the full seven-day course?",
    sourceSentence: "Why should the patient complete the full seven-day course?",
    targetSentence: "To ensure the infection is completely treated and prevent antibiotic resistance.",
    options: [
      { id: "o1", text: "To ensure the infection is completely treated and prevent antibiotic resistance.", isCorrect: true },
      { id: "o2", text: "Because medicine tastes sweet like candy.", isCorrect: false },
      { id: "o3", text: "To finish all pills before sunset today.", isCorrect: false },
      { id: "o4", text: "There is no reason.", isCorrect: false }
    ],
    correctAnswer: "To ensure the infection is completely treated and prevent antibiotic resistance.",
    explanation: "Medical guidelines require completing antibiotic courses even if symptoms improve."
  },
  {
    id: "a2_u08_l119_p12",
    type: "fill_blank",
    prompt: "Choose the correct modal of strong medical advice:",
    sourceSentence: "You ____ rest your sprained ankle and apply an ice pack for twenty minutes.",
    targetSentence: "You should rest your sprained ankle and apply an ice pack for twenty minutes.",
    options: [
      { id: "o1", text: "should", isCorrect: true },
      { id: "o2", text: "must to", isCorrect: false },
      { id: "o3", text: "should to", isCorrect: false },
      { id: "o4", text: "ought", isCorrect: false }
    ],
    correctAnswer: "should",
    explanation: "'Should + base verb' is the standard modal for medical advice."
  },
  {
    id: "a2_u08_l119_p13",
    type: "multiple_choice",
    prompt: "Which sentence correctly describes health symptoms to a doctor?",
    sourceSentence: "I have had a throbbing headache and a sore throat since yesterday morning.",
    targetSentence: "I have had a throbbing headache and a sore throat since yesterday morning.",
    options: [
      { id: "o1", text: "I have had a throbbing headache and a sore throat since yesterday morning.", isCorrect: true },
      { id: "o2", text: "I am having headache yesterday since morning.", isCorrect: false },
      { id: "o3", text: "My throat is hurted since two days ago.", isCorrect: false },
      { id: "o4", text: "I have head paining tomorrow morning.", isCorrect: false }
    ],
    correctAnswer: "I have had a throbbing headache and a sore throat since yesterday morning.",
    explanation: "Uses Present Perfect with 'since' to describe ongoing symptoms from a specific starting point."
  },
  {
    id: "a2_u08_l119_p14",
    type: "speaking",
    prompt: "Speak this doctor consultation statement clearly:",
    targetSentence: "I feel dizzy whenever I stand up, and I have a mild fever.",
    audioText: "I feel dizzy whenever I stand up, and I have a mild fever."
  },
  {
    id: "a2_u08_l119_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the pharmacist's advice:",
    audioText: "Take two tablets after meals with a full glass of water.",
    targetSentence: "Take two tablets after meals with a full glass of water."
  },
  {
    id: "a2_u08_l119_p16",
    type: "error_correction",
    prompt: "Correct the health expression error:",
    sourceSentence: "I have head pain and throat pain since three days.",
    targetSentence: "I have had a headache and a sore throat for three days.",
    options: [
      { id: "o1", text: "I have had a headache and a sore throat for three days.", isCorrect: true },
      { id: "o2", text: "I have headache and sore throat since three days.", isCorrect: false },
      { id: "o3", text: "I am head hurting for three days.", isCorrect: false },
      { id: "o4", text: "My head is paining for three days.", isCorrect: false }
    ],
    correctAnswer: "I have had a headache and a sore throat for three days.",
    explanation: "We use 'headache' and 'sore throat' with 'for + duration' in English."
  },
  {
    id: "a2_u08_l119_p17",
    type: "mediation",
    prompt: "Mediation: A neighbor has a minor cut and asks how to treat it. Explain basic first aid:",
    sourceSentence: "How should I clean and dress this small cut on my finger?",
    targetSentence: "Rinse it with clean water, apply antiseptic cream, and cover it with a sterile bandage to prevent infection.",
    options: [
      { id: "o1", text: "Rinse it with clean water, apply antiseptic cream, and cover it with a sterile bandage to prevent infection.", isCorrect: true },
      { id: "o2", text: "Rub dirty soil directly on the wound.", isCorrect: false },
      { id: "o3", text: "Bandages are white in color.", isCorrect: false }
    ],
    correctAnswer: "Rinse it with clean water, apply antiseptic cream, and cover it with a sterile bandage to prevent infection.",
    explanation: "Provides clear, safe first-aid hygiene instructions."
  },
  {
    id: "a2_u08_l119_p18",
    type: "match_pairs",
    prompt: "Match health conditions with their typical treatments:",
    options: [
      { id: "m1", text: "sprained ankle" },
      { id: "m1_m", text: "rest, ice pack, and elevation" },
      { id: "m2", text: "bacterial infection" },
      { id: "m2_m", text: "prescribed antibiotic course" },
      { id: "m3", text: "seasonal allergy" },
      { id: "m3_m", text: "antihistamine eye drops or tablets" },
      { id: "m4", text: "dehydration" },
      { id: "m4_m", text: "drinking water with oral rehydration salts" }
    ]
  },
  {
    id: "a2_u08_l119_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a sentence describing medical consultation:",
    sourceSentence: "The physician examined my chest and prescribed soothing cough syrup.",
    targetSentence: "The physician examined my chest and prescribed soothing cough syrup",
    wordBank: ["The", "physician", "examined", "my", "chest", "and", "prescribed", "soothing", "cough", "syrup", "must", "pain"]
  },
  {
    id: "a2_u08_l119_p20",
    type: "translation",
    prompt: "Translate into English: 'डॉक्टर ने मुझे तीन दिनों तक आराम करने और खूब पानी पीने की सलाह दी।'",
    sourceSentence: "डॉक्टर ने मुझे तीन दिनों तक आराम करने और खूब पानी पीने की सलाह दी।",
    targetSentence: "The doctor advised me to rest for three days and drink plenty of fluids.",
    wordBank: ["The", "doctor", "advised", "me", "to", "rest", "for", "three", "days", "and", "drink", "plenty", "of", "fluids"]
  },
  {
    id: "a2_u08_l119_p21",
    type: "listening",
    prompt: "Listen to the clinic receptionist and identify appointment details:",
    audioText: "Doctor Jenkins has an opening tomorrow morning at nine-fifteen. Please arrive ten minutes early with your medical insurance card.",
    targetSentence: "Appointment is tomorrow at 9:15 AM; arrive 10 minutes early with insurance card.",
    options: [
      { id: "o1", text: "Appointment is tomorrow at 9:15 AM; arrive 10 minutes early with insurance card.", isCorrect: true },
      { id: "o2", text: "The clinic is closed for the entire week.", isCorrect: false },
      { id: "o3", text: "Doctor Jenkins retired three years ago.", isCorrect: false }
    ],
    correctAnswer: "Appointment is tomorrow at 9:15 AM; arrive 10 minutes early with insurance card.",
    explanation: "Audio explicitly states 9:15 AM tomorrow and bringing medical insurance card."
  },
  {
    id: "a2_u08_l119_p22",
    type: "personal_production",
    prompt: "Write 2-3 sentences describing how you maintain your physical and mental health:",
    targetSentence: "I stay healthy by getting eight hours of sleep, taking daily brisk walks in the park, and eating home-cooked balanced meals.",
    audioText: "I stay healthy by getting eight hours of sleep, taking daily brisk walks in the park, and eating home-cooked balanced meals."
  }
];

const l119_review: Exercise[] = [
  {
    id: "a2_u08_l119_r9",
    type: "dialogue_completion",
    prompt: "Complete the pharmacy dialogue turn:",
    sourceSentence: "Customer: Do I need a doctor's prescription for this allergy medication?\nPharmacist: _____",
    targetSentence: "No, this is available over the counter, but please read the dosage instructions carefully.",
    options: [
      { id: "o1", text: "No, this is available over the counter, but please read the dosage instructions carefully.", isCorrect: true },
      { id: "o2", text: "Medicines are made in factories.", isCorrect: false },
      { id: "o3", text: "I have taken five pills yesterday.", isCorrect: false },
      { id: "o4", text: "You must buy twenty bottles of syrup.", isCorrect: false }
    ],
    correctAnswer: "No, this is available over the counter, but please read the dosage instructions carefully.",
    explanation: "Distinguishes 'over-the-counter' medications from prescription drugs accurately."
  },
  {
    id: "a2_u08_l119_r10",
    type: "reading",
    prompt: "Read the medical advice leaflet:\n\"If high fever, persistent vomiting, or difficulty breathing occurs, seek immediate emergency medical evaluation at the nearest hospital.\"\nWhen should a patient seek immediate emergency care?",
    sourceSentence: "When should a patient seek immediate emergency care?",
    targetSentence: "If high fever, persistent vomiting, or difficulty breathing occurs.",
    options: [
      { id: "o1", text: "If high fever, persistent vomiting, or difficulty breathing occurs.", isCorrect: true },
      { id: "o2", text: "Only when the pharmacy is closed.", isCorrect: false },
      { id: "o3", text: "Never under any circumstances.", isCorrect: false }
    ],
    correctAnswer: "If high fever, persistent vomiting, or difficulty breathing occurs.",
    explanation: "The text specifies these three critical red-flag emergency symptoms."
  }
];

const l119_assess: Exercise[] = [
  {
    id: "a2_u08_l119_a9",
    type: "mediation",
    prompt: "Mediation: Explain a doctor's post-surgery recovery instructions to an elderly relative clearly and calmly:",
    sourceSentence: "The doctor said: 'Keep the incision clean and dry, avoid heavy lifting for two weeks, and take pain relievers only as prescribed.'",
    targetSentence: "You should rest at home, avoid lifting anything heavy for fourteen days, keep the bandage dry, and take your pain pills on schedule.",
    options: [
      { id: "o1", text: "You should rest at home, avoid lifting anything heavy for fourteen days, keep the bandage dry, and take your pain pills on schedule.", isCorrect: true },
      { id: "o2", text: "Run a marathon immediately to test your strength.", isCorrect: false },
      { id: "o3", text: "Hospitals have many white beds.", isCorrect: false }
    ],
    correctAnswer: "You should rest at home, avoid lifting anything heavy for fourteen days, keep the bandage dry, and take your pain pills on schedule.",
    explanation: "Relays complex medical post-care instructions into accessible, reassuring steps."
  },
  {
    id: "a2_u08_l119_a10",
    type: "speaking",
    prompt: "Speak your final personal health reflection:",
    targetSentence: "Listening to our body and seeking timely medical advice ensures long-term vitality and well-being.",
    audioText: "Listening to our body and seeking timely medical advice ensures long-term vitality and well-being."
  }
];

// =========================================================================
// LESSON 120: Unit 8 Comprehensive Review & A2 Milestone Mastery
// =========================================================================
const l120_practice: Exercise[] = [
  {
    id: "a2_u08_l120_p11",
    type: "reading",
    prompt: "Read the comprehensive review profile and answer:\n\"Priya is a dedicated pediatric nurse who works flexible shifts at the city hospital. She is extremely empathetic, loves outdoor hiking on weekends, and recently booked a vacation to Spain to practice her conversational Spanish.\"\nWhich details combine Priya's professional qualities, leisure hobby, and future travel?",
    sourceSentence: "Which details combine Priya's professional qualities, leisure hobby, and future travel?",
    targetSentence: "She is an empathetic hospital nurse, enjoys outdoor hiking, and is traveling to Spain.",
    options: [
      { id: "o1", text: "She is an empathetic hospital nurse, enjoys outdoor hiking, and is traveling to Spain.", isCorrect: true },
      { id: "o2", text: "She is a retired pilot who dislikes traveling.", isCorrect: false },
      { id: "o3", text: "She only works in an accounting firm.", isCorrect: false },
      { id: "o4", text: "She has never visited a hospital or airport.", isCorrect: false }
    ],
    correctAnswer: "She is an empathetic hospital nurse, enjoys outdoor hiking, and is traveling to Spain.",
    explanation: "Integrates Unit 8 domains: personality, healthcare workplace, sports/leisure, and travel planning."
  },
  {
    id: "a2_u08_l120_p12",
    type: "fill_blank",
    prompt: "Choose the correct indirect question structure (Travel & Services):",
    sourceSentence: "Could you please tell me when the next express train ____?",
    targetSentence: "Could you please tell me when the next express train departs?",
    options: [
      { id: "o1", text: "departs", isCorrect: true },
      { id: "o2", text: "does depart", isCorrect: false },
      { id: "o3", text: "is departing it", isCorrect: false },
      { id: "o4", text: "did departed", isCorrect: false }
    ],
    correctAnswer: "departs",
    explanation: "Indirect questions use affirmative statement word order (subject + verb)."
  },
  {
    id: "a2_u08_l120_p13",
    type: "multiple_choice",
    prompt: "Which sentence demonstrates accurate adjective order and -ed/-ing contrast?",
    sourceSentence: "He was fascinated by the intricate vintage silver watch.",
    targetSentence: "He was fascinated by the intricate vintage silver watch.",
    options: [
      { id: "o1", text: "He was fascinated by the intricate vintage silver watch.", isCorrect: true },
      { id: "o2", text: "He was fascinating by the silver vintage intricate watch.", isCorrect: false },
      { id: "o3", text: "He was fascinate by vintage silver intricate watch.", isCorrect: false },
      { id: "o4", text: "He fascinated by intricate watch silver vintage.", isCorrect: false }
    ],
    correctAnswer: "He was fascinated by the intricate vintage silver watch.",
    explanation: "Combines feeling adjective (fascinated) with order: Opinion (intricate) -> Age (vintage) -> Material (silver)."
  },
  {
    id: "a2_u08_l120_p14",
    type: "speaking",
    prompt: "Speak this milestone communication synthesis clearly:",
    targetSentence: "I can confidently navigate airports, describe my career goals, and express opinions in English.",
    audioText: "I can confidently navigate airports, describe my career goals, and express opinions in English."
  },
  {
    id: "a2_u08_l120_p15",
    type: "listen_and_type",
    prompt: "Listen and transcribe the milestone mastery sentence:",
    audioText: "Effective communication requires active listening, clear pronunciation, and cultural empathy.",
    targetSentence: "Effective communication requires active listening, clear pronunciation, and cultural empathy."
  },
  {
    id: "a2_u08_l120_p16",
    type: "error_correction",
    prompt: "Identify and fix the composite grammatical error across Unit 8 topics:",
    sourceSentence: "She is responsible to organize the travel itinerary for our supervisor who look like very strict.",
    targetSentence: "She is responsible for organizing the travel itinerary for our supervisor who looks very strict.",
    options: [
      { id: "o1", text: "She is responsible for organizing the travel itinerary for our supervisor who looks very strict.", isCorrect: true },
      { id: "o2", text: "She is responsible with organizing travel who look strict.", isCorrect: false },
      { id: "o3", text: "She is responsible to organizing travel who looks like strict.", isCorrect: false },
      { id: "o4", text: "She is responsible in organize travel itinerary.", isCorrect: false }
    ],
    correctAnswer: "She is responsible for organizing the travel itinerary for our supervisor who looks very strict.",
    explanation: "Corrects 'responsible for + -ing', relative clause agreement ('supervisor who looks'), and 'look + adjective'."
  },
  {
    id: "a2_u08_l120_p17",
    type: "mediation",
    prompt: "Mediation: A tourist group needs an all-day plan in your city including transport, dining, and sightseeing. Summarize an itinerary:",
    sourceSentence: "Can you recommend a full-day plan for our first visit to your city?",
    targetSentence: "Take the metro to the historic center, visit the national art museum, enjoy lunch at a traditional riverside café, and take an evening boat tour.",
    options: [
      { id: "o1", text: "Take the metro to the historic center, visit the national art museum, enjoy lunch at a traditional riverside café, and take an evening boat tour.", isCorrect: true },
      { id: "o2", text: "Stay inside the hotel room and look at the ceiling all day.", isCorrect: false },
      { id: "o3", text: "Cities have roads and concrete buildings.", isCorrect: false }
    ],
    correctAnswer: "Take the metro to the historic center, visit the national art museum, enjoy lunch at a traditional riverside café, and take an evening boat tour.",
    explanation: "Integrates transport, dining, cultural sightseeing, and leisure planning seamlessly."
  },
  {
    id: "a2_u08_l120_p18",
    type: "match_pairs",
    prompt: "Match the Unit 8 communicative functions with their key expressions:",
    options: [
      { id: "m1", text: "Describing Appearance" },
      { id: "m1_m", text: "He is in his early thirties with a neat beard." },
      { id: "m2", text: "Workplace Responsibility" },
      { id: "m2_m", text: "I am in charge of client onboarding and support." },
      { id: "m3", text: "Polite Travel Inquiry" },
      { id: "m3_m", text: "Could you tell me where the boarding gate is?" },
      { id: "m4", text: "Medical Advice" },
      { id: "m4_m", text: "You should take this prescription twice daily with food." }
    ]
  },
  {
    id: "a2_u08_l120_p19",
    type: "word_ordering",
    prompt: "Arrange the words into a milestone summary sentence:",
    sourceSentence: "Mastering practical English opens doors to international career opportunities and rich cross-cultural friendships.",
    targetSentence: "Mastering practical English opens doors to international career opportunities and rich cross-cultural friendships",
    wordBank: ["Mastering", "practical", "English", "opens", "doors", "to", "international", "career", "opportunities", "and", "rich", "cross-cultural", "friendships", "who"]
  },
  {
    id: "a2_u08_l120_p20",
    type: "translation",
    prompt: "Translate into English: 'मैंने इस यूनिट में अपने व्यक्तित्व, काम, यात्रा और स्वास्थ्य के बारे में बात करना सीखा है।'",
    sourceSentence: "मैंने इस यूनिट में अपने व्यक्तित्व, काम, यात्रा और स्वास्थ्य के बारे में बात करना सीखा है।",
    targetSentence: "In this unit, I have learned to talk about my personality, career, travel, and health.",
    wordBank: ["In", "this", "unit", "I", "have", "learned", "to", "talk", "about", "my", "personality", "career", "travel", "and", "health"]
  },
  {
    id: "a2_u08_l120_p21",
    type: "listening",
    prompt: "Listen to the capstone self-introduction and answer:",
    audioText: "Hello, my name is Daniel. I work as an environmental researcher in Bristol, enjoy mountain hiking and cinema, and I am planning an expedition to Patagonia next winter.",
    targetSentence: "Daniel is an environmental researcher who enjoys hiking, cinema, and is planning an expedition to Patagonia.",
    options: [
      { id: "o1", text: "Daniel is an environmental researcher who enjoys hiking, cinema, and is planning an expedition to Patagonia.", isCorrect: true },
      { id: "o2", text: "Daniel is an accountant who has never left his hometown.", isCorrect: false },
      { id: "o3", text: "Daniel dislikes outdoor sports and movies.", isCorrect: false }
    ],
    correctAnswer: "Daniel is an environmental researcher who enjoys hiking, cinema, and is planning an expedition to Patagonia.",
    explanation: "Audio encapsulates all core Unit 8 domains in an integrated personal profile."
  },
  {
    id: "a2_u08_l120_p22",
    type: "personal_production",
    prompt: "Write a 3-4 sentence comprehensive personal profile summarizing who you are, what you do, and your future aspirations:",
    targetSentence: "I am a dedicated professional with a passion for continuous learning. In my free time, I love staying active through sports and exploring new cultures. I look forward to using English to connect with people worldwide.",
    audioText: "I am a dedicated professional with a passion for continuous learning. In my free time, I love staying active through sports and exploring new cultures. I look forward to using English to connect with people worldwide."
  }
];

const l120_review: Exercise[] = [
  {
    id: "a2_u08_l120_r9",
    type: "dialogue_completion",
    prompt: "Complete the capstone milestone interview:",
    sourceSentence: "Interviewer: How has your English communication improved throughout Unit 8?\nLearner: _____",
    targetSentence: "I can now participate in workplace discussions, explain complex situations, and express my ideas with greater fluency and confidence.",
    options: [
      { id: "o1", text: "I can now participate in workplace discussions, explain complex situations, and express my ideas with greater fluency and confidence.", isCorrect: true },
      { id: "o2", text: "Grammar books are printed on white paper.", isCorrect: false },
      { id: "o3", text: "I did not speak yesterday or tomorrow.", isCorrect: false },
      { id: "o4", text: "English has twenty-six alphabets.", isCorrect: false }
    ],
    correctAnswer: "I can now participate in workplace discussions, explain complex situations, and express my ideas with greater fluency and confidence.",
    explanation: "Articulates tangible communicative progress and self-efficacy."
  },
  {
    id: "a2_u08_l120_r10",
    type: "reading",
    prompt: "Read the CEFR A2 milestone descriptor:\n\"At A2 level, learners can understand sentences and frequently used expressions related to areas of most immediate relevance (personal information, employment, local geography, shopping) and communicate in routine tasks requiring a simple and direct exchange of information.\"\nWhat characterizes CEFR A2 communication?",
    sourceSentence: "What characterizes CEFR A2 communication?",
    targetSentence: "Direct, routine exchange of information on familiar and immediately relevant topics.",
    options: [
      { id: "o1", text: "Direct, routine exchange of information on familiar and immediately relevant topics.", isCorrect: true },
      { id: "o2", text: "Writing complex doctoral dissertations in philosophy.", isCorrect: false },
      { id: "o3", text: "Only knowing single isolated words without sentence structure.", isCorrect: false }
    ],
    correctAnswer: "Direct, routine exchange of information on familiar and immediately relevant topics.",
    explanation: "Accurately captures the international CEFR A2 standard descriptor."
  }
];

const l120_assess: Exercise[] = [
  {
    id: "a2_u08_l120_a9",
    type: "mediation",
    prompt: "Mediation: Act as an interpreter between an English-speaking doctor and a non-English-speaking patient with flu symptoms:",
    sourceSentence: "The doctor says: 'Take this antiviral medication for five days, drink plenty of warm fluids, and return if your fever exceeds 39°C.'",
    targetSentence: "You need to take these antiviral pills for five days, stay well-hydrated with warm tea or water, and visit the clinic immediately if your temperature goes above 39°C.",
    options: [
      { id: "o1", text: "You need to take these antiviral pills for five days, stay well-hydrated with warm tea or water, and visit the clinic immediately if your temperature goes above 39°C.", isCorrect: true },
      { id: "o2", text: "The doctor wants you to run outside in the cold rain.", isCorrect: false },
      { id: "o3", text: "Thermometers contain mercury or digital sensors.", isCorrect: false }
    ],
    correctAnswer: "You need to take these antiviral pills for five days, stay well-hydrated with warm tea or water, and visit the clinic immediately if your temperature goes above 39°C.",
    explanation: "Demonstrates accurate, empathetic medical mediation at CEFR A2 standard."
  },
  {
    id: "a2_u08_l120_a10",
    type: "speaking",
    prompt: "Speak your final Unit 8 Milestone Graduation pledge:",
    targetSentence: "I have successfully achieved CEFR A2 Unit 8 mastery, building genuine speaking confidence and communicative fluency.",
    audioText: "I have successfully achieved CEFR A2 Unit 8 mastery, building genuine speaking confidence and communicative fluency."
  }
];

export function enrichBatch116_120() {
  console.log("=== ENRICHING LESSONS 116 TO 120 ===");
  enrichUnit8LessonData('lesson_a2_8_116', LESSON_A2_8_116_DATA, l116_practice, l116_review, l116_assess);
  enrichUnit8LessonData('lesson_a2_8_117', LESSON_A2_8_117_DATA, l117_practice, l117_review, l117_assess);
  enrichUnit8LessonData('lesson_a2_8_118', LESSON_A2_8_118_DATA, l118_practice, l118_review, l118_assess);
  enrichUnit8LessonData('lesson_a2_8_119', LESSON_A2_8_119_DATA, l119_practice, l119_review, l119_assess);
  enrichUnit8LessonData('lesson_a2_8_120', LESSON_A2_8_120_DATA, l120_practice, l120_review, l120_assess);
  console.log("=== BATCH 116-120 COMPLETED ===");
}

enrichBatch116_120();
