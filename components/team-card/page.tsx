'use client';
import {motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from "next/image";
import {MouseEvent} from "react";

export default function TeamCard({userName, realName, bio, rankName, twitterHandle, entryDate  }: any) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);
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
        <div className="px-10 group pt-8 pb-16 relative border-2 border-white/10 rounded-xl relative bg-team-card-radial"
             onMouseMove={handleMouseMove}>
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 255, 255, 0.1),
              transparent 80%
            )
          `,
                }}
            />
            <div className="flex">
                <div>
                    <Image className="h-20 absolute rounded -mt-16" width={80} height={80} alt="alt"
                           src={getImageUrl(userName)}/>
                </div>
                <div className="mb-4">
                    <p className="ml-24 -mt-3 text-white text-[22px] font-bold">{userName}</p>
                    <br/>
                    <p className=" -mt-3 text-white/70 text-[13px]">aka {realName}</p>
                </div>
            </div>
            <div className="mb-6">
                <span className="px-4 text-[11px] py-2 bg-white/10 rounded">{rankName}</span>
            </div>
            <div className="mb-4">
                <p className="text-[10px] text-white/70">Mitglied seit {entryDate}</p>
            </div>
            <div>
                <p className="text-[12px] text-white">{bio}</p>
            </div>

            <div className="absolute mt-4 bottom-6">
                <div className=" xl:flex items-center space-x-5">

                    {twitterHandle ? <a className="flex items-center hover:text-gray-200"
                                         href={"https://twitter.com/" + twitterHandle}>
                        <Image src="assets/images/icons/x-logo.svg" width={20} height={20}
                               alt="alt text" className="h-5 w-5"/>
                    </a>: ''}

                </div>
            </div>
        </div>
    );
}