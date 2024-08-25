// app/layout.tsx or wherever your RootLayout component is

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import StarryBackground from "../components/StarryBackground"; // Adjust the import path as needed

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
      <body className={inter.className}>
        <StarryBackground />
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
