import React from "react";

import userdata from "../../../../../public/data/user.json";
import Folder from "../../../components/folder";
import { useRouter } from "next/navigation";
import { useOpenedFiles } from "../../../contexts/filestackcontext";

const Sidebar: React.FC = () => {
  const router = useRouter();
  const { openFile } = useOpenedFiles();

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
    <div className="h-full">
      <div className="pt-2"></div>
      <Folder color="#FEA55F" name="education" files={educationFiles} />
      <Folder color="#43D9AD" name="work" files={workFiles} />
    </div>
  );
};

export default Sidebar;
