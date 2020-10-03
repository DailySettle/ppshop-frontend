import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromOrder from './reducers/order.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrderEffects } from './effects/order.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.orderFeatureKey, fromOrder.reducer),
    EffectsModule.forFeature([OrderEffects])
  ]
})
export class OrderModule { }
