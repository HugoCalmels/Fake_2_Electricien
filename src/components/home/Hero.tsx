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
      <rect x="4" y="4" width="192" height="110" rx="14" className={styles.vmBody} />
      <path d="M 26 84 A 74 74 0 0 1 174 84 Z" className={styles.vmFace} />
      <path d="M 148 84 A 48 48 0 0 1 150 70" className={styles.vmRed} />
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
        x2={100 + Math.cos(needle) * 46}
        y2={84 - Math.sin(needle) * 46}
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

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Accueil">
      <div className={styles.frame} data-wire-frame="main">
        <div className={styles.panel}>
          {/* Plaque du tableau, avec ses rivets */}
          <div className={styles.plate}>
            <span className={styles.rivet} aria-hidden="true" />
            <span className={styles.plateText}>Tableau général · {SITE.brand}</span>
            <span className={styles.plateTag}>Toulouse</span>
            <span className={styles.rivet} aria-hidden="true" />
          </div>

          <div className={styles.panelBody}>
            <div className={styles.intro}>
              <p className={styles.kicker}>Électricien à {SITE.city}</p>
              <h1 className={styles.title}>
                Le courant passe,
                <br />
                chez vous aussi.
              </h1>
              <p className={styles.lead}>
                Installation, rénovation et dépannage électrique pour les particuliers et les pros.
                Un travail propre, aux normes, avec un devis clair avant de commencer.
              </p>

              <div className={styles.ctas}>
                <a className={styles.ctaPrimary} href={`tel:${SITE.phoneTel}`}>
                  Appeler le {SITE.phoneDisplay}
                </a>
                <a className={styles.ctaSecondary} href="#contact">
                  Demander un devis
                </a>
              </div>

              <ul className={styles.facts}>
                <li className={styles.fact}>
                  <strong>Devis gratuit</strong>
                  <span>réponse sous 48 h</span>
                </li>
                <li className={styles.fact}>
                  <strong>7j/7</strong>
                  <span>pour les urgences</span>
                </li>
                <li className={styles.fact}>
                  <strong>Garantie décennale</strong>
                  <span>sur tous les travaux</span>
                </li>
              </ul>
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
                    <span className={styles.breakerLabel}>
                      <span className={styles.breakerNum}>{String(i + 1).padStart(2, "0")}</span>
                      {s.label}
                    </span>
                    {/* Presse-étoupe : le câble de la section sort du tableau ici */}
                    <span data-wire-anchor={`hero-pin-${i}`} className={styles.gland} aria-hidden="true" />
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
