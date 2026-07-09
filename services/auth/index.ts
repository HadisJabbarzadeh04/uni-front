import { apiClient } from "@/lib/apiClient";
import { LoginDTO } from "@/types/auth/login";
import { getRefreshToken } from "@/lib/auth";

// ---------------- LOGIN ----------------
export async function login(
  nationalCode: number,
  password: string
): Promise<LoginDTO> {
  return await apiClient<LoginDTO>(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        nationalCode,
        password,
      }),
    }
  );
}

// ---------------- REFRESH TOKEN ----------------
export async function refreshAccessToken(): Promise<LoginDTO> {
  const refreshToken = getRefreshToken();

  return await apiClient<LoginDTO>(
    "/refresh-token",
    {
      method: "POST",
      body: JSON.stringify({
        refreshToken,
      }),
    }
  );
}