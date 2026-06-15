// //todo
// async function apiFetch(url, options) {
//   let res = await fetch(url, options);

//   if (res.status === 401) {
//     // 1. call refresh
//     const refreshed = await refreshToken();

//     // 2. save new access token
//     setTokens(refreshed.data);

//     // 3. retry original request
//     res = await fetch(url, {
//       ...options,
//       headers: {
//         ...options.headers,
//         Authorization: `Bearer ${refreshed.data.accessToken}`,
//       },
//     });
//   }

//   return res;
// }

const BASE_URL = "https://university-system-5wbo.onrender.com/api";

function getToken() {
  return localStorage.getItem("accessToken");
}

export async function apiFetch<T>(
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