import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type, Modality } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initialization helper for Gemini AI client
function getAIClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY environment variable is missing.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// 1. Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 2. AI Conversation Partner Chat & Instant Feedback Endpoint
app.post('/api/gemini/chat', async (req, res) => {
  try {
    const { message, roleplayContext, history, userCEFR } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message parameter is required.' });
    }

    const ai = getAIClient();

    const systemInstruction = `
You are an expert English language coach and interactive conversational roleplay partner embedded in a mobile learning app.
Your role in this scenario: ${roleplayContext?.partnerRole || 'Friendly English Conversation Partner'}
Scenario details: ${roleplayContext?.title || 'General Chat'} - ${roleplayContext?.situation || 'Casual Conversation'}
User's current estimated CEFR level: ${userCEFR || 'B1'}
Target Vocabulary for this roleplay: ${roleplayContext?.targetVocabulary?.join(', ') || 'General fluency words'}

Task:
1. Respond to the user naturally IN CHARACTER as ${roleplayContext?.partnerName || 'Alex'} (${roleplayContext?.partnerRole || 'Partner'}), keeping the conversation engaging, authentic, and appropriately challenged for CEFR level ${userCEFR || 'B1'}.
2. Provide constructive, encouraging feedback on the user's input:
   - Identify grammar mistakes if any, and show the exact correction.
   - Offer a "Native Upgrade" or "Better Phrasing" (how a native English speaker would express the exact same idea more naturally or eloquently).
   - Suggest 2-3 advanced vocabulary words or idioms relevant to the topic.
   - Rate the fluency/accuracy of their message on a scale of 0 to 100.
   - Provide a CEFR rating for their input message.
   - Include a brief word of encouragement or praise.
   - Offer a brief pronunciation or phonetic tip if applicable.

You MUST respond strictly in valid JSON matching the requested JSON Schema.
`;

    const promptMessages = [];
    if (Array.isArray(history) && history.length > 0) {
      history.forEach((msg: { sender: string; text: string }) => {
        promptMessages.push(`${msg.sender === 'user' ? 'User' : 'Partner'}: ${msg.text}`);
      });
    }
    promptMessages.push(`User: ${message}`);

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: promptMessages.join('\n'),
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            replyText: {
              type: Type.STRING,
              description: 'The natural conversational reply from the AI partner in character.',
            },
            feedback: {
              type: Type.OBJECT,
              properties: {
                grammarCorrection: {
                  type: Type.STRING,
                  description: 'Corrected version of the user input if there were grammatical errors. Empty string if perfect.',
                },
                betterPhrasing: {
                  type: Type.STRING,
                  description: 'A more natural, polished native English phrasing of the user message.',
                },
                vocabularySuggestions: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'Relevant high-value vocabulary words or idioms to try using next.',
                },
                fluencyScore: {
                  type: Type.INTEGER,
                  description: 'Score from 0 to 100 evaluating grammar, vocabulary richness, and natural flow.',
                },
                cefrRating: {
                  type: Type.STRING,
                  description: 'CEFR level rating for the user message (A1, A2, B1, B2, C1, or C2).',
                },
                praise: {
                  type: Type.STRING,
                  description: 'Short positive feedback highlighting what the user did well.',
                },
                pronunciationTip: {
                  type: Type.STRING,
                  description: 'Quick tip on stress, intonation, or phonetic clarity for key words.',
                },
              },
              required: ['replyText', 'fluencyScore'],
            },
          },
          required: ['replyText', 'feedback'],
        },
      },
    });

    const resultText = response.text || '{}';
    const parsed = JSON.parse(resultText);

    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/gemini/chat:', error);
    res.status(500).json({ error: error.message || 'Failed to process conversation request.' });
  }
});

// 3. AI Text-To-Speech Endpoint
app.post('/api/gemini/tts', async (req, res) => {
  try {
    const { text, voiceName = 'Zephyr' } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text parameter is required.' });
    }

    const ai = getAIClient();

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-tts-preview',
      contents: [{ parts: [{ text: `Say clearly in a natural English tone: ${text}` }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      return res.status(500).json({ error: 'No audio generated by TTS model.' });
    }

    res.json({ audioBase64: base64Audio, mimeType: 'audio/pcm;rate=24000' });
  } catch (error: any) {
    console.error('Error in /api/gemini/tts:', error);
    res.status(500).json({ error: error.message || 'Failed to generate speech.' });
  }
});

// 4. Custom AI Vocabulary Deck Generator Endpoint
app.post('/api/gemini/vocab-generator', async (req, res) => {
  try {
    const { topic, cefr = 'B2', wordCount = 5 } = req.body;

    if (!topic) {
      return res.status(400).json({ error: 'Topic parameter is required.' });
    }

    const ai = getAIClient();

    const prompt = `Generate a set of ${wordCount} high-yield English vocabulary words or idioms focused on the topic: "${topic}". Target CEFR level: ${cefr}.
Provide accurate IPA phonetics, clear definitions, natural example sentences, collocations, memory hooks, and translations.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            deckTitle: { type: Type.STRING },
            deckDescription: { type: Type.STRING },
            category: { type: Type.STRING },
            words: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  word: { type: Type.STRING },
                  phonetic: { type: Type.STRING },
                  cefr: { type: Type.STRING },
                  definition: { type: Type.STRING },
                  partOfSpeech: { type: Type.STRING },
                  exampleSentence: { type: Type.STRING },
                  translation: { type: Type.STRING },
                  collocations: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  memoryHook: { type: Type.STRING },
                },
                required: ['word', 'phonetic', 'definition', 'partOfSpeech', 'exampleSentence', 'collocations'],
              },
            },
          },
          required: ['deckTitle', 'deckDescription', 'words'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/gemini/vocab-generator:', error);
    res.status(500).json({ error: error.message || 'Failed to generate vocabulary deck.' });
  }
});

// 5. AI Pronunciation & Speaking Assessment Endpoint
app.post('/api/gemini/pronunciation-evaluate', async (req, res) => {
  try {
    const { targetText, userSpokenText } = req.body;

    if (!targetText || !userSpokenText) {
      return res.status(400).json({ error: 'targetText and userSpokenText are required.' });
    }

    const ai = getAIClient();

    const prompt = `
Target phrase to speak: "${targetText}"
User transcribed speech: "${userSpokenText}"

Analyze how accurately the user pronounced and delivered the target sentence.
Provide:
1. An accuracy score from 0 to 100.
2. Phonetic breakdown / stress tips for any misspoken or omitted words.
3. Intonation and rhythm coaching.
4. An encouraging summary sentence.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER },
            misspokenWords: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            phoneticAdvice: { type: Type.STRING },
            intonationTip: { type: Type.STRING },
            feedbackSummary: { type: Type.STRING },
          },
          required: ['score', 'phoneticAdvice', 'feedbackSummary'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json(parsed);
  } catch (error: any) {
    console.error('Error in /api/gemini/pronunciation-evaluate:', error);
    res.status(500).json({ error: error.message || 'Failed to evaluate pronunciation.' });
  }
});

// 6. Private Admin Audio Generator Endpoint (Content Production Tool)
app.post('/api/admin/audio-generator/run', async (req, res) => {
  try {
    const { dryRun = false, testMode = false, force = false, testLimit = 5, voiceFilter, lessonFilter = 'a1_u01_l01' } = req.body;
    const { runAudioGenerator } = await import('./scripts/audio-generator/generateAudio');
    const report = await runAudioGenerator({
      dryRun: Boolean(dryRun),
      testMode: Boolean(testMode),
      force: Boolean(force),
      testLimit: Number(testLimit),
      voiceFilter: voiceFilter ? String(voiceFilter) : undefined,
      lessonFilter: String(lessonFilter),
      geminiApiKey: process.env.GEMINI_API_KEY || '',
      model: 'gemini-3.1-flash-tts-preview',
    });
    res.json({ success: true, report });
  } catch (error: any) {
    console.error('Error running audio generator:', error);
    res.status(500).json({ error: error.message || 'Audio generation failed.' });
  }
});

app.get('/api/admin/audio-generator/report', async (_req, res) => {
  try {
    const reportPath = path.join(process.cwd(), 'generation-report.json');
    if (fs.existsSync(reportPath)) {
      const content = fs.readFileSync(reportPath, 'utf8');
      res.json({ success: true, report: JSON.parse(content) });
    } else {
      res.json({ success: false, message: 'No generation report found yet.' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Vite middleware setup
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
