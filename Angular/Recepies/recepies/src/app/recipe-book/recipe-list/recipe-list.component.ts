import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';
import { map } from 'rxjs/operators';

import { AppState } from 'src/app/store/app-main.store';
import { Recipe } from "../recipe.model";
import { selectors } from '../store/recipes.state';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<AppState>) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.store
    .select(selectors.selectRecipes)
    // .pipe(map(state => state.recipes))
    .subscribe(
      (newRecipes: Recipe[]) => {
        this.recipes = newRecipes;
      }
    )
  }

  onNewRecipe() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }
}
