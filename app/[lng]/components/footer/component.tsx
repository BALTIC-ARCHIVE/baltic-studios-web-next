"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";
import { Button } from "../ui/button";

export default function Footer() {
  const params = useParams();
  const { t } = useTranslation(params.lng);
  return (
    <div className="w-4/4 max-w-[1200px] xl:w-3/4 w-6/6 px-4 xl:px-0 mx-auto pb-32 mt-28 ">
      <div className="flex flex-wrap justify-between xl:h-16 h-10 pt-12 gap-x-1 border-gray-800 border-t">
        <div className="h-fit col-span-4">
          <a href="https://baltic-studios.de">
            <Image
              src="/assets/logo.png"
              width={200}
              height={200}
              alt="Baltic Studios Logo"
            />
          </a>
          <ul className="pt-8">
            <li className="text-white/60 hover:text-white/80 inline text-[15px] font-normal">
              <Link href="/privacy">{t("privacy")}</Link>
            </li>
            <li className="text-white/60 hover:text-white/80 inline mx-6 text-[15px] font-normal">
              <Link href="/imprint">{t("imprint")}</Link>
            </li>
          </ul>
        </div>
        <div className="h-fit col-span-1 xl:mt-0 mt-10 pb-10 xl:text-end">
          <a href="https://baltic-galaxy.com">
            <Button variant="default" size="lg" className="rounded-full">
              {t("visit-baltic-galaxy")}
            </Button>
          </a>
          <p className="pt-6 text-sm text-white/40">
            COPYRIGHT © BALTIC STUDIOS 2024
          </p>
        </div>
      </div>
    </div>
  );
}
