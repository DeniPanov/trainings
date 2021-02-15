import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: "recipes", loadChildren: () => import("../recipe-book/recipes.module").then(m => m.RecipesModule)},
  {path: "auth", loadChildren: () => import("../auth/auth.module").then(m => m.AuthModule)},
  { path: "shopping-list", loadChildren: () => import("../shopping-list/shopping-list.module").then(m => m.ShoppingListModule)}  
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
