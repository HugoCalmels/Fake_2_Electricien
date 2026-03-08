"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

type Item = { href: string; label: string };

const ITEMS: Item[] = [
  { href: "#installations", label: "Installations" },
  { href: "#renovations", label: "Rénovation" },
  { href: "#depannage", label: "Dépannage" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#contact", label: "Contact" },
];

const BRAND = "FakeElec";
const CITY = "Toulouse";
const PHONE_DISPLAY = "06 52 35 37 96";
const PHONE_TEL = "0652353796";

const NAV_HEIGHT = 72;
const SCROLL_OFFSET = NAV_HEIGHT + 18;
const MOBILE_BREAKPOINT = 980;

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(targetY: number, duration = 650, onDone?: () => void) {
  const startY = window.scrollY;
  const delta = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);

    window.scrollTo(0, startY + delta * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      onDone?.();
    }
  }

  requestAnimationFrame(step);
}

export default function Navbar() {
  const [activeHref, setActiveHref] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const isProgrammaticScrollRef = useRef(false);
  const releaseTimerRef = useRef<number | null>(null);
  const tickingRef = useRef(false);

  useEffect(() => {
    const syncActiveSection = () => {
      if (isProgrammaticScrollRef.current) return;

      const scrollY = window.scrollY;

      if (scrollY < 120) {
        if (activeHref !== "") {
          setActiveHref("");
        }
        if (window.location.hash) {
          history.replaceState(null, "", window.location.pathname);
        }
        return;
      }

      let currentHref = "";

      for (const item of ITEMS) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.getBoundingClientRect().top + window.scrollY;

        if (scrollY >= top - SCROLL_OFFSET - 8) {
          currentHref = item.href;
        }
      }

      if (currentHref !== activeHref) {
        setActiveHref(currentHref);

        if (currentHref && window.location.hash !== currentHref) {
          history.replaceState(null, "", currentHref);
        }

        if (!currentHref && window.location.hash) {
          history.replaceState(null, "", window.location.pathname);
        }
      }
    };

    const onScroll = () => {
      if (tickingRef.current) return;

      tickingRef.current = true;

      requestAnimationFrame(() => {
        syncActiveSection();
        tickingRef.current = false;
      });
    };

    const onResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
      syncActiveSection();
    };

    const onHashChange = () => {
      if (isProgrammaticScrollRef.current) return;
      setActiveHref(window.location.hash || "");
    };

    syncActiveSection();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [activeHref]);

  useEffect(() => {
    return () => {
      if (releaseTimerRef.current) {
        window.clearTimeout(releaseTimerRef.current);
      }
    };
  }, []);

  const releaseProgrammaticLock = () => {
    if (releaseTimerRef.current) {
      window.clearTimeout(releaseTimerRef.current);
    }

    releaseTimerRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
    }, 40);
  };

  const closeMenuIfMobile = () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      setMenuOpen(false);
    }
  };

  const handleAnchorClick =
    (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();

      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const targetY = window.scrollY + rect.top - SCROLL_OFFSET;

      isProgrammaticScrollRef.current = true;
      setActiveHref(href);
      history.replaceState(null, "", href);
      closeMenuIfMobile();

      smoothScrollTo(Math.max(targetY, 0), 650, releaseProgrammaticLock);
    };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname !== "/") return;

    e.preventDefault();

    isProgrammaticScrollRef.current = true;
    setActiveHref("");
    history.replaceState(null, "", window.location.pathname);
    closeMenuIfMobile();

    smoothScrollTo(0, 650, releaseProgrammaticLock);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link
          href="/"
          className={styles.brand}
          aria-label={`${BRAND} - accueil`}
          onClick={handleBrandClick}
        >
          <span className={styles.brandName}>{BRAND}</span>
          <span className={styles.brandCity}>{CITY}</span>
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>

        <nav
          id="primary-navigation"
          className={`${styles.navWrap} ${menuOpen ? styles.navWrapOpen : ""}`}
          aria-label="Navigation principale"
        >
          <ul className={styles.nav}>
            {ITEMS.map((it) => {
              const active = activeHref === it.href;

              return (
                <li key={it.href} className={styles.navItem}>
                  <a
                    href={it.href}
                    onClick={handleAnchorClick(it.href)}
                    className={active ? styles.linkActive : styles.link}
                    aria-current={active ? "page" : undefined}
                  >
                    {it.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            className={styles.phoneMobile}
            href={`tel:${PHONE_TEL}`}
            aria-label={`Appeler le ${PHONE_DISPLAY}`}
            onClick={closeMenuIfMobile}
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        <a
          className={styles.phone}
          href={`tel:${PHONE_TEL}`}
          aria-label={`Appeler le ${PHONE_DISPLAY}`}
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}