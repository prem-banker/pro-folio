// AboutLayout.tsx
"use client";

import React, { useEffect } from "react";
import { FaCaretDown } from "react-icons/fa";
import userdata from "../../../../../public/data/user.json";
import { useRouter } from "next/navigation";
import Folder from "@/app/components/folder";
import { useOpenedFiles } from "@/app/contexts/filestackcontext";

const AboutMobile: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { openFile } = useOpenedFiles();

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  const router = useRouter();

  useEffect(() => {
    // initial route
    router.push("/about/bio");
  }, [router]);

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
    <div className="flex flex-col h-full text-secondaryLightBlue">
      <Folder color="#FEA55F" name="education" files={educationFiles} />
      <Folder color="#43D9AD" name="work" files={workFiles} />
      <div className="flex-grow">{children}</div>
    </div>
  );
};

export default AboutMobile;
