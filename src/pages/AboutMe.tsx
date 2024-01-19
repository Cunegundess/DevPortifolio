function AboutMePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Parte Esquerda */}
      <div className="lg:w-1/2 ml-8 lg:ml-[80px] flex-auto mt-8 lg:mt-[200px] justify-end lg:items-start pr-4 lg:pr-20">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-4xl lg:text-7xl font-bold pb-2 lg:pb-5">
          About Me
        </h1>
      </div>

      {/* Parte Direita */}
      <div className="lg:w-1/2 mr-8 lg:mr-[80px] flex-auto mt-8 lg:mt-[200px] justify-start items-end">
        <span className="text-zinc-950 dark:text-zinc-50 text-sm lg:text-2xl font-normal leading-[24px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </span>
      </div>
    </div>
  );
}

export default AboutMePage;
