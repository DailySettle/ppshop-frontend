import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home/home.component';
import {ShareModule} from '../share/share.module';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class LayoutModule {
}
