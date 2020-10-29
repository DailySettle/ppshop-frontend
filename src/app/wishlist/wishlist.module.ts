import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromWish from './store/reducers/wish.reducer';
import {EffectsModule} from '@ngrx/effects';
import {WishEffects} from './store/effects/wish.effects';
import {WishlistComponent} from './wishlist/wishlist.component';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {TranslationModule} from '../translation/translation.module';


@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWish.wishFeatureKey, fromWish.reducer),
    EffectsModule.forFeature([WishEffects]),
    TableModule,
    TranslationModule,
    RatingModule,
    FormsModule
  ]
})
export class WishlistModule {
}
