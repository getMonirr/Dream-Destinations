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

export const requestValidationSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    comment: z
      .string({
        required_error: "Comment is required at least 10 characters",
      })
      .min(10),
    agree: z.boolean({
      required_error: "You must agree to the terms and conditions",
    }),
  })
  .refine((data) => data.agree === true, {
    message: "You must agree to the terms and conditions",
    path: ["agree"],
  });
