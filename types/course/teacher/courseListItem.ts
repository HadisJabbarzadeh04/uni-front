export interface CourseListItemDTO {
  id: string;
  number: number;
  capacity: number;
  remaining: number;
  examAt?: string | null;
  cancelled: boolean;
  lessonId: string;

  lesson: {
    title: string;
  };

  times: {
    id: string;
    day: string;
    time: string;
    courseId: string;
    classRoomId: string;
    classRoom: {
      number: number;
    };
  }[];

  semesterId: string;
  semester: {
    year: number;
    isFirstSemester: boolean;
  };
}