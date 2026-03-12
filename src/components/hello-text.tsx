import { useTranslation } from "react-i18next";
import { RxDoubleArrowDown } from "react-icons/rx";
import { HeroCTA } from "./hero-cta";
import IconsContact from "./icons-contact";
import { SocialProof } from "./social-proof";

function HelloText() {
  const [t] = useTranslation("translation");

  return (
    <div className="flex flex-col justify-center items-center space-y-16 mx-10 lg:mx-36 mt-16">
      <div className="relative">
        <img
          className="rounded-full h-[40vw] w-[40vw] md:h-[20vw] md:w-[20vw] lg:h-[15vw] lg:w-[15vw]"
          src="https://github.com/cunegundess.png"
          alt="Lucas Cunegundes profile picture"
        />
        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3 lg:bottom-3 lg:right-3 flex bg-gray-50 shadow-lg rounded-full w-[9vw] h-[9vw] md:h-[4vw] md:w-[4vw] lg:w-[3vw] lg:h-[3vw] text-center justify-center items-center" aria-hidden="true">
          <span className="drop-shadow-lg text-xl">👨🏻‍💻</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center w-fit h-fit">
        <div className="flex flex-col md:flex-row lg:flex-row gap-3">
          <h1 id="intro-title" className="font-extrabold text-5xl tracking-tight">
            {t("IntroPage.greeting")}
          </h1>

          <p className="font-extrabold pb-2 text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-700">
            Lucas Cunegundes
          </p>
        </div>

        <span className="text-lg lg:text-xl font-medium trackin-tight">
          {t("IntroPage.presentation")}
        </span>
      </div>

      {/* Social Proof Statistics */}
      <SocialProof
        stats={[
          { value: "1+", label: "Years Experience", icon: "⚡" },
          { value: "3+", label: "Projects Completed", icon: "🚀" },
          { value: "70%", label: "Test Coverage", icon: "✅" },
        ]}
      />

      {/* Primary CTA */}
      <HeroCTA />

      {/* Social Links */}
      <div className="flex flex-col justify-center items-center">
        <IconsContact />
        <div className="mt-9 pb-10">
          <a href={`/#${t("Navbar.AboutMe")}`} aria-label="Scroll to about me section" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded-full">
            <RxDoubleArrowDown
              className="text-slate-950 dark:text-slate-50 text-3xl animate-bounce mt-20 md:my-20 lg:my-20"
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
