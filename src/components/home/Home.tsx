import styles from "./Home.module.css";
import boxStyles from "@/components/box/Box.module.css";
import WireNetwork from "./WireNetwork";
import Hero from "./Hero";
import Contact from "./Contact";
import SectionBox from "@/components/box/SectionBox";
import ServiceGrid from "@/components/box/ServiceGrid";
import { CATEGORIES, CONTACT_SECTION, SECTIONS } from "@/content/site";

// Chaque câble part du disjoncteur i du tableau et alimente la section i
const WIRE_TARGETS = SECTIONS.flatMap((s, i) => [
  { key: `hero-pin-${i}`, wireIndex: i, trunkStart: true, affectsStop: false },
  { key: s.id, wireIndex: i, affectsStop: true },
]);

export default function Home() {
  return (
    <div className={styles.page}>
      <WireNetwork frameSelector='[data-wire-frame="main"]' wiresCount={SECTIONS.length} targets={WIRE_TARGETS} />

      <Hero breakers={SECTIONS} />

      {CATEGORIES.map((cat, i) => (
        <SectionBox
          key={cat.id}
          id={cat.id}
          label={cat.label}
          colorIndex={i}
          tagline={cat.tagline}
          href={`/${cat.id}`}
        >
          <ServiceGrid categoryId={cat.id} items={cat.services} />
        </SectionBox>
      ))}

      <SectionBox id={CONTACT_SECTION.id} label={CONTACT_SECTION.label} colorIndex={CATEGORIES.length} last>
        <div className={boxStyles.contactWrap}>
          <Contact />
        </div>
      </SectionBox>
    </div>
  );
}
