"use client";

import { javascript } from "@codemirror/lang-javascript";
import { EditorState, EditorView } from "@uiw/react-codemirror";
import { useState } from "react";
import { FaCaretDown, FaEnvelope } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";
import userdata from "../../../../public/data/user.json";
import CustomCodeEditor from "../../components/code-editor/codeeditor";
import customKeymap from "../../utils/code-editor/keymap";
import { User } from "../../utils/interfaces";
import { capitalizeFirstLetter } from "../../utils/utils";
import FormComponent from "../form";

export default function ContactWeb() {
  const user: User = userdata.user;
  const email = user.email;
  const socials = user.socials;

  const extensions = [
    EditorView.editable.of(false),
    EditorState.readOnly.of(true),
    javascript({ typescript: true }),
    customKeymap,
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // const codesnippet = `I joined Virginia Tech in the Fall of 23, Throughout the semester, I have taken numerous courses including but not limited to Modelling and Evaluation, Information Visualization, Artificial Intelligence, Machine Learning 1, Web Development`;
  const codesnippet = `// sneak peek into how the code for this form works 
const form = {
  name: ${formData.name ?? ""},
  email: ${formData.email ?? ""},
  message: ${formData.message ?? ""}
};
await emailjs
  .sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
  .then(
    (result) => {
      setSubmitted(true);
      setLoading(false); // Set loading state to false
    },
    (error) => {
      console.log(error);
      alert("Something went wrong!");
      setLoading(false); // Set loading state to false
    }
  );
})`;

  //code mirror
  // forms
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[220px] pl-[22px] border-r border-line flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">contacts</span>
          </div>
        </div>
      </div>

      {/* Sidebar + content */}

      <div className="text-secondaryLightBlue flex items-start h-full maintain-size">
        {/* Sidebar - Contact */}
        <div className="w-[220px] border-r border-line h-full flex-col">
          <div className="flex items-center mt-4 px-[22px]">
            <a
              href={`mailto:${user.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondaryLightBlue hover:text-white flex items-center overflow-hidden text-ellipsis"
            >
              <span className="flex flex-row space-x-2">
                <FaEnvelope size={20} /> &nbsp;
                {user.email}
              </span>
            </a>
            {/* <FaEnvelope />
            <span className="ml-2 overflow-hidden text-ellipsis">{email}</span> */}
          </div>

          <div className="h-[40px] border-y border-line  flex items-center my-4 px-[22px]">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">find-me-also-on</span>
          </div>

          {socials.map((social, index) => (
            <div key={index} className="flex items-center mb-2 px-[22px]">
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondaryLightBlue hover:text-white flex items-center"
              >
                <FaUpRightFromSquare />
                <span className="ml-2">
                  {capitalizeFirstLetter(social.name)}
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* contact form */}
        <div className="flex flex-grow  h-full maintain-size custom-scrollbar">
          <div className="w-full lg:w-2/5 xl:w-1/2 flex justify-center items-center font-[1.5em]">
            <FormComponent setFormData={setFormData} />
          </div>
          <div className="w-0 lg:w-3/5 xl:w-1/2">
            {/* codeeditor */}
            <CustomCodeEditor code={codesnippet} fontSize="1.1em" />
          </div>
        </div>
      </div>
    </div>
  );
}
