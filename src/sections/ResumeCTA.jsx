import { ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

export default function ResumeCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-16">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full grad-celestial opacity-[0.12] blur-[100px]" />
            <h2 className="relative font-display text-2xl font-semibold text-ink-100 sm:text-3xl">
              Interested in my work?
            </h2>
            <p className="relative mx-auto mt-3 max-w-md text-ink-500">
              Take a closer look at my experience, projects and technical skills.
            </p>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="relative mt-8 inline-flex items-center gap-2 rounded-full grad-primary px-7 py-3 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]"
            >
              Download Resume <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
