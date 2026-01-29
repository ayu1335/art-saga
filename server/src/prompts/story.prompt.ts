export const storyPrompt = (input: string) => {
  return `
You are a manga writer.

Generate a short black-and-white comic story with:
- 4 scenes
- 1st scene should description about how the person looks and what they are doing, personality, faceshape etc.
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
