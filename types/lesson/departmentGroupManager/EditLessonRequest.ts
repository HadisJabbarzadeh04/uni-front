import { LessonType } from "@prisma/client";

export type EditLessonRequest = {
  id: string;
  title: string;
  coefficient: number;
  departmentGroupId: string;
  lessonType: LessonType;
};