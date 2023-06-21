'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";
import flameImage from "@/public/assets/images/icons/flamme.png";

export default function TeamPositionsCard({tags, prio, position_name, description, requirements, is_public  }: any) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
    const is_high_priority = prio === 1;
    async function handleMouseMove({currentTarget, clientX, clientY,}: MouseEvent) {
        let {left, top} = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // @ts-ignore
    function getImageUrl(userName): any {
        return (
            'https://cravatar.eu/helmavatar/' + userName + '/250.png'
        );
    }

    return (
        <div
            className=" mt-8 px-6 py-2 group border-2 border-white/10 rounded-xl relative bg-apply-card-radial grid grid-flow-row-dense grid-cols-10">

            <div className="px-8 py-6 col-span-5">
                <div>
                    <span className="px-2 text-[11px] py-1 bg-white/10 rounded mr-2">Backend</span>
                    <span className="px-2 text-[11px] py-1 bg-white/10 rounded mr-2">Frontend</span>
                </div>

                <div className="mt-4">
                    <h1 className="text-[22px]">{is_high_priority ? <Image className="inline h-7 w-7 -mt-1 mr-4" alt="alt"
                                                                           src={flameImage} /> : ''}{position_name}</h1>
                    <p className="mt-4 mb-4 text-[15px]">
                        {description}
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

    );
}