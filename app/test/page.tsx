"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type TestPageRef = React.ForwardedRef<HTMLDivElement>;
export default async function Test(ref: TestPageRef) {
  return (
    <div className="h-[100vh] bg-white my-[200px]">
      <motion.button
        className="bg-red-500 mx-auto"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        Hallo
      </motion.button>
    </div>
  );
}
