import Link from "next/link";
import styles from "./Footer.module.css";

const BRAND = "FakeElec";
const PHONE = "06 52 35 37 96";
const EMAIL = "contact@exemple.fr";
const CITY = "Toulouse";
const ZONE = "Toulouse et périphérie";
const HOURS = "Lun–Sam • 8h–19h";

export default function Footer() {
  return (
    <footer className={styles.footerShell}>
      <div className={styles.footerInner}>
        <div className={styles.footerMain}>
          <div className={styles.footerBlock}>
            <div className={styles.footerBrand}>{BRAND}</div>
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
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerMeta}>
            © {new Date().getFullYear()} {BRAND} — Projet vitrine fictif.
          </div>

          <div className={styles.footerMeta}>
            Développé par{" "}
            <Link
              href="https://hugo-calmels.fr/en"
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