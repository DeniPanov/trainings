import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { recipeReducer } from './store/recipe.reducer';
import { FEATURE_NAME } from './store/recipes.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, recipeReducer)
  ]
})
export class RecipesStoreModule { }
