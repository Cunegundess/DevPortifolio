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
      className="py-20 px-3 sm:px-4 lg:px-6"
      aria-labelledby="about-title"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -75 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        animate={hidden ? "hidden" : "visible"}
        className="flex flex-col gap-8 bg-gradient-to-br from-secondary to-background dark:from-secondary/30 dark:to-background dark:backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-6xl mx-auto"
      >
        <div className="flex flex-col gap-6 leading-relaxed">
          <div className="flex items-start gap-4">
            <span className="text-4xl md:text-5xl flex-shrink-0">👨🏻‍💻</span>
            <div>
              <h1 id="about-title" className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {t("AboutPage.title")}
              </h1>
              <p className="text-accent font-semibold text-sm md:text-base">
                {t("AboutPage.subtitle")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-4">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-semibold text-primary">
                {t("AboutPage.greetings")} <span className="text-accent">{t("AboutPage.job")}</span>
              </p>
            </div>
            
            <p className="text-base md:text-lg text-foreground/80 dark:text-foreground/90 leading-relaxed border-l-4 border-accent pl-4">
              {t("AboutPage.about")}
            </p>
            
            <div className="bg-primary/5 dark:bg-accent/10 rounded-lg p-6 border border-accent/20 mt-4">
              <p className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0 mt-1">🎯</span>
                <span className="text-base md:text-lg text-foreground/90 leading-relaxed">
                  {t("AboutPage.objective")}
                </span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutMePage;
