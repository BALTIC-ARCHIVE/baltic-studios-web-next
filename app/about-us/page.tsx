'use client'
import Image from 'next/image';
import flameImage from '../../public/assets/images/icons/flamme.png';
import TeamCard from "@/components/team-card/page";
import {useEffect, useState} from "react";

export default function Home() {
    let teamView: string = "all";
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const [filteredTeamMember, setFilteredTeamMember] = useState(null);
    let clickedRank: any;
    useEffect(() => {
        setLoading(true)
        fetch('https://plexus.baltic-galaxy.de/api/team')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
        setFilteredTeamMember(data)
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
     function filterTeamMember(rankName: any) {
         return data.filter(rank => rank.rank === rankName);
    }

    function handleTeamMember(e: any) {
        let rankTeamMember = e.target.value;
        clickedRank = rankTeamMember;
        rankTeamMember !== "all"
            ? setFilteredTeamMember(filterTeamMember(rankTeamMember))
            : setFilteredTeamMember(data);
    }

     const buttons = [
        {
            name: "Alle",
            value: "all"
        },
         {
             name: "Projektleitung",
             value: "9_pl"
         },
         {
             name: "Management",
             value: "9_management"
         },
        {
            name: "Developer",
            value: "8_developer"
        },
        {
            name: "Moderation",
            value: "7_moderation"
        },
        {
            name: "Architektur",
            value: "6_architektur"
        }
    ];

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
                        <li className="mr-2 mt-1">Filtern nach:</li>
                        <li><span className="badge active">Alle</span></li>
                        <li><span className="badge">Entwicklung</span></li>
                        <li><span className="badge">Bauen</span></li>
                        <li><span className="badge">Content</span></li>
                        <li><span className="badge">Moderation</span></li>
                    </ul>

                    <ul className="float-right">
                        <li>Sortien nach: Keine</li>
                    </ul>
                    <br/>
                </div>

                <div className="mt-10">
                    <div
                        className=" mt-8 px-6 py-2 group border-2 border-white/10 rounded-xl relative bg-apply-card-radial grid grid-flow-row-dense grid-cols-10">

                        <div className="px-8 py-6 col-span-5">
                            <div>
                                <span className="px-2 text-[11px] py-1 bg-white/10 rounded mr-2">Backend</span>
                                <span className="px-2 text-[11px] py-1 bg-white/10 rounded mr-2">Frontend</span>
                            </div>

                            <div className="mt-4">
                                <h1 className="text-[22px]"><Image className="inline h-7 w-7 -mt-1 mr-4" alt="alt"
                                                                   src={flameImage}/>Architekt</h1>
                                <p className="mt-4 mb-4 text-[15px]">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in
                                    hendrerit urna.
                                    Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                                    Maecenas vitae mattis
                                    tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo.
                                </p>

                                <a className="text-baltic-tuerkis py-2 px-4 cursor-pointer group">Jetzt bewerben <Image
                                    height={20} width={20} alt="alt"
                                    className="inline transition-all ease-in-out group-hover:ml-3 ml-2 h-4 w-4"
                                    src="/assets/images/icons/arrow_right.png"/></a>
                            </div>

                        </div>
                        <div className="px-8 py-6 col-span-5">


                            <div className="mt-6">
                                <h2 className="text-[18px]">Du bringst folgendes mit</h2>

                                <ul>
                                    <li className="text-[12px] mt-4 text-white/70"><Image height={12} width={12}
                                                                                          alt="alt"
                                                                                          className="inline mr-3 h-3 -mt-1"
                                                                                          src="/assets/images/icons/check.png"/>Du
                                        hast gute Kenntnisse in der Programmiersprache Java
                                    </li>
                                    <li className="text-[12px] mt-2 text-white/70"><Image height={12} width={12}
                                                                                          alt="alt"
                                                                                          className="inline mr-3 h-3 -mt-1"
                                                                                          src="/assets/images/icons/check.png"/>Du
                                        hast gute Kenntnisse mit der Bukkit/Spigot API und weiÃŸt sie anzuwende
                                    </li>
                                    <li className="text-[12px] mt-2 text-white/70"><Image height={12} width={12}
                                                                                          alt="alt"
                                                                                          className="inline mr-3 h-3 -mt-1"
                                                                                          src="/assets/images/icons/check.png"/>Du
                                        hast grundlegende Kenntnisse mit Maven und Git
                                    </li>
                                    <li className="text-[12px] mt-2 text-white/70">Weitere Informationen siehst du im
                                        Bewerbungsportal
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </main>
    )
}
