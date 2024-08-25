"use client";

import { javascript } from "@codemirror/lang-javascript";
import { EditorState, EditorView } from "@uiw/react-codemirror";
import { useState } from "react";
import { FaCaretDown, FaEnvelope } from "react-icons/fa";
import { FaUpRightFromSquare } from "react-icons/fa6";
import userdata from "../../../public/data/user.json";
import CustomCodeEditor from "../components/code-editor/codeeditor";
import "../styles/contact.css";
import "../styles/projects.css";
import customKeymap from "../utils/code-editor/keymap";
import { User } from "../utils/interfaces";
import { capitalizeFirstLetter } from "../utils/utils";
import FormComponent from "./form";
import ContactWeb from "./web/contactweb";
import ContactMobile from "./mobile/contactmobile";

export default function Page() {
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
    <>
      <div className="hidden md:block md:h-full">
        <ContactWeb />
      </div>
      <div className="block h-full md:hidden">
        <ContactMobile />
      </div>
    </>
  );
}
