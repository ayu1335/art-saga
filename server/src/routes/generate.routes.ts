import {Router} from "express";
import { generateStoryController } from "../controllers/generate.controller.js";
const router = Router();

router.post("/generate-story",generateStoryController);

export default router;