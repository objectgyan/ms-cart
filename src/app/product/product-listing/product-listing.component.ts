import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  selectedPrice = 10;

  selectedText = '';

  constructor(private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  //   this.route.queryParams.subscribe(params => {
  //     console.log('invoked ' + params['price']);
  //     this.selectedPrice = params['price'];
  // });
  }

  onRangeSelectionCompleted(event: any ){
    //this.router.navigate(['/products/watches'],{queryParams:{'price': this.selectedPrice}});
  }

}
