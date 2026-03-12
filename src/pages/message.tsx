import ContactForm from "@/components/contact-form";
import IconsContact from "@/components/icons-contact";
import { Reveal } from "@/components/motion/reveal-animation";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

function MessagePage() {
  const [t] = useTranslation("translation");

  return (
    <Reveal>
      <section id={t("Navbar.Message")} className="min-h-screen flex py-20 px-3 sm:px-4 lg:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
          {/* Texto e links rápidos */}
          <div className="flex-1 space-y-6">
            <h1 className="flex text-left text-sm font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <a
                href="/"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-accent transition-colors"
              >
                <IoIosArrowBack size={18} /> {t("MessagePage.go_back")}
              </a>
            </h1>
            <div className="space-y-4">
              <div className="font-bold text-3xl lg:text-4xl text-primary leading-tight">
                {t("MessagePage.description")}
                {" "}
                <span className="bg-gradient-to-r from-accent to-accent/70 text-transparent bg-clip-text capitalize">
                  {t("MessagePage.strong_message")}{" "}
                </span>
                <span className="drop-shadow-lg text-2xl lg:text-3xl">🚀</span>
              </div>
              <p className="text-base md:text-lg text-foreground/70 dark:text-foreground/80 max-w-xl">
                {t("MessagePage.form_helper")}
              </p>
            </div>
            <div className="flex flex-col items-start mt-4 gap-3">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t("MessagePage.find_me_also")}
              </p>
              <IconsContact />
            </div>
          </div>

          {/* Formulário */}
          <div className="flex-1 max-w-xl w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default MessagePage;
