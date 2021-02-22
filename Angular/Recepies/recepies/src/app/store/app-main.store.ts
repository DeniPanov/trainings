import { ActionReducerMap } from "@ngrx/store";

import * as fromAuth from "../auth/store/auth-state";
import * as fromShoppingList from "../shopping-list/store";

export const reducers: ActionReducerMap<{}> = {}

export interface AppState {
    shoppingList: fromShoppingList.ShoppingListState,
    auth: fromAuth.authState
}
