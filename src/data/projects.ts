export interface ProjectsData {
  id: number;
  name: string;
  description: string;
  stack: string[];
  link: string;
  img: string;
}

export const projects: ProjectsData[] = [
  {
    id: 1,
    name: "Social Media Dashboard",
    description:
      "This is a dashboard app that displays social media statistics for a fictitious company. The dashboard displays some information about followers and statistics about the users' activity on social media, including engagement rates and post reach.",
    stack: ["ReactJS", "TypeScript", "SCSS"],
    link: "https://github.com/Cunegundess/SocialMediaDashboard",
    img: "/src/assets/socialmediadashboard.jpg",
  },
  {
    id: 2,
    name: "BiblioTech",
    description:
      "The Bibliotech is a comprehensive library management system designed to simplify and enhance library administration. This project aims to provide a comprehensive solution for managing collections, loans, and library users",
    stack: ["Django", "Django REST", "PostgreSQL"],
    link: "https://github.com/Cunegundess/BiblioTech",
    img: "src/assets/bibliotech.png",
  },
  {
    id: 3,
    name: "CompanyHub",
    description:
      "This project is a dynamic and collaborative platform dedicated to optimizing workflow and communication within your company. It offers a comprehensive suite of tools and features to facilitate efficient project management",
    stack: ["ReactJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/Cunegundess/CompanyHub",
    img: "/src/assets/companyhub.png",
  },
];

export const stackColors = {
  ReactJS: "bg-cyan-300",
  TypeScript: "bg-blue-500",
  SCSS: "bg-purple-500",
  Django: "bg-green-600",
  "Django REST": "bg-red-500",
  PostgreSQL: "bg-blue-500",
  TailwindCSS: "bg-cyan-500",
  Docker: "bg-blue-500",
  MSSQL: "bg-red-500",
};
