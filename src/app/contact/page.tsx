"use client";

import { FaCaretDown, FaEnvelope, FaLink, FaMailBulk } from "react-icons/fa";
import userdata from "../../../public/data/user.json";
import "../styles/projects.css";
import { User } from "../utils/interfaces";
import { capitalizeFirstLetter } from "../utils/utils";
import { FaUpRightFromSquare } from "react-icons/fa6";
import ReactCodeMirror from "@uiw/react-codemirror";
import { githubDark } from "@uiw/codemirror-theme-github";
import { javascript } from "@codemirror/lang-javascript";
import "../styles/contact.css";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  const user: User = userdata.user;
  const email = user.email;
  const socials = user.socials;

  const extensions = [javascript({ typescript: true, jsx: true })];

  const name = "";
  const codesnippet = `
  const button = document.querySelector('#sendBtn');

const message = {
	name: "Jonathan Davis",
	email: "jonathan-davis@gmail.com",
	message: "Hey! Just checked your website and it looks awesome! Also, I checked your articled on Medium. Lerned a few nice tips. Thanks!",
	date: "Thu 21 Apr"
}

button.addEventListener('click', () => {
	form.send(message);
})
    `;

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
            <div className="flex items-center mb-2 px-[22px]">
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

        {/* Content - Projects */}
        {/* w-0 coz it was expanding and causing its siblings to shrink */}
        <div className="flex flex-grow  h-full maintain-size custom-scrollbar pl-24">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <ReactCodeMirror
              theme={githubDark}
              readOnly={true}
              editable={false}
              extensions={extensions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
