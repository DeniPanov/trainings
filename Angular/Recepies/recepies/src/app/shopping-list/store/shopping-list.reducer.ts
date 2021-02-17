import { Ingredient } from '../../shared/ingredient.model';
import * as slActions from './shopping-list.actions';
import { ShoppingListState } from './shopping-list.state';

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Oranges', 10)],
  id: 1
};

export function shoppingListReducer(
  state: ShoppingListState = initialState,
  action: slActions.ShoppingListActions
) {
  switch (action.type) {
    case slActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };

      case slActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };

    default:
      return state;
  }
}
