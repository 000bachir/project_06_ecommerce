import { z } from "zod"; 


export const formSchema = z.object({
    email : z
    .string()
    .email("Invalid email address")
    .min(5,"Email must be at least 5 characters long")
    .max(50 , "Email must be less than 50 characters"),
    password : z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(100, "Password must be less than 100 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});


export type FormSchema = typeof formSchema