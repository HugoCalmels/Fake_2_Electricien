import type { Metadata } from "next";
import Link from "next/link";
import boxStyles from "@/components/box/Box.module.css";
import articleStyles from "@/components/box/Article.module.css";
import SectionBox from "@/components/box/SectionBox";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: `Mentions légales · ${SITE.brand}`,
  description: `${SITE.brand} est une entreprise fictive : ce site est une démonstration.`,
};

const SECTIONS = [
  {
    title: "Site de démonstration",
    text: `${SITE.brand} est une entreprise d’électricité fictive. Ce site est une démo réalisée par Hugo Calmels, développeur web, pour montrer ce qu’un artisan peut obtenir : un site clair qui présente ses prestations et donne envie d’appeler. Le numéro de téléphone appartient à une plage réservée à la fiction, et les chantiers, prix et avis affichés sont inventés.`,
  },
  {
    title: "Éditeur",
    text: "Hugo Calmels, développeur web indépendant à Toulouse — hugo-calmels.fr",
  },
  {
    title: "Hébergement",
    text: "Netlify, Inc. (netlify.com), San Francisco, États-Unis.",
  },
  {
    title: "Données personnelles",
    text: "Le formulaire de contact est une démonstration : aucun message n’est envoyé ni enregistré. Le site n’utilise pas de cookies publicitaires ni de mesure d’audience.",
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <nav className={boxStyles.breadcrumb} aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li aria-current="page">Mentions légales</li>
        </ol>
      </nav>

      <SectionBox id="mentions-legales" label="Mentions légales" colorIndex={4} wired={false} headingLevel={1} last>
        <div className={articleStyles.article}>
          {SECTIONS.map((section, i) => (
            <div key={section.title}>
              <h2 style={i === 0 ? { marginTop: 0 } : undefined}>{section.title}</h2>
              <p className={articleStyles.lead}>{section.text}</p>
            </div>
          ))}
        </div>
      </SectionBox>
    </>
  );
}
