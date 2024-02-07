"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./project/ProjectCard";
import projectsData from "./project/data";

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Some projects
      </h2>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 1 * 0.4 }}
          >
            <ProjectCard key={project.id} {...project} />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
