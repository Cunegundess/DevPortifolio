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
      toast.error(t("ContactPage.toast_error_title"), {
        description: t("ContactPage.toast_error_description"),
        duration: 3000,
        position: "top-right",
      });
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
      toast.error(t("ContactPage.toast_error_title"), {
        description: t("ContactPage.toast_error_description"),
        duration: 3000,
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="rounded-2xl shadow-lg w-full h-full border border-border bg-card dark:bg-card/80">
      <CardContent className="p-0">
        <form
          ref={ContactForm}
          onSubmit={handleSubmit(HandleFormFields)}
          className="flex flex-col mx-auto p-4 md:p-5 gap-3"
          aria-label="Contact form"
        >
          <Input
            type="text"
            placeholder={t("ContactPage.name_input")}
            id="name"
            aria-label={t("ContactPage.aria_name")}
            className="w-full p-2 rounded bg-secondary dark:bg-secondary/40 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
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
            aria-label={t("ContactPage.aria_email")}
            className="w-full p-2 rounded bg-secondary dark:bg-secondary/40 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <p className="text-sm  text-red-600 font-extrabold" role="alert">
              {errors.user_email.message}
            </p>
          )}
          <Textarea
            placeholder={t("ContactPage.message_input")}
            className="w-full h-24 p-2 rounded bg-secondary dark:bg-secondary/40 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent transition resize-none"
            id="message"
            aria-label={t("ContactPage.aria_message")}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-sm  text-red-600 font-extrabold" role="alert">
              {errors.message.message}
            </p>
          )}
          <motion.button
            whileHover={
              !isLoading
                ? {
                    scale: 1.02,
                    boxShadow: "0px 10px 30px rgba(15, 23, 42, 0.25)",
                  }
                : {}
            }
            whileTap={!isLoading ? { scale: 0.96 } : {}}
            className="inline-flex justify-center items-center text-center font-bold bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-accent-foreground px-4 py-2 rounded-xl shadow-lg transition-all duration-300 ease-in-out gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            aria-label={isLoading ? t("ContactPage.aria_sending") : t("ContactPage.aria_send")}
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
