import * as RecipeActions from "./recipe.actions";
import { recipeState } from "./recipes.state";

const initialState: recipeState = {
    recipes: [],
}

export function recipeReducer(state = initialState, action: RecipeActions.RecipesActionTypes) {
    switch (action.type) {
        case RecipeActions.SET_RECIPES:
        return {
            ...state,
            recipes: [...action.paylaod]
        };
    
        default:
            return state;
    }
}