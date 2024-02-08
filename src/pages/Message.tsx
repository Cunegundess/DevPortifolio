import ContactForm from "@/components/ContactForm";
import IconsContact from "@/components/IconsContact";
import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

function MessagePage() {
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
    <section ref={scope} id={t("Navbar.Message")} className="h-screen flex ">
      <div className="flex flex-col lg:flex-row justify-center items-center p-10 mt-20">
        <div className="flex flex-col gap-2 leading-[30px] lg:w-2/5 lg:ml-36">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -75 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            animate={hidden ? "hidden" : "visible"}
          >
            <h1 className="flex text-left text-xl font-bold">
              <a
                href="/"
                className="text-blue-500 hover:underline hover:decoration-3 inline-flex items-center"
              >
                <IoIosArrowBack size={20} /> {t("MessagePage.go_back")}
              </a>
            </h1>
            <div className="mt-16 font-bold text-center text-3xl lg:text-4xl">
              {t("MessagePage.description")}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text capitalize">
                {t("MessagePage.strong_message")}{" "}
              </span>
              <span className="drop-shadow-lg text-2xl lg:text-3xl">🚀</span>
            </div>{" "}
            <div className="flex flex-col justify-center items-center mt-10">
              <IconsContact />
            </div>
          </motion.div>
        </div>

        <div className="flex justify-center items-center mt-16 lg:ml-24 lg:w-1/2 lg:mr-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default MessagePage;
