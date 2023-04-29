import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }} //* Para ejecutar solo 1 vez, cuando cargue la página *//
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full bg-dark text-light
        p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* SKILLS FRONTEND */}
        <Skill name="ReactJS" x="0vw" y="6vw" />
        <Skill name="NextJS" x="0vw" y="15vw" />
        <Skill name="Inglés A2" x="0vw" y="21vw" />
        <Skill name="GitHub" x="-10vw" y="0vw" />
        <Skill name="Gitlab" x="10vw" y="0vw" />
        <Skill name="HTML" x="-16vw" y="-8vw" />
        <Skill name="CSS" x="-16vw" y="8vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="0vw" />
        <Skill name="Figma" x="-25vw" y="-15vw" />
        <Skill name="Hostinger" x="-25vw" y="15vw" />

        {/* SKILLS BACKEND */}
        <Skill name="NodeJS" x="0vw" y="-6vw" />
        <Skill name="JavaScript" x="0vw" y="-21vw" />
        <Skill name="Express" x="0vw" y="-15vw" />
        <Skill name="TypeScript" x="25vw" y="0vw" />
        <Skill name="PostgreSQL" x="16vw" y="-8vw" />
        <Skill name="MySQL" x="16vw" y="8vw" />
        <Skill name="MongoDB" x="25vw" y="-15vw" />
        <Skill name="AWS" x="25vw" y="15vw" />
      </div>
    </>
  );
};

export default Skills;
