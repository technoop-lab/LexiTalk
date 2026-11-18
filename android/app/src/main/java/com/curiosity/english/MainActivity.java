package com.curiosity.english;

import android.os.Bundle;
import android.webkit.WebView;
import androidx.annotation.NonNull;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    private AndroidSpeechBridge speechBridge;
    private AndroidTTSBridge ttsBridge;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        
        speechBridge = new AndroidSpeechBridge(this);
        ttsBridge = new AndroidTTSBridge(this);

        // Bind native speech and TTS bridges to the Capacitor WebView
        if (getBridge() != null && getBridge().getWebView() != null) {
            WebView webView = getBridge().getWebView();
            webView.addJavascriptInterface(speechBridge, "AndroidSpeechBridge");
            webView.addJavascriptInterface(ttsBridge, "AndroidTTSBridge");
        }
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (speechBridge != null) {
            speechBridge.onPermissionResult(requestCode, grantResults);
        }
    }

    @Override
    public void onPause() {
        super.onPause();
        if (speechBridge != null) {
            speechBridge.cleanupRecognizer();
        }
        if (ttsBridge != null) {
            ttsBridge.onPause();
        }
    }

    @Override
    public void onDestroy() {
        if (speechBridge != null) {
            speechBridge.cleanupRecognizer();
        }
        if (ttsBridge != null) {
            ttsBridge.onDestroy();
        }
        super.onDestroy();
    }
}
