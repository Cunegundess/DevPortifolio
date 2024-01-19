import HelloText from "../components/HelloText";
import IconsContact from "../components/IconsContact";
import ScrollDown from "../components/ScrollDown";

export function IntroPage() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <HelloText />

      {/* Ícones de Contato */}
      <div className="absolute flex justify-center w-full items-center flex-col pb-5 bottom-0 left-0">
        <IconsContact />
      </div>

      {/* Setas de Rolagem */}
      <div className="absolute flex justify-end w-full items-end flex-col pb-5 pr-4 lg:pr-20 bottom-0 left-0">
        <ScrollDown />
      </div>
    </div>
  );
}
