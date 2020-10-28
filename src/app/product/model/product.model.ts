import {CategoryType} from './category-type.enum';

export class Product {

  constructor(public id: string,
              public name: string,
              public category: CategoryType,
              public description: string,
              public price: number,
              public quantity: number,
              public inventoryStatus: 'String',
              public imageUrl: string,
              public newArrive: boolean,
              public onSale: boolean,
              public rating: number) {
  }
}
