import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromOrder from './store/reducers/order.reducer';
import {EffectsModule} from '@ngrx/effects';
import {OrderEffects} from './store/effects/order.effects';
import {CheckoutComponent} from './checkout/checkout.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {StepsModule} from 'primeng/steps';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaymentComponent} from './payment/payment.component';
import {AddressComponent} from './address/address.component';
import {ConfirmationComponent} from './confirmation/confirmation.component';
import {TranslationModule} from '../translation/translation.module';
import {InputMaskModule} from 'primeng/inputmask';
import {CheckboxModule} from 'primeng/checkbox';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [CheckoutComponent, AddressComponent, PaymentComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.orderFeatureKey, fromOrder.reducer),
    EffectsModule.forFeature([OrderEffects]),
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    StepsModule,
    MenuModule,
    InputTextModule,
    CardModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    TranslationModule,
    InputMaskModule,
    CheckboxModule,
    ShareModule
  ]
})
export class OrderModule {
}
