export interface Login {
  email: string;
  password: string | null;
}
export interface User {
  email: string;
  isDefaultAdmin:boolean;
  token: string;
}
