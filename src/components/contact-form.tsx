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
    reset,
  } = useForm<contactFormFieldsType>({
    resolver: zodResolver(contactFormSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const ContactForm = useRef<HTMLFormElement | null>(null);

  async function HandleFormFields() {
    if (!ContactForm.current) {
      toast.error("❌ Form reference error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_SERVICE_ID,
        ContactForm.current,
        import.meta.env.VITE_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success(`🥳 ${t("ContactPage.toast_title")}`, {
          description: t("ContactPage.toast_description"),
          duration: 3000,
          position: "top-right",
        });
        reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message", {
        description: "Please try again or contact directly",
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="rounded-lg shadow-lg w-full h-full">
      <CardContent className="p-0">
        <form
          ref={ContactForm}
          onSubmit={handleSubmit(HandleFormFields)}
          className="flex flex-col mx-auto p-4 gap-3"
          aria-label="Contact form"
        >
          <Input
            type="text"
            placeholder={t("ContactPage.name_input")}
            id="name"
            aria-label="Your name"
            className="w-full p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
            {...register("user_name", { required: true })}
          />
          {errors.user_name && (
            <p className="text-sm font-bold text-red-600" role="alert">
              {errors.user_name.message}
            </p>
          )}
          <Input
            type="email"
            placeholder={t("ContactPage.email_input")}
            id="email"
            aria-label="Your email"
            className="w-full p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <p className="text-sm  text-red-600 font-extrabold" role="alert">
              {errors.user_email.message}
            </p>
          )}
          <Textarea
            placeholder={t("ContactPage.message_input")}
            className="w-full h-20 p-2 rounded bg-slate-100 dark:bg-slate-950 focus:border-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition"
            id="message"
            aria-label="Your message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-sm  text-red-600 font-extrabold" role="alert">
              {errors.message.message}
            </p>
          )}
          <motion.button
            whileHover={!isLoading ? {
              scale: 1.02,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
            } : {}}
            whileTap={!isLoading ? { scale: 0.7 } : {}}
            className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-blue-500 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white p-2 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            aria-label={isLoading ? "Sending message..." : "Send message"}
          >
            {isLoading ? (
              <>
                <span className="inline-block animate-spin">⏳</span>
                <span>{t("ContactPage.text_button")}</span>
              </>
            ) : (
              <span>{t("ContactPage.text_button")}</span>
            )}
          </motion.button>
        </form>
      </CardContent>
    </Card>
  );
}
