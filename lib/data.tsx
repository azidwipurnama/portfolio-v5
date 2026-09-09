import type { Project, Certificate, Experience } from "@/types";
import {
  Globe,
  Code,
  Database,
  Cloud,
  GitBranch,
  Terminal,
  Layers2,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

/* —————————————— SKILLS —————————————— */
interface SkillDef {
  name: string;
  icon: ReactNode;
  level: number;
  category: "Frontend" | "Backend" | "Tools & Cloud";
}

export const skills: SkillDef[] = [
  { name: "Next.js", icon: <Globe size={20} />, level: 95, category: "Frontend" },
  { name: "React", icon: <Code size={20} />, level: 90, category: "Frontend" },
  { name: "TypeScript", icon: <Code size={20} />, level: 88, category: "Frontend" },
  { name: "Tailwind CSS", icon: <Layers2 size={20} />, level: 92, category: "Frontend" },
  { name: "Framer Motion", icon: <Zap size={20} />, level: 80, category: "Frontend" },
  { name: "Node.js", icon: <Terminal size={20} />, level: 85, category: "Backend" },
  { name: "Express", icon: <Code size={20} />, level: 78, category: "Backend" },
  { name: "Supabase", icon: <Database size={20} />, level: 82, category: "Backend" },
  { name: "PostgreSQL", icon: <Database size={20} />, level: 75, category: "Backend" },
  { name: "Docker", icon: <Cloud size={20} />, level: 70, category: "Tools & Cloud" },
  { name: "GitHub Actions", icon: <GitBranch size={20} />, level: 75, category: "Tools & Cloud" },
  { name: "AWS", icon: <Cloud size={20} />, level: 68, category: "Tools & Cloud" },
];

/* —————————————— EXPERIENCE —————————————— */
export const experiences: Experience[] = [
  {
    id: "1",
    title: "Senior Frontend Engineer",
    company: "TechFlow Solutions",
    period: { start: "2023", end: "Present" },
    description:
      "Led the frontend team building a SaaS analytics platform using Next.js 14, Tailwind CSS, and Framer Motion. Improved Lighthouse scores from 52 to 96 and reduced bundle size by 60%.",
  },
  {
    id: "2",
    title: "Frontend Developer",
    company: "DigitalCraft Studios",
    period: { start: "2022", end: "2023" },
    description:
      "Built responsive web applications for enterprise clients using React, TypeScript, and modern CSS. Collaborated with UX designers to implement pixel-perfect interfaces.",
  },
  {
    id: "3",
    title: "Junior Developer",
    company: "StartupXYZ",
    period: { start: "2020", end: "2022" },
    description:
      "Developed full-stack features for a marketplace platform using Next.js, Supabase, and Tailwind CSS. Contributed to improving UI/UX patterns and code quality standards.",
  },
];

/* —————————————— CERTIFICATES —————————————— */
export const certificates: Certificate[] = [
  {
    id: "1",
    title: "Full-Stack Web Development Certification",
    issuer: "Meta",
    date: "2022",
    description:
      "Comprehensive certification covering React, Node.js, databases, and modern web development practices.",
    credentialUrl: "https://www.coursera.org/account/accomplishments",
    image: "/certificates/meta-fullstack.png",
  },
  {
    id: "2",
    title: "Tailwind CSS Mastery",
    issuer: "Tailwind Labs",
    date: "2023",
    description:
      "Advanced Tailwind CSS training covering JIT mode, custom design systems, and component architecture.",
    credentialUrl: "https://tailwindcss.com",
    image: "/certificates/tailwind-mastery.png",
  },
  {
    id: "3",
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    description:
      "Cloud development on AWS — building scalable, secure, and resilient applications.",
    credentialUrl: "https://aws.amazon.com/certification",
    image: "/certificates/aws-developer.png",
  },
  {
    id: "4",
    title: "UI/UX Design Fundamentals",
    issuer: "Figma",
    date: "2022",
    description:
      "Mastered user-centered design principles, prototyping, and design system creation.",
    credentialUrl: "https://www.figma.com/community",
    image: "/certificates/figma-ux.png",
  },
];

/* —————————————— PROJECTS —————————————— */
export const projects: Project[] = [
  {
    id: "1",
    title: "TrustWork",
    description:
      "A blockchain-based freelance platform enabling clients and freelancers to collaborate transparently and securely through an escrow system, milestone management, and a dispute resolution mechanism with an admin acting as a neutral mediator.",
    longDescription:
      "TrustWork is a blockchain-based freelance platform designed to bring transparency and security to freelance collaborations. Built as a prototype focused on core business logic and workflow, it features an escrow system for secure payments, milestone-based project management, and a dispute resolution mechanism with an admin acting as a neutral mediator.\n\nThe platform integrates MetaMask for wallet connectivity, Ethers.js for blockchain interactions, and Firebase Firestore for real-time data synchronization. Currently in prototype phase, the focus has been on solidifying the core business logic and smart contract workflows rather than advanced UI/UX polish.",
    category: "Web App",
    techStack: ["React.js", "Firebase Firestore", "MetaMask", "Ethers.js"],
    thumbnail: "/projects/trustwork-thumb.png",
    screenshots: [
      "/projects/trustwork-1.png",
    ],
    liveUrl: undefined,
    githubUrl: "https://github.com/azidwipurnama/trustwork",
    featured: false,
    date: "2024",
    status: "prototype",
  },
];

/* —————————————— CATEGORY FILTERS —————————————— */
export const projectCategories = ["All", "Web App", "Mobile", "UI/UX"];
