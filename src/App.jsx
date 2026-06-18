import { Routes, Route } from "react-router-dom";

import MouseGlow from "./components/MouseGlow";
import AnimatedGradient from "./components/AnimatedGradient";
import Noise from "./components/Noise";

// PAGES
import Home from "./pages/Home";
import Draw2 from "./pages/Draw2";
import Cc from "./pages/Cc";
import Floppy from "./pages/Floppy";
import Esp32 from "./pages/Esp32";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#05060a] text-white overflow-hidden">

      {/* GLOBAL EFFECTS (always visible) */}
      <MouseGlow />
      <AnimatedGradient />
      <Noise />

      {/* CONTENT */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/draw2" element={<Draw2 />} />
          <Route path="/project/cc" element={<Cc />} />
          <Route path="/project/floppy" element={<Floppy />} />
          <Route path="/project/esp_dashboard" element={<Esp32 />} />
        </Routes>
      </div>

    </div>
  );
}
