"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar/Navbar";
import MobileNavbar from "./navbar/MobileNavbar";
import { GiHamburgerMenu } from "react-icons/gi";
import navlogo from "@/common/assets/images/homeImg/logo_updated.png";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    console.log(isOpen);
  };
  return (
    <nav className="sticky top-0 z-50">
      <div className="hidden lg:block">
        <Navbar />
      </div>
      <div className="flex flex-row items-center px-2 bg-white border-b border-slate-200 navbar h-14 lg:hidden">
        <Link
          href={"/"}
          className="flex items-center justify-start flex-1 h-full"
        >
          <div className="xl:h-[75px] xl:w-[225px] h-[35px] w-[130px] flex items-center">
            <Image
              src={navlogo}
              alt="main_logo"
              placeholder="blur"
              className="object-contain w-auto p-2"
            />
          </div>
        </Link>
        <div className="flex justify-end flex-1 p-2">
          <GiHamburgerMenu size={30} onClick={toggleDrawer} />
        </div>
        <MobileNavbar isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Navigation;
