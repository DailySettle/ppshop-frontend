import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from './store/effects/cart.effects';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AppRoutingModule} from '../app-routing.module';
import {TranslationModule} from '../translation/translation.module';
import {ReactiveComponentModule} from '@ngrx/component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [ShoppingCartComponent],
  exports: [
    ShoppingCartComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
    EffectsModule.forFeature([CartEffects]),
    TableModule,
    FormsModule,
    TranslationModule,
    ButtonModule,
    AppRoutingModule,
    MatTooltipModule,
    ReactiveComponentModule,
    ShareModule
  ]
})
export class CartModule {
}
