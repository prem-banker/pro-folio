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

export interface User {
  name: string;
  email: string;
  socials: Social[];
  projects: Project[];
}
