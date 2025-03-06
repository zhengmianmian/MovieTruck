import { z } from "zod";

// Define Zod schema of Login for form validation
export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberme: z.boolean().default(false),
});

export type LoginForm = z.infer<typeof loginSchema>;
