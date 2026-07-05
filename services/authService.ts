import { apiClient } from "@/lib/apiClient";
import { LoginDTO } from "@/types/auth/login";
import { ApiResponse } from "@/types/api";
import { getRefreshToken } from "@/lib/auth";

// ---------------- LOGIN ----------------
export async function login(
  nationalCode: number,
  password: string
): Promise<LoginDTO> {

  console.log("📡 sending login request...");

  const result = await apiClient(
    "/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        nationalCode,
        password,
      }),
    }
  );

  console.log("📥 raw result:", result);

  if (!result.ok || !result.data) {
    console.error("❌ backend error:", result);

    throw new Error(
      result.message || "Login failed"
    );
  }

  return result.data;
}

// ---------------- REFRESH TOKEN ----------------
export async function refreshAccessToken() {
  const refreshToken = getRefreshToken();

  const result: ApiResponse<LoginDTO> = await apiClient("/refresh-token", {
    method: "POST",
    body: JSON.stringify({
      refreshToken,
    }),
  });

  if (!result.ok || !result.data) {
    throw new Error("Refresh failed");
  }

  return result.data;
}

export async function getStudentList() {
  return {
    data: [
      {
        id: 1,
        firstName: "Ali",
        lastName: "Ahmadi",
        studentNumber: "401123456",
      },

      {
        id: 2,
        firstName: "Sara",
        lastName: "Mohammadi",
        studentNumber: "401654321",
      },
    ],
  };
}