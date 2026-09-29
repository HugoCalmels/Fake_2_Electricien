import type { Metadata } from "next";
import { notFound } from "next/navigation";
import styles from "@/components/home/Home.module.css";
import WireNetwork from "@/components/home/WireNetwork";
import Hero from "@/components/home/Hero";
import SectionBox from "@/components/box/SectionBox";
import ServiceDetail from "@/components/box/ServiceDetail";
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

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const cat = findCategory((await params).category);
  if (!cat) notFound();

  // Même principe que la home : le disjoncteur i alimente la prestation i
  const targets = cat.services.flatMap((s, i) => [
    { key: `hero-pin-${i}`, wireIndex: i, trunkStart: true, affectsStop: false },
    { key: s.slug, wireIndex: i, affectsStop: true },
  ]);

  return (
    <div className={styles.page}>
      <WireNetwork frameSelector='[data-wire-frame="main"]' wiresCount={cat.services.length} targets={targets} />

      <Hero
        title={cat.label}
        dymo={`${SITE.brand} · ${SITE.city}`}
        lead={cat.tagline}
        breakers={cat.services.map((s) => ({ id: s.slug, label: s.title }))}
        navLabel={`Prestations ${cat.label}`}
        compact
      />

      {cat.services.map((service, i) => (
        <SectionBox
          key={service.slug}
          id={service.slug}
          label={service.title}
          colorIndex={i}
          tagline={service.desc}
          last={i === cat.services.length - 1}
        >
          <ServiceDetail service={service} href={`/${cat.id}/${service.slug}`} />
        </SectionBox>
      ))}
    </div>
  );
}
