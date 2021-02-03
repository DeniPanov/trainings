import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Spaghetti",
       "ItalianFood",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spaghetti_spiral%2C_2008.jpg/126px-Spaghetti_spiral%2C_2008.jpg",
        [
          new Ingredient ("Pasta", 1),
          new Ingredient ("Tomatos", 3)
        ]
    ), new Recipe(
      "Spaghetti",
       "Another italianFood",
       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spaghetti_spiral%2C_2008.jpg/126px-Spaghetti_spiral%2C_2008.jpg",
       [
        new Ingredient ("Pasta", 1),
        new Ingredient ("Parmegano", 1)
       ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  constructor(private slService: ShoppingService) { }
}
