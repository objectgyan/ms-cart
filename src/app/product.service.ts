import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";

@Injectable()
export class ProductService {
  itemsInCart: ProductModel[] = [];

  dummyProductUrl = "assets/products.json";

  private alertnotificationMessage = new Subject<number>();

  alertNotification$ = this.alertnotificationMessage.asObservable();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.dummyProductUrl);
  }

  addItemToCart(productModel: ProductModel) {
    this.itemsInCart.push(productModel);
    this.alertnotificationMessage.next(this.itemsInCart.length);
  }

  checkItemInCart(productModel: ProductModel): boolean {
    return this.itemsInCart.some(c => c.id === productModel.id);
  }
}

export class ProductModel {
  constructor(
    public id: number,
    public category: string,
    public name: string,
    public price: Float32Array,
    public image: string
  ) {}
}
