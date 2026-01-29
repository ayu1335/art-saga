import { geminiClient } from "../config/gemini.js";

export async function generateStory(input?: string) {
  const model = geminiClient.getGenerativeModel({
    model: "gemini-1.5-flash"
  });

  const prompt = `
You are a manga writer.

Generate a short black-and-white manga story with:
- 4 scenes
- Each scene has description and short dialog
- Output STRICT JSON only

Format:
{
  "title": "",
  "scenes": [
    {
      "description": "",
      "dialog": ["", ""]
    }
  ]
}

User input:
${input ?? "None"}
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text();

  return JSON.parse(text);
}
