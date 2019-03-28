import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ProductCategoryService {
  dummyProductCategoriesUrl = "assets/productcategories.json";

  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<ProductCategoryModel[]> {
    return this.http.get<ProductCategoryModel[]>(
      this.dummyProductCategoriesUrl
    );
  }
}

export class ProductCategoryModel {
  "name": "";
  "options": [];
}
