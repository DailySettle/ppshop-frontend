import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCart from './store/reducers/cart.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './store/effects/cart.effects';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
    declarations: [ShoppingCartComponent],
    exports: [
        ShoppingCartComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromCart.cartFeatureKey, fromCart.reducer),
        EffectsModule.forFeature([CartEffects])
    ]
})
export class CartModule { }
