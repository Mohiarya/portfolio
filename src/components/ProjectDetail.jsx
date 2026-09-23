import { useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import BrowserMockup from "./BrowserMockup";
import { createPortal } from "react-dom";

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-void/80 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} project details`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border-border p-6 sm:rounded-3xl sm:p-9"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">{project.type}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-100 sm:text-3xl">{project.title}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-full border border-border p-2 text-ink-500 transition-colors hover:border-accent hover:text-ink-100"
          >
            <X size={16} />
          </button>
        </div>

        {project.screenshot && (
          <div className="mt-6">
            <BrowserMockup title={project.title} src={project.screenshot} />
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-ink-500">
              {t}
            </span>
          ))}
        </div>

        <dl className="mt-8 space-y-6">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">Problem</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-300">{project.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">Solution</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-300">{project.solution}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">Features</dt>
            <dd className="mt-3">
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink-300">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">Architecture</dt>
            <dd className="mt-2 rounded-xl border border-border bg-navy-900/60 px-4 py-3 font-mono text-sm text-ink-300">
              {project.architecture}
            </dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">My Contribution</dt>
            <dd className="mt-2 text-[15px] leading-relaxed text-ink-300">{project.contribution}</dd>
          </div>
        </dl>

        <div className="mt-9 flex flex-wrap items-center gap-4 border-t border-border pt-6">
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
        </div>
      </div>
    </div>,
    document.body
  );
}
