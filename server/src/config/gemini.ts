import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY missing");
}

export const geminiClient = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);
