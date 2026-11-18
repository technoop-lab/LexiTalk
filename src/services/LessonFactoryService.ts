import {
  LessonAllocation,
  LessonBlueprint,
  ContentGenerationContract,
  LessonValidationReport,
  QualityGateResultItem,
  UnitScopeDefinition,
  StageBlueprintTemplate,
  PipelineStageInfo,
} from '../types';
import { MASTER_CURRICULUM_BLUEPRINT } from '../data/masterCurriculumBlueprint';

export class LessonFactoryService {
  /**
   * Pipeline Stage Definitions for Content Factory
   */
  public static getPipelineStages(): PipelineStageInfo[] {
    return [
      {
        stage: 'MASTER_CURRICULUM',
        label: '1. Master Curriculum Blueprint',
        description: 'Complete A1 CEFR progression, grammar ladder, and skill specifications.',
        status: 'COMPLETE',
      },
      {
        stage: 'UNIT_SCOPE',
        label: '2. A1 Units 1–6 Scope Mapping',
        description: 'Defined scope, communicative outcomes, and vocabulary domains per unit.',
        status: 'COMPLETE',
      },
      {
        stage: 'LESSON_ALLOCATION',
        label: '3. Lesson Curriculum Allocation',
        description: 'Explicit allocation of target concepts per lesson to prevent duplication.',
        status: 'COMPLETE',
      },
      {
        stage: 'LESSON_BLUEPRINT',
        label: '4. Lesson Blueprint Architecture',
        description: 'Planning model specifying contracts, stage templates, and exercise blueprints.',
        status: 'ACTIVE_ARCH',
      },
      {
        stage: 'BLUEPRINT_VALIDATION',
        label: '5. Quality Gate Validation',
        description: 'Automated 11-check quality verification before content generation.',
        status: 'ACTIVE_ARCH',
      },
      {
        stage: 'CONTENT_GENERATION',
        label: '6. Content Generation Factory',
        description: 'AI / Rule-based generator producing stage text, explanations, and dialogues.',
        status: 'PLANNED',
      },
      {
        stage: 'EXERCISE_GENERATION',
        label: '7. Exercise Blueprint Compilation',
        description: 'Compiling interactive exercise items matching cognitive difficulty levels.',
        status: 'PLANNED',
      },
      {
        stage: 'AUDIO_INVENTORY',
        label: '8. Audio Contract Inventory',
        description: 'Catalogue of required audio assets mapped to speakers, roles, and stages.',
        status: 'ACTIVE_ARCH',
      },
      {
        stage: 'CONTENT_QA',
        label: '9. Pedagogical Content QA',
        description: 'Human-in-the-loop review of pedagogical accuracy and error explanations.',
        status: 'PLANNED',
      },
      {
        stage: 'AUDIO_QA',
        label: '10. Audio & Pronunciation QA',
        description: 'Audit of generated audio waveforms, human verification, and voice parity.',
        status: 'ACTIVE_ARCH',
      },
      {
        stage: 'BUILD',
        label: '11. Production Applet Build',
        description: 'Compile and bundle lesson JSON into runtime engine package.',
        status: 'COMPLETE',
      },
      {
        stage: 'LIVE_LESSON_TEST',
        label: '12. Interactive Engine Testing',
        description: 'Testing live execution in 18-stage interactive engine with learner tracking.',
        status: 'COMPLETE',
      },
      {
        stage: 'APPROVED_LESSON',
        label: '13. Approved Production Lesson',
        description: 'Lesson signed off for learner deployment and WordPress LMS sync.',
        status: 'COMPLETE',
      },
    ];
  }

  /**
   * 18 Standard Stage Blueprint Templates
   */
  public static getStandardStageTemplates(): StageBlueprintTemplate[] {
    return [
      {
        stageNumber: 1,
        stageType: 'GOALS',
        stageTitle: 'Lesson Overview & Can-Do Goals',
        pedagogicalObjective: 'Establish clear communicative expectations and motivation.',
        estimatedTimeMinutes: 2,
        requiredSkills: ['reading'],
        expectedExerciseCount: 0,
      },
      {
        stageNumber: 2,
        stageType: 'WARM_UP',
        stageTitle: 'Activation & Warm-Up',
        pedagogicalObjective: 'Activate prior knowledge and recycled concepts from previous units.',
        estimatedTimeMinutes: 3,
        requiredSkills: ['listening', 'reading'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 3,
        stageType: 'VOCABULARY',
        stageTitle: 'Core Vocabulary Exposure',
        pedagogicalObjective: 'Introduce high-frequency words with audio, imagery, and translation.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['listening', 'reading'],
        expectedExerciseCount: 3,
      },
      {
        stageNumber: 4,
        stageType: 'LEXICAL_CHUNKS',
        stageTitle: 'Lexical Chunks & Collocations',
        pedagogicalObjective: 'Present natural phrase blocks for immediate communicative use.',
        estimatedTimeMinutes: 3,
        requiredSkills: ['listening', 'speaking'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 5,
        stageType: 'GRAMMAR_DISCOVERY',
        stageTitle: 'Guided Grammar Discovery',
        pedagogicalObjective: 'Inductive pattern recognition before explicit rule presentation.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['reading', 'interaction'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 6,
        stageType: 'GRAMMAR_EXPLANATION',
        stageTitle: 'Explicit Grammar System',
        pedagogicalObjective: 'Clear structural rules, paradigm tables, and usage boundaries.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['reading'],
        expectedExerciseCount: 1,
      },
      {
        stageNumber: 7,
        stageType: 'COMMON_ERRORS',
        stageTitle: 'Common Learner Error Awareness',
        pedagogicalObjective: 'Explicit contrastive analysis and error prevention traps.',
        estimatedTimeMinutes: 3,
        requiredSkills: ['reading', 'writing'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 8,
        stageType: 'CONTROLLED_PRACTICE',
        stageTitle: 'Controlled Accuracy Practice',
        pedagogicalObjective: 'High-repetition multiple-choice and fill-in-the-blank drills.',
        estimatedTimeMinutes: 5,
        requiredSkills: ['reading', 'writing'],
        expectedExerciseCount: 4,
      },
      {
        stageNumber: 9,
        stageType: 'LISTENING',
        stageTitle: 'Acoustic Decoding & Listening',
        pedagogicalObjective: 'Recognize target structures in natural-speed audio speech.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['listening'],
        expectedExerciseCount: 3,
      },
      {
        stageNumber: 10,
        stageType: 'QUESTION_FORMATION',
        stageTitle: 'Question Construction Ladder',
        pedagogicalObjective: 'Master word-order transformation for asking questions.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['writing', 'interaction'],
        expectedExerciseCount: 3,
      },
      {
        stageNumber: 11,
        stageType: 'DIALOGUE',
        stageTitle: 'Authentic Multi-Voice Dialogue',
        pedagogicalObjective: 'Observe real-world communicative exchange in context.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['listening', 'reading', 'interaction'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 12,
        stageType: 'SPEAKING',
        stageTitle: 'Guided Speaking & Shadowing',
        pedagogicalObjective: 'Pronunciation accuracy, rhythm, and oral production practice.',
        estimatedTimeMinutes: 4,
        requiredSkills: ['speaking', 'mediation'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 13,
        stageType: 'MEDIATION',
        stageTitle: 'L1/L2 Concept Mediation',
        pedagogicalObjective: 'Translate and rephrase real-world meaning across contexts.',
        estimatedTimeMinutes: 3,
        requiredSkills: ['mediation', 'writing'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 14,
        stageType: 'INTERLEAVED_PRACTICE',
        stageTitle: 'Interleaved Practice Drill',
        pedagogicalObjective: 'Mix target skills with recycled grammar for deep discrimination.',
        estimatedTimeMinutes: 5,
        requiredSkills: ['reading', 'writing', 'listening'],
        expectedExerciseCount: 4,
      },
      {
        stageNumber: 15,
        stageType: 'RETRIEVAL',
        stageTitle: 'Active Memory Retrieval',
        pedagogicalObjective: 'Unprompted recall without scaffolding to build long-term memory.',
        estimatedTimeMinutes: 3,
        requiredSkills: ['writing', 'speaking'],
        expectedExerciseCount: 2,
      },
      {
        stageNumber: 16,
        stageType: 'REVIEW',
        stageTitle: 'Synthesis & Self-Assessment',
        pedagogicalObjective: 'Consolidate takeaways and prepare for mastery evaluation.',
        estimatedTimeMinutes: 2,
        requiredSkills: ['reading'],
        expectedExerciseCount: 1,
      },
      {
        stageNumber: 17,
        stageType: 'LESSON_ASSESSMENT',
        stageTitle: 'Lesson Mastery Assessment',
        pedagogicalObjective: 'Summative 80% pass threshold evaluation on current lesson scope.',
        estimatedTimeMinutes: 6,
        requiredSkills: ['listening', 'reading', 'writing'],
        expectedExerciseCount: 5,
      },
      {
        stageNumber: 18,
        stageType: 'MASTERY_REWARD',
        stageTitle: 'Mastery Badge & XP Award',
        pedagogicalObjective: 'Gamified reinforcement, streak tracking, and progression unlock.',
        estimatedTimeMinutes: 1,
        requiredSkills: [],
        expectedExerciseCount: 0,
      },
    ];
  }

  /**
   * Sample Lesson Allocations for A1 Units
   */
  public static getSampleAllocations(): LessonAllocation[] {
    return [
      {
        allocationId: 'alloc_u1_l1',
        unitId: 'unit_1',
        unitNumber: 1,
        lessonNumber: 1,
        cefrLevel: 'A1',
        lessonTitle: 'Personal Identifiers & Social Introductions',
        communicativeGoal: 'Introduce oneself, state name and country, ask basic identity questions.',
        allocationType: 'INTRODUCTION',
        assignedGrammarIds: ['g_be_present', 'g_subject_pronouns'],
        assignedVocabDomains: ['personal_identity', 'greetings', 'countries_nationalities'],
        assignedSentencePatterns: ['I am [Name]', 'He/She is [Name]', 'Are you from [Country]?'],
        assignedLexicalChunks: ['Nice to meet you', 'Where are you from?'],
        assignedCollocations: ['first name', 'last name', 'from Germany'],
        assignedPronunciationTargets: ['Vowel contrasts in I vs He', 'Rising intonation in yes/no questions'],
        prerequisiteConcepts: [],
        recyclingRequirements: [],
      },
      {
        allocationId: 'alloc_u1_l2',
        unitId: 'unit_1',
        unitNumber: 1,
        lessonNumber: 2,
        cefrLevel: 'A1',
        lessonTitle: 'Occupations, Workplaces & Basic Descriptions',
        communicativeGoal: 'State job title, ask what someone does, describe basic work routines.',
        allocationType: 'INTRODUCTION',
        assignedGrammarIds: ['g_be_present', 'g_indefinite_articles'],
        assignedVocabDomains: ['occupations', 'workplaces'],
        assignedSentencePatterns: ['I am a [Job]', 'He works at [Place]', 'What do you do?'],
        assignedLexicalChunks: ['What do you do?', 'I work as a...'],
        assignedCollocations: ['work in an office', 'teacher at school'],
        assignedPronunciationTargets: ['Article blending a/an', 'Word stress on occupations'],
        prerequisiteConcepts: ['g_be_present', 'personal_identity'],
        recyclingRequirements: ['I am [Name]', 'greetings'],
      },
      {
        allocationId: 'alloc_u1_l3',
        unitId: 'unit_1',
        unitNumber: 1,
        lessonNumber: 3,
        cefrLevel: 'A1',
        lessonTitle: 'Numbers, Contact Details, Age & Phone Numbers',
        communicativeGoal: 'Exchange numerical information, state age, give phone numbers and email addresses.',
        allocationType: 'EXPANSION',
        assignedGrammarIds: ['g_numbers_0_100', 'g_be_age_expressions'],
        assignedVocabDomains: ['numbers_cardinal', 'contact_details', 'communication_channels'],
        assignedSentencePatterns: ['I am [Number] years old.', 'My phone number is [Digits].', 'What is your email address?'],
        assignedLexicalChunks: ['How old are you?', 'Can I have your number?', 'at dot com'],
        assignedCollocations: ['phone number', 'email address', 'years old'],
        assignedPronunciationTargets: ['-teen vs -ty stress differentiation', 'Spelling email symbols (@ / .)'],
        prerequisiteConcepts: ['g_be_present', 'g_indefinite_articles'],
        recyclingRequirements: ['I am [Name]', 'Where are you from?'],
      },
      {
        allocationId: 'alloc_u1_l4',
        unitId: 'unit_1',
        unitNumber: 1,
        lessonNumber: 4,
        cefrLevel: 'A1',
        lessonTitle: 'Everyday Objects, Classroom/Office Items & Demonstratives',
        communicativeGoal: 'Identify, point out, and describe everyday objects in near and far proximity.',
        allocationType: 'EXPANSION',
        assignedGrammarIds: ['g_demonstratives_this_that', 'g_regular_plurals_s_es'],
        assignedVocabDomains: ['classroom_objects', 'office_supplies', 'everyday_possessions'],
        assignedSentencePatterns: ['This is a [Noun].', 'These are [Plural Nouns].', 'What are those?'],
        assignedLexicalChunks: ['What is this?', 'What are those over there?', 'Is this your...?'],
        assignedCollocations: ['notebook and pen', 'on the desk', 'in the bag'],
        assignedPronunciationTargets: ['Voiced th /ð/ in this/these vs that/those', 'Plural -s endings /s/, /z/, /ɪz/'],
        prerequisiteConcepts: ['g_be_present', 'g_indefinite_articles'],
        recyclingRequirements: ['a/an articles', 'workplace locations'],
      },
      {
        allocationId: 'alloc_u1_l5',
        unitId: 'unit_1',
        unitNumber: 1,
        lessonNumber: 5,
        cefrLevel: 'A1',
        lessonTitle: 'Asking for & Giving Personal Information',
        communicativeGoal: 'Ask and answer core WH-questions (What, Where, Who, How) with inversion and auxiliary BE.',
        allocationType: 'CONSOLIDATION',
        assignedGrammarIds: ['g_wh_questions_be', 'g_be_inversion_questions'],
        assignedVocabDomains: ['question_words', 'personal_data_fields', 'social_exchange'],
        assignedSentencePatterns: ['What is your [Noun]?', 'Where is [Subject] from?', 'Who is [Subject]?'],
        assignedLexicalChunks: ['How do you spell that?', 'Where do you live?', 'Could you repeat that?'],
        assignedCollocations: ['first name', 'family name', 'postal code', 'home address'],
        assignedPronunciationTargets: ['Falling intonation on WH-questions', 'Contracted WH forms (What\'s, Where\'s, Who\'s)'],
        prerequisiteConcepts: ['g_be_present', 'g_indefinite_articles', 'g_numbers_0_100', 'g_demonstratives_this_that'],
        recyclingRequirements: ['full personal identity profile', 'numbers', 'occupations', 'countries'],
      },
      {
        allocationId: 'alloc_u2_l1',
        unitId: 'unit_2',
        unitNumber: 2,
        lessonNumber: 1,
        cefrLevel: 'A1',
        lessonTitle: 'Family Members & Possessive Relationships',
        communicativeGoal: 'Introduce family members, explain relationships using possessives.',
        allocationType: 'INTRODUCTION',
        assignedGrammarIds: ['g_possessive_adjectives', 'g_possessive_s'],
        assignedVocabDomains: ['family_members', 'age_numbers'],
        assignedSentencePatterns: ['This is my [Relation]', 'Her name is [Name]', 'He is my father'],
        assignedLexicalChunks: ['How old is he?', 'This is my brother'],
        assignedCollocations: ['older brother', 'younger sister', 'family member'],
        assignedPronunciationTargets: ['Voiced /z/ sound in possessive s', 'Th sound in father/mother'],
        prerequisiteConcepts: ['g_be_present', 'personal_identity'],
        recyclingRequirements: ['numbers 1-20', 'He/She is [Name]'],
      },
    ];
  }

  /**
   * Reference Lesson Blueprint for Lesson 1 (Functional Baseline)
   */
  public static getLesson1Blueprint(): LessonBlueprint {
    return {
      blueprintId: 'bp_a1_u1_l1',
      lessonId: 'a1_u1_l1',
      unitId: 'unit_1',
      unitNumber: 1,
      lessonNumber: 1,
      cefrLevel: 'A1',
      lessonTitle: 'Personal Identifiers & Social Introductions',
      lessonPurpose: 'Master fundamental self-introductions, verb BE present tense, and country origins.',
      prerequisiteConcepts: ['Basic English Alphabet Awareness'],
      newGrammar: ['Verb TO BE (am/is/are)', 'Subject Pronouns (I, You, He, She, It, We, They)'],
      recycledGrammar: [],
      newVocabularyDomains: ['Greetings & Farewells', 'Countries & Nationalities', 'Personal Identity Terms'],
      recycledVocabulary: [],
      lexicalChunks: ['Hello, my name is...', 'Nice to meet you', 'Where are you from?'],
      collocations: ['first name', 'last name', 'from Spain'],
      sentencePatterns: [
        'I am [Name].',
        'I am from [Country].',
        'He/She is [Name].',
        'Are you from [Country]?',
      ],
      communicativeFunctions: ['Self Introduction', 'Asking Origin', 'Exchanging Greetings'],
      pronunciationTargets: ['Vowel sound contrasts', 'Question intonation rise'],
      skillTargets: {
        listening: ['Recognize names and origins in short introductions at 140 wpm'],
        speaking: ['Produce clear self-introduction monologue of 3 sentences'],
        reading: ['Match country names to flag codes and short profile cards'],
        writing: ['Complete fill-in-the-blank identity forms with correct spelling'],
        interaction: ['Exchange greetings and ask "Where are you from?" in pairs'],
        mediation: ['Translate L1 identity cards into L2 English profile summaries'],
        pronunciation: ['Shadow native audio for /m/ and /s/ endings'],
        grammar: ['Form affirmative, negative, and interrogative sentences with BE'],
        vocabulary: ['Spell 10 country names and 5 greeting terms accurately'],
      },
      commonLearnerErrors: [
        'Omitting verb BE: "I from Spain" instead of "I am from Spain"',
        'Incorrect subject pronoun case: "He is teacher" without article awareness',
      ],
      canDoOutcomes: [
        'Can introduce oneself and others using verb BE in simple sentences.',
        'Can ask and answer where someone is from using basic country vocabulary.',
      ],
      pedagogicalBalance: {
        newVsRecycledRatio: {
          newVocabularyCount: 15,
          recycledVocabularyCount: 0,
          newGrammarCount: 2,
          recycledGrammarCount: 0,
          newSentencePatternCount: 4,
          recycledSentencePatternCount: 0,
          newCommunicativeFunctionCount: 3,
          recycledCommunicativeFunctionCount: 0,
        },
        cognitiveProgressionSpan: ['RECOGNITION', 'CONTROLLED', 'GUIDED', 'TRANSFORMATION', 'PRODUCTION', 'INTEGRATION'],
        estimatedCompletionTimeMinutes: 45,
      },
      vocabularyContracts: [
        {
          wordId: 'v_hello',
          word: 'hello',
          phasesRequired: ['exposure', 'meaning', 'pronunciation', 'recognition', 'recall', 'contextual_use'],
          isRecycled: false,
        },
        {
          wordId: 'v_spain',
          word: 'Spain',
          phasesRequired: ['exposure', 'meaning', 'pronunciation', 'spelling', 'sentence_construction'],
          isRecycled: false,
        },
      ],
      grammarContracts: [
        {
          grammarId: 'g_be_present',
          topic: 'Verb To Be (Present Tense)',
          knowledgeVsUseBalance: { knowledgeWeightPercent: 30, useWeightPercent: 70 },
          phasesRequired: [
            'discovery',
            'explanation',
            'pattern_recognition',
            'controlled_practice',
            'guided_production',
            'independent_production',
            'error_correction',
            'assessment',
          ],
          isRecycled: false,
        },
      ],
      stageTemplates: LessonFactoryService.getStandardStageTemplates(),
      exerciseBlueprints: [
        {
          exerciseBlueprintId: 'ex_bp_1',
          lessonId: 'a1_u1_l1',
          stageNumber: 3,
          stageType: 'VOCABULARY',
          learningObjective: 'Recognize audio pronunciations of country names',
          skill: 'listening',
          vocabularyTarget: 'Countries',
          difficulty: 'RECOGNITION',
          exerciseType: 'multiple_choice',
          isRecycled: false,
          answerKeySpec: 'Select matching country name from audio cue',
          explanationRequirement: 'High frequency country name decoding',
          assessmentRelevance: true,
        },
        {
          exerciseBlueprintId: 'ex_bp_2',
          lessonId: 'a1_u1_l1',
          stageNumber: 8,
          stageType: 'CONTROLLED_PRACTICE',
          learningObjective: 'Complete sentences with correct form of verb BE',
          skill: 'grammar',
          grammarTarget: 'Verb BE',
          difficulty: 'CONTROLLED',
          exerciseType: 'fill_blank',
          isRecycled: false,
          answerKeySpec: 'am / is / are',
          explanationRequirement: 'Match subject pronoun to BE form',
          assessmentRelevance: true,
        },
        {
          exerciseBlueprintId: 'ex_bp_3',
          lessonId: 'a1_u1_l1',
          stageNumber: 10,
          stageType: 'QUESTION_FORMATION',
          learningObjective: 'Reorder words to construct identity questions',
          skill: 'writing',
          grammarTarget: 'Inversion Question Formation',
          difficulty: 'TRANSFORMATION',
          exerciseType: 'word_ordering',
          isRecycled: false,
          answerKeySpec: 'Where are you from?',
          explanationRequirement: 'Invert verb BE and subject for question',
          assessmentRelevance: true,
        },
      ],
      assessmentScope: {
        assessmentLevel: 'LESSON',
        masteryObjectives: [
          'Form affirmative BE sentences (I am, She is)',
          'Identify country origins from listening audio',
          'Construct "Where are you from?" correctly',
        ],
        minimumPassScorePercent: 80,
        questionCount: 5,
        remedialTriggerThresholdPercent: 70,
      },
      audioRequirements: [
        {
          audioId: 'audio_u1_l1_dialogue',
          text: 'Hello! I am Sulafat. I am from Sudan. Where are you from?',
          speakerRole: 'tutor',
          characterId: 'char_sulafat',
          priority: 'P0_CRITICAL',
          status: 'HUMAN_VERIFIED',
          slowVersionRequired: true,
          sourceStage: 'DIALOGUE',
        },
        {
          audioId: 'audio_u1_l1_narrator_intro',
          text: 'Welcome to Lesson 1: Personal Identifiers & Social Introductions.',
          speakerRole: 'narrator',
          priority: 'P1_HIGH',
          status: 'HUMAN_VERIFIED',
          slowVersionRequired: false,
          sourceStage: 'GOALS',
        },
      ],
      recyclingRequirements: {
        introducedConcepts: ['verb_be', 'subject_pronouns', 'country_names'],
        recycledConcepts: [],
        integratedConcepts: ['greetings'],
        assessedConcepts: ['verb_be', 'country_names'],
        linkedPreviousLessonIds: [],
        linkedPreviousUnitIds: [],
      },
      wordpressSlug: 'a1-unit-1-lesson-1-introductions',
    };
  }

  /**
   * Planned Blueprint for Lesson 2 (Architecture Plan)
   */
  public static getLesson2BlueprintPlan(): LessonBlueprint {
    return {
      blueprintId: 'bp_a1_u1_l2_plan',
      lessonId: 'a1_u1_l2',
      unitId: 'unit_1',
      unitNumber: 1,
      lessonNumber: 2,
      cefrLevel: 'A1',
      lessonTitle: 'Occupations, Workplaces & Basic Descriptions',
      lessonPurpose: 'Learn occupational terms, articles a/an with jobs, and recycle verb BE with names and origins.',
      prerequisiteConcepts: ['verb_be_present', 'personal_identity', 'country_names'],
      newGrammar: ['Indefinite Articles (a / an with occupations)'],
      recycledGrammar: ['Verb TO BE (am/is/are)'],
      newVocabularyDomains: ['Occupations & Professions', 'Workplaces & Locations'],
      recycledVocabulary: ['Greetings', 'Countries'],
      lexicalChunks: ['What do you do?', 'I work as a...', 'He works at...'],
      collocations: ['work in a hospital', 'office worker'],
      sentencePatterns: ['I am a [Job].', 'She is an [Job].', 'Where do you work?'],
      communicativeFunctions: ['Asking about Occupations', 'Describing Work Places'],
      pronunciationTargets: ['Linking vowel sounds with "an"', 'Stress on profession nouns'],
      skillTargets: {
        listening: ['Identify professions in short audio conversations'],
        speaking: ['State your job title and workplace clearly'],
        reading: ['Match business cards to profession descriptions'],
        writing: ['Write 3 sentences introducing yourself and your occupation'],
        interaction: ['Pair interview asking "What do you do?"'],
        mediation: ['Translate L1 job descriptions to L2 English sentences'],
        pronunciation: ['Pronounce "a doctor" vs "an engineer" correctly'],
        grammar: ['Apply "a" vs "an" before consonant and vowel sounds'],
        vocabulary: ['Spell 10 common occupation words accurately'],
      },
      commonLearnerErrors: [
        'Omitting articles: "I am doctor" instead of "I am a doctor"',
        'Using "a" before vowel sound: "a engineer" instead of "an engineer"',
      ],
      canDoOutcomes: [
        'Can state one\'s occupation using a/an correctly.',
        'Can ask others what they do and where they work.',
      ],
      pedagogicalBalance: {
        newVsRecycledRatio: {
          newVocabularyCount: 12,
          recycledVocabularyCount: 8,
          newGrammarCount: 1,
          recycledGrammarCount: 1,
          newSentencePatternCount: 3,
          recycledSentencePatternCount: 2,
          newCommunicativeFunctionCount: 2,
          recycledCommunicativeFunctionCount: 2,
        },
        cognitiveProgressionSpan: ['RECOGNITION', 'CONTROLLED', 'GUIDED', 'TRANSFORMATION', 'PRODUCTION', 'INTEGRATION'],
        estimatedCompletionTimeMinutes: 45,
      },
      vocabularyContracts: [
        {
          wordId: 'v_doctor',
          word: 'doctor',
          phasesRequired: ['exposure', 'meaning', 'pronunciation', 'recognition', 'recall', 'contextual_use'],
          isRecycled: false,
        },
      ],
      grammarContracts: [
        {
          grammarId: 'g_indefinite_articles',
          topic: 'Indefinite Articles (A/An)',
          knowledgeVsUseBalance: { knowledgeWeightPercent: 25, useWeightPercent: 75 },
          phasesRequired: [
            'discovery',
            'explanation',
            'pattern_recognition',
            'controlled_practice',
            'guided_production',
            'independent_production',
            'error_correction',
            'assessment',
          ],
          isRecycled: false,
        },
      ],
      stageTemplates: LessonFactoryService.getStandardStageTemplates(),
      exerciseBlueprints: [
        {
          exerciseBlueprintId: 'ex_bp_u1_l2_1',
          lessonId: 'a1_u1_l2',
          stageNumber: 3,
          stageType: 'VOCABULARY',
          learningObjective: 'Identify occupation words from image cues',
          skill: 'vocabulary',
          vocabularyTarget: 'Occupations',
          difficulty: 'RECOGNITION',
          exerciseType: 'multiple_choice',
          isRecycled: false,
          answerKeySpec: 'Match image to job title',
          explanationRequirement: 'Identify doctor, teacher, engineer',
          assessmentRelevance: true,
        },
        {
          exerciseBlueprintId: 'ex_bp_u1_l2_2',
          lessonId: 'a1_u1_l2',
          stageNumber: 8,
          stageType: 'CONTROLLED_PRACTICE',
          learningObjective: 'Choose a vs an before job titles',
          skill: 'grammar',
          grammarTarget: 'Indefinite Articles',
          difficulty: 'CONTROLLED',
          exerciseType: 'fill_blank',
          isRecycled: false,
          answerKeySpec: 'a / an',
          explanationRequirement: 'Use "an" before vowel sound',
          assessmentRelevance: true,
        },
      ],
      assessmentScope: {
        assessmentLevel: 'LESSON',
        masteryObjectives: [
          'Choose a vs an correctly for 5 job titles',
          'Recycle verb BE in job statements',
        ],
        minimumPassScorePercent: 80,
        questionCount: 5,
        remedialTriggerThresholdPercent: 70,
      },
      audioRequirements: [
        {
          audioId: 'audio_u1_l2_dialogue_draft',
          text: 'What do you do? I am an engineer. I work in an office.',
          speakerRole: 'character_a',
          priority: 'P0_CRITICAL',
          status: 'MISSING',
          slowVersionRequired: true,
          sourceStage: 'DIALOGUE',
        },
      ],
      recyclingRequirements: {
        introducedConcepts: ['indefinite_articles', 'occupations'],
        recycledConcepts: ['verb_be', 'countries', 'greetings'],
        integratedConcepts: ['personal_identity'],
        assessedConcepts: ['indefinite_articles', 'occupations'],
        linkedPreviousLessonIds: ['a1_u1_l1'],
        linkedPreviousUnitIds: ['unit_1'],
      },
      wordpressSlug: 'a1-unit-1-lesson-2-occupations',
    };
  }

  /**
   * Quality Gate Validation Engine (11 Strict Checks)
   */
  public static validateLessonBlueprint(
    blueprint: LessonBlueprint,
    unitScope?: UnitScopeDefinition
  ): LessonValidationReport {
    const checks: QualityGateResultItem[] = [];
    const missingAllocations: string[] = [];

    // Check 1: CURRICULUM_ALIGNMENT
    const isAligned =
      blueprint.cefrLevel === 'A1' &&
      blueprint.unitNumber >= 1 &&
      blueprint.unitNumber <= 6 &&
      blueprint.lessonTitle.length > 5;

    checks.push({
      checkName: 'CURRICULUM_ALIGNMENT',
      status: isAligned ? 'PASS' : 'FAIL',
      message: isAligned
        ? `Aligned with A1 Unit ${blueprint.unitNumber} curriculum scope.`
        : 'Lesson blueprint does not match CEFR level or Unit range boundaries.',
    });

    // Check 2: PREREQUISITES
    const hasPrereqs = blueprint.prerequisiteConcepts && blueprint.prerequisiteConcepts.length > 0;
    checks.push({
      checkName: 'PREREQUISITES',
      status: hasPrereqs ? 'PASS' : 'WARN',
      message: hasPrereqs
        ? `${blueprint.prerequisiteConcepts.length} prerequisite concept(s) declared.`
        : 'No prerequisite concepts specified. Ensure lesson does not assume unintroduced knowledge.',
    });

    // Check 3: NEW_RECYCLED_BALANCE
    const balance = blueprint.pedagogicalBalance.newVsRecycledRatio;
    const isBalanced =
      balance.newVocabularyCount > 0 &&
      (blueprint.lessonNumber === 1 || balance.recycledVocabularyCount >= 0);

    checks.push({
      checkName: 'NEW_RECYCLED_BALANCE',
      status: isBalanced ? 'PASS' : 'WARN',
      message: `Balance Ratio: New Vocab=${balance.newVocabularyCount}, Recycled Vocab=${balance.recycledVocabularyCount}, New Grammar=${balance.newGrammarCount}, Recycled Grammar=${balance.recycledGrammarCount}`,
    });

    // Check 4: GRAMMAR_ALLOCATION
    if (!blueprint.newGrammar || blueprint.newGrammar.length === 0) {
      missingAllocations.push('MISSING_GRAMMAR_ALLOCATION');
      checks.push({
        checkName: 'GRAMMAR_ALLOCATION',
        status: 'MISSING_ALLOCATION',
        message: 'No new grammar points allocated to this lesson blueprint.',
      });
    } else {
      checks.push({
        checkName: 'GRAMMAR_ALLOCATION',
        status: 'PASS',
        message: `${blueprint.newGrammar.length} grammar point(s) allocated (${blueprint.newGrammar.join(', ')})`,
      });
    }

    // Check 5: VOCABULARY_ALLOCATION
    if (!blueprint.newVocabularyDomains || blueprint.newVocabularyDomains.length === 0) {
      missingAllocations.push('MISSING_VOCABULARY_ALLOCATION');
      checks.push({
        checkName: 'VOCABULARY_ALLOCATION',
        status: 'MISSING_ALLOCATION',
        message: 'No vocabulary domains allocated to this lesson blueprint.',
      });
    } else {
      checks.push({
        checkName: 'VOCABULARY_ALLOCATION',
        status: 'PASS',
        message: `${blueprint.newVocabularyDomains.length} vocabulary domain(s) allocated (${blueprint.newVocabularyDomains.join(', ')})`,
      });
    }

    // Check 6: SKILL_COVERAGE
    const skills = blueprint.skillTargets;
    const skillCount =
      (skills.listening?.length || 0) +
      (skills.speaking?.length || 0) +
      (skills.reading?.length || 0) +
      (skills.writing?.length || 0) +
      (skills.interaction?.length || 0) +
      (skills.mediation?.length || 0);

    const fullSkillCoverage = skillCount >= 5;
    checks.push({
      checkName: 'SKILL_COVERAGE',
      status: fullSkillCoverage ? 'PASS' : 'WARN',
      message: fullSkillCoverage
        ? `Comprehensive skill integration across ${skillCount} specific targets.`
        : `Partial skill coverage (${skillCount} targets). Ensure balanced receptive/productive skills.`,
    });

    // Check 7: SENTENCE_CONSTRUCTION
    if (!blueprint.sentencePatterns || blueprint.sentencePatterns.length === 0) {
      missingAllocations.push('MISSING_SENTENCE_PATTERNS');
      checks.push({
        checkName: 'SENTENCE_CONSTRUCTION',
        status: 'MISSING_ALLOCATION',
        message: 'No explicit sentence construction patterns provided.',
      });
    } else {
      checks.push({
        checkName: 'SENTENCE_CONSTRUCTION',
        status: 'PASS',
        message: `${blueprint.sentencePatterns.length} sentence construction pattern(s) specified.`,
      });
    }

    // Check 8: COMMUNICATIVE_PURPOSE
    if (!blueprint.communicativeFunctions || blueprint.communicativeFunctions.length === 0) {
      missingAllocations.push('MISSING_COMMUNICATIVE_PURPOSE');
      checks.push({
        checkName: 'COMMUNICATIVE_PURPOSE',
        status: 'MISSING_ALLOCATION',
        message: 'No communicative function target declared for real-world application.',
      });
    } else {
      checks.push({
        checkName: 'COMMUNICATIVE_PURPOSE',
        status: 'PASS',
        message: `Communicative Goals: ${blueprint.communicativeFunctions.join(', ')}`,
      });
    }

    // Check 9: ASSESSMENT_ALIGNMENT
    const assessmentValid =
      blueprint.assessmentScope &&
      blueprint.assessmentScope.assessmentLevel === 'LESSON' &&
      blueprint.assessmentScope.masteryObjectives.length > 0;

    if (!assessmentValid) {
      missingAllocations.push('INVALID_ASSESSMENT_SCOPE');
      checks.push({
        checkName: 'ASSESSMENT_ALIGNMENT',
        status: 'FAIL',
        message: 'Assessment scope must be assigned to LESSON level and specify mastery objectives.',
      });
    } else {
      checks.push({
        checkName: 'ASSESSMENT_ALIGNMENT',
        status: 'PASS',
        message: `Lesson Mastery Assessment defined with ${blueprint.assessmentScope.masteryObjectives.length} mastery targets.`,
      });
    }

    // Check 10: AUDIO_REQUIREMENTS
    const hasAudioReqs = blueprint.audioRequirements && blueprint.audioRequirements.length > 0;
    checks.push({
      checkName: 'AUDIO_REQUIREMENTS',
      status: hasAudioReqs ? 'PASS' : 'WARN',
      message: hasAudioReqs
        ? `${blueprint.audioRequirements.length} audio production requirement asset(s) catalogued.`
        : 'No audio asset requirements catalogued. Pronunciation and listening stages require audio contracts.',
    });

    // Check 11: RECYCLING_REQUIREMENTS
    const recyclingValid =
      blueprint.recyclingRequirements &&
      blueprint.recyclingRequirements.introducedConcepts.length > 0;

    checks.push({
      checkName: 'RECYCLING_REQUIREMENTS',
      status: recyclingValid ? 'PASS' : 'WARN',
      message: recyclingValid
        ? `Recycling contract established (${blueprint.recyclingRequirements.introducedConcepts.length} introduced, ${blueprint.recyclingRequirements.recycledConcepts.length} recycled).`
        : 'Recycling contract is missing introduced or recycled concept linkage.',
    });

    const passCount = checks.filter((c) => c.status === 'PASS').length;
    const scorePercent = Math.round((passCount / checks.length) * 100);
    const isValid = missingAllocations.length === 0 && scorePercent >= 70;

    return {
      lessonId: blueprint.lessonId,
      isValid,
      scorePercent,
      checks,
      missingAllocations,
      validatedAt: new Date().toISOString(),
    };
  }

  /**
   * Create Content Generation Contract from Blueprint & Unit Scope
   */
  public static createGenerationContract(
    blueprint: LessonBlueprint,
    unitScope: UnitScopeDefinition
  ): ContentGenerationContract {
    const report = this.validateLessonBlueprint(blueprint, unitScope);

    return {
      contractId: `contract_${blueprint.lessonId}_${Date.now()}`,
      approvedLessonBlueprint: blueprint,
      unitScope,
      learnerCEFRLevel: blueprint.cefrLevel,
      prerequisiteConcepts: blueprint.prerequisiteConcepts,
      newConcepts: [...blueprint.newGrammar, ...blueprint.newVocabularyDomains],
      recycledConcepts: [...blueprint.recycledGrammar, ...blueprint.recycledVocabulary],
      vocabularyAllocation: blueprint.newVocabularyDomains,
      grammarAllocation: blueprint.newGrammar,
      skillTargets: blueprint.skillTargets,
      communicativeFunctions: blueprint.communicativeFunctions,
      assessmentRequirements: blueprint.assessmentScope,
      audioRequirements: blueprint.audioRequirements,
      status: report.isValid ? 'VALID' : 'MISSING_CURRICULUM_ALLOCATION',
      missingAllocations: report.missingAllocations,
    };
  }
}
