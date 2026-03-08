"use client";

import { useEffect, useMemo, useRef } from "react";
import styles from "./WireNetwork.module.css";

type Target = {
  key: string;
  wireIndex: number;
  affectsStop?: boolean;
  trunkStart?: boolean;
};

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function donutPath(cx: number, cy: number, rOuter: number, rInner: number) {
  return [
    `M ${cx + rOuter} ${cy}`,
    `A ${rOuter} ${rOuter} 0 1 0 ${cx - rOuter} ${cy}`,
    `A ${rOuter} ${rOuter} 0 1 0 ${cx + rOuter} ${cy}`,
    `Z`,
    `M ${cx + rInner} ${cy}`,
    `A ${rInner} ${rInner} 0 1 1 ${cx - rInner} ${cy}`,
    `A ${rInner} ${rInner} 0 1 1 ${cx + rInner} ${cy}`,
    `Z`,
  ].join(" ");
}

function snap(v: number) {
  if (typeof window === "undefined") return v;
  const dpr = window.devicePixelRatio || 1;
  return Math.round(v * dpr) / dpr;
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

  const trunkRefs = useRef<Array<SVGPathElement | null>>([]);
  const branchRefs = useRef<Record<string, SVGPathElement | null>>({});
  const nodeCoverRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const nodeRingRefs = useRef<Record<string, SVGPathElement | null>>({});

  const rafRef = useRef<number>(0);

  const clipId = useMemo(() => `wire-clip-${Math.random().toString(16).slice(2)}`, []);

  useEffect(() => {
    const rOuter = 5.4;
    const rInner = 4.1;
    const coverR = 6.2;
    const cut = 6.0;
    const EPS = 0.35;
    const GAP = 12;
    const RIGHT_INSET = 10;

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
        const y = snap(clamp(r.top + r.height * 0.55, 0, vpH));
        stopY[t.wireIndex] = Math.min(stopY[t.wireIndex], y);
      }

      for (let i = 0; i < wiresCount; i += 1) {
        const y1 = startY[i] ?? 0;
        const y2 = Number.isFinite(stopY[i]) ? stopY[i] : vpH;
        const yTop = snap(Math.min(y1, y2));
        const yBot = snap(Math.max(y1, y2));
        const x = xs[i];

        const trunk = trunkRefs.current[i];
        if (trunk) {
          trunk.setAttribute("d", `M ${x} ${yTop} L ${x} ${yBot}`);
        }
      }

      for (const t of targets) {
        const r = rects[t.key];
        const branch = branchRefs.current[t.key];
        const nodeCover = nodeCoverRefs.current[t.key];
        const nodeRing = nodeRingRefs.current[t.key];

        if (!r || !branch || !nodeCover || !nodeRing) continue;

        const jy = snap(clamp(r.top + r.height * 0.5, 0, vpH));
        const jx = xs[t.wireIndex];
        const xTo = snap(r.right);

        const dir = xTo >= jx ? 1 : -1;
        const xStart = snap(jx + dir * (cut + EPS));

        branch.setAttribute("d", `M ${xStart} ${jy} L ${xTo} ${jy}`);
        nodeCover.setAttribute("cx", String(jx));
        nodeCover.setAttribute("cy", String(jy));
        nodeCover.setAttribute("r", String(coverR));
        nodeRing.setAttribute("d", donutPath(jx, jy, rOuter, rInner));
      }
    };

    const scheduleDraw = () => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(measureAndDraw);
    };

    scheduleDraw();

    window.addEventListener("scroll", scheduleDraw, { passive: true });
    window.addEventListener("resize", scheduleDraw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", scheduleDraw);
      window.removeEventListener("resize", scheduleDraw);
    };
  }, [targets, wiresCount, frameSelector]);

  return (
    <svg ref={svgRef} className={styles.svg} width="100%" height="100%" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect ref={clipRectRef} x="0" y="0" width="0" height="0" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {Array.from({ length: wiresCount }, (_, i) => (
          <path
            key={`trunk-${i}`}
            ref={(el) => {
              trunkRefs.current[i] = el;
            }}
            className={`${styles.wire} ${styles[`w${i}`]}`}
          />
        ))}

        {targets.map((t) => (
          <g key={`g-${t.key}`}>
            <path
              ref={(el) => {
                branchRefs.current[t.key] = el;
              }}
              className={`${styles.wire} ${styles[`w${t.wireIndex}`]}`}
            />

            <circle
              ref={(el) => {
                nodeCoverRefs.current[t.key] = el;
              }}
              className={styles.nodeCover}
            />

            <path
              ref={(el) => {
                nodeRingRefs.current[t.key] = el;
              }}
              fillRule="evenodd"
              className={styles.nodeRing}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}