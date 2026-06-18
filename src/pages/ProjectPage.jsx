import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectPage() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="text-white p-10">
        Project not found
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white p-10 max-w-3xl mx-auto">
      
      <Link to="/" className="text-indigo-400">
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mt-6">
        {project.title}
      </h1>

      <p className="mt-4 text-white/60">
        {project.desc}
      </p>

      <div className="mt-6 flex gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="px-3 py-1 text-sm rounded-md bg-indigo-500/20 border border-indigo-500/30"
          >
            {s}
          </span>
        ))}
      </div>

    </div>
  );
}