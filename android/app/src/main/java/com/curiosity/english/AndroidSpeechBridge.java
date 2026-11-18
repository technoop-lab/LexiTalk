package com.curiosity.english;

import android.Manifest;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import java.util.ArrayList;

public class AndroidSpeechBridge implements RecognitionListener {
    private static final String TAG = "AndroidSpeechBridge";
    public static final int RECORD_AUDIO_REQUEST_CODE = 4201;

    private final MainActivity activity;
    private final Handler mainHandler;
    private SpeechRecognizer speechRecognizer;
    private boolean isListening = false;
    private String pendingLanguage = "en-US";

    public AndroidSpeechBridge(MainActivity activity) {
        this.activity = activity;
        this.mainHandler = new Handler(Looper.getMainLooper());
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

    private void dispatchResult(String transcript, boolean isFinal) {
        String escaped = transcript.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ");
        evaluateJs("if (typeof window.onAndroidSpeechResult === 'function') { window.onAndroidSpeechResult('" + escaped + "', " + isFinal + "); }");
    }

    private void dispatchError(String code, String message) {
        isListening = false;
        String escapedMsg = message.replace("\\", "\\\\").replace("'", "\\'").replace("\n", " ");
        evaluateJs("if (typeof window.onAndroidSpeechError === 'function') { window.onAndroidSpeechError('" + code + "', '" + escapedMsg + "'); }");
    }

    private void dispatchEnd() {
        isListening = false;
        evaluateJs("if (typeof window.onAndroidSpeechEnd === 'function') { window.onAndroidSpeechEnd(); }");
    }

    @JavascriptInterface
    public boolean isAvailable() {
        try {
            return SpeechRecognizer.isRecognitionAvailable(activity);
        } catch (Exception e) {
            Log.e(TAG, "isAvailable check failed", e);
            return false;
        }
    }

    @JavascriptInterface
    public void startListening(String language) {
        this.pendingLanguage = (language != null && !language.isEmpty()) ? language : "en-US";

        mainHandler.post(() -> {
            // Check permission
            if (ContextCompat.checkSelfPermission(activity, Manifest.permission.RECORD_AUDIO) != PackageManager.PERMISSION_GRANTED) {
                ActivityCompat.requestPermissions(activity, new String[]{Manifest.permission.RECORD_AUDIO}, RECORD_AUDIO_REQUEST_CODE);
                return;
            }

            beginRecognitionSession();
        });
    }

    public void onPermissionResult(int requestCode, int[] grantResults) {
        if (requestCode == RECORD_AUDIO_REQUEST_CODE) {
            if (grantResults.length > 0 && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                mainHandler.post(this::beginRecognitionSession);
            } else {
                dispatchError("permission_denied", "Microphone permission was denied.");
            }
        }
    }

    private void beginRecognitionSession() {
        try {
            cleanupRecognizer();

            if (!SpeechRecognizer.isRecognitionAvailable(activity)) {
                dispatchError("device_offline", "Offline speech recognition is not available on this device.");
                return;
            }

            speechRecognizer = SpeechRecognizer.createSpeechRecognizer(activity);
            speechRecognizer.setRecognitionListener(this);

            Intent intent = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
            intent.putExtra(RecognizerIntent.EXTRA_LANGUAGE, pendingLanguage);
            intent.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
            intent.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 3);
            // Request offline on-device speech recognition where supported by the Android device
            intent.putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, true);

            speechRecognizer.startListening(intent);
            isListening = true;
        } catch (Exception e) {
            Log.e(TAG, "Failed to start speech recognizer", e);
            dispatchError("device_offline", "Offline speech recognition is not available on this device.");
        }
    }

    @JavascriptInterface
    public void stopListening() {
        mainHandler.post(() -> {
            try {
                if (speechRecognizer != null && isListening) {
                    speechRecognizer.stopListening();
                }
            } catch (Exception e) {
                Log.w(TAG, "Error stopping speech recognition", e);
            }
        });
    }

    public void cleanupRecognizer() {
        try {
            isListening = false;
            if (speechRecognizer != null) {
                speechRecognizer.stopListening();
                speechRecognizer.cancel();
                speechRecognizer.destroy();
                speechRecognizer = null;
            }
        } catch (Exception e) {
            Log.w(TAG, "Error cleaning up speech recognizer", e);
        }
    }

    // RecognitionListener Implementation
    @Override
    public void onReadyForSpeech(Bundle params) {
        evaluateJs("if (typeof window.onAndroidSpeechReady === 'function') { window.onAndroidSpeechReady(); }");
    }

    @Override
    public void onBeginningOfSpeech() {}

    @Override
    public void onRmsChanged(float rmsdB) {}

    @Override
    public void onBufferReceived(byte[] buffer) {}

    @Override
    public void onEndOfSpeech() {
        dispatchEnd();
    }

    @Override
    public void onError(int error) {
        String code = "device_offline";
        String message = "Speech recognition encountered an issue.";

        switch (error) {
            case SpeechRecognizer.ERROR_AUDIO:
                code = "device_offline";
                message = "Audio recording error.";
                break;
            case SpeechRecognizer.ERROR_CLIENT:
                code = "client_error";
                message = "Speech recognition client error.";
                break;
            case SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS:
                code = "permission_denied";
                message = "Microphone permission denied.";
                break;
            case SpeechRecognizer.ERROR_NETWORK:
            case SpeechRecognizer.ERROR_NETWORK_TIMEOUT:
                code = "device_offline";
                message = "Speech recognition service unavailable.";
                break;
            case SpeechRecognizer.ERROR_NO_MATCH:
                code = "no_speech";
                message = "No speech detected. Please speak clearly.";
                break;
            case SpeechRecognizer.ERROR_RECOGNIZER_BUSY:
                code = "busy";
                message = "Speech recognition is busy. Please try again.";
                break;
            case SpeechRecognizer.ERROR_SERVER:
                code = "device_offline";
                message = "Speech server error.";
                break;
            case SpeechRecognizer.ERROR_SPEECH_TIMEOUT:
                code = "no_speech";
                message = "No speech detected before timeout.";
                break;
            default:
                code = "device_offline";
                message = "Speech recognition unavailable.";
                break;
        }

        dispatchError(code, message);
    }

    @Override
    public void onResults(Bundle results) {
        ArrayList<String> matches = results.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        if (matches != null && !matches.isEmpty()) {
            String bestMatch = matches.get(0);
            dispatchResult(bestMatch, true);
        } else {
            dispatchError("no_speech", "No speech recognized.");
        }
        dispatchEnd();
    }

    @Override
    public void onPartialResults(Bundle partialResults) {
        ArrayList<String> matches = partialResults.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        if (matches != null && !matches.isEmpty()) {
            String partialMatch = matches.get(0);
            dispatchResult(partialMatch, false);
        }
    }

    @Override
    public void onEvent(int eventType, Bundle params) {}
}
