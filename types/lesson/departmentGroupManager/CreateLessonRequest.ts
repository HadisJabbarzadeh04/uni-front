import { LessonType } from "@prisma/client";

export type CreateLessonRequest = {
  title: string;
  coefficient: number;
  lessonType: LessonType;
};