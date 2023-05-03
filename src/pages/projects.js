import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion";
import imgtest from "../../public/images/projects/test.jpg";
import project1 from "../../public/images/projects/devdatep.png";
import project2 from "../../public/images/projects/coderhouse.png";
import project4 from "../../public/images/projects/notaria.png";
import project5 from "../../public/images/projects/patichat.png";

//* INSTANCIANDO LA IMAGEN CON LA LIBRERIA MOTION *//
const FramerImage = motion(Image);

//* PROYECTO DESTACADO *//
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl
      border border-solid border-dark bg-light shadow-2xl p-12 relative"
    >
      {/* ESTE DIV HACE EL EFECTO DE 3D AL CONTENEDOR DE LA IMAGEN */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark
        rounded-br-3xl"
      />

      {/* IMAGEN DEL PROYECTO */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto" 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
        />
      </Link>

      {/* INFORMACION DEL PROYECTO */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        {/* TIPO DE PROYECTO */}
        <span className="text-primary font-medium text-xl">{type}</span>

        {/* TITULO DEL PROYECTO */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>

        {/* RESUMEN DEL PROYECTO */}
        <p className="my-2 font-medium text-dark">{summary}</p>

        {/* LINKS */}
        <div className="mt-2 flex items-center">
          {/* LINK DE GITHUB DEL PROYECTO */}
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          {/* LINK QUE REEDIRIGE A LA PAGINA DEL PROYECTO */}
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visitar Proyecto
          </Link>
        </div>
      </div>
    </article>
  );
};

//* PROYECTO NORMAL *//
const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="w-full flex flex-col items-center justify-center rounded-2xl border 
      border-solid border-dark bg-light p-6 relative"
    >
      {/* ESTE DIV HACE EL EFECTO DE 3D AL CONTENEDOR DE LA IMAGEN */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl"
      />

      {/* IMAGEN DEL PROYECTO */}
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto" 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
        />
      </Link>

      {/* INFORMACION Y LINKS DEL PROYECTO */}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>

        {/* TITULO DEL PROYECTO */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* LINK QUE REEDIRIGE A LA PAGINA DEL PROYECTO */}
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>

          {/* LINK DEL GITHUB DEL PROYECTO */}
          <Link href={github} target="_blank" className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Mittow | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="La imaginación trinunfa sobre el conocimiento !"
            className="mb-16"
          />

          {/* CONTENEDOR DE LOS PROYECTOS */}
          <div className="grid grip-cols-12 gap-24 gap-y-32">

            {/* PROYECTO 1 (DESTACADO) */}
            <div className="col-span-12">
              <FeaturedProject
                title="E.R.P. para la Empresa Devdatep Consulting E.I.R.L."
                img={project1}
                summary="Se utilizo tecnologías como ReactJS, Tailwind CSS, Gitlab y Hostinger, 
                para el desarrollo de un ERP para gestionar los procesos internos de la empresa."
                link="https://intranet.devdatep.com/"
                github="/"
                type="Proyecto Devdatep"
              />
            </div>

            {/* PROYECTO 2 */}
            <div className="col-span-6">
              <Project
                title="E-Commerce"
                img={project2}
                link="https://proyecto-coderhouse.onrender.com/"
                github="https://github.com/Mittow/proyecto-coderhouse"
                type="Proyecto CoderHouse"
              />
            </div>

            {/* PROYECTO 3 */}
            <div className="col-span-6">
              <Project
                title="Pokedux"
                img={imgtest}
                link="/"
                github="https://github.com/Mittow/pokedux"
                type="Proyecto Platzi"
              />
            </div>

            {/* PROYECTO 4 (DESTACADO) */}
            <div className="col-span-12">
              <FeaturedProject
                title="E.R.P. para digitalizar los procesos de una Notaria"
                img={project4}
                summary="Se utilizo tecnologías como NodeJS, Express, PostgreSQL y AWS, para el  
                desarrollo de un ERP para digitalizar los procesos internos de una notaria."
                link="/"
                github="/"
                type="Proyecto Notaria"
              />
            </div>

            {/* PROYECTO 5 */}
            <div className="col-span-6">
              <Project
                title="PatiChat Frontend"
                img={project5}
                link="https://patichat.onrender.com"
                github="https://github.com/Mittow/front-patichat"
                type="Proyecto Personal"
              />
            </div>

            {/* PROYECTO 6 */}
            <div className="col-span-6">
              <Project
                title="Patichat Backend"
                img={project5}
                link="https://patichat-backend.onrender.com"
                github="https://github.com/Mittow/back-patichat"
                type="Proyecto Personal"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
