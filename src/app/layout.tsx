import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const firacode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pro-folio",
  description: "Prem Banker's Developer Portfolio",
  keywords: "Portfolio, Developer, Software Engineer, Full Stack, Prem Banker",
  authors: {
    name: "Prem Banker",
    url: "https://www.prembanker.com",
  },

  openGraph: {
    title: "Pro-folio",
    description: "Prem Banker's Developer Portfolio",
    url: "https://www.prembanker.com",
    type: "website",
    images: [
      {
        url: "/public/images/og-image.png",
        width: 800,
        height: 600,
        alt: "Pro-folio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro-folio",
    description: "Prem Banker's Developer Portfolio",
    images: ["/public/images/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-baseColor">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other meta tags or link tags here */}
      </head>

      {/* handling different componets for mobile and web/ */}
      <body className={`${firacode.className}`}>
        {/* Web */}
        <div className="hidden md:block bg-primaryLightNavyBlue m-[56px] rounded-lg border border-line">
          <Header />
          <div className="flex flex-col web-content site-content overflow-y-auto">
            {children}
          </div>
          <Footer />
        </div>

        {/* Mobile */}
        <div className="block flex flex-col h-screen md:hidden">
          <Header />
          <div className="flex-grow mobile-content flex flex-col">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
