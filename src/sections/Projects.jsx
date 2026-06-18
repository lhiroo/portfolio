import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-32 max-w-5xl mx-auto px-6">
      
      <Reveal>
        <h2 className="text-3xl font-bold mb-10">Projects</h2>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Reveal key={p.id}>
            <ProjectCard
              id={p.id}
              link={p.link}
              title={p.title}
              desc={p.desc}
              stack={p.stack}
            />
          </Reveal>
        ))}
      </div>

    </section>
  );
}