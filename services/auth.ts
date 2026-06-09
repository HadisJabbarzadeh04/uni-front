// import { api } from "./api/client";

// export interface LoginDTO {
//   accessToken: string;
//   refreshToken: string;
// }

// export function login(data: {
//   username: string;
//   password: string;
// }) {
//   return api<LoginDTO>("/login", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
// }

export interface LoginDTO {
  accessToken: string;
  refreshToken: string;
}

export function login() {
  return new Promise<LoginDTO>((resolve) => {
    setTimeout(() => {
      resolve({
        accessToken: "fake-token",
        refreshToken: "fake-refresh-token",
      });
    }, 500);
  });
}