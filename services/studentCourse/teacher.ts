import { apiClient } from "@/lib/apiClient";

const BASE = "/api/studentCourse/teacher";

export async function getTeacherStudentCourseList() :  Promise<any[]>{
  return await apiClient(
    `${BASE}/getStudentCourseList`
  );
}

export async function getTeacherStudentCourseDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getStudentCourseDetail/${id}`
  );
}

export async function changeStudentCourseStatus(
  data: any
) {
  return await apiClient(
    `${BASE}/changeStudentCourseStatus`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}

export async function editScore(
  data: any
) {
  return await apiClient(
    `${BASE}/editScore`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}