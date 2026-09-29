"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./WireNetwork.module.css";

type Target = {
  key: string;
  wireIndex: number;
  affectsStop?: boolean;
  trunkStart?: boolean;
};

// Un câble = 3 traits superposés : contour encre, gaine colorée, reflet
type CablePaths = {
  outline: SVGPathElement | null;
  sheath: SVGPathElement | null;
  shine: SVGPathElement | null;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function snap(v: number) {
  if (typeof window === "undefined") return v;
  const dpr = window.devicePixelRatio || 1;
  return Math.round(v * dpr) / dpr;
}

function setCable(c: CablePaths | undefined, d: string, shine: string) {
  if (!c) return;
  c.outline?.setAttribute("d", d);
  c.sheath?.setAttribute("d", d);
  c.shine?.setAttribute("d", shine);
}

function Cable({
  wireIndex,
  store,
}: {
  wireIndex: number;
  store: (el: SVGPathElement | null, part: keyof CablePaths) => void;
}) {
  return (
    <>
      <path ref={(el) => store(el, "outline")} className={styles.outline} />
      <path ref={(el) => store(el, "sheath")} className={`${styles.sheath} ${styles[`c${wireIndex}`]}`} />
      <path ref={(el) => store(el, "shine")} className={styles.shine} />
    </>
  );
}

export default function WireNetwork({
  targets,
  wiresCount = 5,
  frameSelector,
}: {
  targets: Target[];
  wiresCount?: number;
  frameSelector?: string;
}) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const clipRectRef = useRef<SVGRectElement | null>(null);

  const trunkRefs = useRef<CablePaths[]>([]);
  const branchRefs = useRef<Record<string, CablePaths>>({});
  const terminalRefs = useRef<Record<string, SVGGElement | null>>({});

  const rafRef = useRef<number>(0);

  // useId : identique côté serveur et client (Math.random cassait l'hydratation)
  const clipId = `wire-clip-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const GAP = 18;
    const RIGHT_INSET = 14;
    const SHINE = 2; // décalage du reflet vers le haut / la gauche

    const measureAndDraw = () => {
      const vpW = window.innerWidth;
      const vpH = window.innerHeight;

      if (clipRectRef.current) {
        clipRectRef.current.setAttribute("width", String(vpW));
        clipRectRef.current.setAttribute("height", String(vpH));
      }

      const frameEl = frameSelector
        ? (document.querySelector(frameSelector) as HTMLElement | null)
        : null;

      const frameRect = frameEl?.getBoundingClientRect() ?? null;
      const baseRight = frameRect ? frameRect.right : vpW;
      const x0 = baseRight - RIGHT_INSET;
      const xs = Array.from({ length: wiresCount }, (_, i) => snap(x0 - i * GAP));

      const rects: Record<string, DOMRect> = {};
      for (const t of targets) {
        const el = document.querySelector(`[data-wire-anchor="${t.key}"]`) as HTMLElement | null;
        if (!el) continue;
        rects[t.key] = el.getBoundingClientRect();
      }

      const startY = Array(wiresCount).fill(0);
      for (const t of targets) {
        if (!t.trunkStart) continue;
        const r = rects[t.key];
        if (!r) continue;
        startY[t.wireIndex] = snap(clamp(r.top + r.height * 0.5, 0, vpH));
      }

      const stopY = Array(wiresCount).fill(Infinity);
      for (const t of targets) {
        if (t.affectsStop === false) continue;
        const r = rects[t.key];
        if (!r) continue;
        const y = snap(clamp(r.top + r.height * 0.5, 0, vpH));
        stopY[t.wireIndex] = Math.min(stopY[t.wireIndex], y);
      }

      for (let i = 0; i < wiresCount; i += 1) {
        const y1 = startY[i] ?? 0;
        const y2 = Number.isFinite(stopY[i]) ? stopY[i] : vpH + 20;
        const yTop = snap(Math.min(y1, y2));
        const yBot = snap(Math.max(y1, y2));
        const x = xs[i];

        setCable(trunkRefs.current[i], `M ${x} ${yTop} L ${x} ${yBot}`, `M ${x - SHINE} ${yTop} L ${x - SHINE} ${yBot}`);
      }

      for (const t of targets) {
        const r = rects[t.key];
        const terminal = terminalRefs.current[t.key];
        if (!r || !terminal) continue;

        const jy = snap(clamp(r.top + r.height * 0.5, 0, vpH));
        const jx = xs[t.wireIndex];
        const xTo = snap(r.right);

        setCable(branchRefs.current[t.key], `M ${jx} ${jy} L ${xTo} ${jy}`, `M ${jx} ${jy - SHINE} L ${xTo} ${jy - SHINE}`);
        terminal.setAttribute("transform", `translate(${jx} ${jy})`);
      }
    };

    const scheduleDraw = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measureAndDraw);
    };

    scheduleDraw();
    // Les polices changent la hauteur des blocs une fois chargées
    document.fonts?.ready.then(scheduleDraw);

    window.addEventListener("scroll", scheduleDraw, { passive: true });
    window.addEventListener("resize", scheduleDraw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", scheduleDraw);
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [targets, wiresCount, frameSelector]);

  const storeTrunk = (i: number) => (el: SVGPathElement | null, part: keyof CablePaths) => {
    trunkRefs.current[i] ??= { outline: null, sheath: null, shine: null };
    trunkRefs.current[i][part] = el;
  };
  const storeBranch = (key: string) => (el: SVGPathElement | null, part: keyof CablePaths) => {
    branchRefs.current[key] ??= { outline: null, sheath: null, shine: null };
    branchRefs.current[key][part] = el;
  };

  // Dessinés du dernier au premier câble : le câble 0 passe par-dessus les autres
  const order = Array.from({ length: wiresCount }, (_, i) => wiresCount - 1 - i);

  return (
    <svg ref={svgRef} className={styles.svg} width="100%" height="100%" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect ref={clipRectRef} x="0" y="0" width="0" height="0" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {order.map((i) => (
          <g key={`cable-${i}`}>
            <Cable wireIndex={i} store={storeTrunk(i)} />

            {targets
              .filter((t) => t.wireIndex === i)
              .map((t) => (
                <g key={`branch-${t.key}`}>
                  <Cable wireIndex={i} store={storeBranch(t.key)} />
                  {/* Borne de raccordement à la jonction */}
                  <g
                    ref={(el) => {
                      terminalRefs.current[t.key] = el;
                    }}
                    className={styles.terminal}
                  >
                    <rect x="-9" y="-9" width="18" height="18" rx="4" />
                    <circle cx="0" cy="0" r="3.2" />
                    <line x1="-2" y1="-2" x2="2" y2="2" />
                  </g>
                </g>
              ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
