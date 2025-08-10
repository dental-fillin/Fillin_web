import { z } from "zod";

const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

const comEmailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com)$/i;

const phoneRegex = /^\+\d{7,19}$/;

export const ContactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .regex(nameRegex, "Name can only contain letters and spaces"),
  email: z
    .string()
    .trim()
    .email("Invalid email format")
    .regex(/\.com$/i, "Email must end with .com")
    .regex(comEmailRegex, "Email must be a valid .com address"),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Phone must start with + and have 7–19 digits after +")
    .optional()
    .or(z.literal("").transform(() => undefined)),
  subject: z
    .string()
    .trim()
    .max(150, "Subject must be at most 150 characters")
    .optional(),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(1000, "Message must be at most 1000 characters"),
});

export const JobOpeningSchema = z.object({
  job_title: z.string()
    .trim()
    .min(1, "Job title is required")
    .max(150),

  location: z.string()
    .trim()
    .max(150)
    .optional(),

  employment_type: z.string()
    .trim()
    .max(50)
    .optional()
    .pipe(
      z.enum([
        "full-time",
        "part-time",
        "contract",
        "temporary",
        "internship",
        "freelance",
        "other",
      ]).optional()
    ),

  duration: z.string()
    .trim()
    .max(100)
    .optional(),

  company_name: z.string()
    .trim()
    .min(1, "Company name is required")
    .max(150),

  company_description: z.string()
    .trim()
    .max(2000)
    .optional(),

  role_summary: z.string()
    .trim()
    .max(2000)
    .optional(),

  responsibilities: z.string()
    .trim()
    .max(5000)
    .optional(),

  requirements: z.string()
    .trim()
    .max(5000)
    .optional(),

  nice_to_have: z.string()
    .trim()
    .max(5000)
    .optional(),

  benefits: z.string()
    .trim()
    .max(5000)
    .optional(),

  salary_range: z.string()
    .trim()
    .max(100)
    .optional(),

  contact_email: z.string()
    .trim()
    .min(1, "Contact email is required")
    .email("Invalid email address")
    .max(254),

  equal_opportunity_stmt: z.string()
    .trim()
    .max(2000)
    .optional(),
});