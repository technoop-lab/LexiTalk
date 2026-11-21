/**
 * Skill module practice content: Speaking, Listening, Reading, Writing.
 * Plain English, B1-A2 level, IELTS-style task types.
 * Add new sets here; the Skill module picks them up automatically.
 */

// ---------- Speaking ----------

export type SpeakingKind = 'read_aloud' | 'answer' | 'describe';

export interface SpeakingPrompt {
  id: string;
  kind: SpeakingKind;
  prompt: string;
  minWords: number;
}

export const SPEAKING_PROMPTS: SpeakingPrompt[] = [
  // Read aloud: scored against the target sentence
  { id: 'sp_ra_1', kind: 'read_aloud', prompt: 'The library closes at eight o\'clock on weekdays.', minWords: 8 },
  { id: 'sp_ra_2', kind: 'read_aloud', prompt: 'Could you please send me the invoice by Friday?', minWords: 8 },
  { id: 'sp_ra_3', kind: 'read_aloud', prompt: 'I usually take the bus to work because it is cheaper than a taxi.', minWords: 12 },
  { id: 'sp_ra_4', kind: 'read_aloud', prompt: 'Our neighbours invited us to a family dinner last Sunday.', minWords: 9 },
  // Answer a question: speak 2-3 sentences
  { id: 'sp_an_1', kind: 'answer', prompt: 'What do you usually do on weekends?', minWords: 10 },
  { id: 'sp_an_2', kind: 'answer', prompt: 'Do you prefer to study in the morning or in the evening? Give one reason.', minWords: 10 },
  { id: 'sp_an_3', kind: 'answer', prompt: 'Tell me about a time you helped someone. What did you do?', minWords: 12 },
  { id: 'sp_an_4', kind: 'answer', prompt: 'How has your daily routine changed in the last few years?', minWords: 12 },
  // Describe: about one minute, longer answer
  { id: 'sp_ds_1', kind: 'describe', prompt: 'Describe a teacher who influenced you. Who was it, and what did they teach you?', minWords: 25 },
  { id: 'sp_ds_2', kind: 'describe', prompt: 'Describe a special meal you enjoyed. What was it, and who was with you?', minWords: 25 },
  { id: 'sp_ds_3', kind: 'describe', prompt: 'Describe a journey you remember. Where did you go, and how did you travel?', minWords: 25 },
  { id: 'sp_ds_4', kind: 'describe', prompt: 'Talk about a skill you would like to learn. Why would it be useful to you?', minWords: 25 },
];

// ---------- Listening ----------

export interface ListeningLine {
  speaker: string;
  text: string;
}

export interface ListeningQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface ListeningSet {
  id: string;
  title: string;
  setting: string;
  lines: ListeningLine[];
  questions: ListeningQuestion[];
}

export const LISTENING_SETS: ListeningSet[] = [
  {
    id: 'li_hotel',
    title: 'Hotel Check-in',
    setting: 'A guest checks in at a hotel reception.',
    lines: [
      { speaker: 'Receptionist', text: 'Good evening. Welcome to the Hillview Hotel. Do you have a reservation?' },
      { speaker: 'Guest', text: 'Yes, under the name Sharma. I booked a double room for two nights.' },
      { speaker: 'Receptionist', text: 'Let me check. Yes, Mr Sharma. Room 204 on the second floor. Breakfast is served from seven to ten thirty in the restaurant.' },
      { speaker: 'Guest', text: 'Great. Is there a lift?' },
      { speaker: 'Receptionist', text: 'Yes, it is just behind you. The Wi-Fi password is on the card in your room.' },
    ],
    questions: [
      { question: 'How many nights did the guest book?', options: ['One', 'Two', 'Three'], answer: 1 },
      { question: 'Which floor is the room on?', options: ['First', 'Second', 'Third'], answer: 1 },
      { question: 'When is breakfast served?', options: ['Six to nine', 'Seven to ten thirty', 'Eight to noon'], answer: 1 },
      { question: 'Where is the Wi-Fi password?', options: ['On the door', 'In the restaurant', 'On the card in the room'], answer: 2 },
    ],
  },
  {
    id: 'li_library',
    title: 'The Overdue Book',
    setting: 'A student returns a late library book.',
    lines: [
      { speaker: 'Librarian', text: 'Hello, how can I help you?' },
      { speaker: 'Student', text: 'I am returning this book, but I think it is late. The due date was last Monday.' },
      { speaker: 'Librarian', text: 'Let me check. Yes, it is three days overdue, so there is a fine of fifty rupees.' },
      { speaker: 'Student', text: 'Oh no. Can I pay it online?' },
      { speaker: 'Librarian', text: 'Yes, you can pay at the desk or through our app. The book is in good condition, so that is fine.' },
      { speaker: 'Student', text: 'Thanks. Can I borrow another one today?' },
      { speaker: 'Librarian', text: 'Of course. Once you pay the fine, your account is active again.' },
    ],
    questions: [
      { question: 'When was the book due?', options: ['Last Friday', 'Last Monday', 'Yesterday'], answer: 1 },
      { question: 'How much is the fine?', options: ['Fifty rupees', 'Thirty rupees', 'Three hundred rupees'], answer: 0 },
      { question: 'How can the student pay?', options: ['Only in cash', 'At the desk or in the app', 'By sending a letter'], answer: 1 },
      { question: 'What must happen before the student can borrow again?', options: ['Return a different book', 'Pay the fine', 'Speak to the manager'], answer: 1 },
    ],
  },
  {
    id: 'li_trip',
    title: 'Planning a Weekend Trip',
    setting: 'Two friends plan a trip to the hills.',
    lines: [
      { speaker: 'Anita', text: 'Are you free this Saturday? I was thinking of going to the hills.' },
      { speaker: 'Rohan', text: 'I would love to, but I need to finish my report on Saturday morning. Could we leave after lunch instead?' },
      { speaker: 'Anita', text: 'That works. The bus leaves at one, and it takes about four hours.' },
      { speaker: 'Rohan', text: 'Four hours? That is long. What about the train?' },
      { speaker: 'Anita', text: 'The train is faster, but the tickets sell out quickly. We should book today.' },
      { speaker: 'Rohan', text: 'Okay, let us book the train. I will pay for the tickets, and you can book the hotel.' },
    ],
    questions: [
      { question: 'Why can\'t Rohan leave in the morning?', options: ['He has a report to finish', 'He is sick', 'The bus is full'], answer: 0 },
      { question: 'How long does the bus take?', options: ['Two hours', 'Four hours', 'Six hours'], answer: 1 },
      { question: 'Why should they book today?', options: ['The hotel is closing', 'Tickets sell out quickly', 'The price goes up tomorrow'], answer: 1 },
      { question: 'Who will book the hotel?', options: ['Anita', 'Rohan', 'Both of them'], answer: 0 },
    ],
  },
];

// ---------- Reading ----------

export type ReadingQuestion =
  | { kind: 'mcq'; prompt: string; options: string[]; answer: number }
  | { kind: 'tfng'; prompt: string; answer: 'True' | 'False' | 'Not Given' };

export interface ReadingSection {
  label: string;
  text: string;
  questions: ReadingQuestion[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  sections: ReadingSection[];
}

export const READING_PASSAGES: ReadingPassage[] = [
  {
    id: 'rd_market',
    title: 'The Night Market',
    sections: [
      {
        label: 'Section A',
        text: 'Every Friday evening, the old square in Jaipur becomes a night market. Over two hundred stalls sell handmade jewellery, leather bags and fresh sweets. Many families come here after dinner to walk, eat and shop.',
        questions: [
          { kind: 'mcq', prompt: 'How often does the night market take place?', options: ['Every day', 'Every Friday evening', 'Every Saturday morning'], answer: 1 },
          { kind: 'mcq', prompt: 'Which item is NOT mentioned as being sold?', options: ['Jewellery', 'Leather bags', 'Vegetables'], answer: 2 },
        ],
      },
      {
        label: 'Section B',
        text: 'Not all visitors come to buy things. Local musicians play traditional songs near the fountain, and children often watch the street magicians. The market is cleaned by volunteers, who start work at midnight so that the square is ready for the Saturday morning shoppers.',
        questions: [
          { kind: 'tfng', prompt: 'Musicians perform near the fountain.', answer: 'True' },
          { kind: 'tfng', prompt: 'The stalls in the market are run by volunteers.', answer: 'False' },
        ],
      },
    ],
  },
  {
    id: 'rd_library',
    title: 'Why Libraries Matter in Small Towns',
    sections: [
      {
        label: 'Section A',
        text: 'A small library in the town of Palampur has become a meeting place for students and older people. It has three computers, a reading room and a quiet corner for children. Membership is free for residents, and visitors can read in the library without paying.',
        questions: [
          { kind: 'mcq', prompt: 'What is NOT available at the library?', options: ['Computers', 'A reading room', 'A swimming pool'], answer: 2 },
          { kind: 'mcq', prompt: 'Who can read in the library without paying?', options: ['Only residents', 'Visitors', 'Only students'], answer: 1 },
        ],
      },
      {
        label: 'Section B',
        text: 'The library also runs a weekly English conversation club on Tuesdays. Volunteers from the community lead the sessions, and the club has grown from six members to thirty in two years. Organisers say that the club helps people feel more confident when speaking in public.',
        questions: [
          { kind: 'tfng', prompt: 'The conversation club meets every day.', answer: 'False' },
          { kind: 'tfng', prompt: 'The conversation club now has more than twenty members.', answer: 'True' },
        ],
      },
    ],
  },
  {
    id: 'rd_bottle',
    title: 'Bringing Your Own Bottle',
    sections: [
      {
        label: 'Section A',
        text: 'Last year a café in Mumbai started a plan to reduce plastic. Customers who bring their own bottle get a 10 percent discount on drinks. Staff say that about one in five customers now uses this option.',
        questions: [
          { kind: 'mcq', prompt: 'How much discount do customers get for bringing their own bottle?', options: ['5 percent', '10 percent', '20 percent'], answer: 1 },
          { kind: 'mcq', prompt: 'What does the café do for free?', options: ['Gives a discount', 'Refills bottles with filtered water', 'Sells glass bottles'], answer: 1 },
        ],
      },
      {
        label: 'Section B',
        text: 'The owner says the plan saves around two hundred plastic bottles each week. However, she admits that some customers forget their bottles at home and still buy plastic ones.',
        questions: [
          { kind: 'tfng', prompt: 'About one in five customers uses the bottle discount.', answer: 'True' },
          { kind: 'tfng', prompt: 'The café saves more than five hundred bottles every week.', answer: 'False' },
        ],
      },
    ],
  },
];

// ---------- Writing ----------

export interface WritingTask {
  id: string;
  prompt: string;
  keywords: string[];
  minWords: number;
  model: string;
}

export const WRITING_TASKS: WritingTask[] = [
  {
    id: 'wr_routine',
    prompt: 'Write two or more sentences about your daily routine. Use "I usually" and "every day".',
    keywords: ['i usually', 'every day'],
    minWords: 8,
    model: 'I usually wake up at six. I drink tea and go to work every day.',
  },
  {
    id: 'wr_invite',
    prompt: 'Write a short message inviting a friend to lunch. Use "would you like" and "tomorrow".',
    keywords: ['would you like', 'tomorrow'],
    minWords: 8,
    model: 'Hi Priya, would you like to have lunch with me tomorrow at one?',
  },
  {
    id: 'wr_place',
    prompt: 'Write about your favourite place. Use "because" and "I like".',
    keywords: ['because', 'i like'],
    minWords: 8,
    model: 'My favourite place is the hill station near my home because I like the fresh air.',
  },
];
