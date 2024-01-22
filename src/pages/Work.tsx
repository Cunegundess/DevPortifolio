import { motion } from "framer-motion";

function WorkPage() {
  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5 text-center">
        <h1 className="text-zinc-950 dark:text-zinc-50 text-7xl font-bold pb-5 lg:pb-5">
          Experience
        </h1>
      </div>

      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end p-5 text-center">
        <span className="text-zinc-950 dark:text-zinc-50 text-2xl font-normal leading-[20px] ">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </span>
        <motion.button
          className="self-center bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition mt-4"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download CV
        </motion.button>
      </div>
    </div>
  );
}

export default WorkPage;
