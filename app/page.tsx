import Image from "next/image";
import { Button } from "@/components/ui/button";
import TeamCard from "@/components/team-card/component";
import TeamPositionsCard from "@/components/team-position-card/component";
import FaqCard from "@/components/faq-card/component";

export default async function Home() {
  const data = await fetch("https://plexuspro.baltic-galaxy.de/api/team", {
    cache: "no-cache",
  });
  const json = await data.json();

  const teamPositionsData = await fetch(
    "https://plexuspro.baltic-galaxy.de/api/tpos",
    {
      cache: "no-cache",
    }
  );
  const teamPositions = await teamPositionsData.json();

  return (
    <main className=" xl:w-3/4 w-5/6 mx-auto min-h-screen flex-col items-center">
      <section className="flex py-28">
        <div className="my-auto xl:w-2/4 w-5/6">
          <h4 className=" text-[24px]">WIR SUCHEN DICH</h4>
          <h1 className="text-[35px] xl:text-[32px] font-bold mt-0">
            Bereit für die Herausforderung?
            <br />
            Werde Teil unseres Teams!
          </h1>
          <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400">
            Tauche ein in unsere inspirierende Welt und werde Teil unseres
            Teams! Nutze die Chance, dich für eine Vielzahl von coolen und
            spannenden Projekten einzubringen, bei denen du deine Leidenschaft.
          </p>
          <div className="flex mt-8 relative z-50">
            <Button>Offene Positionen</Button>
            <Button variant="outline" className="ml-4">
              Discord beitreten
            </Button>
          </div>
        </div>

        <div className=" xl:w-2/4 w-5/6">
          <Image
            src="/assets/images/custom/header.svg"
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </div>
      </section>

      <section className="">
        <div className="text-center">
          <h1 className="text-[35px] xl:text-[32px] mt-0">
            Arbeite mit einem hervorragendem Team
          </h1>
          <p className="text-[15px] xl:text-[18px] mx-auto w-3/4 mt-4 font-normal text-gray-400">
            Tauche ein in unsere inspirierende Welt und werde Teil unseres
            Teams! Nutze die Chance, dich für eine Vielzahl von coolen und
            spannenden Projekten einzubringen, bei denen du deine Leidenschaft.
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
            Unsere offenen Positionen
          </h1>
          <p className="text-[15px] text-red-300">
            Die mit Flammenmarkierung suchen wir zurzeit besonders!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-x-6 gap-y-6">
          {teamPositions &&
            teamPositions.map((position: any, index: any) => (
              <TeamPositionsCard
                key={index}
                prio={position.prio}
                positionId={position.position_id}
                position_name={position.position_name}
                description={position.description}
                tags={position.tags}
                requirements={position.requirements}
                bonus_requirements={position.bonus_requirements}
                colorTag={position.color_tag}
              />
            ))}
        </div>
      </section>
      <section className="mt-36">
        <FaqCard></FaqCard>
      </section>
    </main>
  );
}
