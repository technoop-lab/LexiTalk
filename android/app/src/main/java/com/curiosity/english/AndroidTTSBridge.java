package com.curiosity.english;

import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.speech.tts.TextToSpeech;
import android.speech.tts.UtteranceProgressListener;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import java.util.HashMap;
import java.util.Locale;

public class AndroidTTSBridge implements TextToSpeech.OnInitListener {
    private static final String TAG = "AndroidTTSBridge";

    private final MainActivity activity;
    private final Handler mainHandler;
    private TextToSpeech tts;
    private boolean isInitialized = false;
    private boolean isSpeaking = false;
    private Locale currentLocale = Locale.US;

    public AndroidTTSBridge(MainActivity activity) {
        this.activity = activity;
        this.mainHandler = new Handler(Looper.getMainLooper());
        try {
            this.tts = new TextToSpeech(activity.getApplicationContext(), this);
        } catch (Exception e) {
            Log.e(TAG, "Failed to initialize Android TextToSpeech engine", e);
        }
    }

    private WebView getWebView() {
        if (activity != null && activity.getBridge() != null) {
            return activity.getBridge().getWebView();
        }
        return null;
    }

    private void evaluateJs(String script) {
        mainHandler.post(() -> {
            WebView webView = getWebView();
            if (webView != null) {
                webView.evaluateJavascript(script, null);
            }
        });
    }

    @Override
    public void onInit(int status) {
        if (status == TextToSpeech.SUCCESS && tts != null) {
            int result = tts.setLanguage(Locale.US);
            if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                Log.w(TAG, "Locale.US is missing data or unsupported. Trying Locale.UK...");
                result = tts.setLanguage(Locale.UK);
                if (result == TextToSpeech.LANG_MISSING_DATA || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                    Log.w(TAG, "Locale.UK also unsupported. Falling back to default locale.");
                    tts.setLanguage(Locale.getDefault());
                    currentLocale = Locale.getDefault();
                } else {
                    currentLocale = Locale.UK;
                }
            } else {
                currentLocale = Locale.US;
            }
            tts.setSpeechRate(0.95f);
            tts.setPitch(1.0f);

            tts.setOnUtteranceProgressListener(new UtteranceProgressListener() {
                @Override
                public void onStart(String utteranceId) {
                    isSpeaking = true;
                    evaluateJs("if (typeof window.onAndroidTTSStart === 'function') { window.onAndroidTTSStart('" + utteranceId + "'); }");
                }

                @Override
                public void onDone(String utteranceId) {
                    isSpeaking = false;
                    evaluateJs("if (typeof window.onAndroidTTSEnd === 'function') { window.onAndroidTTSEnd('" + utteranceId + "'); }");
                }

                @Override
                public void onError(String utteranceId) {
                    isSpeaking = false;
                    evaluateJs("if (typeof window.onAndroidTTSError === 'function') { window.onAndroidTTSError('" + utteranceId + "', 'TTS_PLAYBACK_ERROR'); }");
                }
            });

            isInitialized = true;
            Log.i(TAG, "Android native TextToSpeech initialized successfully with language: " + currentLocale);
        } else {
            isInitialized = false;
            Log.e(TAG, "Android TextToSpeech initialization failed with status: " + status);
        }
    }

    @JavascriptInterface
    public boolean isAvailable() {
        return isInitialized && tts != null;
    }

    @JavascriptInterface
    public boolean isSpeaking() {
        return isSpeaking;
    }

    @JavascriptInterface
    public boolean speak(String text, String language, float rate) {
        if (text == null || text.trim().isEmpty()) {
            Log.w(TAG, "speak called with empty text");
            return false;
        }

        if (tts == null) {
            Log.w(TAG, "TTS requested but TextToSpeech instance is null");
            return false;
        }

        if (!isInitialized) {
            Log.w(TAG, "TTS requested but TextToSpeech is not yet fully initialized");
            try {
                this.tts = new TextToSpeech(activity.getApplicationContext(), this);
            } catch (Exception e) {
                Log.e(TAG, "Failed retry initialization of TTS", e);
            }
            return false;
        }

        try {
            // Stop any previous speech immediately
            tts.stop();

            // Auto-detect script if language is generic or missing, or if text script dictates locale
            boolean isHindiScript = false;
            if (text != null) {
                for (int i = 0; i < text.length(); i++) {
                    char c = text.charAt(i);
                    if (c >= '\u0900' && c <= '\u097F') {
                        isHindiScript = true;
                        break;
                    }
                }
            }

            Locale targetLocale = Locale.US;
            if (isHindiScript || (language != null && (language.equalsIgnoreCase("hi") || language.equalsIgnoreCase("hi-IN") || language.equalsIgnoreCase("hi_IN")))) {
                targetLocale = new Locale("hi", "IN");
            } else if (language != null && !language.isEmpty()) {
                Locale requestedLocale = Locale.forLanguageTag(language.replace("_", "-"));
                if (requestedLocale != null) {
                    targetLocale = requestedLocale;
                }
            }

            int langResult = tts.setLanguage(targetLocale);
            if (langResult == TextToSpeech.LANG_MISSING_DATA || langResult == TextToSpeech.LANG_NOT_SUPPORTED) {
                Log.w(TAG, "Locale " + targetLocale + " unsupported or missing data. Falling back to current/default.");
                if (targetLocale.getLanguage().equals("hi")) {
                    // Try fallback hi locale
                    tts.setLanguage(new Locale("hi"));
                } else {
                    tts.setLanguage(Locale.US);
                }
            } else {
                currentLocale = targetLocale;
            }

            // Set natural normal speaking rate
            if (rate > 0.2f && rate < 2.5f) {
                tts.setSpeechRate(rate);
            } else {
                tts.setSpeechRate(0.95f);
            }

            String utteranceId = "curiosity_dlg_" + System.currentTimeMillis();

            int result;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                Bundle params = new Bundle();
                params.putFloat(TextToSpeech.Engine.KEY_PARAM_VOLUME, 1.0f);
                result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, params, utteranceId);
            } else {
                HashMap<String, String> params = new HashMap<>();
                params.put(TextToSpeech.Engine.KEY_PARAM_VOLUME, "1.0");
                params.put(TextToSpeech.Engine.KEY_PARAM_UTTERANCE_ID, utteranceId);
                result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, params);
            }

            if (result == TextToSpeech.SUCCESS) {
                isSpeaking = true;
                Log.d(TAG, "Native TTS speaking utterance: " + utteranceId + " | text: " + text);
                return true;
            } else {
                Log.e(TAG, "tts.speak returned failure code: " + result);
                return false;
            }
        } catch (Exception e) {
            Log.e(TAG, "Exception during native speak call", e);
            return false;
        }
    }

    @JavascriptInterface
    public void stop() {
        if (tts != null) {
            try {
                tts.stop();
                isSpeaking = false;
            } catch (Exception e) {
                Log.e(TAG, "Error stopping TTS", e);
            }
        }
    }

    public void onPause() {
        stop();
    }

    public void onDestroy() {
        if (tts != null) {
            try {
                tts.stop();
                tts.shutdown();
                isInitialized = false;
                tts = null;
            } catch (Exception e) {
                Log.e(TAG, "Error destroying TTS", e);
            }
        }
    }
}
