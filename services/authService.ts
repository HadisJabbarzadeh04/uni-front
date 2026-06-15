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