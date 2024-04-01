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
export default function FaqCard() {
  return (
    <div>
      <Card className="p-8">
        <CardHeader className="text-center">
          <h1 className="text-[35px] xl:text-[32px] mt-0">
            Häufig gestellte Fragen
          </h1>
          <p className="text-[15px] xl:text-[18px] mx-auto w-3/4 mt-4 font-normal text-gray-400">
            Tauche ein in unsere inspirierende Welt und werde Teil unseres
            Teams! Nutze die Chance, dich für eine Vielzahl von coolen und
            spannenden Projekten einzubringen, bei denen du deine Leidenschaft.
          </p>
        </CardHeader>
        <CardContent className="mt-4 grid grid-cols-5 gap-x-4">
          <div className="col-span-3">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Habt ihr ein Mindestalter für die Teampositionen?
                </AccordionTrigger>
                <AccordionContent>
                  Ja, um Teil des Teams zu werden, musst du mindestens 15 Jahre
                  alt sein.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Bekomme ich Feedback nach einer abgelehnten Bewerbung?
                </AccordionTrigger>
                <AccordionContent>
                  Ja, wir geben dir Feedback, damit du dich verbessern kannst.
                  Dieses kannst du in deinem Bewerbungsportal einsehen.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Brauche ich umfassende Kenntnisse über Star Wars?
                </AccordionTrigger>
                <AccordionContent>
                  Nein, du musst kein Star Wars Experte sein, um Teil unseres
                  Teams zu werden. Wir erklären dir alles, was du wissen musst.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Kann ich mich mehrmals bewerben?
                </AccordionTrigger>
                <AccordionContent>
                  Ja, du kannst dich so oft bewerben, wie du möchtest. Jedoch
                  solltest du darauf achten, dass du dich verbessert hast, bevor
                  du dich erneut bewirbst.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Wie läuft der Bewerbungsprozess ab?
                </AccordionTrigger>
                <AccordionContent>
                  Der Bewerbungsprozess besteht aus mehreren Schritten. Nachdem
                  du deine Bewerbung abgeschickt hast, wird diese von unserem
                  Team geprüft. Wenn deine Bewerbung positiv ausfällt, wirst du
                  zu einem Gespräch eingeladen. Nach dem du das Gespräch
                  erfolgreich absolviert hast, erhältst du eine Test-Aufgabe von
                  uns. Wenn du diese Aufgabe erfolgreich abgeschlossen hast,
                  erhältst du von uns Feedback. Dort entscheiden wir, ob du in
                  unser Team passt.
                  <Image src={applySchemaImage} alt="lol" />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="col-span-2 p-8 rounded-xl bg-gradient-to-t from-[#5865F200] to-[#D9DCFE08]">
            <span className="flex justify-center mb-4">
              <Image className="" alt="Message Icon" src={messageIcon} />
            </span>
            <h3 className="text-[22px] text-center xl:text-[22px] mt-0">
              Du hast immer noch <br /> einpaar Fragen?
            </h3>
            <div className="flex justify-center mt-6 relative z-50">
              <Button variant="discord" className="mx-auto" asChild>
                <Link href="https://discord.gg/Cm48zDkSvr">
                  Discord beitreten
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
