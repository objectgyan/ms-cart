import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: HomeComponent },
  { path: "productsdetails/:id", component: ProductDetailComponent },
  { path: "products/:category/:id", component: ProductComponent },
  { path: "products/:category", component: ProductComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class RoutingModule {}
