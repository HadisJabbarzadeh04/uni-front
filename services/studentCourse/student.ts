import { apiClient } from "@/lib/apiClient";

const BASE = "/api/studentCourse/student";


export async function createStudentCourse(
  data: any
) {
  return await apiClient(
    `${BASE}/createStudentCourse`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}


export async function getStudentCourseList(
  query?: any
) {
  const queryString = query
    ? "?" +
      new URLSearchParams(
        query
      ).toString()
    : "";

  return await apiClient(
    `${BASE}/getStudentCourseList${queryString}`
  );
}