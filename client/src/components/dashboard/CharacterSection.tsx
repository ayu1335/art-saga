export default function CharacterSection() {
return (
<div className="bg-white rounded-xl border p-6 space-y-4">
<h3 className="font-semibold">1. Character Design <span className="text-xs text-blue-600">REQUIRED</span></h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="border-2 border-dashed rounded-lg p-6 text-center text-sm text-slate-500">
Click to upload main character
</div>
<div className="border-2 border-dashed rounded-lg p-6 text-center text-sm text-slate-500">
Side Characters (Optional)
</div>
</div>
</div>
);
}