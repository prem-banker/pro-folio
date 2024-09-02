"use client";

import React from "react";
import userdata from "../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks, getLineBreakLength } from "@/app/utils/utils";

export default function BioWeb({}: {}) {
  return (
    <div className="h-full">
      <CustomCodeEditor
        code={addLineBreaks(userdata.user.bio, getLineBreakLength())}
      />
    </div>
  );
}
