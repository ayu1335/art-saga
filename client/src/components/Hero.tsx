import { Upload } from "lucide-react";
import { useNavigate } from "react-router";


export default function Hero() {
    const navigate = useNavigate();
    function handleUploadClick() {
        navigate("/dashboard");
    }
return (
<section className="py-20 text-center">
<div className="container mx-auto px-4">
<h1 className="text-4xl md:text-6xl font-extrabold mb-6">
Turn your daily photos into <span className="text-blue-600">Comic</span>
</h1>
<p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
Upload a photo and let AI create a personalized comic story.
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button onClick={handleUploadClick} className="bg-slate-900 text-white px-8 py-4 rounded-lg flex gap-2 items-center justify-center">
<Upload className="w-5 h-5" /> Upload Your First Photo
</button>
<button className="border px-8 py-4 rounded-lg">View Sample Comics</button>
</div>
</div>
</section>
);
}