export interface StudentCourseDetailDTO {
  id: string;

  student: {
    id: string;
    studyMode: string;
    status: string;

    user: {
      firstName: string;
      lastName: string;
    };
  };

  score?: number | null;
  status: string;
}