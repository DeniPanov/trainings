import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { Recipe } from '../recipe.model';
import * as RecipesActions from './recipe.actions';
import { AppState } from 'src/app/store/app-main.store';
import { selectors } from './recipes.state';

@Injectable()
export class RecipeEffects {
  url: string =
    'https://ng-course-recipe-book-722e9-default-rtdb.firebaseio.com/';
  recipesJson: string = 'recipes.json'; // Firebase requirement

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RecipesActions.FETCH_RECIPES),
    switchMap(() => {
      return this.http.get<Recipe[]>(
        'https://ng-course-recipe-book-722e9-default-rtdb.firebaseio.com/recipes.json'
      );
    }),
    map((recipes) => {
      if (recipes) {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      } else {
        return (recipes = [
          new Recipe('Potato', 'Chips', 'asdad', [
            { name: 'potatoes', amount: 5 },
          ]),
          new Recipe('Tomato', 'Common vegetable', 'asdad', [
            { name: 'tomatoes', amount: 5 },
          ]),
        ]);
      }
    }),
    map((recipes) => {
      return new RecipesActions.SetRecipes(recipes);
    })
  );

  @Effect({dispatch: false})
  storeRecipes = this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    withLatestFrom(this.store.select(selectors.selectRecipes)),
    switchMap(([actionData, recipes]) => {
      return this.http.put(`${this.url}${this.recipesJson}`, recipes);
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<AppState>
  ) {}
}
