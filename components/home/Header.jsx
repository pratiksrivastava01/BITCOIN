import React from "react";

// import components
// import Logo from "../assets/img/logo.svg";
import { logo } from "@/assets";
import Nav from "./Nav";

// import icons
import { HiMenuAlt1 } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={logo} alt="" />
          </a>
          {/* nav */}
          <Nav />
          {/* nav mobile btn */}
          <HiMenuAlt1
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-black cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
