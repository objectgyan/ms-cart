import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { AlertModule } from "ngx-bootstrap/alert";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { RatingModule } from "ngx-bootstrap/rating";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ProductCategoriesComponent } from "./shared/product-categories/product-categories.component";
import { HomeComponent } from "./home/home.component";
import { ProductCarouselComponent } from "./home/product-carousel/product-carousel.component";
import { DailyDealsSummaryComponent } from "./home/daily-deals-summary/daily-deals-summary.component";
import { ProductComponent } from "./product/product.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";
import { FilterComponent } from "./product/filter/filter.component";
import { ProductListingComponent } from "./product/product-listing/product-listing.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";

import { ProductService } from "./product.service";
import { ProductCategoryService } from "./productcategory.service";
import { NotificationComponent } from "./shared/notification/notification.component";

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
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCategoriesComponent,
    HomeComponent,
    ProductCarouselComponent,
    DailyDealsSummaryComponent,
    ProductComponent,
    PagenotfoundComponent,
    FilterComponent,
    ProductListingComponent,
    ProductDetailComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
      // ,
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProductService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
