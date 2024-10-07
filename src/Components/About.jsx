import React from "react";
import Layout from "./Layout";
import AboutPic from "/Images/AboutPic.png";
import Technology from "./Technology";
import Experience from "./Experience";
import { motion } from "framer-motion";

const About = () => {
  const para = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

  return (
    <Layout>
      <section className="w-full pt-12 bg-gradient-to-b from-black via-gray-900 to-purple-700 text-white h-full">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center text-4xl"
        >
          About <span className="text-gray-500">Me</span>
        </motion.h2>
        <div className="flex flex-wrap justify-center lg:justify-start px-4 lg:px-28 mt-10">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8 mb-10 lg:mb-0"
          >
            <img src={AboutPic} alt="About Pic" className="rounded-2xl" />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-0 lg:mt-40"
          >
            <p className="max-w-xl px-4 lg:px-5 py-6 font-light tracking-tighter text-lg lg:text-xl text-center lg:text-left">
              {para}
            </p>
          </motion.div>
        </div>
        <Technology />

        <Experience />
      </section>
    </Layout>
  );
};

export default About;
