import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-center w-full px-4 md:px-0">
        {/* Added padding for smaller screens */}
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="py-20 text-3xl md:text-4xl mt-36  mb-10"
        >
          Experiences
        </motion.h1>
        {/* Responsive font size */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-start justify-center w-full max-w-[32rem] mx-auto"
        >
          {/* Adjusted width for better responsiveness */}
          <TimelineItem>
            <TimelineConnector />

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}
              className="flex items-center space-x-4 h-3"
            >
              <TimelineIcon />

              <Typography
                variant="h3"
                color="yellow"
                className="leading-none text-xl md:text-2xl"
              >
                {/* Responsive font size */}
                Internship At Unified Mentor (2024 - Present)
              </Typography>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 3 }}
              className="pb-8"
            >
              <Typography
                variant="h6"
                className="font-medium ml-7 mt-7 mb-4 text-white text-base md:text-lg" // Responsive font size
              >
                Contributed to the development of web applications using
                JavaScript, React.js, and Redux. Managed databases and
                implemented data storage solutions using Firebase. Worked
                closely with product managers to prioritize features and
                enhancements.
              </Typography>
              <div className="flex flex-wrap mt-4 ml-11">
                {/* Flex wrap for tags */}
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  Html
                </span>
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  CSS
                </span>
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  JS
                </span>
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  React
                </span>
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  Redux
                </span>
                <span className="mr-2 mb-2 rounded bg-black px-3 py-2 text-sm font-medium">
                  Firebase
                </span>
              </div>
            </motion.div>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}
              className="flex items-center space-x-4 h-3"
            >
              <TimelineIcon />
              <Typography
                variant="h3"
                color="yellow"
                className="leading-none text-xl md:text-2xl"
              >
                {/* Responsive font size */}
                ???
              </Typography>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 3 }}
              className="pb-8"
            >
              <Typography
                variant="h6"
                className="font-medium mt-4 ml-6 text-white text-base md:text-lg"
              >
                <p>Details of this role or experience go here.</p>
              </Typography>
            </motion.div>
          </TimelineItem>

          <TimelineItem>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 2 }}
              className="flex items-center space-x-4 h-3"
            >
              <TimelineIcon />
              <Typography
                variant="h3"
                color="yellow"
                className="leading-none text-xl md:text-2xl"
              >
                {/* Responsive font size */}
                ???
              </Typography>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 3 }}
            >
              <Typography
                variant="h6"
                className="font-medium mt-4 ml-6 text-white text-base md:text-lg"
              >
                <p>Details of this role or experience go here.</p>
              </Typography>
            </motion.div>
          </TimelineItem>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
