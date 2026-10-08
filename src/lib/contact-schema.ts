import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  phone: z.string().trim().max(20).regex(/^[+()\d\s.-]+$/, "Please enter a valid phone number.").refine((value) => {
    const digits = value.replace(/\D/g, "");
    return digits.length >= 10 && digits.length <= 15;
  }, "Please enter a phone number with 10–15 digits."),
  email: z.union([z.literal(""), z.string().trim().email("Please enter a valid email address.").max(255)]),
  message: z.string().trim().max(1000),
  org: z.string().trim().max(150),
  for: z.enum(["Myself", "A loved one", "Other"]).optional(),
  role: z.enum(["Registered Nurse", "LPN", "Therapist (PT/OT/SLP)", "Home Health Aide", "Office / Other"]).optional(),
});

export type ContactInquiry = z.infer<typeof contactSchema>;