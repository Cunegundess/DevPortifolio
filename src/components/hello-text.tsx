import { useTranslation } from "react-i18next";
import { RxDoubleArrowDown } from "react-icons/rx";
import { HeroCTA } from "./hero-cta";
import IconsContact from "./icons-contact";

function HelloText() {
  const [t] = useTranslation("translation");

  return (
    <div className="flex flex-col justify-center items-center space-y-12 mx-6 md:mx-16 lg:mx-20 py-12 md:py-16">
      <div className="relative">
        <img
          className="rounded-full h-[35vw] w-[35vw] md:h-[18vw] md:w-[18vw] lg:h-[13vw] lg:w-[13vw] border-4 border-accent shadow-lg"
          src="https://github.com/cunegundess.png"
          alt="Lucas Cunegundes profile picture"
        />
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 lg:bottom-3 lg:right-3 flex bg-accent shadow-xl rounded-full w-[9vw] h-[9vw] md:h-[4vw] md:w-[4vw] lg:w-[3vw] lg:h-[3vw] text-center justify-center items-center text-accent-foreground font-bold" aria-hidden="true">
          <span className="text-lg md:text-xl">✓</span>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 text-center w-fit max-w-2xl">
        <div className="flex flex-col md:flex-row lg:flex-row gap-3 justify-center items-center flex-wrap">
          <h1 id="intro-title" className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-primary">
            {t("IntroPage.greeting")}
          </h1>

          <p className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/80">
            Lucas Cunegundes
          </p>
        </div>

        <span className="text-base md:text-lg font-medium text-muted-foreground mt-2">
          {t("IntroPage.presentation")}
        </span>
      </div>

      {/* Social Proof Statistics */}
      {/* <SocialProof
        stats={[
          {
            value: "3+",
            label: "Anos de experiência",
            icon: "⚡",
            helper: "Back-end, Front-end, APIs rodando em ambiente real.",
          },
          {
            value: "5+",
            label: "Projetos entregues",
            icon: "🚀",
            helper: "Soluções web, integrações e serviços de dados.",
          },
          {
            value: "70%",
            label: "Cobertura de testes",
            icon: "✅",
            helper: "Média nos principais projetos pessoais.",
          },
        ]}
      /> */}

      {/* Primary CTA */}
      <HeroCTA />

      {/* Social Links */}
      <div className="flex flex-col justify-center items-center">
        <IconsContact />
        <div className="mt-6 pb-6">
          <a href={`/#${t("Navbar.AboutMe")}`} aria-label="Scroll to about me section" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent rounded-full inline-flex items-center justify-center">
            <RxDoubleArrowDown
              className="text-primary dark:text-accent text-3xl animate-bounce"
              size={30}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HelloText;
