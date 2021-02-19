import { Ingredient } from '../../shared/ingredient.model';
import * as slActions from './shopping-list.actions';
import { ShoppingListState } from './shopping-list.state';

const initialState: ShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Oranges', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
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

    case slActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload,
      };
      const updateIngredients = [...state.ingredients];

      updateIngredients[state.editedIngredientIndex] = updateIngredient;

      return {
        ...state,
        ingredients: [...updateIngredients],
        editedIngredientIndex: -1,
        editedIngredient: null
      };

    case slActions.DELETE_INGREDIENT:
      let arrayWithoutElement = [...state.ingredients];
      arrayWithoutElement.splice( state.editedIngredientIndex, 1);

      return {
        ...state,
        ingredients: arrayWithoutElement,
        editedIngredientIndex: -1,
        editedIngredient: null
      };

      case slActions.START_EDIT:

      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: {...state.ingredients[action.payload]}
      };

      case slActions.STOP_EDIT:
      
      return {
        ...state,
        editedIngredientIndex: -1,
        editedIngredient: null
      }

    default:
      return state;
  }
}
