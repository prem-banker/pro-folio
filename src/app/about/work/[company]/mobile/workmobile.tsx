"use client";
import React from "react";
import userdata from "../../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";

export default function WorkMobile({
  params,
}: {
  params: { company: string };
}) {
  // Find the work object with matching company from userData
  const work = userdata.user.work.find(
    (job) => job.company.toLowerCase() === params.company.toLowerCase()
  );

  return (
    <div className="h-full p-4">
      {work.description.split("\n").map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
}
