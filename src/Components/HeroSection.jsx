import React from "react";
import ProfilePic from "/Images/ProfilePic.png";
import { motion } from "framer-motion";
import { Button } from "@material-tailwind/react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const container2 = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const HeroSection = () => {
  const para = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, as well as Learning back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

  return (
    <div className="flex flex-wrap items-center justify-between bg-gradient-to-b from-black via-gray-900 to-purple-700 text-white py-10 lg:py-0 min-h-screen">
      {/* Left section with text */}
      <div className="w-full lg:w-1/2 px-4 lg:px-20">
        <div className="flex flex-col items-center lg:items-start">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="text-4xl mb-12 lg:text-7xl font-thin tracking-tighter text-gray-300 text-center lg:text-left"
          >
            Raj Pardeshi
          </motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-orange-300 to-purple-500 bg-clip-text text-2xl lg:text-5xl text-transparent font-semibold tracking-tight mt-4"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-center lg:text-left text-lg lg:text-xl font-light"
          >
            {para}
          </motion.p>
        </div>
        <div className="flex justify-start space-x-4 mt-8">
          <a href="https://www.facebook.com/profile.php?id=100042273590859">
            <motion.img
              variants={container2(1.5)}
              initial="hidden"
              animate="visible"
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-256.png"
              alt="Facebook"
              className="w-8 mt-4 h-8"
            />
          </a>
          <a href="https://www.instagram.com/the.raj.pardeshi/">
            <motion.img
              variants={container2(2)}
              initial="hidden"
              animate="visible"
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-256.png"
              alt="Instagram"
              className="w-8 mt-4 h-8"
            />
          </a>
          <a href="https://www.linkedin.com/in/raj-pardeshi-66315715a/">
            <motion.img
              variants={container2(2.5)}
              initial="hidden"
              animate="visible"
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-256.png"
              alt="LinkedIn"
              className="w-8 mt-4 h-8"
            />
          </a>
          <a href="https://x.com/RajPardeshi24">
            <motion.img
              variants={container2(3)}
              initial="hidden"
              animate="visible"
              src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-256.png"
              alt="Twitter"
              className="w-8 mt-4 h-8"
            />
          </a>
          <a href="https://github.com/Rajpardeshi205">
            <motion.img
              variants={container2(3.5)}
              initial="hidden"
              animate="visible"
              src="https://cdn1.iconfinder.com/data/icons/bootstrap-fill-vol-2/16/github-1024.png"
              alt="Github"
              className="w-8 mt-4 h-8"
            />
          </a>
          <a href="./Resume.pdf" download>
            <motion.div
              variants={container2(4)}
              initial="hidden"
              animate="visible"
            >
              <Button className="py-2 mt-2  ml-14 bg-red-900 text-gray-300  border-2 border-black hover:text-red-700  hover:bg-transparent text-lg lg:text-xl font-light rounded-full tracking-tighter">
                Download Resume
              </Button>
            </motion.div>
          </a>{" "}
        </div>
      </div>

      {/* Right section with image */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          src={ProfilePic}
          alt="Profile Pic"
          className=" object-cover "
        />
      </div>
    </div>
  );
};

export default HeroSection;
