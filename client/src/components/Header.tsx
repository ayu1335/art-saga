import { Sparkles } from "lucide-react";


export default function Header() {
return (
<header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
<div className="flex items-center gap-2">
<div className="bg-blue-600 p-1.5 rounded-lg">
<Sparkles className="text-white w-6 h-6" />
</div>
<span className="text-xl font-bold">ArtSaga AI</span>
</div>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
<a href="#how-it-works" className="hover:text-blue-600">How it Works</a>
<a href="#features" className="hover:text-blue-600">Features</a>
</nav>
<div className="flex gap-4">
<button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">Get Started</button>
</div>
</div>
</header>
);
}