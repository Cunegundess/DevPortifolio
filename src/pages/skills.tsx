import { useTranslation } from "react-i18next";
import StackIcons from "../components/stack-icons";

function SkillsPage() {
  const [t] = useTranslation("translation");
  return (
    <section
      id={t("Navbar.Skills")}
      className="py-20 px-5 md:px-10 lg:px-20 max-w-6xl mx-auto"
      aria-labelledby="skills-title"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 leading-relaxed">
          <h1 id="skills-title" className="text-3xl md:text-4xl font-bold">
            <span className="drop-shadow-lg text-3xl md:text-4xl">💻</span>{" "}
            {t("SkillsPage.title")}
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            {t("SkillsPage.content")}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-8">
          <StackIcons />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
