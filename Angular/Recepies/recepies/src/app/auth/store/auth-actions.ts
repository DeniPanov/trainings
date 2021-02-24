import { Action } from '@ngrx/store';

export const AUTHENTICATE_SUCCESS = '[Auth] Login';
export const AUTO_LOGIN = '[Auth] Auto Login';
export const AUTHENTICATE_START = '[Auth] Login Start';
export const AUTHENTICATE_FAIL = '[Auth] Login Fail';
export const CLEAR_ERROR = '[Auth] Clear Error';
export const SIGNUP_START = '[Auth] Signup Start';
export const LOGOUT = '[Auth] Logout';

export class AuthenticateSuccess implements Action {
  readonly type = AUTHENTICATE_SUCCESS;

  constructor(
    public paylaod: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class AuthenticateStart implements Action {
  readonly type = AUTHENTICATE_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class AuthenticateFail implements Action {
  readonly type = AUTHENTICATE_FAIL;
  constructor(public paylaod: string) {}
}

export class SignupStart implements Action {
  readonly type = SIGNUP_START;
  constructor(public payload: { email: string; password: string }) {}
}

export class ClearError implements Action {
  readonly type = CLEAR_ERROR;
}

export class AutoLogin implements Action {
  readonly type = AUTO_LOGIN;
}

export type AuthActions =
  | AuthenticateSuccess
  | Logout
  | AuthenticateStart
  | AuthenticateFail
  | SignupStart
  | ClearError
  | AutoLogin;
