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
  metadataBase: new URL("https://byarik.com"),
  title: "ARIK Content Studio | Tu mano derecha, para florecer",
  description:
    "Gestión de contenido con mirada creativa y acompañamiento cercano. Social Media Management, Creación de Contenido, Producción Audiovisual y Modelo UGC.",
  openGraph: {
    title: "ARIK Content Studio | Tu mano derecha, para florecer",
    description:
      "Gestión de contenido con mirada creativa y acompañamiento cercano. Social Media, Producción Audiovisual y Creación de Contenido (UGC).",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1400,
        height: 788,
        alt: "ARIK Content Studio — Tu mano derecha, para florecer.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ARIK Content Studio | Tu mano derecha, para florecer",
    description:
      "Gestión de contenido con mirada creativa y acompañamiento cercano.",
    images: ["/twitter-image.jpg"],
  },
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
