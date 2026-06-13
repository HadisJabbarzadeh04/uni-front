export type User = {
  id: number;
  name: string;
  role: string;
};

let cachedUser: User | null = null;

export function setUser(user: User) {
  cachedUser = user;
}

export function getUser() {
  return cachedUser;
}