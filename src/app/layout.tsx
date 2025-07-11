import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Erik Graybill",
  description: "Erik Graybill's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Erik Graybill" />
      </head>
      <body className={`${robotoSans.variable} antialiased bg-erg-second-accent-tan`}>
        <div className="flex flex-col min-h-screen max-w-[1600px] mx-auto bg-erg-background-white text-sm">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
