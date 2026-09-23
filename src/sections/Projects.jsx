import { useState } from "react";
import Reveal from "../components/Reveal";
import FeaturedProject from "../components/FeaturedProject";
import ProjectCard from "../components/ProjectCard";
import ProjectDetail from "../components/ProjectDetail";
import { projects } from "../data/portfolio";

export default function Projects() {
  const [active, setActive] = useState(null);
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">Things I've Built</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-xl text-balance text-ink-500">
            A selection of projects where I turned ideas into working applications.
          </p>
        </Reveal>

        <div className="mt-14 space-y-8">
          {featured.map((project) => (
            <Reveal key={project.id}>
              <FeaturedProject project={project} onOpen={setActive} />
            </Reveal>
          ))}

          {rest.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} reverse={i % 2 === 1} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => setActive(null)} />
    </section>
  );
}
