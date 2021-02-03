import { resolve } from "dns";

export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}