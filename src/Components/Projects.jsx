import React, { useState } from "react";
import Layout from "./Layout";
import project1 from "/Images/Project1.png";
import project2 from "/Images/Project2.png";
import project3 from "/Images/Project3.png";
import project4 from "/Images/Project4.png";
import { motion } from "framer-motion";

const Projects = () => {
  const [visiblePopover, setVisiblePopover] = useState(null);

  const projects = [
    {
      title: "Virtual Art Gallery",
      image: project1,
      description:
        "The Virtual Art Gallery Project Features Top 25 Fine Art Photography Artists in the World and The Some Famous Artists Work Gallery Like Leonardo da Vinci, Pablo Picasso, Vincent Van Gogh, etc.",
      technologies: ["HTML", "CSS", "React", "JavaScript"],
      link: "https://rajpardeshi205.github.io/app/",
    },
    {
      title: "Interactive Quiz",
      image: project2,
      description:
        "An Interactive Quiz WebGame Like KBC. Here you can solve 10 different questions to win a game.",
      technologies: ["HTML", "CSS", "React", "JavaScript"],
      link: "https://rajpardeshi205.github.io/quiz/",
    },
    {
      title: "Catering Reservation and Ordering System",
      image: project3,
      description:
        "QuickCater for ordering food for different events where users create an account or login to QuickCater and order food online for events. The admin can add different dishes, check user orders, and manage order details.",
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Tailwind CSS",
        "Firebase",
        "JavaScript",
        "Redux",
      ],
      link: "https://quick-cater-2bemijypi-rajpardeshi205s-projects.vercel.app/",
    },
    {
      title: "Gas Agency System",
      image: project4,
      description:
        "The Gas Agency System allows users to book gas cylinders online, with a limit of 12 cylinders per year. Admins can check the status and approve or reject the user's gas orders.",
      technologies: ["HTML", "CSS", "React", "JavaScript", "Firebase"],
      link: "https://gas-110qiq7ry-rajpardeshi205s-projects.vercel.app/",
    },
  ];

  const togglePopover = (index) => {
    setVisiblePopover(visiblePopover === index ? null : index);
  };

  return (
    <Layout>
      <div className="w-full bg-gradient-to-b from-black via-gray-900 to-purple-700 text-white h-full">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="py-20 text-center text-4xl"
        >
          Projects
        </motion.h2>
        <div>
          {projects.map((project, index) => (
            <div
              key={index}
              className="pb-8 flex flex-wrap lg:justify-center relative"
            >
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={280}
                  height={280}
                  alt={project.title}
                  className="pt-6 rounded"
                />
                <button
                  className="mt-4 ml-8 select-none rounded-lg bg-gray-900 py-3 px-6 text-center text-xs font-bold uppercase text-yellow-600 shadow-md hover:shadow-lg focus:opacity-85"
                  onClick={() => togglePopover(index)}
                >
                  More Info
                </button>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1.5 }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <h6 className="pb-2 mt-8 font-semibold">{project.title}</h6>
                <p className="pb-4 text-gray-400">{project.description}</p>
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 rounded bg-gray-900 text-yellow-600  px-2 py-1 text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              {/* Popover */}
              {visiblePopover === index && (
                <div className="absolute z-[999] top-20 left-1/2 transform -translate-x-1/2 w-[28rem] grid grid-cols-2 overflow-hidden rounded-lg border border-white bg-black p-0  shadow-lg">
                  <div className="p-4">
                    <p className="mb-2 text-lg font-bold text-purple-600">
                      {project.title}
                    </p>
                    <p className="text-sm mb-4 text-yellow-600">
                      {project.description}
                    </p>
                    <a href={project.link} className="inline-block">
                      <button
                        className="flex items-center px-4 py-2 text-xs font-bold text-red-900 hover:bg-gray-900/10"
                        type="button"
                      >
                        Visit This
                        <svg
                          width="7"
                          height="12"
                          viewBox="0 0 7 12"
                          color="white"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                        >
                          <path
                            d="M1.25 1.91669L5.33333 6.00002L1.25 10.0834"
                            stroke="#212121"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </a>
                  </div>
                  <div className="min-h-full w-full p-3">
                    <img
                      src={project.image}
                      width={250}
                      height={250}
                      alt={project.title}
                      className="object-cover rounded-lg"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
