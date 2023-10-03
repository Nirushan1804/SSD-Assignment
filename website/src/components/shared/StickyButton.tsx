"use client";
import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

const options = [
  { text: "Ride", path: "/" },
  // { text: "Inquire Now", path: "/" },
];

function StickyButton() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <>
      <div
        className={`fixed z-50 bottom-10 right-[50%] ${open ? "hidden" : ""}`}
      >
        <div className="flex flex-row items-center py-10 translate-x-1/2 rounded-md shadow-md h-14 md:h-20 bg-zinc-950 md:w-96 w-80">
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onOpenModal();
                setTitle(item.text);
              }}
              className="flex items-center justify-center flex-1 h-12 text-lg text-white border-r md:h-14 border-r-gray-500 hover:cursor-pointer last-of-type:border-r-0"
            >
              <p>
                {/* Choose <span className="italic">{item.text}</span> */}
                Packages
              </p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={false}
        styles={{
          modal: {
            backgroundColor: "transparent",
            height: "85vh",
            borderRadius: "8px",
            boxShadow: "none",
          },
        }}
      >
        <div className="flex flex-col gap-10 bg-zinc-950 h-[80%] shadow-md py-10 px-20 rounded-md w-full overflow-hidden">
          <div className="text-2xl text-center text-white">
            <span className="italic">Search for </span>
            {title}
          </div>
          <div className="flex flex-col gap-5 font-mono sm:text-md font-semibold text-white uppercase">
            <Link href="/GolfingSerenity">
            <div>Golfing Serenity</div>
            </Link>
            <Link href="/Windswept">
            <div>Mountain Bike</div>
            </Link>
            <Link href="/TranquilParadise">
            <div>Tranquil Paradise</div>
            </Link>
            <Link href="/ASportingEuphoria">
            <div>Sporting Euphoria</div>
            </Link>
            <Link href="/CyclingOdyssey">
            <div>Cycling Odyssey</div>
            </Link>
          </div>
        </div>
        <div
          className="absolute flex items-center justify-center w-16 h-16 mt-5 text-3xl translate-x-1/2 bg-white rounded-full shadow-lg lg:text-4xl text-zinc-950 right-1/2 hover:cursor-pointer"
          onClick={onCloseModal}
        >
          <IoMdClose />
        </div>
      </Modal>
    </>
  );
}

export default StickyButton;
