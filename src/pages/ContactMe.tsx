import ContactForm from "../components/ContactForm";
import IconsContact from "../components/IconsContact";

function ContactMePage() {
  return (
    <div id="Contact" className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-1/2 flex-col lg:ml-8 mt-28 lg:mt-[200px] justify-end lg:items-center lg:pr-4 px-5">
        <div className="text-center lg:flex-auto">
          <h1 className="text-zinc-950 dark:text-zinc-50 text-7xl font-bold pb-5 lg:pb-5">
            Contact Me
          </h1>
          <span className="text-zinc-950 dark:text-zinc-50 text-2xl font-medium leading-[20px] ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </span>
        </div>
        <div className="w-full lg:w-auto pt-10 px-5 lg:px-20 flex justify-center items-center">
          <IconsContact />
        </div>
      </div>

      <div className="lg:mr-8 mt-8 lg:mt-[200px] flex-auto lg:w-1/2 justify-start items-end p-5">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactMePage;
