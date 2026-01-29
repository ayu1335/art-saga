export const imagePrompt = (input: string) => {
  return `
Create a high-quality manga-style illustration based on the following scene:

"${input}"

Style & Art Direction:
- Japanese manga art style
- Black and white illustration with strong ink lines
- Clean line art, sharp contours, expressive facial features
- Dramatic lighting with high contrast (ink-heavy shadows)
- Screen-tone shading typical of manga panels
- Cinematic composition, dynamic framing

Character & Emotion:
- Clear emotional expression matching the scene
- Natural body language and believable poses
- Detailed eyes with strong highlights

Composition:
- Single manga panel
- Background detailed enough to set the scene but not overpower characters
- Focus on mood, atmosphere, and storytelling

Quality Constraints:
- Highly detailed
- Professional manga illustration quality
- No color, no painting style, no western comic style
- No text, no speech bubbles, no watermarks
`.trim();
};
