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
  metadataBase: new URL("https://your-domain.com"), // ✅ Add this line
  title: {
    default: "AI-Native SEO Platform | Advanced Search Optimization",
    template: "%s | AI-Native SEO Platform",
  },
  description:
    "Revolutionary AI-powered SEO platform designed for the modern search era. Optimize your content for AI search engines and traditional SEO with advanced analytics and insights.",
  keywords: [
    "AI SEO",
    "search optimization",
    "AI search",
    "SEO platform",
    "content optimization",
    "search analytics",
  ],
  authors: [{ name: "Your Company Name" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "AI-Native SEO Platform",
    title: "AI-Native SEO Platform | Advanced Search Optimization",
    description:
      "Revolutionary AI-powered SEO platform designed for the modern search era.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI-Native SEO Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Native SEO Platform | Advanced Search Optimization",
    description:
      "Revolutionary AI-powered SEO platform designed for the modern search era.",
    images: ["/og-image.png"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
