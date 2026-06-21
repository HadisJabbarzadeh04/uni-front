"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";
import { setTokens } from "@/lib/auth";


export default function LoginPage() {
  const [nationalCode, setNationalCode] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin() {
  try {
    console.log("🔥 login started");

    const res = await login(
      Number(nationalCode),
      password
    );

    console.log("✅ login response:", res);

    localStorage.setItem(
      "accessToken",
      res.accessToken
    );

    localStorage.setItem(
      "refreshToken",
      res.refreshToken
    );

    console.log("🚀 redirecting...");

    router.push("/");
  } catch (err) {
    console.error("❌ LOGIN FAILED:", err);
  }
}

  return (
    <div>
      <input
        placeholder="National Code"
        value={nationalCode}
        onChange={(e) => setNationalCode(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}