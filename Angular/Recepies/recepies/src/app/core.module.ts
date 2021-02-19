import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { RecipeService } from './recipe-book/recipe.service';
import { AuthInterceptor } from './auth/auth.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ]
})
export class CoreModule {}
