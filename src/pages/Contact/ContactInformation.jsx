import React from "react";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactInformation = () => {
  return (
    <aside className="flex flex-col items-center">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-2xl font-semibold leading-[35px] ">
          Contact Information
        </h1>
        <p className="flex items-center gap-2 mt-4">
          <FaPhone />
          +8801781082064
        </p>
        <p className="flex items-center break-all gap-2">
          <FaEnvelope />
          mr.aminul118@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <FaLocationDot />
          Mirpur, Dhaka
        </p>
      </div>
    </aside>
  );
};

export default ContactInformation;
