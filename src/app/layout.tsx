import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { site } from "@/content/site";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: site.url,
    siteName: site.name,
    locale: "en_SG",
    type: "website",
    images: [
      {
        url: site.assets.og,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
    images: [site.assets.og],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ExerciseGym",
  name: site.name,
  url: site.url,
  description: site.seo.description,
  image: `${site.url}${site.assets.og}`,
  slogan: site.hero.subtitle,
  areaServed: "Singapore",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-black font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
