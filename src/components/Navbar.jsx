import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "./BrandIcons";
import { nav, profile } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-navy-950/80 border-b border-border backdrop-blur-xl" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-sm font-semibold tracking-wide text-ink-100">
          MOHI ARYA
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-ink-300 transition-colors hover:text-ink-100"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-ink-500 transition-colors hover:text-ink-100"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-ink-500 transition-colors hover:text-ink-100"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={profile.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="text-ink-500 transition-colors hover:text-ink-100"
          >
            <LeetcodeIcon size={18} />
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink-100 transition-colors hover:border-accent hover:text-accent-soft"
          >
            Resume <ArrowUpRight size={14} />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink-100 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 border-t border-border bg-navy-950/95 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-2 py-3 text-base text-ink-300 transition-colors hover:bg-navy-800 hover:text-ink-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-5 px-2 pb-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="text-ink-500 hover:text-ink-100">
                <GithubIcon size={20} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-ink-500 hover:text-ink-100">
                <LinkedinIcon size={20} />
              </a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="text-ink-500 hover:text-ink-100">
                <LeetcodeIcon size={20} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-ink-100"
              >
                Resume <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
