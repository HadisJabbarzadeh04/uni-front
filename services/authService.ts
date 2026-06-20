import { apiClient } from "@/lib/apiClient";
import { LoginDTO } from "@/types/auth/login";
import { ApiResponse } from "@/types/api";

export async function login(
  nationalCode: number,
  password: string
): Promise<LoginDTO> {

  const result: ApiResponse<LoginDTO> = await apiClient(
    "/api/auth/web/login",
    {
      method: "POST",
      body: JSON.stringify({
        nationalCode,
        password,
      }),
    }
  );

  if (!result.ok || !result.data) {
    throw new Error(result.message || "Login failed");
  }

  return result.data;
}