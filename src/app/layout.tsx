import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kasunihansani.dev"),
  title: {
    default: "Kasuni Hansani | Software Engineer & GIS Specialist",
    template: "%s | Kasuni Hansani",
  },
  description:
    "Personal portfolio of Kasuni Hansani - Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka specializing in Software Engineering, GIS, QA, and Project Management.",
  keywords: [
    "Kasuni Hansani",
    "Portfolio",
    "Software Engineer",
    "GIS Specialist",
    "LankaGeo",
    "Information Systems Undergraduate",
    "Sabaragamuwa University of Sri Lanka",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Kasuni Hansani", url: "https://github.com/kasunihansani" }],
  creator: "Kasuni Hansani",
  publisher: "Kasuni Hansani",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kasuni Hansani | Software Engineer & GIS Specialist",
    description:
      "Information Systems Undergraduate at Sabaragamuwa University of Sri Lanka. Creator of LankaGeo GIS platform. Specializing in Web Development, GIS Data, and Software Engineering.",
    url: "https://kasunihansani.dev",
    siteName: "Kasuni Hansani Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kasuni Hansani | Software Engineer & GIS Specialist",
    description:
      "Information Systems Undergraduate & Creator of LankaGeo GIS platform.",
    creator: "@kasunihansani",
  },
  icons: {
    icon: "/favicon.ico",
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


