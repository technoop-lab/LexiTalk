import { Exercise } from '../src/types';
import { LESSON_A2_7_96_DATA } from '../src/data/lessons/lesson_a2_7_96';
import { LESSON_A2_7_97_DATA } from '../src/data/lessons/lesson_a2_7_97';
import { LESSON_A2_7_98_DATA } from '../src/data/lessons/lesson_a2_7_98';
import { LESSON_A2_7_99_DATA } from '../src/data/lessons/lesson_a2_7_99';
import { LESSON_A2_7_100_DATA } from '../src/data/lessons/lesson_a2_7_100';
import { enrichLessonData } from './enrichHelper';

// ==========================================
// LESSON 96: Shopping, Quantities & Transactions
// ==========================================
const l96_practice: Exercise[] = [
  {
    id: "a2_u07_l96_p16",
    type: "reading",
    prompt: "Read the store policy and answer the question:\n\"At EcoMart, customers who bring reusable shopping bags receive a 5% discount on all bulk produce. Electronic receipts are automatically sent via email or SMS to eliminate paper waste.\"\nHow do customers get a 5% discount at EcoMart?",
    sourceSentence: "How do customers get a 5% discount at EcoMart?",
    targetSentence: "By bringing their own reusable shopping bags.",
    options: [
      { id: "o1", text: "By bringing their own reusable shopping bags.", isCorrect: true },
      { id: "o2", text: "By spending more than 500 dollars.", isCorrect: false },
      { id: "o3", text: "By shopping only on Sundays.", isCorrect: false },
      { id: "o4", text: "By printing paper receipts.", isCorrect: false }
    ],
    correctAnswer: "By bringing their own reusable shopping bags.",
    explanation: "The text states: 'customers who bring reusable shopping bags receive a 5% discount...'"
  },
  {
    id: "a2_u07_l96_p17",
    type: "fill_blank",
    prompt: "Choose the correct quantifier for an uncountable noun:",
    sourceSentence: "Do we have ____ fresh milk left in the refrigerator?",
    targetSentence: "Do we have any fresh milk left in the refrigerator?",
    options: [
      { id: "o1", text: "any", isCorrect: true },
      { id: "o2", text: "many", isCorrect: false },
      { id: "o3", text: "a few", isCorrect: false },
      { id: "o4", text: "several", isCorrect: false }
    ],
    correctAnswer: "any",
    explanation: "\"Any\" is used in questions with uncountable nouns like milk."
  },
  {
    id: "a2_u07_l96_p18",
    type: "speaking",
    prompt: "Speak this polite transaction request aloud:",
    targetSentence: "Could I please get a receipt and pay with contactless credit card?",
    audioText: "Could I please get a receipt and pay with contactless credit card?"
  },
  {
    id: "a2_u07_l96_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the cashier's sentence:",
    audioText: "Your total comes to forty-five pounds and twenty pence.",
    targetSentence: "Your total comes to forty-five pounds and twenty pence."
  },
  {
    id: "a2_u07_l96_p20",
    type: "error_correction",
    prompt: "Correct the quantifier error with countable plural nouns:",
    sourceSentence: "There are much apples in the wooden fruit crate.",
    targetSentence: "There are many apples in the wooden fruit crate.",
    options: [
      { id: "o1", text: "There are many apples in the wooden fruit crate.", isCorrect: true },
      { id: "o2", text: "There is much apples in the wooden fruit crate.", isCorrect: false },
      { id: "o3", text: "There are much apple in the crate.", isCorrect: false },
      { id: "o4", text: "There is a few apples in the crate.", isCorrect: false }
    ],
    correctAnswer: "There are many apples in the wooden fruit crate.",
    explanation: "\"Apples\" is a countable plural noun, so use \"many\" (or \"a lot of\"), not \"much\"."
  },
  {
    id: "a2_u07_l96_p21",
    type: "mediation",
    prompt: "Mediation: A tourist is trying to buy souvenirs but cannot find the price tag. Help them ask the cashier politely:",
    sourceSentence: "How can I ask the price of this ceramic mug?",
    targetSentence: "Excuse me, how much is this ceramic mug, and do you offer any discounts for multiple items?",
    options: [
      { id: "o1", text: "Excuse me, how much is this ceramic mug, and do you offer any discounts for multiple items?", isCorrect: true },
      { id: "o2", text: "Give me mug now free.", isCorrect: false },
      { id: "o3", text: "Mug cost how many money?", isCorrect: false },
      { id: "o4", text: "I took this mug yesterday.", isCorrect: false }
    ],
    correctAnswer: "Excuse me, how much is this ceramic mug, and do you offer any discounts for multiple items?",
    explanation: "Natural, polite formula for asking price: 'Excuse me, how much is...?'"
  },
  {
    id: "a2_u07_l96_p22",
    type: "match_pairs",
    prompt: "Match quantifiers with the type of noun they modify:",
    options: [
      { id: "m1", text: "a few / several / many" },
      { id: "m1_m", text: "Countable Plural Nouns (e.g. coins, bottles)" },
      { id: "m2", text: "a little / much" },
      { id: "m2_m", text: "Uncountable Nouns (e.g. money, flour)" },
      { id: "m3", text: "a lot of / some / any" },
      { id: "m3_m", text: "Both Countable & Uncountable" },
      { id: "m4", text: "each / every" },
      { id: "m4_m", text: "Countable Singular Nouns (e.g. item, customer)" }
    ]
  },
  {
    id: "a2_u07_l96_p23",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite cashier question:",
    sourceSentence: "Would you like your receipt in the bag or printed?",
    targetSentence: "Would you like your receipt in the bag or printed",
    wordBank: ["Would", "you", "like", "your", "receipt", "in", "the", "bag", "or", "printed", "many", "is"],
    explanation: "Would you like + object + options."
  },
  {
    id: "a2_u07_l96_p24",
    type: "recognition",
    prompt: "Which quantifier means a small quantity that is still sufficient/positive?",
    sourceSentence: "a little / little / few / no",
    targetSentence: "a little",
    options: [
      { id: "o1", text: "a little", isCorrect: true },
      { id: "o2", text: "little", isCorrect: false },
      { id: "o3", text: "few", isCorrect: false },
      { id: "o4", text: "no", isCorrect: false }
    ],
    correctAnswer: "a little",
    explanation: "\"A little\" implies some (positive/sufficient), while \"little\" without 'a' implies almost none (negative/insufficient)."
  },
  {
    id: "a2_u07_l96_p25",
    type: "dialogue_completion",
    prompt: "Complete the checkout transaction dialogue:",
    sourceSentence: "Cashier: \"That comes to twenty-four euros. How would you like to pay?\"\nCustomer: \"____\"",
    targetSentence: "By debit card, please. Can I tap it on the contactless terminal?",
    options: [
      { id: "o1", text: "By debit card, please. Can I tap it on the contactless terminal?", isCorrect: true },
      { id: "o2", text: "I bought food last year.", isCorrect: false },
      { id: "o3", text: "Because twenty euros is heavy.", isCorrect: false },
      { id: "o4", text: "I never eat dinner.", isCorrect: false }
    ],
    correctAnswer: "By debit card, please. Can I tap it on the contactless terminal?",
    explanation: "Standard payment interaction specifying payment method and terminal tap."
  },
  {
    id: "a2_u07_l96_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing what groceries you need to buy this week using 'some' and 'a few':",
    targetSentence: "I need to buy some fresh olive oil and a few organic lemons for cooking dinner.",
    guidelines: "Use 'some + uncountable noun' and 'a few + countable plural noun'."
  }
];

const l96_review: Exercise[] = [
  {
    id: "a2_u07_l96_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct quantifier in a negative sentence:",
    sourceSentence: "We don't have ____ bread left for breakfast tomorrow.",
    targetSentence: "We don't have any bread left for breakfast tomorrow.",
    options: [
      { id: "o1", text: "any", isCorrect: true },
      { id: "o2", text: "some", isCorrect: false },
      { id: "o3", text: "many", isCorrect: false },
      { id: "o4", text: "few", isCorrect: false }
    ],
    correctAnswer: "any",
    explanation: "Negative clauses with uncountable nouns use \"any\": don't have any bread."
  },
  {
    id: "a2_u07_l96_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Fix the quantifier error:",
    sourceSentence: "She only has a few time before her train departs.",
    targetSentence: "She only has a little time before her train departs.",
    options: [
      { id: "o1", text: "She only has a little time before her train departs.", isCorrect: true },
      { id: "o2", text: "She only has few time before her train departs.", isCorrect: false },
      { id: "o3", text: "She only has many time before her train departs.", isCorrect: false },
      { id: "o4", text: "She only has a few times before her train departs.", isCorrect: false }
    ],
    correctAnswer: "She only has a little time before her train departs.",
    explanation: "\"Time\" (in the sense of duration) is uncountable, requiring \"a little time\"."
  },
  {
    id: "a2_u07_l96_r08",
    type: "speaking",
    prompt: "Speak this payment interaction sentence aloud clearly:",
    targetSentence: "Keep the change, thank you very much for your helpful service!",
    audioText: "Keep the change, thank you very much for your helpful service!"
  }
];

const l96_assessment: Exercise[] = [
  {
    id: "a2_u07_l96_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'how much' vs 'how many'?",
    sourceSentence: "How much luggage do you have, and how many suitcases are you checking in?",
    targetSentence: "How much luggage do you have, and how many suitcases are you checking in?",
    options: [
      { id: "o1", text: "How much luggage do you have, and how many suitcases are you checking in?", isCorrect: true },
      { id: "o2", text: "How many luggage do you have, and how much suitcases are you checking in?", isCorrect: false },
      { id: "o3", text: "How many luggages do you have, and how many suitcase are you checking in?", isCorrect: false },
      { id: "o4", text: "How much suitcases do you have and how many luggage?", isCorrect: false }
    ],
    correctAnswer: "How much luggage do you have, and how many suitcases are you checking in?",
    explanation: "\"Luggage\" is uncountable (how much), while \"suitcases\" is countable plural (how many)."
  },
  {
    id: "a2_u07_l96_a07",
    type: "listening",
    prompt: "Listen to the cashier and choose the customer's total:",
    audioText: "That will be thirty-two dollars and fifty cents altogether.",
    targetSentence: "The total amount is $32.50.",
    options: [
      { id: "o1", text: "The total amount is $32.50.", isCorrect: true },
      { id: "o2", text: "The total amount is $30.15.", isCorrect: false },
      { id: "o3", text: "The total amount is $42.50.", isCorrect: false },
      { id: "o4", text: "The total amount is $13.50.", isCorrect: false }
    ],
    correctAnswer: "The total amount is $32.50.",
    explanation: "\"Thirty-two dollars and fifty cents\" = $32.50."
  },
  {
    id: "a2_u07_l96_a08",
    type: "writing",
    prompt: "Write a short dialogue asking a store clerk if they have an item in stock:",
    targetSentence: "Excuse me, do you have any wireless headphones in stock, and how much do they cost?",
    guidelines: "Use 'Excuse me, do you have any...' and 'how much do they cost?'"
  }
];

enrichLessonData('lesson_a2_7_96', LESSON_A2_7_96_DATA, l96_practice, l96_review, l96_assessment);

// ==========================================
// LESSON 97: Clothes, Styles & Shopping Comparisons
// ==========================================
const l97_practice: Exercise[] = [
  {
    id: "a2_u07_l97_p16",
    type: "reading",
    prompt: "Read the clothing store fitting guide and answer the question:\n\"Our organic cotton sweaters are warmer and more durable than synthetic blends. If you prefer a looser fit, we recommend selecting one size larger than your usual measurement.\"\nWhy does the guide recommend organic cotton sweaters?",
    sourceSentence: "Why does the guide recommend organic cotton sweaters?",
    targetSentence: "Because they are warmer and more durable than synthetic blends.",
    options: [
      { id: "o1", text: "Because they are warmer and more durable than synthetic blends.", isCorrect: true },
      { id: "o2", text: "Because they are cheaper than plastic bags.", isCorrect: false },
      { id: "o3", text: "Because they only come in black.", isCorrect: false },
      { id: "o4", text: "Because they shrink in cold water.", isCorrect: false }
    ],
    correctAnswer: "Because they are warmer and more durable than synthetic blends.",
    explanation: "The comparative adjectives in the text highlight: 'warmer and more durable'."
  },
  {
    id: "a2_u07_l97_p17",
    type: "fill_blank",
    prompt: "Choose the correct comparative form of the adjective 'comfortable':",
    sourceSentence: "These leather sneakers are ____ than my old running shoes.",
    targetSentence: "These leather sneakers are more comfortable than my old running shoes.",
    options: [
      { id: "o1", text: "more comfortable", isCorrect: true },
      { id: "o2", text: "comfortabler", isCorrect: false },
      { id: "o3", text: "most comfortable", isCorrect: false },
      { id: "o4", text: "as comfortable", isCorrect: false }
    ],
    correctAnswer: "more comfortable",
    explanation: "Long multi-syllable adjectives form the comparative with 'more + adjective + than'."
  },
  {
    id: "a2_u07_l97_p18",
    type: "speaking",
    prompt: "Speak this comparative shopping sentence aloud:",
    targetSentence: "This navy blue jacket is slightly tighter than that gray one.",
    audioText: "This navy blue jacket is slightly tighter than that gray one."
  },
  {
    id: "a2_u07_l97_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "Do you have these trousers in a smaller waist size?",
    targetSentence: "Do you have these trousers in a smaller waist size?"
  },
  {
    id: "a2_u07_l97_p20",
    type: "error_correction",
    prompt: "Correct the double comparative error in this sentence:",
    sourceSentence: "This winter coat is more warmer than that jacket.",
    targetSentence: "This winter coat is warmer than that jacket.",
    options: [
      { id: "o1", text: "This winter coat is warmer than that jacket.", isCorrect: true },
      { id: "o2", text: "This winter coat is more warm than that jacket.", isCorrect: false },
      { id: "o3", text: "This winter coat is most warmer than that jacket.", isCorrect: false },
      { id: "o4", text: "This winter coat is warmer as that jacket.", isCorrect: false }
    ],
    correctAnswer: "This winter coat is warmer than that jacket.",
    explanation: "Short one-syllable adjectives take '-er' (warmer); do not combine with 'more'."
  },
  {
    id: "a2_u07_l97_p21",
    type: "mediation",
    prompt: "Mediation: A friend is trying on two pairs of boots and wants your advice on style and practicality. Compare them clearly:",
    sourceSentence: "Which pair should I buy: the black leather boots or the brown suede ones?",
    targetSentence: "The black leather boots are more waterproof and durable for winter, but the brown suede pair looks more stylish for casual dinners.",
    options: [
      { id: "o1", text: "The black leather boots are more waterproof and durable for winter, but the brown suede pair looks more stylish for casual dinners.", isCorrect: true },
      { id: "o2", text: "Shoes are made of wood and paper.", isCorrect: false },
      { id: "o3", text: "Do not wear shoes never.", isCorrect: false },
      { id: "o4", text: "I bought socks yesterday.", isCorrect: false }
    ],
    correctAnswer: "The black leather boots are more waterproof and durable for winter, but the brown suede pair looks more stylish for casual dinners.",
    explanation: "Offers a balanced, accurate comparative assessment of both options."
  },
  {
    id: "a2_u07_l97_p22",
    type: "match_pairs",
    prompt: "Match adjectives with their comparative forms:",
    options: [
      { id: "m1", text: "good" },
      { id: "m1_m", text: "better (irregular)" },
      { id: "m2", text: "bad" },
      { id: "m2_m", text: "worse (irregular)" },
      { id: "m3", text: "stylish" },
      { id: "m3_m", text: "more stylish (multi-syllable)" },
      { id: "m4", text: "heavy" },
      { id: "m4_m", text: "heavier (y -> ier)" }
    ]
  },
  {
    id: "a2_u07_l97_p23",
    type: "word_ordering",
    prompt: "Assemble the comparison question about size:",
    sourceSentence: "Is this medium shirt larger than the small one?",
    targetSentence: "Is this medium shirt larger than the small one",
    wordBank: ["Is", "this", "medium", "shirt", "larger", "than", "the", "small", "one", "more", "large"],
    explanation: "Verb BE (Is) + subject (this medium shirt) + comparative (larger) + than + object (the small one)?"
  },
  {
    id: "a2_u07_l97_p24",
    type: "recognition",
    prompt: "Which demonstrative pronoun is used for plural objects that are far away from the speaker?",
    sourceSentence: "those / these / this / that",
    targetSentence: "those",
    options: [
      { id: "o1", text: "those", isCorrect: true },
      { id: "o2", text: "these", isCorrect: false },
      { id: "o3", text: "this", isCorrect: false },
      { id: "o4", text: "that", isCorrect: false }
    ],
    correctAnswer: "those",
    explanation: "\"Those\" refers to plural items at a distance (e.g., look at those coats on the far rack)."
  },
  {
    id: "a2_u07_l97_p25",
    type: "dialogue_completion",
    prompt: "Complete the clothing store fitting room dialogue:",
    sourceSentence: "Customer: \"How does this blazer look on me?\"\nSales Assistant: \"____\"",
    targetSentence: "It fits you well across the shoulders, but the sleeves are a bit too long. Would you like to try a smaller size?",
    options: [
      { id: "o1", text: "It fits you well across the shoulders, but the sleeves are a bit too long. Would you like to try a smaller size?", isCorrect: true },
      { id: "o2", text: "I bought blazer ten years ago.", isCorrect: false },
      { id: "o3", text: "Blazer is very food.", isCorrect: false },
      { id: "o4", text: "Because you are wearing shoes.", isCorrect: false }
    ],
    correctAnswer: "It fits you well across the shoulders, but the sleeves are a bit too long. Would you like to try a smaller size?",
    explanation: "Offers constructive fitting advice and suggests an appropriate adjustment."
  },
  {
    id: "a2_u07_l97_p26",
    type: "personal_production",
    prompt: "Write 2 sentences comparing two items of clothing you own using 'better than' and 'more comfortable than':",
    targetSentence: "My wool sweater is warmer and better quality than my cotton hoodie. However, the hoodie is more comfortable for lounging at home.",
    guidelines: "Use comparative structures (better than, warmer than, more comfortable than)."
  }
];

const l97_review: Exercise[] = [
  {
    id: "a2_u07_l97_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct comparative form:",
    sourceSentence: "Online prices are often ____ than in-store boutique prices.",
    targetSentence: "Online prices are often cheaper than in-store boutique prices.",
    options: [
      { id: "o1", text: "cheaper", isCorrect: true },
      { id: "o2", text: "more cheap", isCorrect: false },
      { id: "o3", text: "cheapest", isCorrect: false },
      { id: "o4", text: "more cheaper", isCorrect: false }
    ],
    correctAnswer: "cheaper",
    explanation: "\"Cheap\" is a one-syllable adjective -> \"cheaper\"."
  },
  {
    id: "a2_u07_l97_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Fix the irregular comparative mistake:",
    sourceSentence: "This fabric is gooder than the synthetic sample.",
    targetSentence: "This fabric is better than the synthetic sample.",
    options: [
      { id: "o1", text: "This fabric is better than the synthetic sample.", isCorrect: true },
      { id: "o2", text: "This fabric is more good than the synthetic sample.", isCorrect: false },
      { id: "o3", text: "This fabric is best than the synthetic sample.", isCorrect: false },
      { id: "o4", text: "This fabric is more better than synthetic sample.", isCorrect: false }
    ],
    correctAnswer: "This fabric is better than the synthetic sample.",
    explanation: "\"Good\" has the irregular comparative form \"better\"."
  },
  {
    id: "a2_u07_l97_r08",
    type: "speaking",
    prompt: "Speak this comparison sentence with clear intonation:",
    targetSentence: "The red silk scarf is much more expensive than the wool one.",
    audioText: "The red silk scarf is much more expensive than the wool one."
  }
];

const l97_assessment: Exercise[] = [
  {
    id: "a2_u07_l97_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly demonstrates the comparative with 'as ... as' for equality?",
    sourceSentence: "This jacket is just as warm as my heavy winter overcoat.",
    targetSentence: "This jacket is just as warm as my heavy winter overcoat.",
    options: [
      { id: "o1", text: "This jacket is just as warm as my heavy winter overcoat.", isCorrect: true },
      { id: "o2", text: "This jacket is just as warmer as my heavy winter overcoat.", isCorrect: false },
      { id: "o3", text: "This jacket is so warm as my heavy winter overcoat.", isCorrect: false },
      { id: "o4", text: "This jacket is as more warm than my overcoat.", isCorrect: false }
    ],
    correctAnswer: "This jacket is just as warm as my heavy winter overcoat.",
    explanation: "\"as + base adjective + as\" expresses equality without adding -er or more."
  },
  {
    id: "a2_u07_l97_a07",
    type: "listening",
    prompt: "Listen to the customer and choose what they need:",
    audioText: "Excuse me, where is the fitting room? I'd like to try these jeans on.",
    targetSentence: "The customer wants to find the changing room.",
    options: [
      { id: "o1", text: "The customer wants to find the changing room.", isCorrect: true },
      { id: "o2", text: "The customer wants a refund immediately.", isCorrect: false },
      { id: "o3", text: "The customer is looking for the exit.", isCorrect: false },
      { id: "o4", text: "The customer wants to buy shoes.", isCorrect: false }
    ],
    correctAnswer: "The customer wants to find the changing room.",
    explanation: "\"Fitting room\" is the room where you try on clothes."
  },
  {
    id: "a2_u07_l97_a08",
    type: "writing",
    prompt: "Write a sentence asking a salesperson if a pair of shoes is available in a different size or color:",
    targetSentence: "Excuse me, do you have these leather shoes in size 42 and in dark brown?",
    guidelines: "Use polite phrasing: 'Excuse me, do you have these [items] in size [X] / color [Y]?'"
  }
];

enrichLessonData('lesson_a2_7_97', LESSON_A2_7_97_DATA, l97_practice, l97_review, l97_assessment);

// ==========================================
// LESSON 98: Eating Out, Menus & Polite Dining Requests
// ==========================================
const l98_practice: Exercise[] = [
  {
    id: "a2_u07_l98_p16",
    type: "reading",
    prompt: "Read the restaurant notice and answer the question:\n\"All our pasta dishes can be prepared with gluten-free penne upon request. Please inform your server of any severe food allergies before ordering.\"\nWhat should customers with allergies do?",
    sourceSentence: "What should customers with allergies do?",
    targetSentence: "Inform their server before placing their order.",
    options: [
      { id: "o1", text: "Inform their server before placing their order.", isCorrect: true },
      { id: "o2", text: "Leave the restaurant immediately.", isCorrect: false },
      { id: "o3", text: "Pay an extra 50% fee.", isCorrect: false },
      { id: "o4", text: "Bring their own cooked pasta.", isCorrect: false }
    ],
    correctAnswer: "Inform their server before placing their order.",
    explanation: "The notice explicitly advises: 'Please inform your server of any severe food allergies before ordering.'"
  },
  {
    id: "a2_u07_l98_p17",
    type: "fill_blank",
    prompt: "Choose the most polite modal phrase for ordering food:",
    sourceSentence: "____ the grilled salmon with roasted vegetables, please?",
    targetSentence: "Could I please have the grilled salmon with roasted vegetables, please?",
    options: [
      { id: "o1", text: "Could I please have", isCorrect: true },
      { id: "o2", text: "Give me", isCorrect: false },
      { id: "o3", text: "I want now", isCorrect: false },
      { id: "o4", text: "I take", isCorrect: false }
    ],
    correctAnswer: "Could I please have",
    explanation: "\"Could I please have...\" or \"I would like...\" are standard polite dining formulas."
  },
  {
    id: "a2_u07_l98_p18",
    type: "speaking",
    prompt: "Speak this polite dining request aloud:",
    targetSentence: "Excuse me, could we please have the bill, and could you split it between two cards?",
    audioText: "Excuse me, could we please have the bill, and could you split it between two cards?"
  },
  {
    id: "a2_u07_l98_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the server's question:",
    audioText: "Are you ready to order, or would you like a few more minutes with the menu?",
    targetSentence: "Are you ready to order, or would you like a few more minutes with the menu?"
  },
  {
    id: "a2_u07_l98_p20",
    type: "error_correction",
    prompt: "Correct the impolite or unnatural phrasing in this restaurant order:",
    sourceSentence: "I want you bring me water fast.",
    targetSentence: "Could you please bring us a carafe of water?",
    options: [
      { id: "o1", text: "Could you please bring us a carafe of water?", isCorrect: true },
      { id: "o2", text: "Bring water fast please to me.", isCorrect: false },
      { id: "o3", text: "I want water now fast.", isCorrect: false },
      { id: "o4", text: "You must bring water immediately.", isCorrect: false }
    ],
    correctAnswer: "Could you please bring us a carafe of water?",
    explanation: "Polite English uses indirect modal requests (\"Could you please bring...?\") rather than imperative commands."
  },
  {
    id: "a2_u07_l98_p21",
    type: "mediation",
    prompt: "Mediation: A dining companion is vegetarian and does not speak English. Inquire about vegetarian options with the waiter on their behalf:",
    sourceSentence: "How do you ask about vegetarian options for your friend?",
    targetSentence: "Excuse me, my friend is vegetarian. Could you tell us which main courses do not contain any meat or seafood?",
    options: [
      { id: "o1", text: "Excuse me, my friend is vegetarian. Could you tell us which main courses do not contain any meat or seafood?", isCorrect: true },
      { id: "o2", text: "My friend eats only grass.", isCorrect: false },
      { id: "o3", text: "Meat is terrible for everyone.", isCorrect: false },
      { id: "o4", text: "We don't want food here.", isCorrect: false }
    ],
    correctAnswer: "Excuse me, my friend is vegetarian. Could you tell us which main courses do not contain any meat or seafood?",
    explanation: "Clearly and courteously mediates dietary needs to the restaurant staff."
  },
  {
    id: "a2_u07_l98_p22",
    type: "match_pairs",
    prompt: "Match restaurant dining phrases with their situational purposes:",
    options: [
      { id: "m1", text: "A table for two, please." },
      { id: "m1_m", text: "Arriving at the host stand" },
      { id: "m2", text: "What do you recommend?" },
      { id: "m2_m", text: "Asking for chef specials" },
      { id: "m3", text: "Is service included?" },
      { id: "m3_m", text: "Inquiring about gratuity/tip" },
      { id: "m4", text: "Could we get this to go?" },
      { id: "m4_m", text: "Requesting a takeout box" }
    ]
  },
  {
    id: "a2_u07_l98_p23",
    type: "word_ordering",
    prompt: "Assemble the polite request for dessert:",
    sourceSentence: "We would like to see the dessert menu please.",
    targetSentence: "We would like to see the dessert menu please",
    wordBank: ["We", "would", "like", "to", "see", "the", "dessert", "menu", "please", "want", "are"],
    explanation: "We would like + to see + the dessert menu + please."
  },
  {
    id: "a2_u07_l98_p24",
    type: "recognition",
    prompt: "Which phrase means 'the tip is already added to the final bill'?",
    sourceSentence: "service included / on the house / complimentary / à la carte",
    targetSentence: "service included",
    options: [
      { id: "o1", text: "service included", isCorrect: true },
      { id: "o2", text: "on the house", isCorrect: false },
      { id: "o3", text: "complimentary", isCorrect: false },
      { id: "o4", text: "à la carte", isCorrect: false }
    ],
    correctAnswer: "service included",
    explanation: "\"Service included\" means the gratuity/service charge is already calculated in the total."
  },
  {
    id: "a2_u07_l98_p25",
    type: "dialogue_completion",
    prompt: "Complete the dining dialogue when placing an order:",
    sourceSentence: "Waiter: \"And what can I get for you for the main course?\"\nCustomer: \"____\"",
    targetSentence: "I'd like the mushroom risotto, please. And could I have the dressing on the side for the salad?",
    options: [
      { id: "o1", text: "I'd like the mushroom risotto, please. And could I have the dressing on the side for the salad?", isCorrect: true },
      { id: "o2", text: "I will eat pizza yesterday.", isCorrect: false },
      { id: "o3", text: "Risotto is very restaurant.", isCorrect: false },
      { id: "o4", text: "Because I didn't pay.", isCorrect: false }
    ],
    correctAnswer: "I'd like the mushroom risotto, please. And could I have the dressing on the side for the salad?",
    explanation: "Natural, polite ordering with a specific dietary customization request."
  },
  {
    id: "a2_u07_l98_p26",
    type: "personal_production",
    prompt: "Write a 2-sentence script ordering a complete 2-course meal politely:",
    targetSentence: "To start, I would like the tomato soup. For my main course, could I please have the grilled sea bass with steamed asparagus?",
    guidelines: "Use 'To start, I would like...' and 'For my main course, could I please have...'"
  }
];

const l98_review: Exercise[] = [
  {
    id: "a2_u07_l98_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Complete the polite invitation:",
    sourceSentence: "____ you like to join us for dinner at the new Italian restaurant tonight?",
    targetSentence: "Would you like to join us for dinner at the new Italian restaurant tonight?",
    options: [
      { id: "o1", text: "Would", isCorrect: true },
      { id: "o2", text: "Do", isCorrect: false },
      { id: "o3", text: "Are", isCorrect: false },
      { id: "o4", text: "Will", isCorrect: false }
    ],
    correctAnswer: "Would",
    explanation: "\"Would you like to...\" is the standard formula for polite invitations."
  },
  {
    id: "a2_u07_l98_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the ordering phrasing error:",
    sourceSentence: "I like to have the steak with fries please.",
    targetSentence: "I would like to have the steak with fries please.",
    options: [
      { id: "o1", text: "I would like to have the steak with fries please.", isCorrect: true },
      { id: "o2", text: "I am like to have the steak with fries please.", isCorrect: false },
      { id: "o3", text: "I liking to have steak with fries.", isCorrect: false },
      { id: "o4", text: "I like having steak please now.", isCorrect: false }
    ],
    correctAnswer: "I would like to have the steak with fries please.",
    explanation: "\"I would like\" (or \"I'd like\") expresses a polite immediate request, whereas \"I like\" states general taste."
  },
  {
    id: "a2_u07_l98_r08",
    type: "speaking",
    prompt: "Speak this polite compliment to the chef aloud:",
    targetSentence: "Thank you, that was one of the most delicious meals we've ever had!",
    audioText: "Thank you, that was one of the most delicious meals we've ever had!"
  }
];

const l98_assessment: Exercise[] = [
  {
    id: "a2_u07_l98_a06",
    type: "multiple_choice",
    prompt: "Which sentence is the most natural and polite way to request the bill in a restaurant?",
    sourceSentence: "Could we have the bill whenever you're ready, please?",
    targetSentence: "Could we have the bill whenever you're ready, please?",
    options: [
      { id: "o1", text: "Could we have the bill whenever you're ready, please?", isCorrect: true },
      { id: "o2", text: "Bring us money paper right now.", isCorrect: false },
      { id: "o3", text: "We must pay you immediately.", isCorrect: false },
      { id: "o4", text: "Give bill to us quickly.", isCorrect: false }
    ],
    correctAnswer: "Could we have the bill whenever you're ready, please?",
    explanation: "\"Could we have the bill whenever you're ready, please?\" represents gold standard polite dining communication."
  },
  {
    id: "a2_u07_l98_a07",
    type: "listening",
    prompt: "Listen to the waiter and choose what complimentary item is offered:",
    audioText: "This dessert is on the house to celebrate your anniversary.",
    targetSentence: "The dessert is free of charge.",
    options: [
      { id: "o1", text: "The dessert is free of charge.", isCorrect: true },
      { id: "o2", text: "The dessert costs fifty dollars.", isCorrect: false },
      { id: "o3", text: "The dessert is only served on the roof.", isCorrect: false },
      { id: "o4", text: "The dessert is out of stock.", isCorrect: false }
    ],
    correctAnswer: "The dessert is free of charge.",
    explanation: "\"On the house\" means complimentary/free provided by the restaurant."
  },
  {
    id: "a2_u07_l98_a08",
    type: "writing",
    prompt: "Write a polite note making a table reservation for 4 people at 7:30 PM on Saturday:",
    targetSentence: "Good morning, I would like to reserve a table for four people this Saturday, October 14th, at 7:30 PM under the name Martinez.",
    guidelines: "Include 'I would like to reserve a table for [number] at [time] on [day]' with a contact name."
  }
];

enrichLessonData('lesson_a2_7_98', LESSON_A2_7_98_DATA, l98_practice, l98_review, l98_assessment);

// ==========================================
// LESSON 99: Health, Symptoms & Medical Advice
// ==========================================
const l99_practice: Exercise[] = [
  {
    id: "a2_u07_l99_p16",
    type: "reading",
    prompt: "Read the clinic patient instructions and answer the question:\n\"Take one tablet with water every eight hours after meals. Do not exceed three tablets in a 24-hour period. If dizziness or a rash occurs, stop taking the medication and contact the pharmacy immediately.\"\nWhat should a patient do if they develop a rash?",
    sourceSentence: "What should a patient do if they develop a rash?",
    targetSentence: "Stop taking the tablets and contact the pharmacy immediately.",
    options: [
      { id: "o1", text: "Stop taking the tablets and contact the pharmacy immediately.", isCorrect: true },
      { id: "o2", text: "Take four extra tablets at once.", isCorrect: false },
      { id: "o3", text: "Ignore the symptoms and go swimming.", isCorrect: false },
      { id: "o4", text: "Drink warm milk and wait a week.", isCorrect: false }
    ],
    correctAnswer: "Stop taking the tablets and contact the pharmacy immediately.",
    explanation: "The instruction clearly states: 'If dizziness or a rash occurs, stop taking the medication and contact the pharmacy immediately.'"
  },
  {
    id: "a2_u07_l99_p17",
    type: "fill_blank",
    prompt: "Choose the correct modal verb for giving medical advice:",
    sourceSentence: "You have a high fever; you ____ rest in bed and drink plenty of fluids.",
    targetSentence: "You have a high fever; you should rest in bed and drink plenty of fluids.",
    options: [
      { id: "o1", text: "should", isCorrect: true },
      { id: "o2", text: "should to", isCorrect: false },
      { id: "o3", text: "must to", isCorrect: false },
      { id: "o4", text: "would have", isCorrect: false }
    ],
    correctAnswer: "should",
    explanation: "\"Should + base verb\" is the standard modal form for medical and personal recommendations."
  },
  {
    id: "a2_u07_l99_p18",
    type: "speaking",
    prompt: "Speak this symptom description clearly aloud:",
    targetSentence: "I've had a sore throat and a persistent cough for the past three days.",
    audioText: "I've had a sore throat and a persistent cough for the past three days."
  },
  {
    id: "a2_u07_l99_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the doctor's recommendation:",
    audioText: "You shouldn't return to heavy exercise until your ankle is fully healed.",
    targetSentence: "You shouldn't return to heavy exercise until your ankle is fully healed."
  },
  {
    id: "a2_u07_l99_p20",
    type: "error_correction",
    prompt: "Correct the modal verb error in this health advice:",
    sourceSentence: "You should to take this cough syrup before going to sleep.",
    targetSentence: "You should take this cough syrup before going to sleep.",
    options: [
      { id: "o1", text: "You should take this cough syrup before going to sleep.", isCorrect: true },
      { id: "o2", text: "You should taking this cough syrup before sleep.", isCorrect: false },
      { id: "o3", text: "You should to took this syrup before sleep.", isCorrect: false },
      { id: "o4", text: "You should to takes this cough syrup.", isCorrect: false }
    ],
    correctAnswer: "You should take this cough syrup before going to sleep.",
    explanation: "Modal verbs (should, must, can) are followed directly by base verbs without \"to\": \"should take\"."
  },
  {
    id: "a2_u07_l99_p21",
    type: "mediation",
    prompt: "Mediation: A friend is suffering from a bad migraine and cannot concentrate at work. Advise them with care and empathy:",
    sourceSentence: "My head is pounding and the bright screen makes it worse.",
    targetSentence: "You should step away from your monitor, dim the lights in the rest area, drink some water, and take an over-the-counter painkiller.",
    options: [
      { id: "o1", text: "You should step away from your monitor, dim the lights in the rest area, drink some water, and take an over-the-counter painkiller.", isCorrect: true },
      { id: "o2", text: "Keep staring at the bright screen forever.", isCorrect: false },
      { id: "o3", text: "Headache is never real.", isCorrect: false },
      { id: "o4", text: "Run five miles right now.", isCorrect: false }
    ],
    correctAnswer: "You should step away from your monitor, dim the lights in the rest area, drink some water, and take an over-the-counter painkiller.",
    explanation: "Provides empathetic, actionable health recommendations using 'should + base verbs'."
  },
  {
    id: "a2_u07_l99_p22",
    type: "match_pairs",
    prompt: "Match physical symptoms with appropriate healthcare remedies:",
    options: [
      { id: "m1", text: "sore throat" },
      { id: "m1_m", text: "warm honey lemon tea & lozenges" },
      { id: "m2", text: "sprained wrist" },
      { id: "m2_m", text: "ice compression bandage & rest" },
      { id: "m3", text: "stomach ache" },
      { id: "m3_m", text: "herbal tea & light bland food" },
      { id: "m4", text: "insomnia" },
      { id: "m4_m", text: "avoiding caffeine & evening screens" }
    ]
  },
  {
    id: "a2_u07_l99_p23",
    type: "word_ordering",
    prompt: "Put the words in order to form health advice with 'ought to':",
    sourceSentence: "You ought to schedule a checkup with your dentist.",
    targetSentence: "You ought to schedule a checkup with your dentist",
    wordBank: ["You", "ought", "to", "schedule", "a", "checkup", "with", "your", "dentist", "should", "must"],
    explanation: "You + ought to + base verb (schedule) + object (a checkup) + prepositional phrase (with your dentist)."
  },
  {
    id: "a2_u07_l99_p24",
    type: "recognition",
    prompt: "Which expression is used to describe a sharp sudden sensation in a muscle?",
    sourceSentence: "cramp / allergy / sneeze / prescription",
    targetSentence: "cramp",
    options: [
      { id: "o1", text: "cramp", isCorrect: true },
      { id: "o2", text: "allergy", isCorrect: false },
      { id: "o3", text: "sneeze", isCorrect: false },
      { id: "o4", text: "prescription", isCorrect: false }
    ],
    correctAnswer: "cramp",
    explanation: "A \"cramp\" is a painful, involuntary muscle contraction."
  },
  {
    id: "a2_u07_l99_p25",
    type: "dialogue_completion",
    prompt: "Complete the doctor-patient consultation dialogue:",
    sourceSentence: "Doctor: \"How long have you been feeling feverish?\"\nPatient: \"____\"",
    targetSentence: "Since Tuesday night, and I've also had body aches and chills.",
    options: [
      { id: "o1", text: "Since Tuesday night, and I've also had body aches and chills.", isCorrect: true },
      { id: "o2", text: "I will have fever next month.", isCorrect: false },
      { id: "o3", text: "Because I like doctors.", isCorrect: false },
      { id: "o4", text: "I never eat breakfast.", isCorrect: false }
    ],
    correctAnswer: "Since Tuesday night, and I've also had body aches and chills.",
    explanation: "Answers with timeframe (\"Since Tuesday night\") and related symptoms."
  },
  {
    id: "a2_u07_l99_p26",
    type: "personal_production",
    prompt: "Write 2 sentences giving health advice to someone with the flu using 'should' and 'shouldn't':",
    targetSentence: "You should stay home and drink plenty of warm fluids. You shouldn't go to the gym until your fever is completely gone.",
    guidelines: "Use 'You should + verb' and 'You shouldn't + verb'."
  }
];

const l99_review: Exercise[] = [
  {
    id: "a2_u07_l99_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct preposition with illness expressions:",
    sourceSentence: "He is currently recovering ____ a mild case of pneumonia.",
    targetSentence: "He is currently recovering from a mild case of pneumonia.",
    options: [
      { id: "o1", text: "from", isCorrect: true },
      { id: "o2", text: "of", isCorrect: false },
      { id: "o3", text: "with", isCorrect: false },
      { id: "o4", text: "to", isCorrect: false }
    ],
    correctAnswer: "from",
    explanation: "The verb \"recover\" collocate with \"from\": recover from an illness."
  },
  {
    id: "a2_u07_l99_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the symptom expression error:",
    sourceSentence: "I have painful in my lower back.",
    targetSentence: "I have pain in my lower back.",
    options: [
      { id: "o1", text: "I have pain in my lower back.", isCorrect: true },
      { id: "o2", text: "I have painfully in my lower back.", isCorrect: false },
      { id: "o3", text: "I am having paining in lower back.", isCorrect: false },
      { id: "o4", text: "My lower back has painful.", isCorrect: false }
    ],
    correctAnswer: "I have pain in my lower back.",
    explanation: "Use noun \"pain\" with \"have\": \"I have pain in my back\" (or \"My lower back is painful / hurts\")."
  },
  {
    id: "a2_u07_l99_r08",
    type: "speaking",
    prompt: "Speak this wellness advice sentence aloud clearly:",
    targetSentence: "Getting at least seven hours of restful sleep is essential for physical recovery.",
    audioText: "Getting at least seven hours of restful sleep is essential for physical recovery."
  }
];

const l99_assessment: Exercise[] = [
  {
    id: "a2_u07_l99_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'should have' vs 'should' for present/future advice?",
    sourceSentence: "If your symptoms persist for more than 48 hours, you should consult a doctor.",
    targetSentence: "If your symptoms persist for more than 48 hours, you should consult a doctor.",
    options: [
      { id: "o1", text: "If your symptoms persist for more than 48 hours, you should consult a doctor.", isCorrect: true },
      { id: "o2", text: "If your symptoms persist, you should to consult doctor.", isCorrect: false },
      { id: "o3", text: "If your symptoms persist, you must to consult.", isCorrect: false },
      { id: "o4", text: "You should consulting a doctor if symptoms persist.", isCorrect: false }
    ],
    correctAnswer: "If your symptoms persist for more than 48 hours, you should consult a doctor.",
    explanation: "\"should + base verb (consult)\" correctly delivers conditional health advice."
  },
  {
    id: "a2_u07_l99_a07",
    type: "listening",
    prompt: "Listen to the pharmacist's instruction and identify when to take the medicine:",
    audioText: "Take this antibiotic twice a day, once in the morning and once at night, after eating.",
    targetSentence: "Take the medication twice daily with meals.",
    options: [
      { id: "o1", text: "Take the medication twice daily with meals.", isCorrect: true },
      { id: "o2", text: "Take the medication only once on an empty stomach.", isCorrect: false },
      { id: "o3", text: "Take all pills before going to bed tonight.", isCorrect: false },
      { id: "o4", text: "Never take this medication with food.", isCorrect: false }
    ],
    correctAnswer: "Take the medication twice daily with meals.",
    explanation: "\"Twice a day... after eating\" = twice daily with meals."
  },
  {
    id: "a2_u07_l99_a08",
    type: "writing",
    prompt: "Write a short email to your employer notifying them that you are unwell and taking a sick day:",
    targetSentence: "Dear Sarah, I am writing to let you know that I have come down with a high fever and cannot come into work today. I plan to see a doctor this afternoon and will update you tomorrow morning.",
    guidelines: "State your illness politely, request sick leave for the day, and mention when you will follow up."
  }
];

enrichLessonData('lesson_a2_7_99', LESSON_A2_7_99_DATA, l99_practice, l99_review, l99_assessment);

// ==========================================
// LESSON 100: Future Plans, Intentions & Fixed Arrangements
// ==========================================
const l100_practice: Exercise[] = [
  {
    id: "a2_u07_l100_p16",
    type: "reading",
    prompt: "Read the conference schedule and answer the question:\n\"Next Tuesday at 10 AM, the keynote speaker is presenting on generative AI in London. Later that evening, the organizers are hosting a networking dinner for international delegates at 7:30 PM.\"\nWhat grammar form is used to express these fixed timetable events?",
    sourceSentence: "What grammar form is used to express these fixed timetable events?",
    targetSentence: "Present Continuous for fixed schedule arrangements.",
    options: [
      { id: "o1", text: "Present Continuous for fixed schedule arrangements.", isCorrect: true },
      { id: "o2", text: "Past Simple for historical events.", isCorrect: false },
      { id: "o3", text: "Past Continuous for interrupted actions.", isCorrect: false },
      { id: "o4", text: "Imperative for commanding people.", isCorrect: false }
    ],
    correctAnswer: "Present Continuous for fixed schedule arrangements.",
    explanation: "\"is presenting\" and \"are hosting\" with specific future times (Tuesday at 10 AM, 7:30 PM) denote fixed calendar arrangements."
  },
  {
    id: "a2_u07_l100_p17",
    type: "fill_blank",
    prompt: "Choose the correct future form for an intention/decision made beforehand:",
    sourceSentence: "I ____ enroll in an advanced web development course this autumn.",
    targetSentence: "I am going to enroll in an advanced web development course this autumn.",
    options: [
      { id: "o1", text: "am going to", isCorrect: true },
      { id: "o2", text: "will to", isCorrect: false },
      { id: "o3", text: "am will", isCorrect: false },
      { id: "o4", text: "going", isCorrect: false }
    ],
    correctAnswer: "am going to",
    explanation: "\"be going to + base verb\" is used for prior intentions and personal plans."
  },
  {
    id: "a2_u07_l100_p18",
    type: "speaking",
    prompt: "Speak this spontaneous decision with 'will' aloud:",
    targetSentence: "Don't worry about carrying those heavy boxes; I'll help you with them!",
    audioText: "Don't worry about carrying those heavy boxes; I'll help you with them!"
  },
  {
    id: "a2_u07_l100_p19",
    type: "listen_and_type",
    prompt: "Listen and transcribe the sentence:",
    audioText: "We are flying to Rome next Thursday for our annual conference.",
    targetSentence: "We are flying to Rome next Thursday for our annual conference."
  },
  {
    id: "a2_u07_l100_p20",
    type: "error_correction",
    prompt: "Correct the future form error for an intention:",
    sourceSentence: "They are go to launch their new website next month.",
    targetSentence: "They are going to launch their new website next month.",
    options: [
      { id: "o1", text: "They are going to launch their new website next month.", isCorrect: true },
      { id: "o2", text: "They will going to launch their new website next month.", isCorrect: false },
      { id: "o3", text: "They are go launch website next month.", isCorrect: false },
      { id: "o4", text: "They going to launching their website next month.", isCorrect: false }
    ],
    correctAnswer: "They are going to launch their new website next month.",
    explanation: "Structure: Subject + BE (are) + going to + base verb (launch)."
  },
  {
    id: "a2_u07_l100_p21",
    type: "mediation",
    prompt: "Mediation: A teammate wants to know your availability for next week. Share your fixed schedule and planned free windows:",
    sourceSentence: "When are you free to collaborate next week?",
    targetSentence: "I am meeting with clients on Monday and Wednesday morning, but I'm going to work on internal documentation on Thursday, so we can meet Thursday afternoon.",
    options: [
      { id: "o1", text: "I am meeting with clients on Monday and Wednesday morning, but I'm going to work on internal documentation on Thursday, so we can meet Thursday afternoon.", isCorrect: true },
      { id: "o2", text: "I never work next week.", isCorrect: false },
      { id: "o3", text: "Next week was last year.", isCorrect: false },
      { id: "o4", text: "Because I have no calendar.", isCorrect: false }
    ],
    correctAnswer: "I am meeting with clients on Monday and Wednesday morning, but I'm going to work on internal documentation on Thursday, so we can meet Thursday afternoon.",
    explanation: "Skillfully contrasts fixed arrangements (am meeting) with plans (going to work) to coordinate availability."
  },
  {
    id: "a2_u07_l100_p22",
    type: "match_pairs",
    prompt: "Match future grammar forms with their functional uses:",
    options: [
      { id: "m1", text: "be going to + verb" },
      { id: "m1_m", text: "Pre-meditated intentions & evident predictions" },
      { id: "m2", text: "Present Continuous" },
      { id: "m2_m", text: "Fixed arrangements with specific times/dates" },
      { id: "m3", text: "will + verb" },
      { id: "m3_m", text: "Spontaneous decisions, offers & promises" },
      { id: "m4", text: "Present Simple" },
      { id: "m4_m", text: "Official public timetables & transport schedules" }
    ]
  },
  {
    id: "a2_u07_l100_p23",
    type: "word_ordering",
    prompt: "Put the words in order to form a future question with 'going to':",
    sourceSentence: "Are you going to attend the workshop tomorrow?",
    targetSentence: "Are you going to attend the workshop tomorrow",
    wordBank: ["Are", "you", "going", "to", "attend", "the", "workshop", "tomorrow", "will", "did"],
    explanation: "Are + subject (you) + going to + base verb (attend) + object (the workshop) + time phrase (tomorrow)?"
  },
  {
    id: "a2_u07_l100_p24",
    type: "recognition",
    prompt: "Which sentence expresses a spontaneous instant decision made at the moment of speaking?",
    sourceSentence: "The doorbell is ringing; I'll get it.",
    targetSentence: "The doorbell is ringing; I'll get it.",
    options: [
      { id: "o1", text: "The doorbell is ringing; I'll get it.", isCorrect: true },
      { id: "o2", text: "I am going to study medicine next year.", isCorrect: false },
      { id: "o3", text: "Our flight departs at 8:00 AM.", isCorrect: false },
      { id: "o4", text: "We are moving to Paris next month.", isCorrect: false }
    ],
    correctAnswer: "The doorbell is ringing; I'll get it.",
    explanation: "\"I'll get it\" is a spontaneous decision made on the spot."
  },
  {
    id: "a2_u07_l100_p25",
    type: "dialogue_completion",
    prompt: "Complete the weekend planning exchange:",
    sourceSentence: "Emma: \"Do you have any plans for Saturday?\"\nJack: \"____\"",
    targetSentence: "Yes, I'm meeting my cousins for brunch at 11, and then we're going to visit the contemporary art gallery.",
    options: [
      { id: "o1", text: "Yes, I'm meeting my cousins for brunch at 11, and then we're going to visit the contemporary art gallery.", isCorrect: true },
      { id: "o2", text: "Saturday was yesterday.", isCorrect: false },
      { id: "o3", text: "I did not eat Saturday.", isCorrect: false },
      { id: "o4", text: "Because museums are buildings.", isCorrect: false }
    ],
    correctAnswer: "Yes, I'm meeting my cousins for brunch at 11, and then we're going to visit the contemporary art gallery.",
    explanation: "Combines fixed arrangement ('m meeting at 11) with intention (going to visit)."
  },
  {
    id: "a2_u07_l100_p26",
    type: "personal_production",
    prompt: "Write 2 sentences describing one fixed arrangement and one future goal for next year:",
    targetSentence: "Next Tuesday, I am having lunch with my mentor at noon. Next year, I am going to run my first half-marathon.",
    guidelines: "Use Present Continuous for the fixed lunch appointment and 'going to' for the future running goal."
  }
];

const l100_review: Exercise[] = [
  {
    id: "a2_u07_l100_r06",
    type: "fill_blank",
    prompt: "Spaced retrieval: Choose the correct future form based on evidence:",
    sourceSentence: "Look at those dark storm clouds! It ____ rain heavily.",
    targetSentence: "Look at those dark storm clouds! It is going to rain heavily.",
    options: [
      { id: "o1", text: "is going to", isCorrect: true },
      { id: "o2", text: "will be", isCorrect: false },
      { id: "o3", text: "rains", isCorrect: false },
      { id: "o4", text: "was raining", isCorrect: false }
    ],
    correctAnswer: "is going to",
    explanation: "Predictions based on immediate physical evidence (dark storm clouds) use \"is going to\"."
  },
  {
    id: "a2_u07_l100_r07",
    type: "error_correction",
    prompt: "Spaced retrieval: Correct the offer structure:",
    sourceSentence: "I am going to carry that heavy suitcase for you right now.",
    targetSentence: "I'll carry that heavy suitcase for you right now.",
    options: [
      { id: "o1", text: "I'll carry that heavy suitcase for you right now.", isCorrect: true },
      { id: "o2", text: "I carry that suitcase for you right now.", isCorrect: false },
      { id: "o3", text: "I am carry that heavy suitcase for you.", isCorrect: false },
      { id: "o4", text: "I will to carry that suitcase for you.", isCorrect: false }
    ],
    correctAnswer: "I'll carry that heavy suitcase for you right now.",
    explanation: "Spontaneous offers made at the moment use \"will\" / \"I'll\", not \"going to\"."
  },
  {
    id: "a2_u07_l100_r08",
    type: "speaking",
    prompt: "Speak this travel arrangement sentence aloud:",
    targetSentence: "Our train leaves from platform four at quarter past ten tomorrow morning.",
    audioText: "Our train leaves from platform four at quarter past ten tomorrow morning."
  }
];

const l100_assessment: Exercise[] = [
  {
    id: "a2_u07_l100_a06",
    type: "multiple_choice",
    prompt: "Which sentence correctly contrasts an intention with a fixed calendar arrangement?",
    sourceSentence: "I am going to learn Spanish, and I am starting my first language class next Monday at 6 PM.",
    targetSentence: "I am going to learn Spanish, and I am starting my first language class next Monday at 6 PM.",
    options: [
      { id: "o1", text: "I am going to learn Spanish, and I am starting my first language class next Monday at 6 PM.", isCorrect: true },
      { id: "o2", text: "I will learn Spanish and I start class yesterday.", isCorrect: false },
      { id: "o3", text: "I am learning Spanish and I will started next Monday.", isCorrect: false },
      { id: "o4", text: "I going learn Spanish and I start.", isCorrect: false }
    ],
    correctAnswer: "I am going to learn Spanish, and I am starting my first language class next Monday at 6 PM.",
    explanation: "General intention = going to learn; fixed calendar arrangement with time/day = am starting next Monday at 6 PM."
  },
  {
    id: "a2_u07_l100_a07",
    type: "listening",
    prompt: "Listen and identify what the speaker decided on the spot:",
    audioText: "I don't feel like cooking tonight; I'll order some sushi instead.",
    targetSentence: "The speaker made a spontaneous decision to order food.",
    options: [
      { id: "o1", text: "The speaker made a spontaneous decision to order food.", isCorrect: true },
      { id: "o2", text: "The speaker planned a sushi party three weeks ago.", isCorrect: false },
      { id: "o3", text: "The speaker cooked dinner for ten people.", isCorrect: false },
      { id: "o4", text: "The speaker will never eat sushi.", isCorrect: false }
    ],
    correctAnswer: "The speaker made a spontaneous decision to order food.",
    explanation: "\"I'll order some sushi instead\" signifies a decision made during speech."
  },
  {
    id: "a2_u07_l100_a08",
    type: "writing",
    prompt: "Write a short paragraph outlining 2 plans for your next vacation using 'be going to':",
    targetSentence: "On my next vacation, I am going to travel to Portugal. I am going to explore historic towns and sample traditional seafood dishes along the coast.",
    guidelines: "Use 'I am going to [action]' in both sentences describing planned vacation activities."
  }
];

enrichLessonData('lesson_a2_7_100', LESSON_A2_7_100_DATA, l100_practice, l100_review, l100_assessment);
