import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShareModule} from '../share/share.module';
import {TranslateModule} from '@ngx-translate/core';
import {ProductModule} from '../product/product.module';
import {CartModule} from '../cart/cart.module';
import { ToolbarComponent } from './toolbar/toolbar.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, ToolbarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    TranslateModule,
    ProductModule,
    CartModule
  ]
})
export class LayoutModule {
}
