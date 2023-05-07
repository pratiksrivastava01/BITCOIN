import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";
import about from "@/assets/about.jpg";

const institute = () => {
  return (
    <>
      <Head>
        <title>About || Institute</title>
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
      <div className="flex flex-row sm:flex-col mt-[5rem] gap-[10rem] sm:gap-0 justify-center">
        <div className="text-center">
          <h1 className="font-bold text-5xl sm:text-3xl text-[#002256]">
            About BIT Sindri
          </h1>
          <p className="text-left overflow-auto ml-10 mt-[3rem] sm:p-[4rem] sm:mt-0">
            BIT Sindri, also known as Birsa Institute of Technology Sindri, is a
            premier engineering college located in Sindri, Jharkhand, India.
            Established in 1949, the college has a long and rich history of
            providing high-quality engineering education to students from across
            the country. BIT Sindri offers undergraduate and postgraduate
            programs in various branches of engineering, including chemical,
            mechanical, electrical, civil, metallurgy, and more. The college has
            state-of-the-art facilities, including well-equipped laboratories, a
            modern library, and a large campus with facilities for sports and
            extracurricular activities. Over the years, BIT Sindri has produced
            several notable alumni who have made significant contributions to
            various fields of science, technology, and industry, both in India
            and abroad. With its commitment to academic excellence and emphasis
            on practical learning, BIT Sindri continues to be a top choice for
            engineering aspirants in India
            {/* BIT Sindri is a premier technical institution offering undergraduate{" "}
            <br />
            and postgraduate courses in various disciplines of engineering{" "}
            <br />
            approved by AICTE, New Delhi. It is wholly owned and administered by{" "}
            <br />
            the Department of Science and Technology, Govt of Jharkhand, Ranchi.{" "}
            <br /> <br />
            BIT Sindri aims to provide valuable human resources for industry and{" "}
            <br />
            society through excellence in technical education and research for{" "}
            <br />
            sustainable development. */}
          </p>
        </div>
        <Image src={about} className="rounded-xl mr-[3rem] sm:p-4 sm:mt-0 " />
      </div>
      <div className="h-auto w-[85rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4 rounded-2xl">
        <h1 className="text-5xl sm:text-3xl text-center font-bold text-[#002256]">
          Vision & Mission
        </h1>
        <p className="text-2xl mt-[3rem] sm:text-lg p-2 font-thin sm:mt-4">
          The vision of BIT Sindri is to nurture talented and skilled human
          resources. Through the best technical education and research, we hope
          to train individuals for professional roles in industry and society
          who will contribute to the nation’s sustainable development.
        </p>
        <h2 className="text-3xl sm:text-xl mt-[3rem] text-center font-bold text-[#002256] sm:mt-0 ">
          The Birla Institute of Technology functions with the following
          missions:
        </h2>

        <ul className="text-left ml-[10rem] text-2xl font-thin sm:text-sm sm:ml-[2rem]">
          <li>
            1. To provide quality education to students in various disciplines
          </li>
          <li>
            2. To promote research and development in science and technology
          </li>
          <li>
            3. To provide opportunities for students to develop their
            personalities and leadership skills
          </li>
          <li>
            4. To promote industry-institute interaction and collaboration
          </li>
          <li>
            5. To provide consultancy services to industries and organizations
          </li>
        </ul>
      </div>
    </>
  );
};

export default institute;
