"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { IoMdClose } from "react-icons/io";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const options = [
  { text: "Inquire Now", path: "/" },
  //   { text: "Ride", path: "/" },
];

function FloatButton() {
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const form = useRef<HTMLFormElement>(null);
  interface Errors {
    first_name?: string;
    last_name?: string;
    from_email?: string;
    phone?: string;
    message?: string;
  }
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    const firstName = form.current ? form.current.first_name.value : "";
    const lastName = form.current ? form.current.last_name.value : "";
    const email = form.current ? form.current.from_email.value : "";
    const phone = form.current ? form.current.phone.value : "";
    const message = form.current ? form.current.message.value : "";

    interface NewErrors {
      first_name?: string;
      last_name?: string;
      from_email?: string;
      phone?: string;
      message?: string;
    }

    const newErrors: NewErrors = {};

    if (!firstName) {
      newErrors.first_name = "First name is required";
    }

    if (!lastName) {
      newErrors.last_name = "Last name is required";
    }

    if (!email) {
      newErrors.from_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.from_email = "Email is invalid";
    }

    // if (!phone) {
    //   newErrors.phone = 'Phone is required';
    // }
    if (!phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Phone must be a valid number";
    }

    if (!message) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_73nig4t",
          "template_3hk190p",
          form.current ? form.current : "",
          "vBZs8y73pkIHZq5_R"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("Message sent successfully.");
          },
          (error) => {
            console.log(error.text);
            toast.error("Message is not sent successfully.");
          }
        );
    }
  };

  return (
    // <div>Coming Soon</div>
    <>
      <div
        className={`fixed z-50 bottom-10 right-[2%] ${open ? "hidden" : ""}`}
      >
        <div
          className="flex flex-row items-center md:py-8 translate-x-6 bg-gray-300 rounded-md shadow-md hover:bg-gray-900 md:h-[30px] md:w-[190px] sm:w-[180px] w-[180px] sm:mr-[300px] sm:px-[5px]"
          style={{ marginRight: "42px" }}
        >
          {options.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                onOpenModal();
                setTitle(item.text);
              }}
              className="flex items-center justify-center flex-1 h-12 font-mono text-2xl text-gray-900 border-r md:h-14 border-r-gray-500 hover:cursor-pointer hover:text-gray-100 last-of-type:border-r-0"
            >
              <p className="px-[5px]">{item.text} </p>
            </div>
          ))}
        </div>
      </div>
      <Modal
        open={open}
        onClose={onCloseModal}
        center
        showCloseIcon={true}
        styles={{
          modal: {
            // backgroundColor: "black",
            height: "85vh",
            borderRadius: "8px",
            // boxShadow: "none",
          },
        }}
      >
        <div className="flex flex-col w-full h-full gap-10 md:px-20 sm:px-[15px] py-10 overflow-auto bg-white rounded-md scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded">
          {/* <div className="text-2xl text-center text-white">
            <span className="italic">Inquire Now </span>
            {title}
          </div> */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col rounded-2xl"
          >
            <div className="flex items-center justify-center font-medium lg:text-[36px] text-xl">
              Inquire Now
            </div>
            <div className="pt-[20px]">
              <label>First Name</label>
              <br />
              <input
                type="text"
                name="first_name"
                className={`border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none ${
                  errors.first_name ? "border-red-500" : ""
                }`}
              />
              {errors.first_name && (
                <p className="text-sm text-red-500">{errors.first_name}</p>
              )}
            </div>
            <div className="pt-[20px]">
              <label>Last Name</label>
              <br />
              <input
                type="text"
                name="last_name"
                className={`border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none ${
                  errors.last_name ? "border-red-500" : ""
                }`}
              />
              {errors.last_name && (
                <p className="text-sm text-red-500">{errors.last_name}</p>
              )}
            </div>
            <div className="pt-[20px]">
              <label>Email</label>
              <br />
              <input
                type="text"
                name="from_email"
                className={`border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none ${
                  errors.from_email ? "border-red-500" : ""
                }`}
              />
              {errors.from_email && (
                <p className="text-sm text-red-500">{errors.from_email}</p>
              )}
            </div>
            <div className="pt-[20px]">
              <label>Phone</label>
              <br />
              <input
                type="text"
                name="phone"
                className={`border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            <div className="pt-[20px]">
              <label>Message</label>
              <br />
              <textarea
                // type="text"
                name="message"
                className={`border rounded-[10px] mt-[5px] xl:w-[300px] w-full py-[7px] bg-gray-100 p-4 focus:outline-none ${
                  errors.message ? "border-red-500" : ""
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <button className="text-center border bg-red flex mx-[auto] px-8 py-1 text-lg font-medium mt-[50px] mb-[20px] rounded-[10px] bg-gray-100 hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
        {/* <div
          className="absolute flex items-center justify-center w-16 h-16 mt-5 text-3xl translate-x-1/2 bg-white rounded-full shadow-lg lg:text-4xl text-zinc-950 right-1/2 hover:cursor-pointer"
          onClick={onCloseModal}
        >
          <IoMdClose />
        </div> */}
      </Modal>
    </>
  );
}

export default FloatButton;
