import { Award } from "lucide-react";
import Reveal from "../components/Reveal";
import { certifications } from "../data/portfolio";

export default function Certifications() {
  if (!certifications.length) return null;

  return (
    <section id="certifications" className="relative py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-ink-100 sm:text-3xl">Certifications</h2>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 70}>
              <div className="glass flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-accent-dim text-accent-soft">
                  <Award size={16} />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-100">{cert.name}</p>
                  <p className="text-xs text-ink-500">{cert.issuer}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
