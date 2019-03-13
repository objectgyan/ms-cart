import { Component, OnInit } from "@angular/core";
import { CarouselConfig } from "ngx-bootstrap/carousel";

@Component({
  selector: "app-product-carousel",
  templateUrl: "./product-carousel.component.html",
  providers: [
    {
      provide: CarouselConfig,
      useValue: { interval: 1500, noPause: true, showIndicators: true }
    }
  ]
})
export class ProductCarouselComponent implements OnInit {
  noPause = false;

  ngOnInit(): void {}
}
