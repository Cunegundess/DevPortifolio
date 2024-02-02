import { useTranslation } from "react-i18next";

function HelloText() {
  const [t, i18n] = useTranslation("translation");
  return (
    <div className="lg:ml-[7vw] md:ml-[7vw] mt-[33vh] text-center md:text-left lg:text-left justify-end items-start">
      <span className="text-zinc-400 text-1xl lg:text-2xl font-medium leading-[60px] tracking-[1px] uppercase">
        <span className="drop-shadow-sm">👋🏻 </span>
        {t("IntroPage.greeting")}
      </span>
      <h1 className="text-zinc-950 dark:text-zinc-50 text-6xl lg:text-7xl font-bold leading-[60px]">
        {t("IntroPage.presentation")}
      </h1>
      <span className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-medium leading-[60px]">
        {t("IntroPage.job")}
      </span>
    </div>
  );
}

export default HelloText;
