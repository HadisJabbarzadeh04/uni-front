export interface StudentDetailDTO {
  id: string;
  status: string;
  studyMode: string;

  entranceSemester: {
    year: number;
    isFirstSemester: boolean;
  };

  user: {
    firstName: string;
    lastName: string;
    fatherName: string;
    phoneNumber: string;
    nationalCode: string;
    zipCode: string | null;

    address: {
      province: string;
      city: string;
      router: string;
    } | null;
  };
}