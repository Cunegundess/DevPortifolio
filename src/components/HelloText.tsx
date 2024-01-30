function HelloText() {
  return (
    <div className="lg:ml-[7vw] md:ml-[7vw] mt-[33vh] text-center md:text-left lg:text-left justify-end items-start">
      <span className="text-gray-400 text-1xl lg:text-2xl font-medium leading-[60px] tracking-[1px] uppercase">
        <span className="drop-shadow-sm">👋🏻</span> Hello World!
      </span>
      <h1 className="text-gray-950 dark:text-gray-50 text-6xl lg:text-7xl font-bold leading-[60px]">
        I'm Lucas Cunegundes
      </h1>
      <span className="text-gray-950 dark:text-gray-50 text-1xl lg:text-2xl font-medium leading-[60px]">
        Software Developer
      </span>
    </div>
  );
}

export default HelloText;
