export interface ScoreAppealListItemDTO {
  id: string;

  studentCourse: {
    course: {
      lesson: {
        title: string;
        coefficient: number;
      };
      teacher: {
        user: {
          firstName: string;
          lastName: string;
        };
      };
    };
    score: string;
    status: string;
  };

  requestionMessage: string;
  responseMessage: string | null;
}