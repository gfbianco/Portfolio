import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const confidentiality = () => {
  return (
    <>
      <Head>
        <title>Mittow | Confidentiality Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main>
        <h1 className="w-screen h-screen flex justify-center items-center font-bold text-7xl bg-red-400">
          🔒 Confidencial 🔒
        </h1>
      </main>
    </>
  );
};

export default confidentiality;
