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
    "Un cuerpo vivo que reconoce, acompaña y representa a cada miembro de la universidad.",
  openGraph: {
    title: "Leviatán",
    description:
      "Un cuerpo vivo que reconoce, acompaña y representa a cada miembro de la universidad.",
    url: "https://leviatan.xpandia.co",
    siteName: "Leviatán",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leviatán",
    description:
      "Un cuerpo vivo que reconoce, acompaña y representa a cada miembro de la universidad.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${garamond.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
