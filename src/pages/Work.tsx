import { motion } from "framer-motion";
import { HiLink } from "react-icons/hi";
import Badge from "../components/ui/badge";

function WorkPage() {
  return (
    <div id="Work" className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/5 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-7xl font-bold pb-5 lg:pb-5">
          Experience
        </h1>
      </div>
      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end px-5 text-center h-fit">
        <div className="rounded-lg shadow-lg bg-zinc-50 dark:bg-slate-900 p-5">
          <h2 className="text-zinc-950 dark:text-zinc-50 text-2xl font-bold leading-[30px] ">
            Full-Stack Software Developer at{" "}
            <a
              href="https://youtan.com.br/"
              target="_blank"
              className="hover:text-blue-500 inline-flex items-center gap-1"
            >
              Youtan <HiLink size={20} />
            </a>
          </h2>
          <h3 className="text-zinc-950 dark:text-zinc-50 text-xl font-bold leading-[30px] pb-3">
            Internship | Sep 2023 - Present
          </h3>
          <hr />
          <div className="text-zinc-950 dark:text-zinc-50 text-center">
            <p className="lg:text-left text-xl font-medium leading-[25px] py-3">
              Developing interactive and responsive user interfaces with
              TypeScript and React, focusing on reusable components and backend
              data integration. Building and maintaining web applications using
              the Django framework for robust systems and business logic, along
              with Django Rest Framework for API creation. Efficiently querying
              Microsoft SQL Server and PostgreSQL databases for data
              manipulation.
            </p>
            <hr />
            <Badge bgColor="bg-cyan-200" textColor="text-cyan-900">
              ReactJS
            </Badge>
            <Badge bgColor="bg-blue-200" textColor="text-blue-900">
              Typescript
            </Badge>
            <Badge bgColor="bg-green-200" textColor="text-green-900">
              Django
            </Badge>
            <Badge bgColor="bg-red-200" textColor="text-red-900">
              Microsoft SQL Server
            </Badge>
            <Badge bgColor="bg-blue-200" textColor="text-blue-900">
              Docker
            </Badge>
          </div>
        </div>
        <motion.button
          className="self-center bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition my-5"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
}

export default WorkPage;
