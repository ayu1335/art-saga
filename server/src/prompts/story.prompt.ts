export const storyPrompt = (input: string) => {
  return `
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

User input: ${input ?? "None"}`;
};
