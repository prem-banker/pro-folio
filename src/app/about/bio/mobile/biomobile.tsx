"use client";

import React from "react";
import userdata from "../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";

export default function BioMobile({}: {}) {
  return (
    <div className="h-full p-4">
      {userdata.user.bio.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
