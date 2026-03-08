import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/theme.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Inter, IBM_Plex_Sans } from "next/font/google";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const titleFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-title",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FakeElec",
  description: "Électricien — Toulouse",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bodyFont.variable} ${titleFont.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}