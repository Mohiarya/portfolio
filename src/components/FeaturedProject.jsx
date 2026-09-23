import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import BrowserMockup from "./BrowserMockup";
import MealFinderWidget from "./MealFinderWidget";

export default function FeaturedProject({ project, onOpen }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-border bg-navy-800/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-dim hover:shadow-[0_0_40px_rgba(139,92,246,0.12)] sm:p-10">
      {/* Featured project gets a slightly stronger, two-tone violet/cyan accent than the compact cards */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/[0.12] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-cyan/[0.06] blur-[110px]" />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            {project.index} / Featured Project
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold text-ink-100 sm:text-4xl">{project.title}</h3>
          <p className="mt-1 text-sm text-ink-500">{project.type}</p>

          <p className="mt-5 max-w-lg text-balance text-[15px] leading-relaxed text-ink-300">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-ink-500">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full grad-primary px-5 py-2.5 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]"
            >
              Live Demo <ArrowUpRight size={15} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink-100 transition-colors duration-200 hover:border-accent hover:text-accent-soft"
            >
              GitHub <GithubIcon size={15} />
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

        <div
          className="min-w-0 cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
          onClick={() => onOpen(project)}
        >
          {project.id === "meal-finder" ? (
            <MealFinderWidget />
          ) : (
            <BrowserMockup title={project.title} src={project.screenshot} />
          )}
        </div>
      </div>

      {project.features?.length > 0 && (
        <div className="relative mt-10 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Key Features</p>
          <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-ink-300">
                <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
