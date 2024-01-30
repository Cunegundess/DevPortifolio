import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { HiLink } from "react-icons/hi";

function WorkPage() {
  return (
    <div id="Work" className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/5 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5 text-center">
        <h1 className="text-gray-950 dark:text-gray-50 text-5xl lg:text-7xl font-bold pb-5 lg:pb-5">
          Experience
        </h1>
      </div>
      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end px-5 text-center h-fit">
        <Card className="rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900 md:mx-10 lg:mx-0">
          <CardHeader>
            <CardTitle className="text-gray-950 dark:text-gray-50 text-1xl lg:text-2xl font-bold leading-[30px] ">
              Full-Stack Software Developer at
              <a
                href="https://youtan.com.br/"
                target="_blank"
                className="hover:text-blue-500 hover:underline hover:decoration-3 inline-flex items-center gap-1 pl-1.5"
              >
                Youtan
                <HiLink size={20} />
              </a>
            </CardTitle>
            <CardDescription className="text-gray-950 dark:text-gray-50 text-xl font-medium leading-[30px]">
              Internship | Sep 2023 - Present
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-950 dark:text-gray-50 text-center pb-0">
            <Separator />
            <p className="lg:text-left text-base font-medium leading-[25px] py-3">
              Developing interactive and responsive user interfaces with
              TypeScript and React, focusing on reusable components and backend
              data integration. Building and maintaining web applications using
              the Django framework for robust systems and business logic, along
              with Django Rest Framework for API creation. Efficiently querying
              Microsoft SQL Server and PostgreSQL databases for data
              manipulation.
            </p>
            <Separator />
          </CardContent>
          <CardFooter className="pt-5 grid grid-flow-col-reverse grid-rows-2 md:grid-rows-3 lg:grid-rows-3 grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center">
            <Badge className="text-black bg-cyan-300 hover:bg-gray-400 dark:hover:bg-gray-400 shadow-lg text-center">
              ReactJS
            </Badge>
            <Badge className="text-black bg-blue-500 hover:bg-gray-400 dark:hover:bg-gray-400 shadow-lg text-center">
              Typescript
            </Badge>
            <Badge className="text-black bg-green-600 hover:bg-gray-400 dark:hover:bg-gray-400 shadow-lg text-center">
              Django
            </Badge>
            <Badge className="text-black bg-blue-500 hover:bg-gray-400 dark:hover:bg-gray-400 shadow-lg text-center">
              Docker
            </Badge>
            <Badge className="text-black bg-red-500 hover:bg-gray-400 dark:hover:bg-gray-400 shadow-lg text-center col-span-2">
              Microsoft SQL Server
            </Badge>
          </CardFooter>
        </Card>
        <Button className="self-center font-bold bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition my-5">
          Download CV
        </Button>
      </div>
    </div>
  );
}

export default WorkPage;
