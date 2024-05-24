import { z } from "zod";

export const registerValidationSchema = z
  .object({
    userName: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(8).max(255),
    confirmPassword: z.string().min(8).max(255),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password should be same",
    path: ["confirmPassword"],
  });
