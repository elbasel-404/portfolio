import { type Metadata } from "next";
import { type ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elbasel",
  description: "Frontend Portfolio",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}

        <Script
          strategy="beforeInteractive"
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
          // onReady={() => sleep(1).then(() => setThreeReady(true))}
        />
      </body>
    </html>
  );
};

export default RootLayout;
