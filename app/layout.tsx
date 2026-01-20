import type { Metadata } from "next";
import { Fraunces, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  variable: "--font-merriweather-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Opulence Strand | Luxury Nail Salon in Strand, Cape Town",
  description: "Experience premium nail care at Opulence Beauty Salon, the only full sea-view luxury nail salon in Strand, Cape Town. Specializing in gel nails, manicures, pedicures, nail art, and waxing with stunning ocean views. Book your appointment today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className={`${merriweatherSans.variable} ${fraunces.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
