import {Component, OnInit} from '@angular/core';
import {Product} from '../model/product.model';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Store} from '@ngrx/store';
import {selectProductById} from '../store/selectors/product.selectors';
import {addToCarts} from '../../cart/store/actions/cart.actions';

@Component({
  selector: 'pps-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;
  selectedId: string;

  constructor(private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id');
        return this.store.select(selectProductById, {id: this.selectedId});
      })
    );
  }

  handleAddToCart(product: Product): void {
    this.store.dispatch(addToCarts({product}));
  }

}
