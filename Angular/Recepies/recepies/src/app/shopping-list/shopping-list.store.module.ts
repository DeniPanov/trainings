import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { FEATURE_NAME, shoppingListReducer } from './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, shoppingListReducer),
  ]
})
export class ShoppingListStoreModule { }
