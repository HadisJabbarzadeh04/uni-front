"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken } from "@/lib/auth";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    if (!getAccessToken()) {
      router.push("/login");
    }
  }, []);

  return <h1>Dashboard</h1>;
}