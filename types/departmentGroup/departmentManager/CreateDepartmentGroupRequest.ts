export type CreateDepartmentGroupRequest = {
  title: string;
  manager?: {
    user: {
      nationalCode: string;
    };
  };
};