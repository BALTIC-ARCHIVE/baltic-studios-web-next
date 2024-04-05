"use client";
import { cn } from "@/lib/utils";
import { MotionValue, motion } from "framer-motion";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  username: string;
  color: string;
  x?: MotionValue<number>;
  y?: MotionValue<number>;
}

const StarBadge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <motion.div
        style={{
          x: props.x,
          y: props.y,
        }}
        className={cn(" z-50 absolute h-8 inline-block w-[200px] ", className)}
      >
        <div className=" h-6 w-6 flex justify-center items-center">
          <svg
            className="p-0 m-0 h-full w-full"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1778_1821)">
              <path
                d="M6.79888 16.2624C6.81594 17.9737 8.66145 19.0402 10.1527 18.2006L17.5272 14.0484C19.0184 13.2087 19.0635 11.0777 17.6092 10.1757L10.1472 5.5477C8.63975 4.61279 6.69371 5.70849 6.71139 7.48222L6.79888 16.2624Z"
                fill="white"
                stroke={props.color}
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1778_1821">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(7.8501 21.792) rotate(-119.382)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <span
          className={`ml-5 -mt-4 px-[4px] py-[1px] rounded-sm bg-[${props.color}]`}
        >
          {props.username}
        </span>
      </motion.div>
    );
  }
);
StarBadge.displayName = "StarBadge";
export { StarBadge };
