
export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
  location: string;
  description: string[];
  iconName?: 'briefcase' | 'help';
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
  iconName?: 'basketball' | 'help';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
