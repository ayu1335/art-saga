import Header from "../components/Header.tsx";
import Hero from "../components/Hero.tsx";
import Workflow from "../components/Workflow.tsx";

const LandingPage = () => {
  return (
    <div className="bg-slate-50 text-slate-900 font-inter">
<Header />
<main>
<Hero />
<Workflow />
</main>
</div>
  )
}

export default LandingPage