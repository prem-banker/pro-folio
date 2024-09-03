"use client";
import { useWindowSize } from "@/app/hooks/windowsize";
import EducationMobile from "./mobile/educationmobile";
import EducationWeb from "./web/educationweb";

export default function EducationPage({
  params,
}: {
  params: { title: string };
}) {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  return (
    <>
      {isMobile ? (
        <div className="block h-full">
          <EducationMobile params={params} />
        </div>
      ) : (
        <div className="block h-full">
          <EducationWeb params={params} />
        </div>
      )}
    </>
  );
}
