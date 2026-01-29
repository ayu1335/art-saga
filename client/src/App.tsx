import { BrowserRouter, Routes ,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import PdfViewer from "./components/PdfViewer";



export default function App() {
return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/viewer" element={<PdfViewer/>}/>
      </Routes>
    </BrowserRouter>
);
}