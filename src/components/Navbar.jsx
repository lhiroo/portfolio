import Magnetic from "./Magnetic";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between p-4">
        <span className="font-bold">Lhiro.dev</span>

        <div className="flex gap-6 text-sm text-white/70">
          <Magnetic><a href="#about">About</a></Magnetic>
          <Magnetic><a href="#skills">Skills</a></Magnetic>
          <Magnetic><a href="#projects">Projects</a></Magnetic>
          <Magnetic><a href="#contact">Contact</a></Magnetic>
        </div>
      </div>
    </div>
  );
}