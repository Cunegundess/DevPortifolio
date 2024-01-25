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
      "This is a dashboard app that displays social media statistics for a fictitious company. The dashboard displays some information about followers and statistics about the users' activity on social media",
    stack: ["ReactJS", "TypeScript", "SCSS"],
    link: "https://github.com/Cunegundess/SocialMediaDashboard",
    img: "@/assets/socialmediadashboard.jpg",
  },
  {
    id: 2,
    name: "BiblioTech",
    description:
      "The Bibliotech is a comprehensive library management system designed to simplify and enhance library administration. This project aims to provide a comprehensive solution for managing collections, loans, and library users",
    stack: ["Django", "Django REST", "PostgreSQL"],
    link: "https://github.com/Cunegundess/BiblioTech",
    img: "@/assets/bibliotech.png",
  },
  {
    id: 3,
    name: "CompanyHub",
    description:
      "This project is a dynamic and collaborative platform dedicated to optimizing workflow and communication within your company. It offers a comprehensive suite of tools and features to facilitate efficient project management",
    stack: ["ReactJS", "TypeScript", "TailwindCSS"],
    link: "https://github.com/Cunegundess/SocialMediaDashboard",
    img: "/home/usuario/ProjetosPessoal/devPortifolio/src/assets/companyhub.png",
  },
];
