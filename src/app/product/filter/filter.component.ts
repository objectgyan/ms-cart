import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{
  selectedPrice = 10;

  selectedText = '';

  constructor(private route: ActivatedRoute,private router: Router) {

  }

  ngOnInit() {
    console.log(this.route.queryParams);
    this.selectedPrice = this.route.queryParams['price'];
    this.route.queryParams.subscribe(params => {
      console.log('invoked ' + params['price']);
  });
  }

  onRangeSelectionCompleted(event: any ){
    this.router.navigate(['/products/watches'],{queryParams:{'price': this.selectedPrice}});
  }
}
