import fs from 'fs';
import path from 'path';

// Fix Stage 1 (Days 1-10)
function fixStage1() {
  const filePath = path.resolve('DAYS_01_10_CONTENT.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const days = Array.isArray(data) ? data : (data.days || data.lessons || []);

  console.log('Fixing Stage 1 data...');

  // Day 02: Social Etiquette & Courtesy Keywords
  const d2 = days.find(d => (d.dayNumber || d.day) === 2);
  if (d2) {
    // 1. Rich, 100% unique contextual examples
    d2.examples = [
      { id: "d02_ex_001", category: "Courtesy Formulas", en: "Could you please pass the water pitcher across the table?", hi: "क्या आप कृपया मेज पर से पानी का जग इधर बढ़ा सकते हैं?", grammaticalFocus: "Modal Softening with 'Could you please...'" },
      { id: "d02_ex_002", category: "Expressing Gratitude", en: "Thank you so much for your timely assistance; I truly appreciate it.", hi: "आपकी समय पर सहायता के लिए बहुत-बहुत धन्यवाद; मैं वास्तव में इसकी सराहना करता हूँ।", grammaticalFocus: "Intensified gratitude with 'truly appreciate'" },
      { id: "d02_ex_003", category: "Professional Interaction", en: "We would be grateful if you could confirm your attendance by Friday.", hi: "यदि आप शुक्रवार तक अपनी उपस्थिति की पुष्टि कर सकें, तो हम आभारी होंगे।", grammaticalFocus: "Conditional politeness ('We would be grateful if...')" },
      { id: "d02_ex_004", category: "L1 Error Reversal", en: "You are most welcome; it was our absolute pleasure to assist you.", hi: "आपका बहुत-बहुत स्वागत है; आपकी सहायता करना हमारे लिए अत्यंत प्रसन्नता की बात थी।", grammaticalFocus: "Replacing archaic 'Mention not' with 'You are most welcome'" },
      { id: "d02_ex_005", category: "Phonetic Focus /θ/", en: "Think of three thoughtful things with thanksgiving in your heart.", hi: "अपने दिल में कृतज्ञता के साथ तीन विचारशील बातों के बारे में सोचें।", grammaticalFocus: "Voiceless dental fricative /θ/ in 'think', 'thoughtful', 'thanksgiving'" },
      { id: "d02_ex_006", category: "L1 Error Reversal", en: "Thank you for sending the updated project schedule.", hi: "अद्यतन परियोजना कार्यक्रम भेजने के लिए आपका धन्यवाद।", grammaticalFocus: "Replacing archaic 'Thanks for the same' with specific object noun phrase" },
      { id: "d02_ex_007", category: "Register Shift", en: "Informal: Thanks a ton! | Formal: I express my sincere gratitude for your guidance.", hi: "अनौपचारिक: बहुत-बहुत धन्यवाद! | औपचारिक: आपके मार्गदर्शन के लिए मैं अपनी हार्दिक कृतज्ञता व्यक्त करता हूँ।", grammaticalFocus: "Register contrast between conversational and corporate courtesy" },
      { id: "d02_ex_008", category: "Apology & Rectification", en: "I sincerely apologize for the delay in responding to your email.", hi: "आपके ईमेल का उत्तर देने में हुई देरी के लिए मैं ईमानदारी से क्षमा चाहता हूँ।", grammaticalFocus: "Formal apology formula with 'sincerely apologize for + V-ing'" },
      { id: "d02_ex_009", category: "Polite Interruption", en: "Excuse me for a moment; I need to take this urgent telephone call.", hi: "मुझे एक क्षण के लिए क्षमा करें; मुझे यह आवश्यक टेलीफोन कॉल लेनी होगी।", grammaticalFocus: "Polite excuse before stepping away" },
      { id: "d02_ex_010", category: "Hospitality & Warmth", en: "Thank you very much for your warm hospitality during our visit.", hi: "हमारी यात्रा के दौरान आपकी गर्मजोशी भरी मेहमाननवाज़ी के लिए बहुत-बहुत धन्यवाद।", grammaticalFocus: "Collocation 'warm hospitality'" },
      { id: "d02_ex_011", category: "Indirect Question", en: "Would you mind showing me where the conference hall is located?", hi: "क्या आप मुझे यह बताने का कष्ट करेंगे कि सम्मेलन कक्ष कहाँ स्थित है?", grammaticalFocus: "Polite inquiry using 'Would you mind + V-ing'" },
      { id: "d02_ex_012", category: "Workplace Courtesy", en: "Please do not hesitate to contact our team if you require further details.", hi: "यदि आपको अधिक विवरण की आवश्यकता हो तो कृपया हमारी टीम से संपर्क करने में संकोच न करें।", grammaticalFocus: "Professional courtesy closing formula" },
      { id: "d02_ex_013", category: "Repetition Request", en: "Pardon me, could you please repeat that last figure?", hi: "क्षमा करें, क्या आप कृपया वह अंतिम आंकड़ा दोबारा दोहरा सकते हैं?", grammaticalFocus: "'Pardon me' used for auditory repetition request" },
      { id: "d02_ex_014", category: "Offering Assistance", en: "May I assist you with carrying those heavy binders upstairs?", hi: "क्या मैं उन भारी बाइंडरों को ऊपर ले जाने में आपकी सहायता कर सकता हूँ?", grammaticalFocus: "Modal 'May I assist you with + V-ing'" },
      { id: "d02_ex_015", category: "Meeting Courtesy", en: "Thank you all for taking the time out of your busy schedules to attend.", hi: "उपस्थित होने के लिए अपनी व्यस्त दिनचर्या में से समय निकालने हेतु आप सभी का धन्यवाद।", grammaticalFocus: "Formal meeting opening acknowledgement" },
      { id: "d02_ex_016", category: "Public Transit Courtesy", en: "Excuse me, is this seat unoccupied or has someone reserved it?", hi: "क्षमा करें, क्या यह सीट खाली है या किसी ने इसे आरक्षित किया है?", grammaticalFocus: "Polite stranger interaction in public spaces" },
      { id: "d02_ex_017", category: "Diplomatic Refusal", en: "I would love to join, but unfortunately I have a prior commitment.", hi: "मुझे शामिल होने में बहुत खुशी होती, लेकिन दुर्भाग्य से मेरी पहले से ही एक प्रतिबद्धता है।", grammaticalFocus: "Softened polite refusal structure" },
      { id: "d02_ex_018", category: "Expressing Empathy", en: "Please accept our heartfelt condolences during this challenging time.", hi: "इस चुनौतीपूर्ण समय में कृपया हमारी हार्दिक संवेदनाएं स्वीकार करें।", grammaticalFocus: "Formal bereavement etiquette" },
      { id: "d02_ex_019", category: "Acknowledging Effort", en: "Your dedicated efforts on this assignment are deeply appreciated.", hi: "इस कार्य पर आपके समर्पित प्रयासों की दिल से सराहना की जाती है।", grammaticalFocus: "Passive voice courtesy construction" },
      { id: "d02_ex_020", category: "Patience Acknowledgement", en: "We appreciate your patience while our technical team resolves the issue.", hi: "जब तक हमारी तकनीकी टीम समस्या का समाधान करती है, हम आपके धैर्य की सराहना करते हैं।", grammaticalFocus: "'Appreciate your patience while...'" },
      { id: "d02_ex_021", category: "Service Interaction", en: "Could you kindly bring the check whenever it is convenient?", hi: "जब भी सुविधा हो, क्या आप कृपया बिल ला सकते हैं?", grammaticalFocus: "Polite dining request with 'Could you kindly...'" },
      { id: "d02_ex_022", category: "Formal Gratitude", en: "It is an absolute honor to receive this prestigious commendation today.", hi: "आज यह प्रतिष्ठित प्रशंसा प्राप्त करना एक परम सम्मान की बात है।", grammaticalFocus: "Formal award acceptance formula" },
      { id: "d02_ex_023", category: "Social Departure", en: "It was a real pleasure meeting you, and I look forward to our next discussion.", hi: "आपसे मिलकर बहुत खुशी हुई, और मैं हमारी अगली चर्चा की प्रतीक्षा कर रहा हूँ।", grammaticalFocus: "Social closing courtesy with 'look forward to'" },
      { id: "d02_ex_024", category: "Phone Etiquette", en: "Could I please speak with Mr. Harrison in the accounts department?", hi: "क्या मैं कृपया लेखा विभाग में श्री हैरिसन से बात कर सकता हूँ?", grammaticalFocus: "Telephone request with 'Could I please speak with...'" },
      { id: "d02_ex_025", category: "Phonetic Contrast /θ/ vs /ð/", en: "They think that their thirty brothers are trustworthy.", hi: "वे सोचते हैं कि उनके तीस भाई भरोसेमंद हैं।", grammaticalFocus: "Alternating voiced /ð/ ('they', 'that', 'their', 'brothers') and voiceless /θ/ ('think', 'thirty', 'trustworthy')" }
    ];

    // 2. Rich, 100% unique practice items
    d2.practice = {
      exercises: [
        {
          id: "day02_ex_001",
          type: "multiple_choice",
          prompt: "A client thanks you profusely for completing an urgent project. What is the most natural, professional response?",
          options: [
            "Mention not!",
            "You are most welcome; it was our pleasure!",
            "Thanks for the same!",
            "No mention!"
          ],
          correctAnswer: "You are most welcome; it was our pleasure!",
          explanationEn: "In standard global English, 'You are most welcome' or 'It was my pleasure' are standard. 'Mention not' is outdated Indian English.",
          explanationHi: "वैश्विक अंग्रेजी में 'You are most welcome' या 'It was our pleasure' सही है। 'Mention not' का प्रयोग न करें।",
          skillTag: "COURTESY_FORMULAS"
        },
        {
          id: "day02_ex_002",
          type: "error_correction",
          prompt: "Correct this Indian English email closing: 'Received your file, thanks for the same.'",
          targetText: "Received your file, thanks for the same.",
          correctAnswer: "Thank you for sending the file.",
          acceptableAlternatives: ["Thank you for providing the requested document.", "Thanks for sending the file."],
          options: [
            "Thank you for sending the file.",
            "Received file, thanks for same.",
            "Thanks for the same file received.",
            "Kindly acknowledge the same file."
          ],
          explanationEn: "'Thanks for the same' is archaic Victorian legalese. Use natural phrasing: 'Thank you for sending the file.'",
          explanationHi: "'Thanks for the same' एक पुरानी कानूनी भाषा है। इसके स्थान पर 'Thank you for sending the file' कहें।",
          skillTag: "L1_ERROR_REVERSAL"
        },
        {
          id: "day02_ex_003",
          type: "minimal_pair_discrim",
          prompt: "Which word begins with the voiceless dental fricative /θ/ (tongue tip lightly between upper and lower teeth)?",
          options: ["Thank", "Tank", "Sank", "Frank"],
          correctAnswer: "Thank",
          explanationEn: "'Thank' begins with /θ/ (tongue between teeth). 'Tank' has the alveolar stop /t/.",
          explanationHi: "'Thank' में जीभ दांतों के बीच आती है (/θ/); 'Tank' में जीभ मसूड़े पर टकराती है (/t/)।",
          skillTag: "PHONETICS_MINIMAL_PAIRS"
        },
        {
          id: "day02_ex_004",
          type: "multiple_choice",
          prompt: "How do you soften the direct command 'Give me the quarterly report now' into a polite workplace request?",
          options: [
            "Could you please share the quarterly report when you have a moment?",
            "You must give quarterly report immediately!",
            "Give report fast please!",
            "Pass report now itself!"
          ],
          correctAnswer: "Could you please share the quarterly report when you have a moment?",
          explanationEn: "Using 'Could you please...' with 'when you have a moment' makes the request polite and professional.",
          explanationHi: "'Could you please...' अनुरोध को अत्यंत शिष्ट और पेशेवर बनाता है।",
          skillTag: "MODAL_SOFTENING"
        },
        {
          id: "day02_ex_005",
          type: "multiple_choice",
          prompt: "You did not hear what someone said in a noisy room. What is the most courteous way to ask them to repeat?",
          options: [
            "Pardon me, could you please repeat that?",
            "What? Say again!",
            "Speak loudly now!",
            "Repeat your words!"
          ],
          correctAnswer: "Pardon me, could you please repeat that?",
          explanationEn: "'Pardon me, could you please repeat that?' is polite and standard across formal and casual contexts.",
          explanationHi: "दोबारा सुनने के लिए 'Pardon me, could you please repeat that?' सबसे विनम्र तरीका है।",
          skillTag: "COURTESY_FORMULAS"
        },
        {
          id: "day02_ex_006",
          type: "translation",
          prompt: "Translate to English: 'असुविधा के लिए हमें गहरा खेद है।'",
          options: [
            "We deeply regret the inconvenience caused.",
            "We are having big sadness for trouble.",
            "Sorry for the problem coming to you.",
            "Inconvenience is regretted by us heavily."
          ],
          correctAnswer: "We deeply regret the inconvenience caused.",
          explanationEn: "'We deeply regret the inconvenience caused' is the standard formal English construction.",
          explanationHi: "असुविधा के लिए औपचारिक खेद जताने का मानक वाक्य 'We deeply regret the inconvenience caused' है।",
          skillTag: "TRANSLATION_PRACTICE"
        },
        {
          id: "day02_ex_007",
          type: "multiple_choice",
          prompt: "Which response is appropriate when a senior manager says, 'Thank you for preparing this excellent presentation'?",
          options: [
            "It was my pleasure, and I am glad you found it helpful.",
            "Mention not at all, boss!",
            "No problem at all, take it easy!",
            "Thanks for same praise!"
          ],
          correctAnswer: "It was my pleasure, and I am glad you found it helpful.",
          explanationEn: "'It was my pleasure...' shows high professional poise and courtesy.",
          explanationHi: "वरिष्ठ अधिकारी की प्रशंसा का उत्तर 'It was my pleasure...' देकर विनम्रता से दिया जाता है।",
          skillTag: "PROFESSIONAL_ETIQUETTE"
        },
        {
          id: "day02_ex_008",
          type: "word_ordering",
          prompt: "Arrange the words to form a polite email request: [mind] [you] [sending] [Would] [the] [revised] [invoice?]",
          options: [
            "Would you mind sending the revised invoice?",
            "You would mind sending invoice revised?",
            "Sending the invoice revised would you mind?",
            "Would mind you sending revised invoice the?"
          ],
          correctAnswer: "Would you mind sending the revised invoice?",
          explanationEn: "The formula is: Would you mind + V-ing + object?",
          explanationHi: "संरचना: Would you mind + V-ing + object?",
          skillTag: "SENTENCE_BUILDER"
        },
        {
          id: "day02_ex_009",
          type: "multiple_choice",
          prompt: "Which pair demonstrates the contrast between voiceless /θ/ (teeth) and voiced /ð/ (vocal vibration)?",
          options: [
            "Thigh (/θaɪ/) vs Thy (/ðaɪ/)",
            "Tin (/tɪn/) vs Din (/dɪn/)",
            "Sink (/sɪŋk/) vs Think (/θɪŋk/)",
            "Pass (/pɑːs/) vs Path (/pɑːθ/)"
          ],
          correctAnswer: "Thigh (/θaɪ/) vs Thy (/ðaɪ/)",
          explanationEn: "'Thigh' starts with voiceless /θ/, while 'Thy' starts with voiced /ð/.",
          explanationHi: "'Thigh' में अघोष /θ/ है और 'Thy' में सघोष /ð/ है।",
          skillTag: "PHONETICS_MINIMAL_PAIRS"
        },
        {
          id: "day02_ex_010",
          type: "fill_blank",
          prompt: "Fill in the blank: 'We appreciate your ______ while our engineers restore the network connection.'",
          options: ["patience", "patient", "patiently", "patron"],
          correctAnswer: "patience",
          explanationEn: "'Patience' is the required noun following the possessive pronoun 'your'.",
          explanationHi: "'Your' के बाद संज्ञा (noun) 'patience' (धैर्य) का प्रयोग होगा।",
          skillTag: "GRAMMAR_COLLOCATIONS"
        }
      ]
    };
  }

  // Day 03: Expressive Reactions & Emotional Nuances
  const d3 = days.find(d => (d.dayNumber || d.day) === 3);
  if (d3) {
    d3.examples = [
      { id: "d03_ex_001", category: "Exclamatory Syntax", en: "What a spectacular goal that was in the final minute of the match!", hi: "मैच के अंतिम मिनट में वह कितना शानदार गोल था!", grammaticalFocus: "Exclamation with 'What a + Adj + Noun + Subject + Verb!'" },
      { id: "d03_ex_002", category: "Exclamatory Adverbial", en: "How beautifully the soloist performed the classical concerto!", hi: "एकल वादक ने शास्त्रीय संगीत कार्यक्रम कितना सुंदर प्रस्तुत किया!", grammaticalFocus: "Exclamation with 'How + Adverb + Subject + Verb!'" },
      { id: "d03_ex_003", category: "Empathy & Sympathy", en: "I am so terribly sorry to hear about your sudden loss.", hi: "आपकी अचानक हुई इस क्षति के बारे में सुनकर मुझे बेहद दुःख हुआ।", grammaticalFocus: "Expressing heartfelt condolence" },
      { id: "d03_ex_004", category: "Enthusiastic Praise", en: "That is absolutely fantastic news! You worked tremendously hard for this.", hi: "यह बिल्कुल शानदार खबर है! आपने इसके लिए बहुत कड़ी मेहनत की थी।", grammaticalFocus: "Congratulatory formula with intensifying adverbs" },
      { id: "d03_ex_005", category: "Relief Expression", en: "What a relief it is to know that everyone arrived safely!", hi: "यह जानकर कितनी राहत मिली कि सभी सुरक्षित पहुँच गए!", grammaticalFocus: "'What a relief...' exclamatory frame" },
      { id: "d03_ex_006", category: "Surprise & Disbelief", en: "I can hardly believe we managed to complete the entire audit ahead of time.", hi: "मुझे मुश्किल से विश्वास हो रहा है कि हम समय से पहले पूरा ऑडिट पूरा करने में सफल रहे।", grammaticalFocus: "'Can hardly believe...' expressing pleasant surprise" },
      { id: "d03_ex_007", category: "Encouragement", en: "Do not lose heart; you made remarkable progress today.", hi: "हिम्मत मत हारिए; आज आपने उल्लेखनीय प्रगति की है।", grammaticalFocus: "Idiom 'lose heart' in comforting context" },
      { id: "d03_ex_008", category: "Frustration Softening", en: "It is rather unfortunate that the shipment was delayed by the storm.", hi: "यह अत्यंत दुर्भाग्यपूर्ण है कि तूफान के कारण खेप में देरी हुई।", grammaticalFocus: "Diplomatic frustration with 'rather unfortunate'" },
      { id: "d03_ex_009", category: "Gratitude & Joy", en: "I am completely thrilled with the feedback our client provided!", hi: "हमारे मुवक्किल द्वारा दी गई प्रतिक्रिया से मैं बेहद रोमांचित हूँ!", grammaticalFocus: "Adjective 'thrilled with' expressing professional delight" },
      { id: "d03_ex_010", category: "Cautionary Reaction", en: "Be careful! The steps are extremely slippery after the rain.", hi: "सावधान रहें! बारिश के बाद सीढ़ियाँ बहुत फिसलन भरी हैं।", grammaticalFocus: "Immediate alert exclamation" }
    ];

    d3.practice = {
      exercises: [
        {
          id: "day03_ex_001",
          type: "multiple_choice",
          prompt: "Which exclamatory sentence follows correct standard English syntax?",
          options: [
            "What a magnificent speech she delivered!",
            "How a magnificent speech she delivered!",
            "What magnificent speech she delivered a!",
            "How magnificent she delivered speech a!"
          ],
          correctAnswer: "What a magnificent speech she delivered!",
          explanationEn: "Standard rule: 'What + a/an + adjective + singular countable noun + subject + verb!'",
          explanationHi: "नियम: What + a/an + विशेषण + एकवचन संज्ञा + कर्ता + क्रिया!",
          skillTag: "EXCLAMATION_SYNTAX"
        },
        {
          id: "day03_ex_002",
          type: "multiple_choice",
          prompt: "When a colleague announces they passed a difficult certification exam, which reaction is most natural?",
          options: [
            "Congratulations! I am thrilled for you; that is fantastic news!",
            "Oh, why did you do that?",
            "What a pity, try next year.",
            "Thanks for the same news."
          ],
          correctAnswer: "Congratulations! I am thrilled for you; that is fantastic news!",
          explanationEn: "'Congratulations! I am thrilled for you...' expresses natural, encouraging enthusiasm.",
          explanationHi: "सफलता पर बधाई देने के लिए 'Congratulations! I am thrilled for you...' सबसे उपयुक्त है।",
          skillTag: "EMOTIONAL_REACTIONS"
        },
        {
          id: "day03_ex_003",
          type: "error_correction",
          prompt: "Correct the syntactic error: 'How a wonderful idea you have!'",
          targetText: "How a wonderful idea you have!",
          correctAnswer: "What a wonderful idea you have!",
          options: [
            "What a wonderful idea you have!",
            "How wonderful an idea you having!",
            "What idea wonderful you have!",
            "How a idea wonderful you got!"
          ],
          explanationEn: "Use 'What a' before an adjective + noun phrase ('wonderful idea'). 'How' is followed directly by an adjective/adverb without 'a'.",
          explanationHi: "संज्ञा वाक्यांश (wonderful idea) से पहले 'What a' आता है, 'How a' नहीं।",
          skillTag: "SYNTAX_CORRECTION"
        },
        {
          id: "day03_ex_004",
          type: "translation",
          prompt: "Translate: 'यह जानकर कितनी राहत मिली कि सब कुछ ठीक है!'",
          options: [
            "What a relief to know that everything is fine!",
            "How much relief coming that all is okay!",
            "What relief it having to know fine all!",
            "Relief is so much knowing everything good!"
          ],
          correctAnswer: "What a relief to know that everything is fine!",
          explanationEn: "'What a relief to know that...' is the natural idiom.",
          explanationHi: "'What a relief to know that...' स्वाभाविक अंग्रेजी मुहावरा है।",
          skillTag: "TRANSLATION_PRACTICE"
        },
        {
          id: "day03_ex_005",
          type: "fill_blank",
          prompt: "Complete the exclamation: '______ skillfully the surgeon operated during the emergency!'",
          options: ["How", "What", "What a", "Which"],
          correctAnswer: "How",
          explanationEn: "Use 'How' when modifying an adverb directly ('skillfully') without a noun.",
          explanationHi: "क्रियाविशेषण (skillfully) से पहले 'How' का प्रयोग होता है।",
          skillTag: "EXCLAMATION_STRUCTURE"
        }
      ]
    };
  }

  // Day 04: Conversational Phrases & Daily Workplace Routines
  const d4 = days.find(d => (d.dayNumber || d.day) === 4);
  if (d4) {
    d4.examples = [
      { id: "d04_ex_001", category: "Workplace Routine", en: "Please ensure all laboratory equipment is sterilized after each session.", hi: "कृपया सुनिश्चित करें कि प्रत्येक सत्र के बाद सभी प्रयोगशाला उपकरणों को जीवाणुरहित किया जाए।", grammaticalFocus: "Imperative directive with 'Please ensure...'" },
      { id: "d04_ex_002", category: "Office Reception", en: "Kindly take a seat in the lobby; Mr. Sharma will be with you shortly.", hi: "कृपया लॉबी में बैठिए; श्री शर्मा शीघ्र ही आपके पास उपस्थित होंगे।", grammaticalFocus: "Courteous visitor guidance" },
      { id: "d04_ex_003", category: "Email Communication", en: "I have attached the revised project timeline for your convenience.", hi: "मैंने आपकी सुविधा के लिए संशोधित परियोजना समय-सीमा संलग्न कर दी है।", grammaticalFocus: "Standard attachment formula" },
      { id: "d04_ex_004", category: "L1 Error Reversal", en: "Please reply with your confirmation at your earliest convenience. (NOT: 'Revert back')", hi: "कृपया अपनी सुविधानुसार शीघ्र पुष्टि के साथ उत्तर दें। ('Revert back' अप्राकृतिक है)", grammaticalFocus: "Replacing 'revert back' with 'reply / respond'" },
      { id: "d04_ex_005", category: "Scheduling Clarification", en: "Let us advance the meeting to 10:00 AM if everyone is available. (NOT: 'Prepone')", hi: "यदि सभी उपलब्ध हैं तो आइए बैठक को सुबह 10:00 बजे पहले कर लें। ('Prepone' के स्थान पर 'advance')", grammaticalFocus: "Standard international English for rescheduling earlier" },
      { id: "d04_ex_006", category: "Customer Support", en: "How may I direct your call this morning?", hi: "आज सुबह मैं आपकी कॉल को किस विभाग में स्थानांतरित कर सकता हूँ?", grammaticalFocus: "Professional switchboard greeting" },
      { id: "d04_ex_007", category: "Task Delegation", en: "Could you take ownership of updating the client dossier today?", hi: "क्या आप आज क्लाइंट की फ़ाइल को अपडेट करने का दायित्व संभाल सकते हैं?", grammaticalFocus: "Idiom 'take ownership of'" },
      { id: "d04_ex_008", category: "Meeting Wrap-up", en: "Let us summarize the core action items before we conclude.", hi: "बैठक समाप्त करने से पहले आइए मुख्य कार्य-बिंदुओं का संक्षेप में पुनरावलोकन करें।", grammaticalFocus: "Professional meeting facilitation" }
    ];

    d4.practice = {
      exercises: [
        {
          id: "day04_ex_001",
          type: "error_correction",
          prompt: "Correct this Indian English redundancy: 'Kindly please revert back with your feedback.'",
          targetText: "Kindly please revert back with your feedback.",
          correctAnswer: "Please reply with your feedback.",
          acceptableAlternatives: ["Please respond with your feedback.", "Kindly provide your feedback."],
          options: [
            "Please reply with your feedback.",
            "Kindly please revert back feedback.",
            "Revert back with your kind reply.",
            "Please revert your feedback back."
          ],
          explanationEn: "'Revert' means 'to return to a previous state' and already contains 'back'. Use 'reply' or 'respond'.",
          explanationHi: "'Revert back' गलत है क्योंकि 'revert' में पहले से 'back' का भाव होता है। सही शब्द 'reply' या 'respond' है।",
          skillTag: "L1_ERROR_REVERSAL"
        },
        {
          id: "day04_ex_002",
          type: "multiple_choice",
          prompt: "In international standard English, how do you express rescheduling a meeting to an earlier time?",
          options: [
            "We would like to advance / bring forward the meeting.",
            "We would like to prepone the meeting.",
            "We want to early the meeting.",
            "We are preponing the scheduled time."
          ],
          correctAnswer: "We would like to advance / bring forward the meeting.",
          explanationEn: "'Prepone' is an Indian English coin; standard international English uses 'advance', 'reschedule to an earlier time', or 'bring forward'.",
          explanationHi: "अंतरराष्ट्रीय अंग्रेजी में 'prepone' के स्थान पर 'advance' या 'bring forward' का प्रयोग किया जाता है।",
          skillTag: "VOCABULARY_PRECISION"
        },
        {
          id: "day04_ex_003",
          type: "multiple_choice",
          prompt: "Select the most professional email phrasing to ask a colleague to take necessary action:",
          options: [
            "Could you please review the attached document and take the appropriate next steps?",
            "Please do the needful as discussed.",
            "Kindly do the needful at once.",
            "Do needful fast."
          ],
          correctAnswer: "Could you please review the attached document and take the appropriate next steps?",
          explanationEn: "'Do the needful' is an obsolete colonial cliché. Modern workplace English specifies the concrete next action.",
          explanationHi: "'Do the needful' पुरानी औपनिवेशिक भाषा है। आधुनिक कार्यस्थल में विशिष्ट कार्य का उल्लेख करें।",
          skillTag: "BUSINESS_ETIQUETTE"
        },
        {
          id: "day04_ex_004",
          type: "translation",
          prompt: "Translate: 'कृपया लॉबी में बैठिए, वे शीघ्र ही आपके पास उपस्थित होंगे।'",
          options: [
            "Please take a seat in the lobby; they will be with you shortly.",
            "Sit in lobby fast, they are coming just now.",
            "Please sit lobby, they come quickly.",
            "Take your seat in lobby, they will reach you soon."
          ],
          correctAnswer: "Please take a seat in the lobby; they will be with you shortly.",
          explanationEn: "'Take a seat in the lobby; they will be with you shortly' is the standard polite receptionist phrase.",
          explanationHi: "रिसेप्शन पर विनम्र संवाद का मानक रूप 'Please take a seat... they will be with you shortly' है।",
          skillTag: "TRANSLATION_PRACTICE"
        },
        {
          id: "day04_ex_005",
          type: "fill_blank",
          prompt: "Complete the sentence: 'Please ______ the attached spreadsheet before signing the approval.'",
          options: ["verify", "verification", "verifying", "verifiably"],
          correctAnswer: "verify",
          explanationEn: "The imperative verb following 'Please' requires the base form (V1) 'verify'.",
          explanationHi: "'Please' के बाद मुख्य क्रिया का मूल रूप (V1) 'verify' आएगा।",
          skillTag: "GRAMMAR_IMPERATIVES"
        }
      ]
    };
  }

  // Day 05: Present State of Being: Copula Verbs (Am, Is, Are)
  const d5 = days.find(d => (d.dayNumber || d.day) === 5);
  if (d5) {
    d5.examples = [
      { id: "d05_ex_001", category: "Copula Affirmative", en: "Dr. Ananya is the chief cardiac surgeon at the medical institute.", hi: "डॉ. अनन्या मेडिकल संस्थान में मुख्य हृदय रोग सर्जन हैं।", grammaticalFocus: "Singular 3rd person copula 'is' + predicate noun" },
      { id: "d05_ex_002", category: "Copula Plural", en: "The research analysts are exceptionally diligent in their data verification.", hi: "शोध विश्लेषक अपने डेटा सत्यापन में असाधारण रूप से लगनशील हैं।", grammaticalFocus: "Plural subject + 'are' + predicate adjective" },
      { id: "d05_ex_003", category: "Copula First Person", en: "I am confident that our proposal satisfies all municipal guidelines.", hi: "मुझे पूरा विश्वास है कि हमारा प्रस्ताव सभी नगरपालिका दिशानिर्देशों को पूरा करता है।", grammaticalFocus: "'I am confident that...'" },
      { id: "d05_ex_004", category: "Copula Negative", en: "This transaction is not subject to additional international surcharges.", hi: "यह लेनदेन अतिरिक्त अंतरराष्ट्रीय अधिभार के अधीन नहीं है।", grammaticalFocus: "Negative state with 'is not'" },
      { id: "d05_ex_005", category: "Copula Interrogative", en: "Are the senior architects available for an urgent consultation?", hi: "क्या वरिष्ठ वास्तुकार तत्काल परामर्श के लिए उपलब्ध हैं?", grammaticalFocus: "Yes/No subject-verb inversion 'Are + Subject + Adjective?'" },
      { id: "d05_ex_006", category: "Demonstrative Copula", en: "These blueprints are the final approved architectural specifications.", hi: "ये ब्लूप्रिंट अंतिम स्वीकृत वास्तुशिल्प विनिर्देश हैं।", grammaticalFocus: "Demonstrative pronoun 'these' + 'are'" },
      { id: "d05_ex_007", category: "Location State", en: "The regional headquarters are situated adjacent to the botanical gardens.", hi: "क्षेत्रीय मुख्यालय वनस्पति उद्यान के समीप स्थित है।", grammaticalFocus: "Location predicate with 'are situated'" },
      { id: "d05_ex_008", category: "L1 Trap Contrast", en: "She is twenty-four years old. (NOT: 'She is twenty-four years')", hi: "उसकी उम्र चौबीस साल है। ('years old' आवश्यक है)", grammaticalFocus: "Expressing age correctly in English" }
    ];

    d5.practice = {
      exercises: [
        {
          id: "day05_ex_001",
          type: "multiple_choice",
          prompt: "Select the grammatically accurate sentence describing age in English:",
          options: [
            "My younger brother is twenty-two years old.",
            "My younger brother is of twenty-two years.",
            "My younger brother is having twenty-two years.",
            "My younger brother age is twenty-two years."
          ],
          correctAnswer: "My younger brother is twenty-two years old.",
          explanationEn: "In English, age is expressed with '[Subject] + is/am/are + [Number] + years old' (or just '[Number]'). Avoid literal transfers like 'is of 22 years' or 'is having 22 years'.",
          explanationHi: "अंग्रेजी में उम्र बताने के लिए 'is ... years old' का प्रयोग होता है। 'is having' या 'is of' गलत अनुवाद है।",
          skillTag: "L1_TRAP_AGE"
        },
        {
          id: "day05_ex_002",
          type: "multiple_choice",
          prompt: "Choose the correct copular verb: 'Neither of the proposals ______ compliant with the new security regulations.'",
          options: ["is", "are", "were", "being"],
          correctAnswer: "is",
          explanationEn: "'Neither of the [plural noun]' takes a singular verb ('is') in formal standard English.",
          explanationHi: "औपचारिक अंग्रेजी में 'Neither of...' के साथ एकवचन क्रिया 'is' का प्रयोग होता है।",
          skillTag: "SUBJECT_VERB_AGREEMENT"
        },
        {
          id: "day05_ex_003",
          type: "fill_blank",
          prompt: "Fill in the blank: 'The senior engineers ______ currently in the briefing room.'",
          options: ["are", "is", "am", "be"],
          correctAnswer: "are",
          explanationEn: "Plural subject 'The senior engineers' requires the plural copula 'are'.",
          explanationHi: "बहुवचन कर्ता (The senior engineers) के साथ 'are' का प्रयोग होता है।",
          skillTag: "COPULA_AGREEMENT"
        },
        {
          id: "day05_ex_004",
          type: "translation",
          prompt: "Translate: 'क्या आप इस परियोजना के परिणामों को लेकर आश्वस्त हैं?'",
          options: [
            "Are you confident about the outcomes of this project?",
            "You are confident for this project outcomes?",
            "Do you confident with the project results?",
            "Is you confident about project results?"
          ],
          correctAnswer: "Are you confident about the outcomes of this project?",
          explanationEn: "Question inversion: 'Are + you + confident about + noun phrase?'",
          explanationHi: "प्रश्नवाचक संरचना: Are + you + confident about + ...?",
          skillTag: "TRANSLATION_PRACTICE"
        },
        {
          id: "day05_ex_005",
          type: "word_ordering",
          prompt: "Arrange the words to form a correct negative sentence: [the] [is] [This] [not] [decision] [board.] [final] [of]",
          options: [
            "This is not the final decision of the board.",
            "This not is the final decision board of.",
            "Not this is the final decision of board.",
            "The final decision of board is not this."
          ],
          correctAnswer: "This is not the final decision of the board.",
          explanationEn: "Structure: Subject ('This') + Copula ('is') + Negative ('not') + Predicate Noun Phrase.",
          explanationHi: "संरचना: Subject (This) + is + not + Predicate...",
          skillTag: "SENTENCE_BUILDER"
        }
      ]
    };
  }

  // Days 6-10 Practice Cleanup (replace loop padded items with authentic unique exercises)
  for (let dNum = 6; dNum <= 10; dNum++) {
    const dayObj = days.find(d => (d.dayNumber || d.day) === dNum);
    if (dayObj && dayObj.practice) {
      let currentExs = Array.isArray(dayObj.practice) ? dayObj.practice : (dayObj.practice.exercises || []);
      // De-duplicate current exercises based on prompt
      const seen = new Set();
      const cleanExs = [];
      for (const ex of currentExs) {
        const promptKey = (ex.prompt || ex.question || '').trim().toLowerCase();
        if (promptKey && !seen.has(promptKey)) {
          seen.add(promptKey);
          cleanExs.push(ex);
        }
      }
      if (Array.isArray(dayObj.practice)) {
        dayObj.practice = cleanExs;
      } else {
        dayObj.practice.exercises = cleanExs;
      }
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Stage 1 data fixed successfully.');
}

// Fix Stage 2 (Days 11-20)
function fixStage2() {
  const filePath = path.resolve('DAYS_11_20_CONTENT.json');
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const days = Array.isArray(data) ? data : (data.days || data.lessons || []);

  console.log('Fixing Stage 2 data...');

  days.forEach(d => {
    // 1. De-duplicate Examples
    let rawEx = d.examples || d.learn?.examples || [];
    if (rawEx.bilingualExemplars) rawEx = rawEx.bilingualExemplars;
    if (Array.isArray(rawEx)) {
      const seenEx = new Set();
      const uniqueEx = [];
      rawEx.forEach(ex => {
        const enText = (ex.en || ex.english || ex.textEn || ex.sentenceEn || '').trim().toLowerCase();
        if (enText && !seenEx.has(enText)) {
          seenEx.add(enText);
          uniqueEx.push({
            id: ex.id || `ex_${d.dayNumber}_${uniqueEx.length + 1}`,
            en: ex.en || ex.english || ex.textEn || ex.sentenceEn || '',
            hi: ex.hi || ex.hindi || ex.textHi || ex.sentenceHi || '',
            category: ex.category || 'Core Grammar',
            grammaticalFocus: ex.grammaticalFocus || ex.notes || 'Contextual Usage'
          });
        }
      });
      d.examples = uniqueEx;
    }

    // 2. De-duplicate Practice
    let rawPr = [];
    if (Array.isArray(d.practice)) rawPr = d.practice;
    else if (d.practice?.exercises) rawPr = d.practice.exercises;

    const seenPr = new Set();
    const uniquePr = [];
    rawPr.forEach(ex => {
      const pText = (ex.prompt || ex.question || '').trim().toLowerCase();
      if (pText && !seenPr.has(pText)) {
        seenPr.add(pText);
        uniquePr.push(ex);
      }
    });

    if (Array.isArray(d.practice)) {
      d.practice = uniquePr;
    } else if (d.practice && typeof d.practice === 'object') {
      d.practice.exercises = uniquePr;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Stage 2 data fixed successfully.');
}

// Fix Stage 3 (Days 21-30)
function fixStage3() {
  const filePath = path.resolve('DAYS_21_30_CONTENT.json');
  if (!fs.existsSync(filePath)) return;
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const days = Array.isArray(data) ? data : (data.days || data.lessons || []);

  console.log('Fixing Stage 3 data...');

  days.forEach(d => {
    // Ensure examples are cleanly de-duplicated and mapped
    let rawEx = d.examples || d.learn?.examples || [];
    if (rawEx.bilingualExemplars) rawEx = rawEx.bilingualExemplars;
    if (Array.isArray(rawEx)) {
      const seenEx = new Set();
      const uniqueEx = [];
      rawEx.forEach(ex => {
        const enText = (ex.en || ex.english || ex.textEn || ex.sentenceEn || '').trim().toLowerCase();
        if (enText && !seenEx.has(enText)) {
          seenEx.add(enText);
          uniqueEx.push({
            id: ex.id || `ex_${d.dayNumber}_${uniqueEx.length + 1}`,
            en: ex.en || ex.english || ex.textEn || ex.sentenceEn || '',
            hi: ex.hi || ex.hindi || ex.textHi || ex.sentenceHi || '',
            category: ex.category || 'Core Grammar',
            grammaticalFocus: ex.grammaticalFocus || ex.notes || 'Contextual Usage'
          });
        }
      });
      d.examples = uniqueEx;
    }

    // Ensure practice exercises are unique
    let rawPr = [];
    if (Array.isArray(d.practice)) rawPr = d.practice;
    else if (d.practice?.exercises) rawPr = d.practice.exercises;

    const seenPr = new Set();
    const uniquePr = [];
    rawPr.forEach(ex => {
      const pText = (ex.prompt || ex.question || '').trim().toLowerCase();
      if (pText && !seenPr.has(pText)) {
        seenPr.add(pText);
        uniquePr.push(ex);
      }
    });

    if (Array.isArray(d.practice)) {
      d.practice = uniquePr;
    } else if (d.practice && typeof d.practice === 'object') {
      d.practice.exercises = uniquePr;
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  console.log('Stage 3 data fixed successfully.');
}

// Run all fixes
fixStage1();
fixStage2();
fixStage3();
