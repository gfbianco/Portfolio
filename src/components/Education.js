import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
      md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium text-justify w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  //* ANIMACION DEL SCROLL DE PROGRESO *//
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Educación
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* BARRA CON ANIMACION */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        {/* EXPERIENCIAS */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachiller en Ingeniería Informática"
            time="2017-2023"
            place="Universidad Nacional Federico Villarreal"
            info="Como estudiante de Ingeniería Informática en la Universidad Nacional Federico 
            Villarreal, he adquirido una formación completa en el campo de la informática. Durante mi carrera, 
            he llevado cursos relevantes en áreas clave como estructuras de datos y algoritmos, ingeniería de 
            sistemas informáticos e inteligencia artificial.
            Además, durante mi carrera, he tenido la oportunidad de trabajar en varios proyectos prácticos, 
            incluyendo proyectos de software y proyectos de investigación en inteligencia artificial. Estos 
            proyectos me han permitido aplicar los conocimientos adquiridos en clase y mejorar mis habilidades
            de resolución de problemas en situaciones del mundo real."
          />
          <Details
            type="Curso de Java Developer"
            time="2024-2024"
            place="Sistemas Uni"
            info="Los cursos de desarrollo de aplicaciones en Java que he llevado en la Universidad Nacional de Ingeniería 
            me ha brindado un conocimientos para comprender mejor las tecnologías orientadas a la creación de aplicaciones 
            de escritorio y web realizados con el lenguaje de programación java."
          />
          <Details
            type="Cursos de desarrollo web Full Stack con JavaScript"
            time="2022-2023"
            place="Platzi"
            info="Los cursos de Desarrollo Web Full Stack con JavaScript que he llevado en Platzi son una 
            formación completa en el desarrollo de aplicaciones web utilizando el stack MERN. Estos cursos 
            me han brindado un conocimiento profundo en la creación de aplicaciones web, tanto en el frontend 
            como en el backend, utilizando tecnologías como HTML, CSS, JavaScript, MongoDB, Express.js, React 
            y Node.js."
          />
          <Details
            type="Curso de desarrollo frontend con ReactJS"
            time="2023-2023"
            place="Udemy"
            info="El curso de Desarrollo Frontend con ReactJS de Udemy que he llevado es una formación 
            completa en el desarrollo de aplicaciones web en el lado del cliente utilizando ReactJS. Durante 
            este curso, he aprendido los conceptos fundamentales de ReactJS y he llevado a cabo una serie de
            ejercicios prácticos para afianzar los conocimientos adquiridos.
            En este curso, he aprendido a construir aplicaciones web modernas utilizando ReactJS, una de las
            bibliotecas de JavaScript más populares en la actualidad. He aprendido a crear componentes, 
            manejar estados, trabajar con eventos y utilizar herramientas como React Router y Redux."
          />
          <Details
            type="Curso de desarrollo backend con NodeJS"
            time="2021-2022"
            place="CoderHouse"
            info="En este curso, he aprendido a trabajar con NodeJS, un entorno de tiempo de ejecución de 
            JavaScript que permite construir aplicaciones web del lado del servidor. También he aprendido 
            a utilizar Express, un framework de NodeJS que permite crear aplicaciones web de manera rápida 
            y sencilla. Además, he aprendido a trabajar con MongoDB, una base de datos NoSQL que es muy 
            popular en la industria del desarrollo web.
            El proyecto principal del curso consistió en el desarrollo de un e-commerce completo, lo que me
            permitió aplicar los conocimientos adquiridos y mejorar mis habilidades de resolución de problemas. 
            Además, en este curso se cubrieron otros tipos de bases de datos relacionales, lo que amplió mis 
            conocimientos en esta área."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
