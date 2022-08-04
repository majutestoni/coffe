export class Users {
  id?: string;
  userName: string;
  password: string;
  email?: string
  fullName?: string

  constructor(id: string, userName: string, password: string) {
    this.id = id;
    this.userName = userName;
    this.password = password;
  }
}
