import { Ingredient } from "src/app/shared/ingredient.model";

export interface ShoppingListState {
    ingredients: Ingredient[],
    id: number
}