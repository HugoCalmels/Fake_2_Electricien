"use client";

import { useEffect, useId, useRef } from "react";
import styles from "./WireNetwork.module.css";

type Target = {
  key: string;
  wireIndex: number;
  affectsStop?: boolean;
  trunkStart?: boolean;
};

// Un câble = 3 tracés superposés : contour encre, gaine colorée, reflet
type CablePaths = {
  outline: SVGPathElement | null;
  sheath: SVGPathElement | null;
  shine: SVGPathElement | null;
};

const CLIP_COUNT = 14; // colliers pré-créés, repositionnés à chaque défilement
const CLIP_EVERY = 170; // espacement des colliers, en pixels de page

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

function snap(v: number) {
  if (typeof window === "undefined") return v;
  const dpr = window.devicePixelRatio || 1;
  return Math.round(v * dpr) / dpr;
}

/**
 * Tracé d'un câble : sort du tableau (xStart, y1), file à droite jusqu'à sa
 * colonne x, descend jusqu'à y2, puis repart à gauche jusqu'à sa section (xEnd).
 * Les deux coudes sont arrondis, comme un vrai câble qu'on plie.
 */
function cablePath(xStart: number, y1: number, x: number, y2: number, xEnd: number, bend: number, dx = 0, dy = 0) {
  const r1 = Math.max(0, Math.min(bend, (y2 - y1) / 2, x - xStart));
  const r2 = Math.max(0, Math.min(bend, (y2 - y1) / 2, x - xEnd));
  const X = (v: number) => v + dx;
  const Y = (v: number) => v + dy;
  return [
    `M ${X(xStart)} ${Y(y1)}`,
    `L ${X(x - r1)} ${Y(y1)}`,
    `Q ${X(x)} ${Y(y1)} ${X(x)} ${Y(y1 + r1)}`,
    `L ${X(x)} ${Y(y2 - r2)}`,
    `Q ${X(x)} ${Y(y2)} ${X(x - r2)} ${Y(y2)}`,
    `L ${X(xEnd)} ${Y(y2)}`,
  ].join(" ");
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
  const clipRectRef = useRef<SVGRectElement | null>(null);
  const cableRefs = useRef<CablePaths[]>([]);
  const plugRefs = useRef<Array<SVGGElement | null>>([]);
  const clampRefs = useRef<Array<SVGGElement | null>>([]);
  const rafRef = useRef<number>(0);

  // useId : identique côté serveur et client (Math.random cassait l'hydratation)
  const clipId = `wire-clip-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const GAP = 18;
    const RIGHT_INSET = 14;
    const BEND = 16;
    const OFF = 60; // marge hors écran : les bouts invisibles ne traînent pas sur les bords

    const measureAndDraw = () => {
      const vpW = window.innerWidth;
      const vpH = window.innerHeight;

      clipRectRef.current?.setAttribute("width", String(vpW));
      clipRectRef.current?.setAttribute("height", String(vpH));

      const frameEl = frameSelector ? (document.querySelector(frameSelector) as HTMLElement | null) : null;
      const baseRight = frameEl?.getBoundingClientRect().right ?? vpW;
      const x0 = baseRight - RIGHT_INSET;
      const xs = Array.from({ length: wiresCount }, (_, i) => snap(x0 - i * GAP));

      const rect = (key: string) =>
        (document.querySelector(`[data-wire-anchor="${key}"]`) as HTMLElement | null)?.getBoundingClientRect();

      const runs: Array<{ top: number; bottom: number } | null> = [];

      for (let i = 0; i < wiresCount; i += 1) {
        const from = targets.find((t) => t.wireIndex === i && t.trunkStart);
        const to = targets.find((t) => t.wireIndex === i && t.affectsStop !== false);
        const a = from && rect(from.key);
        const b = to && rect(to.key);
        const cable = cableRefs.current[i];
        const plug = plugRefs.current[i];
        if (!a || !b || !cable) {
          runs[i] = null;
          continue;
        }

        const y1 = snap(clamp(a.top + a.height / 2, -OFF, vpH + OFF));
        const y2 = snap(clamp(b.top + b.height / 2, -OFF, vpH + OFF));
        const x = xs[i];
        const xStart = snap(a.right);
        const xEnd = snap(b.right + 14); // laisse la place à la fiche de raccordement

        cable.outline?.setAttribute("d", cablePath(xStart, y1, x, y2, xEnd, BEND));
        cable.sheath?.setAttribute("d", cablePath(xStart, y1, x, y2, xEnd, BEND));
        cable.shine?.setAttribute("d", cablePath(xStart, y1, x, y2, xEnd, BEND, -1.6, -1.6));
        plug?.setAttribute("transform", `translate(${snap(b.right)} ${y2})`);

        runs[i] = { top: y1 + BEND, bottom: y2 - BEND };
      }

      // Colliers vissés sur le faisceau vertical, fixes par rapport à la page
      const offset = window.scrollY % CLIP_EVERY;
      for (let k = 0; k < CLIP_COUNT; k += 1) {
        const g = clampRefs.current[k];
        if (!g) continue;
        const y = snap(k * CLIP_EVERY - offset + CLIP_EVERY / 2);
        const active = runs
          .map((r, i) => (r && y > r.top + 10 && y < r.bottom - 10 ? i : -1))
          .filter((i) => i >= 0);
        if (y > vpH + 20 || active.length === 0) {
          g.style.display = "none";
          continue;
        }
        const left = xs[Math.max(...active)] - 9;
        const right = xs[Math.min(...active)] + 9;
        g.style.display = "";
        g.setAttribute("transform", `translate(${left} ${y})`);
        g.querySelector("rect")?.setAttribute("width", String(right - left));
        g.querySelectorAll("circle")[1]?.setAttribute("cx", String(right - left - 5));
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

  const store = (i: number) => (el: SVGPathElement | null, part: keyof CablePaths) => {
    cableRefs.current[i] ??= { outline: null, sheath: null, shine: null };
    cableRefs.current[i][part] = el;
  };

  // Dessinés du dernier au premier : le câble 0 passe par-dessus les autres
  const order = Array.from({ length: wiresCount }, (_, i) => wiresCount - 1 - i);

  return (
    <svg className={styles.svg} width="100%" height="100%" aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <rect ref={clipRectRef} x="0" y="0" width="0" height="0" />
        </clipPath>
      </defs>

      <g clipPath={`url(#${clipId})`}>
        {order.map((i) => (
          <g key={`cable-${i}`} className={styles[`g${i}`]}>
            <Cable wireIndex={i} store={store(i)} />
            {/* Fiche de raccordement, à l'arrivée sur la section */}
            <g
              ref={(el) => {
                plugRefs.current[i] = el;
              }}
              className={styles.plug}
            >
              <rect x="0" y="-9" width="16" height="18" />
              <line x1="5" y1="-4" x2="5" y2="4" />
              <line x1="10" y1="-4" x2="10" y2="4" />
            </g>
          </g>
        ))}

        {/* Colliers qui tiennent le faisceau contre le mur */}
        {Array.from({ length: CLIP_COUNT }, (_, k) => (
          <g
            key={`clamp-${k}`}
            ref={(el) => {
              clampRefs.current[k] = el;
            }}
            className={styles.clamp}
            style={{ display: "none" }}
          >
            <rect x="0" y="-6" width="0" height="12" />
            <circle cx="5" cy="0" r="2.2" />
            <circle cx="0" cy="0" r="2.2" />
          </g>
        ))}
      </g>
    </svg>
  );
}
