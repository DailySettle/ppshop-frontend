import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShareModule} from '../share/share.module';
import {TranslateModule} from '@ngx-translate/core';
import {ProductModule} from '../product/product.module';
import {CartModule} from '../cart/cart.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavSidebarComponent} from './nav-sidebar/nav-sidebar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {AppRoutingModule} from '../app-routing.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, ToolbarComponent, NavSidebarComponent, CarouselComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToolbarComponent,
    NavSidebarComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    TranslateModule,
    ProductModule,
    CartModule,
    AppRoutingModule
  ]
})
export class LayoutModule {
}
