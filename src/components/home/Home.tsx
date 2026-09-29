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

// Étiquette de section, identique à celle du disjoncteur qui l'alimente
function SectionLabel({ id, label, index }: { id: string; label: string; index: number }) {
  return (
    <h2 data-wire-anchor={id} className={`${styles.sectionTitle} ${styles[`t${index}`]}`}>
      <span className={styles.sectionNum}>{String(index + 1).padStart(2, "0")}</span>
      {label}
    </h2>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <WireNetwork frameSelector='[data-wire-frame="main"]' wiresCount={SECTIONS.length} targets={WIRE_TARGETS} />

      <Hero />

      {CATEGORIES.map((cat, i) => (
        <section key={cat.id} id={cat.id} className={styles.section}>
          <div className={styles.frame}>
            <div className={styles.sectionInner}>
              <SectionLabel id={cat.id} label={cat.label} index={i} />
              <div className={styles.sectionBody}>
                <p className={styles.tagline}>{cat.tagline}</p>
                <ServiceGrid items={cat.services} />
              </div>
            </div>
          </div>
        </section>
      ))}

      <section id={CONTACT_SECTION.id} className={styles.sectionLast}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <SectionLabel id={CONTACT_SECTION.id} label={CONTACT_SECTION.label} index={CATEGORIES.length} />
            <div className={styles.sectionBody}>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
