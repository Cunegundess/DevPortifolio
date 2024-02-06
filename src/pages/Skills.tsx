import { useTranslation } from "react-i18next";
import StackIcons from "../components/StackIcons";

function SkillsPage() {
  const [t] = useTranslation("translation");
  return (
    <section
      id={t("Navbar.Skills")}
      className="min-h-screen flex flex-col lg:mx-36"
    >
      <div className="justify-center items-center p-10 mx-10 mt-28">
        <div className="flex flex-col gap-2 leading-[30px]">
          <h1 className="text-xl font-medium">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("SkillsPage.title")}
          </h1>
          <span className="flex flex-col font-bold text-2xl lg:text-3xl mt-16 gap-10">
            {t("SkillsPage.content")}
            <StackIcons />
          </span>
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;
