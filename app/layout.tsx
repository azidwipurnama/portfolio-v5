import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
        className={`${spaceGrotesk.variable} ${plusJakarta.variable} font-body bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
