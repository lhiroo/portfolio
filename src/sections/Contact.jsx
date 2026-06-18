import Reveal from "../components/Reveal";
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 max-w-5xl mx-auto px-6"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-6">
          Contact
        </h2>
      </Reveal>

      <Reveal>
        <div className="p-6 rounded-xl bg-white/5 border border-white/10">
          <p className="text-white/60">
            Email: <a href="mailto:arlhiro08@gmail.com" className="hover:text-white transition">
              arlhiro08@gmail.com
            </a>
          </p>

          <div className="flex gap-5 mt-6">
  <a
    href="https://github.com/lhiroo"
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-3
      rounded-lg
      bg-white/5
      border border-white/10
      text-lg
      text-white/60
      hover:text-white
      hover:bg-white/10
      hover:scale-110
      transition-all duration-300
    "
  >
    <FaGithub />
  </a>

  <a
    href="https://discord.com/users/lhiro_"
    target="_blank"
    rel="noopener noreferrer"
    className="
      p-3
      rounded-lg
      bg-white/5
      border border-white/10
      text-lg
      text-white/60
      hover:text-white
      hover:bg-white/10
      hover:scale-110
      transition-all duration-300
    "
  >
    <FaDiscord />
  </a>
</div>
        </div>
      </Reveal>
    </section>
  );
}