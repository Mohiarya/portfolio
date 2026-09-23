// "Browser window" frame for a project screenshot. Renders the real image
// when `src` is provided; falls back to a clean placeholder otherwise —
// swap in a screenshot later just by adding `screenshot` to the project's
// data entry, no component changes needed.
export default function BrowserMockup({ title, src, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-border bg-navy-900 shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-border bg-navy-800/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-700/60" />
        <span className="ml-3 truncate rounded-full bg-navy-950/60 px-3 py-0.5 text-[11px] text-ink-500">
          {title}
        </span>
      </div>

      {src ? (
        <div className="aspect-video overflow-hidden bg-navy-950">
          <img src={src} alt={`${title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top" />
        </div>
      ) : (
        <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.18),transparent_55%)]" />
          <p className="relative text-sm font-medium text-ink-700">Screenshot preview coming soon</p>
        </div>
      )}
    </div>
  );
}
