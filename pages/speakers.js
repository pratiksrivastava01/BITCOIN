import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";

const speakers = () => {
  return (
    <>
      <Head>
        <title>Invited Speakers</title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <Navbar />
      <Nav3 />
      <h1 className="font-bold mt-[15rem] flex justify-center text-5xl">
        To Be Updated Soon.............
      </h1>
    </>
  );
};

export default speakers;
