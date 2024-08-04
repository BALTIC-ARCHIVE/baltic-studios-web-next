"use client";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";
import { MessageCircleDashedIcon } from "lucide-react";
import messageIcon from "@/public/assets/images/icons/message.svg";
import applySchemaImage from "@/public/assets/images/custom/apply_schema.png";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";
export default function FaqCard() {
  const params = useParams();
  const { t } = useTranslation(params.lng);
  return (
    <div>
      <Card className="xl:p-8 p-2">
        <CardHeader className="text-center">
          <h1 className="text-[35px] xl:text-[32px] mt-0">{t("faq.title")}</h1>
        </CardHeader>
        <CardContent className="mt-4 grid grid-cols-5 gap-x-4">
          <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 col-span-5">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  {t("faq.questions.question1")}
                </AccordionTrigger>
                <AccordionContent>
                  {t("faq.questions.answer1")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  {t("faq.questions.question2")}
                </AccordionTrigger>
                <AccordionContent>
                  {t("faq.questions.answer2")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  {t("faq.questions.question3")}
                </AccordionTrigger>
                <AccordionContent>
                  {t("faq.questions.answer3")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  {t("faq.questions.question4")}
                </AccordionTrigger>
                <AccordionContent>
                  {t("faq.questions.answer4")}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  {t("faq.questions.question5")}
                </AccordionTrigger>
                <AccordionContent>
                  {t("faq.questions.answer5")}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-5 mt-6 xl:mt-0 lg:mt-0 md:mt-0 p-8 rounded-xl bg-gradient-to-t from-[#5865F200] to-[#D9DCFE08]">
            <span className="flex justify-center mb-4">
              <Image className="" alt="Message Icon" src={messageIcon} />
            </span>
            <h3 className="text-[22px] text-center xl:text-[22px] mt-0">
              {t("faq.have_question")}
            </h3>
            <div className="flex justify-center mt-6 relative z-50">
              <Button variant="discord" className="mx-auto" asChild>
                <Link href="https://discord.gg/Cm48zDkSvr">
                  {t("faq.button_discord")}
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
