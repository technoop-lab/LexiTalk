import { ConversationDefinition } from '../../types/conversation';

export const CONVERSATION_A2_173: ConversationDefinition = {
  id: 'conv_a2_173',
  title: 'Emergency Preparedness, Safety Protocols & Crisis Evacuation',
  cefr: 'A2',
  unitId: 'unit_a2_12',
  lessonLinks: ['lesson_a2_12_173'],
  estimatedMinutes: 5,
  scenario:
    'You are in the safety coordination control room at Metro Logistics in Sheffield conducting an annual emergency drill evaluation with Senior Health & Safety Officer Commander Robert Vance. You need to review building evacuation protocols, explain emergency procedures using imperatives and passive modals ("Exit routes must be kept clear at all times", "In the event of fire, elevators must not be used"), coordinate assembly point headcounts, and address safety non-compliance issues firmly.',
  communicativeGoals: [
    'Deliver clear, authoritative safety instructions and emergency procedure briefings in English',
    'Use modal obligations and passive structures ("must be evacuated immediately", "must not be obstructed") for safety rules',
    'Use conditional emergency formulas ("In the event of fire...", "Should the alarm sound...")',
    'Report drill performance, verify muster point headcounts, and enforce compliance corrections',
  ],
  canDoStatements: [
    'Can explain emergency evacuation procedures clearly using modal verbs and safety imperatives',
    'Can use passive modal structures ("must be kept clear", "are to be reported") for official workplace safety rules',
    'Can coordinate roll calls and headcounts during emergency drills',
  ],
  characters: [
    {
      id: 'char_robert_vance',
      name: 'Robert Vance',
      role: 'Chief Health & Safety Officer',
      avatar: '🚨',
      voiceGender: 'male',
    },
  ],
  teach: {
    keyVocabulary: [
      {
        word: 'evacuation',
        ipa: '/ɪˌvækjuˈeɪʃn/',
        partOfSpeech: 'noun',
        meaning: 'The urgent movement of people away from an area subject to hazard or emergency',
        exampleSentence: 'The complete building evacuation took three minutes and forty seconds.',
        translations: { hi: 'निकासी / आपातकालीन प्रस्थान' },
      },
      {
        word: 'assembly point',
        ipa: '/əˈsembli pɔɪnt/',
        partOfSpeech: 'noun',
        meaning: 'A designated place where people gather in an emergency',
        exampleSentence: 'All employees must proceed immediately to Assembly Point C in the rear car park.',
        translations: { hi: 'एकत्रीकरण स्थल / सुरक्षित सभा स्थल' },
      },
      {
        word: 'hazard',
        ipa: '/ˈhæzəd/',
        partOfSpeech: 'noun',
        meaning: 'A danger or risk; a potential source of harm',
        exampleSentence: 'Blocking fire exit corridors with pallets is a serious safety hazard.',
        translations: { hi: 'खतरा / संकट' },
      },
      {
        word: 'protocol',
        ipa: '/ˈprəʊtəkɒl/',
        partOfSpeech: 'noun',
        meaning: 'The official procedure or system of rules governing affairs of state or emergency actions',
        exampleSentence: 'Our crisis protocol requires a full headcount verification within five minutes.',
        translations: { hi: 'नियम / सुरक्षा प्रोटोकॉल' },
      },
    ],
    usefulChunks: [
      {
        phrase: 'In the event of an alarm, all personnel must evacuate via the nearest marked fire exit.',
        functionCategory: 'Emergency Instructions with "In the event of"',
        exampleSentence: 'In the event of power failure, emergency lights will activate.',
      },
      {
        phrase: 'Elevators must not be used under any circumstances during an evacuation.',
        functionCategory: 'Modal Obligations with Passive Voice ("must not be used")',
        exampleSentence: 'Fire doors must be kept closed.',
      },
      {
        phrase: 'All floor wardens are required to conduct an immediate headcount at Assembly Point C.',
        functionCategory: 'Mandatory Accountability Protocols',
        exampleSentence: 'All visitors are required to sign out.',
      },
      {
        phrase: 'Should you notice smoke or structural hazards, sound the manual alarm call point immediately.',
        functionCategory: 'Conditional Action with Inversion ("Should you notice")',
        exampleSentence: 'Should you see an obstruction, report it immediately.',
      },
    ],
    grammar: {
      title: 'Modal Verbs of Obligation in the Passive Voice & Emergency Conditionals',
      conceptExplanation:
        '1. Passive Modals for Safety Mandates: "Subject + must / must not / should + be + Past Participle":\n   - "Corridors must be kept clear at all times."\n   - "Fire doors must not be wedged open."\n2. "In the event of + Noun Phrase": Expresses conditions in formal safety guidelines:\n   - "In the event of a chemical spill, seal the ventilation dampers."\n3. Inverted Conditionals for Safety: "Should an emergency occur, proceed to the exit." (replaces "If an emergency occurs").',
      patternFormula: 'In the event of + [Noun Phrase], Subject + must be + [Past Participle] | Should you + [Base Verb], [Imperative / must]',
      contrastExamples: [
        {
          incorrect: 'When fire happens, people must not to use elevator and exit doors need open by people.',
          correct: 'In the event of fire, elevators must not be used, and fire exit doors must be kept unobstructed.',
          explanation: 'Use formal conditional "in the event of fire" and correct passive modal forms ("must not be used", "must be kept").',
        },
      ],
    },
    dialogueExamples: [
      {
        speaker: 'Robert Vance',
        text: 'Attention team! We are reviewing our mandatory fire evacuation drill results. What are the key safety mandates regarding exit routes and elevators?',
        translation: 'ध्यान दें टीम! हम अपने अनिवार्य अग्नि निकासी ड्रिल परिणामों की समीक्षा कर रहे हैं। निकास मार्गों और लिफ्टों के संबंध में प्रमुख सुरक्षा नियम क्या हैं?',
      },
      {
        speaker: 'You',
        text: 'In the event of an alarm, elevators must not be used, and all designated emergency stairwells must be kept clear of obstructions at all times.',
        translation: 'अलार्म की स्थिति में, लिफ्ट का उपयोग नहीं किया जाना चाहिए, और सभी निर्दिष्ट आपातकालीन सीढ़ियों को हर समय बाधाओं से मुक्त रखा जाना चाहिए।',
      },
    ],
  },
  controlledPractice: [
    {
      id: 'cp_a2_173_1',
      type: 'fill_blank',
      prompt: 'Complete the safety mandate: "Fire exits ___ (must be kept / must to keep) clear of boxes and equipment at all times."',
      options: [
        { id: 'opt_1', text: 'must be kept', isCorrect: true },
        { id: 'opt_2', text: 'must to keep', isCorrect: false },
        { id: 'opt_3', text: 'must keeping', isCorrect: false },
      ],
      correctAnswer: 'must be kept',
      explanation: 'Passive modal obligation: "must be + past participle (kept)".',
    },
    {
      id: 'cp_a2_173_2',
      type: 'multiple_choice',
      prompt: 'Which sentence correctly expresses an emergency conditional?',
      options: [
        { id: 'opt_1', text: 'In the event of an emergency, proceed directly to Assembly Point C.', isCorrect: true },
        { id: 'opt_2', text: 'In the event of an emergency, you will to proceed directly.', isCorrect: false },
        { id: 'opt_3', text: 'In event of emergency, proceeding to assembly point.', isCorrect: false },
      ],
      correctAnswer: 'In the event of an emergency, proceed directly to Assembly Point C.',
      explanation: '"In the event of [noun], [imperative]" is standard emergency phrasing.',
    },
    {
      id: 'cp_a2_173_3',
      type: 'multiple_choice',
      prompt: 'Which statement correctly states the elevator restriction during an evacuation?',
      options: [
        { id: 'opt_1', text: 'Elevators must not be used during a fire evacuation under any circumstances.', isCorrect: true },
        { id: 'opt_2', text: 'Elevators must not be using during fire.', isCorrect: false },
        { id: 'opt_3', text: 'Elevators not must be used.', isCorrect: false },
      ],
      correctAnswer: 'Elevators must not be used during a fire evacuation under any circumstances.',
      explanation: 'Passive modal prohibition: "must not be used".',
    },
  ],
  sentenceConstruction: [
    {
      id: 'sc_a2_173_1',
      scenarioContext: 'State a passive modal safety rule.',
      prompt: 'Build: "Emergency exit doors must be kept clear at all times."',
      targetStructure: 'Emergency exit doors must be kept clear at all times',
      wordBank: ['Emergency', 'exit', 'doors', 'must', 'be', 'kept', 'clear', 'at', 'all', 'times', 'keeping', 'to'],
      acceptableSolutions: [
        'Emergency exit doors must be kept clear at all times.',
      ],
      explanation: 'Passive modal rule with "must be kept".',
    },
    {
      id: 'sc_a2_173_2',
      scenarioContext: 'State an emergency condition.',
      prompt: 'Build: "In the event of fire do not use the elevators."',
      targetStructure: 'In the event of fire do not use the elevators',
      wordBank: ['In', 'the', 'event', 'of', 'fire', 'do', 'not', 'use', 'the', 'elevators', 'using', 'should'],
      acceptableSolutions: [
        'In the event of fire, do not use the elevators.',
        'In the event of fire do not use the elevators.',
      ],
      explanation: 'Formal emergency conditional with "In the event of fire...".',
    },
  ],
  turns: [
    {
      id: 'turn_a2_173_1',
      turnIndex: 1,
      partnerPrompt:
        'Attention safety wardens. We just concluded our unannounced building evacuation drill. What were the critical safety rules regarding stairwells and elevators during the evacuation?',
      partnerAudioText:
        'Attention safety wardens. We just concluded our unannounced building evacuation drill. What were the critical safety rules regarding stairwells and elevators during the evacuation?',
      partnerQuestionHindi:
        'सुरक्षा वार्डनों का ध्यान आकर्षित किया जाता है। हमने अभी-अभी अपना अघोषित भवन निकासी अभ्यास समाप्त किया है। निकासी के दौरान सीढ़ियों और लिफ्टों के संबंध में महत्वपूर्ण सुरक्षा नियम क्या थे?',
      expectedFunction: 'State Mandatory Safety Protocols using Passive Modals ("must not be used", "must be kept clear")',
      contextGoal:
        'Explain that in the event of an alarm, elevators must not be used, and all emergency stairwells must be kept clear.',
      targetVocabulary: ['In the event of an alarm', 'elevators must not be used', 'stairwells must be kept clear of obstructions'],
      suggestedResponses: [
        {
          label: 'State Core Safety Mandates (Passive Modals)',
          text: 'In the event of an alarm, elevators must not be used under any circumstances, and all emergency stairwells must be kept clear of obstructions at all times.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Evacuation Protocol Rules',
          text: 'All personnel must evacuate via the nearest marked fire exit stairs. Elevators are grounded automatically and must never be accessed during an emergency.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Emergency Conditional / Intro (in the event of / during an alarm / evacuation / emergency / should the alarm sound)',
          patterns: ['in the event of', 'during an alarm', 'evacuation', 'emergency', 'alarm', 'should the alarm sound'],
          required: true,
        },
        {
          name: 'Passive Modal Rules (must not be used / must be kept clear / must evacuate / elevators / stairwells / fire exit)',
          patterns: ['must not be used', 'must be kept clear', 'must evacuate', 'elevators', 'stairwells', 'fire exit', 'obstructions'],
          required: true,
        },
      ],
      commonMistakeRules: [
        {
          id: 'mistake_passive_modal_used',
          pattern: 'elevators must not use|elevators must not be use',
          errorType: 'grammar',
          message: 'Passive modals require the past participle: "must not be used" (not *must not use* or *must not be use*).',
          correctionPattern: 'Elevators must not be used during an evacuation',
        },
      ],
      remediationPractice: {
        id: 'rem_a2_173_1',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "Fire extinguishers ___ (must be inspected / must inspected) annually."',
        options: [
          { id: 'opt_1', text: 'must be inspected', isCorrect: true },
          { id: 'opt_2', text: 'must inspected', isCorrect: false },
          { id: 'opt_3', text: 'must be inspecting', isCorrect: false },
        ],
        correctAnswer: 'must be inspected',
        explanation: 'Passive modal structure: "must be + past participle".',
      },
    },
    {
      id: 'turn_a2_173_2',
      turnIndex: 2,
      partnerPrompt:
        'Correct. Now regarding muster points and headcount verification: how did Floor 3 perform at Assembly Point C, and were there any missing persons reported?',
      partnerAudioText:
        'Correct. Now regarding muster points and headcount verification: how did Floor 3 perform at Assembly Point C, and were there any missing persons reported?',
      partnerQuestionHindi:
        'सही। अब मस्टर पॉइंट्स और हेडकाउंट सत्यापन के संबंध में: फ़्लोर 3 ने असेंबली पॉइंट सी पर कैसा प्रदर्शन किया, और क्या किसी लापता व्यक्ति की सूचना मिली थी?',
      expectedFunction: 'Report Muster Point Headcount and Confirm Full Accountability',
      contextGoal:
        'Report that all 42 staff members and 3 visitors were accounted for within three minutes at Assembly Point C.',
      targetVocabulary: ['all forty-two personnel accounted for', 'verified at Assembly Point C', 'no missing individuals'],
      suggestedResponses: [
        {
          label: 'Report Headcount & Assembly Time',
          text: 'Floor 3 completed the evacuation in three minutes and ten seconds. All forty-two employees and three registered visitors were fully accounted for at Assembly Point C.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Headcount Verification Details',
          text: 'Our roll call was completed promptly. All staff members assembled at Point C, and the warden roll sheet was verified with zero missing individuals.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Assembly Point & Numbers (assembly point c / point c / forty-two / employees / visitors / staff)',
          patterns: ['assembly point c', 'point c', 'forty-two', 'employees', 'visitors', 'staff', 'personnel'],
          required: true,
        },
        {
          name: 'Accountability / Verification (accounted for / verified / roll call / headcount / no missing / completed)',
          patterns: ['accounted for', 'verified', 'roll call', 'headcount', 'no missing', 'completed', 'promptly'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_173_2',
        type: 'multiple_choice',
        prompt: 'Which phrase correctly reports that all staff were present?',
        options: [
          { id: 'opt_1', text: 'All staff members were fully accounted for at the assembly point.', isCorrect: true },
          { id: 'opt_2', text: 'All staff members was counted together.', isCorrect: false },
          { id: 'opt_3', text: 'Everyone were accounted at point.', isCorrect: false },
        ],
        correctAnswer: 'All staff members were fully accounted for at the assembly point.',
        explanation: '"were accounted for" is the standard safety reporting idiom.',
      },
    },
    {
      id: 'turn_a2_173_3',
      turnIndex: 3,
      partnerPrompt:
        'During my inspection, I observed several delivery boxes blocking the West Exit corridor. What corrective action must be enforced immediately to address this safety hazard?',
      partnerAudioText:
        'During my inspection, I observed several delivery boxes blocking the West Exit corridor. What corrective action must be enforced immediately to address this safety hazard?',
      partnerQuestionHindi:
        'मेरे निरीक्षण के दौरान, मैंने वेस्ट एग्जिट कॉरिडोर को अवरुद्ध करने वाले कई डिलीवरी बॉक्स देखे। इस सुरक्षा खतरे को दूर करने के लिए तुरंत क्या सुधारात्मक कार्रवाई लागू की जानी चाहिए?',
      expectedFunction: 'Enforce Corrective Action using Passive Modals and Imperatives',
      contextGoal:
        'State that the boxes must be removed immediately, and logistics staff will be reminded of zero-tolerance policies.',
      targetVocabulary: ['boxes must be removed immediately', 'corridor must remain unobstructed', 'zero-tolerance safety policy'],
      suggestedResponses: [
        {
          label: 'Enforce Hazard Removal with Passive Modals',
          text: 'Those boxes must be removed immediately. I will instruct the warehouse team that exit passageways must remain completely unobstructed under company safety regulations.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Corrective Action Plan',
          text: 'The hazard will be cleared right now. We will also issue a written safety reminder stating that blocking emergency egress routes is strictly prohibited.',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Removal / Clearance (must be removed / cleared / removed immediately / unobstructed / cleared right now)',
          patterns: ['must be removed', 'cleared', 'removed immediately', 'unobstructed', 'cleared right now', 'removed'],
          required: true,
        },
        {
          name: 'Enforcement / Safety Policy (safety regulations / warehouse / passageways / egress / prohibited / reminder / policy)',
          patterns: ['safety regulations', 'warehouse', 'passageways', 'egress', 'prohibited', 'reminder', 'policy', 'hazard'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_173_3',
        type: 'fill_blank',
        prompt: 'Fill in the blank: "All obstructions ___ (must be cleared / must cleared) from the doorway."',
        options: [
          { id: 'opt_1', text: 'must be cleared', isCorrect: true },
          { id: 'opt_2', text: 'must cleared', isCorrect: false },
          { id: 'opt_3', text: 'is cleared', isCorrect: false },
        ],
        correctAnswer: 'must be cleared',
        explanation: 'Passive modal obligation: "must be cleared".',
      },
    },
    {
      id: 'turn_a2_173_4',
      turnIndex: 4,
      partnerPrompt:
        'Well handled. Overall, the drill demonstrated excellent emergency preparedness and rapid response times. Thank you for your leadership in maintaining workplace safety standards.',
      partnerAudioText:
        'Well handled. Overall, the drill demonstrated excellent emergency preparedness and rapid response times. Thank you for your leadership in maintaining workplace safety standards.',
      partnerQuestionHindi:
        'अच्छी तरह से संभाला गया। कुल मिलाकर, ड्रिल ने उत्कृष्ट आपातकालीन तैयारी और त्वरित प्रतिक्रिया समय का प्रदर्शन किया। कार्यस्थल सुरक्षा मानकों को बनाए रखने में आपके नेतृत्व के लिए धन्यवाद।',
      expectedFunction: 'Reaffirm Commitment to Safety & Conclude Safety Review',
      contextGoal:
        'Thank Commander Vance, confirm the hazard is cleared, and sign off.',
      targetVocabulary: ['thank you Commander Vance', 'committed to workplace safety', 'file the final drill report'],
      suggestedResponses: [
        {
          label: 'Professional Safety Sign-Off',
          text: 'Thank you, Commander Vance. Our team is fully committed to zero-hazard safety standards. I will submit the finalized drill report by three PM.',
          scaffoldingLevel: 'medium',
        },
        {
          label: 'Safety Commitment Close',
          text: 'Thank you for your thorough inspection. We will ensure all corridors remain clear and our warden team stays vigilant. Have a safe day!',
          scaffoldingLevel: 'medium',
        },
      ],
      acceptableConceptGroups: [
        {
          name: 'Gratitude & Respect (thank you / thanks / commander / vance / appreciate / thorough)',
          patterns: ['thank you', 'thanks', 'commander', 'vance', 'appreciate', 'thorough'],
          required: true,
        },
        {
          name: 'Safety Commitment (safety / report / drill / committed / standards / vigilant / safe day)',
          patterns: ['safety', 'report', 'drill', 'committed', 'standards', 'vigilant', 'safe day', 'corridors'],
          required: true,
        },
      ],
      commonMistakeRules: [],
      remediationPractice: {
        id: 'rem_a2_173_4',
        type: 'multiple_choice',
        prompt: 'Which closing sentence is most professional for completing a safety drill debrief?',
        options: [
          { id: 'opt_1', text: 'Thank you, Commander Vance. I will submit the finalized drill report this afternoon.', isCorrect: true },
          { id: 'opt_2', text: 'Drill is over we go back to work now.', isCorrect: false },
          { id: 'opt_3', text: 'Safety ok bye.', isCorrect: false },
        ],
        correctAnswer: 'Thank you, Commander Vance. I will submit the finalized drill report this afternoon.',
        explanation: 'Professional acknowledgement and commitment to regulatory documentation.',
      },
    },
  ],
  masteryCriteria: {
    minOverallScore: 80,
    minTurnsPassed: 3,
    maxGrammarErrorsAllowed: 2,
    targetVocabularyCoveragePct: 60,
  },
};
