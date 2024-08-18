import { ReactArr } from "react-array";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../ui/button";
// shadcn-ui
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../ui/form";
import { Input } from "../../ui/input";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  let arr: string[] = ["Accueil", "Nos Pôles", "À Propos", "Contact"];
  const socialLinks = [faFacebookF, faTwitter, faLinkedinIn];
  return (
    <footer className="bg-black mt-[10rem] py-[4rem] ">
      <section className="cc space-y-[3rem] max-lg:max-w-[30rem]">
        <article className="flex justify-between gap-x-[1rem] gap-y-[2rem] max-lg:flex-col ">
          <section className="w-[24rem] max-sm:w-full  space-y-[1.5rem] ">
            <h1>À propos</h1>
            <p className="text-[1.1rem] max-md:text-[1rem]">
              Crée en 2009, SARL ADEX Technology est spécialiste dans les
              technologies de l’information & de la communication à valeur
              ajoutée. Enregistrée sous le numéro de registre de commerce
              16/00-0980677 B09. ​
            </p>
          </section>
          <section className="gap-y-[1rem] flex justify-between w-full  lg:pl-[2rem] gap-x-[3rem] max-lg:flex-col ">
            <article className="space-y-[1.5rem]">
              <h1>Liens utiles</h1>
              <ul className="space-y-[1rem]">
                <ReactArr
                  arr={arr}
                  Component={(e) => (
                    <span className="text-gray-400 hover:text-white font-medium cursor-pointer">
                      {e.e}
                    </span>
                  )}
                />
              </ul>
            </article>
            <article className="w-[25rem] max-sm:w-full h-[14rem] flex flex-col justify-between">
              <div className="space-y-[1.5rem]">
                <h1>S'abonner à nos newsletters</h1>
                <FooterForm />
              </div>
              <div className="space-y-[1.5rem]">
                <h1>Suivez-nous</h1>
                <ul className="flex gap-[3rem]">
                  <ReactArr
                    arr={socialLinks}
                    Component={(e) => (
                      <FontAwesomeIcon
                        icon={e}
                        className="text-gray-500 hover:text-white cursor-pointer text-[1.2rem]"
                      />
                    )}
                  />
                </ul>
              </div>
            </article>
          </section>
        </article>
        <article className="grid place-items-center pt-[3rem] border-gray-600 border-t">
          Copyright © 2024, Tous droits réservés.
        </article>
      </section>
    </footer>
  );
}

const FooterForm = () => {
  const formSchema = z.object({
    email: z.string().email({
      message: "Username must be at least 2 characters.",
    }),
  });
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  className="rounded-md w-full h-[3rem] rounded-r-none "
                  placeholder="Votre Adresse Email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="rounded-l-none bg-mainRed h-[3rem] hover:bg-orange-600"
        >
          S'abonner
        </Button>
      </form>
    </Form>
  );
};
