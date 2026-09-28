import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-articulat",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-spacilo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARIK Content Studio",
  description: "Tu mano derecha, para florecer. Gestión de contenido con mirada creativa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceMono.variable}`}>
      <body>
        <div
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: A warm, human "right hand" social media studio that organically cultivates brands without cold industrial metrics.
OWN-WORLD: Cream background (Floral White), highly rounded organic vector blobs (Hot Berry, Bubblegum Tint), floating digital UI elements (phones, iPads), clean Articulat CF sans typography.
STORY: The visitor understands ARIK is a premium, strategic, yet close partner for social media, and decides to request a quote.
FIRST VIEWPORT: Logo top left. Left side: Bold headline "Cultivating Connection...", CTA pill. Right side: Floating iPhone (Instagram feed), desktop editor, and iPad (strategy board) over organic hot-berry blooms.
FORM: The Organic Botanical Process (Brief Pinned).
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
