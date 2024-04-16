interface User {
  id: string;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  my_courses: any[];
  username: string ;
  lastName: string;
  role: {
    id: number;
    name: string;
    __entity: string;
  };
  status: {
    id: number;
    name: string;
    __entity: string;
  };
  createdAt: string; 
  updatedAt: string;
  deletedAt: string | null; 
}
