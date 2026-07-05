import { apiClient } from "@/lib/apiClient";

const BASE = "/api/teacher/departmentManager";


export async function getTeacherList() {
  return await apiClient(
    `${BASE}/getTeacherList`
  );
}

export async function getTeacherDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getTeacherDetail/${id}`
  );
}


export async function createTeacher(
  data: any
) {
  return await apiClient(
    `${BASE}/createTeacher`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function editTeacher(
  data: any
) {
  return await apiClient(
    `${BASE}/editTeacher`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}

export async function deleteTeacher(
  id: string
) {
  return await apiClient(
    `${BASE}/deleteTeacher/${id}`,
    {
      method: "DELETE",
    }
  );
}