"use client";
import React from "react";
import ContactHeader from "../../components/contact/contactHeader/contactHeader";
import ContactSlider from "../../components/contact/contactSlider/contactSlider";
import ContactForm from "../../components/contact/contactForm/contactForm";
import ContactMap from "../../components/contact/contactMap/contactMap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  return (
    <div>
      <ContactHeader />
      <ContactForm />
      <ContactSlider />
      {/* <ContactMap/> */}
      <ToastContainer />
    </div>
  );
}

export default ContactUs;
