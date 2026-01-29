import type { Request, Response } from "express";
import { generateStory } from "../services/story.service.js";
import { generateImageFromSD } from "../services/image.service.js";
import { imagePrompt } from "../prompts/image.prompt.js";

export const generateStoryController = async (req: Request, res: Response) => {
  try {
    const story = req.body?.story;
    const imagePath = req.file?.path;

    if (!story) {
      return res.status(400).json({ message: "Story is required" });
    }
    if (!imagePath) {
      return res.status(400).json({ message: "Image is required" });
    }

    const storyData = await generateStory(story, imagePath);

    res.status(200).json(storyData);
  } catch (error) {
    console.error("Error generating story:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    res.status(500).json({
      message: "Failed to generate story",
      error: errorMessage,
    });
  }
};

export const generateImageController = async (req: Request, res: Response) => {
  try {
    const images: Buffer[] = [];
    const RowData = req.body?.data;
    const negativePrompt = req.body?.negativePrompt;
    if (!RowData) {
      return res.status(400).json({ message: "Data is required" });
    }
    const data = JSON.parse(RowData);
    for (let i = 0; i < data.scenes.length; i++) {
      const scene = data.scenes[i];
      const sdPrompt = imagePrompt(scene.description);

      const imageBuffer = await generateImageFromSD(
        sdPrompt, negativePrompt
      );

      images.push(imageBuffer);
    }
    const base64Images = images.map((img) => img.toString("base64"));

    res.json({
      title: data.title,
      images: base64Images,
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.status(500).json({ message: "Failed to generate image" });
  }
};
