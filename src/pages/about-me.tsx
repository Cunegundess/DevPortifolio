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
      className="py-20 px-5 md:px-10 lg:px-20 max-w-6xl mx-auto"
      aria-labelledby="about-title"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
        className="flex flex-col gap-6"
      >
        <div className="flex flex-col gap-4 leading-relaxed">
          <h1 id="about-title" className="text-3xl md:text-4xl font-bold">
            <span className="drop-shadow-lg text-3xl md:text-4xl">👨🏻‍💻</span>{" "}
            {t("AboutPage.title")}
          </h1>

          <div className="flex flex-col gap-4 mt-6">
            <p className="text-lg md:text-xl">
              <span className="font-bold bg-gradient-to-r from-cyan-500 to-blue-700 text-transparent bg-clip-text">
                {t("AboutPage.greetings")} {t("AboutPage.job")}
              </span>
            </p>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {t("AboutPage.about")}
            </p>
            <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
              <span className="drop-shadow-lg text-xl">🎯</span>{" "}
              {t("AboutPage.objective")}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMePage;
