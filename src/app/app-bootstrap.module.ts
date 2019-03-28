import { NgModule } from "@angular/core";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { ModalModule } from "ngx-bootstrap/modal";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { AlertModule } from "ngx-bootstrap/alert";
import { AccordionModule } from "ngx-bootstrap/accordion";
import { RatingModule } from "ngx-bootstrap/rating";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
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
    ToastrModule.forRoot()
  ],
  exports: [
    TooltipModule,
    ModalModule,
    BsDropdownModule,
    CollapseModule,
    CarouselModule,
    TypeaheadModule,
    AlertModule,
    AccordionModule,
    RatingModule,
    TooltipModule,
    BrowserAnimationsModule,
    ToastrModule
  ]
})
export class AppBoostrapModule {}
