import Bibliotech from "@/components/projects/Bibliotech";
import CompanyHub from "@/components/projects/CompanyHub";
import SocialMediaDashboard from "@/components/projects/SocialMediaDashboard";
import UnderConstruction from "@/components/projects/UnderConstruction";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ProjectsPage() {
  const [t] = useTranslation("translation");
  // const [scope, animate] = useAnimate();
  // const isInView = useInView(scope);

  // useEffect(() => {
  //   if (isInView) {
  //     const enterAnimation = async () => {
  //       await animate("div", { opacity: 0.5 }, { duration: 0.5 });
  //     };
  //     enterAnimation();
  //   }
  // });

  return (
    <section id={t("Navbar.Projects")} className="h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ opacity: 0.5, duration: 0.5 }}
        className="justify-center items-center p-10 mx-5 my-28 bg-gradient-to-b from-gray-200 via-gray-200 to-gray-300 dark:bg-gradient-to-b dark:to-slate-950 dark:from-slate-950 rounded-xl shadow-xl"
      >
        <div className="flex flex-col gap-2 leading-[30px] lg:mx-36">
          <h1 className="text-xl font-medium lg:mx-5">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("ProjectsPage.title")}
          </h1>
          <div className="flex flex-col space-y-60 mt-16">
            <SocialMediaDashboard />
            <Bibliotech />
            <CompanyHub />
            <UnderConstruction />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProjectsPage;
