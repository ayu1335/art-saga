import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const STABILITY_CONFIG = {
  API_KEY: process.env.STABILITY_API_KEY || '',
  BASE_URL: 'https://api.stability.ai',
  DEFAULT_MODEL: 'sd3-large',
  DEFAULT_OUTPUT_FORMAT: 'webp',
  TIMEOUT: 30000, // 30 seconds
};

export const stabilityClient = axios.create({
  baseURL: 'https://api.stability.ai',
  timeout: STABILITY_CONFIG.TIMEOUT,
  headers: {
    Authorization: `Bearer ${STABILITY_CONFIG.API_KEY}`,
    Accept: 'image/*', // Default to receiving binary image data
  },
  responseType: 'arraybuffer',
});

// Validation to ensure key is present on startup
if (!STABILITY_CONFIG.API_KEY) {
  console.warn('WARNING: STABILITY_API_KEY is missing from environment variables.');
}
