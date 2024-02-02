import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import { HiLink } from "react-icons/hi";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function CompanyHub() {
  const [t] = useTranslation("translation");
  return (
    <Card className="bg-zinc-50 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-bold leading-[30px]">
          <a
            href="https://github.com/Cunegundess/CompanyHub"
            target="_blank"
            className="hover:text-blue-500 hover:underline hover:decoration-3 inline-flex items-center gap-1"
          >
            CompanyHub <HiLink size={20} />
          </a>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-zinc-950 dark:text-zinc-50 text-center pb-0">
        <Separator />
        <img className="h-60 w-full" src="images/companyhub.png" />
        <p className="lg:text-left text-base leading-[25px] py-3">
          {t("ProjectsPage.company_hub_description")}
        </p>
        <Separator />
      </CardContent>

      <CardFooter className="pt-5 grid grid-flow-col-reverse grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center">
        <Badge className="text-black bg-cyan-400 hover:bg-zinc-400 dark:hover:bg-zinc-400 shadow-lg text-center">
          ReactJS
        </Badge>
        <Badge className="text-black bg-blue-600 hover:bg-zinc-400 dark:hover:bg-zinc-400 shadow-lg text-center">
          Typescript
        </Badge>
        <Badge className="text-black bg-blue-400 hover:bg-zinc-400 dark:hover:bg-zinc-400 shadow-lg text-center">
          TailwindCSS
        </Badge>
      </CardFooter>
    </Card>
  );
}

export default CompanyHub;
