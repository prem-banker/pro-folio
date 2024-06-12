"use client";

import { javascript } from "@codemirror/lang-javascript";
import CodeMirror, { EditorState, EditorView } from "@uiw/react-codemirror";
import { useState } from "react";
import { FaCaretDown, FaEnvelope } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";
import userdata from "../../../public/data/user.json";
import "../styles/contact.css";
import "../styles/projects.css";
import { editorTheme } from "../utils/editortheme";
import { User } from "../utils/interfaces";
import { capitalizeFirstLetter } from "../utils/utils";
import FormComponent from "./form";

export default function Page() {
  const user: User = userdata.user;
  const email = user.email;
  const socials = user.socials;

  const extensions = [
    EditorView.editable.of(false),
    EditorState.readOnly.of(true),
    javascript({ typescript: true }),
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const codesnippet = `const button = document.querySelector('#sendBtn');
const message = {
	name: ${formData.name ?? ""},
	email: ${formData.email ?? ""},
	message: ${formData.message ?? ""}
}
button.addEventListener('click', () => {
	form.send(message);
})`;

  //code mirror
  // forms
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="h-[40px] flex items-center justify-between border-b border-line">
        <div className="flex-vertical-center">
          <div className="w-[311px] pl-[22px] border-r border-line flex-vertical-center">
            <FaCaretDown className="text-white mr-2" />
            <span className="text-white">contacts</span>
          </div>
        </div>
      </div>

      {/* Sidebar + content */}

      <div className="text-secondaryLightBlue flex items-start h-full maintain-size">
        {/* Sidebar - Contact */}
        <div className="w-[311px] border-r border-line h-full flex-col">
          <div className="flex items-center mt-4 px-[22px]">
            <FaEnvelope />
            <span className="ml-2">{email}</span>
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
          <div className="w-1/2 flex justify-center items-center">
            <FormComponent setFormData={setFormData} />
          </div>
          <div className="w-1/2 no-interaction">
            {/* TODO : Read only not working h3js */}

            {/* <CodeEditor code={codesnippet} /> */}

            <CodeMirror
              editable={false}
              extensions={extensions}
              value={codesnippet}
              height="200px"
              theme={editorTheme}
              onChange={(value, viewUpdate) => {
                console.log("value:", value);
              }}
            />

            {/* <ReactCodeMirror
              extensions={extensions}
              value={codesnippet}
              height="200px"
              theme={githubDark}
              editable={false}
              // readOnly={true}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
