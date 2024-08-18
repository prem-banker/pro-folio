// List of commands that do not require API calls

import * as bin from "./index";
import config from "../../../../config.json";
import userdata from "../../../../public/data/user.json";

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ");
  var c = "";
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + "\n";
    } else {
      c += Object.keys(bin).sort()[i - 1] + " ";
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/prem-banker/pro-folio`);
  return "Opening Github repository...";
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am Prem Banker. 
Welcome to my website!
More about me:
'sumfetch' - short summary.
'resume' - my latest resume.
'readme' - my github readme.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${userdata.user.resume_url}`);
  return "Opening resume...";
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${userdata.user.email}`);
  return `Opening mailto:${userdata.user.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  const githubLink = userdata.user.socials.find(
    (social) => social.name.toLowerCase() === "github"
  )?.link;

  if (githubLink) {
    window.open(githubLink);
    return "Opening github...";
  } else {
    return "User's github is not available";
  }
};

export const linkedin = async (args: string[]): Promise<string> => {
  const linkedin = userdata.user.socials.find(
    (social) => social.name.toLowerCase() === "linkedin"
  )?.link;

  if (linkedin) {
    window.open(linkedin);
    return "Opening linkedin...";
  } else {
    return "user' linkedin is not available";
  }
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(" ")}`);
  return `Searching google for ${args.join(" ")}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank"); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const summary = async (args?: string[]): Promise<string> => {
  return `tis my summary biatch.`;
};

// Banner
export const banner = (args?: string[]): string => {
  return `       
For my techies, this is a simulation of a terminal.
Type 'help' to see the list of available commands.
Type 'resume' to see my resume.
`;
};
