export interface Project {
  name: string;
  description: string;
  image: string;
  techstack: string[];
  github: string;
  url: string;
}

export interface Social {
  name: string;
  link: string;
  type: string;
}

export interface Education {
  title: string;
  school: string;
  degree: string;
  description: string;
  place: string;
}

export interface Work {
  title: string;
  company: string;
  start: string;
  end: string;
  description: string;
  place: string;
}

export interface User {
  name: string;
  email: string;
  socials: Social[];
  projects: Project[];
  education: Education[];
  work: Work[];
  bio: string;
}

export interface FileProps {
  text: string;
  onTap: () => void;
}

export interface FileTabProps {
  text: string;
  onTap: () => void;
  onClose: () => void;
}

export interface Execution {
  id: number;
  date: Date;
  command: string;
  output: string;
}
