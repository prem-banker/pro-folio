import WorkMobile from "./mobile/workmobile";
import WorkWeb from "./web/workweb";

export default function WorkPage({ params }: { params: { company: string } }) {
  return (
    <>
      <div className="hidden md:block md:h-full">
        <WorkWeb params={params} />
      </div>
      <div className="block h-full md:hidden">
        <WorkMobile params={params} />
      </div>
    </>
  );
}
