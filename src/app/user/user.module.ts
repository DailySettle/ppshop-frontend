import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromUser from './store/reducers/user.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from './store/effects/user.effects';
import {SignupComponent} from './dialog/signup/signup.component';
import {LoginComponent} from './dialog/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslationModule} from '../translation/translation.module';
import {ShareModule} from '../share/share.module';
import { UserDialogComponent } from './dialog/user-dialog/user-dialog.component';


@NgModule({
  declarations: [SignupComponent, LoginComponent, UserDialogComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
    ReactiveFormsModule,
    TranslationModule,
    ShareModule
  ]
})
export class UserModule {
}
