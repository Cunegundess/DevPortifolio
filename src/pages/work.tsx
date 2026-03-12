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
                Construindo soluções escaláveis em ambientes reais, com foco em back-end, APIs e integrações.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-gradient-to-br from-secondary to-background dark:from-secondary/40 dark:to-background px-6 py-6 space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Perfil profissional
              </p>
              <p className="text-sm md:text-base text-foreground/80 dark:text-foreground/90 leading-relaxed">
                Hoje atuo como engenheiro de software com foco em back-end (Kotlin/Java, Spring Boot, Python/Django),
                APIs REST e integrações assíncronas com mensageria e filas. Tenho experiência tanto em produtos quanto
                em consultoria, trabalhando próximo de times de negócio e clientes.
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
                Experiência recente
              </p>
              <h2 className="text-2xl font-semibold text-primary">
                Trajetória profissional
              </h2>
            </div>

            <div className="space-y-6">
              {/* Proxion */}
              <div className="relative pl-5 border-l border-accent/40">
                <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-accent" />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg md:text-xl font-semibold text-primary">
                      Software Engineer · Proxion Solutions
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold uppercase tracking-wide">
                      Dez 2024 — Presente
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Kotlin · Java · Spring Boot · REST APIs · PostgreSQL · Docker
                  </p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base text-foreground/80 dark:text-foreground/90">
                    <li>▸ Desenvolvimento de back-ends e APIs REST escaláveis em Kotlin/Java com Spring Boot.</li>
                    <li>▸ Integração com bancos de dados relacionais e serviços internos.</li>
                    <li>▸ Colaboração com times multidisciplinares em projetos de produto e consultoria.</li>
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
                    React · TypeScript · Django · Docker · SQL Server · RabbitMQ · Celery
                  </p>
                  <ul className="mt-2 space-y-1 text-sm md:text-base text-foreground/80 dark:text-foreground/90">
                    <li>▸ {t("WorkPage.job_description1")}</li>
                    <li>▸ {t("WorkPage.job_description2")}</li>
                    <li>▸ {t("WorkPage.job_description3")}</li>
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
