// gemini-3-flash-preview
import fs from "fs";
import { geminiClient } from "../config/gemini.js";
import { storyPrompt } from "../prompts/story.prompt.js";

export async function generateStory(
  story?: string,
  imagePath?: string
) {
  try {
    const model = geminiClient.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const promptText = storyPrompt(
      story || "A thrilling adventure of a young hero in a futuristic city."
    );

    // 🔑 Build multimodal content
    const contents: any[] = [{ text: promptText }];

    if (imagePath) {
      const base64Image = fs.readFileSync(imagePath, "base64");

      contents.push({
        inlineData: {
          mimeType: "image/jpeg", // or image/png
          data: base64Image,
        },
      });
    }

    const result = await model.generateContent(contents);
    const response = result.response;

    if (!response) {
      throw new Error("No response received from Gemini API");
    }

    const text = response.text();

    if (!text || text.trim().length === 0) {
      throw new Error("Empty response received from Gemini API");
    }

    // ---- JSON extraction (your logic, kept) ----
    let jsonText = text.trim();
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    return JSON.parse(jsonText);
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Unexpected error in generateStory: ${String(error)}`);
  }
}
