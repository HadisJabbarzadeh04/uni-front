import { apiClient } from "@/lib/apiClient";

export async function getTeacherList() {
  const res = await apiClient(
    "/teacher/departmentGroupManager/getTeacherList",
    {
      method: "GET",
    }
  );

  return res;
}