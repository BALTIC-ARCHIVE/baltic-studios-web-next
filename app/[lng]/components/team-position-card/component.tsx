"use client";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import { useState } from "react";
import { Badge } from "../ui/badge";
import Image from "next/image";

import flameImage from "@/public/assets/images/icons/flamme.svg";
import ApplyForm from "../apply-form/component";
import { t } from "i18next";

export default function TeamPositionsCard({
  tags,
  prio,
  position_name,
  description,
  short_description,
  colorTag,
  requirements,
  bonus_requirements,
  positionId,
  screenshot_url,
  is_public,
  lng,
}: any) {
  const is_high_priority = prio === 1;
  const imageStyle = {
    top: "30px",
    left: "20px",
    width: "800px",
  };
  const hoverbgColor = "group-hover:bg-team-" + colorTag + "-radial";
  const bgColor = "" + colorTag + "";
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
              src={screenshot_url}
              width={1920}
              height={1080}
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
        <p className="mt-4 mb-4 text-white/50 text-[15px]">
          {short_description}
        </p>

        <span
          className={`bg-[#333635] hover:bg-red-400 duration-200 transition-all ease-in h-10 w-10 rounded-full absolute`}
        >
          <svg
            className="mx-auto mt-3"
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlnsXlink="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 1V11M11 6L1 6"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.div>

      {selectedId && (
        <motion.div
          className="bg-black fixed no-scrollbar z-50 top-0 left-0 h-full overflow-scroll overscroll-contain w-full"
          layoutId={positionId}
        >
          <div
            className={`xl:h-3/5 h-2/5  overflow-hidden px-6  md:px-20 lg:px-20 xl:px-20  relative bg-team-${colorTag}-radial`}
          >
            <div
              className={`xl:h-full h-full max-w-[1200px] mx-auto overflow-hidden overflow-visible   py-10 relative`}
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
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t("back_to_home")}
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

              <div className="xl:bottom-5 bottom-16 absolute z-50  h-12 w-1/3">
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
                className=" group-hover:-ml-4  xl:w-5/5 w-5/5 z-10 xl:-right-96 -right-20 xl:top-16 top-32  duration-200 transition-all ease-in group-hover:-mt-4 mr-4 absolute"
                alt="alt"
                src={screenshot_url}
                width={1920}
                height={1080}
              />
            </div>
          </div>
          <div className="xl:w-2/3 px-6 w-5/5 my-16 mx-auto">
            <h1 className="text-white text-[32px] font-bold">
              {t("team_position_card.your_tasks")}
            </h1>
            <p className="text-[15px] mt-4 text-gray-300">{description}</p>
            <div className="grid lg:grid-cols-2 xl:grid-cols-2 grid-cols-1">
              <div className="">
                <div className="mt-6">
                  <h2 className="text-[18px]">
                    {t("team_position_card.requirements")}
                  </h2>

                  <ul>
                    {requirements?.map((req: any, index: any) => (
                      <li
                        key={index}
                        className="text-[12px] mt-4 text-white/70"
                      >
                        <Image
                          height={12}
                          width={12}
                          alt="alt"
                          className="inline mr-3 h-3 -mt-1"
                          src="/assets/images/icons/check.png"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="mt-6">
                  <h2 className="text-[18px]">
                    {t("team_position_card.bonus_requirements")}
                  </h2>

                  <ul>
                    {bonus_requirements?.map((req: any, index: any) => (
                      <li
                        key={index}
                        className="text-[12px] mt-4 text-white/70"
                      >
                        <Image
                          height={12}
                          width={12}
                          alt="alt"
                          className="inline mr-3 h-3 -mt-1"
                          src="/assets/images/icons/plus.svg"
                        />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ApplyForm position={positionId} />
        </motion.div>
      )}
    </div>
  );
}
