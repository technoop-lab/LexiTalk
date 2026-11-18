import { Exercise } from '../src/types';
import { LESSON_A2_10_141_DATA } from '../src/data/lessons/lesson_a2_10_141';
import { LESSON_A2_10_142_DATA } from '../src/data/lessons/lesson_a2_10_142';
import { LESSON_A2_10_143_DATA } from '../src/data/lessons/lesson_a2_10_143';
import { LESSON_A2_10_144_DATA } from '../src/data/lessons/lesson_a2_10_144';
import { LESSON_A2_10_145_DATA } from '../src/data/lessons/lesson_a2_10_145';
import { enrichUnit10LessonData } from './enrich_unit10_helper';

// =========================================================================
// LESSON 141: Housing Problems, Repairs & Landlord Negotiations
// =========================================================================
const l141_practice: Exercise[] = [
  {
    id: "a2_u10_l141_p11",
    type: "reading",
    prompt: "Read the tenant communication and answer the question:\n\"Dear Mr. Higgins,\nI am writing to report that the central heating unit in apartment 4B stopped working yesterday evening. With temperatures dropping below freezing, this requires urgent attention. As stated in our tenancy agreement, emergency heating repairs must be addressed within 24 hours. Please send a certified technician as soon as possible.\"\nWhy is this repair considered an urgent priority?",
    sourceSentence: "Why is this repair considered an urgent priority?",
    targetSentence: "The heating failed during freezing weather and the lease requires 24-hour action.",
    options: [
      { id: "o1", text: "The heating failed during freezing weather and the lease requires 24-hour action.", isCorrect: true },
      { id: "o2", text: "The tenant wants to paint the walls in apartment 4B.", isCorrect: false },
      { id: "o3", text: "The landlord is selling the apartment tomorrow morning.", isCorrect: false },
      { id: "o4", text: "The tenant lost their apartment keys.", isCorrect: false }
    ],
    correctAnswer: "The heating failed during freezing weather and the lease requires 24-hour action.",
    explanation: "The email highlights freezing temperatures and cites the lease clause requiring 24-hour emergency response."
  },
  {
    id: "a2_u10_l141_p12",
    type: "speaking",
    prompt: "Speak clearly and assertively: Report a plumbing leak to your landlord and request immediate assistance.",
    sourceSentence: "There is a severe leak under the bathroom sink that is dripping through to the floor below. Could you send a plumber today?",
    targetSentence: "There is a severe leak under the bathroom sink that is dripping through to the floor below. Could you send a plumber today?",
    audioText: "There is a severe leak under the bathroom sink that is dripping through to the floor below. Could you send a plumber today?",
    explanation: "Natural assertive phrasing for urgent maintenance requests."
  },
  {
    id: "a2_u10_l141_p13",
    type: "match_pairs",
    prompt: "Match the housing repair terms with their definitions:",
    options: [
      { id: "m1", text: "tenancy agreement" },
      { id: "m1_m", text: "legal contract between tenant and property owner" },
      { id: "m2", text: "security deposit" },
      { id: "m2_m", text: "refundable sum held to cover potential damages" },
      { id: "m3", text: "clogged drain" },
      { id: "m3_m", text: "blocked pipe that prevents water from flowing away" },
      { id: "m4", text: "wear and tear" },
      { id: "m4_m", text: "natural deterioration resulting from normal everyday use" }
    ]
  },
  {
    id: "a2_u10_l141_p14",
    type: "mediation",
    prompt: "Your neighbor needs help reporting a water heater problem in English: 'गीजर से पानी टपक रहा है और गर्म पानी बिल्कुल नहीं आ रहा है, कृपया इसे आज ठीक करवाएं।' Provide an accurate, polite English translation.",
    sourceSentence: "गीजर से पानी टपक रहा है और गर्म पानी बिल्कुल नहीं आ रहा है, कृपया इसे आज ठीक करवाएं।",
    targetSentence: "The water heater is leaking and there is no hot water at all; please have it repaired today.",
    options: [
      { id: "o1", text: "The water heater is leaking and there is no hot water at all; please have it repaired today.", isCorrect: true },
      { id: "o2", text: "The water heater is working perfectly and hot water is boiling.", isCorrect: false },
      { id: "o3", text: "We do not want hot water in our apartment anymore.", isCorrect: false }
    ],
    correctAnswer: "The water heater is leaking and there is no hot water at all; please have it repaired today.",
    explanation: "'The water heater is leaking and there is no hot water at all' precisely translates the Hindi statement."
  },
  {
    id: "a2_u10_l141_p15",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this repair request:",
    sourceSentence: "The landlord has promise to fix the kitchen stove last Monday.",
    targetSentence: "The landlord promised to fix the kitchen stove last Monday.",
    options: [
      { id: "o1", text: "The landlord promised to fix the kitchen stove last Monday.", isCorrect: true },
      { id: "o2", text: "The landlord has promised to fix the kitchen stove last Monday.", isCorrect: false },
      { id: "o3", text: "The landlord is promising fix kitchen stove last Monday.", isCorrect: false }
    ],
    correctAnswer: "The landlord promised to fix the kitchen stove last Monday.",
    explanation: "With specific past time expressions like 'last Monday', use the Past Simple ('promised'), not Present Perfect."
  },
  {
    id: "a2_u10_l141_p16",
    type: "listening",
    prompt: "Listen to the building manager and identify when the electrician is scheduled to arrive:",
    audioText: "Hi Mark, I received your message about the faulty electrical socket. The electrician is booked to come by between nine and eleven tomorrow morning.",
    targetSentence: "Between 9:00 AM and 11:00 AM tomorrow morning.",
    options: [
      { id: "o1", text: "Between 9:00 AM and 11:00 AM tomorrow morning.", isCorrect: true },
      { id: "o2", text: "Next Friday afternoon at five.", isCorrect: false },
      { id: "o3", text: "Tonight at midnight.", isCorrect: false }
    ],
    correctAnswer: "Between 9:00 AM and 11:00 AM tomorrow morning.",
    explanation: "The manager states: 'The electrician is booked to come by between nine and eleven tomorrow morning.'"
  },
  {
    id: "a2_u10_l141_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a household repair you recently needed and who fixed it:",
    targetSentence: "Last month, our kitchen sink faucet started dripping continuously. We called a local plumber who replaced the worn-out washer in twenty minutes.",
    audioText: "Last month, our kitchen sink faucet started dripping continuously. We called a local plumber who replaced the worn-out washer in twenty minutes."
  },
  {
    id: "a2_u10_l141_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to describe damp and mold on walls:\n\"Due to poor ventilation, _____ started appearing along the bathroom ceiling.\"",
    options: [
      { id: "o1", text: "damp patches and mold", isCorrect: true },
      { id: "o2", text: "deposit disputes", isCorrect: false },
      { id: "o3", text: "wear and lease", isCorrect: false },
      { id: "o4", text: "clogged tenants", isCorrect: false }
    ],
    correctAnswer: "damp patches and mold",
    explanation: "'Damp patches and mold' is the accurate term for fungal growth caused by moisture."
  },
  {
    id: "a2_u10_l141_p19",
    type: "fill_blank",
    prompt: "The landlord agreed to _____ (reimburse) us for the cost of the emergency lock replacement.",
    correctAnswer: "reimburse",
    explanation: "'Reimburse' means to repay someone for expenses they have already paid out of pocket."
  },
  {
    id: "a2_u10_l141_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite repair follow-up:",
    tokens: ["Could", "you", "please", "confirm", "when", "the", "contractor", "will", "arrive?"],
    correctAnswer: "Could you please confirm when the contractor will arrive?",
    explanation: "Standard polite enquiry structure: 'Could you please confirm when...'."
  },
  {
    id: "a2_u10_l141_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange between tenant and property manager:\nTenant: \"We've been without hot water for two days now.\"\nProperty Manager: \"_____\"",
    options: [
      { id: "o1", text: "I sincerely apologize for the delay. The parts arrived today and the plumber is on his way.", isCorrect: true },
      { id: "o2", text: "Hot water is not included in planet Earth.", isCorrect: false },
      { id: "o3", text: "You must not take baths ever.", isCorrect: false },
      { id: "o4", text: "We have cancelled your tenancy last year.", isCorrect: false }
    ],
    correctAnswer: "I sincerely apologize for the delay. The parts arrived today and the plumber is on his way.",
    explanation: "Courteous and accountable property management response."
  },
  {
    id: "a2_u10_l141_p22",
    type: "translation",
    prompt: "Translate into English: 'मकान मालिक ने अनुबंध समाप्त होने पर सुरक्षा जमा राशि वापस करने का वादा किया है।'",
    correctAnswer: "The landlord has promised to return the security deposit when the lease ends.",
    acceptableAnswers: [
      "The landlord promised to refund the security deposit when the contract ends.",
      "The landlord has promised to refund the security deposit upon lease termination."
    ],
    explanation: "'return/refund the security deposit when the lease ends' accurately translates the Hindi sentence."
  }
];

const l141_review: Exercise[] = [
  {
    id: "a2_u10_l141_r09",
    type: "multiple_choice",
    prompt: "Which legal term refers to minor scuffs and marks that occur naturally in a rental property over time?",
    options: [
      { id: "o1", text: "Fair wear and tear", isCorrect: true },
      { id: "o2", text: "Deliberate property damage", isCorrect: false },
      { id: "o3", text: "Breach of contract", isCorrect: false },
      { id: "o4", text: "Eviction notice", isCorrect: false }
    ],
    correctAnswer: "Fair wear and tear",
    explanation: "'Fair wear and tear' refers to reasonable everyday deterioration for which landlords cannot deduct deposit funds."
  },
  {
    id: "a2_u10_l141_r10",
    type: "error_correction",
    prompt: "Correct the modal verb error in this tenancy rule:",
    sourceSentence: "Tenants don't have to make structural modifications without written permission.",
    targetSentence: "Tenants must not make structural modifications without written permission.",
    options: [
      { id: "o1", text: "Tenants must not make structural modifications without written permission.", isCorrect: true },
      { id: "o2", text: "Tenants haven't to make structural modifications without permission.", isCorrect: false },
      { id: "o3", text: "Tenants needn't to make structural modifications without permission.", isCorrect: false }
    ],
    correctAnswer: "Tenants must not make structural modifications without written permission.",
    explanation: "Prohibition (forbidden actions) requires 'must not', not 'don't have to' (which means optional)."
  }
];

const l141_assessment: Exercise[] = [
  {
    id: "a2_u10_l141_a08",
    type: "reading",
    prompt: "Read the deposit dispute resolution clause:\n\"Upon checkout, the landlord must provide an itemized list of deductions with receipts within 14 days. If no deductions are claimed, the full deposit must be returned via bank transfer within 10 working days.\"\nWhat must the landlord provide within 14 days if deductions are made?",
    sourceSentence: "What must the landlord provide within 14 days if deductions are made?",
    targetSentence: "An itemized list of deductions along with receipts.",
    options: [
      { id: "o1", text: "An itemized list of deductions along with receipts.", isCorrect: true },
      { id: "o2", text: "A new rental contract for another year.", isCorrect: false },
      { id: "o3", text: "Cash payment delivered by hand.", isCorrect: false }
    ],
    correctAnswer: "An itemized list of deductions along with receipts.",
    explanation: "The clause stipulates 'an itemized list of deductions with receipts within 14 days'."
  },
  {
    id: "a2_u10_l141_a09",
    type: "speaking",
    prompt: "Speak fluently: Request that your landlord arrange an urgent repair for a broken window lock.",
    sourceSentence: "Good afternoon. The latch on the ground-floor living room window is broken and won't lock, which is a security concern. Could you have someone fix it today?",
    targetSentence: "Good afternoon. The latch on the ground-floor living room window is broken and won't lock, which is a security concern. Could you have someone fix it today?",
    audioText: "Good afternoon. The latch on the ground-floor living room window is broken and won't lock, which is a security concern. Could you have someone fix it today?",
    explanation: "Clear, polite explanation highlighting safety implications."
  },
  {
    id: "a2_u10_l141_a10",
    type: "mediation",
    prompt: "Translate this landlord message for an international roommate: 'प्लंबर कल दोपहर 2 बजे आएगा, कृपया सुनिश्चित करें कि कोई घर पर मौजूद हो।' Provide an accurate English translation.",
    sourceSentence: "प्लंबर कल दोपहर 2 बजे आएगा, कृपया सुनिश्चित करें कि कोई घर पर मौजूद हो।",
    targetSentence: "The plumber will arrive tomorrow at 2 PM; please ensure someone is at home.",
    options: [
      { id: "o1", text: "The plumber will arrive tomorrow at 2 PM; please ensure someone is at home.", isCorrect: true },
      { id: "o2", text: "Plumber cancelled and nobody should be home tomorrow.", isCorrect: false },
      { id: "o3", text: "Plumber arrived 2 days ago at midnight.", isCorrect: false }
    ],
    correctAnswer: "The plumber will arrive tomorrow at 2 PM; please ensure someone is at home.",
    explanation: "'The plumber will arrive tomorrow at 2 PM; please ensure someone is at home' is clear and accurate."
  }
];

// =========================================================================
// LESSON 142: Managing Utility Bills, Energy Usage & Home Automation
// =========================================================================
const l142_practice: Exercise[] = [
  {
    id: "a2_u10_l142_p11",
    type: "reading",
    prompt: "Read the smart energy statement:\n\"Your monthly electricity consumption for November was 320 kWh, which is 15% lower than the same period last year. By programming your smart thermostat to lower the temperature during nighttime hours, you saved approximately £24 on your heating tariff. Your estimated next bill date is December 5th.\"\nHow did the consumer reduce their energy bill?",
    sourceSentence: "How did the consumer reduce their energy bill?",
    targetSentence: "By programming their smart thermostat to lower the temperature at night.",
    options: [
      { id: "o1", text: "By programming their smart thermostat to lower the temperature at night.", isCorrect: true },
      { id: "o2", text: "By turning off their refrigerator completely.", isCorrect: false },
      { id: "o3", text: "By switching to wood-burning fires.", isCorrect: false },
      { id: "o4", text: "By increasing daytime electricity usage by 15%.", isCorrect: false }
    ],
    correctAnswer: "By programming their smart thermostat to lower the temperature at night.",
    explanation: "The statement explains: 'By programming your smart thermostat to lower the temperature during nighttime hours...'"
  },
  {
    id: "a2_u10_l142_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Call your utility provider to question an unexpectedly high electricity bill.",
    sourceSentence: "Hello, I am calling regarding my latest electricity bill. It is significantly higher than my average usage, and I'd like to check the meter readings.",
    targetSentence: "Hello, I am calling regarding my latest electricity bill. It is significantly higher than my average usage, and I'd like to check the meter readings.",
    audioText: "Hello, I am calling regarding my latest electricity bill. It is significantly higher than my average usage, and I'd like to check the meter readings.",
    explanation: "Natural, polite assertiveness in utility customer service calls."
  },
  {
    id: "a2_u10_l142_p13",
    type: "match_pairs",
    prompt: "Match the utility and energy management terms with their definitions:",
    options: [
      { id: "m1", text: "smart meter" },
      { id: "m1_m", text: "digital device that transmits real-time energy usage to suppliers" },
      { id: "m2", text: "fixed-rate tariff" },
      { id: "m2_m", text: "energy pricing plan where unit rates stay constant over a contract term" },
      { id: "m3", text: "direct debit" },
      { id: "m3_m", text: "automated bank transfer that pays regular monthly bills" },
      { id: "m4", text: "energy efficiency rating" },
      { id: "m4_m", text: "standardized score evaluating appliance power consumption" }
    ]
  },
  {
    id: "a2_u10_l142_p14",
    type: "mediation",
    prompt: "Your housemate doesn't understand Hindi: 'हमारा बिजली का बिल पिछले महीने से दोगुना आया है, हमें स्मार्ट मीटर रीडिंग की जांच करनी चाहिए।' Translate this into natural English.",
    sourceSentence: "हमारा बिजली का बिल पिछले महीने से दोगुना आया है, हमें स्मार्ट मीटर रीडिंग की जांच करनी चाहिए।",
    targetSentence: "Our electricity bill is double what it was last month; we should check the smart meter reading.",
    options: [
      { id: "o1", text: "Our electricity bill is double what it was last month; we should check the smart meter reading.", isCorrect: true },
      { id: "o2", text: "Electricity is free this month so we don't need meters.", isCorrect: false },
      { id: "o3", text: "Our bill is half price because smart meter is off.", isCorrect: false }
    ],
    correctAnswer: "Our electricity bill is double what it was last month; we should check the smart meter reading.",
    explanation: "'double what it was last month' and 'check the smart meter reading' accurately render the thought."
  },
  {
    id: "a2_u10_l142_p15",
    type: "error_correction",
    prompt: "Correct the error in this energy conservation tip:",
    sourceSentence: "You can reduce energy costs by turn off lights when leaving a room.",
    targetSentence: "You can reduce energy costs by turning off lights when leaving a room.",
    options: [
      { id: "o1", text: "You can reduce energy costs by turning off lights when leaving a room.", isCorrect: true },
      { id: "o2", text: "You can reduce energy costs by turn of lights when leaving a room.", isCorrect: false },
      { id: "o3", text: "You can reduce energy costs by turned off lights when leaving room.", isCorrect: false }
    ],
    correctAnswer: "You can reduce energy costs by turning off lights when leaving a room.",
    explanation: "Preposition 'by' takes a gerund (-ing form: 'by turning off')."
  },
  {
    id: "a2_u10_l142_p16",
    type: "listening",
    prompt: "Listen to the customer support representative and determine the resolution:",
    audioText: "Looking at your account, your previous bill was based on an estimated reading. Now that you've submitted the actual reading, we have credited £45 back to your account.",
    targetSentence: "The company adjusted the bill and credited £45 based on the actual meter reading.",
    options: [
      { id: "o1", text: "The company adjusted the bill and credited £45 based on the actual meter reading.", isCorrect: true },
      { id: "o2", text: "The customer must pay an additional penalty fee of £45.", isCorrect: false },
      { id: "o3", text: "The electricity supply has been disconnected.", isCorrect: false }
    ],
    correctAnswer: "The company adjusted the bill and credited £45 based on the actual meter reading.",
    explanation: "Representative confirms: 'we have credited £45 back to your account.'"
  },
  {
    id: "a2_u10_l142_p17",
    type: "personal_production",
    prompt: "Write 2 sentences explaining one practical step you take to save electricity or water at home:",
    targetSentence: "I always turn off appliances at the wall plug instead of leaving them on standby mode. Furthermore, I only run the washing machine with full loads to conserve energy.",
    audioText: "I always turn off appliances at the wall plug instead of leaving them on standby mode. Furthermore, I only run the washing machine with full loads to conserve energy."
  },
  {
    id: "a2_u10_l142_p18",
    type: "multiple_choice",
    prompt: "Choose the correct term to complete the sentence:\n\"Our monthly gas charges are automatically paid through a direct _____ on the first of each month.\"",
    options: [
      { id: "o1", text: "debit", isCorrect: true },
      { id: "o2", text: "tariff", isCorrect: false },
      { id: "o3", text: "meter", isCorrect: false },
      { id: "o4", text: "leak", isCorrect: false }
    ],
    correctAnswer: "debit",
    explanation: "'Direct debit' is the financial mechanism for automatic recurring payments."
  },
  {
    id: "a2_u10_l142_p19",
    type: "fill_blank",
    prompt: "Energy-efficient LED bulbs consume up to 80% _____ (little / comparative) electricity than traditional incandescent bulbs.",
    correctAnswer: "less",
    explanation: "Comparative quantifier with uncountable noun 'electricity' is 'less'."
  },
  {
    id: "a2_u10_l142_p20",
    type: "word_ordering",
    prompt: "Arrange the words to make an automated home query:",
    tokens: ["Can", "you", "set", "the", "thermostat", "to", "twenty", "degrees", "celsius?"],
    correctAnswer: "Can you set the thermostat to twenty degrees celsius?",
    explanation: "Standard voice command or query for smart thermostats."
  },
  {
    id: "a2_u10_l142_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange with customer service:\nCustomer: \"Can I submit my water meter reading online?\"\nAgent: \"_____\"",
    options: [
      { id: "o1", text: "Yes, you can log in to our customer portal or use our mobile app to submit readings anytime.", isCorrect: true },
      { id: "o2", text: "No, water cannot be measured by humans.", isCorrect: false },
      { id: "o3", text: "You must not use water anymore.", isCorrect: false },
      { id: "o4", text: "We have disconnected internet yesterday.", isCorrect: false }
    ],
    correctAnswer: "Yes, you can log in to our customer portal or use our mobile app to submit readings anytime.",
    explanation: "Clear, helpful customer guidance."
  },
  {
    id: "a2_u10_l142_p22",
    type: "translation",
    prompt: "Translate into English: 'स्मार्ट थर्मोस्टैट आपको घर से दूर होने पर भी तापमान नियंत्रित करने की अनुमति देता है।'",
    correctAnswer: "A smart thermostat allows you to control the temperature even when you are away from home.",
    acceptableAnswers: [
      "A smart thermostat lets you control the temperature even when away from home.",
      "Smart thermostats allow you to regulate temperature even while away from home."
    ],
    explanation: "'allows you to control the temperature even when you are away from home' accurately translates the prompt."
  }
];

const l142_review: Exercise[] = [
  {
    id: "a2_u10_l142_r09",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'as... as' to compare energy consumption between two appliances?",
    options: [
      { id: "o1", text: "The new heat pump is not as expensive to run as the old electric heater.", isCorrect: true },
      { id: "o2", text: "The new heat pump is not so expensive to run than old heater.", isCorrect: false },
      { id: "o3", text: "The new heat pump is as more expensive as old heater.", isCorrect: false },
      { id: "o4", text: "The new heat pump is not as running expensive as heater.", isCorrect: false }
    ],
    correctAnswer: "The new heat pump is not as expensive to run as the old electric heater.",
    explanation: "Comparative structure of equality/inequality: 'not as + adjective + as'."
  },
  {
    id: "a2_u10_l142_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this billing statement:",
    sourceSentence: "If you will pay your bill by direct debit, you receive a discount.",
    targetSentence: "If you pay your bill by direct debit, you receive a discount.",
    options: [
      { id: "o1", text: "If you pay your bill by direct debit, you receive a discount.", isCorrect: true },
      { id: "o2", text: "If you will paid your bill by direct debit, you receive discount.", isCorrect: false },
      { id: "o3", text: "If you pay your bill by direct debit, you will receiving discount.", isCorrect: false }
    ],
    correctAnswer: "If you pay your bill by direct debit, you receive a discount.",
    explanation: "In zero and first conditional clauses, the 'if'-clause takes the Present Simple ('pay'), not 'will pay'."
  }
];

const l142_assessment: Exercise[] = [
  {
    id: "a2_u10_l142_a08",
    type: "reading",
    prompt: "Read the green energy plan details:\n\"Under our EcoSaver 100 plan, all your electricity is matched 100% with renewable generation from wind and solar farms. There is no cancellation penalty, and unit rates remain fixed for 12 months from your registration date.\"\nHow long are unit rates protected under this plan?",
    sourceSentence: "How long are unit rates protected under this plan?",
    targetSentence: "For 12 months from the registration date.",
    options: [
      { id: "o1", text: "For 12 months from the registration date.", isCorrect: true },
      { id: "o2", text: "Only for the first 30 days.", isCorrect: false },
      { id: "o3", text: "For a lifetime with no expiration.", isCorrect: false }
    ],
    correctAnswer: "For 12 months from the registration date.",
    explanation: "Text specifies: 'unit rates remain fixed for 12 months from your registration date.'"
  },
  {
    id: "a2_u10_l142_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain why you want to switch to a paperless billing option.",
    sourceSentence: "I would like to switch to paperless e-billing because it is environmentally friendly and allows me to track monthly statements directly on my smartphone.",
    targetSentence: "I would like to switch to paperless e-billing because it is environmentally friendly and allows me to track monthly statements directly on my smartphone.",
    audioText: "I would like to switch to paperless e-billing because it is environmentally friendly and allows me to track monthly statements directly on my smartphone.",
    explanation: "Smooth connective speech with 'because' and 'and allows me to'."
  },
  {
    id: "a2_u10_l142_a10",
    type: "mediation",
    prompt: "Translate this energy company notification for a customer in English: 'यदि आपका बिल 15 तारीख से पहले नहीं चुकाया गया, तो ₹200 का विलंब शुल्क लगाया जाएगा।'",
    sourceSentence: "यदि आपका बिल 15 तारीख से पहले नहीं चुकाया गया, तो ₹200 का विलंब शुल्क लगाया जाएगा।",
    targetSentence: "If your bill is not paid before the 15th, a late fee of ₹200 will be charged.",
    options: [
      { id: "o1", text: "If your bill is not paid before the 15th, a late fee of ₹200 will be charged.", isCorrect: true },
      { id: "o2", text: "Bill is paid and you receive ₹200 bonus on the 15th.", isCorrect: false },
      { id: "o3", text: "Late fees are never charged after the 15th.", isCorrect: false }
    ],
    correctAnswer: "If your bill is not paid before the 15th, a late fee of ₹200 will be charged.",
    explanation: "'If your bill is not paid before the 15th, a late fee of ₹200 will be charged' is an exact translation."
  }
];

// =========================================================================
// LESSON 143: Medical Consultations, Prescriptions & Describing Symptoms
// =========================================================================
const l143_practice: Exercise[] = [
  {
    id: "a2_u10_l143_p11",
    type: "reading",
    prompt: "Read the clinical appointment summary:\n\"Patient History: 28-year-old presenting with a persistent dry cough, mild fever (38.1°C), and muscle fatigue lasting four days. Physical examination reveals clear lungs. Diagnosis: Acute viral upper respiratory infection. Treatment: Rest, oral hydration, and paracetamol 500mg every six hours as needed for fever. Patient advised to return if symptoms worsen.\"\nWhat is the recommended medication regimen for the patient?",
    sourceSentence: "What is the recommended medication regimen for the patient?",
    targetSentence: "Paracetamol 500mg every six hours as needed for fever, along with rest and fluids.",
    options: [
      { id: "o1", text: "Paracetamol 500mg every six hours as needed for fever, along with rest and fluids.", isCorrect: true },
      { id: "o2", text: "Immediate hospitalization for major surgery.", isCorrect: false },
      { id: "o3", text: "Strong antibiotics taken twice daily for three weeks.", isCorrect: false },
      { id: "o4", text: "No fluids or medication permitted.", isCorrect: false }
    ],
    correctAnswer: "Paracetamol 500mg every six hours as needed for fever, along with rest and fluids.",
    explanation: "Treatment specifies: 'Rest, oral hydration, and paracetamol 500mg every six hours as needed for fever.'"
  },
  {
    id: "a2_u10_l143_p12",
    type: "speaking",
    prompt: "Speak clearly and accurately to a doctor: Describe symptoms, their duration, and any known allergies.",
    sourceSentence: "I have had a severe throbbing headache and nausea since yesterday morning, and I am allergic to penicillin.",
    targetSentence: "I have had a severe throbbing headache and nausea since yesterday morning, and I am allergic to penicillin.",
    audioText: "I have had a severe throbbing headache and nausea since yesterday morning, and I am allergic to penicillin.",
    explanation: "Clear descriptive vocabulary ('throbbing headache', 'nausea', 'allergic to penicillin')."
  },
  {
    id: "a2_u10_l143_p13",
    type: "match_pairs",
    prompt: "Match medical consultation terms with their meanings:",
    options: [
      { id: "m1", text: "prescription medication" },
      { id: "m1_m", text: "authorized drug that can only be dispensed with a doctor's order" },
      { id: "m2", text: "throbbing pain" },
      { id: "m2_m", text: "recurrent pulsating or pounding physical discomfort" },
      { id: "m3", text: "adverse side effects" },
      { id: "m3_m", text: "unintended secondary physical reactions to a medicine" },
      { id: "m4", text: "dosage instructions" },
      { id: "m4_m", text: "guidelines indicating how much and how often to take medicine" }
    ]
  },
  {
    id: "a2_u10_l143_p14",
    type: "mediation",
    prompt: "A tourist in an Indian clinic needs an English translation of the doctor's instruction: 'यह दवा भोजन के बाद दिन में दो बार लें और जब तक आप यह दवा ले रहे हैं, तब तक शराब का सेवन न करें।' Translate into clinical English.",
    sourceSentence: "यह दवा भोजन के बाद दिन में दो बार लें और जब तक आप यह दवा ले रहे हैं, तब तक शराब का सेवन न करें।",
    targetSentence: "Take this medicine twice a day after meals, and avoid alcohol while on this medication.",
    options: [
      { id: "o1", text: "Take this medicine twice a day after meals, and avoid alcohol while on this medication.", isCorrect: true },
      { id: "o2", text: "Drink alcohol before meals and skip your pills.", isCorrect: false },
      { id: "o3", text: "Take all pills at once before sleeping.", isCorrect: false }
    ],
    correctAnswer: "Take this medicine twice a day after meals, and avoid alcohol while on this medication.",
    explanation: "'Take this medicine twice a day after meals, and avoid alcohol while on this medication' is precise medical English."
  },
  {
    id: "a2_u10_l143_p15",
    type: "error_correction",
    prompt: "Correct the preposition and duration error in this symptom description:",
    sourceSentence: "I am having this sore throat since three days.",
    targetSentence: "I have had this sore throat for three days.",
    options: [
      { id: "o1", text: "I have had this sore throat for three days.", isCorrect: true },
      { id: "o2", text: "I am having this sore throat for three days.", isCorrect: false },
      { id: "o3", text: "I have this sore throat since three days ago.", isCorrect: false }
    ],
    correctAnswer: "I have had this sore throat for three days.",
    explanation: "For duration ('three days'), use 'for' with the Present Perfect ('have had'), not 'since' or Present Continuous."
  },
  {
    id: "a2_u10_l143_p16",
    type: "listening",
    prompt: "Listen to the pharmacist and identify the key instruction:",
    audioText: "Take one tablet every twelve hours with a full glass of water. Be sure to complete the entire seven-day course, even if you feel better earlier.",
    targetSentence: "Complete the full seven-day course even if symptoms improve.",
    options: [
      { id: "o1", text: "Complete the full seven-day course even if symptoms improve.", isCorrect: true },
      { id: "o2", text: "Stop taking the tablets as soon as fever disappears.", isCorrect: false },
      { id: "o3", text: "Take seven tablets all at once on the first day.", isCorrect: false }
    ],
    correctAnswer: "Complete the full seven-day course even if symptoms improve.",
    explanation: "Pharmacist emphasizes: 'Be sure to complete the entire seven-day course, even if you feel better earlier.'"
  },
  {
    id: "a2_u10_l143_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing how you communicate symptoms when visiting a clinic or doctor:",
    targetSentence: "When I see a doctor, I describe when the pain started and what makes it feel better or worse. I also list any vitamins or over-the-counter medicines I am currently taking.",
    audioText: "When I see a doctor, I describe when the pain started and what makes it feel better or worse. I also list any vitamins or over-the-counter medicines I am currently taking."
  },
  {
    id: "a2_u10_l143_p18",
    type: "multiple_choice",
    prompt: "Choose the correct term to describe a sudden reaction causing skin redness and itching:\n\"After eating shellfish, he broke out in _____.\"",
    options: [
      { id: "o1", text: "an itchy allergic rash", isCorrect: true },
      { id: "o2", text: "a prescription dosage", isCorrect: false },
      { id: "o3", text: "a medical consultation", isCorrect: false },
      { id: "o4", text: "a sprained ankle", isCorrect: false }
    ],
    correctAnswer: "an itchy allergic rash",
    explanation: "'Broke out in an itchy allergic rash' is the standard medical expression."
  },
  {
    id: "a2_u10_l143_p19",
    type: "fill_blank",
    prompt: "The doctor wrote a _____ (prescribe) for antibiotics and anti-inflammatory tablets.",
    correctAnswer: "prescription",
    explanation: "Noun form of 'prescribe' is 'prescription'."
  },
  {
    id: "a2_u10_l143_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a consultation question:",
    tokens: ["How", "long", "have", "you", "been", "experiencing", "these", "dizzy", "spells?"],
    correctAnswer: "How long have you been experiencing these dizzy spells?",
    explanation: "Present perfect continuous question: 'How long have you been experiencing...?'"
  },
  {
    id: "a2_u10_l143_p21",
    type: "dialogue_completion",
    prompt: "Complete the clinic exchange:\nDoctor: \"Where exactly is the pain located, and is it sharp or dull?\"\nPatient: \"_____\"",
    options: [
      { id: "o1", text: "It's a sharp pain in my lower right abdomen that gets worse when I walk.", isCorrect: true },
      { id: "o2", text: "I bought a new car yesterday afternoon.", isCorrect: false },
      { id: "o3", text: "You must not prescribe any words.", isCorrect: false },
      { id: "o4", text: "I don't have to exist in hospital.", isCorrect: false }
    ],
    correctAnswer: "It's a sharp pain in my lower right abdomen that gets worse when I walk.",
    explanation: "Precise descriptive symptom response."
  },
  {
    id: "a2_u10_l143_p22",
    type: "translation",
    prompt: "Translate into English: 'मुझे पिछले दो दिनों से तेज बुखार और चक्कर आ रहे हैं।'",
    correctAnswer: "I have had a high fever and dizziness for the past two days.",
    acceptableAnswers: [
      "I have been having a high fever and dizzy spells for the past two days.",
      "I have had a high fever and felt dizzy for the last two days."
    ],
    explanation: "'I have had a high fever and dizziness for the past two days' is idiomatic and grammatically accurate."
  }
];

const l143_review: Exercise[] = [
  {
    id: "a2_u10_l143_r09",
    type: "multiple_choice",
    prompt: "Which question correctly asks about a patient's medical history regarding drug sensitivities?",
    options: [
      { id: "o1", text: "Are you allergic to any medications, such as penicillin or aspirin?", isCorrect: true },
      { id: "o2", text: "Do you have allergies from medications yesterday?", isCorrect: false },
      { id: "o3", text: "Are you allergy with pills?", isCorrect: false },
      { id: "o4", text: "Have you allergic for medicines?", isCorrect: false }
    ],
    correctAnswer: "Are you allergic to any medications, such as penicillin or aspirin?",
    explanation: "'Are you allergic to + noun' is standard medical phrasing."
  },
  {
    id: "a2_u10_l143_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this medical advice:",
    sourceSentence: "You should to rest your ankle and apply ice every few hours.",
    targetSentence: "You should rest your ankle and apply ice every few hours.",
    options: [
      { id: "o1", text: "You should rest your ankle and apply ice every few hours.", isCorrect: true },
      { id: "o2", text: "You should resting your ankle and apply ice.", isCorrect: false },
      { id: "o3", text: "You should to resting your ankle and applying ice.", isCorrect: false }
    ],
    correctAnswer: "You should rest your ankle and apply ice every few hours.",
    explanation: "Modal verb 'should' takes bare infinitive ('rest'), never 'to rest'."
  }
];

const l143_assessment: Exercise[] = [
  {
    id: "a2_u10_l143_a08",
    type: "reading",
    prompt: "Read the pharmacy cautionary label:\n\"Caution: This medication may cause drowsiness. Do not drive or operate machinery while taking this medicine. Avoid consuming alcoholic beverages. Take with food if stomach upset occurs.\"\nWhat activities should patients avoid while on this medication?",
    sourceSentence: "What activities should patients avoid while on this medication?",
    targetSentence: "Driving, operating machinery, and consuming alcohol.",
    options: [
      { id: "o1", text: "Driving, operating machinery, and consuming alcohol.", isCorrect: true },
      { id: "o2", text: "Eating food and drinking water.", isCorrect: false },
      { id: "o3", text: "Sleeping and resting in bed.", isCorrect: false }
    ],
    correctAnswer: "Driving, operating machinery, and consuming alcohol.",
    explanation: "Label explicitly lists: 'Do not drive or operate machinery ... Avoid consuming alcoholic beverages.'"
  },
  {
    id: "a2_u10_l143_a09",
    type: "speaking",
    prompt: "Speak fluently: Ask a pharmacist for advice on choosing an over-the-counter allergy relief medication.",
    sourceSentence: "Could you recommend an over-the-counter antihistamine for pollen allergies that won't make me feel drowsy during the day?",
    targetSentence: "Could you recommend an over-the-counter antihistamine for pollen allergies that won't make me feel drowsy during the day?",
    audioText: "Could you recommend an over-the-counter antihistamine for pollen allergies that won't make me feel drowsy during the day?",
    explanation: "Natural, confident inquiry using 'over-the-counter antihistamine' and 'drowsy'."
  },
  {
    id: "a2_u10_l143_a10",
    type: "mediation",
    prompt: "Translate this medical report snippet for an English-speaking doctor: 'रोगी को पिछले तीन दिनों से सांस लेने में तकलीफ और सीने में हल्का दर्द महसूस हो रहा है।'",
    sourceSentence: "रोगी को पिछले तीन दिनों से सांस लेने में तकलीफ और सीने में हल्का दर्द महसूस हो रहा है।",
    targetSentence: "The patient has been experiencing shortness of breath and mild chest pain for the past three days.",
    options: [
      { id: "o1", text: "The patient has been experiencing shortness of breath and mild chest pain for the past three days.", isCorrect: true },
      { id: "o2", text: "The patient is completely healthy and has no pain at all.", isCorrect: false },
      { id: "o3", text: "The patient stopped breathing three days ago.", isCorrect: false }
    ],
    correctAnswer: "The patient has been experiencing shortness of breath and mild chest pain for the past three days.",
    explanation: "'shortness of breath' and 'mild chest pain' are precise clinical translations."
  }
];

// =========================================================================
// LESSON 144: Health Insurance, Claim Processes & Pharmacy Interactions
// =========================================================================
const l144_practice: Exercise[] = [
  {
    id: "a2_u10_l144_p11",
    type: "reading",
    prompt: "Read the health insurance benefits summary:\n\"Plan Type: Comprehensive Silver Tier\n- In-Network Doctor Visits: £15 copayment per visit.\n- Out-of-Pocket Annual Deductible: £250.\n- Prescription Coverage: Tier 1 generic drugs covered at 100%; Tier 2 branded drugs require a 20% coinsurance.\n- Claim Submission Window: All medical invoices must be submitted within 90 days of treatment for reimbursement.\"\nWhat is the copayment for visiting an in-network doctor?",
    sourceSentence: "What is the copayment for visiting an in-network doctor?",
    targetSentence: "£15 per visit.",
    options: [
      { id: "o1", text: "£15 per visit.", isCorrect: true },
      { id: "o2", text: "£250 per visit.", isCorrect: false },
      { id: "o3", text: "20% of the entire doctor's salary.", isCorrect: false },
      { id: "o4", text: "There is no coverage for doctor visits.", isCorrect: false }
    ],
    correctAnswer: "£15 per visit.",
    explanation: "The summary lists: 'In-Network Doctor Visits: £15 copayment per visit.'"
  },
  {
    id: "a2_u10_l144_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally: Call your insurance company to check whether a specialist consultation is covered.",
    sourceSentence: "Hello, I would like to verify if a consultation with an orthopedic specialist requires prior authorization under my policy.",
    targetSentence: "Hello, I would like to verify if a consultation with an orthopedic specialist requires prior authorization under my policy.",
    audioText: "Hello, I would like to verify if a consultation with an orthopedic specialist requires prior authorization under my policy.",
    explanation: "Practices precise insurance vocabulary ('verify', 'prior authorization', 'under my policy')."
  },
  {
    id: "a2_u10_l144_p13",
    type: "match_pairs",
    prompt: "Match insurance and pharmacy terms with their definitions:",
    options: [
      { id: "m1", text: "annual deductible" },
      { id: "m1_m", text: "amount you must pay out of pocket before insurance coverage begins" },
      { id: "m2", text: "copayment (copay)" },
      { id: "m2_m", text: "fixed fee paid by the patient for a specific medical service" },
      { id: "m3", text: "generic drug equivalent" },
      { id: "m3_m", text: "non-branded medication with the identical active chemical ingredients" },
      { id: "m4", text: "file a reimbursement claim" },
      { id: "m4_m", text: "submit medical receipts to insurance to recover covered expenses" }
    ]
  },
  {
    id: "a2_u10_l144_p14",
    type: "mediation",
    prompt: "Your colleague is confused by this Hindi notice from HR: 'दावा प्रतिपूर्ति प्राप्त करने के लिए आपको मूल अस्पताल बिल और डॉक्टर का पर्चा संलग्न करना होगा।' Translate this into professional English.",
    sourceSentence: "दावा प्रतिपूर्ति प्राप्त करने के लिए आपको मूल अस्पताल बिल और डॉक्टर का पर्चा संलग्न करना होगा।",
    targetSentence: "To receive claim reimbursement, you must attach the original hospital bill and doctor's prescription.",
    options: [
      { id: "o1", text: "To receive claim reimbursement, you must attach the original hospital bill and doctor's prescription.", isCorrect: true },
      { id: "o2", text: "Insurance will never reimburse any hospital expenses.", isCorrect: false },
      { id: "o3", text: "You don't need any bills or prescriptions for claims.", isCorrect: false }
    ],
    correctAnswer: "To receive claim reimbursement, you must attach the original hospital bill and doctor's prescription.",
    explanation: "'claim reimbursement', 'original hospital bill', and 'doctor's prescription' provide an exact translation."
  },
  {
    id: "a2_u10_l144_p15",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this pharmacy query:",
    sourceSentence: "Do you have a generic version of this medicine that is more cheap?",
    targetSentence: "Do you have a generic version of this medicine that is cheaper?",
    options: [
      { id: "o1", text: "Do you have a generic version of this medicine that is cheaper?", isCorrect: true },
      { id: "o2", text: "Do you have generic version of this medicine that is more cheaper?", isCorrect: false },
      { id: "o3", text: "Do you have generic version this medicine that is most cheap?", isCorrect: false }
    ],
    correctAnswer: "Do you have a generic version of this medicine that is cheaper?",
    explanation: "One-syllable adjectives like 'cheap' take '-er' ('cheaper'), never 'more cheap'."
  },
  {
    id: "a2_u10_l144_p16",
    type: "listening",
    prompt: "Listen to the insurance claims agent and identify the required next step:",
    audioText: "We have received your hospital invoice, but we still need the itemized pharmacy receipt before we can process your claim payout.",
    targetSentence: "The customer must provide the itemized pharmacy receipt.",
    options: [
      { id: "o1", text: "The customer must provide the itemized pharmacy receipt.", isCorrect: true },
      { id: "o2", text: "The claim has been permanently rejected.", isCorrect: false },
      { id: "o3", text: "The customer must visit another hospital.", isCorrect: false }
    ],
    correctAnswer: "The customer must provide the itemized pharmacy receipt.",
    explanation: "The agent clarifies: 'we still need the itemized pharmacy receipt before we can process your claim payout.'"
  },
  {
    id: "a2_u10_l144_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your experience filing a health or travel insurance claim:",
    targetSentence: "When I had to visit an urgent care clinic abroad, I kept all my receipts and prescription notes. I submitted the claim online and received full reimbursement within three weeks.",
    audioText: "When I had to visit an urgent care clinic abroad, I kept all my receipts and prescription notes. I submitted the claim online and received full reimbursement within three weeks."
  },
  {
    id: "a2_u10_l144_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the insurance sentence:\n\"This dental treatment is not covered by basic insurance and requires _____.\"",
    options: [
      { id: "o1", text: "out-of-pocket payment", isCorrect: true },
      { id: "o2", text: "prescription copayments", isCorrect: false },
      { id: "o3", text: "deductible refunds", isCorrect: false },
      { id: "o4", text: "in-network claims", isCorrect: false }
    ],
    correctAnswer: "out-of-pocket payment",
    explanation: "'Out-of-pocket payment' refers to expenses paid directly by the patient without insurance reimbursement."
  },
  {
    id: "a2_u10_l144_p19",
    type: "fill_blank",
    prompt: "Generic medications contain the same active ingredients as branded drugs but are significantly _____ (cost-effective / comparative).",
    correctAnswer: "more cost-effective",
    explanation: "Comparative form of multi-syllable adjective 'cost-effective' is 'more cost-effective'."
  },
  {
    id: "a2_u10_l144_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite pharmacy request:",
    tokens: ["Could", "I", "please", "refill", "my", "monthly", "asthma", "inhaler", "prescription?"],
    correctAnswer: "Could I please refill my monthly asthma inhaler prescription?",
    explanation: "Standard pharmacy refill request."
  },
  {
    id: "a2_u10_l144_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange at the pharmacy counter:\nCustomer: \"Does my insurance card cover this skin ointment?\"\nPharmacist: \"_____\"",
    options: [
      { id: "o1", text: "Let me scan your card. Yes, it's covered with a small five-pound copay.", isCorrect: true },
      { id: "o2", text: "Insurance cards cannot be touched by pharmacists.", isCorrect: false },
      { id: "o3", text: "You must not buy skin cream in a pharmacy.", isCorrect: false },
      { id: "o4", text: "Your card is valid in 1899.", isCorrect: false }
    ],
    correctAnswer: "Let me scan your card. Yes, it's covered with a small five-pound copay.",
    explanation: "Authentic and helpful pharmacy interaction."
  },
  {
    id: "a2_u10_l144_p22",
    type: "translation",
    prompt: "Translate into English: 'बीमा कंपनी ने अस्पताल के सभी बिलों की 80% प्रतिपूर्ति करने की पुष्टि की है।'",
    correctAnswer: "The insurance company has confirmed reimbursement of 80% of all hospital bills.",
    acceptableAnswers: [
      "The insurance company confirmed it will reimburse 80% of all hospital bills.",
      "The insurer has confirmed an 80% reimbursement for all hospital expenses."
    ],
    explanation: "'The insurance company has confirmed reimbursement of 80% of all hospital bills' is clear and accurate."
  }
];

const l144_review: Exercise[] = [
  {
    id: "a2_u10_l144_r09",
    type: "multiple_choice",
    prompt: "What is the key difference between an insurance 'deductible' and a 'copayment'?",
    options: [
      { id: "o1", text: "A deductible is the initial annual amount paid before insurance kicks in, while a copay is a fixed fee per visit.", isCorrect: true },
      { id: "o2", text: "A deductible is free, while a copay is always thousands of pounds.", isCorrect: false },
      { id: "o3", text: "A deductible only applies to dental care, and copay only to eye care.", isCorrect: false },
      { id: "o4", text: "There is no difference; they mean the exact same thing.", isCorrect: false }
    ],
    correctAnswer: "A deductible is the initial annual amount paid before insurance kicks in, while a copay is a fixed fee per visit.",
    explanation: "Clear distinction between annual deductible threshold and per-service copay."
  },
  {
    id: "a2_u10_l144_r10",
    type: "error_correction",
    prompt: "Correct the preposition error in this claims requirement:",
    sourceSentence: "All claim forms must be submitted on thirty days after treatment.",
    targetSentence: "All claim forms must be submitted within thirty days of treatment.",
    options: [
      { id: "o1", text: "All claim forms must be submitted within thirty days of treatment.", isCorrect: true },
      { id: "o2", text: "All claim forms must be submitted at thirty days of treatment.", isCorrect: false },
      { id: "o3", text: "All claim forms must be submitted in thirty days on treatment.", isCorrect: false }
    ],
    correctAnswer: "All claim forms must be submitted within thirty days of treatment.",
    explanation: "Time limits for submissions use 'within [number] days of [event]'."
  }
];

const l144_assessment: Exercise[] = [
  {
    id: "a2_u10_l144_a08",
    type: "reading",
    prompt: "Read the claims dispute notice:\n\"If your insurance claim is rejected, you have the right to file an official appeal within 60 days. You must include a letter from your attending physician detailing why the treatment was medically necessary.\"\nWhat must be included when filing an appeal?",
    sourceSentence: "What must be included when filing an appeal?",
    targetSentence: "A physician's letter explaining why the treatment was medically necessary.",
    options: [
      { id: "o1", text: "A physician's letter explaining why the treatment was medically necessary.", isCorrect: true },
      { id: "o2", text: "A cash deposit of five hundred pounds.", isCorrect: false },
      { id: "o3", text: "A recommendation from a pharmacist.", isCorrect: false }
    ],
    correctAnswer: "A physician's letter explaining why the treatment was medically necessary.",
    explanation: "Notice requires: 'a letter from your attending physician detailing why the treatment was medically necessary.'"
  },
  {
    id: "a2_u10_l144_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain to a customer representative that you were charged an incorrect copay amount.",
    sourceSentence: "Good morning. I was billed fifty dollars for my clinic visit yesterday, but according to my policy schedule, my in-network copay should only be twenty dollars.",
    targetSentence: "Good morning. I was billed fifty dollars for my clinic visit yesterday, but according to my policy schedule, my in-network copay should only be twenty dollars.",
    audioText: "Good morning. I was billed fifty dollars for my clinic visit yesterday, but according to my policy schedule, my in-network copay should only be twenty dollars.",
    explanation: "Polite, evidence-based billing dispute."
  },
  {
    id: "a2_u10_l144_a10",
    type: "mediation",
    prompt: "Translate this insurance instruction into English for an employee: 'यदि आप नेटवर्क से बाहर के डॉक्टर के पास जाते हैं, तो आपको पहले पूरा बिल चुकाना होगा और बाद में क्लेम फॉर्म जमा करना होगा।'",
    sourceSentence: "यदि आप नेटवर्क से बाहर के डॉक्टर के पास जाते हैं, तो आपको पहले पूरा बिल चुकाना होगा और बाद में क्लेम फॉर्म जमा करना होगा।",
    targetSentence: "If you visit an out-of-network doctor, you must pay the full bill upfront and submit a claim form later.",
    options: [
      { id: "o1", text: "If you visit an out-of-network doctor, you must pay the full bill upfront and submit a claim form later.", isCorrect: true },
      { id: "o2", text: "Out-of-network doctors are completely free without claim forms.", isCorrect: false },
      { id: "o3", text: "You cannot see any doctors outside your home.", isCorrect: false }
    ],
    correctAnswer: "If you visit an out-of-network doctor, you must pay the full bill upfront and submit a claim form later.",
    explanation: "'out-of-network doctor', 'pay the full bill upfront', and 'submit a claim form later' are accurate translations."
  }
];

// =========================================================================
// LESSON 145: Automotive Needs, Car Rentals & Roadside Assistance
// =========================================================================
const l145_practice: Exercise[] = [
  {
    id: "a2_u10_l145_p11",
    type: "reading",
    prompt: "Read the car rental agreement conditions:\n\"Standard rental rates include unlimited mileage and third-party liability insurance. Collision Damage Waiver (CDW) is optional but reduces driver excess from £1,500 to £100 in case of vehicle damage. Vehicles must be returned with a full fuel tank to avoid refueling surcharges.\"\nWhat is the benefit of purchasing the Collision Damage Waiver (CDW)?",
    sourceSentence: "What is the benefit of purchasing the Collision Damage Waiver (CDW)?",
    targetSentence: "It reduces the renter's financial liability excess from £1,500 to £100.",
    options: [
      { id: "o1", text: "It reduces the renter's financial liability excess from £1,500 to £100.", isCorrect: true },
      { id: "o2", text: "It provides free unlimited gasoline for the entire trip.", isCorrect: false },
      { id: "o3", text: "It allows the renter to keep the vehicle permanently.", isCorrect: false },
      { id: "o4", text: "It removes the requirement to have a driver's license.", isCorrect: false }
    ],
    correctAnswer: "It reduces the renter's financial liability excess from £1,500 to £100.",
    explanation: "The agreement states: 'Collision Damage Waiver (CDW) ... reduces driver excess from £1,500 to £100 in case of vehicle damage.'"
  },
  {
    id: "a2_u10_l145_p12",
    type: "speaking",
    prompt: "Speak clearly and calmly to roadside emergency dispatch: Report a breakdown, location, and vehicle symptoms.",
    sourceSentence: "Hello, my car broke down on the M4 motorway near junction 12. The engine overheated and steam is coming from under the bonnet.",
    targetSentence: "Hello, my car broke down on the M4 motorway near junction 12. The engine overheated and steam is coming from under the bonnet.",
    audioText: "Hello, my car broke down on the M4 motorway near junction 12. The engine overheated and steam is coming from under the bonnet.",
    explanation: "Clear, concise delivery with accurate motoring terminology ('motorway', 'junction', 'overheated', 'bonnet/hood')."
  },
  {
    id: "a2_u10_l145_p13",
    type: "match_pairs",
    prompt: "Match automotive and roadside assistance collocations with their definitions:",
    options: [
      { id: "m1", text: "flat tire (puncture)" },
      { id: "m1_m", text: "deflated tire caused by a puncture or loss of air pressure" },
      { id: "m2", text: "jump-start the battery" },
      { id: "m2_m", text: "use booster cables from another vehicle to start an engine" },
      { id: "m3", text: "tow truck service" },
      { id: "m3_m", text: "vehicle equipped to haul disabled cars to a repair garage" },
      { id: "m4", text: "unlimited mileage" },
      { id: "m4_m", text: "rental option allowing unrestricted driving distance without extra fees" }
    ]
  },
  {
    id: "a2_u10_l145_p14",
    type: "mediation",
    prompt: "A driver in India asks you to speak to the breakdown helpline in English: 'मेरी कार का टायर पंक्चर हो गया है और स्पेयर व्हील भी खराब है, क्या आप टो ट्रक भेज सकते हैं?' Translate into standard English roadside dispatch request.",
    sourceSentence: "मेरी कार का टायर पंक्चर हो गया है और स्पेयर व्हील भी खराब है, क्या आप टो ट्रक भेज सकते हैं?",
    targetSentence: "I have a flat tire and my spare wheel is also damaged; could you please dispatch a tow truck?",
    options: [
      { id: "o1", text: "I have a flat tire and my spare wheel is also damaged; could you please dispatch a tow truck?", isCorrect: true },
      { id: "o2", text: "I am driving fast and do not need any spare tires.", isCorrect: false },
      { id: "o3", text: "My car is flying and needs no tow trucks.", isCorrect: false }
    ],
    correctAnswer: "I have a flat tire and my spare wheel is also damaged; could you please dispatch a tow truck?",
    explanation: "'flat tire', 'spare wheel is also damaged', and 'dispatch a tow truck' precisely convey the message."
  },
  {
    id: "a2_u10_l145_p15",
    type: "error_correction",
    prompt: "Correct the grammatical error in this car rental request:",
    sourceSentence: "Does the rental price includes insurance and unlimited mileage?",
    targetSentence: "Does the rental price include insurance and unlimited mileage?",
    options: [
      { id: "o1", text: "Does the rental price include insurance and unlimited mileage?", isCorrect: true },
      { id: "o2", text: "Does the rental price including insurance and unlimited mileage?", isCorrect: false },
      { id: "o3", text: "Do the rental price includes insurance and unlimited mileage?", isCorrect: false }
    ],
    correctAnswer: "Does the rental price include insurance and unlimited mileage?",
    explanation: "After auxiliary verb 'Does', use the base form 'include', not 'includes'."
  },
  {
    id: "a2_u10_l145_p16",
    type: "listening",
    prompt: "Listen to the roadside technician and identify the estimated time of arrival:",
    audioText: "We have dispatched our patrol van to your location on Route 9. Traffic is moderate, so the technician should reach you in about twenty-five minutes.",
    targetSentence: "In approximately 25 minutes.",
    options: [
      { id: "o1", text: "In approximately 25 minutes.", isCorrect: true },
      { id: "o2", text: "In three hours.", isCorrect: false },
      { id: "o3", text: "Tomorrow morning at dawn.", isCorrect: false }
    ],
    correctAnswer: "In approximately 25 minutes.",
    explanation: "The technician confirms: 'should reach you in about twenty-five minutes.'"
  },
  {
    id: "a2_u10_l145_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a car breakdown or rental experience you had while traveling:",
    targetSentence: "When our rental car battery died at a scenic viewpoint, we called the emergency roadside assistance number on the key tag. A recovery vehicle arrived within forty minutes and jump-started the car.",
    audioText: "When our rental car battery died at a scenic viewpoint, we called the emergency roadside assistance number on the key tag. A recovery vehicle arrived within forty minutes and jump-started the car."
  },
  {
    id: "a2_u10_l145_p18",
    type: "multiple_choice",
    prompt: "Choose the correct automotive term:\n\"Before setting off on a long road trip, it is essential to check the tyre _____ and oil level.\"",
    options: [
      { id: "o1", text: "pressure", isCorrect: true },
      { id: "o2", text: "waiver", isCorrect: false },
      { id: "o3", text: "deductible", isCorrect: false },
      { id: "o4", text: "mileage", isCorrect: false }
    ],
    correctAnswer: "pressure",
    explanation: "'Tyre pressure' (or tire pressure) is the standard automotive collocation."
  },
  {
    id: "a2_u10_l145_p19",
    type: "fill_blank",
    prompt: "The mechanic explained that the brake pads were completely _____ (wear out) and needed immediate replacement.",
    correctAnswer: "worn out",
    explanation: "Past participle of 'wear out' is 'worn out' (exhausted / degraded through friction)."
  },
  {
    id: "a2_u10_l145_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a car rental return question:",
    tokens: ["Do", "I", "have", "to", "refuel", "the", "car", "before", "returning", "it?"],
    correctAnswer: "Do I have to refuel the car before returning it?",
    explanation: "Standard question about rental car fuel policy."
  },
  {
    id: "a2_u10_l145_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange at the car rental desk:\nAgent: \"Would you like to add an additional driver to the contract for five pounds per day?\"\nCustomer: \"_____\"",
    options: [
      { id: "o1", text: "Yes, please. My partner will share the driving on long highway stretches.", isCorrect: true },
      { id: "o2", text: "No, cars do not require any drivers.", isCorrect: false },
      { id: "o3", text: "We have sold the car yesterday.", isCorrect: false },
      { id: "o4", text: "You must not look at driving licenses.", isCorrect: false }
    ],
    correctAnswer: "Yes, please. My partner will share the driving on long highway stretches.",
    explanation: "Natural and logical customer acceptance."
  },
  {
    id: "a2_u10_l145_p22",
    type: "translation",
    prompt: "Translate into English: 'कार का इंजन अचानक बंद हो गया और अब स्टार्ट नहीं हो रहा है।'",
    correctAnswer: "The car engine suddenly died and won't start now.",
    acceptableAnswers: [
      "The car engine stopped suddenly and will not start now.",
      "The car's engine suddenly shut down and isn't starting."
    ],
    explanation: "'The car engine suddenly died and won't start now' is idiomatic English."
  }
];

const l145_review: Exercise[] = [
  {
    id: "a2_u10_l145_r09",
    type: "multiple_choice",
    prompt: "Which phrase correctly expresses emergency breakdown advice on a motorway?",
    options: [
      { id: "o1", text: "Pull over onto the hard shoulder, switch on your hazard lights, and wait behind the safety barrier.", isCorrect: true },
      { id: "o2", text: "Stop in the middle lane and walk around your car.", isCorrect: false },
      { id: "o3", text: "Turn off all lights and stay asleep inside the vehicle.", isCorrect: false },
      { id: "o4", text: "Drive on flat tyres at high speed.", isCorrect: false }
    ],
    correctAnswer: "Pull over onto the hard shoulder, switch on your hazard lights, and wait behind the safety barrier.",
    explanation: "Standard British and international motorway safety procedure."
  },
  {
    id: "a2_u10_l145_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this rental agreement rule:",
    sourceSentence: "You must to show a valid international driving permit upon collection.",
    targetSentence: "You must show a valid international driving permit upon collection.",
    options: [
      { id: "o1", text: "You must show a valid international driving permit upon collection.", isCorrect: true },
      { id: "o2", text: "You must showing a valid driving permit upon collection.", isCorrect: false },
      { id: "o3", text: "You must to showing valid driving permit upon collection.", isCorrect: false }
    ],
    correctAnswer: "You must show a valid international driving permit upon collection.",
    explanation: "Modal 'must' is followed directly by bare infinitive ('show'), never 'to show'."
  }
];

const l145_assessment: Exercise[] = [
  {
    id: "a2_u10_l145_a08",
    type: "reading",
    prompt: "Read the breakdown recovery policy:\n\"Gold Membership includes roadside repairs, nationwide recovery towing to any UK destination, and up to £150 for onward travel or hotel accommodation if the vehicle cannot be repaired on the same day.\"\nWhat support is provided if a vehicle cannot be repaired on the same day?",
    sourceSentence: "What support is provided if a vehicle cannot be repaired on the same day?",
    targetSentence: "Nationwide towing and up to £150 for onward travel or hotel accommodation.",
    options: [
      { id: "o1", text: "Nationwide towing and up to £150 for onward travel or hotel accommodation.", isCorrect: true },
      { id: "o2", text: "A brand new replacement car to keep permanently.", isCorrect: false },
      { id: "o3", text: "No support is offered after sunset.", isCorrect: false }
    ],
    correctAnswer: "Nationwide towing and up to £150 for onward travel or hotel accommodation.",
    explanation: "Policy details: 'nationwide recovery towing ... and up to £150 for onward travel or hotel accommodation'."
  },
  {
    id: "a2_u10_l145_a09",
    type: "speaking",
    prompt: "Speak fluently: Inquire about renting an SUV with child seats and GPS navigation for a weekend family trip.",
    sourceSentence: "Hi, I'd like to rent a medium-sized SUV for three days starting Friday. Could you include two child booster seats and a GPS unit?",
    targetSentence: "Hi, I'd like to rent a medium-sized SUV for three days starting Friday. Could you include two child booster seats and a GPS unit?",
    audioText: "Hi, I'd like to rent a medium-sized SUV for three days starting Friday. Could you include two child booster seats and a GPS unit?",
    explanation: "Natural, polite transaction at a car rental desk."
  },
  {
    id: "a2_u10_l145_a10",
    type: "mediation",
    prompt: "Translate this breakdown update for a stranded international driver: 'टो ट्रक 15 मिनट में आपके पास पहुंच रहा है, कृपया अपनी कार के हजार्ड लाइट्स चालू रखें।' Provide a clear English translation.",
    sourceSentence: "टो ट्रक 15 मिनट में आपके पास पहुंच रहा है, कृपया अपनी कार के हजार्ड लाइट्स चालू रखें।",
    targetSentence: "The tow truck will reach you in 15 minutes; please keep your hazard lights on.",
    options: [
      { id: "o1", text: "The tow truck will reach you in 15 minutes; please keep your hazard lights on.", isCorrect: true },
      { id: "o2", text: "Tow truck cancelled and lights must be off.", isCorrect: false },
      { id: "o3", text: "You must buy 15 hazard lights now.", isCorrect: false }
    ],
    correctAnswer: "The tow truck will reach you in 15 minutes; please keep your hazard lights on.",
    explanation: "'The tow truck will reach you in 15 minutes; please keep your hazard lights on' is direct and accurate."
  }
];

// Execute enrichment for batch 141-145
export function runEnrichment141_145() {
  console.log('--- ENRICHING LESSONS 141-145 TO 42 EXERCISES ---');
  enrichUnit10LessonData('lesson_a2_10_141', LESSON_A2_10_141_DATA, l141_practice, l141_review, l141_assessment);
  enrichUnit10LessonData('lesson_a2_10_142', LESSON_A2_10_142_DATA, l142_practice, l142_review, l142_assessment);
  enrichUnit10LessonData('lesson_a2_10_143', LESSON_A2_10_143_DATA, l143_practice, l143_review, l143_assessment);
  enrichUnit10LessonData('lesson_a2_10_144', LESSON_A2_10_144_DATA, l144_practice, l144_review, l144_assessment);
  enrichUnit10LessonData('lesson_a2_10_145', LESSON_A2_10_145_DATA, l145_practice, l145_review, l145_assessment);
}

runEnrichment141_145();
