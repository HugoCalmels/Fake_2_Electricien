import Link from "next/link";
import styles from "./Box.module.css";

/**
 * Une section = un sous-boîtier électrique, dans le même langage que le coffret
 * d'en-tête : tôle rivetée de la couleur de son câble, étiquette Dymo, et un
 * presse-étoupe sur la paroi par lequel entre le câble qui l'alimente.
 */
export default function SectionBox({
  id,
  label,
  colorIndex,
  tagline,
  href,
  hrefLabel = "Voir tout",
  wired = true,
  last = false,
  headingLevel = 2,
  children,
}: {
  id: string;
  label: string;
  colorIndex: number;
  tagline?: string;
  // Lien vers la page dédiée (titre cliquable + « Voir tout »)
  href?: string;
  hrefLabel?: string;
  // Sans câble (pages de prestation) : pas de presse-étoupe
  wired?: boolean;
  last?: boolean;
  headingLevel?: 1 | 2;
  children: React.ReactNode;
}) {
  const tone = styles[`t${colorIndex % 5}`];
  const Heading = headingLevel === 1 ? "h1" : "h2";

  return (
    <section id={id} className={last ? styles.sectionLast : styles.section}>
      <div className={styles.frame}>
        <div className={`${styles.box} ${tone} ${wired ? "" : styles.boxWide}`}>
          <span className={`${styles.rivet} ${styles.rivetTl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetTr}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBr}`} aria-hidden="true" />

          <header className={styles.head}>
            <Heading className={`${styles.sectionTitle} ${tone}`}>
              <span className={styles.sectionLed} aria-hidden="true" />
              {href ? (
                <Link href={href} className={styles.titleLink}>
                  {label}
                </Link>
              ) : (
                label
              )}
            </Heading>
            {tagline ? <p className={styles.tagline}>{tagline}</p> : null}
            {href ? (
              <Link href={href} className={styles.more}>
                {hrefLabel} →
              </Link>
            ) : null}
            {wired ? (
              // Presse-étoupe : le câble de la section entre dans le boîtier ici
              <span data-wire-anchor={id} className={styles.gland} aria-hidden="true" />
            ) : null}
          </header>

          {children}
        </div>
      </div>
    </section>
  );
}
