export interface TeacherListItemDTO {
  id: string;

  user: {
    id: string;
    nationalCode: string;
    firstName: string;
    lastName: string;
  };
}