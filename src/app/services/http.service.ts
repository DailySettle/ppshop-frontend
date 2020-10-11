import {Injectable} from '@angular/core';
import {Product} from '../product/model/product.model';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {CategoryType} from '../product/model/category-type.enum';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BASE_URL = environment.SERVER_URL;

  private products: Product[] = [
    new Product(1, 'Haribo Goldbären', CategoryType.SNACK, 'Haribo Goldbären', 1.00, 1, '/assets/image/products/haribo1.jpeg'),
    new Product(2, 'Haribo Tropifrutti', CategoryType.SNACK, 'Haribo Tropifrutti', 1.00, 2, '/assets/image/products/haribo2.jpeg'),
    new Product(3, 'Haribo Happy-Colo', CategoryType.SNACK, 'Haribo Happy-Colo', 1.00, 3, '/assets/image/products/haribo3.jpeg'),
  ];

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(numberOfResults = 10): Observable<Product[]> {
    const url = `${this.BASE_URL}/product`;
    // return this.httpClient.get<Product[]>(url, {params: {limit: numberOfResults.toString()}});
    return of(this.products);
  }
}
