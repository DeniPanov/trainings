import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user-model';

export const FEATURE_NAME = 'auth';

export interface authState {
  user: User;
  authError: string;
  laoding: boolean;
}

export namespace selectors {
  const selectAuthState = createFeatureSelector<authState>(FEATURE_NAME);

  export const selectUser = createSelector(
    selectAuthState,
    (state: authState) => state?.user
  );

  export const selectAuthError = createSelector(
    selectAuthState,
    (state: authState) => state?.authError
  );

  export const loading = createSelector(
    selectAuthState,
    (state: authState) => state?.laoding
  );

  export const selectTest = createSelector(
    selectAuthState,
    (state: authState) => {
      return { authError: state?.authError, laoding: state?.laoding };
    }
  );
}
