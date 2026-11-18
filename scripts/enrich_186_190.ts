import { Exercise } from '../src/types';
import { LESSON_A2_13_186_DATA } from '../src/data/lessons/lesson_a2_13_186';
import { LESSON_A2_13_187_DATA } from '../src/data/lessons/lesson_a2_13_187';
import { LESSON_A2_13_188_DATA } from '../src/data/lessons/lesson_a2_13_188';
import { LESSON_A2_13_189_DATA } from '../src/data/lessons/lesson_a2_13_189';
import { LESSON_A2_13_190_DATA } from '../src/data/lessons/lesson_a2_13_190';
import { enrichUnit13LessonData } from './enrich_unit13_helper';

// =========================================================================
// LESSON 186: Music, Concerts, Festivals & Live Performances
// Grammar: Question Tags (aren't you, didn't they, isn't it, haven't you)
// =========================================================================
const l186_practice: Exercise[] = [
  {
    id: "a2_u13_l186_p11",
    type: "reading",
    prompt: "Read the music festival review and answer the question:\n\"Review: The Summer Jazz Festival at Riverside Amphitheater was an unforgettable experience. Over thirty international artists performed across four outdoor stages. The acoustics were phenomenal, especially during the acoustic guitar set on Saturday night. The crowd was incredibly lively and respectful. You're planning to buy tickets for next year's event, aren't you?\"\nWhy was Saturday night's performance particularly praised?",
    sourceSentence: "Why was Saturday night's performance particularly praised?",
    targetSentence: "The acoustics were phenomenal during the acoustic guitar set.",
    options: [
      { id: "o1", text: "The acoustics were phenomenal during the acoustic guitar set.", isCorrect: true },
      { id: "o2", text: "The concert was cancelled due to heavy rain.", isCorrect: false },
      { id: "o3", text: "Tickets were completely free for all thirty stages.", isCorrect: false },
      { id: "o4", text: "No music was played at the festival.", isCorrect: false }
    ],
    correctAnswer: "The acoustics were phenomenal during the acoustic guitar set.",
    explanation: "The review specifically notes: 'The acoustics were phenomenal, especially during the acoustic guitar set on Saturday night.'"
  },
  {
    id: "a2_u13_l186_p12",
    type: "speaking",
    prompt: "Speak clearly and practice using a question tag to confirm concert plans:",
    sourceSentence: "You love indie rock music and you bought tickets for the festival, didn't you?",
    targetSentence: "You love indie rock music and you bought tickets for the festival, didn't you?",
    audioText: "You love indie rock music and you bought tickets for the festival, didn't you?",
    explanation: "Practice natural falling/rising intonation on the question tag 'didn't you?'."
  },
  {
    id: "a2_u13_l186_p13",
    type: "match_pairs",
    prompt: "Match the statement with its correct question tag:",
    options: [
      { id: "m1", text: "The concert starts at eight o'clock," },
      { id: "m1_m", text: "doesn't it?" },
      { id: "m2", text: "You haven't heard this symphony before," },
      { id: "m2_m", text: "have you?" },
      { id: "m3", text: "They played their greatest hits live," },
      { id: "m3_m", text: "didn't they?" },
      { id: "m4", text: "She is a talented pianist," },
      { id: "m4_m", text: "isn't she?" }
    ]
  },
  {
    id: "a2_u13_l186_p14",
    type: "mediation",
    prompt: "Mediate this concert invitation into English: 'तुम कल रात के रॉक कॉन्सर्ट में जा रहे हो, है ना?' Choose the best translation.",
    sourceSentence: "तुम कल रात के रॉक कॉन्सर्ट में जा रहे हो, है ना?",
    targetSentence: "You're going to the rock concert tomorrow night, aren't you?",
    options: [
      { id: "o1", text: "You're going to the rock concert tomorrow night, aren't you?", isCorrect: true },
      { id: "o2", text: "You went to rock concert yesterday, did you?", isCorrect: false },
      { id: "o3", text: "Rock concert deleted your ticket, isn't it?", isCorrect: false }
    ],
    correctAnswer: "You're going to the rock concert tomorrow night, aren't you?",
    explanation: "Positive statement 'You are going...' takes negative tag 'aren't you?'."
  },
  {
    id: "a2_u13_l186_p15",
    type: "error_correction",
    prompt: "Identify and correct the question tag error:",
    sourceSentence: "The lead singer has a great voice, isn't it?",
    targetSentence: "The lead singer has a great voice, doesn't she?",
    options: [
      { id: "o1", text: "The lead singer has a great voice, doesn't she?", isCorrect: true },
      { id: "o2", text: "The lead singer has voice, is it?", isCorrect: false },
      { id: "o3", text: "The lead singer have voice, don't they?", isCorrect: false }
    ],
    correctAnswer: "The lead singer has a great voice, doesn't she?",
    explanation: "Present simple verb 'has' requires auxiliary 'doesn't he/she', not 'isn't it'."
  },
  {
    id: "a2_u13_l186_p16",
    type: "listening",
    prompt: "Listen to the festival announcement and identify the stage location:",
    audioText: "Attention music lovers! The headline band will take the Main Stage at nine sharp. If you prefer acoustic folk, head over to the Pine Grove Stage behind the food court.",
    targetSentence: "The headline band is on the Main Stage at 9:00, and acoustic folk is at the Pine Grove Stage.",
    options: [
      { id: "o1", text: "The headline band is on the Main Stage at 9:00, and acoustic folk is at the Pine Grove Stage.", isCorrect: true },
      { id: "o2", text: "All concerts are cancelled due to sound issues.", isCorrect: false },
      { id: "o3", text: "The food court is closed permanently.", isCorrect: false },
      { id: "o4", text: "Performances are held in the parking lot only.", isCorrect: false }
    ],
    correctAnswer: "The headline band is on the Main Stage at 9:00, and acoustic folk is at the Pine Grove Stage.",
    explanation: "The announcement directs headline fans to the Main Stage at 9:00 and acoustic folk to Pine Grove Stage."
  },
  {
    id: "a2_u13_l186_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your favorite musical artist or a memorable concert:",
    targetSentence: "I attended an open-air classical symphony concert last summer, and the atmosphere under the stars was truly magical. The orchestra played Beethoven's Ninth with incredible passion.",
    audioText: "I attended an open-air classical symphony concert last summer, and the atmosphere under the stars was truly magical. The orchestra played Beethoven's Ninth with incredible passion."
  },
  {
    id: "a2_u13_l186_p18",
    type: "dialogue_completion",
    prompt: "Complete the concert chat with a question tag:\nFan A: 'That guitar solo gave me goosebumps!'\nFan B: '________________________'",
    sourceSentence: "That guitar solo gave me goosebumps!",
    targetSentence: "It was absolutely incredible, wasn't it?",
    options: [
      { id: "o1", text: "It was absolutely incredible, wasn't it?", isCorrect: true },
      { id: "o2", text: "Guitar solos were invented in 2024.", isCorrect: false },
      { id: "o3", text: "I dislike all forms of sound.", isCorrect: false }
    ],
    correctAnswer: "It was absolutely incredible, wasn't it?",
    explanation: "'It was absolutely incredible, wasn't it?' uses the correct past tag to build conversational agreement."
  },
  {
    id: "a2_u13_l186_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence with a question tag:",
    sourceSentence: "We don't need to print our concert tickets, do we?",
    targetSentence: "We don't need to print our concert tickets, do we?",
    tokens: ["We", "don't", "need", "to", "print", "our", "concert", "tickets", ",", "do", "we", "?"],
    correctOrder: ["We", "don't", "need", "to", "print", "our", "concert", "tickets", ",", "do", "we", "?"],
    explanation: "Negative statement 'don't need' takes positive tag 'do we?'."
  },
  {
    id: "a2_u13_l186_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate question tag:",
    sourceSentence: "The musicians arrived on time, [blank] (didn't they / aren't they)?",
    targetSentence: "The musicians arrived on time, didn't they?",
    text: "The musicians arrived on time, [blank]?",
    options: [
      { id: "o1", text: "didn't they", isCorrect: true },
      { id: "o2", text: "aren't they", isCorrect: false },
      { id: "o3", text: "don't they", isCorrect: false },
      { id: "o4", text: "won't they", isCorrect: false }
    ],
    correctAnswer: "didn't they",
    explanation: "Past simple 'arrived' takes past tag 'didn't they'."
  },
  {
    id: "a2_u13_l186_p21",
    type: "translation",
    prompt: "Translate to English: 'यह गीत बहुत प्रसिद्ध है, है ना?'",
    sourceSentence: "यह गीत बहुत प्रसिद्ध है, है ना?",
    targetSentence: "This song is very famous, isn't it?",
    explanation: "'This song is very famous, isn't it?'"
  },
  {
    id: "a2_u13_l186_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Review a live musical performance.",
    sourceSentence: "The energy of the live crowd combined with outstanding sound quality made the amphitheater concert an unforgettable evening.",
    targetSentence: "The energy of the live crowd combined with outstanding sound quality made the amphitheater concert an unforgettable evening.",
    audioText: "The energy of the live crowd combined with outstanding sound quality made the amphitheater concert an unforgettable evening.",
    explanation: "Practice rich performance vocabulary ('energy of the live crowd', 'outstanding sound quality', 'unforgettable evening')."
  }
];

const l186_review: Exercise[] = [
  {
    id: "a2_u13_l186_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 9 - Present Perfect vs Past Simple): Which sentence correctly combines past experience with present enthusiasm?",
    options: [
      { id: "o1", text: "I have seen them perform live three times, and their show last night in London was their best yet.", isCorrect: true },
      { id: "o2", text: "I saw them perform three times in my life and I have liked yesterday show.", isCorrect: false },
      { id: "o3", text: "I have seen them yesterday night in London.", isCorrect: false },
      { id: "o4", text: "I am seeing them three times in past.", isCorrect: false }
    ],
    correctAnswer: "I have seen them perform live three times, and their show last night in London was their best yet.",
    explanation: "'have seen' for life experience; 'was' for specific past event 'last night'."
  },
  {
    id: "a2_u13_l186_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'You haven't lost your festival wristband, [blank] (have you / did you)?'",
    sourceSentence: "You haven't lost your festival wristband, [blank]?",
    targetSentence: "You haven't lost your festival wristband, have you?",
    text: "You haven't lost your festival wristband, [blank]?",
    options: [
      { id: "o1", text: "have you", isCorrect: true },
      { id: "o2", text: "did you", isCorrect: false },
      { id: "o3", text: "haven't you", isCorrect: false },
      { id: "o4", text: "do you", isCorrect: false }
    ],
    correctAnswer: "have you",
    explanation: "Negative Present Perfect 'haven't lost' takes positive tag 'have you?'."
  },
  {
    id: "a2_u13_l186_r9",
    type: "error_correction",
    prompt: "Correct the question tag in this sentence:",
    sourceSentence: "She can play the violin beautifully, can't it?",
    targetSentence: "She can play the violin beautifully, can't she?",
    options: [
      { id: "o1", text: "She can play the violin beautifully, can't she?", isCorrect: true },
      { id: "o2", text: "She can play violin, isn't she?", isCorrect: false },
      { id: "o3", text: "She can play violin, doesn't she?", isCorrect: false }
    ],
    correctAnswer: "She can play the violin beautifully, can't she?",
    explanation: "Modal 'can' with subject 'she' requires tag 'can't she?'."
  },
  {
    id: "a2_u13_l186_r10",
    type: "translation",
    prompt: "Translate to English: 'कॉन्सर्ट हॉल में उत्कृष्ट ध्वनिकी है, है ना?'",
    sourceSentence: "कॉन्सर्ट हॉल में उत्कृष्ट ध्वनिकी है, है ना?",
    targetSentence: "The concert hall has excellent acoustics, doesn't it?",
    explanation: "'The concert hall has excellent acoustics, doesn't it?'"
  }
];

const l186_assessment: Exercise[] = [
  {
    id: "a2_u13_l186_a5",
    type: "multiple_choice",
    prompt: "Which question tag correctly completes this social check: 'We're allowed to bring reusable water bottles inside, _______?'",
    options: [
      { id: "o1", text: "aren't we?", isCorrect: true },
      { id: "o2", text: "are we?", isCorrect: false },
      { id: "o3", text: "don't we?", isCorrect: false },
      { id: "o4", text: "isn't it?", isCorrect: false }
    ],
    correctAnswer: "aren't we?",
    explanation: "'We are allowed...' takes negative tag 'aren't we?'."
  },
  {
    id: "a2_u13_l186_a6",
    type: "fill_blank",
    prompt: "Complete the sentence with the correct tag:",
    sourceSentence: "There were thousands of cheering fans in the arena, [blank] (weren't there / weren't they)?",
    targetSentence: "There were thousands of cheering fans in the arena, weren't there?",
    text: "There were thousands of cheering fans in the arena, [blank]?",
    options: [
      { id: "o1", text: "weren't there", isCorrect: true },
      { id: "o2", text: "weren't they", isCorrect: false },
      { id: "o3", text: "didn't they", isCorrect: false },
      { id: "o4", text: "isn't there", isCorrect: false }
    ],
    correctAnswer: "weren't there",
    explanation: "'There were...' takes the existential tag 'weren't there?'."
  },
  {
    id: "a2_u13_l186_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences confirming festival logistics and inviting a friend using a question tag.",
    sourceSentence: "You haven't bought your festival wristband yet, have you? Let's purchase our weekend passes together online before the early-bird discount ends.",
    targetSentence: "You haven't bought your festival wristband yet, have you? Let's purchase our weekend passes together online before the early-bird discount ends.",
    audioText: "You haven't bought your festival wristband yet, have you? Let's purchase our weekend passes together online before the early-bird discount ends.",
    explanation: "Demonstrate accurate question tag usage ('have you?') and persuasive natural invitation."
  },
  {
    id: "a2_u13_l186_a8",
    type: "mediation",
    prompt: "Mediate this event entry notice: 'प्रवेश द्वार पर सभी बैगों की सुरक्षा जांच की जाएगी, इसलिए भारी सामान साथ न लाएं।' Provide the best translation.",
    sourceSentence: "प्रवेश द्वार पर सभी बैगों की सुरक्षा जांच की जाएगी, इसलिए भारी सामान साथ न लाएं।",
    targetSentence: "All bags will be checked at security checkpoints at the entrance, so please avoid bringing bulky luggage.",
    options: [
      { id: "o1", text: "All bags will be checked at security checkpoints at the entrance, so please avoid bringing bulky luggage.", isCorrect: true },
      { id: "o2", text: "Bags were checked yesterday and deleted.", isCorrect: false },
      { id: "o3", text: "Bring heavy luggage to the concert stage.", isCorrect: false }
    ],
    correctAnswer: "All bags will be checked at security checkpoints at the entrance, so please avoid bringing bulky luggage.",
    explanation: "'All bags will be checked at security checkpoints... so please avoid bringing bulky luggage' communicates the advisory clearly."
  },
  {
    id: "a2_u13_l186_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence about a musical rehearsal:",
    sourceSentence: "The symphony orchestra rehearsed for several weeks before the opening gala.",
    targetSentence: "The symphony orchestra rehearsed for several weeks before the opening gala.",
    tokens: ["The", "symphony", "orchestra", "rehearsed", "for", "several", "weeks", "before", "the", "opening", "gala", "."],
    correctOrder: ["The", "symphony", "orchestra", "rehearsed", "for", "several", "weeks", "before", "the", "opening", "gala", "."],
    explanation: "'The symphony orchestra rehearsed for several weeks before the opening gala' is syntactically well-formed."
  },
  {
    id: "a2_u13_l186_a10",
    type: "dialogue_completion",
    prompt: "Complete the concert conversation:\nFriend: 'That encore performance was breathtaking!'\nYou: '________________________'",
    sourceSentence: "That encore performance was breathtaking!",
    targetSentence: "I know! The standing ovation lasted for over five minutes, didn't it?",
    options: [
      { id: "o1", text: "I know! The standing ovation lasted for over five minutes, didn't it?", isCorrect: true },
      { id: "o2", text: "No, encores are illegal in theaters.", isCorrect: false },
      { id: "o3", text: "I deleted the applause yesterday.", isCorrect: false }
    ],
    correctAnswer: "I know! The standing ovation lasted for over five minutes, didn't it?",
    explanation: "'The standing ovation lasted for over five minutes, didn't it?' uses the question tag to share enthusiasm."
  }
];

// =========================================================================
// LESSON 187: Visual Arts, Museums, Exhibitions & Cultural Galleries
// Grammar: Passive Voice in Art Descriptions (is painted by, was sculpted by, are exhibited)
// =========================================================================
const l187_practice: Exercise[] = [
  {
    id: "a2_u13_l187_p11",
    type: "reading",
    prompt: "Read the art museum brochure and answer the question:\n\"Exhibition Overview: The Modern Art Wing showcases masterpieces created during the early twentieth century. This renowned oil painting was completed by Claude Monet in 1919 and has been restored to preserve its delicate brushwork. Photography without flash is permitted throughout the galleries, but touching the sculptures is strictly prohibited.\"\nWhat rule applies to taking photos in the museum galleries?",
    sourceSentence: "What rule applies to taking photos in the museum galleries?",
    targetSentence: "Photography without flash is permitted throughout the galleries.",
    options: [
      { id: "o1", text: "Photography without flash is permitted throughout the galleries.", isCorrect: true },
      { id: "o2", text: "All visitors must take photos with bright studio flashlights.", isCorrect: false },
      { id: "o3", text: "Cameras are confiscated at the entrance.", isCorrect: false },
      { id: "o4", text: "Visitors are required to paint their own portraits.", isCorrect: false }
    ],
    correctAnswer: "Photography without flash is permitted throughout the galleries.",
    explanation: "The text states: 'Photography without flash is permitted throughout the galleries, but touching the sculptures is strictly prohibited.'"
  },
  {
    id: "a2_u13_l187_p12",
    type: "speaking",
    prompt: "Speak clearly and describe a famous sculpture using passive voice:",
    sourceSentence: "This marble masterpiece was sculpted by Michelangelo in the sixteenth century and is exhibited in Florence.",
    targetSentence: "This marble masterpiece was sculpted by Michelangelo in the sixteenth century and is exhibited in Florence.",
    audioText: "This marble masterpiece was sculpted by Michelangelo in the sixteenth century and is exhibited in Florence.",
    explanation: "Practice passive structures: 'was sculpted by Michelangelo' and 'is exhibited in Florence'."
  },
  {
    id: "a2_u13_l187_p13",
    type: "match_pairs",
    prompt: "Match art mediums with their corresponding descriptions:",
    options: [
      { id: "m1", text: "oil painting" },
      { id: "m1_m", text: "pigments bound with drying oil applied on canvas" },
      { id: "m2", text: "marble sculpture" },
      { id: "m2_m", text: "three-dimensional figures carved from natural stone" },
      { id: "m3", text: "watercolor sketch" },
      { id: "m3_m", text: "translucent water-soluble paint on textured paper" },
      { id: "m4", text: "ceramic pottery" },
      { id: "m4_m", text: "shaped clay fired in a high-temperature kiln" }
    ]
  },
  {
    id: "a2_u13_l187_p14",
    type: "mediation",
    prompt: "Mediate this museum audio guide sentence into English: 'यह प्रसिद्ध पेंटिंग सत्रहवीं शताब्दी में बनाई गई थी और इसे दुनिया भर में सराहा जाता है।' Choose the best translation.",
    sourceSentence: "यह प्रसिद्ध पेंटिंग सत्रहवीं शताब्दी में बनाई गई थी और इसे दुनिया भर में सराहा जाता है।",
    targetSentence: "This famous painting was created in the seventeenth century and is admired worldwide.",
    options: [
      { id: "o1", text: "This famous painting was created in the seventeenth century and is admired worldwide.", isCorrect: true },
      { id: "o2", text: "Painting created seventeenth century and admires people.", isCorrect: false },
      { id: "o3", text: "Painting was deleted in seventeenth century.", isCorrect: false }
    ],
    correctAnswer: "This famous painting was created in the seventeenth century and is admired worldwide.",
    explanation: "Passive voice: 'was created... is admired worldwide' correctly conveys the sentence."
  },
  {
    id: "a2_u13_l187_p15",
    type: "error_correction",
    prompt: "Identify and correct the passive voice error in this art description:",
    sourceSentence: "The mural was paint by a group of local artists last month.",
    targetSentence: "The mural was painted by a group of local artists last month.",
    options: [
      { id: "o1", text: "The mural was painted by a group of local artists last month.", isCorrect: true },
      { id: "o2", text: "The mural was painting by local artists.", isCorrect: false },
      { id: "o3", text: "The mural painted by group of artists last month.", isCorrect: false }
    ],
    correctAnswer: "The mural was painted by a group of local artists last month.",
    explanation: "Passive voice requires past participle 'painted' ('was painted')."
  },
  {
    id: "a2_u13_l187_p16",
    type: "listening",
    prompt: "Listen to the museum curator and identify the opening times for the special exhibit:",
    audioText: "Welcome to the National Portrait Gallery. The Renaissance exhibition on the second floor is open daily from ten in the morning until six in the evening. Guided tours are conducted every hour on the half hour.",
    targetSentence: "Open daily from 10:00 to 18:00, with guided tours every hour on the half hour.",
    options: [
      { id: "o1", text: "Open daily from 10:00 to 18:00, with guided tours every hour on the half hour.", isCorrect: true },
      { id: "o2", text: "Open only at midnight on Sundays.", isCorrect: false },
      { id: "o3", text: "Closed permanently for renovation.", isCorrect: false },
      { id: "o4", text: "Tours take place only once a month.", isCorrect: false }
    ],
    correctAnswer: "Open daily from 10:00 to 18:00, with guided tours every hour on the half hour.",
    explanation: "The curator states the gallery is open from 10:00 to 18:00 with tours every hour on the half hour."
  },
  {
    id: "a2_u13_l187_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your favorite art form or a museum you visited:",
    targetSentence: "I visited the Impressionist exhibition at the art museum last weekend. I was deeply impressed by how the artists used vibrant colors and natural light to capture everyday scenes.",
    audioText: "I visited the Impressionist exhibition at the art museum last weekend. I was deeply impressed by how the artists used vibrant colors and natural light to capture everyday scenes."
  },
  {
    id: "a2_u13_l187_p18",
    type: "dialogue_completion",
    prompt: "Complete the museum dialogue:\nVisitor: 'Excuse me, are audio guides included with the admission ticket?'\nInformation Desk: '________________________'",
    sourceSentence: "Excuse me, are audio guides included with the admission ticket?",
    targetSentence: "Yes, you can pick up an audio guide in your preferred language right next to the ticket counter.",
    options: [
      { id: "o1", text: "Yes, you can pick up an audio guide in your preferred language right next to the ticket counter.", isCorrect: true },
      { id: "o2", text: "No, audio guides only speak ancient Latin.", isCorrect: false },
      { id: "o3", text: "Museums do not have tickets.", isCorrect: false }
    ],
    correctAnswer: "Yes, you can pick up an audio guide in your preferred language right next to the ticket counter.",
    explanation: "'Yes, you can pick up an audio guide...' is a helpful, professional museum response."
  },
  {
    id: "a2_u13_l187_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a passive voice art description:",
    sourceSentence: "These ancient ceramic artifacts were discovered during an archaeological excavation.",
    targetSentence: "These ancient ceramic artifacts were discovered during an archaeological excavation.",
    tokens: ["These", "ancient", "ceramic", "artifacts", "were", "discovered", "during", "an", "archaeological", "excavation", "."],
    correctOrder: ["These", "ancient", "ceramic", "artifacts", "were", "discovered", "during", "an", "archaeological", "excavation", "."],
    explanation: "'were discovered during...' is a standard passive archaeological sentence."
  },
  {
    id: "a2_u13_l187_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the passive verb form:",
    sourceSentence: "Over one million visitors [blank] (are welcomed / were welcome) by the museum every year.",
    targetSentence: "Over one million visitors are welcomed by the museum every year.",
    text: "Over one million visitors [blank] by the museum every year.",
    options: [
      { id: "o1", text: "are welcomed", isCorrect: true },
      { id: "o2", text: "were welcome", isCorrect: false },
      { id: "o3", text: "is welcoming", isCorrect: false },
      { id: "o4", text: "welcomes", isCorrect: false }
    ],
    correctAnswer: "are welcomed",
    explanation: "Plural subject 'one million visitors' with annual present routine takes 'are welcomed'."
  },
  {
    id: "a2_u13_l187_p21",
    type: "translation",
    prompt: "Translate to English: 'इस कला दीर्घा में केवल मूल पेंटिंग प्रदर्शित की जाती हैं।'",
    sourceSentence: "इस कला दीर्घा में केवल मूल पेंटिंग प्रदर्शित की जाती हैं।",
    targetSentence: "Only original paintings are displayed in this art gallery.",
    explanation: "'Only original paintings are exhibited / displayed in this art gallery.'"
  },
  {
    id: "a2_u13_l187_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give an insightful critique of a gallery exhibition.",
    sourceSentence: "The contemporary exhibition combines multimedia installations with traditional canvas paintings, creating an immersive cultural experience for visitors.",
    targetSentence: "The contemporary exhibition combines multimedia installations with traditional canvas paintings, creating an immersive cultural experience for visitors.",
    audioText: "The contemporary exhibition combines multimedia installations with traditional canvas paintings, creating an immersive cultural experience for visitors.",
    explanation: "Practice sophisticated art analysis vocabulary ('multimedia installations', 'traditional canvas paintings', 'immersive cultural experience')."
  }
];

const l187_review: Exercise[] = [
  {
    id: "a2_u13_l187_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Passive Voice & Past Modals): Which sentence correctly transforms active into passive?\nActive: 'The architect designed the glass pyramid in 1989.'",
    options: [
      { id: "o1", text: "The glass pyramid was designed by the architect in 1989.", isCorrect: true },
      { id: "o2", text: "The glass pyramid has designed by the architect in 1989.", isCorrect: false },
      { id: "o3", text: "The glass pyramid is designed in 1989 by architect.", isCorrect: false },
      { id: "o4", text: "The glass pyramid was designing by architect.", isCorrect: false }
    ],
    correctAnswer: "The glass pyramid was designed by the architect in 1989.",
    explanation: "Past simple passive is 'was/were + past participle' ('was designed by')."
  },
  {
    id: "a2_u13_l187_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Flash photography [blank] (is not allowed / did not allow) inside the historic portrait gallery.'",
    sourceSentence: "Flash photography [blank] inside the historic portrait gallery.",
    targetSentence: "Flash photography is not allowed inside the historic portrait gallery.",
    text: "Flash photography [blank] inside the historic portrait gallery.",
    options: [
      { id: "o1", text: "is not allowed", isCorrect: true },
      { id: "o2", text: "did not allow", isCorrect: false },
      { id: "o3", text: "are not allowed", isCorrect: false },
      { id: "o4", text: "not allowing", isCorrect: false }
    ],
    correctAnswer: "is not allowed",
    explanation: "'Flash photography' is uncountable singular, requiring 'is not allowed'."
  },
  {
    id: "a2_u13_l187_r9",
    type: "error_correction",
    prompt: "Correct the passive subject-verb agreement:",
    sourceSentence: "These ancient gold coins was found near the temple ruins.",
    targetSentence: "These ancient gold coins were found near the temple ruins.",
    options: [
      { id: "o1", text: "These ancient gold coins were found near the temple ruins.", isCorrect: true },
      { id: "o2", text: "These ancient gold coins is found near ruins.", isCorrect: false },
      { id: "o3", text: "These ancient coins was finding near temple.", isCorrect: false }
    ],
    correctAnswer: "These ancient gold coins were found near the temple ruins.",
    explanation: "Plural subject 'coins' requires plural auxiliary 'were found'."
  },
  {
    id: "a2_u13_l187_r10",
    type: "translation",
    prompt: "Translate to English: 'यह मूर्तिकला किस सामग्री से बनाई गई है?'",
    sourceSentence: "यह मूर्तिकला किस सामग्री से बनाई गई है?",
    targetSentence: "What material is this sculpture made of?",
    explanation: "'What material is this sculpture made of?' or 'Which material was used to create this sculpture?'"
  }
];

const l187_assessment: Exercise[] = [
  {
    id: "a2_u13_l187_a5",
    type: "multiple_choice",
    prompt: "Choose the sentence that describes a museum exhibition using proper passive voice:",
    options: [
      { id: "o1", text: "More than fifty rare artifacts are currently being showcased in the special temporary gallery.", isCorrect: true },
      { id: "o2", text: "More than fifty rare artifacts is showcasing by museum.", isCorrect: false },
      { id: "o3", text: "Rare artifacts showcased itself in the gallery.", isCorrect: false },
      { id: "o4", text: "Gallery has being showcased rare artifacts.", isCorrect: false }
    ],
    correctAnswer: "More than fifty rare artifacts are currently being showcased in the special temporary gallery.",
    explanation: "Present Continuous passive: 'are currently being showcased'."
  },
  {
    id: "a2_u13_l187_a6",
    type: "fill_blank",
    prompt: "Complete the exhibition sentence:",
    sourceSentence: "The historic gallery [blank] (was established / was establishing) in 1895 to preserve national art treasures.",
    targetSentence: "The historic gallery was established in 1895 to preserve national art treasures.",
    text: "The historic gallery [blank] in 1895 to preserve national art treasures.",
    options: [
      { id: "o1", text: "was established", isCorrect: true },
      { id: "o2", text: "was establishing", isCorrect: false },
      { id: "o3", text: "is establish", isCorrect: false },
      { id: "o4", text: "established by", isCorrect: false }
    ],
    correctAnswer: "was established",
    explanation: "Past simple passive 'was established' accurately dates the founding."
  },
  {
    id: "a2_u13_l187_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences presenting an art piece to an international museum tour group.",
    sourceSentence: "This exquisite bronze sculpture was created in the early twentieth century by a pioneering local artist. It represents the harmony between human craftsmanship and the natural world.",
    targetSentence: "This exquisite bronze sculpture was created in the early twentieth century by a pioneering local artist. It represents the harmony between human craftsmanship and the natural world.",
    audioText: "This exquisite bronze sculpture was created in the early twentieth century by a pioneering local artist. It represents the harmony between human craftsmanship and the natural world.",
    explanation: "Demonstrate accurate passive voice ('was created in...') and cultured explanatory tone."
  },
  {
    id: "a2_u13_l187_a8",
    type: "mediation",
    prompt: "Translate this gallery sign for international tourists: 'कृपया प्रदर्शित कलाकृतियों से कम से कम एक मीटर की सुरक्षित दूरी बनाए रखें।' Provide the best translation.",
    sourceSentence: "कृपया प्रदर्शित कलाकृतियों से कम से कम एक मीटर की सुरक्षित दूरी बनाए रखें।",
    targetSentence: "Please maintain a safe distance of at least one meter from the exhibited artworks.",
    options: [
      { id: "o1", text: "Please maintain a safe distance of at least one meter from the exhibited artworks.", isCorrect: true },
      { id: "o2", text: "Touch all artworks with both hands.", isCorrect: false },
      { id: "o3", text: "Artworks were deleted one meter ago.", isCorrect: false }
    ],
    correctAnswer: "Please maintain a safe distance of at least one meter from the exhibited artworks.",
    explanation: "'Please maintain a safe distance of at least one meter from the exhibited artworks' is standard gallery signage."
  },
  {
    id: "a2_u13_l187_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a descriptive museum statement:",
    sourceSentence: "The restoration project was completed after two years of meticulous work.",
    targetSentence: "The restoration project was completed after two years of meticulous work.",
    tokens: ["The", "restoration", "project", "was", "completed", "after", "two", "years", "of", "meticulous", "work", "."],
    correctOrder: ["The", "restoration", "project", "was", "completed", "after", "two", "years", "of", "meticulous", "work", "."],
    explanation: "'The restoration project was completed after two years of meticulous work' is well structured."
  },
  {
    id: "a2_u13_l187_a10",
    type: "dialogue_completion",
    prompt: "Complete the museum guide interaction:\nTourist: 'Who painted this stunning sunset portrait?'\nCurator: '________________________'",
    sourceSentence: "Who painted this stunning sunset portrait?",
    targetSentence: "It was painted by J.M.W. Turner during his travels across Europe in 1840.",
    options: [
      { id: "o1", text: "It was painted by J.M.W. Turner during his travels across Europe in 1840.", isCorrect: true },
      { id: "o2", text: "The sun was painted by the sun itself.", isCorrect: false },
      { id: "o3", text: "Paintings do not have artists.", isCorrect: false }
    ],
    correctAnswer: "It was painted by J.M.W. Turner during his travels across Europe in 1840.",
    explanation: "'It was painted by...' answers the agent inquiry accurately with passive voice."
  }
];

// =========================================================================
// LESSON 188: Books, Storytelling, Literary Genres & Plot Summaries
// Grammar: Participle Adjectives (-ed vs -ing) & Past Narrative Tenses
// =========================================================================
const l188_practice: Exercise[] = [
  {
    id: "a2_u13_l188_p11",
    type: "reading",
    prompt: "Read the book review and answer the question:\n\"Book Spotlight: 'The Secret Archivist' is an enthralling historical mystery set in Victorian Edinburgh. The protagonist, an ambitious young researcher, uncovers a hidden journal containing encrypted messages from a forgotten society. Readers who enjoy complex plot twists and fascinating character development will find this novel deeply captivating from the very first chapter.\"\nWhat type of reader would especially enjoy this novel?",
    sourceSentence: "What type of reader would especially enjoy this novel?",
    targetSentence: "Readers who enjoy complex plot twists and fascinating character development.",
    options: [
      { id: "o1", text: "Readers who enjoy complex plot twists and fascinating character development.", isCorrect: true },
      { id: "o2", text: "People who dislike reading any books.", isCorrect: false },
      { id: "o3", text: "Students studying cookbook recipes only.", isCorrect: false },
      { id: "o4", text: "Travelers searching for airport parking maps.", isCorrect: false }
    ],
    correctAnswer: "Readers who enjoy complex plot twists and fascinating character development.",
    explanation: "The review explicitly highlights: 'Readers who enjoy complex plot twists and fascinating character development will find this novel deeply captivating...'"
  },
  {
    id: "a2_u13_l188_p12",
    type: "speaking",
    prompt: "Speak clearly and summarize a novel using -ed and -ing adjectives:",
    sourceSentence: "I was fascinated by the novel because the storyline was thrilling and full of unexpected plot twists.",
    targetSentence: "I was fascinated by the novel because the storyline was thrilling and full of unexpected plot twists.",
    audioText: "I was fascinated by the novel because the storyline was thrilling and full of unexpected plot twists.",
    explanation: "Practice distinguishing participle adjectives: 'fascinated' (feeling) vs 'thrilling' (cause)."
  },
  {
    id: "a2_u13_l188_p13",
    type: "match_pairs",
    prompt: "Match literary genres with their characteristic themes:",
    options: [
      { id: "m1", text: "science fiction" },
      { id: "m1_m", text: "futuristic technology, space exploration, and time travel" },
      { id: "m2", text: "historical fiction" },
      { id: "m2_m", text: "fictional narratives set against authentic historical backdrops" },
      { id: "m3", text: "biography / memoir" },
      { id: "m3_m", text: "real-life personal accounts written about an individual" },
      { id: "m4", text: "detective mystery" },
      { id: "m4_m", text: "investigations solving puzzling crimes and uncovering clues" }
    ]
  },
  {
    id: "a2_u13_l188_p14",
    type: "mediation",
    prompt: "Mediate this book club recommendation into English: 'यह उपन्यास इतना दिलचस्प था कि मैंने इसे एक ही सप्ताहांत में पूरा पढ़ लिया।' Choose the best translation.",
    sourceSentence: "यह उपन्यास इतना दिलचस्प था कि मैंने इसे एक ही सप्ताहांत में पूरा पढ़ लिया।",
    targetSentence: "This novel was so gripping that I read the whole thing in a single weekend.",
    options: [
      { id: "o1", text: "This novel was so gripping that I read the whole thing in a single weekend.", isCorrect: true },
      { id: "o2", text: "Novel was boring so I deleted weekend.", isCorrect: false },
      { id: "o3", text: "I wrote a novel in weekend because interesting.", isCorrect: false }
    ],
    correctAnswer: "This novel was so gripping that I read the whole thing in a single weekend.",
    explanation: "'This novel was so gripping / captivating that I read the whole thing in a single weekend' is natural and enthusiastic."
  },
  {
    id: "a2_u13_l188_p15",
    type: "error_correction",
    prompt: "Identify and correct the participle adjective error (-ed vs -ing):",
    sourceSentence: "I was very interesting in the historical background of the story.",
    targetSentence: "I was very interested in the historical background of the story.",
    options: [
      { id: "o1", text: "I was very interested in the historical background of the story.", isCorrect: true },
      { id: "o2", text: "I was very interest in background.", isCorrect: false },
      { id: "o3", text: "I am being interesting in story.", isCorrect: false }
    ],
    correctAnswer: "I was very interested in the historical background of the story.",
    explanation: "Feelings experienced by a person take '-ed' ('interested in')."
  },
  {
    id: "a2_u13_l188_p16",
    type: "listening",
    prompt: "Listen to the book podcast host and identify the main criticism of the sequel:",
    audioText: "While the first book was delightfully witty and fast-paced, the sequel feels somewhat repetitive and confusing, with far too many minor characters introduced in the middle chapters.",
    targetSentence: "The sequel is repetitive and confusing, with too many minor characters.",
    options: [
      { id: "o1", text: "The sequel is repetitive and confusing, with too many minor characters.", isCorrect: true },
      { id: "o2", text: "The sequel has zero words inside it.", isCorrect: false },
      { id: "o3", text: "The book is written in ancient code.", isCorrect: false },
      { id: "o4", text: "The author refuses to publish the book.", isCorrect: false }
    ],
    correctAnswer: "The sequel is repetitive and confusing, with too many minor characters.",
    explanation: "The host critiques the sequel for being repetitive, confusing, and cluttered with minor characters."
  },
  {
    id: "a2_u13_l188_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a book or story that made a lasting impression on you:",
    targetSentence: "I recently finished reading a captivating biography of a pioneering female astronomer. Her determination and scientific discoveries were truly inspiring.",
    audioText: "I recently finished reading a captivating biography of a pioneering female astronomer. Her determination and scientific discoveries were truly inspiring."
  },
  {
    id: "a2_u13_l188_p18",
    type: "dialogue_completion",
    prompt: "Complete the book club conversation:\nMember A: 'What did you think of the ending of the novel?'\nMember B: '________________________'",
    sourceSentence: "What did you think of the ending of the novel?",
    targetSentence: "I found it completely unexpected and thought-provoking!",
    options: [
      { id: "o1", text: "I found it completely unexpected and thought-provoking!", isCorrect: true },
      { id: "o2", text: "Books do not have endings.", isCorrect: false },
      { id: "o3", text: "I deleted the final page in 1990.", isCorrect: false }
    ],
    correctAnswer: "I found it completely unexpected and thought-provoking!",
    explanation: "'I found it completely unexpected and thought-provoking!' uses natural literary evaluation adjectives."
  },
  {
    id: "a2_u13_l188_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence about a novel's protagonist:",
    sourceSentence: "The main character embarks on a dangerous journey to save her village.",
    targetSentence: "The main character embarks on a dangerous journey to save her village.",
    tokens: ["The", "main", "character", "embarks", "on", "a", "dangerous", "journey", "to", "save", "her", "village", "."],
    correctOrder: ["The", "main", "character", "embarks", "on", "a", "dangerous", "journey", "to", "save", "her", "village", "."],
    explanation: "'The main character embarks on a dangerous journey to save her village' is a classic literary narrative pattern."
  },
  {
    id: "a2_u13_l188_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the correct adjective form:",
    sourceSentence: "The documentary was so [blank] (fascinating / fascinated) that we watched all three episodes in one evening.",
    targetSentence: "The documentary was so fascinating that we watched all three episodes in one evening.",
    text: "The documentary was so [blank] that we watched all three episodes in one evening.",
    options: [
      { id: "o1", text: "fascinating", isCorrect: true },
      { id: "o2", text: "fascinated", isCorrect: false },
      { id: "o3", text: "fascination", isCorrect: false },
      { id: "o4", text: "fascinates", isCorrect: false }
    ],
    correctAnswer: "fascinating",
    explanation: "The thing causing the feeling (documentary) takes '-ing' ('fascinating')."
  },
  {
    id: "a2_u13_l188_p21",
    type: "translation",
    prompt: "Translate to English: 'इस कहानी का मुख्य पात्र बहुत साहसी और बुद्धिमान है।'",
    sourceSentence: "इस कहानी का मुख्य पात्र बहुत साहसी और बुद्धिमान है।",
    targetSentence: "The protagonist of this story is very courageous and intelligent.",
    explanation: "'The protagonist / main character of this story is very courageous and intelligent.'"
  },
  {
    id: "a2_u13_l188_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give a 2-sentence recommendation for a book you recently read.",
    sourceSentence: "If you enjoy fast-paced thrillers with rich historical detail, you will love this book. The pacing is relentless and the character development is exceptional.",
    targetSentence: "If you enjoy fast-paced thrillers with rich historical detail, you will love this book. The pacing is relentless and the character development is exceptional.",
    audioText: "If you enjoy fast-paced thrillers with rich historical detail, you will love this book. The pacing is relentless and the character development is exceptional.",
    explanation: "Practice literary critique vocabulary ('fast-paced thrillers', 'rich historical detail', 'pacing is relentless')."
  }
];

const l188_review: Exercise[] = [
  {
    id: "a2_u13_l188_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 11 - Adjectives & Contrasts): Which sentence correctly uses both '-ed' and '-ing' adjectives?",
    options: [
      { id: "o1", text: "The audience was completely amazed by the thrilling plot twists in the final act.", isCorrect: true },
      { id: "o2", text: "The audience was amazing by the thrilled plot twists.", isCorrect: false },
      { id: "o3", text: "The audience was amazement by thrill plot.", isCorrect: false },
      { id: "o4", text: "The audience was thrilling by amazed plot.", isCorrect: false }
    ],
    correctAnswer: "The audience was completely amazed by the thrilling plot twists in the final act.",
    explanation: "'amazed' describes how the audience felt; 'thrilling' describes the nature of the plot twists."
  },
  {
    id: "a2_u13_l188_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'We felt [blank] (disappointed / disappointing) when the mystery ended without answering the key question.'",
    sourceSentence: "We felt [blank] when the mystery ended without answering the key question.",
    targetSentence: "We felt disappointed when the mystery ended without answering the key question.",
    text: "We felt [blank] when the mystery ended without answering the key question.",
    options: [
      { id: "o1", text: "disappointed", isCorrect: true },
      { id: "o2", text: "disappointing", isCorrect: false },
      { id: "o3", text: "disappoint", isCorrect: false },
      { id: "o4", text: "disappointment", isCorrect: false }
    ],
    correctAnswer: "disappointed",
    explanation: "Human emotion takes '-ed' ('felt disappointed')."
  },
  {
    id: "a2_u13_l188_r9",
    type: "error_correction",
    prompt: "Correct the narrative adjective in this review:",
    sourceSentence: "The lecture about ancient mythology was very bored.",
    targetSentence: "The lecture about ancient mythology was very boring.",
    options: [
      { id: "o1", text: "The lecture about ancient mythology was very boring.", isCorrect: true },
      { id: "o2", text: "The lecture about ancient mythology was very boredom.", isCorrect: false },
      { id: "o3", text: "The lecture was bored in mythology.", isCorrect: false }
    ],
    correctAnswer: "The lecture about ancient mythology was very boring.",
    explanation: "The lecture caused boredom, so it was 'boring'."
  },
  {
    id: "a2_u13_l188_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या आपको रहस्यमयी उपन्यास पढ़ना पसंद है?'",
    sourceSentence: "क्या आपको रहस्यमयी उपन्यास पढ़ना पसंद है?",
    targetSentence: "Do you enjoy reading mystery novels?",
    explanation: "'Do you enjoy / like reading mystery novels?'"
  }
];

const l188_assessment: Exercise[] = [
  {
    id: "a2_u13_l188_a5",
    type: "multiple_choice",
    prompt: "Choose the sentence that correctly uses participle adjectives to describe a reading experience:",
    options: [
      { id: "o1", text: "I was so absorbed in the captivating storyline that I lost track of time.", isCorrect: true },
      { id: "o2", text: "I was so absorbing in the captivated storyline that I lost time.", isCorrect: false },
      { id: "o3", text: "I was absorption in storyline.", isCorrect: false },
      { id: "o4", text: "Storyline was absorbed and I was captivating.", isCorrect: false }
    ],
    correctAnswer: "I was so absorbed in the captivating storyline that I lost track of time.",
    explanation: "'absorbed' (person's mental state) and 'captivating' (storyline quality)."
  },
  {
    id: "a2_u13_l188_a6",
    type: "fill_blank",
    prompt: "Complete the book recommendation:",
    sourceSentence: "The author's vivid descriptions make the fantasy world feel truly [blank] (enchanting / enchanted).",
    targetSentence: "The author's vivid descriptions make the fantasy world feel truly enchanting.",
    text: "The author's vivid descriptions make the fantasy world feel truly [blank].",
    options: [
      { id: "o1", text: "enchanting", isCorrect: true },
      { id: "o2", text: "enchanted", isCorrect: false },
      { id: "o3", text: "enchantment", isCorrect: false },
      { id: "o4", text: "enchant", isCorrect: false }
    ],
    correctAnswer: "enchanting",
    explanation: "The quality of the fantasy world is 'enchanting'."
  },
  {
    id: "a2_u13_l188_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences evaluating the plot and characters of a book or film.",
    sourceSentence: "Although the plot begins slowly, the climax delivers a powerful emotional impact. The character arcs are richly developed and resonate long after finishing the story.",
    targetSentence: "Although the plot begins slowly, the climax delivers a powerful emotional impact. The character arcs are richly developed and resonate long after finishing the story.",
    audioText: "Although the plot begins slowly, the climax delivers a powerful emotional impact. The character arcs are richly developed and resonate long after finishing the story.",
    explanation: "Demonstrate sophisticated storytelling evaluation ('climax delivers a powerful emotional impact', 'character arcs are richly developed')."
  },
  {
    id: "a2_u13_l188_a8",
    type: "mediation",
    prompt: "Mediate this author event notice: 'लेखक कल शाम अपने नए उपन्यास पर हस्ताक्षर करेंगे और पाठकों के सवालों के जवाब देंगे।' Provide the best translation.",
    sourceSentence: "लेखक कल शाम अपने नए उपन्यास पर हस्ताक्षर करेंगे और पाठकों के सवालों के जवाब देंगे।",
    targetSentence: "The author will sign copies of his new novel and answer readers' questions tomorrow evening.",
    options: [
      { id: "o1", text: "The author will sign copies of his new novel and answer readers' questions tomorrow evening.", isCorrect: true },
      { id: "o2", text: "Author deleted his novel yesterday.", isCorrect: false },
      { id: "o3", text: "Readers wrote the novel for the author.", isCorrect: false }
    ],
    correctAnswer: "The author will sign copies of his new novel and answer readers' questions tomorrow evening.",
    explanation: "'The author will sign copies of his new novel and answer readers' questions tomorrow evening' accurately conveys the event details."
  },
  {
    id: "a2_u13_l188_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a literary critique:",
    sourceSentence: "The novel explores profound themes of loyalty, courage, and redemption.",
    targetSentence: "The novel explores profound themes of loyalty, courage, and redemption.",
    tokens: ["The", "novel", "explores", "profound", "themes", "of", "loyalty", ",", "courage", ",", "and", "redemption", "."],
    correctOrder: ["The", "novel", "explores", "profound", "themes", "of", "loyalty", ",", "courage", ",", "and", "redemption", "."],
    explanation: "'The novel explores profound themes of loyalty, courage, and redemption' is elegant and grammatically flawless."
  },
  {
    id: "a2_u13_l188_a10",
    type: "dialogue_completion",
    prompt: "Complete the book club exchange:\nReader: 'Did you find the scientific explanations hard to follow?'\nFriend: '________________________'",
    sourceSentence: "Did you find the scientific explanations hard to follow?",
    targetSentence: "Not at all! The author explained complex concepts in a very accessible way.",
    options: [
      { id: "o1", text: "Not at all! The author explained complex concepts in a very accessible way.", isCorrect: true },
      { id: "o2", text: "Science was deleted from dictionaries.", isCorrect: false },
      { id: "o3", text: "I never read words.", isCorrect: false }
    ],
    correctAnswer: "Not at all! The author explained complex concepts in a very accessible way.",
    explanation: "'Not at all! The author explained complex concepts in a very accessible way' directly answers the question with clarity."
  }
];

// =========================================================================
// LESSON 189: Cinema, Film Genres, Theater & Dramatic Productions
// Grammar: Expressing Opinions, Comparisons & Nuanced Reviews
// =========================================================================
const l189_practice: Exercise[] = [
  {
    id: "a2_u13_l189_p11",
    type: "reading",
    prompt: "Read the film critique and answer the question:\n\"Cinema Review: 'The Horizon Line' is a visually stunning science-fiction thriller directed by Elena Rossi. While the special effects and atmospheric musical score are nothing short of breathtaking, the second half of the screenplay suffers from sluggish pacing. Nonetheless, the lead actor's nuanced performance carries the emotional weight of the drama, making it well worth seeing on the big screen.\"\nWhat is identified as the main weakness of the film?",
    sourceSentence: "What is identified as the main weakness of the film?",
    targetSentence: "The second half of the screenplay suffers from sluggish pacing.",
    options: [
      { id: "o1", text: "The second half of the screenplay suffers from sluggish pacing.", isCorrect: true },
      { id: "o2", text: "The special effects were completely missing.", isCorrect: false },
      { id: "o3", text: "The cinema theater had no screen.", isCorrect: false },
      { id: "o4", text: "The lead actor refused to speak any lines.", isCorrect: false }
    ],
    correctAnswer: "The second half of the screenplay suffers from sluggish pacing.",
    explanation: "The critique states: '...the second half of the screenplay suffers from sluggish pacing.'"
  },
  {
    id: "a2_u13_l189_p12",
    type: "speaking",
    prompt: "Speak clearly and deliver a balanced movie review:",
    sourceSentence: "In my opinion, the cinematography was gorgeous and the soundtrack was moving, even though the plot was somewhat predictable.",
    targetSentence: "In my opinion, the cinematography was gorgeous and the soundtrack was moving, even though the plot was somewhat predictable.",
    audioText: "In my opinion, the cinematography was gorgeous and the soundtrack was moving, even though the plot was somewhat predictable.",
    explanation: "Practice film critique language: 'cinematography', 'soundtrack', 'somewhat predictable'."
  },
  {
    id: "a2_u13_l189_p13",
    type: "match_pairs",
    prompt: "Match film and theater roles with their primary artistic responsibilities:",
    options: [
      { id: "m1", text: "film director" },
      { id: "m1_m", text: "guides actors, visual style, and overall creative vision" },
      { id: "m2", text: "screenwriter" },
      { id: "m2_m", text: "authors the script, dialogue, and dramatic scenes" },
      { id: "m3", text: "cinematographer" },
      { id: "m3_m", text: "oversees camera angles, lighting, and visual composition" },
      { id: "m4", text: "stage actor" },
      { id: "m4_m", text: "performs live dramatic roles before a theater audience" }
    ]
  },
  {
    id: "a2_u13_l189_p14",
    type: "mediation",
    prompt: "Mediate this film premiere announcement: 'फिल्म का प्रीमियर अगले शुक्रवार को होगा और मुख्य कलाकार रेड कार्पेट पर मौजूद रहेंगे।' Choose the best translation.",
    sourceSentence: "फिल्म का प्रीमियर अगले शुक्रवार को होगा और मुख्य कलाकार रेड कार्पेट पर मौजूद रहेंगे।",
    targetSentence: "The film premiere will take place next Friday, and the lead cast will be present on the red carpet.",
    options: [
      { id: "o1", text: "The film premiere will take place next Friday, and the lead cast will be present on the red carpet.", isCorrect: true },
      { id: "o2", text: "Premiere was last Friday without actors.", isCorrect: false },
      { id: "o3", text: "Red carpet deleted the movie yesterday.", isCorrect: false }
    ],
    correctAnswer: "The film premiere will take place next Friday, and the lead cast will be present on the red carpet.",
    explanation: "'The film premiere will take place next Friday, and the lead cast will be present on the red carpet' is professional and accurate."
  },
  {
    id: "a2_u13_l189_p15",
    type: "error_correction",
    prompt: "Identify and correct the comparative adjective error in this movie review:",
    sourceSentence: "This thriller was much more better than the director's previous film.",
    targetSentence: "This thriller was much better than the director's previous film.",
    options: [
      { id: "o1", text: "This thriller was much better than the director's previous film.", isCorrect: true },
      { id: "o2", text: "This thriller was more good than previous film.", isCorrect: false },
      { id: "o3", text: "This thriller was best than previous film.", isCorrect: false }
    ],
    correctAnswer: "This thriller was much better than the director's previous film.",
    explanation: "Do not use double comparatives ('more better'); 'much better' is correct."
  },
  {
    id: "a2_u13_l189_p16",
    type: "listening",
    prompt: "Listen to the cinema box office attendant and identify the available seating:",
    audioText: "Good evening! For the seven-thirty screening of the documentary, standard floor seats are sold out, but we still have several premium balcony seats available in rows E and F.",
    targetSentence: "Standard floor seats are sold out, but premium balcony seats in rows E and F are available.",
    options: [
      { id: "o1", text: "Standard floor seats are sold out, but premium balcony seats in rows E and F are available.", isCorrect: true },
      { id: "o2", text: "The entire theater is completely empty.", isCorrect: false },
      { id: "o3", text: "The documentary has been replaced by a cartoon.", isCorrect: false },
      { id: "o4", text: "Tickets cost one million dollars each.", isCorrect: false }
    ],
    correctAnswer: "Standard floor seats are sold out, but premium balcony seats in rows E and F are available.",
    explanation: "The attendant explains floor seats are sold out, but balcony seats in rows E and F remain."
  },
  {
    id: "a2_u13_l189_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing your favorite movie genre and why you enjoy it:",
    targetSentence: "I love psychological thrillers because they keep you guessing until the very last scene. A well-crafted plot twist makes the entire movie experience memorable.",
    audioText: "I love psychological thrillers because they keep you guessing until the very last scene. A well-crafted plot twist makes the entire movie experience memorable."
  },
  {
    id: "a2_u13_l189_p18",
    type: "dialogue_completion",
    prompt: "Complete the cinema exit conversation:\nFriend: 'What did you think of the lead actor's performance?'\nYou: '________________________'",
    sourceSentence: "What did you think of the lead actor's performance?",
    targetSentence: "She was extraordinary! She brought so much depth and genuine emotion to the role.",
    options: [
      { id: "o1", text: "She was extraordinary! She brought so much depth and genuine emotion to the role.", isCorrect: true },
      { id: "o2", text: "Actors are not allowed in movies.", isCorrect: false },
      { id: "o3", text: "I deleted the lead role yesterday.", isCorrect: false }
    ],
    correctAnswer: "She was extraordinary! She brought so much depth and genuine emotion to the role.",
    explanation: "'She was extraordinary! She brought so much depth...' is a warm, articulate cinematic assessment."
  },
  {
    id: "a2_u13_l189_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a sentence about a theatrical production:",
    sourceSentence: "The live theater production received a standing ovation from the audience.",
    targetSentence: "The live theater production received a standing ovation from the audience.",
    tokens: ["The", "live", "theater", "production", "received", "a", "standing", "ovation", "from", "the", "audience", "."],
    correctOrder: ["The", "live", "theater", "production", "received", "a", "standing", "ovation", "from", "the", "audience", "."],
    explanation: "'The live theater production received a standing ovation from the audience' is clear and natural."
  },
  {
    id: "a2_u13_l189_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the appropriate movie term:",
    sourceSentence: "The director decided to shoot the entire film on [blank] (location / locate) in the Scottish Highlands.",
    targetSentence: "The director decided to shoot the entire film on location in the Scottish Highlands.",
    text: "The director decided to shoot the entire film on [blank] in the Scottish Highlands.",
    options: [
      { id: "o1", text: "location", isCorrect: true },
      { id: "o2", text: "locate", isCorrect: false },
      { id: "o3", text: "located", isCorrect: false },
      { id: "o4", text: "locating", isCorrect: false }
    ],
    correctAnswer: "location",
    explanation: "The standard phrase is 'shoot on location'."
  },
  {
    id: "a2_u13_l189_p21",
    type: "translation",
    prompt: "Translate to English: 'इस फिल्म के विशेष दृश्य प्रभाव और संगीत वाकई प्रभावशाली हैं।'",
    sourceSentence: "इस फिल्म के विशेष दृश्य प्रभाव और संगीत वाकई प्रभावशाली हैं।",
    targetSentence: "The special visual effects and musical score of this film are truly impressive.",
    explanation: "'The special visual effects and soundtrack / score of this film are truly impressive.'"
  },
  {
    id: "a2_u13_l189_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Give a nuanced recommendation of a film or play.",
    sourceSentence: "While the running time is slightly long, the compelling dialogue and masterful cinematography make it one of the most rewarding films of the year.",
    targetSentence: "While the running time is slightly long, the compelling dialogue and masterful cinematography make it one of the most rewarding films of the year.",
    audioText: "While the running time is slightly long, the compelling dialogue and masterful cinematography make it one of the most rewarding films of the year.",
    explanation: "Practice balanced film review language ('compelling dialogue', 'masterful cinematography', 'rewarding films')."
  }
];

const l189_review: Exercise[] = [
  {
    id: "a2_u13_l189_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 12 - Concession & Contrast): Which sentence uses 'in spite of' correctly in a theater review?",
    options: [
      { id: "o1", text: "In spite of the technical sound difficulties, the actors delivered an exceptional performance.", isCorrect: true },
      { id: "o2", text: "In spite of sound difficulties were there, actors performed.", isCorrect: false },
      { id: "o3", text: "In spite that sound was bad, actors played well.", isCorrect: false },
      { id: "o4", text: "In spite technical difficulties, performance was bad.", isCorrect: false }
    ],
    correctAnswer: "In spite of the technical sound difficulties, the actors delivered an exceptional performance.",
    explanation: "'In spite of + noun phrase (the technical sound difficulties)' is grammatically accurate."
  },
  {
    id: "a2_u13_l189_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'The documentary was [blank] (as fascinating as / more fascinating) the original investigative book.'",
    sourceSentence: "The documentary was [blank] the original investigative book.",
    targetSentence: "The documentary was as fascinating as the original investigative book.",
    text: "The documentary was [blank] the original investigative book.",
    options: [
      { id: "o1", text: "as fascinating as", isCorrect: true },
      { id: "o2", text: "more fascinating as", isCorrect: false },
      { id: "o3", text: "as fascinating than", isCorrect: false },
      { id: "o4", text: "so fascinating as", isCorrect: false }
    ],
    correctAnswer: "as fascinating as",
    explanation: "Equative comparison is 'as + adjective + as'."
  },
  {
    id: "a2_u13_l189_r9",
    type: "error_correction",
    prompt: "Correct the film genre spelling / collocation error:",
    sourceSentence: "I enjoy watching science-fictional movies on weekends.",
    targetSentence: "I enjoy watching science-fiction movies on weekends.",
    options: [
      { id: "o1", text: "I enjoy watching science-fiction movies on weekends.", isCorrect: true },
      { id: "o2", text: "I enjoy watching scientific-fictions movies.", isCorrect: false },
      { id: "o3", text: "I enjoy watch science-fiction movie.", isCorrect: false }
    ],
    correctAnswer: "I enjoy watching science-fiction movies on weekends.",
    explanation: "The genre noun adjunct is 'science-fiction movies' or 'sci-fi movies'."
  },
  {
    id: "a2_u13_l189_r10",
    type: "translation",
    prompt: "Translate to English: 'क्या आपने फिल्म के अंतिम दृश्य का अनुमान लगा लिया था?'",
    sourceSentence: "क्या आपने फिल्म के अंतिम दृश्य का अनुमान लगा लिया था?",
    targetSentence: "Did you guess the final scene of the movie?",
    explanation: "'Did you guess the final scene / ending of the movie?'"
  }
];

const l189_assessment: Exercise[] = [
  {
    id: "a2_u13_l189_a5",
    type: "multiple_choice",
    prompt: "Which statement expresses a balanced, nuanced cinematic opinion?",
    options: [
      { id: "o1", text: "Although the plot was fairly predictable, the stunning visual direction made it an enjoyable cinema experience.", isCorrect: true },
      { id: "o2", text: "Everything was bad because cinema is boring.", isCorrect: false },
      { id: "o3", text: "All movies are identical in every country.", isCorrect: false },
      { id: "o4", text: "I only watch commercials during movies.", isCorrect: false }
    ],
    correctAnswer: "Although the plot was fairly predictable, the stunning visual direction made it an enjoyable cinema experience.",
    explanation: "This statement balances minor criticism ('fairly predictable') with praise ('stunning visual direction')."
  },
  {
    id: "a2_u13_l189_a6",
    type: "fill_blank",
    prompt: "Complete the cinema review:",
    sourceSentence: "The lead actress was nominated for [blank] (an award / a reward) for her emotional performance.",
    targetSentence: "The lead actress was nominated for an award for her emotional performance.",
    text: "The lead actress was nominated for [blank] for her emotional performance.",
    options: [
      { id: "o1", text: "an award", isCorrect: true },
      { id: "o2", text: "a reward", isCorrect: false },
      { id: "o3", text: "an awardment", isCorrect: false },
      { id: "o4", text: "rewards", isCorrect: false }
    ],
    correctAnswer: "an award",
    explanation: "Actors are nominated for 'an award' (recognition of merit), not a bounty 'reward'."
  },
  {
    id: "a2_u13_l189_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences comparing two film adaptations or cinema genres.",
    sourceSentence: "While the original film focused primarily on dramatic dialogue, the modern remake emphasizes action and cutting-edge visual effects. Both interpretations offer distinct strengths to audiences.",
    targetSentence: "While the original film focused primarily on dramatic dialogue, the modern remake emphasizes action and cutting-edge visual effects. Both interpretations offer distinct strengths to audiences.",
    audioText: "While the original film focused primarily on dramatic dialogue, the modern remake emphasizes action and cutting-edge visual effects. Both interpretations offer distinct strengths to audiences.",
    explanation: "Demonstrate structured comparative analysis ('While the original...', 'emphasizes action...')."
  },
  {
    id: "a2_u13_l189_a8",
    type: "mediation",
    prompt: "Mediate this film festival schedule notice: 'फिल्म के बाद निर्देशक के साथ एक विशेष प्रश्नोत्तर सत्र आयोजित किया जाएगा।' Provide the best translation.",
    sourceSentence: "फिल्म के बाद निर्देशक के साथ एक विशेष प्रश्नोत्तर सत्र आयोजित किया जाएगा।",
    targetSentence: "A special Q&A session with the director will be held following the screening.",
    options: [
      { id: "o1", text: "A special Q&A session with the director will be held following the screening.", isCorrect: true },
      { id: "o2", text: "The director deleted all questions yesterday.", isCorrect: false },
      { id: "o3", text: "Q&A was cancelled in all cinemas.", isCorrect: false }
    ],
    correctAnswer: "A special Q&A session with the director will be held following the screening.",
    explanation: "'A special Q&A session with the director will be held following the screening' is natural industry phrasing."
  },
  {
    id: "a2_u13_l189_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a statement about theatrical lighting:",
    sourceSentence: "Atmospheric lighting enhanced the dramatic tension throughout the play.",
    targetSentence: "Atmospheric lighting enhanced the dramatic tension throughout the play.",
    tokens: ["Atmospheric", "lighting", "enhanced", "the", "dramatic", "tension", "throughout", "the", "play", "."],
    correctOrder: ["Atmospheric", "lighting", "enhanced", "the", "dramatic", "tension", "throughout", "the", "play", "."],
    explanation: "'Atmospheric lighting enhanced the dramatic tension throughout the play' is syntactically sound."
  },
  {
    id: "a2_u13_l189_a10",
    type: "dialogue_completion",
    prompt: "Complete the cinema discussion:\nFriend: 'Would you recommend seeing this film in 3D?'\nYou: '________________________'",
    sourceSentence: "Would you recommend seeing this film in 3D?",
    targetSentence: "Definitely! The space battle sequences are breathtaking in three dimensions.",
    options: [
      { id: "o1", text: "Definitely! The space battle sequences are breathtaking in three dimensions.", isCorrect: true },
      { id: "o2", text: "3D was invented last Tuesday.", isCorrect: false },
      { id: "o3", text: "Glasses are forbidden in theaters.", isCorrect: false }
    ],
    correctAnswer: "Definitely! The space battle sequences are breathtaking in three dimensions.",
    explanation: "'Definitely! The space battle sequences are breathtaking in three dimensions' provides a clear, reasoned recommendation."
  }
];

// =========================================================================
// LESSON 190: Cultural Heritage, Festivals, Local Traditions & Celebrations
// Grammar: Passive Voice in Traditions (is celebrated, are prepared, is held) & Clauses of Purpose
// =========================================================================
const l190_practice: Exercise[] = [
  {
    id: "a2_u13_l190_p11",
    type: "reading",
    prompt: "Read the cultural festival guide and answer the question:\n\"Heritage Feature: The Lantern Festival marks the final day of traditional New Year celebrations. Thousands of colorful lanterns made from rice paper and bamboo are illuminated across the old town. Families gather in public squares to eat sweet glutinous rice balls, which symbolize unity and harmony. Traditional dragon dances are performed to bring good fortune and prosperity for the coming year.\"\nWhy are dragon dances performed during the festival?",
    sourceSentence: "Why are dragon dances performed during the festival?",
    targetSentence: "To bring good fortune and prosperity for the coming year.",
    options: [
      { id: "o1", text: "To bring good fortune and prosperity for the coming year.", isCorrect: true },
      { id: "o2", text: "To scare all visitors away from the city.", isCorrect: false },
      { id: "o3", text: "To sell bamboo lanterns to foreign airports.", isCorrect: false },
      { id: "o4", text: "To extinguish all streetlights permanently.", isCorrect: false }
    ],
    correctAnswer: "To bring good fortune and prosperity for the coming year.",
    explanation: "The text states: 'Traditional dragon dances are performed to bring good fortune and prosperity for the coming year.'"
  },
  {
    id: "a2_u13_l190_p12",
    type: "speaking",
    prompt: "Speak clearly and describe a traditional cultural festival using passive voice and purpose clauses:",
    sourceSentence: "During the harvest festival, traditional folk songs are sung and special delicacies are prepared to express gratitude for nature's abundance.",
    targetSentence: "During the harvest festival, traditional folk songs are sung and special delicacies are prepared to express gratitude for nature's abundance.",
    audioText: "During the harvest festival, traditional folk songs are sung and special delicacies are prepared to express gratitude for nature's abundance.",
    explanation: "Practice cultural celebration language: 'are sung', 'are prepared', 'to express gratitude'."
  },
  {
    id: "a2_u13_l190_p13",
    type: "match_pairs",
    prompt: "Match global cultural traditions with their symbolic meanings:",
    options: [
      { id: "m1", text: "lighting oil lamps (Diwali)" },
      { id: "m1_m", text: "victory of light over darkness and knowledge over ignorance" },
      { id: "m2", text: "decorating pine trees (Christmas)" },
      { id: "m2_m", text: "symbolizing everlasting life and festive goodwill" },
      { id: "m3", text: "sharing mooncakes (Mid-Autumn)" },
      { id: "m3_m", text: "family reunion, completeness, and lunar harmony" },
      { id: "m4", text: "Carnival street parades" },
      { id: "m4_m", text: "vibrant music, dancing, and joyful communal celebration" }
    ]
  },
  {
    id: "a2_u13_l190_p14",
    type: "mediation",
    prompt: "Mediate this cultural heritage description into English: 'यह पारंपरिक त्योहार हर साल वसंत के आगमन का स्वागत करने के लिए मनाया जाता है।' Choose the best translation.",
    sourceSentence: "यह पारंपरिक त्योहार हर साल वसंत के आगमन का स्वागत करने के लिए मनाया जाता है।",
    targetSentence: "This traditional festival is celebrated every year to welcome the arrival of spring.",
    options: [
      { id: "o1", text: "This traditional festival is celebrated every year to welcome the arrival of spring.", isCorrect: true },
      { id: "o2", text: "Festival celebrates people in spring last year.", isCorrect: false },
      { id: "o3", text: "Spring was deleted by tradition yesterday.", isCorrect: false }
    ],
    correctAnswer: "This traditional festival is celebrated every year to welcome the arrival of spring.",
    explanation: "'This traditional festival is celebrated every year to welcome the arrival of spring' is grammatically precise."
  },
  {
    id: "a2_u13_l190_p15",
    type: "error_correction",
    prompt: "Identify and correct the passive preposition error in this tradition description:",
    sourceSentence: "Special pastries is baked by local bakers during the holiday.",
    targetSentence: "Special pastries are baked by local bakers during the holiday.",
    options: [
      { id: "o1", text: "Special pastries are baked by local bakers during the holiday.", isCorrect: true },
      { id: "o2", text: "Special pastries is bake by bakers.", isCorrect: false },
      { id: "o3", text: "Special pastries are baking by holiday.", isCorrect: false }
    ],
    correctAnswer: "Special pastries are baked by local bakers during the holiday.",
    explanation: "Plural subject 'pastries' takes plural passive 'are baked'."
  },
  {
    id: "a2_u13_l190_p16",
    type: "listening",
    prompt: "Listen to the festival organizer and identify the parade starting time and route:",
    audioText: "Welcome to the Midsummer Carnival! The grand costume parade will commence at two in the afternoon from Town Hall Square, moving down Heritage Avenue towards the harbor.",
    targetSentence: "The parade starts at 2:00 p.m. from Town Hall Square and moves down Heritage Avenue to the harbor.",
    options: [
      { id: "o1", text: "The parade starts at 2:00 p.m. from Town Hall Square and moves down Heritage Avenue to the harbor.", isCorrect: true },
      { id: "o2", text: "The parade took place last week at midnight.", isCorrect: false },
      { id: "o3", text: "Costumes are forbidden in Town Hall.", isCorrect: false },
      { id: "o4", text: "The festival was cancelled due to snow.", isCorrect: false }
    ],
    correctAnswer: "The parade starts at 2:00 p.m. from Town Hall Square and moves down Heritage Avenue to the harbor.",
    explanation: "The organizer announces the parade starts at 2:00 p.m. from Town Hall Square along Heritage Avenue to the harbor."
  },
  {
    id: "a2_u13_l190_p17",
    type: "personal_production",
    prompt: "Write 2 sentences describing a traditional festival or family holiday you celebrate:",
    targetSentence: "During our annual harvest festival, we gather with extended family to share traditional homemade dishes and exchange festive blessings. It is a wonderful time filled with warmth, laughter, and cultural music.",
    audioText: "During our annual harvest festival, we gather with extended family to share traditional homemade dishes and exchange festive blessings. It is a wonderful time filled with warmth, laughter, and cultural music."
  },
  {
    id: "a2_u13_l190_p18",
    type: "dialogue_completion",
    prompt: "Complete the festival conversation:\nTourist: 'What is the significance of wearing traditional folk costumes today?'\nLocal Guide: '________________________'",
    sourceSentence: "What is the significance of wearing traditional folk costumes today?",
    targetSentence: "It honors the cultural history of our ancestors and keeps regional traditions alive for younger generations.",
    options: [
      { id: "o1", text: "It honors the cultural history of our ancestors and keeps regional traditions alive for younger generations.", isCorrect: true },
      { id: "o2", text: "Costumes were invented yesterday morning.", isCorrect: false },
      { id: "o3", text: "We wear costumes because all clothes were deleted.", isCorrect: false }
    ],
    correctAnswer: "It honors the cultural history of our ancestors and keeps regional traditions alive for younger generations.",
    explanation: "'It honors the cultural history of our ancestors...' is an articulate, culturally meaningful response."
  },
  {
    id: "a2_u13_l190_p19",
    type: "word_ordering",
    prompt: "Reorder the words to form a statement about cultural heritage preservation:",
    sourceSentence: "Traditional artisan crafts are passed down from generation to generation.",
    targetSentence: "Traditional artisan crafts are passed down from generation to generation.",
    tokens: ["Traditional", "artisan", "crafts", "are", "passed", "down", "from", "generation", "to", "generation", "."],
    correctOrder: ["Traditional", "artisan", "crafts", "are", "passed", "down", "from", "generation", "to", "generation", "."],
    explanation: "'Traditional artisan crafts are passed down from generation to generation' is a standard heritage statement."
  },
  {
    id: "a2_u13_l190_p20",
    type: "fill_blank",
    prompt: "Fill in the blank with the passive verb form:",
    sourceSentence: "This annual cultural festival [blank] (is held / was holding) every October in the historic city center.",
    targetSentence: "This annual cultural festival is held every October in the historic city center.",
    text: "This annual cultural festival [blank] every October in the historic city center.",
    options: [
      { id: "o1", text: "is held", isCorrect: true },
      { id: "o2", text: "was holding", isCorrect: false },
      { id: "o3", text: "holds", isCorrect: false },
      { id: "o4", text: "is holding", isCorrect: false }
    ],
    correctAnswer: "is held",
    explanation: "Present routine passive is 'is held'."
  },
  {
    id: "a2_u13_l190_p21",
    type: "translation",
    prompt: "Translate to English: 'त्योहार के दौरान पूरे शहर को रंग-बिरंगी रोशनियों से सजाया जाता है।'",
    sourceSentence: "त्योहार के दौरान पूरे शहर को रंग-बिरंगी रोशनियों से सजाया जाता है।",
    targetSentence: "During the festival, the entire city is decorated with colorful lights.",
    explanation: "'During the festival, the entire city is decorated with colorful lights.'"
  },
  {
    id: "a2_u13_l190_p22",
    type: "speaking",
    prompt: "Speak aloud clearly: Explain the value of celebrating intangible cultural heritage.",
    sourceSentence: "Intangible cultural heritage connects communities to their shared roots, fostering mutual respect, cultural diversity, and social solidarity across generations.",
    targetSentence: "Intangible cultural heritage connects communities to their shared roots, fostering mutual respect, cultural diversity, and social solidarity across generations.",
    audioText: "Intangible cultural heritage connects communities to their shared roots, fostering mutual respect, cultural diversity, and social solidarity across generations.",
    explanation: "Practice advanced cultural vocabulary ('intangible cultural heritage', 'shared roots', 'social solidarity')."
  }
];

const l190_review: Exercise[] = [
  {
    id: "a2_u13_l190_r7",
    type: "multiple_choice",
    prompt: "Spaced Retrieval (Unit 10 - Passive with Modals & Rules): Which sentence correctly expresses a festival tradition rule?",
    options: [
      { id: "o1", text: "Traditional handcrafted masks must be worn by all dancers during the ceremonial procession.", isCorrect: true },
      { id: "o2", text: "Masks must wear dancers in procession.", isCorrect: false },
      { id: "o3", text: "Masks has to be wearing by dancers.", isCorrect: false },
      { id: "o4", text: "Masks must to be worn in festival.", isCorrect: false }
    ],
    correctAnswer: "Traditional handcrafted masks must be worn by all dancers during the ceremonial procession.",
    explanation: "Modal passive: 'must + be + past participle' ('must be worn')."
  },
  {
    id: "a2_u13_l190_r8",
    type: "fill_blank",
    prompt: "Fill in the blank: 'Special decorative candles [blank] (are lit / were light) at dusk to illuminate the path.'",
    sourceSentence: "Special decorative candles [blank] at dusk to illuminate the path.",
    targetSentence: "Special decorative candles are lit at dusk to illuminate the path.",
    text: "Special decorative candles [blank] at dusk to illuminate the path.",
    options: [
      { id: "o1", text: "are lit", isCorrect: true },
      { id: "o2", text: "were light", isCorrect: false },
      { id: "o3", text: "is lit", isCorrect: false },
      { id: "o4", text: "are lightened", isCorrect: false }
    ],
    correctAnswer: "are lit",
    explanation: "Plural passive: 'are lit' (or 'are lighted')."
  },
  {
    id: "a2_u13_l190_r9",
    type: "error_correction",
    prompt: "Correct the purpose clause error:",
    sourceSentence: "People gather in squares for celebrate the new year.",
    targetSentence: "People gather in squares to celebrate the new year.",
    options: [
      { id: "o1", text: "People gather in squares to celebrate the new year.", isCorrect: true },
      { id: "o2", text: "People gather in squares for to celebrate new year.", isCorrect: false },
      { id: "o3", text: "People gather in squares celebrate new year.", isCorrect: false }
    ],
    correctAnswer: "People gather in squares to celebrate the new year.",
    explanation: "Clauses of purpose use 'to + base verb' ('to celebrate')."
  },
  {
    id: "a2_u13_l190_r10",
    type: "translation",
    prompt: "Translate to English: 'यह प्राचीन अनुष्ठान बुराई पर अच्छाई की जीत का प्रतीक है।'",
    sourceSentence: "यह प्राचीन अनुष्ठान बुराई पर अच्छाई की जीत का प्रतीक है।",
    targetSentence: "This ancient ritual symbolizes the victory of good over evil.",
    explanation: "'This ancient ritual symbolizes the triumph / victory of good over evil.'"
  }
];

const l190_assessment: Exercise[] = [
  {
    id: "a2_u13_l190_a5",
    type: "multiple_choice",
    prompt: "What does the phrase 'communal celebration' mean in cultural contexts?",
    options: [
      { id: "o1", text: "A joyful festive gathering shared and participated in by the whole community.", isCorrect: true },
      { id: "o2", text: "A secret meeting conducted in complete silence by one individual.", isCorrect: false },
      { id: "o3", text: "A computer software update installed automatically.", isCorrect: false },
      { id: "o4", text: "A cancellation of all public holidays.", isCorrect: false }
    ],
    correctAnswer: "A joyful festive gathering shared and participated in by the whole community.",
    explanation: "'Communal celebration' refers to collective festivities celebrated together by community members."
  },
  {
    id: "a2_u13_l190_a6",
    type: "fill_blank",
    prompt: "Complete the cultural heritage sentence:",
    sourceSentence: "Ancient oral folklore stories [blank] (have been preserved / are preserving) by village elders for centuries.",
    targetSentence: "Ancient oral folklore stories have been preserved by village elders for centuries.",
    text: "Ancient oral folklore stories [blank] by village elders for centuries.",
    options: [
      { id: "o1", text: "have been preserved", isCorrect: true },
      { id: "o2", text: "are preserving", isCorrect: false },
      { id: "o3", text: "was preserved", isCorrect: false },
      { id: "o4", text: "has been preserved", isCorrect: false }
    ],
    correctAnswer: "have been preserved",
    explanation: "Present Perfect passive for actions spanning centuries to present: 'have been preserved'."
  },
  {
    id: "a2_u13_l190_a7",
    type: "speaking",
    prompt: "Can-Do Assessment: Speak 2 sentences explaining how a traditional festival promotes social harmony and cultural identity.",
    sourceSentence: "Traditional festivals bring people together across generations to celebrate shared customs, folk music, and regional cuisine. These vibrant celebrations reinforce cultural pride and foster deep community bonds.",
    targetSentence: "Traditional festivals bring people together across generations to celebrate shared customs, folk music, and regional cuisine. These vibrant celebrations reinforce cultural pride and foster deep community bonds.",
    audioText: "Traditional festivals bring people together across generations to celebrate shared customs, folk music, and regional cuisine. These vibrant celebrations reinforce cultural pride and foster deep community bonds.",
    explanation: "Demonstrate fluent articulation of cultural heritage values ('shared customs', 'reinforce cultural pride', 'deep community bonds')."
  },
  {
    id: "a2_u13_l190_a8",
    type: "mediation",
    prompt: "Translate this cultural festival notice: 'त्योहार के दौरान पारंपरिक संगीत और नृत्य कार्यशालाएं सभी आगंतुकों के लिए निःशुल्क हैं।' Provide the best translation.",
    sourceSentence: "त्योहार के दौरान पारंपरिक संगीत और नृत्य कार्यशालाएं सभी आगंतुकों के लिए निःशुल्क हैं।",
    targetSentence: "Traditional music and dance workshops are free for all visitors during the festival.",
    options: [
      { id: "o1", text: "Traditional music and dance workshops are free for all visitors during the festival.", isCorrect: true },
      { id: "o2", text: "Workshops were deleted during festival yesterday.", isCorrect: false },
      { id: "o3", text: "Visitors must pay one million dollars for dancing.", isCorrect: false }
    ],
    correctAnswer: "Traditional music and dance workshops are free for all visitors during the festival.",
    explanation: "'Traditional music and dance workshops are free for all visitors during the festival' is clear and welcoming."
  },
  {
    id: "a2_u13_l190_a9",
    type: "word_ordering",
    prompt: "Reorder the words to form a statement about historic monuments:",
    sourceSentence: "The ancient temple was inscribed on the UNESCO World Heritage list.",
    targetSentence: "The ancient temple was inscribed on the UNESCO World Heritage list.",
    tokens: ["The", "ancient", "temple", "was", "inscribed", "on", "the", "UNESCO", "World", "Heritage", "list", "."],
    correctOrder: ["The", "ancient", "temple", "was", "inscribed", "on", "the", "UNESCO", "World", "Heritage", "list", "."],
    explanation: "'The ancient temple was inscribed on the UNESCO World Heritage list' is standard cultural heritage phrasing."
  },
  {
    id: "a2_u13_l190_a10",
    type: "dialogue_completion",
    prompt: "Complete the cultural holiday exchange:\nVisitor: 'What traditional food is prepared for this festival?'\nHost: '________________________'",
    sourceSentence: "What traditional food is prepared for this festival?",
    targetSentence: "We bake aromatic spiced honey cakes and prepare savory roasted pastries for all our guests.",
    options: [
      { id: "o1", text: "We bake aromatic spiced honey cakes and prepare savory roasted pastries for all our guests.", isCorrect: true },
      { id: "o2", text: "Food is illegal during holidays.", isCorrect: false },
      { id: "o3", text: "We only eat cold plastic spoons.", isCorrect: false }
    ],
    correctAnswer: "We bake aromatic spiced honey cakes and prepare savory roasted pastries for all our guests.",
    explanation: "'We bake aromatic spiced honey cakes...' provides a warm, culturally descriptive answer."
  }
];

// Enrich Lessons 186 to 190
enrichUnit13LessonData('lesson_a2_13_186', LESSON_A2_13_186_DATA, l186_practice, l186_review, l186_assessment);
enrichUnit13LessonData('lesson_a2_13_187', LESSON_A2_13_187_DATA, l187_practice, l187_review, l187_assessment);
enrichUnit13LessonData('lesson_a2_13_188', LESSON_A2_13_188_DATA, l188_practice, l188_review, l188_assessment);
enrichUnit13LessonData('lesson_a2_13_189', LESSON_A2_13_189_DATA, l189_practice, l189_review, l189_assessment);
enrichUnit13LessonData('lesson_a2_13_190', LESSON_A2_13_190_DATA, l190_practice, l190_review, l190_assessment);
