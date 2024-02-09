import ContactForm from "@/components/contact-form";
import IconsContact from "@/components/icons-contact";
import { Reveal } from "@/components/motion/reveal-animation";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";

function MessagePage() {
  const [t] = useTranslation("translation");

  return (
    <Reveal>
      <section id={t("Navbar.Message")} className="h-screen flex ">
        <div className="flex flex-col lg:flex-row justify-center items-center p-5 mt-20">
          <div className="flex flex-col gap-2 leading-[30px] lg:w-2/5 lg:ml-36">
            <div>
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
            </div>
          </div>

          <div className="flex justify-center items-center mt-16 lg:ml-24 lg:w-1/2 lg:mr-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default MessagePage;
