import { Reveal } from "@/components/motion/Reveal";
import { useTranslation } from "react-i18next";
import HelloText from "../components/HelloText";

export function IntroPage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Home")} className="h-screen flex flex-col">
      <div className="bg-gradient-to-b from-gray-200 via-gray-200 to-gray-300 dark:bg-gradient-to-b dark:to-slate-950 dark:from-slate-950  rounded-xl shadow-xl mx-3 mt-16 h-full">
        <Reveal>
          <HelloText />
        </Reveal>
      </div>
    </section>
  );
}
