import { apiClient } from "@/lib/apiClient";

const BASE =
  "/api/teacher/departmentManager";

// ======================
// GET TEACHER LIST
// ======================

export async function getTeacherList() {
  return await apiClient(
    `${BASE}/getTeacherList`
  );
}

// ======================
// GET TEACHER DETAIL
// ======================

export async function getTeacherDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getTeacherDetail/${id}`
  );
}

// ======================
// CREATE TEACHER
// ======================

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

// ======================
// EDIT TEACHER
// ======================

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

// ======================
// DELETE TEACHER
// ======================

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