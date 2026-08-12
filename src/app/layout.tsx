import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://smartstacksoftwaresolution.vercel.app'),
  title: {
    default: "SmartStack Software Solution | Building Smart Digital Solutions",
    template: "%s | SmartStack Software Solution",
  },
  description: "We help startups, SMEs, and enterprises build world-class websites, web applications, AI solutions, SaaS platforms, and scalable digital products.",
  keywords: ["software agency", "web development", "digital solutions", "Next.js", "React", "SaaS development", "UI/UX design", "mobile app development", "AI integration"],
  authors: [{ name: "SmartStack Software Solution" }],
  creator: "SmartStack Software Solution",
  publisher: "SmartStack Software Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://smartstack.in",
    title: "SmartStack Software Solution | Building Smart Digital Solutions",
    description: "We help startups, SMEs, and enterprises build world-class websites, web applications, AI solutions, SaaS platforms, and scalable digital products.",
    siteName: "SmartStack Software Solution",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SmartStack Software Solution - Digital Solutions Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartStack Software Solution | Building Smart Digital Solutions",
    description: "We help startups, SMEs, and enterprises build world-class websites, web applications, AI solutions, SaaS platforms, and scalable digital products.",
    images: ["/logo.png"],
    creator: "@smartstack",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '0qeYdh8XrRf_8x2eQz90wZ-iNIu4H6dQ6R356_r044E',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen`}
      >
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
