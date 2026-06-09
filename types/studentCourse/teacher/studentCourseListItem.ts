export interface StudentCourseListItemDTO {
  id: string;

  student: {
    user: {
      firstName: string;
      lastName: string;
    };
  };

  score?: number | null;
  status: string;
}