import Bibliotech from "@/components/projects/Bibliotech";
import CompanyHub from "@/components/projects/CompanyHub";
import SocialMediaDashboard from "@/components/projects/SocialMediaDashboard";
import UnderConstruction from "@/components/projects/UnderConstruction";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const [t] = useTranslation("translation");
  return (
    <div id={t("Navbar.Projects")} className="min-h-screen flex flex-col">
      <div className="mt-28 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-5xl lg:text-7xl font-bold pb-5 lg:pb-5">
          {t("ProjectsPage.title")}
        </h1>
      </div>
      <div className="mt-8 text-center mx-20">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full px-5 text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-medium leading-[20px]"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <SocialMediaDashboard />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <Bibliotech />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <CompanyHub />
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className="p-1">
                <UnderConstruction />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious
            variant={"outline"}
            className="rounded-md shadow-lg"
          />
          <CarouselNext variant={"outline"} className="rounded-md shadow-lg" />
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectsPage;
