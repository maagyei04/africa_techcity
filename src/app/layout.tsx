import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
  description: "AfricaTechCity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B2238]`}
      >
        <Header />

        <main>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M16.75 16.25a.75.75 0 0 0 1.5 0v-8.5a.75.75 0 0 0-.75-.75h-9.5a.75.75 0 0 0 0 1.5h8.5v8.5zm5.72-10.47a.75.75 0 0 1 0 1.06l-.72.72a12.08 12.08 0 0 0-5.83-1.55c-3.83 0-7.26 1.8-9.47 4.6a.75.75 0 0 1-1.06-1.06c2.6-3.26 6.62-5.19 10.53-5.19a13.59 13.59 0 0 1 6.55 1.68l-.72-.72zm3.35 15.51c-2.6 3.26-6.62 5.19-10.53 5.19a13.59 13.59 0 0 1-6.55-1.68l.72.72a.75.75 0 1 1-1.06 1.06l-.72-.72a12.08 12.08 0 0 0 5.83 1.55c3.83 0 7.26-1.8 9.47-4.6a.75.75 0 0 1 1.06 1.06l-.72.72zM9 12.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0zm3.25-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
