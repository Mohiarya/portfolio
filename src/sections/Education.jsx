import { GraduationCap } from "lucide-react";
import Reveal from "../components/Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">Education</h2>
        </Reveal>

        <div className="mt-10 space-y-6 border-l border-border pl-8">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 80} className="relative">
              <span className="absolute -left-[41px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent-dim bg-navy-900 text-accent-soft">
                <GraduationCap size={13} />
              </span>
              <p className="text-sm font-medium text-ink-500">{item.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-ink-100">{item.school}</h3>
              <p className="mt-1 text-[15px] text-ink-300">{item.degree}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
