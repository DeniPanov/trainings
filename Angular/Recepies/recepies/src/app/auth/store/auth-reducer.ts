import { User } from '../user-model';
import * as AuthActionTypes from './auth-actions';
import { authState } from './auth-state';

const initialState: authState = {
  user: null,
  authError: null,
  laoding: false,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes.AuthActions
) {
  switch (action.type) {
    case AuthActionTypes.AUTHENTICATE_SUCCESS:
      const newUser = new User(
        action.paylaod.email,
        action.paylaod.userId,
        action.paylaod.token,
        action.paylaod.expirationDate
      );

      return {
        ...state,
        authError: null,
        user: newUser,
        laoding: false,
      };

    case AuthActionTypes.LOGOUT:
      return {
        ...state,
        user: null,
        laoding: false,
      };

    case AuthActionTypes.AUTHENTICATE_START:
    case AuthActionTypes.SIGNUP_START:
      return {
        ...state,
        authError: null,
        laoding: true,
      };

    case AuthActionTypes.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.paylaod,
        laoding: false,
      };

      case AuthActionTypes.CLEAR_ERROR:
        return {
          ...state,
          authError: null
        }

    default:
      return state;
  }
}
