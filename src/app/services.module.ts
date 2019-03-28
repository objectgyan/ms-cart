import { ProductService } from "./product.service";
import { ProductCategoryService } from "./productcategory.service";
import { NgModule } from "@angular/core";

@NgModule({
  providers: [ProductService, ProductCategoryService]
})
export class ServicesModule {}
