import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-3.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

//* ANIMACION DE LOS NUMEROS *//
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Mittow | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="¡La pasión alimenta el propósito!" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            {/* ---------------------------------------------------------- */}
            <div className="col-span-3 flex flex-col items-start justify-start text-justify">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biografía
              </h2>
              {/* TEXTO DEL PERFIL */}
              <p className="font-medium">
                ¡Hola! Soy un desarrollador web full stack MERN con experiencia
                en Node.js, Express, PostgreSQL, MySQL, MongoDB, React.js,
                TailwindCSS y sistemas de versionamiento como Github y Gitlab.
              </p>
              <p className="my-4 font-medium">
                Mi enfoque principal es crear soluciones web escalables y
                eficientes que satisfagan las necesidades de mis clientes. Me
                apasiona trabajar en proyectos desafiantes y colaborar con
                equipos de desarrolladores para cumplir con los objetivos del
                proyecto y superar las expectativas de los clientes.
              </p>
              <p className="font-medium">
                Si estás buscando un desarrollador web full stack MERN para tu
                próximo proyecto, ¡no dudes en contactarme! Estoy emocionado de
                colaborar contigo y crear una solución web excepcional.
              </p>
            </div>
            {/* ---------------------------------------------------------- */}
            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:bg-dark dark:border-light"
            >
              {/* ESTE DIV HACE EL EFECTO DE 3D AL CONTENEDOR DE LA IMAGEN */}
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              {/* FOTO DE PERFIL */}
              <Image
                src={profilePic}
                alt="Gian Bianco"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="col-span-2 flex flex-col items-end justify-between">
              {/* CLIENTES */}
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Clientes Satisfechos
                </h2>
              </div>
              {/* PROYECTOS */}
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={6} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Proyectos Completos
                </h2>
              </div>
              {/* EXPERIENCIA */}
              <div className="flex flex-col items-center justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  Años de Experiencia
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
