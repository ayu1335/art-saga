import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UploadForm() {
  const navigate = useNavigate();

  const [image, setImage] = useState<File | null>(null);
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image || !story.trim()) {
      alert("Please provide both an image and a story.");
      return;
    }

    setLoading(true);

    const formStroryData = new FormData();
    formStroryData.append("image", image);
    formStroryData.append("story", story);

    const res= await fetch("http://localhost:5000/api/", {
      method: "POST",
      body: formStroryData,
    });
    const data = await res.json();
    console.log("Generated Story Data:", data);

  
    const formImgData = new FormData();
    formImgData.append("data", JSON.stringify(data));
    formImgData.append("negativePrompt", "blurry, low quality, distorted faces");
    
    
    const resimg= await fetch("http://localhost:5000/api/generate-image", {
      method: "POST",
      body: formImgData,
    });
    const dataimg = await resimg.json();
    console.log("Generated Image Data:", dataimg);
    navigate("/viewer", {
  state: {
    images: dataimg.images, 
    title: data.title || "Generated Story",
  },
});

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Reference Image
        </label>
        <input
          type="file"
          accept="image/*"
          className="block w-full text-sm text-gray-600
            file:mr-4 file:rounded-md file:border-0
            file:bg-gray-100 file:px-4 file:py-2
            file:text-sm file:font-medium
            hover:file:bg-gray-200"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
        />
      </div>

      {/* Story Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Story Description
        </label>
        <textarea
          rows={5}
          className="w-full rounded-md border border-gray-300 p-3 text-sm
            focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          placeholder="Describe the story you want Gemini to generate..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-md bg-black py-3 text-sm font-semibold text-white
          hover:bg-gray-900 disabled:opacity-60"
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>
    </form>
  );
}
