import * as z from "zod";

export const MovieFormData = z.object({
  title: z.string({
    error: (iss) => iss.input === undefined || '' ? "Field is required" : "Invalid input."
  }).min(1, { error: "Title required!" }),
  year: z.coerce.number(),
  director: z.object({
    name: z.string(),
    phoneNo: z.string(),
  })
});
export type MovieFormSchema = z.infer<typeof MovieFormData>;