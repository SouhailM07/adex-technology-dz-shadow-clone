import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
// shadcn-ui
import { Form } from "../../ui/form";
import { inputs_t } from "../../../types";
import MyFormField from "../../atoms/MyFormField/MyFormField";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "first name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "last name must be at least 2 characters.",
  }),
  phone: z.number({ message: "phone number is required" }),
  email: z.string().email({ message: "email is required" }),
  msg: z.string({ message: "message must be at least 10 words" }),
});

export default function ContactForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  let inputs: inputs_t[] = [
    { name: "firstName", placeholder: "Nom" },
    { name: "lastName", placeholder: "Prenom" },
    { name: "phone", placeholder: "Numero de telephone" },
    { name: "email", placeholder: "Adresse E-Mail" },
  ];
  return (
    <section className="h-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <ul className="text-black grid-cols-2 grid-rows-[1fr_1fr_4fr] grid gap-[1rem] h-[20rem]">
            {inputs.map((e, i) => (
              <li key={i}>
                <MyFormField form={form} {...e} />
              </li>
            ))}
            <li className="col-span-full h-full">
              <MyFormField
                form={form}
                name="msg"
                placeholder="Votre message"
                formType="textarea"
              />
            </li>
          </ul>
          <Button
            type="submit"
            className="bg-mainRed flexCenter w-[13rem] h-[4rem] hover:bg-red-500 rounded-lg"
          >
            Envoyer
          </Button>
        </form>
      </Form>
    </section>
  );
}
