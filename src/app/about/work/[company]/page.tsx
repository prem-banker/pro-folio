"use client";
import { useWindowSize } from "@/app/hooks/windowsize";
import WorkMobile from "./mobile/workmobile";
import WorkWeb from "./web/workweb";

export default function WorkPage({ params }: { params: { company: string } }) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <WorkMobile params={params} />
        </div>
      ) : (
        <div className="block h-full">
          <WorkWeb params={params} />
        </div>
      )}
    </>
  );
}
