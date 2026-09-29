import styles from "./Hero.module.css";
import { SECTIONS, SITE } from "@/content/site";

// Écran de terminal à phosphore vert, en tête du coffret
const TERMINAL_LINES = [
  ["Expérience", "4 ans"],
  ["Urgences", "7j/7"],
  ["Zone", "Toulouse +30 km"],
  ["Devis", "Gratuit"],
];

function Terminal() {
  return (
    <div className={styles.terminal}>
      <div className={styles.screen}>
        <p className={styles.termHead}>FakeElec termlink</p>
        <ul className={styles.termList}>
          {TERMINAL_LINES.map(([k, v]) => (
            <li key={k}>
              <span>&gt; {k}</span>
              <span className={styles.termDots} aria-hidden="true" />
              <span>{v}</span>
            </li>
          ))}
        </ul>
        <p className={styles.termStatus}>
          &gt; En service<span className={styles.cursor} aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Accueil">
      <div className={styles.frame} data-wire-frame="main">
        <div className={styles.panel}>
          {/* Notice collée sur le coffret */}
          <div className={styles.intro}>
            <h1 className={styles.title}>{SITE.brand}</h1>
            <p className={styles.dymo}>Électricien à {SITE.city}</p>
            <p className={styles.lead}>
              Installations, rénovation et dépannage électrique pour particuliers et professionnels.
              Travaux aux normes NF C 15-100.
            </p>

            <div className={styles.ctas}>
              <a className={styles.ctaPrimary} href={`tel:${SITE.phoneTel}`}>
                Appeler le {SITE.phoneDisplay}
              </a>
              <a className={styles.ctaSecondary} href="#contact">
                Demander un devis
              </a>
            </div>
          </div>

          {/* Le tableau : l'écran, puis un disjoncteur par section */}
          <div className={styles.board}>
            <Terminal />

            <nav className={styles.breakers} aria-label="Sections du site">
              {SECTIONS.map((s, i) => (
                <a key={s.id} href={`#${s.id}`} className={`${styles.breaker} ${styles[`b${i}`]}`}>
                  <span className={styles.switch} aria-hidden="true">
                    <span className={styles.lever} />
                  </span>
                  <span className={styles.breakerLabel}>{s.label}</span>
                  {/* Presse-étoupe : le câble de la section sort du coffret ici */}
                  <span data-wire-anchor={`hero-pin-${i}`} className={styles.gland} aria-hidden="true" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
