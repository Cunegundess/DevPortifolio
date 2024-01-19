import { motion } from "framer-motion";
import IconsContact from "../components/IconsContact";

function ContactMePage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Parte Esquerda */}
      <div className="lg:w-1/2 flex-col lg:ml-8 mt-20 lg:mt-[200px] justify-end lg:items-start pr-4 lg:pr-20">
        <div className="flex-auto">
          <h1 className="text-zinc-950 dark:text-zinc-50 text-4xl lg:text-7xl font-bold pb-2 lg:pb-5">
            Contact Me
          </h1>
          <span className="text-zinc-950 dark:text-zinc-50 text-sm lg:text-1xl font-normal leading-[20px] ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="w-full lg:w-fit mx-auto lg:pt-10 justify-center items-center">
          <IconsContact />
        </div>
      </div>

      {/* Parte Direita */}
      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end">
        <form className="flex flex-col max-w-md mx-auto p-4 rounded shadow-lg bg-zinc-50 dark:bg-slate-900 dark:shadow-lg">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />

          <textarea
            placeholder="Type your message here"
            className="w-full p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default ContactMePage;
