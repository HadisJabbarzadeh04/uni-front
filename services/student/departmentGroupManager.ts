import { apiClient } from "@/lib/apiClient";

const BASE = "/api/student/departmentGroupManager";


export async function getStudentList() {
  return await apiClient(
    `${BASE}/getStudentList`
  );
}


export async function getStudentDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getStudentDetail/${id}`
  );
}


export async function createStudent(
  data: any
) {
  return await apiClient(
    `${BASE}/createStudent`,
    {
      method: "GET", // ⚠️ backend bug but we follow it
    }
  );
}


export async function editStudent(
  id: string,
  data: any
) {
  return await apiClient(
    `${BASE}/editStudent/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}


export async function changeStudentStatus(
  data: any
) {
  return await apiClient(
    `${BASE}/changeStudentStatus`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}