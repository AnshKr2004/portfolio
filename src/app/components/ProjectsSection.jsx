"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Moon Meet",
    description: "Next | TypeScript | Tailwind CSS | Zustand | Pusher | cloudinary | prisma | express | oauth",
    image: "/images/projects/moon-meet.png",
    tag: ["All", "Tailwind", "React.js"],
    gitUrl: "https://github.com/AnshKr2004/moon-meet",
    previewUrl: "https://moon-meet-ansh-kumars-projects.vercel.app/",
  },
  {
    id: 2,
    title: "IPhone",
    description: "Vite | JavaScript | Tailwind CSS | gsap | Three.js",
    image: "/images/projects/iphone.png",
    tag: ["All", "Tailwind", "React.js"],
    gitUrl: "https://github.com/AnshKr2004/apple-website",
    previewUrl: "https://apple-website-peach-psi.vercel.app/",
  },
  {
    id: 3,
    title: "Threads",
    description: "Next | TypeScript | Tailwind CSS | Clerk | shadcn | Mongodb | React-Hooks | uploadthing | zod",
    image: "/images/projects/threads.png",
    tag: ["All", "Next.js"],
    gitUrl: "https://github.com/AnshKr2004/Threads",
    previewUrl: "https://threads-ansh-kumars-projects.vercel.app/",
  },
  {
    id: 4,
    title: "Nike e-commerce",
    description: "React | JavaScript | Tailwind CSS | React-Hooks | splidejs | Redux | lodash",
    image: "/images/projects/nike-e-commerce.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/AnshKr2004/nike-ecommerce",
    previewUrl: "https://nike-ecommerce-phi.vercel.app/",
  },
  {
    id: 5,
    title: "Cineverse",
    description: "React | JavaScript | ReactHooks | API | Tailwind CSS",
    image: "/images/projects/cineverse.png",
    tag: ["All", "React.js"],
    gitUrl: "https://github.com/AnshKr2004/cineverse",
    previewUrl: "https://cineverse-sandy.vercel.app/",
  },
  {
    id: 6,
    title: "Tic Tac Toe",
    description: "React | JavaScript | Tailwind CSS | Jest",
    image: "/images/projects/tic-tac-toe.png",
    tag: ["All", "CSS"],
    gitUrl: "https://github.com/AnshKr2004/Tic-Tac-Toe",
    previewUrl: "https://tic-tac-toe-roan-tau.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-12 mb-8 text-4xl font-bold text-center text-white font-title md:mb-12">
        My Projects
      </h2>
      {/* <div className="flex flex-row flex-wrap items-center justify-center gap-2 py-6 text-white md:flex">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Next.js"
          isSelected={tag === "Next.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React.js"
          isSelected={tag === "React.js"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="CSS"
          isSelected={tag === "CSS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Tailwind"
          isSelected={tag === "Tailwind"}
        />
      </div> */}
      <ul ref={ref} className="grid lg:gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
