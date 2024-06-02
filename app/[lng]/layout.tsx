import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

// These styles apply to every route in the application
import "./globals.css";
import Navbar from "@/app/[lng]/components/navbar/navbar";
import MobileNavbar from "@/app/[lng]/components/mobile-navbar/mobile-navbar";
import Template from "./template";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "@/app/[lng]/components/theme-provider";
import { dir, t } from "i18next";

import { languages } from "../i18n/settings";
import { headers } from "next/headers";
import Link from "next/link";
import Footer from "./components/footer/component";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BALTIC STUDIOS",
  description: "We create great things for the eyes and ears",
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: {
    lng: string;
  };
}) {
  const heads = headers();

  const routeParam = heads.get("next-url");
  return (
    <html lang={lng} dir={dir(lng)}>
      <body
        suppressHydrationWarning={true}
        className={`bg-black text-white overflow-x-hidden w-max-[1200px] ${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <header className="bg-transparent absolute z-50 top-0 left-0 w-full">
            <Navbar language={lng}></Navbar>
            <MobileNavbar></MobileNavbar>
          </header>
          <Template key={routeParam}>{children}</Template>

          <Footer></Footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
