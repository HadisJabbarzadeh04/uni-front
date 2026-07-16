import { apiClient } from "@/lib/apiClient";

const BASE = "/api/course/teacher";

export async function getTeacherCourseList() : Promise<any[]>{
  return await apiClient(
    `${BASE}/getCourseList`
  );
}