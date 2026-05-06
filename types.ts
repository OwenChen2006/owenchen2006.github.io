
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
  /** Anchor text for `githubLink` (default "GitHub"; use e.g. "GitLab" for non-GitHub hosts). */
  sourceCodeLabel?: string;
  imageUrl?: string;
  /** Demo / walkthrough video (shown above description when set). */
  videoUrl?: string;
  docUrl?: string;
  siteLink?: string;
  iconName?: 'basketball' | 'help';
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
