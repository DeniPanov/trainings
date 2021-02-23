import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';
import { selectors } from '../auth/store/auth-state';
import { User } from '../auth/user-model';
import { DataStorageService } from '../shared/data-storage.service';
import { AppState } from '../store/app-main.store';
import * as AuthActions from "../auth/store/auth-actions";

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
    private dsService: DataStorageService,
    private authService: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }

  ngOnInit(): void {
    // this.userSubscription = this.store
    //   .select(selectors.selectUser)
    //   // .pipe(map(state => state.user))
    //   .subscribe((user) => {
    //     this.isAuthenticated$
    //   });

    this.userData$ = this.store.select(selectors.selectUser);
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
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
