import { useTranslation } from "react-i18next";
import HelloText from "../components/HelloText";
import IconsContact from "../components/IconsContact";
import ScrollDown from "../components/ScrollDown";

export function IntroPage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Home")} className="h-screen flex flex-col relative">
      <div className="bg-gray-200 dark:bg-slate-950 rounded-xl mx-3 mt-16 h-full">
        <HelloText />

        <div className="absolute flex justify-center w-full items-center flex-col pb-5 bottom-0 left-0 z-10">
          <IconsContact />
        </div>
        <div className="absolute flex justify-end w-full right-0 items-end flex-col pb-5 pr-4 lg:pr-20 bottom-0 left-0">
          <ScrollDown />
        </div>
      </div>
    </section>
  );
}
