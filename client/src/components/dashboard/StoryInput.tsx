export default function StoryInput() {
return (
<div className="bg-white rounded-xl border p-6 space-y-4">
<div className="flex justify-between items-center">
<h3 className="font-semibold">3. Story Input</h3>
<div className="flex gap-2">
<button className="text-xs border px-3 py-1 rounded">Manual</button>
<button className="text-xs border px-3 py-1 rounded">AI Generate</button>
</div>
</div>
<textarea
className="w-full border rounded-lg p-3 text-sm"
rows={5}
placeholder="Describe your story here... or leave blank to let AI generate it."
/>
<p className="text-xs text-blue-600">
AI will enhance and structure your input into scenes automatically.
</p>
</div>
);
}