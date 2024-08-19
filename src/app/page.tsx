"use client";
import HomeMobile from "./home/mobile/homemobile";
import HomeWeb from "./home/web/homeweb";

export default function Home() {
  return (
    <>
      <div className="hidden md:flex md:flex-col md:flex-grow">
        <HomeWeb />
      </div>
      <div className="block flex flex-grow flex-col md:hidden">
        <HomeMobile />
      </div>
    </>
  );
}
