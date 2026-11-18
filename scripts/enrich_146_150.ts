import { Exercise } from '../src/types';
import { LESSON_A2_10_146_DATA } from '../src/data/lessons/lesson_a2_10_146';
import { LESSON_A2_10_147_DATA } from '../src/data/lessons/lesson_a2_10_147';
import { LESSON_A2_10_148_DATA } from '../src/data/lessons/lesson_a2_10_148';
import { LESSON_A2_10_149_DATA } from '../src/data/lessons/lesson_a2_10_149';
import { LESSON_A2_10_150_DATA } from '../src/data/lessons/lesson_a2_10_150';
import { enrichUnit10LessonData } from './enrich_unit10_helper';

// =========================================================================
// LESSON 146: Emergency Services, Reporting Incidents & Urgent Support
// =========================================================================
const l146_practice: Exercise[] = [
  {
    id: "a2_u10_l146_p11",
    type: "reading",
    prompt: "Read the emergency call transcript and answer the question:\n\"Operator: Emergency services, which service do you require: police, fire, or ambulance?\nCaller: Ambulance, please! There has been a two-car collision at the intersection of Oak Street and High Avenue. One driver is conscious but trapped, and fluid is leaking from the engine.\nOperator: Help is on the way. Please keep everyone at a safe distance from the vehicles.\"\nWhat hazards are present at the accident scene?",
    sourceSentence: "What hazards are present at the accident scene?",
    targetSentence: "A trapped driver and engine fluid leaking near the collision.",
    options: [
      { id: "o1", text: "A trapped driver and engine fluid leaking near the collision.", isCorrect: true },
      { id: "o2", text: "A burning forest ten miles away.", isCorrect: false },
      { id: "o3", text: "A flat bicycle tire on an empty footpath.", isCorrect: false },
      { id: "o4", text: "Heavy rain with no vehicles involved.", isCorrect: false }
    ],
    correctAnswer: "A trapped driver and engine fluid leaking near the collision.",
    explanation: "Caller states: 'One driver is conscious but trapped, and fluid is leaking from the engine.'"
  },
  {
    id: "a2_u10_l146_p12",
    type: "speaking",
    prompt: "Speak clearly and calmly to an emergency operator: State your location and report an urgent medical situation.",
    sourceSentence: "I need an ambulance at 42 Maple Road immediately; an elderly gentleman has collapsed and is breathing with difficulty.",
    targetSentence: "I need an ambulance at 42 Maple Road immediately; an elderly gentleman has collapsed and is breathing with difficulty.",
    audioText: "I need an ambulance at 42 Maple Road immediately; an elderly gentleman has collapsed and is breathing with difficulty.",
    explanation: "Emphasize calm, distinct delivery with precise address details."
  },
  {
    id: "a2_u10_l146_p13",
    type: "match_pairs",
    prompt: "Match emergency reporting collocations with their definitions:",
    options: [
      { id: "m1", text: "two-car collision" },
      { id: "m1_m", text: "crash involving two moving road vehicles" },
      { id: "m2", text: "administer first aid" },
      { id: "m2_m", text: "provide immediate basic medical care before paramedics arrive" },
      { id: "m3", text: "evacuate the building" },
      { id: "m3_m", text: "leave a premises rapidly due to fire or structural danger" },
      { id: "m4", text: "paramedic team" },
      { id: "m4_m", text: "emergency medical technicians trained for pre-hospital care" }
    ]
  },
  {
    id: "a2_u10_l146_p14",
    type: "mediation",
    prompt: "An injured tourist asks you to speak to the 112/999 operator in English: 'कृपया बताएं कि चौराहे पर एक व्यक्ति बेहोश हो गया है और उसे तुरंत ऑक्सीजन की आवश्यकता है।' Provide a clear, urgent English transmission.",
    sourceSentence: "कृपया बताएं कि चौराहे पर एक व्यक्ति बेहोश हो गया है और उसे तुरंत ऑक्सीजन की आवश्यकता है।",
    targetSentence: "A person has lost consciousness at the intersection and needs immediate medical assistance and oxygen.",
    options: [
      { id: "o1", text: "A person has lost consciousness at the intersection and needs immediate medical assistance and oxygen.", isCorrect: true },
      { id: "o2", text: "A person is sleeping at home and does not want doctors.", isCorrect: false },
      { id: "o3", text: "We need police to buy new traffic lights.", isCorrect: false }
    ],
    correctAnswer: "A person has lost consciousness at the intersection and needs immediate medical assistance and oxygen.",
    explanation: "'lost consciousness', 'at the intersection', and 'immediate medical assistance and oxygen' are accurate emergency terms."
  },
  {
    id: "a2_u10_l146_p15",
    type: "error_correction",
    prompt: "Correct the grammatical mistake in this emergency alert:",
    sourceSentence: "If you hear the fire alarm, you must to evacuate immediately through the fire stairs.",
    targetSentence: "If you hear the fire alarm, you must evacuate immediately through the fire stairs.",
    options: [
      { id: "o1", text: "If you hear the fire alarm, you must evacuate immediately through the fire stairs.", isCorrect: true },
      { id: "o2", text: "If you hear fire alarm, you must to evacuating immediately.", isCorrect: false },
      { id: "o3", text: "If you hearing fire alarm, you must evacuated.", isCorrect: false }
    ],
    correctAnswer: "If you hear the fire alarm, you must evacuate immediately through the fire stairs.",
    explanation: "Modal 'must' is followed directly by bare infinitive ('evacuate'), not 'to evacuate'."
  },
  {
    id: "a2_u10_l146_p16",
    type: "listening",
    prompt: "Listen to the emergency operator's instructions and identify the critical advice:",
    audioText: "Do not move the injured person unless they are in immediate danger of fire. Keep them warm and stay on the line with me until the ambulance arrives.",
    targetSentence: "Do not move the injured person and stay on the phone until paramedics arrive.",
    options: [
      { id: "o1", text: "Do not move the injured person and stay on the phone until paramedics arrive.", isCorrect: true },
      { id: "o2", text: "Drive the injured person to the hospital in your own car immediately.", isCorrect: false },
      { id: "o3", text: "Hang up the phone and leave the scene.", isCorrect: false }
    ],
    correctAnswer: "Do not move the injured person and stay on the phone until paramedics arrive.",
    explanation: "Operator states: 'Do not move the injured person ... stay on the line with me until the ambulance arrives.'"
  },
  {
    id: "a2_u10_l146_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing the emergency phone numbers in your country and what details an operator asks for:",
    targetSentence: "In my country, we dial 112 for all police, medical, and fire emergencies. The operator asks for the exact location, the nature of the incident, and the number of people injured.",
    audioText: "In my country, we dial 112 for all police, medical, and fire emergencies. The operator asks for the exact location, the nature of the incident, and the number of people injured."
  },
  {
    id: "a2_u10_l146_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the emergency instruction:\n\"During an evacuation, _____ the elevators; always use designated emergency staircases.\"",
    options: [
      { id: "o1", text: "do not use", isCorrect: true },
      { id: "o2", text: "don't have to use", isCorrect: false },
      { id: "o3", text: "are using", isCorrect: false },
      { id: "o4", text: "having used", isCorrect: false }
    ],
    correctAnswer: "do not use",
    explanation: "Imperative negative prohibition: 'do not use'."
  },
  {
    id: "a2_u10_l146_p19",
    type: "fill_blank",
    prompt: "The firefighter instructed everyone to stay _____ (calm) and proceed towards the assembly point.",
    correctAnswer: "calm",
    explanation: "Adjective 'calm' follows linking verb 'stay' ('stay calm')."
  },
  {
    id: "a2_u10_l146_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form an emergency dispatch question:",
    tokens: ["Is", "anyone", "at", "the", "scene", "severely", "injured", "or", "unconscious?"],
    correctAnswer: "Is anyone at the scene severely injured or unconscious?",
    explanation: "Standard emergency triage inquiry."
  },
  {
    id: "a2_u10_l146_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange with the emergency call handler:\nOperator: \"Is the building burning or is there only smoke?\"\nCaller: \"_____\"",
    options: [
      { id: "o1", text: "Thick black smoke is billowing from the third-floor windows and flames are visible on the roof.", isCorrect: true },
      { id: "o2", text: "We have bought three new sofas yesterday.", isCorrect: false },
      { id: "o3", text: "You don't have to call fire brigade.", isCorrect: false },
      { id: "o4", text: "The building was painted last month.", isCorrect: false }
    ],
    correctAnswer: "Thick black smoke is billowing from the third-floor windows and flames are visible on the roof.",
    explanation: "Direct, descriptive emergency information."
  },
  {
    id: "a2_u10_l146_p22",
    type: "translation",
    prompt: "Translate into English: 'पुलिस और एम्बुलेंस दोनों घटना स्थल पर पहुंच चुके हैं।'",
    correctAnswer: "Both police and the ambulance have arrived at the scene of the incident.",
    acceptableAnswers: [
      "Both the police and an ambulance have arrived at the scene.",
      "Both the police and ambulance are already at the scene of the incident."
    ],
    explanation: "'Both police and the ambulance have arrived at the scene of the incident' is an accurate translation."
  }
];

const l146_review: Exercise[] = [
  {
    id: "a2_u10_l146_r09",
    type: "multiple_choice",
    prompt: "Which command correctly provides first-aid guidance for a severe burn?",
    options: [
      { id: "o1", text: "Hold the burned area under cool running water for at least twenty minutes.", isCorrect: true },
      { id: "o2", text: "Apply butter and hot grease immediately.", isCorrect: false },
      { id: "o3", text: "Do not put any water on burns ever.", isCorrect: false },
      { id: "o4", text: "Break all blisters with sharp pins.", isCorrect: false }
    ],
    correctAnswer: "Hold the burned area under cool running water for at least twenty minutes.",
    explanation: "Standard certified international first aid protocol for burns."
  },
  {
    id: "a2_u10_l146_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this safety report:",
    sourceSentence: "The security guard was noticing smoke coming from the electrical panel.",
    targetSentence: "The security guard noticed smoke coming from the electrical panel.",
    options: [
      { id: "o1", text: "The security guard noticed smoke coming from the electrical panel.", isCorrect: true },
      { id: "o2", text: "The security guard has notice smoke coming from electrical panel.", isCorrect: false },
      { id: "o3", text: "The security guard noticing smoke coming electrical panel.", isCorrect: false }
    ],
    correctAnswer: "The security guard noticed smoke coming from the electrical panel.",
    explanation: "Sensory perception verbs like 'notice' in completed narrative events take Past Simple ('noticed')."
  }
];

const l146_assessment: Exercise[] = [
  {
    id: "a2_u10_l146_a08",
    type: "reading",
    prompt: "Read the workplace emergency action plan:\n\"In the event of a chemical spill in the laboratory, sound the alarm, evacuate the room immediately, and do not attempt to clean the area without specialized protective equipment. Notify the hazardous materials coordinator at extension 4400.\"\nWhat should employees do if a chemical spill occurs?",
    sourceSentence: "What should employees do if a chemical spill occurs?",
    targetSentence: "Sound the alarm, evacuate immediately, and notify the hazmat coordinator.",
    options: [
      { id: "o1", text: "Sound the alarm, evacuate immediately, and notify the hazmat coordinator.", isCorrect: true },
      { id: "o2", text: "Wipe the spill with paper towels without protective equipment.", isCorrect: false },
      { id: "o3", text: "Ignore the alarm and continue working.", isCorrect: false }
    ],
    correctAnswer: "Sound the alarm, evacuate immediately, and notify the hazmat coordinator.",
    explanation: "Plan states: 'sound the alarm, evacuate the room immediately ... Notify the hazardous materials coordinator'."
  },
  {
    id: "a2_u10_l146_a09",
    type: "speaking",
    prompt: "Speak fluently: Report a minor traffic collision where no one is injured but traffic is blocked.",
    sourceSentence: "There has been a minor fender bender between a delivery van and a taxi on Bridge Street. No one is injured, but both vehicles are blocking the southbound lane.",
    targetSentence: "There has been a minor fender bender between a delivery van and a taxi on Bridge Street. No one is injured, but both vehicles are blocking the southbound lane.",
    audioText: "There has been a minor fender bender between a delivery van and a taxi on Bridge Street. No one is injured, but both vehicles are blocking the southbound lane.",
    explanation: "Clear, concise delivery using appropriate motoring terminology ('fender bender', 'southbound lane')."
  },
  {
    id: "a2_u10_l146_a10",
    type: "mediation",
    prompt: "Translate this vital emergency instruction into English: 'जब तक मदद नहीं पहुंचती, तब तक घायल व्यक्ति को स्थिर रखें और उनका सिर न हिलाएं।' Provide an accurate English translation.",
    sourceSentence: "जब तक मदद नहीं पहुंचती, तब तक घायल व्यक्ति को स्थिर रखें और उनका सिर न हिलाएं।",
    targetSentence: "Keep the injured person still and do not move their head until help arrives.",
    options: [
      { id: "o1", text: "Keep the injured person still and do not move their head until help arrives.", isCorrect: true },
      { id: "o2", text: "Move the injured person immediately and run away.", isCorrect: false },
      { id: "o3", text: "Help has arrived yesterday so move their head.", isCorrect: false }
    ],
    correctAnswer: "Keep the injured person still and do not move their head until help arrives.",
    explanation: "'Keep the injured person still and do not move their head until help arrives' is clear medical guidance."
  }
];

// =========================================================================
// LESSON 147: Community Volunteering, Local Initiatives & Neighborhood Projects
// =========================================================================
const l147_practice: Exercise[] = [
  {
    id: "a2_u10_l147_p11",
    type: "reading",
    prompt: "Read the community newsletter and answer the question:\n\"Join the Riverside Community Garden Project this Saturday at 10 AM! We are transforming the vacant lot behind the library into an organic vegetable garden and pollinator haven. Tools, gloves, and refreshments will be provided. No gardening experience is required; everyone is welcome to pitch in.\"\nWhat support is provided to participants?",
    sourceSentence: "What support is provided to participants?",
    targetSentence: "Tools, gloves, and refreshments will be provided free of charge.",
    options: [
      { id: "o1", text: "Tools, gloves, and refreshments will be provided free of charge.", isCorrect: true },
      { id: "o2", text: "A salary of fifty pounds per hour.", isCorrect: false },
      { id: "o3", text: "A commercial tractor to take home.", isCorrect: false },
      { id: "o4", text: "A mandatory written exam on botany.", isCorrect: false }
    ],
    correctAnswer: "Tools, gloves, and refreshments will be provided free of charge.",
    explanation: "The text says: 'Tools, gloves, and refreshments will be provided. No gardening experience is required...'"
  },
  {
    id: "a2_u10_l147_p12",
    type: "speaking",
    prompt: "Speak clearly and enthusiastically: Volunteer for a local charity drive and offer your skills.",
    sourceSentence: "I would love to volunteer at the food bank on weekends. I can help sort donations and organize inventory deliveries.",
    targetSentence: "I would love to volunteer at the food bank on weekends. I can help sort donations and organize inventory deliveries.",
    audioText: "I would love to volunteer at the food bank on weekends. I can help sort donations and organize inventory deliveries.",
    explanation: "Warm, collaborative intonation with phrases like 'I would love to volunteer' and 'I can help sort'."
  },
  {
    id: "a2_u10_l147_p13",
    type: "match_pairs",
    prompt: "Match community volunteering terms with their definitions:",
    options: [
      { id: "m1", text: "food bank" },
      { id: "m1_m", text: "non-profit organization distributing groceries to families in need" },
      { id: "m2", text: "pitch in" },
      { id: "m2_m", text: "join together enthusiastically to assist with a group effort" },
      { id: "m3", text: "fundraising drive" },
      { id: "m3_m", text: "organized campaign to collect financial donations for a cause" },
      { id: "m4", text: "neighborhood cleanup" },
      { id: "m4_m", text: "community event where residents collect litter from public areas" }
    ]
  },
  {
    id: "a2_u10_l147_p14",
    type: "mediation",
    prompt: "Your neighbor explains a local drive in Hindi: 'हम स्थानीय प्राथमिक विद्यालय के लिए किताबें और गर्म कपड़े एकत्र कर रहे हैं, क्या आप कुछ दान करना चाहेंगे?' Translate into friendly, persuasive English.",
    sourceSentence: "हम स्थानीय प्राथमिक विद्यालय के लिए किताबें और गर्म कपड़े एकत्र कर रहे हैं, क्या आप कुछ दान करना चाहेंगे?",
    targetSentence: "We are collecting books and warm clothes for the local primary school; would you like to donate anything?",
    options: [
      { id: "o1", text: "We are collecting books and warm clothes for the local primary school; would you like to donate anything?", isCorrect: true },
      { id: "o2", text: "We are selling expensive clothes to primary school students.", isCorrect: false },
      { id: "o3", text: "You must not read books in primary schools.", isCorrect: false }
    ],
    correctAnswer: "We are collecting books and warm clothes for the local primary school; would you like to donate anything?",
    explanation: "'collecting books and warm clothes for the local primary school; would you like to donate anything?' is a precise rendering."
  },
  {
    id: "a2_u10_l147_p15",
    type: "error_correction",
    prompt: "Correct the verb complement error in this volunteering sentence:",
    sourceSentence: "She enjoys to volunteer at the animal shelter every Sunday afternoon.",
    targetSentence: "She enjoys volunteering at the animal shelter every Sunday afternoon.",
    options: [
      { id: "o1", text: "She enjoys volunteering at the animal shelter every Sunday afternoon.", isCorrect: true },
      { id: "o2", text: "She enjoys volunteer at the animal shelter every Sunday afternoon.", isCorrect: false },
      { id: "o3", text: "She enjoy to volunteer at animal shelter.", isCorrect: false }
    ],
    correctAnswer: "She enjoys volunteering at the animal shelter every Sunday afternoon.",
    explanation: "The verb 'enjoy' is followed by a gerund (-ing: 'volunteering'), never an infinitive ('to volunteer')."
  },
  {
    id: "a2_u10_l147_p16",
    type: "listening",
    prompt: "Listen to the charity coordinator and identify the project goal:",
    audioText: "Our primary objective this winter is to raise £10,000 to purchase thermal blankets and hot meals for homeless shelters across the city.",
    targetSentence: "To raise £10,000 for thermal blankets and hot meals for shelters.",
    options: [
      { id: "o1", text: "To raise £10,000 for thermal blankets and hot meals for shelters.", isCorrect: true },
      { id: "o2", text: "To construct a new luxury hotel.", isCorrect: false },
      { id: "o3", text: "To close down local shelters.", isCorrect: false }
    ],
    correctAnswer: "To raise £10,000 for thermal blankets and hot meals for shelters.",
    explanation: "Coordinator specifies: 'raise £10,000 to purchase thermal blankets and hot meals for homeless shelters'."
  },
  {
    id: "a2_u10_l147_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a volunteer project or community activity you would like to participate in:",
    targetSentence: "I would like to participate in a local beach cleanup event next spring. It is a wonderful way to protect marine wildlife and connect with like-minded neighbors.",
    audioText: "I would like to participate in a local beach cleanup event next spring. It is a wonderful way to protect marine wildlife and connect with like-minded neighbors."
  },
  {
    id: "a2_u10_l147_p18",
    type: "multiple_choice",
    prompt: "Choose the correct phrase to complete the sentence:\n\"Over forty residents came together to _____ along the canal path.\"",
    options: [
      { id: "o1", text: "plant native trees and wildflower seeds", isCorrect: true },
      { id: "o2", text: "evacuate the hospital", isCorrect: false },
      { id: "o3", text: "deduct insurance excess", isCorrect: false },
      { id: "o4", text: "overheat the engine", isCorrect: false }
    ],
    correctAnswer: "plant native trees and wildflower seeds",
    explanation: "'Plant native trees and wildflower seeds' fits the environmental community volunteering context."
  },
  {
    id: "a2_u10_l147_p19",
    type: "fill_blank",
    prompt: "Volunteering helps people develop new skills while making a positive _____ (impact) on society.",
    correctAnswer: "impact",
    explanation: "The standard collocation is 'make a positive impact on'."
  },
  {
    id: "a2_u10_l147_p20",
    type: "word_ordering",
    prompt: "Arrange the words to describe community participation:",
    tokens: ["Many", "local", "businesses", "donated", "supplies", "to", "the", "charity."],
    correctAnswer: "Many local businesses donated supplies to the charity.",
    explanation: "Subject + verb + direct object + prepositional phrase."
  },
  {
    id: "a2_u10_l147_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange between two neighborhood volunteers:\nVolunteer A: \"How many care packages have we assembled so far?\"\nVolunteer B: \"_____\"",
    options: [
      { id: "o1", text: "We have packed over eighty boxes this morning, and we have enough supplies for fifty more.", isCorrect: true },
      { id: "o2", text: "Packages are illegal in this county.", isCorrect: false },
      { id: "o3", text: "You must not assemble any boxes.", isCorrect: false },
      { id: "o4", text: "We have evacuated the packages yesterday.", isCorrect: false }
    ],
    correctAnswer: "We have packed over eighty boxes this morning, and we have enough supplies for fifty more.",
    explanation: "Encouraging, progress-oriented response."
  },
  {
    id: "a2_u10_l147_p22",
    type: "translation",
    prompt: "Translate into English: 'हमारे पड़ोसियों ने पार्क को साफ और सुंदर रखने के लिए एक समिति बनाई है।'",
    correctAnswer: "Our neighbors have formed a committee to keep the park clean and beautiful.",
    acceptableAnswers: [
      "Our neighbors formed a committee to keep the park clean and beautiful.",
      "Our neighbors created a committee to maintain the cleanliness and beauty of the park."
    ],
    explanation: "'Our neighbors have formed a committee to keep the park clean and beautiful' is accurate and natural."
  }
];

const l147_review: Exercise[] = [
  {
    id: "a2_u10_l147_r09",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses 'used to' to contrast past volunteering habits with current involvement?",
    options: [
      { id: "o1", text: "I used to volunteer once a month, but now I coordinate weekly community workshops.", isCorrect: true },
      { id: "o2", text: "I use to volunteering once a month, but now I coordinate.", isCorrect: false },
      { id: "o3", text: "I am used to volunteer once a month in past.", isCorrect: false },
      { id: "o4", text: "I used to coordinated workshops yesterday.", isCorrect: false }
    ],
    correctAnswer: "I used to volunteer once a month, but now I coordinate weekly community workshops.",
    explanation: "'used to + base verb' ('used to volunteer') contrasts past habit with present reality."
  },
  {
    id: "a2_u10_l147_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this community invitation:",
    sourceSentence: "We look forward to meet all volunteers at the town hall on Saturday.",
    targetSentence: "We look forward to meeting all volunteers at the town hall on Saturday.",
    options: [
      { id: "o1", text: "We look forward to meeting all volunteers at the town hall on Saturday.", isCorrect: true },
      { id: "o2", text: "We look forward to met all volunteers at town hall.", isCorrect: false },
      { id: "o3", text: "We looking forward meet all volunteers.", isCorrect: false }
    ],
    correctAnswer: "We look forward to meeting all volunteers at the town hall on Saturday.",
    explanation: "The phrasal verb 'look forward to' takes a gerund (-ing: 'meeting') because 'to' is a preposition here."
  }
];

const l147_assessment: Exercise[] = [
  {
    id: "a2_u10_l147_a08",
    type: "reading",
    prompt: "Read the senior mentorship initiative overview:\n\"The Golden Years project pairs bilingual volunteers with elderly residents to assist with digital literacy, such as video calling family members and accessing public health portals. Volunteers commit to two hours per week for three months.\"\nWhat is the primary role of volunteers in this project?",
    sourceSentence: "What is the primary role of volunteers in this project?",
    targetSentence: "To help elderly residents with digital skills and online communication.",
    options: [
      { id: "o1", text: "To help elderly residents with digital skills and online communication.", isCorrect: true },
      { id: "o2", text: "To build physical hospitals.", isCorrect: false },
      { id: "o3", text: "To sell mobile phones for profit.", isCorrect: false }
    ],
    correctAnswer: "To help elderly residents with digital skills and online communication.",
    explanation: "Text notes: 'assist with digital literacy, such as video calling family members and accessing public health portals.'"
  },
  {
    id: "a2_u10_l147_a09",
    type: "speaking",
    prompt: "Speak fluently: Describe how participating in a community project benefits both the volunteer and the neighborhood.",
    sourceSentence: "Volunteering strengthens neighborhood connections and addresses local needs, while giving volunteers valuable teamwork experience and a strong sense of purpose.",
    targetSentence: "Volunteering strengthens neighborhood connections and addresses local needs, while giving volunteers valuable teamwork experience and a strong sense of purpose.",
    audioText: "Volunteering strengthens neighborhood connections and addresses local needs, while giving volunteers valuable teamwork experience and a strong sense of purpose.",
    explanation: "Articulate delivery of complex ideas using 'while giving' and 'sense of purpose'."
  },
  {
    id: "a2_u10_l147_a10",
    type: "mediation",
    prompt: "Translate this community appeal into English: 'छोटे-छोटे प्रयास भी बड़ा बदलाव ला सकते हैं; आइए मिलकर अपने पड़ोस को हरा-भरा बनाएं।'",
    sourceSentence: "छोटे-छोटे प्रयास भी बड़ा बदलाव ला सकते हैं; आइए मिलकर अपने पड़ोस को हरा-भरा बनाएं।",
    targetSentence: "Even small efforts can make a big difference; let's work together to make our neighborhood greener.",
    options: [
      { id: "o1", text: "Even small efforts can make a big difference; let's work together to make our neighborhood greener.", isCorrect: true },
      { id: "o2", text: "Small efforts are useless and neighborhoods cannot be green.", isCorrect: false },
      { id: "o3", text: "We must not change anything in our neighborhood.", isCorrect: false }
    ],
    correctAnswer: "Even small efforts can make a big difference; let's work together to make our neighborhood greener.",
    explanation: "'Even small efforts can make a big difference; let's work together to make our neighborhood greener' is an inspiring, accurate translation."
  }
];

// =========================================================================
// LESSON 148: Environmental Sustainability, Waste Management & Green Living
// =========================================================================
const l148_practice: Exercise[] = [
  {
    id: "a2_u10_l148_p11",
    type: "reading",
    prompt: "Read the sustainable lifestyle article:\n\"Reducing household food waste is one of the most effective ways to lower your carbon footprint. By planning weekly meals in advance, composting vegetable scraps, and utilizing airtight containers, an average family can divert over 200 kilograms of organic waste from landfills each year while saving hundreds of pounds.\"\nWhat are three practical methods mentioned to reduce food waste?",
    sourceSentence: "What are three practical methods mentioned to reduce food waste?",
    targetSentence: "Planning weekly meals, composting vegetable scraps, and using airtight containers.",
    options: [
      { id: "o1", text: "Planning weekly meals, composting vegetable scraps, and using airtight containers.", isCorrect: true },
      { id: "o2", text: "Buying fast food daily and throwing away leftovers.", isCorrect: false },
      { id: "o3", text: "Disposing of all food waste in general rubbish bins.", isCorrect: false },
      { id: "o4", text: "Stopping cooking at home entirely.", isCorrect: false }
    ],
    correctAnswer: "Planning weekly meals, composting vegetable scraps, and using airtight containers.",
    explanation: "The article highlights: 'planning weekly meals in advance, composting vegetable scraps, and utilizing airtight containers'."
  },
  {
    id: "a2_u10_l148_p12",
    type: "speaking",
    prompt: "Speak clearly and persuasively: Explain three sustainable habits you follow at home.",
    sourceSentence: "I separate recyclable paper and plastics, carry reusable shopping bags everywhere, and compost organic kitchen waste in my garden.",
    targetSentence: "I separate recyclable paper and plastics, carry reusable shopping bags everywhere, and compost organic kitchen waste in my garden.",
    audioText: "I separate recyclable paper and plastics, carry reusable shopping bags everywhere, and compost organic kitchen waste in my garden.",
    explanation: "Fluency and natural rhythm with serial lists ('separate..., carry..., and compost...')."
  },
  {
    id: "a2_u10_l148_p13",
    type: "match_pairs",
    prompt: "Match sustainability and waste management terms with their definitions:",
    options: [
      { id: "m1", text: "carbon footprint" },
      { id: "m1_m", text: "total greenhouse gas emissions produced by an individual or activity" },
      { id: "m2", text: "composting" },
      { id: "m2_m", text: "natural recycling of decomposed organic matter into fertile soil" },
      { id: "m3", text: "single-use plastics" },
      { id: "m3_m", text: "disposable plastic items intended to be thrown away after one use" },
      { id: "m4", text: "circular economy" },
      { id: "m4_m", text: "economic system focused on reducing waste through reuse and regeneration" }
    ]
  },
  {
    id: "a2_u10_l148_p14",
    type: "mediation",
    prompt: "A resident in your apartment building doesn't understand Hindi: 'प्लास्टिक की बोतलों को नीले डिब्बे में डालने से पहले धोना और चपटा करना अनिवार्य है।' Translate this recycling instruction clearly in English.",
    sourceSentence: "प्लास्टिक की बोतलों को नीले डिब्बे में डालने से पहले धोना और चपटा करना अनिवार्य है।",
    targetSentence: "It is mandatory to rinse and flatten plastic bottles before placing them in the blue recycling bin.",
    options: [
      { id: "o1", text: "It is mandatory to rinse and flatten plastic bottles before placing them in the blue recycling bin.", isCorrect: true },
      { id: "o2", text: "Do not put plastic bottles in any recycling bins.", isCorrect: false },
      { id: "o3", text: "Bottles must be filled with dirty water before throwing.", isCorrect: false }
    ],
    correctAnswer: "It is mandatory to rinse and flatten plastic bottles before placing them in the blue recycling bin.",
    explanation: "'rinse and flatten plastic bottles before placing them in the blue recycling bin' is authentic recycling signage language."
  },
  {
    id: "a2_u10_l148_p15",
    type: "error_correction",
    prompt: "Correct the quantifier error in this sustainability advice:",
    sourceSentence: "If we use lesser plastic bags, our oceans will be much cleaner.",
    targetSentence: "If we use fewer plastic bags, our oceans will be much cleaner.",
    options: [
      { id: "o1", text: "If we use fewer plastic bags, our oceans will be much cleaner.", isCorrect: true },
      { id: "o2", text: "If we use less plastic bags, our oceans will be cleaner.", isCorrect: false },
      { id: "o3", text: "If we use few plastic bags, our oceans will be much cleaner.", isCorrect: false }
    ],
    correctAnswer: "If we use fewer plastic bags, our oceans will be much cleaner.",
    explanation: "With plural countable nouns ('plastic bags'), use 'fewer', not 'less' or 'lesser'."
  },
  {
    id: "a2_u10_l148_p16",
    type: "listening",
    prompt: "Listen to the environmental scientist and identify the main recommendation:",
    audioText: "Transitioning to renewable solar energy and improving home insulation can decrease an average household's annual emissions by over forty percent.",
    targetSentence: "Using solar energy and improving insulation cuts household emissions by over 40%.",
    options: [
      { id: "o1", text: "Using solar energy and improving insulation cuts household emissions by over 40%.", isCorrect: true },
      { id: "o2", text: "Solar energy increases carbon emissions significantly.", isCorrect: false },
      { id: "o3", text: "Insulation has no effect on home energy consumption.", isCorrect: false }
    ],
    correctAnswer: "Using solar energy and improving insulation cuts household emissions by over 40%.",
    explanation: "Scientist explains: 'solar energy and improving home insulation can decrease an average household's annual emissions by over forty percent.'"
  },
  {
    id: "a2_u10_l148_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing one eco-friendly habit you have adopted recently and its benefit:",
    targetSentence: "I have started carrying a reusable stainless steel water bottle instead of purchasing single-use bottled water. This simple change saves money and prevents hundreds of plastic bottles from polluting our environment.",
    audioText: "I have started carrying a reusable stainless steel water bottle instead of purchasing single-use bottled water. This simple change saves money and prevents hundreds of plastic bottles from polluting our environment."
  },
  {
    id: "a2_u10_l148_p18",
    type: "multiple_choice",
    prompt: "Choose the correct term to describe products that break down naturally without harming ecosystems:\n\"These food packaging containers are made from 100% _____ plant materials.\"",
    options: [
      { id: "o1", text: "biodegradable", isCorrect: true },
      { id: "o2", text: "synthetic", isCorrect: false },
      { id: "o3", text: "polluting", isCorrect: false },
      { id: "o4", text: "exhausting", isCorrect: false }
    ],
    correctAnswer: "biodegradable",
    explanation: "'Biodegradable' means capable of being decomposed by bacteria or other living organisms."
  },
  {
    id: "a2_u10_l148_p19",
    type: "fill_blank",
    prompt: "Many European cities have banned single-use plastic cutlery in order to _____ (reduce) ocean pollution.",
    correctAnswer: "reduce",
    explanation: "Infinitive of purpose: 'in order to reduce'."
  },
  {
    id: "a2_u10_l148_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form an environmental guideline:",
    tokens: ["Remember", "to", "turn", "off", "the", "tap", "while", "brushing", "your", "teeth."],
    correctAnswer: "Remember to turn off the tap while brushing your teeth.",
    explanation: "Standard water conservation guideline."
  },
  {
    id: "a2_u10_l148_p21",
    type: "dialogue_completion",
    prompt: "Complete the exchange on sustainable lifestyle:\nNeighbor A: \"What should I do with old electronic devices and batteries?\"\nNeighbor B: \"_____\"",
    options: [
      { id: "o1", text: "You shouldn't throw them in general waste; take them to the council's e-waste recycling point.", isCorrect: true },
      { id: "o2", text: "Throw all batteries in the river.", isCorrect: false },
      { id: "o3", text: "Burn them in your kitchen oven.", isCorrect: false },
      { id: "o4", text: "You must not recycle electronics ever.", isCorrect: false }
    ],
    correctAnswer: "You shouldn't throw them in general waste; take them to the council's e-waste recycling point.",
    explanation: "Environmentally sound and informative advice."
  },
  {
    id: "a2_u10_l148_p22",
    type: "translation",
    prompt: "Translate into English: 'ऊर्जा की बचत और कचरे को कम करना पर्यावरण की सुरक्षा के लिए आवश्यक है।'",
    correctAnswer: "Saving energy and reducing waste are essential for protecting the environment.",
    acceptableAnswers: [
      "Conserving energy and reducing waste are essential to protect the environment.",
      "Energy conservation and waste reduction are essential for environmental protection."
    ],
    explanation: "'Saving energy and reducing waste are essential for protecting the environment' is clear and accurate."
  }
];

const l148_review: Exercise[] = [
  {
    id: "a2_u10_l148_r09",
    type: "multiple_choice",
    prompt: "Which conditional sentence correctly expresses cause and effect regarding environmental conservation?",
    options: [
      { id: "o1", text: "If everyone walks or cycles for short journeys, urban air quality will improve significantly.", isCorrect: true },
      { id: "o2", text: "If everyone will walk, air quality improves.", isCorrect: false },
      { id: "o3", text: "If everyone walked, air quality will improve.", isCorrect: false },
      { id: "o4", text: "If everyone is walking, air quality will improved.", isCorrect: false }
    ],
    correctAnswer: "If everyone walks or cycles for short journeys, urban air quality will improve significantly.",
    explanation: "First conditional rule: 'If + present simple, will + base verb'."
  },
  {
    id: "a2_u10_l148_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this recycling rule:",
    sourceSentence: "Cardboard boxes should flattened before putting them in the paper recycling bin.",
    targetSentence: "Cardboard boxes should be flattened before putting them in the paper recycling bin.",
    options: [
      { id: "o1", text: "Cardboard boxes should be flattened before putting them in the paper recycling bin.", isCorrect: true },
      { id: "o2", text: "Cardboard boxes should flattening before putting them in bin.", isCorrect: false },
      { id: "o3", text: "Cardboard boxes should to be flattened before putting them in bin.", isCorrect: false }
    ],
    correctAnswer: "Cardboard boxes should be flattened before putting them in the paper recycling bin.",
    explanation: "Passive modal construction requires 'should be + past participle' ('should be flattened')."
  }
];

const l148_assessment: Exercise[] = [
  {
    id: "a2_u10_l148_a08",
    type: "reading",
    prompt: "Read the zero-waste grocery store policy:\n\"At EcoMarket, all items are sold package-free. Customers bring their own jars and reusable containers, weigh them at the scale station before filling, and pay solely for the weight of the contents.\"\nHow do customers purchase goods at EcoMarket?",
    sourceSentence: "How do customers purchase goods at EcoMarket?",
    targetSentence: "They bring reusable containers, weigh them, and pay only for the weight of the food.",
    options: [
      { id: "o1", text: "They bring reusable containers, weigh them, and pay only for the weight of the food.", isCorrect: true },
      { id: "o2", text: "They purchase single-use plastic bags at checkout.", isCorrect: false },
      { id: "o3", text: "They are given pre-packaged plastic containers.", isCorrect: false }
    ],
    correctAnswer: "They bring reusable containers, weigh them, and pay only for the weight of the food.",
    explanation: "Text details: 'bring their own jars and reusable containers, weigh them ... and pay solely for the weight of the contents.'"
  },
  {
    id: "a2_u10_l148_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain why switching to renewable energy sources is vital for future generations.",
    sourceSentence: "Investing in renewable wind and solar power reduces carbon emissions, mitigates climate change, and ensures clean air and a sustainable planet for future generations.",
    targetSentence: "Investing in renewable wind and solar power reduces carbon emissions, mitigates climate change, and ensures clean air and a sustainable planet for future generations.",
    audioText: "Investing in renewable wind and solar power reduces carbon emissions, mitigates climate change, and ensures clean air and a sustainable planet for future generations.",
    explanation: "Articulate pronunciation of advanced environmental concepts ('mitigates', 'sustainable', 'emissions')."
  },
  {
    id: "a2_u10_l148_a10",
    type: "mediation",
    prompt: "Translate this eco-conscious slogan for an international poster: 'पुनर्चक्रण करें, पुनः उपयोग करें और कचरा कम करें—हर छोटा कदम मायने रखता है।' Provide an inspiring English translation.",
    sourceSentence: "पुनर्चक्रण करें, पुनः उपयोग करें और कचरा कम करें—हर छोटा कदम मायने रखता है।",
    targetSentence: "Recycle, reuse, and reduce waste—every small step counts.",
    options: [
      { id: "o1", text: "Recycle, reuse, and reduce waste—every small step counts.", isCorrect: true },
      { id: "o2", text: "Throw everything in landfills because steps do not count.", isCorrect: false },
      { id: "o3", text: "Waste more and never reuse items.", isCorrect: false }
    ],
    correctAnswer: "Recycle, reuse, and reduce waste—every small step counts.",
    explanation: "'Recycle, reuse, and reduce waste—every small step counts' captures the triple imperative rhythm and message."
  }
];

// =========================================================================
// LESSON 149: Job Hunting, Basic CVs & Entry-Level Job Interviews
// =========================================================================
const l149_practice: Exercise[] = [
  {
    id: "a2_u10_l149_p11",
    type: "reading",
    prompt: "Read the interview invitation email:\n\"Dear Priya,\nThank you for applying for the Junior Data Analyst position at Horizon Tech. We were impressed by your academic background and project portfolio. We would like to invite you for a 30-minute virtual interview on Tuesday, November 14th at 2:00 PM via Google Meet. Please confirm your availability by Friday.\"\nWhat is the format and duration of the proposed interview?",
    sourceSentence: "What is the format and duration of the proposed interview?",
    targetSentence: "A 30-minute virtual interview via Google Meet.",
    options: [
      { id: "o1", text: "A 30-minute virtual interview via Google Meet.", isCorrect: true },
      { id: "o2", text: "A full-day in-person assessment center.", isCorrect: false },
      { id: "o3", text: "A 5-minute phone screening with no video.", isCorrect: false },
      { id: "o4", text: "An unconfirmed written test next year.", isCorrect: false }
    ],
    correctAnswer: "A 30-minute virtual interview via Google Meet.",
    explanation: "The email explicitly invites her for a '30-minute virtual interview ... via Google Meet'."
  },
  {
    id: "a2_u10_l149_p12",
    type: "speaking",
    prompt: "Speak clearly and professionally in a job interview: Introduce yourself, your strengths, and your motivation for applying.",
    sourceSentence: "I have two years of customer service experience, strong communication skills, and I am eager to contribute to your company's growing support team.",
    targetSentence: "I have two years of customer service experience, strong communication skills, and I am eager to contribute to your company's growing support team.",
    audioText: "I have two years of customer service experience, strong communication skills, and I am eager to contribute to your company's growing support team.",
    explanation: "Confident, professional pitch using 'two years of experience', 'strong communication skills', and 'eager to contribute'."
  },
  {
    id: "a2_u10_l149_p13",
    type: "match_pairs",
    prompt: "Match job application and interview terms with their definitions:",
    options: [
      { id: "m1", text: "curriculum vitae (CV)" },
      { id: "m1_m", text: "formal summary of education, qualifications, and work experience" },
      { id: "m2", text: "cover letter" },
      { id: "m2_m", text: "introductory letter explaining applicant motivation and suitability" },
      { id: "m3", text: "professional reference" },
      { id: "m3_m", text: "former employer or mentor who vouches for character and work performance" },
      { id: "m4", text: "interpersonal skills" },
      { id: "m4_m", text: "ability to communicate, collaborate, and interact effectively with others" }
    ]
  },
  {
    id: "a2_u10_l149_p14",
    type: "mediation",
    prompt: "A friend is preparing an English CV and asks you to translate this bullet point: 'मैंने 5 सदस्यीय टीम का नेतृत्व किया और ग्राहक संतुष्टि में 20% की वृद्धि की।' Provide an impactful, professional English bullet point.",
    sourceSentence: "मैंने 5 सदस्यीय टीम का नेतृत्व किया और ग्राहक संतुष्टि में 20% की वृद्धि की।",
    targetSentence: "Led a 5-member team and increased customer satisfaction by 20%.",
    options: [
      { id: "o1", text: "Led a 5-member team and increased customer satisfaction by 20%.", isCorrect: true },
      { id: "o2", text: "I am five members in team and customer is happy.", isCorrect: false },
      { id: "o3", text: "I used to have 20 teams and no customers.", isCorrect: false }
    ],
    correctAnswer: "Led a 5-member team and increased customer satisfaction by 20%.",
    explanation: "Action verbs in past tense ('Led', 'increased ... by 20%') are standard for professional CV bullet points."
  },
  {
    id: "a2_u10_l149_p15",
    type: "error_correction",
    prompt: "Correct the preposition and phrasing error in this interview response:",
    sourceSentence: "I am good in solving complex problems under pressure.",
    targetSentence: "I am good at solving complex problems under pressure.",
    options: [
      { id: "o1", text: "I am good at solving complex problems under pressure.", isCorrect: true },
      { id: "o2", text: "I am good on solving complex problems under pressure.", isCorrect: false },
      { id: "o3", text: "I am good for solve complex problems under pressure.", isCorrect: false }
    ],
    correctAnswer: "I am good at solving complex problems under pressure.",
    explanation: "The adjective 'good' takes preposition 'at' when describing abilities ('good at + gerund')."
  },
  {
    id: "a2_u10_l149_p16",
    type: "listening",
    prompt: "Listen to the hiring manager ask an interview question and identify what they are assessing:",
    audioText: "Could you describe a situation where you had to manage conflicting deadlines, and how you prioritized your workload?",
    targetSentence: "Time management, prioritization, and handling pressure.",
    options: [
      { id: "o1", text: "Time management, prioritization, and handling pressure.", isCorrect: true },
      { id: "o2", text: "Personal salary expectations only.", isCorrect: false },
      { id: "o3", text: "Physical fitness and athletic abilities.", isCorrect: false }
    ],
    correctAnswer: "Time management, prioritization, and handling pressure.",
    explanation: "The question targets: 'manage conflicting deadlines, and how you prioritized your workload'."
  },
  {
    id: "a2_u10_l149_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your greatest professional or academic strength and an example of how you applied it:",
    targetSentence: "My greatest strength is my attention to detail and ability to organize complex tasks. In my previous role, I developed a spreadsheet system that reduced administrative errors by fifteen percent.",
    audioText: "My greatest strength is my attention to detail and ability to organize complex tasks. In my previous role, I developed a spreadsheet system that reduced administrative errors by fifteen percent."
  },
  {
    id: "a2_u10_l149_p18",
    type: "multiple_choice",
    prompt: "Choose the most professional question to ask an interviewer at the end of an interview:\n\"_____\"",
    options: [
      { id: "o1", text: "Could you tell me more about the team culture and opportunities for professional growth in this role?", isCorrect: true },
      { id: "o2", text: "How much vacation can I take during my first week?", isCorrect: false },
      { id: "o3", text: "Do I have to do any actual work here?", isCorrect: false },
      { id: "o4", text: "Why did the previous employee quit?", isCorrect: false }
    ],
    correctAnswer: "Could you tell me more about the team culture and opportunities for professional growth in this role?",
    explanation: "Demonstrates enthusiasm, professionalism, and interest in long-term development."
  },
  {
    id: "a2_u10_l149_p19",
    type: "fill_blank",
    prompt: "I am writing to _____ (apply) for the Marketing Assistant vacancy advertised on your careers portal.",
    correctAnswer: "apply",
    explanation: "Standard cover letter opening formula: 'I am writing to apply for...'."
  },
  {
    id: "a2_u10_l149_p20",
    type: "word_ordering",
    prompt: "Arrange the words to form a polite closing in a job application email:",
    tokens: ["I", "look", "forward", "to", "hearing", "from", "you", "regarding", "my", "application."],
    correctAnswer: "I look forward to hearing from you regarding my application.",
    explanation: "Standard professional application closing."
  },
  {
    id: "a2_u10_l149_p21",
    type: "dialogue_completion",
    prompt: "Complete the interview dialogue:\nInterviewer: \"Why are you interested in working for our organization?\"\nCandidate: \"_____\"",
    options: [
      { id: "o1", text: "I admire your company's commitment to sustainable innovation, and my background in green logistics aligns perfectly with your mission.", isCorrect: true },
      { id: "o2", text: "I have nothing else to do this year.", isCorrect: false },
      { id: "o3", text: "You must give me a job immediately.", isCorrect: false },
      { id: "o4", text: "I don't know what your company does.", isCorrect: false }
    ],
    correctAnswer: "I admire your company's commitment to sustainable innovation, and my background in green logistics aligns perfectly with your mission.",
    explanation: "Polished, well-researched interview response."
  },
  {
    id: "a2_u10_l149_p22",
    type: "translation",
    prompt: "Translate into English: 'मैं इस पद के लिए अपने रिज्यूमे की समीक्षा करने के लिए आपके समय की सराहना करता हूँ।'",
    correctAnswer: "I appreciate your time reviewing my resume for this position.",
    acceptableAnswers: [
      "I appreciate your time in reviewing my resume for this position.",
      "Thank you for your time reviewing my CV for this role."
    ],
    explanation: "'I appreciate your time reviewing my resume for this position' is courteous and professional."
  }
];

const l149_review: Exercise[] = [
  {
    id: "a2_u10_l149_r09",
    type: "multiple_choice",
    prompt: "Which sentence correctly uses the Present Perfect to highlight career accomplishments in an interview?",
    options: [
      { id: "o1", text: "Over the past three years, I have successfully managed international client accounts.", isCorrect: true },
      { id: "o2", text: "Over the past three years, I managed international client accounts yesterday.", isCorrect: false },
      { id: "o3", text: "Over past three years, I am manage client accounts.", isCorrect: false },
      { id: "o4", text: "I have manage client accounts three years ago.", isCorrect: false }
    ],
    correctAnswer: "Over the past three years, I have successfully managed international client accounts.",
    explanation: "'Over the past [period of time]' takes the Present Perfect ('have managed') for experience continuing to the present."
  },
  {
    id: "a2_u10_l149_r10",
    type: "error_correction",
    prompt: "Identify and fix the mistake in this cover letter salutation and opening:",
    sourceSentence: "I am writing for apply to the position of Junior Accountant.",
    targetSentence: "I am writing to apply for the position of Junior Accountant.",
    options: [
      { id: "o1", text: "I am writing to apply for the position of Junior Accountant.", isCorrect: true },
      { id: "o2", text: "I am writing for applying the position of Junior Accountant.", isCorrect: false },
      { id: "o3", text: "I writing to apply for position of Junior Accountant.", isCorrect: false }
    ],
    correctAnswer: "I am writing to apply for the position of Junior Accountant.",
    explanation: "Infinitive of purpose: 'I am writing to apply for [position]'."
  }
];

const l149_assessment: Exercise[] = [
  {
    id: "a2_u10_l149_a08",
    type: "reading",
    prompt: "Read the job specification requirements:\n\"Essential Criteria:\n- Excellent written and verbal English communication (CEFR B1+ or equivalent).\n- Demonstrated proficiency in Microsoft Excel and collaborative tools.\n- Ability to work independently with minimal supervision.\nDesirable Criteria:\n- Prior experience in logistics or supply chain coordination.\"\nIs prior experience in supply chain coordination an absolute requirement?",
    sourceSentence: "Is prior experience in supply chain coordination an absolute requirement?",
    targetSentence: "No, it is a desirable (preferred) criterion, not an essential requirement.",
    options: [
      { id: "o1", text: "No, it is a desirable (preferred) criterion, not an essential requirement.", isCorrect: true },
      { id: "o2", text: "Yes, candidates without ten years of supply chain experience are disqualified.", isCorrect: false },
      { id: "o3", text: "Yes, it is the only essential requirement.", isCorrect: false }
    ],
    correctAnswer: "No, it is a desirable (preferred) criterion, not an essential requirement.",
    explanation: "It is listed under 'Desirable Criteria', meaning preferred but not strictly mandatory."
  },
  {
    id: "a2_u10_l149_a09",
    type: "speaking",
    prompt: "Speak fluently: Explain how your previous studies or work experience prepare you for a fast-paced workplace.",
    sourceSentence: "My university coursework required managing multiple group projects simultaneously under tight deadlines, which trained me to stay organized, prioritize effectively, and collaborate smoothly under pressure.",
    targetSentence: "My university coursework required managing multiple group projects simultaneously under tight deadlines, which trained me to stay organized, prioritize effectively, and collaborate smoothly under pressure.",
    audioText: "My university coursework required managing multiple group projects simultaneously under tight deadlines, which trained me to stay organized, prioritize effectively, and collaborate smoothly under pressure.",
    explanation: "Demonstrates advanced communicative fluency, sentence complexity, and rich professional vocabulary."
  },
  {
    id: "a2_u10_l149_a10",
    type: "mediation",
    prompt: "Translate this thank-you note after an interview: 'आज सुबह साक्षात्कार के अवसर के लिए धन्यवाद; मैं इस भूमिका में योगदान देने के लिए बहुत उत्साहित हूँ।' Provide an elegant English post-interview follow-up email sentence.",
    sourceSentence: "आज सुबह साक्षात्कार के अवसर के लिए धन्यवाद; मैं इस भूमिका में योगदान देने के लिए बहुत उत्साहित हूँ।",
    targetSentence: "Thank you for the opportunity to interview this morning; I am very excited about the possibility of contributing to this role.",
    options: [
      { id: "o1", text: "Thank you for the opportunity to interview this morning; I am very excited about the possibility of contributing to this role.", isCorrect: true },
      { id: "o2", text: "Interview was boring and I do not want this role.", isCorrect: false },
      { id: "o3", text: "You must hire me before tomorrow morning.", isCorrect: false }
    ],
    correctAnswer: "Thank you for the opportunity to interview this morning; I am very excited about the possibility of contributing to this role.",
    explanation: "'Thank you for the opportunity to interview this morning; I am very excited about the possibility of contributing to this role' is polished and professional."
  }
];

// =========================================================================
// LESSON 150: Unit 10 Comprehensive Review & CEFR A2 Cumulative Mastery Synthesis
// =========================================================================
const l150_practice: Exercise[] = [
  {
    id: "a2_u10_l150_p11",
    type: "reading",
    prompt: "Read the comprehensive workplace case study:\n\"Elena, a bilingual logistics coordinator, managed an urgent international shipment crisis yesterday. Due to severe storms, the primary cargo flight was grounded. Elena coordinated with warehouse supervisors, negotiated alternative road freight options, and notified the client with updated arrival estimates within two hours. Her proactive communication and problem-solving prevented significant supply chain disruption.\"\nWhat key competencies did Elena demonstrate during this crisis?",
    sourceSentence: "What key competencies did Elena demonstrate during this crisis?",
    targetSentence: "Proactive crisis communication, stakeholder coordination, and agile problem-solving under pressure.",
    options: [
      { id: "o1", text: "Proactive crisis communication, stakeholder coordination, and agile problem-solving under pressure.", isCorrect: true },
      { id: "o2", text: "Cancelling all company shipments permanently.", isCorrect: false },
      { id: "o3", text: "Ignoring client messages and waiting for the storm to pass.", isCorrect: false },
      { id: "o4", text: "Filing an insurance claim without taking any operational action.", isCorrect: false }
    ],
    correctAnswer: "Proactive crisis communication, stakeholder coordination, and agile problem-solving under pressure.",
    explanation: "The case study illustrates multi-stakeholder coordination, crisis management, and clear customer communication."
  },
  {
    id: "a2_u10_l150_p12",
    type: "speaking",
    prompt: "Speak fluently and synthesize across domains: Summarize an unexpected challenge you handled recently, including negotiation, problem-solving, and the successful outcome.",
    sourceSentence: "When our venue booking was cancelled at the last minute, I negotiated an alternative hall with the community center, reorganized the logistics schedule, and ensured the event ran without any delay.",
    targetSentence: "When our venue booking was cancelled at the last minute, I negotiated an alternative hall with the community center, reorganized the logistics schedule, and ensured the event ran without any delay.",
    audioText: "When our venue booking was cancelled at the last minute, I negotiated an alternative hall with the community center, reorganized the logistics schedule, and ensured the event ran without any delay.",
    explanation: "Mastery synthesis combining complex clauses, narrative past tense, and workplace negotiation vocabulary."
  },
  {
    id: "a2_u10_l150_p13",
    type: "match_pairs",
    prompt: "Match the Unit 10 core domain competencies with their communicative expressions:",
    options: [
      { id: "m1", text: "Workplace Delegation" },
      { id: "m1_m", text: "\"Could you take the lead on preparing the quarterly audit?\"" },
      { id: "m2", text: "Problem-Solving & Delays" },
      { id: "m2_m", text: "\"We ran into a technical glitch, but we are expediting a workaround.\"" },
      { id: "m3", text: "Emergency Reporting" },
      { id: "m3_m", text: "\"Please dispatch an ambulance to the intersection of 5th and Main.\"" },
      { id: "m4", text: "Environmental Sustainability" },
      { id: "m4_m", text: "\"Switching to solar power significantly reduces household emissions.\"" }
    ]
  },
  {
    id: "a2_u10_l150_p14",
    type: "mediation",
    prompt: "Synthesize and translate this bilingual summary of an A2 milestone achievement: 'मैंने अंग्रेजी में कार्यस्थल की जिम्मेदारियों, आपातकालीन स्थितियों और दैनिक वार्ताओं को संभालने में पूर्ण आत्मविश्वास हासिल कर लिया है।' Provide an eloquent, natural English statement.",
    sourceSentence: "मैंने अंग्रेजी में कार्यस्थल की जिम्मेदारियों, आपातकालीन स्थितियों और दैनिक वार्ताओं को संभालने में पूर्ण आत्मविश्वास हासिल कर लिया है।",
    targetSentence: "I have achieved complete confidence in handling workplace duties, emergency situations, and everyday negotiations in English.",
    options: [
      { id: "o1", text: "I have achieved complete confidence in handling workplace duties, emergency situations, and everyday negotiations in English.", isCorrect: true },
      { id: "o2", text: "I cannot speak English at work or in emergencies.", isCorrect: false },
      { id: "o3", text: "Workplace duties and emergencies are impossible to learn.", isCorrect: false }
    ],
    correctAnswer: "I have achieved complete confidence in handling workplace duties, emergency situations, and everyday negotiations in English.",
    explanation: "Accurately conveys 'पूर्ण आत्मविश्वास', 'कार्यस्थल की जिम्मेदारियां', and 'दैनिक वार्ताएं'."
  },
  {
    id: "a2_u10_l150_p15",
    type: "error_correction",
    prompt: "Identify and fix the cumulative grammar error across tense and modal usage:",
    sourceSentence: "Although we encountered delays yesterday, we have already resolve the issue and will delivered the report today.",
    targetSentence: "Although we encountered delays yesterday, we have already resolved the issue and will deliver the report today.",
    options: [
      { id: "o1", text: "Although we encountered delays yesterday, we have already resolved the issue and will deliver the report today.", isCorrect: true },
      { id: "o2", text: "Although we encounter delays yesterday, we have already resolving the issue and deliver.", isCorrect: false },
      { id: "o3", text: "Although we encountered delays yesterday, we already resolve issue and delivered.", isCorrect: false }
    ],
    correctAnswer: "Although we encountered delays yesterday, we have already resolved the issue and will deliver the report today.",
    explanation: "Present perfect takes past participle ('have resolved') and modal 'will' takes bare infinitive ('will deliver')."
  },
  {
    id: "a2_u10_l150_p16",
    type: "listening",
    prompt: "Listen to the executive debriefing and identify the key takeaway:",
    audioText: "By cross-training our team members across customer service, logistics, and emergency protocols, our response times have improved by thirty-five percent this quarter.",
    targetSentence: "Cross-training in logistics and customer protocols improved response times by 35%.",
    options: [
      { id: "o1", text: "Cross-training in logistics and customer protocols improved response times by 35%.", isCorrect: true },
      { id: "o2", text: "The team will be disbanded immediately.", isCorrect: false },
      { id: "o3", text: "Response times became thirty-five percent slower.", isCorrect: false }
    ],
    correctAnswer: "Cross-training in logistics and customer protocols improved response times by 35%.",
    explanation: "Executive states: 'cross-training our team members ... our response times have improved by thirty-five percent'."
  },
  {
    id: "a2_u10_l150_p17",
    type: "personal_production",
    prompt: "Write 3 sentences reflecting on your communicative progress in English across Unit 10 topics (workplace, healthcare, emergencies, and environment):",
    targetSentence: "Throughout this unit, I have learned how to explain complex workplace duties, schedule appointments politely, and report emergency incidents clearly. I can now describe symptoms accurately to medical professionals and discuss environmental solutions with confidence. These real-world skills empower me to communicate effectively in diverse international environments.",
    audioText: "Throughout this unit, I have learned how to explain complex workplace duties, schedule appointments politely, and report emergency incidents clearly. I can now describe symptoms accurately to medical professionals and discuss environmental solutions with confidence. These real-world skills empower me to communicate effectively in diverse international environments."
  },
  {
    id: "a2_u10_l150_p18",
    type: "multiple_choice",
    prompt: "Which multi-clause sentence represents the highest level of CEFR A2 integrative communicative mastery?",
    options: [
      { id: "o1", text: "Because our flight was delayed by two hours, we contacted our hotel to arrange a late check-in and rebooked our connecting train tickets online.", isCorrect: true },
      { id: "o2", text: "Flight delayed and hotel open.", isCorrect: false },
      { id: "o3", text: "We was delay on flight so hotel was booked yesterday.", isCorrect: false },
      { id: "o4", text: "If flight delayed, we must not go to hotel ever.", isCorrect: false }
    ],
    correctAnswer: "Because our flight was delayed by two hours, we contacted our hotel to arrange a late check-in and rebooked our connecting train tickets online.",
    explanation: "Masterful integration of causal subordination ('Because...'), passive voice ('was delayed'), and sequential coordinating clauses."
  },
  {
    id: "a2_u10_l150_p19",
    type: "fill_blank",
    prompt: "Effective cross-cultural communication requires empathy, active listening, and the _____ (able) to adapt to different social contexts.",
    correctAnswer: "ability",
    explanation: "Noun form required: 'the ability to adapt'."
  },
  {
    id: "a2_u10_l150_p20",
    type: "word_ordering",
    prompt: "Arrange the words into a master synthesis sentence:",
    tokens: ["We", "have", "successfully", "completed", "all", "milestone", "objectives", "for", "this", "level."],
    correctAnswer: "We have successfully completed all milestone objectives for this level.",
    explanation: "Accurate present perfect sentence structure with adverbial placement."
  },
  {
    id: "a2_u10_l150_p21",
    type: "dialogue_completion",
    prompt: "Complete the cumulative milestone review dialogue:\nMentor: \"How do you feel about your ability to handle real-world English interactions now?\"\nLearner: \"_____\"",
    options: [
      { id: "o1", text: "I feel thoroughly prepared to navigate professional, medical, travel, and civic situations with clarity and confidence.", isCorrect: true },
      { id: "o2", text: "I have forgotten all English words.", isCorrect: false },
      { id: "o3", text: "English cannot be spoken by human beings.", isCorrect: false },
      { id: "o4", text: "You must not evaluate my skills.", isCorrect: false }
    ],
    correctAnswer: "I feel thoroughly prepared to navigate professional, medical, travel, and civic situations with clarity and confidence.",
    explanation: "Eloquent summary of CEFR A2 communicative competence."
  },
  {
    id: "a2_u10_l150_p22",
    type: "translation",
    prompt: "Translate into English: 'हमने सफलतापूर्वक सभी 15 पाठ पूरे कर लिए हैं और अब हम आत्मविश्वास से अंग्रेजी में बातचीत कर सकते हैं।'",
    correctAnswer: "We have successfully completed all 15 lessons and can now communicate in English with confidence.",
    acceptableAnswers: [
      "We have successfully completed all 15 lessons and are now able to converse in English confidently.",
      "We have completed all 15 lessons successfully and can now speak English with confidence."
    ],
    explanation: "'We have successfully completed all 15 lessons and can now communicate in English with confidence' captures the achievement perfectly."
  }
];

const l150_review: Exercise[] = [
  {
    id: "a2_u10_l150_r09",
    type: "multiple_choice",
    prompt: "Which synthesis demonstrates full mastery of contrasting obligation ('have to'), prohibition ('must not'), and permission ('can')?",
    options: [
      { id: "o1", text: "Employees must not enter the laboratory without safety goggles, but they can work remotely on Fridays and do not have to wear formal attire.", isCorrect: true },
      { id: "o2", text: "Employees must not work and can not enter and have to nothing.", isCorrect: false },
      { id: "o3", text: "Employees haven't to enter laboratory and must wear nothing.", isCorrect: false },
      { id: "o4", text: "Employees can not goggles and having to formal attire.", isCorrect: false }
    ],
    correctAnswer: "Employees must not enter the laboratory without safety goggles, but they can work remotely on Fridays and do not have to wear formal attire.",
    explanation: "Accurate contrast of 'must not' (prohibition), 'can' (permission/option), and 'do not have to' (lack of obligation)."
  },
  {
    id: "a2_u10_l150_r10",
    type: "error_correction",
    prompt: "Identify and fix the cumulative synthesis error:",
    sourceSentence: "If you will need any assistance during your stay, please do not hesitate to contacting reception.",
    targetSentence: "If you need any assistance during your stay, please do not hesitate to contact reception.",
    options: [
      { id: "o1", text: "If you need any assistance during your stay, please do not hesitate to contact reception.", isCorrect: true },
      { id: "o2", text: "If you will needing assistance, please do not hesitate to contact reception.", isCorrect: false },
      { id: "o3", text: "If you need assistance, please do not hesitate to contacting reception.", isCorrect: false }
    ],
    correctAnswer: "If you need any assistance during your stay, please do not hesitate to contact reception.",
    explanation: "Conditional takes Present Simple ('need') and 'hesitate to' takes bare infinitive ('to contact')."
  }
];

const l150_assessment: Exercise[] = [
  {
    id: "a2_u10_l150_a08",
    type: "reading",
    prompt: "Read the CEFR A2 Milestone Certification criteria:\n\"Learners certified at CEFR A2 level can understand sentences and frequently used expressions related to areas of most immediate relevance (e.g., very basic personal and family information, shopping, local geography, employment). They can communicate in simple and routine tasks requiring a simple and direct exchange of information on familiar and routine matters.\"\nWhat core communicative capability distinguishes a certified CEFR A2 learner?",
    sourceSentence: "What core communicative capability distinguishes a certified CEFR A2 learner?",
    targetSentence: "The ability to exchange direct information on routine and familiar everyday matters with communicative confidence.",
    options: [
      { id: "o1", text: "The ability to exchange direct information on routine and familiar everyday matters with communicative confidence.", isCorrect: true },
      { id: "o2", text: "Writing complex doctoral dissertations in theoretical astrophysics.", isCorrect: false },
      { id: "o3", text: "Translating ancient classical poetry without any references.", isCorrect: false }
    ],
    correctAnswer: "The ability to exchange direct information on routine and familiar everyday matters with communicative confidence.",
    explanation: "Accurately reflects the standard Council of Europe CEFR A2 Can-Do Descriptor."
  },
  {
    id: "a2_u10_l150_a09",
    type: "speaking",
    prompt: "Speak fluently: Deliver your final A2 milestone speech outlining your achievements, newfound confidence, and readiness for B1 intermediate studies.",
    sourceSentence: "Having mastered daily routines, travel negotiations, workplace collaboration, and emergency communication across Unit 10, I am proud of my progress and feel fully prepared to embark on intermediate B1 English.",
    targetSentence: "Having mastered daily routines, travel negotiations, workplace collaboration, and emergency communication across Unit 10, I am proud of my progress and feel fully prepared to embark on intermediate B1 English.",
    audioText: "Having mastered daily routines, travel negotiations, workplace collaboration, and emergency communication across Unit 10, I am proud of my progress and feel fully prepared to embark on intermediate B1 English.",
    explanation: "Celebratory, articulate presentation marking complete A2 milestone mastery."
  },
  {
    id: "a2_u10_l150_a10",
    type: "mediation",
    prompt: "Translate this graduation milestone commendation into English: 'बधाई हो! आपने जिज्ञासा अकादमी का यूनिट 10 सफलतापूर्वक पूरा कर लिया है और भाषा प्रवीणता में एक महत्वपूर्ण मील का पत्थर हासिल किया है।' Provide an inspiring and formal English translation.",
    sourceSentence: "बधाई हो! आपने जिज्ञासा अकादमी का यूनिट 10 सफलतापूर्वक पूरा कर लिया है और भाषा प्रवीणता में एक महत्वपूर्ण मील का पत्थर हासिल किया है।",
    targetSentence: "Congratulations! You have successfully completed Unit 10 of Curiosity Academy and achieved a significant milestone in language proficiency.",
    options: [
      { id: "o1", text: "Congratulations! You have successfully completed Unit 10 of Curiosity Academy and achieved a significant milestone in language proficiency.", isCorrect: true },
      { id: "o2", text: "You have failed Unit 10 and cannot speak any languages.", isCorrect: false },
      { id: "o3", text: "Unit 10 was cancelled before completion.", isCorrect: false }
    ],
    correctAnswer: "Congratulations! You have successfully completed Unit 10 of Curiosity Academy and achieved a significant milestone in language proficiency.",
    explanation: "'Congratulations! You have successfully completed Unit 10 of Curiosity Academy and achieved a significant milestone in language proficiency' is a dignified and inspiring milestone translation."
  }
];

// Execute enrichment for batch 146-150
export function runEnrichment146_150() {
  console.log('--- ENRICHING LESSONS 146-150 TO 42 EXERCISES ---');
  enrichUnit10LessonData('lesson_a2_10_146', LESSON_A2_10_146_DATA, l146_practice, l146_review, l146_assessment);
  enrichUnit10LessonData('lesson_a2_10_147', LESSON_A2_10_147_DATA, l147_practice, l147_review, l147_assessment);
  enrichUnit10LessonData('lesson_a2_10_148', LESSON_A2_10_148_DATA, l148_practice, l148_review, l148_assessment);
  enrichUnit10LessonData('lesson_a2_10_149', LESSON_A2_10_149_DATA, l149_practice, l149_review, l149_assessment);
  enrichUnit10LessonData('lesson_a2_10_150', LESSON_A2_10_150_DATA, l150_practice, l150_review, l150_assessment);
}

runEnrichment146_150();
