import {CategoryType} from './category-type.enum';

export class Product {

  constructor(public id: number,
              public name: string,
              public category: CategoryType,
              public description: string,
              public price: number,
              public quantity: number,
              public imageUrl: string) {
  }
}
