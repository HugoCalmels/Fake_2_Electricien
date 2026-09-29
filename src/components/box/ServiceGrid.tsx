import Link from "next/link";
import styles from "./Box.module.css";
import type { Service } from "@/content/site";

// Cards de prestations : chacune mène à la page de la prestation
export default function ServiceGrid({ categoryId, items }: { categoryId: string; items: Service[] }) {
  return (
    <div className={styles.serviceGrid}>
      {items.map((item) => (
        <Link key={item.slug} href={`/${categoryId}/${item.slug}`} className={styles.serviceCard}>
          <div className={styles.serviceMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
          </div>
          <h3 className={styles.serviceTitle}>{item.title}</h3>
          <p className={styles.serviceDesc}>{item.desc}</p>
          <span className={styles.cardMore}>En savoir plus →</span>
        </Link>
      ))}
    </div>
  );
}
