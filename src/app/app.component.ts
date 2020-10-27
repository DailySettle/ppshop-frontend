import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {loadAllProducts} from './product/store/actions/product.actions';

@Component({
  selector: 'pps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) {
    this.store.dispatch(loadAllProducts());
  }
}
