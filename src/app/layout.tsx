import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToTop from "@/components/to-top";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Nasitem's Portfolio",
  description: "Showcasing my work as a Computer Engineering Technologist",
  icons: {
    icon: "/JN.svg",
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const narbarLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="text-[var(--color-foreground)] bg-[var(--color-background)] flex flex-col min-h-screen">
          <ToTop />
          <Navbar links={narbarLinks} logo="JN.svg" />
          <div className="flex-1">
            {children}
          </div>
          <footer>
            <div id='page_section1' className="text-center text-sm mt-4">
              © 2025 John Nasitem. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
