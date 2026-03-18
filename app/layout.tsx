import type { Metadata } from "next";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASOMEM — Asociación de Mujeres Emprendedoras de Chile",
  description:
    "Red de emprendedoras chilenas con herramientas digitales, comunidad activa, convenios exclusivos e inteligencia artificial para hacer crecer tu negocio.",
  keywords:
    "emprendedoras Chile, mujeres emprendedoras, asociación emprendedoras, ASOMEM, emprendimiento femenino Chile",
  authors: [{ name: "ASOMEM" }],
  creator: "ASOMEM",
  publisher: "ASOMEM",
  metadataBase: new URL("https://asomem.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ASOMEM — Emprende con red, crece con propósito",
    description:
      "La comunidad de mujeres emprendedoras más activa de Chile. Herramientas digitales, convenios exclusivos e inteligencia artificial para tu negocio.",
    url: "https://asomem.cl",
    siteName: "ASOMEM",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASOMEM — Asociación de Mujeres Emprendedoras de Chile",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASOMEM — Emprende con red, crece con propósito",
    description: "La comunidad de mujeres emprendedoras más activa de Chile.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className={`${playfair.variable} ${nunito.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#E8A0BF" />
      </head>
      <body className="font-nunito antialiased min-h-screen" style={{ background: "#FFF5F8" }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] px-4 py-2 rounded-lg font-semibold text-white"
          style={{ background: "linear-gradient(135deg, #E8A0BF, #DEB6E8)" }}
        >
          Saltar al contenido principal
        </a>
        <Navbar />
        <main id="main-content" className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
