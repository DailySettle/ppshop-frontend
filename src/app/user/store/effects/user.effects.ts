import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';

import * as UserActions from '../actions/user.actions';
import {HttpService} from '../../../services/http.service';
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
      switchMap((action) => this.http.login(action.user)
        .pipe(
          map(response => {
            if (response.flag) {
              return UserActions.loginSuccess({payload: response.data});
            } else {
              return UserActions.loginFailure({errorMessage: response.message});
            }
          }),
        )
      ));
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
        tap((response) => {
          this.snackBar.open(this.translateService.instant('message.signup.failure'), 'X', {
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
          map(response => {
            if (response.flag) {
              return UserActions.signUpSuccess({message: response.message});
            } else {
              return UserActions.signUpFailure({errorMessage: response.message});
            }
          }),
        )));
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
        tap((response) => {
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
        this.snackBar.open(this.translateService.instant('message.signup.hasExisted'), 'X', {
          duration: 3000
        });
      })
    );
  }, {dispatch: false});
}
