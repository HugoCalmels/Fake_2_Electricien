import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import boxStyles from "@/components/box/Box.module.css";
import SectionBox from "@/components/box/SectionBox";
import ServiceGrid from "@/components/box/ServiceGrid";
import { CATEGORIES, SITE, findCategory } from "@/content/site";

type Params = { category: string };

// Une page statique par section : /installations, /renovation…
export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ category: c.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const cat = findCategory((await params).category);
  if (!cat) return {};
  return {
    title: `${cat.label} · Électricien à ${SITE.city} · ${SITE.brand}`,
    description: `${cat.tagline} ${cat.services.map((s) => s.title).join(", ")}.`,
  };
}

// Page hub, volontairement sobre : la liste des prestations de la section
export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const cat = findCategory((await params).category);
  if (!cat) notFound();

  return (
    <>
      <nav className={boxStyles.breadcrumb} aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li aria-current="page">{cat.label}</li>
        </ol>
      </nav>

      <SectionBox
        id={cat.id}
        label={cat.label}
        colorIndex={CATEGORIES.indexOf(cat)}
        tagline={cat.tagline}
        wired={false}
        headingLevel={1}
        last
      >
        <ServiceGrid categoryId={cat.id} items={cat.services} />
      </SectionBox>
    </>
  );
}
