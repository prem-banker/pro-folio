"use client";
import React from "react";
import userdata from "../../../../../../public/data/user.json";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks } from "@/app/utils/utils";

export default function WorkWeb({ params }: { params: { company: string } }) {
  // Find the work object with matching company from userData
  const work = userdata.user.work.find(
    (job) => job.company.toLowerCase() === params.company.toLowerCase()
  );

  // Display the details if work is found, otherwise show a message
  return (
    <div className="h-full">
      <CustomCodeEditor
        code={addLineBreaks(work.description, 50)}
        fontSize="1.1em"
      />
    </div>
  );
}
