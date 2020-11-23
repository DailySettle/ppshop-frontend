import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserModule} from './user/user.module';
import {ProductModule} from './product/product.module';
import {CartModule} from './cart/cart.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {LayoutModule} from './layout/layout.module';
import {OrderModule} from './order/order.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {TranslationModule} from './translation/translation.module';
import {WishlistModule} from './wishlist/wishlist.module';
import {routerReducer, RouterState, StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslationModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    UserModule,
    ProductModule,
    CartModule,
    OrderModule,
    WishlistModule,
    StoreModule.forRoot(
      {router: routerReducer},
      {
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
          strictStateSerializability: true,
          strictActionSerializability: true
        }
      }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router', routerState: RouterState.Minimal}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
