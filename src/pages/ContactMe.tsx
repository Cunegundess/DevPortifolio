import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TbMessageCircleShare } from "react-icons/tb";
import IconsContact from "../components/IconsContact";

function ContactMePage() {
  const [t] = useTranslation("translation");
  return (
    <section
      id={t("Navbar.Contact")}
      className="min-h-screen flex flex-col lg:mx-36"
    >
      <div className="justify-center items-center p-10 mx-10 mt-28">
        <div className="flex flex-col gap-2 leading-[30px]">
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
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <IconsContact />
        </div>
        <div className="flex justify-center items-center mt-16">
          {/* <ContactForm /> */}
          <a href={`/${t("Navbar.Message")}`}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-cyan-500 hover:to-blue-600 text-white p-4 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2"
            >
              <TbMessageCircleShare size={25} className="text-white" />
              <span>{t("ContactPage.text_button")}</span>
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactMePage;
