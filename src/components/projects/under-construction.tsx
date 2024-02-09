import { useTranslation } from "react-i18next";

function UnderConstruction() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col lg:mx-36 items-center text-center justify-center">
      <h2 className="flex flex-row items-center text-3xl lg:text-4xl font-bold gap-1">
        {t("ProjectsPage.under_construction_title")}
      </h2>

      <p className="text-medium py-4">
        {t("ProjectsPage.under_construction_description")}
      </p>
    </div>
  );
}

export default UnderConstruction;
