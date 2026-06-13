// import { LoginDTO } from "@/types/auth/login";
// import { ApiResponse } from "@/types/api";

// const BASE_URL = "http://localhost:5000/api/auth/web";

// export async function login(
//   nationalCode: number,
//   password: string
// ): Promise<LoginDTO> {
//   const res = await fetch(`${BASE_URL}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       nationalCode,
//       password,
//     }),
//   });

//   const result: ApiResponse<LoginDTO> = await res.json();

//   if (!result.ok || !result.data) {
//     throw new Error(result.message || "Login failed");
//   }

//   return result.data;
// }


export async function login(nationalCode: number, password: string) {
  console.log("FAKE LOGIN:", nationalCode, password);

  return {
    accessToken: "fake-access-token",
    refreshToken: "fake-refresh-token",
  };
}