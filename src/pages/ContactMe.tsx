import { useTranslation } from "react-i18next";
import ContactForm from "../components/ContactForm";
import IconsContact from "../components/IconsContact";

function ContactMePage() {
  const [t, i18n] = useTranslation("translation");
  return (
    <div id="Contact" className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5">
        <div className="text-center lg:flex-auto">
          <h1 className="text-zinc-950 dark:text-zinc-50 text-5xl lg:text-7xl font-bold pb-5 lg:pb-5">
            {t("ContactPage.title")}
          </h1>
          <span className="text-zinc-950 dark:text-zinc-50 text-1xl lg:text-2xl font-medium leading-[20px] ">
            {t("ContactPage.description")} 🚀
          </span>
        </div>
        <div className="w-full lg:w-auto pt-10 px-5 lg:px-20 flex justify-center items-center">
          <IconsContact />
        </div>
      </div>

      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end px-5">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMePage;
