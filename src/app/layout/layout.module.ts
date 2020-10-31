import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShareModule} from '../share/share.module';
import {ProductModule} from '../product/product.module';
import {CartModule} from '../cart/cart.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {NavSidebarComponent} from './nav-sidebar/nav-sidebar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {AppRoutingModule} from '../app-routing.module';
import {TranslationModule} from '../translation/translation.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


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
    TranslationModule,
    ProductModule,
    CartModule,
    AppRoutingModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule {
}
