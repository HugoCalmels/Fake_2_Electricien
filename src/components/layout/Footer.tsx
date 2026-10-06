import Link from "next/link";
import styles from "./Footer.module.css";

import Logo from "./Logo";
import { SITE } from "@/content/site";

const BRAND = SITE.brand;
const PHONE = SITE.phoneDisplay;
const EMAIL = SITE.email;
const CITY = SITE.city;
const ZONE = SITE.zone;
const HOURS = SITE.hours;

export default function Footer() {
  return (
    <footer className={styles.footerShell}>
      <div className={styles.footerInner}>
        <div className={styles.footerMain}>
          <div className={styles.footerBlock}>
            <div className={styles.footerBrand}>
              <Logo className={styles.footerLogo} />
              {BRAND}
            </div>
            <div className={styles.footerKicker}>
              Électricité générale · rénovation · dépannage
            </div>
          </div>

          <div className={styles.footerBlock}>
            <div className={styles.footerLabel}>Contact</div>
            <div className={styles.footerLine}>{PHONE}</div>
            <div className={styles.footerLine}>{EMAIL}</div>
          </div>

          <div className={styles.footerBlock}>
            <div className={styles.footerLabel}>Zone</div>
            <div className={styles.footerLine}>{ZONE}</div>
            <div className={styles.footerLine}>{CITY}</div>
          </div>

          <div className={styles.footerBlock}>
            <div className={styles.footerLabel}>Horaires</div>
            <div className={styles.footerLine}>{HOURS}</div>
            <div className={styles.footerLine}>{SITE.urgentHours}</div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            © {new Date().getFullYear()} {BRAND} — Projet vitrine fictif ·{" "}
            <Link href="/mentions-legales" className={styles.footerDevLink}>
              Mentions légales
            </Link>
          </div>

          <div className={styles.footerMeta}>
            Développé par{" "}
            <Link
              href="https://hugo-calmels.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerDevLink}
            >
              Hugo Calmels
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}