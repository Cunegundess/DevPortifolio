import DownloadCV from "@/components/download-cv";
import { useTranslation } from "react-i18next";

function WorkPage() {
  const [t] = useTranslation("translation");

  return (
    <section
      id={t("Navbar.Work")}
      className="h-auto py-20 px-3 sm:px-4 lg:px-6"
      aria-labelledby="work-section-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.6fr)] items-start">
          {/* Cabeçalho + CTA */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🧑🏻‍💻</span>
                <h1
                  id="work-section-title"
                  className="text-3xl md:text-4xl font-bold text-primary"
                >
                  {t("WorkPage.title")}
                </h1>
              </div>
              <p className="text-base md:text-lg text-foreground/70 dark:text-foreground/80">
                {t("WorkPage.header_description")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary to-background dark:from-secondary/40 dark:to-background px-6 py-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {t("WorkPage.profile_label")}
              </p>
              <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/90 leading-relaxed">
                {t("WorkPage.profile_description")}
              </p>
            </div>

            <div className="flex">
              <DownloadCV />
            </div>
          </div>

          {/* Timeline de experiência (texto puro) */}
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("WorkPage.recent_experience_label")}
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                {t("WorkPage.trajectory_title")}
              </h2>
            </div>

            <div className="space-y-6">
              {/* Proxion */}
              <div className="relative pl-5 border-l border-accent/40">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      {t("Proxion.job")} · {t("Proxion.company")}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold uppercase tracking-wide">
                      {t("WorkPage.proxion_period")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("WorkPage.proxion_tech_stack")}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base text-foreground/80 dark:text-foreground/90">
                    <li>▸ {t("Proxion.job_description1")}</li>
                    <li>▸ {t("Proxion.job_description2")}</li>
                    <li>▸ {t("Proxion.job_description3")}</li>
                    <li>▸ {t("Proxion.job_description4")}</li>
                    <li>▸ {t("Proxion.job_description5")}</li>
                  </ul>
                </div>
              </div>

              {/* Youtan */}
              <div className="relative pl-5 border-l border-accent/40">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent/60" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      {t("WorkPage.job")} · {t("WorkPage.company")}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-foreground/80 font-semibold uppercase tracking-wide">
                      {t("WorkPage.status")}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {t("WorkPage.youtan_tech_stack")}
                  </p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base text-foreground/80 dark:text-foreground/90">
                    <li>▸ {t("WorkPage.job_description1")}</li>
                    <li>▸ {t("WorkPage.job_description2")}</li>
                    <li>▸ {t("WorkPage.job_description3")}</li>
                    <li>▸ {t("WorkPage.job_description4")}</li>
                    <li>▸ {t("WorkPage.job_description5")}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
