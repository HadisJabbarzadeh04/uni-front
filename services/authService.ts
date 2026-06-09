import { LoginDTO } from "@/types/auth/auth";

const BASE_URL = "http://localhost:3000"; // change if your backend runs elsewhere

export async function login(email: string, password: string): Promise<LoginDTO> {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!res.ok) {
    throw new Error("Login failed");
  }

  return res.json();
}