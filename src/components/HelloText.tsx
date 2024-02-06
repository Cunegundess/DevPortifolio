import { useTranslation } from "react-i18next";

function HelloText() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col justify-center items-center space-y-16 m-36 mt-16">
      <div className="relative">
        <img
          className="rounded-full h-[120px] w-[120px]"
          src="https://github.com/cunegundess.png"
        />
        <div className="absolute bottom-0 right-0 flex bg-gray-50 shadow-lg rounded-full w-[40px] h-[40px] text-center justify-center items-center">
          <span className="drop-shadow-lg text-2xl">🔥</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 text-center w-fit h-fit">
        <h1 className="font-extrabold text-5xl tracking-tight">
          {t("IntroPage.greeting")}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">
            Lucas Cunegundes
          </span>
        </h1>
        <span className="text-xl font-medium trackin-tight">
          {t("IntroPage.presentation")}
        </span>
      </div>
    </div>
  );
}

export default HelloText;
