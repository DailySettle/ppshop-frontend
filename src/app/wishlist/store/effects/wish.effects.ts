import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as WishActions from '../actions/wish.actions';



@Injectable()
export class WishEffects {

  loadWishs$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(WishActions.loadWishs),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => WishActions.loadWishsSuccess({ data })),
          catchError(error => of(WishActions.loadWishsFailure({ error }))))
      )
    );
  });



  constructor(private actions$: Actions) {}

}
