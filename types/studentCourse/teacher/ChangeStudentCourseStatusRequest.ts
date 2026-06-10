import { StudentCourseStatus } from "@prisma/client";

export type ChangeStudentCourseStatusRequest = {
  id: string;
  status: StudentCourseStatus;
};