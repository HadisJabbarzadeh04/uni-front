import { apiClient } from "@/lib/apiClient";

const BASE =
  "/api/course/departmentGroupManager";


// get course list
export async function getCourseList() {
  return await apiClient(
    `${BASE}/getCourseList`
  );
}

// get course detail
export async function getCourseDetail(
  id: string
) {
  return await apiClient(
    `${BASE}/getCourseDetail/${id}`
  );
}

// create course
export async function createCourse(
  data: any
) {
  return await apiClient(
    `${BASE}/createCourse`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}

// edit course
export async function editCourse(
  id: string,
  data: any
) {
  return await apiClient(
    `${BASE}/editCourse/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(data),
    }
  );
}

// delete course
export async function deleteCourse(
  id: string
) {
  return await apiClient(
    `${BASE}/deleteCourse/${id}`,
    {
      method: "DELETE",
    }
  );
}

// cancel course
export async function cancelCourse(
  id: string
) {
  return await apiClient(
    `${BASE}/cancelCourse/${id}`,
    {
      method: "PUT",
    }
  );
}

// ============== student course list ================
export async function getStudentCourseList() {
  return await apiClient(
    "/api/course/student/getCourseList"
  );
}

// ============== teacher course list ================
export async function getTeacherCourseList() {
  return await apiClient(
    "/api/course/teacher/getCourseList"
  );
}