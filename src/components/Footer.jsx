import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-ink-500 sm:flex-row">
        <p>© 2026 {profile.name}</p>
        <p className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink-100">
            GitHub
          </a>
          <span aria-hidden="true">·</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-ink-100">
            LinkedIn
          </a>
          <span aria-hidden="true">·</span>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink-100">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
}
