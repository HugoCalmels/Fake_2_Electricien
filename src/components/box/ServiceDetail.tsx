import Link from "next/link";
import styles from "./Box.module.css";
import { SITE, type Service } from "@/content/site";

// Contenu d'une prestation : grande photo, texte, ce qui est compris, boutons d'action
export default function ServiceDetail({ service }: { service: Service }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureMedia}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          loading="eager"
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
          <a className={styles.ctaPrimary} href={`tel:${SITE.phoneTel}`}>
            Appeler le {SITE.phoneDisplay}
          </a>
          <Link className={styles.ctaSecondary} href="/#contact">
            Demander un devis
          </Link>
        </div>
      </div>
    </div>
  );
}
