import { StudyMode } from "@prisma/client";

export type CreateStudentRequest = {
  user: {
    firstName: string;
    lastName: string;
    fatherName: string;
    nationalCode: number;
    zipCode?: number;
    phoneNumber: number;
    birthData: Date;
    address?: {
      province: string;
      city: string;
      route: string;
    };
  };
  studyMode: StudyMode;
};