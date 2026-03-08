import styles from "./Home.module.css";
import WireNetwork from "./WireNetwork";
import Hero from "./Hero";
import Contact from "./Contact";

/* ================= INSTALLATIONS ================= */

const INSTALLATIONS = [
  {
    title: "Prises et interrupteurs",
    desc: "Pose, ajout ou remplacement de prises et commandes d’éclairage.",
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Luminaires",
    desc: "Installation de plafonniers, suspensions, spots et appliques.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tableau électrique",
    desc: "Remplacement ou installation de tableau avec protections adaptées.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Circuits spécialisés",
    desc: "Création de lignes dédiées pour four, plaques ou chauffe-eau.",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Chauffage électrique",
    desc: "Installation et raccordement de radiateurs électriques.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "VMC et ventilation",
    desc: "Installation et raccordement de systèmes de ventilation.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ================= RÉNOVATION (PORTFOLIO) ================= */

const RENOVATIONS = [
  {
    title: "Appartement ancien – centre-ville",
    desc: "Reprise complète du tableau et redistribution des circuits.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cuisine rénovée",
    desc: "Circuits dédiés électroménager et éclairage plan de travail.",
    image:
      "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Studio remis en sécurité",
    desc: "Remplacement appareillages et modernisation du tableau.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maison individuelle",
    desc: "Reprise des circuits principaux et ajout de points lumineux.",
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Salle de bain rénovée",
    desc: "Installation luminaires et prises sécurisées.",
    image:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Tableau électrique remplacé",
    desc: "Installation d'un tableau neuf avec protections différentielles.",
    image:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ================= DÉPANNAGE ================= */

const DEPANNAGE = [
  {
    title: "Panne électrique",
    desc: "Diagnostic rapide en cas de coupure totale ou partielle.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Disjoncteur qui saute",
    desc: "Recherche de surcharge ou défaut d’isolement.",
    image:
      "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Court-circuit",
    desc: "Localisation du défaut et remise en sécurité du circuit.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
  },

];

/* ================= RÉALISATIONS ================= */

const REALISATIONS = [
  {
    title: "Appartement ancien",
    desc: "Reprise des circuits et remplacement du tableau.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Cuisine rénovée",
    desc: "Circuits spécialisés et éclairage plan de travail.",
    image:
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Studio remis au propre",
    desc: "Mise en sécurité et remplacement des appareillages.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
];

/* ================= GRID ================= */

function ServiceGrid({
  items,
}: {
  items: Array<{ title: string; desc: string; image: string }>;
}) {
  return (
    <div className={styles.serviceGrid}>
      {items.map((item) => (
        <article key={item.title} className={styles.serviceCard}>
          <div className={styles.serviceMedia}>
            <img src={item.image} alt={item.title} />
          </div>
          <div className={styles.serviceTitle}>{item.title}</div>
          <div className={styles.serviceDesc}>{item.desc}</div>
        </article>
      ))}
    </div>
  );
}

/* ================= PAGE ================= */

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.fakeFrame} aria-hidden="true" />

      <WireNetwork
        frameSelector='[data-wire-frame="main"]'
        wiresCount={5}
        targets={[
          { key: "hero-pin-0", wireIndex: 0, trunkStart: true, affectsStop: false },
          { key: "hero-pin-1", wireIndex: 1, trunkStart: true, affectsStop: false },
          { key: "hero-pin-2", wireIndex: 2, trunkStart: true, affectsStop: false },
          { key: "hero-pin-3", wireIndex: 3, trunkStart: true, affectsStop: false },
          { key: "hero-pin-4", wireIndex: 4, trunkStart: true, affectsStop: false },

          { key: "installations", wireIndex: 0, affectsStop: true },
          { key: "renovations", wireIndex: 1, affectsStop: true },
          { key: "depannage", wireIndex: 2, affectsStop: true },
          { key: "realisations", wireIndex: 3, affectsStop: true },
          { key: "contact", wireIndex: 4, affectsStop: true },
        ]}
      />

      <Hero />

      {/* INSTALLATIONS */}
      <section id="installations" className={styles.section}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <h2 data-wire-anchor="installations" className={styles.sectionTitle}>
              INSTALLATIONS
            </h2>
            <div className={styles.sectionBody}>
              <ServiceGrid items={INSTALLATIONS} />
            </div>
          </div>
        </div>
      </section>

      {/* RÉNOVATION */}
      <section id="renovations" className={styles.section}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <h2 data-wire-anchor="renovations" className={styles.sectionTitle}>
              RÉNOVATION
            </h2>
            <div className={styles.sectionBody}>
              <ServiceGrid items={RENOVATIONS} />
            </div>
          </div>
        </div>
      </section>

      {/* DÉPANNAGE */}
      <section id="depannage" className={styles.section}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <h2 data-wire-anchor="depannage" className={styles.sectionTitle}>
              DÉPANNAGE
            </h2>
            <div className={styles.sectionBody}>
              <ServiceGrid items={DEPANNAGE} />
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="realisations" className={styles.section}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <h2 data-wire-anchor="realisations" className={styles.sectionTitle}>
              RÉALISATIONS
            </h2>

            <div className={styles.sectionBody}>
              <ServiceGrid items={REALISATIONS} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.sectionLast}>
        <div className={styles.frame}>
          <div className={styles.sectionInner}>
            <h2 data-wire-anchor="contact" className={styles.sectionTitle}>
              CONTACT
            </h2>

            <div className={styles.sectionBody}>
              <Contact />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}