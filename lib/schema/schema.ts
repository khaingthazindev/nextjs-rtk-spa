import * as z from "zod";

export const MovieFormData = z.object({
  title: z.string({
    error: (iss) => iss.input === undefined || '' ? "Field is required" : "Invalid input."
  }).min(1, { error: "Title required!" }),
  year: z.coerce.number<number>().min(1, "Year is required."),
  director: z.object({
    name: z.string(),
    phoneNo: z.string(),
  })
});
export type MovieFormSchema = z.infer<typeof MovieFormData>;

export const LoginFormData = z.object({
  username: z.string().min(1, "Username is required."),
  password: z.string().min(1, "Password is required."),
});
export type LoginFormSchema = z.infer<typeof LoginFormData>;

export const ReviewFormData = z.object({
  rating: z.number().min(1, { error: "Rating is required." }),
  review: z.string().min(1, { error: "Review is required." }),
});
export type ReviewFormSchema = z.infer<typeof ReviewFormData>;