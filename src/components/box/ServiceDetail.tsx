import Link from "next/link";
import styles from "./Box.module.css";
import { SITE, type Service } from "@/content/site";

/**
 * Contenu d'une prestation : grande photo, texte, ce qui est compris, et les
 * boutons d'action. Utilisé sur la page de section (avec lien vers la page de la
 * prestation) et sur la page de la prestation elle-même.
 */
export default function ServiceDetail({
  service,
  href,
  eagerImage = false,
}: {
  service: Service;
  // Présent sur la page de section : mène vers la page de la prestation
  href?: string;
  eagerImage?: boolean;
}) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          loading={eagerImage ? "eager" : "lazy"}
          decoding="async"
        />
      </div>

      <div className={styles.featureText}>
        <p className={styles.featureIntro}>{service.intro}</p>

        <p className={styles.checksTitle}>Ce qui est compris</p>
        <ul className={styles.checks}>
          {service.includes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <div className={styles.ctas}>
          {href ? (
            <Link className={styles.ctaSecondary} href={href}>
              Voir la prestation →
            </Link>
          ) : null}
          <a className={styles.ctaPrimary} href={`tel:${SITE.phoneTel}`}>
            Appeler le {SITE.phoneDisplay}
          </a>
          {href ? null : (
            <Link className={styles.ctaSecondary} href="/#contact">
              Demander un devis
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
