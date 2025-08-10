import { z } from 'zod';

// Define required environment variables and constraints
const EnvSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(20),
  SESSION_PASSWORD: z.string().min(32, 'SESSION_PASSWORD must be at least 32 characters'),
  ADMIN_USERNAME: z.string().min(1),
  ADMIN_PASSWORD: z.string().min(6),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

const parsed = EnvSchema.safeParse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SESSION_PASSWORD: process.env.SESSION_PASSWORD,
  ADMIN_USERNAME: process.env.ADMIN_USERNAME,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  NODE_ENV: process.env.NODE_ENV,
});

if (!parsed.success) {
  console.error('Environment validation failed:', parsed.error.flatten().fieldErrors);
  throw new Error('Invalid environment configuration');
}

export const env = parsed.data;
