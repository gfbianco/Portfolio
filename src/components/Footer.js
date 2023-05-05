import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  //* DATOS PARA LA API DE WHATSAPP *//
  const phoneNumber = "940837467";
  const message = `
    ¡Hola! ¡Gracias por contactarme! Si necesitas ayuda con el desarrollo web, 
    estaré encantado de ayudarte. Por favor, envíame un mensaje con tus 
    preguntas o inquietudes y te responderé lo antes posible.`;

  return (
    <footer
      className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light 
    dark:border-light sm:text-sm"
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span className="sm:text-center">
          {new Date().getFullYear()} &copy; All Rihts Reserved to Gian Bianco.
        </span>
        <div className="flex items-center lg:py-2">
          Construido con
          <span className="text-primary dark:text-primaryDark text-2xl px-1">&#9825;</span>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Next
          </Link>
          &nbsp;y&nbsp;
          <Link
            href="https://tailwindcss.com/"
            target="_blank"
            className="underline underline-offset-2"
          >
            Tailwind
          </Link>
        </div>
        <div>
          Contáctame por&nbsp;
          <Link
            href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
              message
            )}`}
            target="_blank"
            className="underline underline-offset-2"
          >
            WhatsApp
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;

//! NOTA:
//? Para pintar un corazon, se utiliza "&hearts;" o "&#9825;"
