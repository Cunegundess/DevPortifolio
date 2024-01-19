function AboutMePage() {
  return (
    <div className="h-screen flex">
      <div className="ml-[80px] flex-auto mt-[200px] justify-end items-start pr-20">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-7xl font-bold">
          About Me
        </h1>
      </div>
      <div className="mr-[80px] flex-auto w-1/2 mt-[200px] justify-start items-end">
        <span className="text-zinc-950 dark:text-zinc-50 text-2xl font-normal leading-[40px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </span>
      </div>
    </div>
  );
}

export default AboutMePage;
