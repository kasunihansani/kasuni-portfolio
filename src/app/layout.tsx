import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kasuni Hansani | Software Engineering & GIS Specialist Portfolio",
  description:
    "Personal portfolio of Kasuni Hansani - Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka specializing in Software Engineering, GIS, QA, and Project Management.",
  keywords: [
    "Kasuni Hansani",
    "Portfolio",
    "Software Engineer",
    "GIS Specialist",
    "LankaGeo",
    "Information Systems",
    "Sabaragamuwa University",
    "Full Stack Developer",
    "Next.js",
  ],
  authors: [{ name: "Kasuni Hansani" }],
  openGraph: {
    title: "Kasuni Hansani | Portfolio",
    description:
      "Information Systems Undergraduate & Software Engineer specializing in GIS and Full-Stack Web Development.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}

