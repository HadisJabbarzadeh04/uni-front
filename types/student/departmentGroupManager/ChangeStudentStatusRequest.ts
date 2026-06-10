import { StudentStatus } from "@prisma/client";

export type ChangeStudentStatusRequest = {
  id: string;
  status: StudentStatus;
};