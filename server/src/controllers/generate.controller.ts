import type { Request, Response } from "express";
import { generateStory } from "../services/story.service.js";
export const generateStoryController = async (req: Request, res: Response) => {
    try {
        const { input } = req.body;
        const story = await generateStory(input);
        res.status(200).json(story);
    } catch (error) {
        
    }
};