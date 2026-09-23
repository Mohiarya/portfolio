import { SlidersHorizontal, Check, ArrowDown } from "lucide-react";

// An illustrated mockup of Meal Finder's actual constraint-filtering
// engine — not a live data feed (the numbers are one representative
// example), but it depicts a real feature honestly rather than a fake
// metric or invented user count.
const CONSTRAINTS = ["Vegetarian", "≤ 600 kcal", "≥ 30g protein"];

export default function MealFinderWidget() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-navy-900 p-5 shadow-2xl sm:p-6">
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/[0.08] blur-[70px]" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan/[0.06] blur-[70px]" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2 text-ink-500">
          <SlidersHorizontal size={14} className="text-accent-soft" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Constraint Engine</span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-ink-700">Example output</span>
      </div>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {CONSTRAINTS.map((c) => (
          <span
            key={c}
            className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim bg-navy-800 px-3 py-1.5 text-xs font-medium text-ink-100"
          >
            <Check size={12} className="text-cyan" />
            {c}
          </span>
        ))}
      </div>

      <div className="relative mt-4 flex items-center gap-2 text-ink-700">
        <ArrowDown size={14} className="animate-pulse" />
        <span className="text-[11px] uppercase tracking-wide">deterministic match</span>
      </div>

      <div className="relative mt-4 rounded-lg border border-accent/40 bg-gradient-to-br from-navy-800 to-navy-900 p-4" style={{ boxShadow: "0 0 24px rgba(139,92,246,0.1)" }}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="font-display text-base font-semibold text-ink-100">Paneer Tikka Power Bowl</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <span className="rounded-md bg-navy-950 px-2 py-1 text-[11px] font-medium text-ink-300">540 kcal</span>
              <span className="rounded-md bg-navy-950 px-2 py-1 text-[11px] font-medium text-ink-300">34g protein</span>
              <span className="rounded-md bg-navy-950 px-2 py-1 text-[11px] font-medium text-ink-300">Vegetarian</span>
            </div>
          </div>
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cyan/15 text-cyan">
            <Check size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
