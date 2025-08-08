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
    .or(z.literal("").transform(() => undefined)), // treat empty string as undefined
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

