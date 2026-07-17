import { apiClient } from "@/lib/apiClient";

const BASE = "/api/course/student";


export type StudentCourse = {
  id: string;
  lesson: string;
  professor: string;
  capacity: number;
  status: string;
};


export async function getStudentCourseList(): Promise<StudentCourse[]> {
  return await apiClient<StudentCourse[]>(
    `${BASE}/getStudentCourseList`
  );
}