import { object, string } from "yup"

export const loginSchema = object({
  email: string().email().required("Email is required"),
  password: string()
    .min(8, "Minimum of 8 characters")
    .max(50, "Maximum of 50 characters")
    .required("Password is required"),
})