import Particles from "@tsparticles/react";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        fullScreen: { enable: false },
        background: { color: "#05060a" },
        particles: {
          number: { value: 60 },
          color: { value: "#6366f1" },
          opacity: { value: 0.3 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 1,
          },
          links: {
            enable: true,
            color: "#6366f1",
            opacity: 0.2,
          },
        },
      }}
      className="absolute inset-0"
    />
  );
}