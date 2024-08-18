"use client";

import React from "react";
import userdata from "../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";

export default function BioPage({}: {}) {
  return (
    <div className="h-full">
      <CustomCodeEditor
        code={addLineBreaks(userdata.user.bio, 60)}
        fontSize="1.1em"
      />
    </div>
  );
}
