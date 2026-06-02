import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Lucio Del Corro Raffetto · Full Stack Developer",
  description:
    "Portfolio de Lucio Del Corro Raffetto — Full Stack Developer con foco en TypeScript, React, Node.js y arquitectura limpia. Team Lead en ForIT Software Factory.",
  metadataBase: new URL("https://lucio-portfolio.vercel.app"),
  openGraph: {
    title: "Lucio Del Corro Raffetto · Full Stack Developer",
    description:
      "Full Stack Developer · TypeScript · React · Node.js · Team Lead",
    url: "https://lucio-portfolio.vercel.app",
    siteName: "Lucio Del Corro Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lucio Del Corro Raffetto — Full Stack Developer",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucio Del Corro Raffetto · Full Stack Developer",
    description:
      "Full Stack Developer · TypeScript · React · Node.js · Team Lead",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Lucio Del Corro Raffetto" }],
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Node.js",
    "Team Lead",
    "Clean Architecture",
    "TDD",
    "Portfolio",
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucio Del Corro Raffetto",
  url: "https://lucio-portfolio.vercel.app",
  jobTitle: "Full Stack Developer",
  worksFor: {
    "@type": "Organization",
    name: "ForIT Software Factory",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "delcorroraffetto@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/luciodelcorroraffetto",
    "https://github.com/LucioDelCorroRaffetto",
  ],
  knowsAbout: [
    "TypeScript",
    "React",
    "Node.js",
    "Clean Architecture",
    "TDD",
    "PostgreSQL",
    "Docker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased app-background`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}


