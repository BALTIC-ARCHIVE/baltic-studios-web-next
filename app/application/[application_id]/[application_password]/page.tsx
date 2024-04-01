import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ApplyStatus,
  ApplyStatusDescription,
  ApplyStatusTitle,
} from "@/components/ui/applystatus";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Terminal } from "lucide-react";
import Image from "next/image";
import { MouseEvent } from "react";

export default async function ApplicationViewPage({
  params,
}: {
  params: { application_id: string; application_password: string };
}) {
  const applicationData = await fetch(
    "https://plexuspro.baltic-galaxy.de/api/application/" +
      params.application_id +
      "/" +
      params.application_password,
    {
      cache: "no-cache",
    }
  );
  const application = await applicationData.json();

  // @ts-ignore
  function getImageUrl(userName): any {
    return "https://cravatar.eu/helmavatar/" + userName + "/250.png";
  }

  return (
    <main className="xl:w-3/4 w-5/6 mx-auto min-h-screen flex-col items-center">
      <section className="flex py-12 mt-16 w-full relative">
        <span
          className={`bg-white/10 absolute hover:bg-white/20 hover:cursor-pointer duration-200 transition-all ease-in px-4 py-2 rounded-md `}
        >
          <svg
            className="inline mr-2 mb-[2px]"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8L1 8M1 8L7.75 14.75M1 8L7.75 1.25"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zurück zur Startseite
        </span>

        <div className="text-center mx-auto mt-32">
          <h1 className="text-[35px] xl:text-[45px] mt-0">
            Vielen Dank für deine Bewerbung!
          </h1>
          <p className="text-[15px] xl:text-[18px] mx-auto w-3/4 mt-4 font-normal text-gray-400">
            Vielen Dank für deine Bewerbung! Wir haben deine Bewerbung erhalten
            und werden uns in Kürze bei dir melden.
          </p>
        </div>
      </section>
      <section className="flex w-1/2 mx-auto flex-col items-center">
        <hr className="h-[2px] w-24  bg-gray-200/60 border-0" />
        <span className="text-gray-200/60 mt-4 mb-2">
          STATUS DEINER BEWERBUNG
        </span>
        <ApplyStatus variant={application.status}>
          <ApplyStatusTitle>
            {application.status === "ausstehend" && "In Bearbeitung"}
            {application.status === "einladung" && "Einladung zum Kennenlernen"}
            {application.status === "testprojekt" &&
              "Einladung zum Testprojekt"}
            {application.status === "feedback" &&
              "Einladung zum Feedback-Gespräch"}
            {application.status === "angenommen" && "Angenommen"}
            {application.status === "abgelehnt" && "Abgelehnt"}
          </ApplyStatusTitle>
        </ApplyStatus>

        <Card className="mt-12 w-full">
          <CardHeader className="inline-block">
            <span className="h-3 w-3 rounded-full inline-block bg-[#FF007A]"></span>
            <p className="ml-2 inline-block text-[#FF007A]">NEUE NACHRICHT</p>
          </CardHeader>
          <CardContent>
            <div className="flex">
              <div className="">
                <Image
                  className="h-12 w-12 rounded"
                  width={80}
                  height={80}
                  alt="alt"
                  src={getImageUrl(application.feeback_author.username)}
                />
              </div>
              <div className="ml-4">
                <p>{application.feeback_author.username}</p>
                <span className="text-xs text-[#B2B2B2]">
                  {application.feeback_author.rank}
                </span>
              </div>
            </div>
            <div className="mt-4">{application.feedback}</div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
