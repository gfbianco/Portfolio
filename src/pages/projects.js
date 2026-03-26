import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "@/components/Icons";
import {motion} from "framer-motion";

import devdatep from "../../public/images/projects/devdatep.png";
import coderhouse from "../../public/images/projects/coderhouse.png";
import notaria from "../../public/images/projects/notaria.png";
import patichat from "../../public/images/projects/patichat.png";
import portafolio from "../../public/images/projects/portafolio.png";
import pokedux from "../../public/images/projects/pokedux.png";
import starapp from "../../public/images/projects/starapp.png";

//* INSTANCIANDO LA IMAGEN CON LA LIBRERIA MOTION *//
const FramerImage = motion(Image);

//* PROYECTO DESTACADO *//
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl rounded-br-2xl
      border border-solid border-dark bg-light shadow-2xl p-12 relative dark:bg-dark 
      dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      {/* ESTE DIV HACE EL EFECTO DE 3D AL CONTENEDOR DE LA IMAGEN */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
        rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      {/* IMAGEN DEL PROYECTO */}
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage 
          src={img} 
          alt={title} 
          className="w-full h-auto" 
          whileHover={{scale: 1.05}}
          transition={{duration: 0.2}}
          priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
        />
      </Link>

      {/* INFORMACION DEL PROYECTO */}
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        {/* TIPO DE PROYECTO */}
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>

        {/* TITULO DEL PROYECTO */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
        </Link>

        {/* RESUMEN DEL PROYECTO */}
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>

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
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
            dark:bg-light dark:text-dark sm:px-4 sm:text-base"
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
      border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
      xs:p-4"
    >
      {/* ESTE DIV HACE EL EFECTO DE 3D AL CONTENEDOR DE LA IMAGEN */}
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark
        rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
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
          priority
          sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          50vw"
        />
      </Link>

      {/* INFORMACION Y LINKS DEL PROYECTO */}
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span 
          className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base"
        >
          {type}
        </span>

        {/* TITULO DEL PROYECTO */}
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 
            className="my-2 w-full text-left text-3xl font-bold lg:text-2xl"
          >
            {title}
          </h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          {/* LINK QUE REEDIRIGE A LA PAGINA DEL PROYECTO */}
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>

          {/* LINK DEL GITHUB DEL PROYECTO */}
          <Link href={github} target="_blank" className="w-8 md:w-6">
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
        <title>gfbianco | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="La imaginación triunfa sobre el conocimiento !"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          {/* CONTENEDOR DE LOS PROYECTOS */}
          <div className="grid grip-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

            {/* PROYECTO 1 (DESTACADO) */}
            <div className="col-span-12">
              <FeaturedProject
                title="Portafolio con Next.js"
                img={portafolio}
                summary="Se utilizo tecnologías: NextJS, Tailwind CSS, Gitlab y Hostinger, 
                para el desarrollo de un ERP para gestionar los procesos internos de la empresa."
                link="/"
                github="https://github.com/gfbianco/project-portfolio"
                type="Proyecto Personal"
              />
            </div>

            {/* PROYECTO 2 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="E-Commerce"
                img={coderhouse}
                link="https://proyecto-coderhouse.onrender.com/"
                github="https://github.com/gfbianco/proyecto-coderhouse"
                type="Proyecto CoderHouse"
              />
            </div>

            {/* PROYECTO 3 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="StarApp"
                img={starapp}
                link="https://star-app-ivory.vercel.app"
                github="https://github.com/gfbianco/StarApp"
                type="Proyecto Personal"
              />
            </div>

            {/* PROYECTO 4 (DESTACADO) */}
            <div className="col-span-12">
              <FeaturedProject
                title="ERP para la Empresa Devdatep Consulting E.I.R.L."
                img={devdatep}
                summary="Se utilizo tecnologías: ReactJS, Tailwind CSS, Gitlab y Hostinger, 
                para el desarrollo de un ERP para gestionar los procesos internos de la empresa."
                link="https://intranet.devdatep.com/"
                github="https://github.com/404"
                type="Proyecto Devdatep"
              />
            </div>
            
            {/* PROYECTO 5 */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="PatiChat Frontend"
                img={patichat}
                link="https://patichat.onrender.com"
                github="https://github.com/gfbianco/front-patichat"
                type="Proyecto Personal"
              />
            </div> */}

            {/* PROYECTO 6 */}
            {/* <div className="col-span-6 sm:col-span-12">
              <Project
                title="Patichat Backend"
                img={patichat}
                link="https://patichat-backend.onrender.com"
                github="https://github.com/gfbianco/back-patichat"
                type="Proyecto Personal"
              />
            </div> */}

            {/* PROYECTO 6 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Patichat"
                img={patichat}
                link="https://patichat.onrender.com"
                github="https://github.com/gfbianco/front-patichat"
                type="Proyecto Personal"
              />
            </div>

            {/* PROYECTO 7 */}
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Pokedux"
                img={pokedux}
                link="https://pokedux-lac.vercel.app"
                github="https://github.com/gfbianco/pokedux"
                type="Proyecto Platzi"
              />
            </div>

            {/* PROYECTO 8 (DESTACADO) */}
            <div className="col-span-12">
              <FeaturedProject
                title="ERP para digitalizar los procesos de una Notaria"
                img={notaria}
                summary="Se utilizo tecnologías: NodeJS, Express, PostgreSQL y AWS, para el  
                desarrollo de un ERP para digitalizar los procesos internos de una notaria."
                link="/confidentiality"
                github="https://github.com/404"
                type="Proyecto Notaria"
              />
            </div>
            
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
