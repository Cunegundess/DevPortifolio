import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
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

  function HandleFormFields(data: contactFormFieldsType) {
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
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    });
    console.log(data);
  }

  return (
    <Card className="rounded-lg shadow-lg bg-zinc-50 dark:bg-zinc-900">
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
            className="w-full p-2  bg-zinc-200 dark:bg-zinc-700 rounded"
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
            className="w-full p-2  bg-zinc-200 dark:bg-zinc-700 rounded"
            {...register("user_email", { required: true })}
          />
          {errors.user_email && (
            <p className="text-sm  text-red-600 font-extrabold">
              {errors.user_email.message}
            </p>
          )}
          <Textarea
            placeholder={t("ContactPage.message_input")}
            className="w-full h-20 p-2  bg-zinc-200 dark:bg-zinc-700 rounded"
            id="message"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="text-sm  text-red-600 font-extrabold">
              {errors.message.message}
            </p>
          )}
          <Button
            className="bg-blue-500 text-white w-full p-4 rounded font-bold hover:bg-blue-600 transition"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
