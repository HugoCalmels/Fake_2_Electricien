import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import boxStyles from "@/components/box/Box.module.css";
import ServiceArticle from "@/components/box/ServiceArticle";
import { CATEGORIES, SITE, findCategory } from "@/content/site";

type Params = { category: string; slug: string };

// Une page statique par prestation : /renovation/cuisine…
export function generateStaticParams(): Params[] {
  return CATEGORIES.flatMap((c) => c.services.map((s) => ({ category: c.id, slug: s.slug })));
}

export const dynamicParams = false;

async function resolve(params: Promise<Params>) {
  const { category, slug } = await params;
  const cat = findCategory(category);
  const service = cat?.services.find((s) => s.slug === slug);
  return { cat, service };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { cat, service } = await resolve(params);
  if (!cat || !service) return {};
  return {
    title: `${service.title} · Électricien à ${SITE.city} · ${SITE.brand}`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { cat, service } = await resolve(params);
  if (!cat || !service) notFound();

  return (
    <>
      <nav className={boxStyles.breadcrumb} aria-label="Fil d’Ariane">
        <ol>
          <li>
            <Link href="/">Accueil</Link>
          </li>
          <li>
            <Link href={`/${cat.id}`}>{cat.label}</Link>
          </li>
          <li aria-current="page">{service.title}</li>
        </ol>
      </nav>

      {/* Page de lecture : titre simple, sans boîtier (pas de câble ici) */}
      <div className={`${boxStyles.page} ${boxStyles[`t${CATEGORIES.indexOf(cat) % 5}`]}`}>
        <header className={boxStyles.plainHead}>
          <h1 className={`${boxStyles.sectionTitle} ${boxStyles[`t${CATEGORIES.indexOf(cat) % 5}`]}`}>
            <span className={boxStyles.sectionLed} aria-hidden="true" />
            {service.title}
          </h1>
          <p className={boxStyles.tagline}>{service.desc}</p>
        </header>

        <ServiceArticle category={cat} service={service} />
      </div>
    </>
  );
}
