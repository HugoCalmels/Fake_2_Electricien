import type { Metadata } from "next";
import Link from "next/link";
import boxStyles from "@/components/box/Box.module.css";
import articleStyles from "@/components/box/Article.module.css";
import heroStyles from "@/components/home/Hero.module.css";
import { CATEGORIES, SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `Page introuvable · ${SITE.brand}`,
};

// Page 404 : même habillage que les pages de lecture
export default function NotFound() {
  return (
    <>
      <nav className={boxStyles.breadcrumb} aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li aria-current="page">Page introuvable</li>
        </ol>
      </nav>

      <div className={`${boxStyles.page} ${boxStyles.t4}`}>
        <header className={boxStyles.plainHead}>
          <h1 className={`${boxStyles.sectionTitle} ${boxStyles.t4}`}>
            <span className={boxStyles.sectionLed} aria-hidden="true" />
            Erreur 404
          </h1>
          <p className={boxStyles.tagline}>Cette page n’existe pas ou a été déplacée.</p>
        </header>

        <div className={`${articleStyles.article} ${boxStyles.accent}`}>
          <h2 style={{ marginTop: 0 }}>Plus de courant sur cette adresse</h2>
          <p className={articleStyles.lead}>
            Le lien est peut-être erroné ou la page n’existe plus. Repartez de l’accueil ou choisissez une rubrique :
          </p>

          <ul className={articleStyles.bullets}>
            {CATEGORIES.map((c) => (
              <li key={c.id}>
                <Link href={`/${c.id}`}>{c.label}</Link>
              </li>
            ))}
          </ul>

          <p style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <Link href="/" className={heroStyles.ctaPrimary}>
              Retour à l’accueil
            </Link>
            <a href={`tel:${SITE.phoneTel}`} className={heroStyles.ctaSecondary}>
              Appeler le {SITE.phoneDisplay}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
