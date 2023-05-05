import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
      py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4
      md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light
      xs:font-bold"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }} //* Para ejecutar solo 1 vez, cuando cargue la página *//
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:mt-32 md:text-6xl xs:text-4xl md:mb-8">Habilidades</h2>
      <div 
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight
        dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        "
      >
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light
          p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        {/* SKILLS FRONTEND */}
        <Skill name="ReactJS" x="0vw" y="9vw" />
        <Skill name="NextJS" x="-8vw" y="15vw" />
        <Skill name="Inglés A2" x="0vw" y="21vw" />
        <Skill name="GitHub" x="-15vw" y="0vw" />
        <Skill name="Gitlab" x="15vw" y="0vw" />
        <Skill name="HTML" x="-22vw" y="-8vw" />
        <Skill name="CSS" x="-22vw" y="8vw" />
        <Skill name="Tailwind" x="-36vw" y="0vw" />
        <Skill name="Figma" x="-25vw" y="-18vw" />
        <Skill name="TDD" x="-25vw" y="18vw" />

        {/* SKILLS BACKEND */}
        <Skill name="NodeJS" x="0vw" y="-9vw" />
        <Skill name="JavaScript" x="0vw" y="-21vw" />
        <Skill name="Express" x="8vw" y="-15vw" />
        <Skill name="TypeScript" x="36vw" y="0vw" />
        <Skill name="PostgreSQL" x="22vw" y="-8vw" />
        <Skill name="MongoDB" x="22vw" y="8vw" />
        <Skill name="MySQL" x="25vw" y="-18vw" />
        <Skill name="AWS" x="25vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
