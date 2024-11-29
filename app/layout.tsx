// app/layout.tsx or wherever your RootLayout component is

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarryBackground from "../components/ui/StarryBackground"; // Adjust the import path as needed
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaBlog, FaBriefcase, FaEnvelope, FaFileAlt, FaHome, FaUser } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tushar Pachouri",
  description: "Tushar Pachouri's Portfolio",
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
            { name: "HOME", link: "/", icon: <FaHome /> },
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
