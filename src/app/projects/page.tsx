import "../styles/projects.css";
import ProjectsMobile from "./mobile/projectsmobile";
import ProjectsWeb from "./web/projectsweb";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <div className="hidden md:block md:h-full">
        <ProjectsWeb />
      </div>
      <div className="block h-full md:hidden">
        <ProjectsMobile />
      </div>
    </>
  );
}
