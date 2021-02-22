import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { FEATURE_NAME } from './store/auth-state';
import { authReducer } from './store/auth-reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FEATURE_NAME, authReducer)
  ]
})
export class AuthStoreModule { }
