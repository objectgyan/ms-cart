import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "src/app/product.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  selected: string;
  states: string[] = [
    "mobiles",
    "laptop",
    "washing machine",
    "refrigerators",
    "shoes",
    "sarees",
    "furniture"
  ];
  itemCount = 0;
  subscription: Subscription;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.subscription = this.productService.alertNotification$.subscribe(
      c => (this.itemCount = c)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
