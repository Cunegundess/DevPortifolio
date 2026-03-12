import { Reveal } from "@/components/motion/reveal-animation";
import { useTranslation } from "react-i18next";
import HelloText from "../components/hello-text";

export function IntroPage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Home")} className="min-h-screen flex flex-col pt-8 pb-16 px-3 sm:px-4 lg:px-6" aria-labelledby="intro-title">
			<div className="bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,hsl(var(--secondary))_30%,hsl(var(--secondary))_70%,hsl(var(--background))_100%)] dark:bg-[linear-gradient(to_bottom,hsl(var(--background))_0%,hsl(var(--secondary))_30%,hsl(var(--secondary))_70%,hsl(var(--background))_100%)] h-full rounded-xl shadow-lg">
        <Reveal>
          <HelloText />
        </Reveal>
      </div>
    </section>
  );
}
