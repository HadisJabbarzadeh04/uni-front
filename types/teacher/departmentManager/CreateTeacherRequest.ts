export type CreateTeacherRequest = {
  user: {
    firstName: string;
    lastName: string;
    fatherName: string;
    nationalCode: number;
    zipCode?: number;
    phoneNumber: number;
    birthData: Date;
    address?: {
      province: string;
      city: string;
      route: string;
    };
  };
  departmentGroups?: {
    departmentGroupId: string;
  }[];
};