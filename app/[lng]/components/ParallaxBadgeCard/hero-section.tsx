"use client";

import { useParallax } from "@/lib/framer-utils";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";
import ParallaxBadgeCard from "./component";

export default function HeroSection() {
  const params = useParams();
  const { t } = useTranslation(params.lng);
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();

  return (
    <section className="flex mx-20 py-28">
      <motion.div
        className="flex"
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className="my-auto xl:w-2/4 w-6/6">
          <h4 suppressHydrationWarning className=" text-[24px]">
            {t("page.header.subtitle")}
          </h4>
          <h1
            className="text-[35px] xl:text-[32px] font-bold mt-0"
            dangerouslySetInnerHTML={{ __html: t("page.header.title") }}
          ></h1>

          <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400">
            {t("page.header.description")}
          </p>
          <div className="flex mt-8 relative z-50">
            <Button>{t("page.header.button-open-positions")}</Button>
            <Button variant="outline" className="ml-4">
              {t("page.header.button-join-discord")}
            </Button>
          </div>
        </div>

        <ParallaxBadgeCard primaryX={primaryX} primaryY={primaryY} />
      </motion.div>
    </section>
  );
}
