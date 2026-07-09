import { apiClient } from "@/lib/apiClient";

const BASE = "/api/lesson/departmentGroupManager";


export async function getLessonList() {
  return await apiClient(
    `${BASE}/getLessonList`
  );
}


export async function getLessonDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getLessonDetail/${id}`
  );
}

export async function createLesson(
  data: any
) {
  return await apiClient(
    `${BASE}/createLesson`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

export async function editLesson(
  id: string,
  data: any
) {
  return await apiClient(
    `${BASE}/editLesson/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}


export async function deleteLesson(
  id: string
) {
  return await apiClient(
    `${BASE}/deleteLesson/${id}`,
    {
      method: "DELETE",
    }
  );
}