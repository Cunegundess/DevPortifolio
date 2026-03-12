import { Reveal } from "@/components/motion/reveal-animation";
import { useTranslation } from "react-i18next";
import HelloText from "../components/hello-text";

export function IntroPage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Home")} className="min-h-screen flex flex-col pt-8 pb-16 px-3 sm:px-4 lg:px-6" aria-labelledby="intro-title">
      <div className="bg-gradient-to-b from-secondary via-secondary to-background dark:bg-gradient-to-b dark:from-secondary dark:via-secondary dark:to-background h-full rounded-xl shadow-lg max-w-6xl mx-auto">
        <Reveal>
          <HelloText />
        </Reveal>
      </div>
    </section>
  );
}
