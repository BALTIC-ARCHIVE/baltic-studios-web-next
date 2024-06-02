import Image from "next/image";
import { Button } from "../ui/button";
import { LanguageSwitcher } from "@/app/i18n/components/LanguageSwitcher";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n";

export default async function Navbar({ language }: any) {
  const { t } = await useTranslation(language);
  function mobileMenu(e: any) {
    // Grab HTML Elements
    const btn = document.querySelector("button.mobile-menu-button");
    const menu = document.querySelector(".mobile-menu");
    // @ts-ignore
    menu.classList.toggle("hidden");
  }

  return (
    <nav
      className="mx-auto hidden lg:flex max-w-[1200px] xl:w-4/4 items-center justify-between py-6 z-99999"
      aria-label="Global"
    >
      <div className="flex lg:flex-1">
        <a href="/" className="">
          <span className="sr-only">Link</span>
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={200}
            height={48}
            priority
          />
        </a>
      </div>
      <div className="hidden lg:flex lg:flex-1 lg:gap-x-2 mt-2 lg:justify-end">
        <LanguageSwitcher lng={language} />
        <a href="https://baltic-galaxy.com">
          <Button variant="default" size="lg" className="rounded-full">
            {t("visit-baltic-galaxy")}
          </Button>
        </a>
      </div>
    </nav>
  );
}
