import { ArrowRight, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "../components/BrandIcons";
import StarField from "../components/StarField";
import TechConstellation from "../components/TechConstellation";
import Reveal from "../components/Reveal";
import { profile } from "../data/portfolio";

const TECH_STRIP = ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL", "PYTHON", "SQL"];

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-void to-void" />
      <StarField density={130} />
      {/* Two low-opacity radial glows — violet on one side, cyan on the
          other — blending into the background rather than lighting it up. */}
      <div className="absolute left-[8%] top-1/4 h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-[140px]" aria-hidden="true" />
      <div className="absolute right-[5%] top-2/3 h-[420px] w-[420px] rounded-full bg-cyan/[0.05] blur-[130px]" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <div className="min-w-0">
          <Reveal>
            <p className="mb-5 inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent-soft">
              {profile.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-balance text-lg font-medium text-ink-300 sm:text-xl">
              {profile.statement}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-4 max-w-lg text-balance text-base text-ink-500">{profile.supporting}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full grad-primary px-6 py-3 text-sm font-semibold text-void transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,92,246,0.45)]"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink-100 transition-colors duration-200 hover:border-accent hover:text-accent-soft"
              >
                Download Resume
                <Download size={16} />
              </a>
            </div>
          </Reveal>

          {/* Mobile/tablet: a deliberately simple, mobile-native
              constellation (not a shrunk copy of the desktop one) sits
              right after the CTA, ahead of the tech strip and socials —
              matching the intended hierarchy: text → CTA → constellation
              → supporting details. */}
          <Reveal delay={370} className="mt-10 max-w-[300px] lg:hidden">
            <TechConstellation compact />
          </Reveal>

          <Reveal delay={400}>
            <p className="mt-9 text-xs font-medium uppercase tracking-[0.2em] text-ink-700">
              {TECH_STRIP.join(" · ")}
            </p>
          </Reveal>

          <Reveal delay={430}>
            <div className="mt-6 flex items-center gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-300 transition-colors hover:text-ink-100">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-300 transition-colors hover:text-ink-100">
                <LinkedinIcon size={20} />
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-ink-300 transition-colors hover:text-ink-100">
                <LeetcodeIcon size={20} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mx-auto hidden w-full max-w-xl lg:block">
          <TechConstellation />
        </Reveal>
      </div>
    </section>
  );
}
