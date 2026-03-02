import type { Metadata } from "next";
import "../styles/global.css";
import "../styles/theme.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "Site",
  description: "Base Next.js minimale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
