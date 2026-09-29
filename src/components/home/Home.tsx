import styles from "./Home.module.css";
import WireNetwork from "./WireNetwork";
import Hero from "./Hero";
import Contact from "./Contact";
import { CATEGORIES, CONTACT_SECTION, SECTIONS, type Service } from "@/content/site";

// Chaque câble part du disjoncteur i du tableau et alimente la section i
const WIRE_TARGETS = SECTIONS.flatMap((s, i) => [
  { key: `hero-pin-${i}`, wireIndex: i, trunkStart: true, affectsStop: false },
  { key: s.id, wireIndex: i, affectsStop: true },
]);

function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className={styles.serviceGrid}>
      {items.map((item) => (
        <article key={item.slug} className={styles.serviceCard}>
          <div className={styles.serviceMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
          </div>
          <h3 className={styles.serviceTitle}>{item.title}</h3>
          <p className={styles.serviceDesc}>{item.desc}</p>
        </article>
      ))}
    </div>
  );
}

/**
 * Une section = un sous-boîtier électrique, dans le même langage que le coffret
 * de la landing : tôle bleue rivetée, étiquette Dymo, et un presse-étoupe sur la
 * paroi par lequel entre le câble qui l'alimente.
 */
function SectionBox({
  id,
  label,
  index,
  tagline,
  last = false,
  children,
}: {
  id: string;
  label: string;
  index: number;
  tagline?: string;
  last?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={last ? styles.sectionLast : styles.section}>
      <div className={styles.frame}>
        <div className={`${styles.box} ${styles[`t${index}`]}`}>
          <span className={`${styles.rivet} ${styles.rivetTl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetTr}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBl}`} aria-hidden="true" />
          <span className={`${styles.rivet} ${styles.rivetBr}`} aria-hidden="true" />

          <header className={styles.head}>
            <h2 className={`${styles.sectionTitle} ${styles[`t${index}`]}`}>
              <span className={styles.sectionLed} aria-hidden="true" />
              {label}
            </h2>
            {tagline ? <p className={styles.tagline}>{tagline}</p> : null}
            {/* Presse-étoupe : le câble de la section entre dans le boîtier ici */}
            <span data-wire-anchor={id} className={styles.gland} aria-hidden="true" />
          </header>

          {children}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <WireNetwork frameSelector='[data-wire-frame="main"]' wiresCount={SECTIONS.length} targets={WIRE_TARGETS} />

      <Hero />

      {CATEGORIES.map((cat, i) => (
        <SectionBox key={cat.id} id={cat.id} label={cat.label} index={i} tagline={cat.tagline}>
          <ServiceGrid items={cat.services} />
        </SectionBox>
      ))}

      <SectionBox id={CONTACT_SECTION.id} label={CONTACT_SECTION.label} index={CATEGORIES.length} last>
        <div className={styles.contactWrap}>
          <Contact />
        </div>
      </SectionBox>
    </div>
  );
}
