import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import React from "react";
import Nav3 from "@/components/home/Nav3";
import Image from "next/image";
import about from "@/assets/Electrical.jpg";

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
          <h1 className="font-bold text-5xl mr-8 sm:ml-10 sm:text-3xl text-[#002256]">
            About Electrical Engineering Department
          </h1>
          <p className="text-left overflow-auto ml-10 mt-[3rem] sm:p-[4rem] sm:mt-0">
            The Department of Electrical Engineering is one of the major
            Departments of BIT Sindri since its inception in 1949. The
            department offers four years B.Tech. degree course and two years
            postgraduate program is also offered leading to M.Tech. degree with
            specialization in Control System and Power System.
          </p>
          <p className="text-left overflow-auto ml-10 mt-[3rem]  sm:p-[4rem] sm:mt-[-2rem]">
            {" "}
            The Department has continuously evolved along with the needs of
            industry and academia without compromising on its core principles
            reflected in the Vision and Mission of the Department. Outcome based
            teaching learning process has been successfully adopted by the
            Department. The Department has a healthy blend of young and
            experienced faculty members, all of whom display high levels of
            enthusiasm and dedication. Apart from teaching and research, the
            faculties are actively engaged in upgrading their technical and
            pedagogical skills by attending relevant training programs as and
            when needed.
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
        <Image
          src={about}
          className=" h-[22rem] mr-[4rem] mt-[6rem] sm:p-4 sm:mt-0 border-none"
        />
      </div>
      <div className="h-auto w-[85rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4 rounded-2xl">
        <h1 className="text-5xl sm:text-3xl text-center font-bold text-[#002256]">
          Vision & Mission
        </h1>
        <p className="text-2xl mt-[3rem] sm:text-lg p-2 font-thin sm:mt-4">
          To emerge as a globally recognized centre in the field of Electrical
          Engineering to provide valuable human resource and ambience for
          innovative research for sustainable development of industry and
          society.
        </p>
        <h2 className="text-3xl sm:text-xl mt-[3rem] text-center font-bold text-[#002256] sm:mt-0 ">
          The Birla Institute of Technology functions with the following
          missions:
        </h2>

        <ul className="text-left ml-[10rem] mt-5 text-xl font-thin sm:text-sm sm:ml-[2rem]">
          <li>
            1. To offer state-of-the-art undergraduate, post graduate and
            doctorate programmes by providing a conducive environment towards
            outcome-based teaching learning process with knowledge and skill
            creation, suitable for contemporary and future needs of industry.
          </li>
          <li>
            2. To promote creative ambience in order to generate new knowledge
            by conducting quality research in collaboration with Electrical,
            Electronics and allied industries.
          </li>
          <li>
            3. To bridge the gap between industry and academia by framing
            curriculum and syllabi based on industrial and societal needs so
            that competency of the students matches the upcoming challenges in
            education, profession and life.
          </li>
          <li>
            4. To instil moral and ethical values among the students through
            holistic personality development so as to ensure human intellectual
            capacity to its full potential.
          </li>
          {/* <li>
            5. To provide consultancy services to industries and organizations
          </li> */}
        </ul>
      </div>
      <div className="flex sm:flex-wrap gap-[-2rem] ">
        <div className="h-auto w-[75rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[5rem] sm:h-auto sm:w-[29rem] p-4 rounded-2xl">
          <h1 className="text-3xl sm:text-3xl text-center font-bold p-4 text-[#002256]">
            Program Specific Outcomes(PSOs)
          </h1>

          <ul className="text-left ml-[3rem] mt-5 text-xl font-thin sm:text-sm sm:ml-[2rem]">
            <li>
              PSO1 : Ability to utilize the knowledge acquired from basic
              sciences, basic computing and electrical engineering courses to
              work in multi-disciplinary environment and to cater the
              diversified needs of industry and academia.
            </li>
            <li>
              PSO2 : Ability to identify and solve different technical issues
              related with electrical engineering by integrating the knowledge
              acquired from the curriculum and industry- academia interactions.
            </li>
            <li>
              PSO3 : Able to demonstrate effective communication and
              inter-personal skills with management principles for career and
              professional advancement.
            </li>
            <li>
              {/* 4. To instil moral and ethical values among the students through
            holistic personality development so as to ensure human intellectual
            capacity to its full potential. */}
            </li>
            {/* <li>
            5. To provide consultancy services to industries and organizations
          </li> */}
          </ul>
        </div>
        <div className="h-auto w-[75rem] mr-[5rem] border-2 justify-center flex flex-col border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[1rem] sm:h-auto sm:w-[29rem] p-4 rounded-2xl">
          <h1 className="text-3xl sm:text-3xl text-center font-bold p-4 text-[#002256]">
            Program Educational Objectives(PEOs)
          </h1>

          <ul className="text-left ml-[3rem] mt-5 text-xl font-thin sm:text-sm sm:ml-[2rem]">
            <li>
              PEO1 : To inculcate the attitude to solve real life engineering
              problems with the implication of the fundamental knowledge based
              on science and electrical engineering.
            </li>
            <li>
              PEO2 : To impart quality technical education to students, which
              enables them to face challenges in industry, society and pursuing
              higher studies.
            </li>
            <li>
              PEO3 : To envisage expertise in career enhancement with industrial
              training and to promote leadership skills.
            </li>
            <li>
              PEO4 : To foster values and ethics with strong foundation to
              undertake team work with effective communication skills.
            </li>
            {/* <li>
            5. To provide consultancy services to industries and organizations
          </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default institute;
