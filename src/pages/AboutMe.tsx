function AboutMePage() {
  return (
    <div id="AboutMe" className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/5 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-5xl lg:text-7xl font-bold pb-5 lg:pb-5">
          About Me
        </h1>
      </div>

      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end px-5 text-center">
        <span className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-medium leading-[30px] ">
          🧑🏻‍💻 Full-Stack Software Developer, currently pursuing a degree in
          Systems Analysis and Development, with a focus on Software
          Development, particularly working with ReactJS and Django, as well as
          experience in Linux environments, among other technologies.
          <br />
          🤔 Curious and enthusiastic about exploring new technologies.
        </span>
      </div>
    </div>
  );
}

export default AboutMePage;
