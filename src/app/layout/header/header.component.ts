import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Language} from '../../translation/language.enum';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserDialogComponent} from '../../user/dialog/user-dialog/user-dialog.component';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectAuth} from '../../user/store/selectors/user.selectors';
import {logout} from 'src/app/user/store/actions/user.actions';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {Product} from '../../product/model/product.model';
import {selectAllProduct} from '../../product/store/selectors/product.selectors';
import {Router} from '@angular/router';
import {selectNumberOfItemInCart} from '../../cart/store/selectors/cart.selectors';
import {selectNumberOfProductInWishlist} from '../../wishlist/store/selectors/wish.selectors';
import {selectProductGroup} from '../../product/store/actions/product.actions';

import {ProductGroup} from '../../product/model/product-group.enum';

@Component({
  selector: 'pps-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lang: Language;
  Language = Language;
  auth$: Observable<boolean>;
  options: Product[];
  productFormControl = new FormControl();
  filteredOptions$: Observable<Product[]>;
  private products$: Observable<Product[]>;

  numberOfItemsInCart: Observable<number>;
  numberOfItemsInWishlist: Observable<number>;

  selectedTab: ProductGroup = ProductGroup.ALL;
  ProductGroup = ProductGroup;

  constructor(private translate: TranslateService,
              public dialog: MatDialog,
              private store: Store,
              private router: Router) {
    this.auth$ = this.store.select(selectAuth);
    this.products$ = this.store.select(selectAllProduct);
    this.numberOfItemsInCart = this.store.select(selectNumberOfItemInCart);
    this.numberOfItemsInWishlist = this.store.select(selectNumberOfProductInWishlist);
  }

  ngOnInit(): void {
    this.products$.subscribe(
      products => this.options = products
    );
    this.filteredOptions$ = this.productFormControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  displayFn(productId: string): string {
    if (this.options === undefined) {
      return '';
    }
    const data = this.options.find(product => product.id === productId);
    return data ? `${data.name}` : '';
  }

  setLang(lang: Language): void {
    this.lang = lang;
    this.translate.use(lang.toLowerCase());
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(UserDialogComponent, dialogConfig);
  }

  logout(): void {
    this.store.dispatch(logout());
  }

  private _filter(value: string): Product[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  search(): void {
    this.router.navigate(['product', this.productFormControl.value]);
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
