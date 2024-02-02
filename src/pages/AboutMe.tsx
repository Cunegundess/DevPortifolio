import { useTranslation } from "react-i18next";

function AboutMePage() {
  const [t] = useTranslation("translation");
  return (
    <div id="AboutMe" className="min-h-screen flex flex-col">
      <div className="mt-28 lg:mt-[200px] justify-center lg:items-center px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-5xl lg:text-7xl font-bold ">
          {t("AboutPage.title")}
        </h1>
      </div>

      <div className="justify-center items-center p-10 text-center mx-10">
        <span className="text-zinc-950 dark:text-zinc-50 text-xl font-medium lg:text-1xl leading-[30px] ">
          🧑🏻‍💻 {t("AboutPage.content")}
          <div className="py-1" />
          🚀 {t("AboutPage.objective")}
          <div className="py-1" />
          🤔 {t("AboutPage.adjective")}
        </span>
      </div>
    </div>
  );
}

export default AboutMePage;
