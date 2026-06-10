import { Day, TimeRange } from "@prisma/client";

export type CreateCourseRequest = {
  number: number;
  capacity?: number;
  examAt?: Date;
  lessonId: string;
  teacherId: string;
  times: {
    day: Day;
    time: TimeRange;
    classRoomId: string;
  }[];
};