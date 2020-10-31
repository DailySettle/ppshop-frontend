import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../product/model/product.model';
import {Store} from '@ngrx/store';
import {selectAllProduct} from '../../product/store/selectors/product.selectors';

@Component({
  selector: 'pps-autoplay-carousel',
  templateUrl: './autoplay-carousel.component.html',
  styleUrls: ['./autoplay-carousel.component.scss']
})
export class AutoplayCarouselComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store) {
    this.products$ = this.store.select(selectAllProduct);
  }

  ngOnInit(): void {
  }

}
