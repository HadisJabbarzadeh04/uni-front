"use client";

import { useState } from "react";
import { login } from "@/services/auth";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await login({ username, password });

      console.log("LOGIN SUCCESS:", res);

      // temporary: store token
      localStorage.setItem("token", res.accessToken);
    } catch (err) {
      console.log("LOGIN FAILED", err);
    }
  }

  return (
    <div>
      <input
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}