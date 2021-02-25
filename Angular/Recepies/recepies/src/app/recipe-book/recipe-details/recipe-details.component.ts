import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import { AppState } from 'src/app/store/app-main.store';
import { Recipe } from '../recipe.model';
import { selectors } from '../store/recipes.state';
import * as RecipeActions from "../store/recipe.actions";
import * as ShoppinglistActions from "../../shopping-list/store/shopping-list.actions";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(map(params => {
      return Number(params["id"]);
    }),
    switchMap((id) => {
      this.id = id;
      return this.store.select(selectors.selectRecipes);
    }),
    map(recipes => recipes.find((recipe, index) => {
      return index === this.id;
    })))    
    .subscribe(recipe => {
      this.recipe = recipe;
    });
  }

  onAddToShoppingList() {
    this.store.dispatch(new ShoppinglistActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(["edit"], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.store.dispatch(new RecipeActions.DeleteRecipe(this.id));
    this.router.navigate(["/recipes"]);
  }
}
