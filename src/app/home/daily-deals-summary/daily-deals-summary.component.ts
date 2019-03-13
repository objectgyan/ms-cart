import { OnInit, Component } from "@angular/core";
import { ProductService, ProductModel } from "src/app/product.service";

@Component({
  selector: "app-daily-deals-summary",
  templateUrl: "./daily-deals-summary.component.html",
  styleUrls: ["./daily-deals-summary.component.css"]
})
export class DailyDealsSummaryComponent implements OnInit {
  productList: ProductModel[] = [];
  data: ProductModel[] = [];
  product: ProductModel;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.productList = data;
      //   for (let i in data) {
      //     this.productList.push(new ProductModel(data[i].id,data[i].category,"Dummy Text",data[i].price,data[i].image));
      //  }
      //  //console.log(this.productList);
      //  console.log(JSON.stringify(this.productList));
    });
  }

  getFilterProducts(criteria: string) {
    switch (criteria) {
      case "dd":
        return this.productList
          .filter(
            c =>
              c.category === "Electronics" &&
              c.price >= new Float32Array(Math.random())
          )
          .slice(0, 6);
      case "fp":
        return this.productList
          .filter(
            c =>
              c.category === "Fashion" &&
              c.price >= new Float32Array(Math.random())
          )
          .slice(0, 6);
      default:
        return null;
    }
  }
}
