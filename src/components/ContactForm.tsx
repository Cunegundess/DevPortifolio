import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <form className="flex flex-col max-w-md mx-auto p-4 rounded-lg shadow-lg bg-zinc-50 dark:bg-slate-900 dark:shadow-lg">
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
  );
}
