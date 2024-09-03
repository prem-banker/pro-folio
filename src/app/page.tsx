"use client";
import HomeMobile from "./home/mobile/homemobile";
import HomeWeb from "./home/web/homeweb";
import { useWindowSize } from "./hooks/windowsize";

export default function Home() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <>
      {isMobile ? (
        <div className="block flex flex-grow flex-col md:hidden">
          <HomeMobile />
        </div>
      ) : (
        <div className="hidden md:flex md:flex-col md:flex-grow">
          <HomeWeb />
        </div>
      )}
    </>
  );
}
