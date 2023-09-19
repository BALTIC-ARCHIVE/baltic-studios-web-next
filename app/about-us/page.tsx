'use client'
import Image from 'next/image';
import {motion} from "framer-motion";
import TeamCard from "@/components/team-card/page";
import {buttons, depbuttons} from '@/utils/buttons';
import {useEffect, useState} from "react";
import TeamPositionsCard from "@/components/team-positions-card/page";
import {wait} from "next/dist/build/output/log";
import AudioListItem from "@/components/audio-list-item/comp";
import InputGroup from "@/components/utils/InputGroup";
import InputTextArea from "@/components/utils/InputTextArea";
import { useRouter } from 'next/navigation'
import useFetch from "@/app/hooks/useFetch";
/* eslint-disable */
export default function Home() {

    const [filteredTeamMember, setFilteredTeamMember] = useState([] as any)
    let [activeTab, setActiveTab] = useState(buttons[0].value);
    const router = useRouter()
    let clickedRank: any;
    let clickedPos: any;

    const { loading, error, data, refetch } = useFetch({
        url: "https://plexus.baltic-galaxy.de/api/team",
        method: "get",
        key: [],
        cache: {
            enabled: true,
            ttl: 100
        }
    });

    useEffect(() => {
        if (data){
            handleTeamMember('all');
        }
    }, [data])

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Something went wrong</p>;
    }



    function filterTeamMember(rankName: any) {
         // @ts-ignore
         return data.data.filter(rank => rank.rank === rankName);
    }
    function handleTeamMember(e: any) {
        let rankTeamMember = e;
        clickedRank = rankTeamMember;
        rankTeamMember !== "all"
            ? setFilteredTeamMember(filterTeamMember(rankTeamMember))
            : setFilteredTeamMember(data.data);
        console.log(rankTeamMember);
    }


    // @ts-ignore
    // @ts-ignore
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="heading relative h-[75vh] lg:h-[65vh] xl:w-2/4 w-5/6">
                <h4 className="mt-32 text-[18px] xl:mt-52">UNSERE MISSION</h4>
                <h1 className="text-[35px] xl:text-[35px] font-bold mt-0">Wir schaffen großartiges für Augen und Ohren</h1>
                <p className="text-[15px] xl:text-[18px] mt-4 font-normal text-gray-400">Seit nun mehreren Jahren arbeiten wir als talentiertes Team daran, dir eine unvergessliche Zeit zu erschaffen.
                    Wir schreiben, denken, entwickeln, designen, bauen, komponieren, modellieren und investieren all unsere Leidenschaft in unseren aktuellen,
                    sowie zukünftigen Projekten. Du möchtest ein Teil davon sein? Dann nichts wie ab!
                </p>

                <div className="flex mt-8 relative z-50">
                    <a href="/apply"
                       className="text-black px-8 py-3 rounded-md hover:bg-[#00FFA3]/90 bg-[#00FFA3] border-[#7E89B1] text-sm font-medium mr-5">Offene
                        Positionen</a>
                </div>
                <div className="ellipse-about-purple z-0 top-24 absolute"></div>
                <div className="ellipse-about-purple-light z-0 top-12 right-32 absolute"></div>
            </div>
            <div className="h-1/2 xl:w-3/4 w-5/6 mx-auto text-white">
                <h1 className="text-white text-[30px] font-bold">Die Söldnerbande</h1>


                <p className="text-[15px] mt-4 text-white/70">
                    Keine Sorge, du lernst uns noch kennen. Filmabende, Spieleabende, aufregende Talks über die neusten Serien - das alles gehört dazu!
                </p>
                <div className="mt-4">
                    <ul className="">
                        <li className="mr-2 inline mt-1">Filtern nach:</li>
                        <li className="inline-flex flex-wrap mt-2">
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
                                    } relative badge mt-1 mr-2`}
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
                        </li>


                    </ul>


                    <br/>
                    <p className="text-white/70">{filteredTeamMember && filteredTeamMember.length} Mitglieder werden angezeigt. </p>
                </div>


                <div className="mt-20 grid grid-cols-1 xl:grid-cols-3 gap-x-2 gap-y-16 xl:gap-x-5 xl:gap-y-16">


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

            <div className="heading h-[65vh] relative xl:w-2/4 w-5/6">
                <h4 className="mt-32 text-[18px] text-center font-normal xl:mt-52">JETZT TEIL DES TEAMS WERDEN!</h4>
                <h1 className="text-[35px] xl:text-[52px] text-center font-bold mt-0">Entfalte deine Kreativität<br/>
                    für aufregende Projekte</h1>

                <div className="flex mt-8 relative justify-center z-50">
                    <a href="/apply"
                       className="text-black px-8 py-3 rounded-3xl hover:bg-[#00FFA3]/90 bg-[#00FFA3] border-[#7E89B1] text-sm font-medium mr-5">Offene
                        Positionen</a>
                </div>
                <div className="ellipse-about-green z-0 top-32 absolute"></div>
                <div className="ellipse-about-green z-0 top-0 right-20 absolute"></div>
            </div>

        </main>
    )
}
