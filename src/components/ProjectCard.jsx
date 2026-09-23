import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import BrowserMockup from "./BrowserMockup";

// Compact, alternating-layout card for non-featured projects.
export default function ProjectCard({ project, reverse = false, onOpen }) {
  return (
    <div
      className={`group grid grid-cols-1 items-center gap-8 rounded-3xl border border-border bg-navy-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-[0_0_32px_rgba(139,92,246,0.1)] sm:p-8 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="min-w-0 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]" onClick={() => onOpen(project)}>
        <BrowserMockup title={project.title} src={project.screenshot} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
          {project.index} / Project
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-ink-100">{project.title}</h3>
        <p className="mt-1 text-sm text-ink-500">{project.type}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-ink-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-ink-500">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-soft transition-colors hover:text-ink-100"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-300 transition-colors hover:text-ink-100"
          >
            GitHub <GithubIcon size={14} />
          </a>
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="text-sm font-medium text-ink-500 underline decoration-border underline-offset-4 transition-colors hover:text-accent-soft"
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
