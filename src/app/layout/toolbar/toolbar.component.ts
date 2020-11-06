import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductGroup} from '../../product/model/product-group.enum';
import {selectProductGroup} from '../../product/store/actions/product.actions';

@Component({
  selector: 'pps-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  selectedTab: ProductGroup = ProductGroup.ALL;
  ProductGroup = ProductGroup;

  constructor(private store: Store) {

  }

  ngOnInit(): void {

  }

  showAllProducts(): void {
    this.selectedTab = ProductGroup.ALL;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.ALL}));
  }

  showNewProducts(): void {
    this.selectedTab = ProductGroup.NEW;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.NEW}));
  }

  showDiscountedProducts(): void {
    this.selectedTab = ProductGroup.SALE;
    this.store.dispatch(selectProductGroup({selectGroup: ProductGroup.SALE}));
  }
}
