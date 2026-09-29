import styles from "./Hero.module.css";
import { SECTIONS, SITE } from "@/content/site";

// Voltmètre à aiguille : fait comprendre au premier coup d'œil que le tableau est la source de courant
function Voltmeter() {
  const ticks = Array.from({ length: 11 }, (_, i) => {
    const a = Math.PI - (i / 10) * Math.PI;
    const r1 = i % 5 === 0 ? 50 : 55;
    return {
      x1: 100 + Math.cos(a) * r1,
      y1: 84 - Math.sin(a) * r1,
      x2: 100 + Math.cos(a) * 62,
      y2: 84 - Math.sin(a) * 62,
    };
  });
  // Aiguille sur 230 V (échelle 0–250 V)
  const needle = Math.PI - (230 / 250) * Math.PI;

  return (
    <svg className={styles.voltmeter} viewBox="0 0 200 118" role="img" aria-label="Voltmètre : 230 volts">
      <rect x="4" y="4" width="192" height="110" rx="4" className={styles.vmBody} />
      <circle cx="14" cy="14" r="3" className={styles.vmScrew} />
      <circle cx="186" cy="14" r="3" className={styles.vmScrew} />
      <path d="M 26 84 A 74 74 0 0 1 174 84 Z" className={styles.vmFace} />
      {ticks.map((t, i) => (
        <line key={i} x1={t.x1} y1={t.y1} x2={t.x2} y2={t.y2} className={styles.vmTick} />
      ))}
      <text x="36" y="80" className={styles.vmNum}>0</text>
      <text x="100" y="42" className={styles.vmNum} textAnchor="middle">125</text>
      <text x="164" y="80" className={styles.vmNum} textAnchor="end">250</text>
      <text x="100" y="72" className={styles.vmUnit} textAnchor="middle">VOLTS</text>
      <line
        x1="100"
        y1="84"
        x2={100 + Math.cos(needle) * 40}
        y2={84 - Math.sin(needle) * 40}
        className={styles.vmNeedle}
      />
      <circle cx="100" cy="84" r="6" className={styles.vmPivot} />
      <rect x="4" y="94" width="192" height="20" className={styles.vmBase} />
      <text x="100" y="108" className={styles.vmBaseText} textAnchor="middle">
        230 V ~ 50 Hz
      </text>
    </svg>
  );
}

// Écran de terminal à phosphore vert, façon vieux terminal industriel
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
        <p className={styles.termHead}>FAKEELEC INDUSTRIES (TM) TERMLINK</p>
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
          &gt; Statut : en service<span className={styles.cursor} aria-hidden="true" />
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
          {/* Rivets aux quatre coins du coffret */}
          <span className={`${styles.rivet} ${styles.rivetTl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetTr}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBr}`} aria-hidden="true" />

          <div className={styles.panelBody}>
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

              <Terminal />
            </div>

            {/* Le tableau : un disjoncteur par section, chacun alimente la sienne */}
            <div className={styles.board}>
              <Voltmeter />

              <nav className={styles.breakers} aria-label="Sections du site">
                {SECTIONS.map((s, i) => (
                  <a key={s.id} href={`#${s.id}`} className={`${styles.breaker} ${styles[`b${i}`]}`}>
                    <span className={styles.switch} aria-hidden="true">
                      <span className={styles.lever} />
                    </span>
                    <span className={styles.breakerLabel}>{s.label}</span>
                    {/* Presse-étoupe : le câble de la section sort du tableau ici */}
                    <span data-wire-anchor={`hero-pin-${i}`} className={styles.gland} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bande de signalisation en bas du coffret */}
          <div className={styles.hazard}>
            <span className={styles.hazardSign}>
              <span aria-hidden="true">⚡</span> Danger · Haute tension
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
