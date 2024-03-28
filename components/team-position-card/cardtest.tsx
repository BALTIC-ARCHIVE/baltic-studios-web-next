"use client";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

import flameImage from "@/public/assets/images/icons/flamme.svg";
import codeImage from "@/public/assets/images/custom/code.png";
import ApplyPage from "@/app/apply/[position]/page";

function Card({
  tags,
  prio,
  position_name,
  description,
  colorTag,
  requirements,
  positionId,
  is_public,
}: any) {
  const is_high_priority = prio === 1;
  const imageStyle = {
    top: "30px",
    left: "20px",
    width: "800px",
  };
  const hoverbgColor = "group-hover:bg-[" + colorTag + "]";
  const bgColor = "bg-[" + colorTag + "]";
  const fromColor = "group-hover:from-[" + colorTag + "]";
  // @ts-ignore
  function getImageUrl(userName): any {
    return "https://cravatar.eu/helmavatar/" + userName + "/250.png";
  }

  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <motion.div
        layoutId={positionId}
        className="mt-8 w-full  rounded-xl  group relative"
        onClick={() => setSelectedId(positionId)}
      >
        <div
          className={`xl:px-8 px-2 relative bg-[#1A1A1A] aspect-square ${hoverbgColor} duration-200 transition-all ease-in rounded-xl  w-full overflow-hidden`}
        >
          <div className="mt-4">
            {tags &&
              tags.map((tag: any, index: any) => (
                <Badge
                  variant="black"
                  key={index}
                  className="px-2 text-[16px] rounded-full"
                >
                  {tag}
                </Badge>
              ))}
          </div>

          <div className="mt-4 absolute h-96 w-96 rounded-md">
            <Image
              className="  group-hover:-ml-4  duration-200 transition-all ease-in group-hover:-mt-4 mr-4 absolute"
              alt="alt"
              src={codeImage}
              style={imageStyle}
            />
          </div>
          <div
            className={`absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t rounded-md from-[#1A1A1A] duration-200 transition-all ease-in ${fromColor} from-20%`}
          >
            <h1 className="text-[18px] duration-200 transition-all ease-in px-8">
              {is_high_priority ? (
                <Image
                  className="inline w-[10%] -mt-1 mr-4"
                  alt="alt"
                  src={flameImage}
                />
              ) : (
                ""
              )}
              {position_name}
            </h1>
          </div>
        </div>
        <p className="mt-4 mb-4 text-white/50 text-[15px]">{description}</p>

        <span
          className={`bg-[#333635] ${hoverbgColor} duration-200 transition-all ease-in h-10 w-10 rounded-full absolute`}
        >
          <svg
            className="mx-auto mt-3"
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1V11M11 6L1 6"
              stroke="black"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
      </motion.div>

      {selectedId && (
        <motion.div
          className="bg-black fixed z-50 top-0 left-0 h-full overflow-scroll w-full"
          layoutId={positionId}
        >
          <div
            className={`h-3/5 overflow-hidden  px-20 py-10 relative ${bgColor}`}
          >
            <span
              onClick={() => setSelectedId(null)}
              className={`bg-white/10 hover:bg-white/20 hover:cursor-pointer ${hoverbgColor} duration-200 transition-all ease-in px-4 py-2 rounded-md `}
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
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Zurück zur Startseite
            </span>

            <div className="mt-8">
              {tags &&
                tags.map((tag: any, index: any) => (
                  <Badge
                    variant="black"
                    key={index}
                    className="px-2 text-[16px] rounded-full"
                  >
                    {tag}
                  </Badge>
                ))}
            </div>

            <div className="bottom-5 absolute  h-12 w-1/3">
              <h1 className="text-[32px] duration-200 transition-all ease-in ">
                {is_high_priority ? (
                  <Image
                    className="inline h-[15%] -mt-2 mr-4"
                    alt="alt"
                    src={flameImage}
                  />
                ) : (
                  ""
                )}
                {position_name}
              </h1>
            </div>

            <Image
              className=" group-hover:-ml-4  w-3/5 -right-20 top-16  duration-200 transition-all ease-in group-hover:-mt-4 z-10 mr-4 absolute"
              alt="alt"
              src={codeImage}
            />
          </div>

          <ApplyPage params={positionId} />
        </motion.div>
      )}
    </div>
  );
}
export default Card;
