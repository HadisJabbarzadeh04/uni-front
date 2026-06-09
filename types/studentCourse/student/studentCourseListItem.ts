export interface StudentCourseListItemDTO {
  id: string;
  score: number | null;
  status: string;

  course: {
    id: string;
    number: number;
    canceled: boolean;
    examAt: string | null;

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
  };
}