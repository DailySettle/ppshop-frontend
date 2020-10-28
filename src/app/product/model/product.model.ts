import {CategoryType} from './category-type.enum';
import {InventoryStatus} from './inventory-status.enum';

export class Product {

  constructor(public id: string,
              public name: string,
              public category: CategoryType,
              public description: string,
              public price: number,
              public quantity: number,
              public inventoryStatus: InventoryStatus,
              public imageUrl: string,
              public newArrive: boolean,
              public onSale: boolean,
              public rating: number) {
  }
}
