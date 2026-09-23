import { useMemo } from "react";

// A static field of small stars rendered once (no per-frame JS), twinkling
// via a staggered CSS animation. Cheap on the main thread and respects
// prefers-reduced-motion globally (see index.css).
function useStars(count, seed) {
  return useMemo(() => {
    let s = seed;
    const rand = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: rand() * 100,
      y: rand() * 100,
      size: rand() * 1.6 + 0.4,
      delay: rand() * 4,
      duration: rand() * 3 + 3,
      opacity: rand() * 0.5 + 0.3,
    }));
  }, [count, seed]);
}

export default function StarField({ density = 140, className = "" }) {
  const stars = useStars(density, 42);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-ink-100 animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
