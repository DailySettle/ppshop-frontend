import {Injectable} from '@angular/core';
import {Product} from '../product/model/product.model';
import {Observable, of} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private BASE_URL = environment.SERVER_URL;

  private products: Product[] = [
    new Product(1, 'Haribo 1', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 2', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 3', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 4', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 5', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 6', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
    new Product(1, 'Haribo 7', '', 'Haribo 小熊糖', 100, 1, 'https://assets.haribo.com/image/upload/s--YdeeyHhl--/ar_2700:3594,c_fill,f_auto/w_770/v1/de-de/Produktverpackungen/goldbaeren.png'),
  ];

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(numberOfResults = 10): Observable<Product[]> {
    const url = `${this.BASE_URL}/product`;
    // return this.httpClient.get<Product[]>(url, {params: {limit: numberOfResults.toString()}});
    return of(this.products);
  }
}
