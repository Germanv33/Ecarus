import { makeAutoObservable, observable } from "mobx";
import UserModel from "../types/UserModel";

export class UserStore {
  loginModalIsOpen: boolean = false;
  sidebarIsOpen: boolean = false;

  users: Array<UserModel> = [
    {
      email: "gerich@gmail.com",
      password: "123123",
      location: "Kazan",
      id: 1,
    },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  openSideBar = () => {
    this.sidebarIsOpen = true;
  };

  closeSideBar = () => {
    this.sidebarIsOpen = false;
  };

  checkUser(email: string, password: string) {
    return this.users.find(
      (user) => user.email === email && user.password === password
    );
  }

  checkUserByEmail(email: string) {
    return this.users.find((user) => user.email === email);
  }
}

export default new UserStore();
