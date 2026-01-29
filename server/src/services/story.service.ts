import { geminiClient } from "../config/gemini.js";
import { storyPrompt } from "../prompts/story.prompt.js";

export async function generateStory(input?: string) {
  try {
    const model = geminiClient.getGenerativeModel({
      model: "gemini-3-flash-preview",
    });

    const prompt = storyPrompt(input || "A thrilling adventure of a young hero in a futuristic city.");

    const result = await model.generateContent(prompt);
    const response = result.response;

    if (!response) {
      throw new Error("No response received from Gemini API");
    }

    const text = response.text();

    if (!text || text.trim().length === 0) {
      throw new Error("Empty response received from Gemini API");
    }

    // Try to extract JSON from the response (in case it's wrapped in markdown code blocks)
    let jsonText = text.trim();
    if (jsonText.startsWith("```json")) {
      jsonText = jsonText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (jsonText.startsWith("```")) {
      jsonText = jsonText.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    try {
      return JSON.parse(jsonText);
    } catch (parseError) {
      console.error("Failed to parse JSON. Raw response:", text);
      throw new Error(
        `Failed to parse story response as JSON: ${parseError instanceof Error ? parseError.message : String(parseError)}. Response: ${text.substring(0, 200)}`,
      );
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error(`Unexpected error in generateStory: ${String(error)}`);
  }
}
