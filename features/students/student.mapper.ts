import {getAccessToken,logout,setTokens,} from "./auth";

import { refreshAccessToken } from "@/services/authService";

const BASE_URL =
  "https://university-system-5wbo.onrender.com/api";

export async function apiClient(endpoint: string, options: RequestInit = {}) {
  const token = getAccessToken();

  console.log(
  "🌍 requesting:",
  `${BASE_URL}${endpoint}`
);

console.log("🔥 endpoint received:", endpoint);
console.log("🔥 base url:", BASE_URL);

  const res = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: token
          ? `Bearer ${token}`
          : "",
        ...(options.headers || {}),
      },
    }
  );

  const text = await res.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    console.error(
      "❌ Backend did not return JSON:",
      text
    );

    throw new Error(
      "Invalid server response (not JSON)"
    );
  }

  // token expired
  if (res.status === 401) {
    try {
      const newTokens =
        await refreshAccessToken();

      setTokens(
        newTokens.accessToken,
        newTokens.refreshToken
      );

      // retry request
      const retry = await fetch(
        `${BASE_URL}${endpoint}`,
        {
          ...options,
          headers: {
            "Content-Type":
              "application/json",

            Authorization: `Bearer ${newTokens.accessToken}`,

            ...(options.headers || {}),
          },
        }
      );

      const retryText =
        await retry.text();

      try {
        return JSON.parse(retryText);
      } catch {
        console.error(
          "❌ Retry response was not JSON:",
          retryText
        );

        throw new Error(
          "Invalid retry response"
        );
      }
    } catch {
      logout();

      if (
        typeof window !== "undefined"
      ) {
        window.location.href =
          "/login";
      }

      throw new Error(
        "Session expired"
      );
    }
  }

  return data;
}