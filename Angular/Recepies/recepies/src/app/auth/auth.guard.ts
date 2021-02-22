import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppState } from '../store/app-main.store';

import { AuthService } from './auth.service';
import { selectors } from './store/auth-state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.select(selectors.selectUser).pipe(
      take(1),
      // map((state) => {
      //   state.user;
      // }),
      map((user) => {
        const isAuth = Boolean(user);
        
        if (isAuth !== null) {
          return true;
        }

        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
