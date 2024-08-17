"use client";
import React from "react";
import userdata from "../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks, addLineBreaksWoComments } from "@/app/utils/utils";

export default function EducationPage({
  params,
}: {
  params: { title: string };
}) {
  // Find the education object with matching title from userData
  const education = userdata.user.education.find(
    (edu) => edu.title === params.title
  );

  return (
    <div className="h-full w-full custom-scrollbar">
      <CustomCodeEditor
        code={addLineBreaks(education.description, 50)}
        fontSize="1.2em"
      />
    </div>
  );
}
