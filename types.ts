
export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
}

export interface ProjectItem {
  title: string;
  tech: string[];
  date: string;
  description: string[];
  githubLink?: string;
  imageUrl?: string;
  docUrl?: string;
  siteLink?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
