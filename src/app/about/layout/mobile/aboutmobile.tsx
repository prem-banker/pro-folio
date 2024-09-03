// AboutLayout.tsx
"use client";

import Folder from "@/app/components/folder";
import { useOpenedFiles } from "@/app/contexts/filestackcontext";
import { useRouter } from "next/navigation";
import React from "react";
import userdata from "../../../../../public/data/user.json";

const AboutMobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { openFile } = useOpenedFiles();

  const router = useRouter();

  const educationFiles = userdata.user.education.map((edu, index) => ({
    text: edu.title,
    onTap: () => {
      openFile(`/about/education/${edu.title}`);
      router.push(`/about/education/${edu.title}`);
    },
  }));

  const workFiles = userdata.user.work.map((work, index) => ({
    text: work.company,
    onTap: () => {
      openFile(`/about/work/${work.company}`);
      router.push(`/about/work/${work.company}`);
    },
  }));

  return (
    <div className="flex flex-col h-full text-secondaryLightBlue pt-2">
      <Folder color="#FEA55F" name="education" files={educationFiles} />
      <Folder color="#43D9AD" name="work" files={workFiles} />
      <div className="mt-2 border-t border-line flex-grow">{children}</div>
    </div>
  );
};

export default AboutMobile;
