import fs from 'fs';
import path from 'path';

const contentPath = path.resolve(process.cwd(), 'DAYS_01_10_CONTENT.json');
const raw = fs.readFileSync(contentPath, 'utf8');
const data = JSON.parse(raw);

// Common A1-A2 vocabulary base (sample list of standard words)
const A1_A2_COMMON = new Set([
  "a", "about", "above", "across", "after", "again", "against", "all", "almost", "alone", "along", "already", "also", "always",
  "am", "an", "and", "another", "any", "anyone", "anything", "are", "aren't", "around", "as", "ask", "at", "away", "back", "bad",
  "bag", "be", "beautiful", "because", "become", "bed", "before", "begin", "behind", "believe", "best", "better", "between",
  "big", "bird", "black", "blue", "board", "boat", "body", "book", "both", "box", "boy", "bread", "break", "breakfast", "bring",
  "brother", "brown", "bus", "busy", "but", "buy", "by", "call", "can", "can't", "car", "care", "carry", "cat", "catch", "chair",
  "change", "cheap", "check", "child", "children", "city", "clean", "clear", "clock", "close", "clothes", "cold", "color", "come",
  "company", "cook", "cool", "cost", "country", "course", "cow", "cry", "cup", "cut", "dad", "dance", "dark", "daughter", "day",
  "dear", "desk", "did", "didn't", "die", "different", "difficult", "dinner", "do", "doctor", "does", "doesn't", "dog", "dollar",
  "don't", "door", "down", "draw", "dress", "drink", "drive", "driver", "dry", "each", "early", "earth", "easy", "eat", "egg",
  "eight", "eighteen", "eighty", "either", "eleven", "else", "end", "enjoy", "enough", "even", "evening", "ever", "every",
  "everyone", "everything", "everywhere", "example", "excuse", "expensive", "eye", "face", "fact", "fall", "family", "famous",
  "far", "farm", "fast", "father", "favorite", "feel", "few", "fifteen", "fifty", "fill", "find", "fine", "finish", "fire",
  "first", "fish", "five", "floor", "fly", "follow", "food", "foot", "for", "forget", "form", "forty", "four", "fourteen",
  "free", "fresh", "friend", "from", "front", "full", "fun", "game", "garden", "gas", "get", "girl", "give", "glad", "glass",
  "go", "good", "goodbye", "got", "great", "green", "ground", "group", "grow", "guess", "had", "hair", "half", "hand", "happen",
  "happy", "hard", "has", "have", "haven't", "he", "head", "hear", "heart", "heavy", "hello", "help", "her", "here", "hers",
  "high", "him", "his", "history", "hold", "holiday", "home", "hope", "horse", "hospital", "hot", "hotel", "hour", "house",
  "how", "hundred", "hungry", "husband", "i", "ice", "idea", "if", "important", "in", "inside", "instead", "into", "is", "isn't",
  "it", "its", "job", "join", "just", "keep", "key", "kind", "kitchen", "know", "land", "language", "large", "last", "late",
  "later", "laugh", "learn", "leave", "left", "leg", "lesson", "let", "letter", "lie", "life", "light", "like", "line", "listen",
  "little", "live", "long", "look", "lose", "lot", "lots", "love", "low", "lunch", "main", "make", "man", "many", "map", "market",
  "matter", "may", "maybe", "me", "mean", "meat", "meet", "meeting", "member", "men", "middle", "milk", "million", "minute",
  "miss", "mistake", "moment", "money", "month", "more", "morning", "most", "mother", "move", "much", "music", "must", "my",
  "myself", "name", "near", "nearly", "need", "never", "new", "news", "next", "nice", "night", "nine", "nineteen", "ninety",
  "no", "nobody", "none", "noon", "nor", "north", "not", "nothing", "notice", "now", "number", "nurse", "o'clock", "of", "off",
  "office", "officer", "often", "oh", "oil", "ok", "okay", "old", "on", "once", "one", "only", "open", "or", "order", "other",
  "our", "ours", "out", "outside", "over", "own", "page", "pair", "paper", "parent", "park", "part", "party", "pass", "past",
  "pay", "pen", "pencil", "people", "per", "person", "phone", "photo", "pick", "picture", "piece", "place", "plan", "plane",
  "plant", "play", "player", "please", "point", "police", "poor", "possible", "post", "practice", "prepare", "present", "pretty",
  "price", "problem", "program", "pull", "push", "put", "question", "quick", "quickly", "quiet", "quite", "radio", "rain",
  "read", "ready", "real", "really", "reason", "receive", "red", "remember", "repeat", "reply", "report", "rest", "restaurant",
  "return", "rice", "rich", "ride", "right", "ring", "river", "road", "room", "round", "run", "sad", "safe", "same", "say",
  "school", "sea", "second", "see", "seem", "send", "sentence", "set", "seven", "seventeen", "seventy", "several", "shall",
  "she", "ship", "shirt", "shoe", "shop", "short", "should", "show", "shut", "sick", "side", "sign", "simple", "since", "sing",
  "sister", "sit", "six", "sixteen", "sixty", "size", "sky", "sleep", "slow", "slowly", "small", "smile", "smoke", "so", "some",
  "someone", "something", "sometimes", "son", "song", "soon", "sorry", "sound", "south", "space", "speak", "special", "spell",
  "spend", "sport", "stand", "star", "start", "station", "stay", "step", "still", "stop", "store", "story", "street", "strong",
  "student", "study", "such", "sugar", "summer", "sun", "sunday", "supper", "sure", "sweet", "table", "take", "talk", "tall",
  "tea", "teach", "teacher", "team", "tell", "ten", "test", "than", "thank", "thanks", "that", "the", "their", "theirs", "them",
  "then", "there", "these", "they", "thing", "think", "third", "thirteen", "thirty", "this", "those", "though", "thought",
  "thousand", "three", "through", "ticket", "time", "tired", "to", "today", "together", "tomorrow", "tonight", "too", "took",
  "top", "town", "train", "travel", "tree", "trip", "trouble", "true", "try", "turn", "twelve", "twenty", "two", "under",
  "understand", "university", "until", "up", "upon", "us", "use", "usual", "usually", "very", "village", "visit", "voice",
  "wait", "walk", "wall", "want", "warm", "was", "wash", "watch", "water", "way", "we", "wear", "weather", "week", "welcome",
  "well", "went", "were", "west", "what", "when", "where", "which", "while", "white", "who", "whole", "whom", "whose", "why",
  "wife", "will", "win", "wind", "window", "winter", "wish", "with", "without", "woman", "women", "wonder", "word", "work",
  "worker", "world", "worry", "would", "write", "wrong", "yard", "year", "yellow", "yes", "yesterday", "yet", "you", "young",
  "your", "yours"
]);

// Let's analyze all 100 dialogues
const results = [];

data.days.forEach((day, dIdx) => {
  const dayNum = dIdx + 1;
  const dialogues = day.use?.dialogues || [];
  
  dialogues.forEach((diag, idx) => {
    const textAll = diag.turns.map(t => t.textEn).join(' ');
    const words = textAll.match(/[a-zA-Z0-9'-]+/g) || [];
    const lowerWords = words.map(w => w.toLowerCase().replace(/^[^\w]+|[^\w]+$/g, ''));
    
    // Find non-A1/A2 words
    const advancedWords = [];
    const specialistWords = [];
    
    lowerWords.forEach(w => {
      if (w.length > 2 && !A1_A2_COMMON.has(w)) {
        // check if plural or common inflection
        const singular = w.endsWith('s') ? w.slice(0, -1) : w;
        const baseEd = w.endsWith('ed') ? w.slice(0, -2) : w;
        const baseIng = w.endsWith('ing') ? w.slice(0, -3) : w;
        if (!A1_A2_COMMON.has(singular) && !A1_A2_COMMON.has(baseEd) && !A1_A2_COMMON.has(baseIng)) {
          advancedWords.push(w);
        }
      }
    });

    const uniqueAdvanced = Array.from(new Set(advancedWords));
    const wordCount = words.length;
    const avgTurnLen = (wordCount / diag.turns.length).toFixed(1);
    
    results.push({
      dayNum,
      diagIndex: idx + 1,
      id: diag.id,
      title: diag.title,
      titleHi: diag.titleHi,
      context: diag.context,
      situation: diag.situation,
      turnsCount: diag.turns.length,
      wordCount,
      avgTurnLen,
      uniqueAdvancedCount: uniqueAdvanced.length,
      advancedRatio: (uniqueAdvanced.length / (new Set(lowerWords).size)).toFixed(2),
      sampleAdvanced: uniqueAdvanced.slice(0, 15),
      allTurns: diag.turns
    });
  });
});

console.log(`Audited ${results.length} dialogues.`);

// Summary stats
let highLexCount = 0;
let aboveLevelCount = 0;
let a1AppropriateCount = 0;

results.forEach(r => {
  if (r.uniqueAdvancedCount > 40 || parseFloat(r.avgTurnLen) > 16) {
    aboveLevelCount++;
  } else if (r.uniqueAdvancedCount > 20 || parseFloat(r.avgTurnLen) > 12) {
    highLexCount++;
  } else {
    a1AppropriateCount++;
  }
});

console.log({ a1AppropriateCount, highLexCount, aboveLevelCount });
