import type { Metadata } from "next";
import {Montserrat} from "next/font/google";

import "./globals.css";
import Header from "@/app/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Serena | Viajes y Turismo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.className} bg-orangeBold font-medium antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
