import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Recipe } from '../recipe.model';

export const FEATURE_NAME = 'recipes';

export interface recipeState {
  recipes: Recipe[];
}

export namespace selectors {
  const selectRecipesState = createFeatureSelector<recipeState>(FEATURE_NAME);

  export const selectRecipes = createSelector(
    selectRecipesState,
    (state: recipeState) => state?.recipes
  );
}
