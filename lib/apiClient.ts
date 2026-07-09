const BASE_URL = "https://university-system-5wbo.onrender.com/api";

function getToken() {
  return localStorage.getItem("accessToken");
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
      ...options.headers,
    },
  });

  const data = await res.json();

  if (!res.ok || !data.ok) {
    throw new Error(data.message || "API Error");
  }

  return data.data as T;
}