import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azydw — Full-Stack Developer & UI/UX Enthusiast",
  description:
    "Crafting modern web experiences with Next.js, TypeScript, and Tailwind CSS.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Developer"],
  authors: [{ name: "Azydw" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Azydw — Full-Stack Developer",
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
        className={`${inter.variable} ${plusJakarta.variable} font-sans bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
