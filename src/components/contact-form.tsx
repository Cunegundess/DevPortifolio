import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const [t] = useTranslation("translation");

  const contactFormSchema = z.object({
    user_name: z.string().min(1, t("ContactPage.zod_user_name")),
    user_email: z.string().email(t("ContactPage.zod_user_email")),
    message: z.string().min(1, t("ContactPage.zod_user_message")),
  });

  type contactFormFieldsType = z.infer<typeof contactFormSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormFieldsType>({
    resolver: zodResolver(contactFormSchema),
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const ContactForm = useRef<HTMLFormElement | null>(null);

  function HandleFormFields() {
    if (ContactForm.current) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_SERVICE_ID,
        ContactForm.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
    }
    setFormSubmitted(!formSubmitted);
    toast(`🥳 ${t("ContactPage.toast_title")} `, {
      description: t("ContactPage.toast_description"),
      duration: 2000,
      position: "top-right",
      cancel: {
        label: "X",
      },
      cancelButtonStyle: {
        fontWeight: "bolder",
      },
    });
  }

  return (
    <Card className="rounded-lg shadow-lg w-full h-full">
      <CardContent className="p-0">
        <form
          ref={ContactForm}
          onSubmit={handleSubmit(HandleFormFields)}
          className="flex flex-col mx-auto p-4 gap-3"
        >
          <Input
            type="text"
            placeholder={t("ContactPage.name_input")}
            id="name"
            className="w-full p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 transition"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && (
            <p className="text-sm font-bold text-red-600">
              {errors.user_name.message}
            </p>
          )}
          <Input
            type="email"
            placeholder={t("ContactPage.email_input")}
            id="email"
            className="w-full p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 transition"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <p className="text-sm  text-red-600 font-extrabold">
              {errors.user_email.message}
            </p>
          )}
          <Textarea
            placeholder={t("ContactPage.message_input")}
            className="w-full h-20 p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 transition"
            id="message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-sm  text-red-600 font-extrabold">
              {errors.message.message}
            </p>
          )}
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.7 }}
            className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white p-2 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2"
            type="submit"
          >
            <span>{t("ContactPage.text_button")}</span>{" "}
          </motion.button>
        </form>
      </CardContent>
    </Card>
  );
}
