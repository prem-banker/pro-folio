import "../styles/contact.css";
import ContactMobile from "./mobile/contactmobile";
import ContactWeb from "./web/contactweb";

export default function Page() {
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
