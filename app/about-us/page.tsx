'use client'
import Image from 'next/image';
import flameImage from '../../public/assets/images/icons/flamme.png';
import TeamCard from "@/components/team-card/page";
import {buttons, depbuttons} from '@/utils/buttons';
import {useEffect, useState} from "react";
import TeamPositionsCard from "@/components/team-positions-card/page";

export default function Home() {
    let teamView: string = "all";
    const [teamData, setTeamData] = useState(null)
    const [teamPositions, setTeamPositions] = useState(null)

    const [isLoading, setLoading] = useState(false)
    const [filteredTeamMember, setFilteredTeamMember] = useState(null);
    const [filteredTeamPositions, setFilteredTeamPositions] = useState(null);
    let clickedRank: any;
    let clickedPos: any;
    useEffect(() => {
        setLoading(true)
        fetch('https://plexus.baltic-galaxy.de/api/team')
            .then((res) => res.json())
            .then((teamData) => {
                setTeamData(teamData)
                setLoading(false)
            })
        fetch('https://plexus.baltic-galaxy.de/api/tpos')
            .then((res) => res.json())
            .then((teamPositions) => {
                setTeamPositions(teamPositions)
                setLoading(false)
            })
        setFilteredTeamPositions(teamPositions)
        setFilteredTeamMember(teamData)
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!teamData) return <p>No profile data</p>
     function filterTeamMember(rankName: any) {
         return teamData.filter(rank => rank.rank === rankName);
    }
    function filterTeamPositions(departmentName: any) {
        return teamPositions.filter(dep => dep.department === departmentName);
    }
    function handleTeamMember(e: any) {
        let rankTeamMember = e.target.value;
        clickedRank = rankTeamMember;
        rankTeamMember !== "all"
            ? setFilteredTeamMember(filterTeamMember(rankTeamMember))
            : setFilteredTeamMember(teamData);
    }
    function handleTeamPositions(e: any) {
        let pos = e.target.value;
        clickedPos = pos;
        pos !== "all"
            ? setFilteredTeamPositions(filterTeamPositions(pos))
            : setFilteredTeamPositions(teamPositions);
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className=" heading mx-auto max-w-4xl">
                <h4 className="mt-52">UNSERE MISSION</h4>
                <h1>Entdecke die neuen Sterne jawoll</h1>
                <p className="mt-6">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                    hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae
                    mattis tellus.
                    Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. </p>

                <div className="flex mt-8 relative z-50">
                    <a href="#"
                       className="text-white px-8 py-3 rounded-md bg-[#00FFA3] text-black border-[#7E89B1] text-sm font-medium mr-5">Offene
                        Stellen abchecken</a>
                </div>

            </div>
            <div className="h-1/2 w-3/4 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Das ultimative Team</h1>


                <p className="text-[15px] mt-4 text-white/70">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                    et massa mi.
                    Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur,
                    ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non
                    suscipit magna interdum
                    eu.</p>
                <div className="mt-4">
                    <ul className="inline-flex float-left">
                        <li className="mr-2 mt-1">Filtern nach:</li>
                        {buttons &&
                            buttons.map((type, index) => (
                                <>
                                    <li><button key={index} value={type.value} onClick={handleTeamMember} className="badge"> {type.name}</button></li>
                                </>
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
                        <p className="mt-6 text-[22px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            massa mi.</p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/house.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            massa mi.</p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/rocket.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            massa mi.</p>
                    </div>

                    <div className=" hover:scale-105 cursor-pointer transition-all ease">
                        <span><Image className="h-8" src="/assets/images/icons/bulb.png" alt="alt" width={40}
                                     height={80}/></span>
                        <p className="mt-6 text-[22px]">Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                            massa mi.</p>
                    </div>

                </div>
            </div>

            <div className="h-1/2 w-3/4 mt-32 mx-auto text-white">
                <h1 className="text-white text-[32px] font-bold">Aktuell sind folgende Positionen offen</h1>
                <p className="text-[15px] text-red-300">Die Positionen mit Flammenmarkierungen werden dringend
                    gesucht!</p>

                <div className="mt-8">
                    <ul className="inline-flex float-left">
                        {depbuttons &&
                            depbuttons.map((type, index) => (
                                <>
                                    <li><button key={index} value={type.value} onClick={handleTeamPositions} className="badge"> {type.name}</button></li>
                                </>
                            ))}
                    </ul>

                    <ul className="float-right">
                        <li>Sortien nach: Keine</li>
                    </ul>
                    <br/>
                    <br/>
                    <p className="text-white/70">{filteredTeamPositions && filteredTeamPositions.length} Positionen sind offen </p>
                </div>

                <div className="mt-10">

                    {filteredTeamPositions && filteredTeamPositions.map((position: any, index: any) => (
                        <TeamPositionsCard key={index} prio={position.prio} position_name={position.position_name} description={position.description} tags={position.tags} requirements={position.requirements} />
                    ))}
                </div>

            </div>
        </main>
    )
}
