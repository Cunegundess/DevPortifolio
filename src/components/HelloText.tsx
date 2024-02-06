import { useTranslation } from "react-i18next";
import { RxDoubleArrowDown } from "react-icons/rx";
import IconsContact from "./IconsContact";

function HelloText() {
  const [t] = useTranslation("translation");
  return (
    <div className="flex flex-col justify-center items-center space-y-16 m-36 mt-16">
      <div className="relative">
        <img
          className="rounded-full h-[100px] w-[100px] lg:h-[120px] lg:w-[120px]"
          src="https://github.com/cunegundess.png"
        />
        <div className="absolute bottom-0 right-0 flex bg-gray-50 shadow-lg rounded-full w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] text-center justify-center items-center">
          <span className="drop-shadow-lg text-xl lg:text-2xl">🔥</span>
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center w-fit h-fit">
        <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
          {t("IntroPage.greeting")}{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">
            Lucas Cunegundes
          </span>
        </h1>

        <span className="text-lg lg:text-xl font-medium trackin-tight">
          {t("IntroPage.presentation")}
        </span>
      </div>
      <IconsContact />
      <RxDoubleArrowDown
        className="text-zinc-950 dark:text-zinc-50 text-3xl animate-bounce"
        size={30}
      />
    </div>
  );
}

export default HelloText;
