// components/header/Header.tsx
import React, { useState } from "react";
import HeaderWeb from "./web/headerweb";
import HeaderMobile from "./mobile/headermobile";

const Header: React.FC = () => {
  return (
    <>
      <div className="hidden md:block">
        <HeaderWeb />
      </div>
      <div className="block md:hidden">
        <HeaderMobile />
      </div>
    </>
  );
};

export default Header;
