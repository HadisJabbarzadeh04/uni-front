export interface StudentListItemDTO {
  id: string;
  status: string;
  studyMode: string;

  user: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
}