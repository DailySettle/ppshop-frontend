import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {HttpService} from '../../../services/http.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';


@Injectable()
export class UserEffects {


  constructor(private actions$: Actions,
              private http: HttpService,
              private snackBar: MatSnackBar,
              private translateService: TranslateService) {
  }

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.login),
      concatMap((action) => this.http.login(action.user)
        .pipe(
          map(payload => UserActions.loginSuccess({payload})),
          catchError(error => of(UserActions.loginFailure({errorMessage: error.error}))))
      )
    );
  });

  loginSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.loginSuccess),
        tap((data) => {
          localStorage.setItem('token', data.payload.jwt);
          this.snackBar.open(this.translateService.instant('message.login.success'), 'X', {
            duration: 3000
          });
        })
      );
    }, {dispatch: false}
  );

  loginFailure$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.loginFailure),
        tap((data) => {
          this.snackBar.open(this.translateService.instant('message.login.failure'), 'X', {
            duration: 3000
          });
        })
      );
    }, {dispatch: false}
  );

  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.signUp),
      concatMap((action) => this.http.signUp(action.user)
        .pipe(
          map(payload => {
            console.log(payload);
            return UserActions.signUpSuccess({payload});
          }),
          catchError(error => of(UserActions.signUpFailure({errorMessage: error.error}))))
      )
    );
  });

  signupSuccess$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.signUpSuccess),
        tap((data) => {
          this.snackBar.open(this.translateService.instant('message.signup.success'), 'X', {
            duration: 3000
          });
        })
      );
    }, {dispatch: false}
  );

  signupFailure$ = createEffect(() => {
      return this.actions$.pipe(
        ofType(UserActions.signUpFailure),
        tap((data) => {
          this.snackBar.open(this.translateService.instant('message.signup.failure'), 'X', {
            duration: 3000
          });
        })
      );
    }, {dispatch: false}
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActions.logout),
      tap(() => {
        localStorage.removeItem('token');
        this.snackBar.open(this.translateService.instant('message.signup.failure'), 'X', {
          duration: 3000
        });
      })
    );
  }, {dispatch: false});
}
