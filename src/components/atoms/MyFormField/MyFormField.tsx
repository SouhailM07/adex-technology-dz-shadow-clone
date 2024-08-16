// shadcn-ui
import { inputs_t } from "../../../types";
import { FormControl, FormField, FormItem, FormMessage } from "../../ui/form";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";

export default function MyFormField({
  form,
  name,
  formType = "input",
  placeholder,
}: inputs_t) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={`${formType === "textarea" && " h-full "}`}>
          <FormControl>
            <>
              {formType == "input" ? (
                <Input placeholder={placeholder} {...field} />
              ) : formType == "textarea" ? (
                <Textarea
                  className="h-full"
                  placeholder={placeholder}
                  {...field}
                />
              ) : null}
            </>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
