package com.curiosity.english;

import android.content.Intent;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

/**
 * GeminiHandoff — one-tap hand-off to the Gemini app the learner already has
 * installed. Sends the prompt straight into Gemini's composer (ACTION_SEND,
 * package-targeted) so the user never hunts through a share sheet.
 *
 * Fallback order: standalone Gemini app → Google app (Gemini inside) →
 * system share sheet. Never requires an API key.
 */
@CapacitorPlugin(name = "GeminiHandoff")
public class GeminiHandoffPlugin extends Plugin {

    private static final String[] GEMINI_PACKAGES = {
        "com.google.android.apps.bard",            // standalone Gemini app
        "com.google.android.googlequicksearchbox"  // Google app (Gemini inside)
    };

    @PluginMethod
    public void open(PluginCall call) {
        String prompt = call.getString("prompt", "");
        if (prompt == null || prompt.trim().isEmpty()) {
            call.reject("prompt is required");
            return;
        }

        // 1) Launch Gemini directly with the pre-typed prompt
        for (String pkg : GEMINI_PACKAGES) {
            try {
                Intent intent = buildSendIntent(prompt);
                intent.setPackage(pkg);
                if (intent.resolveActivity(getContext().getPackageManager()) != null) {
                    getActivity().startActivity(intent);
                    JSObject result = new JSObject();
                    result.put("launched", pkg);
                    call.resolve(result);
                    return;
                }
            } catch (Exception ignored) {
                // Package missing or blocked — try the next one.
            }
        }

        // 2) Fallback: system share sheet (Gemini appears in the list)
        try {
            Intent chooser = Intent.createChooser(buildSendIntent(prompt), "Ask Gemini");
            getActivity().startActivity(chooser);
            JSObject result = new JSObject();
            result.put("launched", "chooser");
            call.resolve(result);
        } catch (Exception e) {
            call.reject("Could not open Gemini: " + e.getMessage());
        }
    }

    private Intent buildSendIntent(String prompt) {
        Intent intent = new Intent(Intent.ACTION_SEND);
        intent.setType("text/plain");
        intent.putExtra(Intent.EXTRA_TEXT, prompt);
        return intent;
    }
}
