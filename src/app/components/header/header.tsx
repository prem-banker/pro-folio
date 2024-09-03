"use client";
import React from "react";
import HeaderMobile from "./mobile/headermobile";
import HeaderWeb from "./web/headerweb";
import { useWindowSize } from "@/app/hooks/windowsize";

const Header: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return <>{isMobile ? <HeaderMobile /> : <HeaderWeb />}</>;
};

export default Header;
