import type { Request, Response } from "express";
import { generateStory } from "../services/story.service.js";
export const generateStoryController = async (req: Request, res: Response) => {
    try {
        const { input } = req.body;
        const story = await generateStory(input);
        res.status(200).json(story);
    } catch (error) {
        console.error("Error generating story:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        res.status(500).json({ 
            message: "Failed to generate story",
            error: errorMessage 
        });
    }
};