// ============================================================================
// Portfolio Data Type Definitions
// ============================================================================

export interface Project {
  id: string | number;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: string[];
  thumbnail: string;
  screenshots: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  date?: string;
}

export type ProjectCategory = "Web App" | "Mobile" | "UI/UX" | "All";

export interface Certificate {
  id: string | number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: number;
  category: SkillCategory;
}

export type SkillCategory = "Frontend" | "Backend" | "Tools & Cloud";

export interface Experience {
  id: string | number;
  title: string;
  company: string;
  period: { start: string; end: string };
  description: string;
}

export interface Education {
  id: string | number;
  degree: string;
  institution: string;
  period: { start: string; end: string };
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export interface StatBadge {
  label: string;
  value: string;
  icon: React.ReactNode;
}
