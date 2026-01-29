import { Router } from "express";
import multer from "multer";
import { generateStoryController } from "../controllers/generate.controller.js";
import { generateImageController } from "../controllers/generate.controller.js";

const router = Router();
const upload = multer({ dest: "uploads/" });

router.post(
  "/",
  upload.single("image"), 
  generateStoryController
);

router.post(
  "/generate-image",
  upload.none(), // or upload.single(...) if image exists
  generateImageController
);

export default router;
