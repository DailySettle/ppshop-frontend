import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './layout/home/home.component';
import {CheckoutComponent} from './order/checkout/checkout.component';
import {ShoppingCartComponent} from './cart/shopping-cart/shopping-cart.component';
import {ProductDetailComponent} from './product/product-detail/product-detail.component';
import {WishlistComponent} from './wishlist/wishlist/wishlist.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'product/:id', component: ProductDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
