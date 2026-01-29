export default function UploadCard() {
return (
<div className="bg-white rounded-xl border p-6 space-y-6">
<h3 className="font-semibold">1. Upload Reference Photo</h3>
<div className="border-2 border-dashed rounded-lg p-10 text-center text-sm text-slate-500">
Click to upload or drag and drop<br />PNG, JPG or WEBP (Max 10MB)
</div>


<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium">Story Mood</label>
<select className="w-full mt-1 border rounded-md p-2">
<option>Action / Shonen</option>
<option>Romance</option>
<option>Mystery</option>
</select>
</div>
<div>
<label className="text-sm font-medium">Art Style</label>
<select className="w-full mt-1 border rounded-md p-2">
<option>Classic Manga (B&W)</option>
<option>Manhwa</option>
<option>Webtoon</option>
</select>
</div>
</div>


<button className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold">
Generate My Story
</button>
</div>
);
}