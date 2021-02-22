import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Ingredient } from "src/app/shared/ingredient.model";

export const FEATURE_NAME = "shoppingList";

export interface ShoppingListState {
    ingredients: Ingredient[],
    editedIngredient: Ingredient,
    editedIngredientIndex: number,
}

export namespace selectors {
    const selectShoppingListState = createFeatureSelector<ShoppingListState>(FEATURE_NAME)
   
    export const selectIngredients = createSelector(selectShoppingListState, (state: ShoppingListState) =>
      state.ingredients);
  }