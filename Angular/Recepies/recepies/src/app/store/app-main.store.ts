import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from "../auth/store/auth-state";
import * as fromShoppingList from "../shopping-list/store";
import * as fromRecipes from "../recipe-book/store/recipes.state"

export const reducers: ActionReducerMap<{}> = {}

export interface AppState {
    shoppingList: fromShoppingList.ShoppingListState,
    auth: fromAuth.authState,
    recipes: fromRecipes.recipeState;
}
