"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

type Item = { href: string; label: string };

const items: Item[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav} aria-label="Primary">
      <Link href="/" className={styles.logo}>
        {/* remplace par le nom de ton client */}
        <span>Brand</span>
      </Link>

      <ul className={styles.list}>
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <li key={it.href}>
              <Link
                href={it.href}
                className={active ? styles.linkActive : styles.link}
                aria-current={active ? "page" : undefined}
              >
                {it.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
