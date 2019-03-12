import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  dummyProductUrl = 'assets/products.json';
  
  constructor(private http: HttpClient) {

  }

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.dummyProductUrl);
  }
}

export class ProductModel {

  constructor(public id: string, public category: string, public name: string, public price: Float32Array, public image: string) {

  }
}
