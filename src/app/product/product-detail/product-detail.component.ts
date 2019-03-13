import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService, ProductModel } from "src/app/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  product: ProductModel;
  productIdentifierSub: any;
  showCartMessage: any = false;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  itemAdded: any = false;

  ngOnInit() {
    this.productIdentifierSub = this.route.params.subscribe(params => {
      this.id = + params["id"];
      this.getProductById(this.id);
    });
  }

  getProductById(id: number) {
    this.productService.getAllProducts().subscribe(data => {
      this.product = data.filter(c => c.id === id)[0];
    });
  }

  ngOnDestroy() {
    this.productIdentifierSub.unsubscribe();
  }

  add() {
    this.itemAdded = !this.itemAdded;
  }

  onClosed() {
    this.showCartMessage = true;
  }
}
