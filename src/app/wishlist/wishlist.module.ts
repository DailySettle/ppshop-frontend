import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromWish from './store/reducers/wish.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WishEffects } from './store/effects/wish.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWish.wishFeatureKey, fromWish.reducer),
    EffectsModule.forFeature([WishEffects])
  ]
})
export class WishlistModule { }
