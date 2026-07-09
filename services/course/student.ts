import { apiClient } from "@/lib/apiClient";

const BASE = "/api/course/student";

export async function getStudentCourseList() {
  return await apiClient(
    `${BASE}/getStudentCourseList`
  );
}