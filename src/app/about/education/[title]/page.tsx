import EducationMobile from "./mobile/educationmobile";
import EducationWeb from "./web/educationweb";

export default function EducationPage({
  params,
}: {
  params: { title: string };
}) {
  return (
    <>
      <div className="hidden md:block md:h-full">
        <EducationWeb params={params} />
      </div>
      <div className="block h-full md:hidden">
        <EducationMobile params={params} />
      </div>
    </>
  );
}
