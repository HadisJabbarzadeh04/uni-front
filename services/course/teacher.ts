import { apiClient } from "@/lib/apiClient";

const BASE = "/api/course/teacher";

export async function getTeacherCourseList() {
  return await apiClient(
    `${BASE}/getTeacherCourseList`
  );
}