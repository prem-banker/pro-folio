import React from "react";

import userdata from "../../../public/data/user.json";
import Folder from "../components/folder";

const Sidebar: React.FC = () => {
  const educationFiles = userdata.user.education.map((edu, index) => ({
    text: edu.title,
    onTap: () => console.log(edu),
    isActive: false,
  }));

  const workFiles = userdata.user.work.map((work, index) => ({
    text: work.company,
    onTap: () => console.log(work),
    isActive: false,
  }));

  return (
    <div className="h-full text-white ">
      <Folder color="blue" name="Education" files={educationFiles} />
      <Folder color="green" name="Work Experience" files={workFiles} />
    </div>
  );
};

export default Sidebar;
