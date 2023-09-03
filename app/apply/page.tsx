'use client';
import Image from 'next/image'
import PositionTile from "@/app/apply/PositionTile";
import {useEffect, useState} from "react";
import {wait} from "next/dist/build/output/log";
import {buttons, depbuttons} from "@/utils/buttons";
import {motion} from "framer-motion";
import TeamPositionsCard from "@/components/team-positions-card/page";
import {useRouter} from "next/navigation";

export default function Home() {

    const [teamPositions, setTeamPositions] = useState([] as any)

    const [isLoading, setLoading] = useState(false)
    const [filteredTeamPositions, setFilteredTeamPositions] = useState([] as any)
    let [activeTabPos, setActiveTabPos] = useState(depbuttons[0].value);
    const router = useRouter()
    let clickedRank: any;
    let clickedPos: any;

    useEffect(() => {
        setLoading(true);
        fetch('https://plexus.baltic-galaxy.de/api/tpos')
            .then((res) => res.json())
            .then((teamPositions) => {
                setTeamPositions(teamPositions)
                setFilteredTeamPositions(teamPositions)
            });
        setLoading(false);
        wait(10);

        setFilteredTeamPositions(teamPositions);
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (!teamPositions) return <p>No Data loaded</p>
    function filterTeamPositions(departmentName: any) {
        // @ts-ignore
        return teamPositions.filter(dep => dep.department === departmentName);
    }
    function handleTeamPositions(e: any) {
        let pos = e;
        clickedPos = pos;
        pos !== "all"
            ? setFilteredTeamPositions(filterTeamPositions(pos))
            : setFilteredTeamPositions(teamPositions);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="heading h-[60vh] lg:h-[50vh] xl:w-2/4 w-5/6">
                <h4 className="mt-32 xl:mt-52 text-center text-[24px]">WIR SUCHEN DICH</h4>
                <h1 className="text-[35px] xl:text-[32px] font-bold mt-0 text-center">Bereit für die Herausforderung?<br/>
                    Werde Teil unseres Teams!</h1>
                <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400 text-center">Tauche ein in unsere inspirierende Welt und werde Teil unseres Teams! Nutze die Chance, dich für eine Vielzahl von coolen und spannenden Projekten einzubringen, bei denen du deine Leidenschaft ausleben und neue Horizonte erkunden kannst. Hier warten unzählige Möglichkeiten darauf, von dir entdeckt zu werden – bewirb dich noch heute und gestalte gemeinsam mit uns die Zukunft!
                </p>


            </div>
            <div className="h-1/2 xl:w-3/4 w-5/6 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Stelle dir vor...</h1>
                <div className="mt-16 grid xl:grid-cols-4 grid-cols-1 gap-12 xl:gap-8">

                    <div className=" transition-all ease">
                        <span>
                            <Image
                                className="h-8"
                                src="/assets/images/icons/heart.svg"
                                alt="heart icon"
                                width={40}
                                height={40}
                            />
                        </span>
                        <p className="mt-6 text-gray-300 text-[18px] xl:text-[22px]">
                            Ein Umfeld, bei dem du dich wohlfühlst, Spaß hast und dein Talent frei entfalten kannst. Ohne Druck.
                        </p>
                    </div>

                    <div className=" transition-all ease">
                        <span>
                            <Image
                                className="h-8"
                                src="/assets/images/icons/house.svg"
                                alt="heart icon"
                                width={40}
                                height={40}
                            />
                        </span>
                        <p className="mt-6 text-gray-300 text-[18px] xl:text-[22px]">
                            Ein Team, welches dir jederzeit unter die Arme greift und nicht das gesamte Projekt auf deinen Schultern lastet.
                        </p>
                    </div>

                    <div className="transition-all ease">
                        <span>
                            <Image
                                className="h-8"
                                src="/assets/images/icons/rocket.svg"
                                alt="heart icon"
                                width={40}
                                height={40}
                            />
                        </span>
                        <p className="mt-6 text-gray-300 text-[18px] xl:text-[22px]">
                            Ein Ort, bei dem dir niemand sagt, wie du dein Können in die Tat umsetzt. An dem du mitbestimmen darfst.
                        </p>
                    </div>

                    <div className=" transition-all ease">
                        <span>
                            <Image
                                className="h-8"
                                src="/assets/images/icons/bulb.svg"
                                alt="heart icon"
                                width={40}
                                height={40}
                            />
                        </span>
                        <p className="mt-6 text-gray-300 text-[18px] xl:text-[22px]">
                            Ein Projekt, welches über jahrelange Planung und finanzielle Sicherheit verfügt.
                        </p>
                    </div>

                </div>
            </div>

            <div id="positions" className="h-1/2 xl:w-3/4 w-5/6 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Unsere offenen Positionen</h1>
                <p className="text-[15px] text-red-300">
                    Die mit Flammenmarkierung suchen wir zurzeit besonders!
                </p>

                <div className="mt-8">
                    <ul className="">
                        <li className="mr-2 inline mt-1">Filtern nach:</li>
                        <li className="inline-flex flex-wrap mt-2">
                            {depbuttons.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        handleTeamPositions(tab.value);
                                        setActiveTabPos(tab.value);
                                    }}
                                    value={tab.value}
                                    className={`${
                                        activeTabPos === tab.value ? "active" : ""
                                    } relative badge mt-1 mr-2`}
                                    style={{
                                        WebkitTapHighlightColor: "transparent",
                                    }}
                                >
                                    {activeTabPos === tab.value && (
                                        <motion.span
                                            layoutId="bubble2"
                                            className="absolute inset-0 z-10 bg-white/10 mix-blend-difference"
                                            style={{ borderRadius: 9999 }}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {tab.name}
                                </button>
                            ))}
                        </li>
                    </ul>

                    <br/>
                    <p className="text-white/70">{filteredTeamPositions && filteredTeamPositions.length} Positionen sind offen </p>
                </div>

                <div className="mt-10 transition ease-in-out">

                    {filteredTeamPositions && filteredTeamPositions.map((position: any, index: any) => (
                        <TeamPositionsCard key={index} prio={position.prio} positionId={position.position_id} position_name={position.position_name} description={position.description} tags={position.tags} requirements={position.requirements} />
                    ))}
                </div>

            </div>

        </main>
    )
}
