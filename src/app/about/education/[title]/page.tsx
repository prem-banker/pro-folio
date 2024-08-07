"use client";
import React from "react";
import userdata from "../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";

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
    <div className="h-full">
      <CustomCodeEditor code={addLineBreaks(education.description, 50)} />
    </div>
  );
}
