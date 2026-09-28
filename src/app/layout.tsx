import type { Metadata, Viewport } from "next";
import SmoothScroll from "@/components/SmoothScroll";
import { CursorProvider, CursorTrigger } from "@/components/Cursor";
import { Wayfinding } from "@/components/Wayfinding";
import { ScrollProgressBar, MotionLayoutProvider } from "@/components/Motion";
import { World } from "@/components/WebGL/World";
import { Header } from "@/components/Header";
import { Preloader } from "@/components/Preloader";
import Link from "next/link";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#F4F2EA",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://varunhanda.com"),
  title: {
    default: "Varun Handa | Principal Software Architect",
    template: "%s | Varun Handa",
  },
  description: "Principal Software Architect & CTO specializing in agentic infrastructure, multi-agent orchestration, and high-volume distributed systems.",
  keywords: ["Varun Handa", "Principal Software Architect", "CTO", "Agentic Infrastructure", "Distributed Systems", "AI Architecture", "Multi-Agent Systems"],
  authors: [{ name: "Varun Handa", url: "https://varunhanda.com" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://varunhanda.com",
    title: "Varun Handa | Principal Software Architect",
    description: "Principal Software Architect & CTO specializing in agentic infrastructure and distributed systems.",
    siteName: "Varun Handa Portfolio",
    images: [
      {
        url: "/images/hero_atrium.jpg",
        width: 1200,
        height: 675,
        alt: "Varun Handa - Principal Software Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Varun Handa | Principal Software Architect",
    description: "Principal Software Architect specializing in agentic infrastructure and distributed systems.",
    images: ["/images/hero_atrium.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Varun Handa",
  jobTitle: "Principal Software Architect & CTO",
  description: "Principal Software Architect specializing in agentic infrastructure and distributed systems with 15 years experience.",
  url: "https://varunhanda.com",
  knowsAbout: [
    "Agentic Infrastructure",
    "Distributed Systems",
    "Multi-Agent Orchestration",
    "High-Volume Asynchronous Video Pipelines",
    "Model Routing Economics"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,200;0,300;0,400;0,700;0,800;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <World />
        <a href="#main-content" className="skip-link">Skip to main content</a>
        
        <CursorProvider>
          <SmoothScroll>
              <ScrollProgressBar />
              <Wayfinding />

              <Header />
              
              <main id="main-content">
                <MotionLayoutProvider>
                  {children}
                </MotionLayoutProvider>
              </main>
              
              <footer className="footer" role="contentinfo">
                <div>© {new Date().getFullYear()} Varun Handa</div>
                <div className="accent-badge">Available for Select Advisory</div>
                <div>Principal Software Architect</div>
                <CursorTrigger>
                  <a href="mailto:contact@varunhanda.com" style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>
                    contact@varunhanda.com
                  </a>
                </CursorTrigger>
              </footer>
          </SmoothScroll>
        </CursorProvider>
      </body>
    </html>
  );
}
