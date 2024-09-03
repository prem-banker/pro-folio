"use client";

import { FaEnvelope } from "react-icons/fa";
import userdata from "../../../../public/data/user.json";
import { useState } from "react";
import FormComponent from "../form";
import { User } from "../../utils/interfaces";
import { capitalizeFirstLetter } from "../../utils/utils";
import { FaUpRightFromSquare } from "react-icons/fa6";

export default function ContactMobile() {
  const user: User = userdata.user;
  const email = user.email;
  const socials = user.socials;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      {/* Mobile Layout Content */}
      <div className="flex flex-col flex-grow p-4 text-secondaryLightBlue">
        <p>Shoot me a mail at </p>
        <a
          href={`mailto:${user.email}`}
          className="my-4 flex items-center text-secondaryFluorescentGreen  hover:text-secondaryFluorescentGreen transition-colors duration-200 "
        >
          <FaEnvelope />
          <span className="ml-2">{user.email}</span>
        </a>

        <p>OR Write me here 👇</p>

        {/* Contact Form */}
        <div className="flex flex-col flex-grow mt-4">
          <FormComponent setFormData={setFormData} />
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-2 mt-8">
          <div className="font-semibold text-white">Find me also on:</div>
          <a
            href={`mailto:${user.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondaryLightBlue hover:text-white flex items-center"
          >
            <FaEnvelope />
            <span className="ml-2">{user.email}</span>
          </a>
          {socials.map((social, index) => (
            <a
              key={index + 1}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryLightBlue hover:text-white flex items-center"
            >
              <FaUpRightFromSquare />
              <span className="ml-2">{capitalizeFirstLetter(social.name)}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
