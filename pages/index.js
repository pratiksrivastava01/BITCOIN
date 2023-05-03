import Footer from "@/components/home/Footer";
import ImageSlider from "@/components/imageSlider";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";
import Notification from "@/components/Notification";

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
        <title>BITCOIN-2023</title>
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

        <h1 className="text-center text-5xl text-[#002E73] font-bold sm:text-3xl mt-[2rem] ">
          Welcome To BITCON-23
        </h1>
        <h3 className="text-[#4E4E4E] text-xl sm:text-xs font-bold text-center mt-[2rem]">
          <span className="text-[#002E73] ">Theme:-</span>
          Next Generation Applications in Green Engineering Technology
        </h3>
        <h1 className="text-[#002E73] text-xl sm:text-xs font-bold text-center mt-[2rem]">
          December 22-24, 2023 (3 days)
        </h1>
        <h1 className="text-[#002E73] text-3xl sm:text-lg font-bold text-center">
          BIT, Sindri, Dhanbad, Jharkhand, INDIA
        </h1>
        <div className="w-[80rem] h-[40rem] ml-[8rem] mt-[2rem] sm:w-[23rem] sm:h-[20rem] sm:ml-[1.2rem]">
          <ImageSlider slides={slides} />
        </div>
        <Footer />
      </div>
    </>
  );
}
