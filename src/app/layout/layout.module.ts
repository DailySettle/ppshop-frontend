import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShareModule} from '../share/share.module';
import {ProductModule} from '../product/product.module';
import {CartModule} from '../cart/cart.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {CarouselComponent} from './carousel/carousel.component';
import {AppRoutingModule} from '../app-routing.module';
import {TranslationModule} from '../translation/translation.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AutoplayCarouselComponent} from './autoplay-carousel/autoplay-carousel.component';
import {CarouselModule} from 'primeng/carousel';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToolbarComponent,
    CarouselComponent,
    AutoplayCarouselComponent,
    SideNavComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ToolbarComponent,
    CarouselComponent,
    SideNavComponent
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
    FormsModule,
    CarouselModule,
    MegaMenuModule,
    ButtonModule,
    MatChipsModule
  ]
})
export class LayoutModule {
}
