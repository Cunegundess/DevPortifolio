import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

function Proxion() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-lg shadow-lg p-0 md:mx-10 lg:mx-0 border-l-4 border-l-purple-500 hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle className="text-slate-950 dark:text-slate-50 text-2xl font-bold leading-[30px]">
            Software Engineer at{" "}
            <a
              href="https://proxion.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 inline-flex items-center gap-1 transition-colors"
            >
              Proxion Solutions
            </a>
          </CardTitle>
          <CardDescription className="text-slate-950 dark:text-slate-50 text-xl font-medium leading-[30px]">
            Dec 2024 - Present
          </CardDescription>
        </CardHeader>
        <CardContent className="text-slate-950 dark:text-slate-50 text-center pb-0">
          <div className="border-y-2 p-10">
            <ul>
              <li>
                <p className="lg:text-left text-base font-medium leading-[25px]">
                  - Backend development with Kotlin/Java and Spring Boot framework
                </p>
              </li>
              <li>
                <p className="lg:text-left text-base font-medium leading-[25px]">
                  - Designing and implementing scalable REST APIs for enterprise applications
                </p>
              </li>
              <li>
                <p className="lg:text-left text-base font-medium leading-[25px]">
                  - Collaborating with cross-functional teams to deliver high-quality software solutions
                </p>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="pt-5 grid grid-flow-col-reverse grid-rows-2 md:grid-rows-2 lg:grid-rows-2 grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center flex-wrap">
          <Badge className="text-black bg-red-600 hover:bg-red-700 dark:hover:bg-red-700 transition shadow-xl text-center">
            Kotlin
          </Badge>
          <Badge className="text-black bg-orange-600 hover:bg-orange-700 dark:hover:bg-orange-700 transition shadow-xl text-center">
            Java
          </Badge>
          <Badge className="text-black bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 transition shadow-xl text-center">
            Spring Boot
          </Badge>
          <Badge className="text-black bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-700 transition shadow-xl text-center">
            REST APIs
          </Badge>
          <Badge className="text-black bg-cyan-500 hover:bg-cyan-600 dark:hover:bg-cyan-600 transition shadow-xl text-center">
            PostgreSQL
          </Badge>
          <Badge className="text-black bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-800 transition shadow-xl text-center">
            Docker
          </Badge>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default Proxion;
