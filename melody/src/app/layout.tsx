import type { Metadata } from "next";
import { Geist, Geist_Mono , Righteous, Montserrat } from "next/font/google";
import { AuthContextProvider } from '@/app/context/AuthContext'
import "./globals.css";
import Header from "@/components/Layout/header";
import Footer from "@/components/Layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-righteous",
});
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Melody",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${righteous.variable} ${montserrat.variable}`}>
      <body className="font-sans">
      <Header/>
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
        <Footer/>
      </body>
    </html>
  );
}
