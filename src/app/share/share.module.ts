import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';


const share = [
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatBadgeModule,
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...share
  ],
  exports: [
    ...share
  ]
})
export class ShareModule {
}
