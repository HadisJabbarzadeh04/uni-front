export interface CourseDetailDTO {
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

  teacherId: string;
  teacher: {
    user: {
      firstName: string;
      lastName: string;
    };
  };

  semesterId: string;
  semester: {
    year: number;
    isFirstSemester: boolean;
  };
}