import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  url = "https://fakestoreapi.com/products"

  constructor(private http: HttpClient) { }


  getProducts() {
    this.http.get<any>(this.url).pipe(map(res => {
      console.log(res);
    }))
  }
}
