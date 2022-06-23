import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductsApiService } from 'src/app/services/products-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  url = 'http://localhost:8080/shopping-app/products/all';

  productList: any;
  category: any;
  type: any;

  OnCategoryChange(event: any) {
    // document.getElementById("category").value;

    this.category = event.target.value;
    this.SearchByCategory();
  }
  SearchByCategory() {
    var data = {
      category: this.category,
    };
    this.http
      .post('http://localhost:8080/shopping-app/products/search', data)
      .pipe(
        map((res) => {
          return res;
        })
      )
      .subscribe((res) => {
        this.productList = res;
      });
  }

  OnTypeChange(event: any) {
    this.type = event.target.value;
    this.SearchByType();
  }
  SearchByType(){
    var data= {
      type:this.type,
    };
    this.http
    .post('http://localhost:8080/shopping-app/products/search', data)
    .pipe(
      map((res) => {
        return res;
      })
    )
    .subscribe((res) => {
      this.productList = res;
    });
  }


  constructor(private api: ProductsApiService, private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get(this.url)
      .pipe(
        map((res) => {
          return res;
        })
      )
      .subscribe((res) => {
        this.productList = res;
      });
  }
}
