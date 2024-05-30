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
import { dir } from "i18next";

import { languages } from "../i18n/settings";
import { headers } from "next/headers";

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
        className={`bg-black text-white w-max-screen ${inter.className}`}
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

          <div className="w-4/4 xl:w-3/4 w-5/6 mx-auto pb-12 mt-28 ">
            <div className="grid xl:grid-cols-5 grid-cols-2 xl:h-16 h-10 gap-x-1 border-gray-800 border-b">
              <div className="h-fit col-span-1">
                <a href="https://baltic-studios.de">
                  <Image
                    src="/assets/logo.png"
                    width={200}
                    height={200}
                    alt="Baltic Studios Logo"
                  />
                </a>
              </div>
              <div className="h-fit w-full col-span-3">
                <p className="xl:text-xl mt-1 text-[12px] text-gray-500">
                  Ein Universum voller Ideen
                </p>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
