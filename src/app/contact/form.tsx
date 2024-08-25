import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormComponentProps {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const FormComponent: React.FC<FormComponentProps> = ({ setFormData }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }, // Add errors from formState
  } = useForm<FormData>();

  const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;

  const [submitted, setSubmitted] = useState(false); // State to track form submission
  const [loading, setLoading] = useState(false); // State to track loading state

  // Watch all form values
  const formValues = watch();

  const resetForm = () => {
    setSubmitted(false); // Reset submitted state to false
  };

  const onSubmit = async (data: FormData) => {
    setFormData(data);
    setLoading(true); // Set loading state to true

    await emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, "#contact-form", PUBLIC_KEY)
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
  };

  return (
    <div className="w-[90%] flex-col flex h-full justify-center items-center">
      {!submitted ? (
        <form
          onChange={() => setFormData(formValues)}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          id="contact-form"
        >
          <div>
            <label className="text-labels">_name:</label>
            <input
              type="text"
              placeholder="your name"
              {...register("name", { required: true })} // Add required validation
              className="mt-1 w-full px-3 py-2 border border-line rounded-md focus:outline-secondaryBrightPurple focus:ring-primary focus:border-primary sm:text-sm bg-transparent placeholder-gray-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm pl-2">Name is required</p> // Error message for required field
            )}
          </div>

          <div>
            <label className="text-labels">_email:</label>
            <input
              type="email"
              placeholder="your email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, // Regular expression for email validation
              })}
              className="placeholder-gray-500 mt-1 w-full px-3 py-2 border border-line rounded-md focus:outline-secondaryBrightPurple focus:ring-primary focus:border-primary sm:text-sm bg-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm pl-2">
                Please enter a valid email address
              </p> // Error message for invalid email format
            )}
          </div>

          <div>
            <label className="text-labels">_message:</label>
            <textarea
              {...register("message", { required: true })}
              placeholder="your message"
              className="placeholder-gray-500 mt-1 w-full px-3 py-2 border border-line rounded-md focus:outline-secondaryBrightPurple focus:ring-primary focus:border-primary sm:text-sm bg-transparent"
            />
            {errors.message && (
              <p className="text-red-500 text-sm pl-2">Message is required</p> // Error message for required field
            )}
          </div>

          <button
            type="submit"
            className={`mt-4 px-4 py-2 bg-buttonbackground text-white rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "submit-message"}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-xl font-bold">
            Thank you 🤘 I have received your email.
          </p>
          <p className="text-lg">I shall respond to you shortly.</p>
          <button
            className="mt-4 px-4 py-2 bg-buttonbackground text-white rounded-md"
            onClick={resetForm} // Reset form on button click
          >
            submit-new-message
          </button>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
