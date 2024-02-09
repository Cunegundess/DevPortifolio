import {
  motion,
  useAnimate,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function AboutMePage() {
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
      id={t("Navbar.AboutMe")}
      className="h-screen flex flex-col lg:mx-36"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
        className="justify-center items-center py-10 md:p-10 lg:p-10 mx-10 my-28"
      >
        <div className="flex flex-col gap-2 leading-[30px]">
          <h1 className="text-xl font-medium">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("AboutPage.title")}
          </h1>
          <span className="font-bold text-2xl lg:text-3xl mt-16">
            {t("AboutPage.greetings")}{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">
              {t("AboutPage.job")}{" "}
            </span>
            {t("AboutPage.about")}
          </span>
          <span className="text-xl lg:text-2xl font-light mt-5">
            <span className="drop-shadow-lg text-2xl">🎯</span>{" "}
            {t("AboutPage.objective")}
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMePage;
