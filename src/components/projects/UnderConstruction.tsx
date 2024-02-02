import { Separator } from "@/components/ui/separator";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function UnderConstruction() {
  const [t, i18n] = useTranslation("translation");
  return (
    <Card className="bg-zinc-50 dark:bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-bold leading-[30px]">
          {t("ProjectsPage.under_construction_title")}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-zinc-950 dark:text-zinc-50 pb-0">
        <Separator />
        <p className="text-base leading-[25px] py-3 text-center">
          {t("ProjectsPage.under_construction_description")}
        </p>
        <Separator />
      </CardContent>
      <CardFooter className="pt-5 grid grid-flow-col-reverse grid-rows-2 md:grid-rows-1 lg:grid-rows-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center"></CardFooter>
    </Card>
  );
}

export default UnderConstruction;
