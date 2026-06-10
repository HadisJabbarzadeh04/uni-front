export type EditDepartmentGroupRequest = {
  id: string;
  title: string;
  manager?: {
    user: {
      nationalCode: string;
    };
  };
};