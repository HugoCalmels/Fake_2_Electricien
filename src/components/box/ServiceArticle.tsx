import Link from "next/link";
import styles from "./Article.module.css";
import boxStyles from "./Box.module.css";
import { SITE, type Category, type Service } from "@/content/site";

/**
 * Page d'une prestation : un article à lire (texte, situations, déroulé, FAQ)
 * et, à côté, une plaque signalétique façon matériel électrique.
 * Les réalisations utilisent le même gabarit avec des intitulés adaptés.
 */
export default function ServiceArticle({ category, service }: { category: Category; service: Service }) {
  const isProject = category.id === "realisations";
  const place = service.title.split("·")[1]?.trim();

  const plate: [string, string][] = isProject
    ? [
        ["Durée du chantier", service.duration],
        ["Budget", service.price],
        ["Lieu", place ?? SITE.city],
      ]
    : [
        ["Durée", service.duration],
        ["Prix indicatif", service.price],
        ["Garantie", "Décennale"],
        ["Zone", SITE.zone],
      ];

  return (
    <div className={styles.layout}>
      <article className={`${styles.article} ${boxStyles.accent}`}>
        <div className={styles.media}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={service.image} alt={service.title} />
        </div>

        <h2>{isProject ? "Le projet" : "En bref"}</h2>
        <p className={styles.lead}>{service.intro}</p>

        <h2>{isProject ? "Ce que voulait le client" : "Quand nous appeler"}</h2>
        <ul className={styles.bullets}>
          {service.when.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        <h2>{isProject ? "Le déroulé du chantier" : "Comment ça se passe"}</h2>
        <ol className={styles.steps}>
          {category.steps.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <span>{step.text}</span>
            </li>
          ))}
        </ol>

        <h2>{isProject ? "Ce qui a été fait" : "Ce qui est compris"}</h2>
        <ul className={styles.checks}>
          {service.includes.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>

        {service.faq.length ? (
          <>
            <h2>Questions fréquentes</h2>
            <dl className={styles.faq}>
              {service.faq.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </>
        ) : null}

        {/* Contact discret, en fin de lecture */}
        <p className={styles.contact}>
          {isProject ? "Un projet similaire ?" : "Une question sur cette prestation ?"} Appelez le{" "}
          <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a> ou décrivez votre besoin via{" "}
          <Link href="/#contact">le formulaire de contact</Link>. Le devis est gratuit.
        </p>
      </article>

      {/* Plaque signalétique, comme sur le matériel électrique */}
      <aside className={styles.plate} aria-label="Fiche de la prestation">
        <span className={`${styles.screw} ${styles.screwTl}`} aria-hidden="true" />
        <span className={`${styles.screw} ${styles.screwTr}`} aria-hidden="true" />
        <span className={`${styles.screw} ${styles.screwBl}`} aria-hidden="true" />
        <span className={`${styles.screw} ${styles.screwBr}`} aria-hidden="true" />

        <p className={styles.plateBrand}>{SITE.brand}</p>
        <p className={styles.plateModel}>{service.title}</p>
        <dl className={styles.plateSpecs}>
          {plate.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.plateNote}>
          {isProject ? "Chantier réalisé à titre d’exemple." : "Prix indicatifs. Devis gratuit après visite."}
        </p>
      </aside>
    </div>
  );
}
