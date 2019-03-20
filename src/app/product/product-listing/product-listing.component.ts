import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService, ProductModel } from "src/app/product.service";
import { NotificationService } from "src/app/shared/notification/notification.service";

@Component({
  selector: "app-product-listing",
  templateUrl: "./product-listing.component.html",
  styleUrls: ["./product-listing.component.css"]
})
export class ProductListingComponent implements OnInit, OnDestroy {
  category: "all";
  price: any;
  productList: ProductModel[] = [];
  private categorySubs: any;
  private priceSubs: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.categorySubs = this.route.params.subscribe(params => {
      this.category = params["category"];
      this.onFilterChanged();
    });

    this.priceSubs = this.route.queryParams.subscribe(params => {
      this.price = +params["price"];
      this.onFilterChanged();
    });
  }

  onFilterChanged() {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data.filter(
        c =>
          c.price <= this.price &&
          c.category.toLowerCase() === this.category.toLowerCase()
      );
    });
  }

  ngOnDestroy() {
    this.priceSubs.unsubscribe();
    this.categorySubs.unsubscribe();
  }

  isAvailableInCart(productModel: ProductModel): boolean {
    return this.productService.checkItemInCart(productModel);
  }

  add(product: ProductModel) {
    this.productService.addItemToCart(product);
    this.notificationService.notifyMessage(product.name  + " : added successfully");
  }
}
