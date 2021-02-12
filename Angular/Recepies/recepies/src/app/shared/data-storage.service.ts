import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { exhaustMap, map, take, tap } from 'rxjs/operators';

import { RecipeService } from '../recipe-book/recipe.service';
import { Recipe } from '../recipe-book/recipe.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url: string =
    'https://ng-course-recipe-book-722e9-default-rtdb.firebaseio.com/';
  recipesJson: string = 'recipes.json'; // Firebase requirement
  authUrl: string = "?auth=";

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put(`${this.url}${this.recipesJson}`, recipes)
      .subscribe((data) => {
        console.log(data);
      });
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(`${this.url}${this.recipesJson}`)
    .pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipeService.setRecipes(recipes);
      }));
  }
}
