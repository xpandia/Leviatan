import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leviatan.xpandia.co"),
  title: {
    default: "Leviatán",
    template: "%s · Leviatán",
  },
  description:
    "La universidad como cuerpo vivo. Un sistema de IA agéntica que reconoce, acompaña y representa a cada uno de sus miembros.",
  openGraph: {
    title: "Leviatán",
    description:
      "La universidad como cuerpo vivo. Un sistema de IA agéntica que reconoce, acompaña y representa a cada uno de sus miembros.",
    url: "https://leviatan.xpandia.co",
    siteName: "Leviatán",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "/og-leviatan.png",
        width: 1200,
        height: 675,
        alt: "Frontispicio del Leviatán de Thomas Hobbes, 1651 — grabado de Abraham Bosse.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leviatán",
    description:
      "La universidad como cuerpo vivo. Un sistema de IA agéntica que reconoce, acompaña y representa a cada uno de sus miembros.",
    images: ["/og-leviatan.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${garamond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
