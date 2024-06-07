import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";

import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

// const inter = Inter({ subsets: ["latin"] });
const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-baseColor">
      <body
        className={`bg-primaryLightNavyBlue m-69px rounded-lg border border-line ${firacode.className}`}
      >
        <div>
          <Header />

          {/* {children} */}
          <div className="flex-col site-content">{children}</div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
