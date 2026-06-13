"use client";

import { useState } from "react";
import { login } from "@/services/authService";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [nationalCode, setNationalCode] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  async function handleLogin() {
    try {
      if (nationalCode.length !== 10) {
        alert("National code must be 10 digits");
        return;
      }

      const res = await login(
        Number(nationalCode),
        password
      );

      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);

      router.push("/dashboard");
    } catch (err) {
      console.log(err);
      console.log("LOGIN FAILED");
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