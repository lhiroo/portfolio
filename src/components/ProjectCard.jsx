import TiltCard from "./TiltCard";
import Magnetic from "../components/Magnetic";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, link, title, desc, stack }) {
  return (
    <Link to={`/project/${link}`}>
    <Magnetic>
      <div className="group p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition">

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="text-white/60 mt-2">
          {desc}
        </p>

        {/* stack badges */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {stack?.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
            >
              {s}
            </span>
          ))}
        </div>

      </div>
    </Magnetic>
    </Link>
  );
}