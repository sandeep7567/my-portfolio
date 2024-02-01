import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/segment/navbar";
import { Footer } from "@/components/segment/footer";

export const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Sandeep || Portfolio Website",
  description: "Sandeep || Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen mx-auto text-black relative font-sans antialiased",
          inter.variable
        )}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-gradient" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
