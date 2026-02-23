import type { Metadata } from "next";
import { Dancing_Script, Saira, DynaPuff } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import LenisScrollProvider from "./providers/lenisprovider";

const saira = Saira({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-saira",
  display: "swap"
})

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
})

const dynapuff = DynaPuff({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dynapuff",
  display: "swap",
});



export const metadata: Metadata = {
  icons: {
    icon: ['/favicon.ico'],
  },
  metadataBase: new URL("https://princebajgain.com.np"),

  title: {
    default: "Prince Bajgain | MERN Stack Developer",
    template: "%s | Prince Bajgain",
  },

  description:
    "Prince Bajgain is a MERN Stack Developer specializing in React, Next.js, Node.js, and scalable full-stack applications.",

  keywords: [
    "Prince Bajgain",
    "MERN Stack Developer",
    "React Developer Nepal",
    "Next.js Developer",
    "Full Stack Developer Nepal",
  ],

  authors: [{ name: "Prince Bajgain" }],
  creator: "Prince Bajgain",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://princebajgain.com.np",
    siteName: "Prince Bajgain Portfolio",
    title: "Prince Bajgain | MERN Developer",
    description:
      "Full Stack Developer specializing in MERN stack and modern web applications.",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prince Bajgain | MERN Developer",
    description:
      "Full Stack Developer specializing in MERN stack.",
    images: ["/me.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://princebajgain.com.np",
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
        className={`${saira.variable} ${dancing.variable} ${dynapuff.variable} font-sans`}
      >
        <Navbar />
        <LenisScrollProvider>
          {children}
        </LenisScrollProvider>
      </body>
    </html>
  );
}
