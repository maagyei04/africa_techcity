import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import WhatsappComponent from "@/components/UI/whatsapp";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Africa TechCity",
  description: "Africa TechCity - Empowering Your Vision with Innovative Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Africa TechCity - Empowering Your Vision</title>
        <meta name="description" content="Join a community where creativity meets purpose at Africa TechCity." />
        <meta name="keywords" content="Africa TechCity, technology, outsourcing, software training" />
        <link rel="canonical" href="https://www.africatechcity.com" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B2238]`}
      >
        <Header />

        <main className="py-10">
          {children}
        </main>

        <Footer />

        {/* Floating WhatsApp Chat Button */}
        <a
          href="https://wa.me/+233246531380"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-3 shadow-lg"
        >
          <WhatsappComponent />
        </a>
      </body>
    </html>
  );
}
