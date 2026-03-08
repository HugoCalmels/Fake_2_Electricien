import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Accueil">
      <div className={styles.frame} data-wire-frame="main">
        <div className={styles.heroGrid}>
          <div className={styles.heroBox}>
            <span data-wire-anchor="hero-pin-0" className={`${styles.heroPin} ${styles.pin0}`} />
            <span data-wire-anchor="hero-pin-1" className={`${styles.heroPin} ${styles.pin1}`} />
            <span data-wire-anchor="hero-pin-2" className={`${styles.heroPin} ${styles.pin2}`} />
            <span data-wire-anchor="hero-pin-3" className={`${styles.heroPin} ${styles.pin3}`} />
            <span data-wire-anchor="hero-pin-4" className={`${styles.heroPin} ${styles.pin4}`} />

            <div className={styles.heroContent}>
              <h1 className={styles.brand}>FakeElec</h1>

              <div className={styles.subTitle}>Électricien à Toulouse</div>

              <p className={styles.lead}>
                Installations, rénovation et dépannage électrique pour particuliers
                et professionnels.
              </p>

              <div className={styles.facts}>
                <div className={styles.fact}>
                  <span className={styles.factValue}>4 ans</span>
                  <span className={styles.factLabel}>d’expérience</span>
                </div>

                <div className={styles.fact}>
                  <span className={styles.factValue}>7j/7</span>
                  <span className={styles.factLabel}>selon urgence</span>
                </div>

                <div className={styles.fact}>
                  <span className={styles.factValue}>Toulouse</span>
                  <span className={styles.factLabel}>et alentours</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.heroRightVoid} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}