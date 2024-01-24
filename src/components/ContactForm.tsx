import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";
// import { useToast } from "./ui/use-toast";

export default function ContactForm() {
  // const { toast } = useToast();
  return (
    <Card className="rounded-lg shadow-lg bg-zinc-50 dark:bg-slate-900">
      <CardContent className="p-0">
        <form className="flex flex-col  mx-auto p-4 ">
          <Input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />

          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />

          <Textarea
            placeholder="Type your message here"
            className="w-full h-20 p-2 mb-4 bg-zinc-200 dark:bg-slate-700 rounded"
          />
        </form>
      </CardContent>
      <CardFooter className="text-center justify-center px-4">
        <Button
          className="bg-blue-500 text-white w-full p-2 rounded font-bold hover:bg-blue-600 transition"
          onClick={() =>
            toast({
              title: "🥳 Sua mensagem foi enviada com sucesso!! ",
            })
          }
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}
