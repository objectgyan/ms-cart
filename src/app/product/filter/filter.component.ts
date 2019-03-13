import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  selectedPrice = 10;
  selectedCategory = "";
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedPrice = params["price"];
    });

    this.route.params.subscribe(params => {
      this.selectedCategory = params["category"];
    });
  }

  onRangeSelectionCompleted(event: any) {
    this.router.navigate(["/products/" + this.selectedCategory], {
      queryParams: { price: this.selectedPrice }
    });
  }
}
