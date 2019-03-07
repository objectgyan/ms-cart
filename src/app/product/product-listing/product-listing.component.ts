import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, ProductModel } from 'src/app/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  category : 'all';
  price : any;
  productList : ProductModel[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.category = params["category"];
      this.onFilterChanged();
      console.log('invoked');
    });

    this.route.queryParams.subscribe(params => {
      this.price = +params["price"];
      this.onFilterChanged();
      console.log('invoked');
  });
  }

  onFilterChanged(){
    this.productService.getAllProducts().
    subscribe( data => {
      this.productList = data.filter(c => c.price <= this.price && c.category.toLowerCase() === this.category.toLowerCase());
    });
  }
}
