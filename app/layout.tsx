import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Navbar } from "@/components/segment/navbar";
import { Footer } from "@/components/segment/footer";

import { ThemeProvider } from "@/provider/theme-provider";

import "./globals.css";

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
          "relative min-h-screen h-full scroll-smooth mx-auto text-black dark:text-gradient font-sans antialiased overflow-x-hidden",
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]  dark:bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"/>
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 text-black dark:text-white bg-gradient dark:[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"/>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
