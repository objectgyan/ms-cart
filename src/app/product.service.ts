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

export class ProductModel{
    'id': '';
    'category': string;
    'name': 'Fuji Apples';
    'price': Float32Array ;
    'image': string;
}
