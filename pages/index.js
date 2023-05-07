import Footer from "@/components/home/Footer";
import ImageSlider from "@/components/imageSlider";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Notification from "@/components/Notification";
import Image from "next/image";
import jh from "@/assets/jh_logo.png";
import logo from "@/assets/logo.png";
import Nav2 from "@/components/home/Nav2";

export default function Home() {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <>
      <Head>
        <title>BITCON-2023</title>
        <meta
          name="description"
          content="HnCC or Hackathon and Coding Club is the official club of BIT Sindri that has the motto to instill a coding culture, collaborate, and arrange events relevant to Open Source, Graphics and Game Development, Web Development, App Development, and many other topics."
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <div className=" flex flex-col ">
        <Navbar />
        <Notification />

        <div className="flex flex-wrap items-center gap-[5rem]">
          <div className="flex flex-col  sm:flex-col">
            <Image
              src={jh}
              className="h-[10rem] w-[10rem] sm:h-[5rem] sm:w-[5rem] ml-[5rem] mt-[2rem]  "
            ></Image>
            <Image
              src={logo}
              className="h-[7rem] w-[7rem] sm:h-[5rem] sm:w-[5rem] sm:ml-0 sm:mt-0 ml-[7rem] mt-[3rem]  "
            ></Image>
          </div>
          <div className="flex flex-col  items-center">
            <h1 className="text-center text-4xl text-[#002E73] font-serif font-bold sm:text-xl mt-[2rem] ">
              Celebrating Platinum Jubilee of BIT SINDRI
            </h1>
            <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[2rem] ">
              <span className="text-[#385623] font-sans">FLAGSHIP</span> BIT
              CONFERENCE <span className="text-[#385623]">2023</span>
            </h1>
            <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-2xl mt-[2rem] ">
              <span className="text-[#385623]">(BITCON-23)</span>
            </h1>

            <h3 className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[2rem]">
              <span className="text-[#002E73] ">Theme:-</span>
              Next Generation Applications in Green Engineering Technology
            </h3>
            <h1 className="text-[red] text-xl sm:text-xs font-bold text-center mt-[2rem]">
              December 22-24, 2023 (3 days)
            </h1>
            <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center ">
              BIT, Sindri, Dhanbad, Jharkhand, INDIA
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row  flex-wrap">
            <Image
              src={jh}
              className="h-[10rem] w-[10rem] ml-[75rem] sm:ml-0 mt-[-27rem] relative "
            ></Image>
            <Image
              src={logo}
              className="h-[7rem] w-[7rem] ml-[77rem] mt-[3rem] relative "
            ></Image>
          </div>
        </div>
        <div className="w-[80rem] h-[30rem] ml-[8rem] mt-[2rem] sm:w-[23rem] sm:h-[20rem] sm:ml-[1.2rem]">
          <ImageSlider slides={slides} />
        </div>
        <Nav2 />
        <Footer />
      </div>
    </>
  );
}
