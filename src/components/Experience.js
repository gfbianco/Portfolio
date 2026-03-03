import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Lilcon from "./Lilcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium text-justify w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  //* ANIMACION DEL SCROLL DE PROGRESO *//
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experiencia
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* BARRA CON ANIMACION*/}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-primaryDark
          md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        {/* EXPERIENCIAS */}
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Development Analyst"
            company="Indra Group"
            companyLink="https://www.linkedin.com/company/indragroupglobal/posts/?feedView=all"
            time="Agosto 2024 - Actualidad"
            address="Lima, Perú"
            work="Desarrollo y mantenimiento de aplicaciones empresariales utilizando 
            Java, Spring Boot, JavaScript y Angular, asegurando escalabilidad, rendimiento y 
            buenas prácticas de arquitectura.
            Diseño y optimización de consultas y procedimientos almacenados en PL/SQL 
            y MySQL, mejorando tiempos de respuesta y eficiencia en el acceso a datos.
            Implementación y optimización de procesos de replicación de datos (Full Load y CDC) 
            con Qlik Replicate, orientados a entornos cloud en AWS, garantizando integridad y 
            disponibilidad de la información en el cloud.
            Migración de procesos SQL hacia PySpark en entornos Databricks, integrando servicios 
            del ecosistema AWS para procesamiento distribuido y analítica.
            Implementación de mecanismos de cifrado de datos sensibles mediante AWS KMS, 
            fortaleciendo el cumplimiento de estándares de seguridad y protección de información.
            Desarrollo y soporte de automatizaciones de procesos de negocio utilizando Blue Prism, 
            contribuyendo a la eficiencia operativa y reducción de tareas manuales."
          />
          <Details
            position="Deployment Analyst"
            company="Tech Mahindra"
            companyLink="https://www.linkedin.com/company/tech-mahindra/"
            time="Febrero 2024 - Julio 2024"
            address="Lima, Perú"
            work="Instalaciones de aplicaciones (.NET y JAVA), servicios (REST y SOAP), 
            de base de datos (PL/SQL), en el ambiente de QA para sus posteriores pruebas. 
            Se utilizó las siguientes tecnologías: Weblogic para la instalación de 
            servicios (java), Filezilla para la transferencia de componentes (FTP) al 
            servidor, IBM Rational Team Concert para la gestión, homologación y validaciones 
            de componentes y fuentes entre ambientes, además se utilizó la plataforma Jira 
            para la gestión de pases y status de las instalaciones."
          />
          <Details
            position="Quality Analyst"
            company="Tech Mahindra"
            companyLink="https://www.linkedin.com/company/tech-mahindra/"
            time="Octubre 2023 - Enero 2024"
            address="Lima, Perú"
            work="Elaborando, diseñando y implementando pruebas unitarias, 
            funcionales, integrales, de humo, etc. Utilizando tecnologías como 
            Jira, RTC, PL/SQL, SoapUI, Putty y FileZilla."
          />
          <Details
            position="FrontEnd Developer"
            company="Devdatep Consulting E.I.R.L"
            companyLink="https://www.linkedin.com/company/devdatep-consulting/"
            time="Octubre 2022 - Marzo 2023"
            address="Lima, Perú"
            work="Durante mi experiencia como desarrollador frontend, tuve la
              oportunidad de desarrollar un sistema web interno
              para la empresa. Usé tecnologías como React JS, TailwindCSS,
              Gitlab y Hostinger para trabajar de manera eficiente y eficaz para
              desarrollar la plataforma.
              Además de programar, también tuve un rol activo en el proceso
              de despliegue del sistema web, que me permitió entender el
              ciclo de vida completo de un proyecto desde desarrollo hasta la
              implementación."
          />
          <Details
            position="Backend Developer"
            company="CoderGods"
            companyLink="https://www.linkedin.com/company/coder-gods/"
            time="Noviembre 2021 - Mayo 2022"
            address="Lima, Perú"
            work="Durante mi experiencia como desarrollador backend, tuve la
              oportunidad para trabajar en un proyecto para un notario. Como
              parte del equipo de desarrollo, mi responsabilidad era programar
              el backend del producto usando Node.js, Express, S3 (AWS) y
              PostgreSQL.
              Para garantizar la calidad del código, me aseguré de seguir las
              mejores prácticas en crear API RESTful y realizar pruebas
              unitarias (Jest) para validar la funcionalidad del software y
              detectar errores a tiempo. Además, estuve en constante comunicación 
              con el equipo frontend y base de datos para garantizar integración 
              suave y consistente entre el backend y la interfaz de usuario del 
              producto."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
