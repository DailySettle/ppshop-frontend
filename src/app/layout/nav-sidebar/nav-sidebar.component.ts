import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {CategoryType} from 'src/app/product/model/category-type.enum';
import {Store} from '@ngrx/store';
import {selectProductType} from '../../product/store/actions/product.actions';

@Component({
  selector: 'pps-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit {
  showSidebar = true;
  selectedType: CategoryType = null;
  CategoryType = CategoryType;

  constructor(private route: ActivatedRoute,
              private store: Store) {
  }

  ngOnInit(): void {
    this.route.url.pipe(
      tap(console.log)
    );
  }

  select(selectType: CategoryType): void {
    this.selectedType = selectType;
    this.store.dispatch(selectProductType({selectType}));
  }

  reset(): void {
    this.selectedType = null;
    this.store.dispatch(selectProductType({selectType: null}));
  }
}
