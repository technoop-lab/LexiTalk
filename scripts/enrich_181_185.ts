import { Exercise } from '../src/types';
import { LESSON_A2_13_181_DATA } from '../src/data/lessons/lesson_a2_13_181';
import { LESSON_A2_13_182_DATA } from '../src/data/lessons/lesson_a2_13_182';
import { LESSON_A2_13_183_DATA } from '../src/data/lessons/lesson_a2_13_183';
import { LESSON_A2_13_184_DATA } from '../src/data/lessons/lesson_a2_13_184';
import { LESSON_A2_13_185_DATA } from '../src/data/lessons/lesson_a2_13_185';
import { enrichUnit13LessonData } from './enrich_unit13_helper';

// =========================================================================
// LESSON 181: Exploring Nature, Landscapes, National Parks & Wildlife
// Grammar: Defining Relative Clauses (who, which, that, where)
// =========================================================================
const l181_practice: Exercise[] = [
  {
    id: "a2_u13_l181_p11",
    type: "reading",
    prompt: "Read the national park guide and answer the question:\n\"Yellowstone National Park is a vast sanctuary that protects hundreds of geothermal wonders and diverse wildlife. Visitors who travel along the northern loop often spot grizzly bears and bison herds grazing in Lamar Valley. The park rangers recommend stopping at viewpoints where hot springs create vibrant mineral terraces.\"\nWhere can visitors often spot grizzly bears and bison herds?",
    sourceSentence: "Where can visitors often spot grizzly bears and bison herds?",
    targetSentence: "In Lamar Valley along the northern loop.",
    options: [
      { id: "o1", text: "In Lamar Valley along the northern loop.", isCorrect: true },
      { id: "o2", text: "Inside the park souvenir gift shop.", isCorrect: false },
      { id: "o3", text: "In an underground railway station.", isCorrect: false },
      { id: "o4", text: "At a desert airport terminal.", isCorrect: false }
    ],
    correctAnswer: "In Lamar Valley along the northern loop.",
    explanation: "The text explicitly states: 'Visitors who travel along the northern loop often spot grizzly bears and bison herds grazing in Lamar Valley.'"
  },
  {
    id: "a2_u13_l181_p12",
    type: "speaking",
    prompt: "Speak clearly and describe a scenic natural destination using a relative clause:",
    sourceSentence: "We hiked to a majestic waterfall that drops over fifty meters into a crystal clear mountain stream.",
    targetSentence: "We hiked to a majestic waterfall that drops over fifty meters into a crystal clear mountain stream.",
    audioText: "We hiked to a majestic waterfall that drops over fifty meters into a crystal clear mountain stream.",
    explanation: "Practice using the relative clause 'that drops over fifty meters' with clear pronunciation of 'majestic waterfall'."
  },
  {
    id: "a2_u13_l181_p13",
    type: "match_pairs",
    prompt: "Match the relative pronouns with their appropriate antecedents in nature descriptions:",
    options: [
      { id: "m1", text: "who" },
      { id: "m1_m", text: "park rangers and wildlife guides" },
      { id: "m2", text: "which / that" },
      { id: "m2_m", text: "endangered plants, trees, and animals" },
      { id: "m3", text: "where" },
      { id: "m3_m", text: "scenic canyons, valleys, and national reserves" },
      { id: "m4", text: "whose" },
      { id: "m4_m", text: "rare birds whose plumage changes color" }
    ]
  },
  {
    id: "a2_u13_l181_p14",
    type: "mediation",
    prompt: "Mediate this nature tourist notice into English: 'यह वह राष्ट्रीय उद्यान है जहाँ दुर्लभ प्रवासी पक्षी हर सर्दी में आते हैं।' Choose the best translation.",
    sourceSentence: "यह वह राष्ट्रीय उद्यान है जहाँ दुर्लभ प्रवासी पक्षी हर सर्दी में आते हैं।",
    targetSentence: "This is the national park where rare migratory birds arrive every winter.",
    options: [
      { id: "o1", text: "This is the national park where rare migratory birds arrive every winter.", isCorrect: true },
      { id: "o2", text: "This is national park which birds went yesterday.", isCorrect: false },
      { id: "o3", text: "Park has birds who deleted winter.", isCorrect: false }
    ],
    correctAnswer: "This is the national park where rare migratory birds arrive every winter.",
    explanation: "'where' correctly refers to the place ('national park') where birds arrive."
  },
  {
    id: "a2_u13_l181_p15",
    type: "error_correction",
    prompt: "Identify and correct the relative pronoun error in this nature description:",
    sourceSentence: "The majestic eagle who we saw soaring above the cliff has a two-meter wingspan.",
    targetSentence: "The majestic eagle which we saw soaring above the cliff has a two-meter wingspan.",
    options: [
      { id: "o1", text: "The majestic eagle which we saw soaring above the cliff has a two-meter wingspan.", isCorrect: true },
      { id: "o2", text: "The majestic eagle where we saw soaring has wings.", isCorrect: false },
      { id: "o3", text: "The majestic eagle who soaring above cliff had wings.", isCorrect: false }
    ],
    correctAnswer: "The majestic eagle which we saw soaring above the cliff has a two-meter wingspan.",
    explanation: "Animals and non-human subjects take 'which' or 'that', not 'who'."
  },
  {
    id: "a2_u13_l181_p16",
    type: "listening",
    prompt: "Listen to the park ranger's announcement and identify the safety instruction:",
    audioText: "Welcome to Alpine Valley Reserve. Please stay on the marked trails that are designated with blue flags, and never approach wild animals that are feeding near the riverbank.",
    targetSentence: "Stay on blue-flagged trails and never approach feeding wildlife.",
    options: [
      { id: "o1", text: "Stay on blue-flagged trails and never approach feeding wildlife.", isCorrect: true },
      { id: "o2", text: "Feed bears bread from your backpack.", isCorrect: false },
      { id: "o3", text: "Swim across the rapid river alone at night.", isCorrect: false },
      { id: "o4", text: "Cut down marked pine trees for firewood.", isCorrect: false }
    ],
    correctAnswer: "Stay on blue-flagged trails and never approach feeding wildlife.",
    explanation: "The ranger instructs visitors to stay on blue-flagged trails and avoid approaching feeding wildlife."
  },
  {
    id: "a2_u13_l181_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your favorite natural landscape or park using 'which' and 'where':",
    targetSentence: "I love visiting the mountain valley which is surrounded by pine forests. It is a peaceful place where you can hear wild birds singing throughout the morning.",
    audioText: "I love visiting the mountain valley which is surrounded by pine forests. It is a peaceful place where you can hear wild birds singing throughout the morning."
  },
  {
    id: "a2_u13_l181_p18",
    type: "dialogue_completion",
    prompt: "Complete the conversation between two hikers:\nHiker A: 'Do you know which trail leads to the panoramic overlook?'\nHiker B: '________________________'",
    sourceSentence: "Do you know which trail leads to the panoramic overlook?",
    targetSentence: "Yes, take the stone path that winds around the ridge on the right.",
    options: [
      { id: "o1", text: "Yes, take the stone path that winds around the ridge on the right.", isCorrect: true },
      { id: "o2", text: "No, trails were cancelled last century.", isCorrect: false },
      { id: "o3", text: "Overlook is who built mountains.", isCorrect: false }
    ],
    correctAnswer: "Yes, take the stone path that winds around the ridge on the right.",
    explanation: "'take the stone path that winds...' accurately answers the trail query using a relative clause."
  },
  {
    id: "a2_u13_l181_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence describing an outdoor sanctuary:",
    sourceSentence: "We visited a coastal sanctuary where endangered sea turtles lay their eggs.",
    targetSentence: "We visited a coastal sanctuary where endangered sea turtles lay their eggs.",
    tokens: ["We", "visited", "a", "coastal", "sanctuary", "where", "endangered", "sea", "turtles", "lay", "their", "eggs", "."],
    correctOrder: ["We", "visited", "a", "coastal", "sanctuary", "where", "endangered", "sea", "turtles", "lay", "their", "eggs", "."],
    explanation: "'where' introduces the relative clause specifying what happens at the sanctuary."
  },
  {
    id: "a2_u13_l181_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct relative pronoun:",
    sourceSentence: "The botanist [blank] (who / which) led our nature walk explained how old-growth redwoods survive forest fires.",
    targetSentence: "The botanist who led our nature walk explained how old-growth redwoods survive forest fires.",
    text: "The botanist [blank] led our nature walk explained how old-growth redwoods survive forest fires.",
    options: [
      { id: "o1", text: "who", isCorrect: true },
      { id: "o2", text: "which", isCorrect: false },
      { id: "o3", text: "where", isCorrect: false },
      { id: "o4", text: "when", isCorrect: false }
    ],
    correctAnswer: "who",
    explanation: "'Botanist' refers to a person, requiring 'who'."
  },
  {
    id: "a2_u13_l181_p21",
    type: "translation",
    prompt: "Translate to English: 'पहाड़ी के ऊपर एक पुराना किला है जहाँ से पूरी घाटी दिखाई देती है।'",
    sourceSentence: "पहाड़ी के ऊपर एक पुराना किला है जहाँ से पूरी घाटी दिखाई देती है।",
    targetSentence: "Atop the hill is an old fort from where the entire valley can be seen.",
    explanation: "'Atop the hill is an old fort from where the entire valley can be seen.' or 'On top of the hill is an ancient fort where you can overlook the entire valley.'"
  },
  {
    id: "a2_u13_l181_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give an informative summary of a nature reserve.",
    sourceSentence: "The reserve protects ancient oak forests that shelter hundreds of rare bird species found nowhere else in the country.",
    targetSentence: "The reserve protects ancient oak forests that shelter hundreds of rare bird species found nowhere else in the country.",
    audioText: "The reserve protects ancient oak forests that shelter hundreds of rare bird species found nowhere else in the country.",
    explanation: "Practice fluent rhythm and accurate stress on 'ancient oak forests' and 'shelter hundreds'."
  }
];

const l181_review: Exercise[] = [
  {
    id: "a2_u13_l181_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 - Conditions & Deductions): Which modal sentence expresses certainty based on nature evidence?",
    options: [
      { id: "o1", text: "Look at those deep footprints in the mud; a large bear must have passed through here recently.", isCorrect: true },
      { id: "o2", text: "A bear should pass through here yesterday maybe.", isCorrect: false },
      { id: "o3", text: "Footprints might are bears last week.", isCorrect: false },
      { id: "o4", text: "Bear will pass mud if it rained.", isCorrect: false }
    ],
    correctAnswer: "Look at those deep footprints in the mud; a large bear must have passed through here recently.",
    explanation: "'must have passed' expresses strong logical deduction based on visible physical evidence."
  },
  {
    id: "a2_u13_l181_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'This is the mountain ridge [blank] (where / who) alpine climbers set up camp before summiting.'",
    sourceSentence: "This is the mountain ridge [blank] alpine climbers set up camp before summiting.",
    targetSentence: "This is the mountain ridge where alpine climbers set up camp before summiting.",
    text: "This is the mountain ridge [blank] alpine climbers set up camp before summiting.",
    options: [
      { id: "o1", text: "where", isCorrect: true },
      { id: "o2", text: "who", isCorrect: false },
      { id: "o3", text: "which", isCorrect: false },
      { id: "o4", text: "whose", isCorrect: false }
    ],
    correctAnswer: "where",
    explanation: "'where' specifies the physical location of the campsite."
  },
  {
    id: "a2_u13_l181_r9",
    type: "error_correction",
    prompt: "Correct the relative pronoun in this sentence:",
    sourceSentence: "The river who flows through the gorge is famous for white-water rafting.",
    targetSentence: "The river which flows through the gorge is famous for white-water rafting.",
    options: [
      { id: "o1", text: "The river which flows through the gorge is famous for white-water rafting.", isCorrect: true },
      { id: "o2", text: "The river who flowing through gorge is famous.", isCorrect: false },
      { id: "o3", text: "The river where flows through gorge is rafting.", isCorrect: false }
    ],
    correctAnswer: "The river which flows through the gorge is famous for white-water rafting.",
    explanation: "Inanimate nouns like 'river' require 'which' or 'that'."
  },
  {
    id: "a2_u13_l181_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या आप उस गाइड को जानते हैं जिसने हमें पिछले साल गुफा दिखाई थी?'",
    sourceSentence: "क्या आप उस गाइड को जानते हैं जिसने हमें पिछले साल गुफा दिखाई थी?",
    targetSentence: "Do you know the guide who showed us the cave last year?",
    explanation: "'Do you know the guide who showed us the cave last year?' uses 'who' for the person ('guide')."
  }
];

const l181_assessment: Exercise[] = [
  {
    id: "a2_u13_l181_a5",
    type: "multiple_choice",
    prompt: "Choose the sentence that correctly combines two ideas using a relative clause:\nIdea 1: We visited a canyon.\nIdea 2: Rare condors nest in the canyon.",
    options: [
      { id: "o1", text: "We visited a canyon where rare condors nest.", isCorrect: true },
      { id: "o2", text: "We visited a canyon who rare condors nest.", isCorrect: false },
      { id: "o3", text: "We visited canyon which rare condors nest there.", isCorrect: false },
      { id: "o4", text: "We visited a canyon what rare condors nest.", isCorrect: false }
    ],
    correctAnswer: "We visited a canyon where rare condors nest.",
    explanation: "'where rare condors nest' correctly links the place and action without redundant pronouns."
  },
  {
    id: "a2_u13_l181_a6",
    type: "fill_blank",
    prompt: "Complete the sentence with the appropriate relative pronoun:",
    sourceSentence: "The wildflowers [blank] (that / who) bloom across the plateau attract thousands of butterflies.",
    targetSentence: "The wildflowers that bloom across the plateau attract thousands of butterflies.",
    text: "The wildflowers [blank] bloom across the plateau attract thousands of butterflies.",
    options: [
      { id: "o1", text: "that", isCorrect: true },
      { id: "o2", text: "who", isCorrect: false },
      { id: "o3", text: "where", isCorrect: false },
      { id: "o4", text: "whom", isCorrect: false }
    ],
    correctAnswer: "that",
    explanation: "'Wildflowers' takes 'that' or 'which'."
  },
  {
    id: "a2_u13_l181_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences describing a national park, its geography, and an animal that lives there.",
    sourceSentence: "Banff National Park is a mountainous wonderland that features turquoise glacial lakes. It is home to elk and mountain goats which graze along the high alpine meadows.",
    targetSentence: "Banff National Park is a mountainous wonderland that features turquoise glacial lakes. It is home to elk and mountain goats which graze along the high alpine meadows.",
    audioText: "Banff National Park is a mountainous wonderland that features turquoise glacial lakes. It is home to elk and mountain goats which graze along the high alpine meadows.",
    explanation: "Demonstrate accurate use of relative clauses ('that features...', 'which graze...') and clear pronunciation."
  },
  {
    id: "a2_u13_l181_a8",
    type: "mediation",
    prompt: "Translate this eco-tourism guideline for your travel group: 'कृपया केवल उन रास्तों पर चलें जो पार्क अधिकारियों द्वारा चिह्नित किए गए हैं।' Provide the best translation.",
    sourceSentence: "कृपया केवल उन रास्तों पर चलें जो पार्क अधिकारियों द्वारा चिह्नित किए गए हैं।",
    targetSentence: "Please walk only on trails that have been marked by park authorities.",
    options: [
      { id: "o1", text: "Please walk only on trails that have been marked by park authorities.", isCorrect: true },
      { id: "o2", text: "Walk on all paths who park rangers deleted.", isCorrect: false },
      { id: "o3", text: "Trails where rangers marked are closed yesterday.", isCorrect: false }
    ],
    correctAnswer: "Please walk only on trails that have been marked by park authorities.",
    explanation: "'Please walk only on trails that have been marked by park authorities' accurately communicates the rule."
  },
  {
    id: "a2_u13_l181_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a descriptive statement about a wildlife photographer:",
    sourceSentence: "She is a photographer who specializes in capturing Arctic wildlife in winter.",
    targetSentence: "She is a photographer who specializes in capturing Arctic wildlife in winter.",
    tokens: ["She", "is", "a", "photographer", "who", "specializes", "in", "capturing", "Arctic", "wildlife", "in", "winter", "."],
    correctOrder: ["She", "is", "a", "photographer", "who", "specializes", "in", "capturing", "Arctic", "wildlife", "in", "winter", "."],
    explanation: "'photographer who specializes in...' accurately connects person and profession."
  },
  {
    id: "a2_u13_l181_a10",
    type: "dialogue_completion",
    prompt: "Complete the park visit dialogue:\nTourist: 'Where is the best spot to watch the sunset?'\nRanger: '________________________'",
    sourceSentence: "Where is the best spot to watch the sunset?",
    targetSentence: "Head over to Sunset Point, which offers an unobstructed view over the entire valley.",
    options: [
      { id: "o1", text: "Head over to Sunset Point, which offers an unobstructed view over the entire valley.", isCorrect: true },
      { id: "o2", text: "The sun was cancelled by the park.", isCorrect: false },
      { id: "o3", text: "Sunset is a person who works in the office.", isCorrect: false }
    ],
    correctAnswer: "Head over to Sunset Point, which offers an unobstructed view over the entire valley.",
    explanation: "'which offers an unobstructed view...' provides a polite, natural recommendation."
  }
];

// =========================================================================
// LESSON 182: Weather Forecasts, Seasons, Extreme Weather & Preparedness
// Grammar: Adverbs of Degree (extremely, quite, slightly) & Future Predictions
// =========================================================================
const l182_practice: Exercise[] = [
  {
    id: "a2_u13_l182_p11",
    type: "reading",
    prompt: "Read the regional weather bulletin and answer the question:\n\"Meteorological Warning: A severe low-pressure system is approaching the coastal area. Expect torrential downpours and gale-force winds exceeding eighty kilometers per hour starting tomorrow afternoon. Temperatures will drop significantly from twenty-four degrees Celsius to nine degrees Celsius. Residents are advised to secure outdoor furniture and avoid driving during peak storm hours.\"\nWhat should residents do according to the advisory?",
    sourceSentence: "What should residents do according to the advisory?",
    targetSentence: "Secure outdoor furniture and avoid driving during peak storm hours.",
    options: [
      { id: "o1", text: "Secure outdoor furniture and avoid driving during peak storm hours.", isCorrect: true },
      { id: "o2", text: "Go swimming in the coastal bay.", isCorrect: false },
      { id: "o3", text: "Leave all windows open during the gale.", isCorrect: false },
      { id: "o4", text: "Cancel electricity services completely.", isCorrect: false }
    ],
    correctAnswer: "Secure outdoor furniture and avoid driving during peak storm hours.",
    explanation: "The text explicitly states: 'Residents are advised to secure outdoor furniture and avoid driving during peak storm hours.'"
  },
  {
    id: "a2_u13_l182_p12",
    type: "speaking",
    prompt: "Speak clearly and deliver a weather forecast update using adverbs of degree:",
    sourceSentence: "It will be mostly sunny and pleasantly warm throughout the morning, but conditions will become extremely humid with a high chance of thunderstorms by late evening.",
    targetSentence: "It will be mostly sunny and pleasantly warm throughout the morning, but conditions will become extremely humid with a high chance of thunderstorms by late evening.",
    audioText: "It will be mostly sunny and pleasantly warm throughout the morning, but conditions will become extremely humid with a high chance of thunderstorms by late evening.",
    explanation: "Practice adverbs of degree: 'pleasantly warm', 'extremely humid', with natural broadcast cadence."
  },
  {
    id: "a2_u13_l182_p13",
    type: "match_pairs",
    prompt: "Match weather conditions with their typical temperature or characteristic:",
    options: [
      { id: "m1", text: "scorching heatwave" },
      { id: "m1_m", text: "dangerously high temperatures above 40°C" },
      { id: "m2", text: "freezing blizzard" },
      { id: "m2_m", text: "heavy snowfall with sub-zero winds" },
      { id: "m3", text: "dense fog / mist" },
      { id: "m3_m", text: "severely reduced road visibility" },
      { id: "m4", text: "light drizzle" },
      { id: "m4_m", text: "gentle, fine rain showers" }
    ]
  },
  {
    id: "a2_u13_l182_p14",
    type: "mediation",
    prompt: "Mediate this weather alert into English: 'कल दोपहर तेज आंधी और भारी बारिश की संभावना है, इसलिए अपनी यात्रा स्थगित करें।' Choose the best translation.",
    sourceSentence: "कल दोपहर तेज आंधी और भारी बारिश की संभावना है, इसलिए अपनी यात्रा स्थगित करें।",
    targetSentence: "There is a chance of severe thunderstorms and heavy rain tomorrow afternoon, so please postpone your trip.",
    options: [
      { id: "o1", text: "There is a chance of severe thunderstorms and heavy rain tomorrow afternoon, so please postpone your trip.", isCorrect: true },
      { id: "o2", text: "Yesterday was sunny and you should drive fast.", isCorrect: false },
      { id: "o3", text: "Trip is deleted because rain was yesterday.", isCorrect: false }
    ],
    correctAnswer: "There is a chance of severe thunderstorms and heavy rain tomorrow afternoon, so please postpone your trip.",
    explanation: "'There is a chance of severe thunderstorms... so please postpone your trip' is accurate and professional."
  },
  {
    id: "a2_u13_l182_p15",
    type: "error_correction",
    prompt: "Identify and correct the weather collocation error:",
    sourceSentence: "It is doing very rainy outside today, so take an umbrella.",
    targetSentence: "It is raining heavily outside today, so take an umbrella.",
    options: [
      { id: "o1", text: "It is raining heavily outside today, so take an umbrella.", isCorrect: true },
      { id: "o2", text: "It makes rain outside today, take umbrella.", isCorrect: false },
      { id: "o3", text: "It has rainy outside today, so take umbrella.", isCorrect: false }
    ],
    correctAnswer: "It is raining heavily outside today, so take an umbrella.",
    explanation: "In English we say 'It is raining heavily' or 'It is very rainy', never 'doing very rainy'."
  },
  {
    id: "a2_u13_l182_p16",
    type: "listening",
    prompt: "Listen to the morning radio forecast and identify the weekend weather prediction:",
    audioText: "Good morning! While Friday will remain overcast and chilly around twelve degrees, the weekend looks fantastic. Saturday and Sunday will be mostly clear and mild, with highs reaching twenty-one degrees.",
    targetSentence: "Saturday and Sunday will be mostly clear and mild, reaching 21°C.",
    options: [
      { id: "o1", text: "Saturday and Sunday will be mostly clear and mild, reaching 21°C.", isCorrect: true },
      { id: "o2", text: "A severe blizzard will hit on Saturday night.", isCorrect: false },
      { id: "o3", text: "It will rain nonstop for five days.", isCorrect: false },
      { id: "o4", text: "Temperatures will drop below minus ten degrees.", isCorrect: false }
    ],
    correctAnswer: "Saturday and Sunday will be mostly clear and mild, reaching 21°C.",
    explanation: "The broadcast highlights clear, mild weekend weather with highs of 21°C."
  },
  {
    id: "a2_u13_l182_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your local climate across different seasons:",
    targetSentence: "In summer, the weather is extremely hot and dry with temperatures often exceeding 35 degrees. However, during the monsoon season, we receive heavy rainfall and pleasant breezes.",
    audioText: "In summer, the weather is extremely hot and dry with temperatures often exceeding 35 degrees. However, during the monsoon season, we receive heavy rainfall and pleasant breezes."
  },
  {
    id: "a2_u13_l182_p18",
    type: "dialogue_completion",
    prompt: "Complete the weather small talk dialogue:\nNeighbor: 'Looks like it's going to pour any minute now!'\nYou: '________________________'",
    sourceSentence: "Looks like it's going to pour any minute now!",
    targetSentence: "I know! Look at those dark clouds. I'm glad I brought my raincoat today.",
    options: [
      { id: "o1", text: "I know! Look at those dark clouds. I'm glad I brought my raincoat today.", isCorrect: true },
      { id: "o2", text: "Rain was invented last Tuesday.", isCorrect: false },
      { id: "o3", text: "No, I am buying a laptop right now.", isCorrect: false }
    ],
    correctAnswer: "I know! Look at those dark clouds. I'm glad I brought my raincoat today.",
    explanation: "'I know! Look at those dark clouds...' is a natural, conversational response to weather small talk."
  },
  {
    id: "a2_u13_l182_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a weather forecast sentence:",
    sourceSentence: "Tomorrow morning will be slightly chilly with patchy fog in low valleys.",
    targetSentence: "Tomorrow morning will be slightly chilly with patchy fog in low valleys.",
    tokens: ["Tomorrow", "morning", "will", "be", "slightly", "chilly", "with", "patchy", "fog", "in", "low", "valleys", "."],
    correctOrder: ["Tomorrow", "morning", "will", "be", "slightly", "chilly", "with", "patchy", "fog", "in", "low", "valleys", "."],
    explanation: "'slightly chilly with patchy fog' combines adverb of degree with weather description."
  },
  {
    id: "a2_u13_l182_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate adverb of degree:",
    sourceSentence: "The wind was [blank] (extremely / slight) strong during the storm, knocking down several old pine trees.",
    targetSentence: "The wind was extremely strong during the storm, knocking down several old pine trees.",
    text: "The wind was [blank] strong during the storm, knocking down several old pine trees.",
    options: [
      { id: "o1", text: "extremely", isCorrect: true },
      { id: "o2", text: "slight", isCorrect: false },
      { id: "o3", text: "extreme", isCorrect: false },
      { id: "o4", text: "much", isCorrect: false }
    ],
    correctAnswer: "extremely",
    explanation: "The adverb 'extremely' modifies the adjective 'strong'."
  },
  {
    id: "a2_u13_l182_p21",
    type: "translation",
    prompt: "Translate to English: 'क्या आज शाम को तापमान शून्य से नीचे जाने की संभावना है?'",
    sourceSentence: "क्या आज शाम को तापमान शून्य से नीचे जाने की संभावना है?",
    targetSentence: "Is the temperature likely to drop below freezing tonight?",
    explanation: "'Is the temperature likely to drop below freezing tonight?' / 'below zero tonight?'"
  },
  {
    id: "a2_u13_l182_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give an advisory on preparing for seasonal changes.",
    sourceSentence: "Before autumn sets in, make sure to check your heating system, insulate water pipes, and carry warm waterproof layers when traveling.",
    targetSentence: "Before autumn sets in, make sure to check your heating system, insulate water pipes, and carry warm waterproof layers when traveling.",
    audioText: "Before autumn sets in, make sure to check your heating system, insulate water pipes, and carry warm waterproof layers when traveling.",
    explanation: "Practice clear advisory intonation and fluent delivery of seasonal preparation vocabulary."
  }
];

const l182_review: Exercise[] = [
  {
    id: "a2_u13_l182_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 - First Conditional): Which sentence correctly predicts an outcome based on weather conditions?",
    options: [
      { id: "o1", text: "If the thick fog doesn't clear by nine o'clock, our morning flight will be delayed.", isCorrect: true },
      { id: "o2", text: "If fog will not clear, flight is delayed yesterday.", isCorrect: false },
      { id: "o3", text: "If fog doesn't clear, flight delayed last week.", isCorrect: false },
      { id: "o4", text: "If fog cleared tomorrow, flight will cancel.", isCorrect: false }
    ],
    correctAnswer: "If the thick fog doesn't clear by nine o'clock, our morning flight will be delayed.",
    explanation: "First Conditional: 'If + present simple (doesn't clear)... will + verb (will be delayed)'."
  },
  {
    id: "a2_u13_l182_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'It is [blank] (quite / quiet) warm today, so you won't need a heavy coat.'",
    sourceSentence: "It is [blank] warm today, so you won't need a heavy coat.",
    targetSentence: "It is quite warm today, so you won't need a heavy coat.",
    text: "It is [blank] warm today, so you won't need a heavy coat.",
    options: [
      { id: "o1", text: "quite", isCorrect: true },
      { id: "o2", text: "quiet", isCorrect: false },
      { id: "o3", text: "quit", isCorrect: false },
      { id: "o4", text: "quits", isCorrect: false }
    ],
    correctAnswer: "quite",
    explanation: "'quite' means fairly or moderately; 'quiet' means silent."
  },
  {
    id: "a2_u13_l182_r9",
    type: "error_correction",
    prompt: "Correct the future prediction error in this weather statement:",
    sourceSentence: "According to the radar, it will raining heavily later this evening.",
    targetSentence: "According to the radar, it will rain heavily later this evening.",
    options: [
      { id: "o1", text: "According to the radar, it will rain heavily later this evening.", isCorrect: true },
      { id: "o2", text: "According to radar, it will to rain heavily.", isCorrect: false },
      { id: "o3", text: "According to radar, it rains heavily yesterday.", isCorrect: false }
    ],
    correctAnswer: "According to the radar, it will rain heavily later this evening.",
    explanation: "Modal 'will' is followed by base form 'rain' ('will rain')."
  },
  {
    id: "a2_u13_l182_r10",
    type: "translation",
    prompt: "Translate to English: 'हवा बहुत ठंडी है, इसलिए अपनी जैकेट की ज़िप बंद कर लें।'",
    sourceSentence: "हवा बहुत ठंडी है, इसलिए अपनी जैकेट की ज़िप बंद कर लें।",
    targetSentence: "The wind is very chilly, so zip up your jacket.",
    explanation: "'The wind is very chilly / cold, so zip up your jacket.'"
  }
];

const l182_assessment: Exercise[] = [
  {
    id: "a2_u13_l182_a5",
    type: "multiple_choice",
    prompt: "What does the weather report mean when it says: 'Scattered showers with intermittent sunny spells'?",
    options: [
      { id: "o1", text: "Short periods of rain alternating with occasional sunshine throughout the area.", isCorrect: true },
      { id: "o2", text: "A massive blizzard covering the whole country.", isCorrect: false },
      { id: "o3", text: "Zero rain and blazing desert heat all day.", isCorrect: false },
      { id: "o4", text: "Permanent total darkness for 24 hours.", isCorrect: false }
    ],
    correctAnswer: "Short periods of rain alternating with occasional sunshine throughout the area.",
    explanation: "'Scattered showers' means rain in several places; 'intermittent sunny spells' means breaks of sun."
  },
  {
    id: "a2_u13_l182_a6",
    type: "fill_blank",
    prompt: "Complete the weather advisory sentence:",
    sourceSentence: "Due to [blank] (dense / heavy) fog on the highway, motorists should maintain a safe following distance.",
    targetSentence: "Due to dense fog on the highway, motorists should maintain a safe following distance.",
    text: "Due to [blank] fog on the highway, motorists should maintain a safe following distance.",
    options: [
      { id: "o1", text: "dense", isCorrect: true },
      { id: "o2", text: "heavy", isCorrect: false },
      { id: "o3", text: "hard", isCorrect: false },
      { id: "o4", text: "strong", isCorrect: false }
    ],
    correctAnswer: "dense",
    explanation: "Fog collocates with 'dense' or 'thick' ('dense fog')."
  },
  {
    id: "a2_u13_l182_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Give a 2-sentence outdoor recommendation based on tomorrow's weather forecast.",
    sourceSentence: "Since tomorrow will be sunny and moderately breezy, it is the perfect day for a coastal bike ride. Just be sure to wear sunscreen and carry plenty of drinking water.",
    targetSentence: "Since tomorrow will be sunny and moderately breezy, it is the perfect day for a coastal bike ride. Just be sure to wear sunscreen and carry plenty of drinking water.",
    audioText: "Since tomorrow will be sunny and moderately breezy, it is the perfect day for a coastal bike ride. Just be sure to wear sunscreen and carry plenty of drinking water.",
    explanation: "Demonstrate accurate weather condition vocabulary and clear causal recommendations ('Since tomorrow will be...')."
  },
  {
    id: "a2_u13_l182_a8",
    type: "mediation",
    prompt: "Mediate this storm advisory for travelers: 'भारी बर्फबारी के कारण पर्वतीय दर्रा अगले 24 घंटों के लिए बंद रहेगा।' Provide the best translation.",
    sourceSentence: "भारी बर्फबारी के कारण पर्वतीय दर्रा अगले 24 घंटों के लिए बंद रहेगा।",
    targetSentence: "The mountain pass will remain closed for the next 24 hours due to heavy snowfall.",
    options: [
      { id: "o1", text: "The mountain pass will remain closed for the next 24 hours due to heavy snowfall.", isCorrect: true },
      { id: "o2", text: "Snow fell yesterday so mountain pass was opened.", isCorrect: false },
      { id: "o3", text: "Mountain pass is sunny so drive fast.", isCorrect: false }
    ],
    correctAnswer: "The mountain pass will remain closed for the next 24 hours due to heavy snowfall.",
    explanation: "'The mountain pass will remain closed for the next 24 hours due to heavy snowfall' precisely relays the advisory."
  },
  {
    id: "a2_u13_l182_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a forecast prediction:",
    sourceSentence: "Temperatures are expected to reach thirty degrees by mid-afternoon.",
    targetSentence: "Temperatures are expected to reach thirty degrees by mid-afternoon.",
    tokens: ["Temperatures", "are", "expected", "to", "reach", "thirty", "degrees", "by", "mid-afternoon", "."],
    correctOrder: ["Temperatures", "are", "expected", "to", "reach", "thirty", "degrees", "by", "mid-afternoon", "."],
    explanation: "'Temperatures are expected to reach...' is a standard meteorological forecasting pattern."
  },
  {
    id: "a2_u13_l182_a10",
    type: "dialogue_completion",
    prompt: "Complete the weather conversation:\nFriend: 'Should we cancel our picnic tomorrow?'\nYou: '________________________'",
    sourceSentence: "Should we cancel our picnic tomorrow?",
    targetSentence: "No, let's keep it! The forecast says the morning will be dry and the rain won't start until night.",
    options: [
      { id: "o1", text: "No, let's keep it! The forecast says the morning will be dry and the rain won't start until night.", isCorrect: true },
      { id: "o2", text: "Yes, picnics are illegal during weekends.", isCorrect: false },
      { id: "o3", text: "The picnic was cancelled in 1995.", isCorrect: false }
    ],
    correctAnswer: "No, let's keep it! The forecast says the morning will be dry and the rain won't start until night.",
    explanation: "'No, let's keep it! The forecast says...' provides an encouraging, evidence-based response."
  }
];

// =========================================================================
// LESSON 183: Animals, Pets & Wildlife Conservation
// Grammar: Habitual Actions (used to / usually) & Relative Clauses with which/who
// =========================================================================
const l183_practice: Exercise[] = [
  {
    id: "a2_u13_l183_p11",
    type: "reading",
    prompt: "Read the wildlife sanctuary report and answer the question:\n\"Conservation Success: Twenty years ago, the Iberian lynx was on the brink of extinction with fewer than one hundred individuals in the wild. Thanks to protected breeding centers and habitat restoration programs, conservationists who dedicated decades to the project have helped the population grow to over one thousand. The lynx, which preys primarily on wild rabbits, now roams freely across southern Spain and Portugal.\"\nWhat primary factor helped the Iberian lynx population recover?",
    sourceSentence: "What primary factor helped the Iberian lynx population recover?",
    targetSentence: "Protected breeding centers and habitat restoration programs.",
    options: [
      { id: "o1", text: "Protected breeding centers and habitat restoration programs.", isCorrect: true },
      { id: "o2", text: "Exporting all wild rabbits to other countries.", isCorrect: false },
      { id: "o3", text: "Keeping all lynxes in small pet cages permanently.", isCorrect: false },
      { id: "o4", text: "Cutting down all Mediterranean forests.", isCorrect: false }
    ],
    correctAnswer: "Protected breeding centers and habitat restoration programs.",
    explanation: "The text states that protected breeding centers and habitat restoration programs enabled the population to grow."
  },
  {
    id: "a2_u13_l183_p12",
    type: "speaking",
    prompt: "Speak clearly and describe caring for a domestic pet or interacting with wildlife:",
    sourceSentence: "We adopted a rescue dog that was found abandoned, and with patience and daily training, he has become an affectionate companion.",
    targetSentence: "We adopted a rescue dog that was found abandoned, and with patience and daily training, he has become an affectionate companion.",
    audioText: "We adopted a rescue dog that was found abandoned, and with patience and daily training, he has become an affectionate companion.",
    explanation: "Practice descriptive storytelling with 'adopted a rescue dog that was found abandoned'."
  },
  {
    id: "a2_u13_l183_p13",
    type: "match_pairs",
    prompt: "Match animal groups with their typical natural habitat:",
    options: [
      { id: "m1", text: "marine mammals (whales, dolphins)" },
      { id: "m1_m", text: "open oceans and coastal waters" },
      { id: "m2", text: "nocturnal predators (owls, bats)" },
      { id: "m2_m", text: "dense woodlands and caves active at night" },
      { id: "m3", text: "alpine wildlife (ibex, snow leopards)" },
      { id: "m3_m", text: "rugged, high-altitude rocky peaks" },
      { id: "m4", text: "domestic animals (dogs, cats)" },
      { id: "m4_m", text: "human households and farm environments" }
    ]
  },
  {
    id: "a2_u13_l183_p14",
    type: "mediation",
    prompt: "Mediate this wildlife protection notice into English: 'जंगली जानवरों को खाना खिलाना मना है क्योंकि यह उनके प्राकृतिक व्यवहार को नुकसान पहुँचाता है।' Choose the best translation.",
    sourceSentence: "जंगली जानवरों को खाना खिलाना मना है क्योंकि यह उनके प्राकृतिक व्यवहार को नुकसान पहुँचाता है।",
    targetSentence: "Feeding wild animals is prohibited because it harms their natural behavior.",
    options: [
      { id: "o1", text: "Feeding wild animals is prohibited because it harms their natural behavior.", isCorrect: true },
      { id: "o2", text: "Animals feed people because behavior is good.", isCorrect: false },
      { id: "o3", text: "Wild animals deleted food yesterday.", isCorrect: false }
    ],
    correctAnswer: "Feeding wild animals is prohibited because it harms their natural behavior.",
    explanation: "'Feeding wild animals is prohibited because it harms their natural behavior' accurately conveys the rule and reasoning."
  },
  {
    id: "a2_u13_l183_p15",
    type: "error_correction",
    prompt: "Identify and correct the habit/used to error in this pet description:",
    sourceSentence: "When I was young, we use to have two golden retrievers.",
    targetSentence: "When I was young, we used to have two golden retrievers.",
    options: [
      { id: "o1", text: "When I was young, we used to have two golden retrievers.", isCorrect: true },
      { id: "o2", text: "When I was young, we using to have dogs.", isCorrect: false },
      { id: "o3", text: "When I was young, we were used have dogs.", isCorrect: false }
    ],
    correctAnswer: "When I was young, we used to have two golden retrievers.",
    explanation: "Past habit requires 'used to + base verb' ('used to have')."
  },
  {
    id: "a2_u13_l183_p16",
    type: "listening",
    prompt: "Listen to the veterinarian's advice and identify the key pet care tip:",
    audioText: "For senior dogs, regular dental checkups are essential. Make sure to feed them a balanced diet rich in joint-supporting nutrients and take them on gentle, short walks every day.",
    targetSentence: "Regular dental checkups, joint-supporting diet, and gentle short walks.",
    options: [
      { id: "o1", text: "Regular dental checkups, joint-supporting diet, and gentle short walks.", isCorrect: true },
      { id: "o2", text: "Feed senior dogs only sugar and candy.", isCorrect: false },
      { id: "o3", text: "Force senior dogs to run twenty miles daily.", isCorrect: false },
      { id: "o4", text: "Never take senior dogs to a veterinarian.", isCorrect: false }
    ],
    correctAnswer: "Regular dental checkups, joint-supporting diet, and gentle short walks.",
    explanation: "The vet highlights dental checkups, balanced joint nutrition, and gentle daily walks."
  },
  {
    id: "a2_u13_l183_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your experience with pets or an animal you admire:",
    targetSentence: "I have a three-year-old cat who loves curling up on my lap while I read. She is very playful in the evenings and always greets me at the door when I come home.",
    audioText: "I have a three-year-old cat who loves curling up on my lap while I read. She is very playful in the evenings and always greets me at the door when I come home."
  },
  {
    id: "a2_u13_l183_p18",
    type: "dialogue_completion",
    prompt: "Complete the conversation at an animal adoption center:\nStaff: 'Are you looking to adopt a puppy or an adult dog?'\nVisitor: '________________________'",
    sourceSentence: "Are you looking to adopt a puppy or an adult dog?",
    targetSentence: "We would prefer an adult dog that is already calm and house-trained.",
    options: [
      { id: "o1", text: "We would prefer an adult dog that is already calm and house-trained.", isCorrect: true },
      { id: "o2", text: "We want to buy twenty tigers immediately.", isCorrect: false },
      { id: "o3", text: "Dogs were cancelled last month.", isCorrect: false }
    ],
    correctAnswer: "We would prefer an adult dog that is already calm and house-trained.",
    explanation: "'We would prefer an adult dog that is already calm...' uses relative clause and polite preference."
  },
  {
    id: "a2_u13_l183_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a wildlife conservation fact:",
    sourceSentence: "Sea turtles return to the exact beach where they were born.",
    targetSentence: "Sea turtles return to the exact beach where they were born.",
    tokens: ["Sea", "turtles", "return", "to", "the", "exact", "beach", "where", "they", "were", "born", "."],
    correctOrder: ["Sea", "turtles", "return", "to", "the", "exact", "beach", "where", "they", "were", "born", "."],
    explanation: "'where they were born' modifies 'exact beach' as a relative adverb clause."
  },
  {
    id: "a2_u13_l183_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate verb form:",
    sourceSentence: "Many migratory bird species [blank] (fly / flew) thousands of kilometers south every autumn.",
    targetSentence: "Many migratory bird species fly thousands of kilometers south every autumn.",
    text: "Many migratory bird species [blank] thousands of kilometers south every autumn.",
    options: [
      { id: "o1", text: "fly", isCorrect: true },
      { id: "o2", text: "flew", isCorrect: false },
      { id: "o3", text: "flying", isCorrect: false },
      { id: "o4", text: "flown", isCorrect: false }
    ],
    correctAnswer: "fly",
    explanation: "Present Simple 'fly' expresses habitual annual migration."
  },
  {
    id: "a2_u13_l183_p21",
    type: "translation",
    prompt: "Translate to English: 'हाथी बहुत बुद्धिमान जानवर हैं जो मजबूत सामाजिक बंधन बनाते हैं।'",
    sourceSentence: "हाथी बहुत बुद्धिमान जानवर हैं जो मजबूत सामाजिक बंधन बनाते हैं।",
    targetSentence: "Elephants are highly intelligent animals that form strong social bonds.",
    explanation: "'Elephants are highly intelligent animals that / which form strong social bonds.'"
  },
  {
    id: "a2_u13_l183_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain why protecting endangered species matters.",
    sourceSentence: "Protecting endangered animals preserves the natural balance of our ecosystems and ensures healthy biodiversity for future generations.",
    targetSentence: "Protecting endangered animals preserves the natural balance of our ecosystems and ensures healthy biodiversity for future generations.",
    audioText: "Protecting endangered animals preserves the natural balance of our ecosystems and ensures healthy biodiversity for future generations.",
    explanation: "Practice fluent speech with advanced environmental collocations ('natural balance of our ecosystems', 'healthy biodiversity')."
  }
];

const l183_review: Exercise[] = [
  {
    id: "a2_u13_l183_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Expressing Preferences & Habit): Which sentence correctly contrasts a past pet habit with a present routine?",
    options: [
      { id: "o1", text: "We used to live in an apartment without pets, but now we have a house with a large backyard and two dogs.", isCorrect: true },
      { id: "o2", text: "We use to live apartment but now having dogs yesterday.", isCorrect: false },
      { id: "o3", text: "We used have apartment and have dogs last year.", isCorrect: false },
      { id: "o4", text: "We was living apartment without pets now.", isCorrect: false }
    ],
    correctAnswer: "We used to live in an apartment without pets, but now we have a house with a large backyard and two dogs.",
    explanation: "'used to live... but now we have...' accurately contrasts past situation with current state."
  },
  {
    id: "a2_u13_l183_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'The volunteer [blank] (who / which) looks after injured birds is a trained biologist.'",
    sourceSentence: "The volunteer [blank] looks after injured birds is a trained biologist.",
    targetSentence: "The volunteer who looks after injured birds is a trained biologist.",
    text: "The volunteer [blank] looks after injured birds is a trained biologist.",
    options: [
      { id: "o1", text: "who", isCorrect: true },
      { id: "o2", text: "which", isCorrect: false },
      { id: "o3", text: "where", isCorrect: false },
      { id: "o4", text: "whose", isCorrect: false }
    ],
    correctAnswer: "who",
    explanation: "'Volunteer' refers to a person, requiring 'who'."
  },
  {
    id: "a2_u13_l183_r9",
    type: "error_correction",
    prompt: "Correct the plural noun error in this animal sentence:",
    sourceSentence: "We saw several wolfs hunting near the edge of the snowy forest.",
    targetSentence: "We saw several wolves hunting near the edge of the snowy forest.",
    options: [
      { id: "o1", text: "We saw several wolves hunting near the edge of the snowy forest.", isCorrect: true },
      { id: "o2", text: "We saw several wolfes hunting near forest.", isCorrect: false },
      { id: "o3", text: "We saw several wolf hunting forest.", isCorrect: false }
    ],
    correctAnswer: "We saw several wolves hunting near the edge of the snowy forest.",
    explanation: "The irregular plural of 'wolf' is 'wolves'."
  },
  {
    id: "a2_u13_l183_r10",
    type: "translation",
    prompt: "Translate to English: 'डॉल्फ़िन समुद्र में सबसे मिलनसार जीवों में से एक हैं।'",
    sourceSentence: "डॉल्फ़िन समुद्र में सबसे मिलनसार जीवों में से एक हैं।",
    targetSentence: "Dolphins are among the friendliest creatures in the ocean.",
    explanation: "'Dolphins are among the friendliest creatures in the sea / ocean.'"
  }
];

const l183_assessment: Exercise[] = [
  {
    id: "a2_u13_l183_a5",
    type: "multiple_choice",
    prompt: "Which statement best describes the role of a wildlife corridor?",
    options: [
      { id: "o1", text: "A protected strip of natural habitat that allows animals to move safely between separated forest areas.", isCorrect: true },
      { id: "o2", text: "A highway where humans drive race cars through animal sanctuaries.", isCorrect: false },
      { id: "o3", text: "A concrete shopping mall built in the middle of a national park.", isCorrect: false },
      { id: "o4", text: "An underground cage where birds are kept permanently.", isCorrect: false }
    ],
    correctAnswer: "A protected strip of natural habitat that allows animals to move safely between separated forest areas.",
    explanation: "A wildlife corridor connects fragmented habitats so wildlife can migrate and breed safely."
  },
  {
    id: "a2_u13_l183_a6",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct relative pronoun:",
    sourceSentence: "The veterinary clinic [blank] (which / who) opened downtown specializes in exotic birds.",
    targetSentence: "The veterinary clinic which opened downtown specializes in exotic birds.",
    text: "The veterinary clinic [blank] opened downtown specializes in exotic birds.",
    options: [
      { id: "o1", text: "which", isCorrect: true },
      { id: "o2", text: "who", isCorrect: false },
      { id: "o3", text: "whose", isCorrect: false },
      { id: "o4", text: "whom", isCorrect: false }
    ],
    correctAnswer: "which",
    explanation: "'Veterinary clinic' is an organization/facility, requiring 'which' or 'that'."
  },
  {
    id: "a2_u13_l183_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences about an animal's unique adaptation and habitat.",
    sourceSentence: "Chameleons have specialized eyes that can move independently in two different directions at the same time. This adaptation helps them spot approaching predators and catch insects in dense trees.",
    targetSentence: "Chameleons have specialized eyes that can move independently in two different directions at the same time. This adaptation helps them spot approaching predators and catch insects in dense trees.",
    audioText: "Chameleons have specialized eyes that can move independently in two different directions at the same time. This adaptation helps them spot approaching predators and catch insects in dense trees.",
    explanation: "Demonstrate accurate biological adaptation vocabulary and relative clauses ('eyes that can move...')."
  },
  {
    id: "a2_u13_l183_a8",
    type: "mediation",
    prompt: "Mediate this shelter guideline for new pet owners: 'पालतू जानवरों को गोद लेने के बाद उन्हें नए माहौल में ढलने के लिए कुछ दिनों का समय दें।' Provide the best translation.",
    sourceSentence: "पालतू जानवरों को गोद लेने के बाद उन्हें नए माहौल में ढलने के लिए कुछ दिनों का समय दें।",
    targetSentence: "After adopting a pet, give them a few days to adjust to their new environment.",
    options: [
      { id: "o1", text: "After adopting a pet, give them a few days to adjust to their new environment.", isCorrect: true },
      { id: "o2", text: "Pets adopt people in environment yesterday.", isCorrect: false },
      { id: "o3", text: "Do not give food to adopted pets.", isCorrect: false }
    ],
    correctAnswer: "After adopting a pet, give them a few days to adjust to their new environment.",
    explanation: "'After adopting a pet, give them a few days to adjust to their new environment' is clear, empathetic, and accurate."
  },
  {
    id: "a2_u13_l183_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence about a therapy dog:",
    sourceSentence: "Therapy dogs visit hospitals to bring comfort to recovering patients.",
    targetSentence: "Therapy dogs visit hospitals to bring comfort to recovering patients.",
    tokens: ["Therapy", "dogs", "visit", "hospitals", "to", "bring", "comfort", "to", "recovering", "patients", "."],
    correctOrder: ["Therapy", "dogs", "visit", "hospitals", "to", "bring", "comfort", "to", "recovering", "patients", "."],
    explanation: "'to bring comfort to recovering patients' expresses purpose with an infinitive clause."
  },
  {
    id: "a2_u13_l183_a10",
    type: "dialogue_completion",
    prompt: "Complete the wildlife tour dialogue:\nGuide: 'Look up towards that high rocky ledge!'\nTourist: '________________________'",
    sourceSentence: "Look up towards that high rocky ledge!",
    targetSentence: "Is that a golden eagle perched near the summit?",
    options: [
      { id: "o1", text: "Is that a golden eagle perched near the summit?", isCorrect: true },
      { id: "o2", text: "No, rocky ledges are made of pizza.", isCorrect: false },
      { id: "o3", text: "I deleted the summit yesterday.", isCorrect: false }
    ],
    correctAnswer: "Is that a golden eagle perched near the summit?",
    explanation: "'Is that a golden eagle perched near the summit?' is a natural, context-appropriate inquiry."
  }
];

// =========================================================================
// LESSON 184: Outdoor Activities, Hiking, Camping & Leisure
// Grammar: Imperatives & Sequencing Adverbs (first, next, after that, finally)
// =========================================================================
const l184_practice: Exercise[] = [
  {
    id: "a2_u13_l184_p11",
    type: "reading",
    prompt: "Read the backcountry camping guide and answer the question:\n\"Essential Camping Protocol: Before pitching your tent, choose a flat, elevated campsite at least sixty meters away from natural water sources. First, clear the ground of sharp rocks and pinecones. Next, assemble your tent frame and peg the corners firmly into the soil. After that, attach the waterproof rainfly securely. Finally, store all food and scented toiletries inside a certified bear-resistant canister away from your sleeping area.\"\nWhere should food and toiletries be stored?",
    sourceSentence: "Where should food and toiletries be stored?",
    targetSentence: "Inside a certified bear-resistant canister away from the sleeping area.",
    options: [
      { id: "o1", text: "Inside a certified bear-resistant canister away from the sleeping area.", isCorrect: true },
      { id: "o2", text: "Inside your sleeping bag right under your pillow.", isCorrect: false },
      { id: "o3", text: "Floating loosely in the nearby river.", isCorrect: false },
      { id: "o4", text: "Scattered openly around the campfire.", isCorrect: false }
    ],
    correctAnswer: "Inside a certified bear-resistant canister away from the sleeping area.",
    explanation: "The text states: 'Finally, store all food and scented toiletries inside a certified bear-resistant canister away from your sleeping area.'"
  },
  {
    id: "a2_u13_l184_p12",
    type: "speaking",
    prompt: "Speak clearly and give step-by-step instructions for packing a hiking backpack:",
    sourceSentence: "First, place your lightweight sleeping gear at the very bottom. Next, pack heavy items like your cooking stove close to your spine. Finally, keep first-aid essentials in the top pocket.",
    targetSentence: "First, place your lightweight sleeping gear at the very bottom. Next, pack heavy items like your cooking stove close to your spine. Finally, keep first-aid essentials in the top pocket.",
    audioText: "First, place your lightweight sleeping gear at the very bottom. Next, pack heavy items like your cooking stove close to your spine. Finally, keep first-aid essentials in the top pocket.",
    explanation: "Practice sequencing adverbs: 'First', 'Next', 'Finally' with clear instructional imperatives."
  },
  {
    id: "a2_u13_l184_p13",
    type: "match_pairs",
    prompt: "Match hiking gear with its primary outdoor function:",
    options: [
      { id: "m1", text: "trekking poles" },
      { id: "m1_m", text: "provide balance and reduce knee strain on descents" },
      { id: "m2", text: "water filtration bottle" },
      { id: "m2_m", text: "purify stream water safely for drinking" },
      { id: "m3", text: "headlamp / flashlight" },
      { id: "m3_m", text: "hands-free illumination when hiking after dark" },
      { id: "m4", text: "thermal base layer" },
      { id: "m4_m", text: "retain body warmth in freezing mountain conditions" }
    ]
  },
  {
    id: "a2_u13_l184_p14",
    type: "mediation",
    prompt: "Mediate this trail safety rule into English: 'पहाड़ों में लंबी पैदल यात्रा शुरू करने से पहले हमेशा किसी को अपने मार्ग और लौटने के समय के बारे में बताएं।' Choose the best translation.",
    sourceSentence: "पहाड़ों में लंबी पैदल यात्रा शुरू करने से पहले हमेशा किसी को अपने मार्ग और लौटने के समय के बारे में बताएं।",
    targetSentence: "Always inform someone of your planned route and expected return time before hiking in the mountains.",
    options: [
      { id: "o1", text: "Always inform someone of your planned route and expected return time before hiking in the mountains.", isCorrect: true },
      { id: "o2", text: "Hike mountains alone without telling any person.", isCorrect: false },
      { id: "o3", text: "Return time was deleted before hiking.", isCorrect: false }
    ],
    correctAnswer: "Always inform someone of your planned route and expected return time before hiking in the mountains.",
    explanation: "'Always inform someone of your planned route...' is the standard wilderness safety guideline."
  },
  {
    id: "a2_u13_l184_p15",
    type: "error_correction",
    prompt: "Identify and correct the imperative error in this trail advice:",
    sourceSentence: "Don't to leave any trash behind on the mountain trail.",
    targetSentence: "Don't leave any trash behind on the mountain trail.",
    options: [
      { id: "o1", text: "Don't leave any trash behind on the mountain trail.", isCorrect: true },
      { id: "o2", text: "Not leaving any trash behind mountain.", isCorrect: false },
      { id: "o3", text: "Don't left trash behind trail.", isCorrect: false }
    ],
    correctAnswer: "Don't leave any trash behind on the mountain trail.",
    explanation: "Negative imperative is 'Don't + base verb' ('Don't leave'), without 'to'."
  },
  {
    id: "a2_u13_l184_p16",
    type: "listening",
    prompt: "Listen to the outdoor guide and identify the recommended gear for the river hike:",
    audioText: "For tomorrow's gorge trek, you must wear sturdy waterproof footwear with good ankle grip. Bring at least two liters of water, a sun hat, and high-energy trail snacks.",
    targetSentence: "Sturdy waterproof footwear, 2 liters of water, sun hat, and trail snacks.",
    options: [
      { id: "o1", text: "Sturdy waterproof footwear, 2 liters of water, sun hat, and trail snacks.", isCorrect: true },
      { id: "o2", text: "High heels and an empty plastic bag.", isCorrect: false },
      { id: "o3", text: "A heavy television set and formal suit.", isCorrect: false },
      { id: "o4", text: "No water and zero footwear.", isCorrect: false }
    ],
    correctAnswer: "Sturdy waterproof footwear, 2 liters of water, sun hat, and trail snacks.",
    explanation: "The guide lists waterproof footwear with ankle grip, 2 liters of water, sun hat, and energy snacks."
  },
  {
    id: "a2_u13_l184_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your favorite outdoor hobby and what equipment is needed:",
    targetSentence: "I love kayaking on serene alpine lakes during the summer. All you need is a stable kayak, a lightweight paddle, and a properly fitted life jacket for safety.",
    audioText: "I love kayaking on serene alpine lakes during the summer. All you need is a stable kayak, a lightweight paddle, and a properly fitted life jacket for safety."
  },
  {
    id: "a2_u13_l184_p18",
    type: "dialogue_completion",
    prompt: "Complete the campsite conversation:\nCamper A: 'How do we ignite the camp stove safely?'\nCamper B: '________________________'",
    sourceSentence: "How do we ignite the camp stove safely?",
    targetSentence: "First open the fuel valve slightly, and then use the piezo igniter to light the burner.",
    options: [
      { id: "o1", text: "First open the fuel valve slightly, and then use the piezo igniter to light the burner.", isCorrect: true },
      { id: "o2", text: "Throw the entire stove into the lake.", isCorrect: false },
      { id: "o3", text: "Camp stoves cannot produce fire.", isCorrect: false }
    ],
    correctAnswer: "First open the fuel valve slightly, and then use the piezo igniter to light the burner.",
    explanation: "'First open... and then use...' provides sequential, safe instruction."
  },
  {
    id: "a2_u13_l184_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a Leave No Trace environmental principle:",
    sourceSentence: "Take only photographs and leave only footprints in nature.",
    targetSentence: "Take only photographs and leave only footprints in nature.",
    tokens: ["Take", "only", "photographs", "and", "leave", "only", "footprints", "in", "nature", "."],
    correctOrder: ["Take", "only", "photographs", "and", "leave", "only", "footprints", "in", "nature", "."],
    explanation: "'Take only photographs and leave only footprints' is the world-famous outdoor ethos."
  },
  {
    id: "a2_u13_l184_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the sequencing transition:",
    sourceSentence: "First unpack your sleeping bag. [blank] (Next / Last), inflate your sleeping mat for insulation.",
    targetSentence: "First unpack your sleeping bag. Next, inflate your sleeping mat for insulation.",
    text: "First unpack your sleeping bag. [blank] inflate your sleeping mat for insulation.",
    options: [
      { id: "o1", text: "Next,", isCorrect: true },
      { id: "o2", text: "Last,", isCorrect: false },
      { id: "o3", text: "Never,", isCorrect: false },
      { id: "o4", text: "Before,", isCorrect: false }
    ],
    correctAnswer: "Next,",
    explanation: "'Next,' naturally follows 'First'."
  },
  {
    id: "a2_u13_l184_p21",
    type: "translation",
    prompt: "Translate to English: 'शिखर पर पहुँचने के बाद, हमने गर्म चाय पी और दृश्य का आनंद लिया।'",
    sourceSentence: "शिखर पर पहुँचने के बाद, हमने गर्म चाय पी और दृश्य का आनंद लिया।",
    targetSentence: "After reaching the summit, we drank hot tea and enjoyed the view.",
    explanation: "'After reaching the summit, we drank hot tea and enjoyed the view / scenery.'"
  },
  {
    id: "a2_u13_l184_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give an encouraging recap of a completed mountain hike.",
    sourceSentence: "Although the final ascent was steep and exhausting, standing on the summit with a 360-degree panorama made every step worthwhile.",
    targetSentence: "Although the final ascent was steep and exhausting, standing on the summit with a 360-degree panorama made every step worthwhile.",
    audioText: "Although the final ascent was steep and exhausting, standing on the summit with a 360-degree panorama made every step worthwhile.",
    explanation: "Practice rich descriptive outdoor vocabulary ('steep and exhausting', '360-degree panorama', 'made every step worthwhile')."
  }
];

const l184_review: Exercise[] = [
  {
    id: "a2_u13_l184_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 - Concessions with Although / Even though): Which sentence correctly uses 'although' in an outdoor setting?",
    options: [
      { id: "o1", text: "Although the weather turned unexpectedly cold, our thermal sleeping bags kept us warm all night.", isCorrect: true },
      { id: "o2", text: "Although cold weather, but we slept warm.", isCorrect: false },
      { id: "o3", text: "Although it cold, we was warm yesterday.", isCorrect: false },
      { id: "o4", text: "We were warm although because sleeping bags.", isCorrect: false }
    ],
    correctAnswer: "Although the weather turned unexpectedly cold, our thermal sleeping bags kept us warm all night.",
    explanation: "'Although + subject + verb (the weather turned...)' expresses concession correctly."
  },
  {
    id: "a2_u13_l184_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Remember to [blank] (extinguish / extinguished) your campfire completely before going to sleep.'",
    sourceSentence: "Remember to [blank] your campfire completely before going to sleep.",
    targetSentence: "Remember to extinguish your campfire completely before going to sleep.",
    text: "Remember to [blank] your campfire completely before going to sleep.",
    options: [
      { id: "o1", text: "extinguish", isCorrect: true },
      { id: "o2", text: "extinguished", isCorrect: false },
      { id: "o3", text: "extinguishing", isCorrect: false },
      { id: "o4", text: "extinguishes", isCorrect: false }
    ],
    correctAnswer: "extinguish",
    explanation: "'Remember + to + base verb' ('Remember to extinguish')."
  },
  {
    id: "a2_u13_l184_r9",
    type: "error_correction",
    prompt: "Correct the preposition error in this camping instruction:",
    sourceSentence: "Set up your tent in at least fifty meters away from the river.",
    targetSentence: "Set up your tent at least fifty meters away from the river.",
    options: [
      { id: "o1", text: "Set up your tent at least fifty meters away from the river.", isCorrect: true },
      { id: "o2", text: "Set up tent on fifty meters from river.", isCorrect: false },
      { id: "o3", text: "Set up tent with fifty meters away river.", isCorrect: false }
    ],
    correctAnswer: "Set up your tent at least fifty meters away from the river.",
    explanation: "Delete redundant 'in'; the phrase is 'at least fifty meters away from'."
  },
  {
    id: "a2_u13_l184_r10",
    type: "translation",
    prompt: "Translate to English: 'हम कल सुबह पाँच बजे सूर्योदय देखने के लिए उठेंगे।' (Future plan)",
    sourceSentence: "हम कल सुबह पाँच बजे सूर्योदय देखने के लिए उठेंगे।",
    targetSentence: "We are going to wake up at five in the morning to watch the sunrise.",
    explanation: "'We are going to wake up at 5 a.m. to watch the sunrise.' or 'We will wake up at 5 a.m....'"
  }
];

const l184_assessment: Exercise[] = [
  {
    id: "a2_u13_l184_a5",
    type: "multiple_choice",
    prompt: "What is the primary purpose of wearing layered clothing during outdoor activities?",
    options: [
      { id: "o1", text: "To easily adapt to changing temperatures by adding or removing garments as needed.", isCorrect: true },
      { id: "o2", text: "To make yourself as heavy as possible while hiking.", isCorrect: false },
      { id: "o3", text: "To avoid carrying any backpack.", isCorrect: false },
      { id: "o4", text: "To prevent your shoes from getting dirty.", isCorrect: false }
    ],
    correctAnswer: "To easily adapt to changing temperatures by adding or removing garments as needed.",
    explanation: "Layering allows hikers to regulate body temperature effectively during exertion and rest."
  },
  {
    id: "a2_u13_l184_a6",
    type: "fill_blank",
    prompt: "Complete the trail safety instruction:",
    sourceSentence: "Always [blank] (stay / staying) on the designated path to prevent soil erosion and protect fragile alpine vegetation.",
    targetSentence: "Always stay on the designated path to prevent soil erosion and protect fragile alpine vegetation.",
    text: "Always [blank] on the designated path to prevent soil erosion and protect fragile alpine vegetation.",
    options: [
      { id: "o1", text: "stay", isCorrect: true },
      { id: "o2", text: "staying", isCorrect: false },
      { id: "o3", text: "stayed", isCorrect: false },
      { id: "o4", text: "stays", isCorrect: false }
    ],
    correctAnswer: "stay",
    explanation: "Positive imperative requires base form 'stay' ('Always stay...')."
  },
  {
    id: "a2_u13_l184_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Give a 2-sentence instructional briefing on preparing for a day hike in the hills.",
    sourceSentence: "First, check the local weather forecast and pack a trail map, rain jacket, and plenty of high-energy snacks. Make sure your phone is fully charged and remember to start early to avoid afternoon storms.",
    targetSentence: "First, check the local weather forecast and pack a trail map, rain jacket, and plenty of high-energy snacks. Make sure your phone is fully charged and remember to start early to avoid afternoon storms.",
    audioText: "First, check the local weather forecast and pack a trail map, rain jacket, and plenty of high-energy snacks. Make sure your phone is fully charged and remember to start early to avoid afternoon storms.",
    explanation: "Demonstrate accurate sequencing, clear imperatives, and practical outdoor vocabulary."
  },
  {
    id: "a2_u13_l184_a8",
    type: "mediation",
    prompt: "Mediate this campsite rule for an international group: 'रात दस बजे के बाद शांति बनाए रखें ताकि अन्य कैंपर्स को कोई असुविधा न हो।' Provide the best translation.",
    sourceSentence: "रात दस बजे के बाद शांति बनाए रखें ताकि अन्य कैंपर्स को कोई असुविधा न हो।",
    targetSentence: "Please observe quiet hours after 10 p.m. so that other campers are not disturbed.",
    options: [
      { id: "o1", text: "Please observe quiet hours after 10 p.m. so that other campers are not disturbed.", isCorrect: true },
      { id: "o2", text: "Make loud music after 10 p.m. for all campers.", isCorrect: false },
      { id: "o3", text: "Campsite is closed at 10 p.m. yesterday.", isCorrect: false }
    ],
    correctAnswer: "Please observe quiet hours after 10 p.m. so that other campers are not disturbed.",
    explanation: "'Please observe quiet hours after 10 p.m. so that other campers are not disturbed' is standard campground etiquette."
  },
  {
    id: "a2_u13_l184_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form an imperative trail instruction:",
    sourceSentence: "Drink water frequently even before you start feeling thirsty.",
    targetSentence: "Drink water frequently even before you start feeling thirsty.",
    tokens: ["Drink", "water", "frequently", "even", "before", "you", "start", "feeling", "thirsty", "."],
    correctOrder: ["Drink", "water", "frequently", "even", "before", "you", "start", "feeling", "thirsty", "."],
    explanation: "'Drink water frequently even before...' provides a crucial hydration rule."
  },
  {
    id: "a2_u13_l184_a10",
    type: "dialogue_completion",
    prompt: "Complete the hiking trail interaction:\nHiker: 'How much further is it to the waterfall?'\nReturning Hiker: '________________________'",
    sourceSentence: "How much further is it to the waterfall?",
    targetSentence: "It's about a twenty-minute walk down this trail, and the view is spectacular!",
    options: [
      { id: "o1", text: "It's about a twenty-minute walk down this trail, and the view is spectacular!", isCorrect: true },
      { id: "o2", text: "Waterfalls do not exist on maps.", isCorrect: false },
      { id: "o3", text: "I deleted the trail twenty minutes ago.", isCorrect: false }
    ],
    correctAnswer: "It's about a twenty-minute walk down this trail, and the view is spectacular!",
    explanation: "'It's about a twenty-minute walk down this trail...' provides a warm, accurate distance estimate."
  }
];

// =========================================================================
// LESSON 185: Food Ingredients, Grocery Shopping & Farmer Markets
// Grammar: Quantifiers (a lot of, much, many, a few, a little, plenty of)
// =========================================================================
const l185_practice: Exercise[] = [
  {
    id: "a2_u13_l185_p11",
    type: "reading",
    prompt: "Read the farmers' market guide and answer the question:\n\"Weekend Farmers' Market: Every Saturday morning, local farmers set up stalls in the town square offering fresh, seasonal produce. You can find a wide variety of organic vegetables, including heirloom tomatoes, crisp spinach, and bell peppers. There are plenty of artisanal cheeses, a few specialty honey vendors, and a little freshly baked sourdough bread available if you arrive before ten in the morning.\"\nWhat should you do if you want freshly baked sourdough bread?",
    sourceSentence: "What should you do if you want freshly baked sourdough bread?",
    targetSentence: "Arrive at the market before ten in the morning.",
    options: [
      { id: "o1", text: "Arrive at the market before ten in the morning.", isCorrect: true },
      { id: "o2", text: "Visit the market on Sunday midnight.", isCorrect: false },
      { id: "o3", text: "Order bread from an overseas airport.", isCorrect: false },
      { id: "o4", text: "Buy frozen pizza from a supermarket.", isCorrect: false }
    ],
    correctAnswer: "Arrive at the market before ten in the morning.",
    explanation: "The text specifies: '...and a little freshly baked sourdough bread available if you arrive before ten in the morning.'"
  },
  {
    id: "a2_u13_l185_p12",
    type: "speaking",
    prompt: "Speak clearly and ask a market stallholder about fresh produce using quantifiers:",
    sourceSentence: "Good morning! Could I please have a kilo of ripe tomatoes, a few fresh lemons, and a little fresh basil?",
    targetSentence: "Good morning! Could I please have a kilo of ripe tomatoes, a few fresh lemons, and a little fresh basil?",
    audioText: "Good morning! Could I please have a kilo of ripe tomatoes, a few fresh lemons, and a little fresh basil?",
    explanation: "Practice natural quantifiers: 'a few lemons' (countable) and 'a little fresh basil' (uncountable)."
  },
  {
    id: "a2_u13_l185_p13",
    type: "match_pairs",
    prompt: "Match the food quantifiers with their appropriate noun categories:",
    options: [
      { id: "m1", text: "a few" },
      { id: "m1_m", text: "countable nouns (apples, eggs, onions)" },
      { id: "m2", text: "a little" },
      { id: "m2_m", text: "uncountable nouns (olive oil, salt, butter)" },
      { id: "m3", text: "plenty of / a lot of" },
      { id: "m3_m", text: "both countable and uncountable nouns (fresh herbs, milk)" },
      { id: "m4", text: "a pinch of" },
      { id: "m4_m", text: "tiny quantity of seasoning (black pepper, paprika)" }
    ]
  },
  {
    id: "a2_u13_l185_p14",
    type: "mediation",
    prompt: "Mediate this shopping list request into English: 'सब्जी मंडी से आधा किलो मशरूम और थोड़ा सा ताजा धनिया ले आना।' Choose the best translation.",
    sourceSentence: "सब्जी मंडी से आधा किलो मशरूम और थोड़ा सा ताजा धनिया ले आना।",
    targetSentence: "Please pick up half a kilo of mushrooms and a little fresh coriander from the vegetable market.",
    options: [
      { id: "o1", text: "Please pick up half a kilo of mushrooms and a little fresh coriander from the vegetable market.", isCorrect: true },
      { id: "o2", text: "Mushroom was deleted in market yesterday.", isCorrect: false },
      { id: "o3", text: "Buy many coriander and zero mushrooms.", isCorrect: false }
    ],
    correctAnswer: "Please pick up half a kilo of mushrooms and a little fresh coriander from the vegetable market.",
    explanation: "'half a kilo of mushrooms and a little fresh coriander' accurately captures weights and quantifiers."
  },
  {
    id: "a2_u13_l185_p15",
    type: "error_correction",
    prompt: "Identify and correct the quantifier error with uncountable food nouns:",
    sourceSentence: "We only have a few milk left in the refrigerator.",
    targetSentence: "We only have a little milk left in the refrigerator.",
    options: [
      { id: "o1", text: "We only have a little milk left in the refrigerator.", isCorrect: true },
      { id: "o2", text: "We only have many milk left in refrigerator.", isCorrect: false },
      { id: "o3", text: "We only have few milks in refrigerator.", isCorrect: false }
    ],
    correctAnswer: "We only have a little milk left in the refrigerator.",
    explanation: "Milk is uncountable, so it requires 'a little', not 'a few'."
  },
  {
    id: "a2_u13_l185_p16",
    type: "listening",
    prompt: "Listen to the grocery shopper and identify the total order:",
    audioText: "Hi there! I'd like two dozen free-range eggs, three heads of garlic, a jar of organic honey, and a small bunch of mint, please.",
    targetSentence: "2 dozen eggs, 3 heads of garlic, 1 jar of organic honey, and 1 bunch of mint.",
    options: [
      { id: "o1", text: "2 dozen eggs, 3 heads of garlic, 1 jar of organic honey, and 1 bunch of mint.", isCorrect: true },
      { id: "o2", text: "Ten loaves of bread and five kilograms of beef.", isCorrect: false },
      { id: "o3", text: "Two cans of soda and a frozen pizza.", isCorrect: false },
      { id: "o4", text: "One chocolate bar and a bottle of shampoo.", isCorrect: false }
    ],
    correctAnswer: "2 dozen eggs, 3 heads of garlic, 1 jar of organic honey, and 1 bunch of mint.",
    explanation: "The customer specifies 2 dozen eggs, 3 heads of garlic, a jar of organic honey, and a bunch of mint."
  },
  {
    id: "a2_u13_l185_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing the fresh ingredients you regularly purchase for cooking:",
    targetSentence: "I usually buy plenty of fresh vegetables like bell peppers, zucchini, and spinach every weekend. I also make sure we always have a little extra virgin olive oil and a few cloves of garlic at home.",
    audioText: "I usually buy plenty of fresh vegetables like bell peppers, zucchini, and spinach every weekend. I also make sure we always have a little extra virgin olive oil and a few cloves of garlic at home."
  },
  {
    id: "a2_u13_l185_p18",
    type: "dialogue_completion",
    prompt: "Complete the market transaction dialogue:\nVendor: 'That comes to twelve euros fifty in total. Would you like a paper bag?'\nCustomer: '________________________'",
    sourceSentence: "That comes to twelve euros fifty in total. Would you like a paper bag?",
    targetSentence: "No thank you, I brought my own reusable cloth tote bag.",
    options: [
      { id: "o1", text: "No thank you, I brought my own reusable cloth tote bag.", isCorrect: true },
      { id: "o2", text: "Paper bags are made of electricity.", isCorrect: false },
      { id: "o3", text: "Twelve euros was cancelled last week.", isCorrect: false }
    ],
    correctAnswer: "No thank you, I brought my own reusable cloth tote bag.",
    explanation: "'No thank you, I brought my own reusable cloth tote bag' is polite, sustainable, and natural."
  },
  {
    id: "a2_u13_l185_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a quantifier question about ingredients:",
    sourceSentence: "How much olive oil do we need for this dressing?",
    targetSentence: "How much olive oil do we need for this dressing?",
    tokens: ["How", "much", "olive", "oil", "do", "we", "need", "for", "this", "dressing", "?"],
    correctOrder: ["How", "much", "olive", "oil", "do", "we", "need", "for", "this", "dressing", "?"],
    explanation: "'How much' is used for uncountable nouns like 'olive oil'."
  },
  {
    id: "a2_u13_l185_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct food quantifier:",
    sourceSentence: "There are [blank] (many / much) types of artisanal cheese to taste at the market.",
    targetSentence: "There are many types of artisanal cheese to taste at the market.",
    text: "There are [blank] types of artisanal cheese to taste at the market.",
    options: [
      { id: "o1", text: "many", isCorrect: true },
      { id: "o2", text: "much", isCorrect: false },
      { id: "o3", text: "a little", isCorrect: false },
      { id: "o4", text: "any", isCorrect: false }
    ],
    correctAnswer: "many",
    explanation: "'Types' is a countable plural noun, requiring 'many'."
  },
  {
    id: "a2_u13_l185_p21",
    type: "translation",
    prompt: "Translate to English: 'क्या हमारे पास फ्रिज में पर्याप्त मक्खन है या मुझे और खरीदना चाहिए?'",
    sourceSentence: "क्या हमारे पास फ्रिज में पर्याप्त मक्खन है या मुझे और खरीदना चाहिए?",
    targetSentence: "Do we have enough butter in the fridge or should I buy more?",
    explanation: "'Do we have enough butter in the fridge or should I buy some more?'"
  },
  {
    id: "a2_u13_l185_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Describe the atmosphere of a bustling outdoor food market.",
    sourceSentence: "The farmers' market is bustling with colorful stalls displaying fresh seasonal fruits, aromatic herbs, and warm freshly baked pastries.",
    targetSentence: "The farmers' market is bustling with colorful stalls displaying fresh seasonal fruits, aromatic herbs, and warm freshly baked pastries.",
    audioText: "The farmers' market is bustling with colorful stalls displaying fresh seasonal fruits, aromatic herbs, and warm freshly baked pastries.",
    explanation: "Practice descriptive sensory vocabulary ('bustling with colorful stalls', 'aromatic herbs', 'warm freshly baked pastries')."
  }
];

const l185_review: Exercise[] = [
  {
    id: "a2_u13_l185_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 8 - Quantifiers & Food): Which question is grammatically correct when shopping for eggs?",
    options: [
      { id: "o1", text: "How many organic eggs would you like to buy?", isCorrect: true },
      { id: "o2", text: "How much organic eggs would you like to buy?", isCorrect: false },
      { id: "o3", text: "How many butter do you want today?", isCorrect: false },
      { id: "o4", text: "How much apples are in the basket?", isCorrect: false }
    ],
    correctAnswer: "How many organic eggs would you like to buy?",
    explanation: "'How many' is used with countable nouns like 'eggs'."
  },
  {
    id: "a2_u13_l185_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'We need to add [blank] (a pinch / a slice) of salt to enhance the soup flavor.'",
    sourceSentence: "We need to add [blank] of salt to enhance the soup flavor.",
    targetSentence: "We need to add a pinch of salt to enhance the soup flavor.",
    text: "We need to add [blank] of salt to enhance the soup flavor.",
    options: [
      { id: "o1", text: "a pinch", isCorrect: true },
      { id: "o2", text: "a slice", isCorrect: false },
      { id: "o3", text: "a loaf", isCorrect: false },
      { id: "o4", text: "a bunch", isCorrect: false }
    ],
    correctAnswer: "a pinch",
    explanation: "Salt is measured as 'a pinch of salt'."
  },
  {
    id: "a2_u13_l185_r9",
    type: "error_correction",
    prompt: "Correct the quantifier error in this grocery list:",
    sourceSentence: "Please buy a few rice and two kilos of potatoes.",
    targetSentence: "Please buy a little rice and two kilos of potatoes.",
    options: [
      { id: "o1", text: "Please buy a little rice and two kilos of potatoes.", isCorrect: true },
      { id: "o2", text: "Please buy many rice and two potato.", isCorrect: false },
      { id: "o3", text: "Please buy a few rices and potatoes.", isCorrect: false }
    ],
    correctAnswer: "Please buy a little rice and two kilos of potatoes.",
    explanation: "Rice is uncountable, so 'a little rice' or 'a bag of rice' is correct."
  },
  {
    id: "a2_u13_l185_r10",
    type: "translation",
    prompt: "Translate to English: 'यहाँ स्थानीय किसानों द्वारा उगाए गए ताजे फल मिलते हैं।' (Passive / Relative clause)",
    sourceSentence: "यहाँ स्थानीय किसानों द्वारा उगाए गए ताजे फल मिलते हैं।",
    targetSentence: "Here you can find fresh fruits grown by local farmers.",
    explanation: "'Here you can find fresh fruits that are grown by local farmers.'"
  }
];

const l185_assessment: Exercise[] = [
  {
    id: "a2_u13_l185_a5",
    type: "multiple_choice",
    prompt: "Select the sentence that correctly uses both countable and uncountable quantifiers:",
    options: [
      { id: "o1", text: "We need a few ripe avocados and a little olive oil to make this salad.", isCorrect: true },
      { id: "o2", text: "We need a little ripe avocados and a few olive oil.", isCorrect: false },
      { id: "o3", text: "We need much avocados and many olive oils.", isCorrect: false },
      { id: "o4", text: "We need few olive oil and little avocados.", isCorrect: false }
    ],
    correctAnswer: "We need a few ripe avocados and a little olive oil to make this salad.",
    explanation: "'a few' for countable 'avocados'; 'a little' for uncountable 'olive oil'."
  },
  {
    id: "a2_u13_l185_a6",
    type: "fill_blank",
    prompt: "Complete the customer request:",
    sourceSentence: "Could you slice this cheese thinly? I only need [blank] (a few / a little) grams for the sandwich.",
    targetSentence: "Could you slice this cheese thinly? I only need a few grams for the sandwich.",
    text: "Could you slice this cheese thinly? I only need [blank] grams for the sandwich.",
    options: [
      { id: "o1", text: "a few", isCorrect: true },
      { id: "o2", text: "a little", isCorrect: false },
      { id: "o3", text: "much", isCorrect: false },
      { id: "o4", text: "plenty", isCorrect: false }
    ],
    correctAnswer: "a few",
    explanation: "'Grams' is a countable plural unit of measurement, taking 'a few'."
  },
  {
    id: "a2_u13_l185_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences ordering fresh groceries at a local market stall.",
    sourceSentence: "Hello! I'd like half a dozen organic oranges and a small basket of fresh strawberries. Could you also tell me how much the local goat cheese costs?",
    targetSentence: "Hello! I'd like half a dozen organic oranges and a small basket of fresh strawberries. Could you also tell me how much the local goat cheese costs?",
    audioText: "Hello! I'd like half a dozen organic oranges and a small basket of fresh strawberries. Could you also tell me how much the local goat cheese costs?",
    explanation: "Demonstrate polite market phrasing ('I'd like...', 'Could you also tell me how much...')."
  },
  {
    id: "a2_u13_l185_a8",
    type: "mediation",
    prompt: "Translate this organic produce label for a customer: 'यह शहद 100% शुद्ध और जैविक है, जिसे बिना किसी रासायनिक प्रसंस्करण के पैक किया गया है।' Provide the best translation.",
    sourceSentence: "यह शहद 100% शुद्ध और जैविक है, जिसे बिना किसी रासायनिक प्रसंस्करण के पैक किया गया है।",
    targetSentence: "This honey is 100% pure and organic, packaged without any chemical processing.",
    options: [
      { id: "o1", text: "This honey is 100% pure and organic, packaged without any chemical processing.", isCorrect: true },
      { id: "o2", text: "Honey has chemicals and was cancelled yesterday.", isCorrect: false },
      { id: "o3", text: "Packaged honey is made of sugar only.", isCorrect: false }
    ],
    correctAnswer: "This honey is 100% pure and organic, packaged without any chemical processing.",
    explanation: "'This honey is 100% pure and organic, packaged without any chemical processing' accurately translates the label."
  },
  {
    id: "a2_u13_l185_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a market vendor recommendation:",
    sourceSentence: "These sweet peaches were picked fresh from the orchard this morning.",
    targetSentence: "These sweet peaches were picked fresh from the orchard this morning.",
    tokens: ["These", "sweet", "peaches", "were", "picked", "fresh", "from", "the", "orchard", "this", "morning", "."],
    correctOrder: ["These", "sweet", "peaches", "were", "picked", "fresh", "from", "the", "orchard", "this", "morning", "."],
    explanation: "'These sweet peaches were picked fresh from the orchard this morning' is a natural passive sales pitch."
  },
  {
    id: "a2_u13_l185_a10",
    type: "dialogue_completion",
    prompt: "Complete the grocery market exchange:\nShopper: 'Are these avocados ripe enough to eat today?'\nVendor: '________________________'",
    sourceSentence: "Are these avocados ripe enough to eat today?",
    targetSentence: "Yes, they are perfectly soft and ready to enjoy right away!",
    options: [
      { id: "o1", text: "Yes, they are perfectly soft and ready to enjoy right away!", isCorrect: true },
      { id: "o2", text: "Avocados cannot be eaten by humans.", isCorrect: false },
      { id: "o3", text: "They were eaten ten years ago.", isCorrect: false }
    ],
    correctAnswer: "Yes, they are perfectly soft and ready to enjoy right away!",
    explanation: "'Yes, they are perfectly soft and ready to enjoy right away!' directly answers the ripeness query."
  }
];

// Enrich Lessons 181 to 185
enrichUnit13LessonData('lesson_a2_13_181', LESSON_A2_13_181_DATA, l181_practice, l181_review, l181_assessment);
enrichUnit13LessonData('lesson_a2_13_182', LESSON_A2_13_182_DATA, l182_practice, l182_review, l182_assessment);
enrichUnit13LessonData('lesson_a2_13_183', LESSON_A2_13_183_DATA, l183_practice, l183_review, l183_assessment);
enrichUnit13LessonData('lesson_a2_13_184', LESSON_A2_13_184_DATA, l184_practice, l184_review, l184_assessment);
enrichUnit13LessonData('lesson_a2_13_185', LESSON_A2_13_185_DATA, l185_practice, l185_review, l185_assessment);
