import React from "react";

import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technology = () => {
  const [openPopover, setOpenPopover] = useState(null);

  const handleIconClick = (techName) => {
    setOpenPopover(openPopover === techName ? null : techName);
  };

  return (
    <div className="h-auto">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="py-20 mt-36 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* React Icon */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("React")}
          >
            <FaReact className="text-7xl text-cyan-700" />
          </div>
          {openPopover === "React" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">React.js</p>
            </div>
          )}
        </motion.div>

        {/* Next.js Icon */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("NextJS")}
          >
            <RiNextjsLine className="text-7xl" />
          </div>
          {openPopover === "NextJS" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">Next.js</p>
            </div>
          )}
        </motion.div>

        {/* MongoDB Icon */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("MongoDB")}
          >
            <SiMongodb className="text-7xl text-green-500" />
          </div>
          {openPopover === "MongoDB" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">MongoDB</p>
            </div>
          )}
        </motion.div>

        {/* Redis Icon */}
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("Redis")}
          >
            <DiRedis className="text-7xl text-red-700" />
          </div>
          {openPopover === "Redis" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">Redis</p>
            </div>
          )}
        </motion.div>

        {/* Node.js Icon */}
        <motion.div
          variants={iconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("NodeJS")}
          >
            <FaNodeJs className="text-7xl text-green-500" />
          </div>
          {openPopover === "NodeJS" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">Node.js</p>
            </div>
          )}
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div
            className="rounded-2xl border-4 border-gray-600 p-4 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleIconClick("PostgreSQL")}
          >
            <BiLogoPostgresql className="text-7xl text-blue-700" />
          </div>
          {openPopover === "PostgreSQL" && (
            <div
              className="absolute left-1/2 transform -translate-x-1/2 mb-1 bottom-full w-40 p-2 bg-white border rounded-lg shadow-lg"
              data-popover-transition="transition-all duration-200 origin-bottom"
            >
              <p className="text-center text-gray-800">PostgreSQL</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technology;
