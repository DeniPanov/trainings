import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { selectors } from '../auth/store/auth-state';
import { User } from '../auth/user-model';
import { AppState } from '../store/app-main.store';
import * as AuthActions from "../auth/store/auth-actions";
import * as RecipeActions from "../recipe-book/store/recipe.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  isAuthenticated$: Observable<boolean>;
  collapsed = true;
  userData$: Observable<User>;

  constructor(
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.userData$ = this.store.select(selectors.selectUser);
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.StoreRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  get IsAuthenticated(): boolean {
    let isAuth: boolean;
    
    this.userData$.subscribe((data: User) => {
      isAuth = data !== undefined && data !== null
    })

    return isAuth;
  }
}
