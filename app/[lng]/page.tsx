import { Button } from "@/app/[lng]/components/ui/button";
import TeamCard from "@/app/[lng]/components/team-card/component";
import TeamPositionsCard from "@/app/[lng]/components/team-position-card/component";
import FaqCard from "@/app/[lng]/components/faq-card/component";

import ParallaxBadgeCard from "@/app/[lng]/components/ParallaxBadgeCard/component";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { useParallax } from "@/lib/framer-utils";
import { motion } from "framer-motion";
import HeroSection from "./components/ParallaxBadgeCard/hero-section";

export default async function Home({ params: { lng } }: any) {
  const { t } = await useTranslation(lng); // t is a function that takes a key and returns a translation

  const data = await fetch("https://plexuspro.baltic-galaxy.de/api/team", {
    next: { revalidate: 3600 },
  });
  const json = await data.json();

  const teamPositionsData = await fetch(
    "https://plexuspro.baltic-galaxy.de/api/tpos",
    { next: { revalidate: 3600 } }
  );
  const teamPositions = await teamPositionsData.json();

  return (
    <main className=" xl:w-3/4 w-5/6 mx-auto min-h-screen flex-col items-center">
      <HeroSection />
      <section className="">
        <div className="text-center">
          <h1 className="text-[35px] xl:text-[32px] mt-0">
            {t("page.team.title")}
          </h1>
          <p className="text-[15px] xl:text-[18px] mx-auto xl:w-3/4 w-4/4 mt-4 font-normal text-gray-400">
            {t("page.team.description")}
          </p>
        </div>

        <div className=" mt-8 scroll">
          <div className="scroll-items flex">
            {json.map((member: any, index: any) => (
              <TeamCard
                key={index}
                userName={member.username}
                realName={member.username}
                rankName={member.rank_name}
                bio={member.bio}
                twitterHandle={member.twitter_handle}
                entryDate={member.joined}
              />
            ))}
          </div>
          <div className="scroll-items flex">
            {json.map((member: any, index: any) => (
              <TeamCard
                key={index}
                userName={member.username}
                realName={member.username}
                rankName={member.rank_name}
                bio={member.bio}
                twitterHandle={member.twitter_handle}
                entryDate={member.joined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className=" mt-32 text-white">
        <div>
          <h1 className="text-white text-[32px] font-bold">
            {t("page.team.open-positions")}
          </h1>
          <p className="text-[15px] text-red-300">
            {t("page.team.flame-important-position")}
          </p>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6">
          {teamPositions &&
            teamPositions.map((position: any, index: any) =>
              lng === "de" ? (
                <TeamPositionsCard
                  key={index}
                  prio={position.de.prio}
                  positionId={position.de.position_id}
                  position_name={position.de.position_name}
                  description={position.de.description}
                  tags={position.de.tags}
                  requirements={position.de.requirements}
                  bonus_requirements={position.de.bonus_requirements}
                  colorTag={position.de.color_tag}
                  screenshot_url={position.de.screenshot_url}
                  lng={lng}
                />
              ) : (
                <TeamPositionsCard
                  key={index}
                  prio={position.en.prio}
                  positionId={position.en.position_id}
                  position_name={position.en.position_name}
                  description={position.en.description}
                  tags={position.en.tags}
                  requirements={position.en.requirements}
                  bonus_requirements={position.en.bonus_requirements}
                  colorTag={position.en.color_tag}
                  screenshot_url={position.en.screenshot_url}
                />
              )
            )}
        </div>
      </section>
      <section className="mt-36">
        <FaqCard></FaqCard>
      </section>
    </main>
  );
}
