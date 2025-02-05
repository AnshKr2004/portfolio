"use client";
import React, { useState } from "react";
import TabButton from "./TabButton";
import skillsIcon from "../../../public/skills-icon.png";
import experienceIcon  from "../../../public/experience-icon.png";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "SKILLS",
    id: "skills",
    icon: skillsIcon,
    content: (
      <div className="grid grid-cols-2 lg:grid-cols-3 sm:gap-x-4 md:gap-x-6 gap-x-8 md:justify-items-center sm:justify-items-center">
        <ul className="text-lg list-disc lg:pl-2">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Bash Script</li>
          <li>Tailwind CSS</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SQL</li>
          <li>React </li>
          <li>Next</li>
        </ul>
        <ul className="pl-2 text-lg list-disc">
          <li>Vite</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>PRISMA</li>
          <li>Git</li>
          <li>VS Code</li>
          <li>Redux</li>
          <li>MongoDB</li>
          <li>Prisma</li>
          <li>Postgresql</li>
        </ul>
        <ul className="text-lg list-disc pl-2">
          <li>Vim</li>
          <li>TypeScript</li>
          <li>MUI</li>
          <li>Postman</li>
          <li>Windows</li>
          <li>Three.js</li>
          <li>Database Managegment System</li>
          <li>GSAP</li>
          <li>Socket io</li>
        </ul>
      </div>
    ),
  },
  {
    title: "EXPERIENCE",
    id: "experience",
    icon: experienceIcon,
    content: (
      <ul className="grid pl-2 mb-5 list-disc gap-x-11">
        <li>Full-Stack Developer
          <p class="mb-1 mt-1 from-primary-700 font-black">The RD Group of Industries</p>
          <p>Nov 2024 - Jan 2025</p>
          <Link href="https://www.therdgroupofindustries.in/">
            <Image
                src="/images/Heroimage.webp"
                alt="hospital"
                className="" 
                width={400}
                height={225} 
                loading="lazy" />
          </Link>
        </li>
      </ul>
    ),
  },
];

const SkillSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-[#e0cbe1]" id="skill">
      <div className="flex flex-row justify-center mt-8 font-title">
        {TAB_DATA.map((t) => (
          <TabButton
            key={t.id}
            selectTab={() => handleTabChange(t.id)}
            active={tab === t.id}
            icon={t.icon}>
            {t.title}
          </TabButton>
        ))}
      </div>
      <div className="flex justify-center mt-8 sm:font-14 font-title text-45 flex-column">
        <motion.div
          key={tab}  
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.75 }}  >
          {TAB_DATA.find((t) => t.id === tab).content}
        </motion.div>
      </div>
    </section>
  );
};


export default SkillSection;
