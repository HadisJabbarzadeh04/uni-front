export type EditTeacherRequest = {
  id: string;
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