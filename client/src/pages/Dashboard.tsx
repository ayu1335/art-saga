import UploadCard from "../components/dashboard/UploadCard.tsx";
import StatusCard from "../components/dashboard/StatusCard.tsx";
import CharacterSection from "../components/dashboard/CharacterSection.tsx";
import SceneSection from "../components/dashboard/SceneSection.tsx";
import StoryInput from "../components/dashboard/StoryInput.tsx";


export default function Dashboard() {
return (
<div className="container mx-auto px-4 py-10 space-y-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2">
<UploadCard />
</div>
<StatusCard />
</div>


<CharacterSection />
<SceneSection />
<StoryInput />
</div>
);
}