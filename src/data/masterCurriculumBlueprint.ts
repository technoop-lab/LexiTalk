import { MasterCurriculumBlueprint } from '../types';

export const MASTER_CURRICULUM_BLUEPRINT: MasterCurriculumBlueprint = {
  version: '2.1.0-a1-academic-master-spec',
  programTitle: 'Curiosity English Academy — A1 Master Academic Specification & CEFR Blueprint',
  levelsSupported: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  primaryActiveLevels: ['A1', 'A2'],

  // ============================================================================
  // SECTION 1: A1 UNIT-BY-UNIT MASTER SCOPE (UNITS 1 - 6)
  // ============================================================================
  unitScopes: [
    {
      unitId: 'unit_a1_1',
      unitNumber: 1,
      title: 'Greetings, Self-Introductions & Personal Identity',
      communicativePurpose: 'Establish core social identity, greet colleagues, state name, origin, city, and profession.',
      realWorldSituations: [
        'First day at work / academy onboarding',
        'International conference registration',
        'Social networking introductions',
        'Passport control / airport entry declaration'
      ],
      prerequisiteKnowledge: ['None (True Beginner Breakthrough)'],
      grammarIntroduced: ['g_a1_01', 'g_a1_02', 'g_a1_03', 'g_a1_05', 'g_a1_06'],
      grammarRecycled: [],
      vocabularyDomains: ['Personal Identity', 'Countries & Cities', 'Professions'],
      lexicalChunks: ['Hello! My name is...', 'Nice to meet you', 'Where are you from?', 'I live in...'],
      collocations: ['english teacher', 'software engineer', 'live in', 'come from'],
      sentencePatterns: ['Subject + BE + Noun/Adjective', 'WH- + BE + Subject?'],
      pronunciationTargets: ['Contractions (I\'m, you\'re, he\'s)', 'Alphabet sound awareness', 'Name & profession stress'],
      listeningTargets: ['Identify names, countries, and professions at 100-110 WPM', 'Recognize WH- question sounds'],
      speakingTargets: ['Shadow exact pronunciation', 'Slot substitution for profession/city', '3-sentence personal introduction'],
      readingTargets: ['Read business cards, conference badges, and name tags', 'Understand 2-sentence intro posts'],
      writingTargets: ['Spell name, country, and job accurately', 'Complete registration forms with personal details'],
      interactionTargets: ['Initiate greetings', 'Exchange names & origins', 'Close conversation with "Nice meeting you"'],
      mediationTargets: ['Convey personal details from an ID badge to a colleague', 'Explain simple name spelling'],
      commonLearnerErrors: ['I doctor -> I\'m a doctor', 'I live at Spain -> I live in Spain', 'He name -> His name'],
      canDoOutcomes: [
        'Can introduce self and others using simple formulaic expressions.',
        'Can ask and answer questions about personal details such as origin, residence, and profession.'
      ],
      unitAssessmentFocus: 'Accuracy in BE verb usage, subject-pronoun agreement, and clear self-introduction speech.',
      conceptsRecycledFromPrevious: [],
      conceptsPreparingForNext: ['Verb BE foundations for Present Simple action verbs in Unit 2.']
    },
    {
      unitId: 'unit_a1_2',
      unitNumber: 2,
      title: 'Daily Routines, Work & Time Management',
      communicativePurpose: 'Describe everyday schedules, work habits, frequency of activities, and tell time.',
      realWorldSituations: [
        'Discussing work schedules with a manager',
        'Scheduling meetings with colleagues',
        'Describing morning/evening routines to friends',
        'Asking for time at train stations or airports'
      ],
      prerequisiteKnowledge: ['g_a1_01', 'g_a1_02', 'Unit 1 personal identity vocabulary'],
      grammarIntroduced: ['g_a1_04', 'g_a1_07', 'g_a1_08', 'g_a1_09', 'g_a1_10'],
      grammarRecycled: ['g_a1_01', 'g_a1_02', 'g_a1_03'],
      vocabularyDomains: ['Time & Days', 'Daily Routines', 'Workplace Activities'],
      lexicalChunks: ['What time do you...?', 'I usually get up at...', 'Every day I...', 'From 9 to 5'],
      collocations: ['get up early', 'have breakfast', 'start work', 'go home', 'work hard'],
      sentencePatterns: ['Subject + Verb(s/es) + Time Expression', 'Subject + Frequency Adverb + Verb'],
      pronunciationTargets: ['Third-person -s/-es endings (/s/, /z/, /ɪz/)', 'Sentence stress on content verbs'],
      listeningTargets: ['Extract specific times and days from a 4-line spoken routine at 120 WPM', 'Identify frequency adverbs'],
      speakingTargets: ['Express daily routine in chronological order', 'Ask peers about their work hours'],
      readingTargets: ['Read weekly work schedules and digital calendar entries', 'Understand 4-line routine descriptions'],
      writingTargets: ['Write a 4-sentence description of a daily routine', 'Fill in a calendar planner with time logs'],
      interactionTargets: ['Ask about time', 'Discuss weekend vs weekday habits', 'Confirm meeting times'],
      mediationTargets: ['Understand a simple posted schedule and inform a peer of opening hours'],
      commonLearnerErrors: ['He live -> He lives', 'He don\'t -> He doesn\'t', 'I go at home -> I go home'],
      canDoOutcomes: [
        'Can describe daily routines using Present Simple affirmative and negative forms.',
        'Can ask and answer simple questions about time, habits, and schedules.'
      ],
      unitAssessmentFocus: 'Mastery of third-person singular -s endings, auxiliary DO/DOES inversion, and time expressions.',
      conceptsRecycledFromPrevious: ['Verb BE from Unit 1 combined with Present Simple action verbs.'],
      conceptsPreparingForNext: ['Daily habit language prepares for describing family routines in Unit 3.']
    },
    {
      unitId: 'unit_a1_3',
      unitNumber: 3,
      title: 'Family, Home & Immediate Surroundings',
      communicativePurpose: 'Describe family members, personal relationships, living spaces, rooms, and domestic objects.',
      realWorldSituations: [
        'Showing family photos to friends',
        'Describing home or apartment to a potential roommate',
        'Locating missing household items',
        'Welcoming guests into your home'
      ],
      prerequisiteKnowledge: ['Unit 1 & 2 grammar and vocabulary'],
      grammarIntroduced: ['g_a1_11', 'g_a1_12', 'g_a1_13'],
      grammarRecycled: ['g_a1_01', 'g_a1_02', 'g_a1_04', 'g_a1_07'],
      vocabularyDomains: ['Family & Relationships', 'Home & Rooms', 'Furniture & Household Objects'],
      lexicalChunks: ['There is a...', 'There are two...', 'This is my...', 'Where is the...?'],
      collocations: ['living room', 'master bedroom', 'older brother', 'younger sister', 'next to the table'],
      sentencePatterns: ['There is/are + Noun + Prepositional Phrase', 'Possessor\'s + Noun'],
      pronunciationTargets: ['Plural noun endings (/s/, /z/, /ɪz/)', 'Voiced /ð/ in "there is / there are"'],
      listeningTargets: ['Identify family tree relationships and room layouts from short audio dialogues at 125 WPM'],
      speakingTargets: ['Describe family photo with 5 sentences', 'Explain location of objects in a room'],
      readingTargets: ['Read apartment floor plan labels and rental listings', 'Understand short family descriptions'],
      writingTargets: ['Write 5 sentences describing your living room', 'Label family tree diagrams correctly'],
      interactionTargets: ['Ask about family size', 'Inquire about room features', 'Offer items to visitors'],
      mediationTargets: ['Relay message about where household items are kept in an apartment'],
      commonLearnerErrors: ['There are a table -> There is a table', 'My father car -> My father\'s car', 'This is my brothers -> These are my brothers'],
      canDoOutcomes: [
        'Can describe family members, their ages and occupations.',
        'Can describe a room or home using "there is/are" and prepositions of location.'
      ],
      unitAssessmentFocus: 'Correct usage of "There is/are", possessive \'s, and location prepositions.',
      conceptsRecycledFromPrevious: ['Possessive adjectives from Unit 1 combined with possessive \'s.'],
      conceptsPreparingForNext: ['Plural nouns and objects prepare for shopping and quantities in Unit 4.']
    },
    {
      unitId: 'unit_a1_4',
      unitNumber: 4,
      title: 'Food, Shopping, Prices & Ordering',
      communicativePurpose: 'Buy groceries, order food at restaurants, ask for prices, express food preferences and quantities.',
      realWorldSituations: [
        'Ordering food and drink at a cafe or restaurant',
        'Buying groceries at a local market or supermarket',
        'Asking prices and paying at a checkout',
        'Discussing meal preferences with friends'
      ],
      prerequisiteKnowledge: ['Unit 1-3 core structures, numbers, and basic plurals'],
      grammarIntroduced: ['g_a1_14', 'g_a1_15'],
      grammarRecycled: ['g_a1_01', 'g_a1_05', 'g_a1_11', 'g_a1_13'],
      vocabularyDomains: ['Food & Drinks', 'Meals & Dining', 'Money, Prices & Clothes'],
      lexicalChunks: ['I\'d like...', 'How much is...?', 'Here you go', 'Can I have the check, please?'],
      collocations: ['hot coffee', 'cup of tea', 'bottle of water', 'too expensive', 'pay by card'],
      sentencePatterns: ['I\'d like + [Noun / Quantity]', 'How much is/are + Demonstrative + Noun?'],
      pronunciationTargets: ['Polite intonation on requests', 'Price numbers and currency stress ($10.50, £15)'],
      listeningTargets: ['Extract prices, food items, and quantities from cafe dialogue at 130 WPM'],
      speakingTargets: ['Role-play cafe ordering', 'Ask prices of clothes/food items at a market stall'],
      readingTargets: ['Read restaurant menus, grocery price tags, and shopping receipts'],
      writingTargets: ['Write a short grocery shopping list', 'Fill out a simple online food order form'],
      interactionTargets: ['Order meals politely', 'Ask for total price', 'Handle simple payment interactions'],
      mediationTargets: ['Translate simple menu options or total price info for a non-English speaking friend'],
      commonLearnerErrors: ['How much it cost? -> How much is it?', 'I want a coffee -> I\'d like a coffee, please', 'Some apples / some water confusion'],
      canDoOutcomes: [
        'Can order food and drink in a cafe using polite formulaic language.',
        'Can ask for prices and buy basic items in a shop or market.'
      ],
      unitAssessmentFocus: 'Differentiating countable vs uncountable quantifiers, demonstratives, and price inquiry forms.',
      conceptsRecycledFromPrevious: ['Demonstratives (this/that/these/those) combined with plural nouns from Unit 3.'],
      conceptsPreparingForNext: ['Food preferences prepare for general likes and hobbies in Unit 5.']
    },
    {
      unitId: 'unit_a1_5',
      unitNumber: 5,
      title: 'Free Time, Hobbies, Likes & Dislikes',
      communicativePurpose: 'Discuss leisure activities, sports, entertainment, express abilities, likes, and make simple plans.',
      realWorldSituations: [
        'Talking about weekend plans with colleagues',
        'Joining a gym or sports club',
        'Expressing music/movie preferences in casual chat',
        'Inviting a peer to a coffee or leisure event'
      ],
      prerequisiteKnowledge: ['Unit 1-4 present simple verbs and routine vocabulary'],
      grammarIntroduced: ['g_a1_16', 'g_a1_17'],
      grammarRecycled: ['g_a1_04', 'g_a1_08', 'g_a1_10'],
      vocabularyDomains: ['Hobbies & Free Time', 'Sports & Fitness', 'Music, Movies & Entertainment'],
      lexicalChunks: ['I like...', 'I love...', 'I can play...', 'Do you want to...?', 'Sounds good!'],
      collocations: ['play football', 'listen to music', 'watch movies', 'go swimming', 'play guitar'],
      sentencePatterns: ['Subject + like/love/hate + Verb-ing', 'Subject + CAN / CAN\'T + Verb (infinitive)'],
      pronunciationTargets: ['Weak form of "can" /kən/ vs strong negative "can\'t" /kænt/ or /kɑːnt/'],
      listeningTargets: ['Identify hobbies, abilities, and likes in a 4-turn dialogue at 135 WPM'],
      speakingTargets: ['State 3 things you can/can\'t do', 'Express music/sport preferences in peer exchange'],
      readingTargets: ['Read sports club flyers, event schedules, and social media hobby profiles'],
      writingTargets: ['Write a 5-sentence profile of your weekend hobbies', 'Draft a short invitation message'],
      interactionTargets: ['Express likes and dislikes', 'Accept/decline simple leisure invitations'],
      mediationTargets: ['Relay event time and location details from a flyer to a classmate'],
      commonLearnerErrors: ['I like play -> I like playing', 'I can to swim -> I can swim', 'I no like -> I don\'t like'],
      canDoOutcomes: [
        'Can express abilities using modal "can" and "can\'t".',
        'Can state likes, dislikes, and hobbies using gerund structures.'
      ],
      unitAssessmentFocus: 'Modal "can" vs "can\'t" pronunciation/structure, gerund usage after verbs of preference.',
      conceptsRecycledFromPrevious: ['Present simple negatives (don\'t like) and frequency expressions from Unit 2.'],
      conceptsPreparingForNext: ['Leisure places in town prepare for directions and travel in Unit 6.']
    },
    {
      unitId: 'unit_a1_6',
      unitNumber: 6,
      title: 'Local Places, Directions & Simple Past Experiences',
      communicativePurpose: 'Navigate town, ask/give basic directions, describe recent past events, and complete A1 milestone.',
      realWorldSituations: [
        'Asking a passerby for directions to a station/hotel',
        'Reporting yesterday\'s activities or last weekend\'s trip',
        'Describing a holiday destination in simple terms',
        'Completing the A1 CEFR exit evaluation'
      ],
      prerequisiteKnowledge: ['All A1 Units (1 through 5) accumulated language'],
      grammarIntroduced: ['g_a1_18'],
      grammarRecycled: ['g_a1_01', 'g_a1_03', 'g_a1_04', 'g_a1_13', 'g_a1_16'],
      vocabularyDomains: ['Town & Buildings', 'Transportation & Travel', 'Past Time Expressions'],
      lexicalChunks: ['Excuse me, where is...?', 'Turn left', 'Go straight', 'Was / Were', 'Last weekend I...'],
      collocations: ['bus stop', 'train station', 'turn left', 'go straight on', 'next to the bank'],
      sentencePatterns: ['Imperative + Direction', 'Subject + was/were + Place/Adjective', 'Subject + Past Verb + Time'],
      pronunciationTargets: ['Imperative command intonation', 'Weak vs strong forms of was /wəz/ and were /wə/'],
      listeningTargets: ['Follow 3-step directional instructions at 140 WPM', 'Understand short past trip summaries'],
      speakingTargets: ['Give 3-step directions using a map', 'Summarize last weekend in a 30-second continuous monologue'],
      readingTargets: ['Read street maps, tourist city guides, and short postcard messages'],
      writingTargets: ['Write 5 sentences about last weekend', 'Write step-by-step directions to your house'],
      interactionTargets: ['Ask for and confirm street directions', 'Share simple past weekend news with peers'],
      mediationTargets: ['Guide a peer on a simple map using English direction terms'],
      commonLearnerErrors: ['Where is bank? -> Where is the bank?', 'Turn in left -> Turn left', 'I was go -> I went / I was at'],
      canDoOutcomes: [
        'Can ask for and give simple directions using imperatives and location prepositions.',
        'Can describe simple past events, locations, and weekend experiences.'
      ],
      unitAssessmentFocus: 'Synthesis of direction imperatives, simple past BE (was/were), and full A1 cumulative mastery.',
      conceptsRecycledFromPrevious: ['Prepositions of place from Unit 1 & 3 combined with movement imperatives.'],
      conceptsPreparingForNext: ['Prepares for full Past Simple regular/irregular verbs and Present Continuous in CEFR A2.']
    }
  ],

  // ============================================================================
  // SECTION 2: COMPLETE A1 GRAMMAR PROGRESSION MAP (18 TOPICS)
  // ============================================================================
  grammarProgression: [
    {
      id: 'g_a1_01',
      topic: 'Verb BE (Present Simple Affirmative & Contractions)',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'verb_be',
      structure: 'Subject + BE (am / is / are) + [Noun / Adjective / Place]',
      explanation: 'Use the verb BE to introduce name, nationality, origin, and profession.',
      commonErrors: ['I doctor -> I\'m a doctor', 'You is -> You are', 'She am -> She is'],
      prerequisites: [],
      sentencePatterns: ['I am David.', 'She is a teacher.', 'They are from Madrid.'],
      controlledPracticeRequirement: 'Matching subject pronouns to am/is/are forms.',
      guidedProductionRequirement: 'Completing personal identity cards with correct BE contractions.',
      independentProductionRequirement: '3-sentence spoken and written self-introduction.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2', 'lesson_a1_1_3'],
        unitReviewId: ['unit_a1_1_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_02',
      topic: 'Personal Pronouns & Possessive Adjectives',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'pronouns',
      structure: 'My / Your / His / Her / Our / Their + Noun',
      explanation: 'Possessive adjectives show ownership or connection before a noun.',
      commonErrors: ['He name is -> His name is', 'My is David -> My name is David'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['My name is Maria.', 'His job is interesting.', 'Our office is in London.'],
      controlledPracticeRequirement: 'Selecting possessive adjective based on subject pronoun cue.',
      guidedProductionRequirement: 'Filling gap-texts describing colleagues and family members.',
      independentProductionRequirement: 'Introducing a peer to the group using possessive forms.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2'],
        unitReviewId: ['unit_a1_1_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_03',
      topic: 'Prepositions of Place (in, from, at)',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'prepositions',
      structure: 'from + [Country/City], in + [City/Country], at + [Company/School]',
      explanation: 'Use "from" for origin, "in" for residence/city, and "at" for workplace/institution.',
      commonErrors: ['I live at Madrid -> I live in Madrid', 'I am from in Spain -> I am from Spain'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['I am from India.', 'He lives in London.', 'She works at Google.'],
      controlledPracticeRequirement: 'Choosing between in, from, and at in place contexts.',
      guidedProductionRequirement: 'Building origin and location sentences from visual prompts.',
      independentProductionRequirement: 'Answering origin and residence questions in real-time.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2', 'lesson_a1_2_16'],
        unitReviewId: ['unit_a1_1_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_04',
      topic: 'Present Simple Affirmative (Action Verbs)',
      cefr: 'A1',
      unitId: 'unit_a1_2',
      introductionLessonId: 'lesson_a1_2_16',
      category: 'tenses',
      structure: 'Subject + Verb + Object',
      explanation: 'Describe daily habits, routines, and permanent states using action verbs.',
      commonErrors: ['I am live in Delhi -> I live in Delhi', 'They works -> They work'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['I live in Tokyo.', 'We work in an office.', 'You study English.'],
      controlledPracticeRequirement: 'Matching action verbs with routine nouns.',
      guidedProductionRequirement: 'Unscrambling affirmative SVO daily routine sentences.',
      independentProductionRequirement: 'Describing 3 regular weekday activities.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_2_17', 'lesson_a1_3_31'],
        unitReviewId: ['unit_a1_2_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_05',
      topic: 'Question Formation with BE Inversion & WH- Words',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_2',
      category: 'questions',
      structure: 'WH- + BE + Subject?',
      explanation: 'Invert the verb BE and the subject to ask open questions.',
      commonErrors: ['What your name is? -> What is your name?', 'Where you are from? -> Where are you from?'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['What is your name?', 'Where are you from?', 'Who is he?'],
      controlledPracticeRequirement: 'Reordering scrambled question words.',
      guidedProductionRequirement: 'Matching question prompts with identity answers.',
      independentProductionRequirement: 'Conducting a 3-question peer interview.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_3', 'lesson_a1_2_17'],
        unitReviewId: ['unit_a1_1_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_06',
      topic: 'Negative Verb BE forms & Contractions',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_3',
      category: 'verb_be',
      structure: 'Subject + BE + NOT (isn\'t / aren\'t / \'m not)',
      explanation: 'Express non-identity or negative states using contracted BE forms.',
      commonErrors: ['I not am student -> I\'m not a student', 'He don\'t be doctor -> He isn\'t a doctor'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['I\'m not a student.', 'He isn\'t from Spain.', 'They aren\'t at work.'],
      controlledPracticeRequirement: 'Converting affirmative BE statements to negative.',
      guidedProductionRequirement: 'Correcting false statements about identity.',
      independentProductionRequirement: 'Stating 2 things you are not.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_2_16'],
        unitReviewId: ['unit_a1_1_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_07',
      topic: 'Present Simple Third-Person Singular (-s / -es / -ies)',
      cefr: 'A1',
      unitId: 'unit_a1_2',
      introductionLessonId: 'lesson_a1_2_17',
      category: 'tenses',
      structure: 'He / She / It + Verb(s/es) + Object',
      explanation: 'Add -s, -es, or -ies to action verbs when describing third-person daily routines.',
      commonErrors: ['She live in Paris -> She lives in Paris', 'He go to work -> He goes to work'],
      prerequisites: ['g_a1_04'],
      sentencePatterns: ['She lives in Madrid.', 'He works at a hospital.', 'My brother studies English.'],
      controlledPracticeRequirement: 'Applying spelling rules (-s, -es, -ies) to third-person verbs.',
      guidedProductionRequirement: 'Writing routine statements about a colleague based on notes.',
      independentProductionRequirement: 'Describing a friend\'s daily routine in 4 sentences.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_2_18', 'lesson_a1_3_31'],
        unitReviewId: ['unit_a1_2_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_08',
      topic: 'Present Simple Negatives (don\'t / doesn\'t)',
      cefr: 'A1',
      unitId: 'unit_a1_2',
      introductionLessonId: 'lesson_a1_2_18',
      category: 'tenses',
      structure: 'Subject + DON\'T / DOESN\'T + Verb (infinitive)',
      explanation: 'Use auxiliary don\'t (I/you/we/they) and doesn\'t (he/she/it) for negative habits.',
      commonErrors: ['He don\'t live here -> He doesn\'t live here', 'She doesn\'t lives -> She doesn\'t live'],
      prerequisites: ['g_a1_04', 'g_a1_07'],
      sentencePatterns: ['I don\'t work on Sunday.', 'She doesn\'t drink coffee.', 'We don\'t live in Paris.'],
      controlledPracticeRequirement: 'Selecting don\'t vs doesn\'t for subject prompts.',
      guidedProductionRequirement: 'Transforming affirmative habits into negative statements.',
      independentProductionRequirement: 'Stating 3 activities you do not do during weekdays.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_3_31'],
        unitReviewId: ['unit_a1_2_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_09',
      topic: 'Present Simple Questions with DO / DOES & WH- Words',
      cefr: 'A1',
      unitId: 'unit_a1_2',
      introductionLessonId: 'lesson_a1_2_18',
      category: 'questions',
      structure: '(WH-) + DO / DOES + Subject + Verb (infinitive)?',
      explanation: 'Use auxiliary DO or DOES to form open and Yes/No questions in Present Simple.',
      commonErrors: ['Where you live? -> Where do you live?', 'Does she lives here? -> Does she live here?'],
      prerequisites: ['g_a1_04', 'g_a1_07'],
      sentencePatterns: ['Do you live in Tokyo?', 'Where does she work?', 'What time do you get up?'],
      controlledPracticeRequirement: 'Inserting DO or DOES into scrambled question strings.',
      guidedProductionRequirement: 'Creating questions from answer prompts.',
      independentProductionRequirement: 'Asking a peer 3 questions about their daily routine.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_3_32'],
        unitReviewId: ['unit_a1_2_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_10',
      topic: 'Frequency Adverbs & Time Expressions',
      cefr: 'A1',
      unitId: 'unit_a1_2',
      introductionLessonId: 'lesson_a1_2_19',
      category: 'adverbs',
      structure: 'Subject + Adverb (always/usually/sometimes/never) + Verb | Verb + at 8 o\'clock / every day',
      explanation: 'Express how often an action happens and specify time points.',
      commonErrors: ['I get up always early -> I always get up early', 'I go every day -> Every day I go'],
      prerequisites: ['g_a1_04'],
      sentencePatterns: ['I always get up at 7 AM.', 'She usually drinks tea.', 'We never work on Sunday.'],
      controlledPracticeRequirement: 'Ordering frequency adverbs from 0% (never) to 100% (always).',
      guidedProductionRequirement: 'Inserting frequency adverbs into correct position before main verbs.',
      independentProductionRequirement: 'Describing 3 habits using frequency adverbs.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_5_61'],
        unitReviewId: ['unit_a1_2_review'],
        progressCheckId: 'a1_mid_progress_check'
      }
    },
    {
      id: 'g_a1_11',
      topic: 'Plural Nouns (Regular -s/-es & Irregular men/women/children)',
      cefr: 'A1',
      unitId: 'unit_a1_3',
      introductionLessonId: 'lesson_a1_3_31',
      category: 'determiners',
      structure: 'Singular Noun + -s/-es | Irregular Plurals',
      explanation: 'Form plural nouns for family members, objects, and people.',
      commonErrors: ['Two mans -> Two men', 'Three childs -> Three children', 'Brotheres -> Brothers'],
      prerequisites: ['g_a1_01'],
      sentencePatterns: ['I have two sisters.', 'There are three men in the room.', 'Four children play outside.'],
      controlledPracticeRequirement: 'Matching singular nouns with their correct plural forms.',
      guidedProductionRequirement: 'Counting objects in room pictures and writing plural phrases.',
      independentProductionRequirement: 'Listing family members and household items.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_3_32', 'lesson_a1_4_46'],
        unitReviewId: ['unit_a1_3_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_12',
      topic: 'Possessive \'s & Possessive Nouns',
      cefr: 'A1',
      unitId: 'unit_a1_3',
      introductionLessonId: 'lesson_a1_3_31',
      category: 'pronouns',
      structure: 'Owner + \'s + Noun',
      explanation: 'Show relationship or ownership using possessive apostrophe-s.',
      commonErrors: ['The car of David -> David\'s car', 'My sister house -> My sister\'s house'],
      prerequisites: ['g_a1_02'],
      sentencePatterns: ['This is David\'s sister.', 'My father\'s car is red.', 'Sarah\'s room is large.'],
      controlledPracticeRequirement: 'Adding possessive \'s to noun prompts.',
      guidedProductionRequirement: 'Building family tree ownership descriptions.',
      independentProductionRequirement: 'Describing who owns 3 personal items in your room.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_3_32'],
        unitReviewId: ['unit_a1_3_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_13',
      topic: 'There is / There are & Prepositions of Location',
      cefr: 'A1',
      unitId: 'unit_a1_3',
      introductionLessonId: 'lesson_a1_3_32',
      category: 'prepositions',
      structure: 'There is + Singular / Uncountable | There are + Plural + Prepositional Phrase',
      explanation: 'State the presence and position of items in a room or building.',
      commonErrors: ['There is two tables -> There are two tables', 'In my room have a bed -> There is a bed in my room'],
      prerequisites: ['g_a1_11'],
      sentencePatterns: ['There is a bed in the bedroom.', 'There are three books on the table.', 'Is there a clock?'],
      controlledPracticeRequirement: 'Choosing between "There is" and "There are" based on noun count.',
      guidedProductionRequirement: 'Describing a room picture using prepositions (on, under, in, next to).',
      independentProductionRequirement: '5-sentence spoken description of your living room.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_4_46', 'lesson_a1_6_76'],
        unitReviewId: ['unit_a1_3_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_14',
      topic: 'Countable vs Uncountable Nouns & Quantifiers (a, an, some, any)',
      cefr: 'A1',
      unitId: 'unit_a1_4',
      introductionLessonId: 'lesson_a1_4_46',
      category: 'determiners',
      structure: 'a/an + Singular Countable | some/any + Plural / Uncountable',
      explanation: 'Use "a/an" for single countable items, "some" for affirmative quantities, "any" for questions/negatives.',
      commonErrors: ['a water -> some water', 'I don\'t have some money -> I don\'t have any money'],
      prerequisites: ['g_a1_11'],
      sentencePatterns: ['I\'d like an apple.', 'There is some coffee.', 'Is there any milk?', 'We don\'t have any bread.'],
      controlledPracticeRequirement: 'Filling gap-texts with a, an, some, or any.',
      guidedProductionRequirement: 'Writing a grocery shopping list with quantifiers.',
      independentProductionRequirement: 'Asking for 3 food items in a cafe role-play.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_4_47'],
        unitReviewId: ['unit_a1_4_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_15',
      topic: 'Demonstratives (this, that, these, those) & Price Questions',
      cefr: 'A1',
      unitId: 'unit_a1_4',
      introductionLessonId: 'lesson_a1_4_47',
      category: 'determiners',
      structure: 'This/That (Singular) | These/Those (Plural) | How much is/are + Demonstrative?',
      explanation: 'Point to items near or far, singular or plural, and ask their prices.',
      commonErrors: ['How much is these shoes? -> How much are these shoes?', 'This are my shirts -> These are my shirts'],
      prerequisites: ['g_a1_11', 'g_a1_14'],
      sentencePatterns: ['How much is this shirt?', 'How much are those shoes?', 'This coat is $50.'],
      controlledPracticeRequirement: 'Selecting demonstratives based on distance and number cues.',
      guidedProductionRequirement: 'Asking prices for items in a clothing shop dialog.',
      independentProductionRequirement: 'Conducting a market shopping transaction.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_5_61'],
        unitReviewId: ['unit_a1_4_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_16',
      topic: 'Modal CAN / CAN\'T for Ability & Polite Requests',
      cefr: 'A1',
      unitId: 'unit_a1_5',
      introductionLessonId: 'lesson_a1_5_61',
      category: 'modals',
      structure: 'Subject + CAN / CAN\'T + Verb (bare infinitive)',
      explanation: 'Express physical abilities, talents, and ask polite permission/requests.',
      commonErrors: ['I can to swim -> I can swim', 'He cans play -> He can play', 'She don\'t can -> She can\'t'],
      prerequisites: ['g_a1_04'],
      sentencePatterns: ['I can speak English.', 'He can\'t drive a car.', 'Can I have a coffee, please?'],
      controlledPracticeRequirement: 'Matching abilities with activity pictures.',
      guidedProductionRequirement: 'Building true/false ability sentences about yourself.',
      independentProductionRequirement: 'Stating 3 talents you have and 2 things you cannot do.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_6_76'],
        unitReviewId: ['unit_a1_5_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_17',
      topic: 'Verbs of Like / Dislike + Gerund (-ing form)',
      cefr: 'A1',
      unitId: 'unit_a1_5',
      introductionLessonId: 'lesson_a1_5_62',
      category: 'tenses',
      structure: 'Subject + like / love / hate / enjoy + Verb-ing',
      explanation: 'Express personal preferences and feelings regarding leisure activities.',
      commonErrors: ['I like play football -> I like playing football', 'She loves cook -> She loves cooking'],
      prerequisites: ['g_a1_04', 'g_a1_08'],
      sentencePatterns: ['I like playing tennis.', 'She loves cooking Italian food.', 'We don\'t like getting up early.'],
      controlledPracticeRequirement: 'Transforming base verbs into gerunds after preference verbs.',
      guidedProductionRequirement: 'Writing leisure preference statements from survey data.',
      independentProductionRequirement: 'Sharing your top 3 hobbies in a group chat.',
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_6_76'],
        unitReviewId: ['unit_a1_5_review'],
        progressCheckId: 'a1_final_assessment'
      }
    },
    {
      id: 'g_a1_18',
      topic: 'Direction Imperatives & Past Simple Verb BE (was / were)',
      cefr: 'A1',
      unitId: 'unit_a1_6',
      introductionLessonId: 'lesson_a1_6_76',
      category: 'verb_be',
      structure: 'Verb (Imperative) + Direction | Subject + WAS / WERE + Place/Adjective',
      explanation: 'Give direct instructions for navigation and describe simple past locations or states.',
      commonErrors: ['You turn left -> Turn left', 'I were at home -> I was at home', 'They was happy -> They were happy'],
      prerequisites: ['g_a1_01', 'g_a1_03'],
      sentencePatterns: ['Turn left at the bank.', 'Go straight on.', 'I was at the beach yesterday.', 'Where were you last night?'],
      controlledPracticeRequirement: 'Selecting was vs were for subject pronouns in past contexts.',
      guidedProductionRequirement: 'Giving step-by-step map directions and writing a 3-sentence weekend log.',
      independentProductionRequirement: 'Giving directions to a partner and summarizing last weekend in 4 sentences.',
      recyclingSchedule: {
        reviewLessonIds: [],
        unitReviewId: ['unit_a1_6_review'],
        progressCheckId: 'a1_final_assessment'
      }
    }
  ],

  // ============================================================================
  // SECTION 3: COMPLETE A1 VOCABULARY DOMAIN MAP (8 CORE DOMAINS)
  // ============================================================================
  vocabularyDomains: [
    {
      domainId: 'vdom_01',
      domainName: 'Personal Identity, Greetings & Professions',
      purpose: 'Provide core lexical items needed to introduce oneself, state job titles, and greet people politely.',
      approximateRange: '60-80 words',
      priority: 'P0',
      prerequisiteDomains: [],
      collocationOpportunities: ['english teacher', 'software engineer', 'project manager', 'good morning'],
      lexicalChunkOpportunities: ['Hello! My name is...', 'Nice to meet you', 'I\'m a...'],
      wordFamilyOpportunities: ['teach -> teacher -> teaching', 'manage -> manager -> management'],
      communicativeFunctions: ['Introducing yourself', 'Greeting people', 'Stating occupation'],
      firstIntroductionUnit: 'unit_a1_1',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3'],
      assessmentPoints: ['lesson_a1_1_1_quiz', 'unit_a1_1_review', 'a1_mid_progress_check']
    },
    {
      domainId: 'vdom_02',
      domainName: 'Countries, Cities, Origins & Nationalities',
      purpose: 'Enable learners to discuss geographical origins, home cities, and languages spoken.',
      approximateRange: '40-50 words',
      priority: 'P0',
      prerequisiteDomains: ['vdom_01'],
      collocationOpportunities: ['come from', 'live in', 'capital city', 'native language'],
      lexicalChunkOpportunities: ['Where are you from?', 'I\'m from...', 'I live in...'],
      wordFamilyOpportunities: ['Spain -> Spanish', 'Japan -> Japanese', 'India -> Indian'],
      communicativeFunctions: ['Asking and stating origin', 'Discussing residence'],
      firstIntroductionUnit: 'unit_a1_1',
      recyclingUnits: ['unit_a1_2', 'unit_a1_6'],
      assessmentPoints: ['unit_a1_1_review', 'a1_mid_progress_check']
    },
    {
      domainId: 'vdom_03',
      domainName: 'Time, Days, Months, Numbers & Daily Routines',
      purpose: 'Equip learners with numerical, temporal, and routine action terms to manage daily schedules.',
      approximateRange: '80-100 words',
      priority: 'P0',
      prerequisiteDomains: ['vdom_01'],
      collocationOpportunities: ['get up early', 'have breakfast', 'start work', 'at 8 o\'clock', 'every day'],
      lexicalChunkOpportunities: ['What time is it?', 'It\'s 9 AM', 'From Monday to Friday'],
      wordFamilyOpportunities: ['day -> daily', 'week -> weekly'],
      communicativeFunctions: ['Telling time', 'Describing daily routines', 'Scheduling meetings'],
      firstIntroductionUnit: 'unit_a1_2',
      recyclingUnits: ['unit_a1_3', 'unit_a1_5'],
      assessmentPoints: ['unit_a1_2_review', 'a1_mid_progress_check']
    },
    {
      domainId: 'vdom_04',
      domainName: 'Family, Relationships & Personal Description',
      purpose: 'Allow learners to name family members, express age, and describe basic physical/personality traits.',
      approximateRange: '50-60 words',
      priority: 'P0',
      prerequisiteDomains: ['vdom_01'],
      collocationOpportunities: ['older brother', 'younger sister', 'best friend', 'married couple'],
      lexicalChunkOpportunities: ['This is my...', 'She is... years old', 'I have two...'],
      wordFamilyOpportunities: ['father -> paternal', 'friend -> friendly'],
      communicativeFunctions: ['Describing family trees', 'Sharing personal photos'],
      firstIntroductionUnit: 'unit_a1_3',
      recyclingUnits: ['unit_a1_4', 'unit_a1_5'],
      assessmentPoints: ['unit_a1_3_review', 'a1_mid_progress_check']
    },
    {
      domainId: 'vdom_05',
      domainName: 'Home, Rooms, Furniture & Domestic Objects',
      purpose: 'Name common household spaces, furniture items, and prepositions for locating possessions.',
      approximateRange: '60-70 words',
      priority: 'P1',
      prerequisiteDomains: ['vdom_04'],
      collocationOpportunities: ['living room', 'master bedroom', 'on the table', 'next to the bed'],
      lexicalChunkOpportunities: ['There is a...', 'Where is the...?', 'In my apartment...'],
      wordFamilyOpportunities: ['bed -> bedroom', 'bath -> bathroom'],
      communicativeFunctions: ['Describing living spaces', 'Locating household items'],
      firstIntroductionUnit: 'unit_a1_3',
      recyclingUnits: ['unit_a1_4', 'unit_a1_6'],
      assessmentPoints: ['unit_a1_3_review', 'a1_final_assessment']
    },
    {
      domainId: 'vdom_06',
      domainName: 'Food, Drinks, Meals & Dining Out',
      purpose: 'Provide vocabulary for groceries, cafe ordering, dishes, and dining requests.',
      approximateRange: '70-90 words',
      priority: 'P0',
      prerequisiteDomains: ['vdom_03'],
      collocationOpportunities: ['hot coffee', 'cup of tea', 'bottle of water', 'delicious food', 'pay the check'],
      lexicalChunkOpportunities: ['I\'d like...', 'Can I have...?', 'Check please'],
      wordFamilyOpportunities: ['cook -> cooker -> cooking', 'drink -> drinkable'],
      communicativeFunctions: ['Ordering meals', 'Buying groceries', 'Expressing taste preferences'],
      firstIntroductionUnit: 'unit_a1_4',
      recyclingUnits: ['unit_a1_5'],
      assessmentPoints: ['unit_a1_4_review', 'a1_final_assessment']
    },
    {
      domainId: 'vdom_07',
      domainName: 'Money, Prices, Clothes & Shopping',
      purpose: 'Discuss garment items, colors, prices, payment methods, and transaction interactions.',
      approximateRange: '50-60 words',
      priority: 'P1',
      prerequisiteDomains: ['vdom_06'],
      collocationOpportunities: ['too expensive', 'pay by card', 'cash payment', 'blue jeans', 'winter coat'],
      lexicalChunkOpportunities: ['How much is...?', 'I\'ll take it', 'Here you go'],
      wordFamilyOpportunities: ['shop -> shopper -> shopping', 'pay -> payment'],
      communicativeFunctions: ['Asking prices', 'Buying clothes', 'Paying at cash register'],
      firstIntroductionUnit: 'unit_a1_4',
      recyclingUnits: ['unit_a1_6'],
      assessmentPoints: ['unit_a1_4_review', 'a1_final_assessment']
    },
    {
      domainId: 'vdom_08',
      domainName: 'Free Time, Hobbies, Town Places & Transport',
      purpose: 'Describe leisure habits, sports, transportation modes, and navigation landmarks.',
      approximateRange: '70-80 words',
      priority: 'P1',
      prerequisiteDomains: ['vdom_03', 'vdom_05'],
      collocationOpportunities: ['play football', 'listen to music', 'bus stop', 'train station', 'turn left'],
      lexicalChunkOpportunities: ['Excuse me, where is...?', 'I like...', 'Go straight on'],
      wordFamilyOpportunities: ['drive -> driver -> driving', 'travel -> traveler'],
      communicativeFunctions: ['Sharing hobbies', 'Asking for directions', 'Planning leisure'],
      firstIntroductionUnit: 'unit_a1_5',
      recyclingUnits: ['unit_a1_6'],
      assessmentPoints: ['unit_a1_5_review', 'unit_a1_6_review', 'a1_final_assessment']
    }
  ],

  // ============================================================================
  // SECTION 4: COLLOCATION PROGRESSION MAP
  // ============================================================================
  collocationProgression: [
    {
      id: 'col_01',
      type: 'verb_prep',
      combination: 'live in + [City/Country]',
      examples: ['I live in London.', 'She lives in Tokyo.'],
      introductionUnit: 'unit_a1_1',
      practiceStage: 'Stage 6 (Drill)',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3'],
      productiveUse: 'State current residence in self-introductions.',
      assessmentPoint: 'unit_a1_1_review'
    },
    {
      id: 'col_02',
      type: 'verb_prep',
      combination: 'come from + [Country/City]',
      examples: ['I come from Spain.', 'He comes from Mumbai.'],
      introductionUnit: 'unit_a1_1',
      practiceStage: 'Stage 6 (Drill)',
      recyclingUnits: ['unit_a1_2', 'unit_a1_6'],
      productiveUse: 'Answer origin inquiry from peers.',
      assessmentPoint: 'unit_a1_1_review'
    },
    {
      id: 'col_03',
      type: 'adj_noun',
      combination: 'english teacher / software engineer',
      examples: ['I am an English teacher.', 'He is a software engineer.'],
      introductionUnit: 'unit_a1_1',
      practiceStage: 'Stage 4 (Vocabulary Input)',
      recyclingUnits: ['unit_a1_2'],
      productiveUse: 'Name profession accurately with correct indefinite article.',
      assessmentPoint: 'lesson_a1_1_1_quiz'
    },
    {
      id: 'col_04',
      type: 'verb_noun',
      combination: 'get up + early/late',
      examples: ['I get up early every morning.', 'He gets up at 7 AM.'],
      introductionUnit: 'unit_a1_2',
      practiceStage: 'Stage 7 (Dialogue)',
      recyclingUnits: ['unit_a1_3', 'unit_a1_5'],
      productiveUse: 'Describe morning routine schedule.',
      assessmentPoint: 'unit_a1_2_review'
    },
    {
      id: 'col_05',
      type: 'verb_noun',
      combination: 'have + breakfast / lunch / dinner',
      examples: ['We have breakfast at 8.', 'She has lunch at work.'],
      introductionUnit: 'unit_a1_2',
      practiceStage: 'Stage 8 (Sentence Builder)',
      recyclingUnits: ['unit_a1_4'],
      productiveUse: 'Express daily meal habits.',
      assessmentPoint: 'unit_a1_2_review'
    },
    {
      id: 'col_06',
      type: 'adj_noun',
      combination: 'living room / master bedroom',
      examples: ['There is a TV in the living room.', 'The master bedroom is large.'],
      introductionUnit: 'unit_a1_3',
      practiceStage: 'Stage 4 (Visual Input)',
      recyclingUnits: ['unit_a1_4'],
      productiveUse: 'Describe home layout.',
      assessmentPoint: 'unit_a1_3_review'
    },
    {
      id: 'col_07',
      type: 'adj_prep',
      combination: 'next to / in front of / behind + Noun',
      examples: ['The bank is next to the restaurant.', 'My house is behind the school.'],
      introductionUnit: 'unit_a1_3',
      practiceStage: 'Stage 9 (Location Trainer)',
      recyclingUnits: ['unit_a1_6'],
      productiveUse: 'Specify relative locations of objects and buildings.',
      assessmentPoint: 'unit_a1_3_review'
    },
    {
      id: 'col_08',
      type: 'verb_noun',
      combination: 'pay + by card / in cash',
      examples: ['Can I pay by card?', 'I prefer to pay in cash.'],
      introductionUnit: 'unit_a1_4',
      practiceStage: 'Stage 12 (Role-Play)',
      recyclingUnits: ['unit_a1_6'],
      productiveUse: 'Complete checkout transaction in a shop.',
      assessmentPoint: 'unit_a1_4_review'
    },
    {
      id: 'col_09',
      type: 'adv_adj',
      combination: 'too + expensive / very + nice',
      examples: ['This jacket is too expensive.', 'The coffee is very nice.'],
      introductionUnit: 'unit_a1_4',
      practiceStage: 'Stage 10 (Comparison)',
      recyclingUnits: ['unit_a1_5'],
      productiveUse: 'Evaluate prices and product quality.',
      assessmentPoint: 'unit_a1_4_review'
    },
    {
      id: 'col_10',
      type: 'verb_noun',
      combination: 'play football / guitar | listen to music',
      examples: ['I play football on Saturday.', 'She likes listening to music.'],
      introductionUnit: 'unit_a1_5',
      practiceStage: 'Stage 5 (Hobbies Input)',
      recyclingUnits: ['unit_a1_6'],
      productiveUse: 'Discuss free time hobbies.',
      assessmentPoint: 'unit_a1_5_review'
    },
    {
      id: 'col_11',
      type: 'verb_prep',
      combination: 'turn left / turn right / go straight',
      examples: ['Turn left at the hospital.', 'Go straight for two blocks.'],
      introductionUnit: 'unit_a1_6',
      practiceStage: 'Stage 11 (Direction Map)',
      recyclingUnits: [],
      productiveUse: 'Direct someone to a town landmark.',
      assessmentPoint: 'unit_a1_6_review'
    },
    {
      id: 'col_12',
      type: 'functional_chunk',
      combination: 'excuse me + where is...?',
      examples: ['Excuse me, where is the train station?'],
      introductionUnit: 'unit_a1_6',
      practiceStage: 'Stage 14 (Real-World Interaction)',
      recyclingUnits: [],
      productiveUse: 'Initiate direction inquiry politely.',
      assessmentPoint: 'a1_final_assessment'
    }
  ],

  // ============================================================================
  // SECTION 5: LEXICAL CHUNK PROGRESSION SCHEDULE (15 CATEGORIES)
  // ============================================================================
  lexicalChunkSchedule: [
    {
      id: 'chk_01',
      category: 'greetings',
      chunk: 'Hello! / Good morning! / Good afternoon!',
      meaningFunction: 'Initiate polite social encounter during day/evening.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 1 Warm-up audio matching',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3', 'unit_a1_4', 'unit_a1_5', 'unit_a1_6'],
      assessment: 'lesson_a1_1_1_quiz'
    },
    {
      id: 'chk_02',
      category: 'introductions',
      chunk: 'My name is [Name]. / I\'m [Name].',
      meaningFunction: 'State identity to a new acquaintance.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 3 Pronunciation shadow',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3'],
      assessment: 'unit_a1_1_review'
    },
    {
      id: 'chk_03',
      category: 'personal_info',
      chunk: 'I am from [Country]. / I live in [City].',
      meaningFunction: 'State geographic origin and current residence.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 8 Sentence builder',
      recyclingUnits: ['unit_a1_2', 'unit_a1_6'],
      assessment: 'unit_a1_1_review'
    },
    {
      id: 'chk_04',
      category: 'questions',
      chunk: 'Where are you from? / What do you do?',
      meaningFunction: 'Ask peer about origin and occupation.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 12 Q&A pair drill',
      recyclingUnits: ['unit_a1_2'],
      assessment: 'a1_mid_progress_check'
    },
    {
      id: 'chk_05',
      category: 'asking_repetition',
      chunk: 'Could you repeat that, please? / Pardon?',
      meaningFunction: 'Request speaker to repeat unclear speech.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 15 Clarification exercise',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3', 'unit_a1_4', 'unit_a1_5', 'unit_a1_6'],
      assessment: 'a1_mid_progress_check'
    },
    {
      id: 'chk_06',
      category: 'checking_understanding',
      chunk: 'Do you understand? / Is that clear?',
      meaningFunction: 'Verify if listener comprehends message.',
      introductionUnit: 'unit_a1_2',
      practice: 'Stage 7 Work dialogue',
      recyclingUnits: ['unit_a1_4'],
      assessment: 'unit_a1_2_review'
    },
    {
      id: 'chk_07',
      category: 'polite_requests',
      chunk: 'Can I have [item], please? / Could you help me?',
      meaningFunction: 'Request an item or assistance politely.',
      introductionUnit: 'unit_a1_4',
      practice: 'Stage 11 Cafe role-play',
      recyclingUnits: ['unit_a1_5', 'unit_a1_6'],
      assessment: 'unit_a1_4_review'
    },
    {
      id: 'chk_08',
      category: 'shopping',
      chunk: 'How much is this? / I\'ll take it.',
      meaningFunction: 'Inquire price and confirm purchase.',
      introductionUnit: 'unit_a1_4',
      practice: 'Stage 10 Market transaction',
      recyclingUnits: ['unit_a1_6'],
      assessment: 'unit_a1_4_review'
    },
    {
      id: 'chk_09',
      category: 'food',
      chunk: 'I\'d like to order... / Check, please.',
      meaningFunction: 'Order food in restaurant and ask for final bill.',
      introductionUnit: 'unit_a1_4',
      practice: 'Stage 12 Dining role-play',
      recyclingUnits: [],
      assessment: 'unit_a1_4_review'
    },
    {
      id: 'chk_10',
      category: 'directions',
      chunk: 'Excuse me, where is the [place]? / Turn left.',
      meaningFunction: 'Ask for and receive street navigation help.',
      introductionUnit: 'unit_a1_6',
      practice: 'Stage 11 Map navigation task',
      recyclingUnits: [],
      assessment: 'unit_a1_6_review'
    },
    {
      id: 'chk_11',
      category: 'time',
      chunk: 'What time is it? / At 8 o\'clock in the morning.',
      meaningFunction: 'Inquire and specify exact time.',
      introductionUnit: 'unit_a1_2',
      practice: 'Stage 5 Clock matching',
      recyclingUnits: ['unit_a1_5'],
      assessment: 'unit_a1_2_review'
    },
    {
      id: 'chk_12',
      category: 'social_interaction',
      chunk: 'Nice to meet you! / Have a nice day!',
      meaningFunction: 'Polite greeting and parting wish.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 2 Dialogue audio',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3', 'unit_a1_4', 'unit_a1_5', 'unit_a1_6'],
      assessment: 'lesson_a1_1_1_quiz'
    },
    {
      id: 'chk_13',
      category: 'work_study',
      chunk: 'I work as a... / I study at...',
      meaningFunction: 'Describe work function or place of study.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 8 Profile Builder',
      recyclingUnits: ['unit_a1_2'],
      assessment: 'unit_a1_1_review'
    },
    {
      id: 'chk_14',
      category: 'arrangements',
      chunk: 'Are you free on [Day]? / Sounds good!',
      meaningFunction: 'Propose leisure meeting and accept.',
      introductionUnit: 'unit_a1_5',
      practice: 'Stage 13 Invitation exchange',
      recyclingUnits: ['unit_a1_6'],
      assessment: 'unit_a1_5_review'
    },
    {
      id: 'chk_15',
      category: 'closing',
      chunk: 'See you later! / It was nice talking to you.',
      meaningFunction: 'Formally end a social conversation.',
      introductionUnit: 'unit_a1_1',
      practice: 'Stage 18 Lesson Closing',
      recyclingUnits: ['unit_a1_2', 'unit_a1_3', 'unit_a1_4', 'unit_a1_5', 'unit_a1_6'],
      assessment: 'a1_final_assessment'
    }
  ],

  // ============================================================================
  // SECTION 6: STANDALONE PRONUNCIATION PROGRESSION (9 FOCUS AREAS)
  // ============================================================================
  pronunciationProgression: [
    {
      id: 'prn_01',
      focusArea: 'sound_awareness',
      description: 'Differentiate basic English short vs long vowel contrasts (/iː/ as in teacher vs /ɪ/ as in live).',
      phoneticTarget: '/iː/ vs /ɪ/',
      introductionUnit: 'unit_a1_1',
      recycledInUnits: ['unit_a1_2', 'unit_a1_3'],
      targetOutput: 'Clear discrimination between "live" /lɪv/ and "leave" /liːv/.'
    },
    {
      id: 'prn_02',
      focusArea: 'difficult_sounds',
      description: 'Master unvoiced /θ/ and voiced /ð/ consonant friction sounds.',
      phoneticTarget: '/θ/ (think, thanks) & /ð/ (this, there)',
      introductionUnit: 'unit_a1_3',
      recycledInUnits: ['unit_a1_4', 'unit_a1_6'],
      targetOutput: 'Accurate pronunciation of "there is" /ðɛər ɪz/ and "thanks" /θæŋks/.'
    },
    {
      id: 'prn_03',
      focusArea: 'word_stress',
      description: 'Identify primary syllable stress in 2-syllable and 3-syllable professions and nouns.',
      phoneticTarget: 'DOC-tor /ˈdɒktər/, EN-gi-neer /ˌendʒɪˈnɪər/',
      introductionUnit: 'unit_a1_1',
      recycledInUnits: ['unit_a1_2'],
      targetOutput: 'Correct primary stress placement on key vocabulary items.'
    },
    {
      id: 'prn_04',
      focusArea: 'sentence_stress',
      description: 'Stress key content words (nouns, main verbs) while shortening function words (articles, prepositions).',
      phoneticTarget: 'I LIVE in LON-don. /aɪ lɪv ɪn lʌndən/',
      introductionUnit: 'unit_a1_2',
      recycledInUnits: ['unit_a1_3', 'unit_a1_4'],
      targetOutput: 'Rhythmic English sentence cadence.'
    },
    {
      id: 'prn_05',
      focusArea: 'contractions',
      description: 'Produce smooth contracted forms for BE and auxiliaries.',
      phoneticTarget: 'I\'m /aɪm/, He\'s /hiːz/, Don\'t /doʊnt/, Can\'t /kænt/',
      introductionUnit: 'unit_a1_1',
      recycledInUnits: ['unit_a1_2', 'unit_a1_5'],
      targetOutput: 'Natural usage of contractions in spoken English.'
    },
    {
      id: 'prn_06',
      focusArea: 'plural_endings',
      description: 'Apply correct sibilant ending sounds based on preceding consonant voicing.',
      phoneticTarget: '/s/ (cats), /z/ (dogs), /ɪz/ (buses)',
      introductionUnit: 'unit_a1_3',
      recycledInUnits: ['unit_a1_4'],
      targetOutput: 'Audible distinction of plural endings.'
    },
    {
      id: 'prn_07',
      focusArea: 'third_person_endings',
      description: 'Pronounce third-person singular Present Simple verb suffixes accurately.',
      phoneticTarget: '/s/ (works), /z/ (lives), /ɪz/ (teaches)',
      introductionUnit: 'unit_a1_2',
      recycledInUnits: ['unit_a1_3'],
      targetOutput: 'Clear audible third-person -s production.'
    },
    {
      id: 'prn_08',
      focusArea: 'connected_speech',
      description: 'Link final consonant sound of a word to initial vowel sound of the next word.',
      phoneticTarget: 'Live in -> /lɪvɪn/, An engineer -> /ənendʒɪnɪər/',
      introductionUnit: 'unit_a1_1',
      recycledInUnits: ['unit_a1_4', 'unit_a1_6'],
      targetOutput: 'Fluid linking without abrupt pauses between words.'
    },
    {
      id: 'prn_09',
      focusArea: 'intonation',
      description: 'Apply falling intonation for WH- questions and rising intonation for Yes/No questions.',
      phoneticTarget: 'Where do you live? ↘ | Do you live here? ↗',
      introductionUnit: 'unit_a1_1',
      recycledInUnits: ['unit_a1_2', 'unit_a1_4'],
      targetOutput: 'Natural questioning intonation contours.'
    }
  ],

  // ============================================================================
  // SECTION 7: LISTENING PROGRESSION LADDER
  // ============================================================================
  listeningLadder: [
    {
      stepNumber: 1,
      level: 'words',
      unitMapping: 'Unit 1 (Lessons 1-2)',
      speedWPM: 100,
      speakerVariation: 'Single studio voice (Sulafat / Charon)',
      contextAndReducedForms: 'Isolated unreduced citation forms',
      distractorsAndComplexity: 'Zero distractors; clean audio matching',
      taskType: 'Word audio matching & phonetic isolation'
    },
    {
      stepNumber: 2,
      level: 'phrases',
      unitMapping: 'Unit 1 (Lessons 3-4)',
      speedWPM: 110,
      speakerVariation: 'Single studio voice with clear pauses',
      contextAndReducedForms: 'Basic contractions (I\'m, you\'re)',
      distractorsAndComplexity: 'Minimal phonetic distractors (e.g., Spain vs Spain-in)',
      taskType: 'Phrase listening & gap-filling'
    },
    {
      stepNumber: 3,
      level: 'sentences',
      unitMapping: 'Unit 2 (Lessons 1-2)',
      speedWPM: 120,
      speakerVariation: 'Two distinct speakers (Male/Female)',
      contextAndReducedForms: 'Simple sentence linking (live in)',
      distractorsAndComplexity: 'Single time distractor (e.g., 8 o\'clock vs 9 o\'clock)',
      taskType: 'Sentence transcription & multiple choice'
    },
    {
      stepNumber: 4,
      level: 'short_exchanges',
      unitMapping: 'Unit 2 (Lessons 3-4) & Unit 3',
      speedWPM: 130,
      speakerVariation: 'Alternating dialogue turns',
      contextAndReducedForms: 'Natural speed contractions (don\'t, doesn\'t)',
      distractorsAndComplexity: 'Multiple detail choices (family members, ages)',
      taskType: 'Dialogue comprehension & error spotting'
    },
    {
      stepNumber: 5,
      level: 'short_dialogues',
      unitMapping: 'Unit 4 & Unit 5',
      speedWPM: 135,
      speakerVariation: 'Multi-character background ambient scenario (Cafe/Market)',
      contextAndReducedForms: 'Polite reduced forms (I\'d like /aɪdlaɪk/)',
      distractorsAndComplexity: 'Price distractors and item preference changes',
      taskType: 'Transaction listening & order verification'
    },
    {
      stepNumber: 6,
      level: 'short_connected_speech',
      unitMapping: 'Unit 6 & A1 Final Assessment',
      speedWPM: 140,
      speakerVariation: 'Natural tempo monologue / story narration',
      contextAndReducedForms: 'Full connected speech linking and weak forms (was /wəz/)',
      distractorsAndComplexity: 'Multi-part directional instructions & past time facts',
      taskType: 'Monologue comprehension & map routing verification'
    }
  ],

  // ============================================================================
  // SECTION 8: SPEAKING PROGRESSION LADDER
  // ============================================================================
  speakingLadder: [
    {
      stepNumber: 1,
      level: 'repeat',
      unitMapping: 'Unit 1 (Lesson 1)',
      independenceDegree: '0% (100% Shadowing)',
      promptStyle: 'Exact audio prompt audio model',
      targetOutputLength: 'Single words / 2-word chunks ("Hello", "Teacher")'
    },
    {
      stepNumber: 2,
      level: 'substitution',
      unitMapping: 'Unit 1 (Lesson 2-3)',
      independenceDegree: '20% (Slot filling)',
      promptStyle: 'Sentence frame with slot icon cue ("I am a [doctor/teacher]")',
      targetOutputLength: '3-4 word simple sentence'
    },
    {
      stepNumber: 3,
      level: 'controlled_response',
      unitMapping: 'Unit 2 (Lesson 1-2)',
      independenceDegree: '40% (Binary choice answer)',
      promptStyle: 'Direct question cue ("Do you get up at 7?")',
      targetOutputLength: 'Short answer ("Yes, I do" / "No, I don\'t")'
    },
    {
      stepNumber: 4,
      level: 'guided_sentence',
      unitMapping: 'Unit 2 (Lesson 3-4)',
      independenceDegree: '50% (Visual cue transformation)',
      promptStyle: 'Picture card showing activity + time',
      targetOutputLength: 'Full declarative SVO sentence ("She gets up at 6:30")'
    },
    {
      stepNumber: 5,
      level: 'personal_answer',
      unitMapping: 'Unit 3 & Unit 4',
      independenceDegree: '65% (Personal truth expression)',
      promptStyle: 'Open question prompt ("Where do you live?")',
      targetOutputLength: 'Unscripted personal factual response ("I live in Delhi")'
    },
    {
      stepNumber: 6,
      level: 'short_exchange',
      unitMapping: 'Unit 4 & Unit 5',
      independenceDegree: '75% (Interactive 2-turn dialogue)',
      promptStyle: 'Interactive simulated partner prompt',
      targetOutputLength: '2-turn Q&A exchange (Question + Answer + Follow-up)'
    },
    {
      stepNumber: 7,
      level: 'role_play',
      unitMapping: 'Unit 5 & Unit 6',
      independenceDegree: '85% (Simulated transaction)',
      promptStyle: 'Real-world scenario goal ("Order coffee and ask price")',
      targetOutputLength: '3-turn transaction exchange'
    },
    {
      stepNumber: 8,
      level: 'short_independent_speech',
      unitMapping: 'Unit 6 & A1 Final Assessment',
      independenceDegree: '100% (Unassisted monologue)',
      promptStyle: 'Topic prompt ("Introduce yourself and describe your weekend")',
      targetOutputLength: '30-second continuous monologue (4-6 connected sentences)'
    }
  ],

  // ============================================================================
  // SECTION 9: READING PROGRESSION LADDER
  // ============================================================================
  readingLadder: [
    {
      stepNumber: 1,
      level: 'words',
      unitMapping: 'Unit 1 (Lesson 1)',
      textComplexity: 'Isolated vocabulary cards with image support',
      vocabLoad: '5-10 new words',
      targetTask: 'Match word text to visual image'
    },
    {
      stepNumber: 2,
      level: 'labels',
      unitMapping: 'Unit 1 (Lesson 2)',
      textComplexity: 'ID badges, business cards, registration signs',
      vocabLoad: '15 target terms',
      targetTask: 'Identify person\'s name, country, and job title from badge'
    },
    {
      stepNumber: 3,
      level: 'sentences',
      unitMapping: 'Unit 2 (Lesson 1-2)',
      textComplexity: 'Single declarative SVO routine statements',
      vocabLoad: '25-30 words',
      targetTask: 'Verify true/false routine statements'
    },
    {
      stepNumber: 4,
      level: 'short_messages',
      unitMapping: 'Unit 2 & Unit 3',
      textComplexity: '3-line SMS or chat message between colleagues',
      vocabLoad: '30-40 words',
      targetTask: 'Extract meeting time and place'
    },
    {
      stepNumber: 5,
      level: 'forms',
      unitMapping: 'Unit 3 & Unit 4',
      textComplexity: 'Hotel check-in forms and apartment rental listings',
      vocabLoad: '40-50 words',
      targetTask: 'Find room count, price, and location details'
    },
    {
      stepNumber: 6,
      level: 'notices',
      unitMapping: 'Unit 4 & Unit 5',
      textComplexity: 'Cafe menus, price tags, sports club schedules',
      vocabLoad: '50-60 words',
      targetTask: 'Select cheapest item or verify opening hours'
    },
    {
      stepNumber: 7,
      level: 'simple_everyday_texts',
      unitMapping: 'Unit 5 & Unit 6',
      textComplexity: 'Short email invitation or personal profile post',
      vocabLoad: '60-70 words',
      targetTask: 'Answer 3 comprehension questions on hobbies and plans'
    },
    {
      stepNumber: 8,
      level: 'short_connected_passages',
      unitMapping: 'Unit 6 & A1 Final Assessment',
      textComplexity: '50-80 word multi-paragraph description of a trip or routine',
      vocabLoad: '80+ accumulated A1 words',
      targetTask: 'Complete 5-item reading comprehension check without translation assistance'
    }
  ],

  // ============================================================================
  // SECTION 10: WRITING PROGRESSION LADDER
  // ============================================================================
  writingLadder: [
    {
      stepNumber: 1,
      level: 'spelling',
      unitMapping: 'Unit 1 (Lesson 1)',
      accuracyExpectation: '100% letter accuracy on core target words',
      independenceExpectation: 'Visual letter bank provided',
      taskExample: 'Unscramble letters to spell "TEACHER" and "SPAIN"'
    },
    {
      stepNumber: 2,
      level: 'forms',
      unitMapping: 'Unit 1 (Lesson 2)',
      accuracyExpectation: 'Correct capitalization of proper nouns',
      independenceExpectation: 'Structured form fields (Name, City, Job)',
      taskExample: 'Fill in user profile form fields accurately'
    },
    {
      stepNumber: 3,
      level: 'words_phrases',
      unitMapping: 'Unit 2 (Lesson 1-2)',
      accuracyExpectation: 'Correct preposition and determiner pairing',
      independenceExpectation: 'Gap-text with word bank choices',
      taskExample: 'Complete routine sentences with "at 8 o\'clock" or "in London"'
    },
    {
      stepNumber: 4,
      level: 'simple_sentences',
      unitMapping: 'Unit 2 & Unit 3',
      accuracyExpectation: 'Correct SVO word order and third-person -s',
      independenceExpectation: 'Prompted by picture or key words',
      taskExample: 'Write a full sentence describing a colleague\'s habit'
    },
    {
      stepNumber: 5,
      level: 'short_messages',
      unitMapping: 'Unit 4 & Unit 5',
      accuracyExpectation: 'Accurate quantifier usage (some/any/a)',
      independenceExpectation: 'Guided template with 2 blank slots',
      taskExample: 'Write a 3-line cafe order or shopping list note'
    },
    {
      stepNumber: 6,
      level: 'short_descriptions',
      unitMapping: 'Unit 5 & Unit 6',
      accuracyExpectation: 'Correct modal CAN and gerund verb forms',
      independenceExpectation: 'Free production guided by 3 bullet prompts',
      taskExample: 'Write 4 sentences describing your favorite weekend hobbies'
    },
    {
      stepNumber: 7,
      level: 'short_connected_text',
      unitMapping: 'Unit 6 & A1 Final Assessment',
      accuracyExpectation: 'Cohesive sentence linking using "and", "but", "because"',
      independenceExpectation: '100% unassisted short paragraph creation',
      taskExample: 'Write a 5-sentence personal profile covering self, home, routine, and weekend'
    }
  ],

  // ============================================================================
  // SECTION 11: INTERACTION PROGRESSION MAP
  // ============================================================================
  interactionProgression: [
    {
      id: 'int_01',
      situation: 'First Meetings & Onboarding',
      unitMapping: 'Unit 1',
      initiatingLanguage: 'Hello! I\'m [Name]. What\'s your name?',
      respondingLanguage: 'Hi! I\'m [Name]. Nice to meet you.',
      clarificationStrategy: 'Could you repeat your name, please?',
      closingLanguage: 'It was nice meeting you! Goodbye.'
    },
    {
      id: 'int_02',
      situation: 'Work Schedule & Habit Exchange',
      unitMapping: 'Unit 2',
      initiatingLanguage: 'What time do you start work?',
      respondingLanguage: 'I start work at 9 AM. What about you?',
      clarificationStrategy: 'Pardon? Did you say 8 or 9?',
      closingLanguage: 'Okay, see you at work!'
    },
    {
      id: 'int_03',
      situation: 'Home & Family Visit Chat',
      unitMapping: 'Unit 3',
      initiatingLanguage: 'Do you have a big family?',
      respondingLanguage: 'Yes, I have two brothers and one sister.',
      clarificationStrategy: 'Is your brother older or younger?',
      closingLanguage: 'Great photo! Thanks for sharing.'
    },
    {
      id: 'int_04',
      situation: 'Cafe Ordering & Market Checkout',
      unitMapping: 'Unit 4',
      initiatingLanguage: 'Hi! I\'d like a coffee and a sandwich, please.',
      respondingLanguage: 'Sure! Anything else? That\'s $8.50.',
      clarificationStrategy: 'Can I pay by card?',
      closingLanguage: 'Thank you! Have a good day.'
    },
    {
      id: 'int_05',
      situation: 'Weekend Plan Invitation',
      unitMapping: 'Unit 5',
      initiatingLanguage: 'Are you free on Saturday? Do you want to play tennis?',
      respondingLanguage: 'I\'d love to! What time?',
      clarificationStrategy: 'Where do you want to meet?',
      closingLanguage: 'Perfect! See you on Saturday.'
    },
    {
      id: 'int_06',
      situation: 'Street Directions Inquiry',
      unitMapping: 'Unit 6',
      initiatingLanguage: 'Excuse me, where is the nearest bank?',
      respondingLanguage: 'Go straight on and turn left at the corner.',
      clarificationStrategy: 'Is it next to the supermarket?',
      closingLanguage: 'Thank you very much for your help!'
    }
  ],

  // ============================================================================
  // SECTION 12: MEDIATION PROGRESSION MAP
  // ============================================================================
  mediationProgression: [
    {
      id: 'med_01',
      mediationType: 'conveying_personal_info',
      unitMapping: 'Unit 1',
      taskDescription: 'Read a business card / ID document and convey the person\'s name, origin, and job to a peer.',
      supportMechanism: 'Key field highlight markers on source ID document.'
    },
    {
      id: 'med_02',
      mediationType: 'understanding_instructions',
      unitMapping: 'Unit 2',
      taskDescription: 'Look at a posted office schedule sign and explain opening/closing times to a colleague.',
      supportMechanism: 'Visual clock icons and bilingual guidebook prompts.'
    },
    {
      id: 'med_03',
      mediationType: 'explaining_basic_words',
      unitMapping: 'Unit 3 & Unit 4',
      taskDescription: 'Help a non-English speaking friend understand a simple cafe menu or price list.',
      supportMechanism: 'Category icons (Food, Drinks, Prices) and currency equivalency guide.'
    },
    {
      id: 'med_04',
      mediationType: 'passing_info',
      unitMapping: 'Unit 5',
      taskDescription: 'Read a short sports club flyer and inform a classmate about match day and ticket price.',
      supportMechanism: 'Highlighted bullet points on event poster.'
    },
    {
      id: 'med_05',
      mediationType: 'helping_understand_simple_messages',
      unitMapping: 'Unit 6',
      taskDescription: 'Understand a short SMS giving directions to a meeting spot and guide a lost classmate on a map.',
      supportMechanism: 'Interactive map pins and direction arrow overlays.'
    }
  ],

  // ============================================================================
  // SECTION 13: A1 EXIT PROFILE (KNOWLEDGE, CONTROLLED & INDEPENDENT)
  // ============================================================================
  a1ExitProfile: {
    knowledge: {
      grammar: [
        'Verb BE affirmative, negative, and question forms',
        'Subject pronouns & possessive adjectives',
        'Present Simple affirmative, third-person -s, negatives (don\'t/doesn\'t), questions (DO/DOES)',
        'Prepositions of place (in, from, at, on, under, next to, behind)',
        'Plural nouns (regular -s/-es and irregular men/women/children)',
        'Possessive \'s',
        'There is / There are with quantifiers (a, an, some, any)',
        'Demonstratives (this, that, these, those)',
        'Modal CAN / CAN\'T for ability and polite requests',
        'Verbs of preference + gerund (like/love/hate + -ing)',
        'Imperatives for directions & Past Simple BE (was/were)'
      ],
      vocabulary: [
        '500+ high-frequency active words across 8 core domains',
        'Personal identity, professions, countries, routines, family, home, food, prices, hobbies, town places',
        '15 key functional chunk categories'
      ],
      sentenceStructures: [
        '8-stage sentence construction ladder (Single words -> Short connected paragraphs)',
        'SVO declarative, WH- inversion, negative auxiliary placement, clause coordination with and/but/because'
      ]
    },
    controlledPerformance: {
      listening: [
        'Comprehend spoken texts up to 140 WPM',
        'Identify specific personal facts, routines, prices, and direction instructions with 80%+ accuracy'
      ],
      speaking: [
        'Accurate phonetic shadowing and slot substitution',
        'Controlled production of third-person -s, plural endings, and contractions'
      ],
      reading: [
        'Comprehend 50-80 word everyday connected passages, menus, signs, and forms',
        'Extract key factual data without bilingual dictionary dependence'
      ],
      writing: [
        'Spell core 500 active words accurately',
        'Write error-free 5-sentence descriptions and fill out official registration forms'
      ]
    },
    independentPerformance: {
      interaction: [
        'Initiate, maintain, and close multi-turn social interactions (greetings, introductions, invitations)',
        'Execute real-world transactions in cafes, shops, and street navigation encounters'
      ],
      mediation: [
        'Convey essential identity, price, and schedule details from English sources to peers',
        'Use clarification strategies ("Pardon?", "Could you repeat that?") when communication breaks down'
      ],
      functionalCommunication: [
        'Produce an unprompted 30-second continuous monologue describing self, home, routine, and hobbies'
      ]
    }
  },

  // ============================================================================
  // SECTION 14: A1 -> A2 TRANSITION BRIDGE SPECIFICATION
  // ============================================================================
  a1ToA2Bridge: [
    {
      domain: 'grammar',
      a1Capability: 'Present Simple affirmative/negative/questions & Verb BE',
      a2Expansion: 'Present Continuous for actions in progress + Past Simple regular/irregular verbs for narratives.',
      bridgeStrategy: 'Contrast "I work every day" (A1 habit) with "I am working right now" (A2 in-progress).'
    },
    {
      domain: 'vocabulary',
      a1Capability: '500 active core words in immediate personal domains',
      a2Expansion: '1,200 active words expanding into feelings, health, weather, travel, and shopping preferences.',
      bridgeStrategy: 'Extend concrete domain nouns to abstract adjectives and collocations.'
    },
    {
      domain: 'sentence_complexity',
      a1Capability: 'Simple SVO clauses linked by coordinating conjunctions (and, but)',
      a2Expansion: 'Complex sentences with subordinating conjunctions (when, because, if) and relative clauses (who, which).',
      bridgeStrategy: 'Build cause-and-effect reasoning chains in sentence construction drills.'
    },
    {
      domain: 'collocations',
      a1Capability: '2-word verb-noun & adj-noun pairings (live in, good morning)',
      a2Expansion: '3-word verb-noun-preposition triplets (take care of, look forward to, pay attention to).',
      bridgeStrategy: 'Integrate multi-word phrasal combinations into practice scenarios.'
    },
    {
      domain: 'listening',
      a1Capability: '140 WPM clear studio dialogues with mild reduced forms',
      a2Expansion: '160 WPM multi-speaker authentic conversations with natural background audio and varied accents.',
      bridgeStrategy: 'Introduce subtle accent variations and faster native speech cadence.'
    },
    {
      domain: 'speaking',
      a1Capability: '30-second continuous monologue and short 3-turn transactions',
      a2Expansion: '2-minute structured narrative storytelling and opinion justification.',
      bridgeStrategy: 'Scaffold connectives (first, then, after that, finally) for extended speaking turns.'
    },
    {
      domain: 'reading',
      a1Capability: '50-80 word simple micro-texts and notices',
      a2Expansion: '200-250 word short articles, email threads, and story narratives.',
      bridgeStrategy: 'Develop skimming for main idea and scanning for specific details skills.'
    },
    {
      domain: 'writing',
      a1Capability: '5-sentence short descriptions and form filling',
      a2Expansion: '3-paragraph informal emails, past holiday reports, and opinion posts.',
      bridgeStrategy: 'Teach paragraph structure (topic sentence, supporting detail, concluding statement).'
    },
    {
      domain: 'interaction',
      a1Capability: 'Formulaic transactional encounters (ordering, buying, asking directions)',
      a2Expansion: 'Negotiating preferences, expressing agreement/disagreement, and making joint decisions.',
      bridgeStrategy: 'Train polite agreement/disagreement phrases ("I agree", "I see your point, but...").'
    },
    {
      domain: 'mediation',
      a1Capability: 'Relaying specific factual items (prices, names, times) from short texts',
      a2Expansion: 'Paraphrasing short texts and summarizing main arguments for others.',
      bridgeStrategy: 'Practice rephrasing key sentences in simpler English.'
    },
    {
      domain: 'pronunciation',
      a1Capability: 'Basic word stress, contractions, and question intonation',
      a2Expansion: 'Weak forms, schwa /ə/ reduction in connected speech, and falling-rising intonation for doubt.',
      bridgeStrategy: 'Drill weak form pronunciation of prepositions and auxiliary verbs.'
    }
  ],

  // ============================================================================
  // COMMUNICATIVE PROGRESSION
  // ============================================================================
  communicativeFunctions: [
    {
      id: 'cf_a1_01',
      functionName: 'Introducing Yourself & Greeting Others',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      targetSituations: ['Meeting new colleagues', 'Social greetings', 'Virtual conference introduction'],
      keyPhrases: ['Hello! My name is...', 'Good morning, I am...', 'Nice to meet you!'],
      grammarRequired: ['verb_be', 'pronouns'],
      vocabularyRequired: ['greetings', 'names']
    },
    {
      id: 'cf_a1_02',
      functionName: 'Asking & Stating Origin and Residence',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      targetSituations: ['Travel check-ins', 'Social networking', 'New neighbor introductions'],
      keyPhrases: ['Where are you from?', 'I am from India.', 'Where do you live?', 'I live in London.'],
      grammarRequired: ['verb_be', 'prepositions', 'questions'],
      vocabularyRequired: ['countries', 'cities']
    },
    {
      id: 'cf_a1_03',
      functionName: 'Describing Professions & Studies',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      targetSituations: ['Job interviews', 'Workplace onboarding', 'Networking events'],
      keyPhrases: ['What do you do?', 'I\'m a software engineer.', 'She is a doctor.'],
      grammarRequired: ['verb_be', 'articles'],
      vocabularyRequired: ['professions']
    }
  ],

  // ============================================================================
  // RECYCLING SYSTEM RULES
  // ============================================================================
  recyclingRules: [
    {
      ruleId: 'rr_01',
      stage: 'lesson_review',
      triggerInterval: 'Next Lesson (Interval: +1 Lesson)',
      description: 'Re-introduce 30% of key vocabulary and grammar patterns in warm-up tasks of the following lesson.',
      targetRetentionPercent: 85
    },
    {
      ruleId: 'rr_02',
      stage: 'unit_review',
      triggerInterval: 'End of Unit (Interval: Every 4 Lessons)',
      description: 'Synthesize all unit lexical chunks and sentence construction patterns in multi-turn dialogues.',
      targetRetentionPercent: 80
    },
    {
      ruleId: 'rr_03',
      stage: 'cefr_progress',
      triggerInterval: 'Mid-Level Checkpoint (Interval: Every 3 Units)',
      description: 'Timed diagnostic evaluating speed, listening accuracy, and error spotter recall across prior units.',
      targetRetentionPercent: 75
    },
    {
      ruleId: 'rr_04',
      stage: 'cefr_final',
      triggerInterval: 'Level Exit (100% Units Completed)',
      description: 'Comprehensive CEFR exit examination testing all 12 exercise types across all 4 skill domains.',
      targetRetentionPercent: 70
    }
  ],

  // ============================================================================
  // WORDPRESS INTEGRATION META SCHEMA
  // ============================================================================
  wordPressSchema: [
    {
      wpPostType: 'course',
      wpSlug: 'curiosity-cefr-a1-foundations',
      wpTaxonomies: {
        cefrLevel: 'A1',
        topicCategory: 'General English',
        skillDomain: 'Integrated Communication'
      },
      accessLevel: 'free',
      downloadableAssetTypes: ['pdf_summary', 'audio_pack', 'vocabulary_flashcards'],
      syncStatus: 'draft_schema'
    },
    {
      wpPostType: 'lesson',
      wpSlug: 'lesson-a1-1-1-greetings-introductions',
      wpTaxonomies: {
        cefrLevel: 'A1',
        topicCategory: 'Greetings & Introductions',
        skillDomain: 'Speaking & Listening'
      },
      accessLevel: 'free',
      downloadableAssetTypes: ['pdf_summary', 'worksheet'],
      syncStatus: 'draft_schema'
    },
    {
      wpPostType: 'quiz',
      wpSlug: 'lesson-a1-1-1-mastery-quiz',
      wpTaxonomies: {
        cefrLevel: 'A1',
        topicCategory: 'Assessment',
        skillDomain: 'Grammar & Vocabulary'
      },
      accessLevel: 'free',
      downloadableAssetTypes: ['worksheet'],
      syncStatus: 'draft_schema'
    }
  ],

  // ============================================================================
  // AGILE PROJECT ROADMAP (MASTER ITERATIVE PLAN)
  // ============================================================================
  agileRoadmap: [
    {
      iterationNumber: 1,
      epicName: 'Core Engine & Interactive UI Foundation',
      goal: 'Establish standard Vite + React + Tailwind + Motion interactive applet setup.',
      dependencies: ['Vite', 'React 18', 'Tailwind CSS'],
      affectedFiles: ['src/App.tsx', 'src/types.ts'],
      expectedDeliverable: 'Functioning interactive learner journey canvas.',
      qaRequirements: ['Zero console warnings', 'Smooth 60fps animations'],
      definitionOfDone: ['Responsive design', 'Theme consistency verified'],
      status: 'COMPLETE'
    },
    {
      iterationNumber: 2,
      epicName: 'Pedagogy Engine & 12-Exercise Taxonomy',
      goal: 'Implement 12 exercise types, stage progression, and Admin Inspectors.',
      dependencies: ['Iteration 1'],
      affectedFiles: ['src/components/lesson/LessonEngine.tsx', 'src/services/CurriculumService.ts'],
      expectedDeliverable: '18-stage lesson sequence with interactive exercise handlers.',
      qaRequirements: ['All 12 exercise types handle score & audio playback without crash'],
      definitionOfDone: ['Lesson 1 playable end-to-end', 'Admin Inspectors functional'],
      status: 'COMPLETE'
    },
    {
      iterationNumber: 3,
      epicName: 'Voice Architecture & Audio Audit Pipeline',
      goal: 'Build multi-voice dialogue system, Sulafat studio audio manifest, and AudioAuditInspector.',
      dependencies: ['Iteration 2'],
      affectedFiles: ['src/services/AudioService.ts', 'src/services/AudioAuditService.ts'],
      expectedDeliverable: 'Complete audio audit matrix tracking P0-P3 priorities and fallback status.',
      qaRequirements: ['Sulafat production audio plays cleanly', 'Fallback TTS works offline'],
      definitionOfDone: ['Audio audit queue renders accurately in Admin UI'],
      status: 'COMPLETE'
    },
    {
      iterationNumber: 4,
      epicName: 'Master Curriculum Blueprint & Agile Project Roadmap',
      goal: 'Define scalable A1-C2 Master Blueprint, 8-stage sentence ladder, vocabulary system, and WordPress schema.',
      dependencies: ['Iteration 3'],
      affectedFiles: [
        'src/types.ts',
        'src/data/masterCurriculumBlueprint.ts',
        'src/services/MasterCurriculumService.ts',
        'src/components/admin/AdminCurriculumDashboard.tsx'
      ],
      expectedDeliverable: 'Master Curriculum Blueprint & Agile Roadmap data foundation and Admin Visibility.',
      qaRequirements: ['TypeScript compilation zero errors', 'Preserve Lesson 1 & existing Inspectors'],
      definitionOfDone: ['Final report with Definition of Done and architectural breakdown'],
      status: 'COMPLETE'
    },
    {
      iterationNumber: 4.2,
      epicName: 'Complete A1 Academic Master Specification',
      goal: 'Author full 6-unit scope, 18-topic grammar map, 8-domain vocab map, collocations, chunks, pronunciation, and 4 skill ladders.',
      dependencies: ['Iteration 4'],
      affectedFiles: [
        'src/types.ts',
        'src/data/masterCurriculumBlueprint.ts',
        'src/services/MasterCurriculumService.ts',
        'src/components/admin/AdminLessonInspector.tsx'
      ],
      expectedDeliverable: 'Exhaustive A1 academic master specification and CEFR exit profile.',
      qaRequirements: ['Complete coverage of all 21 specification sections', 'Zero linter/build errors'],
      definitionOfDone: ['Comprehensive specifications populated and inspected in Admin UI'],
      status: 'COMPLETE'
    },
    {
      iterationNumber: 5,
      epicName: 'Lesson Content Factory & Template Generator',
      goal: 'Standardize schema and automated scaffolding for Units 1–6 in CEFR A1.',
      dependencies: ['Iteration 4.2'],
      affectedFiles: ['src/data/lessons/lesson_a1_1_2.ts', 'src/services/CurriculumService.ts'],
      expectedDeliverable: 'Standardized lesson content generator guaranteeing 18-stage parity.',
      qaRequirements: ['Generated lessons conform to 12 exercise types without missing keys'],
      definitionOfDone: ['Lesson 2 & 3 scaffolding complete'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 6,
      epicName: 'Vocabulary Engine & Spaced Retrieval Scheduler',
      goal: 'Implement 11-stage vocabulary retrieval algorithm and flashcard practice suite.',
      dependencies: ['Iteration 4.2', 'Iteration 5'],
      affectedFiles: ['src/services/VocabularyService.ts', 'src/components/practice/VocabCard.tsx'],
      expectedDeliverable: 'Interactive vocabulary mastery dashboard with spaced retrieval triggers.',
      qaRequirements: ['Track word mastery state per user in LocalStorage'],
      definitionOfDone: ['Word family & collocation inspector live'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 7,
      epicName: 'Grammar Engine & Interactive Rule Visualizer',
      goal: 'Build interactive grammar pattern trainer with error spotter and contraction tables.',
      dependencies: ['Iteration 4.2'],
      affectedFiles: ['src/components/grammar/GrammarTrainer.tsx'],
      expectedDeliverable: 'Visual grammar contraction table and interactive rule builder.',
      qaRequirements: ['Rule explanations rendered in native language and English'],
      definitionOfDone: ['Grammar spotter exercise type enhanced'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 8,
      epicName: 'Listening & Speech Recognition Studio',
      goal: 'Enhance speech matching feedback and dictation normalization in browser Web Speech API.',
      dependencies: ['Iteration 3'],
      affectedFiles: ['src/components/lesson/SpeechRecognizer.tsx'],
      expectedDeliverable: 'Real-time pitch/phoneme visualizer for speaking exercises.',
      qaRequirements: ['Fallback gracefully when microphone permission denied'],
      definitionOfDone: ['Speaking & listening accuracy metrics computed in state'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 9,
      epicName: 'Unit Review & A1 Progress Diagnostic Engine',
      goal: 'Build Unit Review stage views and mid-level A1 diagnostic progress checks.',
      dependencies: ['Iteration 4.2', 'Iteration 5'],
      affectedFiles: ['src/components/assessment/UnitReviewView.tsx'],
      expectedDeliverable: 'Adaptive diagnostic check evaluating accumulated unit retention.',
      qaRequirements: ['Generate weak area breakdown report upon completion'],
      definitionOfDone: ['Unit review unlocked upon 100% unit lesson completion'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 10,
      epicName: 'Studio Audio Batch Generation Pipeline',
      goal: 'Batch generate Charon TTS audio assets for missing P0/P1 items in A1 Unit 1.',
      dependencies: ['Iteration 3', 'Iteration 5'],
      affectedFiles: ['src/data/audioManifest.ts', 'public/audio/'],
      expectedDeliverable: 'Studio-quality MP3 assets for all dialogue and vocabulary lines.',
      qaRequirements: ['All audio files validated for duration and sample rate'],
      definitionOfDone: ['Zero audio audit missing items for Unit 1'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 11,
      epicName: 'A1 Full Content Production (Units 1–6)',
      goal: 'Author complete 24-lesson A1 curriculum content covering all 6 units.',
      dependencies: ['Iteration 5', 'Iteration 6', 'Iteration 7'],
      affectedFiles: ['src/data/lessons/'],
      expectedDeliverable: '24 fully authored A1 lessons with dialogues, practice, and assessments.',
      qaRequirements: ['Pass automated curriculum linter for vocabulary coverage'],
      definitionOfDone: ['A1 curriculum 100% playable'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 12,
      epicName: 'A1 Comprehensive Final Exam & CEFR Certification',
      goal: 'Build 40-item A1 Final Exit Exam and downloadable PDF CEFR Certificate generator.',
      dependencies: ['Iteration 9', 'Iteration 11'],
      affectedFiles: ['src/components/assessment/CEFRFinalExamModal.tsx'],
      expectedDeliverable: 'CEFR A1 Exit Certification flow with badge issuance.',
      qaRequirements: ['Accurate scoring across reading, writing, listening, and speaking'],
      definitionOfDone: ['Earned certificate displayed on user profile'],
      status: 'PLANNED'
    },
    {
      iterationNumber: 13,
      epicName: 'WordPress Web Platform Connector & REST API Gateway',
      goal: 'Build exportable WordPress schema payloads for courses, lessons, and LMS sync.',
      dependencies: ['Iteration 4.2'],
      affectedFiles: ['src/services/WordPressSyncService.ts'],
      expectedDeliverable: 'JSON export/import REST bridge for WordPress Tutor LMS integration.',
      qaRequirements: ['Schema passes Tutor LMS payload validator'],
      definitionOfDone: ['One-click WordPress curriculum sync prototype live'],
      status: 'PLANNED'
    }
  ],

  // ============================================================================
  // VOCABULARY ANCHORS SYSTEM (A1 INITIAL RECYCLING ANCHORS)
  // ============================================================================
  vocabularySystem: [
    {
      id: 'v_a1_01',
      word: 'teacher',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'vocabulary',
      phonetic: '/ˈtiːtʃər/',
      meaning: 'A person who instructs students in a school or academy.',
      wordFamily: ['teach', 'teaching', 'teacher'],
      collocations: ['english teacher', 'new teacher', 'school teacher'],
      lexicalChunks: ['I\'m a teacher.', 'She is an English teacher.'],
      commonErrors: ['I am teacher -> I am a teacher'],
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2', 'lesson_a1_2_16'],
        reviewUnitIds: ['unit_a1_1'],
        assessmentIds: ['ae_10', 'a1_mid_progress_check']
      },
      stagesSupported: [
        'exposure',
        'meaning',
        'pronunciation',
        'recognition',
        'recall',
        'spelling',
        'contextual_use',
        'sentence_construction',
        'retrieval',
        'spaced_review',
        'productive_use'
      ]
    },
    {
      id: 'v_a1_02',
      word: 'engineer',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'vocabulary',
      phonetic: '/ˌendʒɪˈnɪr/',
      meaning: 'A person who designs or builds software, machines, or bridges.',
      wordFamily: ['engineering', 'engineer'],
      collocations: ['software engineer', 'civil engineer'],
      lexicalChunks: ['I\'m a software engineer.', 'He works as an engineer.'],
      commonErrors: ['a engineer -> an engineer'],
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2'],
        reviewUnitIds: ['unit_a1_1'],
        assessmentIds: ['a1_mid_progress_check']
      },
      stagesSupported: [
        'exposure',
        'meaning',
        'pronunciation',
        'recognition',
        'recall',
        'spelling',
        'contextual_use',
        'sentence_construction',
        'retrieval',
        'spaced_review',
        'productive_use'
      ]
    },
    {
      id: 'v_a1_03',
      word: 'live',
      cefr: 'A1',
      unitId: 'unit_a1_1',
      introductionLessonId: 'lesson_a1_1_1',
      category: 'vocabulary',
      phonetic: '/lɪv/',
      meaning: 'To have your home in a specific city, country, or street.',
      wordFamily: ['living', 'life'],
      collocations: ['live in', 'live with', 'live near'],
      lexicalChunks: ['I live in Delhi.', 'Where do you live?'],
      commonErrors: ['I live at India -> I live in India'],
      recyclingSchedule: {
        reviewLessonIds: ['lesson_a1_1_2', 'lesson_a1_1_3', 'lesson_a1_2_16'],
        reviewUnitIds: ['unit_a1_1', 'unit_a1_2'],
        assessmentIds: ['ae_3', 'ae_5', 'a1_mid_progress_check']
      },
      stagesSupported: [
        'exposure',
        'meaning',
        'pronunciation',
        'recognition',
        'recall',
        'spelling',
        'contextual_use',
        'sentence_construction',
        'retrieval',
        'spaced_review',
        'productive_use'
      ]
    }
  ],

  // ============================================================================
  // SENTENCE CONSTRUCTION PROGRESSION (8 STAGES)
  // ============================================================================
  sentenceProgression: [
    {
      stageNumber: 1,
      stageName: '1. Single Words & High-Frequency Nouns',
      description: 'Isolate key vocabulary terms, professions, countries, and objects with phonetic clarity.',
      targetCefr: 'A1',
      examplePatterns: ['Hello', 'Teacher', 'India', 'Doctor'],
      grammaticalFocus: ['Proper Nouns', 'Common Nouns', 'Greetings']
    },
    {
      stageNumber: 2,
      stageName: '2. Basic Phrases & Determiners',
      description: 'Combine determiners and adjectives with nouns for core reference.',
      targetCefr: 'A1',
      examplePatterns: ['A teacher', 'My name', 'Good morning', 'From Madrid'],
      grammaticalFocus: ['Indefinite Articles (a/an)', 'Possessive Adjectives (my/your)']
    },
    {
      stageNumber: 3,
      stageName: '3. Fixed Chunks & Social Expressions',
      description: 'Memorize unanalyzed communicative formulas for immediate social interaction.',
      targetCefr: 'A1',
      examplePatterns: ['Nice to meet you', 'How are you?', 'Where do you live?'],
      grammaticalFocus: ['Lexical Chunks', 'Formulaic Language']
    },
    {
      stageNumber: 4,
      stageName: '4. Simple Subject-Verb-Object (SVO)',
      description: 'Construct full declarative sentences using BE, HAVE, and Present Simple.',
      targetCefr: 'A1',
      examplePatterns: ['I am David.', 'I live in London.', 'She works at a hospital.'],
      grammaticalFocus: ['Subject Pronouns', 'Verb BE', 'Present Simple affirmative']
    },
    {
      stageNumber: 5,
      stageName: '5. Question Formation & Inversion',
      description: 'Form open (WH-) and closed (Yes/No) questions using auxiliary verbs and word order inversion.',
      targetCefr: 'A1',
      examplePatterns: ['What is your name?', 'Where are you from?', 'Do you live in Tokyo?'],
      grammaticalFocus: ['WH- Question Words', 'Auxiliary DO/DOES', 'Subject-Verb Inversion']
    },
    {
      stageNumber: 6,
      stageName: '6. Negatives & Contractions',
      description: 'Express negation accurately using contracted auxiliary forms.',
      targetCefr: 'A1',
      examplePatterns: ['I\'m not a student.', 'He does not live here.', 'We don\'t work on Sunday.'],
      grammaticalFocus: ['Negative BE (isn\'t/aren\'t)', 'Negative Present Simple (don\'t/doesn\'t)']
    },
    {
      stageNumber: 7,
      stageName: '7. Coordinated Sentences & Connectors',
      description: 'Link multiple independent clauses using basic conjunctions.',
      targetCefr: 'A1',
      examplePatterns: ['I am a doctor and I live in Delhi.', 'I\'m from Spain, but I live in London.'],
      grammaticalFocus: ['Coordinating Conjunctions (and, but, or, so, because)']
    },
    {
      stageNumber: 8,
      stageName: '8. Short Connected Speech & Paragraphs',
      description: 'Produce short multi-sentence discourse describing self, routine, family, and preferences.',
      targetCefr: 'A1',
      examplePatterns: ['Hello! My name is Maria. I am from Spain and I live in Madrid. I\'m a project manager.'],
      grammaticalFocus: ['Paragraph Cohesion', 'Discourse Markers', 'Multi-clause Synthesis']
    }
  ]
};
