import { useEffect, useRef, useState } from "react";

// An asymmetric technology network, not a wheel of spokes: MOHI connects
// directly to only a few core technologies, and the rest branch off THOSE
// technologies (React/Node → JavaScript, Node → Express/PostgreSQL,
// PostgreSQL → SQL) at varied distances — a small dependency graph that
// happens to float in space, not a mandala or an orbit diagram.
//
// Each technology renders as a glowing pill badge (not a bare dot with
// floating text) so it reads as a deliberate UI element connected into a
// network, rather than a wireframe/graph sketch next to bold hero type.
const DESKTOP_CENTER = { x: 150, y: 230, r: 24 };
const DESKTOP_NODES = [
  // hub: connects directly to MOHI
  { id: "react", label: "React", x: 285, y: 95, w: 58, hub: true },
  { id: "node", label: "Node.js", x: 320, y: 250, w: 72, hub: true },
  { id: "python", label: "Python", x: 68, y: 358, w: 66, hub: true },
  { id: "git", label: "Git", x: 55, y: 108, w: 44, hub: true },
  // branch: connects to another tech node, not directly to MOHI
  { id: "javascript", label: "JavaScript", x: 440, y: 158, w: 98, hub: false },
  { id: "express", label: "Express", x: 445, y: 322, w: 74, hub: false },
  { id: "postgres", label: "PostgreSQL", x: 365, y: 405, w: 100, hub: false },
  { id: "sql", label: "SQL", x: 240, y: 455, w: 44, hub: false },
];
const DESKTOP_VIEWBOX = "-30 45 560 500";

const COMPACT_CENTER = { x: 92, y: 150, r: 17 };
const COMPACT_NODES = [
  { id: "react", label: "React", x: 186, y: 66, w: 46, hub: true },
  { id: "node", label: "Node.js", x: 214, y: 182, w: 58, hub: true },
  { id: "python", label: "Python", x: 32, y: 236, w: 52, hub: true },
  { id: "postgres", label: "PostgreSQL", x: 164, y: 272, w: 82, hub: false },
];
const COMPACT_VIEWBOX = "-12 22 290 292";

// Peer edges: a node connecting to another node instead of straight to
// MOHI — this is what breaks the spoke pattern. Chosen to reflect real
// relationships (JS powers React/Node, Express runs on Node, Postgres is
// queried in SQL), not arbitrary lines.
const PEER_EDGES = [
  ["javascript", "react"],
  ["javascript", "node"],
  ["node", "express"],
  ["node", "postgres"],
  ["postgres", "sql"],
];
const COMPACT_PEER_EDGES = [["node", "postgres"]];

const FLOATS = ["animate-float-a", "animate-float-b", "animate-float-c"];
const IDLE_LINE = "color-mix(in srgb, var(--color-border) 85%, var(--color-accent) 15%)";

export default function TechConstellation({ compact = false }) {
  const [active, setActive] = useState(null);
  const wrapRef = useRef(null);
  const svgRef = useRef(null);
  const rafRef = useRef(null);

  // Subtle mouse parallax — direct style mutation via ref, not React
  // state, so mouse movement never triggers a re-render. Desktop only
  // (mobile has no cursor), and skipped under prefers-reduced-motion.
  useEffect(() => {
    if (compact) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!wrap || !svg) return;

    const handleMove = (e) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = wrap.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        svg.style.transform = `translate(${px * -8}px, ${py * -8}px)`;
      });
    };
    const handleLeave = () => {
      svg.style.transform = "translate(0, 0)";
    };

    window.addEventListener("mousemove", handleMove);
    wrap.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      wrap.removeEventListener("mouseleave", handleLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [compact]);

  const center = compact ? COMPACT_CENTER : DESKTOP_CENTER;
  const nodes = compact ? COMPACT_NODES : DESKTOP_NODES;
  const viewBox = compact ? COMPACT_VIEWBOX : DESKTOP_VIEWBOX;
  const peerEdges = compact ? COMPACT_PEER_EDGES : PEER_EDGES;
  const hubNodes = nodes.filter((n) => n.hub);

  const isEdgeActive = (a, b) => active !== null && (active === a || active === b);
  const isNodeActive = (id) => active === id;
  const isNodeLit = (id) => {
    if (!active) return false;
    if (id === active) return true;
    if (active === "center") return true;
    return peerEdges.some(([a, b]) => (a === active && b === id) || (b === active && a === id));
  };

  const toggle = (id) => setActive((cur) => (cur === id ? null : id));

  const pillH = compact ? 20 : 25;
  const labelSize = compact ? 10.5 : 12.5;

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full select-none">
      {/* A single, very faint ring — ambient motion only, not a structural
          "orbit" the nodes sit on (they don't touch it). */}
      <div className={`absolute inset-[10%] rounded-full border border-cyan/[0.05] ${compact ? "" : "animate-orbit-slower"}`} aria-hidden="true" />

      <svg
        ref={svgRef}
        viewBox={viewBox}
        className="absolute inset-0 h-full w-full transition-transform duration-300 ease-out"
        role="img"
        aria-label="A network diagram of Mohi's core technologies, connected around a central full-stack node"
      >
        {/* Hub edges: only the core technologies connect straight to MOHI */}
        {hubNodes.map((n, i) => {
          const lit = isEdgeActive("center", n.id) || (active && isNodeLit(n.id) && active !== "center");
          return (
            <line
              key={`hub-${n.id}`}
              x1={center.x}
              y1={center.y}
              x2={n.x}
              y2={n.y}
              stroke={lit ? "var(--color-accent)" : IDLE_LINE}
              strokeWidth={lit ? 1.6 : 1.1}
              className={active ? "" : "animate-pulse-line"}
              style={{ animationDelay: `${i * 0.5}s`, transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
              strokeOpacity={lit ? 0.65 : undefined}
            />
          );
        })}

        {/* Peer edges: tech-to-tech relationships — this is what makes it
            a network instead of a wheel; cyan when lit */}
        {peerEdges.map(([a, b], i) => {
          const na = nodes.find((n) => n.id === a) || center;
          const nb = nodes.find((n) => n.id === b);
          if (!nb) return null;
          const lit = isEdgeActive(a, b);
          return (
            <line
              key={`peer-${a}-${b}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke={lit ? "var(--color-cyan)" : IDLE_LINE}
              strokeWidth={lit ? 1.6 : 1.1}
              className={active ? "" : "animate-pulse-line"}
              style={{ animationDelay: `${i * 0.6 + 0.3}s`, transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
              strokeOpacity={lit ? 0.75 : undefined}
            />
          );
        })}

        {/* Center node: MOHI / FULL STACK — smaller than before, still the
            structural root, but not every technology reports to it directly */}
        <g
          onMouseEnter={() => setActive("center")}
          onMouseLeave={() => setActive(null)}
          onClick={() => toggle("center")}
          className="cursor-pointer"
        >
          <circle cx={center.x} cy={center.y} r={center.r} fill="var(--color-navy-800)" stroke="var(--color-accent-dim)" strokeWidth={1.4} />
          <circle
            cx={center.x}
            cy={center.y}
            r={center.r}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={active === "center" ? 1.6 : 0.9}
            style={{
              filter: `drop-shadow(0 0 ${active === "center" ? 9 : 4}px color-mix(in srgb, var(--color-accent) 70%, transparent))`,
              transition: "stroke-width 0.3s ease, filter 0.3s ease",
            }}
          />
          <text
            x={center.x}
            y={center.y - center.r * 0.12}
            textAnchor="middle"
            className="font-display"
            fill="var(--color-ink-100)"
            fontSize={compact ? 10 : 11.5}
            fontWeight={700}
          >
            MOHI
          </text>
          <text
            x={center.x}
            y={center.y + center.r * 0.55}
            textAnchor="middle"
            fill="var(--color-accent-soft)"
            fontSize={compact ? 5.5 : 6.5}
            letterSpacing={1}
          >
            FULL STACK
          </text>
        </g>

        {/* Technology nodes — glowing pill badges, not bare dots */}
        {nodes.map((n, i) => {
          const lit = isNodeLit(n.id);
          const isHovered = isNodeActive(n.id);
          const scale = isHovered ? 1.08 : 1;
          return (
            <g
              key={n.id}
              className={`cursor-pointer ${compact ? "" : FLOATS[i % FLOATS.length]}`}
              onMouseEnter={() => setActive(n.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => toggle(n.id)}
            >
              <g
                style={{
                  transform: `translate(${n.x}px, ${n.y}px) scale(${scale})`,
                  transformOrigin: `${n.x}px ${n.y}px`,
                  transformBox: "view-box",
                  transition: "transform 0.25s ease",
                }}
              >
                <rect
                  x={-n.w / 2}
                  y={-pillH / 2}
                  width={n.w}
                  height={pillH}
                  rx={pillH / 2}
                  fill={lit ? "color-mix(in srgb, var(--color-navy-700) 70%, var(--color-accent) 12%)" : "var(--color-navy-800)"}
                  stroke={lit ? "var(--color-accent)" : "var(--color-border)"}
                  strokeWidth={lit ? 1.3 : 1}
                  style={{
                    filter: lit
                      ? `drop-shadow(0 0 10px color-mix(in srgb, var(--color-accent) 55%, var(--color-cyan) 35%))`
                      : "none",
                    transition: "fill 0.25s ease, stroke 0.25s ease, filter 0.25s ease",
                  }}
                />
                <text
                  x={0}
                  y={1}
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill={lit ? "var(--color-ink-100)" : "var(--color-ink-300)"}
                  fontSize={labelSize}
                  fontWeight={lit ? 600 : 500}
                  style={{ transition: "fill 0.25s ease" }}
                >
                  {n.label}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
