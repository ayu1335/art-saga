import FormData from "form-data";
import { stabilityClient, STABILITY_CONFIG } from "../config/sd.js";

export async function generateImageFromSD(
  prompt: string,
  negativePrompt?: string
) {
  const formData = new FormData();

  formData.append("prompt", prompt);
  formData.append("model", STABILITY_CONFIG.DEFAULT_MODEL);
  formData.append("output_format", STABILITY_CONFIG.DEFAULT_OUTPUT_FORMAT);

  if (negativePrompt) {
    formData.append("negative_prompt", negativePrompt);
  }

  const response = await stabilityClient.post(
    "/v2beta/stable-image/generate/core",
    formData,
    {
      headers: formData.getHeaders(),
    }
  );

  return response.data; // binary image buffer
}
