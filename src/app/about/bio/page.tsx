"use client";

import React from "react";
import userdata from "../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";
import BioWeb from "./web/bioweb";
import BioMobile from "./mobile/biomobile";

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
