import BioMobile from "./mobile/biomobile";
import BioWeb from "./web/bioweb";

export default function BioPage({}: {}) {
  return (
    <>
      <div className="hidden md:block md:h-full">
        <BioWeb />
      </div>
      <div className="block h-full md:hidden">
        <BioMobile />
      </div>
    </>
  );
}
