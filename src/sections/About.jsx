import Reveal from "../components/Reveal";
import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">A little about me</h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-300">{about.intro}</p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.cards.map((card, i) => (
            <Reveal key={card.title} delay={120 + i * 80}>
              <div className="glass h-full rounded-2xl p-6 transition-colors duration-300 hover:border-accent-dim">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent-soft">{card.title}</p>
                <ul className="mt-4 space-y-1.5">
                  {card.lines.map((line) => (
                    <li key={line} className="text-[15px] text-ink-300">
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
