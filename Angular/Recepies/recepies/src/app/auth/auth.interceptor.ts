import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { exhaustMap, take } from 'rxjs/operators';
import { AppState } from '../store/app-main.store';
import { selectors } from './store/auth-state';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<AppState>
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(selectors.selectUser).pipe(
      take(1),
      //map(state => state.user),
      exhaustMap((user) => {
        if (!user) {
          return next.handle(request);
        }

        const modifiedReq = request.clone({
          params: new HttpParams().set('auth', user.token),
        });

        return next.handle(modifiedReq);
      })
    );
  }
}
