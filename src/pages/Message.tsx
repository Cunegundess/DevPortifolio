import ContactForm from "@/components/ContactForm";
import IconsContact from "@/components/IconsContact";
import { useTranslation } from "react-i18next";

function MessagePage() {
  const [t] = useTranslation("translation");

  return (
    <section id={t("Navbar.Message")} className="min-h-screen flex ">
      <div className="flex flex-col lg:flex-row justify-center items-center p-10 mt-15">
        <div className="flex flex-col gap-2 leading-[30px] lg:w-2/5 lg:ml-36">
          <h1 className="text-xl font-medium">
            <span className="drop-shadow-lg text-xl lg:text-2xl">🧑🏻‍💻</span>{" "}
            {t("MessagePage.title")}
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

        <div className="flex justify-center items-center mt-16 lg:ml-24 lg:w-1/2 lg:mr-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default MessagePage;
