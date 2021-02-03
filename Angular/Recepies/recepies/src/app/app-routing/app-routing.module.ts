import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipeComponent } from '../recipe-book/recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list/shopping-list.component';
import { RecipeStartComponent } from '../recipe-book/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from '../recipe-book/recipe-details/recipe-details.component';
import { RecipeEditComponent } from '../recipe-book/recipe-edit/recipe-edit.component';
import { ShoppingListEditComponent } from '../shopping-list/shopping-list/shopping-list-edit/shopping-list-edit.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: "recipes", component: RecipeComponent, children: [
    {path: "", component: RecipeStartComponent},
    {path: "new", component: RecipeEditComponent},
    {path: ":id", component: RecipeDetailsComponent},
    {path: ":id/edit", component: RecipeEditComponent},
  ]},
  {path: "shopping-list", component: ShoppingListComponent},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
