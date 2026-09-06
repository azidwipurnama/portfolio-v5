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
    title: "FlowCRM",
    description:
      "A modern CRM platform built with Next.js 14, Supabase, and Tailwind CSS. Features real-time collaboration, analytics dashboard, and smart automation.",
    longDescription:
      "FlowCRM is a full-featured customer relationship management platform designed for modern teams. Built with Next.js 14 App Router, Supabase for real-time data, and a custom design system. Key features include intelligent contact management, pipeline tracking, automated workflows, and advanced analytics with interactive charts.\n\nThe project showcases advanced patterns including React Server Components, optimistic updates, real-time subscriptions, and responsive design down to mobile.",
    category: "Web App",
    techStack: ["Next.js 14", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Chart.js"],
    thumbnail: "/projects/flowcrm-thumb.png",
    screenshots: [
      "/projects/flowcrm-1.png",
      "/projects/flowcrm-2.png",
      "/projects/flowcrm-3.png",
    ],
    liveUrl: "https://flowcrm.vercel.app",
    githubUrl: "https://github.com/username/flowcrm",
    featured: true,
    date: "2024",
  },
  {
    id: "2",
    title: "NexaUI",
    description:
      "An open-source component library with 80+ production-ready components. Built on Radix UI, Tailwind CSS, and TypeScript with dark mode support.",
    longDescription:
      "NexaUI is a comprehensive component library designed for building beautiful web applications quickly. It features 80+ customizable components, full TypeScript support, dark mode, and accessibility compliance. The library is built using Radix UI primitives for robust headless patterns and a custom Tailwind plugin for consistent theming.\n\nComponents follow modern React patterns with support for composition, variant props, and theming via CSS variables.",
    category: "Web App",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Radix UI", "Storybook", "Jest"],
    thumbnail: "/projects/nexaui-thumb.png",
    screenshots: [
      "/projects/nexaui-1.png",
      "/projects/nexaui-2.png",
    ],
    liveUrl: "https://nexaui.com",
    githubUrl: "https://github.com/username/nexaui",
    featured: true,
    date: "2023",
  },
  {
    id: "3",
    title: "TaskFlow Mobile",
    description:
      "A mobile-first task management app with offline support, push notifications, and sync capabilities. Built with Ionic, React, and Firebase.",
    longDescription:
      "TaskFlow Mobile is a cross-platform task management application designed for productivity on the go. Built with Ionic Framework and React, it offers offline support via local storage sync, push notifications for task reminders, and real-time collaboration between team members.\n\nThe app features a clean, gesture-driven UI with swipe actions, drag-and-drop reordering, and a powerful filtering system. It syncs seamlessly across devices via Firebase Firestore.",
    category: "Mobile",
    techStack: ["Ionic", "React", "TypeScript", "Firebase", "PWA", "Capacitor"],
    thumbnail: "/projects/taskflow-thumb.png",
    screenshots: [
      "/projects/taskflow-1.png",
      "/projects/taskflow-2.png",
    ],
    liveUrl: "https://taskflow.app",
    githubUrl: "https://github.com/username/taskflow",
    featured: true,
    date: "2023",
  },
  {
    id: "4",
    title: "BrandVision Pro",
    description:
      "A UI/UX design system and dashboard for brand management. Features real-time design previews, team collaboration, and asset versioning.",
    longDescription:
      "BrandVision Pro is a comprehensive brand management dashboard designed for creative teams. It provides a centralized platform for managing brand assets, design systems, and team workflows. Key features include real-time design previews with live collaboration, asset versioning with history, and a powerful design system builder.\n\nThe application is built with Next.js for server-side rendering, Framer Motion for fluid animations, and a custom canvas-based preview system for real-time design rendering.",
    category: "UI/UX",
    techStack: ["Figma", "React", "TypeScript", "WebRTC", "Canvas API", "Zustand"],
    thumbnail: "/projects/brandvision-thumb.png",
    screenshots: [
      "/projects/brandvision-1.png",
      "/projects/brandvision-2.png",
      "/projects/brandvision-3.png",
    ],
    liveUrl: "https://brandvision.pro",
    githubUrl: "https://github.com/username/brandvision",
    featured: false,
    date: "2024",
  },
  {
    id: "5",
    title: "DevOps Dashboard",
    description:
      "A real-time monitoring dashboard for infrastructure with live logs, metrics visualization, and alert management. Built with React and Socket.IO.",
    longDescription:
      "DevOps Dashboard is a real-time infrastructure monitoring solution that provides live visibility into system health, application performance, and operational metrics. It features live log streaming with filtering, interactive charts for CPU/memory/network metrics, customizable alert rules, and incident management.\n\nThe system is built using React with Socket.IO for real-time communication, Redis for caching, and PostgreSQL for alert configuration. The dashboard supports multiple integrations including Slack, Discord, and email for alert routing.",
    category: "Web App",
    techStack: ["React 18", "TypeScript", "Socket.IO", "Redis", "D3.js", "Tailwind CSS"],
    thumbnail: "/projects/devops-thumb.png",
    screenshots: ["/projects/devops-1.png"],
    liveUrl: "https://devops-dashboard.vercel.app",
    githubUrl: "https://github.com/username/devops-dashboard",
    featured: false,
    date: "2023",
  },
  {
    id: "6",
    title: "FitSync Pro",
    description:
      "A fitness tracking application with workout planning, nutrition logging, and social features. Built with React Native and GraphQL.",
    longDescription:
      "FitSync Pro is a comprehensive fitness tracking application that helps users achieve their health and wellness goals. It features intelligent workout planning with adaptive difficulty, nutrition logging with barcode scanning, social challenges with friends, and integration with wearable devices like Apple Watch and Fitbit.\n\nThe app uses a GraphQL API for flexible data fetching, offline storage for workout data, and a recommendation engine powered by machine learning for personalized workout suggestions.",
    category: "Mobile",
    techStack: ["React Native", "TypeScript", "GraphQL", "Apollo", "MongoDB", "Expo"],
    thumbnail: "/projects/fitsync-thumb.png",
    screenshots: [
      "/projects/fitsync-1.png",
      "/projects/fitsync-2.png",
    ],
    liveUrl: "https://fitsync.app",
    githubUrl: "https://github.com/username/fitsync",
    featured: false,
    date: "2024",
  },
];

/* —————————————— CATEGORY FILTERS —————————————— */
export const projectCategories = ["All", "Web App", "Mobile", "UI/UX"];
