"use client";
import React from "react";
import Link from "next/link";

function Footer() {
  const isBrowser = () => typeof window !== "undefined";

  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    { text: "About Us", path: "/about" },
    { text: "Community", path: "/" },
    { text: "Help Center", path: "/" },
    { text: "Booking and Cancellation", path: "/" },
    { text: "How it works", path: "/" },
  ];

  return (
    <div className="flex flex-col w-full text-white bg-black xl:pl-[50px] lg:pr-[50px] md:px-5 sm:justify-center">
      <div className="container mx-auto">
        <div className="pt-[150px]">
          <hr />
        </div>
        <div className="flex md:flex-row flex-col gap-16 md:gap-0 md:pt-[150px] pt-20 px-5 md:px-0 justify-between">
          <div className="flex flex-row md:flex-1">
            <ul className="md:text-[22px] text-xl font-[300]">
              {footerLinks.map((item, index) => (
                <Link key={index} href={item.path}>
                  <li className="mt-3 footer-links md:hover:text-[21px]">
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
            <div className="ml-auto md:hidden">
              <button
                className="flex items-center justify-center py-1 origin-center -rotate-90 rounded-full appearance-none focus:outline-none"
                onClick={scrollToTop}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-[#EBB70B] w-[28px] h-[28px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex md:flex-1 flex-col text-center ml-auto mr-auto 2xl:w-[420px] md:pl-[5%]">
            <div className="md:pb-5 pb-5 font-bold lg:text-4xl text-[30px] text-[#EBB70B] font-mono">
              WEEKLY AND FREE
            </div>
            <div className="pb-10 md:pb-5 lg:text-xl">
              The only Newsletter worth riding. Carefully designed for young
              business professionals and outdoor aficionados.
            </div>
            <div className="flex justify-center md:mt-8">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-black border-t-0 border-b w-[18rem] border-gray-300 focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="px-2 py-2 text-red-500 focus:outline-none pl-[0px] border-b border-gray-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current text-gray-300 w-[11px] h-[11px]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="justify-end hidden ml-auto md:flex md:flex-1">
            <button
              className="flex items-center justify-center w-20 h-20 origin-center -rotate-90 rounded-full appearance-none hover:border hover:border-gray-300 focus:outline-none"
              onClick={scrollToTop}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current text-[#EBB70B] w-[30px] h-[30px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex md:gap-[30px] gap-5 md:justify-end justify-center md:pt-[80px] text-[13px] font-[400] mt-20 mb-5">
          <div>Disclaimer</div>
          <div>General Conditions</div>
          <div>Privacy statement</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
