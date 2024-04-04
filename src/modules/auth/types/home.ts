export interface CreateCategory {
  email: string;
  password: string;
}

export interface RegisterBody {
  username: string;
  password: string;
  email: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}
