import Link from "next/link";
import React from "react";
// import { BsDot } from "react-icons/bs";
// import { RxDotFilled } from "@react-icons/rx";
import { RxDotFilled } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="flex flex-row items-center sm:flex-col">
      <div className="h-[93.8rem] w-[25rem] border-2  border-primary mt-[5rem] ml-[8rem] shadow-2xl sm:ml-[0.2rem] sm:h-auto sm:w-[21rem]">
        <div className="p-5">
          <h1 className="font-bold text-3xl sm:text-lg">Core Team</h1>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">
            Chief-Patron
          </h2>
          <p>
            Prof. D. K. Singh <br /> Director, BIT Sindri
          </p>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">Patron</h2>
          <p>
            Dr. Md. Abul Kalam <br /> HOD, EED, BIT Sindri
          </p>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">
            Organizing Chairman(s):
          </h2>
          <p>
            Dr Pankaj Rai <br /> Dept. of EE, BIT Sindri <br /> Dr. D. K. Tanti{" "}
            <br /> Dept. of EE, BIT Sindri
          </p>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">
            Organizing Secretary(s):
          </h2>
          <p>
            Dr. Vineet Shekher <br /> Dept. of EE, BIT Sindri <br /> Dr. A. K.
            Choudhary <br /> Dept. of EE, BIT Sindri
          </p>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">Treasurer:</h2>
          <p>
            Dr. Nirmala Soren <br /> Dept. of EE, BIT Sindri <br /> Dr. Rajendra
            Murmu <br /> Dept. of EE, BIT Sindri
          </p>
          <h2 className="mt-[2rem] font-bold text-lg sm:text-sm">
            Coordinators
          </h2>
          <p>
            Prof. Praveen Kumar <br /> Dept. of EE, BIT Sindri <br /> Prof.
            Mukhlesur Rahman <br />
            Dept. of EE, BIT Sindri
          </p>
          <h1 className="mt-[5rem] font-bold text-lg sm:text-sm">
            Key Dates (Tentative):
          </h1>
          <p>
            Start of paper submission: <br />
            <span className="font-bold text-lg">
              {" "}
              01 June, 2023
            </span> <br /> Deadline for submission: <br />
            <span className="font-bold text-lg">
              {" "}
              15 August, 2023{" "}
            </span> <br /> Paper Acceptance notification: <br />
            <span className="font-bold text-lg">
              {" "}
              30 October, 2023
            </span> <br /> Camera ready version: <br />
            <span className="font-bold text-lg">
              01 November, 2023
            </span> <br /> Registration Commences: <br />
            <span className="font-bold text-lg">15 November, 2023</span> <br />
            Registration Closes: <br />
            <span className="font-bold text-lg">
              30 November, 2023
            </span> <br /> Conference Date: <br />
            <span className="font-bold text-lg">22-23 December, 2023</span>
          </p>
        </div>
      </div>
      <div className="h-auto w-[53rem] border-2  border-primary shadow-2xl mt-[5rem] sm:ml-[0.2rem] ml-[2rem] sm:h-auto sm:w-[21rem]">
        <p className="p-5 mt-[2rem] ml-[1rem] mr-[1rem] sm:text-xs text-center">
          The Department of Electrical Engineering at BIT SINDRI proudly
          announces to host the{" "}
          <span className="text-xl text-[#002E73] sm:text-sm font-bold">
            {" "}
            Flagship BIT CONFERENCE-2023- An International Conference.
          </span>{" "}
          This would be a beginning of the annual conference at BIT-Sindri and
          will commemorate its Platinum Jubilee. <br />
          <br /> The Conference 2023 will be a three-day event starting with
          tutorials on emerging and proven technologies in different areas of
          electrical on day one. Following days will accumulate the formal
          conference. The conference will feature plenary and semi-plenary talks
          by eminent personalities from academia / industry, and peer-reviewed
          oral and poster presentations. BITCON-2023
          <br />
          <span className="text-xl text-[#002E73] sm:text-sm font-bold">
            Theme:
          </span>
          <br />
          <span className="text-xl text-[#002E73] sm:text-sm font-bold ">
            “Next Generation Applications in Green Engineering Technology”
          </span>
          <br className="mt-2" />
          <p className="mt-[2rem]">
            <span className="text-xl text-[#af2a2a] sm:text-sm mr-3 mt-[2rem] font-bold gap-3 ">
              Highlights:
            </span>
            There will be three major tracks namely (i) Electrical Engineering,
            (ii) Mechatronics & Robotics and (iii) Green Engineering Technology.
            Each track has the following main components; a) Paper presentations
            and best paper awards for each track, b) Poster presentations and
            best poster awards for each track, c) Key Note Lectures, d) Panel
            discussions, e) Awards for best M.Tech Dissertation, and f) Awards
            for best PhD Thesis.
          </p>
        </p>
        <h1 className="p-5 mt-[2rem] text-primary font-bold text-2xl sm:mt-0 ml-[1rem] mr-[1rem] sm:text-lg text-center">
          Topics included
        </h1>
        <div className="flex flex-row flex-wrap gap-8 ml-[2rem] ">
          <div className="">
            <h3 className=" text-primary font-medium text-lg sm:ml-[0rem] ml-8  sm:text-sm">
              <span className="text-[#002E73] font-bold mr-3">Track 1:</span>
              Power System Dynamics:
            </h3>
          </div>
          <div className="">
            {" "}
            <h3 className="text-primary  font-medium text-lg  sm:text-sm">
              <span className="text-[#002E73] font-bold mr-3">Track 2:</span>
              Power Electronics Drives <br /> & Applications:
            </h3>
          </div>
        </div>
        <div className="flex flex-row flex-wrap sm:gap-0 gap-[5rem] ml-[2rem] ">
          <div className=" mt-[3rem]   ">
            <h3 className="text-primary font-medium  text-lg sm:ml-0 ml-8  sm:text-sm">
              <span className="text-[#002E73] font-bold mr-3">Track 3:</span>
              Control System, <br />
              Automation & Applications:
            </h3>
          </div>
          <div className="  mt-[3rem]  ">
            <h3 className="text-primary font-medium text-lg  sm:text-sm">
              <span className="text-[#002E73] font-bold mr-3">Track 4:</span>
              Green Energy Technology <br />& Applications:
            </h3>
          </div>
        </div>
        <div className="  mt-[3rem]  items-center sm:ml-[2rem] ml-[8rem]">
          <h3 className="text-primary font-medium text-lg  sm:text-sm">
            <span className="text-[#002E73] font-bold mr-3">Track 5:</span>
            Artificial Intelligence, IoT and Signal Processing
          </h3>
        </div>

        <div className=" flex justify-center mt-[2rem] ">
          <Link href="google.com">
            <button className="border-2 border-[white] text-[white] rounded-xl bg-[#002E73] hover:bg-[white] hover:text-[#002E73] hover:border-[#002E73] p-4">
              View More
            </button>
          </Link>
        </div>

        <div className="mt-[2rem]">
          <p className="p-4 sm:text-xs">
            <span className="text-[#002E73] font-bold text-xl ml-8  sm:text-sm">
              Publication:{" "}
            </span>
            Attempt is being made to publish the registered and only presented
            papers on IEEE Xplore Digital Library.
          </p>{" "}
          <p className="p-4 sm:text-xs">
            <span className="text-[#002E73] font-bold text-xl ml-8  sm:text-sm">
              Paper Submission:{" "}
            </span>
            Papers submitted for both oral and poster presentations should
            comply with the IEEE format and specifications and must be original,
            not previously published or accepted for publication elsewhere, and
            they must not be submitted to any other event or publication during
            the entire review process. All submissions must be in English only
            and in PDF format.
          </p>{" "}
          <p className="p-4 sm:text-xs">
            <span className="text-[#002E73] font-bold text-xl ml-8  sm:text-sm">
              Call for M.Tech Dissertation and PhD Thesis Awards:{" "}
            </span>
            BITCON-2023 will also provide the platform for young professionals
            who have recently completed their M.Tech Dissertation and PhD thesis
            in the area of Electrical Engineering. The M.Tech and PhD degrees
            must be awarded between 1st November 2022 to 31st November 2023 from
            any Indian Institute/University. The submitted theses will be
            evaluated by the senior panel of experts, on their recommendations,
            one thesis in each area will be awarded the best PhD thesis award
            for year 2022.
          </p>
        </div>
        <p className="p-4 sm:text-xs">
          <span className="text-[#002E73] font-bold text-xl ml-8  sm:text-sm">
            BIT Sindri, Dhanbad:{" "}
          </span>
          Established in 1949, and affiliated to Jharkhand University of
          Technology (JUT), Ranchi is the only Government Institute in
          Jharkhand. It is located in the Coal Capital of India, Dhanbad. The
          campus spreads over an area of 450 acres of land, near the eastern
          bank of Damodar River. It is fully residential, both for faculty as
          well as the students
        </p>
      </div>
    </div>
  );
};

export default Footer;
