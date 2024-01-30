import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Oops! Looks like you forgot to tell me your name 😅"),
  email: z
    .string()
    .email(`Hmm... This email looks weird 🤔 Are you sure that's your email?`),
  message: z.string().min(1, "Your message is empty... 📝"),
});
type contactFormFieldsType = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<contactFormFieldsType>({
    resolver: zodResolver(contactFormSchema),
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleFormFields(data: contactFormFieldsType) {
    setFormSubmitted(!formSubmitted);
    toast("🥳 Your message was sent!! ", {
      description: "Thank you, I'll respond right away",
      duration: 2000,
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    });
    console.log(data);
  }

  return (
    <Card className="rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900">
      <CardContent className="p-0">
        <form
          onSubmit={handleSubmit(handleFormFields)}
          className="flex flex-col mx-auto p-4 gap-2"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2  bg-gray-200 dark:bg-gray-700 rounded"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-sm font-bold text-red-600">
              {errors.name.message}
            </p>
          )}
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2  bg-gray-200 dark:bg-gray-700 rounded"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-sm  text-red-600 font-extrabold">
              {errors.email.message}
            </p>
          )}
          <Textarea
            placeholder="Type your message here"
            className="w-full h-20 p-2  bg-gray-200 dark:bg-gray-700 rounded"
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
