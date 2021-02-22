import { createFeatureSelector, createSelector } from '@ngrx/store';
import { User } from '../user-model';

export const FEATURE_NAME = "auth";

export interface authState {
  user: User;
}

export namespace selectors {
  const selectAuthState = createFeatureSelector<authState>(FEATURE_NAME);

  export const selectUser = createSelector(
    selectAuthState,
    (state: authState) => state?.user
  );
}
