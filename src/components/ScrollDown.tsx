import { LuMouse } from "react-icons/lu";
import { RiArrowDownDoubleLine } from "react-icons/ri";

function ScrollDown() {
  return (
    <div className="flex justify-center items-center flex-col scroll-down">
      <span className="text-zinc-400 mb-2">Scroll down</span>
      <LuMouse size={24} />
      <RiArrowDownDoubleLine
        className="text-zinc-950 dark:text-zinc-50 text-3xl mb-5"
        size={30}
      />
    </div>
  );
}

export default ScrollDown;
