import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
    >
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
        style={{
          left: mouse.x - 300,
          top: mouse.y - 300,
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6), transparent 60%)",
        }}
      />
    </div>
  );
}