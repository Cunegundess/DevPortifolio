function HelloText() {
  return (
    <div className="ml-4 mt-8 lg:ml-[80px] lg:mt-[200px] justify-end items-start">
      <span className="text-zinc-400 text-lg lg:text-2xl font-normal leading-[30px] lg:leading-[60px] tracking-[1px] uppercase">
        <span className="drop-shadow-sm">👋🏻</span> Hello World!
      </span>
      <h1 className="text-zinc-950 dark:text-zinc-50 text-4xl lg:text-7xl font-bold leading-[40px] lg:leading-[60px]">
        I'm Lucas Cunegundes
      </h1>
      <span className="text-zinc-950 dark:text-zinc-50 text-lg lg:text-2xl font-normal leading-[30px] lg:leading-[60px]">
        Software Developer
      </span>
    </div>
  );
}

export default HelloText;
