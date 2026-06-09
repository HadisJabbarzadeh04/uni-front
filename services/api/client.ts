const BASE_URL = "http://localhost:3000";

export async function api<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(BASE_URL + url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error("API request failed");
  }

  return res.json();
}