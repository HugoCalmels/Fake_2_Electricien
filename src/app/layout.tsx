import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/theme.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import localFont from "next/font/local";

// Polices hébergées dans le projet (Rubik + Bowlby One, licence OFL) :
// pas de dépendance à Google Fonts au build ni au chargement.
const bodyFont = localFont({
  src: "../fonts/Rubik-latin.woff2",
  weight: "400 700",
  variable: "--font-body",
  display: "swap",
});

// Titres épais façon affiche rétro
const titleFont = localFont({
  src: "../fonts/BowlbyOne-latin.woff2",
  weight: "400",
  variable: "--font-title",
  display: "swap",
});

// Police de terminal à phosphore vert
const monoFont = localFont({
  src: "../fonts/VT323-latin.woff2",
  weight: "400",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FakeElec · Électricien à Toulouse",
  description:
    "Installation, rénovation et dépannage électrique à Toulouse et alentours. Devis gratuit, travaux aux normes NF C 15-100.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${titleFont.variable} ${monoFont.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
