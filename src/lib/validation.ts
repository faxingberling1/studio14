import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .email("Please enter a valid email address."),
  company: z
    .string()
    .max(100, "Company name must be 100 characters or fewer.")
    .optional()
    .or(z.literal("")),
  service: z.enum(
    [
      "Website Design & Development",
      "Video Editing",
      "Marketing",
      "Business Automations",
      "Multiple Services / Full Partnership",
    ],
    {
      errorMap: () => ({ message: "Please select a service you are interested in." }),
    }
  ),
  projectDetails: z
    .string()
    .min(15, "Please share a few details about your project or idea (at least 15 characters).")
    .max(2000, "Project details must be under 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

