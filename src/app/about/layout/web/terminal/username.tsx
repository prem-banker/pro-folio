import React from "react";
import userdata from "../../../../../../public/data/user.json";

export const TerminalUsername = () => {
  const githubLink = userdata.user.socials.find(
    (social) => social.name.toLowerCase() === "github"
  )?.link;

  const username = githubLink.split(".com/")[1];

  return (
    <div className="flex-shrink-0">
      <span className="text-green">{username}</span>
      <span className="text-green">@</span>
      <span className="text-accentMagenta">github</span>
      <span className="text-accentMagenta ">:$ ~ </span>
    </div>
  );
};

export default TerminalUsername;
