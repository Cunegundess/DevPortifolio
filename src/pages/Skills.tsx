import StackIcons from "../components/StackIcons";

function SkillsPage() {
  return (
    <div id="Skills" className="fit-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-2/5 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-7xl font-bold pb-5 lg:pb-5">
          Skills
        </h1>
      </div>

      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end px-5 text-center">
        <h2 className="text-zinc-950 dark:text-zinc-50 text-2xl font-bold leading-[30px] ">
          Technologies / Libraries i've worked with:
        </h2>
        <div className="text-zinc-950 dark:text-zinc-50 text-2xl font-medium leading-[30px] flex flex-row pt-10 gap-5 w-full justify-center">
          <StackIcons />
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
