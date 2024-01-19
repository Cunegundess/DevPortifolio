import HelloText from "../components/HelloText";
import IconsContact from "../components/IconsContact";
import ScrollDown from "../components/ScrollDown";

export function IntroPage() {
  return (
    <>
      <div className="h-screen flex flex-col ">
        <HelloText />
        <div className="absolute flex justify-end w-full items-end flex-col pb-5 pr-20 bottom-0 left-0">
          <ScrollDown />
        </div>
        <div className="absolute flex justify-center w-full items-center flex-col pb-5 bottom-0 left-0">
          <IconsContact />
        </div>
      </div>
    </>
  );
}
