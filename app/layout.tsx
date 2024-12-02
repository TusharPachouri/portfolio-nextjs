// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarryBackground from "../components/ui/StarryBackground";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaBlog, FaBriefcase, FaEnvelope, FaFileAlt, FaHome, FaUser } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Basic Metadata
  title: {
    default: "Tushar Pachouri - Portfolio",
    template: "%s | Tushar Pachouri"
  },
  description: "Portfolio of Tushar Pachouri - Web Developer and Creative Professional",
  
  // Application Details
  applicationName: "Tushar Pachouri Portfolio",
  authors: [{ name: "Tushar Pachouri" }],
  
  // Keywords
  keywords: [
    "Tushar Pachouri",
    "portfolio",
    "web developer",
    "frontend developer",
    "React",
    "Next.js",
    "web design",
    "software engineer"
  ],

  // Favicons and Icons
  icons: {
    icon: [
      { url: '/brand/favicon.ico' },
      { url: '/brand/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/brand/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/brand/apple-touch-icon.png' }
    ]
  },

  // Open Graph Metadata
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tushar Pachouri - Portfolio",
    description: "Explore the professional portfolio of Tushar Pachouri",
    siteName: "Tushar Pachouri Portfolio",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tushar Pachouri Portfolio"
      }
    ]
  },

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Tushar Pachouri - Portfolio",
    description: "Explore the professional portfolio of Tushar Pachouri",
    images: ["/brand/twitter-image.jpg"]
  },

  // Robots and Crawling
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  // Verification (optional)
  verification: {
    google: "", // Add your Google Search Console verification code if needed
  },

  // Additional Metadata
  category: "Portfolio",
  generator: "Next.js",
  referrer: "origin",
  colorScheme: "dark light",
  creator: "Tushar Pachouri",
  publisher: "Tushar Pachouri"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StarryBackground />
      <body className={inter.className}>
        <FloatingNav navItems={[
          { name: "HOME", link: "/home", icon: <FaHome /> },
          { name: "ABOUT", link: "/about", icon: <FaUser /> },
          { name: "RESUME", link: "/resume", icon: <FaFileAlt /> },
          { name: "PORTFOLIO", link: "/portfolio", icon: <FaBriefcase /> },
          { name: "BLOG", link: "/blog", icon: <FaBlog /> },
          { name: "CONTACT", link: "/contact", icon: <FaEnvelope /> }
        ]} />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}