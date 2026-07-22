import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Docker } from "@/components/ui/svgs/docker";
import { Golang } from "@/components/ui/svgs/golang";
import { Java } from "@/components/ui/svgs/java";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Python } from "@/components/ui/svgs/python";

type Hackathon = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  win?: string;
  links: readonly {
    title: string;
    icon: React.ReactNode;
    href: string;
  }[];
};

export const DATA = {
  name: "Bernard Ograh",
  initials: "BO",
  url: "https://ograh.xyz",
  location: "Accra, Ghana",
  locationLink: "https://maps.google.com/?q=Accra,Ghana",
  description:
    "Backend Engineer specializing in Java, Go, distributed systems, and cloud-native applications.",
  summary:
    "Backend Engineer with 2.5+ years building scalable APIs, distributed systems, and backend platforms across logistics, e-commerce, and healthcare.",
  avatarUrl: "/me.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "Go", icon: Golang },
    { name: "Spring Boot", icon: null },
    { name: "Spring Security", icon: null },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Redis", icon: null },
    { name: "RabbitMQ", icon: null },
    { name: "Docker", icon: Docker },
    { name: "AWS S3", icon: null },
    { name: "Cloudflare R2", icon: null },
    { name: "WebSocket", icon: null },
    { name: "JWT", icon: null },
    { name: "Flyway", icon: null },
    { name: "Git", icon: null },
    { name: "Python", icon: Python },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ograhbernard@gmail.com",
    tel: "+233504746610",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/bograh",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/bernardograh",
        icon: Icons.linkedin,
        navbar: true,
      },
      Website: {
        name: "Website",
        url: "https://ograh.xyz",
        icon: Icons.globe,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ograhbernard@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Kova Delivery Platform",
      title: "Backend Developer",
      logoUrl: "",
      start: "Feb 2026",
      end: "Present",
      description:
        "Built the backend for a multi-sided delivery platform with Spring Boot, PostgreSQL, Redis, RabbitMQ, WebSockets, JWT authentication, Flyway migrations, S3-compatible storage and analytics APIs.",
    },
    {
      company: "JustGo Health",
      title: "Backend Developer (Contract)",
      logoUrl: "",
      start: "Nov 2025",
      end: "Mar 2026",
      description:
        "Developed HIPAA-aligned APIs, Redis caching, Cloudflare R2 integration, WebSockets and transactional email services.",
    },
    {
      company: "KOVA Marketplace",
      title: "Backend Developer (Contract)",
      logoUrl: "",
      start: "Dec 2024",
      end: "Present",
      description:
        "Built an e-commerce backend with Paystack, RabbitMQ, Redis and a Go image compression microservice.",
    },
    {
      company: "Telecel Ghana",
      title: "Technology Intern",
      logoUrl: "",
      start: "Sep 2023",
      end: "Oct 2023",
      description: "Built automation tools using Python and Flask.",
    },
  ],
  education: [
    {
      school: "Kwame Nkrumah University of Science and Technology",
      href: "https://knust.edu.gh",
      degree: "BSc Computer Science",
      logoUrl: "",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Go Backend Generator",
      href: "https://github.com/bograh/Go-Backend-Generator",
      dates: "",
      description: "CLI for scaffolding production-ready Go backends.",
      technologies: ["Go"],
      links: [
        {
          type: "Source",
          href: "https://github.com/bograh/Go-Backend-Generator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Minimal Sentry Clone",
      href: "https://github.com/bograh/error-logs",
      dates: "",
      description:
        "Open-source error tracking platform built with Go, PostgreSQL and Redis.",
      technologies: ["Go", "PostgreSQL", "Redis"],
      links: [
        {
          type: "Source",
          href: "https://github.com/bograh/error-logs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Amali-RMBP",
      href: "https://github.com/bograh/Amali-RMBP",
      dates: "",
      description: "Twi-language chatbot powered by Llama 3 and GhanaNLP.",
      technologies: ["Llama 3", "GhanaNLP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/bograh/Amali-RMBP",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [] as Hackathon[],
} as const;
