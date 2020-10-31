import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

import * as ProductActions from '../actions/product.actions';
import {HttpService} from '../../../services/http.service';
import {InventoryStatus} from '../../model/inventory-status.enum';


function calculateQuantity(quantity: number): InventoryStatus {
  if (quantity > 20) {
    return InventoryStatus.INSTOCK;
  } else if (quantity <= 20) {
    return InventoryStatus.LOWSTOCK;
  }
  return InventoryStatus.OUTOFSTOCK;
}

@Injectable()
export class ProductEffects {

  constructor(private actions$: Actions, private http: HttpService) {
  }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      concatMap(() => this.http.getAllProducts().pipe(
        map(response => {
          if (response.flag) {
            const products = response.data.map(product => {
              product.inventoryStatus = calculateQuantity(product.quantity);
              return product;
            });
            return ProductActions.loadAllProductsSuccess({products});
          } else {
            return ProductActions.loadAllProductsFailure({errorMessage: response.message});
          }
        })
        )
      ));
  });
}
