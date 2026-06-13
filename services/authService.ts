// export async function login(nationalCode: number, password: string) {
  
//   console.log("FAKE LOGIN:", nationalCode, password);

//   return {
//     accessToken: "fake-access-token",
//     refreshToken: "fake-refresh-token",
//   };
// }

// export async function getUserInfo(): Promise<any> {
//   const token = localStorage.getItem("accessToken");

//   const res = await fetch("http://localhost:5000/api/auth/web/getUserInfo", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const result = await res.json();

//   if (!result.ok || !result.data) {
//     throw new Error(result.message || "Failed to fetch user info");
//   }

//   return result.data;
// }

export async function login(nationalCode: number, password: string) {
  return {
    accessToken: "mock_access_token",
    refreshToken: "mock_refresh_token",
  };
}

export async function getUserInfo() {
  return {
    id: 1,
    name: "Test User",
    role: "student",
  };
}