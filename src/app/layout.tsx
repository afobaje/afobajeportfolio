import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFOBAJE",
  description: "Afobaje",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="  relative  font-Coolvetica bg-blend-overlay flex flex-col">
          <Nav />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
