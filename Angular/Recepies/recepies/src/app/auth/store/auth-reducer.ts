import { User } from '../user-model';
import * as AuthActionTypes from './auth-actions';
import { authState } from './auth-state';

const initialState: authState = {
  user: null,
};

export function authReducer(
  state = initialState,
  action: AuthActionTypes.AuthActions
) {
    switch (action.type) {

        case AuthActionTypes.LOGIN:
        const newUser = new User(
            action.paylaod.email,
            action.paylaod.userId,
            action.paylaod.token,
            action.paylaod.expirationDate,
        )    
        
         return {
            ...state,
            user: newUser
         }

         case AuthActionTypes.LOGOUT:            
         return {
            ...state,
            user: null
         }
    
        default:
            return state;
    }
}
