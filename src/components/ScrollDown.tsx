import IconArrowDown from "../assets/arrowDown";

function ScrollDown() {
  return (
    <div className="flex justify-center items-center flex-col scroll-down">
      <span className="text-zinc-400  uppercase">Scroll down</span>
      <IconArrowDown
        className="text-zinc-950 dark:text-zinc-50 text-3xl mb-5"
        width={"30px"}
        height={"30px"}
      />
    </div>
  );
}

export default ScrollDown;
