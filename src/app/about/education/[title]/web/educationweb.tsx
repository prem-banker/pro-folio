"use client";
import CustomCodeEditor from "@/app/components/code-editor/codeeditor";
import { addLineBreaks, getLineBreakLength } from "@/app/utils/utils";
import userdata from "../../../../../../public/data/user.json";

export default function EducationWeb({
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
        code={addLineBreaks(education.description, getLineBreakLength())}
      />
    </div>
  );
}
