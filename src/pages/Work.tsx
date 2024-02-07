import Youtan from "@/components/Youtan";
import DownloadCV from "@/components/download-cv";
import { useTranslation } from "react-i18next";

function WorkPage() {
  const [t] = useTranslation("translation");

  return (
    <section
      id={t("Navbar.Work")}
      className="h-screen flex flex-col lg:flex-row"
    >
      <div className="justify-center items-center p-10 mx-5 my-28">
        <div className="flex flex-col gap-2 leading-[30px] lg:mx-36">
          <h1 className="text-xl font-medium mx-5">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("WorkPage.title")}
          </h1>
          <div className="flex flex-col justify-center items-center mt-16">
            <Youtan />
            <DownloadCV />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkPage;
