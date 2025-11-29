export interface Project {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription?: string;
  role: string;
  technologies: string[];
  appStoreUrl?: string;
  githubUrl?: string;
  websiteUrl?: string;
  featured: boolean;
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  achievements: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    email: string;
    location: string;
    resumeUrl: string;
  };
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: {
    degree: string;
    institution: string;
    location: string;
    startYear: string;
    endYear: string;
  }[];
  socials: SocialLink[];
}


