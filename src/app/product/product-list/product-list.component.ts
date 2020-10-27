import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../model/product.model';
import {Store} from '@ngrx/store';
import {loadAllProducts} from '../store/actions/product.actions';
import {selectFilteredProduct} from '../store/selectors/product.selectors';

@Component({
  selector: 'pps-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Observable<Product[]>;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.productList = this.store.select(selectFilteredProduct);
  }

}
