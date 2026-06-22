import { apiClient } from "@/lib/apiClient";

export async function getCourseList() {
  const res = await apiClient(
    "/course/departmentGroupManager/getCourseList",
    {
      method: "GET",
    }
  );

  return res;
}