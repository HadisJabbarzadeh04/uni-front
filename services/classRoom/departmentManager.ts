import { apiClient } from "@/lib/apiClient";

const BASE = "/api/classRoom/departmentManager";


export async function getClassRoomList() {
  return await apiClient(
    `${BASE}/getClassRoomList`
  );
}


export async function createClassRoom(
  data: any
) {
  return await apiClient(
    `${BASE}/createClassRoom`,
    {
      method: "POST",
      body: JSON.stringify(data),
    }
  );
}


export async function deleteClassRoom(
  id: string
) {
  return await apiClient(
    `${BASE}/deleteClassRoom/${id}`,
    {
      method: "DELETE",
    }
  );
}
