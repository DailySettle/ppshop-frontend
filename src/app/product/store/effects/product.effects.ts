import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as ProductActions from '../actions/product.actions';
import {HttpService} from '../../../services/http.service';



@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private http: HttpService) {
  }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      concatMap(() => this.http.getAllProducts().pipe(
        map(products => ProductActions.loadAllProductsSuccess({products})),
        catchError(error => of(ProductActions.loadAllProductsFailure({errorMessage: error.error}))))
      )
    );
  });

}
