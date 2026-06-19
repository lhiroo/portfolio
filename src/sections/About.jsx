import Reveal from "../components/Reveal";

export default function About() {
  return (
    <section id="about" className="py-32 max-w-5xl mx-auto px-6">
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">About</h2>
      </Reveal>

      <Reveal>
        <p className="text-white/60 leading-relaxed">
          Tahan Farhan
        </p>
      </Reveal>
    </section>
  );
}