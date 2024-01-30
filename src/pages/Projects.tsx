import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ProjectsData } from "@/data/projects";
import Autoplay from "embla-carousel-autoplay";
import { HiLink } from "react-icons/hi";

interface ProjectsPageProps {
  projects: ProjectsData[];
}

function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <div id="Projects" className="min-h-screen flex flex-col">
      <div className="mt-28 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-5xl lg:text-7xl font-bold pb-5 lg:pb-5">
          Projects
        </h1>
      </div>
      <div className="mt-8 text-center mx-20">
        <Carousel
          plugins={[Autoplay({ delay: 3000 })]}
          className="w-full px-5 text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-medium leading-[20px]"
        >
          <CarouselContent>
            {projects.map((project: ProjectsData) => (
              <CarouselItem
                key={project.id}
                className="md:basis-1/2 lg:basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-bold leading-[30px]">
                        <a
                          href={project.link}
                          target="_blank"
                          className="hover:text-blue-500 hover:underline hover:decoration-3 inline-flex items-center gap-1"
                        >
                          {project.name} <HiLink size={20} />
                        </a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-zinc-950 dark:text-zinc-50 text-center pb-0">
                      <Separator />
                      <img src={project.img} />
                      <p className="lg:text-left text-xl font-medium leading-[25px] py-3">
                        {project.description}
                      </p>
                      <Separator />
                    </CardContent>
                    <CardFooter className="pt-5  grid grid-flow-col-reverse grid-rows-3 grid-cols-3 gap-5 md:gap-3 lg:flex lg:justify-center lg:items-center text-center">
                      <Badge className="text-black bg-cyan-300 hover:bg-slate-400 dark:hover:bg-slate-400 shadow-lg text-center">
                        {project.stack[0]}
                      </Badge>
                      <Badge>{project.stack[1]}</Badge>
                      <Badge>{project.stack[2]}</Badge>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}

export default ProjectsPage;
