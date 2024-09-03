"use client";
import { useWindowSize } from "../hooks/windowsize";
import "./contact.css";
import ContactMobile from "./mobile/contactmobile";
import ContactWeb from "./web/contactweb";

export default function Page() {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <ContactMobile />
        </div>
      ) : (
        <div className="block h-full">
          <ContactWeb />
        </div>
      )}
    </>
  );
}
