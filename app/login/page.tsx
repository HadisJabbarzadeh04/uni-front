"use client";

import { useState } from "react";
import { login } from "@/services/authService";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      setError("");

      const result = await login(email, password);

      console.log("LOGIN SUCCESS:", result);

      // Save tokens (temporary solution)
      localStorage.setItem("accessToken", result.accessToken);
      localStorage.setItem("refreshToken", result.refreshToken);
    } catch (err) {
      setError("Login failed");
    }
  }

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border p-6 rounded-lg w-80">
        <h1 className="text-2xl font-bold mb-4">Login</h1>

        <input
          className="border p-2 w-full mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-2 w-full mb-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 mb-2">{error}</p>
        )}

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}