import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromWish from './store/reducers/wish.reducer';
import {EffectsModule} from '@ngrx/effects';
import {WishEffects} from './store/effects/wish.effects';
import {WishlistComponent} from './wishlist/wishlist.component';
import {TableModule} from 'primeng/table';
import {TranslateModule} from '@ngx-translate/core';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [WishlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromWish.wishFeatureKey, fromWish.reducer),
    EffectsModule.forFeature([WishEffects]),
    TableModule,
    TranslateModule,
    RatingModule,
    FormsModule
  ]
})
export class WishlistModule {
}
