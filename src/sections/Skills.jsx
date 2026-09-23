import Reveal from "../components/Reveal";
import { skillGroups } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">My Technical Stack</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 70}>
              <div className="glass h-full rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-lg border border-border bg-navy-900/60 px-3 py-1.5 text-sm text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:text-ink-100 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
