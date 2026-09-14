import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DWICODE | Full-Stack & Cybersecurity Engineer",
  description:
    "Crafting modern web experiences with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Developer"],
  authors: [{ name: "DWICODE" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "DWICODE | Full-Stack & Cybersecurity Engineer",
    description:
      "Crafting modern web experiences with Next.js, TypeScript, and Tailwind CSS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${inter.variable} ${outfit.variable} font-body bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
