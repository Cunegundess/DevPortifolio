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
      className="min-h-screen flex flex-col py-20 px-3 sm:px-4 lg:px-6"
      aria-labelledby="contact-section-title"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          animate={hidden ? "hidden" : "visible"}
          className="flex flex-col gap-8"
        >
          <div className="space-y-3">
            <h1 id="contact-section-title" className="text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              {t("ContactPage.title")}
            </h1>
            <div className="font-bold text-3xl md:text-4xl text-primary leading-tight">
              {t("ContactPage.description")}{" "}
              <span className="bg-gradient-to-r from-accent to-accent/70 text-transparent bg-clip-text capitalize">
                {t("ContactPage.strong_message")}{" "}
              </span>
              <span className="drop-shadow-lg text-2xl lg:text-3xl" aria-hidden="true">🚀</span>
            </div>
            <p className="text-base md:text-lg text-foreground/70 dark:text-foreground/80 max-w-2xl">
              {t("ContactPage.intro_paragraph")}
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-center">
            {/* CTA principal */}
            <div className="rounded-2xl border border-border bg-card dark:bg-card/80 px-6 py-7 shadow-sm space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("ContactPage.cta_label")}
                </p>
                <p className="text-base md:text-lg text-foreground/80 dark:text-foreground/90">
                  {t("ContactPage.cta_body")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <IconsContact />

                <a href={`/${t("Navbar.Message")}`} aria-label="Open contact form" className="mt-2">
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 10px 30px rgba(15, 23, 42, 0.25)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground px-6 py-3 rounded-xl shadow-lg transition-all duration-300 ease-in-out gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
                  >
                    <motion.span
                      animate={{ scale: [0.9, 1.05, 0.9] }}
                      transition={{
                        duration: 1.5,
                        repeatType: "loop",
                        repeat: Infinity,
                      }}
                      aria-hidden="true"
                    >
                      <TbMessageCircleShare size={22} className="text-accent-foreground" />
                    </motion.span>
                    <span>{t("ContactPage.text_button")}</span>
                  </motion.button>
                </a>
              </div>
            </div>

            {/* Bloco de contexto */}
            <div className="space-y-4 text-sm md:text-base text-foreground/75 dark:text-foreground/85">
              <p>{t("ContactPage.context_paragraph1")}</p>
              <p>{t("ContactPage.context_paragraph2")}</p>
              <p className="text-xs text-muted-foreground">
                {t("ContactPage.context_paragraph3")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactMePage;
