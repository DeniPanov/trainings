import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app-main.store';
import * as AuthActions from "./store/auth-actions";

export const apiKey = 'AIzaSyAMJMN1pId_EJEN1R4zeexKPShOSiyP6yA';
export const register =
  'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
export const login =
  'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenExpTimer: any;

  constructor(
    private store: Store<AppState>
  ) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.Logout());
    }, expirationDuration);
  }

  clearLogoutTimer() {
    if (this.tokenExpTimer) {
      clearTimeout(this.tokenExpTimer);
      this.tokenExpTimer = null;
    }
  }
}
