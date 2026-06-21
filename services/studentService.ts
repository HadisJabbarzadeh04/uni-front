import { apiClient } from "@/lib/apiClient";

export async function getStudentList() {
  const res = await apiClient(
    "/student/departmentGroupManager/getStudentList",
    {
      method: "GET",
    }
  );

  return res;
}