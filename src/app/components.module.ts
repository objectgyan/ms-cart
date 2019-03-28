import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { ProductCarouselComponent } from "./home/product-carousel/product-carousel.component";
import { DailyDealsSummaryComponent } from "./home/daily-deals-summary/daily-deals-summary.component";
import { ProductComponent } from "./product/product.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { FilterComponent } from "./product/filter/filter.component";
import { ProductListingComponent } from "./product/product-listing/product-listing.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppBoostrapModule } from "./app-bootstrap.module";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { ServicesModule } from "./services.module";

@NgModule({
  declarations: [
    HomeComponent,
    ProductCarouselComponent,
    DailyDealsSummaryComponent,
    ProductComponent,
    PagenotfoundComponent,
    FilterComponent,
    ProductListingComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppBoostrapModule,
    FormsModule,
    HttpClientModule,
    RoutingModule,
    ServicesModule
  ]
})
export class ComponentsModule {}
