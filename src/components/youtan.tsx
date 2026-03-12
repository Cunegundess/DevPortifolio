import { motion } from "framer-motion";
import { t } from "i18next";
import { HiLink } from "react-icons/hi";
import { Badge } from "./ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

function Youtan() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="rounded-2xl shadow-lg p-6 md:p-8 border border-border bg-gradient-to-br from-secondary to-card dark:from-card/50 dark:to-background hover:shadow-xl transition-all duration-300 overflow-hidden relative">
        {/* Decorative gradient background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/10 to-transparent dark:from-accent/5 rounded-full -mr-48 -mt-48 pointer-events-none"></div>
        
        <div className="relative z-10">
          <CardHeader className="pb-4 px-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-8 bg-gradient-to-b from-accent to-accent/70 rounded-full"></div>
              <CardTitle className="text-primary dark:text-primary-foreground text-2xl font-bold">
                {t("WorkPage.job")}
              </CardTitle>
            </div>
            <a
              href="https://youtan.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent hover:opacity-80 transition-opacity inline-flex items-center gap-2 mb-3"
            >
              {t("WorkPage.company")}
              <HiLink size={18} className="text-accent" />
            </a>
            <CardDescription className="text-foreground/70 dark:text-foreground/80 text-base font-medium">
              {t("WorkPage.status")}
            </CardDescription>
          </CardHeader>

          <CardContent className="text-primary dark:text-primary-foreground pb-6 px-0">
            <div className="space-y-3">
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  {t("WorkPage.job_description1")}
                </p>
              </li>
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  {t("WorkPage.job_description2")}
                </p>
              </li>
              <li className="list-none">
                <p className="text-base font-medium leading-relaxed text-foreground/80 dark:text-foreground/90">
                  <span className="text-accent font-bold mr-2">▸</span>
                  {t("WorkPage.job_description3")}
                </p>
              </li>
            </div>
          </CardContent>

          <CardFooter className="flex flex-wrap gap-2 pt-4 px-0 justify-start">
            <Badge className="bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              ReactJS
            </Badge>
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              TypeScript
            </Badge>
            <Badge className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Django
            </Badge>
            <Badge className="bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Docker
            </Badge>
            <Badge className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white border-0 shadow-md hover:shadow-lg transition-all">
              SQL Server
            </Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              RabbitMQ
            </Badge>
            <Badge className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 text-white border-0 shadow-md hover:shadow-lg transition-all">
              Celery
            </Badge>
          </CardFooter>
        </div>
      </Card>
    </motion.div>
  );
}

export default Youtan;
