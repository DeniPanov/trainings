import * as RecipeActions from './recipe.actions';
import { recipeState } from './recipes.state';

const initialState: recipeState = {
  recipes: [],
};

export function recipeReducer(
  state = initialState,
  action: RecipeActions.RecipesActionTypes
) {
  switch (action.type) {
    case RecipeActions.SET_RECIPES:
      return {
        ...state,
        recipes: [...action.paylaod],
      };

    case RecipeActions.CREATE_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case RecipeActions.UPDATE_RECIPE:
      const updatedRecipe = {
        ...state.recipes[action.payload.index],
        ...action.payload.newRecipe,
      };
      const updatedRecipes = [...state.recipes];
      updatedRecipes[action.payload.index] = updatedRecipe;

      return {
        ...state,
        recipes: updatedRecipes,
      };

    case RecipeActions.DELETE_RECIPE:
      const recipeIndexToDelete = action.payload;
      const recipesList = [...state.recipes];
      recipesList.splice(recipeIndexToDelete, 1);

      return {
        ...state,
        recipes: recipesList,
      };

    default:
      return state;
  }
}
