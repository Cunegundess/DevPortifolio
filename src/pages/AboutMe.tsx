function AboutMePage() {
  return (
    <div id="AboutMe" className="min-h-screen flex flex-col">
      <div className="mt-28 lg:mt-[200px] justify-center lg:items-center px-5 text-center">
        <h1 className="text-gray-950 dark:text-gray-50 text-5xl lg:text-7xl font-bold ">
          About Me
        </h1>
      </div>

      <div className="justify-center items-center p-10 text-center mx-10">
        <span className="text-gray-950 dark:text-gray-50 text-xl font-medium lg:text-1xl leading-[30px] ">
          🧑🏻‍💻 Full-Stack Software Developer, currently pursuing a degree in
          Systems Analysis and Development, with a focus on Software
          Development, particularly working with ReactJS and Django, as well as
          experience in Linux environments, among other technologies.
          <div className="py-1" />
          🤔 Curious and enthusiastic about exploring new technologies.
          <div className="py-1" />
          🚀 I aim to contribute to challenging projects, adding value and
          driving collective success. I'm determined to face new challenges and
          broaden my experience in the field of software development.
        </span>
      </div>
    </div>
  );
}

export default AboutMePage;
