'use client'
import Image from 'next/image';
import {motion} from "framer-motion";
import TeamCard from "@/components/team-card/page";
import {buttons, depbuttons} from '@/utils/buttons';
import {useEffect, useState} from "react";
import TeamPositionsCard from "@/components/team-positions-card/page";
import {wait} from "next/dist/build/output/log";
import AudioListItem from "@/components/audio-list-item/comp";
/* eslint-disable */
export default function Home() {

    const [teamData, setTeamData] = useState([] as any)
    const [teamPositions, setTeamPositions] = useState([] as any)

    const [isLoading, setLoading] = useState(false)
    const [filteredTeamMember, setFilteredTeamMember] = useState([] as any)
    const [filteredTeamPositions, setFilteredTeamPositions] = useState([] as any)
    let [activeTab, setActiveTab] = useState(buttons[0].value);
    let [activeTabPos, setActiveTabPos] = useState(depbuttons[0].value);
    let clickedRank: any;
    let clickedPos: any;

    useEffect(() => {
        setLoading(true);
        fetch('https://plexus.baltic-galaxy.de/api/team')
            .then((res) => res.json())
            .then((teamData) => {
                setTeamData(teamData)
                setTeamData(teamData)
            });
        fetch('https://plexus.baltic-galaxy.de/api/tpos')
            .then((res) => res.json())
            .then((teamPositions) => {
                setTeamPositions(teamPositions)
                setFilteredTeamPositions(teamPositions)
            });
        setLoading(false);
        wait(10);

        setFilteredTeamPositions(teamPositions);
        setFilteredTeamMember(teamData);
    }, [])


    if (isLoading) return <p>Loading...</p>
    if (!teamData && !teamPositions) return <p>No profile data</p>

     function filterTeamMember(rankName: any) {
         // @ts-ignore
         return teamData.filter(rank => rank.rank === rankName);
    }
    function filterTeamPositions(departmentName: any) {
        // @ts-ignore
        return teamPositions.filter(dep => dep.department === departmentName);
    }
    function handleTeamMember(e: any) {
        let rankTeamMember = e;
        clickedRank = rankTeamMember;
        rankTeamMember !== "all"
            ? setFilteredTeamMember(filterTeamMember(rankTeamMember))
            : setFilteredTeamMember(teamData);
        console.log(rankTeamMember);
    }
    function handleTeamPositions(e: any) {
        let pos = e;
        clickedPos = pos;
        pos !== "all"
            ? setFilteredTeamPositions(filterTeamPositions(pos))
            : setFilteredTeamPositions(teamPositions);
    }

    // @ts-ignore
    // @ts-ignore
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className=" heading mx-auto max-w-4xl">
                <h4 className="mt-52">UNSERE MISSION</h4>
                <h1>Wir schaffen großartiges für Augen und Ohren</h1>
                <p className="mt-6">Seit nun mehreren Jahren arbeiten wir als talentiertes Team daran, dir eine unvergessliche Zeit zu erschaffen.
                    Wir schreiben, denken, entwickeln, designen, bauen, komponieren, modellieren und investieren all unsere Leidenschaft in unseren aktuellen,
                    sowie zukünftigen Projekten. Du möchtest ein Teil davon sein? Dann nichts wie ab!
                </p>

                <div className="flex mt-8 relative z-50">
                    <a href="#"
                       className="text-white px-8 py-3 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">Offene
                        Stellen abchecken</a>
                </div>

            </div>
            <div className="h-1/2 w-3/4 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Das ultimative Team</h1>


                <p className="text-[15px] mt-4 text-white/70">
                    Keine Sorge, du lernst uns noch kennen. Filmabende, Spieleabende, aufregende Talks über die neusten Serien - das alles gehört dazu!
                </p>
                <div className="mt-4">
                    <ul className="inline-flex float-left">
                        <li className="mr-2 mt-1">Filtern nach:</li>

                        {buttons.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    handleTeamMember(tab.value);
                                    setActiveTab(tab.value);
                                }}
                                value={tab.value}
                                className={`${
                                    activeTab === tab.value ? "active" : ""
                                } relative badge`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTab === tab.value && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-white/10 mix-blend-difference"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.name}
                            </button>
                        ))}


                    </ul>


                    <ul className="float-right">
                        <li>Sortien nach: Keine</li>
                    </ul>
                    <br/>
                    <br/>
                    <p className="text-white/70">{filteredTeamMember && filteredTeamMember.length} Mitglieder werden angezeigt. </p>
                </div>


                <div className="mt-20 grid grid-cols-3 gap-x-5 gap-y-16">


                    {filteredTeamMember && filteredTeamMember.map((member: any, index: any) => (
                        <TeamCard key={index}
                                  userName={member.username}
                                  realName={member.username}
                                  rankName={member.rank_name}
                                  bio={member.rank}
                                  twitterHandle={member.twitter_handle}
                                  entryDate={member.joined}
                        />
                    ))}



                </div>


            </div>

            <div className="h-1/2 w-3/4 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px]">Stelle dir vor...</h1>
                <div className="mt-16 grid grid-cols-4 gap-8">

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/heart.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Umfeld, bei dem du dich wohlfühlst, Spaß hast und dein Talent frei entfalten kannst. Ohne Druck.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/house.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Team, welches dir jederzeit unter die Arme greift und nicht das gesamte Projekt auf deinen Schultern lastet.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/rocket.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Ort, bei dem dir niemand sagt, wie du dein Können in die Tat umsetzt. An dem du mitbestimmen darfst.
                        </p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/bulb.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">
                            Ein Projekt, welches über jahrelange Planung und finanzielle Sicherheit verfügt.
                        </p>
                    </div>

                </div>
            </div>

            <div className="h-1/2 w-3/4 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Unsere offenen Positionen</h1>
                <p className="text-[15px] text-red-300">
                    Die mit Flammenmarkierung suchen wir zurzeit besonders!
                </p>

                <div className="mt-8">
                    <ul className="inline-flex float-left">
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
                                } relative badge`}
                                style={{
                                    WebkitTapHighlightColor: "transparent",
                                }}
                            >
                                {activeTabPos === tab.value && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-white/10 mix-blend-difference"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.name}
                            </button>
                        ))}
                    </ul>

                    <ul className="float-right">
                        <li>Sortien nach: Keine</li>
                    </ul>
                    <br/>
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
