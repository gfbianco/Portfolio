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
          SKILLS
        </motion.div>

        {/* SKILLS FRONTEND */}
        <Skill name="Angular" x="0vw" y="9vw" />
        <Skill name="React" x="-8vw" y="15vw" />
        <Skill name="GitHub" x="-15vw" y="0vw" />
        <Skill name="Gitlab" x="15vw" y="0vw" />
        <Skill name="HTML 5" x="-22vw" y="-8vw" />
        <Skill name="CSS 3" x="-22vw" y="8vw" />
        <Skill name="Boostrap" x="-36vw" y="0vw" />
        <Skill name="Tailwind" x="-25vw" y="-18vw" />
        <Skill name="SASS" x="-25vw" y="18vw" />

        {/* SKILLS BACKEND */}
        <Skill name="Java" x="0vw" y="-9vw" />
        <Skill name="Spring Boot" x="0vw" y="-21vw" />
        <Skill name="NodeJS" x="8vw" y="-15vw" />
        <Skill name="PL/SQL" x="36vw" y="0vw" />
        <Skill name="MySQL" x="22vw" y="-8vw" />
        <Skill name="PostgreSQL" x="22vw" y="8vw" />
        <Skill name="AWS / Azure" x="25vw" y="-18vw" />
        <Skill name="Databricks" x="25vw" y="18vw" />
        <Skill name="Blue Prims" x="0vw" y="21vw" />
      </div>
    </>
  );
};

export default Skills;
