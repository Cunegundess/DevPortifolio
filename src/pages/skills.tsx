import { useTranslation } from "react-i18next";
import StackIcons from "../components/stack-icons";

function SkillsPage() {
  const [t] = useTranslation("translation");
  return (
    <section
      id={t("Navbar.Skills")}
      className="py-20 px-3 sm:px-4 lg:px-6"
      aria-labelledby="skills-title"
    >
      <div className="flex flex-col gap-10 max-w-6xl mx-auto">
        <div className="flex flex-col gap-3 leading-relaxed max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="text-3xl">💻</span>
            <h1 id="skills-title" className="text-3xl md:text-4xl font-bold text-primary">
              {t("SkillsPage.title")}
            </h1>
          </div>
          <p className="text-foreground/70 dark:text-foreground/80 text-base md:text-lg">
            {t("SkillsPage.content")}
          </p>
        </div>

        {/* Tech Stack - barra deslizante */}
        <div className="mt-4 rounded-2xl border border-border bg-gradient-to-r from-secondary/60 via-background to-secondary/60 dark:from-secondary/40 dark:via-background dark:to-secondary/40 px-4 py-6">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {t("SkillsPage.tech_stack_label")}
          </p>
          <StackIcons />
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
