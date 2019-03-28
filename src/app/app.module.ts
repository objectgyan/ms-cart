import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing.module";
import { AppBoostrapModule } from "./app-bootstrap.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ProductCategoriesComponent } from "./shared/product-categories/product-categories.component";
import { ComponentsModule } from "./components.module";
// import { ServicesModule } from "./services.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCategoriesComponent
  ],
  imports: [
    RoutingModule,
    // ServicesModule,
    FormsModule,
    AppBoostrapModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
