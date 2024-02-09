import { Separator } from "@radix-ui/react-separator";
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
    <Card className="rounded-lg shadow-lg md:mx-10 lg:mx-0">
      <CardHeader>
        <CardTitle className="text-slate-950 dark:text-slate-50 text-2xl font-bold leading-[30px] ">
          {t("WorkPage.job")}

          <a
            href="https://youtan.com.br/"
            target="_blank"
            className="hover:text-blue-500 inline-flex items-center gap-1"
          >
            {t("WorkPage.company")}
            <HiLink size={20} />
          </a>
        </CardTitle>
        <CardDescription className="text-slate-950 dark:text-slate-50 text-xl font-medium leading-[30px]">
          {t("WorkPage.status")}
        </CardDescription>
      </CardHeader>
      <CardContent className="text-slate-950 dark:text-slate-50 text-center pb-0">
        <Separator />
        <p className="lg:text-left text-base font-medium leading-[25px] py-3">
          {t("WorkPage.job_description")}
        </p>
        <Separator />
      </CardContent>
      <CardFooter className="pt-5 grid grid-flow-col-reverse grid-rows-2 md:grid-rows-3 lg:grid-rows-3 grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center">
        <Badge className="text-black bg-cyan-300 hover:bg-cyan-400 dark:hover:bg-cyan-500 transition shadow-xl text-center">
          ReactJS
        </Badge>
        <Badge className="text-black bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 transition shadow-xl text-center">
          Typescript
        </Badge>
        <Badge className="text-black bg-green-600 hover:bg-green-700 dark:hover:bg-green-700 transition shadow-xl text-center">
          Django
        </Badge>
        <Badge className="text-black bg-blue-500 hover:bg-blue-600 dark:hover:bg-blue-600 transition shadow-xl text-center">
          Docker
        </Badge>
        <Badge className="text-black bg-red-600 hover:bg-red-700 dark:hover:bg-red-700 transition shadow-xl text-center col-span-2">
          Microsoft SQL Server
        </Badge>
      </CardFooter>
    </Card>
  );
}

export default Youtan;
