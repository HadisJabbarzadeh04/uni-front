import { Day, TimeRange } from "@prisma/client";

export type EditCourseRequest = {
  number: number;
  capacity: number;
  examAt?: Date;
  times: {
    id?: string;
    day: Day;
    time: TimeRange;
    classRoomId: string;
  }[];
  id: string;
};