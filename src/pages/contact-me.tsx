import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbMessageCircleShare } from "react-icons/tb";
import IconsContact from "../components/icons-contact";

function ContactMePage() {
  const [t] = useTranslation("translation");
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(true);
  const [scope] = useAnimate();
  const isInView = useInView(scope);

  useMotionValueEvent(scrollY, "change", () => {
    if (isInView) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  });

  return (
    <section
      ref={scope}
      id={t("Navbar.Contact")}
      className="h-screen flex flex-col lg:mx-36"
    >
      <div className="justify-center items-center py-10 md:p-10 lg:p-10 mx-10 my-28">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={hidden ? "hidden" : "visible"}
          className="flex flex-col gap-2 leading-[30px]"
        >
          <h1 className="text-xl font-medium">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("ContactPage.title")}
          </h1>
          <div className="mt-16 font-bold text-center text-3xl lg:text-4xl">
            {t("ContactPage.description")}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text capitalize">
              {t("ContactPage.strong_message")}{" "}
            </span>
            <span className="drop-shadow-lg text-2xl lg:text-3xl">🚀</span>
          </div>
        </motion.div>
        <div className="flex flex-col justify-center items-center mt-10">
          <IconsContact />
        </div>
        <div className="flex justify-center items-center mt-16">
          <a href={`/${t("Navbar.Message")}`}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.9 }}
              className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white p-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2"
            >
              <motion.span
                animate={{ scale: [0.9, 1.1, 0.9] }}
                transition={{
                  duration: 1.5,
                  repeatType: "loop",
                  repeat: Infinity,
                }}
              >
                <TbMessageCircleShare size={25} className="text-white" />
              </motion.span>
              <span>{t("ContactPage.text_button")}</span>
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMePage;
