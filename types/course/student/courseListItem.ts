export interface CourseListItemDTO {
  id: string;
  number: number;
  canceled: boolean;
  examAt: string | null;
  remaining: number;

  lesson: {
    id: string;
    title: string;
    coefficient: number;
    lessonType: string;
  };

  times: {
    day: string;
    time: string;
    classRoom: {
      number: number;
    };
  }[];

  teacher: {
    user: {
      firstName: string;
      lastName: string;
    };
  };
}