export default function Noise() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.25] mix-blend-overlay">
      <div className="w-full h-full bg-[url('/noise.png')] animate-noise" />
    </div>
  );
}