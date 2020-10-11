import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';

@Component({
  selector: 'pps-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input()
  productItem: Product;
  addedToWishlist = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  handleAddToCart(): void {
    // this.cartService.addToCart(this.productItem);
  }

  handleRemoveFromWishlist(): void {
    this.addedToWishlist = false;
  }

  handleAddToWishlist(): void {
    this.addedToWishlist = true;
  }

}
