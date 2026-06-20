import { getAccessToken } from "./auth";

const BASE_URL = "https://university-system-5wbo.onrender.com";

export async function apiClient(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = getAccessToken();

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,

    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
  });

  const data = await res.json();

  return data;
}