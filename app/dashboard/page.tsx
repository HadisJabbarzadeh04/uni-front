"use client";

import { useEffect, useState } from "react";
import { getUserInfo } from "@/services/authService";

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    async function loadUser() {
      try {
        const data = await getUserInfo();
        setUser(data);
      } catch (err) {
        console.log("Failed to load user info");
      }
    }

    loadUser();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>Loading user...</p>
      )}
    </div>
  );
}