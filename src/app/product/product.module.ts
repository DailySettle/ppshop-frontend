import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromProduct from './store/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';



@NgModule({
    declarations: [ProductListComponent, ProductItemComponent, ProductDetailComponent],
    exports: [
        ProductListComponent
    ],
    imports: [
        CommonModule,
        StoreModule.forFeature(fromProduct.productFeatureKey, fromProduct.reducer),
        EffectsModule.forFeature([ProductEffects])
    ]
})
export class ProductModule { }
