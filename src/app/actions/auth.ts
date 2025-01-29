"use server"

import { cookies } from "next/headers"

export type AuthState = {
  message: string
  success: boolean
} | null

export async function handleLogin(prevState: AuthState, formData: FormData): Promise<AuthState> {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // In a real application, you would validate the input and check against a database
  if (email && password) {
    // Simulate successful login
    cookies().set("user", email, { maxAge: 60 * 60 * 24 * 7 }) // 1 week
    return { success: true, message: "Logged in successfully" }
  }

  return { success: false, message: "Invalid email or password" }
}

export async function handleSignup(prevState: AuthState, formData: FormData): Promise<AuthState> {
  // Simulate a delay to mimic server processing
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirmPassword") as string

  // In a real application, you would validate the input and check against a database
  if (email && password && confirmPassword) {
    if (password !== confirmPassword) {
      return { success: false, message: "Passwords do not match" }
    }
    // Simulate successful sign up
    return { success: true, message: "Account created successfully" }
  }

  return { success: false, message: "Invalid input" }
}

