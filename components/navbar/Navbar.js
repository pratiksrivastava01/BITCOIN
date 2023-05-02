/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";
import Logo from "../../assets/logo.png";
// import Button from "../button/Button";
import Sidebar from "./Sidebar";

const SpanStyle = {
  zIndex: 1,
  color: "inherit",
  transition: "all 300ms ease-in-out",
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Creating a dynamic parent div for the sidebar to act as portal's root
    const div = document.createElement("div");
    div.setAttribute("id", "overlay");
    document.querySelector("body").appendChild(div);
    return () => div.remove();
  }, []);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const navList = document.getElementById("navList");
      const navbar = document.getElementById("navbar");
      const title = document.getElementById("hnccTitle");
      const height = navbar.offsetHeight;

      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > height + 60) {
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      } else {
        navbar.style.border = "none";
      }

      if (prevScroll < currentScrollPos) {
        // navList.classList.add('fade-up');
        // title.classList.add('fade-up');
        navbar.style.borderBottom = "1px solid rgba(255, 255, 255, 0.2)";
      }
      // else {
      //   navList.classList.remove("fade-up");
      //   title.classList.remove("fade-up");
      // }

      prevScroll = currentScrollPos;
    };
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="navbar" className={`${styles.navbar}`}>
      <div>
        <Link href="/" legacyBehavior>
          <a className="flex items-center">
            <Image
              src={Logo}
              alt="HnCC"
              height="60px"
              width="60px"
              className="h-[3rem] w-[3rem] "
            />
          </a>
        </Link>
      </div>
      <div id="navList" className={styles.navbarList}>
        <Link href="/about" legacyBehavior>
          <a className={styles.navLink}>About Us</a>
        </Link>
        <Link href="/registeration" legacyBehavior>
          <a className={styles.navLink}>Registeration</a>
        </Link>
        <Link href="/paper" legacyBehavior>
          <a className={styles.navLink}>Paper Submission</a>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1CvZ15e2S4nksVwlu95MxJgVvzfSX-P_e/view?usp=sharing"
          legacyBehavior
        >
          <a className={styles.navLink}>Download</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a
            className={
              (styles.navLink,
              `bg-primary-light text-sm p-[0.8rem] text-[#002E73]  rounded-sm font-bold`)
            }
          >
            CONTACT US
          </a>
        </Link>
        <a
          href="https://docs.google.com/forms/d/1eOZsO1X6qmqyS48nEw43RJnOhwEBuAvXpXZXMtOOLaY/viewform?edit_requested=true"
          target="_blank"
          className="flex rounded-full"
          rel="noreferrer"
        >
          {/* <Button
            style={{ border: "none" }}
            className="bg-primary-light text-primary hover:text-primary-light"
          >
            <span style={SpanStyle}>Join Us</span>
          </Button> */}
        </a>
      </div>
      <div
        id="hamburger"
        onClick={() => setIsOpen(true)}
        className={styles.humburgerMenu}
      >
        <HiMenuAlt4 size={32} className="block" />
      </div>
      <Sidebar isMounted={isOpen} unmount={() => setIsOpen(false)} />
    </section>
  );
}
export default Navbar;
